'use strict';

var MimeTypes = require('../../utils/mimetypes');
var VASTError = require('../vast/VASTError');
var VASTResponse = require('../vast/VASTResponse');
var VASTTracker = require('../vast/VASTTracker');
var vastUtil = require('../vast/vastUtil');

var VPAIDAdUnitWrapper = require('./VPAIDAdUnitWrapper');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

var logger = require ('../../utils/consoleLogger');

function VPAIDIntegrator(player, settings) {
  if (!(this instanceof VPAIDIntegrator)) {
    return new VPAIDIntegrator(player);
  }

  this.VIEW_MODE = {
    NORMAL: 'normal',
    FULLSCREEN: "fullscreen",
    THUMBNAIL: "thumbnail"
  };
  this.player = player;
  this.containerEl = createVPAIDContainerEl(player);
  this.options = {
    responseTimeout: 5000,
    VPAID_VERSION: '2.0'
  };
  this.settings = settings;
  
  this.contentSource = player.tech_.el_.src;
  this.needsShowPlayer = false;
  
  this.errorHasBeenTracked = false;
  this.adFinished = false;
  
  this.timeUpdateTimer = null;
  
  /*** Local functions ***/

  function createVPAIDContainerEl() {
    var containerEl = document.createElement('div');
    containerEl.id = 'BC-VPAID-container';
    dom.addClass(containerEl, 'VPAID-container');
    player.el().insertBefore(containerEl, player.controlBar.el());
    return containerEl;
  }
}

VPAIDIntegrator.prototype.playAd = function playVPaidAd(vastResponse, callback) {
  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('on VASTIntegrator.playAd, missing required VASTResponse'));
  }

  var that = this;
  var player = this.player;
  logger.debug ("<VPAIDIntegrator.playAd> looking for supported tech...");
  var tech = this._findSupportedTech(vastResponse, this.settings);

  callback = callback || utilities.noop;

  this._adUnit = null;

  dom.addClass(player.el(), 'vjs-vpaid-ad');
  
  player.on('vast.adsCancel', triggerVpaidAdEnd);
  player.one('vpaid.adEnd', function(){
    player.off('vast.adsCancel', triggerVpaidAdEnd);
    removeAdUnit();
  });

  if (tech) {
    logger.info ("<VPAIDIntegrator.playAd> found tech: ", tech);

    async.waterfall([
      function (next) {
        next(null, tech, vastResponse);
      },
      this._loadAdUnit.bind(this),
      this._playAdUnit.bind(this),
      this._finishPlaying.bind(this)

    ], adComplete);

    this._adUnit = {
      _paused: true,
      type: 'VPAID',
      pauseAd: function() {
        player.trigger('vpaid.pauseAd');
        player.pause(true);//we make sure that the video content gets stopped.
      },
      resumeAd: function() {
          player.trigger('vpaid.resumeAd');
      },
      isPaused: function() {
        return this._paused;
      },
      getSrc: function() {
        return tech.mediaFile;
      }
    };

  } else {
    logger.debug ("<VPAIDIntegrator.playAd> could not find suitable tech");
    var error = new VASTError('on VPAIDIntegrator.playAd, could not find a supported mediaFile', 403);
    adComplete(error, this._adUnit, vastResponse);
  }

  return this._adUnit;

  /*** Local functions ***/
  function adComplete(error, adUnit, vastResponse) {
    if (error && vastResponse) {
      that._trackError(vastResponse, error.code);
    }
    player.trigger('vpaid.adEnd');
    callback(error, vastResponse);
  }

  function triggerVpaidAdEnd(){
	    //player.trigger('stopAd');
    player.trigger('vpaid.adEnd');
  }

  function removeAdUnit() {
    if (tech) {
      console.log('[BC-MOL] VPAIDIntegrator->Calling unloadAdUnit (implicitly invokes stopAd and unsubscribes VPAID events)');
      tech.unloadAdUnit();
    }
    dom.removeClass(player.el(), 'vjs-vpaid-ad');
  }
};

VPAIDIntegrator.prototype._findSupportedTech = function (vastResponse, settings) {
  if (!(vastResponse instanceof VASTResponse)) {
    return null;
  }

  var vpaidMediaFiles = vastResponse.mediaFiles.filter(vastUtil.isVPAID);
  var preferredTech = settings && settings.preferredTech;
  var skippedSupportTechs = [];
  var i, len, mediaFile, VPAIDTech, isPreferedTech;

  for (i = 0, len = vpaidMediaFiles.length; i < len; i += 1) {
    mediaFile = vpaidMediaFiles[i];
    VPAIDTech = vastUtil.findSupportedVPAIDTech(mediaFile.type);

    // no supported VPAID tech found, skip mediafile
    if (!VPAIDTech) { continue; }

    // do we have a prefered tech, does it play this media file ?
    isPreferedTech = preferredTech ?
      (mediaFile.type === preferredTech || (MimeTypes[preferredTech] && MimeTypes[preferredTech].indexOf(mediaFile.type) > -1 )) :
      false;

    // our prefered tech can read this mediafile, defaulting to it.
    if (isPreferedTech) {
      return new VPAIDTech(mediaFile, settings);
    }

    skippedSupportTechs.push({ mediaFile: mediaFile, tech: VPAIDTech });
  }

  if (skippedSupportTechs.length) {
    var firstTech = skippedSupportTechs[0];
    return new firstTech.tech(firstTech.mediaFile, settings);
  }

  return null;
};

VPAIDIntegrator.prototype._createVPAIDAdUnitWrapper = function(adUnit, src, responseTimeout, player) {
	return new VPAIDAdUnitWrapper(adUnit, {src: src, responseTimeout: responseTimeout, player: player});
};

VPAIDIntegrator.prototype._loadAdUnit = function (tech, vastResponse, next) {
  var that = this;
  var player = this.player;
  var vjsTechEl = player.el().querySelector('.vjs-tech');
  //var responseTimeout = this.settings.responseTimeout || this.options.responseTimeout;
  var responseTimeout = this.settings.adCancelTimeout || this.options.responseTimeout;
  tech.loadAdUnit(this.containerEl, vjsTechEl, function (error, adUnit) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    try {
      var frms = document.getElementsByTagName('IFRAME');
      if (frms && frms.length > 0) {
        frms[0].addEventListener('mouseover', function() {
          //console.log("****** user activity");
            player.userActive(true);
            if (!dom.hasClass(player.el(), 'vjs-has-started')) {
                dom.addClass(player.el(), 'vjs-has-started');
            }
          });
        }
        player.trigger({type: 'trace.message', data: {message: 'Playing ' + tech.mediaFile.src + ' (type = ' + tech.mediaFile.type + 
      	  ', apiFramework = ' + tech.mediaFile.apiFramework + ')'}});
      var WrappedAdUnit = that._createVPAIDAdUnitWrapper(adUnit, tech.mediaFile.src, responseTimeout, player);
      var techClass = 'vjs-' + tech.name + '-ad';
      dom.addClass(player.el(), techClass);
      player.one('vpaid.adEnd', function() {
        dom.removeClass(player.el(),techClass);
      });
      next(null, WrappedAdUnit, vastResponse);
    } catch (e) {
      next(e, adUnit, vastResponse);
    }
  });
};

VPAIDIntegrator.prototype._playAdUnit = function (adUnit, vastResponse, callback) {
  async.waterfall([
    function (next) {
      next(null, adUnit, vastResponse);
    },
    this._handshake.bind(this),
    this._setupEvents.bind(this),
    this._initAd.bind(this),
    //this._setupEvents.bind(this),
    this._addSkipButton.bind(this),
    this._linkPlayerControls.bind(this),
    this._startAd.bind(this)
  ], callback);
};

VPAIDIntegrator.prototype._handshake = function handshake(adUnit, vastResponse, next) {
  adUnit.handshakeVersion(this.options.VPAID_VERSION, function (error, version) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    if (version && isSupportedVersion(version)) {
      return next(null, adUnit, vastResponse);
    }

    return next(new VASTError('on VPAIDIntegrator._handshake, unsupported version "' + version + '"'), adUnit, vastResponse);
  });

  function isSupportedVersion(version) {
    var majorNum = major(version);
    return majorNum >= 1 && majorNum <= 2;
  }

  function major(version) {
    var parts = version.split('.');
    return parseInt(parts[0], 10);
  }
};

VPAIDIntegrator.prototype._initAd = function (adUnit, vastResponse, next) {
  var tech = this.player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  adUnit.initAd(dimension.width, dimension.height, this.VIEW_MODE.NORMAL, -1, {AdParameters: vastResponse.adParameters || ''}, function (error) {
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._createVASTTracker = function(adUnitSrc, vastResponse) {
  return new VASTTracker(adUnitSrc, vastResponse);
};

VPAIDIntegrator.prototype._setupEvents = function (adUnit, vastResponse, next) {
  var adUnitSrc = adUnit.options.src;
  var tracker = this._createVASTTracker(adUnitSrc, vastResponse);
  var player = this.player;
  var contentSource = this.contentSource;
  var that = this;
  
  this.tracker = tracker;
  
  this.impressionTriggered = false;

  adUnit.on('AdSkipped', function () {
	  	player.trigger({type: 'trace.event', data: {event: 'vpaid.AdSkipped'}});
	      if (window.MoatApiReference) {
	    	  window.MoatApiReference.dispatchEvent({type: 'AdSkipped', adVolume: player.volume()});
	      }
    player.trigger('vpaid.AdSkipped');
    tracker.trackSkip();
    playerUtils.showBigPlayButton(player, false);
    
    // VIDLA-2676 - force player to clean resources
	setTimeout(function() {
        player.trigger('vast.adsCancel');
	}, 300);
    //player.trigger('adStop');
  });

  function triggerImpression() {
	  if (!that.impressionTriggered) {
		  that.impressionTriggered = true;
	      if (window.MoatApiReference) {
	    	  window.MoatApiReference.dispatchEvent({type: 'AdImpression', adVolume: player.volume()});
	      }
		  player.trigger({type: 'trace.event', data: {event: 'vpaid.AdImpression'}});
		  player.trigger('vpaid.AdImpression');
		  tracker.trackImpressions();
	  }
  }
  adUnit.on('AdImpression', function () {
	  triggerImpression();
  });

  adUnit.on('AdStarted', function () {
	  if (adUnit.adStarted) {
		  // ignore second AdStarted event
		  return;
	  }
    if (window._molSettings.viewabilityTracking) {
      window._molSettings.viewabilityTracking.init(window._molSettings.viewability.contextId, 
          player.duration(), player.el_.offsetWidth, player.el_.offsetHeight);
    }
    adUnit.adStarted = true;
    if (!dom.hasClass(player.el(), 'vjs-has-started')) {
      dom.addClass(player.el(), 'vjs-has-started');
    }
    player.trigger('vpaid.AdStarted');
    tracker.trackCreativeView();
    if (!window._molSettings.playsInBreak && adUnit.getAdDuration) {
      adUnit.getAdDuration(function(that, dur) {
        if (dur > 0) {
          player.duration(dur);
        }
      });
    }
  	triggerImpression();
    notifyPlayToPlayer();
    player.one('adStop', function() {
      if (adUnit.stopAd) {
        adUnit.stopAd(utilities.noop);
      }
    });
    
    if (utilities.isIDevice()) {
    	// VIDLA-2836 (Ad click thru does not landing click thru url)
    	// iPhone and iPad
    	var elems = document.getElementsByClassName('vjs-resize-manager');
    	if (elems && elems.length > 0) {
    		var parent = elems[0].parentElement;
    		if (parent) {
    			parent.removeChild(elems[0]);
    		}
    	}
    }

  });

  function updateTimeControls() {
	  	var convertTimeToStr = function(time) {
			var secs = parseInt(time + 0.5);
			var mins = parseInt(secs / 60);
			secs -= (mins * 60);
			var str = mins.toString() + ':' + (secs > 9 ? ''  : '0') + secs.toString();
			return str;
		};
		
		var bcTimeDisplay = document.getElementById('bc_time_display');
		if (!bcTimeDisplay) {
			bcTimeDisplay = document.createElement('div');
			player.controlBar.getChild('currentTimeDisplay').el_.appendChild(bcTimeDisplay);
			bcTimeDisplay.id = 'bc_time_display';
			bcTimeDisplay.class = 'vjs-current-time-display';
			bcTimeDisplay['aria-live'] = 'off';
			bcTimeDisplay.innerHTML = '<span class="vjs-control-text"></span>0:00';
			player.controlBar.getChild('currentTimeDisplay').el_.children[0].style.display = 'none';
		}
		else {
			player.controlBar.getChild('currentTimeDisplay').el_.children[0].style.display = 'none';
			bcTimeDisplay.style.display = 'block';
		}
		adUnit.getAdRemainingTime(function(that, time) {
			if (time >= 0) {
				var curTime = player.duration() - time;
				if (curTime >= 0) {
					bcTimeDisplay.childNodes[1].nodeValue = convertTimeToStr(curTime);
				}
			}
		});
  }
	  
  adUnit.on('AdVideoStart', function () {
	  player.trigger({type: 'trace.event', data: {event: 'AdVideoStart'}});
      if (window.MoatApiReference) {
    	  window.MoatApiReference.dispatchEvent({type: 'AdVideoStart', adVolume: player.volume()});
      }

    player.trigger('vpaid.AdVideoStart');
    tracker.trackStart();
	if (!window._molSettings.playsInBreak && adUnit.getAdDuration) {
		adUnit.getAdDuration(function(that, dur) {
			if (dur > 0) {
				player.duration(dur);
			}
		});
	}
    notifyPlayToPlayer();
    playerUtils.showBigPlayButton(player, false);
    if (utilities.isMobile()) {
        // VIDLA-2336 (simulate user activity to make sure control bar is visible on mobile devices)
        for (var i = 0; i < 4; i++) {
        	setTimeout(function() {
        		document.getElementsByTagName('IFRAME')[0].dispatchEvent(new Event('mouseover'));
        	}, i * 1000);
        }
    }
    if (contentSource === player.tech_.el_.src) {
        player.trigger({type: 'trace.message', data: {message: 'VPAID creative uses its own video tag'}});
        //player.tech_.el_.style.display = 'none';
        //player.controlBar.hide();
        that.needsShowPlayer = true;
    	if (!window._molSettings.playsInBreak) {
    		that.timeUpdateTimer = setInterval(updateTimeControls, 500);
    	}
    }
  });

  adUnit.on('AdPlaying', function () {
	  if (that.adFinished) {
		  return;
	  }
      if (window.MoatApiReference) {
    	  window.MoatApiReference.dispatchEvent({type: 'AdPlaying', adVolume: player.volume()});
      }
    player.trigger('vpaid.AdPlaying');
    tracker.trackResume();
    notifyPlayToPlayer();
    playerUtils.showBigPlayButton(player, false);
  });

  adUnit.on('AdPaused', function () {
	  if (that.adFinished) {
		  return;
	  }
      if (window.MoatApiReference) {
    	  window.MoatApiReference.dispatchEvent({type: 'AdPaused', adVolume: player.volume()});
      }
    player.trigger('vpaid.AdPaused');
    tracker.trackPause();
    notifyPauseToPlayer();
	  var iframeBackButton = window.document.getElementById('iframeBackButton');
	  if (iframeBackButton) {
		  playerUtils.showBigPlayButton(player, false);
		  return;
	  }
    playerUtils.showBigPlayButton(player, true);
  });

  function notifyPlayToPlayer(){
    if(that._adUnit && that._adUnit.isPaused()){
      that._adUnit._paused = false;
    }
    player.trigger('play');

  }

  function notifyPauseToPlayer() {
    if(that._adUnit){
      that._adUnit._paused = true;
    }
    player.trigger('pause');
  }

  adUnit.on('AdVideoFirstQuartile', function () {
	  if (that.adFinished) {
		  return;
	  }
		player.trigger({type: 'trace.event', data: {event: 'vpaid.AdVideoFirstQuartile'}});
    if (window.MoatApiReference) {
    	window.MoatApiReference.dispatchEvent({type: 'AdVideoFirstQuartile', adVolume: player.volume()});
    }
    player.trigger('vpaid.AdVideoFirstQuartile');
    tracker.trackFirstQuartile();
  });

  adUnit.on('AdVideoMidpoint', function () {
	  if (that.adFinished) {
		  return;
	  }
		player.trigger({type: 'trace.event', data: {event: 'vpaid.AdVideoMidpoint'}});
    if (window.MoatApiReference) {
    	window.MoatApiReference.dispatchEvent({type: 'AdVideoMidpoint', adVolume: player.volume()});
    }
    player.trigger('vpaid.AdVideoMidpoint');
    tracker.trackMidpoint();
  });

  adUnit.on('AdVideoThirdQuartile', function () {
	  if (that.adFinished) {
		  return;
	  }
		player.trigger({type: 'trace.event', data: {event: 'vpaid.AdVideoThirdQuartile'}});
    if (window.MoatApiReference) {
    	window.MoatApiReference.dispatchEvent({type: 'AdVideoThirdQuartile', adVolume: player.volume()});
    }
    player.trigger('vpaid.AdVideoThirdQuartile');
    tracker.trackThirdQuartile();
  });

  adUnit.on('AdVideoComplete', function () {
	  if (that.adFinished) {
		  return;
	  }
		player.trigger({type: 'trace.event', data: {event: 'vpaid.AdVideoComplete'}});
    player.trigger('vpaid.AdVideoComplete');
    tracker.trackComplete();
    playerUtils.showBigPlayButton(player, false);
    if (window.MoatApiReference) {
  	  window.MoatApiReference.dispatchEvent({type: 'AdVideoComplete', adVolume: player.volume()});
    }
    // VIDLA-2406 forse ad to stop
    if (adUnit.stopAd) {
      adUnit.stopAd(utilities.noop);
    }
  });

  adUnit.on('AdClickThru', function (data) {
	  if (that.adFinished) {
		  return;
	  }
	  var enableFullscreenClickIFrame = false;
	player.trigger({type: 'trace.event', data: {event: 'vpaid.AdClickThru'}});
      if (window.MoatApiReference) {
    	  window.MoatApiReference.dispatchEvent({type: 'AdClickThru', adVolume: player.volume()});
      }
    player.trigger('vpaid.AdClickThru');
    var url = data.url;
    var playerHandles = data.playerHandles;
    var clickThruUrl = utilities.isNotEmptyString(url) ? url : generateClickThroughURL(vastResponse.clickThrough);

	if (playerHandles && window._molSettings.disableClickThru) {
		return;
	}
	
    tracker.trackClick();
    if (playerHandles && clickThruUrl) {
    	if (player.isFullscreen() && enableFullscreenClickIFrame) {
    		addClickThroughDivBlocker(clickThruUrl);
    	}
    	else {
    		window.open(clickThruUrl, '_blank');
    	}
    }
    
    // VIDLA-2269 (Ad does not pause when browsing out to a click url from a vpaid ad)
    adUnit.pauseAd(utilities.noop);

    function generateClickThroughURL(clickThroughMacro) {
      var variables = {
        ASSETURI: adUnit.options.src,
        CONTENTPLAYHEAD: 0 //In VPAID there is no method to know the current time from the adUnit
      };

      return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : null;
    }
  });

  adUnit.on('AdUserAcceptInvitation', function () {
		player.trigger({type: 'trace.event', data: {event: 'vpaid.AdUserAcceptInvitation'}});
    player.trigger('vpaid.AdUserAcceptInvitation');
    tracker.trackAcceptInvitation();
    tracker.trackAcceptInvitationLinear();
  });

  adUnit.on('AdUserClose', function () {
		player.trigger({type: 'trace.event', data: {event: 'vpaid.AdUserClose'}});
	      if (window.MoatApiReference) {
	    	  window.MoatApiReference.dispatchEvent({type: 'AdUserClose', adVolume: player.volume()});
	      }
    player.trigger('vpaid.AdUserClose');
    tracker.trackClose();
    tracker.trackCloseLinear();
  });

  adUnit.on('AdUserMinimize', function () {
		player.trigger({type: 'trace.event', data: {event: 'vpaid.AdUserMinimize'}});
    player.trigger('vpaid.AdUserMinimize');
    tracker.trackCollapse();
  });

  adUnit.on('AdError', function () {
	  if (that.adFinished) {
		  return;
	  }
	  // VIDLA-2389 suppress eror tracking after ad impression has been reported
	  if (!that.impressionTriggered && !that.errorHasBeenTracked) {
		  player.trigger({type: 'trace.event', data: {event: 'vpaid.AdError'}});
	      if (window.MoatApiReference) {
	    	  window.MoatApiReference.dispatchEvent({type: 'AdError', adVolume: player.volume()});
	      }
	      player.trigger('vpaid.AdError');
	    //NOTE: we track errors code 901, as noted in VAST 3.0
	    tracker.trackErrorWithCode(901);
	    that.errorHasBeenTracked = true;
	  }
	  playerUtils.showBigPlayButton(player, false);
  });

  adUnit.on('AdVolumeChange', function () {
		player.trigger({type: 'trace.event', data: {event: 'vpaid.AdVolumeChange'}});
    player.trigger('vpaid.AdVolumeChange');
    var lastVolume = player.volume();
    adUnit.getAdVolume(function (error, currentVolume) {
      if (lastVolume !== currentVolume) {
        if (currentVolume === 0 && lastVolume > 0) {
          tracker.trackMute();
        }

        if (currentVolume > 0 && lastVolume === 0) {
          tracker.trackUnmute();
        }

        player.volume(currentVolume);
      }
    });
  });

  adUnit.on('AdSizeChange', function () {
	  if (player.vast && player.vast.needSyncPlay) {
		  if (player.paused() !== player.tech_.el_.paused) {
			  if (player.tech_.el_.paused) {
				  if (window.MoatApiReference) {
			    	  window.MoatApiReference.dispatchEvent({type: 'AdPaused', adVolume: player.volume()});
				  }
				  notifyPauseToPlayer();
				  playerUtils.showBigPlayButton(player, true);
			  }
			  else {
				  if (window.MoatApiReference) {
			    	  window.MoatApiReference.dispatchEvent({type: 'AdPlaying', adVolume: player.volume()});
				  }
				  notifyPlayToPlayer();
				  playerUtils.showBigPlayButton(player, false);
			  }
		  }
		  player.vast.needSyncPlay = false;
	  } 
  });

  function addClickThroughDivBlocker(clickThruUrl) {
	  var blocker = createClickThroughDiv(player, clickThruUrl);
	  var iFrame;
	  var iFrameBackButton;

	  player.el().insertBefore(blocker, player.controlBar.el());

	  player.on('fullscreenchange', updateDisplayStyle);

	  function createClickThroughDiv(player, url) {
	    var blocker = window.document.createElement("div");

	    dom.addClass(blocker, 'vast-blocker');

	    if (window.MoatApiReference) {
    	  window.MoatApiReference.dispatchEvent({type: 'AdClickThru', adVolume: player.volume()});
	    }
      
	    // create IFrame with back button
	    iFrame = window.document.createElement("iframe");
	    dom.addClass(iFrame, 'vast-blocker');
	    iFrame.src = url;
	    blocker.appendChild(iFrame);
	  
	    iFrameBackButton = window.document.createElement("div");
	    dom.addClass(iFrameBackButton, "vast-back-button");
	    dom.addClass(iFrameBackButton, 'enabled');
	    iFrameBackButton.innerHTML = "Back";
	    iFrameBackButton.id = 'iframeBackButton';
	    blocker.appendChild(iFrameBackButton);
	    iFrameBackButton.addEventListener ("click", function(e) {
		  // show controls
		  var skipButton = window.document.getElementById('adSkipButton');
		  if (skipButton) {
			  skipButton.style.display = 'block'; 
		  }
		  player.controls(true);
		  
		  player.el().removeChild(blocker);
		  resumeAdUnit();
		  
		  if (window.Event.prototype.stopPropagation !== undefined) {
	          e.stopPropagation();
		  }
	    });
		  
	    // hide controls
	    setTimeout(function() {
		  playerUtils.showBigPlayButton(player, false);
	    }, 1);
	    var skipButton = window.document.getElementById('adSkipButton');
	    if (skipButton) {
		  skipButton.style.display = 'none'; 
	    }
	    player.controls(false);

	    return blocker;
	  }

	  function updateDisplayStyle() {
		  if (!player.isFullscreen()) {			  
			  playerUtils.showBigPlayButton(player, true);
			  var skipButton = window.document.getElementById('adSkipButton');
			  if (skipButton) {
				  skipButton.style.display = 'none'; 
			  }
			  player.controls(true);
			  player.el().removeChild(blocker);
			  resumeAdUnit();
		  }
	  }
  }

  var updateViewSize = resizeAd.bind(this, player, adUnit, this.VIEW_MODE);
  var updateViewSizeThrottled = utilities.throttle(updateViewSize, 100);
  var autoResize = this.settings.autoResize;

  if (autoResize) {
    dom.addEventListener(window, 'resize', updateViewSizeThrottled);
    dom.addEventListener(window, 'orientationchange', updateViewSizeThrottled);
  }

  player.on('vast.resize', updateViewSize);
  player.on('vpaid.pauseAd', pauseAdUnit);
  player.on('vpaid.resumeAd', resumeAdUnit);
  player.on('stopAd', stopAdUnit);

  player.one('vpaid.adEnd', function () {
    player.off('vast.resize', updateViewSize);
    player.off('vpaid.pauseAd', pauseAdUnit);
    player.off('vpaid.resumeAd', resumeAdUnit);
    player.off('stopAd', stopAdUnit);

    if (autoResize) {
      dom.removeEventListener(window, 'resize', updateViewSizeThrottled);
      dom.removeEventListener(window, 'orientationchange', updateViewSizeThrottled);
    }
  });

  next(null, adUnit, vastResponse);

  /*** Local Functions ***/
  function pauseAdUnit() {
    adUnit.pauseAd(utilities.noop);
  }

  function resumeAdUnit() {
    adUnit.resumeAd(utilities.noop);
  }
  
  function stopAdUnit() {
    if (adUnit.stopAd) {
      adUnit.stopAd(utilities.noop);
    }
  }
};

VPAIDIntegrator.prototype._addSkipButton = function (adUnit, vastResponse, next) {
  var skipButton;
  var player = this.player;
  var tracker = this.tracker;

  // VIDLA-2084 (publisher-specified SKIP behavior for VPAID creatives)
  var that = this;
  var skipOffsetInSec;
  var duration;
  var remainingTime;
  var progressInterval;
  if (!window._molSettings.disableSkippability) {
	  if (vastResponse.skipoffset && utilities.isNumber(vastResponse.skipoffset)) {
		  skipOffsetInSec = vastResponse.skipoffset / 1000;
		  pubAddSkipButtonToPlayer(player, skipOffsetInSec);
	  }
	  else {
		  // check if publisher had explicitly disable skippability
		  var disableSkippabilityByPublisher = false;
		  if (window._molSettings && window._molSettings.skippable) {
			  if (window._molSettings.skippable.enabled === false) {
				  disableSkippabilityByPublisher = true; 
			  }
			  if (vastResponse.duration && window._molSettings.skippable.videoThreshold && 
				  vastResponse.duration < window._molSettings.skippable.videoThreshold) {
				  disableSkippabilityByPublisher = true; 
			  }
		  }
		  if (!disableSkippabilityByPublisher) {
			  adUnit.on('AdSkippableStateChange', updateSkipButtonState);
			  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);
		  }
	  }
  }

  next(null, adUnit, vastResponse);

  /*** Local function ***/
  function updateSkipButtonState() {
    player.trigger('vpaid.AdSkippableStateChange');
    adUnit.getAdSkippableState(function (error, isSkippable) {
      if (isSkippable) {
        if (!skipButton) {
          addSkipButton(player);
        }
      } else {
        removeSkipButton(player);
      }
    });
  }

  function addSkipButton(player) {
    skipButton = createSkipButton(player);
    player.el().appendChild(skipButton);
  }

  function removeSkipButton() {
    dom.remove(skipButton);
    skipButton = null;
  }

  function createSkipButton() {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");
    dom.addClass(skipButton, "enabled");
    //skipButton.innerHTML = "Skip ad";
    skipButton.innerHTML = window._molSettings.skipButtonText;
    skipButton.id = 'adSkipButton';

    skipButton.onclick = function (e) {
        adUnit.getAdSkippableState(function (error, isSkippable) {
            if (isSkippable) {
                adUnit.skipAd(utilities.noop);//We skip the adUnit
            } else {
            	tracker.trackSkip();
                adUnit.stopAd(utilities.noop);
            }
          });
      //adUnit.skipAd(utilities.noop);//We skip the adUnit

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }
	
	// VIDLA-2084 (publisher-specified SKIP behavior for VPAID creatives)
	// EN - support publisher SKIP settings
	/*** Local function ***/
	function pubAddSkipButtonToPlayer(player, skipOffset) {
	  var skipButton = pubCreateSkipButton(player);
	  var updateSkipButton = pubUpdateSkipButtonState.bind(that, skipButton, skipOffset);
	
	  player.el().appendChild(skipButton);
	  //player.on('timeupdate', updateSkipButton);
	  progressInterval = setInterval(updateSkipButton, 500);
	
	  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], pubRemoveSkipButton);
	
	  function removeSkipButton() {
	    //player.off('timeupdate', updateSkipButton);
	    dom.remove(skipButton);
	    skipButton = null;
	  }
	
	  function pubRemoveSkipButton() {
		  if (progressInterval) {
			  clearInterval(progressInterval);
			  progressInterval = null;
		  }
		  removeSkipButton();
	  }
	}
	
	function pubCreateSkipButton(player) {
	  var skipButton = window.document.createElement("div");
	  dom.addClass(skipButton, "vast-skip-button");
	  skipButton.style.display = 'none';
	  skipButton.id = 'adSkipButton';
	
	  skipButton.onclick = function (e) {
	    if (dom.hasClass(skipButton, 'enabled')) {
	        adUnit.getAdSkippableState(function (error, isSkippable) {
                adUnit.skipAd(utilities.noop);//We skip the adUnit
	            if (!isSkippable) {
	            	tracker.trackSkip();
	                adUnit.stopAd(utilities.noop);
	            	setTimeout(function() {
		                player.trigger('vast.adsCancel');
	            	}, 1);
	            }
	          });
	        //adUnit.skipAd(utilities.noop);//We skip the adUnit
	    }
	    playerUtils.showBigPlayButton(player, false);
	
	    //We prevent event propagation to avoid problems with the clickThrough and so on
	    if (window.Event.prototype.stopPropagation !== undefined) {
	      e.stopPropagation();
	    } else {
	      return false;
	    }
	  };
	
	  return skipButton;
	}
	
	function pubUpdateSkipButtonState(skipButton, skipOffset) {
		//var timeLeft = Math.ceil(skipOffset - player.currentTime());
		adUnit.getAdDuration(function(that, dur) {
			if (dur > 0) {
				duration = dur;
			}
		});
		adUnit.getAdRemainingTime(function(that, time) {
			remainingTime = time; 
		});
		if (!duration || !remainingTime) {
			return;
		}
		//console.log("******: skipOffset = " + skipOffset + ", duration = " + duration + ", remainingTime = " + remainingTime);
		//var remainingTime = adUnit._adUnit.getAdRemainingTime();
		var timeLeft = Math.ceil(skipOffset - (duration - remainingTime));
	  if (timeLeft > 0) {
	      skipButton.innerHTML = '<p class="vast-skip-button-text">' + window._molSettings.skipText.replace('%%TIME%%', utilities.toFixedDigits(timeLeft, 2)) + '</p>';
	  } else {
	    if (!dom.hasClass(skipButton, 'enabled')) {
	      dom.addClass(skipButton, 'enabled');
	      skipButton.innerHTML = window._molSettings.skipButtonText;
	    }
	  }
	  var iframeBackButton = window.document.getElementById('iframeBackButton');
	  if (!iframeBackButton) {
		  if (player.isFullscreen() && utilities.isAndroid()) {
			  skipButton.style.display = 'none';
			  return;
		  }
		  skipButton.style.display = 'block';
	  }
	  //skipButton.style.display = 'block';
	}
};

VPAIDIntegrator.prototype._linkPlayerControls = function (adUnit, vastResponse, next) {
  var that = this;
  linkVolumeControl(this.player, adUnit);
  linkFullScreenControl(this.player, adUnit, this.VIEW_MODE);

  next(null, adUnit, vastResponse);

  /*** Local functions ***/
  function linkVolumeControl(player, adUnit) {
    player.on('volumechange', updateAdUnitVolume);
    adUnit.on('AdVolumeChange', updatePlayerVolume);

    player.one('vpaid.adEnd', function () {
      player.off('volumechange', updateAdUnitVolume);
    });


    /*** local functions ***/
    function updateAdUnitVolume() {
      var vol = player.muted() ? 0 : player.volume();
      adUnit.setAdVolume(vol, logError);
    }

    function updatePlayerVolume() {
	  if (window.MoatApiReference) {
		  	window.MoatApiReference.dispatchEvent({type: 'AdVolumeChange', adVolume: player.volume()});
	  }
      player.trigger('vpaid.AdVolumeChange');
      var lastVolume = player.volume();
      adUnit.getAdVolume(function (error, vol) {
        if (error) {
          logError(error);
        } else {
          if (lastVolume !== vol) {
            player.volume(vol);
          }
        }
      });
    }
  }

  function linkFullScreenControl(player, adUnit, VIEW_MODE) {
    var updateViewSize = resizeAd.bind(that, player, adUnit, VIEW_MODE);

    player.on('fullscreenchange', updateViewSize);

    player.one('vpaid.adEnd', function () {
      player.off('fullscreenchange', updateViewSize);
    });
  }
};

VPAIDIntegrator.prototype._startAd = function (adUnit, vastResponse, next) {
  var player = this.player;
  var alreadyGotAdStarted = adUnit.adStarted;

  if (alreadyGotAdStarted) {
	  player.trigger('vast.adStart');
	  player.trigger({type: 'trace.event', data: {event: 'vpaid.AdStarted'}});
  }
  adUnit.startAd(function (error) {
    if (!error && !alreadyGotAdStarted) {
      player.trigger('vast.adStart');
    }
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._finishPlaying = function (adUnit, vastResponse, next) {
  var player = this.player;
  var that = this;
  adUnit.on('AdStopped', function () {
    if (window.MoatApiReference) {
    	  window.MoatApiReference.dispatchEvent({type: 'AdStopped', adVolume: player.volume()});
     }
   player.trigger('vpaid.AdStopped');
   finishPlayingAd(null);
  });

  adUnit.on('AdError', function (error) {
     if (that.impressionTriggered) {
        finishPlayingAd(null);
    }
    else {
    	var errMsg = error? error.message : 'on VPAIDIntegrator, error while waiting for the adUnit to finish playing';
        finishPlayingAd(new VASTError(errMsg));
    }
  });

  /*** local functions ***/
  var needsShowPlayer = this.needsShowPlayer;
  function finishPlayingAd(error) {
	  that.adFinished = true;
		playerUtils.showBigPlayButton(player, false);
		if (needsShowPlayer) {
			if (that.timeUpdateTimer) {
				clearInterval(that.timeUpdateTimer);
				that.timeUpdateTimer = null;
				var bcTimeDisplay = document.getElementById('bc_time_display');
				if (bcTimeDisplay) {
					player.controlBar.getChild('currentTimeDisplay').el_.removeChild(bcTimeDisplay);
				}
				player.controlBar.getChild('currentTimeDisplay').el_.children[0].style.display = '';
			}
	        player.controlBar.show();
			player.tech_.el_.style.display = 'block';
		}
    next(error, adUnit, vastResponse);
  }
};

VPAIDIntegrator.prototype._trackError = function trackError(response, errorCode) {
	if (!this.errorHasBeenTracked) {
		this.errorHasBeenTracked = true;
		vastUtil.track(response.errorURLMacros, {ERRORCODE: errorCode || 901});
	}
};

function resizeAd(player, adUnit, VIEW_MODE) {
	var skipButton = document.getElementById('adSkipButton');
  var tech = player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  var MODE = player.isFullscreen() ? VIEW_MODE.FULLSCREEN : VIEW_MODE.NORMAL;
  if (MODE === VIEW_MODE.NORMAL) {
    if (player.vast) {
      player.vast.needSyncPlay = true;
    }
	  dimension.width = player.el_.offsetWidth;
	  dimension.height = player.el_.offsetHeight;
	  if (utilities.isAndroid() && skipButton) {
		  skipButton.style.display = 'block';
	  }
  }
  if (MODE === VIEW_MODE.FULLSCREEN) {
	  console.log('****** to fullscreen dimension = ' + dimension.width + ',' + dimension.height);
	  if (utilities.isAndroid() && skipButton) {
		  skipButton.style.display = 'none';
	  }
  }
  adUnit.resizeAd(dimension.width, dimension.height, MODE, logError);
}

function logError(error) {
  if (error) {
    logger.error ('ERROR: ' + error.message, error);
  }
}

module.exports = VPAIDIntegrator;
