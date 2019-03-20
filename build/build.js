'use strict';

var clone       = require('gulp-clone');
var cssnano     = require('gulp-cssnano');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var lazypipe    = require('lazypipe');
var path        = require('path');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var sass        = require('gulp-sass');
var size        = require('gulp-size');
var sourcemaps  = require('gulp-sourcemaps');

var webpack = require('webpack');
var gutil = require('gutil');

var webpack_config_dev = require('../webpack.dev.js')(null, null);
var webpack_config_prod = require('../webpack.prod.js')(null, null);

var BuildTaskDoc = require('./BuildTaskDoc');
var config       = require('./config');

var devPath      = path.join(config.DEV, '/');
var distPath     = path.join(config.DIST, '/');
var isProduction = config.env === 'production';

gulp.task('build', function (done) {
  runSequence(
    'build-prod',
    'build-styles',
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


var getWebpackCallback = function getWebpackCallback (done) {
  return function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    else {
      gutil.log('=================== Webpack Build Report ===================\n', stats.toString());
    }
    done();
  };
};

gulp.task('build-dev', function (done) {
  webpack(webpack_config_dev, getWebpackCallback(done));
});

gulp.task('build-prod', function(done) {
  webpack(webpack_config_prod, getWebpackCallback(done));
});

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
    .pipe(size({showFiles: true, title: '[Styles]'}));
});

module.exports = new BuildTaskDoc('build', 'This task builds the plugin', 4);
