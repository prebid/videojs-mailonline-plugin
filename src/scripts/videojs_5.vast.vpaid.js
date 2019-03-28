'use strict';

/* PROD-EXCLUDE-START */
var videojs = window.videojs || {
	getComponent: function () {},
	extend: function () {},
	registerComponent: function () {},
	registerPlugin: function () {}
};
/* PROD-EXCLUDE-END */

window._molSettings = null;

require('./plugin/components/black-poster_5');
var logger = require('./utils/consoleLogger');

logger.log('Prebid MailOnline plugin version 1.3.14');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

if (videojs.registerPlugin) {
  if (!videojs.getPlugins().vastClient) {
    videojs.registerPlugin('vastClient', videoJsVAST);
  }
} else if (videojs.Player) {
  if (!videojs.Player.prototype.vastClient) {
    videojs.plugin('vastClient', videoJsVAST);
  }
} else if (videojs.plugin) {
  try {
    videojs.plugin('vastClient', videoJsVAST);
  } catch (e) {
    logger.log('*** ERROR: Unable to register MailOnline plugin with VideoJS!');
  }
}

// VIDLA-4391 - Add support for multiple players on the same page, each with a unique MOL plugin loaded from an iFrames
if (parent && window !== parent) {
  window.bc_vastClientFunc = videoJsVAST;
}
