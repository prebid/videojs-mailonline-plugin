'use strict';

var baseVideoJsComponent = videojs.getComponent('Component');

var BlackPoster = require('./black-poster')(baseVideoJsComponent);
var utilities = require('../../utils/utilityFunctions');

// VIDLA-4391: Hack to prevent uncaught exception when loading Mail Online plugin into child iframe of video.js window
// VIDLA-4563: Hack for Edge when Brightcove player embed in not friendly iframe
if (parent && window !== parent && utilities.scriptLoadedInIframe()) {
  BlackPoster.constructor = parent.Object.prototype.constructor;
}

videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));
