/**
 * Viewability Wrapper
 */

// var ANVideoViewabilityTracker = require('an-video-viewability');//viewability library
var ANVideoViewabilityTracker = null;
var logger = require('./consoleLogger');
var debug = function (message) {
    logger.debug(message);
};
var info = function (message) {
    logger.info(message);
};

var html5VideoViewability = function (player_) {

	var player = player_;
    var tracker = null;
    var mappedActions = {
        'start': 'start',
        'expand': 'expand',
        'collapse': 'collapse',
        'unmute': 'sound_on',
        'mute': 'sound_off',
        'pause': 'pause',
        'resume': 'resume',
        'ad-click': 'click',
        'skip': 'stop',
        'complete': 'stop',
        'fullscreen': 'fullscreen',
        'exitFullscreen': 'exitFullscreen'
    };

    var fireOnceEvents = {
        'start': false,
        'skip': false,
        'complete': false
    };

    var getConfig = function () {
        return window._molSettings.viewability && window._molSettings.viewability.config;
    };

    var getPlayerDOMElement = function () {
        return player.el_;
    };

    var getVideoInfo = function (duration, width, height) {
        return {duration: duration, w: width, h: height};
    };

	// Using callback for logs helps getting a right logger in each app
	var loggerCallback = function (_level, _message) {
		if (_level && _level === 'debug') {
			debug(_message);
		} else {
			info(_message);
		}
    };

    this.init = function (contextId, duration, width, height) {
        if (!ANVideoViewabilityTracker) {
            return;
        }
        info('initialize with duration: ' + duration + ', width: ' + width + ', height: ' + height);
        try {
            tracker = new ANVideoViewabilityTracker(
				getConfig(),
                getPlayerDOMElement(),
                getVideoInfo(duration, width, height), // The duration of the video ad
                contextId,
				loggerCallback
            );
            this.isReady = true;
        } catch (ex) {
            debug('error on viewability library: ');
            debug(ex);
        }

    };

    this.invokeEvent = function (event_) {
        if (!ANVideoViewabilityTracker) {
            return;
        }
        if (this.isReady && event_ && mappedActions[event_]) {
            try {
                if (fireOnceEvents.hasOwnProperty(event_)) {
                    if (fireOnceEvents[event_]) {
                        info('supressing fireOnceEvents event as it is already fired once by viewability library: ' + mappedActions[event_]);
                        return;
                    } else {
                        fireOnceEvents[event_] = true; // mark that the event has been fired.
                    }
                }
                info('event invoked by viewability library: ' + mappedActions[event_]);
                tracker.notifyEvent(mappedActions[event_]);
            } catch (ex) {
                debug('error on viewability library: ');
                debug(ex);
            }
        }
    };

    this.isReady = false;


};


module.exports = html5VideoViewability;
