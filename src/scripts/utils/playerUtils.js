'use strict';

var dom = require('./dom');
var utilities = require('./utilityFunctions');
var logger = require('./consoleLogger');

var playerUtils = {};

/**
 * Returns an object that captures the portions of player state relevant to
 * video playback. The result of this function can be passed to
 * restorePlayerSnapshot with a player to return the player to the state it
 * was in when this function was invoked.
 * @param {object} player The videojs player object
 */
playerUtils.getPlayerSnapshot = function getPlayerSnapshot (player) {
  var tech = player.el().querySelector('.vjs-tech');

  var snapshot = {
    ended: player.ended(),
    src: player.currentSrc(),
    currentTime: player.currentTime(),
    type: player.currentType(),
    playing: !player.paused(),
    suppressedTracks: getSuppressedTracks(player)
  };

  logger.debug('generated snapshot...', snapshot);

  if (snapshot.ended) {
    snapshot.currentTime = player.duration() + 1;
  }

  if (tech) {
    snapshot.nativePoster = tech.poster;
    snapshot.style = tech.getAttribute('style');
  }

  var els;
  // VIDLA-4563: Hack for Edge when Brightcove player embed in not friendly iframe
  if (utilities.scriptLoadedInIframe()) {
    els = parent.document.getElementsByClassName('vjs-dock-text');
  }
  else {
    els = document.getElementsByClassName('vjs-dock-text');
  }
	if (els && els.length > 0) {
	  // Determine which 'vjs-dock-text' element is part of this player
    var tempParents, foundPlayer = false;
    for (var i = 0; i < els.length; i++) {
      tempParents = getParentList(els[i]);
      if (tempParents.indexOf(player.el_) >= 0) {
        foundPlayer = true;
        break;
      }
    }
    if (foundPlayer) {
      snapshot.dockText = els[i];
      snapshot.dockText.style.display = 'none';
    }
  }
  return snapshot;

  // **** Local Functions **** //
  function getSuppressedTracks (player) {
    var tracks = player.remoteTextTracks ? player.remoteTextTracks() : [];

    if (tracks && utilities.isArray(tracks.tracks_)) {
      tracks = tracks.tracks_;
    }

    if (!utilities.isArray(tracks)) {
      tracks = [];
    }

    var suppressedTracks = [];
    tracks.forEach(function (track) {
      suppressedTracks.push({
        track: track,
        mode: track.mode
      });
      track.mode = 'disabled';
    });

    return suppressedTracks;
  }

  function getParentList (element) {
    var parents = [];
    while (element.parentElement) {
      parents.unshift(element.parentElement);
      element = element.parentElement;
    }
    return parents;
  }
};

/**
 * Attempts to modify the specified player so that its state is equivalent to
 * the state of the snapshot.
 * @param {object} snapshot - the player state to apply
 */
playerUtils.restorePlayerSnapshot = function restorePlayerSnapshot (player, snapshot) {
  var tech = player.el().querySelector('.vjs-tech');
  var attempts = 20; // the number of remaining attempts to restore the snapshot

  logger.debug('restoring snapshot...', snapshot);
  if (snapshot.nativePoster) {
    tech.poster = snapshot.nativePoster;
  }

  if ('style' in snapshot) {
    // overwrite all css style properties to restore state precisely
    tech.setAttribute('style', snapshot.style || '');
  }

	if (snapshot.dockText) {
		snapshot.dockText.style.display = 'block';
	}

  // if (hasSrcChanged(player, snapshot)) {

    // on ios7, fiddling with textTracks too early will cause safari to crash
    player.one('contentloadedmetadata', restoreTracks);

    player.one('canplay', tryToResume);
    ensureCanplayEvtGetsFired();

    // if the src changed for ad playback, reset it
    player.src({src: snapshot.src, type: snapshot.type});

    // safari requires a call to `load` to pick up a changed source
    // player.load();	// Safari 11 no more requires 'load'. Firefox doesn't like 'load' call for already loaded content (in case of AdLoaded timeout).

  // } else {
  //   restoreTracks();
  //
  //   if (snapshot.playing) {
  //     player.play();
  //   }
  // }

  // **** Local Functions **** //

  /**
   * Sometimes firefox does not trigger the 'canplay' evt.
   * This code ensure that it always gets triggered triggered.
   */
  function ensureCanplayEvtGetsFired () {
    var timeoutId = setTimeout(function () {
      player.trigger('canplay');
    }, 1000);

    player.one('canplay', function () {
      clearTimeout(timeoutId);
    });
  }

  /**
   * Determine whether the player needs to be restored to its state
   * before ad playback began. With a custom ad display or burned-in
   * ads, the content player state hasn't been modified and so no
   * restoration is required
   */
  /*
  function hasSrcChanged(player, snapshot) {
    if (player.src()) {
      return player.src() !== snapshot.src;
    }
    // the player was configured through source element children
    return player.currentSrc() !== snapshot.src;
  }
  */

  function restoreTracks () {
    var suppressedTracks = snapshot.suppressedTracks;
    suppressedTracks.forEach(function (trackSnapshot) {
      trackSnapshot.track.mode = trackSnapshot.mode;
    });
  }

  /**
   * Determine if the video element has loaded enough of the snapshot source
   * to be ready to apply the rest of the state
   */
  function tryToResume () {

    // if some period of the video is seekable, resume playback
    // otherwise delay a bit and then check again unless we're out of attempts

	  // safari 11 requires call `play` to make seek available
      player.play();

    if (!playerUtils.isReadyToResume(player) && attempts--) {
      setTimeout(tryToResume, 50);
    } else {
      try {
        if (player.currentTime() !== snapshot.currentTime) {
          if (snapshot.playing) { // if needed restore playing status after seek completes
            player.one('seeked', function () {
              if (!snapshot.ended) {
                player.play();
              }
            });
          }
          player.currentTime(snapshot.currentTime);

        } else if (snapshot.playing) {
          // if needed and no seek has been performed, restore playing status immediately
          player.play();
        }

      } catch (e) {
        videojs.log.warn('Failed to resume the content after an advertisement', e);
      }
    }
  }
};

playerUtils.isReadyToResume = function (player) {
  if (utilities.isIE11()) {
    // for IE 11 check only player state
    if (player.readyState() > 1) {
      return true;
    }
    return false;
  }

  if (player.readyState() > 1) {
    // some browsers and media aren't "seekable".
    // readyState greater than 1 allows for seeking without exceptions
    return true;
  }

  if (player.seekable() === undefined) {
    // if the player doesn't expose the seekable time ranges, try to
    // resume playback immediately
    return true;
  }

  if (player.seekable().length > 0) {
    // if some period of the video is seekable, resume playback
    return true;
  }

  return false;
};

/**
 * This function prepares the player to display ads.
 * Adding convenience events like the 'vast.firsPlay' that gets fired when the video is first played
 * and ads the blackPoster to the player to prevent content from being displayed before the preroll ad.
 *
 * @param player
 */
playerUtils.prepareForAds = function (player) {
  var blackPoster = player.addChild('blackPoster');
  // var _firstPlay = true;
  var volumeSnapshot;


  monkeyPatchPlayerApi();

  player.on('play', tryToTriggerFirstPlay);
  player.on('vast.reset', resetFirstPlay);  // Every time we change the sources we reset the first play.
  player.on('vast.firstPlay', restoreContentVolume);
  player.on('error', hideBlackPoster);      // If there is an error in the player we remove the blackposter to show the err msg
  player.on('vast.adStart', hideBlackPoster);
  player.on('vast.adsCancel', hideBlackPoster);
  player.on('vast.adError', hideBlackPoster);
  player.on('vast.adStart', addStyles);
  player.on('vast.adEnd', removeStyles);
  player.on('vast.adsCancel', removeStyles);

  // VIDLA-2465 - hide vjs error dialog when ad running
  var errorDialog;
  var dlgs = document.getElementsByClassName('vjs-error-display');
  if (dlgs && dlgs.length > 0) {
	  errorDialog = dlgs[0];
	  errorDialog.style.setProperty('display', 'none', 'important');
  }

  // **** Local Functions **** //

  /**
   What this function does is ugly and horrible and I should think twice before calling myself a good developer. With that said,
   it is the best solution I could find to mute the video until the 'play' event happens (on mobile devices) and the plugin can decide whether
   to play the ad or not.

   We also need this monkeypatch to be able to pause and resume an ad using the player's API

   If you have a better solution please do tell me.
   */
  function monkeyPatchPlayerApi () {

    /**
     * Monkey patch needed to handle firstPlay and resume of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are restoring a VAST ad.
     * @returns {player}
     */
    var origPlay = player.play;
    player.play = function (callOrigPlay) {
      var that = this;

      if (isFirstPlay()) {
        firstPlay();
      } else {
        resume(callOrigPlay);
      }

      return this;

      // **** Local Functions **** //
      function firstPlay () {
        if (!utilities.isIPhone()) {
          if (!volumeSnapshot) {
              volumeSnapshot = saveVolumeSnapshot();
          }
          player.muted(true);
        }

        origPlay.apply(that, arguments);
      }

      function resume (callOrigPlay) {
        if (isAdPlaying() && !callOrigPlay) {
          player.vast.adUnit.resumeAd();
        } else {
        	if (!isVpaidPlaying()) {
                origPlay.apply(that, arguments);
        	}
        }
      }
    };


    /**
     * Needed monkey patch to handle pause of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPause = player.pause;
    player.pause = function (callOrigPause) {
      if (isAdPlaying() && !callOrigPause) {
        player.vast.adUnit.pauseAd();
      } else {
      	if (!isVpaidPlaying()) {
      		origPause.apply(this, arguments);
      	}
      }
      return this;
    };


    /**
     * Needed monkey patch to handle paused state of the player when ads are playing.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPaused = player.paused;
    player.paused = function (callOrigPaused) {
      if (isAdPlaying() && !callOrigPaused) {
        return player.vast.adUnit.isPaused();
      }
      return origPaused.apply(this, arguments);
    };


    /**
     * VIDLA-4391: Needed monkey patch to handle bug in v5.28.x Brightcove Players when passing src MediaFile objects up to vjs player in iframe parent window
     */
    var isBrightcoveV5 = function isBrightcoveV5 () {
      return (videojs && !videojs.getPlugins);   // v5.x.x Brightcove players didn't feature the getPlugins API method
    };

    // Have to do this only when MOL script has loaded in iframe
    if (parent && window !== parent && isBrightcoveV5() && utilities.scriptLoadedInIframe()) {
      var origSrc = player.src;
      player.src = function (source) {
        if (source && !(source instanceof parent.Object)) {
          if (utilities.isIE11()) {
             var temp = new parent.Object();
             for (var prop in source) {
               if (source.hasOwnProperty(prop)) {
                temp[prop] = source[prop];
               }
             }
             source = temp;
          }
          else {
            source = parent.Object.assign(new parent.Object(), source);
          }
        }
        origSrc.call(this, source);
      };
    }
  }

  function isVpaidPlaying () {
	  return player.vast && player.vast.VPAID;
  }

  function isAdPlaying () {
    return player.vast && player.vast.adUnit;
  }

  function tryToTriggerFirstPlay () {
    if (isFirstPlay()) {
  	  window._molSettings.firstPlay = false;
      // _firstPlay = false;
      player.trigger('vast.firstPlay');
    }
  }

  function resetFirstPlay () {
	  window._molSettings.firstPlay = true;
	    // _firstPlay = true;
    blackPoster.show();
    restoreContentVolume();
  }

  function isFirstPlay () {
	  return window._molSettings.firstPlay;
	    // return _firstPlay;
  }

  function saveVolumeSnapshot () {
    return {
      muted: player.muted(),
      volume: player.volume()
    };
  }

  function restoreContentVolume () {
    if (volumeSnapshot) {
      // player.currentTime(0);
      restoreVolumeSnapshot(volumeSnapshot);
      volumeSnapshot = null;
    }
  }

  function restoreVolumeSnapshot (snapshot) {
    if (utilities.isObject(snapshot)) {
      player.volume(snapshot.volume);
      // VIDLA-4609 - Delay needed to ensure Brightcove player sets Ad's mute value properly to
      // the player's configured setting on iPads w/iOS 12 (after the call stack clears)
      setTimeout(function () {
        player.muted(snapshot.muted);
      }, 0);
    }
  }

  function hideBlackPoster () {
    if (!dom.hasClass(blackPoster.el(), 'vjs-hidden')) {
      blackPoster.hide();
    }
  }

  function addStyles () {
    dom.addClass(player.el(), 'vjs-ad-playing');
  }

  function removeStyles () {
	  player.off('play', tryToTriggerFirstPlay);
	  player.off('vast.reset', resetFirstPlay); // Every time we change the sources we reset the first play.
	  player.off('vast.firstPlay', restoreContentVolume);
	  player.off('error', hideBlackPoster);     // If there is an error in the player we remove the blackposter to show the err msg
	  player.off('vast.adStart', hideBlackPoster);
	  player.off('vast.adsCancel', hideBlackPoster);
	  player.off('vast.adError', hideBlackPoster);
	  player.off('vast.adStart', addStyles);
	  player.off('vast.adEnd', removeStyles);
	  player.off('vast.adsCancel', removeStyles);

      dom.removeClass(player.el(), 'vjs-ad-playing');
	  dom.removeClass(player.controlBar.playToggle.el(), 'vjs-ended');

	  if (errorDialog) {
		  setTimeout(function () {
			  errorDialog.style.removeProperty('display');
		  }, 500);
	  }
  }
};

/**
 * Remove the poster attribute from the video element tech, if present. When
 * reusing a video element for multiple videos, the poster image will briefly
 * reappear while the new source loads. Removing the attribute ahead of time
 * prevents the poster from showing up between videos.
 * @param {object} player The videojs player object
 */
playerUtils.removeNativePoster = function (player) {
  var tech = player.el().querySelector('.vjs-tech');
  if (tech) {
    tech.removeAttribute('poster');
  }
};

/**
 * Helper function to listen to many events until one of them gets fired, then we
 * execute the handler and unsubscribe all the event listeners;
 *
 * @param player specific player from where to listen for the events
 * @param events array of events
 * @param handler function to execute once one of the events fires
 */
playerUtils.once = function once (player, events, handler) {
  function listener () {
    handler.apply(null, arguments);

    events.forEach(function (event) {
      player.off(event, listener);
    });
  }

  events.forEach(function (event) {
    player.on(event, listener);
  });
};

// plugin utils
playerUtils.showBigPlayButton = function (player, show) {
	var button = player.bigPlayButton.el_;
	if (button) {
		if (show) {
			button.style.display = 'block';
			button.style.zIndex = 99999;
		}
		else {
			button.style.display = 'none';
			button.style.zIndex = '';
		}
	}
};

module.exports = playerUtils;
