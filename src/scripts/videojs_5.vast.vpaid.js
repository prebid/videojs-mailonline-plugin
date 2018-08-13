'use strict';

//@exclude
var videojs = window.videojs || {
	getComponent : function() {},
	extend : function() {},
	registerComponent : function() {},
	registerPlugin : function() {}
};
// @endexclude

window._molSettings = null;

require('./plugin/components/ads-label_5');
require('./plugin/components/black-poster_5');

console.log('Prebid MailOnline plugin version 1.2.7');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

if (videojs.registerPlugin) {
	videojs.registerPlugin('vastClient', videoJsVAST);
}
else {
	videojs.plugin('vastClient', videoJsVAST);
}
