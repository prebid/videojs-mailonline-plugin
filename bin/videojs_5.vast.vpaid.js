/*! (c)2019 AppNexus, Inc. v1.3.9
This code contains videojs-vast-vpaid(Copyright (c) 2015 MailOnline) which is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var METHODS = [
    'handshakeVersion',
    'initAd',
    'startAd',
    'stopAd',
    'skipAd', // VPAID 2.0 new method
    'resizeAd',
    'pauseAd',
    'resumeAd',
    'expandAd',
    'collapseAd',
    'subscribe',
    'unsubscribe'
];

var EVENTS = [
    'AdLoaded',
    'AdStarted',
    'AdStopped',
    'AdSkipped',
    'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange',
    'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange',
    'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange',
    'AdImpression',
    'AdVideoStart',
    'AdVideoFirstQuartile',
    'AdVideoMidpoint',
    'AdVideoThirdQuartile',
    'AdVideoComplete',
    'AdClickThru',
    'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation',
    'AdUserMinimize',
    'AdUserClose',
    'AdPaused',
    'AdPlaying',
    'AdLog',
    'AdError'
];

var GETTERS = [
    'getAdLinear',
    'getAdWidth', // VPAID 2.0 new getter
    'getAdHeight', // VPAID 2.0 new getter
    'getAdExpanded',
    'getAdSkippableState', // VPAID 2.0 new getter
    'getAdRemainingTime',
    'getAdDuration', // VPAID 2.0 new getter
    'getAdVolume',
    'getAdCompanions', // VPAID 2.0 new getter
    'getAdIcons' // VPAID 2.0 new getter
];

var SETTERS = [
    'setAdVolume'
];


/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * IVPAIDAdUnit
 *
 * @class
 *
 * @param {object} creative
 * @param {HTMLElement} el
 * @param {HTMLVideoElement} video
 */
function IVPAIDAdUnit(creative, el, video) {}


/**
 * handshakeVersion
 *
 * @param {string} VPAIDVersion
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.handshakeVersion = function (VPAIDVersion, callback) {};

/**
 * initAd
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version
 * @param {NodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {};

/**
 * startAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.startAd = function(callback) {};

/**
 * stopAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.stopAd = function(callback) {};

/**
 * skipAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.skipAd = function(callback) {};

/**
 * resizeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resizeAd = function(width, height, viewMode, callback) {};

/**
 * pauseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.pauseAd = function(callback) {};

/**
 * resumeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resumeAd = function(callback) {};

/**
 * expandAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.expandAd = function(callback) {};

/**
 * collapseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.collapseAd = function(callback) {};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
IVPAIDAdUnit.prototype.subscribe = function(event, handler, context) {};

/**
 * startAd
 *
 * @param {string} event
 * @param {function} handler
 */
IVPAIDAdUnit.prototype.unsubscribe = function(event, handler) {};



/**
 * getAdLinear
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdLinear = function(callback) {};

/**
 * getAdWidth
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdWidth = function(callback) {};

/**
 * getAdHeight
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdHeight = function(callback) {};

/**
 * getAdExpanded
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdExpanded = function(callback) {};

/**
 * getAdSkippableState
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdSkippableState = function(callback) {};

/**
 * getAdRemainingTime
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdRemainingTime = function(callback) {};

/**
 * getAdDuration
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdDuration = function(callback) {};

/**
 * getAdVolume
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdVolume = function(callback) {};

/**
 * getAdCompanions
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdCompanions = function(callback) {};

/**
 * getAdIcons
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdIcons = function(callback) {};

/**
 * setAdVolume
 *
 * @param {number} volume
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.setAdVolume = function(volume, callback) {};

addStaticToInterface(IVPAIDAdUnit, 'METHODS', METHODS);
addStaticToInterface(IVPAIDAdUnit, 'GETTERS', GETTERS);
addStaticToInterface(IVPAIDAdUnit, 'SETTERS', SETTERS);
addStaticToInterface(IVPAIDAdUnit, 'EVENTS',  EVENTS);


var VPAID1_METHODS = METHODS.filter(function(method) {
    return ['skipAd'].indexOf(method) === -1;
});

addStaticToInterface(IVPAIDAdUnit, 'checkVPAIDInterface', function checkVPAIDInterface (creative) {
    var result = VPAID1_METHODS.every(function(key) {
        return typeof creative[key] === 'function';
    });
    return result;
});

module.exports = IVPAIDAdUnit;

function addStaticToInterface(Interface, name, value) {
    Object.defineProperty(Interface, name, {
        writable: false,
        configurable: false,
        value: value
    });
}


},{}],2:[function(require,module,exports){
'use strict';

var IVPAIDAdUnit = require('./IVPAIDAdUnit');
var Subscriber = require('./subscriber');
var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;
var utils = require('./utils');
var METHODS = IVPAIDAdUnit.METHODS;
var ERROR = 'AdError';
var AD_CLICK = 'AdClickThru';
var FILTERED_EVENTS = IVPAIDAdUnit.EVENTS.filter(function (event) {
    return event != AD_CLICK;
});

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * VPAIDAdUnit
 * @class
 *
 * @param VPAIDCreative
 * @param {HTMLElement} [el] this will be used in initAd environmentVars.slot if defined
 * @param {HTMLVideoElement} [video] this will be used in initAd environmentVars.videoSlot if defined
 */
function VPAIDAdUnit(VPAIDCreative, el, video, iframe) {
    this._isValid = checkVPAIDInterface(VPAIDCreative);
    if (this._isValid) {
        this._creative = VPAIDCreative;
        this._el = el;
        this._videoEl = video;
        this._iframe = iframe;
        this._subscribers = new Subscriber();
        utils.setFullSizeStyle(el);
        $addEventsSubscribers.call(this);
    }
}

VPAIDAdUnit.prototype = Object.create(IVPAIDAdUnit.prototype);

/**
 * isValidVPAIDAd will return if the VPAIDCreative passed in constructor is valid or not
 *
 * @return {boolean}
 */
VPAIDAdUnit.prototype.isValidVPAIDAd = function isValidVPAIDAd() {
    return this._isValid;
};

IVPAIDAdUnit.METHODS.forEach(function(method) {
    //NOTE: this methods arguments order are implemented differently from the spec
    var ignores = [
        'subscribe',
        'unsubscribe',
        'initAd'
    ];

    if (ignores.indexOf(method) !== -1) return;

    VPAIDAdUnit.prototype[method] = function () {
        var ariaty = IVPAIDAdUnit.prototype[method].length;
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        var callback = (ariaty === args.length) ? args.pop() : undefined;

        setTimeout(function () {
            var result, error = null;
            try {
                result = this._creative[method].apply(this._creative, args);
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});


/**
 * initAd concreate implementation
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version, if el & video was used in constructor slot & videoSlot will be added to the object
 * @param {NodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.initAd = function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {
    creativeData = creativeData || {};
    environmentVars = utils.extend({
        slot: this._el,
        videoSlot: this._videoEl
    }, environmentVars || {});

    setTimeout(function () {
        var error;
        try {
            this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        } catch (e) {
            error = e;
        }

        callOrTriggerEvent(callback, this._subscribers, error);
    }.bind(this), 0);
};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
VPAIDAdUnit.prototype.subscribe = function subscribe(event, handler, context) {
    this._subscribers.subscribe(handler, event, context);
};


/**
 * unsubscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 */
VPAIDAdUnit.prototype.unsubscribe = function unsubscribe(event, handler) {
    this._subscribers.unsubscribe(handler, event);
};

//alias
VPAIDAdUnit.prototype.on = VPAIDAdUnit.prototype.subscribe;
VPAIDAdUnit.prototype.off = VPAIDAdUnit.prototype.unsubscribe;

IVPAIDAdUnit.GETTERS.forEach(function(getter) {
    VPAIDAdUnit.prototype[getter] = function (callback) {
        setTimeout(function () {

            var result, error = null;
            try {
                result = this._creative[getter]();
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});

/**
 * setAdVolume
 *
 * @param volume
 * @param {nodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.setAdVolume = function setAdVolume(volume, callback) {
    setTimeout(function () {

        var result, error = null;
        try {
            this._creative.setAdVolume(volume);
            result = this._creative.getAdVolume();
        } catch(e) {
            error = e;
        }

        if (!error) {
            error = utils.validate(result === volume, 'failed to apply volume: ' + volume);
        }
        callOrTriggerEvent(callback, this._subscribers, error, result);
    }.bind(this), 0);
};

VPAIDAdUnit.prototype._destroy = function destroy() {
    this.stopAd();
    this._subscribers.unsubscribeAll();
};

function $addEventsSubscribers() {
    // some ads implement
    // so they only handle one subscriber
    // to handle this we create our one
    FILTERED_EVENTS.forEach(function (event) {
        this._creative.subscribe($trigger.bind(this, event), event);
    }.bind(this));

    // map the click event to be an object instead of depending of the order of the arguments
    // and to be consistent with the flash
    this._creative.subscribe($clickThruHook.bind(this), AD_CLICK);

    // because we are adding the element inside the iframe
    // the user is not able to click in the video
    if (this._videoEl) {
        var documentElement = this._iframe.contentDocument.documentElement;
        var videoEl = this._videoEl;
        documentElement.addEventListener('click', function(e) {
            if (e.target === documentElement) {
                videoEl.click();
            }
        });
    }
}

function $clickThruHook(url, id, playerHandles) {
    this._subscribers.triggerSync(AD_CLICK, {url: url, id: id, playerHandles: playerHandles});
}

function $trigger(event) {
    // TODO avoid leaking arguments
    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    this._subscribers.trigger(event, Array.prototype.slice(arguments, 1));
}

function callOrTriggerEvent(callback, subscribers, error, result) {
    if (callback) {
        callback(error, result);
    } else if (error) {
        subscribers.trigger(ERROR, error);
    }
}

module.exports = VPAIDAdUnit;


},{"./IVPAIDAdUnit":1,"./subscriber":4,"./utils":5}],3:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var unique = utils.unique('vpaidIframe');
var VPAIDAdUnit = require('./VPAIDAdUnit');

var defaultTemplate = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"></head>' +
    '<body style="margin:0;padding:0"><div class="ad-element"></div>' +
    '<script type="text/javascript" src="{{iframeURL_JS}}"><\/script>' +
    '<script type="text/javascript">' +
    'window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');' +
    '<\/script>' +
    '</body>' +
    '</html>';

var AD_STOPPED = 'AdStopped';

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * VPAIDHTML5Client
 * @class
 *
 * @param {HTMLElement} el that will contain the iframe to load adUnit and a el to add to adUnit slot
 * @param {HTMLVideoElement} video default video element to be used by adUnit
 * @param {object} [templateConfig] template: html template to be used instead of the default, extraOptions: to be used when rendering the template
 * @param {object} [vpaidOptions] timeout: when loading adUnit
 */
function VPAIDHTML5Client(el, video, templateConfig, vpaidOptions) {
    templateConfig = templateConfig || {};

    this._id = unique();
    this._destroyed = false;

    this._frameContainer = utils.createElementInEl(el, 'div');
    this._videoEl = video;
    this._vpaidOptions = vpaidOptions || {timeout: 10000};

    this._templateConfig = {
        template: templateConfig.template || defaultTemplate,
        extraOptions: templateConfig.extraOptions || {}
    };
}

/**
 * destroy
 *
 */
VPAIDHTML5Client.prototype.destroy = function destroy() {
    if (this._destroyed) {
        return;
    }
    this._destroyed = true;
    $unloadPreviousAdUnit.call(this);
};

/**
 * isDestroyed
 *
 * @return {boolean}
 */
VPAIDHTML5Client.prototype.isDestroyed = function isDestroyed() {
    return this._destroyed;
};

/**
 * loadAdUnit
 *
 * @param {string} adURL url of the js of the adUnit
 * @param {nodeStyleCallback} callback
 */
VPAIDHTML5Client.prototype.loadAdUnit = function loadAdUnit(adURL, callback) {
    $throwIfDestroyed.call(this);
    $unloadPreviousAdUnit.call(this);
    var that = this;

    var frame = utils.createIframeWithContent(
        this._frameContainer,
        this._templateConfig.template,
        utils.extend({
            iframeURL_JS: adURL,
            iframeID: this.getID(),
            origin: getOrigin()
        }, this._templateConfig.extraOptions)
    );

    this._frame = frame;

    this._onLoad = utils.callbackTimeout(
        this._vpaidOptions.timeout,
        onLoad.bind(this),
        onTimeout.bind(this)
    );

    window.addEventListener('message', this._onLoad);

    function onLoad (e) {
        /*jshint validthis: false */
        //don't clear timeout
        if (e.origin !== getOrigin()) return;
        var result = JSON.parse(e.data);

        //don't clear timeout
        if (result.id !== that.getID()) return;

        var adUnit, error, createAd;
        if (!that._frame.contentWindow) {

            error = 'the iframe is not anymore in the DOM tree';

        } else {
            createAd = that._frame.contentWindow.getVPAIDAd;
            error = utils.validate(typeof createAd === 'function', 'the ad didn\'t return a function to create an ad');
        }

        if (!error) {
            var adEl = that._frame.contentWindow.document.querySelector('.ad-element');
            adUnit = new VPAIDAdUnit(createAd(), adEl, that._videoEl, that._frame);
            adUnit.subscribe(AD_STOPPED, $adDestroyed.bind(that));
            error = utils.validate(adUnit.isValidVPAIDAd(), 'the add is not fully complaint with VPAID specification');
        }

        that._adUnit = adUnit;
        $destroyLoadListener.call(that);
        callback(error, error ? null : adUnit);

        //clear timeout
        return true;
    }

    function onTimeout() {
        callback('timeout', null);
    }
};

/**
 * unloadAdUnit
 *
 */
VPAIDHTML5Client.prototype.unloadAdUnit = function unloadAdUnit() {
    $unloadPreviousAdUnit.call(this);
};

/**
 * getID will return the unique id
 *
 * @return {string}
 */
VPAIDHTML5Client.prototype.getID = function () {
    return this._id;
};


/**
 * $removeEl
 *
 * @param {string} key
 */
function $removeEl(key) {
    var el = this[key];
    if (el) {
        el.remove();
        delete this[key];
    }
}

function $adDestroyed() {
    $removeAdElements.call(this);
    delete this._adUnit;
}

function $unloadPreviousAdUnit() {
    $removeAdElements.call(this);
    $destroyAdUnit.call(this);
}

function $removeAdElements() {
    $removeEl.call(this, '_frame');
    $destroyLoadListener.call(this);
}

/**
 * $destroyLoadListener
 *
 */
function $destroyLoadListener() {
    if (this._onLoad) {
        window.removeEventListener('message', this._onLoad);
        utils.clearCallbackTimeout(this._onLoad);
        delete this._onLoad;
    }
}


function $destroyAdUnit() {
    if (this._adUnit) {
        this._adUnit.stopAd();
        delete this._adUnit;
    }
}

/**
 * $throwIfDestroyed
 *
 */
function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error ('VPAIDHTML5Client already destroyed!');
    }
}

function getOrigin() {
    if( window.location.origin ) {
        return window.location.origin;
    }
    else {
        return window.location.protocol + "//" +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port: '');
    }
}

module.exports = VPAIDHTML5Client;


},{"./VPAIDAdUnit":2,"./utils":5}],4:[function(require,module,exports){
'use strict';

function Subscriber() {
    this._subscribers = {};
}

Subscriber.prototype.subscribe = function subscribe(handler, eventName, context) {
    if (!this.isHandlerAttached(handler, eventName)) {
        this.get(eventName).push({handler: handler, context: context, eventName: eventName});
    }
};

Subscriber.prototype.unsubscribe = function unsubscribe(handler, eventName) {
    this._subscribers[eventName] = this.get(eventName).filter(function (subscriber) {
        return handler !== subscriber.handler;
    });
};

Subscriber.prototype.unsubscribeAll = function unsubscribeAll() {
    this._subscribers = {};
};

Subscriber.prototype.trigger = function(eventName, data) {
    var that = this;
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        setTimeout(function () {
            if (that.isHandlerAttached(subscriber.handler, subscriber.eventName)) {
                subscriber.handler.call(subscriber.context, data);
            }
        }, 0);
    });
};

Subscriber.prototype.triggerSync = function(eventName, data) {
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        subscriber.handler.call(subscriber.context, data);
    });
};

Subscriber.prototype.get = function get(eventName) {
    if (!this._subscribers[eventName]) {
        this._subscribers[eventName] = [];
    }
    return this._subscribers[eventName];
};

Subscriber.prototype.isHandlerAttached = function isHandlerAttached(handler, eventName) {
    return this.get(eventName).some(function(subscriber) {
        return handler === subscriber.handler;
    })
};

module.exports = Subscriber;


},{}],5:[function(require,module,exports){
'use strict';

/**
 * noop a empty function
 */
function noop() {}

/**
 * validate if is not validate will return an Error with the message
 *
 * @param {boolean} isValid
 * @param {string} message
 */
function validate(isValid, message) {
    return isValid ? null : new Error(message);
}

var timeouts = {};
/**
 * clearCallbackTimeout
 *
 * @param {function} func handler to remove
 */
function clearCallbackTimeout(func) {
    var timeout = timeouts[func];
    if (timeout) {
        clearTimeout(timeout);
        delete timeouts[func];
    }
}

/**
 * callbackTimeout if the onSuccess is not called and returns true in the timelimit then onTimeout will be called
 *
 * @param {number} timer
 * @param {function} onSuccess
 * @param {function} onTimeout
 */
function callbackTimeout(timer, onSuccess, onTimeout) {
    var callback, timeout;

    timeout = setTimeout(function () {
        onSuccess = noop;
        delete timeout[callback];
        onTimeout();
    }, timer);

    callback = function () {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        if (onSuccess.apply(this, arguments)) {
            clearCallbackTimeout(callback);
        }
    };

    timeouts[callback] = timeout;

    return callback;
}


/**
 * createElementInEl
 *
 * @param {HTMLElement} parent
 * @param {string} tagName
 * @param {string} id
 */
function createElementInEl(parent, tagName, id) {
    var nEl = document.createElement(tagName);
    if (id) nEl.id = id;
    parent.appendChild(nEl);
    return nEl;
}

/**
 * createIframeWithContent
 *
 * @param {HTMLElement} parent
 * @param {string} template simple template using {{var}}
 * @param {object} data
 */
function createIframeWithContent(parent, template, data) {
    var iframe = createIframe(parent, null, data.zIndex);
    if (!setIframeContent(iframe, simpleTemplate(template, data))) return;
    return iframe;
}

/**
 * createIframe
 *
 * @param {HTMLElement} parent
 * @param {string} url
 */
function createIframe(parent, url, zIndex) {
    var nEl = document.createElement('iframe');
    nEl.src = url || 'about:blank';
    nEl.marginWidth = '0';
    nEl.marginHeight = '0';
    nEl.frameBorder = '0';
    nEl.width = '100%';
    nEl.height = '100%';
    setFullSizeStyle(nEl);

    if(zIndex){
        nEl.style.zIndex = zIndex;
    }

    nEl.setAttribute('SCROLLING','NO');
    parent.innerHTML = '';
    parent.appendChild(nEl);
    return nEl;
}

function setFullSizeStyle(element) {
    element.style.position = 'absolute';
    element.style.left = '0';
    element.style.top = '0';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.border = 'none';
    element.style.width = '100%';
    element.style.height = '100%';
}

/**
 * simpleTemplate
 *
 * @param {string} template
 * @param {object} data
 */
function simpleTemplate(template, data) {
    Object.keys(data).forEach(function (key) {
        var value = (typeof value === 'object') ? JSON.stringify(data[key]) : data[key];
        template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);
    });
    return template;
}

/**
 * setIframeContent
 *
 * @param {HTMLIframeElement} iframeEl
 * @param content
 */
function setIframeContent(iframeEl, content) {
    var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document;
    if (!iframeDoc) return false;

    iframeDoc.write(content);

    return true;
}


/**
 * extend object with keys from another object
 *
 * @param {object} toExtend
 * @param {object} fromSource
 */
function extend(toExtend, fromSource) {
    Object.keys(fromSource).forEach(function(key) {
        toExtend[key] = fromSource[key];
    });
    return toExtend;
}


/**
 * unique will create a unique string everytime is called, sequentially and prefixed
 *
 * @param {string} prefix
 */
function unique(prefix) {
    var count = -1;
    return function () {
        return prefix + '_' + (++count);
    };
}

module.exports = {
    noop: noop,
    validate: validate,
    clearCallbackTimeout: clearCallbackTimeout,
    callbackTimeout: callbackTimeout,
    createElementInEl: createElementInEl,
    createIframeWithContent: createIframeWithContent,
    createIframe: createIframe,
    setFullSizeStyle: setFullSizeStyle,
    simpleTemplate: simpleTemplate,
    setIframeContent: setIframeContent,
    extend: extend,
    unique: unique
};


},{}],6:[function(require,module,exports){
'use strict';

/**
 * Inner helper class that deals with the logic of the icon renderring.
 *
 * @param player {object} instance of the player that will play the ad.
 *
 * @constructor
 */

var VASTError = require('../vast/VASTError');

var async = require('../../utils/async');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

function IconIntegrator(player) {
  if (!(this instanceof IconIntegrator)) {
    return new IconIntegrator(player);
  }

  this.player = player;
  this.icons = [];
  this.controlBarTimer = null;
  this.cbHidden;
}

IconIntegrator.prototype.renderIcons = function renderIcons(icons, callback) {
  var that = this;
  callback = callback || utilities.noop;

  if (!Array.isArray(icons) || icons.length === 0) {
    return callback(new VASTError('On IconIntegrator, missing required icon array'));
  }

  async.waterfall([
    function (next) {
      next(null, icons);
    },
    this._createIcons.bind(this),
    this._setupEvents.bind(this),
    this._renderIcons.bind(this)
  ], function (error, response) {
    if (error && response) {
      that._trackError(error, response);
    }
    callback(error, response);
  });
};

IconIntegrator.prototype._createIcons = function createIcons(icons, callback) {
  var that = this;

  for (var i = 0; i < icons.length; i++) {
    var iconObj = {};
    iconObj.icon = icons[i];
    // make sure we only one icon per program
    var idx = getIconByProgram(iconObj.icon.program);
    if (idx >= 0) {
      this.icons.splice(idx, 1);
    }
    iconObj.content = getContent(iconObj.icon);
    if (iconObj.content) {
      this.icons.push(iconObj);
    }
  }

  if (this.icons.length > 0) {
    callback(null);
  }
  else {
    callback(new VASTError("Could not create AdIcon content", 900));
  }
  return;

  /*** Local Functions ***/
  function getContent(icon) {
    var content = null;
    if (icon.staticResource) {
      var imageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (imageTypes.indexOf(icon.creativeType)) {
        content = "<img src='" + icon.staticResource + "' width='" + icon.width + "' height='" + icon.height + "'>";
      }
    }
    /*else if (icon.htmlResource) {
      // to do ...
    }
    else if (icon.iframeResource) {
      // to do ...
    }*/
    return content;
  }

  function getIconByProgram(program) {
    for (var i = 0; i < that.icons.length; i++) {
      if (that.icons[i].icon.program === program) {
        return i;
      }
    }
    return -1;
  }
};

IconIntegrator.prototype._setupEvents = function setupEvents(callback) {
  var player = this.player;
  var that = this;

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adSkip', 'adStop'], function(){
    if (that.icons.length > 0) {
      if (that.controlBarTimer) {
        clearInterval(that.controlBarTimer);
        that.controlBarTimer = null;
      }
      for (var i = 0; i < that.icons.length; i++) {
        var icon = that.icons[i];
        if (icon.div) {
          if (icon.clickHandler) {
            icon.div.removeEventListener('click', icon.clickHandler);
          }
          player.el().removeChild(icon.div);
        }
      }
      that.icons = [];
    }
  });
  
  return callback(null);
};

IconIntegrator.prototype._renderIcons = function renderIcons() {
  var player = this.player;
  var that = this;

  for (var i = 0; i < this.icons.length; i++) {
    var icon = this.icons[i];

    //position by offset
    var xPosition = "left";//or right
    var xPositionOffset = 0;
    var yPosition = "top";//or bottom
    var yPositionOffset = 0;
    var topMargin = 0;
    var bottomMargin = 0;   // maybe control bar height

    if (icon && icon.icon.xPosition === "left") {
        xPosition = "left";
        xPositionOffset = 0;
    }
    if (icon && icon.icon.xPosition === "right") {
        xPosition = "right";
        xPositionOffset = 0;
    }
    if (icon && Number(icon.icon.xPosition) >= 0) {
        xPosition = "left";
        xPositionOffset = Number(icon.xPosition);
    }
    if (icon && icon.icon.yPosition === "bottom") {
        yPosition = "bottom";
        yPositionOffset = 0;
        yPositionOffset = yPositionOffset + bottomMargin;
    }
    if (icon && icon.icon.yPosition === "top") {
        yPosition = "top";
        yPositionOffset = 0;
        yPositionOffset = yPositionOffset + topMargin;
    }
    if (icon && Number(icon.icon.yPosition) >= 0) {
        yPosition = "top";
        yPositionOffset = Number(icon.icon.yPosition);
        yPositionOffset = yPositionOffset + topMargin;
    }

    var displayIcon = player.el().ownerDocument.createElement('div');
    player.el().appendChild(displayIcon);

    displayIcon.setAttribute("name", "adicon");
    displayIcon.id = "adicon_" + icon.icon.program;
    displayIcon.innerHTML = icon.content;
    displayIcon.style.position = "absolute";
    displayIcon.style[xPosition] = xPositionOffset + "px";
    displayIcon.style[yPosition] = yPositionOffset + "px";
    displayIcon.style.zIndex = 2147483647; //top most of 32bit
    displayIcon.style.display = "none";
    icon.origY = yPositionOffset;
  
    //set width,height of div element 
    displayIcon.style.width = icon.width + "px";
    displayIcon.style.height = icon.height + "px";

    icon.div = displayIcon;

    if (icon.icon.iconClickThrough) {
      icon.div.style.cursor = "pointer";
      icon.clickHandler = handleClick(icon);
      icon.div.addEventListener('click', icon.clickHandler);
    }

    startIcon(icon, yPosition);
  }

  if (this.icons.length > 0) {
    this.controlBarTimer = setInterval(adjustIconsByControlBar, utilities.isIE11() ? 100 : 500);
  }

  /**** local functions ******/
  function adjustIconsByControlBar() {
    var compStyle = window.getComputedStyle(that.player.controlBar.el(), null);
    var cbHiddenCur = compStyle.backfaceVisibility === 'hidden' || compStyle.transform != 'none';
    if (cbHiddenCur != that.cbHidden) {
      that.cbHidden = cbHiddenCur;
      var cbHeight = cbHiddenCur ? 0 : that.player.controlBar.el().offsetHeight;
      for (var k = 0; k < that.icons.length; k++) {
        var ic = that.icons[k];
        if (ic.div && ic.div.style.display ==='block') {
          if (cbHeight > 0) {
            // control bar visible
            if (elementsIntersected(ic.div, that.player.controlBar.el())) {
              if (ic.div.style.top && ic.div.style.top.length > 0) {
                var yPos = ic.origY - cbHeight;
                if (yPos < 0) {
                  yPos = 0;
                }
                ic.div.style.top = yPos + 'px';
              }
              else {
                ic.div.style.bottom = (ic.origY + cbHeight) + 'px';
              }
              adjustIconsPosition(ic, cbHeight, that, 1);                  
            }
          }
          else {
            if (ic.div.style.top && ic.div.style.top.length > 0) {
              ic.div.style.top = ic.origY + 'px';
            }
            else {
              ic.div.style.bottom = (ic.origY + cbHeight) + 'px';
            }
          }
        }
      }
    }
  }

  function adjustIconsPosition(ic, cbHeight, that, level) {
    for (var i = 0; i < that.icons.length; i++) {
      var icon = that.icons[i];
      if (icon.div.style.display === 'block' && icon.div != ic.div) {
        if (elementsIntersected(ic.div, icon.div)) {
          if (icon.div.style.top && icon.div.style.top.length > 0) {
            var yPos = icon.origY - cbHeight;
            if (yPos < 0) {
              yPos = 0;
            }
            icon.div.style.top = yPos + 'px';
          }
          else {
            icon.div.style.bottom = (icon.origY + cbHeight) + 'px';
          }
          // protection against infinite recursive
          level++;
          if (level < 5) {
            adjustIconsPosition(icon, cbHeight, that, level);    
          }              
        }
      }
    }
  }

  function elementsIntersected(div1, div2) {
    var collide = function(el1, el2) {
      var rect1 = el1.getBoundingClientRect();
      var rect2 = el2.getBoundingClientRect();
  
      return !(
        rect1.top > rect2.bottom ||
        rect1.right < rect2.left ||
        rect1.bottom < rect2.top ||
        rect1.left > rect2.right
      );
    };
    var inside = function(el1, el2) {
      var rect1 = el1.getBoundingClientRect();
      var rect2 = el2.getBoundingClientRect();
  
      return (
        ((rect2.top <= rect1.top) && (rect1.top <= rect2.bottom)) &&
        ((rect2.top <= rect1.bottom) && (rect1.bottom <= rect2.bottom)) &&
        ((rect2.left <= rect1.left) && (rect1.left <= rect2.right)) &&
        ((rect2.left <= rect1.right) && (rect1.right <= rect2.right))
      );
    };
    return collide(div1, div2) || inside(div1, div2) || inside(div2, div1);
  }

  function trackUrls(urls) {
    urls.forEach(function (src) {
      var img = new Image();
      img.src = src;
    });
  }

  function handleClick(icon) {
    return function() {
      trackUrls(icon.icon.iconClickTrackings);
      player.pause();
      window.open(icon.icon.iconClickThrough, '_blank');
    };
  }

  function startIcon(icon, yPosition) {
    var offset = icon.icon.offset && icon.icon.offset > 0 ? icon.icon.offset : 0;
    setTimeout(function() {
      icon.div.style.display = 'block';
      trackUrls(icon.icon.iconViewTrackings);

      for (var j = 0; j < that.icons.length; j++) {
        if (that.icons[j].div && that.icons[j].div != icon.div) {
          if (elementsIntersected(that.icons[j].div, icon.div)) {
            var rect1 = that.icons[j].div.getBoundingClientRect();
            if (yPosition === 'top') {
              icon.div.style.top = (that.icons[j].div.offsetTop + that.icons[j].div.offsetHeight + 1) + 'px';
              icon.origY = that.icons[j].div.offsetTop + that.icons[j].div.offsetHeight + 1;
            }
            else {
              var rect2 = that.player.el().getBoundingClientRect();
              icon.div.style.bottom = (rect2.height + rect2.top - rect1.top + 1) + 'px';
              icon.origY = rect2.height + rect2.top - rect1.top + 1;
            }
          }
        }
      }
  
      if (icon.icon.duration && icon.icon.duration > 0) {
        var duration = icon.icon.duration;
        setTimeout(function() {
          var idx = that.icons.indexOf(icon);
          if (idx >= 0) {
            if (icon.clickHandler) {
              icon.div.removeEventListener('click', icon.clickHandler);
            }
            player.el().removeChild(icon.div);
            that.icons.splice(idx, 1);
          }
        }, duration);
      }
    }, offset);
  }
};

module.exports = IconIntegrator;
},{"../../utils/async":36,"../../utils/playerUtils":41,"../../utils/utilityFunctions":43,"../vast/VASTError":19}],7:[function(require,module,exports){
'use strict';

var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

function Ad(adJTree) {
  if (!(this instanceof Ad)) {
    return new Ad(adJTree);
  }
  this.initialize(adJTree);
}

Ad.prototype.initialize = function(adJTree) {
  this.id = adJTree.attr('id');
  this.sequence = adJTree.attr('sequence');
  if (window.mol_vastVersion === 4) {
	  this.conditionalAd = adJTree.attr('conditionalAd');
  }

  if(adJTree.inLine) {
    this.inLine = new InLine(adJTree.inLine);
  }

  if(adJTree.wrapper){
    this.wrapper = new Wrapper(adJTree.wrapper);
  }
};

module.exports = Ad;
},{"./InLine":12,"./Wrapper":26}],8:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');
var utilities = require('../../utils/utilityFunctions');

function Category(categoryJTree) {
	  if(!(this instanceof Category)) {
	    return new Category(categoryJTree);
	  }

	  this.authority = categoryJTree.attr('authority');
	  this.category = xml.keyValue(categoryJTree);
}

Category.parseCategories = function parseCategoties(categoriesJTree) {
	  var categories = [];
	  var categoriesData;
	  if (categories) {
		  categoriesData = utilities.isArray(categoriesJTree) ? categoriesJTree : [categoriesJTree];
		  categoriesData.forEach(function (category) {
			  var cat = new Category(category);
			  if (cat.category && cat.category.length > 0 && cat.authority && cat.authority.length > 0) {
				  categories.push(new Category(category));
			  }
		  });
	  }
	  return categories;
};

module.exports = Category;

},{"../../utils/utilityFunctions":43,"../../utils/xml":44}],9:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');

var utilities = require('../../utils/utilityFunctions');

var xml = require('../../utils/xml');

var logger = require ('../../utils/consoleLogger');


function Companion(companionJTree) {
  if (!(this instanceof Companion)) {
    return new Companion(companionJTree);
  }

  logger.info ("<Companion> found companion ad");
  logger.debug ("<Companion>  companionJTree:", companionJTree);

  //Required Elements
  this.creativeType = xml.attr(companionJTree.staticResource, 'creativeType');
  this.staticResource = xml.keyValue(companionJTree.staticResource);

  logger.info ("<Companion>  creativeType: " + this.creativeType);
  logger.info ("<Companion>  staticResource: " + this.staticResource);

  // Weird bug when the JXON tree is built it doesn't handle casing properly in this situation...
  var htmlResource = null;
  if (xml.keyValue(companionJTree.HTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.HTMLResource);
  } else if (xml.keyValue(companionJTree.hTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.hTMLResource);
  }

  if (htmlResource !== null)
  {
    logger.info ("<Companion> found html resource", htmlResource);
  }

  this.htmlResource = htmlResource;

  var iframeResource = null;
  if (xml.keyValue(companionJTree.IFrameResource)) {
    iframeResource = xml.keyValue(companionJTree.IFrameResource);
  } else if (xml.keyValue(companionJTree.iFrameresource)) {
    iframeResource = xml.keyValue(companionJTree.iFrameresource);
  }

  if (iframeResource !== null)
  {
    logger.info ("<Companion> found iframe resource", iframeResource);
  }

  this.iframeResource = iframeResource;

  //Optional fields
  this.id = xml.attr(companionJTree, 'id');
  this.width = xml.attr(companionJTree, 'width');
  this.height = xml.attr(companionJTree, 'height');
  this.assetWidth = xml.attr(companionJTree, 'assetWidth');
  this.assetHeight = xml.attr(companionJTree, 'assetHeight');
  this.expandedWidth = xml.attr(companionJTree, 'expandedWidth');
  this.expandedHeight = xml.attr(companionJTree, 'expandedHeight');
  this.apiFramework = xml.attr(companionJTree, 'apiFramework');
  this.adSlotID = xml.attr(companionJTree, 'adSlotID');
  this.companionClickThrough = xml.keyValue(companionJTree.companionClickThrough);
  this.trackingEvents = parseTrackingEvents(companionJTree.trackingEvents && companionJTree.trackingEvents.tracking);
  
  if (window.mol_vastVersion === 4) {
	  this.pxratio = xml.attr(companionJTree, 'pxratio');
  }

  logger.info ("<Companion>  companionClickThrough: " + this.companionClickThrough);


  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData));
      });
    }
    return trackings;
  }
}

module.exports = Companion;
},{"../../utils/consoleLogger":37,"../../utils/utilityFunctions":43,"../../utils/xml":44,"./TrackingEvent":16}],10:[function(require,module,exports){
'use strict';

var Linear = require('./Linear');
var Companion = require('./Companion');
var UniversalAdId = require('./UniversalAdId');
var utilities = require('../../utils/utilityFunctions');

function Creative(creativeJTree) {
  if(!(this instanceof Creative)) {
    return new Creative(creativeJTree);
  }

  this.id = creativeJTree.attr('id');
  this.sequence = creativeJTree.attr('sequence');
  this.adId = creativeJTree.attr('adId');
  this.apiFramework = creativeJTree.attr('apiFramework');

  if(creativeJTree.linear) {
    this.linear = new Linear(creativeJTree.linear);
  }

  if (creativeJTree.companionAds) {
    var companions = [];
    var companionAds = creativeJTree.companionAds && creativeJTree.companionAds.companion;
    if (utilities.isDefined(companionAds)) {
      companionAds = utilities.isArray(companionAds) ? companionAds : [companionAds];
      companionAds.forEach(function (companionData) {
        companions.push(new Companion(companionData));
      });
    }
    this.companionAds = companions;
  }

  if (window.mol_vastVersion === 4) {
	  this.universalAdId = new UniversalAdId(creativeJTree.universalAdId);
  }
}

/**
 * Returns true if the browser supports at the creative.
 */
Creative.prototype.isSupported = function(){
  if(this.linear) {
    return this.linear.isSupported();
  }

  return true;
};

Creative.parseCreatives = function parseCreatives(creativesJTree) {
  var creatives = [];
  var creativesData;
  if (utilities.isDefined(creativesJTree) && utilities.isDefined(creativesJTree.creative)) {
    creativesData = utilities.isArray(creativesJTree.creative) ? creativesJTree.creative : [creativesJTree.creative];
    creativesData.forEach(function (creative) {
      creatives.push(new Creative(creative));
    });
  }
  return creatives;
};

module.exports = Creative;

},{"../../utils/utilityFunctions":43,"./Companion":9,"./Linear":14,"./UniversalAdId":17}],11:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');
var parsers = require('./parsers');

var attributesList = [
  'program',
  'width',
  'height',
  'xPosition',
  'yPosition',
  'duration',
  'offset',
  'apiFramework',
  'pxratio'
];

function Icon(iconJTree) {
  if (!(this instanceof Icon)) {
    return new Icon(iconJTree);
  }

  //Attributes
  for(var x=0; x<attributesList.length; x++) {
    var attribute = attributesList[x];
    this[attribute] = iconJTree.attr(attribute);
  }
  if (this.duration) {
    this.duration = parsers.duration(this.duration);
  }
  if (this.offset) {
    this.offset = parsers.duration(this.offset);
  }

  //Required Elements
  this.creativeType = xml.attr(iconJTree.staticResource, 'creativeType');
  this.staticResource = xml.keyValue(iconJTree.staticResource);

  var htmlResource = null;
  if (xml.keyValue(iconJTree.HTMLResource)) {
    htmlResource = xml.keyValue(iconJTree.HTMLResource);
  } else if (xml.keyValue(iconJTree.hTMLResource)) {
    htmlResource = xml.keyValue(iconJTree.hTMLResource);
  }

  this.htmlResource = htmlResource;

  var iframeResource = null;
  if (xml.keyValue(iconJTree.IFrameResource)) {
    iframeResource = xml.keyValue(iconJTree.IFrameResource);
  } else if (xml.keyValue(iconJTree.iFrameresource)) {
    iframeResource = xml.keyValue(iconJTree.iFrameresource);
  }

  this.iframeResource = iframeResource;

  this.iconViewTrackings = parseTrackings(iconJTree.iconViewTracking);

  if (iconJTree.iconClicks) {
    this.iconClickThrough = xml.keyValue(iconJTree.iconClicks.iconClickThrough);
    this.iconClickTrackings = parseTrackings(iconJTree.iconClicks.iconClickTracking);
  }

  // Local functions
  function parseTrackings(trackings) {
    if (trackings) {
      trackings = utilities.isArray(trackings) ? trackings : [trackings];
      return utilities.transformArray(trackings, function (trackings) {
        if (utilities.isNotEmptyString(trackings.keyValue)) {
          return trackings.keyValue;
        }
        return undefined;
      });
    }
    return [];
  }
}

module.exports = Icon;

},{"../../utils/utilityFunctions":43,"../../utils/xml":44,"./parsers":27}],12:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');
var Category = require('./Category');
var ViewableImpression = require('./ViewableImpression');
var Verification = require('./Verification');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function InLine(inlineJTree) {
  if (!(this instanceof InLine)) {
    return new InLine(inlineJTree);
  }

  //Required Fields
  this.adTitle = xml.keyValue(inlineJTree.adTitle);
  this.adSystem = xml.keyValue(inlineJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(inlineJTree.impression);
  this.creatives = Creative.parseCreatives(inlineJTree.creatives);

  //Optional Fields
  this.description = xml.keyValue(inlineJTree.description);
  this.advertiser = xml.keyValue(inlineJTree.advertiser);
  this.surveys = parseSurveys(inlineJTree.survey);
  //this.error = xml.keyValue(inlineJTree.error);
  this.errors = vastUtil.parseErrors(inlineJTree.error);
  this.pricing = xml.keyValue(inlineJTree.pricing);
  this.extensions = inlineJTree.extensions;
  if (this.extensions) {
	  this.moat = parseMoat(this.extensions);
  }
  if (window.mol_vastVersion === 4) {
	  if (inlineJTree.category) {
		  this.categories = Category.parseCategories(inlineJTree.category);
	  }
	  if (inlineJTree.viewableImpression) {
		  this.viewableImpression = new ViewableImpression(inlineJTree.viewableImpression);
	  }
	  if (inlineJTree.adVerifications) {
		  this.adVerifications = Verification.parseAdVerifications(inlineJTree.adVerifications);
	  }
  }

  /*** Local Functions ***/
  function parseSurveys(inlineSurveys) {
    if (inlineSurveys) {
      return utilities.transformArray(utilities.isArray(inlineSurveys) ? inlineSurveys : [inlineSurveys], function (survey) {
        if(utilities.isNotEmptyString(survey.keyValue)){
          return {
            uri: survey.keyValue,
            type: survey.attr('type')
          };
        }

        return undefined;
      });
    }
    return [];
  }

  function parseMoat(extensions) {
	  var getMoatConfigData = function(arrExtentions) {
		  for (var i = 0; i < arrExtentions.length; i++) {
			  var extension = arrExtentions[i].extension;
			  if (extension && extension.moat) {
				  var moat = {};
				  var value = xml.keyValue(extension.moat);
				  var arr = value.split(';');
				  for (var j = 0; j < arr.length; j++) {
					  var params = arr[j].split('=');
					  if (params && params.length === 2) {
						  moat[params[0]] = params[1];
					  }
				  }
				  return moat;
			  }
		  }
		  return undefined;
	  };
	  if (extensions) {
		  return getMoatConfigData(utilities.isArray(extensions) ? extensions : [extensions]);
	  }
	  return undefined;
  }
}


/**
 * Returns true if the browser supports all the creatives.
 */
InLine.prototype.isSupported = function(){
  var i,len;

  if(this.creatives.length === 0) {
    return false;
  }

  for(i = 0, len = this.creatives.length; i< len; i+=1){
    if(!this.creatives[i].isSupported()){
      return false;
    }
  }
  return true;
};

module.exports = InLine;

},{"../../utils/utilityFunctions":43,"../../utils/xml":44,"./Category":8,"./Creative":10,"./Verification":23,"./ViewableImpression":25,"./vastUtil":28}],13:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');
var utilities = require('../../utils/utilityFunctions');

function InteractiveCreativeFile(interactiveCreativeFileJTree) {
  if(!(this instanceof InteractiveCreativeFile)) {
    return new InteractiveCreativeFile(interactiveCreativeFileJTree);
  }

  this.type = interactiveCreativeFileJTree.attr('type');
  this.apiFramework = interactiveCreativeFileJTree.attr('apiFramework');
  this.src = xml.keyValue(interactiveCreativeFileJTree);
}

InteractiveCreativeFile.parseInteractiveCreativeFiles = function parseInteractiveCreativeFiles(icfsJTree) {
  var interactiveCreativeFiles = [];
  var interactiveCreativeFilesData;
  if (utilities.isDefined(icfsJTree)) {
	  interactiveCreativeFilesData = utilities.isArray(icfsJTree) ? icfsJTree : [icfsJTree];
	  interactiveCreativeFilesData.forEach(function (fileJTree) {
		  interactiveCreativeFiles.push(new InteractiveCreativeFile(fileJTree));
    });
  }
  return interactiveCreativeFiles;
};

module.exports = InteractiveCreativeFile;

},{"../../utils/utilityFunctions":43,"../../utils/xml":44}],14:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');
var MediaFile = require('./MediaFile');
var VideoClicks = require('./VideoClicks');
var InteractiveCreativeFile = require('./InteractiveCreativeFile');
var Icon = require('./Icon');

var utilities = require('../../utils/utilityFunctions');
var parsers = require('./parsers');

var xml = require('../../utils/xml');


function Linear(linearJTree) {
  if (!(this instanceof Linear)) {
    return new Linear(linearJTree);
  }

  //Required Elements
  this.duration = parsers.duration(xml.keyValue(linearJTree.duration));
  this.mediaFiles = parseMediaFiles(linearJTree.mediaFiles && linearJTree.mediaFiles.mediaFile);

  //Optional fields
  this.trackingEvents = parseTrackingEvents(linearJTree.trackingEvents && linearJTree.trackingEvents.tracking, this.duration);
  this.skipoffset = parsers.offset(xml.attr(linearJTree, 'skipoffset'), this.duration);
  
  // adjust skipoffset to publisher settings
  if (this.duration && window._molSettings && window._molSettings.skippable) {
	  if (window._molSettings.skippable.enabled) {
		 if (this.duration >= window._molSettings.skippable.videoThreshold) {
			 this.skipoffset = window._molSettings.skippable.videoOffset;
		 }
		 else {
			 this.skipoffset = null; 
		 }
	  }
	  else {
		  this.skipoffset = null; 
	  }
  }

  if (linearJTree.videoClicks) {
    this.videoClicks = new VideoClicks(linearJTree.videoClicks);
  }

  if(linearJTree.adParameters) {
    this.adParameters = xml.keyValue(linearJTree.adParameters);

    if(xml.attr(linearJTree.adParameters, 'xmlEncoded')) {
      this.adParameters = xml.decode(this.adParameters);
    }
  }
  
  if (window.mol_vastVersion === 4) {
	  if (linearJTree.mediaFiles && linearJTree.mediaFiles.mezzanine) {
		  this.mezzanine = xml.keyValue(linearJTree.mediaFiles.mezzanine);
	  }
	  if (linearJTree.mediaFiles && linearJTree.mediaFiles.interactiveCreativeFile) {
		  this.interactiveCreativeFiles = InteractiveCreativeFile.parseInteractiveCreativeFiles(linearJTree.mediaFiles.interactiveCreativeFile);
	  }
  }

  if (linearJTree.icons) {
    this.icons = parseIcons(linearJTree.icons && linearJTree.icons.icon);
  }

  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents, duration) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData, duration));
      });
    }
    return trackings;
  }

  function parseMediaFiles(mediaFilesJxonTree) {
    var mediaFiles = [];
    if (utilities.isDefined(mediaFilesJxonTree)) {
      mediaFilesJxonTree = utilities.isArray(mediaFilesJxonTree) ? mediaFilesJxonTree : [mediaFilesJxonTree];

      mediaFilesJxonTree.forEach(function (mfData) {
        mediaFiles.push(new MediaFile(mfData));
      });
    }
    return mediaFiles;
  }

  function parseIcons(iconsJxonTree) {
    var icons = [];
    if (utilities.isDefined(iconsJxonTree)) {
      iconsJxonTree = utilities.isArray(iconsJxonTree) ? iconsJxonTree : [iconsJxonTree];

      iconsJxonTree.forEach(function (iconData) {
        icons.push(new Icon(iconData));
      });
    }
    return icons;
  }
}

/**
 * Must return true if at least one of the MediaFiles' type is supported
 */
Linear.prototype.isSupported = function () {
  var i, len;
  for(i=0, len=this.mediaFiles.length; i<len; i+=1) {
    if(this.mediaFiles[i].isSupported()) {
      return true;
    }
  }

  return false;
};

module.exports = Linear;

},{"../../utils/utilityFunctions":43,"../../utils/xml":44,"./Icon":11,"./InteractiveCreativeFile":13,"./MediaFile":15,"./TrackingEvent":16,"./VideoClicks":24,"./parsers":27}],15:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');
var vastUtil = require('./vastUtil');

var attributesList = [
  //Required attributes
  'delivery',
  'type',
  'width',
  'height',
  //Optional attributes
  'codec',
  'id',
  'bitrate',
  'minBitrate',
  'maxBitrate',
  'scalable',
  'maintainAspectRatio',
  'apiFramework'
];

function MediaFile(mediaFileJTree) {
  if (!(this instanceof MediaFile)) {
    return new MediaFile(mediaFileJTree);
  }

  //Required attributes
  this.src = xml.keyValue(mediaFileJTree);

  for(var x=0; x<attributesList.length; x++) {
    var attribute = attributesList[x];
    this[attribute] = mediaFileJTree.attr(attribute);
  }
}

MediaFile.prototype.isSupported = function(){
  if(vastUtil.isVPAID(this)) {
    return !!vastUtil.findSupportedVPAIDTech(this.type);
  }

  if (this.type === 'video/x-flv') {
    return false;
  }

  return true;
};

module.exports = MediaFile;

},{"../../utils/xml":44,"./vastUtil":28}],16:[function(require,module,exports){
'use strict';

var parsers = require('./parsers');

var xml = require('../../utils/xml');

function TrackingEvent(trackingJTree, duration) {
  if (!(this instanceof TrackingEvent)) {
    return new TrackingEvent(trackingJTree, duration);
  }

  this.name = trackingJTree.attr('event');
  this.uri = xml.keyValue(trackingJTree);

  if('progress' === this.name) {
    this.offset = parsers.offset(trackingJTree.attr('offset'), duration);
  }
}

module.exports = TrackingEvent;
},{"../../utils/xml":44,"./parsers":27}],17:[function(require,module,exports){
'use strict';

function UniversalAdId(universalAdIdJTree) {
	  if(!(this instanceof UniversalAdId)) {
	    return new UniversalAdId(universalAdIdJTree);
	  }

	  this.idRegistry = universalAdIdJTree.attr('idRegistry');
	  this.idValue = universalAdIdJTree.attr('idValue');
}

module.exports = UniversalAdId;

},{}],18:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var http = require('../../utils/http').http;
var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

var logger = require ('../../utils/consoleLogger');

function VASTClient(options) {
  if (!(this instanceof VASTClient)) {
    return new VASTClient(options);
  }
  var defaultOptions = {
    WRAPPER_LIMIT: options && options.wrapperLimit && options.wrapperLimit > 0 ? options.wrapperLimit : 5
  };

  options = options || {};
  this.settings = utilities.extend({}, options, defaultOptions);
  this.errorURLMacros = [];
}

VASTClient.prototype.getVASTResponse = function getVASTResponse(adTagUrl, callback) {
  var that = this;

  var error = sanityCheck(adTagUrl, callback);
  if (error) {
    if (utilities.isFunction(callback)) {
      return callback(error);
    }
    throw error;
  }

  async.waterfall([
      this._getVASTAd.bind(this, adTagUrl),
      buildVASTResponse
    ],
    callback);

  /*** Local functions ***/
  function buildVASTResponse(adsChain, cb) {
    try {
      var response = that._buildVASTResponse(adsChain);
      cb(null, response);
    } catch (e) {
      cb(e);
    }
  }

  function sanityCheck(adTagUrl, cb) {
    if (!adTagUrl) {
      return new VASTError('on VASTClient.getVASTResponse, missing ad tag URL');
    }

    if (!utilities.isFunction(cb)) {
      return new VASTError('on VASTClient.getVASTResponse, missing callback function');
    }
  }
};

VASTClient.prototype._getVASTAd = function (adTagUrl, callback) {
  var that = this;

  getAdWaterfall(adTagUrl, function (error, vastTree) {
    var waterfallAds = vastTree && utilities.isArray(vastTree.ads) ? vastTree.ads : null;
    if (error) {
      that._trackError(error, waterfallAds);
      return callback(error, waterfallAds);
    }
    getAd(waterfallAds.shift(), [], waterfallHandler);

    /*** Local functions ***/
    function waterfallHandler(error, adChain) {
      if (error) {
        that._trackError(error, adChain);
        if (waterfallAds.length > 0) {
          getAd(waterfallAds.shift(),[], waterfallHandler);
        } else {
          callback(error, adChain);
        }
      } else {
        callback(null, adChain);
      }
    }
  });

  /*** Local functions ***/
  function getAdWaterfall(adTagUrl, callback) {
    var requestVastXML = that._requestVASTXml.bind(that, adTagUrl);
    async.waterfall([
      requestVastXML,
      buildVastWaterfall
    ], callback);
  }

  function buildVastWaterfall(xmlStr, callback) {
    var vastTree;
    try {
      vastTree = xml.toJXONTree(xmlStr);
      logger.debug ("built JXONTree from VAST response:", vastTree);

      if(utilities.isArray(vastTree.ad)) {
        vastTree.ads = vastTree.ad;
      } else if(vastTree.ad){
        vastTree.ads = [vastTree.ad];
      } else {
        vastTree.ads = [];
      }
      callback(validateVASTTree(vastTree), vastTree);

    } catch (e) {
      callback(new VASTError("on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml", 100), null);
    }
  }

  function validateVASTTree(vastTree) {
    var vastVersion = xml.attr(vastTree, 'version');

    if (!vastTree.ad) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree', 303);
    }

    //if (vastVersion && (vastVersion != 3 && vastVersion != 2)) {
    if (vastVersion && (vastVersion != 3 && vastVersion != 2 && vastVersion != 4)) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, not supported VAST version "' + vastVersion + '"', 102);
    }
    window.mol_vastVersion = vastVersion;

    return null;
  }

  function getAd(adTagUrl, adChain, callback) {
    if (adChain.length >= that.settings.WRAPPER_LIMIT) {
      return callback(new VASTError("on VASTClient.getVASTAd.getAd, player's wrapper limit reached (the limit is " + 
        that.settings.WRAPPER_LIMIT + ")", 302), adChain);
    }

    async.waterfall([
      function (next) {
        if (utilities.isString(adTagUrl)) {
          requestVASTAd(adTagUrl, next);
        } else {
          next(null, adTagUrl);
        }
      },
      buildAd
    ], function (error, ad) {
      if (ad) {
        adChain.push(ad);
      }

      if (error) {
        return callback(error, adChain);
      }

      if (ad.wrapper) {
        return getAd(ad.wrapper.VASTAdTagURI, adChain, callback);
      }

      return callback(null, adChain);
    });
  }

  function buildAd(adJxonTree, callback) {
    try {
      var ad = new Ad(adJxonTree);
      callback(validateAd(ad), ad);
    } catch (e) {
      callback(new VASTError('on VASTClient.getVASTAd.buildAd, error parsing xml', 100), null);
    }
  }

  function validateAd(ad) {
    var wrapper = ad.wrapper;
    var inLine = ad.inLine;
    var errMsgPrefix = 'on VASTClient.getVASTAd.validateAd, ';

    if (inLine && wrapper) {
      return new VASTError(errMsgPrefix +"InLine and Wrapper both found on the same Ad", 101);
    }

    if (!inLine && !wrapper) {
      return new VASTError(errMsgPrefix + "nor wrapper nor inline elements found on the Ad", 101);
    }

    if (inLine && !inLine.isSupported()) {
      return new VASTError(errMsgPrefix + "could not find MediaFile that is supported by this video player", 403);
    }

    if (wrapper && !wrapper.VASTAdTagURI) {
      return new VASTError(errMsgPrefix + "missing 'VASTAdTagURI' in wrapper", 101);
    }

    return null;
  }

  function requestVASTAd(adTagUrl, callback) {
    that._requestVASTXml(adTagUrl, function (error, xmlStr) {
      if (error) {
        return callback(error);
      }
      try {
        var vastTree = xml.toJXONTree(xmlStr);
        callback(validateVASTTree(vastTree), vastTree.ad);
      } catch (e) {
        callback(new VASTError("on VASTClient.getVASTAd.requestVASTAd, error parsing xml", 100));
      }
    });
  }
};

VASTClient.prototype._requestVASTXml = function requestVASTXml(adTagUrl, callback) {
  try {
    if (utilities.isFunction(adTagUrl)) {
      adTagUrl(requestHandler);
    } else {
      logger.info ("requesting adTagUrl: " + adTagUrl);
      http.get(adTagUrl, requestHandler, {
        withCredentials: true
      });
    }
  } catch (e) {
    callback(e);
  }

  /*** Local functions ***/
  function requestHandler(error, response, status) {
    if (error) {
      var errMsg = utilities.isDefined(status) ?
      "on VASTClient.requestVastXML, HTTP request error with status '" + status + "'" :
        "on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn";
      return callback(new VASTError(errMsg, 301), null);
    }

    callback(null, response);
  }
};

VASTClient.prototype._buildVASTResponse = function buildVASTResponse(adsChain) {
  var response = new VASTResponse();
  addAdsToResponse(response, adsChain);
  validateResponse(response);

  return response;

  //*** Local function ****
  function addAdsToResponse(response, ads) {
    ads.forEach(function (ad) {
      response.addAd(ad);
    });
  }

  function validateResponse(response) {
    var progressEvents = response.trackingEvents.progress;

    if (!response.hasLinear()) {
      throw new VASTError("on VASTClient._buildVASTResponse, Received an Ad type that is not supported", 200);
    }

    if (response.duration === undefined) {
      throw new VASTError("on VASTClient._buildVASTResponse, Missing duration field in VAST response", 101);
    }

    if (progressEvents) {
      progressEvents.forEach(function (progressEvent) {
        if (!utilities.isNumber(progressEvent.offset)) {
          throw new VASTError("on VASTClient._buildVASTResponse, missing or wrong offset attribute on progress tracking event", 101);
        }
      });
    }
  }
};

VASTClient.prototype._trackError = function (error, adChain) {
  if (!utilities.isArray(adChain) || adChain.length === 0) { //There is nothing to track
    return;
  }

  var errorURLMacros = [];
  adChain.forEach(addErrorUrlMacros);
  vastUtil.track(errorURLMacros, {ERRORCODE: error.code || 900});  //900 <== Undefined error

  /*** Local functions  ***/
  function addErrorUrlMacros(ad) {
    /*if (ad.wrapper && ad.wrapper.error && typeof(ad.wrapper.error) === 'string') {
        errorURLMacros.push(ad.wrapper.error);
    }

    if (ad.inLine && ad.inLine.error && typeof(ad.inLine.error) === 'string') {
    	errorURLMacros.push(ad.inLine.error);
    }*/
	  
      if (ad.wrapper && ad.wrapper.errors && Array.isArray(ad.wrapper.errors)) {
    	  errorURLMacros = errorURLMacros.concat(ad.wrapper.errors);
      }

      if (ad.inLine && ad.inLine.errors && Array.isArray(ad.inLine.errors)) {
    	  errorURLMacros = errorURLMacros.concat(ad.inLine.errors);
      }
  }
};

module.exports = VASTClient;

},{"../../utils/async":36,"../../utils/consoleLogger":37,"../../utils/http":39,"../../utils/utilityFunctions":43,"../../utils/xml":44,"./Ad":7,"./VASTError":19,"./VASTResponse":21,"./vastUtil":28}],19:[function(require,module,exports){
'use strict';

function VASTError(message, code) {
  this.message = 'VAST Error: ' + (message || '');
  if (code) {
    this.code = code;
  }
}

VASTError.prototype = new Error();
VASTError.prototype.name = "VAST Error";

module.exports = VASTError;
},{}],20:[function(require,module,exports){
'use strict';

/**
 * Inner helper class that deals with the logic of the individual steps needed to setup an ad in the player.
 *
 * @param player {object} instance of the player that will play the ad. It assumes that the videojs-contrib-ads plugin
 *                        has been initialized when you use its utility functions.
 *
 * @constructor
 */

var VASTResponse = require('./VASTResponse');
var VASTError = require('./VASTError');
var VASTTracker = require('./VASTTracker');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

var logger = require ('../../utils/consoleLogger');

function VASTIntegrator(player) {
  if (!(this instanceof VASTIntegrator)) {
    return new VASTIntegrator(player);
  }

  this.player = player;
  this.enableFullscreenClickIFrame = false;
}

VASTIntegrator.prototype.playAd = function playAd(vastResponse, callback) {
  var that = this;
  callback = callback || utilities.noop;

  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('On VASTIntegrator, missing required VASTResponse'));
  }

  async.waterfall([
    function (next) {
      next(null, vastResponse);
    },
    this._selectAdSource.bind(this),
    this._createVASTTracker.bind(this),
    this._addClickThrough.bind(this),
    this._addClickThroughDivBlocker.bind(this),
    this._addSkipButton.bind(this),
    this._setupEvents.bind(this),
    this._playSelectedAd.bind(this)
  ], function (error, response) {
    if (error && response) {
        if (window.MoatApiReference) {
        	window.MoatApiReference.dispatchEvent({type: 'AdError', adVolume: that.player.volume()});
        }
      that._trackError(error, response);
    }
    callback(error, response);
  });

  this._adUnit = {
    _src: null,
    type: 'VAST',
    pauseAd: function () {
      that.player.pause(true);
    },

    resumeAd: function () {
      that.player.play(true);
    },

    isPaused: function () {
      return that.player.paused(true);
    },

    getSrc: function () {
      return this._src;
    }
  };

  return this._adUnit;
};

VASTIntegrator.prototype._selectAdSource = function selectAdSource(response, callback) {
  var source;

  var playerWidth = dom.getDimension(this.player.el()).width;
  response.mediaFiles.sort(function compareTo(a, b) {
    var deltaA = Math.abs(playerWidth - a.width);
    var deltaB = Math.abs(playerWidth - b.width);
    return deltaA - deltaB;
  });

  source = this.player.selectSource(response.mediaFiles).source;
  if (source) {
    this.player.trigger({type: 'trace.message', data: {message: 'Playing ' + source.src + ' (type = ' + source.type + ')'}});
  }
  
  if (source) {
    logger.info ("selected source: ", source);
    if (this._adUnit) {
      this._adUnit._src = source;
    }
    return callback(null, source, response);
  }

  // code 403 <== Couldn't find MediaFile that is supported by this video player
  callback(new VASTError("Could not find Ad mediafile supported by this player", 403), response);
};

VASTIntegrator.prototype._createVASTTracker = function createVASTTracker(adMediaFile, response, callback) {
  try {
    callback(null, adMediaFile, new VASTTracker(adMediaFile.src, response), response);
  } catch (e) {
    callback(e, response);
  }
};

VASTIntegrator.prototype._setupEvents = function setupEvents(adMediaFile, tracker, response, callback) {
  var previouslyMuted;
  var player = this.player;
  player.on('fullscreenchange', trackFullscreenChange);
  player.on('vast.adStart', trackImpressions);
  player.on('pause', trackPause);
  player.on('timeupdate', trackProgress);
  player.on('volumechange', trackVolumeChange);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], unbindEvents);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adSkip'], function(evt){
    if(evt.type === 'vast.adEnd'){
      tracker.trackComplete();
    }
    if (window.MoatApiReference) {
    	var type = evt.type === 'vast.adEnd' ? 'AdVideoComplete' : 'AdStopped';
  	  window.MoatApiReference.dispatchEvent({type: type, adVolume: player.volume()});
    }
  });
  
  player.one('adStop', function() {
	 player.trigger('vast.adsCancel'); 
  });

  return callback(null, adMediaFile, response);

  /*** Local Functions ***/
  function unbindEvents() {
    player.off('fullscreenchange', trackFullscreenChange);
    player.off('vast.adStart', trackImpressions);
    player.off('pause', trackPause);
    player.off('timeupdate', trackProgress);
    player.off('volumechange', trackVolumeChange);
  }

  function trackFullscreenChange() {
    if (player.isFullscreen()) {
      tracker.trackFullscreen();
    } else {
      tracker.trackExitFullscreen();
    }
  }

  function trackPause() {
    //NOTE: whenever a video ends the video Element triggers a 'pause' event before the 'ended' event.
    //      We should not track this pause event because it makes the VAST tracking confusing again we use a
    //      Threshold of 2 seconds to prevent false positives on IOS.
		if (window._molSettings.breakDuration) {
			if (window._molSettings.realVideoDuration) {
			    if (Math.abs(window._molSettings.realVideoDuration - player.currentTime()) < 2) {
			        return;
			    }
			}
		}
		else if (Math.abs(player.duration() - player.currentTime()) < 2) {
	      return;
	    }

    if (window.MoatApiReference) {
    	  window.MoatApiReference.dispatchEvent({type: 'AdPaused', adVolume: player.volume()});
    }
    tracker.trackPause();
    playerUtils.showBigPlayButton(player, true);
    playerUtils.once(player, ['play', 'vast.adEnd', 'vast.adsCancel'], function (evt) {
      if(evt.type === 'play'){
	    if (window.MoatApiReference) {
	    	  window.MoatApiReference.dispatchEvent({type: 'AdPlaying', adVolume: player.volume()});
	    }
        tracker.trackResume();
        playerUtils.showBigPlayButton(player, false);
      }
    });
  }

  function trackProgress() {
    var currentTimeInMs = player.currentTime() * 1000;
    tracker.trackProgress(currentTimeInMs);
  }

  function trackImpressions() {
    if (window.MoatApiReference) {
    	  window.MoatApiReference.dispatchEvent({type: 'AdImpression', adVolume: player.volume()});
    }
    tracker.trackImpressions();
    tracker.trackCreativeView();
  }

  function trackVolumeChange() {
    if (window.MoatApiReference) {
  	  window.MoatApiReference.dispatchEvent({type: 'AdVolumeChange', adVolume: player.volume()});
    }
    var muted = player.muted();
    if (muted) {
      tracker.trackMute();
    } else if (previouslyMuted) {
      tracker.trackUnmute();
    }
    previouslyMuted = muted;
  }
};

VASTIntegrator.prototype._addSkipButton = function addSkipButton(source, tracker, response, callback) {
  var skipOffsetInSec;
  var that = this;

  if (utilities.isNumber(response.skipoffset)) {
    skipOffsetInSec = response.skipoffset / 1000;
    addSkipButtonToPlayer(this.player, skipOffsetInSec);
  }
  callback(null, source, tracker, response);

  /*** Local function ***/
  function addSkipButtonToPlayer(player, skipOffset) {
    var skipButton = createSkipButton(player);
    var updateSkipButton = updateSkipButtonState.bind(that, skipButton, skipOffset, player);

    player.el().appendChild(skipButton);
    player.on('timeupdate', updateSkipButton);

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

    function removeSkipButton() {
      player.off('timeupdate', updateSkipButton);
      dom.remove(skipButton);
    }
  }

  function createSkipButton(player) {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");
    skipButton.id = 'adSkipButton';

    skipButton.onclick = function (e) {
      if (dom.hasClass(skipButton, 'enabled')) {
          if (window.MoatApiReference) {
        	  window.MoatApiReference.dispatchEvent({type: 'AdSkipped', adVolume: player.volume()});
          }
        tracker.trackSkip();
        player.trigger('vast.adSkip');
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

  function updateSkipButtonState(skipButton, skipOffset, player) {
    var timeLeft = Math.ceil(skipOffset - player.currentTime());
    // if skip button enabled never show before-button skip text
    if (timeLeft > 0 && !dom.hasClass(skipButton, 'enabled')) {
        skipButton.innerHTML = '<p class="vast-skip-button-text">' + window._molSettings.skipText.replace('%%TIME%%', utilities.toFixedDigits(timeLeft, 2)) + '</p>';
    } else {
      if (!dom.hasClass(skipButton, 'enabled')) {
        dom.addClass(skipButton, 'enabled');
        skipButton.innerHTML = window._molSettings.skipButtonText;
      }
    }
    var iframeBackButton = window.document.getElementById('iframeBackButton');
    if (!iframeBackButton) {
        skipButton.style.display = 'block';
    }
  }
};

VASTIntegrator.prototype._addClickThrough = function addClickThrough(mediaFile, tracker, response, callback) {
  var enableFullscreenClickIFrame = this.enableFullscreenClickIFrame;
  
  var player = this.player;
  var blocker = createClickThroughBlocker(player, tracker, response);
  var updateBlocker = updateBlockerURL.bind(this, blocker, response, player);

  player.el().insertBefore(blocker, player.controlBar.el());
  player.on('timeupdate', updateBlocker);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeBlocker);
  
  if (enableFullscreenClickIFrame) {
	  player.on('fullscreenchange', updateDisplayStyle);
  }

  return callback(null, mediaFile, tracker, response);

  /*** Local Functions ***/

  function createClickThroughBlocker(player, tracker, response) {
		if (window._molSettings.disableClickThru) {
		    var blockerDiv = window.document.createElement("div");
		    dom.addClass(blockerDiv, 'vast-blocker');
			return blockerDiv;
		}
    var blocker = window.document.createElement("a");
    var clickThroughMacro = response.clickThrough;

    dom.addClass(blocker, 'vast-blocker');
    // 'a' tag in iOS sometime does not navigate. We will use window.open to navigate for iOS.
    if (!utilities.isIDevice()) {
      blocker.href = generateClickThroughURL(clickThroughMacro, player);
    }

    if (utilities.isString(clickThroughMacro)) {
      blocker.target = "_blank";
    }

    var clickHandler = function(e) {
        if (player.paused()) {
            player.play();

            //We prevent event propagation to avoid problems with the player's normal pause mechanism
            if (window.Event.prototype.stopPropagation !== undefined) {
              e.stopPropagation();
            }
            return false;
        }

        player.pause();
        tracker.trackClick();

        if (window.MoatApiReference) {
          window.MoatApiReference.dispatchEvent({type: 'AdClickThru', adVolume: player.volume()});
        }
        if (utilities.isIDevice()) {
          // We are using window.open to navigate for iOS.
          setTimeout(function() {
            window.open(generateClickThroughURL(clickThroughMacro, player), '_blank');
          }, 1);
          if (window.Event.prototype.stopPropagation !== undefined) {
              e.stopPropagation();
          }
          // player.pause() in iOS sometime does not work. To make sure player paused we will try pause player in 500 msecs.
          setTimeout(function() {
            if (!player.paused()) {
              player.pause();
            }
          }, 500);
        }
        // Brightcove has a bug where they send an "ended" event if paused within a couple seconds of the video end. In this case, the listener
        // that shows the big play button (among other things) gets removed before the handler fires. This fix makes sure the big button still appears.
        var remaining = player.duration() - player.currentTime();
        if (remaining < 3 && remaining > 0) {
          setTimeout(function () {
            playerUtils.showBigPlayButton(player, true);
            playerUtils.once(player, ['playing', 'vast.adEnd', 'vast.adsCancel', 'vast.adSkip'], function () {
              playerUtils.showBigPlayButton(player, false);
            });
          }, 500);
        }
    };
  
    if (utilities.isIDevice()) {
      blocker.ontouchend = clickHandler;
    }
    else {
      blocker.onclick = clickHandler;
    }
    
    if (player.isFullscreen() && enableFullscreenClickIFrame) {
    	blocker.style.display = 'none';
    }

    return blocker;
  }

  function updateBlockerURL(blocker, response, player) {
    // 'a' tag in iOS sometime does not navigate. We will use window.open to navigate for iOS.
    if (!utilities.isIDevice()) {
      blocker.href = generateClickThroughURL(response.clickThrough, player);
    }
  }

  function generateClickThroughURL(clickThroughMacro, player) {
    var variables = {
      ASSETURI: mediaFile.src,
      CONTENTPLAYHEAD: vastUtil.formatProgress(player.currentTime() * 1000)
    };

    return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : '#';
  }
  
  function updateDisplayStyle() {
	  blocker.style.display = player.isFullscreen() ? 'none' : 'block';
  }

  function removeBlocker() {
    player.off('timeupdate', updateBlocker);
	player.off('fullscreenchange', updateDisplayStyle);
    dom.remove(blocker);
  }
};

VASTIntegrator.prototype._addClickThroughDivBlocker = function addClickThrough(mediaFile, tracker, response, callback) {
	if (!this.enableFullscreenClickIFrame) {
		return callback(null, mediaFile, tracker, response);
	}
	var player = this.player;
	  var blocker = createClickThroughDiv(player, tracker, response);
	  var updateBlocker = updateBlockerURL.bind(this, blocker, response, player);
	  var blockerUrl;
	  var iFrame;
	  var iFrameBackButton;

	  player.el().insertBefore(blocker, player.controlBar.el());
	  player.on('timeupdate', updateBlocker);
	  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeBlocker);

	  player.on('fullscreenchange', updateDisplayStyle);

	  return callback(null, mediaFile, tracker, response);
	
	  function createClickThroughDiv(player, tracker) {
	    var blocker = window.document.createElement("div");

	    dom.addClass(blocker, 'vast-blocker');

		if (!window._molSettings.disableClickThru) {
		    blocker.onclick = function (e) {
		      if (player.paused()) {
		        player.play();
	
		        //We prevent event propagation to avoid problems with the player's normal pause mechanism
		        if (window.Event.prototype.stopPropagation !== undefined) {
		          e.stopPropagation();
		        }
		        return false;
		      }
	
		      player.pause();
		      tracker.trackClick();
	
		      if (window.MoatApiReference) {
		    	  window.MoatApiReference.dispatchEvent({type: 'AdClickThru', adVolume: player.volume()});
		      }
		      
		      // create IFrame with back button
		      iFrame = window.document.createElement("iframe");
			  dom.addClass(iFrame, 'vast-blocker');
			  iFrame.src = blockerUrl;
			  blocker.appendChild(iFrame);
			  
			  iFrameBackButton = window.document.createElement("div");
			  dom.addClass(iFrameBackButton, "vast-back-button");
		      dom.addClass(iFrameBackButton, 'enabled');
			  iFrameBackButton.innerHTML = "Back";
			  iFrameBackButton.id = 'iframeBackButton';
			  blocker.appendChild(iFrameBackButton);
			  iFrameBackButton.addEventListener ("click", function() {
				  blocker.removeChild(iFrame);
				  iFrame = null;
				  blocker.removeChild(iFrameBackButton);
				  iFrameBackButton = null;
	
				  // show controls
				  var skipButton = window.document.getElementById('adSkipButton');
				  if (skipButton) {
					  skipButton.style.display = 'block'; 
				  }
				  player.controls(true);
				  
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
	
		    };
		}

	    if (!player.isFullscreen()) {
	    	blocker.style.display = 'none';
	    }

	    return blocker;
	  }

	  function updateBlockerURL(blocker, response, player) {
		  blockerUrl = generateClickThroughURL(response.clickThrough, player);
	  }

	  function generateClickThroughURL(clickThroughMacro, player) {
	    var variables = {
	      ASSETURI: mediaFile.src,
	      CONTENTPLAYHEAD: vastUtil.formatProgress(player.currentTime() * 1000)
	    };

	    return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : '#';
	  }

	  function updateDisplayStyle() {
		  blocker.style.display = player.isFullscreen() ? 'block' : 'none';
		  if (!player.isFullscreen() && iFrame) {
			  blocker.removeChild(iFrame);
			  iFrame = null;
			  blocker.removeChild(iFrameBackButton);
			  iFrameBackButton = null;
			  
			  playerUtils.showBigPlayButton(player, true);
			  var skipButton = window.document.getElementById('adSkipButton');
			  if (skipButton) {
				  skipButton.style.display = 'none'; 
			  }
			  player.controls(true);
		  }
	  }

	  function removeBlocker() {
	    player.off('timeupdate', updateBlocker);
		player.off('fullscreenchange', updateDisplayStyle);
	    dom.remove(blocker);
	  }
};

VASTIntegrator.prototype._playSelectedAd = function playSelectedAd(source, response, callback) {
  var player = this.player;

  // This check is necessary to prevent a race condition where the ad loading waterfall may reach this point after ads were cancelled (mid-waterfall).
  if (this.player.vast.adsCancelled === true) {
    callback(null);
    return;
  }

  //window.MoatApiReference = null;

  player.preload("auto"); //without preload=auto the durationchange event is never fired
  player.src(source);

  logger.debug ("<VASTIntegrator._playSelectedAd> waiting for durationchange to play the ad...");

  playerUtils.once(player, ['durationchange', 'error', 'vast.adsCancel'], function (evt) {
    if (evt.type === 'durationchange') {
      logger.debug ("<VASTIntegrator._playSelectedAd> got durationchange; calling playAd()");
      playAd();
    } else if(evt.type === 'error') {
      callback(new VASTError("on VASTIntegrator, Player is unable to play the Ad", 400), response);
    }
    //NOTE: If the ads get canceled we do nothing/
  });

  /**** local functions ******/
  function playAd() {

    playerUtils.once(player, ['playing', 'vast.adsCancel'], function (evt) {
      if(evt.type === 'vast.adsCancel'){
        return;
      }

      /*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/
      /*function initMoatTracking(a,c,d,h,k){var f=document.createElement("script"),b=[];c={adData:{ids:c,duration:d,url:k},dispatchEvent:function(a){this.sendEvent?(b&&(b.push(a),a=b,b=!1),this.sendEvent(a)):b.push(a)}};d="_moatApi"+Math.floor(1E8*Math.random());var e,g;try{e=a.ownerDocument,g=e.defaultView||e.parentWindow}catch(l){e=document,g=window}g[d]=c;f.type="text/javascript";a&&a.insertBefore(f,a.childNodes[0]||null);f.src="https://z.moatads.com/"+h+"/moatvideo.js#"+d;return c};
      window.MoatApiReference = null;
      if (response.ads && response.ads.length > 0 && response.ads[0].inLine && response.ads[0].inLine.moat) {
    	  var ids = {level1: response.ads[0].inLine.moat.advid,
    			     level2: response.ads[0].inLine.moat.cpgid,
    			     level3: response.ads[0].inLine.moat.cpid,
    			     level4: response.ads[0].inLine.moat.crid};
    	  if (response.ads[0].inLine.moat.site_id) {
    		  ids.slicer1 = response.ads[0].inLine.moat.site_id;
    	  }
    	  window.MoatApiReference = initMoatTracking(player.el_, ids, player.duration(), response.ads[0].inLine.moat.partnercode, player.currentSource().src);
    	  //window.MoatApiReference = initMoatTracking(player.el_, ids, player.duration(), 'ninemediavpaid78961164', player.currentSource().src);
      }
      if (window._molSettings.viewabilityTracking) {
    	  window._molSettings.viewabilityTracking.init(window._molSettings.viewability.contextId, 
    			  player.duration(), player.el_.offsetWidth, player.el_.offsetHeight);
      }*/
      
      logger.debug ("<VASTIntegrator._playSelectedAd/playAd> got playing event; triggering vast.adStart...");

      player.trigger('vast.adStart');

      if (utilities.isMobile()) {
          // VIDLA-2336 (simulate user activity to make sure control-bar is visible on mobile devices)
          for (var i = 0; i < 5; i++) {
          	setTimeout(function() {
          		player.userActive(true);
          	}, i * 2000);
          }
      }

      if (window.MoatApiReference) {
    	  window.MoatApiReference.dispatchEvent({type: 'AdVideoStart', adVolume: player.volume()});
      }

      player.on('ended', proceed);
      player.on('vast.adsCancel', proceed);
      player.on('vast.adSkip', proceed);

      function proceed(evt) {

          if(evt.type === 'ended') {
              // Ignore ended event if the Ad time was not 'near' the end
              // avoids issues where IOS controls could skip the Ad
            	if (window._molSettings.breakDuration) {
            		if (window._molSettings.realVideoDuration) {
            		    if ((window._molSettings.realVideoDuration - player.currentTime()) > 3) {
            		        return;
            		    }
            		}
            	}
            	else if ((player.duration() - player.currentTime()) > 3) {
    				return;
    			}
            }

        /*if(evt.type === 'ended' && (player.duration() - player.currentTime()) > 3 ) {
          // Ignore ended event if the Ad time was not 'near' the end
          // avoids issues where IOS controls could skip the Ad
          return;
        }*/

        player.off('ended', proceed);
        player.off('vast.adsCancel', proceed);
        player.off('vast.adSkip', proceed);

        //NOTE: if the ads get cancel we do nothing apart removing the listners
        if(evt.type === 'ended' || evt.type === 'vast.adSkip'){
          callback(null, response);
        }
      }
    });

    logger.debug ("<VASTIntegrator._playSelectedAd/playAd> calling player.play()...");

    player.play();
  }
};

VASTIntegrator.prototype._trackError = function trackError(error, response) {
  vastUtil.track(response.errorURLMacros, {ERRORCODE: error.code || 900});
};

module.exports = VASTIntegrator;

},{"../../utils/async":36,"../../utils/consoleLogger":37,"../../utils/dom":38,"../../utils/playerUtils":41,"../../utils/utilityFunctions":43,"./VASTError":19,"./VASTResponse":21,"./VASTTracker":22,"./vastUtil":28}],21:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VideoClicks = require('./VideoClicks');
var Linear = require('./Linear');
var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

var utilities = require('../../utils/utilityFunctions');
//var xml = require('../../utils/xml');

window.InLine__A = InLine;
function VASTResponse() {
  if (!(this instanceof VASTResponse)) {
    return new VASTResponse();
  }

  this._linearAdded = false;
  this.vastVersion = undefined;
  this.ads = [];
  this.errorURLMacros = [];
  this.impressions = [];
  this.clickTrackings = [];
  this.customClicks = [];
  this.trackingEvents = {};
  this.mediaFiles = [];
  this.clickThrough = undefined;
  this.adTitle = '';
  this.duration = undefined;
  this.skipoffset = undefined;
  this.icons = [];
}

VASTResponse.prototype.addAd = function (ad) {
  var inLine, wrapper;
  if (ad instanceof Ad) {
    inLine = ad.inLine;
    wrapper = ad.wrapper;

    this.ads.push(ad);

    if (inLine) {
      this._addInLine(inLine);
    }

    if (wrapper) {
      this._addWrapper(wrapper);
    }
  }
};

/*VASTResponse.prototype._addErrorTrackUrl = function (error) {
	  var errorURL = error instanceof xml.JXONTree ? xml.keyValue(error) : error;
	  if (errorURL) {
	    this.errorURLMacros.push(errorURL);
	  }
	};*/
VASTResponse.prototype._addErrorTrackUrls = function (errors) {
	  utilities.isArray(errors) && appendToArray(this.errorURLMacros, errors);
	};

VASTResponse.prototype._addImpressions = function (impressions) {
  utilities.isArray(impressions) && appendToArray(this.impressions, impressions);
};

VASTResponse.prototype._addClickThrough = function (clickThrough) {
  if (utilities.isNotEmptyString(clickThrough)) {
    this.clickThrough = clickThrough;
  }
};

VASTResponse.prototype._addClickTrackings = function (clickTrackings) {
  utilities.isArray(clickTrackings) && appendToArray(this.clickTrackings, clickTrackings);
};

VASTResponse.prototype._addCustomClicks = function (customClicks) {
  utilities.isArray(customClicks) && appendToArray(this.customClicks, customClicks);
};

VASTResponse.prototype._addTrackingEvents = function (trackingEvents) {
  var eventsMap = this.trackingEvents;

  if (trackingEvents) {
    trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
    trackingEvents.forEach(function (trackingEvent) {
      if (!eventsMap[trackingEvent.name]) {
        eventsMap[trackingEvent.name] = [];
      }
      eventsMap[trackingEvent.name].push(trackingEvent);
    });
  }
};

VASTResponse.prototype._addTitle = function (title) {
  if (utilities.isNotEmptyString(title)) {
    this.adTitle = title;
  }
};

VASTResponse.prototype._addDuration = function (duration) {
  if (utilities.isNumber(duration)) {
    this.duration = duration;
  }
};

VASTResponse.prototype._addVideoClicks = function (videoClicks) {
  if (videoClicks instanceof VideoClicks) {
    this._addClickThrough(videoClicks.clickThrough);
    this._addClickTrackings(videoClicks.clickTrackings);
    this._addCustomClicks(videoClicks.customClicks);
  }
};

VASTResponse.prototype._addMediaFiles = function (mediaFiles) {
  utilities.isArray(mediaFiles) && appendToArray(this.mediaFiles, mediaFiles);
};

VASTResponse.prototype._addSkipoffset = function (offset) {
	  if (window._molSettings && window._molSettings.skippable) {
		  if (window._molSettings.skippable.enabled) {
			  if (!this.duration || !window._molSettings.skippable.videoThreshold || this.duration >= window._molSettings.skippable.videoThreshold) {
				  this.skipoffset = window._molSettings.skippable.videoOffset;
			  }
		  }
	  }
	  else if (offset) {
	    this.skipoffset = offset;
	  }
};

VASTResponse.prototype._addAdParameters = function (adParameters) {
  if (adParameters) {
    this.adParameters = adParameters;
  }
};

VASTResponse.prototype._addIcons = function (icons) {
  utilities.isArray(icons) && appendToArray(this.icons, icons);
};

VASTResponse.prototype._addLinear = function (linear) {
  if (linear instanceof Linear) {
    this._addDuration(linear.duration);
    this._addTrackingEvents(linear.trackingEvents);
    this._addVideoClicks(linear.videoClicks);
    this._addMediaFiles(linear.mediaFiles);
    this._addSkipoffset(linear.skipoffset);
    this._addAdParameters(linear.adParameters);
    this._addIcons(linear.icons);
    this._linearAdded = true;
  }
};

VASTResponse.prototype._addInLine = function (inLine) {
  var that = this;

  if (inLine instanceof InLine) {
    this._addTitle(inLine.adTitle);
    this._addErrorTrackUrls(inLine.errors);
    this._addImpressions(inLine.impressions);

    inLine.creatives.forEach(function (creative) {
      if (creative.linear) {
        that._addLinear(creative.linear);
      }
    });
  }
};

VASTResponse.prototype._addWrapper = function (wrapper) {
  var that = this;

  if (wrapper instanceof Wrapper) {
    this._addErrorTrackUrls(wrapper.errors);
    this._addImpressions(wrapper.impressions);

    wrapper.creatives.forEach(function (creative) {
      var linear = creative.linear;
      if (linear) {
        that._addVideoClicks(linear.videoClicks);
        that.clickThrough = undefined;//We ensure that no clickThrough has been added
        that._addTrackingEvents(linear.trackingEvents);
        that._addIcons(linear.icons);
      }
    });
  }
};

VASTResponse.prototype.hasLinear = function(){
  return this._linearAdded;
};

function appendToArray(array, items) {
  items.forEach(function (item) {
    if (item) {
      array.push(item);
    }
  });
}

module.exports = VASTResponse;


},{"../../utils/utilityFunctions":43,"./Ad":7,"./InLine":12,"./Linear":14,"./VideoClicks":24,"./Wrapper":26}],22:[function(require,module,exports){
'use strict';

var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');
var utilities = require('../../utils/utilityFunctions');

function VASTTracker(assetURI, vastResponse) {
  if (!(this instanceof VASTTracker)) {
    return new VASTTracker(assetURI, vastResponse);
  }

  this.sanityCheck(assetURI, vastResponse);
  this.initialize(assetURI, vastResponse);

}

VASTTracker.prototype.initialize = function(assetURI, vastResponse) {
  this.response = vastResponse;
  this.assetURI = assetURI;
  this.progress = 0;
  this.quartiles = {
    firstQuartile: {tracked: false, time: Math.round(25 * vastResponse.duration) / 100},
    midpoint: {tracked: false, time: Math.round(50 * vastResponse.duration) / 100},
    thirdQuartile: {tracked: false, time: Math.round(75 * vastResponse.duration) / 100}
  };
};

VASTTracker.prototype.sanityCheck = function(assetURI, vastResponse) {
  if (!utilities.isString(assetURI) || utilities.isEmptyString(assetURI)) {
    throw new VASTError('on VASTTracker constructor, missing required the URI of the ad asset being played');
  }

  if (!(vastResponse instanceof VASTResponse)) {
    throw new VASTError('on VASTTracker constructor, missing required VAST response');
  }
};

VASTTracker.prototype.trackURLs = function trackURLs(urls, variables) {
  if (utilities.isArray(urls) && urls.length > 0) {
    variables = utilities.extend({
      ASSETURI: this.assetURI,
      CONTENTPLAYHEAD: vastUtil.formatProgress(this.progress)
    }, variables || {});

    vastUtil.track(urls, variables);
  }
};

VASTTracker.prototype.trackEvent = function trackEvent(eventName, trackOnce) {
    if (this.response.trackingEvents[eventName] && window._molSettings.viewabilityTracking) {
    	  window._molSettings.viewabilityTracking.invokeEvent(eventName);
    }
  this.trackURLs(getEventUris(this.response.trackingEvents[eventName]));
  if (trackOnce) {
    this.response.trackingEvents[eventName] = undefined;
  }

  /*** Local function ***/
  function getEventUris(trackingEvents) {
    var uris;

    if (trackingEvents) {
      uris = [];
      trackingEvents.forEach(function (event) {
          if (!event.uri) {
              return;
          }

          uris.push(event.uri);
      });
    }
    return uris;
  }
};

VASTTracker.prototype.trackProgress = function trackProgress(newProgressInMs) {
  var that = this;
  var events = [];
  var ONCE = true;
  var ALWAYS = false;
  var trackingEvents = this.response.trackingEvents;

  if (utilities.isNumber(newProgressInMs)) {
    addTrackEvent('start', ONCE, newProgressInMs > 0);
    addTrackEvent('rewind', ALWAYS, hasRewound(this.progress, newProgressInMs));
    addQuartileEvents(newProgressInMs);
    trackProgressEvents(newProgressInMs);
    trackEvents();
    this.progress = newProgressInMs;
  }

  /*** Local function ***/
  function hasRewound(currentProgress, newProgress) {
    var REWIND_THRESHOLD = 3000; //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that there was a rewind an that it was on purpose.
    return currentProgress > newProgressInMs && Math.abs(newProgress - currentProgress) > REWIND_THRESHOLD;
  }

  function addTrackEvent(eventName, trackOnce, canBeAdded) {
    if (trackingEvents[eventName] && canBeAdded) {
      events.push({
        name: eventName,
        trackOnce: !!trackOnce
      });
    }
  }

  function addQuartileEvents(progress) {
    var quartiles = that.quartiles;
    var firstQuartile = that.quartiles.firstQuartile;
    var midpoint = that.quartiles.midpoint;
    var thirdQuartile = that.quartiles.thirdQuartile;

    if (!firstQuartile.tracked) {
      trackQuartile('firstQuartile', progress);
    } else if (!midpoint.tracked) {
      trackQuartile('midpoint', progress);
    } else if (!thirdQuartile.tracked){
      trackQuartile('thirdQuartile', progress);
    }

    /*** Local function ***/
    function trackQuartile(quartileName, progress){
      var quartile = quartiles[quartileName];
      if(canBeTracked(quartile, progress)){
        quartile.tracked = true;
        addTrackEvent(quartileName, ONCE, true);
      }
    }
  }

  function canBeTracked(quartile, progress) {
    var quartileTime = quartile.time;
    //We only fire the quartile event if the progress is bigger than the quartile time by 5 seconds at most.
    return progress >= quartileTime && progress <= (quartileTime + 5000);
  }

  function trackProgressEvents(progress) {
    if (!utilities.isArray(trackingEvents.progress)) {
      return; //Nothing to track
    }

    var pendingProgressEvts = [];

    trackingEvents.progress.forEach(function (evt) {
      if (evt.offset <= progress) {
        that.trackURLs([evt.uri]);
      } else {
        pendingProgressEvts.push(evt);
      }
    });
    trackingEvents.progress = pendingProgressEvts;
  }

  function trackEvents() {
    events.forEach(function (event) {
      that.trackEvent(event.name, event.trackOnce);
    });
  }
};

[
  'rewind',
  'fullscreen',
  'exitFullscreen',
  'pause',
  'resume',
  'mute',
  'unmute',
  'acceptInvitation',
  'acceptInvitationLinear',
  'collapse',
  'expand'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName);
    };
  });

[
  'start',
  'skip',
  'close',
  'closeLinear'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName, true);
    };
  });

[
  'firstQuartile',
  'midpoint',
  'thirdQuartile'
].forEach(function (quartile) {
    VASTTracker.prototype['track' + utilities.capitalize(quartile)] = function () {
      this.quartiles[quartile].tracked = true;
      this.trackEvent(quartile, true);
    };
  });

VASTTracker.prototype.trackComplete = function () {
  if(this.quartiles.thirdQuartile.tracked){
    this.trackEvent('complete', true);
  }
};

VASTTracker.prototype.trackErrorWithCode = function trackErrorWithCode(errorcode) {
  if (utilities.isNumber(errorcode)) {
    this.trackURLs(this.response.errorURLMacros, {ERRORCODE: errorcode});
  }
};

VASTTracker.prototype.trackImpressions = function trackImpressions() {
  this.trackURLs(this.response.impressions);
};

VASTTracker.prototype.trackCreativeView = function trackCreativeView() {
  this.trackEvent('creativeView');
};

VASTTracker.prototype.trackClick = function trackClick() {
    if (window._molSettings.viewabilityTracking) {
  	  window._molSettings.viewabilityTracking.invokeEvent('ad-click');
    }
  this.trackURLs(this.response.clickTrackings);
};

module.exports = VASTTracker;

},{"../../utils/utilityFunctions":43,"./VASTError":19,"./VASTResponse":21,"./vastUtil":28}],23:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');
var vastUtil = require('./vastUtil');
var utilities = require('../../utils/utilityFunctions');

function Verification(verificationJTree) {
  if(!(this instanceof Verification)) {
    return new Verification(verificationJTree);
  }

  this.vendor = verificationJTree.attr('vendor');
  if (verificationJTree.javaScriptResource) {
	  this.javaScriptResources = parseResources(verificationJTree.javaScriptResource);
  }
  if (vastUtil.isFlashSupported() && verificationJTree.flashResource) {
	  this.javaScriptResources = parseResources(verificationJTree.javaScriptResource);
  }
  if (verificationJTree.viewableImpression) {
	  this.viewableImpression = {id: verificationJTree.viewableImpression.attr('id'), uri: xml.keyValue(verificationJTree.viewableImpression)};
  }
  
  function parseResources(resources) {
	  var arr = [];
	  var arrData;
	  if (resources) {
		  arrData = utilities.isArray(resources) ? resources : [resources];
		  arrData.forEach(function (elem) {
			  arr.push({apiFramework: elem.attr('apiFramework'), uri: xml.keyValue(elem)});
		  });
	  }
	  return arr;
  }
}

Verification.parseAdVerifications = function parseAdVerifications(verificationsJTree) {
  var verifications = [];
  var verificationsData;
  if (utilities.isDefined(verificationsJTree) && utilities.isDefined(verificationsJTree.verification)) {
	  verificationsData = utilities.isArray(verificationsJTree.verification) ? verificationsJTree.verification : [verificationsJTree.verification];
	  verificationsData.forEach(function (verification) {
    	verifications.push(new Verification(verification));
    });
  }
  return verifications;
};

module.exports = Verification;

},{"../../utils/utilityFunctions":43,"../../utils/xml":44,"./vastUtil":28}],24:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function VideoClicks(videoClickJTree) {
  if (!(this instanceof VideoClicks)) {
    return new VideoClicks(videoClickJTree);
  }

  this.clickThrough = xml.keyValue(videoClickJTree.clickThrough);
  this.clickTrackings = parseClickTrackings(videoClickJTree.clickTracking);
  this.customClicks = parseClickTrackings(videoClickJTree.customClick);

  /*** Local functions ***/
  function parseClickTrackings(trackingData) {
    var clickTrackings = [];
    if (trackingData) {
      trackingData = utilities.isArray(trackingData) ? trackingData : [trackingData];
      trackingData.forEach(function (clickTrackingData) {
        clickTrackings.push(xml.keyValue(clickTrackingData));
      });
    }
    return clickTrackings;
  }
}

module.exports = VideoClicks;
},{"../../utils/utilityFunctions":43,"../../utils/xml":44}],25:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');
var utilities = require('../../utils/utilityFunctions');

function ViewableImpression(viewableImpressionJTree) {
	  if(!(this instanceof ViewableImpression)) {
	    return new ViewableImpression(viewableImpressionJTree);
	  }

	  //Optional Fields
	  this.id = viewableImpressionJTree.attr('id');
	  if (viewableImpressionJTree.viewable) {
		  this.viewables = parseUriArray(viewableImpressionJTree.viewable);
	  }
	  if (viewableImpressionJTree.notViewable) {
		  this.notViewables = parseUriArray(viewableImpressionJTree.notViewable);
	  }
	  if (viewableImpressionJTree.viewUndetermined) {
		  this.viewUndetermineds = parseUriArray(viewableImpressionJTree.viewUndetermined);
	  }

	  function parseUriArray(arrJTree) {
		  var arr = [];
		  var arrData;
		  if (arrJTree) {
			  arrData = utilities.isArray(arrJTree) ? arrJTree : [arrJTree];
			  arrData.forEach(function (elem) {
				  arr.push(xml.keyValue(elem));
			  });
		  }
		  return arr;
	 }
}

module.exports = ViewableImpression;

},{"../../utils/utilityFunctions":43,"../../utils/xml":44}],26:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');
var ViewableImpression = require('./ViewableImpression');
var Verification = require('./Verification');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function Wrapper(wrapperJTree) {
  if(!(this instanceof Wrapper)) {
    return new Wrapper(wrapperJTree);
  }

  //Required elements
  this.adSystem = xml.keyValue(wrapperJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(wrapperJTree.impression);
  this.VASTAdTagURI = xml.keyValue(wrapperJTree.vASTAdTagURI);

  //Optional elements
  this.creatives = Creative.parseCreatives(wrapperJTree.creatives);
  //this.error = xml.keyValue(wrapperJTree.error);
  this.errors = vastUtil.parseErrors(wrapperJTree.error);
  this.extensions = wrapperJTree.extensions;

  //Optional attrs
  this.followAdditionalWrappers = utilities.isDefined(xml.attr(wrapperJTree, 'followAdditionalWrappers'))? xml.attr(wrapperJTree, 'followAdditionalWrappers'): true;
  this.allowMultipleAds = xml.attr(wrapperJTree, 'allowMultipleAds');
  this.fallbackOnNoAd = xml.attr(wrapperJTree, 'fallbackOnNoAd');

  if (window.mol_vastVersion === 4) {
	  if (wrapperJTree.viewableImpression) {
		  this.viewableImpression = new ViewableImpression(wrapperJTree.viewableImpression);
	  }
	  if (wrapperJTree.adVerifications) {
		  this.adVerifications = Verification.parseAdVerifications(wrapperJTree.adVerifications);
	  }
  }
}

module.exports = Wrapper;

},{"../../utils/utilityFunctions":43,"../../utils/xml":44,"./Creative":10,"./Verification":23,"./ViewableImpression":25,"./vastUtil":28}],27:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');

var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;

var parsers = {

  duration: function parseDuration(durationStr) {

    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  offset: function parseOffset(offset, duration) {
    if(isPercentage(offset)){
      return calculatePercentage(offset, duration);
    }
    return parsers.duration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if(duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent){
      return quantity * percent / 100;
    }
  }

};


module.exports = parsers;
},{"../../utils/utilityFunctions":43}],28:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var VPAIDHTML5Tech = require('../vpaid/VPAIDHTML5Tech');

var vastUtil = {

  track: function track(URLMacros, variables) {
    var sources = vastUtil.parseURLMacros(URLMacros, variables);
    var trackImgs = [];
    sources.forEach(function (src) {
      var img = new Image();
      img.src = src;
      trackImgs.push(img);
    });
    return trackImgs;
  },

  parseURLMacros: function parseMacros(URLMacros, variables) {
    var parsedURLs = [];

    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    URLMacros.forEach(function (URLMacro) {
      parsedURLs.push(vastUtil._parseURLMacro(URLMacro, variables));
    });

    return parsedURLs;
  },

  parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    return vastUtil._parseURLMacro(URLMacro, variables);
  },

  _parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    utilities.forEach(variables, function (value, key) {
      URLMacro = URLMacro.replace(new RegExp("\\[" + key + "\\\]", 'gm'), value);
    });

    return URLMacro;
  },

  parseDuration: function parseDuration(durationStr) {
    var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  parseImpressions: function parseImpressions(impressions) {
	    if (impressions) {
	      impressions = utilities.isArray(impressions) ? impressions : [impressions];
	      return utilities.transformArray(impressions, function (impression) {
	        if (utilities.isNotEmptyString(impression.keyValue)) {
	          return impression.keyValue;
	        }
	        return undefined;
	      });
	    }
	    return [];
	  },

	  parseErrors: function parseErrors(errors) {
	    if (errors) {
	    	errors = utilities.isArray(errors) ? errors : [errors];
	      return utilities.transformArray(errors, function (error) {
	        if (utilities.isNotEmptyString(error.keyValue)) {
	          return error.keyValue;
	        }
	        return undefined;
	      });
	    }
	    return [];
	  },

  //We assume that the progress is going to arrive in milliseconds
  formatProgress: function formatProgress(progress) {
    var hours, minutes, seconds, milliseconds;
    hours = progress / (60 * 60 * 1000);
    hours = Math.floor(hours);
    minutes = (progress / (60 * 1000)) % 60;
    minutes = Math.floor(minutes);
    seconds = (progress / 1000) % 60;
    seconds = Math.floor(seconds);
    milliseconds = progress % 1000;
    return utilities.toFixedDigits(hours, 2) + ':' + utilities.toFixedDigits(minutes, 2) + ':' + utilities.toFixedDigits(seconds, 2) + '.' + utilities.toFixedDigits(milliseconds, 3);
  },

  parseOffset: function parseOffset(offset, duration) {
    if (isPercentage(offset)) {
      return calculatePercentage(offset, duration);
    }
    return vastUtil.parseDuration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if (duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent) {
      return quantity * percent / 100;
    }
  },


  //List of supported VPAID technologies
  VPAID_techs: [
    //VPAIDFlashTech,
    VPAIDHTML5Tech
  ],

  isVPAID: function isVPAIDMediaFile(mediaFile) {
    return !!mediaFile && mediaFile.apiFramework === 'VPAID';
  },

  findSupportedVPAIDTech: function findSupportedVPAIDTech(mimeType) {
    var i, len, VPAIDTech;

    for (i = 0, len = this.VPAID_techs.length; i < len; i += 1) {
      VPAIDTech = this.VPAID_techs[i];
      if (VPAIDTech.supports(mimeType)) {
        return VPAIDTech;
      }
    }
    return null;
  },

  isFlashSupported: function isFlashSupported() {
	  return false;
  },

};

module.exports = vastUtil;

},{"../../utils/utilityFunctions":43,"../vpaid/VPAIDHTML5Tech":30}],29:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var utilities = require('../../utils/utilityFunctions');
var logger = require ('../../utils/consoleLogger');

function VPAIDAdUnitWrapper(vpaidAdUnit, opts) {
  if (!(this instanceof VPAIDAdUnitWrapper)) {
    return new VPAIDAdUnitWrapper(vpaidAdUnit, opts);
  }
  sanityCheck(vpaidAdUnit, opts);

  this.options = utilities.extend({}, opts);
  this.adStarted = false;

  this._adUnit = vpaidAdUnit;

  /*** Local Functions ***/
  function sanityCheck(adUnit, opts) {
    if (!adUnit || !VPAIDAdUnitWrapper.checkVPAIDInterface(adUnit)) {
      throw new VASTError('on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface');
    }

    if (!utilities.isObject(opts)) {
      throw new VASTError("on VPAIDAdUnitWrapper, expected options hash  but got '" + opts + "'");
    }

    if (!("responseTimeout" in opts) || !utilities.isNumber(opts.responseTimeout) ){
      throw new VASTError("on VPAIDAdUnitWrapper, expected responseTimeout in options");
    }
  }
}

VPAIDAdUnitWrapper.checkVPAIDInterface = function checkVPAIDInterface(VPAIDAdUnit) {
  //NOTE: skipAd is not part of the method list because it only appears in VPAID 2.0 and we support VPAID 1.0
  var VPAIDInterfaceMethods = [
    'handshakeVersion', 'initAd', 'startAd', 'stopAd', 'resizeAd', 'pauseAd', 'expandAd', 'collapseAd'
  ];

  for (var i = 0, len = VPAIDInterfaceMethods.length; i < len; i++) {
    if (!VPAIDAdUnit || !utilities.isFunction(VPAIDAdUnit[VPAIDInterfaceMethods[i]])) {
      return false;
    }
  }


  return canSubscribeToEvents(VPAIDAdUnit) && canUnsubscribeFromEvents(VPAIDAdUnit);

  /*** Local Functions ***/

  function canSubscribeToEvents(adUnit) {
    return utilities.isFunction(adUnit.subscribe) || utilities.isFunction(adUnit.addEventListener) || utilities.isFunction(adUnit.on);
  }

  function canUnsubscribeFromEvents(adUnit) {
    return utilities.isFunction(adUnit.unsubscribe) || utilities.isFunction(adUnit.removeEventListener) || utilities.isFunction(adUnit.off);

  }
};

VPAIDAdUnitWrapper.prototype.adUnitAsyncCall = function () {
  var args = utilities.arrayLikeObjToArray(arguments);
  var method = args.shift();
  var cb = args.pop();
  var timeoutId;

  sanityCheck(method, cb, this._adUnit);
  args.push(wrapCallback());

  this._adUnit[method].apply(this._adUnit, args);
  timeoutId = setTimeout(function () {
    timeoutId = null;
    cb(new VASTError("on VPAIDAdUnitWrapper, timeout while waiting for a response on call '" + method + "'"));
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(method, cb, adUnit) {
    if (!utilities.isString(method) || !utilities.isFunction(adUnit[method])) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback");
    }
  }

  function wrapCallback() {
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      cb.apply(this, arguments);
    };
  }
};

VPAIDAdUnitWrapper.prototype.on = function (evtName, handler) {
  var addEventListener = this._adUnit.addEventListener || this._adUnit.subscribe || this._adUnit.on;
  addEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.off = function (evtName, handler) {
  var removeEventListener = this._adUnit.removeEventListener || this._adUnit.unsubscribe || this._adUnit.off;
  removeEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.waitForEvent = function (evtName, cb, context) {
	  var that = this;
  var timeoutId;
  sanityCheck(evtName, cb);
  context = context || null;

  this.on(evtName, responseListener);

  timeoutId = setTimeout(function () {
	  that.off(evtName, responseListener);
		// ignore events if ad is finished
		if (window._timeoutIds.indexOf(timeoutId) >= 0) {
      if (that.options && that.options.player) {
        that.options.player.trigger({type: 'trace.message', data: {message: 'Timeout while waiting for event ' + evtName}});
      }
			cb(new VASTError("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + evtName + "'. You may need to increase adStartTimeout."));
		}
    timeoutId = null;
    cb = utilities.noop;
  }, this.options.responseTimeout);

  // EN
  window._timeoutIds.push(timeoutId);

  /*** Local functions ***/
  function sanityCheck(evtName, cb) {
    if (!utilities.isString(evtName)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing evt name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing callback");
    }
  }

  function responseListener() {
    if (that.options && that.options.player) {
      that.options.player.trigger({type: 'trace.event', data: {event: evtName}});
    }
	  that.off(evtName, responseListener);
    var args = utilities.arrayLikeObjToArray(arguments);

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    args.unshift(null);
    cb.apply(context, args);
  }
};

// VPAID METHODS
VPAIDAdUnitWrapper.prototype.handshakeVersion = function (version, cb) {
  this.adUnitAsyncCall('handshakeVersion', version, cb);
};

/* jshint maxparams:6 */
VPAIDAdUnitWrapper.prototype.initAd = function (width, height, viewMode, desiredBitrate, adUnitData, cb) {
	logger.log('VPAIDAdUnitWrapper->Calling initAd on creative');
	this.waitForEvent('AdLoaded', cb);
  this._adUnit.initAd(width, height, viewMode, desiredBitrate, adUnitData);
};

VPAIDAdUnitWrapper.prototype.resizeAd = function (width, height, viewMode, cb) {
  // NOTE: AdSizeChange event is only supported on VPAID 2.0 so for the moment we are not going to use it
  // and will assume that everything is fine after the async call
	logger.log('VPAIDAdUnitWrapper->Calling resizeAd on creative');
  this.adUnitAsyncCall('resizeAd', width, height, viewMode, cb);
  if (window.MoatApiReference) {
  	window.MoatApiReference.dispatchEvent({type: 'AdSizeChange', adVolume: this.options.player.volume()});
  }
};

VPAIDAdUnitWrapper.prototype.startAd = function (cb) {
	logger.log('VPAIDAdUnitWrapper->Calling startAd on creative');
	if (!this.adStarted) {
		this.waitForEvent('AdStarted', cb);
	}
  this._adUnit.startAd();
  if (this.adStarted) {
    cb(null);
  }
};

VPAIDAdUnitWrapper.prototype.stopAd = function (cb) {
	logger.log('VPAIDAdUnitWrapper->Calling stopAd on creative');
  this.waitForEvent('AdStopped', cb);
  this._adUnit.stopAd();
};

VPAIDAdUnitWrapper.prototype.pauseAd = function (cb) {
	logger.log('VPAIDAdUnitWrapper->Calling pauseAd on creative');
  this.waitForEvent('AdPaused', cb);
  this._adUnit.pauseAd();
};

VPAIDAdUnitWrapper.prototype.resumeAd = function (cb) {
	logger.log('VPAIDAdUnitWrapper->Calling resumeAd on creative');
  this.waitForEvent('AdPlaying', cb);
  this._adUnit.resumeAd();
};

VPAIDAdUnitWrapper.prototype.expandAd = function (cb) {
	logger.log('VPAIDAdUnitWrapper->Calling expandAd on creative');
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.expandAd();
};

VPAIDAdUnitWrapper.prototype.collapseAd = function (cb) {
	logger.log('VPAIDAdUnitWrapper->Calling collapseAd on creative');
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.collapseAd();
};

VPAIDAdUnitWrapper.prototype.skipAd = function (cb) {
	logger.log('VPAIDAdUnitWrapper->Calling skipAd on creative');
  this.waitForEvent('AdSkipped', cb);
  this._adUnit.skipAd();
};

//VPAID property getters
[
  'adLinear',
  'adWidth',
  'adHeight',
  'adExpanded',
  'adSkippableState',
  'adRemainingTime',
  'adDuration',
  'adVolume',
  'adCompanions',
  'adIcons'
].forEach(function (property) {
  var getterName = 'get' + utilities.capitalize(property);

  VPAIDAdUnitWrapper.prototype[getterName] = function (cb) {
    this.adUnitAsyncCall(getterName, cb);
  };
});

//VPAID property setters
VPAIDAdUnitWrapper.prototype.setAdVolume = function(volume, cb){
  this.adUnitAsyncCall('setAdVolume',volume, cb);
};

module.exports = VPAIDAdUnitWrapper;

},{"../../utils/consoleLogger":37,"../../utils/utilityFunctions":43,"../vast/VASTError":19}],30:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');

var VASTError = require('../vast/VASTError');

var VPAIDHTML5Client = require('VPAIDHTML5Client/js/VPAIDHTML5Client');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

var logger = require ('../../utils/consoleLogger');

function VPAIDHTML5Tech(mediaFile) {

  if(!(this instanceof VPAIDHTML5Tech)) {
    return new VPAIDHTML5Tech(mediaFile);
  }

  sanityCheck(mediaFile);

  this.name = 'vpaid-html5';
  this.containerEl = null;
  this.videoEl = null;
  this.vpaidHTMLClient = null;

  this.mediaFile = mediaFile;

  function sanityCheck(mediaFile) {
      if (!mediaFile || !utilities.isString(mediaFile.src)) {
        throw new VASTError(VPAIDHTML5Tech.INVALID_MEDIA_FILE);
      }
  }
}

VPAIDHTML5Tech.VPAIDHTML5Client = VPAIDHTML5Client;

VPAIDHTML5Tech.supports = function (type) {
  return !utilities.isOldIE() && MimeTypes.html5.indexOf(type) > -1;
};

VPAIDHTML5Tech.prototype.loadAdUnit = function loadAdUnit(containerEl, videoEl, callback) {
  sanityCheck(containerEl, videoEl, callback);

  this.containerEl = containerEl;
  this.videoEl = videoEl;
  this.vpaidHTMLClient = new VPAIDHTML5Tech.VPAIDHTML5Client(containerEl, videoEl, {});
  this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, callback);

  function sanityCheck(container, video, cb) {
    if (!dom.isDomElement(container)) {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!dom.isDomElement(video) || video.tagName.toLowerCase() !== 'video') {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError(VPAIDHTML5Tech.MISSING_CALLBACK);
    }
  }
};

VPAIDHTML5Tech.prototype.unloadAdUnit = function unloadAdUnit() {
  if (this.vpaidHTMLClient) {
    try {
      this.vpaidHTMLClient.destroy();
    } catch(e) {
      logger.error ('VAST ERROR: trying to unload the VPAID adunit');
    }

    this.vpaidHTMLClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

var PREFIX = 'on VPAIDHTML5Tech';
VPAIDHTML5Tech.INVALID_MEDIA_FILE = PREFIX + ', invalid MediaFile';
VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL = PREFIX + ', invalid container HtmlElement';
VPAIDHTML5Tech.INVALID_DOM_VIDEO_EL = PREFIX + ', invalid HTMLVideoElement';
VPAIDHTML5Tech.MISSING_CALLBACK = PREFIX + ', missing valid callback';

module.exports = VPAIDHTML5Tech;

},{"../../utils/consoleLogger":37,"../../utils/dom":38,"../../utils/mimetypes":40,"../../utils/utilityFunctions":43,"../vast/VASTError":19,"VPAIDHTML5Client/js/VPAIDHTML5Client":3}],31:[function(require,module,exports){
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
      logger.log('VPAIDIntegrator->Calling unloadAdUnit (implicitly invokes stopAd and unsubscribes VPAID events)');
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
          //logger.log("****** user activity");
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

  // we to have re-post the message about loaded creative to the current window, 
  // because VPAID client listen this message on current window (not on the parent).
  var onLoaded = function(e) {
    window.postMessage(e.data, e.origin);
  };
  window.parent.addEventListener('message', onLoaded);
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
    
    adUnit.stopAd(utilities.noop);
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
      showOriginalTimeDisplay(player, false);
		}
		else {
      showOriginalTimeDisplay(player, false);
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
            player.userActive(true);
        	}, i * 1000);
        }
    }
    if (contentSource === player.tech_.el_.src) {
      player.trigger({type: 'trace.message', data: {message: 'VPAID creative uses its own video tag'}});
      that.needsShowPlayer = true;
      if (!window._molSettings.playsInBreak) {
        that.timeUpdateTimer = setInterval(updateTimeControls, 500);
      }
      else {
        player.controlBar.hide();
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
        // ad uses main content tag
        if (contentSource != player.tech_.el_.src) {
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
		adUnit.getAdDuration(function(that, dur) {
			if (dur > 0) {
				duration = dur;
			}
		});
		adUnit.getAdRemainingTime(function(that, time) {
      remainingTime = time;
      // for VPAID 1.0 use remaining time for duration calculation 
      if (!duration && remainingTime > 0) {
        duration = remainingTime;
      }
    });
    // return if duration or/and remaining time is not implemented or unknown
		if (!duration || !remainingTime || duration < 0 || remainingTime < 0) {
			return;
		}
		var timeLeft = Math.ceil(skipOffset - (duration - remainingTime));
    // if skip button enabled never show before-button skip text
	  if (timeLeft > 0 && !dom.hasClass(skipButton, 'enabled')) {
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
        showOriginalTimeDisplay(player, true);
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

function showOriginalTimeDisplay(player, show) {
  var children = player.controlBar.getChild('currentTimeDisplay').el_.children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].id != 'bc_time_display') {
      children[i].style.display = show ? '' : 'none';
    }
  }
}

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
	  logger.log('****** to fullscreen dimension = ' + dimension.width + ',' + dimension.height);
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

},{"../../utils/async":36,"../../utils/consoleLogger":37,"../../utils/dom":38,"../../utils/mimetypes":40,"../../utils/playerUtils":41,"../../utils/utilityFunctions":43,"../vast/VASTError":19,"../vast/VASTResponse":21,"../vast/VASTTracker":22,"../vast/vastUtil":28,"./VPAIDAdUnitWrapper":29}],32:[function(require,module,exports){
'use strict';

/**
 * The component that shows a black screen until the ads plugin has decided if it can or it can not play the ad.
 *
 * Note: In case you wonder why instead of this black poster we don't just show the spinner loader.
 *       IOS devices do not work well with animations and the browser chrashes from time to time That is why we chose to
 *       have a secondary black poster.
 *
 *       It also makes it much more easier for the users of the plugin since it does not change the default behaviour of the
 *       spinner and the player works the same way with and without the plugin.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
var element = document.createElement('div');

var BlackPosterFactory = function(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      element.className = 'vjs-black-poster';
      baseComponent.call(this, player, options);

      var posterImg = player.getChild('posterImage');

      //We need to do it asynchronously to be sure that the black poster el is on the dom.
      setTimeout(function() {
        if(posterImg && player && player.el()) {
          player.el().insertBefore(element, posterImg.el());
        }
      }, 0);
    },
    el: function getElement() {
      return element;
    }
  };
};

module.exports = BlackPosterFactory;
},{}],33:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"./black-poster":32}],34:[function(require,module,exports){
'use strict';

var VASTClient = require('../ads/vast/VASTClient');
var VASTError = require('../ads/vast/VASTError');
var vastUtil = require('../ads/vast/vastUtil');

var VASTIntegrator = require('../ads/vast/VASTIntegrator');
var VPAIDIntegrator = require('../ads/vpaid/VPAIDIntegrator');
var IconIntegrator = require('../ads/icon/IconIntegrator');

var async = require('../utils/async');
var dom = require('../utils/dom');
var playerUtils = require('../utils/playerUtils');
var utilities = require('../utils/utilityFunctions');
var ViewabilityTracking = require("../utils/anVideoViewability");

var logger = require ('../utils/consoleLogger');

module.exports = function VASTPlugin(options) {
  var snapshot;
  var player = this;
  var vast = new VASTClient({wrapperLimit: options.wrapperLimit});
  var adsCanceled = false;
  var playlistNextButton;
  var defaultOpts = {
    // maximum amount of time in ms to wait to receive `adsready` from the ad
    // implementation after play has been requested. Ad implementations are
    // expected to load any dynamic libraries and make any requests to determine
    // ad policies for a video during this time.
    timeout: 500,

    //TODO:finish this IOS FIX
    //Whenever you play an add on IOS, the native player kicks in and we loose control of it. On very heavy pages the 'play' event
    // May occur after the video content has already started. This is wrong if you want to play a preroll ad that needs to happen before the user
    // starts watching the content. To prevent this usec
    iosPrerollCancelTimeout: 2000,

    // maximun amount of time for the ad to actually start playing. If this timeout gets
    // triggered the ads will be cancelled
    adCancelTimeout: 3000,

    // Boolean flag that configures the player to play a new ad before the user sees the video again
    // the current video
    playAdAlways: false,

    // Flag to enable or disable the ads by default.
    adsEnabled: true,

    // Boolean flag to enable or disable the resize with window.resize or orientationchange
    autoResize: true,

    // verbosity of console logging:
    // 0 - error
    // 1 - error, warn
    // 2 - error, warn, info
    // 3 - error, warn, info, log
    // 4 - error, warn, info, log, debug
    verbosity: 0,
    
    // plugin options
    playsInBreak: false,
    skipText: 'Skip in %%TIME%% seconds',
    skipButtonText: 'Skip ad',
    initialPlayback: "auto",
    initialAudio: "on",
    disableClickThru: false,
    
    firstPlay: true
  };

  var settings = utilities.extend({}, defaultOpts, options || {});

  // get Brightcove Player Id
  var playerId = '';
  if (player.bcinfo) {
    playerId = player.bcinfo.playerId;
  }
  else if (player.options_ && player.options_['data-player']) {
    playerId = player.options_['data-player'];
  }
  logger.setPlayerId(playerId + '-' + player.el_.id);

  if(utilities.isUndefined(settings.adTagUrl) && utilities.isDefined(settings.url)){
    settings.adTagUrl = settings.url;
  }

  if (utilities.isString(settings.adTagUrl)) {
    settings.adTagUrl = utilities.echoFn(settings.adTagUrl);
  }
  
  if (settings.viewability && settings.viewability.config) {
	  settings.viewabilityTracking = new ViewabilityTracking(player);
  }
  
  window._molSettings = settings;
  window._timeoutIds = [];
  
  window.MoatApiReference = null;

  if (utilities.isDefined(settings.adTagXML) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, the passed adTagXML option does not contain a function'));
  }

  if (!utilities.isDefined(settings.adTagUrl) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, missing adTagUrl on options object'));
  }

  logger.setVerbosity (settings.verbosity);

  if (!settings.playsInBreak) {
	  snapshot = playerUtils.getPlayerSnapshot(player);
	  snapshot.playing = true;	// force to play content after ad ended
  }
  
  if (settings.initialPlayback === 'click') {
	  playerUtils.showBigPlayButton(player, true);
  }

  playerUtils.prepareForAds(player);

  if (settings.playAdAlways) {
    // No matter what happens we play a new ad before the user sees the video again.
    player.on('vast.contentEnd', function () {
      setTimeout(function () {
        player.trigger('vast.reset');
      }, 0);
    });
  }

  player.on('vast.firstPlay', tryToPlayPrerollAd);

  player.on('vast.reset', function () {
    //If we are reseting the plugin, we don't want to restore the content
    snapshot = null;
    cancelAds();
  });

  player.vast = {
    isEnabled: function () {
      return settings.adsEnabled;
    },

    enable: function () {
      settings.adsEnabled = true;
    },

    disable: function () {
      settings.adsEnabled = false;
    }
  };

  return player.vast;

  /**** Local functions ****/
  function tryToPlayPrerollAd() {
	// make sure we are going to use same plugin instance twice
	player.off('vast.firstPlay', tryToPlayPrerollAd);

	if (player.vast.adsCancelled) {
    delete player.vast.adsCancelled;
  }
	playerUtils.showBigPlayButton(player, false);

	if (settings.initialAudio === 'off') {
		settings.contentVolume = {muted: player.muted(), volume: player.volume()};
		player.muted(true);
	}

    //We remove the poster to prevent flickering whenever the content starts playing
    playerUtils.removeNativePoster(player);

    playerUtils.once(player, ['vast.adsCancel', 'vast.adEnd'], function () {
    	playerUtils.showBigPlayButton(player, false);
      removeAdUnit();
      restoreVideoContent();
      setTimeout(function () {
          player.trigger('adFinished');
      }, 0);
    });

    async.waterfall([
      checkAdsEnabled,
      preparePlayerForAd,
      startAdCancelTimeout,
      playPrerollAd
    ], function (error, response) {
      if (error) {
        trackAdError(error, response);
      } else {
        player.trigger('vast.adEnd');
      }
    });

    /*** Local functions ***/

    function removeAdUnit() {
      if (player.vast && player.vast.adUnit) {
        player.vast.adUnit = null; //We remove the adUnit
        player.vast.VPAID = null;
      }
      window._molSettings.firstPlay = false;
    }

    function restoreVideoContent() {
      setupContentEvents();
      if (snapshot) {
        playerUtils.restorePlayerSnapshot(player, snapshot);
        snapshot = null;
      }
    }

    function setupContentEvents() {
      playerUtils.once(player, ['playing', 'vast.reset', 'vast.firstPlay'], function (evt) {
        if (evt.type !== 'playing') {
          return;
        }

        player.trigger('vast.contentStart');

        playerUtils.once(player, ['ended', 'vast.reset', 'vast.firstPlay'], function (evt) {
          if (evt.type === 'ended') {
            player.trigger('vast.contentEnd');
          }
        });
      });
    }

    function checkAdsEnabled(next) {
      if (settings.adsEnabled) {
        return next(null);
      }
      next(new VASTError('Ads are not enabled'));
    }

    function preparePlayerForAd(next) {
      if (canPlayPrerollAd()) {
        //snapshot = playerUtils.getPlayerSnapshot(player);
        player.pause();
        addSpinnerIcon();

        if(player.paused()) {
          next(null);
        } else {
          playerUtils.once(player, ['playing'], function() {
            player.pause();
            next(null);
          });
        }
      } else {
        next(new VASTError('video content has been playing before preroll ad'));
      }
    }

    function canPlayPrerollAd() {
      return !utilities.isIPhone() || player.currentTime() <= settings.iosPrerollCancelTimeout;
    }

    function startAdCancelTimeout(next) {
      var adCancelTimeoutId;
      adsCanceled = false;

      adCancelTimeoutId = setTimeout(function () {
       	  adCancelTimeoutId = null;
        trackAdError(new VASTError('timeout while waiting for the video to start playing. You may need to increase adStartTimeout.', 402));
        playerUtils.showBigPlayButton(player, false);
        if (player.vast.VPAID) {
        	player.trigger('vpaid.adEnd');
        }
      }, settings.adCancelTimeout);

      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel', 'clearAdCancelTimeout'], clearAdCancelTimeout);
      playerUtils.once(player, ['vast.adError', 'vpaid.adEnd', 'vpaid.adError'], function() {
    	  clearAdCancelTimeout();
      });

      /*** local functions ***/
      function clearAdCancelTimeout() {
        if (adCancelTimeoutId) {
          clearTimeout(adCancelTimeoutId);
          adCancelTimeoutId = null;
        }
      }

      next(null);
    }

    function addSpinnerIcon() {
      dom.addClass(player.el(), 'vjs-vast-ad-loading');
      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], removeSpinnerIcon);
    }

    function removeSpinnerIcon() {
      //IMPORTANT NOTE: We remove the spinnerIcon asynchronously to give time to the browser to start the video.
      // If we remove it synchronously we see a flash of the content video before the ad starts playing.
      setTimeout(function () {
        dom.removeClass(player.el(), 'vjs-vast-ad-loading');
        // VIDLA-2268 (Safari 11 on Mac - Spinner keeps going on first frame of ad)
		player.loadingSpinner.el_.style.display = 'none';
      }, 100);
    }

  }

  function cancelAds() {
    player.trigger('vast.adsCancel');
    adsCanceled = true;

    player.vast.adsCancelled = true;    // Set a flag to interrupt the ad loading waterfall - needed to avoid a race condition where the ad could still play after being cancelled.
  }

  function playPrerollAd(callback) {
    async.waterfall([
      getVastResponse,
      playAd
    ], callback);
  }

  function getVastResponse(callback) {
    vast.getVASTResponse(settings.adTagUrl ? settings.adTagUrl() : settings.adTagXML, callback);
  }

  function playAd(vastResponse, callback) {
    //TODO: Find a better way to stop the play. The 'playPrerollWaterfall' ends in an inconsistent situation
    //If the state is not 'preroll?' it means the ads were canceled therefore, we break the waterfall
    if (adsCanceled) {
      return;
    }

    /*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/
    function initMoatTracking(a,c,d,h,k){var f=document.createElement("script"),b=[];c={adData:{ids:c,duration:d,url:k},dispatchEvent:function(a){this.sendEvent?(b&&(b.push(a),a=b,b=!1),this.sendEvent(a)):b.push(a);}};d="_moatApi"+Math.floor(1E8*Math.random());var e,g;try{e=a.ownerDocument,g=e.defaultView||e.parentWindow;}catch(l){e=document,g=window;}g[d]=c;f.type="text/javascript";a&&a.insertBefore(f,a.childNodes[0]||null);f.src="https://z.moatads.com/"+h+"/moatvideo.js#"+d;return c;}
    window.MoatApiReference = null;
    if (vastResponse.ads && vastResponse.ads.length > 0 && vastResponse.ads[0].inLine && vastResponse.ads[0].inLine.moat) {
  	  var ids = {level1: vastResponse.ads[0].inLine.moat.advid,
  			     level2: vastResponse.ads[0].inLine.moat.cpgid,
  			     level3: vastResponse.ads[0].inLine.moat.cpid,
  			     level4: vastResponse.ads[0].inLine.moat.crid};
  	  if (vastResponse.ads[0].inLine.moat.site_id) {
  		  ids.slicer1 = vastResponse.ads[0].inLine.moat.site_id;
  	  }
  	  window.MoatApiReference = initMoatTracking(player.el_, ids, player.duration(), vastResponse.ads[0].inLine.moat.partnercode, player.currentSource().src);
    }
    if (window._molSettings.viewabilityTracking) {
  	  window._molSettings.viewabilityTracking.init(window._molSettings.viewability.contextId, 
  			  player.duration(), player.el_.offsetWidth, player.el_.offsetHeight);
    }

    var isAdVPAID  = isVPAID(vastResponse);
    var adIntegrator = isAdVPAID ? new VPAIDIntegrator(player, settings) : new VASTIntegrator(player);
    var adFinished = false;
    if (isAdVPAID) {
    	player.trigger('clearAdCancelTimeout');
    }

    playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], function (evt) {
      if (evt.type === 'vast.adStart') {
        addAdsLabel();
      }
    });

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeAdsLabel);

    if (utilities.isIDevice()) {
      preventManualProgress();
    }

    player.vast.vastResponse = vastResponse;
    logger.debug ("calling adIntegrator.playAd() with vastResponse:", vastResponse);
    player.vast.adUnit = adIntegrator.playAd(vastResponse, callback);
    player.vast.VPAID = isAdVPAID;

    var adIconIntegrator;

    /*** Local functions ****/
    function addAdsLabel() {
    	if (window._molSettings.playsInBreak) {
    		player.on('timeupdate', updateTimeControls);
    	}
      if (adFinished) {
        return;
      }

      if (vastResponse.icons && vastResponse.icons.length > 0) {
        adIconIntegrator = new IconIntegrator(player);
        adIconIntegrator.renderIcons(vastResponse.icons, callback);
      }

      var elems = document.getElementsByClassName('vjs-next-button');
      if (elems && elems.length > 0) {
        playlistNextButton = elems[0];
        playlistNextButton.style.display = 'none';
      }
    }

    function removeAdsLabel() {
    	if (window._molSettings.playsInBreak) {
    		player.off('timeupdate', updateTimeControls);
    		if (window._molSettings.timeOffset) {
          showOriginalTimeDisplay(true);
          var bcTimeDisplay = document.getElementById('bc_time_display');
          if (bcTimeDisplay) {
            bcTimeDisplay.style.display = 'none';
          }
    		}
    	}
      if (playlistNextButton) {
        playlistNextButton.style.display = '';
        playlistNextButton = null;
      }
      adFinished = true;
    }

    function showOriginalTimeDisplay(show) {
      var children = player.controlBar.getChild('currentTimeDisplay').el_.children;
      for (var i = 0; i < children.length; i++) {
        if (children[i].id != 'bc_time_display') {
          children[i].style.display = show ? '' : 'none';
        }
      }
    }

    function updateTimeControls() {
    	var convertTimeToStr = function(time) {
    		var secs = parseInt(time + 0.5);
    		var mins = parseInt(secs / 60);
    		secs -= (mins * 60);
    		var str = mins.toString() + ':' + (secs > 9 ? ''  : '0') + secs.toString();
    		return str;
    	};
    	
      if (window._molSettings.breakDuration) {
        if (player.duration() != window._molSettings.breakDuration) {
          if (player.duration()) {
            window._molSettings.realVideoDuration = player.duration();
          }
          player.duration(window._molSettings.breakDuration);
        }
      }
      if (window._molSettings.timeOffset) {
        var bcTimeDisplay = document.getElementById('bc_time_display');
        if (!bcTimeDisplay) {
          bcTimeDisplay = document.createElement('div');
          player.controlBar.getChild('currentTimeDisplay').el_.appendChild(bcTimeDisplay);
          bcTimeDisplay.id = 'bc_time_display';
          bcTimeDisplay.class = 'vjs-current-time-display';
          bcTimeDisplay['aria-live'] = 'off';
          bcTimeDisplay.innerHTML = '<span class="vjs-control-text"></span>0:00';
          showOriginalTimeDisplay(false);
        }
        else {
          showOriginalTimeDisplay(false);
          bcTimeDisplay.style.display = 'block';
        }
        var time = player.currentTime() + window._molSettings.timeOffset;
        bcTimeDisplay.childNodes[1].nodeValue = convertTimeToStr(time);
      }
    }

    function preventManualProgress() {
      //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that the user forwarded/rewound the ad
      var PROGRESS_THRESHOLD = 3;
      var previousTime = 0;
      var skipad_attempts = 0;

      player.on('timeupdate', preventAdSeek);
      player.on('ended', preventAdSkip);

      playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adError'], stopPreventManualProgress);

      /*** Local functions ***/
      function preventAdSkip() {
        // Ignore ended event if the Ad time was not 'near' the end
        // and revert time to the previous 'valid' time
        if ((player.duration() - previousTime) > PROGRESS_THRESHOLD) {
          player.pause(true); // this reduce the video jitter if the IOS skip button is pressed
          player.play(true); // we need to trigger the play to put the video element back in a valid state
          player.currentTime(previousTime);
        }
      }

      function preventAdSeek() {
        var currentTime = player.currentTime();
        var progressDelta = Math.abs(currentTime - previousTime);
        if (progressDelta > PROGRESS_THRESHOLD) {
          skipad_attempts += 1;
          if (skipad_attempts >= 2) {
            player.pause(true);
          }
          player.currentTime(previousTime);
        } else {
          previousTime = currentTime;
        }
      }

      function stopPreventManualProgress() {
        player.off('timeupdate', preventAdSeek);
        player.off('ended', preventAdSkip);
      }
    }
  }

  function trackAdError(error, vastResponse) {
    player.trigger({type: 'vast.adError', error: error});
    cancelAds();
    logger.error ('AD ERROR:', error.message, error, vastResponse);
  }

  function isVPAID(vastResponse) {
    var i, len;
    var mediaFiles = vastResponse.mediaFiles;
    for (i = 0, len = mediaFiles.length; i < len; i++) {
      if (vastUtil.isVPAID(mediaFiles[i])) {
        return true;
      }
    }
    return false;
  }
};

},{"../ads/icon/IconIntegrator":6,"../ads/vast/VASTClient":18,"../ads/vast/VASTError":19,"../ads/vast/VASTIntegrator":20,"../ads/vast/vastUtil":28,"../ads/vpaid/VPAIDIntegrator":31,"../utils/anVideoViewability":35,"../utils/async":36,"../utils/consoleLogger":37,"../utils/dom":38,"../utils/playerUtils":41,"../utils/utilityFunctions":43}],35:[function(require,module,exports){
/**
 * Viewability Wrapper
 */

//var ANVideoViewabilityTracker = require("an-video-viewability");//viewability library
var ANVideoViewabilityTracker = null;
var logger = require("./consoleLogger");
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
        "start": "start",
        "expand": "expand",
        "collapse": "collapse",
        "unmute": "sound_on",
        "mute": "sound_off",
        "pause": "pause",
        "resume": "resume",
        "ad-click": "click",
        "skip": "stop",
        "complete": "stop",
        "fullscreen": "fullscreen",
        "exitFullscreen": "exitFullscreen"
    };

    var fireOnceEvents = {
        "start": false,
        "skip": false,
        "complete": false
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
		if (_level && _level === "debug") {
			debug(_message);
		} else {
			info(_message);
		}
    };

    this.init = function (contextId, duration, width, height) {
        if (!ANVideoViewabilityTracker) {
            return;
        }   
        info("initialize with duration: " + duration + ", width: " + width + ", height: " + height);
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
            debug("error on viewability library: ");
            debug(ex);
        }

    };

    this.invokeEvent = function (event_) {
        if (!ANVideoViewabilityTracker) {
            return;
        }
        if (this.isReady && event_ && mappedActions[event_]) {
            try {
                if(fireOnceEvents.hasOwnProperty(event_)){
                    if(fireOnceEvents[event_]){
                        info("supressing fireOnceEvents event as it is already fired once by viewability library: " + mappedActions[event_]);
                        return;
                    } else{
                        fireOnceEvents[event_] = true; // mark that the event has been fired.
                    }
                }
                info("event invoked by viewability library: " + mappedActions[event_]);
                tracker.notifyEvent(mappedActions[event_]);
            } catch (ex) {
                debug("error on viewability library: ");
                debug(ex);
            }
        }
    };

    this.isReady = false;


};


module.exports = html5VideoViewability;
},{"./consoleLogger":37}],36:[function(require,module,exports){
//Small subset of async

var utilities = require('./utilityFunctions');

var async = {};

async.setImmediate = function (fn) {
  setTimeout(fn, 0);
};

async.iterator = function (tasks) {
  var makeCallback = function (index) {
    var fn = function () {
      if (tasks.length) {
        tasks[index].apply(null, arguments);
      }
      return fn.next();
    };
    fn.next = function () {
      return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
    };
    return fn;
  };
  return makeCallback(0);
};


async.waterfall = function (tasks, callback) {
  callback = callback || function () { };
  if (!utilities.isArray(tasks)) {
    var err = new Error('First argument to waterfall must be an array of functions');
    return callback(err);
  }
  if (!tasks.length) {
    return callback();
  }
  var wrapIterator = function (iterator) {
    return function (err) {
      if (err) {
        callback.apply(null, arguments);
        callback = function () {
        };
      }
      else {
        var args = Array.prototype.slice.call(arguments, 1);
        var next = iterator.next();
        if (next) {
          args.push(wrapIterator(next));
        }
        else {
          args.push(callback);
        }
        async.setImmediate(function () {
          iterator.apply(null, args);
        });
      }
    };
  };
  wrapIterator(async.iterator(tasks))();
};

async.when = function (condition, callback) {
  if (!utilities.isFunction(callback)) {
    throw new Error("async.when error: missing callback argument");
  }

  var isAllowed = utilities.isFunction(condition) ? condition : function () {
    return !!condition;
  };

  return function () {
    var args = utilities.arrayLikeObjToArray(arguments);
    var next = args.pop();

    if (isAllowed.apply(null, args)) {
      return callback.apply(this, arguments);
    }

    args.unshift(null);
    return next.apply(null, args);
  };
};

module.exports = async;


},{"./utilityFunctions":43}],37:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var _verbosity = 0;
var _prefix = "[MOL-Plugin";
var _playerId = '';
var _astDebug;

function setPlayerId (id)
{
  _playerId = id;
}

// determine the maximum debug level from the page URL
function setDebugLevelFromPage() {
  try {
    // keep track of the new level
    _astDebug = (getParameterByName('ast_debug').toLowerCase() == 'true') ? 4 : 0;

    // the highest (least restrictive debug level) always wins
    _verbosity = Math.max(_verbosity, _astDebug);
  } catch (e) {}
}

// get a named parameter from the querystring
function getParameterByName(name) {
  // accesing window might fail at the browser level, we can't really test for it,
  // so there are a few nested try/catch blocks here
  try {
    var urlToSearch = '';
    // try checking the topmost window, and if not, use current window
    try {
      urlToSearch = window.top.location.search;
    } catch (e) {
      try {
        urlToSearch = window.location.search;
      } catch (e) {}
    }

    var regexS = '[\\?&]' + name + '=([^&#]*)';
    var regex = new RegExp(regexS);
    var results = regex.exec(urlToSearch);
    if (results === null) {
      return '';
    }
    return decodeURIComponent(results[1].replace(/\+/g, ' '));
  } catch (e) {
    return '';
  }
}

// determine the maximum debug level from the page URL
function setDebugLevelFromPage() {
  try {
    _verbosity = (getParameterByName('ast_debug').toLowerCase() == 'true') ? 4 : 0;

  } catch (e) {}
}

function setVerbosity (v)
{
  // the highest (least restrictive debug level) always wins
    _verbosity = Math.max(v, _verbosity);
}

function getCurrentTimeString() {
  var dateToReturn = '';
  try {
    var curDate = new Date();
    dateToReturn = curDate.getHours() + ':' + curDate.getMinutes() + ':' + curDate.getSeconds() + '.' + curDate.getMilliseconds();
  } catch (e) {}
  return dateToReturn;
}

function handleMsg (method, args)
{
    var messagePrefix = _prefix;
    if ((args.length) > 0 && (typeof args[0] === 'string'))
    {
      if (_playerId && _playerId.length > 0) {
        messagePrefix += ('-' + _playerId);
      }
      messagePrefix += ']';
      messagePrefix += '[' + getCurrentTimeString() + ']';

      args[0] = messagePrefix + args[0];
    }

    if (method.apply)
    {
        method.apply (console, Array.prototype.slice.call(args));
    }
    else
    {
        method (Array.prototype.slice.call(args));
    }
}

function debug ()
{
    if (_verbosity < 4)
    {
        return;
    }

    if (typeof console.debug === 'undefined')
    {
        // IE 10 doesn't have a console.debug() function
        handleMsg (console.log, arguments);
    }
    else
    {
        handleMsg (console.debug, arguments);
    }
}

function log ()
{
    if (_verbosity < 3)
    {
        return;
    }

    handleMsg (console.log, arguments);
}

function info ()
{
    if (_verbosity < 2)
    {
        return;
    }

    handleMsg (console.info, arguments);
}


function warn ()
{
    if (_verbosity < 1)
    {
        return;
    }

    handleMsg (console.warn, arguments);
}

function error ()
{
    handleMsg (console.error, arguments);
}

var consoleLogger = {
    setPlayerId: setPlayerId,
    setVerbosity: setVerbosity,
    debug: debug,
    log: log,
    info: info,
    warn: warn,
    error: error
};

if ((typeof (console) === 'undefined') || !console.log)
{
    // no console available; make functions no-op
    consoleLogger.debug = function () {};
    consoleLogger.log = function () {};
    consoleLogger.info = function () {};
    consoleLogger.warn = function () {};
    consoleLogger.error = function () {};
}

module.exports = consoleLogger;

// look in the query string for debug level
setDebugLevelFromPage();

},{}],38:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var dom = {};

dom.isVisible = function isVisible(el) {
  var style = window.getComputedStyle(el);
  return style.visibility !== 'hidden';
};

dom.isHidden = function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === 'none';
};

dom.isShown = function isShown(el) {
  return !dom.isHidden(el);
};

dom.hide = function hide(el) {
  el.__prev_style_display_ = el.style.display;
  el.style.display = 'none';
};

dom.show = function show(el) {
  if (dom.isHidden(el)) {
    el.style.display = el.__prev_style_display_;
  }
  el.__prev_style_display_ = undefined;
};

dom.hasClass = function hasClass(el, cssClass) {
  var classes, i, len;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.contains(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    cssClass = (cssClass || '');

    for (i = 0, len = classes.length; i < len; i += 1) {
      if (classes[i] === cssClass) {
        return true;
      }
    }
  }
  return false;
};

dom.addClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.add(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {
      classes.push(cssClass);
      el.setAttribute('class', classes.join(' '));
    }
  }
};

dom.removeClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.remove(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    var newClasses = [];
    var i, len;
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {

      for (i = 0, len = classes.length; i < len; i += 1) {
        if (cssClass !== classes[i]) {
          newClasses.push(classes[i]);
        }
      }
      el.setAttribute('class', newClasses.join(' '));
    }
  }
};

dom.addEventListener = function addEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.addEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.addEventListener(el, t, handler);
    });
    return;
  }

  if (el.addEventListener) {
    el.addEventListener(type, handler, false);
  } else if (el.attachEvent) {
    // WARNING!!! this is a very naive implementation !
    // the event object that should be passed to the handler
    // would not be there for IE8
    // we should use "window.event" and then "event.srcElement"
    // instead of "event.target"
    el.attachEvent("on" + type, handler);
  }
};

dom.removeEventListener = function removeEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.removeEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.removeEventListener(el, t, handler);
    });
    return;
  }

  if (el.removeEventListener) {
    el.removeEventListener(type, handler, false);
  } else if (el.detachEvent) {
    el.detachEvent("on" + type, handler);
  } else {
    el["on" + type] = null;
  }
};

dom.dispatchEvent = function dispatchEvent(el, event) {
  if (el.dispatchEvent) {
    el.dispatchEvent(event);
  } else {
    el.fireEvent("on" + event.eventType, event);
  }
};

dom.isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

dom.getTextContent = function getTextContent(el){
  return el.textContent || el.text;
};

dom.prependChild = function prependChild(parent, child) {
  if(child.parentNode){
    child.parentNode.removeChild(child);
  }
  return parent.insertBefore(child, parent.firstChild);
};

dom.remove = function removeNode(node){
  if(node && node.parentNode){
    node.parentNode.removeChild(node);
  }
};

dom.isDomElement = function isDomElement(o) {
  return o instanceof Element || (parent && parent.Element && o instanceof parent.Element);     // If MOL is loaded in an iFrame, a DOM Element may be passed in from the parent document - check for that, too
};

dom.click = function(el, handler) {
  dom.addEventListener(el, 'click', handler);
};

dom.once = function(el, type, handler) {
  function handlerWrap() {
    handler.apply(null, arguments);
    dom.removeEventListener(el, type, handlerWrap);
  }

  dom.addEventListener(el, type, handlerWrap);
};

//Note: there is no getBoundingClientRect on iPad so we need a fallback
dom.getDimension = function getDimension(element) {
  var rect;

  //On IE9 and below getBoundingClientRect does not work consistently
  if(!utilities.isOldIE() && element.getBoundingClientRect) {
    rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height
    };
  }

  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

module.exports = dom;

},{"./utilityFunctions":43}],39:[function(require,module,exports){
'use strict';

var urlUtils = require('./urlUtils');
var utilities = require('./utilityFunctions');

function HttpRequestError(message) {
  this.message = 'HttpRequest Error: ' + (message || '');
}
HttpRequestError.prototype = new Error();
HttpRequestError.prototype.name = "HttpRequest Error";

function HttpRequest(createXhr) {
  if (!utilities.isFunction(createXhr)) {
    throw new HttpRequestError('Missing XMLHttpRequest factory method');
  }

  this.createXhr = createXhr;
}

HttpRequest.prototype.run = function (method, url, callback, options) {
  sanityCheck(url, callback, options);
  var timeout, timeoutId;
  var xhr = this.createXhr();
  options = options || {};
  timeout = utilities.isNumber(options.timeout) ? options.timeout : 0;

  xhr.open(method, urlUtils.urlParts(url).href, true);

  if (options.headers) {
    setHeaders(xhr, options.headers);
  }

  if (options.withCredentials) {
    xhr.withCredentials = true;
  }

  xhr.onload = function () {
    var statusText, response, status;

    /**
     * The only way to do a secure request on IE8 and IE9 is with the XDomainRequest object. Unfortunately, microsoft is
     * so nice that decided that the status property and the 'getAllResponseHeaders' method where not needed so we have to
     * fake them. If the request gets done with an XDomainRequest instance, we will assume that there are no headers and
     * the status will always be 200. If you don't like it, DO NOT USE ANCIENT BROWSERS!!!
     *
     * For mor info go to: https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx
     */
    if (!xhr.getAllResponseHeaders) {
      xhr.getAllResponseHeaders = function () {
        return null;
      };
    }

    if (!xhr.status) {
      xhr.status = 200;
    }

    if (utilities.isDefined(timeoutId)) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }

    statusText = xhr.statusText || '';

    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
    // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
    response = ('response' in xhr) ? xhr.response : xhr.responseText;

    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
    status = xhr.status === 1223 ? 204 : xhr.status;

    callback(
      status,
      response,
      xhr.getAllResponseHeaders(),
      statusText);
  };

  xhr.onerror = requestError;
  xhr.onabort = requestError;

  xhr.send();

  if (timeout > 0) {
    timeoutId = setTimeout(function () {
      xhr && xhr.abort();
    }, timeout);
  }

  function sanityCheck(url, callback, options) {
    if (!utilities.isString(url) || utilities.isEmptyString(url)) {
      throw new HttpRequestError("Invalid url '" + url + "'");
    }

    if (!utilities.isFunction(callback)) {
      throw new HttpRequestError("Invalid handler '" + callback + "' for the http request");
    }

    if (utilities.isDefined(options) && !utilities.isObject(options)) {
      throw new HttpRequestError("Invalid options map '" + options + "'");
    }
  }

  function setHeaders(xhr, headers) {
    utilities.forEach(headers, function (value, key) {
      if (utilities.isDefined(value)) {
        xhr.setRequestHeader(key, value);
      }
    });
  }

  function requestError() {
    callback(-1, null, null, '');
  }
};

HttpRequest.prototype.get = function (url, callback, options) {
  this.run('GET', url, processResponse, options);

  function processResponse(status, response, headersString, statusText) {
    if (isSuccess(status)) {
      callback(null, response, status, headersString, statusText);
    } else {
      callback(new HttpRequestError(statusText), response, status, headersString, statusText);
    }
  }

  function isSuccess(status) {
    return 200 <= status && status < 300;
  }
};

function createXhr() {
  var xhr = new XMLHttpRequest();
  if (!("withCredentials" in xhr)) {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
  }
  return xhr;
}

var http = new HttpRequest(createXhr);

module.exports = {
  http: http,
  HttpRequest: HttpRequest,
  HttpRequestError: HttpRequestError,
  createXhr: createXhr
};

},{"./urlUtils":42,"./utilityFunctions":43}],40:[function(require,module,exports){
'use strict';

module.exports = {
  html5: [
    'text/javascript',
    'text/javascript1.0',
    'text/javascript1.2',
    'text/javascript1.4',
    'text/jscript',
    'application/javascript',
    'application/x-javascript',
    'text/ecmascript',
    'text/ecmascript1.0',
    'text/ecmascript1.2',
    'text/ecmascript1.4',
    'text/livescript',
    'application/ecmascript',
    'application/x-ecmascript',
  ],

  flash: [
    'application/x-shockwave-flash'
  ],
};

},{}],41:[function(require,module,exports){
'use strict';

var dom = require('./dom');
var utilities = require('./utilityFunctions');

var playerUtils = {};

/**
 * Returns an object that captures the portions of player state relevant to
 * video playback. The result of this function can be passed to
 * restorePlayerSnapshot with a player to return the player to the state it
 * was in when this function was invoked.
 * @param {object} player The videojs player object
 */
playerUtils.getPlayerSnapshot = function getPlayerSnapshot(player) {
  var tech = player.el().querySelector('.vjs-tech');

  var snapshot = {
    ended: player.ended(),
    src: player.currentSrc(),
    currentTime: player.currentTime(),
    type: player.currentType(),
    playing: !player.paused(),
    suppressedTracks: getSuppressedTracks(player)
  };

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

  /**** Local Functions ****/
  function getSuppressedTracks(player) {
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
playerUtils.restorePlayerSnapshot = function restorePlayerSnapshot(player, snapshot) {
  var tech = player.el().querySelector('.vjs-tech');
  var attempts = 20; // the number of remaining attempts to restore the snapshot

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

  //if (hasSrcChanged(player, snapshot)) {

    // on ios7, fiddling with textTracks too early will cause safari to crash
    player.one('contentloadedmetadata', restoreTracks);

    player.one('canplay', tryToResume);
    ensureCanplayEvtGetsFired();

    // if the src changed for ad playback, reset it
    player.src({src: snapshot.src, type: snapshot.type});

    // safari requires a call to `load` to pick up a changed source
    // player.load();	// Safari 11 no more requires 'load'. Firefox doesn't like 'load' call for already loaded content (in case of AdLoaded timeout).

  /*} else {
    restoreTracks();

    if (snapshot.playing) {
      player.play();
    }
  }*/

  /*** Local Functions ***/

  /**
   * Sometimes firefox does not trigger the 'canplay' evt.
   * This code ensure that it always gets triggered triggered.
   */
  function ensureCanplayEvtGetsFired() {
    var timeoutId = setTimeout(function() {
      player.trigger('canplay');
    }, 1000);

    player.one('canplay', function(){
      clearTimeout(timeoutId);
    });
  }

  /**
   * Determine whether the player needs to be restored to its state
   * before ad playback began. With a custom ad display or burned-in
   * ads, the content player state hasn't been modified and so no
   * restoration is required
   */
  /*function hasSrcChanged(player, snapshot) {
    if (player.src()) {
      return player.src() !== snapshot.src;
    }
    // the player was configured through source element children
    return player.currentSrc() !== snapshot.src;
  }*/

  function restoreTracks() {
    var suppressedTracks = snapshot.suppressedTracks;
    suppressedTracks.forEach(function (trackSnapshot) {
      trackSnapshot.track.mode = trackSnapshot.mode;
    });
  }

  /**
   * Determine if the video element has loaded enough of the snapshot source
   * to be ready to apply the rest of the state
   */
  function tryToResume() {

    // if some period of the video is seekable, resume playback
    // otherwise delay a bit and then check again unless we're out of attempts

	  // safari 11 requires call `play` to make seek available
      player.play();

    if (!playerUtils.isReadyToResume(player) && attempts--) {
      setTimeout(tryToResume, 50);
    } else {
      try {
        if(player.currentTime() !== snapshot.currentTime) {
          if (snapshot.playing) { // if needed restore playing status after seek completes
            player.one('seeked', function() {
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
  //var _firstPlay = true;
  var volumeSnapshot;


  monkeyPatchPlayerApi();

  player.on('play', tryToTriggerFirstPlay);
  player.on('vast.reset', resetFirstPlay);//Every time we change the sources we reset the first play.
  player.on('vast.firstPlay', restoreContentVolume);
  player.on('error', hideBlackPoster);//If there is an error in the player we remove the blackposter to show the err msg
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
  
  /*** Local Functions ***/

  /**
   What this function does is ugly and horrible and I should think twice before calling myself a good developer. With that said,
   it is the best solution I could find to mute the video until the 'play' event happens (on mobile devices) and the plugin can decide whether
   to play the ad or not.

   We also need this monkeypatch to be able to pause and resume an ad using the player's API

   If you have a better solution please do tell me.
   */
  function monkeyPatchPlayerApi() {

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

      /*** local functions ***/
      function firstPlay() {
        if (!utilities.isIPhone()) {
          if (!volumeSnapshot) {
              volumeSnapshot = saveVolumeSnapshot();
          }
          player.muted(true);
        }

        origPlay.apply(that, arguments);
      }

      function resume(callOrigPlay) {
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
  
  function isVpaidPlaying() {
	  return player.vast && player.vast.VPAID;
  }

  function isAdPlaying() {
    return player.vast && player.vast.adUnit;
  }

  function tryToTriggerFirstPlay() {
    if (isFirstPlay()) {
  	  window._molSettings.firstPlay = false;
      //_firstPlay = false;
      player.trigger('vast.firstPlay');
    }
  }

  function resetFirstPlay() {
	  window._molSettings.firstPlay = true;
	    //_firstPlay = true;
    blackPoster.show();
    restoreContentVolume();
  }

  function isFirstPlay() {
	  return window._molSettings.firstPlay;
	    //return _firstPlay;
  }

  function saveVolumeSnapshot() {
    return {
      muted: player.muted(),
      volume: player.volume()
    };
  }

  function restoreContentVolume() {
    if (volumeSnapshot) {
      //player.currentTime(0);
      restoreVolumeSnapshot(volumeSnapshot);
      volumeSnapshot = null;
    }
  }

  function restoreVolumeSnapshot(snapshot) {
    if (utilities.isObject(snapshot)) {
      player.volume(snapshot.volume);
      player.muted(snapshot.muted);
    }
  }

  function hideBlackPoster() {
    if (!dom.hasClass(blackPoster.el(), 'vjs-hidden')) {
      blackPoster.hide();
    }
  }

  function addStyles() {
    dom.addClass(player.el(), 'vjs-ad-playing');
  }

  function removeStyles() {
	  player.off('play', tryToTriggerFirstPlay);
	  player.off('vast.reset', resetFirstPlay);//Every time we change the sources we reset the first play.
	  player.off('vast.firstPlay', restoreContentVolume);
	  player.off('error', hideBlackPoster);//If there is an error in the player we remove the blackposter to show the err msg
	  player.off('vast.adStart', hideBlackPoster);
	  player.off('vast.adsCancel', hideBlackPoster);
	  player.off('vast.adError', hideBlackPoster);
	  player.off('vast.adStart', addStyles);
	  player.off('vast.adEnd', removeStyles);
	  player.off('vast.adsCancel', removeStyles);
	  
      dom.removeClass(player.el(), 'vjs-ad-playing');
	  dom.removeClass(player.controlBar.playToggle.el(), 'vjs-ended');
	  
	  if (errorDialog) {
		  setTimeout(function() {
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
playerUtils.once = function once(player, events, handler) {
  function listener() {
    handler.apply(null, arguments);

    events.forEach(function (event) {
      player.off(event, listener);
    });
  }

  events.forEach(function (event) {
    player.on(event, listener);
  });
};

//plugin utils
playerUtils.showBigPlayButton = function(player, show) {
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

},{"./dom":38,"./utilityFunctions":43}],42:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

/**
 *
 * IMPORTANT NOTE: This function comes from angularJs and was originally called urlResolve
 *                 you can take a look at the original code here https://github.com/angular/angular.js/blob/master/src/ng/urlUtils.js
 *
 * Implementation Notes for non-IE browsers
 * ----------------------------------------
 * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,
 * results both in the normalizing and parsing of the URL.  Normalizing means that a relative
 * URL will be resolved into an absolute URL in the context of the application document.
 * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related
 * properties are all populated to reflect the normalized URL.  This approach has wide
 * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See
 * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *
 * Implementation Notes for IE
 * ---------------------------
 * IE >= 8 and <= 10 normalizes the URL when assigned to the anchor node similar to the other
 * browsers.  However, the parsed components will not be set if the URL assigned did not specify
 * them.  (e.g. if you assign a.href = "foo", then a.protocol, a.host, etc. will be empty.)  We
 * work around that by performing the parsing in a 2nd step by taking a previously normalized
 * URL (e.g. by assigning to a.href) and assigning it a.href again.  This correctly populates the
 * properties such as protocol, hostname, port, etc.
 *
 * IE7 does not normalize the URL when assigned to an anchor node.  (Apparently, it does, if one
 * uses the inner HTML approach to assign the URL as part of an HTML snippet -
 * http://stackoverflow.com/a/472729)  However, setting img[src] does normalize the URL.
 * Unfortunately, setting img[src] to something like "javascript:foo" on IE throws an exception.
 * Since the primary usage for normalizing URLs is to sanitize such URLs, we can't use that
 * method and IE < 8 is unsupported.
 *
 * References:
 *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
 *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *   http://url.spec.whatwg.org/#urlutils
 *   https://github.com/angular/angular.js/pull/2902
 *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
 *
 * @kind function
 * @param {string} url The URL to be parsed.
 * @description Normalizes and parses a URL.
 * @returns {object} Returns the normalized URL as a dictionary.
 *
 *   | member name   | Description    |
 *   |---------------|----------------|
 *   | href          | A normalized version of the provided URL if it was not an absolute URL |
 *   | protocol      | The protocol including the trailing colon                              |
 *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |
 *   | search        | The search params, minus the question mark                             |
 *   | hash          | The hash string, minus the hash symbol
 *   | hostname      | The hostname
 *   | port          | The port, without ":"
 *   | pathname      | The pathname, beginning with "/"
 *
 */

var urlParsingNode = document.createElement("a");
/**
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
var msie = document.documentMode;

function urlParts(url) {
  var href = url;

  if (msie) {
    // Normalize before parse.  Refer Implementation Notes on why this is
    // done in two steps on IE.
    urlParsingNode.setAttribute("href", href);
    href = urlParsingNode.href;
  }

  urlParsingNode.setAttribute('href', href);

  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  return {
    href: urlParsingNode.href,
    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
    host: urlParsingNode.host,
    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
    hostname: urlParsingNode.hostname,
    port: utilities.isNotEmptyString(urlParsingNode.port)? urlParsingNode.port: 80,
    pathname: (urlParsingNode.pathname.charAt(0) === '/')
      ? urlParsingNode.pathname
      : '/' + urlParsingNode.pathname
  };
}


/**
 * This function accepts a query string (search part of a url) and returns a dictionary with
 * the different key value pairs
 * @param {string} qs queryString
 */
function queryStringToObj(qs, cond) {
  var pairs, qsObj;

  cond = utilities.isFunction(cond)? cond : function() {
    return true;
  };

  qs = qs.trim().replace(/^\?/, '');
  pairs = qs.split('&');
  qsObj = {};

  utilities.forEach(pairs, function (pair) {
    var keyValue, key, value;
    if (pair !== '') {
      keyValue = pair.split('=');
      key = keyValue[0];
      value = keyValue[1];
      if(cond(key, value)){
        qsObj[key] = value;
      }
    }
  });

  return qsObj;
}

/**
 * This function accepts an object and serializes it into a query string without the leading '?'
 * @param obj
 * @returns {string}
 */
function objToQueryString(obj) {
  var pairs = [];
  utilities.forEach(obj, function (value, key) {
    pairs.push(key + '=' + value);
  });
  return pairs.join('&');
}

module.exports = {
  urlParts: urlParts,
  queryStringToObj: queryStringToObj,
  objToQueryString: objToQueryString
};

},{"./utilityFunctions":43}],43:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var NODE_TYPE_ELEMENT = 1;
var SNAKE_CASE_REGEXP = /[A-Z]/g;
var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
/*jslint maxlen: 500 */
var ISO8086_REGEXP = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;


function noop(){ }

function isNull(o) {
  return o === null;
}

function isDefined(o){
  return o !== undefined;
}

function isUndefined(o){
  return o === undefined;
}

function isObject(obj) {
  return typeof obj === 'object';
}

function isFunction(str){
  return typeof str === 'function';
}

function isNumber(num){
  return typeof num === 'number';
}

function isWindow(obj) {
  return utilities.isObject(obj) && obj.window === obj;
}

function isArray(array){
  return Object.prototype.toString.call( array ) === '[object Array]';
}

function isArrayLike(obj) {
  if (obj === null || utilities.isWindow(obj) || utilities.isFunction(obj) || utilities.isUndefined(obj)) {
    return false;
  }

  var length = obj.length;

  if (obj.nodeType === NODE_TYPE_ELEMENT && length) {
    return true;
  }

  return utilities.isString(obj) || utilities.isArray(obj) || length === 0 ||
    typeof length === 'number' && length > 0 && (length - 1) in obj;
}

function isString(str) {
  return typeof str === 'string';
}

function isEmptyString(str) {
  return utilities.isString(str) && str.length === 0;
}

function isNotEmptyString(str) {
  return utilities.isString(str) && str.length !== 0;
}

function arrayLikeObjToArray(args) {
  return Array.prototype.slice.call(args);
}

function forEach(obj, iterator, context) {
  var key, length;
  if (obj) {
    if (isFunction(obj)) {
      for (key in obj) {
        // Need to check if hasOwnProperty exists,
        // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
        if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (isArray(obj)) {
      var isPrimitive = typeof obj !== 'object';
      for (key = 0, length = obj.length; key < length; key++) {
        if (isPrimitive || key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
      obj.forEach(iterator, context, obj);
    } else {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  }
  return obj;
}

function snake_case(name, separator) {
  separator = separator || '_';
  return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
    return (pos ? separator : '') + letter.toLowerCase();
  });
}

function isValidEmail(email){
  if(!utilities.isString(email)){
    return false;
  }

  return EMAIL_REGEXP.test(email.trim());
}

function extend (obj) {
  var arg, i, k;
  for (i = 1; i < arguments.length; i++) {
    arg = arguments[i];
    for (k in arg) {
      if (arg.hasOwnProperty(k)) {
        if(isObject(obj[k]) && !isNull(obj[k]) && isObject(arg[k])){
          obj[k] = extend({}, obj[k], arg[k]);
        }else {
          obj[k] = arg[k];
        }
      }
    }
  }
  return obj;
}

function capitalize(s){
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function decapitalize(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * This method works the same way array.prototype.map works but if the transformer returns undefine, then
 * it won't be added to the transformed Array.
 */
function transformArray(array, transformer) {
  var transformedArray = [];

  array.forEach(function(item, index){
    var transformedItem = transformer(item, index);
    if(utilities.isDefined(transformedItem)) {
      transformedArray.push(transformedItem);
    }
  });

  return transformedArray;
}

function toFixedDigits(num, digits) {
  var formattedNum = num + '';
  digits = utilities.isNumber(digits) ? digits : 0;
  num = utilities.isNumber(num) ? num : parseInt(num, 10);
  if(utilities.isNumber(num) && !isNaN(num)){
    formattedNum = num + '';
    while(formattedNum.length < digits) {
      formattedNum = '0' + formattedNum;
    }
    return formattedNum;
  }
  return NaN + '';
}

function throttle(callback, delay) {
  var previousCall = new Date().getTime() - (delay + 1);
  return function() {
    var time = new Date().getTime();
    if ((time - previousCall) >= delay) {
      previousCall = time;
      callback.apply(this, arguments);
    }
  };
}

function debounce (callback, wait) {
  var timeoutId;

  return function (){
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function(){
      callback.apply(this, arguments);
      timeoutId = undefined;
    }, wait);
  };
}

// a function designed to blow up the stack in a naive way
// but it is ok for videoJs children components
function treeSearch(root, getChildren, found){
  var children = getChildren(root);
  for (var i = 0; i < children.length; i++){
    if (found(children[i])) {
      return children[i];
    }
    else {
      var el = treeSearch(children[i], getChildren, found);
      if (el){
        return el;
      }
    }
  }
}

function echoFn(val) {
  return function () {
    return val;
  };
}

//Note: Supported formats come from http://www.w3.org/TR/NOTE-datetime
// and the iso8601 regex comes from http://www.pelagodesign.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
function isISO8601(value) {
  if(utilities.isNumber(value)){
    value = value + '';  //we make sure that we are working with strings
  }

  if(!utilities.isString(value)){
    return false;
  }

  return ISO8086_REGEXP.test(value.trim());
}

/**
 * Checks if the Browser is IE9 and below
 * @returns {boolean}
 */
function isOldIE() {
  var version = utilities.getInternetExplorerVersion(navigator);
  if (version === -1) {
    return false;
  }

  return version < 10;
}

/**
 * Returns the version of Internet Explorer or a -1 (indicating the use of another browser).
 * Source: https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
 * @returns {number} the version of Internet Explorer or a -1 (indicating the use of another browser).
 */
function getInternetExplorerVersion(navigator) {
  var rv = -1;

  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    var res = re.exec(ua);
    if (res !== null) {
      rv = parseFloat(res[1]);
    }
  }

  return rv;
}

function isIE11() {
  var res = navigator.userAgent.search(/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i);
  return res >= 0;
}

/*** Mobile Utility functions ***/
function isIDevice() {
  return /iP(hone|ad)/.test(utilities._UA);
}

function isMobile() {
  return /iP(hone|ad|od)|Android|Windows Phone/.test(utilities._UA);
}

function isIPhone() {
  return /iP(hone|od)/.test(utilities._UA);
}

function isAndroid() {
  return /Android/.test(utilities._UA);
}

function isEdge() {
  return /(edge)\/((\d+)?[\w\.]+)/i.test(utilities._UA);
}

function scriptLoadedInIframe() {
	var docClassList = document.documentElement.classList;
	var scriptInPlayerIframe = docClassList && docClassList.contains('bc-iframe'); // html of player has bc-iframe class when Brightcove player emded in iFrame
  return !(scriptInPlayerIframe && isEdge());
}

var utilities = {
  _UA: navigator.userAgent,
  noop: noop,
  isNull: isNull,
  isDefined: isDefined,
  isUndefined: isUndefined,
  isObject: isObject,
  isFunction: isFunction,
  isNumber: isNumber,
  isWindow: isWindow,
  isArray: isArray,
  isArrayLike: isArrayLike,
  isString: isString,
  isEmptyString: isEmptyString,
  isNotEmptyString: isNotEmptyString,
  arrayLikeObjToArray: arrayLikeObjToArray,
  forEach: forEach,
  snake_case: snake_case,
  isValidEmail: isValidEmail,
  extend: extend,
  capitalize: capitalize,
  decapitalize: decapitalize,
  transformArray: transformArray,
  toFixedDigits: toFixedDigits,
  throttle: throttle,
  debounce: debounce,
  treeSearch: treeSearch,
  echoFn: echoFn,
  isISO8601: isISO8601,
  isOldIE: isOldIE,
  isIE11: isIE11,
  getInternetExplorerVersion: getInternetExplorerVersion,
  isIDevice: isIDevice,
  isMobile: isMobile,
  isIPhone: isIPhone,
  isAndroid: isAndroid,
  isEdge: isEdge,
  scriptLoadedInIframe: scriptLoadedInIframe
};

module.exports = utilities;

},{}],44:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var xml = {};

xml.strToXMLDoc = function strToXMLDoc(stringContainingXMLSource){
  //IE 8
  if(typeof window.DOMParser === 'undefined'){
    var xmlDocument = new ActiveXObject('Microsoft.XMLDOM');
    xmlDocument.async = false;
    xmlDocument.loadXML(stringContainingXMLSource);
    return xmlDocument;
  }

  return parseString(stringContainingXMLSource);

  function parseString(stringContainingXMLSource){
    var parser = new DOMParser();
    var parsedDocument;

    //Note: This try catch is to deal with the fact that on IE parser.parseFromString does throw an error but the rest of the browsers don't.
    try {
      parsedDocument = parser.parseFromString(stringContainingXMLSource, "application/xml");

      if(isParseError(parsedDocument) || utilities.isEmptyString(stringContainingXMLSource)){
        throw new Error();
      }
    }catch(e){
      throw new Error("xml.strToXMLDOC: Error parsing the string: '" + stringContainingXMLSource + "'");
    }

    return parsedDocument;
  }

  function isParseError(parsedDocument) {
    try { // parser and parsererrorNS could be cached on startup for efficiency
      var parser = new DOMParser(),
        erroneousParse = parser.parseFromString('INVALID', 'text/xml'),
        parsererrorNS = erroneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

      if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
        // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
        return parsedDocument.getElementsByTagName("parsererror").length > 0;
      }

      return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
    } catch (e) {
      //Note on IE parseString throws an error by itself and it will never reach this code. Because it will have failed before
    }
  }
};

xml.parseText = function parseText (sValue) {
  if (/^\s*$/.test(sValue)) { return null; }
  if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
  if (isFinite(sValue)) { return parseFloat(sValue); }
  if (utilities.isISO8601(sValue)) { return new Date(sValue); }
  return sValue.trim();
};

xml.JXONTree = function JXONTree (oXMLParent) {
  var parseText = xml.parseText;

  //The document object is an especial object that it may miss some functions or attrs depending on the browser.
  //To prevent this problem with create the JXONTree using the root childNode which is a fully fleshed node on all supported
  //browsers.
  if(oXMLParent.documentElement){
    return new xml.JXONTree(oXMLParent.documentElement);
  }

  if (oXMLParent.hasChildNodes()) {
    var sCollectedTxt = "";
    for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
      oNode = oXMLParent.childNodes.item(nItem);
      /*jshint bitwise: false*/
      if ((oNode.nodeType - 1 | 1) === 3) { sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue; }
      else if (oNode.nodeType === 1 && !oNode.prefix) {
        sProp = utilities.decapitalize(oNode.nodeName);
        vContent = new xml.JXONTree(oNode);
        if (this.hasOwnProperty(sProp)) {
          if (this[sProp].constructor !== Array) { this[sProp] = [this[sProp]]; }
          this[sProp].push(vContent);
        } else { this[sProp] = vContent; }
      }
    }
    if (sCollectedTxt) { this.keyValue = parseText(sCollectedTxt); }
  }

  //IE8 Stupid fix
  var hasAttr = typeof oXMLParent.hasAttributes === 'undefined'? oXMLParent.attributes.length > 0: oXMLParent.hasAttributes();
  if (hasAttr) {
    var oAttrib;
    for (var nAttrib = 0; nAttrib < oXMLParent.attributes.length; nAttrib++) {
      oAttrib = oXMLParent.attributes.item(nAttrib);
      this["@" + utilities.decapitalize(oAttrib.name)] = parseText(oAttrib.value.trim());
    }
  }
};

xml.JXONTree.prototype.attr = function(attr) {
  return this['@' + utilities.decapitalize(attr)];
};

xml.toJXONTree = function toJXONTree(xmlString){
  var xmlDoc = xml.strToXMLDoc(xmlString);
  return new xml.JXONTree(xmlDoc);
};

/**
 * Helper function to extract the keyvalue of a JXONTree obj
 *
 * @param xmlObj {JXONTree}
 * return the key value or undefined;
 */
xml.keyValue = function getKeyValue(xmlObj) {
  if(xmlObj){
    return xmlObj.keyValue;
  }
  return undefined;
};

xml.attr = function getAttrValue(xmlObj, attr) {
  if(xmlObj) {
    return xmlObj['@' + utilities.decapitalize(attr)];
  }
  return undefined;
};

xml.encode = function encodeXML(str) {
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

xml.decode = function decodeXML(str) {
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
};

module.exports = xml;

},{"./utilityFunctions":43}],45:[function(require,module,exports){
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

require('./plugin/components/black-poster_5');
var logger = require ('./utils/consoleLogger');

logger.log('Prebid MailOnline plugin version 1.3.9');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

if (videojs.registerPlugin) {
  if (!videojs.getPlugins().vastClient) {
    videojs.registerPlugin('vastClient', videoJsVAST);
  }
}
else {
  if (!videojs.Player.prototype.vastClient) {
    videojs.plugin('vastClient', videoJsVAST);
  }
}

// VIDLA-4391 - Add support for multiple players on the same page, each with a unique MOL plugin loaded from an iFrames
if (parent && window !== parent) {
  window.bc_vastClientFunc = videoJsVAST;
}

},{"./plugin/components/black-poster_5":33,"./plugin/videojs.vast.vpaid":34,"./utils/consoleLogger":37}]},{},[45])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9zY3JpcHRzL2Fkcy9pY29uL0ljb25JbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9DYXRlZ29yeS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0NvbXBhbmlvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0NyZWF0aXZlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvSWNvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0luTGluZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0ludGVyYWN0aXZlQ3JlYXRpdmVGaWxlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvTGluZWFyLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvTWVkaWFGaWxlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVHJhY2tpbmdFdmVudC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1VuaXZlcnNhbEFkSWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUQ2xpZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEVycm9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEludGVncmF0b3IuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUUmVzcG9uc2UuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUVHJhY2tlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZlcmlmaWNhdGlvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZpZGVvQ2xpY2tzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVmlld2FibGVJbXByZXNzaW9uLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvV3JhcHBlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L3BhcnNlcnMuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC92YXN0VXRpbC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92cGFpZC9WUEFJREFkVW5pdFdyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURIVE1MNVRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzUuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vdmlkZW9qcy52YXN0LnZwYWlkLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvYW5WaWRlb1ZpZXdhYmlsaXR5LmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvYXN5bmMuanMiLCJzcmMvc2NyaXB0cy91dGlscy9jb25zb2xlTG9nZ2VyLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvZG9tLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvaHR0cC5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL21pbWV0eXBlcy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3BsYXllclV0aWxzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvdXJsVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91dGlsaXR5RnVuY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMveG1sLmpzIiwic3JjL3NjcmlwdHMvdmlkZW9qc181LnZhc3QudnBhaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2cEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDck9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbG1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUVUSE9EUyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsXG4gICAgJ2luaXRBZCcsXG4gICAgJ3N0YXJ0QWQnLFxuICAgICdzdG9wQWQnLFxuICAgICdza2lwQWQnLCAvLyBWUEFJRCAyLjAgbmV3IG1ldGhvZFxuICAgICdyZXNpemVBZCcsXG4gICAgJ3BhdXNlQWQnLFxuICAgICdyZXN1bWVBZCcsXG4gICAgJ2V4cGFuZEFkJyxcbiAgICAnY29sbGFwc2VBZCcsXG4gICAgJ3N1YnNjcmliZScsXG4gICAgJ3Vuc3Vic2NyaWJlJ1xuXTtcblxudmFyIEVWRU5UUyA9IFtcbiAgICAnQWRMb2FkZWQnLFxuICAgICdBZFN0YXJ0ZWQnLFxuICAgICdBZFN0b3BwZWQnLFxuICAgICdBZFNraXBwZWQnLFxuICAgICdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkTGluZWFyQ2hhbmdlJyxcbiAgICAnQWREdXJhdGlvbkNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgJ0FkVm9sdW1lQ2hhbmdlJyxcbiAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAnQWRWaWRlb1N0YXJ0JyxcbiAgICAnQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLFxuICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9Db21wbGV0ZScsXG4gICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsXG4gICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAnQWRVc2VyQ2xvc2UnLFxuICAgICdBZFBhdXNlZCcsXG4gICAgJ0FkUGxheWluZycsXG4gICAgJ0FkTG9nJyxcbiAgICAnQWRFcnJvcidcbl07XG5cbnZhciBHRVRURVJTID0gW1xuICAgICdnZXRBZExpbmVhcicsXG4gICAgJ2dldEFkV2lkdGgnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEhlaWdodCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkRXhwYW5kZWQnLFxuICAgICdnZXRBZFNraXBwYWJsZVN0YXRlJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRSZW1haW5pbmdUaW1lJyxcbiAgICAnZ2V0QWREdXJhdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkVm9sdW1lJyxcbiAgICAnZ2V0QWRDb21wYW5pb25zJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRJY29ucycgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbl07XG5cbnZhciBTRVRURVJTID0gW1xuICAgICdzZXRBZFZvbHVtZSdcbl07XG5cblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cblxuLyoqXG4gKiBJVlBBSURBZFVuaXRcbiAqXG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlYXRpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvXG4gKi9cbmZ1bmN0aW9uIElWUEFJREFkVW5pdChjcmVhdGl2ZSwgZWwsIHZpZGVvKSB7fVxuXG5cbi8qKlxuICogaGFuZHNoYWtlVmVyc2lvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBWUEFJRFZlcnNpb25cbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uIChWUEFJRFZlcnNpb24sIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBpbml0QWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb25cbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RvcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2tpcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzaXplQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBwYXVzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHJlc3VtZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBleHBhbmRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogY29sbGFwc2VBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7fTtcblxuXG5cbi8qKlxuICogZ2V0QWRMaW5lYXJcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkTGluZWFyID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkV2lkdGhcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkV2lkdGggPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRIZWlnaHRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSGVpZ2h0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRXhwYW5kZWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRXhwYW5kZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRTa2lwcGFibGVTdGF0ZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRTa2lwcGFibGVTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFJlbWFpbmluZ1RpbWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkUmVtYWluaW5nVGltZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZER1cmF0aW9uXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZER1cmF0aW9uID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZENvbXBhbmlvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkQ29tcGFuaW9ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEljb25zXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEljb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2FsbGJhY2spIHt9O1xuXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdNRVRIT0RTJywgTUVUSE9EUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdHRVRURVJTJywgR0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdTRVRURVJTJywgU0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCAgRVZFTlRTKTtcblxuXG52YXIgVlBBSUQxX01FVEhPRFMgPSBNRVRIT0RTLmZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gWydza2lwQWQnXS5pbmRleE9mKG1ldGhvZCkgPT09IC0xO1xufSk7XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ2NoZWNrVlBBSURJbnRlcmZhY2UnLCBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlIChjcmVhdGl2ZSkge1xuICAgIHZhciByZXN1bHQgPSBWUEFJRDFfTUVUSE9EUy5ldmVyeShmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjcmVhdGl2ZVtrZXldID09PSAnZnVuY3Rpb24nO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJVlBBSURBZFVuaXQ7XG5cbmZ1bmN0aW9uIGFkZFN0YXRpY1RvSW50ZXJmYWNlKEludGVyZmFjZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW50ZXJmYWNlLCBuYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIElWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vSVZQQUlEQWRVbml0Jyk7XG52YXIgU3Vic2NyaWJlciA9IHJlcXVpcmUoJy4vc3Vic2NyaWJlcicpO1xudmFyIGNoZWNrVlBBSURJbnRlcmZhY2UgPSBJVlBBSURBZFVuaXQuY2hlY2tWUEFJREludGVyZmFjZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBNRVRIT0RTID0gSVZQQUlEQWRVbml0Lk1FVEhPRFM7XG52YXIgRVJST1IgPSAnQWRFcnJvcic7XG52YXIgQURfQ0xJQ0sgPSAnQWRDbGlja1RocnUnO1xudmFyIEZJTFRFUkVEX0VWRU5UUyA9IElWUEFJREFkVW5pdC5FVkVOVFMuZmlsdGVyKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBldmVudCAhPSBBRF9DTElDSztcbn0pO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIFZQQUlEQWRVbml0XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0gVlBBSURDcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2VsXSB0aGlzIHdpbGwgYmUgdXNlZCBpbiBpbml0QWQgZW52aXJvbm1lbnRWYXJzLnNsb3QgaWYgZGVmaW5lZFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSBbdmlkZW9dIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMudmlkZW9TbG90IGlmIGRlZmluZWRcbiAqL1xuZnVuY3Rpb24gVlBBSURBZFVuaXQoVlBBSURDcmVhdGl2ZSwgZWwsIHZpZGVvLCBpZnJhbWUpIHtcbiAgICB0aGlzLl9pc1ZhbGlkID0gY2hlY2tWUEFJREludGVyZmFjZShWUEFJRENyZWF0aXZlKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZSA9IFZQQUlEQ3JlYXRpdmU7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICAgICAgdGhpcy5faWZyYW1lID0gaWZyYW1lO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgIHV0aWxzLnNldEZ1bGxTaXplU3R5bGUoZWwpO1xuICAgICAgICAkYWRkRXZlbnRzU3Vic2NyaWJlcnMuY2FsbCh0aGlzKTtcbiAgICB9XG59XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSVZQQUlEQWRVbml0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogaXNWYWxpZFZQQUlEQWQgd2lsbCByZXR1cm4gaWYgdGhlIFZQQUlEQ3JlYXRpdmUgcGFzc2VkIGluIGNvbnN0cnVjdG9yIGlzIHZhbGlkIG9yIG5vdFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5pc1ZhbGlkVlBBSURBZCA9IGZ1bmN0aW9uIGlzVmFsaWRWUEFJREFkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xufTtcblxuSVZQQUlEQWRVbml0Lk1FVEhPRFMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAvL05PVEU6IHRoaXMgbWV0aG9kcyBhcmd1bWVudHMgb3JkZXIgYXJlIGltcGxlbWVudGVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHNwZWNcbiAgICB2YXIgaWdub3JlcyA9IFtcbiAgICAgICAgJ3N1YnNjcmliZScsXG4gICAgICAgICd1bnN1YnNjcmliZScsXG4gICAgICAgICdpbml0QWQnXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVzLmluZGV4T2YobWV0aG9kKSAhPT0gLTEpIHJldHVybjtcblxuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJpYXR5ID0gSVZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdLmxlbmd0aDtcbiAgICAgICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSAoYXJpYXR5ID09PSBhcmdzLmxlbmd0aCkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVttZXRob2RdLmFwcGx5KHRoaXMuX2NyZWF0aXZlLCBhcmdzKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG5cbi8qKlxuICogaW5pdEFkIGNvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvbiwgaWYgZWwgJiB2aWRlbyB3YXMgdXNlZCBpbiBjb25zdHJ1Y3RvciBzbG90ICYgdmlkZW9TbG90IHdpbGwgYmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uIGluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge1xuICAgIGNyZWF0aXZlRGF0YSA9IGNyZWF0aXZlRGF0YSB8fCB7fTtcbiAgICBlbnZpcm9ubWVudFZhcnMgPSB1dGlscy5leHRlbmQoe1xuICAgICAgICBzbG90OiB0aGlzLl9lbCxcbiAgICAgICAgdmlkZW9TbG90OiB0aGlzLl92aWRlb0VsXG4gICAgfSwgZW52aXJvbm1lbnRWYXJzIHx8IHt9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5pbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yKTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnQsIGNvbnRleHQpO1xufTtcblxuXG4vKipcbiAqIHVuc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudW5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnQpO1xufTtcblxuLy9hbGlhc1xuVlBBSURBZFVuaXQucHJvdG90eXBlLm9uID0gVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZTtcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vZmYgPSBWUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmU7XG5cbklWUEFJREFkVW5pdC5HRVRURVJTLmZvckVhY2goZnVuY3Rpb24oZ2V0dGVyKSB7XG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW2dldHRlcl0gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmVbZ2V0dGVyXSgpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9O1xufSk7XG5cbi8qKlxuICogc2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0gdm9sdW1lXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbiBzZXRBZFZvbHVtZSh2b2x1bWUsIGNhbGxiYWNrKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpdmUuc2V0QWRWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlLmdldEFkVm9sdW1lKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShyZXN1bHQgPT09IHZvbHVtZSwgJ2ZhaWxlZCB0byBhcHBseSB2b2x1bWU6ICcgKyB2b2x1bWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMuc3RvcEFkKCk7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudW5zdWJzY3JpYmVBbGwoKTtcbn07XG5cbmZ1bmN0aW9uICRhZGRFdmVudHNTdWJzY3JpYmVycygpIHtcbiAgICAvLyBzb21lIGFkcyBpbXBsZW1lbnRcbiAgICAvLyBzbyB0aGV5IG9ubHkgaGFuZGxlIG9uZSBzdWJzY3JpYmVyXG4gICAgLy8gdG8gaGFuZGxlIHRoaXMgd2UgY3JlYXRlIG91ciBvbmVcbiAgICBGSUxURVJFRF9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRpdmUuc3Vic2NyaWJlKCR0cmlnZ2VyLmJpbmQodGhpcywgZXZlbnQpLCBldmVudCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIG1hcCB0aGUgY2xpY2sgZXZlbnQgdG8gYmUgYW4gb2JqZWN0IGluc3RlYWQgb2YgZGVwZW5kaW5nIG9mIHRoZSBvcmRlciBvZiB0aGUgYXJndW1lbnRzXG4gICAgLy8gYW5kIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgZmxhc2hcbiAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJGNsaWNrVGhydUhvb2suYmluZCh0aGlzKSwgQURfQ0xJQ0spO1xuXG4gICAgLy8gYmVjYXVzZSB3ZSBhcmUgYWRkaW5nIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgaWZyYW1lXG4gICAgLy8gdGhlIHVzZXIgaXMgbm90IGFibGUgdG8gY2xpY2sgaW4gdGhlIHZpZGVvXG4gICAgaWYgKHRoaXMuX3ZpZGVvRWwpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHRoaXMuX2lmcmFtZS5jb250ZW50RG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgdmlkZW9FbCA9IHRoaXMuX3ZpZGVvRWw7XG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmlkZW9FbC5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRjbGlja1RocnVIb29rKHVybCwgaWQsIHBsYXllckhhbmRsZXMpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyU3luYyhBRF9DTElDSywge3VybDogdXJsLCBpZDogaWQsIHBsYXllckhhbmRsZXM6IHBsYXllckhhbmRsZXN9KTtcbn1cblxuZnVuY3Rpb24gJHRyaWdnZXIoZXZlbnQpIHtcbiAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudHJpZ2dlcihldmVudCwgQXJyYXkucHJvdG90eXBlLnNsaWNlKGFyZ3VtZW50cywgMSkpO1xufVxuXG5mdW5jdGlvbiBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHN1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgICAgc3Vic2NyaWJlcnMudHJpZ2dlcihFUlJPUiwgZXJyb3IpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREFkVW5pdDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgdW5pcXVlID0gdXRpbHMudW5pcXVlKCd2cGFpZElmcmFtZScpO1xudmFyIFZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdCcpO1xuXG52YXIgZGVmYXVsdFRlbXBsYXRlID0gJzwhRE9DVFlQRSBodG1sPicgK1xuICAgICc8aHRtbCBsYW5nPVwiZW5cIj4nICtcbiAgICAnPGhlYWQ+PG1ldGEgY2hhcnNldD1cIlVURi04XCI+PC9oZWFkPicgK1xuICAgICc8Ym9keSBzdHlsZT1cIm1hcmdpbjowO3BhZGRpbmc6MFwiPjxkaXYgY2xhc3M9XCJhZC1lbGVtZW50XCI+PC9kaXY+JyArXG4gICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInt7aWZyYW1lVVJMX0pTfX1cIj48L3NjcmlwdD4nICtcbiAgICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+JyArXG4gICAgJ3dpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXFwne1wiZXZlbnRcIjogXCJyZWFkeVwiLCBcImlkXCI6IFwie3tpZnJhbWVJRH19XCJ9XFwnLCBcXCd7e29yaWdpbn19XFwnKTsnICtcbiAgICAnPC9zY3JpcHQ+JyArXG4gICAgJzwvYm9keT4nICtcbiAgICAnPC9odG1sPic7XG5cbnZhciBBRF9TVE9QUEVEID0gJ0FkU3RvcHBlZCc7XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG4vKipcbiAqIFZQQUlESFRNTDVDbGllbnRcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIHRoYXQgd2lsbCBjb250YWluIHRoZSBpZnJhbWUgdG8gbG9hZCBhZFVuaXQgYW5kIGEgZWwgdG8gYWRkIHRvIGFkVW5pdCBzbG90XG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvIGRlZmF1bHQgdmlkZW8gZWxlbWVudCB0byBiZSB1c2VkIGJ5IGFkVW5pdFxuICogQHBhcmFtIHtvYmplY3R9IFt0ZW1wbGF0ZUNvbmZpZ10gdGVtcGxhdGU6IGh0bWwgdGVtcGxhdGUgdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCBleHRyYU9wdGlvbnM6IHRvIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3ZwYWlkT3B0aW9uc10gdGltZW91dDogd2hlbiBsb2FkaW5nIGFkVW5pdFxuICovXG5mdW5jdGlvbiBWUEFJREhUTUw1Q2xpZW50KGVsLCB2aWRlbywgdGVtcGxhdGVDb25maWcsIHZwYWlkT3B0aW9ucykge1xuICAgIHRlbXBsYXRlQ29uZmlnID0gdGVtcGxhdGVDb25maWcgfHwge307XG5cbiAgICB0aGlzLl9pZCA9IHVuaXF1ZSgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZnJhbWVDb250YWluZXIgPSB1dGlscy5jcmVhdGVFbGVtZW50SW5FbChlbCwgJ2RpdicpO1xuICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICB0aGlzLl92cGFpZE9wdGlvbnMgPSB2cGFpZE9wdGlvbnMgfHwge3RpbWVvdXQ6IDEwMDAwfTtcblxuICAgIHRoaXMuX3RlbXBsYXRlQ29uZmlnID0ge1xuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVDb25maWcudGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlLFxuICAgICAgICBleHRyYU9wdGlvbnM6IHRlbXBsYXRlQ29uZmlnLmV4dHJhT3B0aW9ucyB8fCB7fVxuICAgIH07XG59XG5cbi8qKlxuICogZGVzdHJveVxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIGlzRGVzdHJveWVkXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuaXNEZXN0cm95ZWQgPSBmdW5jdGlvbiBpc0Rlc3Ryb3llZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdHJveWVkO1xufTtcblxuLyoqXG4gKiBsb2FkQWRVbml0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFkVVJMIHVybCBvZiB0aGUganMgb2YgdGhlIGFkVW5pdFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRBZFVuaXQoYWRVUkwsIGNhbGxiYWNrKSB7XG4gICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB2YXIgZnJhbWUgPSB1dGlscy5jcmVhdGVJZnJhbWVXaXRoQ29udGVudChcbiAgICAgICAgdGhpcy5fZnJhbWVDb250YWluZXIsXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlQ29uZmlnLnRlbXBsYXRlLFxuICAgICAgICB1dGlscy5leHRlbmQoe1xuICAgICAgICAgICAgaWZyYW1lVVJMX0pTOiBhZFVSTCxcbiAgICAgICAgICAgIGlmcmFtZUlEOiB0aGlzLmdldElEKCksXG4gICAgICAgICAgICBvcmlnaW46IGdldE9yaWdpbigpXG4gICAgICAgIH0sIHRoaXMuX3RlbXBsYXRlQ29uZmlnLmV4dHJhT3B0aW9ucylcbiAgICApO1xuXG4gICAgdGhpcy5fZnJhbWUgPSBmcmFtZTtcblxuICAgIHRoaXMuX29uTG9hZCA9IHV0aWxzLmNhbGxiYWNrVGltZW91dChcbiAgICAgICAgdGhpcy5fdnBhaWRPcHRpb25zLnRpbWVvdXQsXG4gICAgICAgIG9uTG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICBvblRpbWVvdXQuYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTG9hZCk7XG5cbiAgICBmdW5jdGlvbiBvbkxvYWQgKGUpIHtcbiAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiBmYWxzZSAqL1xuICAgICAgICAvL2Rvbid0IGNsZWFyIHRpbWVvdXRcbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSBnZXRPcmlnaW4oKSkgcmV0dXJuO1xuICAgICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuXG4gICAgICAgIC8vZG9uJ3QgY2xlYXIgdGltZW91dFxuICAgICAgICBpZiAocmVzdWx0LmlkICE9PSB0aGF0LmdldElEKCkpIHJldHVybjtcblxuICAgICAgICB2YXIgYWRVbml0LCBlcnJvciwgY3JlYXRlQWQ7XG4gICAgICAgIGlmICghdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdykge1xuXG4gICAgICAgICAgICBlcnJvciA9ICd0aGUgaWZyYW1lIGlzIG5vdCBhbnltb3JlIGluIHRoZSBET00gdHJlZSc7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNyZWF0ZUFkID0gdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdy5nZXRWUEFJREFkO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZSh0eXBlb2YgY3JlYXRlQWQgPT09ICdmdW5jdGlvbicsICd0aGUgYWQgZGlkblxcJ3QgcmV0dXJuIGEgZnVuY3Rpb24gdG8gY3JlYXRlIGFuIGFkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICB2YXIgYWRFbCA9IHRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkLWVsZW1lbnQnKTtcbiAgICAgICAgICAgIGFkVW5pdCA9IG5ldyBWUEFJREFkVW5pdChjcmVhdGVBZCgpLCBhZEVsLCB0aGF0Ll92aWRlb0VsLCB0aGF0Ll9mcmFtZSk7XG4gICAgICAgICAgICBhZFVuaXQuc3Vic2NyaWJlKEFEX1NUT1BQRUQsICRhZERlc3Ryb3llZC5iaW5kKHRoYXQpKTtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUoYWRVbml0LmlzVmFsaWRWUEFJREFkKCksICd0aGUgYWRkIGlzIG5vdCBmdWxseSBjb21wbGFpbnQgd2l0aCBWUEFJRCBzcGVjaWZpY2F0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Ll9hZFVuaXQgPSBhZFVuaXQ7XG4gICAgICAgICRkZXN0cm95TG9hZExpc3RlbmVyLmNhbGwodGhhdCk7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBlcnJvciA/IG51bGwgOiBhZFVuaXQpO1xuXG4gICAgICAgIC8vY2xlYXIgdGltZW91dFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICAgIGNhbGxiYWNrKCd0aW1lb3V0JywgbnVsbCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiB1bmxvYWRBZFVuaXRcbiAqXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIHVubG9hZEFkVW5pdCgpIHtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogZ2V0SUQgd2lsbCByZXR1cm4gdGhlIHVuaXF1ZSBpZFxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuZ2V0SUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xufTtcblxuXG4vKipcbiAqICRyZW1vdmVFbFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuZnVuY3Rpb24gJHJlbW92ZUVsKGtleSkge1xuICAgIHZhciBlbCA9IHRoaXNba2V5XTtcbiAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkYWREZXN0cm95ZWQoKSB7XG4gICAgJHJlbW92ZUFkRWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgICBkZWxldGUgdGhpcy5fYWRVbml0O1xufVxuXG5mdW5jdGlvbiAkdW5sb2FkUHJldmlvdXNBZFVuaXQoKSB7XG4gICAgJHJlbW92ZUFkRWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgICAkZGVzdHJveUFkVW5pdC5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiAkcmVtb3ZlQWRFbGVtZW50cygpIHtcbiAgICAkcmVtb3ZlRWwuY2FsbCh0aGlzLCAnX2ZyYW1lJyk7XG4gICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGlzKTtcbn1cblxuLyoqXG4gKiAkZGVzdHJveUxvYWRMaXN0ZW5lclxuICpcbiAqL1xuZnVuY3Rpb24gJGRlc3Ryb3lMb2FkTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX29uTG9hZCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTG9hZCk7XG4gICAgICAgIHV0aWxzLmNsZWFyQ2FsbGJhY2tUaW1lb3V0KHRoaXMuX29uTG9hZCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vbkxvYWQ7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uICRkZXN0cm95QWRVbml0KCkge1xuICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgICAgdGhpcy5fYWRVbml0LnN0b3BBZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fYWRVbml0O1xuICAgIH1cbn1cblxuLyoqXG4gKiAkdGhyb3dJZkRlc3Ryb3llZFxuICpcbiAqL1xuZnVuY3Rpb24gJHRocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdWUEFJREhUTUw1Q2xpZW50IGFscmVhZHkgZGVzdHJveWVkIScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0T3JpZ2luKCkge1xuICAgIGlmKCB3aW5kb3cubG9jYXRpb24ub3JpZ2luICkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgK1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICtcbiAgICAgICAgICAgICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESFRNTDVDbGllbnQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gU3Vic2NyaWJlcigpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHt9O1xufVxuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoaGFuZGxlciwgZXZlbnROYW1lLCBjb250ZXh0KSB7XG4gICAgaWYgKCF0aGlzLmlzSGFuZGxlckF0dGFjaGVkKGhhbmRsZXIsIGV2ZW50TmFtZSkpIHtcbiAgICAgICAgdGhpcy5nZXQoZXZlbnROYW1lKS5wdXNoKHtoYW5kbGVyOiBoYW5kbGVyLCBjb250ZXh0OiBjb250ZXh0LCBldmVudE5hbWU6IGV2ZW50TmFtZX0pO1xuICAgIH1cbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdW5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnROYW1lKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IHRoaXMuZ2V0KGV2ZW50TmFtZSkuZmlsdGVyKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyICE9PSBzdWJzY3JpYmVyLmhhbmRsZXI7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge307XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBzdWJzY3JpYmVycyA9IHRoaXMuZ2V0KGV2ZW50TmFtZSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLmdldCgnKicpKTtcblxuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhhdC5pc0hhbmRsZXJBdHRhY2hlZChzdWJzY3JpYmVyLmhhbmRsZXIsIHN1YnNjcmliZXIuZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuaGFuZGxlci5jYWxsKHN1YnNjcmliZXIuY29udGV4dCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudHJpZ2dlclN5bmMgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgc3Vic2NyaWJlcnMgPSB0aGlzLmdldChldmVudE5hbWUpXG4gICAgICAgIC5jb25jYXQodGhpcy5nZXQoJyonKSk7XG5cbiAgICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHN1YnNjcmliZXIuaGFuZGxlci5jYWxsKHN1YnNjcmliZXIuY29udGV4dCwgZGF0YSk7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoZXZlbnROYW1lKSB7XG4gICAgaWYgKCF0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV07XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS5pc0hhbmRsZXJBdHRhY2hlZCA9IGZ1bmN0aW9uIGlzSGFuZGxlckF0dGFjaGVkKGhhbmRsZXIsIGV2ZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldChldmVudE5hbWUpLnNvbWUoZnVuY3Rpb24oc3Vic2NyaWJlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlciA9PT0gc3Vic2NyaWJlci5oYW5kbGVyO1xuICAgIH0pXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN1YnNjcmliZXI7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBub29wIGEgZW1wdHkgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8qKlxuICogdmFsaWRhdGUgaWYgaXMgbm90IHZhbGlkYXRlIHdpbGwgcmV0dXJuIGFuIEVycm9yIHdpdGggdGhlIG1lc3NhZ2VcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlKGlzVmFsaWQsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gaXNWYWxpZCA/IG51bGwgOiBuZXcgRXJyb3IobWVzc2FnZSk7XG59XG5cbnZhciB0aW1lb3V0cyA9IHt9O1xuLyoqXG4gKiBjbGVhckNhbGxiYWNrVGltZW91dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgaGFuZGxlciB0byByZW1vdmVcbiAqL1xuZnVuY3Rpb24gY2xlYXJDYWxsYmFja1RpbWVvdXQoZnVuYykge1xuICAgIHZhciB0aW1lb3V0ID0gdGltZW91dHNbZnVuY107XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICBkZWxldGUgdGltZW91dHNbZnVuY107XG4gICAgfVxufVxuXG4vKipcbiAqIGNhbGxiYWNrVGltZW91dCBpZiB0aGUgb25TdWNjZXNzIGlzIG5vdCBjYWxsZWQgYW5kIHJldHVybnMgdHJ1ZSBpbiB0aGUgdGltZWxpbWl0IHRoZW4gb25UaW1lb3V0IHdpbGwgYmUgY2FsbGVkXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblN1Y2Nlc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uVGltZW91dFxuICovXG5mdW5jdGlvbiBjYWxsYmFja1RpbWVvdXQodGltZXIsIG9uU3VjY2Vzcywgb25UaW1lb3V0KSB7XG4gICAgdmFyIGNhbGxiYWNrLCB0aW1lb3V0O1xuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblN1Y2Nlc3MgPSBub29wO1xuICAgICAgICBkZWxldGUgdGltZW91dFtjYWxsYmFja107XG4gICAgICAgIG9uVGltZW91dCgpO1xuICAgIH0sIHRpbWVyKTtcblxuICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgICAgICBpZiAob25TdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgIGNsZWFyQ2FsbGJhY2tUaW1lb3V0KGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aW1lb3V0c1tjYWxsYmFja10gPSB0aW1lb3V0O1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5cbi8qKlxuICogY3JlYXRlRWxlbWVudEluRWxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEluRWwocGFyZW50LCB0YWdOYW1lLCBpZCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGlmIChpZCkgbkVsLmlkID0gaWQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuLyoqXG4gKiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIHNpbXBsZSB0ZW1wbGF0ZSB1c2luZyB7e3Zhcn19XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudChwYXJlbnQsIHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgdmFyIGlmcmFtZSA9IGNyZWF0ZUlmcmFtZShwYXJlbnQsIG51bGwsIGRhdGEuekluZGV4KTtcbiAgICBpZiAoIXNldElmcmFtZUNvbnRlbnQoaWZyYW1lLCBzaW1wbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkpKSByZXR1cm47XG4gICAgcmV0dXJuIGlmcmFtZTtcbn1cblxuLyoqXG4gKiBjcmVhdGVJZnJhbWVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSWZyYW1lKHBhcmVudCwgdXJsLCB6SW5kZXgpIHtcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgbkVsLnNyYyA9IHVybCB8fCAnYWJvdXQ6YmxhbmsnO1xuICAgIG5FbC5tYXJnaW5XaWR0aCA9ICcwJztcbiAgICBuRWwubWFyZ2luSGVpZ2h0ID0gJzAnO1xuICAgIG5FbC5mcmFtZUJvcmRlciA9ICcwJztcbiAgICBuRWwud2lkdGggPSAnMTAwJSc7XG4gICAgbkVsLmhlaWdodCA9ICcxMDAlJztcbiAgICBzZXRGdWxsU2l6ZVN0eWxlKG5FbCk7XG5cbiAgICBpZih6SW5kZXgpe1xuICAgICAgICBuRWwuc3R5bGUuekluZGV4ID0gekluZGV4O1xuICAgIH1cblxuICAgIG5FbC5zZXRBdHRyaWJ1dGUoJ1NDUk9MTElORycsJ05PJyk7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbmZ1bmN0aW9uIHNldEZ1bGxTaXplU3R5bGUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG59XG5cbi8qKlxuICogc2ltcGxlVGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IEpTT04uc3RyaW5naWZ5KGRhdGFba2V5XSkgOiBkYXRhW2tleV07XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKCd7eycgKyBrZXkgKyAnfX0nLCAnZycpLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vKipcbiAqIHNldElmcmFtZUNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxJZnJhbWVFbGVtZW50fSBpZnJhbWVFbFxuICogQHBhcmFtIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gc2V0SWZyYW1lQ29udGVudChpZnJhbWVFbCwgY29udGVudCkge1xuICAgIHZhciBpZnJhbWVEb2MgPSBpZnJhbWVFbC5jb250ZW50V2luZG93ICYmIGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgaWYgKCFpZnJhbWVEb2MpIHJldHVybiBmYWxzZTtcblxuICAgIGlmcmFtZURvYy53cml0ZShjb250ZW50KTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbi8qKlxuICogZXh0ZW5kIG9iamVjdCB3aXRoIGtleXMgZnJvbSBhbm90aGVyIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0b0V4dGVuZFxuICogQHBhcmFtIHtvYmplY3R9IGZyb21Tb3VyY2VcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHRvRXh0ZW5kLCBmcm9tU291cmNlKSB7XG4gICAgT2JqZWN0LmtleXMoZnJvbVNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdG9FeHRlbmRba2V5XSA9IGZyb21Tb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9FeHRlbmQ7XG59XG5cblxuLyoqXG4gKiB1bmlxdWUgd2lsbCBjcmVhdGUgYSB1bmlxdWUgc3RyaW5nIGV2ZXJ5dGltZSBpcyBjYWxsZWQsIHNlcXVlbnRpYWxseSBhbmQgcHJlZml4ZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKi9cbmZ1bmN0aW9uIHVuaXF1ZShwcmVmaXgpIHtcbiAgICB2YXIgY291bnQgPSAtMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ18nICsgKCsrY291bnQpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5vb3A6IG5vb3AsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlLFxuICAgIGNsZWFyQ2FsbGJhY2tUaW1lb3V0OiBjbGVhckNhbGxiYWNrVGltZW91dCxcbiAgICBjYWxsYmFja1RpbWVvdXQ6IGNhbGxiYWNrVGltZW91dCxcbiAgICBjcmVhdGVFbGVtZW50SW5FbDogY3JlYXRlRWxlbWVudEluRWwsXG4gICAgY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQ6IGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50LFxuICAgIGNyZWF0ZUlmcmFtZTogY3JlYXRlSWZyYW1lLFxuICAgIHNldEZ1bGxTaXplU3R5bGU6IHNldEZ1bGxTaXplU3R5bGUsXG4gICAgc2ltcGxlVGVtcGxhdGU6IHNpbXBsZVRlbXBsYXRlLFxuICAgIHNldElmcmFtZUNvbnRlbnQ6IHNldElmcmFtZUNvbnRlbnQsXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgdW5pcXVlOiB1bmlxdWVcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBJbm5lciBoZWxwZXIgY2xhc3MgdGhhdCBkZWFscyB3aXRoIHRoZSBsb2dpYyBvZiB0aGUgaWNvbiByZW5kZXJyaW5nLlxuICpcbiAqIEBwYXJhbSBwbGF5ZXIge29iamVjdH0gaW5zdGFuY2Ugb2YgdGhlIHBsYXllciB0aGF0IHdpbGwgcGxheSB0aGUgYWQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gSWNvbkludGVncmF0b3IocGxheWVyKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJY29uSW50ZWdyYXRvcikpIHtcbiAgICByZXR1cm4gbmV3IEljb25JbnRlZ3JhdG9yKHBsYXllcik7XG4gIH1cblxuICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgdGhpcy5pY29ucyA9IFtdO1xuICB0aGlzLmNvbnRyb2xCYXJUaW1lciA9IG51bGw7XG4gIHRoaXMuY2JIaWRkZW47XG59XG5cbkljb25JbnRlZ3JhdG9yLnByb3RvdHlwZS5yZW5kZXJJY29ucyA9IGZ1bmN0aW9uIHJlbmRlckljb25zKGljb25zLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdXRpbGl0aWVzLm5vb3A7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGljb25zKSB8fCBpY29ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignT24gSWNvbkludGVncmF0b3IsIG1pc3NpbmcgcmVxdWlyZWQgaWNvbiBhcnJheScpKTtcbiAgfVxuXG4gIGFzeW5jLndhdGVyZmFsbChbXG4gICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIG5leHQobnVsbCwgaWNvbnMpO1xuICAgIH0sXG4gICAgdGhpcy5fY3JlYXRlSWNvbnMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3JlbmRlckljb25zLmJpbmQodGhpcylcbiAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xuICAgIGlmIChlcnJvciAmJiByZXNwb25zZSkge1xuICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xuICB9KTtcbn07XG5cbkljb25JbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlSWNvbnMgPSBmdW5jdGlvbiBjcmVhdGVJY29ucyhpY29ucywgY2FsbGJhY2spIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaWNvbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaWNvbk9iaiA9IHt9O1xuICAgIGljb25PYmouaWNvbiA9IGljb25zW2ldO1xuICAgIC8vIG1ha2Ugc3VyZSB3ZSBvbmx5IG9uZSBpY29uIHBlciBwcm9ncmFtXG4gICAgdmFyIGlkeCA9IGdldEljb25CeVByb2dyYW0oaWNvbk9iai5pY29uLnByb2dyYW0pO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgdGhpcy5pY29ucy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG4gICAgaWNvbk9iai5jb250ZW50ID0gZ2V0Q29udGVudChpY29uT2JqLmljb24pO1xuICAgIGlmIChpY29uT2JqLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuaWNvbnMucHVzaChpY29uT2JqKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5pY29ucy5sZW5ndGggPiAwKSB7XG4gICAgY2FsbGJhY2sobnVsbCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgQWRJY29uIGNvbnRlbnRcIiwgOTAwKSk7XG4gIH1cbiAgcmV0dXJuO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gZ2V0Q29udGVudChpY29uKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBudWxsO1xuICAgIGlmIChpY29uLnN0YXRpY1Jlc291cmNlKSB7XG4gICAgICB2YXIgaW1hZ2VUeXBlcyA9IFtcImltYWdlL2dpZlwiLCBcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9wbmdcIl07XG4gICAgICBpZiAoaW1hZ2VUeXBlcy5pbmRleE9mKGljb24uY3JlYXRpdmVUeXBlKSkge1xuICAgICAgICBjb250ZW50ID0gXCI8aW1nIHNyYz0nXCIgKyBpY29uLnN0YXRpY1Jlc291cmNlICsgXCInIHdpZHRoPSdcIiArIGljb24ud2lkdGggKyBcIicgaGVpZ2h0PSdcIiArIGljb24uaGVpZ2h0ICsgXCInPlwiO1xuICAgICAgfVxuICAgIH1cbiAgICAvKmVsc2UgaWYgKGljb24uaHRtbFJlc291cmNlKSB7XG4gICAgICAvLyB0byBkbyAuLi5cbiAgICB9XG4gICAgZWxzZSBpZiAoaWNvbi5pZnJhbWVSZXNvdXJjZSkge1xuICAgICAgLy8gdG8gZG8gLi4uXG4gICAgfSovXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJY29uQnlQcm9ncmFtKHByb2dyYW0pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXQuaWNvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGF0Lmljb25zW2ldLmljb24ucHJvZ3JhbSA9PT0gcHJvZ3JhbSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG59O1xuXG5JY29uSW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gc2V0dXBFdmVudHMoY2FsbGJhY2spIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkU2tpcCcsICdhZFN0b3AnXSwgZnVuY3Rpb24oKXtcbiAgICBpZiAodGhhdC5pY29ucy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhhdC5jb250cm9sQmFyVGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGF0LmNvbnRyb2xCYXJUaW1lcik7XG4gICAgICAgIHRoYXQuY29udHJvbEJhclRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdC5pY29ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaWNvbiA9IHRoYXQuaWNvbnNbaV07XG4gICAgICAgIGlmIChpY29uLmRpdikge1xuICAgICAgICAgIGlmIChpY29uLmNsaWNrSGFuZGxlcikge1xuICAgICAgICAgICAgaWNvbi5kaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpY29uLmNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5lbCgpLnJlbW92ZUNoaWxkKGljb24uZGl2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhhdC5pY29ucyA9IFtdO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG59O1xuXG5JY29uSW50ZWdyYXRvci5wcm90b3R5cGUuX3JlbmRlckljb25zID0gZnVuY3Rpb24gcmVuZGVySWNvbnMoKSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pY29ucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpY29uID0gdGhpcy5pY29uc1tpXTtcblxuICAgIC8vcG9zaXRpb24gYnkgb2Zmc2V0XG4gICAgdmFyIHhQb3NpdGlvbiA9IFwibGVmdFwiOy8vb3IgcmlnaHRcbiAgICB2YXIgeFBvc2l0aW9uT2Zmc2V0ID0gMDtcbiAgICB2YXIgeVBvc2l0aW9uID0gXCJ0b3BcIjsvL29yIGJvdHRvbVxuICAgIHZhciB5UG9zaXRpb25PZmZzZXQgPSAwO1xuICAgIHZhciB0b3BNYXJnaW4gPSAwO1xuICAgIHZhciBib3R0b21NYXJnaW4gPSAwOyAgIC8vIG1heWJlIGNvbnRyb2wgYmFyIGhlaWdodFxuXG4gICAgaWYgKGljb24gJiYgaWNvbi5pY29uLnhQb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgeFBvc2l0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgIHhQb3NpdGlvbk9mZnNldCA9IDA7XG4gICAgfVxuICAgIGlmIChpY29uICYmIGljb24uaWNvbi54UG9zaXRpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICB4UG9zaXRpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgIHhQb3NpdGlvbk9mZnNldCA9IDA7XG4gICAgfVxuICAgIGlmIChpY29uICYmIE51bWJlcihpY29uLmljb24ueFBvc2l0aW9uKSA+PSAwKSB7XG4gICAgICAgIHhQb3NpdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICB4UG9zaXRpb25PZmZzZXQgPSBOdW1iZXIoaWNvbi54UG9zaXRpb24pO1xuICAgIH1cbiAgICBpZiAoaWNvbiAmJiBpY29uLmljb24ueVBvc2l0aW9uID09PSBcImJvdHRvbVwiKSB7XG4gICAgICAgIHlQb3NpdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHlQb3NpdGlvbk9mZnNldCA9IDA7XG4gICAgICAgIHlQb3NpdGlvbk9mZnNldCA9IHlQb3NpdGlvbk9mZnNldCArIGJvdHRvbU1hcmdpbjtcbiAgICB9XG4gICAgaWYgKGljb24gJiYgaWNvbi5pY29uLnlQb3NpdGlvbiA9PT0gXCJ0b3BcIikge1xuICAgICAgICB5UG9zaXRpb24gPSBcInRvcFwiO1xuICAgICAgICB5UG9zaXRpb25PZmZzZXQgPSAwO1xuICAgICAgICB5UG9zaXRpb25PZmZzZXQgPSB5UG9zaXRpb25PZmZzZXQgKyB0b3BNYXJnaW47XG4gICAgfVxuICAgIGlmIChpY29uICYmIE51bWJlcihpY29uLmljb24ueVBvc2l0aW9uKSA+PSAwKSB7XG4gICAgICAgIHlQb3NpdGlvbiA9IFwidG9wXCI7XG4gICAgICAgIHlQb3NpdGlvbk9mZnNldCA9IE51bWJlcihpY29uLmljb24ueVBvc2l0aW9uKTtcbiAgICAgICAgeVBvc2l0aW9uT2Zmc2V0ID0geVBvc2l0aW9uT2Zmc2V0ICsgdG9wTWFyZ2luO1xuICAgIH1cblxuICAgIHZhciBkaXNwbGF5SWNvbiA9IHBsYXllci5lbCgpLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoZGlzcGxheUljb24pO1xuXG4gICAgZGlzcGxheUljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImFkaWNvblwiKTtcbiAgICBkaXNwbGF5SWNvbi5pZCA9IFwiYWRpY29uX1wiICsgaWNvbi5pY29uLnByb2dyYW07XG4gICAgZGlzcGxheUljb24uaW5uZXJIVE1MID0gaWNvbi5jb250ZW50O1xuICAgIGRpc3BsYXlJY29uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGRpc3BsYXlJY29uLnN0eWxlW3hQb3NpdGlvbl0gPSB4UG9zaXRpb25PZmZzZXQgKyBcInB4XCI7XG4gICAgZGlzcGxheUljb24uc3R5bGVbeVBvc2l0aW9uXSA9IHlQb3NpdGlvbk9mZnNldCArIFwicHhcIjtcbiAgICBkaXNwbGF5SWNvbi5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3OyAvL3RvcCBtb3N0IG9mIDMyYml0XG4gICAgZGlzcGxheUljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGljb24ub3JpZ1kgPSB5UG9zaXRpb25PZmZzZXQ7XG4gIFxuICAgIC8vc2V0IHdpZHRoLGhlaWdodCBvZiBkaXYgZWxlbWVudCBcbiAgICBkaXNwbGF5SWNvbi5zdHlsZS53aWR0aCA9IGljb24ud2lkdGggKyBcInB4XCI7XG4gICAgZGlzcGxheUljb24uc3R5bGUuaGVpZ2h0ID0gaWNvbi5oZWlnaHQgKyBcInB4XCI7XG5cbiAgICBpY29uLmRpdiA9IGRpc3BsYXlJY29uO1xuXG4gICAgaWYgKGljb24uaWNvbi5pY29uQ2xpY2tUaHJvdWdoKSB7XG4gICAgICBpY29uLmRpdi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgIGljb24uY2xpY2tIYW5kbGVyID0gaGFuZGxlQ2xpY2soaWNvbik7XG4gICAgICBpY29uLmRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGljb24uY2xpY2tIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzdGFydEljb24oaWNvbiwgeVBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmICh0aGlzLmljb25zLmxlbmd0aCA+IDApIHtcbiAgICB0aGlzLmNvbnRyb2xCYXJUaW1lciA9IHNldEludGVydmFsKGFkanVzdEljb25zQnlDb250cm9sQmFyLCB1dGlsaXRpZXMuaXNJRTExKCkgPyAxMDAgOiA1MDApO1xuICB9XG5cbiAgLyoqKiogbG9jYWwgZnVuY3Rpb25zICoqKioqKi9cbiAgZnVuY3Rpb24gYWRqdXN0SWNvbnNCeUNvbnRyb2xCYXIoKSB7XG4gICAgdmFyIGNvbXBTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoYXQucGxheWVyLmNvbnRyb2xCYXIuZWwoKSwgbnVsbCk7XG4gICAgdmFyIGNiSGlkZGVuQ3VyID0gY29tcFN0eWxlLmJhY2tmYWNlVmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicgfHwgY29tcFN0eWxlLnRyYW5zZm9ybSAhPSAnbm9uZSc7XG4gICAgaWYgKGNiSGlkZGVuQ3VyICE9IHRoYXQuY2JIaWRkZW4pIHtcbiAgICAgIHRoYXQuY2JIaWRkZW4gPSBjYkhpZGRlbkN1cjtcbiAgICAgIHZhciBjYkhlaWdodCA9IGNiSGlkZGVuQ3VyID8gMCA6IHRoYXQucGxheWVyLmNvbnRyb2xCYXIuZWwoKS5vZmZzZXRIZWlnaHQ7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoYXQuaWNvbnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGljID0gdGhhdC5pY29uc1trXTtcbiAgICAgICAgaWYgKGljLmRpdiAmJiBpYy5kaXYuc3R5bGUuZGlzcGxheSA9PT0nYmxvY2snKSB7XG4gICAgICAgICAgaWYgKGNiSGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgLy8gY29udHJvbCBiYXIgdmlzaWJsZVxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzSW50ZXJzZWN0ZWQoaWMuZGl2LCB0aGF0LnBsYXllci5jb250cm9sQmFyLmVsKCkpKSB7XG4gICAgICAgICAgICAgIGlmIChpYy5kaXYuc3R5bGUudG9wICYmIGljLmRpdi5zdHlsZS50b3AubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciB5UG9zID0gaWMub3JpZ1kgLSBjYkhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoeVBvcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgIHlQb3MgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpYy5kaXYuc3R5bGUudG9wID0geVBvcyArICdweCc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWMuZGl2LnN0eWxlLmJvdHRvbSA9IChpYy5vcmlnWSArIGNiSGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWRqdXN0SWNvbnNQb3NpdGlvbihpYywgY2JIZWlnaHQsIHRoYXQsIDEpOyAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpYy5kaXYuc3R5bGUudG9wICYmIGljLmRpdi5zdHlsZS50b3AubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBpYy5kaXYuc3R5bGUudG9wID0gaWMub3JpZ1kgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGljLmRpdi5zdHlsZS5ib3R0b20gPSAoaWMub3JpZ1kgKyBjYkhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkanVzdEljb25zUG9zaXRpb24oaWMsIGNiSGVpZ2h0LCB0aGF0LCBsZXZlbCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdC5pY29ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGljb24gPSB0aGF0Lmljb25zW2ldO1xuICAgICAgaWYgKGljb24uZGl2LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgJiYgaWNvbi5kaXYgIT0gaWMuZGl2KSB7XG4gICAgICAgIGlmIChlbGVtZW50c0ludGVyc2VjdGVkKGljLmRpdiwgaWNvbi5kaXYpKSB7XG4gICAgICAgICAgaWYgKGljb24uZGl2LnN0eWxlLnRvcCAmJiBpY29uLmRpdi5zdHlsZS50b3AubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHlQb3MgPSBpY29uLm9yaWdZIC0gY2JIZWlnaHQ7XG4gICAgICAgICAgICBpZiAoeVBvcyA8IDApIHtcbiAgICAgICAgICAgICAgeVBvcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpY29uLmRpdi5zdHlsZS50b3AgPSB5UG9zICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpY29uLmRpdi5zdHlsZS5ib3R0b20gPSAoaWNvbi5vcmlnWSArIGNiSGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHByb3RlY3Rpb24gYWdhaW5zdCBpbmZpbml0ZSByZWN1cnNpdmVcbiAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICAgIGlmIChsZXZlbCA8IDUpIHtcbiAgICAgICAgICAgIGFkanVzdEljb25zUG9zaXRpb24oaWNvbiwgY2JIZWlnaHQsIHRoYXQsIGxldmVsKTsgICAgXG4gICAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbGVtZW50c0ludGVyc2VjdGVkKGRpdjEsIGRpdjIpIHtcbiAgICB2YXIgY29sbGlkZSA9IGZ1bmN0aW9uKGVsMSwgZWwyKSB7XG4gICAgICB2YXIgcmVjdDEgPSBlbDEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgcmVjdDIgPSBlbDIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIFxuICAgICAgcmV0dXJuICEoXG4gICAgICAgIHJlY3QxLnRvcCA+IHJlY3QyLmJvdHRvbSB8fFxuICAgICAgICByZWN0MS5yaWdodCA8IHJlY3QyLmxlZnQgfHxcbiAgICAgICAgcmVjdDEuYm90dG9tIDwgcmVjdDIudG9wIHx8XG4gICAgICAgIHJlY3QxLmxlZnQgPiByZWN0Mi5yaWdodFxuICAgICAgKTtcbiAgICB9O1xuICAgIHZhciBpbnNpZGUgPSBmdW5jdGlvbihlbDEsIGVsMikge1xuICAgICAgdmFyIHJlY3QxID0gZWwxLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHJlY3QyID0gZWwyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBcbiAgICAgIHJldHVybiAoXG4gICAgICAgICgocmVjdDIudG9wIDw9IHJlY3QxLnRvcCkgJiYgKHJlY3QxLnRvcCA8PSByZWN0Mi5ib3R0b20pKSAmJlxuICAgICAgICAoKHJlY3QyLnRvcCA8PSByZWN0MS5ib3R0b20pICYmIChyZWN0MS5ib3R0b20gPD0gcmVjdDIuYm90dG9tKSkgJiZcbiAgICAgICAgKChyZWN0Mi5sZWZ0IDw9IHJlY3QxLmxlZnQpICYmIChyZWN0MS5sZWZ0IDw9IHJlY3QyLnJpZ2h0KSkgJiZcbiAgICAgICAgKChyZWN0Mi5sZWZ0IDw9IHJlY3QxLnJpZ2h0KSAmJiAocmVjdDEucmlnaHQgPD0gcmVjdDIucmlnaHQpKVxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiBjb2xsaWRlKGRpdjEsIGRpdjIpIHx8IGluc2lkZShkaXYxLCBkaXYyKSB8fCBpbnNpZGUoZGl2MiwgZGl2MSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1VybHModXJscykge1xuICAgIHVybHMuZm9yRWFjaChmdW5jdGlvbiAoc3JjKSB7XG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gc3JjO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soaWNvbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHRyYWNrVXJscyhpY29uLmljb24uaWNvbkNsaWNrVHJhY2tpbmdzKTtcbiAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgd2luZG93Lm9wZW4oaWNvbi5pY29uLmljb25DbGlja1Rocm91Z2gsICdfYmxhbmsnKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRJY29uKGljb24sIHlQb3NpdGlvbikge1xuICAgIHZhciBvZmZzZXQgPSBpY29uLmljb24ub2Zmc2V0ICYmIGljb24uaWNvbi5vZmZzZXQgPiAwID8gaWNvbi5pY29uLm9mZnNldCA6IDA7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGljb24uZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdHJhY2tVcmxzKGljb24uaWNvbi5pY29uVmlld1RyYWNraW5ncyk7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhhdC5pY29ucy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhhdC5pY29uc1tqXS5kaXYgJiYgdGhhdC5pY29uc1tqXS5kaXYgIT0gaWNvbi5kaXYpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudHNJbnRlcnNlY3RlZCh0aGF0Lmljb25zW2pdLmRpdiwgaWNvbi5kaXYpKSB7XG4gICAgICAgICAgICB2YXIgcmVjdDEgPSB0aGF0Lmljb25zW2pdLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmICh5UG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgIGljb24uZGl2LnN0eWxlLnRvcCA9ICh0aGF0Lmljb25zW2pdLmRpdi5vZmZzZXRUb3AgKyB0aGF0Lmljb25zW2pdLmRpdi5vZmZzZXRIZWlnaHQgKyAxKSArICdweCc7XG4gICAgICAgICAgICAgIGljb24ub3JpZ1kgPSB0aGF0Lmljb25zW2pdLmRpdi5vZmZzZXRUb3AgKyB0aGF0Lmljb25zW2pdLmRpdi5vZmZzZXRIZWlnaHQgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHZhciByZWN0MiA9IHRoYXQucGxheWVyLmVsKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgIGljb24uZGl2LnN0eWxlLmJvdHRvbSA9IChyZWN0Mi5oZWlnaHQgKyByZWN0Mi50b3AgLSByZWN0MS50b3AgKyAxKSArICdweCc7XG4gICAgICAgICAgICAgIGljb24ub3JpZ1kgPSByZWN0Mi5oZWlnaHQgKyByZWN0Mi50b3AgLSByZWN0MS50b3AgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGlmIChpY29uLmljb24uZHVyYXRpb24gJiYgaWNvbi5pY29uLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB2YXIgZHVyYXRpb24gPSBpY29uLmljb24uZHVyYXRpb247XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGlkeCA9IHRoYXQuaWNvbnMuaW5kZXhPZihpY29uKTtcbiAgICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIGlmIChpY29uLmNsaWNrSGFuZGxlcikge1xuICAgICAgICAgICAgICBpY29uLmRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGljb24uY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllci5lbCgpLnJlbW92ZUNoaWxkKGljb24uZGl2KTtcbiAgICAgICAgICAgIHRoYXQuaWNvbnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9XG4gICAgfSwgb2Zmc2V0KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJY29uSW50ZWdyYXRvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcblxuZnVuY3Rpb24gQWQoYWRKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQWQpKSB7XG4gICAgcmV0dXJuIG5ldyBBZChhZEpUcmVlKTtcbiAgfVxuICB0aGlzLmluaXRpYWxpemUoYWRKVHJlZSk7XG59XG5cbkFkLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYWRKVHJlZSkge1xuICB0aGlzLmlkID0gYWRKVHJlZS5hdHRyKCdpZCcpO1xuICB0aGlzLnNlcXVlbmNlID0gYWRKVHJlZS5hdHRyKCdzZXF1ZW5jZScpO1xuICBpZiAod2luZG93Lm1vbF92YXN0VmVyc2lvbiA9PT0gNCkge1xuXHQgIHRoaXMuY29uZGl0aW9uYWxBZCA9IGFkSlRyZWUuYXR0cignY29uZGl0aW9uYWxBZCcpO1xuICB9XG5cbiAgaWYoYWRKVHJlZS5pbkxpbmUpIHtcbiAgICB0aGlzLmluTGluZSA9IG5ldyBJbkxpbmUoYWRKVHJlZS5pbkxpbmUpO1xuICB9XG5cbiAgaWYoYWRKVHJlZS53cmFwcGVyKXtcbiAgICB0aGlzLndyYXBwZXIgPSBuZXcgV3JhcHBlcihhZEpUcmVlLndyYXBwZXIpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gQ2F0ZWdvcnkoY2F0ZWdvcnlKVHJlZSkge1xuXHQgIGlmKCEodGhpcyBpbnN0YW5jZW9mIENhdGVnb3J5KSkge1xuXHQgICAgcmV0dXJuIG5ldyBDYXRlZ29yeShjYXRlZ29yeUpUcmVlKTtcblx0ICB9XG5cblx0ICB0aGlzLmF1dGhvcml0eSA9IGNhdGVnb3J5SlRyZWUuYXR0cignYXV0aG9yaXR5Jyk7XG5cdCAgdGhpcy5jYXRlZ29yeSA9IHhtbC5rZXlWYWx1ZShjYXRlZ29yeUpUcmVlKTtcbn1cblxuQ2F0ZWdvcnkucGFyc2VDYXRlZ29yaWVzID0gZnVuY3Rpb24gcGFyc2VDYXRlZ290aWVzKGNhdGVnb3JpZXNKVHJlZSkge1xuXHQgIHZhciBjYXRlZ29yaWVzID0gW107XG5cdCAgdmFyIGNhdGVnb3JpZXNEYXRhO1xuXHQgIGlmIChjYXRlZ29yaWVzKSB7XG5cdFx0ICBjYXRlZ29yaWVzRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGNhdGVnb3JpZXNKVHJlZSkgPyBjYXRlZ29yaWVzSlRyZWUgOiBbY2F0ZWdvcmllc0pUcmVlXTtcblx0XHQgIGNhdGVnb3JpZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG5cdFx0XHQgIHZhciBjYXQgPSBuZXcgQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuXHRcdFx0ICBpZiAoY2F0LmNhdGVnb3J5ICYmIGNhdC5jYXRlZ29yeS5sZW5ndGggPiAwICYmIGNhdC5hdXRob3JpdHkgJiYgY2F0LmF1dGhvcml0eS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCAgY2F0ZWdvcmllcy5wdXNoKG5ldyBDYXRlZ29yeShjYXRlZ29yeSkpO1xuXHRcdFx0ICB9XG5cdFx0ICB9KTtcblx0ICB9XG5cdCAgcmV0dXJuIGNhdGVnb3JpZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhdGVnb3J5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5cbmZ1bmN0aW9uIENvbXBhbmlvbihjb21wYW5pb25KVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFuaW9uKSkge1xuICAgIHJldHVybiBuZXcgQ29tcGFuaW9uKGNvbXBhbmlvbkpUcmVlKTtcbiAgfVxuXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGNvbXBhbmlvbiBhZFwiKTtcbiAgbG9nZ2VyLmRlYnVnIChcIjxDb21wYW5pb24+ICBjb21wYW5pb25KVHJlZTpcIiwgY29tcGFuaW9uSlRyZWUpO1xuXG4gIC8vUmVxdWlyZWQgRWxlbWVudHNcbiAgdGhpcy5jcmVhdGl2ZVR5cGUgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZS5zdGF0aWNSZXNvdXJjZSwgJ2NyZWF0aXZlVHlwZScpO1xuICB0aGlzLnN0YXRpY1Jlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLnN0YXRpY1Jlc291cmNlKTtcblxuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiAgY3JlYXRpdmVUeXBlOiBcIiArIHRoaXMuY3JlYXRpdmVUeXBlKTtcbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gIHN0YXRpY1Jlc291cmNlOiBcIiArIHRoaXMuc3RhdGljUmVzb3VyY2UpO1xuXG4gIC8vIFdlaXJkIGJ1ZyB3aGVuIHRoZSBKWE9OIHRyZWUgaXMgYnVpbHQgaXQgZG9lc24ndCBoYW5kbGUgY2FzaW5nIHByb3Blcmx5IGluIHRoaXMgc2l0dWF0aW9uLi4uXG4gIHZhciBodG1sUmVzb3VyY2UgPSBudWxsO1xuICBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLkhUTUxSZXNvdXJjZSkpIHtcbiAgICBodG1sUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSFRNTFJlc291cmNlKTtcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaFRNTFJlc291cmNlKSkge1xuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5oVE1MUmVzb3VyY2UpO1xuICB9XG5cbiAgaWYgKGh0bWxSZXNvdXJjZSAhPT0gbnVsbClcbiAge1xuICAgIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGh0bWwgcmVzb3VyY2VcIiwgaHRtbFJlc291cmNlKTtcbiAgfVxuXG4gIHRoaXMuaHRtbFJlc291cmNlID0gaHRtbFJlc291cmNlO1xuXG4gIHZhciBpZnJhbWVSZXNvdXJjZSA9IG51bGw7XG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpKSB7XG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpO1xuICB9IGVsc2UgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5pRnJhbWVyZXNvdXJjZSkpIHtcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5pRnJhbWVyZXNvdXJjZSk7XG4gIH1cblxuICBpZiAoaWZyYW1lUmVzb3VyY2UgIT09IG51bGwpXG4gIHtcbiAgICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiBmb3VuZCBpZnJhbWUgcmVzb3VyY2VcIiwgaWZyYW1lUmVzb3VyY2UpO1xuICB9XG5cbiAgdGhpcy5pZnJhbWVSZXNvdXJjZSA9IGlmcmFtZVJlc291cmNlO1xuXG4gIC8vT3B0aW9uYWwgZmllbGRzXG4gIHRoaXMuaWQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2lkJyk7XG4gIHRoaXMud2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3dpZHRoJyk7XG4gIHRoaXMuaGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdoZWlnaHQnKTtcbiAgdGhpcy5hc3NldFdpZHRoID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdhc3NldFdpZHRoJyk7XG4gIHRoaXMuYXNzZXRIZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2Fzc2V0SGVpZ2h0Jyk7XG4gIHRoaXMuZXhwYW5kZWRXaWR0aCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnZXhwYW5kZWRXaWR0aCcpO1xuICB0aGlzLmV4cGFuZGVkSGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdleHBhbmRlZEhlaWdodCcpO1xuICB0aGlzLmFwaUZyYW1ld29yayA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnYXBpRnJhbWV3b3JrJyk7XG4gIHRoaXMuYWRTbG90SUQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2FkU2xvdElEJyk7XG4gIHRoaXMuY29tcGFuaW9uQ2xpY2tUaHJvdWdoID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmNvbXBhbmlvbkNsaWNrVGhyb3VnaCk7XG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSBwYXJzZVRyYWNraW5nRXZlbnRzKGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzICYmIGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzLnRyYWNraW5nKTtcbiAgXG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgdGhpcy5weHJhdGlvID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdweHJhdGlvJyk7XG4gIH1cblxuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiAgY29tcGFuaW9uQ2xpY2tUaHJvdWdoOiBcIiArIHRoaXMuY29tcGFuaW9uQ2xpY2tUaHJvdWdoKTtcblxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VUcmFja2luZ0V2ZW50cyh0cmFja2luZ0V2ZW50cykge1xuICAgIHZhciB0cmFja2luZ3MgPSBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFja2luZ0V2ZW50cykpIHtcbiAgICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdEYXRhKSB7XG4gICAgICAgIHRyYWNraW5ncy5wdXNoKG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cmFja2luZ3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wYW5pb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcbnZhciBDb21wYW5pb24gPSByZXF1aXJlKCcuL0NvbXBhbmlvbicpO1xudmFyIFVuaXZlcnNhbEFkSWQgPSByZXF1aXJlKCcuL1VuaXZlcnNhbEFkSWQnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgQ3JlYXRpdmUpKSB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGl2ZShjcmVhdGl2ZUpUcmVlKTtcbiAgfVxuXG4gIHRoaXMuaWQgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2lkJyk7XG4gIHRoaXMuc2VxdWVuY2UgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ3NlcXVlbmNlJyk7XG4gIHRoaXMuYWRJZCA9IGNyZWF0aXZlSlRyZWUuYXR0cignYWRJZCcpO1xuICB0aGlzLmFwaUZyYW1ld29yayA9IGNyZWF0aXZlSlRyZWUuYXR0cignYXBpRnJhbWV3b3JrJyk7XG5cbiAgaWYoY3JlYXRpdmVKVHJlZS5saW5lYXIpIHtcbiAgICB0aGlzLmxpbmVhciA9IG5ldyBMaW5lYXIoY3JlYXRpdmVKVHJlZS5saW5lYXIpO1xuICB9XG5cbiAgaWYgKGNyZWF0aXZlSlRyZWUuY29tcGFuaW9uQWRzKSB7XG4gICAgdmFyIGNvbXBhbmlvbnMgPSBbXTtcbiAgICB2YXIgY29tcGFuaW9uQWRzID0gY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMgJiYgY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMuY29tcGFuaW9uO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGNvbXBhbmlvbkFkcykpIHtcbiAgICAgIGNvbXBhbmlvbkFkcyA9IHV0aWxpdGllcy5pc0FycmF5KGNvbXBhbmlvbkFkcykgPyBjb21wYW5pb25BZHMgOiBbY29tcGFuaW9uQWRzXTtcbiAgICAgIGNvbXBhbmlvbkFkcy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wYW5pb25EYXRhKSB7XG4gICAgICAgIGNvbXBhbmlvbnMucHVzaChuZXcgQ29tcGFuaW9uKGNvbXBhbmlvbkRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNvbXBhbmlvbkFkcyA9IGNvbXBhbmlvbnM7XG4gIH1cblxuICBpZiAod2luZG93Lm1vbF92YXN0VmVyc2lvbiA9PT0gNCkge1xuXHQgIHRoaXMudW5pdmVyc2FsQWRJZCA9IG5ldyBVbml2ZXJzYWxBZElkKGNyZWF0aXZlSlRyZWUudW5pdmVyc2FsQWRJZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYXQgdGhlIGNyZWF0aXZlLlxuICovXG5DcmVhdGl2ZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmxpbmVhcikge1xuICAgIHJldHVybiB0aGlzLmxpbmVhci5pc1N1cHBvcnRlZCgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5DcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyA9IGZ1bmN0aW9uIHBhcnNlQ3JlYXRpdmVzKGNyZWF0aXZlc0pUcmVlKSB7XG4gIHZhciBjcmVhdGl2ZXMgPSBbXTtcbiAgdmFyIGNyZWF0aXZlc0RhdGE7XG4gIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGNyZWF0aXZlc0pUcmVlKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlKSkge1xuICAgIGNyZWF0aXZlc0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheShjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkgPyBjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSA6IFtjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZV07XG4gICAgY3JlYXRpdmVzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgY3JlYXRpdmVzLnB1c2gobmV3IENyZWF0aXZlKGNyZWF0aXZlKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0aXZlcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3JlYXRpdmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgYXR0cmlidXRlc0xpc3QgPSBbXG4gICdwcm9ncmFtJyxcbiAgJ3dpZHRoJyxcbiAgJ2hlaWdodCcsXG4gICd4UG9zaXRpb24nLFxuICAneVBvc2l0aW9uJyxcbiAgJ2R1cmF0aW9uJyxcbiAgJ29mZnNldCcsXG4gICdhcGlGcmFtZXdvcmsnLFxuICAncHhyYXRpbydcbl07XG5cbmZ1bmN0aW9uIEljb24oaWNvbkpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJY29uKSkge1xuICAgIHJldHVybiBuZXcgSWNvbihpY29uSlRyZWUpO1xuICB9XG5cbiAgLy9BdHRyaWJ1dGVzXG4gIGZvcih2YXIgeD0wOyB4PGF0dHJpYnV0ZXNMaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNMaXN0W3hdO1xuICAgIHRoaXNbYXR0cmlidXRlXSA9IGljb25KVHJlZS5hdHRyKGF0dHJpYnV0ZSk7XG4gIH1cbiAgaWYgKHRoaXMuZHVyYXRpb24pIHtcbiAgICB0aGlzLmR1cmF0aW9uID0gcGFyc2Vycy5kdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgfVxuICBpZiAodGhpcy5vZmZzZXQpIHtcbiAgICB0aGlzLm9mZnNldCA9IHBhcnNlcnMuZHVyYXRpb24odGhpcy5vZmZzZXQpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xuICB0aGlzLmNyZWF0aXZlVHlwZSA9IHhtbC5hdHRyKGljb25KVHJlZS5zdGF0aWNSZXNvdXJjZSwgJ2NyZWF0aXZlVHlwZScpO1xuICB0aGlzLnN0YXRpY1Jlc291cmNlID0geG1sLmtleVZhbHVlKGljb25KVHJlZS5zdGF0aWNSZXNvdXJjZSk7XG5cbiAgdmFyIGh0bWxSZXNvdXJjZSA9IG51bGw7XG4gIGlmICh4bWwua2V5VmFsdWUoaWNvbkpUcmVlLkhUTUxSZXNvdXJjZSkpIHtcbiAgICBodG1sUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoaWNvbkpUcmVlLkhUTUxSZXNvdXJjZSk7XG4gIH0gZWxzZSBpZiAoeG1sLmtleVZhbHVlKGljb25KVHJlZS5oVE1MUmVzb3VyY2UpKSB7XG4gICAgaHRtbFJlc291cmNlID0geG1sLmtleVZhbHVlKGljb25KVHJlZS5oVE1MUmVzb3VyY2UpO1xuICB9XG5cbiAgdGhpcy5odG1sUmVzb3VyY2UgPSBodG1sUmVzb3VyY2U7XG5cbiAgdmFyIGlmcmFtZVJlc291cmNlID0gbnVsbDtcbiAgaWYgKHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuSUZyYW1lUmVzb3VyY2UpKSB7XG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoaWNvbkpUcmVlLklGcmFtZVJlc291cmNlKTtcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoaWNvbkpUcmVlLmlGcmFtZXJlc291cmNlKSkge1xuICAgIGlmcmFtZVJlc291cmNlID0geG1sLmtleVZhbHVlKGljb25KVHJlZS5pRnJhbWVyZXNvdXJjZSk7XG4gIH1cblxuICB0aGlzLmlmcmFtZVJlc291cmNlID0gaWZyYW1lUmVzb3VyY2U7XG5cbiAgdGhpcy5pY29uVmlld1RyYWNraW5ncyA9IHBhcnNlVHJhY2tpbmdzKGljb25KVHJlZS5pY29uVmlld1RyYWNraW5nKTtcblxuICBpZiAoaWNvbkpUcmVlLmljb25DbGlja3MpIHtcbiAgICB0aGlzLmljb25DbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUoaWNvbkpUcmVlLmljb25DbGlja3MuaWNvbkNsaWNrVGhyb3VnaCk7XG4gICAgdGhpcy5pY29uQ2xpY2tUcmFja2luZ3MgPSBwYXJzZVRyYWNraW5ncyhpY29uSlRyZWUuaWNvbkNsaWNrcy5pY29uQ2xpY2tUcmFja2luZyk7XG4gIH1cblxuICAvLyBMb2NhbCBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gcGFyc2VUcmFja2luZ3ModHJhY2tpbmdzKSB7XG4gICAgaWYgKHRyYWNraW5ncykge1xuICAgICAgdHJhY2tpbmdzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdzKSA/IHRyYWNraW5ncyA6IFt0cmFja2luZ3NdO1xuICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheSh0cmFja2luZ3MsIGZ1bmN0aW9uICh0cmFja2luZ3MpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHRyYWNraW5ncy5rZXlWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJhY2tpbmdzLmtleVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSWNvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIENyZWF0aXZlID0gcmVxdWlyZSgnLi9DcmVhdGl2ZScpO1xudmFyIENhdGVnb3J5ID0gcmVxdWlyZSgnLi9DYXRlZ29yeScpO1xudmFyIFZpZXdhYmxlSW1wcmVzc2lvbiA9IHJlcXVpcmUoJy4vVmlld2FibGVJbXByZXNzaW9uJyk7XG52YXIgVmVyaWZpY2F0aW9uID0gcmVxdWlyZSgnLi9WZXJpZmljYXRpb24nKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gSW5MaW5lKGlubGluZUpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbkxpbmUpKSB7XG4gICAgcmV0dXJuIG5ldyBJbkxpbmUoaW5saW5lSlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBGaWVsZHNcbiAgdGhpcy5hZFRpdGxlID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkVGl0bGUpO1xuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkU3lzdGVtKTtcbiAgdGhpcy5pbXByZXNzaW9ucyA9IHZhc3RVdGlsLnBhcnNlSW1wcmVzc2lvbnMoaW5saW5lSlRyZWUuaW1wcmVzc2lvbik7XG4gIHRoaXMuY3JlYXRpdmVzID0gQ3JlYXRpdmUucGFyc2VDcmVhdGl2ZXMoaW5saW5lSlRyZWUuY3JlYXRpdmVzKTtcblxuICAvL09wdGlvbmFsIEZpZWxkc1xuICB0aGlzLmRlc2NyaXB0aW9uID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmRlc2NyaXB0aW9uKTtcbiAgdGhpcy5hZHZlcnRpc2VyID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkdmVydGlzZXIpO1xuICB0aGlzLnN1cnZleXMgPSBwYXJzZVN1cnZleXMoaW5saW5lSlRyZWUuc3VydmV5KTtcbiAgLy90aGlzLmVycm9yID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmVycm9yKTtcbiAgdGhpcy5lcnJvcnMgPSB2YXN0VXRpbC5wYXJzZUVycm9ycyhpbmxpbmVKVHJlZS5lcnJvcik7XG4gIHRoaXMucHJpY2luZyA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5wcmljaW5nKTtcbiAgdGhpcy5leHRlbnNpb25zID0gaW5saW5lSlRyZWUuZXh0ZW5zaW9ucztcbiAgaWYgKHRoaXMuZXh0ZW5zaW9ucykge1xuXHQgIHRoaXMubW9hdCA9IHBhcnNlTW9hdCh0aGlzLmV4dGVuc2lvbnMpO1xuICB9XG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgaWYgKGlubGluZUpUcmVlLmNhdGVnb3J5KSB7XG5cdFx0ICB0aGlzLmNhdGVnb3JpZXMgPSBDYXRlZ29yeS5wYXJzZUNhdGVnb3JpZXMoaW5saW5lSlRyZWUuY2F0ZWdvcnkpO1xuXHQgIH1cblx0ICBpZiAoaW5saW5lSlRyZWUudmlld2FibGVJbXByZXNzaW9uKSB7XG5cdFx0ICB0aGlzLnZpZXdhYmxlSW1wcmVzc2lvbiA9IG5ldyBWaWV3YWJsZUltcHJlc3Npb24oaW5saW5lSlRyZWUudmlld2FibGVJbXByZXNzaW9uKTtcblx0ICB9XG5cdCAgaWYgKGlubGluZUpUcmVlLmFkVmVyaWZpY2F0aW9ucykge1xuXHRcdCAgdGhpcy5hZFZlcmlmaWNhdGlvbnMgPSBWZXJpZmljYXRpb24ucGFyc2VBZFZlcmlmaWNhdGlvbnMoaW5saW5lSlRyZWUuYWRWZXJpZmljYXRpb25zKTtcblx0ICB9XG4gIH1cblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhcnNlU3VydmV5cyhpbmxpbmVTdXJ2ZXlzKSB7XG4gICAgaWYgKGlubGluZVN1cnZleXMpIHtcbiAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkodXRpbGl0aWVzLmlzQXJyYXkoaW5saW5lU3VydmV5cykgPyBpbmxpbmVTdXJ2ZXlzIDogW2lubGluZVN1cnZleXNdLCBmdW5jdGlvbiAoc3VydmV5KSB7XG4gICAgICAgIGlmKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHN1cnZleS5rZXlWYWx1ZSkpe1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmk6IHN1cnZleS5rZXlWYWx1ZSxcbiAgICAgICAgICAgIHR5cGU6IHN1cnZleS5hdHRyKCd0eXBlJylcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZU1vYXQoZXh0ZW5zaW9ucykge1xuXHQgIHZhciBnZXRNb2F0Q29uZmlnRGF0YSA9IGZ1bmN0aW9uKGFyckV4dGVudGlvbnMpIHtcblx0XHQgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyRXh0ZW50aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0ICB2YXIgZXh0ZW5zaW9uID0gYXJyRXh0ZW50aW9uc1tpXS5leHRlbnNpb247XG5cdFx0XHQgIGlmIChleHRlbnNpb24gJiYgZXh0ZW5zaW9uLm1vYXQpIHtcblx0XHRcdFx0ICB2YXIgbW9hdCA9IHt9O1xuXHRcdFx0XHQgIHZhciB2YWx1ZSA9IHhtbC5rZXlWYWx1ZShleHRlbnNpb24ubW9hdCk7XG5cdFx0XHRcdCAgdmFyIGFyciA9IHZhbHVlLnNwbGl0KCc7Jyk7XG5cdFx0XHRcdCAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHQgIHZhciBwYXJhbXMgPSBhcnJbal0uc3BsaXQoJz0nKTtcblx0XHRcdFx0XHQgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHRcdFx0ICBtb2F0W3BhcmFtc1swXV0gPSBwYXJhbXNbMV07XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgfVxuXHRcdFx0XHQgIHJldHVybiBtb2F0O1xuXHRcdFx0ICB9XG5cdFx0ICB9XG5cdFx0ICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgIH07XG5cdCAgaWYgKGV4dGVuc2lvbnMpIHtcblx0XHQgIHJldHVybiBnZXRNb2F0Q29uZmlnRGF0YSh1dGlsaXRpZXMuaXNBcnJheShleHRlbnNpb25zKSA/IGV4dGVuc2lvbnMgOiBbZXh0ZW5zaW9uc10pO1xuXHQgIH1cblx0ICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYWxsIHRoZSBjcmVhdGl2ZXMuXG4gKi9cbkluTGluZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xuICB2YXIgaSxsZW47XG5cbiAgaWYodGhpcy5jcmVhdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yKGkgPSAwLCBsZW4gPSB0aGlzLmNyZWF0aXZlcy5sZW5ndGg7IGk8IGxlbjsgaSs9MSl7XG4gICAgaWYoIXRoaXMuY3JlYXRpdmVzW2ldLmlzU3VwcG9ydGVkKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5MaW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZShpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZUpUcmVlKSB7XG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIEludGVyYWN0aXZlQ3JlYXRpdmVGaWxlKSkge1xuICAgIHJldHVybiBuZXcgSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUoaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVKVHJlZSk7XG4gIH1cblxuICB0aGlzLnR5cGUgPSBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZUpUcmVlLmF0dHIoJ3R5cGUnKTtcbiAgdGhpcy5hcGlGcmFtZXdvcmsgPSBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZUpUcmVlLmF0dHIoJ2FwaUZyYW1ld29yaycpO1xuICB0aGlzLnNyYyA9IHhtbC5rZXlWYWx1ZShpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZUpUcmVlKTtcbn1cblxuSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUucGFyc2VJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXMgPSBmdW5jdGlvbiBwYXJzZUludGVyYWN0aXZlQ3JlYXRpdmVGaWxlcyhpY2ZzSlRyZWUpIHtcbiAgdmFyIGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlcyA9IFtdO1xuICB2YXIgaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzRGF0YTtcbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoaWNmc0pUcmVlKSkge1xuXHQgIGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlc0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheShpY2ZzSlRyZWUpID8gaWNmc0pUcmVlIDogW2ljZnNKVHJlZV07XG5cdCAgaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlSlRyZWUpIHtcblx0XHQgIGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlcy5wdXNoKG5ldyBJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZShmaWxlSlRyZWUpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFRyYWNraW5nRXZlbnQgPSByZXF1aXJlKCcuL1RyYWNraW5nRXZlbnQnKTtcbnZhciBNZWRpYUZpbGUgPSByZXF1aXJlKCcuL01lZGlhRmlsZScpO1xudmFyIFZpZGVvQ2xpY2tzID0gcmVxdWlyZSgnLi9WaWRlb0NsaWNrcycpO1xudmFyIEludGVyYWN0aXZlQ3JlYXRpdmVGaWxlID0gcmVxdWlyZSgnLi9JbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZScpO1xudmFyIEljb24gPSByZXF1aXJlKCcuL0ljb24nKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuXG5mdW5jdGlvbiBMaW5lYXIobGluZWFySlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExpbmVhcikpIHtcbiAgICByZXR1cm4gbmV3IExpbmVhcihsaW5lYXJKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIEVsZW1lbnRzXG4gIHRoaXMuZHVyYXRpb24gPSBwYXJzZXJzLmR1cmF0aW9uKHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5kdXJhdGlvbikpO1xuICB0aGlzLm1lZGlhRmlsZXMgPSBwYXJzZU1lZGlhRmlsZXMobGluZWFySlRyZWUubWVkaWFGaWxlcyAmJiBsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLm1lZGlhRmlsZSk7XG5cbiAgLy9PcHRpb25hbCBmaWVsZHNcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHBhcnNlVHJhY2tpbmdFdmVudHMobGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMgJiYgbGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMudHJhY2tpbmcsIHRoaXMuZHVyYXRpb24pO1xuICB0aGlzLnNraXBvZmZzZXQgPSBwYXJzZXJzLm9mZnNldCh4bWwuYXR0cihsaW5lYXJKVHJlZSwgJ3NraXBvZmZzZXQnKSwgdGhpcy5kdXJhdGlvbik7XG4gIFxuICAvLyBhZGp1c3Qgc2tpcG9mZnNldCB0byBwdWJsaXNoZXIgc2V0dGluZ3NcbiAgaWYgKHRoaXMuZHVyYXRpb24gJiYgd2luZG93Ll9tb2xTZXR0aW5ncyAmJiB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZSkge1xuXHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS5lbmFibGVkKSB7XG5cdFx0IGlmICh0aGlzLmR1cmF0aW9uID49IHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLnZpZGVvVGhyZXNob2xkKSB7XG5cdFx0XHQgdGhpcy5za2lwb2Zmc2V0ID0gd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9PZmZzZXQ7XG5cdFx0IH1cblx0XHQgZWxzZSB7XG5cdFx0XHQgdGhpcy5za2lwb2Zmc2V0ID0gbnVsbDsgXG5cdFx0IH1cblx0ICB9XG5cdCAgZWxzZSB7XG5cdFx0ICB0aGlzLnNraXBvZmZzZXQgPSBudWxsOyBcblx0ICB9XG4gIH1cblxuICBpZiAobGluZWFySlRyZWUudmlkZW9DbGlja3MpIHtcbiAgICB0aGlzLnZpZGVvQ2xpY2tzID0gbmV3IFZpZGVvQ2xpY2tzKGxpbmVhckpUcmVlLnZpZGVvQ2xpY2tzKTtcbiAgfVxuXG4gIGlmKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycykge1xuICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0geG1sLmtleVZhbHVlKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycyk7XG5cbiAgICBpZih4bWwuYXR0cihsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMsICd4bWxFbmNvZGVkJykpIHtcbiAgICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0geG1sLmRlY29kZSh0aGlzLmFkUGFyYW1ldGVycyk7XG4gICAgfVxuICB9XG4gIFxuICBpZiAod2luZG93Lm1vbF92YXN0VmVyc2lvbiA9PT0gNCkge1xuXHQgIGlmIChsaW5lYXJKVHJlZS5tZWRpYUZpbGVzICYmIGxpbmVhckpUcmVlLm1lZGlhRmlsZXMubWV6emFuaW5lKSB7XG5cdFx0ICB0aGlzLm1lenphbmluZSA9IHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLm1lenphbmluZSk7XG5cdCAgfVxuXHQgIGlmIChsaW5lYXJKVHJlZS5tZWRpYUZpbGVzICYmIGxpbmVhckpUcmVlLm1lZGlhRmlsZXMuaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUpIHtcblx0XHQgIHRoaXMuaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzID0gSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUucGFyc2VJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXMobGluZWFySlRyZWUubWVkaWFGaWxlcy5pbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZSk7XG5cdCAgfVxuICB9XG5cbiAgaWYgKGxpbmVhckpUcmVlLmljb25zKSB7XG4gICAgdGhpcy5pY29ucyA9IHBhcnNlSWNvbnMobGluZWFySlRyZWUuaWNvbnMgJiYgbGluZWFySlRyZWUuaWNvbnMuaWNvbik7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhcnNlVHJhY2tpbmdFdmVudHModHJhY2tpbmdFdmVudHMsIGR1cmF0aW9uKSB7XG4gICAgdmFyIHRyYWNraW5ncyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYWNraW5nRXZlbnRzKSkge1xuICAgICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0RhdGEpIHtcbiAgICAgICAgdHJhY2tpbmdzLnB1c2gobmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdEYXRhLCBkdXJhdGlvbikpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cmFja2luZ3M7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZU1lZGlhRmlsZXMobWVkaWFGaWxlc0p4b25UcmVlKSB7XG4gICAgdmFyIG1lZGlhRmlsZXMgPSBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChtZWRpYUZpbGVzSnhvblRyZWUpKSB7XG4gICAgICBtZWRpYUZpbGVzSnhvblRyZWUgPSB1dGlsaXRpZXMuaXNBcnJheShtZWRpYUZpbGVzSnhvblRyZWUpID8gbWVkaWFGaWxlc0p4b25UcmVlIDogW21lZGlhRmlsZXNKeG9uVHJlZV07XG5cbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZS5mb3JFYWNoKGZ1bmN0aW9uIChtZkRhdGEpIHtcbiAgICAgICAgbWVkaWFGaWxlcy5wdXNoKG5ldyBNZWRpYUZpbGUobWZEYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lZGlhRmlsZXM7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUljb25zKGljb25zSnhvblRyZWUpIHtcbiAgICB2YXIgaWNvbnMgPSBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChpY29uc0p4b25UcmVlKSkge1xuICAgICAgaWNvbnNKeG9uVHJlZSA9IHV0aWxpdGllcy5pc0FycmF5KGljb25zSnhvblRyZWUpID8gaWNvbnNKeG9uVHJlZSA6IFtpY29uc0p4b25UcmVlXTtcblxuICAgICAgaWNvbnNKeG9uVHJlZS5mb3JFYWNoKGZ1bmN0aW9uIChpY29uRGF0YSkge1xuICAgICAgICBpY29ucy5wdXNoKG5ldyBJY29uKGljb25EYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGljb25zO1xuICB9XG59XG5cbi8qKlxuICogTXVzdCByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIE1lZGlhRmlsZXMnIHR5cGUgaXMgc3VwcG9ydGVkXG4gKi9cbkxpbmVhci5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvcihpPTAsIGxlbj10aGlzLm1lZGlhRmlsZXMubGVuZ3RoOyBpPGxlbjsgaSs9MSkge1xuICAgIGlmKHRoaXMubWVkaWFGaWxlc1tpXS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVhcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgYXR0cmlidXRlc0xpc3QgPSBbXG4gIC8vUmVxdWlyZWQgYXR0cmlidXRlc1xuICAnZGVsaXZlcnknLFxuICAndHlwZScsXG4gICd3aWR0aCcsXG4gICdoZWlnaHQnLFxuICAvL09wdGlvbmFsIGF0dHJpYnV0ZXNcbiAgJ2NvZGVjJyxcbiAgJ2lkJyxcbiAgJ2JpdHJhdGUnLFxuICAnbWluQml0cmF0ZScsXG4gICdtYXhCaXRyYXRlJyxcbiAgJ3NjYWxhYmxlJyxcbiAgJ21haW50YWluQXNwZWN0UmF0aW8nLFxuICAnYXBpRnJhbWV3b3JrJ1xuXTtcblxuZnVuY3Rpb24gTWVkaWFGaWxlKG1lZGlhRmlsZUpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNZWRpYUZpbGUpKSB7XG4gICAgcmV0dXJuIG5ldyBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBhdHRyaWJ1dGVzXG4gIHRoaXMuc3JjID0geG1sLmtleVZhbHVlKG1lZGlhRmlsZUpUcmVlKTtcblxuICBmb3IodmFyIHg9MDsgeDxhdHRyaWJ1dGVzTGlzdC5sZW5ndGg7IHgrKykge1xuICAgIHZhciBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzTGlzdFt4XTtcbiAgICB0aGlzW2F0dHJpYnV0ZV0gPSBtZWRpYUZpbGVKVHJlZS5hdHRyKGF0dHJpYnV0ZSk7XG4gIH1cbn1cblxuTWVkaWFGaWxlLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XG4gIGlmKHZhc3RVdGlsLmlzVlBBSUQodGhpcykpIHtcbiAgICByZXR1cm4gISF2YXN0VXRpbC5maW5kU3VwcG9ydGVkVlBBSURUZWNoKHRoaXMudHlwZSk7XG4gIH1cblxuICBpZiAodGhpcy50eXBlID09PSAndmlkZW8veC1mbHYnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhRmlsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHBhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFja2luZ0V2ZW50KSkge1xuICAgIHJldHVybiBuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0pUcmVlLCBkdXJhdGlvbik7XG4gIH1cblxuICB0aGlzLm5hbWUgPSB0cmFja2luZ0pUcmVlLmF0dHIoJ2V2ZW50Jyk7XG4gIHRoaXMudXJpID0geG1sLmtleVZhbHVlKHRyYWNraW5nSlRyZWUpO1xuXG4gIGlmKCdwcm9ncmVzcycgPT09IHRoaXMubmFtZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gcGFyc2Vycy5vZmZzZXQodHJhY2tpbmdKVHJlZS5hdHRyKCdvZmZzZXQnKSwgZHVyYXRpb24pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2tpbmdFdmVudDsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFVuaXZlcnNhbEFkSWQodW5pdmVyc2FsQWRJZEpUcmVlKSB7XG5cdCAgaWYoISh0aGlzIGluc3RhbmNlb2YgVW5pdmVyc2FsQWRJZCkpIHtcblx0ICAgIHJldHVybiBuZXcgVW5pdmVyc2FsQWRJZCh1bml2ZXJzYWxBZElkSlRyZWUpO1xuXHQgIH1cblxuXHQgIHRoaXMuaWRSZWdpc3RyeSA9IHVuaXZlcnNhbEFkSWRKVHJlZS5hdHRyKCdpZFJlZ2lzdHJ5Jyk7XG5cdCAgdGhpcy5pZFZhbHVlID0gdW5pdmVyc2FsQWRJZEpUcmVlLmF0dHIoJ2lkVmFsdWUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml2ZXJzYWxBZElkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGh0dHAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9odHRwJykuaHR0cDtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWQVNUQ2xpZW50KG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RDbGllbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUQ2xpZW50KG9wdGlvbnMpO1xuICB9XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBXUkFQUEVSX0xJTUlUOiBvcHRpb25zICYmIG9wdGlvbnMud3JhcHBlckxpbWl0ICYmIG9wdGlvbnMud3JhcHBlckxpbWl0ID4gMCA/IG9wdGlvbnMud3JhcHBlckxpbWl0IDogNVxuICB9O1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnNldHRpbmdzID0gdXRpbGl0aWVzLmV4dGVuZCh7fSwgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xuICB0aGlzLmVycm9yVVJMTWFjcm9zID0gW107XG59XG5cblZBU1RDbGllbnQucHJvdG90eXBlLmdldFZBU1RSZXNwb25zZSA9IGZ1bmN0aW9uIGdldFZBU1RSZXNwb25zZShhZFRhZ1VybCwgY2FsbGJhY2spIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIHZhciBlcnJvciA9IHNhbml0eUNoZWNrKGFkVGFnVXJsLCBjYWxsYmFjayk7XG4gIGlmIChlcnJvcikge1xuICAgIGlmICh1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIHRoaXMuX2dldFZBU1RBZC5iaW5kKHRoaXMsIGFkVGFnVXJsKSxcbiAgICAgIGJ1aWxkVkFTVFJlc3BvbnNlXG4gICAgXSxcbiAgICBjYWxsYmFjayk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBidWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbiwgY2IpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3BvbnNlID0gdGhhdC5fYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4pO1xuICAgICAgY2IobnVsbCwgcmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNiKGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGFkVGFnVXJsLCBjYikge1xuICAgIGlmICghYWRUYWdVcmwpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RSZXNwb25zZSwgbWlzc2luZyBhZCB0YWcgVVJMJyk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RSZXNwb25zZSwgbWlzc2luZyBjYWxsYmFjayBmdW5jdGlvbicpO1xuICAgIH1cbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX2dldFZBU1RBZCA9IGZ1bmN0aW9uIChhZFRhZ1VybCwgY2FsbGJhY2spIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGdldEFkV2F0ZXJmYWxsKGFkVGFnVXJsLCBmdW5jdGlvbiAoZXJyb3IsIHZhc3RUcmVlKSB7XG4gICAgdmFyIHdhdGVyZmFsbEFkcyA9IHZhc3RUcmVlICYmIHV0aWxpdGllcy5pc0FycmF5KHZhc3RUcmVlLmFkcykgPyB2YXN0VHJlZS5hZHMgOiBudWxsO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgd2F0ZXJmYWxsQWRzKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvciwgd2F0ZXJmYWxsQWRzKTtcbiAgICB9XG4gICAgZ2V0QWQod2F0ZXJmYWxsQWRzLnNoaWZ0KCksIFtdLCB3YXRlcmZhbGxIYW5kbGVyKTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiB3YXRlcmZhbGxIYW5kbGVyKGVycm9yLCBhZENoYWluKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgYWRDaGFpbik7XG4gICAgICAgIGlmICh3YXRlcmZhbGxBZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGdldEFkKHdhdGVyZmFsbEFkcy5zaGlmdCgpLFtdLCB3YXRlcmZhbGxIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGFkQ2hhaW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBnZXRBZFdhdGVyZmFsbChhZFRhZ1VybCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdFZhc3RYTUwgPSB0aGF0Ll9yZXF1ZXN0VkFTVFhtbC5iaW5kKHRoYXQsIGFkVGFnVXJsKTtcbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgcmVxdWVzdFZhc3RYTUwsXG4gICAgICBidWlsZFZhc3RXYXRlcmZhbGxcbiAgICBdLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFZhc3RXYXRlcmZhbGwoeG1sU3RyLCBjYWxsYmFjaykge1xuICAgIHZhciB2YXN0VHJlZTtcbiAgICB0cnkge1xuICAgICAgdmFzdFRyZWUgPSB4bWwudG9KWE9OVHJlZSh4bWxTdHIpO1xuICAgICAgbG9nZ2VyLmRlYnVnIChcImJ1aWx0IEpYT05UcmVlIGZyb20gVkFTVCByZXNwb25zZTpcIiwgdmFzdFRyZWUpO1xuXG4gICAgICBpZih1dGlsaXRpZXMuaXNBcnJheSh2YXN0VHJlZS5hZCkpIHtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gdmFzdFRyZWUuYWQ7XG4gICAgICB9IGVsc2UgaWYodmFzdFRyZWUuYWQpe1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbdmFzdFRyZWUuYWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gW107XG4gICAgICB9XG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkVmFzdFdhdGVyZmFsbCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVWQVNUVHJlZSh2YXN0VHJlZSkge1xuICAgIHZhciB2YXN0VmVyc2lvbiA9IHhtbC5hdHRyKHZhc3RUcmVlLCAndmVyc2lvbicpO1xuXG4gICAgaWYgKCF2YXN0VHJlZS5hZCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vIEFkIGluIFZBU1QgdHJlZScsIDMwMyk7XG4gICAgfVxuXG4gICAgLy9pZiAodmFzdFZlcnNpb24gJiYgKHZhc3RWZXJzaW9uICE9IDMgJiYgdmFzdFZlcnNpb24gIT0gMikpIHtcbiAgICBpZiAodmFzdFZlcnNpb24gJiYgKHZhc3RWZXJzaW9uICE9IDMgJiYgdmFzdFZlcnNpb24gIT0gMiAmJiB2YXN0VmVyc2lvbiAhPSA0KSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vdCBzdXBwb3J0ZWQgVkFTVCB2ZXJzaW9uIFwiJyArIHZhc3RWZXJzaW9uICsgJ1wiJywgMTAyKTtcbiAgICB9XG4gICAgd2luZG93Lm1vbF92YXN0VmVyc2lvbiA9IHZhc3RWZXJzaW9uO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBZChhZFRhZ1VybCwgYWRDaGFpbiwgY2FsbGJhY2spIHtcbiAgICBpZiAoYWRDaGFpbi5sZW5ndGggPj0gdGhhdC5zZXR0aW5ncy5XUkFQUEVSX0xJTUlUKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmdldEFkLCBwbGF5ZXIncyB3cmFwcGVyIGxpbWl0IHJlYWNoZWQgKHRoZSBsaW1pdCBpcyBcIiArIFxuICAgICAgICB0aGF0LnNldHRpbmdzLldSQVBQRVJfTElNSVQgKyBcIilcIiwgMzAyKSwgYWRDaGFpbik7XG4gICAgfVxuXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoYWRUYWdVcmwpKSB7XG4gICAgICAgICAgcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgbmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dChudWxsLCBhZFRhZ1VybCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBidWlsZEFkXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCBhZCkge1xuICAgICAgaWYgKGFkKSB7XG4gICAgICAgIGFkQ2hhaW4ucHVzaChhZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWQud3JhcHBlcikge1xuICAgICAgICByZXR1cm4gZ2V0QWQoYWQud3JhcHBlci5WQVNUQWRUYWdVUkksIGFkQ2hhaW4sIGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGFkQ2hhaW4pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRBZChhZEp4b25UcmVlLCBjYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYWQgPSBuZXcgQWQoYWRKeG9uVHJlZSk7XG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZUFkKGFkKSwgYWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkQWQsIGVycm9yIHBhcnNpbmcgeG1sJywgMTAwKSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVBZChhZCkge1xuICAgIHZhciB3cmFwcGVyID0gYWQud3JhcHBlcjtcbiAgICB2YXIgaW5MaW5lID0gYWQuaW5MaW5lO1xuICAgIHZhciBlcnJNc2dQcmVmaXggPSAnb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVBZCwgJztcblxuICAgIGlmIChpbkxpbmUgJiYgd3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICtcIkluTGluZSBhbmQgV3JhcHBlciBib3RoIGZvdW5kIG9uIHRoZSBzYW1lIEFkXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgaWYgKCFpbkxpbmUgJiYgIXdyYXBwZXIpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibm9yIHdyYXBwZXIgbm9yIGlubGluZSBlbGVtZW50cyBmb3VuZCBvbiB0aGUgQWRcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAoaW5MaW5lICYmICFpbkxpbmUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJjb3VsZCBub3QgZmluZCBNZWRpYUZpbGUgdGhhdCBpcyBzdXBwb3J0ZWQgYnkgdGhpcyB2aWRlbyBwbGF5ZXJcIiwgNDAzKTtcbiAgICB9XG5cbiAgICBpZiAod3JhcHBlciAmJiAhd3JhcHBlci5WQVNUQWRUYWdVUkkpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibWlzc2luZyAnVkFTVEFkVGFnVVJJJyBpbiB3cmFwcGVyXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICAgIHRoYXQuX3JlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBmdW5jdGlvbiAoZXJyb3IsIHhtbFN0cikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdmFzdFRyZWUgPSB4bWwudG9KWE9OVHJlZSh4bWxTdHIpO1xuICAgICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUuYWQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQucmVxdWVzdFZBU1RBZCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl9yZXF1ZXN0VkFTVFhtbCA9IGZ1bmN0aW9uIHJlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFRhZ1VybCkpIHtcbiAgICAgIGFkVGFnVXJsKHJlcXVlc3RIYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nZ2VyLmluZm8gKFwicmVxdWVzdGluZyBhZFRhZ1VybDogXCIgKyBhZFRhZ1VybCk7XG4gICAgICBodHRwLmdldChhZFRhZ1VybCwgcmVxdWVzdEhhbmRsZXIsIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWxsYmFjayhlKTtcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcmVxdWVzdEhhbmRsZXIoZXJyb3IsIHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHZhciBlcnJNc2cgPSB1dGlsaXRpZXMuaXNEZWZpbmVkKHN0YXR1cykgP1xuICAgICAgXCJvbiBWQVNUQ2xpZW50LnJlcXVlc3RWYXN0WE1MLCBIVFRQIHJlcXVlc3QgZXJyb3Igd2l0aCBzdGF0dXMgJ1wiICsgc3RhdHVzICsgXCInXCIgOlxuICAgICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEVycm9yIGdldHRpbmcgdGhlIHRoZSBWQVNUIFhNTCB3aXRoIGhlIHBhc3NlZCBhZFRhZ1hNTCBmblwiO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoZXJyTXNnLCAzMDEpLCBudWxsKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl9idWlsZFZBU1RSZXNwb25zZSA9IGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluKSB7XG4gIHZhciByZXNwb25zZSA9IG5ldyBWQVNUUmVzcG9uc2UoKTtcbiAgYWRkQWRzVG9SZXNwb25zZShyZXNwb25zZSwgYWRzQ2hhaW4pO1xuICB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG5cbiAgLy8qKiogTG9jYWwgZnVuY3Rpb24gKioqKlxuICBmdW5jdGlvbiBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHMpIHtcbiAgICBhZHMuZm9yRWFjaChmdW5jdGlvbiAoYWQpIHtcbiAgICAgIHJlc3BvbnNlLmFkZEFkKGFkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NFdmVudHMgPSByZXNwb25zZS50cmFja2luZ0V2ZW50cy5wcm9ncmVzcztcblxuICAgIGlmICghcmVzcG9uc2UuaGFzTGluZWFyKCkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgUmVjZWl2ZWQgYW4gQWQgdHlwZSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWRcIiwgMjAwKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UuZHVyYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBNaXNzaW5nIGR1cmF0aW9uIGZpZWxkIGluIFZBU1QgcmVzcG9uc2VcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAocHJvZ3Jlc3NFdmVudHMpIHtcbiAgICAgIHByb2dyZXNzRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIHtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNOdW1iZXIocHJvZ3Jlc3NFdmVudC5vZmZzZXQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBtaXNzaW5nIG9yIHdyb25nIG9mZnNldCBhdHRyaWJ1dGUgb24gcHJvZ3Jlc3MgdHJhY2tpbmcgZXZlbnRcIiwgMTAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgYWRDaGFpbikge1xuICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KGFkQ2hhaW4pIHx8IGFkQ2hhaW4ubGVuZ3RoID09PSAwKSB7IC8vVGhlcmUgaXMgbm90aGluZyB0byB0cmFja1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlcnJvclVSTE1hY3JvcyA9IFtdO1xuICBhZENoYWluLmZvckVhY2goYWRkRXJyb3JVcmxNYWNyb3MpO1xuICB2YXN0VXRpbC50cmFjayhlcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3IuY29kZSB8fCA5MDB9KTsgIC8vOTAwIDw9PSBVbmRlZmluZWQgZXJyb3JcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAgKioqL1xuICBmdW5jdGlvbiBhZGRFcnJvclVybE1hY3JvcyhhZCkge1xuICAgIC8qaWYgKGFkLndyYXBwZXIgJiYgYWQud3JhcHBlci5lcnJvciAmJiB0eXBlb2YoYWQud3JhcHBlci5lcnJvcikgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVycm9yVVJMTWFjcm9zLnB1c2goYWQud3JhcHBlci5lcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGFkLmluTGluZSAmJiBhZC5pbkxpbmUuZXJyb3IgJiYgdHlwZW9mKGFkLmluTGluZS5lcnJvcikgPT09ICdzdHJpbmcnKSB7XG4gICAgXHRlcnJvclVSTE1hY3Jvcy5wdXNoKGFkLmluTGluZS5lcnJvcik7XG4gICAgfSovXG5cdCAgXG4gICAgICBpZiAoYWQud3JhcHBlciAmJiBhZC53cmFwcGVyLmVycm9ycyAmJiBBcnJheS5pc0FycmF5KGFkLndyYXBwZXIuZXJyb3JzKSkge1xuICAgIFx0ICBlcnJvclVSTE1hY3JvcyA9IGVycm9yVVJMTWFjcm9zLmNvbmNhdChhZC53cmFwcGVyLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZC5pbkxpbmUgJiYgYWQuaW5MaW5lLmVycm9ycyAmJiBBcnJheS5pc0FycmF5KGFkLmluTGluZS5lcnJvcnMpKSB7XG4gICAgXHQgIGVycm9yVVJMTWFjcm9zID0gZXJyb3JVUkxNYWNyb3MuY29uY2F0KGFkLmluTGluZS5lcnJvcnMpO1xuICAgICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RDbGllbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFZBU1RFcnJvcihtZXNzYWdlLCBjb2RlKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdWQVNUIEVycm9yOiAnICsgKG1lc3NhZ2UgfHwgJycpO1xuICBpZiAoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gIH1cbn1cblxuVkFTVEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuVkFTVEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJWQVNUIEVycm9yXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVEVycm9yOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBJbm5lciBoZWxwZXIgY2xhc3MgdGhhdCBkZWFscyB3aXRoIHRoZSBsb2dpYyBvZiB0aGUgaW5kaXZpZHVhbCBzdGVwcyBuZWVkZWQgdG8gc2V0dXAgYW4gYWQgaW4gdGhlIHBsYXllci5cbiAqXG4gKiBAcGFyYW0gcGxheWVyIHtvYmplY3R9IGluc3RhbmNlIG9mIHRoZSBwbGF5ZXIgdGhhdCB3aWxsIHBsYXkgdGhlIGFkLiBJdCBhc3N1bWVzIHRoYXQgdGhlIHZpZGVvanMtY29udHJpYi1hZHMgcGx1Z2luXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGhhcyBiZWVuIGluaXRpYWxpemVkIHdoZW4geW91IHVzZSBpdHMgdXRpbGl0eSBmdW5jdGlvbnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUVHJhY2tlciA9IHJlcXVpcmUoJy4vVkFTVFRyYWNrZXInKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxuZnVuY3Rpb24gVkFTVEludGVncmF0b3IocGxheWVyKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUSW50ZWdyYXRvcikpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RJbnRlZ3JhdG9yKHBsYXllcik7XG4gIH1cblxuICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgdGhpcy5lbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUgPSBmYWxzZTtcbn1cblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLnBsYXlBZCA9IGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcblxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ09uIFZBU1RJbnRlZ3JhdG9yLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1RSZXNwb25zZScpKTtcbiAgfVxuXG4gIGFzeW5jLndhdGVyZmFsbChbXG4gICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIG5leHQobnVsbCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9LFxuICAgIHRoaXMuX3NlbGVjdEFkU291cmNlLmJpbmQodGhpcyksXG4gICAgdGhpcy5fY3JlYXRlVkFTVFRyYWNrZXIuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2guYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2hEaXZCbG9ja2VyLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkU2tpcEJ1dHRvbi5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fcGxheVNlbGVjdGVkQWQuYmluZCh0aGlzKVxuICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgaWYgKGVycm9yICYmIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgICAgICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZEVycm9yJywgYWRWb2x1bWU6IHRoYXQucGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICAgIH1cbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgY2FsbGJhY2soZXJyb3IsIHJlc3BvbnNlKTtcbiAgfSk7XG5cbiAgdGhpcy5fYWRVbml0ID0ge1xuICAgIF9zcmM6IG51bGwsXG4gICAgdHlwZTogJ1ZBU1QnLFxuICAgIHBhdXNlQWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQucGxheWVyLnBhdXNlKHRydWUpO1xuICAgIH0sXG5cbiAgICByZXN1bWVBZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5wbGF5ZXIucGxheSh0cnVlKTtcbiAgICB9LFxuXG4gICAgaXNQYXVzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGF0LnBsYXllci5wYXVzZWQodHJ1ZSk7XG4gICAgfSxcblxuICAgIGdldFNyYzogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRoaXMuX2FkVW5pdDtcbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2VsZWN0QWRTb3VyY2UgPSBmdW5jdGlvbiBzZWxlY3RBZFNvdXJjZShyZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHNvdXJjZTtcblxuICB2YXIgcGxheWVyV2lkdGggPSBkb20uZ2V0RGltZW5zaW9uKHRoaXMucGxheWVyLmVsKCkpLndpZHRoO1xuICByZXNwb25zZS5tZWRpYUZpbGVzLnNvcnQoZnVuY3Rpb24gY29tcGFyZVRvKGEsIGIpIHtcbiAgICB2YXIgZGVsdGFBID0gTWF0aC5hYnMocGxheWVyV2lkdGggLSBhLndpZHRoKTtcbiAgICB2YXIgZGVsdGFCID0gTWF0aC5hYnMocGxheWVyV2lkdGggLSBiLndpZHRoKTtcbiAgICByZXR1cm4gZGVsdGFBIC0gZGVsdGFCO1xuICB9KTtcblxuICBzb3VyY2UgPSB0aGlzLnBsYXllci5zZWxlY3RTb3VyY2UocmVzcG9uc2UubWVkaWFGaWxlcykuc291cmNlO1xuICBpZiAoc291cmNlKSB7XG4gICAgdGhpcy5wbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLm1lc3NhZ2UnLCBkYXRhOiB7bWVzc2FnZTogJ1BsYXlpbmcgJyArIHNvdXJjZS5zcmMgKyAnICh0eXBlID0gJyArIHNvdXJjZS50eXBlICsgJyknfX0pO1xuICB9XG4gIFxuICBpZiAoc291cmNlKSB7XG4gICAgbG9nZ2VyLmluZm8gKFwic2VsZWN0ZWQgc291cmNlOiBcIiwgc291cmNlKTtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICB0aGlzLl9hZFVuaXQuX3NyYyA9IHNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgcmVzcG9uc2UpO1xuICB9XG5cbiAgLy8gY29kZSA0MDMgPD09IENvdWxkbid0IGZpbmQgTWVkaWFGaWxlIHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgdmlkZW8gcGxheWVyXG4gIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJDb3VsZCBub3QgZmluZCBBZCBtZWRpYWZpbGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGxheWVyXCIsIDQwMyksIHJlc3BvbnNlKTtcbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbiBjcmVhdGVWQVNUVHJhY2tlcihhZE1lZGlhRmlsZSwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIG5ldyBWQVNUVHJhY2tlcihhZE1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlKSwgcmVzcG9uc2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FsbGJhY2soZSwgcmVzcG9uc2UpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gc2V0dXBFdmVudHMoYWRNZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgcHJldmlvdXNseU11dGVkO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSk7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XG4gIHBsYXllci5vbigncGF1c2UnLCB0cmFja1BhdXNlKTtcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XG4gIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xuXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgdW5iaW5kRXZlbnRzKTtcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkU2tpcCddLCBmdW5jdGlvbihldnQpe1xuICAgIGlmKGV2dC50eXBlID09PSAndmFzdC5hZEVuZCcpe1xuICAgICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0dmFyIHR5cGUgPSBldnQudHlwZSA9PT0gJ3Zhc3QuYWRFbmQnID8gJ0FkVmlkZW9Db21wbGV0ZScgOiAnQWRTdG9wcGVkJztcbiAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6IHR5cGUsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcGxheWVyLm9uZSgnYWRTdG9wJywgZnVuY3Rpb24oKSB7XG5cdCBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZHNDYW5jZWwnKTsgXG4gIH0pO1xuXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBhZE1lZGlhRmlsZSwgcmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge1xuICAgIHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UpO1xuICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRTdGFydCcsIHRyYWNrSW1wcmVzc2lvbnMpO1xuICAgIHBsYXllci5vZmYoJ3BhdXNlJywgdHJhY2tQYXVzZSk7XG4gICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHRyYWNrUHJvZ3Jlc3MpO1xuICAgIHBsYXllci5vZmYoJ3ZvbHVtZWNoYW5nZScsIHRyYWNrVm9sdW1lQ2hhbmdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSgpIHtcbiAgICBpZiAocGxheWVyLmlzRnVsbHNjcmVlbigpKSB7XG4gICAgICB0cmFja2VyLnRyYWNrRnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFja2VyLnRyYWNrRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1BhdXNlKCkge1xuICAgIC8vTk9URTogd2hlbmV2ZXIgYSB2aWRlbyBlbmRzIHRoZSB2aWRlbyBFbGVtZW50IHRyaWdnZXJzIGEgJ3BhdXNlJyBldmVudCBiZWZvcmUgdGhlICdlbmRlZCcgZXZlbnQuXG4gICAgLy8gICAgICBXZSBzaG91bGQgbm90IHRyYWNrIHRoaXMgcGF1c2UgZXZlbnQgYmVjYXVzZSBpdCBtYWtlcyB0aGUgVkFTVCB0cmFja2luZyBjb25mdXNpbmcgYWdhaW4gd2UgdXNlIGFcbiAgICAvLyAgICAgIFRocmVzaG9sZCBvZiAyIHNlY29uZHMgdG8gcHJldmVudCBmYWxzZSBwb3NpdGl2ZXMgb24gSU9TLlxuXHRcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLmJyZWFrRHVyYXRpb24pIHtcblx0XHRcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnJlYWxWaWRlb0R1cmF0aW9uKSB7XG5cdFx0XHQgICAgaWYgKE1hdGguYWJzKHdpbmRvdy5fbW9sU2V0dGluZ3MucmVhbFZpZGVvRHVyYXRpb24gLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPCAyKSB7XG5cdFx0XHQgICAgICAgIHJldHVybjtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKE1hdGguYWJzKHBsYXllci5kdXJhdGlvbigpIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpIDwgMikge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGF1c2VkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgICB0cmFja2VyLnRyYWNrUGF1c2UoKTtcbiAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIHRydWUpO1xuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXknLCAndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZihldnQudHlwZSA9PT0gJ3BsYXknKXtcblx0ICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHQgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFBsYXlpbmcnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgICB9XG4gICAgICAgIHRyYWNrZXIudHJhY2tSZXN1bWUoKTtcbiAgICAgICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKCkge1xuICAgIHZhciBjdXJyZW50VGltZUluTXMgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDA7XG4gICAgdHJhY2tlci50cmFja1Byb2dyZXNzKGN1cnJlbnRUaW1lSW5Ncyk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRJbXByZXNzaW9uJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcbiAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1ZvbHVtZUNoYW5nZSgpIHtcbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZvbHVtZUNoYW5nZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgdmFyIG11dGVkID0gcGxheWVyLm11dGVkKCk7XG4gICAgaWYgKG11dGVkKSB7XG4gICAgICB0cmFja2VyLnRyYWNrTXV0ZSgpO1xuICAgIH0gZWxzZSBpZiAocHJldmlvdXNseU11dGVkKSB7XG4gICAgICB0cmFja2VyLnRyYWNrVW5tdXRlKCk7XG4gICAgfVxuICAgIHByZXZpb3VzbHlNdXRlZCA9IG11dGVkO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZFNraXBCdXR0b24gPSBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uKHNvdXJjZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBza2lwT2Zmc2V0SW5TZWM7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKHJlc3BvbnNlLnNraXBvZmZzZXQpKSB7XG4gICAgc2tpcE9mZnNldEluU2VjID0gcmVzcG9uc2Uuc2tpcG9mZnNldCAvIDEwMDA7XG4gICAgYWRkU2tpcEJ1dHRvblRvUGxheWVyKHRoaXMucGxheWVyLCBza2lwT2Zmc2V0SW5TZWMpO1xuICB9XG4gIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uVG9QbGF5ZXIocGxheWVyLCBza2lwT2Zmc2V0KSB7XG4gICAgdmFyIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgdmFyIHVwZGF0ZVNraXBCdXR0b24gPSB1cGRhdGVTa2lwQnV0dG9uU3RhdGUuYmluZCh0aGF0LCBza2lwQnV0dG9uLCBza2lwT2Zmc2V0LCBwbGF5ZXIpO1xuXG4gICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XG4gICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNraXBCdXR0b24pO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcbiAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVTa2lwQnV0dG9uKTtcbiAgICAgIGRvbS5yZW1vdmUoc2tpcEJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XG4gICAgc2tpcEJ1dHRvbi5pZCA9ICdhZFNraXBCdXR0b24nO1xuXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgICAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkU2tpcHBlZCcsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICAgICAgICB9XG4gICAgICAgIHRyYWNrZXIudHJhY2tTa2lwKCk7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU2tpcCcpO1xuICAgICAgfVxuICAgICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG5cbiAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXG4gICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2tpcEJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25TdGF0ZShza2lwQnV0dG9uLCBza2lwT2Zmc2V0LCBwbGF5ZXIpIHtcbiAgICB2YXIgdGltZUxlZnQgPSBNYXRoLmNlaWwoc2tpcE9mZnNldCAtIHBsYXllci5jdXJyZW50VGltZSgpKTtcbiAgICAvLyBpZiBza2lwIGJ1dHRvbiBlbmFibGVkIG5ldmVyIHNob3cgYmVmb3JlLWJ1dHRvbiBza2lwIHRleHRcbiAgICBpZiAodGltZUxlZnQgPiAwICYmICFkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cInZhc3Qtc2tpcC1idXR0b24tdGV4dFwiPicgKyB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBUZXh0LnJlcGxhY2UoJyUlVElNRSUlJywgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHModGltZUxlZnQsIDIpKSArICc8L3A+JztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKTtcbiAgICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBCdXR0b25UZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaWZyYW1lQmFja0J1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lQmFja0J1dHRvbicpO1xuICAgIGlmICghaWZyYW1lQmFja0J1dHRvbikge1xuICAgICAgICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2ggPSBmdW5jdGlvbiBhZGRDbGlja1Rocm91Z2gobWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIGVuYWJsZUZ1bGxzY3JlZW5DbGlja0lGcmFtZSA9IHRoaXMuZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lO1xuICBcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgYmxvY2tlciA9IGNyZWF0ZUNsaWNrVGhyb3VnaEJsb2NrZXIocGxheWVyLCB0cmFja2VyLCByZXNwb25zZSk7XG4gIHZhciB1cGRhdGVCbG9ja2VyID0gdXBkYXRlQmxvY2tlclVSTC5iaW5kKHRoaXMsIGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpO1xuXG4gIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShibG9ja2VyLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlQmxvY2tlcik7XG4gIFxuICBpZiAoZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lKSB7XG5cdCAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlRGlzcGxheVN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKSB7XG5cdFx0aWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MuZGlzYWJsZUNsaWNrVGhydSkge1xuXHRcdCAgICB2YXIgYmxvY2tlckRpdiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdCAgICBkb20uYWRkQ2xhc3MoYmxvY2tlckRpdiwgJ3Zhc3QtYmxvY2tlcicpO1xuXHRcdFx0cmV0dXJuIGJsb2NrZXJEaXY7XG5cdFx0fVxuICAgIHZhciBibG9ja2VyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHZhciBjbGlja1Rocm91Z2hNYWNybyA9IHJlc3BvbnNlLmNsaWNrVGhyb3VnaDtcblxuICAgIGRvbS5hZGRDbGFzcyhibG9ja2VyLCAndmFzdC1ibG9ja2VyJyk7XG4gICAgLy8gJ2EnIHRhZyBpbiBpT1Mgc29tZXRpbWUgZG9lcyBub3QgbmF2aWdhdGUuIFdlIHdpbGwgdXNlIHdpbmRvdy5vcGVuIHRvIG5hdmlnYXRlIGZvciBpT1MuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcbiAgICAgIGJsb2NrZXIuaHJlZiA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY2xpY2tUaHJvdWdoTWFjcm8pKSB7XG4gICAgICBibG9ja2VyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgfVxuXG4gICAgdmFyIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKHBsYXllci5wYXVzZWQoKSkge1xuICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcblxuICAgICAgICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIHBsYXllcidzIG5vcm1hbCBwYXVzZSBtZWNoYW5pc21cbiAgICAgICAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgdHJhY2tlci50cmFja0NsaWNrKCk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgICAgICAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkQ2xpY2tUaHJ1JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcbiAgICAgICAgICAvLyBXZSBhcmUgdXNpbmcgd2luZG93Lm9wZW4gdG8gbmF2aWdhdGUgZm9yIGlPUy5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllciksICdfYmxhbmsnKTtcbiAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBwbGF5ZXIucGF1c2UoKSBpbiBpT1Mgc29tZXRpbWUgZG9lcyBub3Qgd29yay4gVG8gbWFrZSBzdXJlIHBsYXllciBwYXVzZWQgd2Ugd2lsbCB0cnkgcGF1c2UgcGxheWVyIGluIDUwMCBtc2Vjcy5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFwbGF5ZXIucGF1c2VkKCkpIHtcbiAgICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCcmlnaHRjb3ZlIGhhcyBhIGJ1ZyB3aGVyZSB0aGV5IHNlbmQgYW4gXCJlbmRlZFwiIGV2ZW50IGlmIHBhdXNlZCB3aXRoaW4gYSBjb3VwbGUgc2Vjb25kcyBvZiB0aGUgdmlkZW8gZW5kLiBJbiB0aGlzIGNhc2UsIHRoZSBsaXN0ZW5lclxuICAgICAgICAvLyB0aGF0IHNob3dzIHRoZSBiaWcgcGxheSBidXR0b24gKGFtb25nIG90aGVyIHRoaW5ncykgZ2V0cyByZW1vdmVkIGJlZm9yZSB0aGUgaGFuZGxlciBmaXJlcy4gVGhpcyBmaXggbWFrZXMgc3VyZSB0aGUgYmlnIGJ1dHRvbiBzdGlsbCBhcHBlYXJzLlxuICAgICAgICB2YXIgcmVtYWluaW5nID0gcGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKTtcbiAgICAgICAgaWYgKHJlbWFpbmluZyA8IDMgJiYgcmVtYWluaW5nID4gMCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcbiAgICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkU2tpcCddLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH07XG4gIFxuICAgIGlmICh1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcbiAgICAgIGJsb2NrZXIub250b3VjaGVuZCA9IGNsaWNrSGFuZGxlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBibG9ja2VyLm9uY2xpY2sgPSBjbGlja0hhbmRsZXI7XG4gICAgfVxuICAgIFxuICAgIGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgJiYgZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lKSB7XG4gICAgXHRibG9ja2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyVVJMKGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpIHtcbiAgICAvLyAnYScgdGFnIGluIGlPUyBzb21ldGltZSBkb2VzIG5vdCBuYXZpZ2F0ZS4gV2Ugd2lsbCB1c2Ugd2luZG93Lm9wZW4gdG8gbmF2aWdhdGUgZm9yIGlPUy5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0lEZXZpY2UoKSkge1xuICAgICAgYmxvY2tlci5ocmVmID0gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwocmVzcG9uc2UuY2xpY2tUaHJvdWdoLCBwbGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpIHtcbiAgICB2YXIgdmFyaWFibGVzID0ge1xuICAgICAgQVNTRVRVUkk6IG1lZGlhRmlsZS5zcmMsXG4gICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMClcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6ICcjJztcbiAgfVxuICBcbiAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheVN0eWxlKCkge1xuXHQgIGJsb2NrZXIuc3R5bGUuZGlzcGxheSA9IHBsYXllci5pc0Z1bGxzY3JlZW4oKSA/ICdub25lJyA6ICdibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVCbG9ja2VyKCkge1xuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcblx0cGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZURpc3BsYXlTdHlsZSk7XG4gICAgZG9tLnJlbW92ZShibG9ja2VyKTtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2hEaXZCbG9ja2VyID0gZnVuY3Rpb24gYWRkQ2xpY2tUaHJvdWdoKG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG5cdGlmICghdGhpcy5lbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUpIHtcblx0XHRyZXR1cm4gY2FsbGJhY2sobnVsbCwgbWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSk7XG5cdH1cblx0dmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXHQgIHZhciBibG9ja2VyID0gY3JlYXRlQ2xpY2tUaHJvdWdoRGl2KHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpO1xuXHQgIHZhciB1cGRhdGVCbG9ja2VyID0gdXBkYXRlQmxvY2tlclVSTC5iaW5kKHRoaXMsIGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpO1xuXHQgIHZhciBibG9ja2VyVXJsO1xuXHQgIHZhciBpRnJhbWU7XG5cdCAgdmFyIGlGcmFtZUJhY2tCdXR0b247XG5cblx0ICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG5cdCAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XG5cdCAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVCbG9ja2VyKTtcblxuXHQgIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZURpc3BsYXlTdHlsZSk7XG5cblx0ICByZXR1cm4gY2FsbGJhY2sobnVsbCwgbWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSk7XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUNsaWNrVGhyb3VnaERpdihwbGF5ZXIsIHRyYWNrZXIpIHtcblx0ICAgIHZhciBibG9ja2VyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0ICAgIGRvbS5hZGRDbGFzcyhibG9ja2VyLCAndmFzdC1ibG9ja2VyJyk7XG5cblx0XHRpZiAoIXdpbmRvdy5fbW9sU2V0dGluZ3MuZGlzYWJsZUNsaWNrVGhydSkge1xuXHRcdCAgICBibG9ja2VyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuXHRcdCAgICAgIGlmIChwbGF5ZXIucGF1c2VkKCkpIHtcblx0XHQgICAgICAgIHBsYXllci5wbGF5KCk7XG5cdFxuXHRcdCAgICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIHBsYXllcidzIG5vcm1hbCBwYXVzZSBtZWNoYW5pc21cblx0XHQgICAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0ICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdFx0ICAgICAgfVxuXHRcblx0XHQgICAgICBwbGF5ZXIucGF1c2UoKTtcblx0XHQgICAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcblx0XG5cdFx0ICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdFx0ICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRDbGlja1RocnUnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgIFxuXHRcdCAgICAgIC8vIGNyZWF0ZSBJRnJhbWUgd2l0aCBiYWNrIGJ1dHRvblxuXHRcdCAgICAgIGlGcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXHRcdFx0ICBkb20uYWRkQ2xhc3MoaUZyYW1lLCAndmFzdC1ibG9ja2VyJyk7XG5cdFx0XHQgIGlGcmFtZS5zcmMgPSBibG9ja2VyVXJsO1xuXHRcdFx0ICBibG9ja2VyLmFwcGVuZENoaWxkKGlGcmFtZSk7XG5cdFx0XHQgIFxuXHRcdFx0ICBpRnJhbWVCYWNrQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHQgIGRvbS5hZGRDbGFzcyhpRnJhbWVCYWNrQnV0dG9uLCBcInZhc3QtYmFjay1idXR0b25cIik7XG5cdFx0ICAgICAgZG9tLmFkZENsYXNzKGlGcmFtZUJhY2tCdXR0b24sICdlbmFibGVkJyk7XG5cdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24uaW5uZXJIVE1MID0gXCJCYWNrXCI7XG5cdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24uaWQgPSAnaWZyYW1lQmFja0J1dHRvbic7XG5cdFx0XHQgIGJsb2NrZXIuYXBwZW5kQ2hpbGQoaUZyYW1lQmFja0J1dHRvbik7XG5cdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ICBibG9ja2VyLnJlbW92ZUNoaWxkKGlGcmFtZSk7XG5cdFx0XHRcdCAgaUZyYW1lID0gbnVsbDtcblx0XHRcdFx0ICBibG9ja2VyLnJlbW92ZUNoaWxkKGlGcmFtZUJhY2tCdXR0b24pO1xuXHRcdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24gPSBudWxsO1xuXHRcblx0XHRcdFx0ICAvLyBzaG93IGNvbnRyb2xzXG5cdFx0XHRcdCAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuXHRcdFx0XHQgIGlmIChza2lwQnV0dG9uKSB7XG5cdFx0XHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcblx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgcGxheWVyLmNvbnRyb2xzKHRydWUpO1xuXHRcdFx0XHQgIFxuXHRcdFx0XHQgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0ICB9XG5cdFx0XHQgIH0pO1xuXHRcdFx0ICBcblx0XHRcdCAgLy8gaGlkZSBjb250cm9sc1xuXHRcdFx0ICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHRcdFx0ICB9LCAxKTtcblx0XHRcdCAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuXHRcdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG5cdFx0XHQgIH1cblx0XHRcdCAgcGxheWVyLmNvbnRyb2xzKGZhbHNlKTtcblx0XG5cdFx0ICAgIH07XG5cdFx0fVxuXG5cdCAgICBpZiAoIXBsYXllci5pc0Z1bGxzY3JlZW4oKSkge1xuXHQgICAgXHRibG9ja2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBibG9ja2VyO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXJVUkwoYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcikge1xuXHRcdCAgYmxvY2tlclVybCA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHJlc3BvbnNlLmNsaWNrVGhyb3VnaCwgcGxheWVyKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKSB7XG5cdCAgICB2YXIgdmFyaWFibGVzID0ge1xuXHQgICAgICBBU1NFVFVSSTogbWVkaWFGaWxlLnNyYyxcblx0ICAgICAgQ09OVEVOVFBMQVlIRUFEOiB2YXN0VXRpbC5mb3JtYXRQcm9ncmVzcyhwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDApXG5cdCAgICB9O1xuXG5cdCAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogJyMnO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlTdHlsZSgpIHtcblx0XHQgIGJsb2NrZXIuc3R5bGUuZGlzcGxheSA9IHBsYXllci5pc0Z1bGxzY3JlZW4oKSA/ICdibG9jaycgOiAnbm9uZSc7XG5cdFx0ICBpZiAoIXBsYXllci5pc0Z1bGxzY3JlZW4oKSAmJiBpRnJhbWUpIHtcblx0XHRcdCAgYmxvY2tlci5yZW1vdmVDaGlsZChpRnJhbWUpO1xuXHRcdFx0ICBpRnJhbWUgPSBudWxsO1xuXHRcdFx0ICBibG9ja2VyLnJlbW92ZUNoaWxkKGlGcmFtZUJhY2tCdXR0b24pO1xuXHRcdFx0ICBpRnJhbWVCYWNrQnV0dG9uID0gbnVsbDtcblx0XHRcdCAgXG5cdFx0XHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgdHJ1ZSk7XG5cdFx0XHQgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZFNraXBCdXR0b24nKTtcblx0XHRcdCAgaWYgKHNraXBCdXR0b24pIHtcblx0XHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxuXHRcdFx0ICB9XG5cdFx0XHQgIHBsYXllci5jb250cm9scyh0cnVlKTtcblx0XHQgIH1cblx0ICB9XG5cblx0ICBmdW5jdGlvbiByZW1vdmVCbG9ja2VyKCkge1xuXHQgICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuXHRcdHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVEaXNwbGF5U3R5bGUpO1xuXHQgICAgZG9tLnJlbW92ZShibG9ja2VyKTtcblx0ICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlTZWxlY3RlZEFkID0gZnVuY3Rpb24gcGxheVNlbGVjdGVkQWQoc291cmNlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgYSByYWNlIGNvbmRpdGlvbiB3aGVyZSB0aGUgYWQgbG9hZGluZyB3YXRlcmZhbGwgbWF5IHJlYWNoIHRoaXMgcG9pbnQgYWZ0ZXIgYWRzIHdlcmUgY2FuY2VsbGVkIChtaWQtd2F0ZXJmYWxsKS5cbiAgaWYgKHRoaXMucGxheWVyLnZhc3QuYWRzQ2FuY2VsbGVkID09PSB0cnVlKSB7XG4gICAgY2FsbGJhY2sobnVsbCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy93aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSA9IG51bGw7XG5cbiAgcGxheWVyLnByZWxvYWQoXCJhdXRvXCIpOyAvL3dpdGhvdXQgcHJlbG9hZD1hdXRvIHRoZSBkdXJhdGlvbmNoYW5nZSBldmVudCBpcyBuZXZlciBmaXJlZFxuICBwbGF5ZXIuc3JjKHNvdXJjZSk7XG5cbiAgbG9nZ2VyLmRlYnVnIChcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQ+IHdhaXRpbmcgZm9yIGR1cmF0aW9uY2hhbmdlIHRvIHBsYXkgdGhlIGFkLi4uXCIpO1xuXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ2R1cmF0aW9uY2hhbmdlJywgJ2Vycm9yJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdkdXJhdGlvbmNoYW5nZScpIHtcbiAgICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkPiBnb3QgZHVyYXRpb25jaGFuZ2U7IGNhbGxpbmcgcGxheUFkKClcIik7XG4gICAgICBwbGF5QWQoKTtcbiAgICB9IGVsc2UgaWYoZXZ0LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUSW50ZWdyYXRvciwgUGxheWVyIGlzIHVuYWJsZSB0byBwbGF5IHRoZSBBZFwiLCA0MDApLCByZXNwb25zZSk7XG4gICAgfVxuICAgIC8vTk9URTogSWYgdGhlIGFkcyBnZXQgY2FuY2VsZWQgd2UgZG8gbm90aGluZy9cbiAgfSk7XG5cbiAgLyoqKiogbG9jYWwgZnVuY3Rpb25zICoqKioqKi9cbiAgZnVuY3Rpb24gcGxheUFkKCkge1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZihldnQudHlwZSA9PT0gJ3Zhc3QuYWRzQ2FuY2VsJyl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLypDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNiBNb2F0IEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4qL1xuICAgICAgLypmdW5jdGlvbiBpbml0TW9hdFRyYWNraW5nKGEsYyxkLGgsayl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiPVtdO2M9e2FkRGF0YTp7aWRzOmMsZHVyYXRpb246ZCx1cmw6a30sZGlzcGF0Y2hFdmVudDpmdW5jdGlvbihhKXt0aGlzLnNlbmRFdmVudD8oYiYmKGIucHVzaChhKSxhPWIsYj0hMSksdGhpcy5zZW5kRXZlbnQoYSkpOmIucHVzaChhKX19O2Q9XCJfbW9hdEFwaVwiK01hdGguZmxvb3IoMUU4Kk1hdGgucmFuZG9tKCkpO3ZhciBlLGc7dHJ5e2U9YS5vd25lckRvY3VtZW50LGc9ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3d9Y2F0Y2gobCl7ZT1kb2N1bWVudCxnPXdpbmRvd31nW2RdPWM7Zi50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7YSYmYS5pbnNlcnRCZWZvcmUoZixhLmNoaWxkTm9kZXNbMF18fG51bGwpO2Yuc3JjPVwiaHR0cHM6Ly96Lm1vYXRhZHMuY29tL1wiK2grXCIvbW9hdHZpZGVvLmpzI1wiK2Q7cmV0dXJuIGN9O1xuICAgICAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBudWxsO1xuICAgICAgaWYgKHJlc3BvbnNlLmFkcyAmJiByZXNwb25zZS5hZHMubGVuZ3RoID4gMCAmJiByZXNwb25zZS5hZHNbMF0uaW5MaW5lICYmIHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdCkge1xuICAgIFx0ICB2YXIgaWRzID0ge2xldmVsMTogcmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmFkdmlkLFxuICAgIFx0XHRcdCAgICAgbGV2ZWwyOiByZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3BnaWQsXG4gICAgXHRcdFx0ICAgICBsZXZlbDM6IHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5jcGlkLFxuICAgIFx0XHRcdCAgICAgbGV2ZWw0OiByZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3JpZH07XG4gICAgXHQgIGlmIChyZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuc2l0ZV9pZCkge1xuICAgIFx0XHQgIGlkcy5zbGljZXIxID0gcmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LnNpdGVfaWQ7XG4gICAgXHQgIH1cbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBpbml0TW9hdFRyYWNraW5nKHBsYXllci5lbF8sIGlkcywgcGxheWVyLmR1cmF0aW9uKCksIHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5wYXJ0bmVyY29kZSwgcGxheWVyLmN1cnJlbnRTb3VyY2UoKS5zcmMpO1xuICAgIFx0ICAvL3dpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gaW5pdE1vYXRUcmFja2luZyhwbGF5ZXIuZWxfLCBpZHMsIHBsYXllci5kdXJhdGlvbigpLCAnbmluZW1lZGlhdnBhaWQ3ODk2MTE2NCcsIHBsYXllci5jdXJyZW50U291cmNlKCkuc3JjKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcpIHtcbiAgICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nLmluaXQod2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eS5jb250ZXh0SWQsIFxuICAgIFx0XHRcdCAgcGxheWVyLmR1cmF0aW9uKCksIHBsYXllci5lbF8ub2Zmc2V0V2lkdGgsIHBsYXllci5lbF8ub2Zmc2V0SGVpZ2h0KTtcbiAgICAgIH0qL1xuICAgICAgXG4gICAgICBsb2dnZXIuZGVidWcgKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZC9wbGF5QWQ+IGdvdCBwbGF5aW5nIGV2ZW50OyB0cmlnZ2VyaW5nIHZhc3QuYWRTdGFydC4uLlwiKTtcblxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xuXG4gICAgICBpZiAodXRpbGl0aWVzLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAvLyBWSURMQS0yMzM2IChzaW11bGF0ZSB1c2VyIGFjdGl2aXR5IHRvIG1ha2Ugc3VyZSBjb250cm9sLWJhciBpcyB2aXNpYmxlIG9uIG1vYmlsZSBkZXZpY2VzKVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFx0XHRwbGF5ZXIudXNlckFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICBcdH0sIGkgKiAyMDAwKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWaWRlb1N0YXJ0JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJvY2VlZCk7XG4gICAgICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgcHJvY2VlZCk7XG4gICAgICBwbGF5ZXIub24oJ3Zhc3QuYWRTa2lwJywgcHJvY2VlZCk7XG5cbiAgICAgIGZ1bmN0aW9uIHByb2NlZWQoZXZ0KSB7XG5cbiAgICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJykge1xuICAgICAgICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxuICAgICAgICAgICAgICAvLyBhdm9pZHMgaXNzdWVzIHdoZXJlIElPUyBjb250cm9scyBjb3VsZCBza2lwIHRoZSBBZFxuICAgICAgICAgICAgXHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5icmVha0R1cmF0aW9uKSB7XG4gICAgICAgICAgICBcdFx0aWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MucmVhbFZpZGVvRHVyYXRpb24pIHtcbiAgICAgICAgICAgIFx0XHQgICAgaWYgKCh3aW5kb3cuX21vbFNldHRpbmdzLnJlYWxWaWRlb0R1cmF0aW9uIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpID4gMykge1xuICAgICAgICAgICAgXHRcdCAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXHRcdCAgICB9XG4gICAgICAgICAgICBcdFx0fVxuICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICBcdGVsc2UgaWYgKChwbGF5ZXIuZHVyYXRpb24oKSAtIHBsYXllci5jdXJyZW50VGltZSgpKSA+IDMpIHtcbiAgICBcdFx0XHRcdHJldHVybjtcbiAgICBcdFx0XHR9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLyppZihldnQudHlwZSA9PT0gJ2VuZGVkJyAmJiAocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPiAzICkge1xuICAgICAgICAgIC8vIElnbm9yZSBlbmRlZCBldmVudCBpZiB0aGUgQWQgdGltZSB3YXMgbm90ICduZWFyJyB0aGUgZW5kXG4gICAgICAgICAgLy8gYXZvaWRzIGlzc3VlcyB3aGVyZSBJT1MgY29udHJvbHMgY291bGQgc2tpcCB0aGUgQWRcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHBsYXllci5vZmYoJ2VuZGVkJywgcHJvY2VlZCk7XG4gICAgICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgcHJvY2VlZCk7XG4gICAgICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRTa2lwJywgcHJvY2VlZCk7XG5cbiAgICAgICAgLy9OT1RFOiBpZiB0aGUgYWRzIGdldCBjYW5jZWwgd2UgZG8gbm90aGluZyBhcGFydCByZW1vdmluZyB0aGUgbGlzdG5lcnNcbiAgICAgICAgaWYoZXZ0LnR5cGUgPT09ICdlbmRlZCcgfHwgZXZ0LnR5cGUgPT09ICd2YXN0LmFkU2tpcCcpe1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9nZ2VyLmRlYnVnIChcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQvcGxheUFkPiBjYWxsaW5nIHBsYXllci5wbGF5KCkuLi5cIik7XG5cbiAgICBwbGF5ZXIucGxheSgpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSkge1xuICB2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3IuY29kZSB8fCA5MDB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVEludGVncmF0b3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcbnZhciBWaWRlb0NsaWNrcyA9IHJlcXVpcmUoJy4vVmlkZW9DbGlja3MnKTtcbnZhciBMaW5lYXIgPSByZXF1aXJlKCcuL0xpbmVhcicpO1xudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XG52YXIgV3JhcHBlciA9IHJlcXVpcmUoJy4vV3JhcHBlcicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuLy92YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbndpbmRvdy5JbkxpbmVfX0EgPSBJbkxpbmU7XG5mdW5jdGlvbiBWQVNUUmVzcG9uc2UoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUUmVzcG9uc2UoKTtcbiAgfVxuXG4gIHRoaXMuX2xpbmVhckFkZGVkID0gZmFsc2U7XG4gIHRoaXMudmFzdFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIHRoaXMuYWRzID0gW107XG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcbiAgdGhpcy5pbXByZXNzaW9ucyA9IFtdO1xuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gW107XG4gIHRoaXMuY3VzdG9tQ2xpY2tzID0gW107XG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSB7fTtcbiAgdGhpcy5tZWRpYUZpbGVzID0gW107XG4gIHRoaXMuY2xpY2tUaHJvdWdoID0gdW5kZWZpbmVkO1xuICB0aGlzLmFkVGl0bGUgPSAnJztcbiAgdGhpcy5kdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgdGhpcy5za2lwb2Zmc2V0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmljb25zID0gW107XG59XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuYWRkQWQgPSBmdW5jdGlvbiAoYWQpIHtcbiAgdmFyIGluTGluZSwgd3JhcHBlcjtcbiAgaWYgKGFkIGluc3RhbmNlb2YgQWQpIHtcbiAgICBpbkxpbmUgPSBhZC5pbkxpbmU7XG4gICAgd3JhcHBlciA9IGFkLndyYXBwZXI7XG5cbiAgICB0aGlzLmFkcy5wdXNoKGFkKTtcblxuICAgIGlmIChpbkxpbmUpIHtcbiAgICAgIHRoaXMuX2FkZEluTGluZShpbkxpbmUpO1xuICAgIH1cblxuICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICB0aGlzLl9hZGRXcmFwcGVyKHdyYXBwZXIpO1xuICAgIH1cbiAgfVxufTtcblxuLypWQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRFcnJvclRyYWNrVXJsID0gZnVuY3Rpb24gKGVycm9yKSB7XG5cdCAgdmFyIGVycm9yVVJMID0gZXJyb3IgaW5zdGFuY2VvZiB4bWwuSlhPTlRyZWUgPyB4bWwua2V5VmFsdWUoZXJyb3IpIDogZXJyb3I7XG5cdCAgaWYgKGVycm9yVVJMKSB7XG5cdCAgICB0aGlzLmVycm9yVVJMTWFjcm9zLnB1c2goZXJyb3JVUkwpO1xuXHQgIH1cblx0fTsqL1xuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRXJyb3JUcmFja1VybHMgPSBmdW5jdGlvbiAoZXJyb3JzKSB7XG5cdCAgdXRpbGl0aWVzLmlzQXJyYXkoZXJyb3JzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuZXJyb3JVUkxNYWNyb3MsIGVycm9ycyk7XG5cdH07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEltcHJlc3Npb25zID0gZnVuY3Rpb24gKGltcHJlc3Npb25zKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGltcHJlc3Npb25zKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuaW1wcmVzc2lvbnMsIGltcHJlc3Npb25zKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaCA9IGZ1bmN0aW9uIChjbGlja1Rocm91Z2gpIHtcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNsaWNrVGhyb3VnaCkpIHtcbiAgICB0aGlzLmNsaWNrVGhyb3VnaCA9IGNsaWNrVGhyb3VnaDtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ2xpY2tUcmFja2luZ3MgPSBmdW5jdGlvbiAoY2xpY2tUcmFja2luZ3MpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoY2xpY2tUcmFja2luZ3MpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5jbGlja1RyYWNraW5ncywgY2xpY2tUcmFja2luZ3MpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ3VzdG9tQ2xpY2tzID0gZnVuY3Rpb24gKGN1c3RvbUNsaWNrcykge1xuICB1dGlsaXRpZXMuaXNBcnJheShjdXN0b21DbGlja3MpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5jdXN0b21DbGlja3MsIGN1c3RvbUNsaWNrcyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRUcmFja2luZ0V2ZW50cyA9IGZ1bmN0aW9uICh0cmFja2luZ0V2ZW50cykge1xuICB2YXIgZXZlbnRzTWFwID0gdGhpcy50cmFja2luZ0V2ZW50cztcblxuICBpZiAodHJhY2tpbmdFdmVudHMpIHtcbiAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcbiAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0V2ZW50KSB7XG4gICAgICBpZiAoIWV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdKSB7XG4gICAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdID0gW107XG4gICAgICB9XG4gICAgICBldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXS5wdXNoKHRyYWNraW5nRXZlbnQpO1xuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodGl0bGUpKSB7XG4gICAgdGhpcy5hZFRpdGxlID0gdGl0bGU7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZER1cmF0aW9uID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIoZHVyYXRpb24pKSB7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRWaWRlb0NsaWNrcyA9IGZ1bmN0aW9uICh2aWRlb0NsaWNrcykge1xuICBpZiAodmlkZW9DbGlja3MgaW5zdGFuY2VvZiBWaWRlb0NsaWNrcykge1xuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaCh2aWRlb0NsaWNrcy5jbGlja1Rocm91Z2gpO1xuICAgIHRoaXMuX2FkZENsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tzLmNsaWNrVHJhY2tpbmdzKTtcbiAgICB0aGlzLl9hZGRDdXN0b21DbGlja3ModmlkZW9DbGlja3MuY3VzdG9tQ2xpY2tzKTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkTWVkaWFGaWxlcyA9IGZ1bmN0aW9uIChtZWRpYUZpbGVzKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KG1lZGlhRmlsZXMpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5tZWRpYUZpbGVzLCBtZWRpYUZpbGVzKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFNraXBvZmZzZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG5cdCAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MgJiYgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUpIHtcblx0XHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS5lbmFibGVkKSB7XG5cdFx0XHQgIGlmICghdGhpcy5kdXJhdGlvbiB8fCAhd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQgfHwgdGhpcy5kdXJhdGlvbiA+PSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS52aWRlb1RocmVzaG9sZCkge1xuXHRcdFx0XHQgIHRoaXMuc2tpcG9mZnNldCA9IHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLnZpZGVvT2Zmc2V0O1xuXHRcdFx0ICB9XG5cdFx0ICB9XG5cdCAgfVxuXHQgIGVsc2UgaWYgKG9mZnNldCkge1xuXHQgICAgdGhpcy5za2lwb2Zmc2V0ID0gb2Zmc2V0O1xuXHQgIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEFkUGFyYW1ldGVycyA9IGZ1bmN0aW9uIChhZFBhcmFtZXRlcnMpIHtcbiAgaWYgKGFkUGFyYW1ldGVycykge1xuICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0gYWRQYXJhbWV0ZXJzO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJY29ucyA9IGZ1bmN0aW9uIChpY29ucykge1xuICB1dGlsaXRpZXMuaXNBcnJheShpY29ucykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmljb25zLCBpY29ucyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRMaW5lYXIgPSBmdW5jdGlvbiAobGluZWFyKSB7XG4gIGlmIChsaW5lYXIgaW5zdGFuY2VvZiBMaW5lYXIpIHtcbiAgICB0aGlzLl9hZGREdXJhdGlvbihsaW5lYXIuZHVyYXRpb24pO1xuICAgIHRoaXMuX2FkZFRyYWNraW5nRXZlbnRzKGxpbmVhci50cmFja2luZ0V2ZW50cyk7XG4gICAgdGhpcy5fYWRkVmlkZW9DbGlja3MobGluZWFyLnZpZGVvQ2xpY2tzKTtcbiAgICB0aGlzLl9hZGRNZWRpYUZpbGVzKGxpbmVhci5tZWRpYUZpbGVzKTtcbiAgICB0aGlzLl9hZGRTa2lwb2Zmc2V0KGxpbmVhci5za2lwb2Zmc2V0KTtcbiAgICB0aGlzLl9hZGRBZFBhcmFtZXRlcnMobGluZWFyLmFkUGFyYW1ldGVycyk7XG4gICAgdGhpcy5fYWRkSWNvbnMobGluZWFyLmljb25zKTtcbiAgICB0aGlzLl9saW5lYXJBZGRlZCA9IHRydWU7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEluTGluZSA9IGZ1bmN0aW9uIChpbkxpbmUpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGlmIChpbkxpbmUgaW5zdGFuY2VvZiBJbkxpbmUpIHtcbiAgICB0aGlzLl9hZGRUaXRsZShpbkxpbmUuYWRUaXRsZSk7XG4gICAgdGhpcy5fYWRkRXJyb3JUcmFja1VybHMoaW5MaW5lLmVycm9ycyk7XG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMoaW5MaW5lLmltcHJlc3Npb25zKTtcblxuICAgIGluTGluZS5jcmVhdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcbiAgICAgIGlmIChjcmVhdGl2ZS5saW5lYXIpIHtcbiAgICAgICAgdGhhdC5fYWRkTGluZWFyKGNyZWF0aXZlLmxpbmVhcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFdyYXBwZXIgPSBmdW5jdGlvbiAod3JhcHBlcikge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKHdyYXBwZXIgaW5zdGFuY2VvZiBXcmFwcGVyKSB7XG4gICAgdGhpcy5fYWRkRXJyb3JUcmFja1VybHMod3JhcHBlci5lcnJvcnMpO1xuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKHdyYXBwZXIuaW1wcmVzc2lvbnMpO1xuXG4gICAgd3JhcHBlci5jcmVhdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcbiAgICAgIHZhciBsaW5lYXIgPSBjcmVhdGl2ZS5saW5lYXI7XG4gICAgICBpZiAobGluZWFyKSB7XG4gICAgICAgIHRoYXQuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XG4gICAgICAgIHRoYXQuY2xpY2tUaHJvdWdoID0gdW5kZWZpbmVkOy8vV2UgZW5zdXJlIHRoYXQgbm8gY2xpY2tUaHJvdWdoIGhhcyBiZWVuIGFkZGVkXG4gICAgICAgIHRoYXQuX2FkZFRyYWNraW5nRXZlbnRzKGxpbmVhci50cmFja2luZ0V2ZW50cyk7XG4gICAgICAgIHRoYXQuX2FkZEljb25zKGxpbmVhci5pY29ucyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuaGFzTGluZWFyID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuX2xpbmVhckFkZGVkO1xufTtcblxuZnVuY3Rpb24gYXBwZW5kVG9BcnJheShhcnJheSwgaXRlbXMpIHtcbiAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBhcnJheS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVFJlc3BvbnNlO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBWQVNUVHJhY2tlcihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUVHJhY2tlcikpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RUcmFja2VyKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xuICB9XG5cbiAgdGhpcy5zYW5pdHlDaGVjayhhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcbiAgdGhpcy5pbml0aWFsaXplKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xuXG59XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xuICB0aGlzLnJlc3BvbnNlID0gdmFzdFJlc3BvbnNlO1xuICB0aGlzLmFzc2V0VVJJID0gYXNzZXRVUkk7XG4gIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICB0aGlzLnF1YXJ0aWxlcyA9IHtcbiAgICBmaXJzdFF1YXJ0aWxlOiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoMjUgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfSxcbiAgICBtaWRwb2ludDoge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDUwICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXG4gICAgdGhpcmRRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDc1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH1cbiAgfTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS5zYW5pdHlDaGVjayA9IGZ1bmN0aW9uKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoYXNzZXRVUkkpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKGFzc2V0VVJJKSkge1xuICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZBU1RUcmFja2VyIGNvbnN0cnVjdG9yLCBtaXNzaW5nIHJlcXVpcmVkIHRoZSBVUkkgb2YgdGhlIGFkIGFzc2V0IGJlaW5nIHBsYXllZCcpO1xuICB9XG5cbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZBU1RUcmFja2VyIGNvbnN0cnVjdG9yLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1QgcmVzcG9uc2UnKTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrVVJMcyA9IGZ1bmN0aW9uIHRyYWNrVVJMcyh1cmxzLCB2YXJpYWJsZXMpIHtcbiAgaWYgKHV0aWxpdGllcy5pc0FycmF5KHVybHMpICYmIHVybHMubGVuZ3RoID4gMCkge1xuICAgIHZhcmlhYmxlcyA9IHV0aWxpdGllcy5leHRlbmQoe1xuICAgICAgQVNTRVRVUkk6IHRoaXMuYXNzZXRVUkksXG4gICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHRoaXMucHJvZ3Jlc3MpXG4gICAgfSwgdmFyaWFibGVzIHx8IHt9KTtcblxuICAgIHZhc3RVdGlsLnRyYWNrKHVybHMsIHZhcmlhYmxlcyk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0V2ZW50ID0gZnVuY3Rpb24gdHJhY2tFdmVudChldmVudE5hbWUsIHRyYWNrT25jZSkge1xuICAgIGlmICh0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0gJiYgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nKSB7XG4gICAgXHQgIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZy5pbnZva2VFdmVudChldmVudE5hbWUpO1xuICAgIH1cbiAgdGhpcy50cmFja1VSTHMoZ2V0RXZlbnRVcmlzKHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSkpO1xuICBpZiAodHJhY2tPbmNlKSB7XG4gICAgdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gIGZ1bmN0aW9uIGdldEV2ZW50VXJpcyh0cmFja2luZ0V2ZW50cykge1xuICAgIHZhciB1cmlzO1xuXG4gICAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgICB1cmlzID0gW107XG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICghZXZlbnQudXJpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1cmlzLnB1c2goZXZlbnQudXJpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJpcztcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrUHJvZ3Jlc3MgPSBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKG5ld1Byb2dyZXNzSW5Ncykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBldmVudHMgPSBbXTtcbiAgdmFyIE9OQ0UgPSB0cnVlO1xuICB2YXIgQUxXQVlTID0gZmFsc2U7XG4gIHZhciB0cmFja2luZ0V2ZW50cyA9IHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihuZXdQcm9ncmVzc0luTXMpKSB7XG4gICAgYWRkVHJhY2tFdmVudCgnc3RhcnQnLCBPTkNFLCBuZXdQcm9ncmVzc0luTXMgPiAwKTtcbiAgICBhZGRUcmFja0V2ZW50KCdyZXdpbmQnLCBBTFdBWVMsIGhhc1Jld291bmQodGhpcy5wcm9ncmVzcywgbmV3UHJvZ3Jlc3NJbk1zKSk7XG4gICAgYWRkUXVhcnRpbGVFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcbiAgICB0cmFja1Byb2dyZXNzRXZlbnRzKG5ld1Byb2dyZXNzSW5Ncyk7XG4gICAgdHJhY2tFdmVudHMoKTtcbiAgICB0aGlzLnByb2dyZXNzID0gbmV3UHJvZ3Jlc3NJbk1zO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gIGZ1bmN0aW9uIGhhc1Jld291bmQoY3VycmVudFByb2dyZXNzLCBuZXdQcm9ncmVzcykge1xuICAgIHZhciBSRVdJTkRfVEhSRVNIT0xEID0gMzAwMDsgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGVyZSB3YXMgYSByZXdpbmQgYW4gdGhhdCBpdCB3YXMgb24gcHVycG9zZS5cbiAgICByZXR1cm4gY3VycmVudFByb2dyZXNzID4gbmV3UHJvZ3Jlc3NJbk1zICYmIE1hdGguYWJzKG5ld1Byb2dyZXNzIC0gY3VycmVudFByb2dyZXNzKSA+IFJFV0lORF9USFJFU0hPTEQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUcmFja0V2ZW50KGV2ZW50TmFtZSwgdHJhY2tPbmNlLCBjYW5CZUFkZGVkKSB7XG4gICAgaWYgKHRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0gJiYgY2FuQmVBZGRlZCkge1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICBuYW1lOiBldmVudE5hbWUsXG4gICAgICAgIHRyYWNrT25jZTogISF0cmFja09uY2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFF1YXJ0aWxlRXZlbnRzKHByb2dyZXNzKSB7XG4gICAgdmFyIHF1YXJ0aWxlcyA9IHRoYXQucXVhcnRpbGVzO1xuICAgIHZhciBmaXJzdFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMuZmlyc3RRdWFydGlsZTtcbiAgICB2YXIgbWlkcG9pbnQgPSB0aGF0LnF1YXJ0aWxlcy5taWRwb2ludDtcbiAgICB2YXIgdGhpcmRRdWFydGlsZSA9IHRoYXQucXVhcnRpbGVzLnRoaXJkUXVhcnRpbGU7XG5cbiAgICBpZiAoIWZpcnN0UXVhcnRpbGUudHJhY2tlZCkge1xuICAgICAgdHJhY2tRdWFydGlsZSgnZmlyc3RRdWFydGlsZScsIHByb2dyZXNzKTtcbiAgICB9IGVsc2UgaWYgKCFtaWRwb2ludC50cmFja2VkKSB7XG4gICAgICB0cmFja1F1YXJ0aWxlKCdtaWRwb2ludCcsIHByb2dyZXNzKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlyZFF1YXJ0aWxlLnRyYWNrZWQpe1xuICAgICAgdHJhY2tRdWFydGlsZSgndGhpcmRRdWFydGlsZScsIHByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiB0cmFja1F1YXJ0aWxlKHF1YXJ0aWxlTmFtZSwgcHJvZ3Jlc3Mpe1xuICAgICAgdmFyIHF1YXJ0aWxlID0gcXVhcnRpbGVzW3F1YXJ0aWxlTmFtZV07XG4gICAgICBpZihjYW5CZVRyYWNrZWQocXVhcnRpbGUsIHByb2dyZXNzKSl7XG4gICAgICAgIHF1YXJ0aWxlLnRyYWNrZWQgPSB0cnVlO1xuICAgICAgICBhZGRUcmFja0V2ZW50KHF1YXJ0aWxlTmFtZSwgT05DRSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuQmVUcmFja2VkKHF1YXJ0aWxlLCBwcm9ncmVzcykge1xuICAgIHZhciBxdWFydGlsZVRpbWUgPSBxdWFydGlsZS50aW1lO1xuICAgIC8vV2Ugb25seSBmaXJlIHRoZSBxdWFydGlsZSBldmVudCBpZiB0aGUgcHJvZ3Jlc3MgaXMgYmlnZ2VyIHRoYW4gdGhlIHF1YXJ0aWxlIHRpbWUgYnkgNSBzZWNvbmRzIGF0IG1vc3QuXG4gICAgcmV0dXJuIHByb2dyZXNzID49IHF1YXJ0aWxlVGltZSAmJiBwcm9ncmVzcyA8PSAocXVhcnRpbGVUaW1lICsgNTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzRXZlbnRzKHByb2dyZXNzKSB7XG4gICAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cy5wcm9ncmVzcykpIHtcbiAgICAgIHJldHVybjsgLy9Ob3RoaW5nIHRvIHRyYWNrXG4gICAgfVxuXG4gICAgdmFyIHBlbmRpbmdQcm9ncmVzc0V2dHMgPSBbXTtcblxuICAgIHRyYWNraW5nRXZlbnRzLnByb2dyZXNzLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC5vZmZzZXQgPD0gcHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhhdC50cmFja1VSTHMoW2V2dC51cmldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlbmRpbmdQcm9ncmVzc0V2dHMucHVzaChldnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRyYWNraW5nRXZlbnRzLnByb2dyZXNzID0gcGVuZGluZ1Byb2dyZXNzRXZ0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrRXZlbnRzKCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdGhhdC50cmFja0V2ZW50KGV2ZW50Lm5hbWUsIGV2ZW50LnRyYWNrT25jZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbltcbiAgJ3Jld2luZCcsXG4gICdmdWxsc2NyZWVuJyxcbiAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgJ3BhdXNlJyxcbiAgJ3Jlc3VtZScsXG4gICdtdXRlJyxcbiAgJ3VubXV0ZScsXG4gICdhY2NlcHRJbnZpdGF0aW9uJyxcbiAgJ2FjY2VwdEludml0YXRpb25MaW5lYXInLFxuICAnY29sbGFwc2UnLFxuICAnZXhwYW5kJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKGV2ZW50TmFtZSldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmFja0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgfTtcbiAgfSk7XG5cbltcbiAgJ3N0YXJ0JyxcbiAgJ3NraXAnLFxuICAnY2xvc2UnLFxuICAnY2xvc2VMaW5lYXInXG5dLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cnVlKTtcbiAgICB9O1xuICB9KTtcblxuW1xuICAnZmlyc3RRdWFydGlsZScsXG4gICdtaWRwb2ludCcsXG4gICd0aGlyZFF1YXJ0aWxlJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChxdWFydGlsZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUocXVhcnRpbGUpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucXVhcnRpbGVzW3F1YXJ0aWxlXS50cmFja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMudHJhY2tFdmVudChxdWFydGlsZSwgdHJ1ZSk7XG4gICAgfTtcbiAgfSk7XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLnF1YXJ0aWxlcy50aGlyZFF1YXJ0aWxlLnRyYWNrZWQpe1xuICAgIHRoaXMudHJhY2tFdmVudCgnY29tcGxldGUnLCB0cnVlKTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrRXJyb3JXaXRoQ29kZSA9IGZ1bmN0aW9uIHRyYWNrRXJyb3JXaXRoQ29kZShlcnJvcmNvZGUpIHtcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihlcnJvcmNvZGUpKSB7XG4gICAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3Jjb2RlfSk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0ltcHJlc3Npb25zID0gZnVuY3Rpb24gdHJhY2tJbXByZXNzaW9ucygpIHtcbiAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5pbXByZXNzaW9ucyk7XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDcmVhdGl2ZVZpZXcgPSBmdW5jdGlvbiB0cmFja0NyZWF0aXZlVmlldygpIHtcbiAgdGhpcy50cmFja0V2ZW50KCdjcmVhdGl2ZVZpZXcnKTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NsaWNrID0gZnVuY3Rpb24gdHJhY2tDbGljaygpIHtcbiAgICBpZiAod2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nKSB7XG4gIFx0ICB3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcuaW52b2tlRXZlbnQoJ2FkLWNsaWNrJyk7XG4gICAgfVxuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmNsaWNrVHJhY2tpbmdzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVFRyYWNrZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIFZlcmlmaWNhdGlvbih2ZXJpZmljYXRpb25KVHJlZSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBWZXJpZmljYXRpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJpZmljYXRpb24odmVyaWZpY2F0aW9uSlRyZWUpO1xuICB9XG5cbiAgdGhpcy52ZW5kb3IgPSB2ZXJpZmljYXRpb25KVHJlZS5hdHRyKCd2ZW5kb3InKTtcbiAgaWYgKHZlcmlmaWNhdGlvbkpUcmVlLmphdmFTY3JpcHRSZXNvdXJjZSkge1xuXHQgIHRoaXMuamF2YVNjcmlwdFJlc291cmNlcyA9IHBhcnNlUmVzb3VyY2VzKHZlcmlmaWNhdGlvbkpUcmVlLmphdmFTY3JpcHRSZXNvdXJjZSk7XG4gIH1cbiAgaWYgKHZhc3RVdGlsLmlzRmxhc2hTdXBwb3J0ZWQoKSAmJiB2ZXJpZmljYXRpb25KVHJlZS5mbGFzaFJlc291cmNlKSB7XG5cdCAgdGhpcy5qYXZhU2NyaXB0UmVzb3VyY2VzID0gcGFyc2VSZXNvdXJjZXModmVyaWZpY2F0aW9uSlRyZWUuamF2YVNjcmlwdFJlc291cmNlKTtcbiAgfVxuICBpZiAodmVyaWZpY2F0aW9uSlRyZWUudmlld2FibGVJbXByZXNzaW9uKSB7XG5cdCAgdGhpcy52aWV3YWJsZUltcHJlc3Npb24gPSB7aWQ6IHZlcmlmaWNhdGlvbkpUcmVlLnZpZXdhYmxlSW1wcmVzc2lvbi5hdHRyKCdpZCcpLCB1cmk6IHhtbC5rZXlWYWx1ZSh2ZXJpZmljYXRpb25KVHJlZS52aWV3YWJsZUltcHJlc3Npb24pfTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcGFyc2VSZXNvdXJjZXMocmVzb3VyY2VzKSB7XG5cdCAgdmFyIGFyciA9IFtdO1xuXHQgIHZhciBhcnJEYXRhO1xuXHQgIGlmIChyZXNvdXJjZXMpIHtcblx0XHQgIGFyckRhdGEgPSB1dGlsaXRpZXMuaXNBcnJheShyZXNvdXJjZXMpID8gcmVzb3VyY2VzIDogW3Jlc291cmNlc107XG5cdFx0ICBhcnJEYXRhLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdCAgYXJyLnB1c2goe2FwaUZyYW1ld29yazogZWxlbS5hdHRyKCdhcGlGcmFtZXdvcmsnKSwgdXJpOiB4bWwua2V5VmFsdWUoZWxlbSl9KTtcblx0XHQgIH0pO1xuXHQgIH1cblx0ICByZXR1cm4gYXJyO1xuICB9XG59XG5cblZlcmlmaWNhdGlvbi5wYXJzZUFkVmVyaWZpY2F0aW9ucyA9IGZ1bmN0aW9uIHBhcnNlQWRWZXJpZmljYXRpb25zKHZlcmlmaWNhdGlvbnNKVHJlZSkge1xuICB2YXIgdmVyaWZpY2F0aW9ucyA9IFtdO1xuICB2YXIgdmVyaWZpY2F0aW9uc0RhdGE7XG4gIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHZlcmlmaWNhdGlvbnNKVHJlZSkgJiYgdXRpbGl0aWVzLmlzRGVmaW5lZCh2ZXJpZmljYXRpb25zSlRyZWUudmVyaWZpY2F0aW9uKSkge1xuXHQgIHZlcmlmaWNhdGlvbnNEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkodmVyaWZpY2F0aW9uc0pUcmVlLnZlcmlmaWNhdGlvbikgPyB2ZXJpZmljYXRpb25zSlRyZWUudmVyaWZpY2F0aW9uIDogW3ZlcmlmaWNhdGlvbnNKVHJlZS52ZXJpZmljYXRpb25dO1xuXHQgIHZlcmlmaWNhdGlvbnNEYXRhLmZvckVhY2goZnVuY3Rpb24gKHZlcmlmaWNhdGlvbikge1xuICAgIFx0dmVyaWZpY2F0aW9ucy5wdXNoKG5ldyBWZXJpZmljYXRpb24odmVyaWZpY2F0aW9uKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHZlcmlmaWNhdGlvbnM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcmlmaWNhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gVmlkZW9DbGlja3ModmlkZW9DbGlja0pUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWaWRlb0NsaWNrcykpIHtcbiAgICByZXR1cm4gbmV3IFZpZGVvQ2xpY2tzKHZpZGVvQ2xpY2tKVHJlZSk7XG4gIH1cblxuICB0aGlzLmNsaWNrVGhyb3VnaCA9IHhtbC5rZXlWYWx1ZSh2aWRlb0NsaWNrSlRyZWUuY2xpY2tUaHJvdWdoKTtcbiAgdGhpcy5jbGlja1RyYWNraW5ncyA9IHBhcnNlQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja0pUcmVlLmNsaWNrVHJhY2tpbmcpO1xuICB0aGlzLmN1c3RvbUNsaWNrcyA9IHBhcnNlQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja0pUcmVlLmN1c3RvbUNsaWNrKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhcnNlQ2xpY2tUcmFja2luZ3ModHJhY2tpbmdEYXRhKSB7XG4gICAgdmFyIGNsaWNrVHJhY2tpbmdzID0gW107XG4gICAgaWYgKHRyYWNraW5nRGF0YSkge1xuICAgICAgdHJhY2tpbmdEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdEYXRhKSA/IHRyYWNraW5nRGF0YSA6IFt0cmFja2luZ0RhdGFdO1xuICAgICAgdHJhY2tpbmdEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNsaWNrVHJhY2tpbmdEYXRhKSB7XG4gICAgICAgIGNsaWNrVHJhY2tpbmdzLnB1c2goeG1sLmtleVZhbHVlKGNsaWNrVHJhY2tpbmdEYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsaWNrVHJhY2tpbmdzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlkZW9DbGlja3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBWaWV3YWJsZUltcHJlc3Npb24odmlld2FibGVJbXByZXNzaW9uSlRyZWUpIHtcblx0ICBpZighKHRoaXMgaW5zdGFuY2VvZiBWaWV3YWJsZUltcHJlc3Npb24pKSB7XG5cdCAgICByZXR1cm4gbmV3IFZpZXdhYmxlSW1wcmVzc2lvbih2aWV3YWJsZUltcHJlc3Npb25KVHJlZSk7XG5cdCAgfVxuXG5cdCAgLy9PcHRpb25hbCBGaWVsZHNcblx0ICB0aGlzLmlkID0gdmlld2FibGVJbXByZXNzaW9uSlRyZWUuYXR0cignaWQnKTtcblx0ICBpZiAodmlld2FibGVJbXByZXNzaW9uSlRyZWUudmlld2FibGUpIHtcblx0XHQgIHRoaXMudmlld2FibGVzID0gcGFyc2VVcmlBcnJheSh2aWV3YWJsZUltcHJlc3Npb25KVHJlZS52aWV3YWJsZSk7XG5cdCAgfVxuXHQgIGlmICh2aWV3YWJsZUltcHJlc3Npb25KVHJlZS5ub3RWaWV3YWJsZSkge1xuXHRcdCAgdGhpcy5ub3RWaWV3YWJsZXMgPSBwYXJzZVVyaUFycmF5KHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlLm5vdFZpZXdhYmxlKTtcblx0ICB9XG5cdCAgaWYgKHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlLnZpZXdVbmRldGVybWluZWQpIHtcblx0XHQgIHRoaXMudmlld1VuZGV0ZXJtaW5lZHMgPSBwYXJzZVVyaUFycmF5KHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlLnZpZXdVbmRldGVybWluZWQpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIHBhcnNlVXJpQXJyYXkoYXJySlRyZWUpIHtcblx0XHQgIHZhciBhcnIgPSBbXTtcblx0XHQgIHZhciBhcnJEYXRhO1xuXHRcdCAgaWYgKGFyckpUcmVlKSB7XG5cdFx0XHQgIGFyckRhdGEgPSB1dGlsaXRpZXMuaXNBcnJheShhcnJKVHJlZSkgPyBhcnJKVHJlZSA6IFthcnJKVHJlZV07XG5cdFx0XHQgIGFyckRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0XHQgIGFyci5wdXNoKHhtbC5rZXlWYWx1ZShlbGVtKSk7XG5cdFx0XHQgIH0pO1xuXHRcdCAgfVxuXHRcdCAgcmV0dXJuIGFycjtcblx0IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3YWJsZUltcHJlc3Npb247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcbnZhciBDcmVhdGl2ZSA9IHJlcXVpcmUoJy4vQ3JlYXRpdmUnKTtcbnZhciBWaWV3YWJsZUltcHJlc3Npb24gPSByZXF1aXJlKCcuL1ZpZXdhYmxlSW1wcmVzc2lvbicpO1xudmFyIFZlcmlmaWNhdGlvbiA9IHJlcXVpcmUoJy4vVmVyaWZpY2F0aW9uJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIFdyYXBwZXIod3JhcHBlckpUcmVlKSB7XG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFdyYXBwZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBXcmFwcGVyKHdyYXBwZXJKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIGVsZW1lbnRzXG4gIHRoaXMuYWRTeXN0ZW0gPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLmFkU3lzdGVtKTtcbiAgdGhpcy5pbXByZXNzaW9ucyA9IHZhc3RVdGlsLnBhcnNlSW1wcmVzc2lvbnMod3JhcHBlckpUcmVlLmltcHJlc3Npb24pO1xuICB0aGlzLlZBU1RBZFRhZ1VSSSA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUudkFTVEFkVGFnVVJJKTtcblxuICAvL09wdGlvbmFsIGVsZW1lbnRzXG4gIHRoaXMuY3JlYXRpdmVzID0gQ3JlYXRpdmUucGFyc2VDcmVhdGl2ZXMod3JhcHBlckpUcmVlLmNyZWF0aXZlcyk7XG4gIC8vdGhpcy5lcnJvciA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUuZXJyb3IpO1xuICB0aGlzLmVycm9ycyA9IHZhc3RVdGlsLnBhcnNlRXJyb3JzKHdyYXBwZXJKVHJlZS5lcnJvcik7XG4gIHRoaXMuZXh0ZW5zaW9ucyA9IHdyYXBwZXJKVHJlZS5leHRlbnNpb25zO1xuXG4gIC8vT3B0aW9uYWwgYXR0cnNcbiAgdGhpcy5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMgPSB1dGlsaXRpZXMuaXNEZWZpbmVkKHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycycpKT8geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzJyk6IHRydWU7XG4gIHRoaXMuYWxsb3dNdWx0aXBsZUFkcyA9IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2FsbG93TXVsdGlwbGVBZHMnKTtcbiAgdGhpcy5mYWxsYmFja09uTm9BZCA9IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZhbGxiYWNrT25Ob0FkJyk7XG5cbiAgaWYgKHdpbmRvdy5tb2xfdmFzdFZlcnNpb24gPT09IDQpIHtcblx0ICBpZiAod3JhcHBlckpUcmVlLnZpZXdhYmxlSW1wcmVzc2lvbikge1xuXHRcdCAgdGhpcy52aWV3YWJsZUltcHJlc3Npb24gPSBuZXcgVmlld2FibGVJbXByZXNzaW9uKHdyYXBwZXJKVHJlZS52aWV3YWJsZUltcHJlc3Npb24pO1xuXHQgIH1cblx0ICBpZiAod3JhcHBlckpUcmVlLmFkVmVyaWZpY2F0aW9ucykge1xuXHRcdCAgdGhpcy5hZFZlcmlmaWNhdGlvbnMgPSBWZXJpZmljYXRpb24ucGFyc2VBZFZlcmlmaWNhdGlvbnMod3JhcHBlckpUcmVlLmFkVmVyaWZpY2F0aW9ucyk7XG5cdCAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV3JhcHBlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGR1cmF0aW9uUmVnZXggPSAvKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkoXFwuKFxcZFxcZFxcZCkpPy87XG5cbnZhciBwYXJzZXJzID0ge1xuXG4gIGR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XG5cbiAgICB2YXIgbWF0Y2gsIGR1cmF0aW9uSW5NcztcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoZHVyYXRpb25TdHIpKSB7XG4gICAgICBtYXRjaCA9IGR1cmF0aW9uU3RyLm1hdGNoKGR1cmF0aW9uUmVnZXgpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGR1cmF0aW9uSW5NcyA9IHBhcnNlSG91cnNUb01zKG1hdGNoWzFdKSArIHBhcnNlTWluVG9NcyhtYXRjaFsyXSkgKyBwYXJzZVNlY1RvTXMobWF0Y2hbM10pICsgcGFyc2VJbnQobWF0Y2hbNV0gfHwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmFOKGR1cmF0aW9uSW5NcykgPyBudWxsIDogZHVyYXRpb25Jbk1zO1xuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHBhcnNlSG91cnNUb01zKGhvdXJTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQobWluU3RyLCAxMCkgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTZWNUb01zKHNlY1N0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlY1N0ciwgMTApICogMTAwMDtcbiAgICB9XG4gIH0sXG5cbiAgb2Zmc2V0OiBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgaWYoaXNQZXJjZW50YWdlKG9mZnNldCkpe1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZXJzLmR1cmF0aW9uKG9mZnNldCk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XG4gICAgICBpZihkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FsY1BlcmNlbnQoZHVyYXRpb24sIHBhcnNlRmxvYXQocGVyY2VudFN0ci5yZXBsYWNlKCclJywgJycpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjUGVyY2VudChxdWFudGl0eSwgcGVyY2VudCl7XG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgVlBBSURIVE1MNVRlY2ggPSByZXF1aXJlKCcuLi92cGFpZC9WUEFJREhUTUw1VGVjaCcpO1xuXG52YXIgdmFzdFV0aWwgPSB7XG5cbiAgdHJhY2s6IGZ1bmN0aW9uIHRyYWNrKFVSTE1hY3JvcywgdmFyaWFibGVzKSB7XG4gICAgdmFyIHNvdXJjZXMgPSB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvcyhVUkxNYWNyb3MsIHZhcmlhYmxlcyk7XG4gICAgdmFyIHRyYWNrSW1ncyA9IFtdO1xuICAgIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc3JjKSB7XG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgdHJhY2tJbWdzLnB1c2goaW1nKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhY2tJbWdzO1xuICB9LFxuXG4gIHBhcnNlVVJMTWFjcm9zOiBmdW5jdGlvbiBwYXJzZU1hY3JvcyhVUkxNYWNyb3MsIHZhcmlhYmxlcykge1xuICAgIHZhciBwYXJzZWRVUkxzID0gW107XG5cbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XG5cbiAgICBpZiAoISh2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0pKSB7XG4gICAgICB2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjBlKzEwKTtcbiAgICB9XG5cbiAgICBVUkxNYWNyb3MuZm9yRWFjaChmdW5jdGlvbiAoVVJMTWFjcm8pIHtcbiAgICAgIHBhcnNlZFVSTHMucHVzaCh2YXN0VXRpbC5fcGFyc2VVUkxNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VkVVJMcztcbiAgfSxcblxuICBwYXJzZVVSTE1hY3JvOiBmdW5jdGlvbiBwYXJzZU1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpIHtcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XG5cbiAgICBpZiAoISh2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0pKSB7XG4gICAgICB2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjBlKzEwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFzdFV0aWwuX3BhcnNlVVJMTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcyk7XG4gIH0sXG5cbiAgX3BhcnNlVVJMTWFjcm86IGZ1bmN0aW9uIHBhcnNlTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykge1xuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcblxuICAgIHV0aWxpdGllcy5mb3JFYWNoKHZhcmlhYmxlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIFVSTE1hY3JvID0gVVJMTWFjcm8ucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFtcIiArIGtleSArIFwiXFxcXFxcXVwiLCAnZ20nKSwgdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFVSTE1hY3JvO1xuICB9LFxuXG4gIHBhcnNlRHVyYXRpb246IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb25TdHIpIHtcbiAgICB2YXIgZHVyYXRpb25SZWdleCA9IC8oXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKShcXC4oXFxkXFxkXFxkKSk/LztcbiAgICB2YXIgbWF0Y2gsIGR1cmF0aW9uSW5NcztcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoZHVyYXRpb25TdHIpKSB7XG4gICAgICBtYXRjaCA9IGR1cmF0aW9uU3RyLm1hdGNoKGR1cmF0aW9uUmVnZXgpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGR1cmF0aW9uSW5NcyA9IHBhcnNlSG91cnNUb01zKG1hdGNoWzFdKSArIHBhcnNlTWluVG9NcyhtYXRjaFsyXSkgKyBwYXJzZVNlY1RvTXMobWF0Y2hbM10pICsgcGFyc2VJbnQobWF0Y2hbNV0gfHwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmFOKGR1cmF0aW9uSW5NcykgPyBudWxsIDogZHVyYXRpb25Jbk1zO1xuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHBhcnNlSG91cnNUb01zKGhvdXJTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQobWluU3RyLCAxMCkgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTZWNUb01zKHNlY1N0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlY1N0ciwgMTApICogMTAwMDtcbiAgICB9XG4gIH0sXG5cbiAgcGFyc2VJbXByZXNzaW9uczogZnVuY3Rpb24gcGFyc2VJbXByZXNzaW9ucyhpbXByZXNzaW9ucykge1xuXHQgICAgaWYgKGltcHJlc3Npb25zKSB7XG5cdCAgICAgIGltcHJlc3Npb25zID0gdXRpbGl0aWVzLmlzQXJyYXkoaW1wcmVzc2lvbnMpID8gaW1wcmVzc2lvbnMgOiBbaW1wcmVzc2lvbnNdO1xuXHQgICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KGltcHJlc3Npb25zLCBmdW5jdGlvbiAoaW1wcmVzc2lvbikge1xuXHQgICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhpbXByZXNzaW9uLmtleVZhbHVlKSkge1xuXHQgICAgICAgICAgcmV0dXJuIGltcHJlc3Npb24ua2V5VmFsdWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFtdO1xuXHQgIH0sXG5cblx0ICBwYXJzZUVycm9yczogZnVuY3Rpb24gcGFyc2VFcnJvcnMoZXJyb3JzKSB7XG5cdCAgICBpZiAoZXJyb3JzKSB7XG5cdCAgICBcdGVycm9ycyA9IHV0aWxpdGllcy5pc0FycmF5KGVycm9ycykgPyBlcnJvcnMgOiBbZXJyb3JzXTtcblx0ICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheShlcnJvcnMsIGZ1bmN0aW9uIChlcnJvcikge1xuXHQgICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhlcnJvci5rZXlWYWx1ZSkpIHtcblx0ICAgICAgICAgIHJldHVybiBlcnJvci5rZXlWYWx1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gW107XG5cdCAgfSxcblxuICAvL1dlIGFzc3VtZSB0aGF0IHRoZSBwcm9ncmVzcyBpcyBnb2luZyB0byBhcnJpdmUgaW4gbWlsbGlzZWNvbmRzXG4gIGZvcm1hdFByb2dyZXNzOiBmdW5jdGlvbiBmb3JtYXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIHZhciBob3VycywgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzO1xuICAgIGhvdXJzID0gcHJvZ3Jlc3MgLyAoNjAgKiA2MCAqIDEwMDApO1xuICAgIGhvdXJzID0gTWF0aC5mbG9vcihob3Vycyk7XG4gICAgbWludXRlcyA9IChwcm9ncmVzcyAvICg2MCAqIDEwMDApKSAlIDYwO1xuICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1pbnV0ZXMpO1xuICAgIHNlY29uZHMgPSAocHJvZ3Jlc3MgLyAxMDAwKSAlIDYwO1xuICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKHNlY29uZHMpO1xuICAgIG1pbGxpc2Vjb25kcyA9IHByb2dyZXNzICUgMTAwMDtcbiAgICByZXR1cm4gdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMoaG91cnMsIDIpICsgJzonICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWludXRlcywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhzZWNvbmRzLCAyKSArICcuJyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKG1pbGxpc2Vjb25kcywgMyk7XG4gIH0sXG5cbiAgcGFyc2VPZmZzZXQ6IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICBpZiAoaXNQZXJjZW50YWdlKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdmFzdFV0aWwucGFyc2VEdXJhdGlvbihvZmZzZXQpO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKG9mZnNldCkge1xuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xuICAgICAgcmV0dXJuIHBlcmNlbnRhZ2VSZWdleC50ZXN0KG9mZnNldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGVyY2VudGFnZShwZXJjZW50U3RyLCBkdXJhdGlvbikge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYWxjUGVyY2VudChkdXJhdGlvbiwgcGFyc2VGbG9hdChwZXJjZW50U3RyLnJlcGxhY2UoJyUnLCAnJykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KHF1YW50aXR5LCBwZXJjZW50KSB7XG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xuICAgIH1cbiAgfSxcblxuXG4gIC8vTGlzdCBvZiBzdXBwb3J0ZWQgVlBBSUQgdGVjaG5vbG9naWVzXG4gIFZQQUlEX3RlY2hzOiBbXG4gICAgLy9WUEFJREZsYXNoVGVjaCxcbiAgICBWUEFJREhUTUw1VGVjaFxuICBdLFxuXG4gIGlzVlBBSUQ6IGZ1bmN0aW9uIGlzVlBBSURNZWRpYUZpbGUobWVkaWFGaWxlKSB7XG4gICAgcmV0dXJuICEhbWVkaWFGaWxlICYmIG1lZGlhRmlsZS5hcGlGcmFtZXdvcmsgPT09ICdWUEFJRCc7XG4gIH0sXG5cbiAgZmluZFN1cHBvcnRlZFZQQUlEVGVjaDogZnVuY3Rpb24gZmluZFN1cHBvcnRlZFZQQUlEVGVjaChtaW1lVHlwZSkge1xuICAgIHZhciBpLCBsZW4sIFZQQUlEVGVjaDtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuVlBBSURfdGVjaHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIFZQQUlEVGVjaCA9IHRoaXMuVlBBSURfdGVjaHNbaV07XG4gICAgICBpZiAoVlBBSURUZWNoLnN1cHBvcnRzKG1pbWVUeXBlKSkge1xuICAgICAgICByZXR1cm4gVlBBSURUZWNoO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICBpc0ZsYXNoU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0ZsYXNoU3VwcG9ydGVkKCkge1xuXHQgIHJldHVybiBmYWxzZTtcbiAgfSxcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YXN0VXRpbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxuZnVuY3Rpb24gVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREFkVW5pdFdyYXBwZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpO1xuICB9XG4gIHNhbml0eUNoZWNrKHZwYWlkQWRVbml0LCBvcHRzKTtcblxuICB0aGlzLm9wdGlvbnMgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRzKTtcbiAgdGhpcy5hZFN0YXJ0ZWQgPSBmYWxzZTtcblxuICB0aGlzLl9hZFVuaXQgPSB2cGFpZEFkVW5pdDtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGFkVW5pdCwgb3B0cykge1xuICAgIGlmICghYWRVbml0IHx8ICFWUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZShhZFVuaXQpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRoZSBwYXNzZWQgVlBBSUQgYWRVbml0IGRvZXMgbm90IGZ1bGx5IGltcGxlbWVudCB0aGUgVlBBSUQgaW50ZXJmYWNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNPYmplY3Qob3B0cykpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIG9wdGlvbnMgaGFzaCAgYnV0IGdvdCAnXCIgKyBvcHRzICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmICghKFwicmVzcG9uc2VUaW1lb3V0XCIgaW4gb3B0cykgfHwgIXV0aWxpdGllcy5pc051bWJlcihvcHRzLnJlc3BvbnNlVGltZW91dCkgKXtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIHJlc3BvbnNlVGltZW91dCBpbiBvcHRpb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5WUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZSA9IGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UoVlBBSURBZFVuaXQpIHtcbiAgLy9OT1RFOiBza2lwQWQgaXMgbm90IHBhcnQgb2YgdGhlIG1ldGhvZCBsaXN0IGJlY2F1c2UgaXQgb25seSBhcHBlYXJzIGluIFZQQUlEIDIuMCBhbmQgd2Ugc3VwcG9ydCBWUEFJRCAxLjBcbiAgdmFyIFZQQUlESW50ZXJmYWNlTWV0aG9kcyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsICdpbml0QWQnLCAnc3RhcnRBZCcsICdzdG9wQWQnLCAncmVzaXplQWQnLCAncGF1c2VBZCcsICdleHBhbmRBZCcsICdjb2xsYXBzZUFkJ1xuICBdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBWUEFJREludGVyZmFjZU1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIVZQQUlEQWRVbml0IHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihWUEFJREFkVW5pdFtWUEFJREludGVyZmFjZU1ldGhvZHNbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIGNhblN1YnNjcmliZVRvRXZlbnRzKFZQQUlEQWRVbml0KSAmJiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoVlBBSURBZFVuaXQpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjYW5TdWJzY3JpYmVUb0V2ZW50cyhhZFVuaXQpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vbik7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoYWRVbml0KSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC51bnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vZmYpO1xuXG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuYWRVbml0QXN5bmNDYWxsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gIHZhciBtZXRob2QgPSBhcmdzLnNoaWZ0KCk7XG4gIHZhciBjYiA9IGFyZ3MucG9wKCk7XG4gIHZhciB0aW1lb3V0SWQ7XG5cbiAgc2FuaXR5Q2hlY2sobWV0aG9kLCBjYiwgdGhpcy5fYWRVbml0KTtcbiAgYXJncy5wdXNoKHdyYXBDYWxsYmFjaygpKTtcblxuICB0aGlzLl9hZFVuaXRbbWV0aG9kXS5hcHBseSh0aGlzLl9hZFVuaXQsIGFyZ3MpO1xuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgYSByZXNwb25zZSBvbiBjYWxsICdcIiArIG1ldGhvZCArIFwiJ1wiKSk7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCBhZFVuaXQpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhtZXRob2QpIHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXRbbWV0aG9kXSkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBpbnZhbGlkIG1ldGhvZCBuYW1lXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLmFkVW5pdEFzeW5jQ2FsbCwgbWlzc2luZyBjYWxsYmFja1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xuICB2YXIgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5hZGRFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9uO1xuICBhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGV2dE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLl9hZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCB0aGlzLl9hZFVuaXQudW5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9mZjtcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMuX2FkVW5pdCwgZXZ0TmFtZSwgaGFuZGxlcik7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLndhaXRGb3JFdmVudCA9IGZ1bmN0aW9uIChldnROYW1lLCBjYiwgY29udGV4dCkge1xuXHQgIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHRpbWVvdXRJZDtcbiAgc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpO1xuICBjb250ZXh0ID0gY29udGV4dCB8fCBudWxsO1xuXG4gIHRoaXMub24oZXZ0TmFtZSwgcmVzcG9uc2VMaXN0ZW5lcik7XG5cbiAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgdGhhdC5vZmYoZXZ0TmFtZSwgcmVzcG9uc2VMaXN0ZW5lcik7XG5cdFx0Ly8gaWdub3JlIGV2ZW50cyBpZiBhZCBpcyBmaW5pc2hlZFxuXHRcdGlmICh3aW5kb3cuX3RpbWVvdXRJZHMuaW5kZXhPZih0aW1lb3V0SWQpID49IDApIHtcbiAgICAgIGlmICh0aGF0Lm9wdGlvbnMgJiYgdGhhdC5vcHRpb25zLnBsYXllcikge1xuICAgICAgICB0aGF0Lm9wdGlvbnMucGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5tZXNzYWdlJywgZGF0YToge21lc3NhZ2U6ICdUaW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGV2ZW50ICcgKyBldnROYW1lfX0pO1xuICAgICAgfVxuXHRcdFx0Y2IobmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgZXZlbnQgJ1wiICsgZXZ0TmFtZSArIFwiJy4gWW91IG1heSBuZWVkIHRvIGluY3JlYXNlIGFkU3RhcnRUaW1lb3V0LlwiKSk7XG5cdFx0fVxuICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLy8gRU5cbiAgd2luZG93Ll90aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGV2dE5hbWUsIGNiKSB7XG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoZXZ0TmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGV2dCBuYW1lXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgbWlzc2luZyBjYWxsYmFja1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNwb25zZUxpc3RlbmVyKCkge1xuICAgIGlmICh0aGF0Lm9wdGlvbnMgJiYgdGhhdC5vcHRpb25zLnBsYXllcikge1xuICAgICAgdGhhdC5vcHRpb25zLnBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6IGV2dE5hbWV9fSk7XG4gICAgfVxuXHQgIHRoYXQub2ZmKGV2dE5hbWUsIHJlc3BvbnNlTGlzdGVuZXIpO1xuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcblxuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgdGltZW91dElkID0gbnVsbDtcbiAgICB9XG5cbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XG4gICAgY2IuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH1cbn07XG5cbi8vIFZQQUlEIE1FVEhPRFNcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uICh2ZXJzaW9uLCBjYikge1xuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgnaGFuZHNoYWtlVmVyc2lvbicsIHZlcnNpb24sIGNiKTtcbn07XG5cbi8qIGpzaGludCBtYXhwYXJhbXM6NiAqL1xuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhLCBjYikge1xuXHRsb2dnZXIubG9nKCdWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgaW5pdEFkIG9uIGNyZWF0aXZlJyk7XG5cdHRoaXMud2FpdEZvckV2ZW50KCdBZExvYWRlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGFkVW5pdERhdGEpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXNpemVBZCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpIHtcbiAgLy8gTk9URTogQWRTaXplQ2hhbmdlIGV2ZW50IGlzIG9ubHkgc3VwcG9ydGVkIG9uIFZQQUlEIDIuMCBzbyBmb3IgdGhlIG1vbWVudCB3ZSBhcmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuICAvLyBhbmQgd2lsbCBhc3N1bWUgdGhhdCBldmVyeXRoaW5nIGlzIGZpbmUgYWZ0ZXIgdGhlIGFzeW5jIGNhbGxcblx0bG9nZ2VyLmxvZygnVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHJlc2l6ZUFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdyZXNpemVBZCcsIHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYik7XG4gIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFNpemVDaGFuZ2UnLCBhZFZvbHVtZTogdGhpcy5vcHRpb25zLnBsYXllci52b2x1bWUoKX0pO1xuICB9XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbiAoY2IpIHtcblx0bG9nZ2VyLmxvZygnVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHN0YXJ0QWQgb24gY3JlYXRpdmUnKTtcblx0aWYgKCF0aGlzLmFkU3RhcnRlZCkge1xuXHRcdHRoaXMud2FpdEZvckV2ZW50KCdBZFN0YXJ0ZWQnLCBjYik7XG5cdH1cbiAgdGhpcy5fYWRVbml0LnN0YXJ0QWQoKTtcbiAgaWYgKHRoaXMuYWRTdGFydGVkKSB7XG4gICAgY2IobnVsbCk7XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RvcEFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGxvZ2dlci5sb2coJ1ZQQUlEQWRVbml0V3JhcHBlci0+Q2FsbGluZyBzdG9wQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU3RvcHBlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnN0b3BBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGxvZ2dlci5sb2coJ1ZQQUlEQWRVbml0V3JhcHBlci0+Q2FsbGluZyBwYXVzZUFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBhdXNlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnBhdXNlQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucmVzdW1lQWQgPSBmdW5jdGlvbiAoY2IpIHtcblx0bG9nZ2VyLmxvZygnVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHJlc3VtZUFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBsYXlpbmcnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5yZXN1bWVBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRsb2dnZXIubG9nKCdWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgZXhwYW5kQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5leHBhbmRBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGxvZ2dlci5sb2coJ1ZQQUlEQWRVbml0V3JhcHBlci0+Q2FsbGluZyBjb2xsYXBzZUFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZEV4cGFuZGVkQ2hhbmdlJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuY29sbGFwc2VBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbiAoY2IpIHtcblx0bG9nZ2VyLmxvZygnVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHNraXBBZCBvbiBjcmVhdGl2ZScpO1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTa2lwcGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuc2tpcEFkKCk7XG59O1xuXG4vL1ZQQUlEIHByb3BlcnR5IGdldHRlcnNcbltcbiAgJ2FkTGluZWFyJyxcbiAgJ2FkV2lkdGgnLFxuICAnYWRIZWlnaHQnLFxuICAnYWRFeHBhbmRlZCcsXG4gICdhZFNraXBwYWJsZVN0YXRlJyxcbiAgJ2FkUmVtYWluaW5nVGltZScsXG4gICdhZER1cmF0aW9uJyxcbiAgJ2FkVm9sdW1lJyxcbiAgJ2FkQ29tcGFuaW9ucycsXG4gICdhZEljb25zJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICB2YXIgZ2V0dGVyTmFtZSA9ICdnZXQnICsgdXRpbGl0aWVzLmNhcGl0YWxpemUocHJvcGVydHkpO1xuXG4gIFZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGVbZ2V0dGVyTmFtZV0gPSBmdW5jdGlvbiAoY2IpIHtcbiAgICB0aGlzLmFkVW5pdEFzeW5jQ2FsbChnZXR0ZXJOYW1lLCBjYik7XG4gIH07XG59KTtcblxuLy9WUEFJRCBwcm9wZXJ0eSBzZXR0ZXJzXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYil7XG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdzZXRBZFZvbHVtZScsdm9sdW1lLCBjYik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0V3JhcHBlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1pbWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL21pbWV0eXBlcycpO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIFZQQUlESFRNTDVDbGllbnQgPSByZXF1aXJlKCdWUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZQQUlESFRNTDVUZWNoKG1lZGlhRmlsZSkge1xuXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlESFRNTDVUZWNoKSkge1xuICAgIHJldHVybiBuZXcgVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKTtcbiAgfVxuXG4gIHNhbml0eUNoZWNrKG1lZGlhRmlsZSk7XG5cbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWh0bWw1JztcbiAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XG4gIHRoaXMudmlkZW9FbCA9IG51bGw7XG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcblxuICB0aGlzLm1lZGlhRmlsZSA9IG1lZGlhRmlsZTtcblxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcbiAgICAgIGlmICghbWVkaWFGaWxlIHx8ICF1dGlsaXRpZXMuaXNTdHJpbmcobWVkaWFGaWxlLnNyYykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUpO1xuICAgICAgfVxuICB9XG59XG5cblZQQUlESFRNTDVUZWNoLlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xuXG5WUEFJREhUTUw1VGVjaC5zdXBwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiAhdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBNaW1lVHlwZXMuaHRtbDUuaW5kZXhPZih0eXBlKSA+IC0xO1xufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjaykge1xuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spO1xuXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjb250YWluZXJFbDtcbiAgdGhpcy52aWRlb0VsID0gdmlkZW9FbDtcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBuZXcgVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudChjb250YWluZXJFbCwgdmlkZW9FbCwge30pO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudC5sb2FkQWRVbml0KHRoaXMubWVkaWFGaWxlLnNyYywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGNvbnRhaW5lciwgdmlkZW8sIGNiKSB7XG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KGNvbnRhaW5lcikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQodmlkZW8pIHx8IHZpZGVvLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ZpZGVvJykge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0spO1xuICAgIH1cbiAgfVxufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIHVubG9hZEFkVW5pdCgpIHtcbiAgaWYgKHRoaXMudnBhaWRIVE1MQ2xpZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50LmRlc3Ryb3koKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGxvZ2dlci5lcnJvciAoJ1ZBU1QgRVJST1I6IHRyeWluZyB0byB1bmxvYWQgdGhlIFZQQUlEIGFkdW5pdCcpO1xuICAgIH1cblxuICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbnRhaW5lckVsKSB7XG4gICAgZG9tLnJlbW92ZSh0aGlzLmNvbnRhaW5lckVsKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcbiAgfVxufTtcblxudmFyIFBSRUZJWCA9ICdvbiBWUEFJREhUTUw1VGVjaCc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUgPSBQUkVGSVggKyAnLCBpbnZhbGlkIE1lZGlhRmlsZSc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwgPSBQUkVGSVggKyAnLCBpbnZhbGlkIGNvbnRhaW5lciBIdG1sRWxlbWVudCc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9WSURFT19FTCA9IFBSRUZJWCArICcsIGludmFsaWQgSFRNTFZpZGVvRWxlbWVudCc7XG5WUEFJREhUTUw1VGVjaC5NSVNTSU5HX0NBTExCQUNLID0gUFJFRklYICsgJywgbWlzc2luZyB2YWxpZCBjYWxsYmFjayc7XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNVRlY2g7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9taW1ldHlwZXMnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFJlc3BvbnNlJyk7XG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RUcmFja2VyJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi92YXN0L3Zhc3RVdGlsJyk7XG5cbnZhciBWUEFJREFkVW5pdFdyYXBwZXIgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0V3JhcHBlcicpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVlBBSURJbnRlZ3JhdG9yKSkge1xuICAgIHJldHVybiBuZXcgVlBBSURJbnRlZ3JhdG9yKHBsYXllcik7XG4gIH1cblxuICB0aGlzLlZJRVdfTU9ERSA9IHtcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxuICAgIEZVTExTQ1JFRU46IFwiZnVsbHNjcmVlblwiLFxuICAgIFRIVU1CTkFJTDogXCJ0aHVtYm5haWxcIlxuICB9O1xuICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgdGhpcy5jb250YWluZXJFbCA9IGNyZWF0ZVZQQUlEQ29udGFpbmVyRWwocGxheWVyKTtcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIHJlc3BvbnNlVGltZW91dDogNTAwMCxcbiAgICBWUEFJRF9WRVJTSU9OOiAnMi4wJ1xuICB9O1xuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIFxuICB0aGlzLmNvbnRlbnRTb3VyY2UgPSBwbGF5ZXIudGVjaF8uZWxfLnNyYztcbiAgdGhpcy5uZWVkc1Nob3dQbGF5ZXIgPSBmYWxzZTtcbiAgXG4gIHRoaXMuZXJyb3JIYXNCZWVuVHJhY2tlZCA9IGZhbHNlO1xuICB0aGlzLmFkRmluaXNoZWQgPSBmYWxzZTtcbiAgXG4gIHRoaXMudGltZVVwZGF0ZVRpbWVyID0gbnVsbDtcbiAgXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjcmVhdGVWUEFJRENvbnRhaW5lckVsKCkge1xuICAgIHZhciBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckVsLmlkID0gJ0JDLVZQQUlELWNvbnRhaW5lcic7XG4gICAgZG9tLmFkZENsYXNzKGNvbnRhaW5lckVsLCAnVlBBSUQtY29udGFpbmVyJyk7XG4gICAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lckVsLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcbiAgICByZXR1cm4gY29udGFpbmVyRWw7XG4gIH1cbn1cblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5VlBhaWRBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVEludGVncmF0b3IucGxheUFkLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1RSZXNwb25zZScpKTtcbiAgfVxuXG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICBsb2dnZXIuZGVidWcgKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGxvb2tpbmcgZm9yIHN1cHBvcnRlZCB0ZWNoLi4uXCIpO1xuICB2YXIgdGVjaCA9IHRoaXMuX2ZpbmRTdXBwb3J0ZWRUZWNoKHZhc3RSZXNwb25zZSwgdGhpcy5zZXR0aW5ncyk7XG5cbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcblxuICB0aGlzLl9hZFVuaXQgPSBudWxsO1xuXG4gIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12cGFpZC1hZCcpO1xuICBcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHRyaWdnZXJWcGFpZEFkRW5kKTtcbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpe1xuICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgdHJpZ2dlclZwYWlkQWRFbmQpO1xuICAgIHJlbW92ZUFkVW5pdCgpO1xuICB9KTtcblxuICBpZiAodGVjaCkge1xuICAgIGxvZ2dlci5pbmZvIChcIjxWUEFJREludGVncmF0b3IucGxheUFkPiBmb3VuZCB0ZWNoOiBcIiwgdGVjaCk7XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgbmV4dChudWxsLCB0ZWNoLCB2YXN0UmVzcG9uc2UpO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2xvYWRBZFVuaXQuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuX3BsYXlBZFVuaXQuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuX2ZpbmlzaFBsYXlpbmcuYmluZCh0aGlzKVxuXG4gICAgXSwgYWRDb21wbGV0ZSk7XG5cbiAgICB0aGlzLl9hZFVuaXQgPSB7XG4gICAgICBfcGF1c2VkOiB0cnVlLFxuICAgICAgdHlwZTogJ1ZQQUlEJyxcbiAgICAgIHBhdXNlQWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQucGF1c2VBZCcpO1xuICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7Ly93ZSBtYWtlIHN1cmUgdGhhdCB0aGUgdmlkZW8gY29udGVudCBnZXRzIHN0b3BwZWQuXG4gICAgICB9LFxuICAgICAgcmVzdW1lQWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5yZXN1bWVBZCcpO1xuICAgICAgfSxcbiAgICAgIGlzUGF1c2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgICAgIH0sXG4gICAgICBnZXRTcmM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGVjaC5tZWRpYUZpbGU7XG4gICAgICB9XG4gICAgfTtcblxuICB9IGVsc2Uge1xuICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VlBBSURJbnRlZ3JhdG9yLnBsYXlBZD4gY291bGQgbm90IGZpbmQgc3VpdGFibGUgdGVjaFwiKTtcbiAgICB2YXIgZXJyb3IgPSBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREludGVncmF0b3IucGxheUFkLCBjb3VsZCBub3QgZmluZCBhIHN1cHBvcnRlZCBtZWRpYUZpbGUnLCA0MDMpO1xuICAgIGFkQ29tcGxldGUoZXJyb3IsIHRoaXMuX2FkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9hZFVuaXQ7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBhZENvbXBsZXRlKGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSkge1xuICAgIGlmIChlcnJvciAmJiB2YXN0UmVzcG9uc2UpIHtcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IodmFzdFJlc3BvbnNlLCBlcnJvci5jb2RlKTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XG4gICAgY2FsbGJhY2soZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyVnBhaWRBZEVuZCgpe1xuXHQgICAgLy9wbGF5ZXIudHJpZ2dlcignc3RvcEFkJyk7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XG4gICAgaWYgKHRlY2gpIHtcbiAgICAgIGxvZ2dlci5sb2coJ1ZQQUlESW50ZWdyYXRvci0+Q2FsbGluZyB1bmxvYWRBZFVuaXQgKGltcGxpY2l0bHkgaW52b2tlcyBzdG9wQWQgYW5kIHVuc3Vic2NyaWJlcyBWUEFJRCBldmVudHMpJyk7XG4gICAgICB0ZWNoLnVubG9hZEFkVW5pdCgpO1xuICAgIH1cbiAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluZFN1cHBvcnRlZFRlY2ggPSBmdW5jdGlvbiAodmFzdFJlc3BvbnNlLCBzZXR0aW5ncykge1xuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdnBhaWRNZWRpYUZpbGVzID0gdmFzdFJlc3BvbnNlLm1lZGlhRmlsZXMuZmlsdGVyKHZhc3RVdGlsLmlzVlBBSUQpO1xuICB2YXIgcHJlZmVycmVkVGVjaCA9IHNldHRpbmdzICYmIHNldHRpbmdzLnByZWZlcnJlZFRlY2g7XG4gIHZhciBza2lwcGVkU3VwcG9ydFRlY2hzID0gW107XG4gIHZhciBpLCBsZW4sIG1lZGlhRmlsZSwgVlBBSURUZWNoLCBpc1ByZWZlcmVkVGVjaDtcblxuICBmb3IgKGkgPSAwLCBsZW4gPSB2cGFpZE1lZGlhRmlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtZWRpYUZpbGUgPSB2cGFpZE1lZGlhRmlsZXNbaV07XG4gICAgVlBBSURUZWNoID0gdmFzdFV0aWwuZmluZFN1cHBvcnRlZFZQQUlEVGVjaChtZWRpYUZpbGUudHlwZSk7XG5cbiAgICAvLyBubyBzdXBwb3J0ZWQgVlBBSUQgdGVjaCBmb3VuZCwgc2tpcCBtZWRpYWZpbGVcbiAgICBpZiAoIVZQQUlEVGVjaCkgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gZG8gd2UgaGF2ZSBhIHByZWZlcmVkIHRlY2gsIGRvZXMgaXQgcGxheSB0aGlzIG1lZGlhIGZpbGUgP1xuICAgIGlzUHJlZmVyZWRUZWNoID0gcHJlZmVycmVkVGVjaCA/XG4gICAgICAobWVkaWFGaWxlLnR5cGUgPT09IHByZWZlcnJlZFRlY2ggfHwgKE1pbWVUeXBlc1twcmVmZXJyZWRUZWNoXSAmJiBNaW1lVHlwZXNbcHJlZmVycmVkVGVjaF0uaW5kZXhPZihtZWRpYUZpbGUudHlwZSkgPiAtMSApKSA6XG4gICAgICBmYWxzZTtcblxuICAgIC8vIG91ciBwcmVmZXJlZCB0ZWNoIGNhbiByZWFkIHRoaXMgbWVkaWFmaWxlLCBkZWZhdWx0aW5nIHRvIGl0LlxuICAgIGlmIChpc1ByZWZlcmVkVGVjaCkge1xuICAgICAgcmV0dXJuIG5ldyBWUEFJRFRlY2gobWVkaWFGaWxlLCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgc2tpcHBlZFN1cHBvcnRUZWNocy5wdXNoKHsgbWVkaWFGaWxlOiBtZWRpYUZpbGUsIHRlY2g6IFZQQUlEVGVjaCB9KTtcbiAgfVxuXG4gIGlmIChza2lwcGVkU3VwcG9ydFRlY2hzLmxlbmd0aCkge1xuICAgIHZhciBmaXJzdFRlY2ggPSBza2lwcGVkU3VwcG9ydFRlY2hzWzBdO1xuICAgIHJldHVybiBuZXcgZmlyc3RUZWNoLnRlY2goZmlyc3RUZWNoLm1lZGlhRmlsZSwgc2V0dGluZ3MpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIgPSBmdW5jdGlvbihhZFVuaXQsIHNyYywgcmVzcG9uc2VUaW1lb3V0LCBwbGF5ZXIpIHtcblx0cmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB7c3JjOiBzcmMsIHJlc3BvbnNlVGltZW91dDogcmVzcG9uc2VUaW1lb3V0LCBwbGF5ZXI6IHBsYXllcn0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbG9hZEFkVW5pdCA9IGZ1bmN0aW9uICh0ZWNoLCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB2anNUZWNoRWwgPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgLy92YXIgcmVzcG9uc2VUaW1lb3V0ID0gdGhpcy5zZXR0aW5ncy5yZXNwb25zZVRpbWVvdXQgfHwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dDtcbiAgdmFyIHJlc3BvbnNlVGltZW91dCA9IHRoaXMuc2V0dGluZ3MuYWRDYW5jZWxUaW1lb3V0IHx8IHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQ7XG4gIHRlY2gubG9hZEFkVW5pdCh0aGlzLmNvbnRhaW5lckVsLCB2anNUZWNoRWwsIGZ1bmN0aW9uIChlcnJvciwgYWRVbml0KSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB2YXIgZnJtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJRlJBTUUnKTtcbiAgICAgIGlmIChmcm1zICYmIGZybXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmcm1zWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vbG9nZ2VyLmxvZyhcIioqKioqKiB1c2VyIGFjdGl2aXR5XCIpO1xuICAgICAgICAgICAgcGxheWVyLnVzZXJBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIWRvbS5oYXNDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1oYXMtc3RhcnRlZCcpKSB7XG4gICAgICAgICAgICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLWhhcy1zdGFydGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5tZXNzYWdlJywgZGF0YToge21lc3NhZ2U6ICdQbGF5aW5nICcgKyB0ZWNoLm1lZGlhRmlsZS5zcmMgKyAnICh0eXBlID0gJyArIHRlY2gubWVkaWFGaWxlLnR5cGUgKyBcbiAgICAgIFx0ICAnLCBhcGlGcmFtZXdvcmsgPSAnICsgdGVjaC5tZWRpYUZpbGUuYXBpRnJhbWV3b3JrICsgJyknfX0pO1xuICAgICAgdmFyIFdyYXBwZWRBZFVuaXQgPSB0aGF0Ll9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB0ZWNoLm1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlVGltZW91dCwgcGxheWVyKTtcbiAgICAgIHZhciB0ZWNoQ2xhc3MgPSAndmpzLScgKyB0ZWNoLm5hbWUgKyAnLWFkJztcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgdGVjaENsYXNzKTtcbiAgICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSx0ZWNoQ2xhc3MpO1xuICAgICAgfSk7XG4gICAgICBuZXh0KG51bGwsIFdyYXBwZWRBZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbmV4dChlLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuICB9KTtcblxuICAvLyB3ZSB0byBoYXZlIHJlLXBvc3QgdGhlIG1lc3NhZ2UgYWJvdXQgbG9hZGVkIGNyZWF0aXZlIHRvIHRoZSBjdXJyZW50IHdpbmRvdywgXG4gIC8vIGJlY2F1c2UgVlBBSUQgY2xpZW50IGxpc3RlbiB0aGlzIG1lc3NhZ2Ugb24gY3VycmVudCB3aW5kb3cgKG5vdCBvbiB0aGUgcGFyZW50KS5cbiAgdmFyIG9uTG9hZGVkID0gZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShlLmRhdGEsIGUub3JpZ2luKTtcbiAgfTtcbiAgd2luZG93LnBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Mb2FkZWQpO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fcGxheUFkVW5pdCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfSxcbiAgICB0aGlzLl9oYW5kc2hha2UuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2luaXRBZC5iaW5kKHRoaXMpLFxuICAgIC8vdGhpcy5fc2V0dXBFdmVudHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRTa2lwQnV0dG9uLmJpbmQodGhpcyksXG4gICAgdGhpcy5fbGlua1BsYXllckNvbnRyb2xzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fc3RhcnRBZC5iaW5kKHRoaXMpXG4gIF0sIGNhbGxiYWNrKTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2hhbmRzaGFrZSA9IGZ1bmN0aW9uIGhhbmRzaGFrZShhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICBhZFVuaXQuaGFuZHNoYWtlVmVyc2lvbih0aGlzLm9wdGlvbnMuVlBBSURfVkVSU0lPTiwgZnVuY3Rpb24gKGVycm9yLCB2ZXJzaW9uKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmIGlzU3VwcG9ydGVkVmVyc2lvbih2ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5faGFuZHNoYWtlLCB1bnN1cHBvcnRlZCB2ZXJzaW9uIFwiJyArIHZlcnNpb24gKyAnXCInKSwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcblxuICBmdW5jdGlvbiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikge1xuICAgIHZhciBtYWpvck51bSA9IG1ham9yKHZlcnNpb24pO1xuICAgIHJldHVybiBtYWpvck51bSA+PSAxICYmIG1ham9yTnVtIDw9IDI7XG4gIH1cblxuICBmdW5jdGlvbiBtYWpvcih2ZXJzaW9uKSB7XG4gICAgdmFyIHBhcnRzID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuICAgIHJldHVybiBwYXJzZUludChwYXJ0c1swXSwgMTApO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9pbml0QWQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRlY2ggPSB0aGlzLnBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgZGltZW5zaW9uID0gZG9tLmdldERpbWVuc2lvbih0ZWNoKTtcbiAgYWRVbml0LmluaXRBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIHRoaXMuVklFV19NT0RFLk5PUk1BTCwgLTEsIHtBZFBhcmFtZXRlcnM6IHZhc3RSZXNwb25zZS5hZFBhcmFtZXRlcnMgfHwgJyd9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSkge1xuICByZXR1cm4gbmV3IFZBU1RUcmFja2VyKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBhZFVuaXRTcmMgPSBhZFVuaXQub3B0aW9ucy5zcmM7XG4gIHZhciB0cmFja2VyID0gdGhpcy5fY3JlYXRlVkFTVFRyYWNrZXIoYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciBjb250ZW50U291cmNlID0gdGhpcy5jb250ZW50U291cmNlO1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIFxuICB0aGlzLnRyYWNrZXIgPSB0cmFja2VyO1xuICBcbiAgdGhpcy5pbXByZXNzaW9uVHJpZ2dlcmVkID0gZmFsc2U7XG5cbiAgYWRVbml0Lm9uKCdBZFNraXBwZWQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgXHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRTa2lwcGVkJ319KTtcblx0ICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkU2tpcHBlZCcsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwZWQnKTtcbiAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xuICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgIFxuICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgIC8vIFZJRExBLTI2NzYgLSBmb3JjZSBwbGF5ZXIgdG8gY2xlYW4gcmVzb3VyY2VzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZHNDYW5jZWwnKTtcbiAgICB9LCAzMDApO1xuICAgIC8vcGxheWVyLnRyaWdnZXIoJ2FkU3RvcCcpO1xuICB9KTtcblxuICBmdW5jdGlvbiB0cmlnZ2VySW1wcmVzc2lvbigpIHtcblx0ICBpZiAoIXRoYXQuaW1wcmVzc2lvblRyaWdnZXJlZCkge1xuXHRcdCAgdGhhdC5pbXByZXNzaW9uVHJpZ2dlcmVkID0gdHJ1ZTtcblx0ICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkSW1wcmVzc2lvbicsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICAgICAgfVxuXHRcdCAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkSW1wcmVzc2lvbid9fSk7XG5cdFx0ICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRJbXByZXNzaW9uJyk7XG5cdFx0ICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcblx0ICB9XG4gIH1cbiAgYWRVbml0Lm9uKCdBZEltcHJlc3Npb24nLCBmdW5jdGlvbiAoKSB7XG5cdCAgdHJpZ2dlckltcHJlc3Npb24oKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFN0YXJ0ZWQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKGFkVW5pdC5hZFN0YXJ0ZWQpIHtcblx0XHQgIC8vIGlnbm9yZSBzZWNvbmQgQWRTdGFydGVkIGV2ZW50XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuICAgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZy5pbml0KHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHkuY29udGV4dElkLCBcbiAgICAgICAgICBwbGF5ZXIuZHVyYXRpb24oKSwgcGxheWVyLmVsXy5vZmZzZXRXaWR0aCwgcGxheWVyLmVsXy5vZmZzZXRIZWlnaHQpO1xuICAgIH1cbiAgICBhZFVuaXQuYWRTdGFydGVkID0gdHJ1ZTtcbiAgICBpZiAoIWRvbS5oYXNDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1oYXMtc3RhcnRlZCcpKSB7XG4gICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtaGFzLXN0YXJ0ZWQnKTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RhcnRlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcbiAgICBpZiAoIXdpbmRvdy5fbW9sU2V0dGluZ3MucGxheXNJbkJyZWFrICYmIGFkVW5pdC5nZXRBZER1cmF0aW9uKSB7XG4gICAgICBhZFVuaXQuZ2V0QWREdXJhdGlvbihmdW5jdGlvbih0aGF0LCBkdXIpIHtcbiAgICAgICAgaWYgKGR1ciA+IDApIHtcbiAgICAgICAgICBwbGF5ZXIuZHVyYXRpb24oZHVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICBcdHRyaWdnZXJJbXByZXNzaW9uKCk7XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gICAgcGxheWVyLm9uZSgnYWRTdG9wJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYWRVbml0LnN0b3BBZCkge1xuICAgICAgICBhZFVuaXQuc3RvcEFkKHV0aWxpdGllcy5ub29wKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XG4gICAgXHQvLyBWSURMQS0yODM2IChBZCBjbGljayB0aHJ1IGRvZXMgbm90IGxhbmRpbmcgY2xpY2sgdGhydSB1cmwpXG4gICAgXHQvLyBpUGhvbmUgYW5kIGlQYWRcbiAgICBcdHZhciBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Zqcy1yZXNpemUtbWFuYWdlcicpO1xuICAgIFx0aWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCA+IDApIHtcbiAgICBcdFx0dmFyIHBhcmVudCA9IGVsZW1zWzBdLnBhcmVudEVsZW1lbnQ7XG4gICAgXHRcdGlmIChwYXJlbnQpIHtcbiAgICBcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbXNbMF0pO1xuICAgIFx0XHR9XG4gICAgXHR9XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRpbWVDb250cm9scygpIHtcblx0ICBcdHZhciBjb252ZXJ0VGltZVRvU3RyID0gZnVuY3Rpb24odGltZSkge1xuXHRcdFx0dmFyIHNlY3MgPSBwYXJzZUludCh0aW1lICsgMC41KTtcblx0XHRcdHZhciBtaW5zID0gcGFyc2VJbnQoc2VjcyAvIDYwKTtcblx0XHRcdHNlY3MgLT0gKG1pbnMgKiA2MCk7XG5cdFx0XHR2YXIgc3RyID0gbWlucy50b1N0cmluZygpICsgJzonICsgKHNlY3MgPiA5ID8gJycgIDogJzAnKSArIHNlY3MudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fTtcblx0XHRcblx0XHR2YXIgYmNUaW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiY190aW1lX2Rpc3BsYXknKTtcblx0XHRpZiAoIWJjVGltZURpc3BsYXkpIHtcblx0XHRcdGJjVGltZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdjdXJyZW50VGltZURpc3BsYXknKS5lbF8uYXBwZW5kQ2hpbGQoYmNUaW1lRGlzcGxheSk7XG5cdFx0XHRiY1RpbWVEaXNwbGF5LmlkID0gJ2JjX3RpbWVfZGlzcGxheSc7XG5cdFx0XHRiY1RpbWVEaXNwbGF5LmNsYXNzID0gJ3Zqcy1jdXJyZW50LXRpbWUtZGlzcGxheSc7XG5cdFx0XHRiY1RpbWVEaXNwbGF5WydhcmlhLWxpdmUnXSA9ICdvZmYnO1xuXHRcdFx0YmNUaW1lRGlzcGxheS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ2anMtY29udHJvbC10ZXh0XCI+PC9zcGFuPjA6MDAnO1xuICAgICAgc2hvd09yaWdpbmFsVGltZURpc3BsYXkocGxheWVyLCBmYWxzZSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuICAgICAgc2hvd09yaWdpbmFsVGltZURpc3BsYXkocGxheWVyLCBmYWxzZSk7XG5cdFx0XHRiY1RpbWVEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdH1cblx0XHRhZFVuaXQuZ2V0QWRSZW1haW5pbmdUaW1lKGZ1bmN0aW9uKHRoYXQsIHRpbWUpIHtcblx0XHRcdGlmICh0aW1lID49IDApIHtcblx0XHRcdFx0dmFyIGN1clRpbWUgPSBwbGF5ZXIuZHVyYXRpb24oKSAtIHRpbWU7XG5cdFx0XHRcdGlmIChjdXJUaW1lID49IDApIHtcblx0XHRcdFx0XHRiY1RpbWVEaXNwbGF5LmNoaWxkTm9kZXNbMV0ubm9kZVZhbHVlID0gY29udmVydFRpbWVUb1N0cihjdXJUaW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuICB9XG5cdCAgXG4gIGFkVW5pdC5vbignQWRWaWRlb1N0YXJ0JywgZnVuY3Rpb24gKCkge1xuXHQgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICdBZFZpZGVvU3RhcnQnfX0pO1xuICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvU3RhcnQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICB9XG5cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb1N0YXJ0Jyk7XG4gICAgdHJhY2tlci50cmFja1N0YXJ0KCk7XG5cdGlmICghd2luZG93Ll9tb2xTZXR0aW5ncy5wbGF5c0luQnJlYWsgJiYgYWRVbml0LmdldEFkRHVyYXRpb24pIHtcblx0XHRhZFVuaXQuZ2V0QWREdXJhdGlvbihmdW5jdGlvbih0aGF0LCBkdXIpIHtcblx0XHRcdGlmIChkdXIgPiAwKSB7XG5cdFx0XHRcdHBsYXllci5kdXJhdGlvbihkdXIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgaWYgKHV0aWxpdGllcy5pc01vYmlsZSgpKSB7XG4gICAgICAgIC8vIFZJRExBLTIzMzYgKHNpbXVsYXRlIHVzZXIgYWN0aXZpdHkgdG8gbWFrZSBzdXJlIGNvbnRyb2wgYmFyIGlzIHZpc2libGUgb24gbW9iaWxlIGRldmljZXMpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBsYXllci51c2VyQWN0aXZlKHRydWUpO1xuICAgICAgICBcdH0sIGkgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGVudFNvdXJjZSA9PT0gcGxheWVyLnRlY2hfLmVsXy5zcmMpIHtcbiAgICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UubWVzc2FnZScsIGRhdGE6IHttZXNzYWdlOiAnVlBBSUQgY3JlYXRpdmUgdXNlcyBpdHMgb3duIHZpZGVvIHRhZyd9fSk7XG4gICAgICB0aGF0Lm5lZWRzU2hvd1BsYXllciA9IHRydWU7XG4gICAgICBpZiAoIXdpbmRvdy5fbW9sU2V0dGluZ3MucGxheXNJbkJyZWFrKSB7XG4gICAgICAgIHRoYXQudGltZVVwZGF0ZVRpbWVyID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZUNvbnRyb2xzLCA1MDApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHBsYXllci5jb250cm9sQmFyLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRQbGF5aW5nJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG4gICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGxheWluZycsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRQbGF5aW5nJyk7XG4gICAgdHJhY2tlci50cmFja1Jlc3VtZSgpO1xuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xuICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkUGF1c2VkJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG4gICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGF1c2VkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBhdXNlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xuICAgIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKTtcblx0ICB2YXIgaWZyYW1lQmFja0J1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lQmFja0J1dHRvbicpO1xuXHQgIGlmIChpZnJhbWVCYWNrQnV0dG9uKSB7XG5cdFx0ICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcblx0XHQgIHJldHVybjtcblx0ICB9XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbm90aWZ5UGxheVRvUGxheWVyKCl7XG4gICAgaWYodGhhdC5fYWRVbml0ICYmIHRoYXQuX2FkVW5pdC5pc1BhdXNlZCgpKXtcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCdwbGF5Jyk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKSB7XG4gICAgaWYodGhhdC5fYWRVbml0KXtcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3BhdXNlJyk7XG4gIH1cblxuICBhZFVuaXQub24oJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVmlkZW9GaXJzdFF1YXJ0aWxlJ319KTtcbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvRmlyc3RRdWFydGlsZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9GaXJzdFF1YXJ0aWxlJyk7XG4gICAgdHJhY2tlci50cmFja0ZpcnN0UXVhcnRpbGUoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvTWlkcG9pbnQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRWaWRlb01pZHBvaW50J319KTtcbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvTWlkcG9pbnQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvTWlkcG9pbnQnKTtcbiAgICB0cmFja2VyLnRyYWNrTWlkcG9pbnQoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvVGhpcmRRdWFydGlsZScsIGZ1bmN0aW9uICgpIHtcblx0ICBpZiAodGhhdC5hZEZpbmlzaGVkKSB7XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFZpZGVvVGhpcmRRdWFydGlsZSd9fSk7XG4gICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHR3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWaWRlb1RoaXJkUXVhcnRpbGUnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvVGhpcmRRdWFydGlsZScpO1xuICAgIHRyYWNrZXIudHJhY2tUaGlyZFF1YXJ0aWxlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWaWRlb0NvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVmlkZW9Db21wbGV0ZSd9fSk7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9Db21wbGV0ZScpO1xuICAgIHRyYWNrZXIudHJhY2tDb21wbGV0ZSgpO1xuICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVmlkZW9Db21wbGV0ZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgLy8gVklETEEtMjQwNiBmb3JzZSBhZCB0byBzdG9wXG4gICAgaWYgKGFkVW5pdC5zdG9wQWQpIHtcbiAgICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZENsaWNrVGhydScsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cblx0ICB2YXIgZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lID0gZmFsc2U7XG5cdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZENsaWNrVGhydSd9fSk7XG4gICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkQ2xpY2tUaHJ1JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZENsaWNrVGhydScpO1xuICAgIHZhciB1cmwgPSBkYXRhLnVybDtcbiAgICB2YXIgcGxheWVySGFuZGxlcyA9IGRhdGEucGxheWVySGFuZGxlcztcbiAgICB2YXIgY2xpY2tUaHJ1VXJsID0gdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsKSA/IHVybCA6IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHZhc3RSZXNwb25zZS5jbGlja1Rocm91Z2gpO1xuXG5cdGlmIChwbGF5ZXJIYW5kbGVzICYmIHdpbmRvdy5fbW9sU2V0dGluZ3MuZGlzYWJsZUNsaWNrVGhydSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRcbiAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcbiAgICBpZiAocGxheWVySGFuZGxlcyAmJiBjbGlja1RocnVVcmwpIHtcbiAgICBcdGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgJiYgZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lKSB7XG4gICAgXHRcdGFkZENsaWNrVGhyb3VnaERpdkJsb2NrZXIoY2xpY2tUaHJ1VXJsKTtcbiAgICBcdH1cbiAgICBcdGVsc2Uge1xuICAgIFx0XHR3aW5kb3cub3BlbihjbGlja1RocnVVcmwsICdfYmxhbmsnKTtcbiAgICBcdH1cbiAgICB9XG4gICAgXG4gICAgLy8gVklETEEtMjI2OSAoQWQgZG9lcyBub3QgcGF1c2Ugd2hlbiBicm93c2luZyBvdXQgdG8gYSBjbGljayB1cmwgZnJvbSBhIHZwYWlkIGFkKVxuICAgIGFkVW5pdC5wYXVzZUFkKHV0aWxpdGllcy5ub29wKTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvKSB7XG4gICAgICB2YXIgdmFyaWFibGVzID0ge1xuICAgICAgICBBU1NFVFVSSTogYWRVbml0Lm9wdGlvbnMuc3JjLFxuICAgICAgICBDT05URU5UUExBWUhFQUQ6IDAgLy9JbiBWUEFJRCB0aGVyZSBpcyBubyBtZXRob2QgdG8ga25vdyB0aGUgY3VycmVudCB0aW1lIGZyb20gdGhlIGFkVW5pdFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6IG51bGw7XG4gICAgfVxuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlckFjY2VwdEludml0YXRpb24nLCBmdW5jdGlvbiAoKSB7XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVXNlckFjY2VwdEludml0YXRpb24nfX0pO1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyk7XG4gICAgdHJhY2tlci50cmFja0FjY2VwdEludml0YXRpb24oKTtcbiAgICB0cmFja2VyLnRyYWNrQWNjZXB0SW52aXRhdGlvbkxpbmVhcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlckNsb3NlJywgZnVuY3Rpb24gKCkge1xuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFVzZXJDbG9zZSd9fSk7XG5cdCAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHQgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFVzZXJDbG9zZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJDbG9zZScpO1xuICAgIHRyYWNrZXIudHJhY2tDbG9zZSgpO1xuICAgIHRyYWNrZXIudHJhY2tDbG9zZUxpbmVhcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlck1pbmltaXplJywgZnVuY3Rpb24gKCkge1xuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFVzZXJNaW5pbWl6ZSd9fSk7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlck1pbmltaXplJyk7XG4gICAgdHJhY2tlci50cmFja0NvbGxhcHNlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRFcnJvcicsIGZ1bmN0aW9uICgpIHtcblx0ICBpZiAodGhhdC5hZEZpbmlzaGVkKSB7XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuXHQgIC8vIFZJRExBLTIzODkgc3VwcHJlc3MgZXJvciB0cmFja2luZyBhZnRlciBhZCBpbXByZXNzaW9uIGhhcyBiZWVuIHJlcG9ydGVkXG5cdCAgaWYgKCF0aGF0LmltcHJlc3Npb25UcmlnZ2VyZWQgJiYgIXRoYXQuZXJyb3JIYXNCZWVuVHJhY2tlZCkge1xuXHRcdCAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkRXJyb3InfX0pO1xuXHQgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcblx0ICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRFcnJvcicsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICAgICAgfVxuXHQgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRFcnJvcicpO1xuXHQgICAgLy9OT1RFOiB3ZSB0cmFjayBlcnJvcnMgY29kZSA5MDEsIGFzIG5vdGVkIGluIFZBU1QgMy4wXG5cdCAgICB0cmFja2VyLnRyYWNrRXJyb3JXaXRoQ29kZSg5MDEpO1xuXHQgICAgdGhhdC5lcnJvckhhc0JlZW5UcmFja2VkID0gdHJ1ZTtcblx0ICB9XG5cdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWb2x1bWVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJ319KTtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcbiAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcbiAgICBhZFVuaXQuZ2V0QWRWb2x1bWUoZnVuY3Rpb24gKGVycm9yLCBjdXJyZW50Vm9sdW1lKSB7XG4gICAgICBpZiAobGFzdFZvbHVtZSAhPT0gY3VycmVudFZvbHVtZSkge1xuICAgICAgICBpZiAoY3VycmVudFZvbHVtZSA9PT0gMCAmJiBsYXN0Vm9sdW1lID4gMCkge1xuICAgICAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFZvbHVtZSA+IDAgJiYgbGFzdFZvbHVtZSA9PT0gMCkge1xuICAgICAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllci52b2x1bWUoY3VycmVudFZvbHVtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRTaXplQ2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmIChwbGF5ZXIudmFzdCAmJiBwbGF5ZXIudmFzdC5uZWVkU3luY1BsYXkpIHtcblx0XHQgIGlmIChwbGF5ZXIucGF1c2VkKCkgIT09IHBsYXllci50ZWNoXy5lbF8ucGF1c2VkKSB7XG4gICAgICAgIC8vIGFkIHVzZXMgbWFpbiBjb250ZW50IHRhZ1xuICAgICAgICBpZiAoY29udGVudFNvdXJjZSAhPSBwbGF5ZXIudGVjaF8uZWxfLnNyYykge1xuICAgICAgICAgIGlmIChwbGF5ZXIudGVjaF8uZWxfLnBhdXNlZCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGF1c2VkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm90aWZ5UGF1c2VUb1BsYXllcigpO1xuICAgICAgICAgICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRQbGF5aW5nJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gICAgICAgICAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblx0XHQgIH1cblx0XHQgIHBsYXllci52YXN0Lm5lZWRTeW5jUGxheSA9IGZhbHNlO1xuXHQgIH0gXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFkZENsaWNrVGhyb3VnaERpdkJsb2NrZXIoY2xpY2tUaHJ1VXJsKSB7XG5cdCAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hEaXYocGxheWVyLCBjbGlja1RocnVVcmwpO1xuXHQgIHZhciBpRnJhbWU7XG5cdCAgdmFyIGlGcmFtZUJhY2tCdXR0b247XG5cblx0ICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG5cblx0ICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVEaXNwbGF5U3R5bGUpO1xuXG5cdCAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoRGl2KHBsYXllciwgdXJsKSB7XG5cdCAgICB2YXIgYmxvY2tlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdCAgICBkb20uYWRkQ2xhc3MoYmxvY2tlciwgJ3Zhc3QtYmxvY2tlcicpO1xuXG5cdCAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkQ2xpY2tUaHJ1JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHQgICAgfVxuICAgICAgXG5cdCAgICAvLyBjcmVhdGUgSUZyYW1lIHdpdGggYmFjayBidXR0b25cblx0ICAgIGlGcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXHQgICAgZG9tLmFkZENsYXNzKGlGcmFtZSwgJ3Zhc3QtYmxvY2tlcicpO1xuXHQgICAgaUZyYW1lLnNyYyA9IHVybDtcblx0ICAgIGJsb2NrZXIuYXBwZW5kQ2hpbGQoaUZyYW1lKTtcblx0ICBcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ICAgIGRvbS5hZGRDbGFzcyhpRnJhbWVCYWNrQnV0dG9uLCBcInZhc3QtYmFjay1idXR0b25cIik7XG5cdCAgICBkb20uYWRkQ2xhc3MoaUZyYW1lQmFja0J1dHRvbiwgJ2VuYWJsZWQnKTtcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24uaW5uZXJIVE1MID0gXCJCYWNrXCI7XG5cdCAgICBpRnJhbWVCYWNrQnV0dG9uLmlkID0gJ2lmcmFtZUJhY2tCdXR0b24nO1xuXHQgICAgYmxvY2tlci5hcHBlbmRDaGlsZChpRnJhbWVCYWNrQnV0dG9uKTtcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0ICAvLyBzaG93IGNvbnRyb2xzXG5cdFx0ICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcblx0XHQgIH1cblx0XHQgIHBsYXllci5jb250cm9scyh0cnVlKTtcblx0XHQgIFxuXHRcdCAgcGxheWVyLmVsKCkucmVtb3ZlQ2hpbGQoYmxvY2tlcik7XG5cdFx0ICByZXN1bWVBZFVuaXQoKTtcblx0XHQgIFxuXHRcdCAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ICB9XG5cdCAgICB9KTtcblx0XHQgIFxuXHQgICAgLy8gaGlkZSBjb250cm9sc1xuXHQgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHQgICAgfSwgMSk7XG5cdCAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdCAgICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcblx0ICAgIH1cblx0ICAgIHBsYXllci5jb250cm9scyhmYWxzZSk7XG5cblx0ICAgIHJldHVybiBibG9ja2VyO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlTdHlsZSgpIHtcblx0XHQgIGlmICghcGxheWVyLmlzRnVsbHNjcmVlbigpKSB7XHRcdFx0ICBcblx0XHRcdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcblx0XHRcdCAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuXHRcdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG5cdFx0XHQgIH1cblx0XHRcdCAgcGxheWVyLmNvbnRyb2xzKHRydWUpO1xuXHRcdFx0ICBwbGF5ZXIuZWwoKS5yZW1vdmVDaGlsZChibG9ja2VyKTtcblx0XHRcdCAgcmVzdW1lQWRVbml0KCk7XG5cdFx0ICB9XG5cdCAgfVxuICB9XG5cbiAgdmFyIHVwZGF0ZVZpZXdTaXplID0gcmVzaXplQWQuYmluZCh0aGlzLCBwbGF5ZXIsIGFkVW5pdCwgdGhpcy5WSUVXX01PREUpO1xuICB2YXIgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQgPSB1dGlsaXRpZXMudGhyb3R0bGUodXBkYXRlVmlld1NpemUsIDEwMCk7XG4gIHZhciBhdXRvUmVzaXplID0gdGhpcy5zZXR0aW5ncy5hdXRvUmVzaXplO1xuXG4gIGlmIChhdXRvUmVzaXplKSB7XG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICB9XG5cbiAgcGxheWVyLm9uKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgcGxheWVyLm9uKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICBwbGF5ZXIub24oJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcbiAgcGxheWVyLm9uKCdzdG9wQWQnLCBzdG9wQWRVbml0KTtcblxuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcbiAgICBwbGF5ZXIub2ZmKCdzdG9wQWQnLCBzdG9wQWRVbml0KTtcblxuICAgIGlmIChhdXRvUmVzaXplKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGF1c2VBZFVuaXQoKSB7XG4gICAgYWRVbml0LnBhdXNlQWQodXRpbGl0aWVzLm5vb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lQWRVbml0KCkge1xuICAgIGFkVW5pdC5yZXN1bWVBZCh1dGlsaXRpZXMubm9vcCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHN0b3BBZFVuaXQoKSB7XG4gICAgaWYgKGFkVW5pdC5zdG9wQWQpIHtcbiAgICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgIH1cbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgc2tpcEJ1dHRvbjtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdHJhY2tlciA9IHRoaXMudHJhY2tlcjtcblxuICAvLyBWSURMQS0yMDg0IChwdWJsaXNoZXItc3BlY2lmaWVkIFNLSVAgYmVoYXZpb3IgZm9yIFZQQUlEIGNyZWF0aXZlcylcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgc2tpcE9mZnNldEluU2VjO1xuICB2YXIgZHVyYXRpb247XG4gIHZhciByZW1haW5pbmdUaW1lO1xuICB2YXIgcHJvZ3Jlc3NJbnRlcnZhbDtcbiAgaWYgKCF3aW5kb3cuX21vbFNldHRpbmdzLmRpc2FibGVTa2lwcGFiaWxpdHkpIHtcblx0ICBpZiAodmFzdFJlc3BvbnNlLnNraXBvZmZzZXQgJiYgdXRpbGl0aWVzLmlzTnVtYmVyKHZhc3RSZXNwb25zZS5za2lwb2Zmc2V0KSkge1xuXHRcdCAgc2tpcE9mZnNldEluU2VjID0gdmFzdFJlc3BvbnNlLnNraXBvZmZzZXQgLyAxMDAwO1xuXHRcdCAgcHViQWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldEluU2VjKTtcblx0ICB9XG5cdCAgZWxzZSB7XG5cdFx0ICAvLyBjaGVjayBpZiBwdWJsaXNoZXIgaGFkIGV4cGxpY2l0bHkgZGlzYWJsZSBza2lwcGFiaWxpdHlcblx0XHQgIHZhciBkaXNhYmxlU2tpcHBhYmlsaXR5QnlQdWJsaXNoZXIgPSBmYWxzZTtcblx0XHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlKSB7XG5cdFx0XHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS5lbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHQgIGRpc2FibGVTa2lwcGFiaWxpdHlCeVB1Ymxpc2hlciA9IHRydWU7IFxuXHRcdFx0ICB9XG5cdFx0XHQgIGlmICh2YXN0UmVzcG9uc2UuZHVyYXRpb24gJiYgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQgJiYgXG5cdFx0XHRcdCAgdmFzdFJlc3BvbnNlLmR1cmF0aW9uIDwgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQpIHtcblx0XHRcdFx0ICBkaXNhYmxlU2tpcHBhYmlsaXR5QnlQdWJsaXNoZXIgPSB0cnVlOyBcblx0XHRcdCAgfVxuXHRcdCAgfVxuXHRcdCAgaWYgKCFkaXNhYmxlU2tpcHBhYmlsaXR5QnlQdWJsaXNoZXIpIHtcblx0XHRcdCAgYWRVbml0Lm9uKCdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgdXBkYXRlU2tpcEJ1dHRvblN0YXRlKTtcblx0XHRcdCAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcblx0XHQgIH1cblx0ICB9XG4gIH1cblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwYWJsZVN0YXRlQ2hhbmdlJyk7XG4gICAgYWRVbml0LmdldEFkU2tpcHBhYmxlU3RhdGUoZnVuY3Rpb24gKGVycm9yLCBpc1NraXBwYWJsZSkge1xuICAgICAgaWYgKGlzU2tpcHBhYmxlKSB7XG4gICAgICAgIGlmICghc2tpcEJ1dHRvbikge1xuICAgICAgICAgIGFkZFNraXBCdXR0b24ocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihwbGF5ZXIpIHtcbiAgICBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcbiAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuICAgIHNraXBCdXR0b24gPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbigpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwiZW5hYmxlZFwiKTtcbiAgICAvL3NraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGFkXCI7XG4gICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBCdXR0b25UZXh0O1xuICAgIHNraXBCdXR0b24uaWQgPSAnYWRTa2lwQnV0dG9uJztcblxuICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGFkVW5pdC5nZXRBZFNraXBwYWJsZVN0YXRlKGZ1bmN0aW9uIChlcnJvciwgaXNTa2lwcGFibGUpIHtcbiAgICAgICAgICAgIGlmIChpc1NraXBwYWJsZSkge1xuICAgICAgICAgICAgICAgIGFkVW5pdC5za2lwQWQodXRpbGl0aWVzLm5vb3ApOy8vV2Ugc2tpcCB0aGUgYWRVbml0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXHR0cmFja2VyLnRyYWNrU2tpcCgpO1xuICAgICAgICAgICAgICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgLy9hZFVuaXQuc2tpcEFkKHV0aWxpdGllcy5ub29wKTsvL1dlIHNraXAgdGhlIGFkVW5pdFxuXG4gICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNraXBCdXR0b247XG4gIH1cblx0XG5cdC8vIFZJRExBLTIwODQgKHB1Ymxpc2hlci1zcGVjaWZpZWQgU0tJUCBiZWhhdmlvciBmb3IgVlBBSUQgY3JlYXRpdmVzKVxuXHQvLyBFTiAtIHN1cHBvcnQgcHVibGlzaGVyIFNLSVAgc2V0dGluZ3Ncblx0LyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG5cdGZ1bmN0aW9uIHB1YkFkZFNraXBCdXR0b25Ub1BsYXllcihwbGF5ZXIsIHNraXBPZmZzZXQpIHtcblx0ICB2YXIgc2tpcEJ1dHRvbiA9IHB1YkNyZWF0ZVNraXBCdXR0b24ocGxheWVyKTtcblx0ICB2YXIgdXBkYXRlU2tpcEJ1dHRvbiA9IHB1YlVwZGF0ZVNraXBCdXR0b25TdGF0ZS5iaW5kKHRoYXQsIHNraXBCdXR0b24sIHNraXBPZmZzZXQpO1xuXHRcblx0ICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcblx0ICAvL3BsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xuXHQgIHByb2dyZXNzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVTa2lwQnV0dG9uLCA1MDApO1xuXHRcblx0ICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHB1YlJlbW92ZVNraXBCdXR0b24pO1xuXHRcblx0ICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xuXHQgICAgLy9wbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG5cdCAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuXHQgICAgc2tpcEJ1dHRvbiA9IG51bGw7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBwdWJSZW1vdmVTa2lwQnV0dG9uKCkge1xuXHRcdCAgaWYgKHByb2dyZXNzSW50ZXJ2YWwpIHtcblx0XHRcdCAgY2xlYXJJbnRlcnZhbChwcm9ncmVzc0ludGVydmFsKTtcblx0XHRcdCAgcHJvZ3Jlc3NJbnRlcnZhbCA9IG51bGw7XG5cdFx0ICB9XG5cdFx0ICByZW1vdmVTa2lwQnV0dG9uKCk7XG5cdCAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBwdWJDcmVhdGVTa2lwQnV0dG9uKHBsYXllcikge1xuXHQgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdCAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcblx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgc2tpcEJ1dHRvbi5pZCA9ICdhZFNraXBCdXR0b24nO1xuXHRcblx0ICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKGRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG5cdCAgICAgICAgYWRVbml0LmdldEFkU2tpcHBhYmxlU3RhdGUoZnVuY3Rpb24gKGVycm9yLCBpc1NraXBwYWJsZSkge1xuICAgICAgICAgICAgICAgIGFkVW5pdC5za2lwQWQodXRpbGl0aWVzLm5vb3ApOy8vV2Ugc2tpcCB0aGUgYWRVbml0XG5cdCAgICAgICAgICAgIGlmICghaXNTa2lwcGFibGUpIHtcblx0ICAgICAgICAgICAgXHR0cmFja2VyLnRyYWNrU2tpcCgpO1xuXHQgICAgICAgICAgICAgICAgYWRVbml0LnN0b3BBZCh1dGlsaXRpZXMubm9vcCk7XG5cdCAgICAgICAgICAgIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQgICAgICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XG5cdCAgICAgICAgICAgIFx0fSwgMSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIC8vYWRVbml0LnNraXBBZCh1dGlsaXRpZXMubm9vcCk7Ly9XZSBza2lwIHRoZSBhZFVuaXRcblx0ICAgIH1cblx0ICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHRcblx0ICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXG5cdCAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH07XG5cdFxuXHQgIHJldHVybiBza2lwQnV0dG9uO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBwdWJVcGRhdGVTa2lwQnV0dG9uU3RhdGUoc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCkge1xuXHRcdGFkVW5pdC5nZXRBZER1cmF0aW9uKGZ1bmN0aW9uKHRoYXQsIGR1cikge1xuXHRcdFx0aWYgKGR1ciA+IDApIHtcblx0XHRcdFx0ZHVyYXRpb24gPSBkdXI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0YWRVbml0LmdldEFkUmVtYWluaW5nVGltZShmdW5jdGlvbih0aGF0LCB0aW1lKSB7XG4gICAgICByZW1haW5pbmdUaW1lID0gdGltZTtcbiAgICAgIC8vIGZvciBWUEFJRCAxLjAgdXNlIHJlbWFpbmluZyB0aW1lIGZvciBkdXJhdGlvbiBjYWxjdWxhdGlvbiBcbiAgICAgIGlmICghZHVyYXRpb24gJiYgcmVtYWluaW5nVGltZSA+IDApIHtcbiAgICAgICAgZHVyYXRpb24gPSByZW1haW5pbmdUaW1lO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHJldHVybiBpZiBkdXJhdGlvbiBvci9hbmQgcmVtYWluaW5nIHRpbWUgaXMgbm90IGltcGxlbWVudGVkIG9yIHVua25vd25cblx0XHRpZiAoIWR1cmF0aW9uIHx8ICFyZW1haW5pbmdUaW1lIHx8IGR1cmF0aW9uIDwgMCB8fCByZW1haW5pbmdUaW1lIDwgMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgdGltZUxlZnQgPSBNYXRoLmNlaWwoc2tpcE9mZnNldCAtIChkdXJhdGlvbiAtIHJlbWFpbmluZ1RpbWUpKTtcbiAgICAvLyBpZiBza2lwIGJ1dHRvbiBlbmFibGVkIG5ldmVyIHNob3cgYmVmb3JlLWJ1dHRvbiBza2lwIHRleHRcblx0ICBpZiAodGltZUxlZnQgPiAwICYmICFkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuXHQgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cInZhc3Qtc2tpcC1idXR0b24tdGV4dFwiPicgKyB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBUZXh0LnJlcGxhY2UoJyUlVElNRSUlJywgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHModGltZUxlZnQsIDIpKSArICc8L3A+Jztcblx0ICB9IGVsc2Uge1xuXHQgICAgaWYgKCFkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuXHQgICAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKTtcblx0ICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBCdXR0b25UZXh0O1xuXHQgICAgfVxuXHQgIH1cblx0ICB2YXIgaWZyYW1lQmFja0J1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lQmFja0J1dHRvbicpO1xuXHQgIGlmICghaWZyYW1lQmFja0J1dHRvbikge1xuXHRcdCAgaWYgKHBsYXllci5pc0Z1bGxzY3JlZW4oKSAmJiB1dGlsaXRpZXMuaXNBbmRyb2lkKCkpIHtcblx0XHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0ICByZXR1cm47XG5cdFx0ICB9XG5cdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHQgIH1cblx0fVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbGlua1BsYXllckNvbnRyb2xzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgbGlua1ZvbHVtZUNvbnRyb2wodGhpcy5wbGF5ZXIsIGFkVW5pdCk7XG4gIGxpbmtGdWxsU2NyZWVuQ29udHJvbCh0aGlzLnBsYXllciwgYWRVbml0LCB0aGlzLlZJRVdfTU9ERSk7XG5cbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBsaW5rVm9sdW1lQ29udHJvbChwbGF5ZXIsIGFkVW5pdCkge1xuICAgIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcbiAgICBhZFVuaXQub24oJ0FkVm9sdW1lQ2hhbmdlJywgdXBkYXRlUGxheWVyVm9sdW1lKTtcblxuICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcGxheWVyLm9mZigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcbiAgICB9KTtcblxuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUFkVW5pdFZvbHVtZSgpIHtcbiAgICAgIHZhciB2b2wgPSBwbGF5ZXIubXV0ZWQoKSA/IDAgOiBwbGF5ZXIudm9sdW1lKCk7XG4gICAgICBhZFVuaXQuc2V0QWRWb2x1bWUodm9sLCBsb2dFcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheWVyVm9sdW1lKCkge1xuXHQgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHRcdCAgXHR3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWb2x1bWVDaGFuZ2UnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgfVxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJyk7XG4gICAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcbiAgICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIHZvbCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBsb2dFcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxhc3RWb2x1bWUgIT09IHZvbCkge1xuICAgICAgICAgICAgcGxheWVyLnZvbHVtZSh2b2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlua0Z1bGxTY3JlZW5Db250cm9sKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcbiAgICB2YXIgdXBkYXRlVmlld1NpemUgPSByZXNpemVBZC5iaW5kKHRoYXQsIHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpO1xuXG4gICAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xuXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xuICAgIH0pO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9zdGFydEFkID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIGFscmVhZHlHb3RBZFN0YXJ0ZWQgPSBhZFVuaXQuYWRTdGFydGVkO1xuXG4gIGlmIChhbHJlYWR5R290QWRTdGFydGVkKSB7XG5cdCAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xuXHQgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFN0YXJ0ZWQnfX0pO1xuICB9XG4gIGFkVW5pdC5zdGFydEFkKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmICghZXJyb3IgJiYgIWFscmVhZHlHb3RBZFN0YXJ0ZWQpIHtcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcbiAgICB9XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2ZpbmlzaFBsYXlpbmcgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGFkVW5pdC5vbignQWRTdG9wcGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRTdG9wcGVkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICB9XG4gICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTdG9wcGVkJyk7XG4gICBmaW5pc2hQbGF5aW5nQWQobnVsbCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRFcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICBpZiAodGhhdC5pbXByZXNzaW9uVHJpZ2dlcmVkKSB7XG4gICAgICAgIGZpbmlzaFBsYXlpbmdBZChudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgXHR2YXIgZXJyTXNnID0gZXJyb3I/IGVycm9yLm1lc3NhZ2UgOiAnb24gVlBBSURJbnRlZ3JhdG9yLCBlcnJvciB3aGlsZSB3YWl0aW5nIGZvciB0aGUgYWRVbml0IHRvIGZpbmlzaCBwbGF5aW5nJztcbiAgICAgICAgZmluaXNoUGxheWluZ0FkKG5ldyBWQVNURXJyb3IoZXJyTXNnKSk7XG4gICAgfVxuICB9KTtcblxuICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIHZhciBuZWVkc1Nob3dQbGF5ZXIgPSB0aGlzLm5lZWRzU2hvd1BsYXllcjtcbiAgZnVuY3Rpb24gZmluaXNoUGxheWluZ0FkKGVycm9yKSB7XG5cdCAgdGhhdC5hZEZpbmlzaGVkID0gdHJ1ZTtcblx0XHRwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcblx0XHRpZiAobmVlZHNTaG93UGxheWVyKSB7XG5cdFx0XHRpZiAodGhhdC50aW1lVXBkYXRlVGltZXIpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVVcGRhdGVUaW1lcik7XG5cdFx0XHRcdHRoYXQudGltZVVwZGF0ZVRpbWVyID0gbnVsbDtcblx0XHRcdFx0dmFyIGJjVGltZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmNfdGltZV9kaXNwbGF5Jyk7XG5cdFx0XHRcdGlmIChiY1RpbWVEaXNwbGF5KSB7XG5cdFx0XHRcdFx0cGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5yZW1vdmVDaGlsZChiY1RpbWVEaXNwbGF5KTtcblx0XHRcdFx0fVxuICAgICAgICBzaG93T3JpZ2luYWxUaW1lRGlzcGxheShwbGF5ZXIsIHRydWUpO1xuICAgICAgfVxuXHQgICAgcGxheWVyLmNvbnRyb2xCYXIuc2hvdygpO1xuXHRcdFx0cGxheWVyLnRlY2hfLmVsXy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR9XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gdHJhY2tFcnJvcihyZXNwb25zZSwgZXJyb3JDb2RlKSB7XG5cdGlmICghdGhpcy5lcnJvckhhc0JlZW5UcmFja2VkKSB7XG5cdFx0dGhpcy5lcnJvckhhc0JlZW5UcmFja2VkID0gdHJ1ZTtcblx0XHR2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3JDb2RlIHx8IDkwMX0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBzaG93T3JpZ2luYWxUaW1lRGlzcGxheShwbGF5ZXIsIHNob3cpIHtcbiAgdmFyIGNoaWxkcmVuID0gcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5jaGlsZHJlbjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjaGlsZHJlbltpXS5pZCAhPSAnYmNfdGltZV9kaXNwbGF5Jykge1xuICAgICAgY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9IHNob3cgPyAnJyA6ICdub25lJztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplQWQocGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSkge1xuXHR2YXIgc2tpcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZFNraXBCdXR0b24nKTtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGRpbWVuc2lvbiA9IGRvbS5nZXREaW1lbnNpb24odGVjaCk7XG4gIHZhciBNT0RFID0gcGxheWVyLmlzRnVsbHNjcmVlbigpID8gVklFV19NT0RFLkZVTExTQ1JFRU4gOiBWSUVXX01PREUuTk9STUFMO1xuICBpZiAoTU9ERSA9PT0gVklFV19NT0RFLk5PUk1BTCkge1xuICAgIGlmIChwbGF5ZXIudmFzdCkge1xuICAgICAgcGxheWVyLnZhc3QubmVlZFN5bmNQbGF5ID0gdHJ1ZTtcbiAgICB9XG5cdCAgZGltZW5zaW9uLndpZHRoID0gcGxheWVyLmVsXy5vZmZzZXRXaWR0aDtcblx0ICBkaW1lbnNpb24uaGVpZ2h0ID0gcGxheWVyLmVsXy5vZmZzZXRIZWlnaHQ7XG5cdCAgaWYgKHV0aWxpdGllcy5pc0FuZHJvaWQoKSAmJiBza2lwQnV0dG9uKSB7XG5cdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHQgIH1cbiAgfVxuICBpZiAoTU9ERSA9PT0gVklFV19NT0RFLkZVTExTQ1JFRU4pIHtcblx0ICBsb2dnZXIubG9nKCcqKioqKiogdG8gZnVsbHNjcmVlbiBkaW1lbnNpb24gPSAnICsgZGltZW5zaW9uLndpZHRoICsgJywnICsgZGltZW5zaW9uLmhlaWdodCk7XG5cdCAgaWYgKHV0aWxpdGllcy5pc0FuZHJvaWQoKSAmJiBza2lwQnV0dG9uKSB7XG5cdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgfVxuICB9XG4gIGFkVW5pdC5yZXNpemVBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIE1PREUsIGxvZ0Vycm9yKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IpIHtcbiAgaWYgKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yICgnRVJST1I6ICcgKyBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREludGVncmF0b3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVGhlIGNvbXBvbmVudCB0aGF0IHNob3dzIGEgYmxhY2sgc2NyZWVuIHVudGlsIHRoZSBhZHMgcGx1Z2luIGhhcyBkZWNpZGVkIGlmIGl0IGNhbiBvciBpdCBjYW4gbm90IHBsYXkgdGhlIGFkLlxuICpcbiAqIE5vdGU6IEluIGNhc2UgeW91IHdvbmRlciB3aHkgaW5zdGVhZCBvZiB0aGlzIGJsYWNrIHBvc3RlciB3ZSBkb24ndCBqdXN0IHNob3cgdGhlIHNwaW5uZXIgbG9hZGVyLlxuICogICAgICAgSU9TIGRldmljZXMgZG8gbm90IHdvcmsgd2VsbCB3aXRoIGFuaW1hdGlvbnMgYW5kIHRoZSBicm93c2VyIGNocmFzaGVzIGZyb20gdGltZSB0byB0aW1lIFRoYXQgaXMgd2h5IHdlIGNob3NlIHRvXG4gKiAgICAgICBoYXZlIGEgc2Vjb25kYXJ5IGJsYWNrIHBvc3Rlci5cbiAqXG4gKiAgICAgICBJdCBhbHNvIG1ha2VzIGl0IG11Y2ggbW9yZSBlYXNpZXIgZm9yIHRoZSB1c2VycyBvZiB0aGUgcGx1Z2luIHNpbmNlIGl0IGRvZXMgbm90IGNoYW5nZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgdGhlXG4gKiAgICAgICBzcGlubmVyIGFuZCB0aGUgcGxheWVyIHdvcmtzIHRoZSBzYW1lIHdheSB3aXRoIGFuZCB3aXRob3V0IHRoZSBwbHVnaW4uXG4gKlxuICogQHBhcmFtIHt2anMuUGxheWVyfE9iamVjdH0gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG52YXIgQmxhY2tQb3N0ZXJGYWN0b3J5ID0gZnVuY3Rpb24oYmFzZUNvbXBvbmVudCkge1xuICByZXR1cm4ge1xuICAgIC8qKiBAY29uc3RydWN0b3IgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICd2anMtYmxhY2stcG9zdGVyJztcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xuXG4gICAgICB2YXIgcG9zdGVySW1nID0gcGxheWVyLmdldENoaWxkKCdwb3N0ZXJJbWFnZScpO1xuXG4gICAgICAvL1dlIG5lZWQgdG8gZG8gaXQgYXN5bmNocm9ub3VzbHkgdG8gYmUgc3VyZSB0aGF0IHRoZSBibGFjayBwb3N0ZXIgZWwgaXMgb24gdGhlIGRvbS5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHBvc3RlckltZyAmJiBwbGF5ZXIgJiYgcGxheWVyLmVsKCkpIHtcbiAgICAgICAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcG9zdGVySW1nLmVsKCkpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9LFxuICAgIGVsOiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCbGFja1Bvc3RlckZhY3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFzZVZpZGVvSnNDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbnZhciBCbGFja1Bvc3RlciA9IHJlcXVpcmUoJy4vYmxhY2stcG9zdGVyJykoYmFzZVZpZGVvSnNDb21wb25lbnQpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuLy8gVklETEEtNDM5MTogSGFjayB0byBwcmV2ZW50IHVuY2F1Z2h0IGV4Y2VwdGlvbiB3aGVuIGxvYWRpbmcgTWFpbCBPbmxpbmUgcGx1Z2luIGludG8gY2hpbGQgaWZyYW1lIG9mIHZpZGVvLmpzIHdpbmRvd1xuLy8gVklETEEtNDU2MzogSGFjayBmb3IgRWRnZSB3aGVuIEJyaWdodGNvdmUgcGxheWVyIGVtYmVkIGluIG5vdCBmcmllbmRseSBpZnJhbWVcbmlmIChwYXJlbnQgJiYgd2luZG93ICE9PSBwYXJlbnQgJiYgdXRpbGl0aWVzLnNjcmlwdExvYWRlZEluSWZyYW1lKCkpIHtcbiAgQmxhY2tQb3N0ZXIuY29uc3RydWN0b3IgPSBwYXJlbnQuT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcjtcbn1cblxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQmxhY2tQb3N0ZXInLCB2aWRlb2pzLmV4dGVuZChiYXNlVmlkZW9Kc0NvbXBvbmVudCwgQmxhY2tQb3N0ZXIpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RDbGllbnQgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUQ2xpZW50Jyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVEVycm9yJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC92YXN0VXRpbCcpO1xuXG52YXIgVkFTVEludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUSW50ZWdyYXRvcicpO1xudmFyIFZQQUlESW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy92cGFpZC9WUEFJREludGVncmF0b3InKTtcbnZhciBJY29uSW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy9pY29uL0ljb25JbnRlZ3JhdG9yJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vdXRpbHMvZG9tJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBWaWV3YWJpbGl0eVRyYWNraW5nID0gcmVxdWlyZShcIi4uL3V0aWxzL2FuVmlkZW9WaWV3YWJpbGl0eVwiKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVkFTVFBsdWdpbihvcHRpb25zKSB7XG4gIHZhciBzbmFwc2hvdDtcbiAgdmFyIHBsYXllciA9IHRoaXM7XG4gIHZhciB2YXN0ID0gbmV3IFZBU1RDbGllbnQoe3dyYXBwZXJMaW1pdDogb3B0aW9ucy53cmFwcGVyTGltaXR9KTtcbiAgdmFyIGFkc0NhbmNlbGVkID0gZmFsc2U7XG4gIHZhciBwbGF5bGlzdE5leHRCdXR0b247XG4gIHZhciBkZWZhdWx0T3B0cyA9IHtcbiAgICAvLyBtYXhpbXVtIGFtb3VudCBvZiB0aW1lIGluIG1zIHRvIHdhaXQgdG8gcmVjZWl2ZSBgYWRzcmVhZHlgIGZyb20gdGhlIGFkXG4gICAgLy8gaW1wbGVtZW50YXRpb24gYWZ0ZXIgcGxheSBoYXMgYmVlbiByZXF1ZXN0ZWQuIEFkIGltcGxlbWVudGF0aW9ucyBhcmVcbiAgICAvLyBleHBlY3RlZCB0byBsb2FkIGFueSBkeW5hbWljIGxpYnJhcmllcyBhbmQgbWFrZSBhbnkgcmVxdWVzdHMgdG8gZGV0ZXJtaW5lXG4gICAgLy8gYWQgcG9saWNpZXMgZm9yIGEgdmlkZW8gZHVyaW5nIHRoaXMgdGltZS5cbiAgICB0aW1lb3V0OiA1MDAsXG5cbiAgICAvL1RPRE86ZmluaXNoIHRoaXMgSU9TIEZJWFxuICAgIC8vV2hlbmV2ZXIgeW91IHBsYXkgYW4gYWRkIG9uIElPUywgdGhlIG5hdGl2ZSBwbGF5ZXIga2lja3MgaW4gYW5kIHdlIGxvb3NlIGNvbnRyb2wgb2YgaXQuIE9uIHZlcnkgaGVhdnkgcGFnZXMgdGhlICdwbGF5JyBldmVudFxuICAgIC8vIE1heSBvY2N1ciBhZnRlciB0aGUgdmlkZW8gY29udGVudCBoYXMgYWxyZWFkeSBzdGFydGVkLiBUaGlzIGlzIHdyb25nIGlmIHlvdSB3YW50IHRvIHBsYXkgYSBwcmVyb2xsIGFkIHRoYXQgbmVlZHMgdG8gaGFwcGVuIGJlZm9yZSB0aGUgdXNlclxuICAgIC8vIHN0YXJ0cyB3YXRjaGluZyB0aGUgY29udGVudC4gVG8gcHJldmVudCB0aGlzIHVzZWNcbiAgICBpb3NQcmVyb2xsQ2FuY2VsVGltZW91dDogMjAwMCxcblxuICAgIC8vIG1heGltdW4gYW1vdW50IG9mIHRpbWUgZm9yIHRoZSBhZCB0byBhY3R1YWxseSBzdGFydCBwbGF5aW5nLiBJZiB0aGlzIHRpbWVvdXQgZ2V0c1xuICAgIC8vIHRyaWdnZXJlZCB0aGUgYWRzIHdpbGwgYmUgY2FuY2VsbGVkXG4gICAgYWRDYW5jZWxUaW1lb3V0OiAzMDAwLFxuXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRoYXQgY29uZmlndXJlcyB0aGUgcGxheWVyIHRvIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluXG4gICAgLy8gdGhlIGN1cnJlbnQgdmlkZW9cbiAgICBwbGF5QWRBbHdheXM6IGZhbHNlLFxuXG4gICAgLy8gRmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYWRzIGJ5IGRlZmF1bHQuXG4gICAgYWRzRW5hYmxlZDogdHJ1ZSxcblxuICAgIC8vIEJvb2xlYW4gZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgcmVzaXplIHdpdGggd2luZG93LnJlc2l6ZSBvciBvcmllbnRhdGlvbmNoYW5nZVxuICAgIGF1dG9SZXNpemU6IHRydWUsXG5cbiAgICAvLyB2ZXJib3NpdHkgb2YgY29uc29sZSBsb2dnaW5nOlxuICAgIC8vIDAgLSBlcnJvclxuICAgIC8vIDEgLSBlcnJvciwgd2FyblxuICAgIC8vIDIgLSBlcnJvciwgd2FybiwgaW5mb1xuICAgIC8vIDMgLSBlcnJvciwgd2FybiwgaW5mbywgbG9nXG4gICAgLy8gNCAtIGVycm9yLCB3YXJuLCBpbmZvLCBsb2csIGRlYnVnXG4gICAgdmVyYm9zaXR5OiAwLFxuICAgIFxuICAgIC8vIHBsdWdpbiBvcHRpb25zXG4gICAgcGxheXNJbkJyZWFrOiBmYWxzZSxcbiAgICBza2lwVGV4dDogJ1NraXAgaW4gJSVUSU1FJSUgc2Vjb25kcycsXG4gICAgc2tpcEJ1dHRvblRleHQ6ICdTa2lwIGFkJyxcbiAgICBpbml0aWFsUGxheWJhY2s6IFwiYXV0b1wiLFxuICAgIGluaXRpYWxBdWRpbzogXCJvblwiLFxuICAgIGRpc2FibGVDbGlja1RocnU6IGZhbHNlLFxuICAgIFxuICAgIGZpcnN0UGxheTogdHJ1ZVxuICB9O1xuXG4gIHZhciBzZXR0aW5ncyA9IHV0aWxpdGllcy5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCBvcHRpb25zIHx8IHt9KTtcblxuICAvLyBnZXQgQnJpZ2h0Y292ZSBQbGF5ZXIgSWRcbiAgdmFyIHBsYXllcklkID0gJyc7XG4gIGlmIChwbGF5ZXIuYmNpbmZvKSB7XG4gICAgcGxheWVySWQgPSBwbGF5ZXIuYmNpbmZvLnBsYXllcklkO1xuICB9XG4gIGVsc2UgaWYgKHBsYXllci5vcHRpb25zXyAmJiBwbGF5ZXIub3B0aW9uc19bJ2RhdGEtcGxheWVyJ10pIHtcbiAgICBwbGF5ZXJJZCA9IHBsYXllci5vcHRpb25zX1snZGF0YS1wbGF5ZXInXTtcbiAgfVxuICBsb2dnZXIuc2V0UGxheWVySWQocGxheWVySWQgKyAnLScgKyBwbGF5ZXIuZWxfLmlkKTtcblxuICBpZih1dGlsaXRpZXMuaXNVbmRlZmluZWQoc2V0dGluZ3MuYWRUYWdVcmwpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MudXJsKSl7XG4gICAgc2V0dGluZ3MuYWRUYWdVcmwgPSBzZXR0aW5ncy51cmw7XG4gIH1cblxuICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKHNldHRpbmdzLmFkVGFnVXJsKSkge1xuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gdXRpbGl0aWVzLmVjaG9GbihzZXR0aW5ncy5hZFRhZ1VybCk7XG4gIH1cbiAgXG4gIGlmIChzZXR0aW5ncy52aWV3YWJpbGl0eSAmJiBzZXR0aW5ncy52aWV3YWJpbGl0eS5jb25maWcpIHtcblx0ICBzZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nID0gbmV3IFZpZXdhYmlsaXR5VHJhY2tpbmcocGxheWVyKTtcbiAgfVxuICBcbiAgd2luZG93Ll9tb2xTZXR0aW5ncyA9IHNldHRpbmdzO1xuICB3aW5kb3cuX3RpbWVvdXRJZHMgPSBbXTtcbiAgXG4gIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gbnVsbDtcblxuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1hNTCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgdGhlIHBhc3NlZCBhZFRhZ1hNTCBvcHRpb24gZG9lcyBub3QgY29udGFpbiBhIGZ1bmN0aW9uJykpO1xuICB9XG5cbiAgaWYgKCF1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oc2V0dGluZ3MuYWRUYWdYTUwpKSB7XG4gICAgcmV0dXJuIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCdvbiBWaWRlb0pTIFZBU1QgcGx1Z2luLCBtaXNzaW5nIGFkVGFnVXJsIG9uIG9wdGlvbnMgb2JqZWN0JykpO1xuICB9XG5cbiAgbG9nZ2VyLnNldFZlcmJvc2l0eSAoc2V0dGluZ3MudmVyYm9zaXR5KTtcblxuICBpZiAoIXNldHRpbmdzLnBsYXlzSW5CcmVhaykge1xuXHQgIHNuYXBzaG90ID0gcGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QocGxheWVyKTtcblx0ICBzbmFwc2hvdC5wbGF5aW5nID0gdHJ1ZTtcdC8vIGZvcmNlIHRvIHBsYXkgY29udGVudCBhZnRlciBhZCBlbmRlZFxuICB9XG4gIFxuICBpZiAoc2V0dGluZ3MuaW5pdGlhbFBsYXliYWNrID09PSAnY2xpY2snKSB7XG5cdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcbiAgfVxuXG4gIHBsYXllclV0aWxzLnByZXBhcmVGb3JBZHMocGxheWVyKTtcblxuICBpZiAoc2V0dGluZ3MucGxheUFkQWx3YXlzKSB7XG4gICAgLy8gTm8gbWF0dGVyIHdoYXQgaGFwcGVucyB3ZSBwbGF5IGEgbmV3IGFkIGJlZm9yZSB0aGUgdXNlciBzZWVzIHRoZSB2aWRlbyBhZ2Fpbi5cbiAgICBwbGF5ZXIub24oJ3Zhc3QuY29udGVudEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5yZXNldCcpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBwbGF5ZXIub24oJ3Zhc3QuZmlyc3RQbGF5JywgdHJ5VG9QbGF5UHJlcm9sbEFkKTtcblxuICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy9JZiB3ZSBhcmUgcmVzZXRpbmcgdGhlIHBsdWdpbiwgd2UgZG9uJ3Qgd2FudCB0byByZXN0b3JlIHRoZSBjb250ZW50XG4gICAgc25hcHNob3QgPSBudWxsO1xuICAgIGNhbmNlbEFkcygpO1xuICB9KTtcblxuICBwbGF5ZXIudmFzdCA9IHtcbiAgICBpc0VuYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXR0aW5ncy5hZHNFbmFibGVkO1xuICAgIH0sXG5cbiAgICBlbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXR0aW5ncy5hZHNFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBwbGF5ZXIudmFzdDtcblxuICAvKioqKiBMb2NhbCBmdW5jdGlvbnMgKioqKi9cbiAgZnVuY3Rpb24gdHJ5VG9QbGF5UHJlcm9sbEFkKCkge1xuXHQvLyBtYWtlIHN1cmUgd2UgYXJlIGdvaW5nIHRvIHVzZSBzYW1lIHBsdWdpbiBpbnN0YW5jZSB0d2ljZVxuXHRwbGF5ZXIub2ZmKCd2YXN0LmZpcnN0UGxheScsIHRyeVRvUGxheVByZXJvbGxBZCk7XG5cblx0aWYgKHBsYXllci52YXN0LmFkc0NhbmNlbGxlZCkge1xuICAgIGRlbGV0ZSBwbGF5ZXIudmFzdC5hZHNDYW5jZWxsZWQ7XG4gIH1cblx0cGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG5cblx0aWYgKHNldHRpbmdzLmluaXRpYWxBdWRpbyA9PT0gJ29mZicpIHtcblx0XHRzZXR0aW5ncy5jb250ZW50Vm9sdW1lID0ge211dGVkOiBwbGF5ZXIubXV0ZWQoKSwgdm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9O1xuXHRcdHBsYXllci5tdXRlZCh0cnVlKTtcblx0fVxuXG4gICAgLy9XZSByZW1vdmUgdGhlIHBvc3RlciB0byBwcmV2ZW50IGZsaWNrZXJpbmcgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgc3RhcnRzIHBsYXlpbmdcbiAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRFbmQnXSwgZnVuY3Rpb24gKCkge1xuICAgIFx0cGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgICByZW1vdmVBZFVuaXQoKTtcbiAgICAgIHJlc3RvcmVWaWRlb0NvbnRlbnQoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCdhZEZpbmlzaGVkJyk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBjaGVja0Fkc0VuYWJsZWQsXG4gICAgICBwcmVwYXJlUGxheWVyRm9yQWQsXG4gICAgICBzdGFydEFkQ2FuY2VsVGltZW91dCxcbiAgICAgIHBsYXlQcmVyb2xsQWRcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdHJhY2tBZEVycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZEVuZCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xuICAgICAgaWYgKHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdCkge1xuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQgPSBudWxsOyAvL1dlIHJlbW92ZSB0aGUgYWRVbml0XG4gICAgICAgIHBsYXllci52YXN0LlZQQUlEID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5fbW9sU2V0dGluZ3MuZmlyc3RQbGF5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdG9yZVZpZGVvQ29udGVudCgpIHtcbiAgICAgIHNldHVwQ29udGVudEV2ZW50cygpO1xuICAgICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICAgIHBsYXllclV0aWxzLnJlc3RvcmVQbGF5ZXJTbmFwc2hvdChwbGF5ZXIsIHNuYXBzaG90KTtcbiAgICAgICAgc25hcHNob3QgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwQ29udGVudEV2ZW50cygpIHtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmIChldnQudHlwZSAhPT0gJ3BsYXlpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuY29udGVudFN0YXJ0Jyk7XG5cbiAgICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZW5kZWQnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC50eXBlID09PSAnZW5kZWQnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50RW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQWRzRW5hYmxlZChuZXh0KSB7XG4gICAgICBpZiAoc2V0dGluZ3MuYWRzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbmV4dChudWxsKTtcbiAgICAgIH1cbiAgICAgIG5leHQobmV3IFZBU1RFcnJvcignQWRzIGFyZSBub3QgZW5hYmxlZCcpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlUGxheWVyRm9yQWQobmV4dCkge1xuICAgICAgaWYgKGNhblBsYXlQcmVyb2xsQWQoKSkge1xuICAgICAgICAvL3NuYXBzaG90ID0gcGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QocGxheWVyKTtcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIGFkZFNwaW5uZXJJY29uKCk7XG5cbiAgICAgICAgaWYocGxheWVyLnBhdXNlZCgpKSB7XG4gICAgICAgICAgbmV4dChudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5aW5nJ10sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICBuZXh0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ3ZpZGVvIGNvbnRlbnQgaGFzIGJlZW4gcGxheWluZyBiZWZvcmUgcHJlcm9sbCBhZCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5QbGF5UHJlcm9sbEFkKCkge1xuICAgICAgcmV0dXJuICF1dGlsaXRpZXMuaXNJUGhvbmUoKSB8fCBwbGF5ZXIuY3VycmVudFRpbWUoKSA8PSBzZXR0aW5ncy5pb3NQcmVyb2xsQ2FuY2VsVGltZW91dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEFkQ2FuY2VsVGltZW91dChuZXh0KSB7XG4gICAgICB2YXIgYWRDYW5jZWxUaW1lb3V0SWQ7XG4gICAgICBhZHNDYW5jZWxlZCA9IGZhbHNlO1xuXG4gICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgIFx0ICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBzdGFydCBwbGF5aW5nLiBZb3UgbWF5IG5lZWQgdG8gaW5jcmVhc2UgYWRTdGFydFRpbWVvdXQuJywgNDAyKSk7XG4gICAgICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgICAgICBpZiAocGxheWVyLnZhc3QuVlBBSUQpIHtcbiAgICAgICAgXHRwbGF5ZXIudHJpZ2dlcigndnBhaWQuYWRFbmQnKTtcbiAgICAgICAgfVxuICAgICAgfSwgc2V0dGluZ3MuYWRDYW5jZWxUaW1lb3V0KTtcblxuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ2NsZWFyQWRDYW5jZWxUaW1lb3V0J10sIGNsZWFyQWRDYW5jZWxUaW1lb3V0KTtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFcnJvcicsICd2cGFpZC5hZEVuZCcsICd2cGFpZC5hZEVycm9yJ10sIGZ1bmN0aW9uKCkge1xuICAgIFx0ICBjbGVhckFkQ2FuY2VsVGltZW91dCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICAgIGZ1bmN0aW9uIGNsZWFyQWRDYW5jZWxUaW1lb3V0KCkge1xuICAgICAgICBpZiAoYWRDYW5jZWxUaW1lb3V0SWQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYWRDYW5jZWxUaW1lb3V0SWQpO1xuICAgICAgICAgIGFkQ2FuY2VsVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXh0KG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNwaW5uZXJJY29uKCkge1xuICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNwaW5uZXJJY29uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTcGlubmVySWNvbigpIHtcbiAgICAgIC8vSU1QT1JUQU5UIE5PVEU6IFdlIHJlbW92ZSB0aGUgc3Bpbm5lckljb24gYXN5bmNocm9ub3VzbHkgdG8gZ2l2ZSB0aW1lIHRvIHRoZSBicm93c2VyIHRvIHN0YXJ0IHRoZSB2aWRlby5cbiAgICAgIC8vIElmIHdlIHJlbW92ZSBpdCBzeW5jaHJvbm91c2x5IHdlIHNlZSBhIGZsYXNoIG9mIHRoZSBjb250ZW50IHZpZGVvIGJlZm9yZSB0aGUgYWQgc3RhcnRzIHBsYXlpbmcuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xuICAgICAgICAvLyBWSURMQS0yMjY4IChTYWZhcmkgMTEgb24gTWFjIC0gU3Bpbm5lciBrZWVwcyBnb2luZyBvbiBmaXJzdCBmcmFtZSBvZiBhZClcblx0XHRwbGF5ZXIubG9hZGluZ1NwaW5uZXIuZWxfLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxMDApO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsQWRzKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkc0NhbmNlbCcpO1xuICAgIGFkc0NhbmNlbGVkID0gdHJ1ZTtcblxuICAgIHBsYXllci52YXN0LmFkc0NhbmNlbGxlZCA9IHRydWU7ICAgIC8vIFNldCBhIGZsYWcgdG8gaW50ZXJydXB0IHRoZSBhZCBsb2FkaW5nIHdhdGVyZmFsbCAtIG5lZWRlZCB0byBhdm9pZCBhIHJhY2UgY29uZGl0aW9uIHdoZXJlIHRoZSBhZCBjb3VsZCBzdGlsbCBwbGF5IGFmdGVyIGJlaW5nIGNhbmNlbGxlZC5cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlQcmVyb2xsQWQoY2FsbGJhY2spIHtcbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZ2V0VmFzdFJlc3BvbnNlLFxuICAgICAgcGxheUFkXG4gICAgXSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFzdFJlc3BvbnNlKGNhbGxiYWNrKSB7XG4gICAgdmFzdC5nZXRWQVNUUmVzcG9uc2Uoc2V0dGluZ3MuYWRUYWdVcmwgPyBzZXR0aW5ncy5hZFRhZ1VybCgpIDogc2V0dGluZ3MuYWRUYWdYTUwsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gICAgLy9UT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byBzdG9wIHRoZSBwbGF5LiBUaGUgJ3BsYXlQcmVyb2xsV2F0ZXJmYWxsJyBlbmRzIGluIGFuIGluY29uc2lzdGVudCBzaXR1YXRpb25cbiAgICAvL0lmIHRoZSBzdGF0ZSBpcyBub3QgJ3ByZXJvbGw/JyBpdCBtZWFucyB0aGUgYWRzIHdlcmUgY2FuY2VsZWQgdGhlcmVmb3JlLCB3ZSBicmVhayB0aGUgd2F0ZXJmYWxsXG4gICAgaWYgKGFkc0NhbmNlbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLypDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNiBNb2F0IEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4qL1xuICAgIGZ1bmN0aW9uIGluaXRNb2F0VHJhY2tpbmcoYSxjLGQsaCxrKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGI9W107Yz17YWREYXRhOntpZHM6YyxkdXJhdGlvbjpkLHVybDprfSxkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe3RoaXMuc2VuZEV2ZW50PyhiJiYoYi5wdXNoKGEpLGE9YixiPSExKSx0aGlzLnNlbmRFdmVudChhKSk6Yi5wdXNoKGEpO319O2Q9XCJfbW9hdEFwaVwiK01hdGguZmxvb3IoMUU4Kk1hdGgucmFuZG9tKCkpO3ZhciBlLGc7dHJ5e2U9YS5vd25lckRvY3VtZW50LGc9ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3c7fWNhdGNoKGwpe2U9ZG9jdW1lbnQsZz13aW5kb3c7fWdbZF09YztmLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjthJiZhLmluc2VydEJlZm9yZShmLGEuY2hpbGROb2Rlc1swXXx8bnVsbCk7Zi5zcmM9XCJodHRwczovL3oubW9hdGFkcy5jb20vXCIraCtcIi9tb2F0dmlkZW8uanMjXCIrZDtyZXR1cm4gYzt9XG4gICAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBudWxsO1xuICAgIGlmICh2YXN0UmVzcG9uc2UuYWRzICYmIHZhc3RSZXNwb25zZS5hZHMubGVuZ3RoID4gMCAmJiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZSAmJiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0KSB7XG4gIFx0ICB2YXIgaWRzID0ge2xldmVsMTogdmFzdFJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5hZHZpZCxcbiAgXHRcdFx0ICAgICBsZXZlbDI6IHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3BnaWQsXG4gIFx0XHRcdCAgICAgbGV2ZWwzOiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmNwaWQsXG4gIFx0XHRcdCAgICAgbGV2ZWw0OiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmNyaWR9O1xuICBcdCAgaWYgKHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuc2l0ZV9pZCkge1xuICBcdFx0ICBpZHMuc2xpY2VyMSA9IHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuc2l0ZV9pZDtcbiAgXHQgIH1cbiAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gaW5pdE1vYXRUcmFja2luZyhwbGF5ZXIuZWxfLCBpZHMsIHBsYXllci5kdXJhdGlvbigpLCB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LnBhcnRuZXJjb2RlLCBwbGF5ZXIuY3VycmVudFNvdXJjZSgpLnNyYyk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcpIHtcbiAgXHQgIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZy5pbml0KHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHkuY29udGV4dElkLCBcbiAgXHRcdFx0ICBwbGF5ZXIuZHVyYXRpb24oKSwgcGxheWVyLmVsXy5vZmZzZXRXaWR0aCwgcGxheWVyLmVsXy5vZmZzZXRIZWlnaHQpO1xuICAgIH1cblxuICAgIHZhciBpc0FkVlBBSUQgID0gaXNWUEFJRCh2YXN0UmVzcG9uc2UpO1xuICAgIHZhciBhZEludGVncmF0b3IgPSBpc0FkVlBBSUQgPyBuZXcgVlBBSURJbnRlZ3JhdG9yKHBsYXllciwgc2V0dGluZ3MpIDogbmV3IFZBU1RJbnRlZ3JhdG9yKHBsYXllcik7XG4gICAgdmFyIGFkRmluaXNoZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNBZFZQQUlEKSB7XG4gICAgXHRwbGF5ZXIudHJpZ2dlcignY2xlYXJBZENhbmNlbFRpbWVvdXQnKTtcbiAgICB9XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC50eXBlID09PSAndmFzdC5hZFN0YXJ0Jykge1xuICAgICAgICBhZGRBZHNMYWJlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVBZHNMYWJlbCk7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XG4gICAgICBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKTtcbiAgICB9XG5cbiAgICBwbGF5ZXIudmFzdC52YXN0UmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XG4gICAgbG9nZ2VyLmRlYnVnIChcImNhbGxpbmcgYWRJbnRlZ3JhdG9yLnBsYXlBZCgpIHdpdGggdmFzdFJlc3BvbnNlOlwiLCB2YXN0UmVzcG9uc2UpO1xuICAgIHBsYXllci52YXN0LmFkVW5pdCA9IGFkSW50ZWdyYXRvci5wbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjayk7XG4gICAgcGxheWVyLnZhc3QuVlBBSUQgPSBpc0FkVlBBSUQ7XG5cbiAgICB2YXIgYWRJY29uSW50ZWdyYXRvcjtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKiovXG4gICAgZnVuY3Rpb24gYWRkQWRzTGFiZWwoKSB7XG4gICAgXHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5wbGF5c0luQnJlYWspIHtcbiAgICBcdFx0cGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlVGltZUNvbnRyb2xzKTtcbiAgICBcdH1cbiAgICAgIGlmIChhZEZpbmlzaGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhc3RSZXNwb25zZS5pY29ucyAmJiB2YXN0UmVzcG9uc2UuaWNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBhZEljb25JbnRlZ3JhdG9yID0gbmV3IEljb25JbnRlZ3JhdG9yKHBsYXllcik7XG4gICAgICAgIGFkSWNvbkludGVncmF0b3IucmVuZGVySWNvbnModmFzdFJlc3BvbnNlLmljb25zLCBjYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Zqcy1uZXh0LWJ1dHRvbicpO1xuICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGxheWxpc3ROZXh0QnV0dG9uID0gZWxlbXNbMF07XG4gICAgICAgIHBsYXlsaXN0TmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFkc0xhYmVsKCkge1xuICAgIFx0aWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MucGxheXNJbkJyZWFrKSB7XG4gICAgXHRcdHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVUaW1lQ29udHJvbHMpO1xuICAgIFx0XHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy50aW1lT2Zmc2V0KSB7XG4gICAgICAgICAgc2hvd09yaWdpbmFsVGltZURpc3BsYXkodHJ1ZSk7XG4gICAgICAgICAgdmFyIGJjVGltZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmNfdGltZV9kaXNwbGF5Jyk7XG4gICAgICAgICAgaWYgKGJjVGltZURpc3BsYXkpIHtcbiAgICAgICAgICAgIGJjVGltZURpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgXHRcdH1cbiAgICBcdH1cbiAgICAgIGlmIChwbGF5bGlzdE5leHRCdXR0b24pIHtcbiAgICAgICAgcGxheWxpc3ROZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgcGxheWxpc3ROZXh0QnV0dG9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGFkRmluaXNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dPcmlnaW5hbFRpbWVEaXNwbGF5KHNob3cpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdjdXJyZW50VGltZURpc3BsYXknKS5lbF8uY2hpbGRyZW47XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbltpXS5pZCAhPSAnYmNfdGltZV9kaXNwbGF5Jykge1xuICAgICAgICAgIGNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lQ29udHJvbHMoKSB7XG4gICAgXHR2YXIgY29udmVydFRpbWVUb1N0ciA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICBcdFx0dmFyIHNlY3MgPSBwYXJzZUludCh0aW1lICsgMC41KTtcbiAgICBcdFx0dmFyIG1pbnMgPSBwYXJzZUludChzZWNzIC8gNjApO1xuICAgIFx0XHRzZWNzIC09IChtaW5zICogNjApO1xuICAgIFx0XHR2YXIgc3RyID0gbWlucy50b1N0cmluZygpICsgJzonICsgKHNlY3MgPiA5ID8gJycgIDogJzAnKSArIHNlY3MudG9TdHJpbmcoKTtcbiAgICBcdFx0cmV0dXJuIHN0cjtcbiAgICBcdH07XG4gICAgXHRcbiAgICAgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLmJyZWFrRHVyYXRpb24pIHtcbiAgICAgICAgaWYgKHBsYXllci5kdXJhdGlvbigpICE9IHdpbmRvdy5fbW9sU2V0dGluZ3MuYnJlYWtEdXJhdGlvbikge1xuICAgICAgICAgIGlmIChwbGF5ZXIuZHVyYXRpb24oKSkge1xuICAgICAgICAgICAgd2luZG93Ll9tb2xTZXR0aW5ncy5yZWFsVmlkZW9EdXJhdGlvbiA9IHBsYXllci5kdXJhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwbGF5ZXIuZHVyYXRpb24od2luZG93Ll9tb2xTZXR0aW5ncy5icmVha0R1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MudGltZU9mZnNldCkge1xuICAgICAgICB2YXIgYmNUaW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiY190aW1lX2Rpc3BsYXknKTtcbiAgICAgICAgaWYgKCFiY1RpbWVEaXNwbGF5KSB7XG4gICAgICAgICAgYmNUaW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdjdXJyZW50VGltZURpc3BsYXknKS5lbF8uYXBwZW5kQ2hpbGQoYmNUaW1lRGlzcGxheSk7XG4gICAgICAgICAgYmNUaW1lRGlzcGxheS5pZCA9ICdiY190aW1lX2Rpc3BsYXknO1xuICAgICAgICAgIGJjVGltZURpc3BsYXkuY2xhc3MgPSAndmpzLWN1cnJlbnQtdGltZS1kaXNwbGF5JztcbiAgICAgICAgICBiY1RpbWVEaXNwbGF5WydhcmlhLWxpdmUnXSA9ICdvZmYnO1xuICAgICAgICAgIGJjVGltZURpc3BsYXkuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidmpzLWNvbnRyb2wtdGV4dFwiPjwvc3Bhbj4wOjAwJztcbiAgICAgICAgICBzaG93T3JpZ2luYWxUaW1lRGlzcGxheShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2hvd09yaWdpbmFsVGltZURpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgIGJjVGltZURpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSArIHdpbmRvdy5fbW9sU2V0dGluZ3MudGltZU9mZnNldDtcbiAgICAgICAgYmNUaW1lRGlzcGxheS5jaGlsZE5vZGVzWzFdLm5vZGVWYWx1ZSA9IGNvbnZlcnRUaW1lVG9TdHIodGltZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldmVudE1hbnVhbFByb2dyZXNzKCkge1xuICAgICAgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGUgdXNlciBmb3J3YXJkZWQvcmV3b3VuZCB0aGUgYWRcbiAgICAgIHZhciBQUk9HUkVTU19USFJFU0hPTEQgPSAzO1xuICAgICAgdmFyIHByZXZpb3VzVGltZSA9IDA7XG4gICAgICB2YXIgc2tpcGFkX2F0dGVtcHRzID0gMDtcblxuICAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgcHJldmVudEFkU2Vlayk7XG4gICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJldmVudEFkU2tpcCk7XG5cbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVycm9yJ10sIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MpO1xuXG4gICAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTa2lwKCkge1xuICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxuICAgICAgICAvLyBhbmQgcmV2ZXJ0IHRpbWUgdG8gdGhlIHByZXZpb3VzICd2YWxpZCcgdGltZVxuICAgICAgICBpZiAoKHBsYXllci5kdXJhdGlvbigpIC0gcHJldmlvdXNUaW1lKSA+IFBST0dSRVNTX1RIUkVTSE9MRCkge1xuICAgICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsgLy8gdGhpcyByZWR1Y2UgdGhlIHZpZGVvIGppdHRlciBpZiB0aGUgSU9TIHNraXAgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgICBwbGF5ZXIucGxheSh0cnVlKTsgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIHRoZSBwbGF5IHRvIHB1dCB0aGUgdmlkZW8gZWxlbWVudCBiYWNrIGluIGEgdmFsaWQgc3RhdGVcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTZWVrKCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdmFyIHByb2dyZXNzRGVsdGEgPSBNYXRoLmFicyhjdXJyZW50VGltZSAtIHByZXZpb3VzVGltZSk7XG4gICAgICAgIGlmIChwcm9ncmVzc0RlbHRhID4gUFJPR1JFU1NfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgc2tpcGFkX2F0dGVtcHRzICs9IDE7XG4gICAgICAgICAgaWYgKHNraXBhZF9hdHRlbXB0cyA+PSAyKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShwcmV2aW91c1RpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZpb3VzVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XG4gICAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCBwcmV2ZW50QWRTZWVrKTtcbiAgICAgICAgcGxheWVyLm9mZignZW5kZWQnLCBwcmV2ZW50QWRTa2lwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0FkRXJyb3IoZXJyb3IsIHZhc3RSZXNwb25zZSkge1xuICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndmFzdC5hZEVycm9yJywgZXJyb3I6IGVycm9yfSk7XG4gICAgY2FuY2VsQWRzKCk7XG4gICAgbG9nZ2VyLmVycm9yICgnQUQgRVJST1I6JywgZXJyb3IubWVzc2FnZSwgZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZQQUlEKHZhc3RSZXNwb25zZSkge1xuICAgIHZhciBpLCBsZW47XG4gICAgdmFyIG1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBtZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodmFzdFV0aWwuaXNWUEFJRChtZWRpYUZpbGVzW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwiLyoqXG4gKiBWaWV3YWJpbGl0eSBXcmFwcGVyXG4gKi9cblxuLy92YXIgQU5WaWRlb1ZpZXdhYmlsaXR5VHJhY2tlciA9IHJlcXVpcmUoXCJhbi12aWRlby12aWV3YWJpbGl0eVwiKTsvL3ZpZXdhYmlsaXR5IGxpYnJhcnlcbnZhciBBTlZpZGVvVmlld2FiaWxpdHlUcmFja2VyID0gbnVsbDtcbnZhciBsb2dnZXIgPSByZXF1aXJlKFwiLi9jb25zb2xlTG9nZ2VyXCIpO1xudmFyIGRlYnVnID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBsb2dnZXIuZGVidWcobWVzc2FnZSk7XG59O1xudmFyIGluZm8gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIGxvZ2dlci5pbmZvKG1lc3NhZ2UpO1xufTtcblxudmFyIGh0bWw1VmlkZW9WaWV3YWJpbGl0eSA9IGZ1bmN0aW9uIChwbGF5ZXJfKSB7XG5cblx0dmFyIHBsYXllciA9IHBsYXllcl87XG4gICAgdmFyIHRyYWNrZXIgPSBudWxsO1xuICAgIHZhciBtYXBwZWRBY3Rpb25zID0ge1xuICAgICAgICBcInN0YXJ0XCI6IFwic3RhcnRcIixcbiAgICAgICAgXCJleHBhbmRcIjogXCJleHBhbmRcIixcbiAgICAgICAgXCJjb2xsYXBzZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgIFwidW5tdXRlXCI6IFwic291bmRfb25cIixcbiAgICAgICAgXCJtdXRlXCI6IFwic291bmRfb2ZmXCIsXG4gICAgICAgIFwicGF1c2VcIjogXCJwYXVzZVwiLFxuICAgICAgICBcInJlc3VtZVwiOiBcInJlc3VtZVwiLFxuICAgICAgICBcImFkLWNsaWNrXCI6IFwiY2xpY2tcIixcbiAgICAgICAgXCJza2lwXCI6IFwic3RvcFwiLFxuICAgICAgICBcImNvbXBsZXRlXCI6IFwic3RvcFwiLFxuICAgICAgICBcImZ1bGxzY3JlZW5cIjogXCJmdWxsc2NyZWVuXCIsXG4gICAgICAgIFwiZXhpdEZ1bGxzY3JlZW5cIjogXCJleGl0RnVsbHNjcmVlblwiXG4gICAgfTtcblxuICAgIHZhciBmaXJlT25jZUV2ZW50cyA9IHtcbiAgICAgICAgXCJzdGFydFwiOiBmYWxzZSxcbiAgICAgICAgXCJza2lwXCI6IGZhbHNlLFxuICAgICAgICBcImNvbXBsZXRlXCI6IGZhbHNlXG4gICAgfTtcblxuICAgIHZhciBnZXRDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5ICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHkuY29uZmlnO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0UGxheWVyRE9NRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllci5lbF87XG4gICAgfTtcblxuICAgIHZhciBnZXRWaWRlb0luZm8gPSBmdW5jdGlvbiAoZHVyYXRpb24sIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtkdXJhdGlvbjogZHVyYXRpb24sIHc6IHdpZHRoLCBoOiBoZWlnaHR9O1xuICAgIH07XG5cblx0Ly8gVXNpbmcgY2FsbGJhY2sgZm9yIGxvZ3MgaGVscHMgZ2V0dGluZyBhIHJpZ2h0IGxvZ2dlciBpbiBlYWNoIGFwcFxuXHR2YXIgbG9nZ2VyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoX2xldmVsLCBfbWVzc2FnZSkge1xuXHRcdGlmIChfbGV2ZWwgJiYgX2xldmVsID09PSBcImRlYnVnXCIpIHtcblx0XHRcdGRlYnVnKF9tZXNzYWdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5mbyhfbWVzc2FnZSk7XG5cdFx0fVxuICAgIH07XG5cbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoY29udGV4dElkLCBkdXJhdGlvbiwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBpZiAoIUFOVmlkZW9WaWV3YWJpbGl0eVRyYWNrZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAgIFxuICAgICAgICBpbmZvKFwiaW5pdGlhbGl6ZSB3aXRoIGR1cmF0aW9uOiBcIiArIGR1cmF0aW9uICsgXCIsIHdpZHRoOiBcIiArIHdpZHRoICsgXCIsIGhlaWdodDogXCIgKyBoZWlnaHQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdHJhY2tlciA9IG5ldyBBTlZpZGVvVmlld2FiaWxpdHlUcmFja2VyKFxuXHRcdFx0XHRnZXRDb25maWcoKSxcbiAgICAgICAgICAgICAgICBnZXRQbGF5ZXJET01FbGVtZW50KCksXG4gICAgICAgICAgICAgICAgZ2V0VmlkZW9JbmZvKGR1cmF0aW9uLCB3aWR0aCwgaGVpZ2h0KSwgLy8gVGhlIGR1cmF0aW9uIG9mIHRoZSB2aWRlbyBhZFxuICAgICAgICAgICAgICAgIGNvbnRleHRJZCxcblx0XHRcdFx0bG9nZ2VyQ2FsbGJhY2tcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgZGVidWcoXCJlcnJvciBvbiB2aWV3YWJpbGl0eSBsaWJyYXJ5OiBcIik7XG4gICAgICAgICAgICBkZWJ1ZyhleCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLmludm9rZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50Xykge1xuICAgICAgICBpZiAoIUFOVmlkZW9WaWV3YWJpbGl0eVRyYWNrZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1JlYWR5ICYmIGV2ZW50XyAmJiBtYXBwZWRBY3Rpb25zW2V2ZW50X10pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYoZmlyZU9uY2VFdmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnRfKSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGZpcmVPbmNlRXZlbnRzW2V2ZW50X10pe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyhcInN1cHJlc3NpbmcgZmlyZU9uY2VFdmVudHMgZXZlbnQgYXMgaXQgaXMgYWxyZWFkeSBmaXJlZCBvbmNlIGJ5IHZpZXdhYmlsaXR5IGxpYnJhcnk6IFwiICsgbWFwcGVkQWN0aW9uc1tldmVudF9dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZU9uY2VFdmVudHNbZXZlbnRfXSA9IHRydWU7IC8vIG1hcmsgdGhhdCB0aGUgZXZlbnQgaGFzIGJlZW4gZmlyZWQuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5mbyhcImV2ZW50IGludm9rZWQgYnkgdmlld2FiaWxpdHkgbGlicmFyeTogXCIgKyBtYXBwZWRBY3Rpb25zW2V2ZW50X10pO1xuICAgICAgICAgICAgICAgIHRyYWNrZXIubm90aWZ5RXZlbnQobWFwcGVkQWN0aW9uc1tldmVudF9dKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJlcnJvciBvbiB2aWV3YWJpbGl0eSBsaWJyYXJ5OiBcIik7XG4gICAgICAgICAgICAgICAgZGVidWcoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuXG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBodG1sNVZpZGVvVmlld2FiaWxpdHk7IiwiLy9TbWFsbCBzdWJzZXQgb2YgYXN5bmNcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgYXN5bmMgPSB7fTtcblxuYXN5bmMuc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHNldFRpbWVvdXQoZm4sIDApO1xufTtcblxuYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm4ubmV4dCgpO1xuICAgIH07XG4gICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpIDogbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBmbjtcbiAgfTtcbiAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbn07XG5cblxuYXN5bmMud2F0ZXJmYWxsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0YXNrcykpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byB3YXRlcmZhbGwgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnKTtcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgfVxuICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG4gIHZhciB3cmFwSXRlcmF0b3IgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcbn07XG5cbmFzeW5jLndoZW4gPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBjYWxsYmFjaykge1xuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImFzeW5jLndoZW4gZXJyb3I6IG1pc3NpbmcgY2FsbGJhY2sgYXJndW1lbnRcIik7XG4gIH1cblxuICB2YXIgaXNBbGxvd2VkID0gdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uZGl0aW9uKSA/IGNvbmRpdGlvbiA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFjb25kaXRpb247XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gICAgdmFyIG5leHQgPSBhcmdzLnBvcCgpO1xuXG4gICAgaWYgKGlzQWxsb3dlZC5hcHBseShudWxsLCBhcmdzKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xuICAgIHJldHVybiBuZXh0LmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYztcblxuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF92ZXJib3NpdHkgPSAwO1xudmFyIF9wcmVmaXggPSBcIltNT0wtUGx1Z2luXCI7XG52YXIgX3BsYXllcklkID0gJyc7XG52YXIgX2FzdERlYnVnO1xuXG5mdW5jdGlvbiBzZXRQbGF5ZXJJZCAoaWQpXG57XG4gIF9wbGF5ZXJJZCA9IGlkO1xufVxuXG4vLyBkZXRlcm1pbmUgdGhlIG1heGltdW0gZGVidWcgbGV2ZWwgZnJvbSB0aGUgcGFnZSBVUkxcbmZ1bmN0aW9uIHNldERlYnVnTGV2ZWxGcm9tUGFnZSgpIHtcbiAgdHJ5IHtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBuZXcgbGV2ZWxcbiAgICBfYXN0RGVidWcgPSAoZ2V0UGFyYW1ldGVyQnlOYW1lKCdhc3RfZGVidWcnKS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykgPyA0IDogMDtcblxuICAgIC8vIHRoZSBoaWdoZXN0IChsZWFzdCByZXN0cmljdGl2ZSBkZWJ1ZyBsZXZlbCkgYWx3YXlzIHdpbnNcbiAgICBfdmVyYm9zaXR5ID0gTWF0aC5tYXgoX3ZlcmJvc2l0eSwgX2FzdERlYnVnKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuLy8gZ2V0IGEgbmFtZWQgcGFyYW1ldGVyIGZyb20gdGhlIHF1ZXJ5c3RyaW5nXG5mdW5jdGlvbiBnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSkge1xuICAvLyBhY2Nlc2luZyB3aW5kb3cgbWlnaHQgZmFpbCBhdCB0aGUgYnJvd3NlciBsZXZlbCwgd2UgY2FuJ3QgcmVhbGx5IHRlc3QgZm9yIGl0LFxuICAvLyBzbyB0aGVyZSBhcmUgYSBmZXcgbmVzdGVkIHRyeS9jYXRjaCBibG9ja3MgaGVyZVxuICB0cnkge1xuICAgIHZhciB1cmxUb1NlYXJjaCA9ICcnO1xuICAgIC8vIHRyeSBjaGVja2luZyB0aGUgdG9wbW9zdCB3aW5kb3csIGFuZCBpZiBub3QsIHVzZSBjdXJyZW50IHdpbmRvd1xuICAgIHRyeSB7XG4gICAgICB1cmxUb1NlYXJjaCA9IHdpbmRvdy50b3AubG9jYXRpb24uc2VhcmNoO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHVybFRvU2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdmFyIHJlZ2V4UyA9ICdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKSc7XG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleFMpO1xuICAgIHZhciByZXN1bHRzID0gcmVnZXguZXhlYyh1cmxUb1NlYXJjaCk7XG4gICAgaWYgKHJlc3VsdHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG4vLyBkZXRlcm1pbmUgdGhlIG1heGltdW0gZGVidWcgbGV2ZWwgZnJvbSB0aGUgcGFnZSBVUkxcbmZ1bmN0aW9uIHNldERlYnVnTGV2ZWxGcm9tUGFnZSgpIHtcbiAgdHJ5IHtcbiAgICBfdmVyYm9zaXR5ID0gKGdldFBhcmFtZXRlckJ5TmFtZSgnYXN0X2RlYnVnJykudG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpID8gNCA6IDA7XG5cbiAgfSBjYXRjaCAoZSkge31cbn1cblxuZnVuY3Rpb24gc2V0VmVyYm9zaXR5ICh2KVxue1xuICAvLyB0aGUgaGlnaGVzdCAobGVhc3QgcmVzdHJpY3RpdmUgZGVidWcgbGV2ZWwpIGFsd2F5cyB3aW5zXG4gICAgX3ZlcmJvc2l0eSA9IE1hdGgubWF4KHYsIF92ZXJib3NpdHkpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50VGltZVN0cmluZygpIHtcbiAgdmFyIGRhdGVUb1JldHVybiA9ICcnO1xuICB0cnkge1xuICAgIHZhciBjdXJEYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlVG9SZXR1cm4gPSBjdXJEYXRlLmdldEhvdXJzKCkgKyAnOicgKyBjdXJEYXRlLmdldE1pbnV0ZXMoKSArICc6JyArIGN1ckRhdGUuZ2V0U2Vjb25kcygpICsgJy4nICsgY3VyRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgfSBjYXRjaCAoZSkge31cbiAgcmV0dXJuIGRhdGVUb1JldHVybjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTXNnIChtZXRob2QsIGFyZ3MpXG57XG4gICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBfcHJlZml4O1xuICAgIGlmICgoYXJncy5sZW5ndGgpID4gMCAmJiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSlcbiAgICB7XG4gICAgICBpZiAoX3BsYXllcklkICYmIF9wbGF5ZXJJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIG1lc3NhZ2VQcmVmaXggKz0gKCctJyArIF9wbGF5ZXJJZCk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlUHJlZml4ICs9ICddJztcbiAgICAgIG1lc3NhZ2VQcmVmaXggKz0gJ1snICsgZ2V0Q3VycmVudFRpbWVTdHJpbmcoKSArICddJztcblxuICAgICAgYXJnc1swXSA9IG1lc3NhZ2VQcmVmaXggKyBhcmdzWzBdO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QuYXBwbHkpXG4gICAge1xuICAgICAgICBtZXRob2QuYXBwbHkgKGNvbnNvbGUsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgbWV0aG9kIChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWJ1ZyAoKVxue1xuICAgIGlmIChfdmVyYm9zaXR5IDwgNClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUuZGVidWcgPT09ICd1bmRlZmluZWQnKVxuICAgIHtcbiAgICAgICAgLy8gSUUgMTAgZG9lc24ndCBoYXZlIGEgY29uc29sZS5kZWJ1ZygpIGZ1bmN0aW9uXG4gICAgICAgIGhhbmRsZU1zZyAoY29uc29sZS5sb2csIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGhhbmRsZU1zZyAoY29uc29sZS5kZWJ1ZywgYXJndW1lbnRzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvZyAoKVxue1xuICAgIGlmIChfdmVyYm9zaXR5IDwgMylcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUubG9nLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBpbmZvICgpXG57XG4gICAgaWYgKF92ZXJib3NpdHkgPCAyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZU1zZyAoY29uc29sZS5pbmZvLCBhcmd1bWVudHMpO1xufVxuXG5cbmZ1bmN0aW9uIHdhcm4gKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDEpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlTXNnIChjb25zb2xlLndhcm4sIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGVycm9yICgpXG57XG4gICAgaGFuZGxlTXNnIChjb25zb2xlLmVycm9yLCBhcmd1bWVudHMpO1xufVxuXG52YXIgY29uc29sZUxvZ2dlciA9IHtcbiAgICBzZXRQbGF5ZXJJZDogc2V0UGxheWVySWQsXG4gICAgc2V0VmVyYm9zaXR5OiBzZXRWZXJib3NpdHksXG4gICAgZGVidWc6IGRlYnVnLFxuICAgIGxvZzogbG9nLFxuICAgIGluZm86IGluZm8sXG4gICAgd2Fybjogd2FybixcbiAgICBlcnJvcjogZXJyb3Jcbn07XG5cbmlmICgodHlwZW9mIChjb25zb2xlKSA9PT0gJ3VuZGVmaW5lZCcpIHx8ICFjb25zb2xlLmxvZylcbntcbiAgICAvLyBubyBjb25zb2xlIGF2YWlsYWJsZTsgbWFrZSBmdW5jdGlvbnMgbm8tb3BcbiAgICBjb25zb2xlTG9nZ2VyLmRlYnVnID0gZnVuY3Rpb24gKCkge307XG4gICAgY29uc29sZUxvZ2dlci5sb2cgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLndhcm4gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmVycm9yID0gZnVuY3Rpb24gKCkge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc29sZUxvZ2dlcjtcblxuLy8gbG9vayBpbiB0aGUgcXVlcnkgc3RyaW5nIGZvciBkZWJ1ZyBsZXZlbFxuc2V0RGVidWdMZXZlbEZyb21QYWdlKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGRvbSA9IHt9O1xuXG5kb20uaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgcmV0dXJuIHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xufTtcblxuZG9tLmlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4oZWwpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICByZXR1cm4gc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xufTtcblxuZG9tLmlzU2hvd24gPSBmdW5jdGlvbiBpc1Nob3duKGVsKSB7XG4gIHJldHVybiAhZG9tLmlzSGlkZGVuKGVsKTtcbn07XG5cbmRvbS5oaWRlID0gZnVuY3Rpb24gaGlkZShlbCkge1xuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSBlbC5zdHlsZS5kaXNwbGF5O1xuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuZG9tLnNob3cgPSBmdW5jdGlvbiBzaG93KGVsKSB7XG4gIGlmIChkb20uaXNIaWRkZW4oZWwpKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XztcbiAgfVxuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSB1bmRlZmluZWQ7XG59O1xuXG5kb20uaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXMsIGksIGxlbjtcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcyk7XG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICBjc3NDbGFzcyA9IChjc3NDbGFzcyB8fCAnJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBpZiAoY2xhc3Nlc1tpXSA9PT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmRvbS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XG4gICAgICBjbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIHZhciBuZXdDbGFzc2VzID0gW107XG4gICAgdmFyIGksIGxlbjtcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xuXG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjc3NDbGFzcyAhPT0gY2xhc3Nlc1tpXSkge1xuICAgICAgICAgIG5ld0NsYXNzZXMucHVzaChjbGFzc2VzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0NsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAvLyBXQVJOSU5HISEhIHRoaXMgaXMgYSB2ZXJ5IG5haXZlIGltcGxlbWVudGF0aW9uICFcbiAgICAvLyB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlclxuICAgIC8vIHdvdWxkIG5vdCBiZSB0aGVyZSBmb3IgSUU4XG4gICAgLy8gd2Ugc2hvdWxkIHVzZSBcIndpbmRvdy5ldmVudFwiIGFuZCB0aGVuIFwiZXZlbnQuc3JjRWxlbWVudFwiXG4gICAgLy8gaW5zdGVhZCBvZiBcImV2ZW50LnRhcmdldFwiXG4gICAgZWwuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgaGFuZGxlcik7XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuZGV0YWNoRXZlbnQpIHtcbiAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICBlbFtcIm9uXCIgKyB0eXBlXSA9IG51bGw7XG4gIH1cbn07XG5cbmRvbS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbCwgZXZlbnQpIHtcbiAgaWYgKGVsLmRpc3BhdGNoRXZlbnQpIHtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBlbC5maXJlRXZlbnQoXCJvblwiICsgZXZlbnQuZXZlbnRUeXBlLCBldmVudCk7XG4gIH1cbn07XG5cbmRvbS5pc0Rlc2NlbmRhbnQgPSBmdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZG9tLmdldFRleHRDb250ZW50ID0gZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWwpe1xuICByZXR1cm4gZWwudGV4dENvbnRlbnQgfHwgZWwudGV4dDtcbn07XG5cbmRvbS5wcmVwZW5kQ2hpbGQgPSBmdW5jdGlvbiBwcmVwZW5kQ2hpbGQocGFyZW50LCBjaGlsZCkge1xuICBpZihjaGlsZC5wYXJlbnROb2RlKXtcbiAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xufTtcblxuZG9tLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSl7XG4gIGlmKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKXtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cbn07XG5cbmRvbS5pc0RvbUVsZW1lbnQgPSBmdW5jdGlvbiBpc0RvbUVsZW1lbnQobykge1xuICByZXR1cm4gbyBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgKHBhcmVudCAmJiBwYXJlbnQuRWxlbWVudCAmJiBvIGluc3RhbmNlb2YgcGFyZW50LkVsZW1lbnQpOyAgICAgLy8gSWYgTU9MIGlzIGxvYWRlZCBpbiBhbiBpRnJhbWUsIGEgRE9NIEVsZW1lbnQgbWF5IGJlIHBhc3NlZCBpbiBmcm9tIHRoZSBwYXJlbnQgZG9jdW1lbnQgLSBjaGVjayBmb3IgdGhhdCwgdG9vXG59O1xuXG5kb20uY2xpY2sgPSBmdW5jdGlvbihlbCwgaGFuZGxlcikge1xuICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG59O1xuXG5kb20ub25jZSA9IGZ1bmN0aW9uKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZXJXcmFwKCkge1xuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcldyYXApO1xuICB9XG5cbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXJXcmFwKTtcbn07XG5cbi8vTm90ZTogdGhlcmUgaXMgbm8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGlQYWQgc28gd2UgbmVlZCBhIGZhbGxiYWNrXG5kb20uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3Q7XG5cbiAgLy9PbiBJRTkgYW5kIGJlbG93IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBkb2VzIG5vdCB3b3JrIGNvbnNpc3RlbnRseVxuICBpZighdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVybFV0aWxzID0gcmVxdWlyZSgnLi91cmxVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBIdHRwUmVxdWVzdEVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ0h0dHBSZXF1ZXN0IEVycm9yOiAnICsgKG1lc3NhZ2UgfHwgJycpO1xufVxuSHR0cFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbkh0dHBSZXF1ZXN0RXJyb3IucHJvdG90eXBlLm5hbWUgPSBcIkh0dHBSZXF1ZXN0IEVycm9yXCI7XG5cbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0KGNyZWF0ZVhocikge1xuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNyZWF0ZVhocikpIHtcbiAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcignTWlzc2luZyBYTUxIdHRwUmVxdWVzdCBmYWN0b3J5IG1ldGhvZCcpO1xuICB9XG5cbiAgdGhpcy5jcmVhdGVYaHIgPSBjcmVhdGVYaHI7XG59XG5cbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHNhbml0eUNoZWNrKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB2YXIgdGltZW91dCwgdGltZW91dElkO1xuICB2YXIgeGhyID0gdGhpcy5jcmVhdGVYaHIoKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRpbWVvdXQgPSB1dGlsaXRpZXMuaXNOdW1iZXIob3B0aW9ucy50aW1lb3V0KSA/IG9wdGlvbnMudGltZW91dCA6IDA7XG5cbiAgeGhyLm9wZW4obWV0aG9kLCB1cmxVdGlscy51cmxQYXJ0cyh1cmwpLmhyZWYsIHRydWUpO1xuXG4gIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICBzZXRIZWFkZXJzKHhociwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICB9XG5cbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzVGV4dCwgcmVzcG9uc2UsIHN0YXR1cztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvbmx5IHdheSB0byBkbyBhIHNlY3VyZSByZXF1ZXN0IG9uIElFOCBhbmQgSUU5IGlzIHdpdGggdGhlIFhEb21haW5SZXF1ZXN0IG9iamVjdC4gVW5mb3J0dW5hdGVseSwgbWljcm9zb2Z0IGlzXG4gICAgICogc28gbmljZSB0aGF0IGRlY2lkZWQgdGhhdCB0aGUgc3RhdHVzIHByb3BlcnR5IGFuZCB0aGUgJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgbWV0aG9kIHdoZXJlIG5vdCBuZWVkZWQgc28gd2UgaGF2ZSB0b1xuICAgICAqIGZha2UgdGhlbS4gSWYgdGhlIHJlcXVlc3QgZ2V0cyBkb25lIHdpdGggYW4gWERvbWFpblJlcXVlc3QgaW5zdGFuY2UsIHdlIHdpbGwgYXNzdW1lIHRoYXQgdGhlcmUgYXJlIG5vIGhlYWRlcnMgYW5kXG4gICAgICogdGhlIHN0YXR1cyB3aWxsIGFsd2F5cyBiZSAyMDAuIElmIHlvdSBkb24ndCBsaWtlIGl0LCBETyBOT1QgVVNFIEFOQ0lFTlQgQlJPV1NFUlMhISFcbiAgICAgKlxuICAgICAqIEZvciBtb3IgaW5mbyBnbyB0bzogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9jYzI4ODA2MCh2PXZzLjg1KS5hc3B4XG4gICAgICovXG4gICAgaWYgKCF4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCF4aHIuc3RhdHVzKSB7XG4gICAgICB4aHIuc3RhdHVzID0gMjAwO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRpbWVvdXRJZCkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dCB8fCAnJztcblxuICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXG4gICAgLy8gcmVzcG9uc2UvcmVzcG9uc2VUeXBlIHByb3BlcnRpZXMgd2VyZSBpbnRyb2R1Y2VkIGluIFhIUiBMZXZlbDIgc3BlYyAoc3VwcG9ydGVkIGJ5IElFMTApXG4gICAgcmVzcG9uc2UgPSAoJ3Jlc3BvbnNlJyBpbiB4aHIpID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcblxuICAgIC8vIG5vcm1hbGl6ZSBJRTkgYnVnIChodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xNDUwKVxuICAgIHN0YXR1cyA9IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzO1xuXG4gICAgY2FsbGJhY2soXG4gICAgICBzdGF0dXMsXG4gICAgICByZXNwb25zZSxcbiAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxcbiAgICAgIHN0YXR1c1RleHQpO1xuICB9O1xuXG4gIHhoci5vbmVycm9yID0gcmVxdWVzdEVycm9yO1xuICB4aHIub25hYm9ydCA9IHJlcXVlc3RFcnJvcjtcblxuICB4aHIuc2VuZCgpO1xuXG4gIGlmICh0aW1lb3V0ID4gMCkge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgeGhyICYmIHhoci5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHVybCkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcodXJsKSkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIHVybCAnXCIgKyB1cmwgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCBoYW5kbGVyICdcIiArIGNhbGxiYWNrICsgXCInIGZvciB0aGUgaHR0cCByZXF1ZXN0XCIpO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG9wdGlvbnMpICYmICF1dGlsaXRpZXMuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCBvcHRpb25zIG1hcCAnXCIgKyBvcHRpb25zICsgXCInXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEhlYWRlcnMoeGhyLCBoZWFkZXJzKSB7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVlc3RFcnJvcigpIHtcbiAgICBjYWxsYmFjaygtMSwgbnVsbCwgbnVsbCwgJycpO1xuICB9XG59O1xuXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdGhpcy5ydW4oJ0dFVCcsIHVybCwgcHJvY2Vzc1Jlc3BvbnNlLCBvcHRpb25zKTtcblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2Uoc3RhdHVzLCByZXNwb25zZSwgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCkge1xuICAgIGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBIdHRwUmVxdWVzdEVycm9yKHN0YXR1c1RleHQpLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzU3RyaW5nLCBzdGF0dXNUZXh0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7XG4gICAgcmV0dXJuIDIwMCA8PSBzdGF0dXMgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVYaHIoKSB7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgaWYgKCEoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpKSB7XG4gICAgLy8gWERvbWFpblJlcXVlc3QgZm9yIElFLlxuICAgIHhociA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICB9XG4gIHJldHVybiB4aHI7XG59XG5cbnZhciBodHRwID0gbmV3IEh0dHBSZXF1ZXN0KGNyZWF0ZVhocik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBodHRwOiBodHRwLFxuICBIdHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXF1ZXN0RXJyb3I6IEh0dHBSZXF1ZXN0RXJyb3IsXG4gIGNyZWF0ZVhocjogY3JlYXRlWGhyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaHRtbDU6IFtcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAndGV4dC9qYXZhc2NyaXB0MS4wJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0MS4yJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0MS40JyxcbiAgICAndGV4dC9qc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvZWNtYXNjcmlwdCcsXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuMCcsXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuMicsXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuNCcsXG4gICAgJ3RleHQvbGl2ZXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2VjbWFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHQnLFxuICBdLFxuXG4gIGZsYXNoOiBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ1xuICBdLFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBwbGF5ZXJVdGlscyA9IHt9O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FwdHVyZXMgdGhlIHBvcnRpb25zIG9mIHBsYXllciBzdGF0ZSByZWxldmFudCB0b1xuICogdmlkZW8gcGxheWJhY2suIFRoZSByZXN1bHQgb2YgdGhpcyBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIHRvXG4gKiByZXN0b3JlUGxheWVyU25hcHNob3Qgd2l0aCBhIHBsYXllciB0byByZXR1cm4gdGhlIHBsYXllciB0byB0aGUgc3RhdGUgaXRcbiAqIHdhcyBpbiB3aGVuIHRoaXMgZnVuY3Rpb24gd2FzIGludm9rZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGxheWVyIFRoZSB2aWRlb2pzIHBsYXllciBvYmplY3RcbiAqL1xucGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiBnZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcblxuICB2YXIgc25hcHNob3QgPSB7XG4gICAgZW5kZWQ6IHBsYXllci5lbmRlZCgpLFxuICAgIHNyYzogcGxheWVyLmN1cnJlbnRTcmMoKSxcbiAgICBjdXJyZW50VGltZTogcGxheWVyLmN1cnJlbnRUaW1lKCksXG4gICAgdHlwZTogcGxheWVyLmN1cnJlbnRUeXBlKCksXG4gICAgcGxheWluZzogIXBsYXllci5wYXVzZWQoKSxcbiAgICBzdXBwcmVzc2VkVHJhY2tzOiBnZXRTdXBwcmVzc2VkVHJhY2tzKHBsYXllcilcbiAgfTtcblxuICBpZiAoc25hcHNob3QuZW5kZWQpIHtcbiAgICBzbmFwc2hvdC5jdXJyZW50VGltZSA9IHBsYXllci5kdXJhdGlvbigpICsgMTtcbiAgfVxuXG4gIGlmICh0ZWNoKSB7XG4gICAgc25hcHNob3QubmF0aXZlUG9zdGVyID0gdGVjaC5wb3N0ZXI7XG4gICAgc25hcHNob3Quc3R5bGUgPSB0ZWNoLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgfVxuXG4gIHZhciBlbHM7XG4gIC8vIFZJRExBLTQ1NjM6IEhhY2sgZm9yIEVkZ2Ugd2hlbiBCcmlnaHRjb3ZlIHBsYXllciBlbWJlZCBpbiBub3QgZnJpZW5kbHkgaWZyYW1lXG4gIGlmICh1dGlsaXRpZXMuc2NyaXB0TG9hZGVkSW5JZnJhbWUoKSkge1xuICAgIGVscyA9IHBhcmVudC5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2anMtZG9jay10ZXh0Jyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmpzLWRvY2stdGV4dCcpO1xuICB9XG5cdGlmIChlbHMgJiYgZWxzLmxlbmd0aCA+IDApIHtcblx0ICAvLyBEZXRlcm1pbmUgd2hpY2ggJ3Zqcy1kb2NrLXRleHQnIGVsZW1lbnQgaXMgcGFydCBvZiB0aGlzIHBsYXllclxuICAgIHZhciB0ZW1wUGFyZW50cywgZm91bmRQbGF5ZXIgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcFBhcmVudHMgPSBnZXRQYXJlbnRMaXN0KGVsc1tpXSk7XG4gICAgICBpZiAodGVtcFBhcmVudHMuaW5kZXhPZihwbGF5ZXIuZWxfKSA+PSAwKSB7XG4gICAgICAgIGZvdW5kUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZFBsYXllcikge1xuICAgICAgc25hcHNob3QuZG9ja1RleHQgPSBlbHNbaV07XG4gICAgICBzbmFwc2hvdC5kb2NrVGV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblx0fVxuICByZXR1cm4gc25hcHNob3Q7XG5cbiAgLyoqKiogTG9jYWwgRnVuY3Rpb25zICoqKiovXG4gIGZ1bmN0aW9uIGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKSB7XG4gICAgdmFyIHRyYWNrcyA9IHBsYXllci5yZW1vdGVUZXh0VHJhY2tzID8gcGxheWVyLnJlbW90ZVRleHRUcmFja3MoKSA6IFtdO1xuXG4gICAgaWYgKHRyYWNrcyAmJiB1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MudHJhY2tzXykpIHtcbiAgICAgIHRyYWNrcyA9IHRyYWNrcy50cmFja3NfO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tzKSkge1xuICAgICAgdHJhY2tzID0gW107XG4gICAgfVxuXG4gICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBbXTtcbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgIHN1cHByZXNzZWRUcmFja3MucHVzaCh7XG4gICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgbW9kZTogdHJhY2subW9kZVxuICAgICAgfSk7XG4gICAgICB0cmFjay5tb2RlID0gJ2Rpc2FibGVkJztcbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwcmVzc2VkVHJhY2tzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFyZW50TGlzdCAoZWxlbWVudCkge1xuICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgd2hpbGUgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgcGFyZW50cy51bnNoaWZ0KGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50cztcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBtb2RpZnkgdGhlIHNwZWNpZmllZCBwbGF5ZXIgc28gdGhhdCBpdHMgc3RhdGUgaXMgZXF1aXZhbGVudCB0b1xuICogdGhlIHN0YXRlIG9mIHRoZSBzbmFwc2hvdC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBzbmFwc2hvdCAtIHRoZSBwbGF5ZXIgc3RhdGUgdG8gYXBwbHlcbiAqL1xucGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gcmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGF0dGVtcHRzID0gMjA7IC8vIHRoZSBudW1iZXIgb2YgcmVtYWluaW5nIGF0dGVtcHRzIHRvIHJlc3RvcmUgdGhlIHNuYXBzaG90XG5cbiAgaWYgKHNuYXBzaG90Lm5hdGl2ZVBvc3Rlcikge1xuICAgIHRlY2gucG9zdGVyID0gc25hcHNob3QubmF0aXZlUG9zdGVyO1xuICB9XG5cbiAgaWYgKCdzdHlsZScgaW4gc25hcHNob3QpIHtcbiAgICAvLyBvdmVyd3JpdGUgYWxsIGNzcyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHJlc3RvcmUgc3RhdGUgcHJlY2lzZWx5XG4gICAgdGVjaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc25hcHNob3Quc3R5bGUgfHwgJycpO1xuICB9XG5cblx0aWYgKHNuYXBzaG90LmRvY2tUZXh0KSB7XG5cdFx0c25hcHNob3QuZG9ja1RleHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuICAvL2lmIChoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpKSB7XG5cbiAgICAvLyBvbiBpb3M3LCBmaWRkbGluZyB3aXRoIHRleHRUcmFja3MgdG9vIGVhcmx5IHdpbGwgY2F1c2Ugc2FmYXJpIHRvIGNyYXNoXG4gICAgcGxheWVyLm9uZSgnY29udGVudGxvYWRlZG1ldGFkYXRhJywgcmVzdG9yZVRyYWNrcyk7XG5cbiAgICBwbGF5ZXIub25lKCdjYW5wbGF5JywgdHJ5VG9SZXN1bWUpO1xuICAgIGVuc3VyZUNhbnBsYXlFdnRHZXRzRmlyZWQoKTtcblxuICAgIC8vIGlmIHRoZSBzcmMgY2hhbmdlZCBmb3IgYWQgcGxheWJhY2ssIHJlc2V0IGl0XG4gICAgcGxheWVyLnNyYyh7c3JjOiBzbmFwc2hvdC5zcmMsIHR5cGU6IHNuYXBzaG90LnR5cGV9KTtcblxuICAgIC8vIHNhZmFyaSByZXF1aXJlcyBhIGNhbGwgdG8gYGxvYWRgIHRvIHBpY2sgdXAgYSBjaGFuZ2VkIHNvdXJjZVxuICAgIC8vIHBsYXllci5sb2FkKCk7XHQvLyBTYWZhcmkgMTEgbm8gbW9yZSByZXF1aXJlcyAnbG9hZCcuIEZpcmVmb3ggZG9lc24ndCBsaWtlICdsb2FkJyBjYWxsIGZvciBhbHJlYWR5IGxvYWRlZCBjb250ZW50IChpbiBjYXNlIG9mIEFkTG9hZGVkIHRpbWVvdXQpLlxuXG4gIC8qfSBlbHNlIHtcbiAgICByZXN0b3JlVHJhY2tzKCk7XG5cbiAgICBpZiAoc25hcHNob3QucGxheWluZykge1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICB9XG4gIH0qL1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICAvKipcbiAgICogU29tZXRpbWVzIGZpcmVmb3ggZG9lcyBub3QgdHJpZ2dlciB0aGUgJ2NhbnBsYXknIGV2dC5cbiAgICogVGhpcyBjb2RlIGVuc3VyZSB0aGF0IGl0IGFsd2F5cyBnZXRzIHRyaWdnZXJlZCB0cmlnZ2VyZWQuXG4gICAqL1xuICBmdW5jdGlvbiBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCkge1xuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ2NhbnBsYXknKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCBmdW5jdGlvbigpe1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBsYXllciBuZWVkcyB0byBiZSByZXN0b3JlZCB0byBpdHMgc3RhdGVcbiAgICogYmVmb3JlIGFkIHBsYXliYWNrIGJlZ2FuLiBXaXRoIGEgY3VzdG9tIGFkIGRpc3BsYXkgb3IgYnVybmVkLWluXG4gICAqIGFkcywgdGhlIGNvbnRlbnQgcGxheWVyIHN0YXRlIGhhc24ndCBiZWVuIG1vZGlmaWVkIGFuZCBzbyBub1xuICAgKiByZXN0b3JhdGlvbiBpcyByZXF1aXJlZFxuICAgKi9cbiAgLypmdW5jdGlvbiBoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpIHtcbiAgICBpZiAocGxheWVyLnNyYygpKSB7XG4gICAgICByZXR1cm4gcGxheWVyLnNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gICAgfVxuICAgIC8vIHRoZSBwbGF5ZXIgd2FzIGNvbmZpZ3VyZWQgdGhyb3VnaCBzb3VyY2UgZWxlbWVudCBjaGlsZHJlblxuICAgIHJldHVybiBwbGF5ZXIuY3VycmVudFNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gIH0qL1xuXG4gIGZ1bmN0aW9uIHJlc3RvcmVUcmFja3MoKSB7XG4gICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBzbmFwc2hvdC5zdXBwcmVzc2VkVHJhY2tzO1xuICAgIHN1cHByZXNzZWRUcmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tTbmFwc2hvdCkge1xuICAgICAgdHJhY2tTbmFwc2hvdC50cmFjay5tb2RlID0gdHJhY2tTbmFwc2hvdC5tb2RlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgdmlkZW8gZWxlbWVudCBoYXMgbG9hZGVkIGVub3VnaCBvZiB0aGUgc25hcHNob3Qgc291cmNlXG4gICAqIHRvIGJlIHJlYWR5IHRvIGFwcGx5IHRoZSByZXN0IG9mIHRoZSBzdGF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gdHJ5VG9SZXN1bWUoKSB7XG5cbiAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xuICAgIC8vIG90aGVyd2lzZSBkZWxheSBhIGJpdCBhbmQgdGhlbiBjaGVjayBhZ2FpbiB1bmxlc3Mgd2UncmUgb3V0IG9mIGF0dGVtcHRzXG5cblx0ICAvLyBzYWZhcmkgMTEgcmVxdWlyZXMgY2FsbCBgcGxheWAgdG8gbWFrZSBzZWVrIGF2YWlsYWJsZVxuICAgICAgcGxheWVyLnBsYXkoKTtcblxuICAgIGlmICghcGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lKHBsYXllcikgJiYgYXR0ZW1wdHMtLSkge1xuICAgICAgc2V0VGltZW91dCh0cnlUb1Jlc3VtZSwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZihwbGF5ZXIuY3VycmVudFRpbWUoKSAhPT0gc25hcHNob3QuY3VycmVudFRpbWUpIHtcbiAgICAgICAgICBpZiAoc25hcHNob3QucGxheWluZykgeyAvLyBpZiBuZWVkZWQgcmVzdG9yZSBwbGF5aW5nIHN0YXR1cyBhZnRlciBzZWVrIGNvbXBsZXRlc1xuICAgICAgICAgICAgcGxheWVyLm9uZSgnc2Vla2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICghc25hcHNob3QuZW5kZWQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHNuYXBzaG90LmN1cnJlbnRUaW1lKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcbiAgICAgICAgICAvLyBpZiBuZWVkZWQgYW5kIG5vIHNlZWsgaGFzIGJlZW4gcGVyZm9ybWVkLCByZXN0b3JlIHBsYXlpbmcgc3RhdHVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHZpZGVvanMubG9nLndhcm4oJ0ZhaWxlZCB0byByZXN1bWUgdGhlIGNvbnRlbnQgYWZ0ZXIgYW4gYWR2ZXJ0aXNlbWVudCcsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxucGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lID0gZnVuY3Rpb24gKHBsYXllcikge1xuICBpZiAodXRpbGl0aWVzLmlzSUUxMSgpKSB7XG4gICAgLy8gZm9yIElFIDExIGNoZWNrIG9ubHkgcGxheWVyIHN0YXRlXG4gICAgaWYgKHBsYXllci5yZWFkeVN0YXRlKCkgPiAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHBsYXllci5yZWFkeVN0YXRlKCkgPiAxKSB7XG4gICAgLy8gc29tZSBicm93c2VycyBhbmQgbWVkaWEgYXJlbid0IFwic2Vla2FibGVcIi5cbiAgICAvLyByZWFkeVN0YXRlIGdyZWF0ZXIgdGhhbiAxIGFsbG93cyBmb3Igc2Vla2luZyB3aXRob3V0IGV4Y2VwdGlvbnNcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwbGF5ZXIuc2Vla2FibGUoKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gaWYgdGhlIHBsYXllciBkb2Vzbid0IGV4cG9zZSB0aGUgc2Vla2FibGUgdGltZSByYW5nZXMsIHRyeSB0b1xuICAgIC8vIHJlc3VtZSBwbGF5YmFjayBpbW1lZGlhdGVseVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHBsYXllci5zZWVrYWJsZSgpLmxlbmd0aCA+IDApIHtcbiAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHByZXBhcmVzIHRoZSBwbGF5ZXIgdG8gZGlzcGxheSBhZHMuXG4gKiBBZGRpbmcgY29udmVuaWVuY2UgZXZlbnRzIGxpa2UgdGhlICd2YXN0LmZpcnNQbGF5JyB0aGF0IGdldHMgZmlyZWQgd2hlbiB0aGUgdmlkZW8gaXMgZmlyc3QgcGxheWVkXG4gKiBhbmQgYWRzIHRoZSBibGFja1Bvc3RlciB0byB0aGUgcGxheWVyIHRvIHByZXZlbnQgY29udGVudCBmcm9tIGJlaW5nIGRpc3BsYXllZCBiZWZvcmUgdGhlIHByZXJvbGwgYWQuXG4gKlxuICogQHBhcmFtIHBsYXllclxuICovXG5wbGF5ZXJVdGlscy5wcmVwYXJlRm9yQWRzID0gZnVuY3Rpb24gKHBsYXllcikge1xuICB2YXIgYmxhY2tQb3N0ZXIgPSBwbGF5ZXIuYWRkQ2hpbGQoJ2JsYWNrUG9zdGVyJyk7XG4gIC8vdmFyIF9maXJzdFBsYXkgPSB0cnVlO1xuICB2YXIgdm9sdW1lU25hcHNob3Q7XG5cblxuICBtb25rZXlQYXRjaFBsYXllckFwaSgpO1xuXG4gIHBsYXllci5vbigncGxheScsIHRyeVRvVHJpZ2dlckZpcnN0UGxheSk7XG4gIHBsYXllci5vbigndmFzdC5yZXNldCcsIHJlc2V0Rmlyc3RQbGF5KTsvL0V2ZXJ5IHRpbWUgd2UgY2hhbmdlIHRoZSBzb3VyY2VzIHdlIHJlc2V0IHRoZSBmaXJzdCBwbGF5LlxuICBwbGF5ZXIub24oJ3Zhc3QuZmlyc3RQbGF5JywgcmVzdG9yZUNvbnRlbnRWb2x1bWUpO1xuICBwbGF5ZXIub24oJ2Vycm9yJywgaGlkZUJsYWNrUG9zdGVyKTsvL0lmIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBwbGF5ZXIgd2UgcmVtb3ZlIHRoZSBibGFja3Bvc3RlciB0byBzaG93IHRoZSBlcnIgbXNnXG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgaGlkZUJsYWNrUG9zdGVyKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZEVycm9yJywgaGlkZUJsYWNrUG9zdGVyKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCBhZGRTdHlsZXMpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRFbmQnLCByZW1vdmVTdHlsZXMpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgcmVtb3ZlU3R5bGVzKTtcblxuICAvLyBWSURMQS0yNDY1IC0gaGlkZSB2anMgZXJyb3IgZGlhbG9nIHdoZW4gYWQgcnVubmluZ1xuICB2YXIgZXJyb3JEaWFsb2c7XG4gIHZhciBkbGdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmpzLWVycm9yLWRpc3BsYXknKTtcbiAgaWYgKGRsZ3MgJiYgZGxncy5sZW5ndGggPiAwKSB7XG5cdCAgZXJyb3JEaWFsb2cgPSBkbGdzWzBdO1xuXHQgIGVycm9yRGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XG4gIH1cbiAgXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICAvKipcbiAgIFdoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIGlzIHVnbHkgYW5kIGhvcnJpYmxlIGFuZCBJIHNob3VsZCB0aGluayB0d2ljZSBiZWZvcmUgY2FsbGluZyBteXNlbGYgYSBnb29kIGRldmVsb3Blci4gV2l0aCB0aGF0IHNhaWQsXG4gICBpdCBpcyB0aGUgYmVzdCBzb2x1dGlvbiBJIGNvdWxkIGZpbmQgdG8gbXV0ZSB0aGUgdmlkZW8gdW50aWwgdGhlICdwbGF5JyBldmVudCBoYXBwZW5zIChvbiBtb2JpbGUgZGV2aWNlcykgYW5kIHRoZSBwbHVnaW4gY2FuIGRlY2lkZSB3aGV0aGVyXG4gICB0byBwbGF5IHRoZSBhZCBvciBub3QuXG5cbiAgIFdlIGFsc28gbmVlZCB0aGlzIG1vbmtleXBhdGNoIHRvIGJlIGFibGUgdG8gcGF1c2UgYW5kIHJlc3VtZSBhbiBhZCB1c2luZyB0aGUgcGxheWVyJ3MgQVBJXG5cbiAgIElmIHlvdSBoYXZlIGEgYmV0dGVyIHNvbHV0aW9uIHBsZWFzZSBkbyB0ZWxsIG1lLlxuICAgKi9cbiAgZnVuY3Rpb24gbW9ua2V5UGF0Y2hQbGF5ZXJBcGkoKSB7XG5cbiAgICAvKipcbiAgICAgKiBNb25rZXkgcGF0Y2ggbmVlZGVkIHRvIGhhbmRsZSBmaXJzdFBsYXkgYW5kIHJlc3VtZSBvZiBwbGF5aW5nIGFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHJlc3RvcmluZyBhIFZBU1QgYWQuXG4gICAgICogQHJldHVybnMge3BsYXllcn1cbiAgICAgKi9cbiAgICB2YXIgb3JpZ1BsYXkgPSBwbGF5ZXIucGxheTtcbiAgICBwbGF5ZXIucGxheSA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BsYXkpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgaWYgKGlzRmlyc3RQbGF5KCkpIHtcbiAgICAgICAgZmlyc3RQbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bWUoY2FsbE9yaWdQbGF5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICAgIGZ1bmN0aW9uIGZpcnN0UGxheSgpIHtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNJUGhvbmUoKSkge1xuICAgICAgICAgIGlmICghdm9sdW1lU25hcHNob3QpIHtcbiAgICAgICAgICAgICAgdm9sdW1lU25hcHNob3QgPSBzYXZlVm9sdW1lU25hcHNob3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyLm11dGVkKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzdW1lKGNhbGxPcmlnUGxheSkge1xuICAgICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQbGF5KSB7XG4gICAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0LnJlc3VtZUFkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIFx0aWYgKCFpc1ZwYWlkUGxheWluZygpKSB7XG4gICAgICAgICAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICAgICAgXHR9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZSBvZiBwbGF5aW5nIGFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHBhdXNpbmcgYSBWQVNUIGFkLlxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XG4gICAgICovXG4gICAgdmFyIG9yaWdQYXVzZSA9IHBsYXllci5wYXVzZTtcbiAgICBwbGF5ZXIucGF1c2UgPSBmdW5jdGlvbiAoY2FsbE9yaWdQYXVzZSkge1xuICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2UpIHtcbiAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0LnBhdXNlQWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICBcdGlmICghaXNWcGFpZFBsYXlpbmcoKSkge1xuICAgICAgXHRcdG9yaWdQYXVzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgXHR9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllciB3aGVuIGFkcyBhcmUgcGxheWluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGF1c2VkID0gcGxheWVyLnBhdXNlZDtcbiAgICBwbGF5ZXIucGF1c2VkID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2VkKSB7XG4gICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQYXVzZWQpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllci52YXN0LmFkVW5pdC5pc1BhdXNlZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdQYXVzZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBWSURMQS00MzkxOiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBidWcgaW4gdjUuMjgueCBCcmlnaHRjb3ZlIFBsYXllcnMgd2hlbiBwYXNzaW5nIHNyYyBNZWRpYUZpbGUgb2JqZWN0cyB1cCB0byB2anMgcGxheWVyIGluIGlmcmFtZSBwYXJlbnQgd2luZG93XG4gICAgICovXG4gICAgdmFyIGlzQnJpZ2h0Y292ZVY1ID0gZnVuY3Rpb24gaXNCcmlnaHRjb3ZlVjUgKCkge1xuICAgICAgcmV0dXJuICh2aWRlb2pzICYmICF2aWRlb2pzLmdldFBsdWdpbnMpOyAgIC8vIHY1LngueCBCcmlnaHRjb3ZlIHBsYXllcnMgZGlkbid0IGZlYXR1cmUgdGhlIGdldFBsdWdpbnMgQVBJIG1ldGhvZFxuICAgIH07XG5cbiAgICAvLyBIYXZlIHRvIGRvIHRoaXMgb25seSB3aGVuIE1PTCBzY3JpcHQgaGFzIGxvYWRlZCBpbiBpZnJhbWVcbiAgICBpZiAocGFyZW50ICYmIHdpbmRvdyAhPT0gcGFyZW50ICYmIGlzQnJpZ2h0Y292ZVY1KCkgJiYgdXRpbGl0aWVzLnNjcmlwdExvYWRlZEluSWZyYW1lKCkpIHtcbiAgICAgIHZhciBvcmlnU3JjID0gcGxheWVyLnNyYztcbiAgICAgIHBsYXllci5zcmMgPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UgJiYgIShzb3VyY2UgaW5zdGFuY2VvZiBwYXJlbnQuT2JqZWN0KSkge1xuICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNJRTExKCkpIHtcbiAgICAgICAgICAgICB2YXIgdGVtcCA9IG5ldyBwYXJlbnQuT2JqZWN0KCk7XG4gICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBzb3VyY2UgPSB0ZW1wO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNvdXJjZSA9IHBhcmVudC5PYmplY3QuYXNzaWduKG5ldyBwYXJlbnQuT2JqZWN0KCksIHNvdXJjZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9yaWdTcmMuY2FsbCh0aGlzLCBzb3VyY2UpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGlzVnBhaWRQbGF5aW5nKCkge1xuXHQgIHJldHVybiBwbGF5ZXIudmFzdCAmJiBwbGF5ZXIudmFzdC5WUEFJRDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQWRQbGF5aW5nKCkge1xuICAgIHJldHVybiBwbGF5ZXIudmFzdCAmJiBwbGF5ZXIudmFzdC5hZFVuaXQ7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlUb1RyaWdnZXJGaXJzdFBsYXkoKSB7XG4gICAgaWYgKGlzRmlyc3RQbGF5KCkpIHtcbiAgXHQgIHdpbmRvdy5fbW9sU2V0dGluZ3MuZmlyc3RQbGF5ID0gZmFsc2U7XG4gICAgICAvL19maXJzdFBsYXkgPSBmYWxzZTtcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmZpcnN0UGxheScpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Rmlyc3RQbGF5KCkge1xuXHQgIHdpbmRvdy5fbW9sU2V0dGluZ3MuZmlyc3RQbGF5ID0gdHJ1ZTtcblx0ICAgIC8vX2ZpcnN0UGxheSA9IHRydWU7XG4gICAgYmxhY2tQb3N0ZXIuc2hvdygpO1xuICAgIHJlc3RvcmVDb250ZW50Vm9sdW1lKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0ZpcnN0UGxheSgpIHtcblx0ICByZXR1cm4gd2luZG93Ll9tb2xTZXR0aW5ncy5maXJzdFBsYXk7XG5cdCAgICAvL3JldHVybiBfZmlyc3RQbGF5O1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVZvbHVtZVNuYXBzaG90KCkge1xuICAgIHJldHVybiB7XG4gICAgICBtdXRlZDogcGxheWVyLm11dGVkKCksXG4gICAgICB2b2x1bWU6IHBsYXllci52b2x1bWUoKVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlQ29udGVudFZvbHVtZSgpIHtcbiAgICBpZiAodm9sdW1lU25hcHNob3QpIHtcbiAgICAgIC8vcGxheWVyLmN1cnJlbnRUaW1lKDApO1xuICAgICAgcmVzdG9yZVZvbHVtZVNuYXBzaG90KHZvbHVtZVNuYXBzaG90KTtcbiAgICAgIHZvbHVtZVNuYXBzaG90ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlVm9sdW1lU25hcHNob3Qoc25hcHNob3QpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzT2JqZWN0KHNuYXBzaG90KSkge1xuICAgICAgcGxheWVyLnZvbHVtZShzbmFwc2hvdC52b2x1bWUpO1xuICAgICAgcGxheWVyLm11dGVkKHNuYXBzaG90Lm11dGVkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlQmxhY2tQb3N0ZXIoKSB7XG4gICAgaWYgKCFkb20uaGFzQ2xhc3MoYmxhY2tQb3N0ZXIuZWwoKSwgJ3Zqcy1oaWRkZW4nKSkge1xuICAgICAgYmxhY2tQb3N0ZXIuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlcygpIHtcbiAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtYWQtcGxheWluZycpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU3R5bGVzKCkge1xuXHQgIHBsYXllci5vZmYoJ3BsYXknLCB0cnlUb1RyaWdnZXJGaXJzdFBsYXkpO1xuXHQgIHBsYXllci5vZmYoJ3Zhc3QucmVzZXQnLCByZXNldEZpcnN0UGxheSk7Ly9FdmVyeSB0aW1lIHdlIGNoYW5nZSB0aGUgc291cmNlcyB3ZSByZXNldCB0aGUgZmlyc3QgcGxheS5cblx0ICBwbGF5ZXIub2ZmKCd2YXN0LmZpcnN0UGxheScsIHJlc3RvcmVDb250ZW50Vm9sdW1lKTtcblx0ICBwbGF5ZXIub2ZmKCdlcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7Ly9JZiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgcGxheWVyIHdlIHJlbW92ZSB0aGUgYmxhY2twb3N0ZXIgdG8gc2hvdyB0aGUgZXJyIG1zZ1xuXHQgIHBsYXllci5vZmYoJ3Zhc3QuYWRTdGFydCcsIGhpZGVCbGFja1Bvc3Rlcik7XG5cdCAgcGxheWVyLm9mZigndmFzdC5hZHNDYW5jZWwnLCBoaWRlQmxhY2tQb3N0ZXIpO1xuXHQgIHBsYXllci5vZmYoJ3Zhc3QuYWRFcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7XG5cdCAgcGxheWVyLm9mZigndmFzdC5hZFN0YXJ0JywgYWRkU3R5bGVzKTtcblx0ICBwbGF5ZXIub2ZmKCd2YXN0LmFkRW5kJywgcmVtb3ZlU3R5bGVzKTtcblx0ICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIHJlbW92ZVN0eWxlcyk7XG5cdCAgXG4gICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtYWQtcGxheWluZycpO1xuXHQgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuY29udHJvbEJhci5wbGF5VG9nZ2xlLmVsKCksICd2anMtZW5kZWQnKTtcblx0ICBcblx0ICBpZiAoZXJyb3JEaWFsb2cpIHtcblx0XHQgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQgIGVycm9yRGlhbG9nLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG5cdFx0ICB9LCA1MDApO1xuXHQgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHBvc3RlciBhdHRyaWJ1dGUgZnJvbSB0aGUgdmlkZW8gZWxlbWVudCB0ZWNoLCBpZiBwcmVzZW50LiBXaGVuXG4gKiByZXVzaW5nIGEgdmlkZW8gZWxlbWVudCBmb3IgbXVsdGlwbGUgdmlkZW9zLCB0aGUgcG9zdGVyIGltYWdlIHdpbGwgYnJpZWZseVxuICogcmVhcHBlYXIgd2hpbGUgdGhlIG5ldyBzb3VyY2UgbG9hZHMuIFJlbW92aW5nIHRoZSBhdHRyaWJ1dGUgYWhlYWQgb2YgdGltZVxuICogcHJldmVudHMgdGhlIHBvc3RlciBmcm9tIHNob3dpbmcgdXAgYmV0d2VlbiB2aWRlb3MuXG4gKiBAcGFyYW0ge29iamVjdH0gcGxheWVyIFRoZSB2aWRlb2pzIHBsYXllciBvYmplY3RcbiAqL1xucGxheWVyVXRpbHMucmVtb3ZlTmF0aXZlUG9zdGVyID0gZnVuY3Rpb24gKHBsYXllcikge1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICBpZiAodGVjaCkge1xuICAgIHRlY2gucmVtb3ZlQXR0cmlidXRlKCdwb3N0ZXInKTtcbiAgfVxufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gbGlzdGVuIHRvIG1hbnkgZXZlbnRzIHVudGlsIG9uZSBvZiB0aGVtIGdldHMgZmlyZWQsIHRoZW4gd2VcbiAqIGV4ZWN1dGUgdGhlIGhhbmRsZXIgYW5kIHVuc3Vic2NyaWJlIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzO1xuICpcbiAqIEBwYXJhbSBwbGF5ZXIgc3BlY2lmaWMgcGxheWVyIGZyb20gd2hlcmUgdG8gbGlzdGVuIGZvciB0aGUgZXZlbnRzXG4gKiBAcGFyYW0gZXZlbnRzIGFycmF5IG9mIGV2ZW50c1xuICogQHBhcmFtIGhhbmRsZXIgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbmNlIG9uZSBvZiB0aGUgZXZlbnRzIGZpcmVzXG4gKi9cbnBsYXllclV0aWxzLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHBsYXllciwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblxuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcGxheWVyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcGxheWVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufTtcblxuLy9wbHVnaW4gdXRpbHNcbnBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uID0gZnVuY3Rpb24ocGxheWVyLCBzaG93KSB7XG5cdHZhciBidXR0b24gPSBwbGF5ZXIuYmlnUGxheUJ1dHRvbi5lbF87XG5cdGlmIChidXR0b24pIHtcblx0XHRpZiAoc2hvdykge1xuXHRcdFx0YnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0YnV0dG9uLnN0eWxlLnpJbmRleCA9IDk5OTk5O1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0YnV0dG9uLnN0eWxlLnpJbmRleCA9ICcnO1xuXHRcdH1cblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJVdGlscztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG4vKipcbiAqXG4gKiBJTVBPUlRBTlQgTk9URTogVGhpcyBmdW5jdGlvbiBjb21lcyBmcm9tIGFuZ3VsYXJKcyBhbmQgd2FzIG9yaWdpbmFsbHkgY2FsbGVkIHVybFJlc29sdmVcbiAqICAgICAgICAgICAgICAgICB5b3UgY2FuIHRha2UgYSBsb29rIGF0IHRoZSBvcmlnaW5hbCBjb2RlIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL21hc3Rlci9zcmMvbmcvdXJsVXRpbHMuanNcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3Igbm9uLUlFIGJyb3dzZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBc3NpZ25pbmcgYSBVUkwgdG8gdGhlIGhyZWYgcHJvcGVydHkgb2YgYW4gYW5jaG9yIERPTSBub2RlLCBldmVuIG9uZSBhdHRhY2hlZCB0byB0aGUgRE9NLFxuICogcmVzdWx0cyBib3RoIGluIHRoZSBub3JtYWxpemluZyBhbmQgcGFyc2luZyBvZiB0aGUgVVJMLiAgTm9ybWFsaXppbmcgbWVhbnMgdGhhdCBhIHJlbGF0aXZlXG4gKiBVUkwgd2lsbCBiZSByZXNvbHZlZCBpbnRvIGFuIGFic29sdXRlIFVSTCBpbiB0aGUgY29udGV4dCBvZiB0aGUgYXBwbGljYXRpb24gZG9jdW1lbnQuXG4gKiBQYXJzaW5nIG1lYW5zIHRoYXQgdGhlIGFuY2hvciBub2RlJ3MgaG9zdCwgaG9zdG5hbWUsIHByb3RvY29sLCBwb3J0LCBwYXRobmFtZSBhbmQgcmVsYXRlZFxuICogcHJvcGVydGllcyBhcmUgYWxsIHBvcHVsYXRlZCB0byByZWZsZWN0IHRoZSBub3JtYWxpemVkIFVSTC4gIFRoaXMgYXBwcm9hY2ggaGFzIHdpZGVcbiAqIGNvbXBhdGliaWxpdHkgLSBTYWZhcmkgMSssIE1vemlsbGEgMSssIE9wZXJhIDcrLGUgZXRjLiAgU2VlXG4gKiBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3IgSUVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSUUgPj0gOCBhbmQgPD0gMTAgbm9ybWFsaXplcyB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gdGhlIGFuY2hvciBub2RlIHNpbWlsYXIgdG8gdGhlIG90aGVyXG4gKiBicm93c2Vycy4gIEhvd2V2ZXIsIHRoZSBwYXJzZWQgY29tcG9uZW50cyB3aWxsIG5vdCBiZSBzZXQgaWYgdGhlIFVSTCBhc3NpZ25lZCBkaWQgbm90IHNwZWNpZnlcbiAqIHRoZW0uICAoZS5nLiBpZiB5b3UgYXNzaWduIGEuaHJlZiA9IFwiZm9vXCIsIHRoZW4gYS5wcm90b2NvbCwgYS5ob3N0LCBldGMuIHdpbGwgYmUgZW1wdHkuKSAgV2VcbiAqIHdvcmsgYXJvdW5kIHRoYXQgYnkgcGVyZm9ybWluZyB0aGUgcGFyc2luZyBpbiBhIDJuZCBzdGVwIGJ5IHRha2luZyBhIHByZXZpb3VzbHkgbm9ybWFsaXplZFxuICogVVJMIChlLmcuIGJ5IGFzc2lnbmluZyB0byBhLmhyZWYpIGFuZCBhc3NpZ25pbmcgaXQgYS5ocmVmIGFnYWluLiAgVGhpcyBjb3JyZWN0bHkgcG9wdWxhdGVzIHRoZVxuICogcHJvcGVydGllcyBzdWNoIGFzIHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCwgZXRjLlxuICpcbiAqIElFNyBkb2VzIG5vdCBub3JtYWxpemUgdGhlIFVSTCB3aGVuIGFzc2lnbmVkIHRvIGFuIGFuY2hvciBub2RlLiAgKEFwcGFyZW50bHksIGl0IGRvZXMsIGlmIG9uZVxuICogdXNlcyB0aGUgaW5uZXIgSFRNTCBhcHByb2FjaCB0byBhc3NpZ24gdGhlIFVSTCBhcyBwYXJ0IG9mIGFuIEhUTUwgc25pcHBldCAtXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NzI3MjkpICBIb3dldmVyLCBzZXR0aW5nIGltZ1tzcmNdIGRvZXMgbm9ybWFsaXplIHRoZSBVUkwuXG4gKiBVbmZvcnR1bmF0ZWx5LCBzZXR0aW5nIGltZ1tzcmNdIHRvIHNvbWV0aGluZyBsaWtlIFwiamF2YXNjcmlwdDpmb29cIiBvbiBJRSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICogU2luY2UgdGhlIHByaW1hcnkgdXNhZ2UgZm9yIG5vcm1hbGl6aW5nIFVSTHMgaXMgdG8gc2FuaXRpemUgc3VjaCBVUkxzLCB3ZSBjYW4ndCB1c2UgdGhhdFxuICogbWV0aG9kIGFuZCBJRSA8IDggaXMgdW5zdXBwb3J0ZWQuXG4gKlxuICogUmVmZXJlbmNlczpcbiAqICAgaHR0cDovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEFuY2hvckVsZW1lbnRcbiAqICAgaHR0cDovL3d3dy5hcHRhbmEuY29tL3JlZmVyZW5jZS9odG1sL2FwaS9IVE1MQW5jaG9yRWxlbWVudC5odG1sXG4gKiAgIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL3B1bGwvMjkwMlxuICogICBodHRwOi8vamFtZXMucGFkb2xzZXkuY29tL2phdmFzY3JpcHQvcGFyc2luZy11cmxzLXdpdGgtdGhlLWRvbS9cbiAqXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZC5cbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxpemVzIGFuZCBwYXJzZXMgYSBVUkwuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIFVSTCBhcyBhIGRpY3Rpb25hcnkuXG4gKlxuICogICB8IG1lbWJlciBuYW1lICAgfCBEZXNjcmlwdGlvbiAgICB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBocmVmICAgICAgICAgIHwgQSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIFVSTCBpZiBpdCB3YXMgbm90IGFuIGFic29sdXRlIFVSTCB8XG4gKiAgIHwgcHJvdG9jb2wgICAgICB8IFRoZSBwcm90b2NvbCBpbmNsdWRpbmcgdGhlIHRyYWlsaW5nIGNvbG9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICB8IGhvc3QgICAgICAgICAgfCBUaGUgaG9zdCBhbmQgcG9ydCAoaWYgdGhlIHBvcnQgaXMgbm9uLWRlZmF1bHQpIG9mIHRoZSBub3JtYWxpemVkVXJsICAgIHxcbiAqICAgfCBzZWFyY2ggICAgICAgIHwgVGhlIHNlYXJjaCBwYXJhbXMsIG1pbnVzIHRoZSBxdWVzdGlvbiBtYXJrICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgIHwgaGFzaCAgICAgICAgICB8IFRoZSBoYXNoIHN0cmluZywgbWludXMgdGhlIGhhc2ggc3ltYm9sXG4gKiAgIHwgaG9zdG5hbWUgICAgICB8IFRoZSBob3N0bmFtZVxuICogICB8IHBvcnQgICAgICAgICAgfCBUaGUgcG9ydCwgd2l0aG91dCBcIjpcIlxuICogICB8IHBhdGhuYW1lICAgICAgfCBUaGUgcGF0aG5hbWUsIGJlZ2lubmluZyB3aXRoIFwiL1wiXG4gKlxuICovXG5cbnZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuLyoqXG4gKiBkb2N1bWVudE1vZGUgaXMgYW4gSUUtb25seSBwcm9wZXJ0eVxuICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2NjMTk2OTg4KHY9dnMuODUpLmFzcHhcbiAqL1xudmFyIG1zaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cbmZ1bmN0aW9uIHVybFBhcnRzKHVybCkge1xuICB2YXIgaHJlZiA9IHVybDtcblxuICBpZiAobXNpZSkge1xuICAgIC8vIE5vcm1hbGl6ZSBiZWZvcmUgcGFyc2UuICBSZWZlciBJbXBsZW1lbnRhdGlvbiBOb3RlcyBvbiB3aHkgdGhpcyBpc1xuICAgIC8vIGRvbmUgaW4gdHdvIHN0ZXBzIG9uIElFLlxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XG4gICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gIH1cblxuICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gIHJldHVybiB7XG4gICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgIHBvcnQ6IHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHVybFBhcnNpbmdOb2RlLnBvcnQpPyB1cmxQYXJzaW5nTm9kZS5wb3J0OiA4MCxcbiAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKVxuICAgICAgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgOiAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICB9O1xufVxuXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGEgcXVlcnkgc3RyaW5nIChzZWFyY2ggcGFydCBvZiBhIHVybCkgYW5kIHJldHVybnMgYSBkaWN0aW9uYXJ5IHdpdGhcbiAqIHRoZSBkaWZmZXJlbnQga2V5IHZhbHVlIHBhaXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gcXMgcXVlcnlTdHJpbmdcbiAqL1xuZnVuY3Rpb24gcXVlcnlTdHJpbmdUb09iaihxcywgY29uZCkge1xuICB2YXIgcGFpcnMsIHFzT2JqO1xuXG4gIGNvbmQgPSB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25kKT8gY29uZCA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHFzID0gcXMudHJpbSgpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG4gIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcbiAgcXNPYmogPSB7fTtcblxuICB1dGlsaXRpZXMuZm9yRWFjaChwYWlycywgZnVuY3Rpb24gKHBhaXIpIHtcbiAgICB2YXIga2V5VmFsdWUsIGtleSwgdmFsdWU7XG4gICAgaWYgKHBhaXIgIT09ICcnKSB7XG4gICAgICBrZXlWYWx1ZSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgIGtleSA9IGtleVZhbHVlWzBdO1xuICAgICAgdmFsdWUgPSBrZXlWYWx1ZVsxXTtcbiAgICAgIGlmKGNvbmQoa2V5LCB2YWx1ZSkpe1xuICAgICAgICBxc09ialtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcXNPYmo7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuIG9iamVjdCBhbmQgc2VyaWFsaXplcyBpdCBpbnRvIGEgcXVlcnkgc3RyaW5nIHdpdGhvdXQgdGhlIGxlYWRpbmcgJz8nXG4gKiBAcGFyYW0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBvYmpUb1F1ZXJ5U3RyaW5nKG9iaikge1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgdXRpbGl0aWVzLmZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVybFBhcnRzOiB1cmxQYXJ0cyxcbiAgcXVlcnlTdHJpbmdUb09iajogcXVlcnlTdHJpbmdUb09iaixcbiAgb2JqVG9RdWVyeVN0cmluZzogb2JqVG9RdWVyeVN0cmluZ1xufTtcbiIsIi8qanNoaW50IHVudXNlZDpmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBOT0RFX1RZUEVfRUxFTUVOVCA9IDE7XG52YXIgU05BS0VfQ0FTRV9SRUdFWFAgPSAvW0EtWl0vZztcbnZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKyQvaTtcbi8qanNsaW50IG1heGxlbjogNTAwICovXG52YXIgSVNPODA4Nl9SRUdFWFAgPSAvXihbXFwrLV0/XFxkezR9KD8hXFxkezJ9XFxiKSkoKC0/KSgoMFsxLTldfDFbMC0yXSkoXFwzKFsxMl1cXGR8MFsxLTldfDNbMDFdKSk/fFcoWzAtNF1cXGR8NVswLTJdKSgtP1sxLTddKT98KDAwWzEtOV18MFsxLTldXFxkfFsxMl1cXGR7Mn18MyhbMC01XVxcZHw2WzEtNl0pKSkoW1RcXHNdKCgoWzAxXVxcZHwyWzAtM10pKCg6PylbMC01XVxcZCk/fDI0XFw6PzAwKShbXFwuLF1cXGQrKD8hOikpPyk/KFxcMTdbMC01XVxcZChbXFwuLF1cXGQrKT8pPyhbelpdfChbXFwrLV0pKFswMV1cXGR8MlswLTNdKTo/KFswLTVdXFxkKT8pPyk/KT8kLztcblxuXG5mdW5jdGlvbiBub29wKCl7IH1cblxuZnVuY3Rpb24gaXNOdWxsKG8pIHtcbiAgcmV0dXJuIG8gPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZChvKXtcbiAgcmV0dXJuIG8gIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQobyl7XG4gIHJldHVybiBvID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKG51bSl7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNPYmplY3Qob2JqKSAmJiBvYmoud2luZG93ID09PSBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJyYXkpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBhcnJheSApID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB1dGlsaXRpZXMuaXNXaW5kb3cob2JqKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihvYmopIHx8IHV0aWxpdGllcy5pc1VuZGVmaW5lZChvYmopKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGg7XG5cbiAgaWYgKG9iai5ub2RlVHlwZSA9PT0gTk9ERV9UWVBFX0VMRU1FTlQgJiYgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKG9iaikgfHwgdXRpbGl0aWVzLmlzQXJyYXkob2JqKSB8fCBsZW5ndGggPT09IDAgfHxcbiAgICB0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSAmJiBzdHIubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc05vdEVtcHR5U3RyaW5nKHN0cikge1xuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikgJiYgc3RyLmxlbmd0aCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gYXJyYXlMaWtlT2JqVG9BcnJheShhcmdzKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gIHZhciBrZXksIGxlbmd0aDtcbiAgaWYgKG9iaikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIGhhc093blByb3BlcnR5IGV4aXN0cyxcbiAgICAgICAgLy8gYXMgb24gSUU4IHRoZSByZXN1bHQgb2YgcXVlcnlTZWxlY3RvckFsbCBpcyBhbiBvYmplY3Qgd2l0aG91dCBhIGhhc093blByb3BlcnR5IGZ1bmN0aW9uXG4gICAgICAgIGlmIChrZXkgIT09ICdwcm90b3R5cGUnICYmIGtleSAhPT0gJ2xlbmd0aCcgJiYga2V5ICE9PSAnbmFtZScgJiYgKCFvYmouaGFzT3duUHJvcGVydHkgfHwgb2JqLmhhc093blByb3BlcnR5KGtleSkpKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgIHZhciBpc1ByaW1pdGl2ZSA9IHR5cGVvZiBvYmogIT09ICdvYmplY3QnO1xuICAgICAgZm9yIChrZXkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSB8fCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvYmouZm9yRWFjaCAmJiBvYmouZm9yRWFjaCAhPT0gZm9yRWFjaCkge1xuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQsIG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gc25ha2VfY2FzZShuYW1lLCBzZXBhcmF0b3IpIHtcbiAgc2VwYXJhdG9yID0gc2VwYXJhdG9yIHx8ICdfJztcbiAgcmV0dXJuIG5hbWUucmVwbGFjZShTTkFLRV9DQVNFX1JFR0VYUCwgZnVuY3Rpb24obGV0dGVyLCBwb3MpIHtcbiAgICByZXR1cm4gKHBvcyA/IHNlcGFyYXRvciA6ICcnKSArIGxldHRlci50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsKXtcbiAgaWYoIXV0aWxpdGllcy5pc1N0cmluZyhlbWFpbCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdChlbWFpbC50cmltKCkpO1xufVxuXG5mdW5jdGlvbiBleHRlbmQgKG9iaikge1xuICB2YXIgYXJnLCBpLCBrO1xuICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJnID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAoayBpbiBhcmcpIHtcbiAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qob2JqW2tdKSAmJiAhaXNOdWxsKG9ialtrXSkgJiYgaXNPYmplY3QoYXJnW2tdKSl7XG4gICAgICAgICAgb2JqW2tdID0gZXh0ZW5kKHt9LCBvYmpba10sIGFyZ1trXSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBvYmpba10gPSBhcmdba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKXtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBkZWNhcGl0YWxpemUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2Qgd29ya3MgdGhlIHNhbWUgd2F5IGFycmF5LnByb3RvdHlwZS5tYXAgd29ya3MgYnV0IGlmIHRoZSB0cmFuc2Zvcm1lciByZXR1cm5zIHVuZGVmaW5lLCB0aGVuXG4gKiBpdCB3b24ndCBiZSBhZGRlZCB0byB0aGUgdHJhbnNmb3JtZWQgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybUFycmF5KGFycmF5LCB0cmFuc2Zvcm1lcikge1xuICB2YXIgdHJhbnNmb3JtZWRBcnJheSA9IFtdO1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpe1xuICAgIHZhciB0cmFuc2Zvcm1lZEl0ZW0gPSB0cmFuc2Zvcm1lcihpdGVtLCBpbmRleCk7XG4gICAgaWYodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFuc2Zvcm1lZEl0ZW0pKSB7XG4gICAgICB0cmFuc2Zvcm1lZEFycmF5LnB1c2godHJhbnNmb3JtZWRJdGVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZEFycmF5O1xufVxuXG5mdW5jdGlvbiB0b0ZpeGVkRGlnaXRzKG51bSwgZGlnaXRzKSB7XG4gIHZhciBmb3JtYXR0ZWROdW0gPSBudW0gKyAnJztcbiAgZGlnaXRzID0gdXRpbGl0aWVzLmlzTnVtYmVyKGRpZ2l0cykgPyBkaWdpdHMgOiAwO1xuICBudW0gPSB1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSA/IG51bSA6IHBhcnNlSW50KG51bSwgMTApO1xuICBpZih1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSAmJiAhaXNOYU4obnVtKSl7XG4gICAgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XG4gICAgd2hpbGUoZm9ybWF0dGVkTnVtLmxlbmd0aCA8IGRpZ2l0cykge1xuICAgICAgZm9ybWF0dGVkTnVtID0gJzAnICsgZm9ybWF0dGVkTnVtO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkTnVtO1xuICB9XG4gIHJldHVybiBOYU4gKyAnJztcbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBwcmV2aW91c0NhbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIChkZWxheSArIDEpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAoKHRpbWUgLSBwcmV2aW91c0NhbGwpID49IGRlbGF5KSB7XG4gICAgICBwcmV2aW91c0NhbGwgPSB0aW1lO1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlIChjYWxsYmFjaywgd2FpdCkge1xuICB2YXIgdGltZW91dElkO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKXtcbiAgICBpZih0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH0sIHdhaXQpO1xuICB9O1xufVxuXG4vLyBhIGZ1bmN0aW9uIGRlc2lnbmVkIHRvIGJsb3cgdXAgdGhlIHN0YWNrIGluIGEgbmFpdmUgd2F5XG4vLyBidXQgaXQgaXMgb2sgZm9yIHZpZGVvSnMgY2hpbGRyZW4gY29tcG9uZW50c1xuZnVuY3Rpb24gdHJlZVNlYXJjaChyb290LCBnZXRDaGlsZHJlbiwgZm91bmQpe1xuICB2YXIgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbihyb290KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgaWYgKGZvdW5kKGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBlbCA9IHRyZWVTZWFyY2goY2hpbGRyZW5baV0sIGdldENoaWxkcmVuLCBmb3VuZCk7XG4gICAgICBpZiAoZWwpe1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVjaG9Gbih2YWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9O1xufVxuXG4vL05vdGU6IFN1cHBvcnRlZCBmb3JtYXRzIGNvbWUgZnJvbSBodHRwOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lXG4vLyBhbmQgdGhlIGlzbzg2MDEgcmVnZXggY29tZXMgZnJvbSBodHRwOi8vd3d3LnBlbGFnb2Rlc2lnbi5jb20vYmxvZy8yMDA5LzA1LzIwL2lzby04NjAxLWRhdGUtdmFsaWRhdGlvbi10aGF0LWRvZXNudC1zdWNrL1xuZnVuY3Rpb24gaXNJU084NjAxKHZhbHVlKSB7XG4gIGlmKHV0aWxpdGllcy5pc051bWJlcih2YWx1ZSkpe1xuICAgIHZhbHVlID0gdmFsdWUgKyAnJzsgIC8vd2UgbWFrZSBzdXJlIHRoYXQgd2UgYXJlIHdvcmtpbmcgd2l0aCBzdHJpbmdzXG4gIH1cblxuICBpZighdXRpbGl0aWVzLmlzU3RyaW5nKHZhbHVlKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIElTTzgwODZfUkVHRVhQLnRlc3QodmFsdWUudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIEJyb3dzZXIgaXMgSUU5IGFuZCBiZWxvd1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciB2ZXJzaW9uID0gdXRpbGl0aWVzLmdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKG5hdmlnYXRvcik7XG4gIGlmICh2ZXJzaW9uID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uIDwgMTA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cbiAqIFNvdXJjZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwOSh2PXZzLjg1KS5hc3B4XG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cbiAqL1xuZnVuY3Rpb24gZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKSB7XG4gIHZhciBydiA9IC0xO1xuXG4gIGlmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJykge1xuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIk1TSUUgKFswLTldezEsfVtcXC4wLTldezAsfSlcIik7XG4gICAgdmFyIHJlcyA9IHJlLmV4ZWModWEpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIHJ2ID0gcGFyc2VGbG9hdChyZXNbMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydjtcbn1cblxuZnVuY3Rpb24gaXNJRTExKCkge1xuICB2YXIgcmVzID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zZWFyY2goLyh0cmlkZW50KS4rcnZbOlxcc10oW1xcd1xcLl0rKS4rbGlrZVxcc2dlY2tvL2kpO1xuICByZXR1cm4gcmVzID49IDA7XG59XG5cbi8qKiogTW9iaWxlIFV0aWxpdHkgZnVuY3Rpb25zICoqKi9cbmZ1bmN0aW9uIGlzSURldmljZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfGFkKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG4gIHJldHVybiAvaVAoaG9uZXxhZHxvZCl8QW5kcm9pZHxXaW5kb3dzIFBob25lLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc0lQaG9uZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfG9kKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNBbmRyb2lkKCkge1xuICByZXR1cm4gL0FuZHJvaWQvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbmZ1bmN0aW9uIGlzRWRnZSgpIHtcbiAgcmV0dXJuIC8oZWRnZSlcXC8oKFxcZCspP1tcXHdcXC5dKykvaS50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBzY3JpcHRMb2FkZWRJbklmcmFtZSgpIHtcblx0dmFyIGRvY0NsYXNzTGlzdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3Q7XG5cdHZhciBzY3JpcHRJblBsYXllcklmcmFtZSA9IGRvY0NsYXNzTGlzdCAmJiBkb2NDbGFzc0xpc3QuY29udGFpbnMoJ2JjLWlmcmFtZScpOyAvLyBodG1sIG9mIHBsYXllciBoYXMgYmMtaWZyYW1lIGNsYXNzIHdoZW4gQnJpZ2h0Y292ZSBwbGF5ZXIgZW1kZWQgaW4gaUZyYW1lXG4gIHJldHVybiAhKHNjcmlwdEluUGxheWVySWZyYW1lICYmIGlzRWRnZSgpKTtcbn1cblxudmFyIHV0aWxpdGllcyA9IHtcbiAgX1VBOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBub29wOiBub29wLFxuICBpc051bGw6IGlzTnVsbCxcbiAgaXNEZWZpbmVkOiBpc0RlZmluZWQsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzRW1wdHlTdHJpbmc6IGlzRW1wdHlTdHJpbmcsXG4gIGlzTm90RW1wdHlTdHJpbmc6IGlzTm90RW1wdHlTdHJpbmcsXG4gIGFycmF5TGlrZU9ialRvQXJyYXk6IGFycmF5TGlrZU9ialRvQXJyYXksXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIHNuYWtlX2Nhc2U6IHNuYWtlX2Nhc2UsXG4gIGlzVmFsaWRFbWFpbDogaXNWYWxpZEVtYWlsLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcbiAgZGVjYXBpdGFsaXplOiBkZWNhcGl0YWxpemUsXG4gIHRyYW5zZm9ybUFycmF5OiB0cmFuc2Zvcm1BcnJheSxcbiAgdG9GaXhlZERpZ2l0czogdG9GaXhlZERpZ2l0cyxcbiAgdGhyb3R0bGU6IHRocm90dGxlLFxuICBkZWJvdW5jZTogZGVib3VuY2UsXG4gIHRyZWVTZWFyY2g6IHRyZWVTZWFyY2gsXG4gIGVjaG9GbjogZWNob0ZuLFxuICBpc0lTTzg2MDE6IGlzSVNPODYwMSxcbiAgaXNPbGRJRTogaXNPbGRJRSxcbiAgaXNJRTExOiBpc0lFMTEsXG4gIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uOiBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbixcbiAgaXNJRGV2aWNlOiBpc0lEZXZpY2UsXG4gIGlzTW9iaWxlOiBpc01vYmlsZSxcbiAgaXNJUGhvbmU6IGlzSVBob25lLFxuICBpc0FuZHJvaWQ6IGlzQW5kcm9pZCxcbiAgaXNFZGdlOiBpc0VkZ2UsXG4gIHNjcmlwdExvYWRlZEluSWZyYW1lOiBzY3JpcHRMb2FkZWRJbklmcmFtZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsaXRpZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIHhtbCA9IHt9O1xuXG54bWwuc3RyVG9YTUxEb2MgPSBmdW5jdGlvbiBzdHJUb1hNTERvYyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKXtcbiAgLy9JRSA4XG4gIGlmKHR5cGVvZiB3aW5kb3cuRE9NUGFyc2VyID09PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIHhtbERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxET00nKTtcbiAgICB4bWxEb2N1bWVudC5hc3luYyA9IGZhbHNlO1xuICAgIHhtbERvY3VtZW50LmxvYWRYTUwoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XG4gICAgcmV0dXJuIHhtbERvY3VtZW50O1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpO1xuXG4gIGZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xuICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgdmFyIHBhcnNlZERvY3VtZW50O1xuXG4gICAgLy9Ob3RlOiBUaGlzIHRyeSBjYXRjaCBpcyB0byBkZWFsIHdpdGggdGhlIGZhY3QgdGhhdCBvbiBJRSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nIGRvZXMgdGhyb3cgYW4gZXJyb3IgYnV0IHRoZSByZXN0IG9mIHRoZSBicm93c2VycyBkb24ndC5cbiAgICB0cnkge1xuICAgICAgcGFyc2VkRG9jdW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UsIFwiYXBwbGljYXRpb24veG1sXCIpO1xuXG4gICAgICBpZihpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICB9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwieG1sLnN0clRvWE1MRE9DOiBFcnJvciBwYXJzaW5nIHRoZSBzdHJpbmc6ICdcIiArIHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UgKyBcIidcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZERvY3VtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB7XG4gICAgdHJ5IHsgLy8gcGFyc2VyIGFuZCBwYXJzZXJlcnJvck5TIGNvdWxkIGJlIGNhY2hlZCBvbiBzdGFydHVwIGZvciBlZmZpY2llbmN5XG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpLFxuICAgICAgICBlcnJvbmVvdXNQYXJzZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoJ0lOVkFMSUQnLCAndGV4dC94bWwnKSxcbiAgICAgICAgcGFyc2VyZXJyb3JOUyA9IGVycm9uZW91c1BhcnNlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIilbMF0ubmFtZXNwYWNlVVJJO1xuXG4gICAgICBpZiAocGFyc2VyZXJyb3JOUyA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKSB7XG4gICAgICAgIC8vIEluIFBoYW50b21KUyB0aGUgcGFyc2VlcnJvciBlbGVtZW50IGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGEgc3BlY2lhbCBuYW1lc3BhY2UsIHNvIHdlIGFyZSBqdXN0IGd1ZXNzaW5nIGhlcmUgOihcbiAgICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoID4gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lTlMocGFyc2VyZXJyb3JOUywgJ3BhcnNlcmVycm9yJykubGVuZ3RoID4gMDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvL05vdGUgb24gSUUgcGFyc2VTdHJpbmcgdGhyb3dzIGFuIGVycm9yIGJ5IGl0c2VsZiBhbmQgaXQgd2lsbCBuZXZlciByZWFjaCB0aGlzIGNvZGUuIEJlY2F1c2UgaXQgd2lsbCBoYXZlIGZhaWxlZCBiZWZvcmVcbiAgICB9XG4gIH1cbn07XG5cbnhtbC5wYXJzZVRleHQgPSBmdW5jdGlvbiBwYXJzZVRleHQgKHNWYWx1ZSkge1xuICBpZiAoL15cXHMqJC8udGVzdChzVmFsdWUpKSB7IHJldHVybiBudWxsOyB9XG4gIGlmICgvXig/OnRydWV8ZmFsc2UpJC9pLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gc1ZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiOyB9XG4gIGlmIChpc0Zpbml0ZShzVmFsdWUpKSB7IHJldHVybiBwYXJzZUZsb2F0KHNWYWx1ZSk7IH1cbiAgaWYgKHV0aWxpdGllcy5pc0lTTzg2MDEoc1ZhbHVlKSkgeyByZXR1cm4gbmV3IERhdGUoc1ZhbHVlKTsgfVxuICByZXR1cm4gc1ZhbHVlLnRyaW0oKTtcbn07XG5cbnhtbC5KWE9OVHJlZSA9IGZ1bmN0aW9uIEpYT05UcmVlIChvWE1MUGFyZW50KSB7XG4gIHZhciBwYXJzZVRleHQgPSB4bWwucGFyc2VUZXh0O1xuXG4gIC8vVGhlIGRvY3VtZW50IG9iamVjdCBpcyBhbiBlc3BlY2lhbCBvYmplY3QgdGhhdCBpdCBtYXkgbWlzcyBzb21lIGZ1bmN0aW9ucyBvciBhdHRycyBkZXBlbmRpbmcgb24gdGhlIGJyb3dzZXIuXG4gIC8vVG8gcHJldmVudCB0aGlzIHByb2JsZW0gd2l0aCBjcmVhdGUgdGhlIEpYT05UcmVlIHVzaW5nIHRoZSByb290IGNoaWxkTm9kZSB3aGljaCBpcyBhIGZ1bGx5IGZsZXNoZWQgbm9kZSBvbiBhbGwgc3VwcG9ydGVkXG4gIC8vYnJvd3NlcnMuXG4gIGlmKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KXtcbiAgICByZXR1cm4gbmV3IHhtbC5KWE9OVHJlZShvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCk7XG4gIH1cblxuICBpZiAob1hNTFBhcmVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICB2YXIgc0NvbGxlY3RlZFR4dCA9IFwiXCI7XG4gICAgZm9yICh2YXIgb05vZGUsIHNQcm9wLCB2Q29udGVudCwgbkl0ZW0gPSAwOyBuSXRlbSA8IG9YTUxQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IG5JdGVtKyspIHtcbiAgICAgIG9Ob2RlID0gb1hNTFBhcmVudC5jaGlsZE5vZGVzLml0ZW0obkl0ZW0pO1xuICAgICAgLypqc2hpbnQgYml0d2lzZTogZmFsc2UqL1xuICAgICAgaWYgKChvTm9kZS5ub2RlVHlwZSAtIDEgfCAxKSA9PT0gMykgeyBzQ29sbGVjdGVkVHh0ICs9IG9Ob2RlLm5vZGVUeXBlID09PSAzID8gb05vZGUubm9kZVZhbHVlLnRyaW0oKSA6IG9Ob2RlLm5vZGVWYWx1ZTsgfVxuICAgICAgZWxzZSBpZiAob05vZGUubm9kZVR5cGUgPT09IDEgJiYgIW9Ob2RlLnByZWZpeCkge1xuICAgICAgICBzUHJvcCA9IHV0aWxpdGllcy5kZWNhcGl0YWxpemUob05vZGUubm9kZU5hbWUpO1xuICAgICAgICB2Q29udGVudCA9IG5ldyB4bWwuSlhPTlRyZWUob05vZGUpO1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShzUHJvcCkpIHtcbiAgICAgICAgICBpZiAodGhpc1tzUHJvcF0uY29uc3RydWN0b3IgIT09IEFycmF5KSB7IHRoaXNbc1Byb3BdID0gW3RoaXNbc1Byb3BdXTsgfVxuICAgICAgICAgIHRoaXNbc1Byb3BdLnB1c2godkNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgeyB0aGlzW3NQcm9wXSA9IHZDb250ZW50OyB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzQ29sbGVjdGVkVHh0KSB7IHRoaXMua2V5VmFsdWUgPSBwYXJzZVRleHQoc0NvbGxlY3RlZFR4dCk7IH1cbiAgfVxuXG4gIC8vSUU4IFN0dXBpZCBmaXhcbiAgdmFyIGhhc0F0dHIgPSB0eXBlb2Ygb1hNTFBhcmVudC5oYXNBdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJz8gb1hNTFBhcmVudC5hdHRyaWJ1dGVzLmxlbmd0aCA+IDA6IG9YTUxQYXJlbnQuaGFzQXR0cmlidXRlcygpO1xuICBpZiAoaGFzQXR0cikge1xuICAgIHZhciBvQXR0cmliO1xuICAgIGZvciAodmFyIG5BdHRyaWIgPSAwOyBuQXR0cmliIDwgb1hNTFBhcmVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgbkF0dHJpYisrKSB7XG4gICAgICBvQXR0cmliID0gb1hNTFBhcmVudC5hdHRyaWJ1dGVzLml0ZW0obkF0dHJpYik7XG4gICAgICB0aGlzW1wiQFwiICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvQXR0cmliLm5hbWUpXSA9IHBhcnNlVGV4dChvQXR0cmliLnZhbHVlLnRyaW0oKSk7XG4gICAgfVxuICB9XG59O1xuXG54bWwuSlhPTlRyZWUucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XG4gIHJldHVybiB0aGlzWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xufTtcblxueG1sLnRvSlhPTlRyZWUgPSBmdW5jdGlvbiB0b0pYT05UcmVlKHhtbFN0cmluZyl7XG4gIHZhciB4bWxEb2MgPSB4bWwuc3RyVG9YTUxEb2MoeG1sU3RyaW5nKTtcbiAgcmV0dXJuIG5ldyB4bWwuSlhPTlRyZWUoeG1sRG9jKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGV4dHJhY3QgdGhlIGtleXZhbHVlIG9mIGEgSlhPTlRyZWUgb2JqXG4gKlxuICogQHBhcmFtIHhtbE9iaiB7SlhPTlRyZWV9XG4gKiByZXR1cm4gdGhlIGtleSB2YWx1ZSBvciB1bmRlZmluZWQ7XG4gKi9cbnhtbC5rZXlWYWx1ZSA9IGZ1bmN0aW9uIGdldEtleVZhbHVlKHhtbE9iaikge1xuICBpZih4bWxPYmope1xuICAgIHJldHVybiB4bWxPYmoua2V5VmFsdWU7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnhtbC5hdHRyID0gZnVuY3Rpb24gZ2V0QXR0clZhbHVlKHhtbE9iaiwgYXR0cikge1xuICBpZih4bWxPYmopIHtcbiAgICByZXR1cm4geG1sT2JqWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG54bWwuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlWE1MKHN0cikge1xuICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhzdHIpKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmYXBvczsnKTtcbn07XG5cbnhtbC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGVYTUwoc3RyKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mYXBvczsvZywgXCInXCIpXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+JylcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhtbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy9AZXhjbHVkZVxudmFyIHZpZGVvanMgPSB3aW5kb3cudmlkZW9qcyB8fCB7XG5cdGdldENvbXBvbmVudCA6IGZ1bmN0aW9uKCkge30sXG5cdGV4dGVuZCA6IGZ1bmN0aW9uKCkge30sXG5cdHJlZ2lzdGVyQ29tcG9uZW50IDogZnVuY3Rpb24oKSB7fSxcblx0cmVnaXN0ZXJQbHVnaW4gOiBmdW5jdGlvbigpIHt9XG59O1xuLy8gQGVuZGV4Y2x1ZGVcblxud2luZG93Ll9tb2xTZXR0aW5ncyA9IG51bGw7XG5cbnJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzUnKTtcbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmxvZ2dlci5sb2coJ1ByZWJpZCBNYWlsT25saW5lIHBsdWdpbiB2ZXJzaW9uIDEuMy45Jyk7XG5cbnZhciB2aWRlb0pzVkFTVCA9IHJlcXVpcmUoJy4vcGx1Z2luL3ZpZGVvanMudmFzdC52cGFpZCcpO1xuXG5pZiAodmlkZW9qcy5yZWdpc3RlclBsdWdpbikge1xuICBpZiAoIXZpZGVvanMuZ2V0UGx1Z2lucygpLnZhc3RDbGllbnQpIHtcbiAgICB2aWRlb2pzLnJlZ2lzdGVyUGx1Z2luKCd2YXN0Q2xpZW50JywgdmlkZW9Kc1ZBU1QpO1xuICB9XG59XG5lbHNlIHtcbiAgaWYgKCF2aWRlb2pzLlBsYXllci5wcm90b3R5cGUudmFzdENsaWVudCkge1xuICAgIHZpZGVvanMucGx1Z2luKCd2YXN0Q2xpZW50JywgdmlkZW9Kc1ZBU1QpO1xuICB9XG59XG5cbi8vIFZJRExBLTQzOTEgLSBBZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgcGxheWVycyBvbiB0aGUgc2FtZSBwYWdlLCBlYWNoIHdpdGggYSB1bmlxdWUgTU9MIHBsdWdpbiBsb2FkZWQgZnJvbSBhbiBpRnJhbWVzXG5pZiAocGFyZW50ICYmIHdpbmRvdyAhPT0gcGFyZW50KSB7XG4gIHdpbmRvdy5iY192YXN0Q2xpZW50RnVuYyA9IHZpZGVvSnNWQVNUO1xufVxuIl19
