'use strict';

var path = require('path');
var parseArgs = require('minimist');

var knownOptions = {
  string: 'env',
  default: {env: process.env.NODE_ENV || 'development'}
};
var options = parseArgs(process.argv.slice(2), knownOptions);

module.exports = {

  versions: ['5'],

  options: options,
  env: options.env,
  git: {
    remoteUrl: process.env.GH_TOKEN ? 'https://'+process.env.GH_TOKEN+'@github.com/MailOnline/videojs-vast-vpaid' : 'origin'
  },

  DIST: path.normalize('__dirname/../dist'),
  DEV: path.normalize('__dirname/../dist'),

  testFiles: function testFiles (videojsVersion){
    var dependencies = [];
    videojsVersion = videojsVersion || '5';

    //We add videojs
    dependencies.push('node_modules/video.js/dist/video.js');
    return dependencies.concat([
      'test/test-utils.css',
      'test/**/*.spec.js'
    ]);
  }

};


