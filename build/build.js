'use strict';

var babelify    = require('babelify');
var browserify  = require('browserify');
var buffer      = require('vinyl-buffer');
var clone       = require('gulp-clone');
var cssnano     = require('gulp-cssnano');
var del         = require('del');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var jshint      = require('gulp-jshint');
var lazypipe    = require('lazypipe');
var mergeStream = require('merge-stream');
var path        = require('path');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var sass        = require('gulp-sass');
var size        = require('gulp-size');
var source      = require('vinyl-source-stream');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');

var replace = require('gulp-replace');
var fs = require("fs");
var header = require('gulp-header');


var BuildTaskDoc = require('./BuildTaskDoc');
var config       = require('./config');

var devPath      = path.join(config.DEV, '/');
var distPath     = path.join(config.DIST, '/');
var isProduction = config.env === 'production';

var pkg = require('./../package.json');
var versionText = "v" + pkg.version;
var licenseHeaders = fs.readFileSync('license-bc-mol.txt');
var curDateObj = new Date();
var copyrightText = "(c)" + curDateObj.getUTCFullYear() + " Xandr";
var bannerText = "/*! " + copyrightText + " " + versionText + '\n' + licenseHeaders + "*/\n";


gulp.task('build', function (done) {
  runSequence(
    'clean',
    'lintjs',
    'build-scripts',
    'build-styles',
    'build-assets',
    'test',
    function (error) {
      if (error) {
        console.log(error.message.red);
      } else {
        console.log('BUILD FINISHED SUCCESSFULLY'.green);
      }
      done(error);
    });
});


gulp.task('clean', function (done) {
  var cleanDirs = [config.DEV];
  if(isProduction){
    cleanDirs.push(config.DIST);
  }
  del.sync(cleanDirs, {force: true});
  done();
});


gulp.task('lintjs', function() {
  return gulp.src([
    'gulpfile.js',
    'src/**/*.js',
    'test/**/*.js',
    'demo/**/*.js',
    'build/**/*.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


function buildProdJs() {
  var cloneSink = clone.sink();

  var process = lazypipe()
    .pipe(header, bannerText)
    .pipe(buffer)
    .pipe(function() {return cloneSink;})
    .pipe(sourcemaps.init, {loadMaps: true})
    .pipe(uglify, {compress: false}) // compress needs to be false otherwise it mess the sourcemaps
    .pipe(replace, '</script', '<\\/script')
    .pipe(header, bannerText)
    .pipe(rename, {suffix: '.min'})
    .pipe(sourcemaps.write, './')
    .pipe(cloneSink.tap)
    .pipe(gulp.dest, distPath);

  return process();
}


gulp.task('build-scripts', function() {

  var buildProcesses = config.versions.map(function(version) {

    var fileName  = 'videojs_' + version + '.vast.vpaid.js';
    var entryFile = path.join('src/scripts', fileName);
    var destPath  = path.join(devPath, 'scripts');

    return browserify({
        entries: entryFile,
        debug: true,
        cache: {},
        packageCache: {}
      })
      .bundle()
      .pipe(source(fileName))
      .pipe(gulp.dest(destPath))
      .pipe(replace('</script', '<\\/script'))
      //.pipe(header(bannerText))
      .pipe(gulpif(isProduction, buildProdJs()));

  });

  return mergeStream.apply(this, buildProcesses)
    .pipe(size({showFiles: true, title: '[Scripts]'}));
});


function buildProdCss() {
  var cloneSink = clone.sink();

  var process = lazypipe()
    .pipe(function() {return cloneSink;})
    .pipe(cssnano)
    //.pipe(rename, {suffix: '.min'})
    //.pipe(sourcemaps.write, './')
    .pipe(cloneSink.tap)
    .pipe(gulp.dest, distPath);

  return process();
}

gulp.task('build-styles', function () {

  var entryFile = path.join('src/styles', 'videojs.vast.vpaid.scss');
  var destPath  = path.join(devPath, 'styles');

  return gulp.src(entryFile)
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename(function(path) {
    	path.basename = 'bc_vpaid_vast_mo';
    }))
    .pipe(gulp.dest(destPath))
    .pipe(gulpif(isProduction, buildProdCss()))
    .pipe(size({showFiles: true, title: '[Styles]'}));
});


gulp.task('build-assets', function () {

  var destPath  = path.join(devPath, 'scripts');

  return gulp.src(config.vendor)
    .pipe(size({showFiles: true, title: '[Assets]'}))
    .pipe(gulp.dest(destPath))
    .pipe(gulpif(isProduction, gulp.dest(distPath)));
});


module.exports = new BuildTaskDoc('build', 'This task builds the plugin', 4);
