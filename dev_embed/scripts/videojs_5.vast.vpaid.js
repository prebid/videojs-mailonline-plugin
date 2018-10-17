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
    '<script type="text/javascript" src="{{iframeURL_JS}}"></script>' +
    '<script type="text/javascript">' +
    'window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');' +
    '</script>' +
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
    if (timeLeft > 0) {
        //skipButton.innerHTML = "Skip in " + utilities.toFixedDigits(timeLeft, 2) + "...";
        skipButton.innerHTML = '<p class="vast-skip-button-text">' + window._molSettings.skipText.replace('%%TIME%%', utilities.toFixedDigits(timeLeft, 2)) + '</p>';
    } else {
      if (!dom.hasClass(skipButton, 'enabled')) {
        dom.addClass(skipButton, 'enabled');
        //skipButton.innerHTML = "Skip ad";
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
    blocker.href = generateClickThroughURL(clickThroughMacro, player);

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
              window.open(generateClickThroughURL(clickThroughMacro, player), '_blank');
              if (window.Event.prototype.stopPropagation !== undefined) {
                  e.stopPropagation();
              }
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
    blocker.href = generateClickThroughURL(response.clickThrough, player);
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
			cb(new VASTError("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + evtName + "'"));
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
	console.log('[BC-MOL] VPAIDAdUnitWrapper->Calling initAd on creative');
	this.waitForEvent('AdLoaded', cb);
  this._adUnit.initAd(width, height, viewMode, desiredBitrate, adUnitData);
};

VPAIDAdUnitWrapper.prototype.resizeAd = function (width, height, viewMode, cb) {
  // NOTE: AdSizeChange event is only supported on VPAID 2.0 so for the moment we are not going to use it
  // and will assume that everything is fine after the async call
	console.log('[BC-MOL] VPAIDAdUnitWrapper->Calling resizeAd on creative');
  this.adUnitAsyncCall('resizeAd', width, height, viewMode, cb);
  if (window.MoatApiReference) {
  	window.MoatApiReference.dispatchEvent({type: 'AdSizeChange', adVolume: this.options.player.volume()});
  }
};

VPAIDAdUnitWrapper.prototype.startAd = function (cb) {
	console.log('[BC-MOL] VPAIDAdUnitWrapper->Calling startAd on creative');
	if (!this.adStarted) {
		this.waitForEvent('AdStarted', cb);
	}
  this._adUnit.startAd();
  if (this.adStarted) {
    cb(null);
  }
};

VPAIDAdUnitWrapper.prototype.stopAd = function (cb) {
	console.log('[BC-MOL] VPAIDAdUnitWrapper->Calling stopAd on creative');
  this.waitForEvent('AdStopped', cb);
  this._adUnit.stopAd();
};

VPAIDAdUnitWrapper.prototype.pauseAd = function (cb) {
	console.log('[BC-MOL] VPAIDAdUnitWrapper->Calling pauseAd on creative');
  this.waitForEvent('AdPaused', cb);
  this._adUnit.pauseAd();
};

VPAIDAdUnitWrapper.prototype.resumeAd = function (cb) {
	console.log('[BC-MOL] VPAIDAdUnitWrapper->Calling resumeAd on creative');
  this.waitForEvent('AdPlaying', cb);
  this._adUnit.resumeAd();
};

VPAIDAdUnitWrapper.prototype.expandAd = function (cb) {
	console.log('[BC-MOL] VPAIDAdUnitWrapper->Calling expandAd on creative');
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.expandAd();
};

VPAIDAdUnitWrapper.prototype.collapseAd = function (cb) {
	console.log('[BC-MOL] VPAIDAdUnitWrapper->Calling collapseAd on creative');
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.collapseAd();
};

VPAIDAdUnitWrapper.prototype.skipAd = function (cb) {
	console.log('[BC-MOL] VPAIDAdUnitWrapper->Calling skipAd on creative');
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

},{"../../utils/utilityFunctions":43,"../vast/VASTError":19}],30:[function(require,module,exports){
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

videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));

},{"./black-poster":32}],34:[function(require,module,exports){
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
        trackAdError(new VASTError('timeout while waiting for the video to start playing', 402));
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
var _prefix = "[videojs-vast-vpaid] ";

function setVerbosity (v)
{
    _verbosity = v;
}

function handleMsg (method, args)
{
    if ((args.length) > 0 && (typeof args[0] === 'string'))
    {
        args[0] = _prefix + args[0];
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
  return o instanceof Element;
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

  if (tech) {
    snapshot.nativePoster = tech.poster;
    snapshot.style = tech.getAttribute('style');
  }

	var els = document.getElementsByClassName('vjs-dock-text');
	if (els && els.length > 0) {
		snapshot.dockText = els[0];
		snapshot.dockText.style.display = 'none';
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
              player.play();
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
  isAndroid: isAndroid
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

// require('./plugin/components/ads-label_5');
require('./plugin/components/black-poster_5');

console.log('Prebid MailOnline plugin version 1.2.9');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

if (videojs.registerPlugin) {
	videojs.registerPlugin('vastClient', videoJsVAST);
}
else {
	videojs.plugin('vastClient', videoJsVAST);
}

<<<<<<< HEAD
},{"./plugin/components/black-poster_5":33,"./plugin/videojs.vast.vpaid":34}]},{},[45])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9zY3JpcHRzL2Fkcy9pY29uL0ljb25JbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9DYXRlZ29yeS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0NvbXBhbmlvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0NyZWF0aXZlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvSWNvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0luTGluZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0ludGVyYWN0aXZlQ3JlYXRpdmVGaWxlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvTGluZWFyLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvTWVkaWFGaWxlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVHJhY2tpbmdFdmVudC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1VuaXZlcnNhbEFkSWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUQ2xpZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEVycm9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEludGVncmF0b3IuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUUmVzcG9uc2UuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUVHJhY2tlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZlcmlmaWNhdGlvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZpZGVvQ2xpY2tzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVmlld2FibGVJbXByZXNzaW9uLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvV3JhcHBlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L3BhcnNlcnMuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC92YXN0VXRpbC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92cGFpZC9WUEFJREFkVW5pdFdyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURIVE1MNVRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzUuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vdmlkZW9qcy52YXN0LnZwYWlkLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvYW5WaWRlb1ZpZXdhYmlsaXR5LmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvYXN5bmMuanMiLCJzcmMvc2NyaXB0cy91dGlscy9jb25zb2xlTG9nZ2VyLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvZG9tLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvaHR0cC5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL21pbWV0eXBlcy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3BsYXllclV0aWxzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvdXJsVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91dGlsaXR5RnVuY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMveG1sLmpzIiwic3JjL3NjcmlwdHMvdmlkZW9qc181LnZhc3QudnBhaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBNRVRIT0RTID0gW1xuICAgICdoYW5kc2hha2VWZXJzaW9uJyxcbiAgICAnaW5pdEFkJyxcbiAgICAnc3RhcnRBZCcsXG4gICAgJ3N0b3BBZCcsXG4gICAgJ3NraXBBZCcsIC8vIFZQQUlEIDIuMCBuZXcgbWV0aG9kXG4gICAgJ3Jlc2l6ZUFkJyxcbiAgICAncGF1c2VBZCcsXG4gICAgJ3Jlc3VtZUFkJyxcbiAgICAnZXhwYW5kQWQnLFxuICAgICdjb2xsYXBzZUFkJyxcbiAgICAnc3Vic2NyaWJlJyxcbiAgICAndW5zdWJzY3JpYmUnXG5dO1xuXG52YXIgRVZFTlRTID0gW1xuICAgICdBZExvYWRlZCcsXG4gICAgJ0FkU3RhcnRlZCcsXG4gICAgJ0FkU3RvcHBlZCcsXG4gICAgJ0FkU2tpcHBlZCcsXG4gICAgJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkU2l6ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRMaW5lYXJDaGFuZ2UnLFxuICAgICdBZER1cmF0aW9uQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZEV4cGFuZGVkQ2hhbmdlJyxcbiAgICAnQWRSZW1haW5pbmdUaW1lQ2hhbmdlJywgLy8gW0RlcHJlY2F0ZWQgaW4gMi4wXSBidXQgd2lsbCBiZSBzdGlsbCBmaXJlZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAnQWRWb2x1bWVDaGFuZ2UnLFxuICAgICdBZEltcHJlc3Npb24nLFxuICAgICdBZFZpZGVvU3RhcnQnLFxuICAgICdBZFZpZGVvRmlyc3RRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9NaWRwb2ludCcsXG4gICAgJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJyxcbiAgICAnQWRWaWRlb0NvbXBsZXRlJyxcbiAgICAnQWRDbGlja1RocnUnLFxuICAgICdBZEludGVyYWN0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyxcbiAgICAnQWRVc2VyTWluaW1pemUnLFxuICAgICdBZFVzZXJDbG9zZScsXG4gICAgJ0FkUGF1c2VkJyxcbiAgICAnQWRQbGF5aW5nJyxcbiAgICAnQWRMb2cnLFxuICAgICdBZEVycm9yJ1xuXTtcblxudmFyIEdFVFRFUlMgPSBbXG4gICAgJ2dldEFkTGluZWFyJyxcbiAgICAnZ2V0QWRXaWR0aCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkSGVpZ2h0JywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRFeHBhbmRlZCcsXG4gICAgJ2dldEFkU2tpcHBhYmxlU3RhdGUnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZFJlbWFpbmluZ1RpbWUnLFxuICAgICdnZXRBZER1cmF0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRWb2x1bWUnLFxuICAgICdnZXRBZENvbXBhbmlvbnMnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEljb25zJyAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuXTtcblxudmFyIFNFVFRFUlMgPSBbXG4gICAgJ3NldEFkVm9sdW1lJ1xuXTtcblxuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIElWUEFJREFkVW5pdFxuICpcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW9cbiAqL1xuZnVuY3Rpb24gSVZQQUlEQWRVbml0KGNyZWF0aXZlLCBlbCwgdmlkZW8pIHt9XG5cblxuLyoqXG4gKiBoYW5kc2hha2VWZXJzaW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFZQQUlEVmVyc2lvblxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKFZQQUlEVmVyc2lvbiwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGluaXRBZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvblxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdG9wQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0b3BBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBza2lwQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiByZXNpemVBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUucmVzaXplQWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHBhdXNlQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnBhdXNlQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzdW1lQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc3VtZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGV4cGFuZEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBjb2xsYXBzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY29udGV4dCkge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHt9O1xuXG5cblxuLyoqXG4gKiBnZXRBZExpbmVhclxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRMaW5lYXIgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRXaWR0aFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRXaWR0aCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEhlaWdodFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRIZWlnaHQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRFeHBhbmRlZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRFeHBhbmRlZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFNraXBwYWJsZVN0YXRlXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFNraXBwYWJsZVN0YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkUmVtYWluaW5nVGltZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRSZW1haW5pbmdUaW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRHVyYXRpb25cbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRHVyYXRpb24gPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkVm9sdW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkQ29tcGFuaW9uc1xuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRDb21wYW5pb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkSWNvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSWNvbnMgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYWxsYmFjaykge307XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ01FVEhPRFMnLCBNRVRIT0RTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0dFVFRFUlMnLCBHRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ1NFVFRFUlMnLCBTRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0VWRU5UUycsICBFVkVOVFMpO1xuXG5cbnZhciBWUEFJRDFfTUVUSE9EUyA9IE1FVEhPRFMuZmlsdGVyKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiBbJ3NraXBBZCddLmluZGV4T2YobWV0aG9kKSA9PT0gLTE7XG59KTtcblxuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnY2hlY2tWUEFJREludGVyZmFjZScsIGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UgKGNyZWF0aXZlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFZQQUlEMV9NRVRIT0RTLmV2ZXJ5KGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNyZWF0aXZlW2tleV0gPT09ICdmdW5jdGlvbic7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElWUEFJREFkVW5pdDtcblxuZnVuY3Rpb24gYWRkU3RhdGljVG9JbnRlcmZhY2UoSW50ZXJmYWNlLCBuYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRlcmZhY2UsIG5hbWUsIHtcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSVZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9JVlBBSURBZFVuaXQnKTtcbnZhciBTdWJzY3JpYmVyID0gcmVxdWlyZSgnLi9zdWJzY3JpYmVyJyk7XG52YXIgY2hlY2tWUEFJREludGVyZmFjZSA9IElWUEFJREFkVW5pdC5jaGVja1ZQQUlESW50ZXJmYWNlO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIE1FVEhPRFMgPSBJVlBBSURBZFVuaXQuTUVUSE9EUztcbnZhciBFUlJPUiA9ICdBZEVycm9yJztcbnZhciBBRF9DTElDSyA9ICdBZENsaWNrVGhydSc7XG52YXIgRklMVEVSRURfRVZFTlRTID0gSVZQQUlEQWRVbml0LkVWRU5UUy5maWx0ZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIGV2ZW50ICE9IEFEX0NMSUNLO1xufSk7XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG5cbi8qKlxuICogVlBBSURBZFVuaXRcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSBWUEFJRENyZWF0aXZlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbZWxdIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMuc2xvdCBpZiBkZWZpbmVkXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IFt2aWRlb10gdGhpcyB3aWxsIGJlIHVzZWQgaW4gaW5pdEFkIGVudmlyb25tZW50VmFycy52aWRlb1Nsb3QgaWYgZGVmaW5lZFxuICovXG5mdW5jdGlvbiBWUEFJREFkVW5pdChWUEFJRENyZWF0aXZlLCBlbCwgdmlkZW8sIGlmcmFtZSkge1xuICAgIHRoaXMuX2lzVmFsaWQgPSBjaGVja1ZQQUlESW50ZXJmYWNlKFZQQUlEQ3JlYXRpdmUpO1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlID0gVlBBSURDcmVhdGl2ZTtcbiAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgICAgICB0aGlzLl9pZnJhbWUgPSBpZnJhbWU7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gbmV3IFN1YnNjcmliZXIoKTtcbiAgICAgICAgdXRpbHMuc2V0RnVsbFNpemVTdHlsZShlbCk7XG4gICAgICAgICRhZGRFdmVudHNTdWJzY3JpYmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbn1cblxuVlBBSURBZFVuaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJVlBBSURBZFVuaXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBpc1ZhbGlkVlBBSURBZCB3aWxsIHJldHVybiBpZiB0aGUgVlBBSURDcmVhdGl2ZSBwYXNzZWQgaW4gY29uc3RydWN0b3IgaXMgdmFsaWQgb3Igbm90XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmlzVmFsaWRWUEFJREFkID0gZnVuY3Rpb24gaXNWYWxpZFZQQUlEQWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG59O1xuXG5JVlBBSURBZFVuaXQuTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIC8vTk9URTogdGhpcyBtZXRob2RzIGFyZ3VtZW50cyBvcmRlciBhcmUgaW1wbGVtZW50ZWQgZGlmZmVyZW50bHkgZnJvbSB0aGUgc3BlY1xuICAgIHZhciBpZ25vcmVzID0gW1xuICAgICAgICAnc3Vic2NyaWJlJyxcbiAgICAgICAgJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgJ2luaXRBZCdcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZXMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmlhdHkgPSBJVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0ubGVuZ3RoO1xuICAgICAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IChhcmlhdHkgPT09IGFyZ3MubGVuZ3RoKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW21ldGhvZF0uYXBwbHkodGhpcy5fY3JlYXRpdmUsIGFyZ3MpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9O1xufSk7XG5cblxuLyoqXG4gKiBpbml0QWQgY29uY3JlYXRlIGltcGxlbWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmlld01vZGUgY2FuIGJlICdub3JtYWwnLCAndGh1bWJuYWlsJyBvciAnZnVsbHNjcmVlbidcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXNpcmVkQml0cmF0ZSBpbmRpY2F0ZXMgdGhlIGRlc2lyZWQgYml0cmF0ZSBpbiBrYnBzXG4gKiBAcGFyYW0ge29iamVjdH0gW2NyZWF0aXZlRGF0YV0gdXNlZCBmb3IgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gW2Vudmlyb25tZW50VmFyc10gdXNlZCBmb3IgcGFzc2luZyBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBvZiBqcyB2ZXJzaW9uLCBpZiBlbCAmIHZpZGVvIHdhcyB1c2VkIGluIGNvbnN0cnVjdG9yIHNsb3QgJiB2aWRlb1Nsb3Qgd2lsbCBiZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge05vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24gaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMsIGNhbGxiYWNrKSB7XG4gICAgY3JlYXRpdmVEYXRhID0gY3JlYXRpdmVEYXRhIHx8IHt9O1xuICAgIGVudmlyb25tZW50VmFycyA9IHV0aWxzLmV4dGVuZCh7XG4gICAgICAgIHNsb3Q6IHRoaXMuX2VsLFxuICAgICAgICB2aWRlb1Nsb3Q6IHRoaXMuX3ZpZGVvRWxcbiAgICB9LCBlbnZpcm9ubWVudFZhcnMgfHwge30pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IpO1xuICAgIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnN1YnNjcmliZShoYW5kbGVyLCBldmVudCwgY29udGV4dCk7XG59O1xuXG5cbi8qKlxuICogdW5zdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZShoYW5kbGVyLCBldmVudCk7XG59O1xuXG4vL2FsaWFzXG5WUEFJREFkVW5pdC5wcm90b3R5cGUub24gPSBWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlO1xuVlBBSURBZFVuaXQucHJvdG90eXBlLm9mZiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZTtcblxuSVZQQUlEQWRVbml0LkdFVFRFUlMuZm9yRWFjaChmdW5jdGlvbihnZXR0ZXIpIHtcbiAgICBWUEFJREFkVW5pdC5wcm90b3R5cGVbZ2V0dGVyXSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVtnZXR0ZXJdKCk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBzZXRBZFZvbHVtZVxuICpcbiAqIEBwYXJhbSB2b2x1bWVcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uIHNldEFkVm9sdW1lKHZvbHVtZSwgY2FsbGJhY2spIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zZXRBZFZvbHVtZSh2b2x1bWUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmUuZ2V0QWRWb2x1bWUoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHJlc3VsdCA9PT0gdm9sdW1lLCAnZmFpbGVkIHRvIGFwcGx5IHZvbHVtZTogJyArIHZvbHVtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wQWQoKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZUFsbCgpO1xufTtcblxuZnVuY3Rpb24gJGFkZEV2ZW50c1N1YnNjcmliZXJzKCkge1xuICAgIC8vIHNvbWUgYWRzIGltcGxlbWVudFxuICAgIC8vIHNvIHRoZXkgb25seSBoYW5kbGUgb25lIHN1YnNjcmliZXJcbiAgICAvLyB0byBoYW5kbGUgdGhpcyB3ZSBjcmVhdGUgb3VyIG9uZVxuICAgIEZJTFRFUkVEX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJHRyaWdnZXIuYmluZCh0aGlzLCBldmVudCksIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgLy8gbWFwIHRoZSBjbGljayBldmVudCB0byBiZSBhbiBvYmplY3QgaW5zdGVhZCBvZiBkZXBlbmRpbmcgb2YgdGhlIG9yZGVyIG9mIHRoZSBhcmd1bWVudHNcbiAgICAvLyBhbmQgdG8gYmUgY29uc2lzdGVudCB3aXRoIHRoZSBmbGFzaFxuICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkY2xpY2tUaHJ1SG9vay5iaW5kKHRoaXMpLCBBRF9DTElDSyk7XG5cbiAgICAvLyBiZWNhdXNlIHdlIGFyZSBhZGRpbmcgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWVcbiAgICAvLyB0aGUgdXNlciBpcyBub3QgYWJsZSB0byBjbGljayBpbiB0aGUgdmlkZW9cbiAgICBpZiAodGhpcy5fdmlkZW9FbCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5faWZyYW1lLmNvbnRlbnREb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciB2aWRlb0VsID0gdGhpcy5fdmlkZW9FbDtcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2aWRlb0VsLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGNsaWNrVGhydUhvb2sodXJsLCBpZCwgcGxheWVySGFuZGxlcykge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXJTeW5jKEFEX0NMSUNLLCB7dXJsOiB1cmwsIGlkOiBpZCwgcGxheWVySGFuZGxlczogcGxheWVySGFuZGxlc30pO1xufVxuXG5mdW5jdGlvbiAkdHJpZ2dlcihldmVudCkge1xuICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyKGV2ZW50LCBBcnJheS5wcm90b3R5cGUuc2xpY2UoYXJndW1lbnRzLCAxKSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICBzdWJzY3JpYmVycy50cmlnZ2VyKEVSUk9SLCBlcnJvcik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciB1bmlxdWUgPSB1dGlscy51bmlxdWUoJ3ZwYWlkSWZyYW1lJyk7XG52YXIgVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0Jyk7XG5cbnZhciBkZWZhdWx0VGVtcGxhdGUgPSAnPCFET0NUWVBFIGh0bWw+JyArXG4gICAgJzxodG1sIGxhbmc9XCJlblwiPicgK1xuICAgICc8aGVhZD48bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L2hlYWQ+JyArXG4gICAgJzxib2R5IHN0eWxlPVwibWFyZ2luOjA7cGFkZGluZzowXCI+PGRpdiBjbGFzcz1cImFkLWVsZW1lbnRcIj48L2Rpdj4nICtcbiAgICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwie3tpZnJhbWVVUkxfSlN9fVwiPjwvc2NyaXB0PicgK1xuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj4nICtcbiAgICAnd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShcXCd7XCJldmVudFwiOiBcInJlYWR5XCIsIFwiaWRcIjogXCJ7e2lmcmFtZUlEfX1cIn1cXCcsIFxcJ3t7b3JpZ2lufX1cXCcpOycgK1xuICAgICc8L3NjcmlwdD4nICtcbiAgICAnPC9ib2R5PicgK1xuICAgICc8L2h0bWw+JztcblxudmFyIEFEX1NUT1BQRUQgPSAnQWRTdG9wcGVkJztcblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cbi8qKlxuICogVlBBSURIVE1MNUNsaWVudFxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGlmcmFtZSB0byBsb2FkIGFkVW5pdCBhbmQgYSBlbCB0byBhZGQgdG8gYWRVbml0IHNsb3RcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW8gZGVmYXVsdCB2aWRlbyBlbGVtZW50IHRvIGJlIHVzZWQgYnkgYWRVbml0XG4gKiBAcGFyYW0ge29iamVjdH0gW3RlbXBsYXRlQ29uZmlnXSB0ZW1wbGF0ZTogaHRtbCB0ZW1wbGF0ZSB0byBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIGV4dHJhT3B0aW9uczogdG8gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdnBhaWRPcHRpb25zXSB0aW1lb3V0OiB3aGVuIGxvYWRpbmcgYWRVbml0XG4gKi9cbmZ1bmN0aW9uIFZQQUlESFRNTDVDbGllbnQoZWwsIHZpZGVvLCB0ZW1wbGF0ZUNvbmZpZywgdnBhaWRPcHRpb25zKSB7XG4gICAgdGVtcGxhdGVDb25maWcgPSB0ZW1wbGF0ZUNvbmZpZyB8fCB7fTtcblxuICAgIHRoaXMuX2lkID0gdW5pcXVlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9mcmFtZUNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZUVsZW1lbnRJbkVsKGVsLCAnZGl2Jyk7XG4gICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgIHRoaXMuX3ZwYWlkT3B0aW9ucyA9IHZwYWlkT3B0aW9ucyB8fCB7dGltZW91dDogMTAwMDB9O1xuXG4gICAgdGhpcy5fdGVtcGxhdGVDb25maWcgPSB7XG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGUsXG4gICAgICAgIGV4dHJhT3B0aW9uczogdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zIHx8IHt9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBkZXN0cm95XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogaXNEZXN0cm95ZWRcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5pc0Rlc3Ryb3llZCA9IGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG59O1xuXG4vKipcbiAqIGxvYWRBZFVuaXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWRVUkwgdXJsIG9mIHRoZSBqcyBvZiB0aGUgYWRVbml0XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEFkVW5pdChhZFVSTCwgY2FsbGJhY2spIHtcbiAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBmcmFtZSA9IHV0aWxzLmNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KFxuICAgICAgICB0aGlzLl9mcmFtZUNvbnRhaW5lcixcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVDb25maWcudGVtcGxhdGUsXG4gICAgICAgIHV0aWxzLmV4dGVuZCh7XG4gICAgICAgICAgICBpZnJhbWVVUkxfSlM6IGFkVVJMLFxuICAgICAgICAgICAgaWZyYW1lSUQ6IHRoaXMuZ2V0SUQoKSxcbiAgICAgICAgICAgIG9yaWdpbjogZ2V0T3JpZ2luKClcbiAgICAgICAgfSwgdGhpcy5fdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zKVxuICAgICk7XG5cbiAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgdGhpcy5fb25Mb2FkID0gdXRpbHMuY2FsbGJhY2tUaW1lb3V0KFxuICAgICAgICB0aGlzLl92cGFpZE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgb25Mb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG9uVGltZW91dC5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcblxuICAgIGZ1bmN0aW9uIG9uTG9hZCAoZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IGZhbHNlICovXG4gICAgICAgIC8vZG9uJ3QgY2xlYXIgdGltZW91dFxuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IGdldE9yaWdpbigpKSByZXR1cm47XG4gICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG5cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChyZXN1bHQuaWQgIT09IHRoYXQuZ2V0SUQoKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhZFVuaXQsIGVycm9yLCBjcmVhdGVBZDtcbiAgICAgICAgaWYgKCF0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93KSB7XG5cbiAgICAgICAgICAgIGVycm9yID0gJ3RoZSBpZnJhbWUgaXMgbm90IGFueW1vcmUgaW4gdGhlIERPTSB0cmVlJztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlQWQgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmdldFZQQUlEQWQ7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHR5cGVvZiBjcmVhdGVBZCA9PT0gJ2Z1bmN0aW9uJywgJ3RoZSBhZCBkaWRuXFwndCByZXR1cm4gYSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBhZEVsID0gdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWQtZWxlbWVudCcpO1xuICAgICAgICAgICAgYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KGNyZWF0ZUFkKCksIGFkRWwsIHRoYXQuX3ZpZGVvRWwsIHRoYXQuX2ZyYW1lKTtcbiAgICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoQURfU1RPUFBFRCwgJGFkRGVzdHJveWVkLmJpbmQodGhhdCkpO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShhZFVuaXQuaXNWYWxpZFZQQUlEQWQoKSwgJ3RoZSBhZGQgaXMgbm90IGZ1bGx5IGNvbXBsYWludCB3aXRoIFZQQUlEIHNwZWNpZmljYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQuX2FkVW5pdCA9IGFkVW5pdDtcbiAgICAgICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGF0KTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIGVycm9yID8gbnVsbCA6IGFkVW5pdCk7XG5cbiAgICAgICAgLy9jbGVhciB0aW1lb3V0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgICAgY2FsbGJhY2soJ3RpbWVvdXQnLCBudWxsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIHVubG9hZEFkVW5pdFxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBnZXRJRCB3aWxsIHJldHVybiB0aGUgdW5pcXVlIGlkXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG59O1xuXG5cbi8qKlxuICogJHJlbW92ZUVsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5mdW5jdGlvbiAkcmVtb3ZlRWwoa2V5KSB7XG4gICAgdmFyIGVsID0gdGhpc1trZXldO1xuICAgIGlmIChlbCkge1xuICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRhZERlc3Ryb3llZCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG59XG5cbmZ1bmN0aW9uICR1bmxvYWRQcmV2aW91c0FkVW5pdCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgICRkZXN0cm95QWRVbml0LmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uICRyZW1vdmVBZEVsZW1lbnRzKCkge1xuICAgICRyZW1vdmVFbC5jYWxsKHRoaXMsICdfZnJhbWUnKTtcbiAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoaXMpO1xufVxuXG4vKipcbiAqICRkZXN0cm95TG9hZExpc3RlbmVyXG4gKlxuICovXG5mdW5jdGlvbiAkZGVzdHJveUxvYWRMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5fb25Mb2FkKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcbiAgICAgICAgdXRpbHMuY2xlYXJDYWxsYmFja1RpbWVvdXQodGhpcy5fb25Mb2FkKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29uTG9hZDtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gJGRlc3Ryb3lBZFVuaXQoKSB7XG4gICAgaWYgKHRoaXMuX2FkVW5pdCkge1xuICAgICAgICB0aGlzLl9hZFVuaXQuc3RvcEFkKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG4gICAgfVxufVxuXG4vKipcbiAqICR0aHJvd0lmRGVzdHJveWVkXG4gKlxuICovXG5mdW5jdGlvbiAkdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciAoJ1ZQQUlESFRNTDVDbGllbnQgYWxyZWFkeSBkZXN0cm95ZWQhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRPcmlnaW4oKSB7XG4gICAgaWYoIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgK1xuICAgICAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNUNsaWVudDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTdWJzY3JpYmVyKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge307XG59XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUsIGNvbnRleHQpIHtcbiAgICBpZiAoIXRoaXMuaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSkge1xuICAgICAgICB0aGlzLmdldChldmVudE5hbWUpLnB1c2goe2hhbmRsZXI6IGhhbmRsZXIsIGNvbnRleHQ6IGNvbnRleHQsIGV2ZW50TmFtZTogZXZlbnROYW1lfSk7XG4gICAgfVxufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gdGhpcy5nZXQoZXZlbnROYW1lKS5maWx0ZXIoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgIT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmlzSGFuZGxlckF0dGFjaGVkKHN1YnNjcmliZXIuaGFuZGxlciwgc3Vic2NyaWJlci5ldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS50cmlnZ2VyU3luYyA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBzdWJzY3JpYmVycyA9IHRoaXMuZ2V0KGV2ZW50TmFtZSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLmdldCgnKicpKTtcblxuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChldmVudE5hbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmlzSGFuZGxlckF0dGFjaGVkID0gZnVuY3Rpb24gaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGV2ZW50TmFtZSkuc29tZShmdW5jdGlvbihzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyID09PSBzdWJzY3JpYmVyLmhhbmRsZXI7XG4gICAgfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3Vic2NyaWJlcjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIG5vb3AgYSBlbXB0eSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiB2YWxpZGF0ZSBpZiBpcyBub3QgdmFsaWRhdGUgd2lsbCByZXR1cm4gYW4gRXJyb3Igd2l0aCB0aGUgbWVzc2FnZVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGUoaXNWYWxpZCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxudmFyIHRpbWVvdXRzID0ge307XG4vKipcbiAqIGNsZWFyQ2FsbGJhY2tUaW1lb3V0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBoYW5kbGVyIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiBjbGVhckNhbGxiYWNrVGltZW91dChmdW5jKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aW1lb3V0c1tmdW5jXTtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0c1tmdW5jXTtcbiAgICB9XG59XG5cbi8qKlxuICogY2FsbGJhY2tUaW1lb3V0IGlmIHRoZSBvblN1Y2Nlc3MgaXMgbm90IGNhbGxlZCBhbmQgcmV0dXJucyB0cnVlIGluIHRoZSB0aW1lbGltaXQgdGhlbiBvblRpbWVvdXQgd2lsbCBiZSBjYWxsZWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uU3VjY2Vzc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gb25UaW1lb3V0XG4gKi9cbmZ1bmN0aW9uIGNhbGxiYWNrVGltZW91dCh0aW1lciwgb25TdWNjZXNzLCBvblRpbWVvdXQpIHtcbiAgICB2YXIgY2FsbGJhY2ssIHRpbWVvdXQ7XG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uU3VjY2VzcyA9IG5vb3A7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0W2NhbGxiYWNrXTtcbiAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgfSwgdGltZXIpO1xuXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIGlmIChvblN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgY2xlYXJDYWxsYmFja1RpbWVvdXQoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRpbWVvdXRzW2NhbGxiYWNrXSA9IHRpbWVvdXQ7XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG59XG5cblxuLyoqXG4gKiBjcmVhdGVFbGVtZW50SW5FbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50SW5FbChwYXJlbnQsIHRhZ05hbWUsIGlkKSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgaWYgKGlkKSBuRWwuaWQgPSBpZDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgc2ltcGxlIHRlbXBsYXRlIHVzaW5nIHt7dmFyfX1cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KHBhcmVudCwgdGVtcGxhdGUsIGRhdGEpIHtcbiAgICB2YXIgaWZyYW1lID0gY3JlYXRlSWZyYW1lKHBhcmVudCwgbnVsbCwgZGF0YS56SW5kZXgpO1xuICAgIGlmICghc2V0SWZyYW1lQ29udGVudChpZnJhbWUsIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSkpIHJldHVybjtcbiAgICByZXR1cm4gaWZyYW1lO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5mdW5jdGlvbiBjcmVhdGVJZnJhbWUocGFyZW50LCB1cmwsIHpJbmRleCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBuRWwuc3JjID0gdXJsIHx8ICdhYm91dDpibGFuayc7XG4gICAgbkVsLm1hcmdpbldpZHRoID0gJzAnO1xuICAgIG5FbC5tYXJnaW5IZWlnaHQgPSAnMCc7XG4gICAgbkVsLmZyYW1lQm9yZGVyID0gJzAnO1xuICAgIG5FbC53aWR0aCA9ICcxMDAlJztcbiAgICBuRWwuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHNldEZ1bGxTaXplU3R5bGUobkVsKTtcblxuICAgIGlmKHpJbmRleCl7XG4gICAgICAgIG5FbC5zdHlsZS56SW5kZXggPSB6SW5kZXg7XG4gICAgfVxuXG4gICAgbkVsLnNldEF0dHJpYnV0ZSgnU0NST0xMSU5HJywnTk8nKTtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuZnVuY3Rpb24gc2V0RnVsbFNpemVTdHlsZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbn1cblxuLyoqXG4gKiBzaW1wbGVUZW1wbGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpIHtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKSA6IGRhdGFba2V5XTtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ3t7JyArIGtleSArICd9fScsICdnJyksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogc2V0SWZyYW1lQ29udGVudFxuICpcbiAqIEBwYXJhbSB7SFRNTElmcmFtZUVsZW1lbnR9IGlmcmFtZUVsXG4gKiBAcGFyYW0gY29udGVudFxuICovXG5mdW5jdGlvbiBzZXRJZnJhbWVDb250ZW50KGlmcmFtZUVsLCBjb250ZW50KSB7XG4gICAgdmFyIGlmcmFtZURvYyA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cgJiYgaWZyYW1lRWwuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICBpZiAoIWlmcmFtZURvYykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWZyYW1lRG9jLndyaXRlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuLyoqXG4gKiBleHRlbmQgb2JqZWN0IHdpdGgga2V5cyBmcm9tIGFub3RoZXIgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRvRXh0ZW5kXG4gKiBAcGFyYW0ge29iamVjdH0gZnJvbVNvdXJjZVxuICovXG5mdW5jdGlvbiBleHRlbmQodG9FeHRlbmQsIGZyb21Tb3VyY2UpIHtcbiAgICBPYmplY3Qua2V5cyhmcm9tU291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB0b0V4dGVuZFtrZXldID0gZnJvbVNvdXJjZVtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiB0b0V4dGVuZDtcbn1cblxuXG4vKipcbiAqIHVuaXF1ZSB3aWxsIGNyZWF0ZSBhIHVuaXF1ZSBzdHJpbmcgZXZlcnl0aW1lIGlzIGNhbGxlZCwgc2VxdWVudGlhbGx5IGFuZCBwcmVmaXhlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gdW5pcXVlKHByZWZpeCkge1xuICAgIHZhciBjb3VudCA9IC0xO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnXycgKyAoKytjb3VudCk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbm9vcDogbm9vcCxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGUsXG4gICAgY2xlYXJDYWxsYmFja1RpbWVvdXQ6IGNsZWFyQ2FsbGJhY2tUaW1lb3V0LFxuICAgIGNhbGxiYWNrVGltZW91dDogY2FsbGJhY2tUaW1lb3V0LFxuICAgIGNyZWF0ZUVsZW1lbnRJbkVsOiBjcmVhdGVFbGVtZW50SW5FbCxcbiAgICBjcmVhdGVJZnJhbWVXaXRoQ29udGVudDogY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQsXG4gICAgY3JlYXRlSWZyYW1lOiBjcmVhdGVJZnJhbWUsXG4gICAgc2V0RnVsbFNpemVTdHlsZTogc2V0RnVsbFNpemVTdHlsZSxcbiAgICBzaW1wbGVUZW1wbGF0ZTogc2ltcGxlVGVtcGxhdGUsXG4gICAgc2V0SWZyYW1lQ29udGVudDogc2V0SWZyYW1lQ29udGVudCxcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICB1bmlxdWU6IHVuaXF1ZVxufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIElubmVyIGhlbHBlciBjbGFzcyB0aGF0IGRlYWxzIHdpdGggdGhlIGxvZ2ljIG9mIHRoZSBpY29uIHJlbmRlcnJpbmcuXG4gKlxuICogQHBhcmFtIHBsYXllciB7b2JqZWN0fSBpbnN0YW5jZSBvZiB0aGUgcGxheWVyIHRoYXQgd2lsbCBwbGF5IHRoZSBhZC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBJY29uSW50ZWdyYXRvcihwbGF5ZXIpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEljb25JbnRlZ3JhdG9yKSkge1xuICAgIHJldHVybiBuZXcgSWNvbkludGVncmF0b3IocGxheWVyKTtcbiAgfVxuXG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB0aGlzLmljb25zID0gW107XG4gIHRoaXMuY29udHJvbEJhclRpbWVyID0gbnVsbDtcbiAgdGhpcy5jYkhpZGRlbjtcbn1cblxuSWNvbkludGVncmF0b3IucHJvdG90eXBlLnJlbmRlckljb25zID0gZnVuY3Rpb24gcmVuZGVySWNvbnMoaWNvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoaWNvbnMpIHx8IGljb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdPbiBJY29uSW50ZWdyYXRvciwgbWlzc2luZyByZXF1aXJlZCBpY29uIGFycmF5JykpO1xuICB9XG5cbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgbmV4dChudWxsLCBpY29ucyk7XG4gICAgfSxcbiAgICB0aGlzLl9jcmVhdGVJY29ucy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fcmVuZGVySWNvbnMuYmluZCh0aGlzKVxuICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgaWYgKGVycm9yICYmIHJlc3BvbnNlKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgfVxuICAgIGNhbGxiYWNrKGVycm9yLCByZXNwb25zZSk7XG4gIH0pO1xufTtcblxuSWNvbkludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVJY29ucyA9IGZ1bmN0aW9uIGNyZWF0ZUljb25zKGljb25zLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpY29uT2JqID0ge307XG4gICAgaWNvbk9iai5pY29uID0gaWNvbnNbaV07XG4gICAgLy8gbWFrZSBzdXJlIHdlIG9ubHkgb25lIGljb24gcGVyIHByb2dyYW1cbiAgICB2YXIgaWR4ID0gZ2V0SWNvbkJ5UHJvZ3JhbShpY29uT2JqLmljb24ucHJvZ3JhbSk7XG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICB0aGlzLmljb25zLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbiAgICBpY29uT2JqLmNvbnRlbnQgPSBnZXRDb250ZW50KGljb25PYmouaWNvbik7XG4gICAgaWYgKGljb25PYmouY29udGVudCkge1xuICAgICAgdGhpcy5pY29ucy5wdXNoKGljb25PYmopO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLmljb25zLmxlbmd0aCA+IDApIHtcbiAgICBjYWxsYmFjayhudWxsKTtcbiAgfVxuICBlbHNlIHtcbiAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBBZEljb24gY29udGVudFwiLCA5MDApKTtcbiAgfVxuICByZXR1cm47XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBnZXRDb250ZW50KGljb24pIHtcbiAgICB2YXIgY29udGVudCA9IG51bGw7XG4gICAgaWYgKGljb24uc3RhdGljUmVzb3VyY2UpIHtcbiAgICAgIHZhciBpbWFnZVR5cGVzID0gW1wiaW1hZ2UvZ2lmXCIsIFwiaW1hZ2UvanBlZ1wiLCBcImltYWdlL3BuZ1wiXTtcbiAgICAgIGlmIChpbWFnZVR5cGVzLmluZGV4T2YoaWNvbi5jcmVhdGl2ZVR5cGUpKSB7XG4gICAgICAgIGNvbnRlbnQgPSBcIjxpbWcgc3JjPSdcIiArIGljb24uc3RhdGljUmVzb3VyY2UgKyBcIicgd2lkdGg9J1wiICsgaWNvbi53aWR0aCArIFwiJyBoZWlnaHQ9J1wiICsgaWNvbi5oZWlnaHQgKyBcIic+XCI7XG4gICAgICB9XG4gICAgfVxuICAgIC8qZWxzZSBpZiAoaWNvbi5odG1sUmVzb3VyY2UpIHtcbiAgICAgIC8vIHRvIGRvIC4uLlxuICAgIH1cbiAgICBlbHNlIGlmIChpY29uLmlmcmFtZVJlc291cmNlKSB7XG4gICAgICAvLyB0byBkbyAuLi5cbiAgICB9Ki9cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEljb25CeVByb2dyYW0ocHJvZ3JhbSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdC5pY29ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoYXQuaWNvbnNbaV0uaWNvbi5wcm9ncmFtID09PSBwcm9ncmFtKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cbn07XG5cbkljb25JbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiBzZXR1cEV2ZW50cyhjYWxsYmFjaykge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRTa2lwJywgJ2FkU3RvcCddLCBmdW5jdGlvbigpe1xuICAgIGlmICh0aGF0Lmljb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGF0LmNvbnRyb2xCYXJUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHRoYXQuY29udHJvbEJhclRpbWVyKTtcbiAgICAgICAgdGhhdC5jb250cm9sQmFyVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0Lmljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpY29uID0gdGhhdC5pY29uc1tpXTtcbiAgICAgICAgaWYgKGljb24uZGl2KSB7XG4gICAgICAgICAgaWYgKGljb24uY2xpY2tIYW5kbGVyKSB7XG4gICAgICAgICAgICBpY29uLmRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGljb24uY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyLmVsKCkucmVtb3ZlQ2hpbGQoaWNvbi5kaXYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGF0Lmljb25zID0gW107XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBjYWxsYmFjayhudWxsKTtcbn07XG5cbkljb25JbnRlZ3JhdG9yLnByb3RvdHlwZS5fcmVuZGVySWNvbnMgPSBmdW5jdGlvbiByZW5kZXJJY29ucygpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGljb24gPSB0aGlzLmljb25zW2ldO1xuXG4gICAgLy9wb3NpdGlvbiBieSBvZmZzZXRcbiAgICB2YXIgeFBvc2l0aW9uID0gXCJsZWZ0XCI7Ly9vciByaWdodFxuICAgIHZhciB4UG9zaXRpb25PZmZzZXQgPSAwO1xuICAgIHZhciB5UG9zaXRpb24gPSBcInRvcFwiOy8vb3IgYm90dG9tXG4gICAgdmFyIHlQb3NpdGlvbk9mZnNldCA9IDA7XG4gICAgdmFyIHRvcE1hcmdpbiA9IDA7XG4gICAgdmFyIGJvdHRvbU1hcmdpbiA9IDA7ICAgLy8gbWF5YmUgY29udHJvbCBiYXIgaGVpZ2h0XG5cbiAgICBpZiAoaWNvbiAmJiBpY29uLmljb24ueFBvc2l0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICB4UG9zaXRpb24gPSBcImxlZnRcIjtcbiAgICAgICAgeFBvc2l0aW9uT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgaWYgKGljb24gJiYgaWNvbi5pY29uLnhQb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHhQb3NpdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgeFBvc2l0aW9uT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgaWYgKGljb24gJiYgTnVtYmVyKGljb24uaWNvbi54UG9zaXRpb24pID49IDApIHtcbiAgICAgICAgeFBvc2l0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgIHhQb3NpdGlvbk9mZnNldCA9IE51bWJlcihpY29uLnhQb3NpdGlvbik7XG4gICAgfVxuICAgIGlmIChpY29uICYmIGljb24uaWNvbi55UG9zaXRpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgeVBvc2l0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgeVBvc2l0aW9uT2Zmc2V0ID0gMDtcbiAgICAgICAgeVBvc2l0aW9uT2Zmc2V0ID0geVBvc2l0aW9uT2Zmc2V0ICsgYm90dG9tTWFyZ2luO1xuICAgIH1cbiAgICBpZiAoaWNvbiAmJiBpY29uLmljb24ueVBvc2l0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICAgIHlQb3NpdGlvbiA9IFwidG9wXCI7XG4gICAgICAgIHlQb3NpdGlvbk9mZnNldCA9IDA7XG4gICAgICAgIHlQb3NpdGlvbk9mZnNldCA9IHlQb3NpdGlvbk9mZnNldCArIHRvcE1hcmdpbjtcbiAgICB9XG4gICAgaWYgKGljb24gJiYgTnVtYmVyKGljb24uaWNvbi55UG9zaXRpb24pID49IDApIHtcbiAgICAgICAgeVBvc2l0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgeVBvc2l0aW9uT2Zmc2V0ID0gTnVtYmVyKGljb24uaWNvbi55UG9zaXRpb24pO1xuICAgICAgICB5UG9zaXRpb25PZmZzZXQgPSB5UG9zaXRpb25PZmZzZXQgKyB0b3BNYXJnaW47XG4gICAgfVxuXG4gICAgdmFyIGRpc3BsYXlJY29uID0gcGxheWVyLmVsKCkub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChkaXNwbGF5SWNvbik7XG5cbiAgICBkaXNwbGF5SWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiYWRpY29uXCIpO1xuICAgIGRpc3BsYXlJY29uLmlkID0gXCJhZGljb25fXCIgKyBpY29uLmljb24ucHJvZ3JhbTtcbiAgICBkaXNwbGF5SWNvbi5pbm5lckhUTUwgPSBpY29uLmNvbnRlbnQ7XG4gICAgZGlzcGxheUljb24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZGlzcGxheUljb24uc3R5bGVbeFBvc2l0aW9uXSA9IHhQb3NpdGlvbk9mZnNldCArIFwicHhcIjtcbiAgICBkaXNwbGF5SWNvbi5zdHlsZVt5UG9zaXRpb25dID0geVBvc2l0aW9uT2Zmc2V0ICsgXCJweFwiO1xuICAgIGRpc3BsYXlJY29uLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDc7IC8vdG9wIG1vc3Qgb2YgMzJiaXRcbiAgICBkaXNwbGF5SWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaWNvbi5vcmlnWSA9IHlQb3NpdGlvbk9mZnNldDtcbiAgXG4gICAgLy9zZXQgd2lkdGgsaGVpZ2h0IG9mIGRpdiBlbGVtZW50IFxuICAgIGRpc3BsYXlJY29uLnN0eWxlLndpZHRoID0gaWNvbi53aWR0aCArIFwicHhcIjtcbiAgICBkaXNwbGF5SWNvbi5zdHlsZS5oZWlnaHQgPSBpY29uLmhlaWdodCArIFwicHhcIjtcblxuICAgIGljb24uZGl2ID0gZGlzcGxheUljb247XG5cbiAgICBpZiAoaWNvbi5pY29uLmljb25DbGlja1Rocm91Z2gpIHtcbiAgICAgIGljb24uZGl2LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgaWNvbi5jbGlja0hhbmRsZXIgPSBoYW5kbGVDbGljayhpY29uKTtcbiAgICAgIGljb24uZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaWNvbi5jbGlja0hhbmRsZXIpO1xuICAgIH1cblxuICAgIHN0YXJ0SWNvbihpY29uLCB5UG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKHRoaXMuaWNvbnMubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuY29udHJvbEJhclRpbWVyID0gc2V0SW50ZXJ2YWwoYWRqdXN0SWNvbnNCeUNvbnRyb2xCYXIsIHV0aWxpdGllcy5pc0lFMTEoKSA/IDEwMCA6IDUwMCk7XG4gIH1cblxuICAvKioqKiBsb2NhbCBmdW5jdGlvbnMgKioqKioqL1xuICBmdW5jdGlvbiBhZGp1c3RJY29uc0J5Q29udHJvbEJhcigpIHtcbiAgICB2YXIgY29tcFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhhdC5wbGF5ZXIuY29udHJvbEJhci5lbCgpLCBudWxsKTtcbiAgICB2YXIgY2JIaWRkZW5DdXIgPSBjb21wU3R5bGUuYmFja2ZhY2VWaXNpYmlsaXR5ID09PSAnaGlkZGVuJyB8fCBjb21wU3R5bGUudHJhbnNmb3JtICE9ICdub25lJztcbiAgICBpZiAoY2JIaWRkZW5DdXIgIT0gdGhhdC5jYkhpZGRlbikge1xuICAgICAgdGhhdC5jYkhpZGRlbiA9IGNiSGlkZGVuQ3VyO1xuICAgICAgdmFyIGNiSGVpZ2h0ID0gY2JIaWRkZW5DdXIgPyAwIDogdGhhdC5wbGF5ZXIuY29udHJvbEJhci5lbCgpLm9mZnNldEhlaWdodDtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhhdC5pY29ucy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWMgPSB0aGF0Lmljb25zW2tdO1xuICAgICAgICBpZiAoaWMuZGl2ICYmIGljLmRpdi5zdHlsZS5kaXNwbGF5ID09PSdibG9jaycpIHtcbiAgICAgICAgICBpZiAoY2JIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAvLyBjb250cm9sIGJhciB2aXNpYmxlXG4gICAgICAgICAgICBpZiAoZWxlbWVudHNJbnRlcnNlY3RlZChpYy5kaXYsIHRoYXQucGxheWVyLmNvbnRyb2xCYXIuZWwoKSkpIHtcbiAgICAgICAgICAgICAgaWYgKGljLmRpdi5zdHlsZS50b3AgJiYgaWMuZGl2LnN0eWxlLnRvcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHlQb3MgPSBpYy5vcmlnWSAtIGNiSGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmICh5UG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgeVBvcyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGljLmRpdi5zdHlsZS50b3AgPSB5UG9zICsgJ3B4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpYy5kaXYuc3R5bGUuYm90dG9tID0gKGljLm9yaWdZICsgY2JIZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhZGp1c3RJY29uc1Bvc2l0aW9uKGljLCBjYkhlaWdodCwgdGhhdCwgMSk7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGljLmRpdi5zdHlsZS50b3AgJiYgaWMuZGl2LnN0eWxlLnRvcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGljLmRpdi5zdHlsZS50b3AgPSBpYy5vcmlnWSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgaWMuZGl2LnN0eWxlLmJvdHRvbSA9IChpYy5vcmlnWSArIGNiSGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0SWNvbnNQb3NpdGlvbihpYywgY2JIZWlnaHQsIHRoYXQsIGxldmVsKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0Lmljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWNvbiA9IHRoYXQuaWNvbnNbaV07XG4gICAgICBpZiAoaWNvbi5kaXYuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyAmJiBpY29uLmRpdiAhPSBpYy5kaXYpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzSW50ZXJzZWN0ZWQoaWMuZGl2LCBpY29uLmRpdikpIHtcbiAgICAgICAgICBpZiAoaWNvbi5kaXYuc3R5bGUudG9wICYmIGljb24uZGl2LnN0eWxlLnRvcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgeVBvcyA9IGljb24ub3JpZ1kgLSBjYkhlaWdodDtcbiAgICAgICAgICAgIGlmICh5UG9zIDwgMCkge1xuICAgICAgICAgICAgICB5UG9zID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGljb24uZGl2LnN0eWxlLnRvcCA9IHlQb3MgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGljb24uZGl2LnN0eWxlLmJvdHRvbSA9IChpY29uLm9yaWdZICsgY2JIZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcHJvdGVjdGlvbiBhZ2FpbnN0IGluZmluaXRlIHJlY3Vyc2l2ZVxuICAgICAgICAgIGxldmVsKys7XG4gICAgICAgICAgaWYgKGxldmVsIDwgNSkge1xuICAgICAgICAgICAgYWRqdXN0SWNvbnNQb3NpdGlvbihpY29uLCBjYkhlaWdodCwgdGhhdCwgbGV2ZWwpOyAgICBcbiAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVsZW1lbnRzSW50ZXJzZWN0ZWQoZGl2MSwgZGl2Mikge1xuICAgIHZhciBjb2xsaWRlID0gZnVuY3Rpb24oZWwxLCBlbDIpIHtcbiAgICAgIHZhciByZWN0MSA9IGVsMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciByZWN0MiA9IGVsMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgXG4gICAgICByZXR1cm4gIShcbiAgICAgICAgcmVjdDEudG9wID4gcmVjdDIuYm90dG9tIHx8XG4gICAgICAgIHJlY3QxLnJpZ2h0IDwgcmVjdDIubGVmdCB8fFxuICAgICAgICByZWN0MS5ib3R0b20gPCByZWN0Mi50b3AgfHxcbiAgICAgICAgcmVjdDEubGVmdCA+IHJlY3QyLnJpZ2h0XG4gICAgICApO1xuICAgIH07XG4gICAgdmFyIGluc2lkZSA9IGZ1bmN0aW9uKGVsMSwgZWwyKSB7XG4gICAgICB2YXIgcmVjdDEgPSBlbDEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgcmVjdDIgPSBlbDIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKChyZWN0Mi50b3AgPD0gcmVjdDEudG9wKSAmJiAocmVjdDEudG9wIDw9IHJlY3QyLmJvdHRvbSkpICYmXG4gICAgICAgICgocmVjdDIudG9wIDw9IHJlY3QxLmJvdHRvbSkgJiYgKHJlY3QxLmJvdHRvbSA8PSByZWN0Mi5ib3R0b20pKSAmJlxuICAgICAgICAoKHJlY3QyLmxlZnQgPD0gcmVjdDEubGVmdCkgJiYgKHJlY3QxLmxlZnQgPD0gcmVjdDIucmlnaHQpKSAmJlxuICAgICAgICAoKHJlY3QyLmxlZnQgPD0gcmVjdDEucmlnaHQpICYmIChyZWN0MS5yaWdodCA8PSByZWN0Mi5yaWdodCkpXG4gICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIGNvbGxpZGUoZGl2MSwgZGl2MikgfHwgaW5zaWRlKGRpdjEsIGRpdjIpIHx8IGluc2lkZShkaXYyLCBkaXYxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrVXJscyh1cmxzKSB7XG4gICAgdXJscy5mb3JFYWNoKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhpY29uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdHJhY2tVcmxzKGljb24uaWNvbi5pY29uQ2xpY2tUcmFja2luZ3MpO1xuICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICB3aW5kb3cub3BlbihpY29uLmljb24uaWNvbkNsaWNrVGhyb3VnaCwgJ19ibGFuaycpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEljb24oaWNvbiwgeVBvc2l0aW9uKSB7XG4gICAgdmFyIG9mZnNldCA9IGljb24uaWNvbi5vZmZzZXQgJiYgaWNvbi5pY29uLm9mZnNldCA+IDAgPyBpY29uLmljb24ub2Zmc2V0IDogMDtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWNvbi5kaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0cmFja1VybHMoaWNvbi5pY29uLmljb25WaWV3VHJhY2tpbmdzKTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGF0Lmljb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGF0Lmljb25zW2pdLmRpdiAmJiB0aGF0Lmljb25zW2pdLmRpdiAhPSBpY29uLmRpdikge1xuICAgICAgICAgIGlmIChlbGVtZW50c0ludGVyc2VjdGVkKHRoYXQuaWNvbnNbal0uZGl2LCBpY29uLmRpdikpIHtcbiAgICAgICAgICAgIHZhciByZWN0MSA9IHRoYXQuaWNvbnNbal0uZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKHlQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgaWNvbi5kaXYuc3R5bGUudG9wID0gKHRoYXQuaWNvbnNbal0uZGl2Lm9mZnNldFRvcCArIHRoYXQuaWNvbnNbal0uZGl2Lm9mZnNldEhlaWdodCArIDEpICsgJ3B4JztcbiAgICAgICAgICAgICAgaWNvbi5vcmlnWSA9IHRoYXQuaWNvbnNbal0uZGl2Lm9mZnNldFRvcCArIHRoYXQuaWNvbnNbal0uZGl2Lm9mZnNldEhlaWdodCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIHJlY3QyID0gdGhhdC5wbGF5ZXIuZWwoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgaWNvbi5kaXYuc3R5bGUuYm90dG9tID0gKHJlY3QyLmhlaWdodCArIHJlY3QyLnRvcCAtIHJlY3QxLnRvcCArIDEpICsgJ3B4JztcbiAgICAgICAgICAgICAgaWNvbi5vcmlnWSA9IHJlY3QyLmhlaWdodCArIHJlY3QyLnRvcCAtIHJlY3QxLnRvcCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaWYgKGljb24uaWNvbi5kdXJhdGlvbiAmJiBpY29uLmljb24uZHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGljb24uaWNvbi5kdXJhdGlvbjtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaWR4ID0gdGhhdC5pY29ucy5pbmRleE9mKGljb24pO1xuICAgICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgaWYgKGljb24uY2xpY2tIYW5kbGVyKSB7XG4gICAgICAgICAgICAgIGljb24uZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaWNvbi5jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyLmVsKCkucmVtb3ZlQ2hpbGQoaWNvbi5kaXYpO1xuICAgICAgICAgICAgdGhhdC5pY29ucy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LCBvZmZzZXQpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEljb25JbnRlZ3JhdG9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XG52YXIgV3JhcHBlciA9IHJlcXVpcmUoJy4vV3JhcHBlcicpO1xuXG5mdW5jdGlvbiBBZChhZEpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBBZCkpIHtcbiAgICByZXR1cm4gbmV3IEFkKGFkSlRyZWUpO1xuICB9XG4gIHRoaXMuaW5pdGlhbGl6ZShhZEpUcmVlKTtcbn1cblxuQWQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihhZEpUcmVlKSB7XG4gIHRoaXMuaWQgPSBhZEpUcmVlLmF0dHIoJ2lkJyk7XG4gIHRoaXMuc2VxdWVuY2UgPSBhZEpUcmVlLmF0dHIoJ3NlcXVlbmNlJyk7XG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgdGhpcy5jb25kaXRpb25hbEFkID0gYWRKVHJlZS5hdHRyKCdjb25kaXRpb25hbEFkJyk7XG4gIH1cblxuICBpZihhZEpUcmVlLmluTGluZSkge1xuICAgIHRoaXMuaW5MaW5lID0gbmV3IEluTGluZShhZEpUcmVlLmluTGluZSk7XG4gIH1cblxuICBpZihhZEpUcmVlLndyYXBwZXIpe1xuICAgIHRoaXMud3JhcHBlciA9IG5ldyBXcmFwcGVyKGFkSlRyZWUud3JhcHBlcik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBDYXRlZ29yeShjYXRlZ29yeUpUcmVlKSB7XG5cdCAgaWYoISh0aGlzIGluc3RhbmNlb2YgQ2F0ZWdvcnkpKSB7XG5cdCAgICByZXR1cm4gbmV3IENhdGVnb3J5KGNhdGVnb3J5SlRyZWUpO1xuXHQgIH1cblxuXHQgIHRoaXMuYXV0aG9yaXR5ID0gY2F0ZWdvcnlKVHJlZS5hdHRyKCdhdXRob3JpdHknKTtcblx0ICB0aGlzLmNhdGVnb3J5ID0geG1sLmtleVZhbHVlKGNhdGVnb3J5SlRyZWUpO1xufVxuXG5DYXRlZ29yeS5wYXJzZUNhdGVnb3JpZXMgPSBmdW5jdGlvbiBwYXJzZUNhdGVnb3RpZXMoY2F0ZWdvcmllc0pUcmVlKSB7XG5cdCAgdmFyIGNhdGVnb3JpZXMgPSBbXTtcblx0ICB2YXIgY2F0ZWdvcmllc0RhdGE7XG5cdCAgaWYgKGNhdGVnb3JpZXMpIHtcblx0XHQgIGNhdGVnb3JpZXNEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkoY2F0ZWdvcmllc0pUcmVlKSA/IGNhdGVnb3JpZXNKVHJlZSA6IFtjYXRlZ29yaWVzSlRyZWVdO1xuXHRcdCAgY2F0ZWdvcmllc0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcblx0XHRcdCAgdmFyIGNhdCA9IG5ldyBDYXRlZ29yeShjYXRlZ29yeSk7XG5cdFx0XHQgIGlmIChjYXQuY2F0ZWdvcnkgJiYgY2F0LmNhdGVnb3J5Lmxlbmd0aCA+IDAgJiYgY2F0LmF1dGhvcml0eSAmJiBjYXQuYXV0aG9yaXR5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ICBjYXRlZ29yaWVzLnB1c2gobmV3IENhdGVnb3J5KGNhdGVnb3J5KSk7XG5cdFx0XHQgIH1cblx0XHQgIH0pO1xuXHQgIH1cblx0ICByZXR1cm4gY2F0ZWdvcmllcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2F0ZWdvcnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBUcmFja2luZ0V2ZW50ID0gcmVxdWlyZSgnLi9UcmFja2luZ0V2ZW50Jyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cblxuZnVuY3Rpb24gQ29tcGFuaW9uKGNvbXBhbmlvbkpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYW5pb24pKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYW5pb24oY29tcGFuaW9uSlRyZWUpO1xuICB9XG5cbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gZm91bmQgY29tcGFuaW9uIGFkXCIpO1xuICBsb2dnZXIuZGVidWcgKFwiPENvbXBhbmlvbj4gIGNvbXBhbmlvbkpUcmVlOlwiLCBjb21wYW5pb25KVHJlZSk7XG5cbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xuICB0aGlzLmNyZWF0aXZlVHlwZSA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLnN0YXRpY1Jlc291cmNlLCAnY3JlYXRpdmVUeXBlJyk7XG4gIHRoaXMuc3RhdGljUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuc3RhdGljUmVzb3VyY2UpO1xuXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBjcmVhdGl2ZVR5cGU6IFwiICsgdGhpcy5jcmVhdGl2ZVR5cGUpO1xuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiAgc3RhdGljUmVzb3VyY2U6IFwiICsgdGhpcy5zdGF0aWNSZXNvdXJjZSk7XG5cbiAgLy8gV2VpcmQgYnVnIHdoZW4gdGhlIEpYT04gdHJlZSBpcyBidWlsdCBpdCBkb2Vzbid0IGhhbmRsZSBjYXNpbmcgcHJvcGVybHkgaW4gdGhpcyBzaXR1YXRpb24uLi5cbiAgdmFyIGh0bWxSZXNvdXJjZSA9IG51bGw7XG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSFRNTFJlc291cmNlKSkge1xuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5IVE1MUmVzb3VyY2UpO1xuICB9IGVsc2UgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5oVE1MUmVzb3VyY2UpKSB7XG4gICAgaHRtbFJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmhUTUxSZXNvdXJjZSk7XG4gIH1cblxuICBpZiAoaHRtbFJlc291cmNlICE9PSBudWxsKVxuICB7XG4gICAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gZm91bmQgaHRtbCByZXNvdXJjZVwiLCBodG1sUmVzb3VyY2UpO1xuICB9XG5cbiAgdGhpcy5odG1sUmVzb3VyY2UgPSBodG1sUmVzb3VyY2U7XG5cbiAgdmFyIGlmcmFtZVJlc291cmNlID0gbnVsbDtcbiAgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5JRnJhbWVSZXNvdXJjZSkpIHtcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5JRnJhbWVSZXNvdXJjZSk7XG4gIH0gZWxzZSBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmlGcmFtZXJlc291cmNlKSkge1xuICAgIGlmcmFtZVJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmlGcmFtZXJlc291cmNlKTtcbiAgfVxuXG4gIGlmIChpZnJhbWVSZXNvdXJjZSAhPT0gbnVsbClcbiAge1xuICAgIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGlmcmFtZSByZXNvdXJjZVwiLCBpZnJhbWVSZXNvdXJjZSk7XG4gIH1cblxuICB0aGlzLmlmcmFtZVJlc291cmNlID0gaWZyYW1lUmVzb3VyY2U7XG5cbiAgLy9PcHRpb25hbCBmaWVsZHNcbiAgdGhpcy5pZCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnaWQnKTtcbiAgdGhpcy53aWR0aCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnd2lkdGgnKTtcbiAgdGhpcy5oZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2hlaWdodCcpO1xuICB0aGlzLmFzc2V0V2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2Fzc2V0V2lkdGgnKTtcbiAgdGhpcy5hc3NldEhlaWdodCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnYXNzZXRIZWlnaHQnKTtcbiAgdGhpcy5leHBhbmRlZFdpZHRoID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdleHBhbmRlZFdpZHRoJyk7XG4gIHRoaXMuZXhwYW5kZWRIZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2V4cGFuZGVkSGVpZ2h0Jyk7XG4gIHRoaXMuYXBpRnJhbWV3b3JrID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdhcGlGcmFtZXdvcmsnKTtcbiAgdGhpcy5hZFNsb3RJRCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnYWRTbG90SUQnKTtcbiAgdGhpcy5jb21wYW5pb25DbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuY29tcGFuaW9uQ2xpY2tUaHJvdWdoKTtcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHBhcnNlVHJhY2tpbmdFdmVudHMoY29tcGFuaW9uSlRyZWUudHJhY2tpbmdFdmVudHMgJiYgY29tcGFuaW9uSlRyZWUudHJhY2tpbmdFdmVudHMudHJhY2tpbmcpO1xuICBcbiAgaWYgKHdpbmRvdy5tb2xfdmFzdFZlcnNpb24gPT09IDQpIHtcblx0ICB0aGlzLnB4cmF0aW8gPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3B4cmF0aW8nKTtcbiAgfVxuXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBjb21wYW5pb25DbGlja1Rocm91Z2g6IFwiICsgdGhpcy5jb21wYW5pb25DbGlja1Rocm91Z2gpO1xuXG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5nRXZlbnRzKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdmFyIHRyYWNraW5ncyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYWNraW5nRXZlbnRzKSkge1xuICAgICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0RhdGEpIHtcbiAgICAgICAgdHJhY2tpbmdzLnB1c2gobmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdEYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNraW5ncztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBhbmlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMaW5lYXIgPSByZXF1aXJlKCcuL0xpbmVhcicpO1xudmFyIENvbXBhbmlvbiA9IHJlcXVpcmUoJy4vQ29tcGFuaW9uJyk7XG52YXIgVW5pdmVyc2FsQWRJZCA9IHJlcXVpcmUoJy4vVW5pdmVyc2FsQWRJZCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gQ3JlYXRpdmUoY3JlYXRpdmVKVHJlZSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBDcmVhdGl2ZSkpIHtcbiAgICByZXR1cm4gbmV3IENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpO1xuICB9XG5cbiAgdGhpcy5pZCA9IGNyZWF0aXZlSlRyZWUuYXR0cignaWQnKTtcbiAgdGhpcy5zZXF1ZW5jZSA9IGNyZWF0aXZlSlRyZWUuYXR0cignc2VxdWVuY2UnKTtcbiAgdGhpcy5hZElkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhZElkJyk7XG4gIHRoaXMuYXBpRnJhbWV3b3JrID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhcGlGcmFtZXdvcmsnKTtcblxuICBpZihjcmVhdGl2ZUpUcmVlLmxpbmVhcikge1xuICAgIHRoaXMubGluZWFyID0gbmV3IExpbmVhcihjcmVhdGl2ZUpUcmVlLmxpbmVhcik7XG4gIH1cblxuICBpZiAoY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMpIHtcbiAgICB2YXIgY29tcGFuaW9ucyA9IFtdO1xuICAgIHZhciBjb21wYW5pb25BZHMgPSBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcyAmJiBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcy5jb21wYW5pb247XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoY29tcGFuaW9uQWRzKSkge1xuICAgICAgY29tcGFuaW9uQWRzID0gdXRpbGl0aWVzLmlzQXJyYXkoY29tcGFuaW9uQWRzKSA/IGNvbXBhbmlvbkFkcyA6IFtjb21wYW5pb25BZHNdO1xuICAgICAgY29tcGFuaW9uQWRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBhbmlvbkRhdGEpIHtcbiAgICAgICAgY29tcGFuaW9ucy5wdXNoKG5ldyBDb21wYW5pb24oY29tcGFuaW9uRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY29tcGFuaW9uQWRzID0gY29tcGFuaW9ucztcbiAgfVxuXG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgdGhpcy51bml2ZXJzYWxBZElkID0gbmV3IFVuaXZlcnNhbEFkSWQoY3JlYXRpdmVKVHJlZS51bml2ZXJzYWxBZElkKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBhdCB0aGUgY3JlYXRpdmUuXG4gKi9cbkNyZWF0aXZlLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubGluZWFyKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZWFyLmlzU3VwcG9ydGVkKCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkNyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzID0gZnVuY3Rpb24gcGFyc2VDcmVhdGl2ZXMoY3JlYXRpdmVzSlRyZWUpIHtcbiAgdmFyIGNyZWF0aXZlcyA9IFtdO1xuICB2YXIgY3JlYXRpdmVzRGF0YTtcbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUpKSB7XG4gICAgY3JlYXRpdmVzRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlKSA/IGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlIDogW2NyZWF0aXZlc0pUcmVlLmNyZWF0aXZlXTtcbiAgICBjcmVhdGl2ZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XG4gICAgICBjcmVhdGl2ZXMucHVzaChuZXcgQ3JlYXRpdmUoY3JlYXRpdmUpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY3JlYXRpdmVzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDcmVhdGl2ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciBhdHRyaWJ1dGVzTGlzdCA9IFtcbiAgJ3Byb2dyYW0nLFxuICAnd2lkdGgnLFxuICAnaGVpZ2h0JyxcbiAgJ3hQb3NpdGlvbicsXG4gICd5UG9zaXRpb24nLFxuICAnZHVyYXRpb24nLFxuICAnb2Zmc2V0JyxcbiAgJ2FwaUZyYW1ld29yaycsXG4gICdweHJhdGlvJ1xuXTtcblxuZnVuY3Rpb24gSWNvbihpY29uSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEljb24pKSB7XG4gICAgcmV0dXJuIG5ldyBJY29uKGljb25KVHJlZSk7XG4gIH1cblxuICAvL0F0dHJpYnV0ZXNcbiAgZm9yKHZhciB4PTA7IHg8YXR0cmlidXRlc0xpc3QubGVuZ3RoOyB4KyspIHtcbiAgICB2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlc0xpc3RbeF07XG4gICAgdGhpc1thdHRyaWJ1dGVdID0gaWNvbkpUcmVlLmF0dHIoYXR0cmlidXRlKTtcbiAgfVxuICBpZiAodGhpcy5kdXJhdGlvbikge1xuICAgIHRoaXMuZHVyYXRpb24gPSBwYXJzZXJzLmR1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICB9XG4gIGlmICh0aGlzLm9mZnNldCkge1xuICAgIHRoaXMub2Zmc2V0ID0gcGFyc2Vycy5kdXJhdGlvbih0aGlzLm9mZnNldCk7XG4gIH1cblxuICAvL1JlcXVpcmVkIEVsZW1lbnRzXG4gIHRoaXMuY3JlYXRpdmVUeXBlID0geG1sLmF0dHIoaWNvbkpUcmVlLnN0YXRpY1Jlc291cmNlLCAnY3JlYXRpdmVUeXBlJyk7XG4gIHRoaXMuc3RhdGljUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoaWNvbkpUcmVlLnN0YXRpY1Jlc291cmNlKTtcblxuICB2YXIgaHRtbFJlc291cmNlID0gbnVsbDtcbiAgaWYgKHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuSFRNTFJlc291cmNlKSkge1xuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuSFRNTFJlc291cmNlKTtcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoaWNvbkpUcmVlLmhUTUxSZXNvdXJjZSkpIHtcbiAgICBodG1sUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoaWNvbkpUcmVlLmhUTUxSZXNvdXJjZSk7XG4gIH1cblxuICB0aGlzLmh0bWxSZXNvdXJjZSA9IGh0bWxSZXNvdXJjZTtcblxuICB2YXIgaWZyYW1lUmVzb3VyY2UgPSBudWxsO1xuICBpZiAoeG1sLmtleVZhbHVlKGljb25KVHJlZS5JRnJhbWVSZXNvdXJjZSkpIHtcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuSUZyYW1lUmVzb3VyY2UpO1xuICB9IGVsc2UgaWYgKHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuaUZyYW1lcmVzb3VyY2UpKSB7XG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoaWNvbkpUcmVlLmlGcmFtZXJlc291cmNlKTtcbiAgfVxuXG4gIHRoaXMuaWZyYW1lUmVzb3VyY2UgPSBpZnJhbWVSZXNvdXJjZTtcblxuICB0aGlzLmljb25WaWV3VHJhY2tpbmdzID0gcGFyc2VUcmFja2luZ3MoaWNvbkpUcmVlLmljb25WaWV3VHJhY2tpbmcpO1xuXG4gIGlmIChpY29uSlRyZWUuaWNvbkNsaWNrcykge1xuICAgIHRoaXMuaWNvbkNsaWNrVGhyb3VnaCA9IHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuaWNvbkNsaWNrcy5pY29uQ2xpY2tUaHJvdWdoKTtcbiAgICB0aGlzLmljb25DbGlja1RyYWNraW5ncyA9IHBhcnNlVHJhY2tpbmdzKGljb25KVHJlZS5pY29uQ2xpY2tzLmljb25DbGlja1RyYWNraW5nKTtcbiAgfVxuXG4gIC8vIExvY2FsIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5ncyh0cmFja2luZ3MpIHtcbiAgICBpZiAodHJhY2tpbmdzKSB7XG4gICAgICB0cmFja2luZ3MgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ3MpID8gdHJhY2tpbmdzIDogW3RyYWNraW5nc107XG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KHRyYWNraW5ncywgZnVuY3Rpb24gKHRyYWNraW5ncykge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodHJhY2tpbmdzLmtleVZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cmFja2luZ3Mua2V5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJY29uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG52YXIgQ3JlYXRpdmUgPSByZXF1aXJlKCcuL0NyZWF0aXZlJyk7XG52YXIgQ2F0ZWdvcnkgPSByZXF1aXJlKCcuL0NhdGVnb3J5Jyk7XG52YXIgVmlld2FibGVJbXByZXNzaW9uID0gcmVxdWlyZSgnLi9WaWV3YWJsZUltcHJlc3Npb24nKTtcbnZhciBWZXJpZmljYXRpb24gPSByZXF1aXJlKCcuL1ZlcmlmaWNhdGlvbicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBJbkxpbmUoaW5saW5lSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEluTGluZSkpIHtcbiAgICByZXR1cm4gbmV3IEluTGluZShpbmxpbmVKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIEZpZWxkc1xuICB0aGlzLmFkVGl0bGUgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWRUaXRsZSk7XG4gIHRoaXMuYWRTeXN0ZW0gPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWRTeXN0ZW0pO1xuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyhpbmxpbmVKVHJlZS5pbXByZXNzaW9uKTtcbiAgdGhpcy5jcmVhdGl2ZXMgPSBDcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyhpbmxpbmVKVHJlZS5jcmVhdGl2ZXMpO1xuXG4gIC8vT3B0aW9uYWwgRmllbGRzXG4gIHRoaXMuZGVzY3JpcHRpb24gPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuZGVzY3JpcHRpb24pO1xuICB0aGlzLmFkdmVydGlzZXIgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWR2ZXJ0aXNlcik7XG4gIHRoaXMuc3VydmV5cyA9IHBhcnNlU3VydmV5cyhpbmxpbmVKVHJlZS5zdXJ2ZXkpO1xuICAvL3RoaXMuZXJyb3IgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuZXJyb3IpO1xuICB0aGlzLmVycm9ycyA9IHZhc3RVdGlsLnBhcnNlRXJyb3JzKGlubGluZUpUcmVlLmVycm9yKTtcbiAgdGhpcy5wcmljaW5nID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLnByaWNpbmcpO1xuICB0aGlzLmV4dGVuc2lvbnMgPSBpbmxpbmVKVHJlZS5leHRlbnNpb25zO1xuICBpZiAodGhpcy5leHRlbnNpb25zKSB7XG5cdCAgdGhpcy5tb2F0ID0gcGFyc2VNb2F0KHRoaXMuZXh0ZW5zaW9ucyk7XG4gIH1cbiAgaWYgKHdpbmRvdy5tb2xfdmFzdFZlcnNpb24gPT09IDQpIHtcblx0ICBpZiAoaW5saW5lSlRyZWUuY2F0ZWdvcnkpIHtcblx0XHQgIHRoaXMuY2F0ZWdvcmllcyA9IENhdGVnb3J5LnBhcnNlQ2F0ZWdvcmllcyhpbmxpbmVKVHJlZS5jYXRlZ29yeSk7XG5cdCAgfVxuXHQgIGlmIChpbmxpbmVKVHJlZS52aWV3YWJsZUltcHJlc3Npb24pIHtcblx0XHQgIHRoaXMudmlld2FibGVJbXByZXNzaW9uID0gbmV3IFZpZXdhYmxlSW1wcmVzc2lvbihpbmxpbmVKVHJlZS52aWV3YWJsZUltcHJlc3Npb24pO1xuXHQgIH1cblx0ICBpZiAoaW5saW5lSlRyZWUuYWRWZXJpZmljYXRpb25zKSB7XG5cdFx0ICB0aGlzLmFkVmVyaWZpY2F0aW9ucyA9IFZlcmlmaWNhdGlvbi5wYXJzZUFkVmVyaWZpY2F0aW9ucyhpbmxpbmVKVHJlZS5hZFZlcmlmaWNhdGlvbnMpO1xuXHQgIH1cbiAgfVxuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VTdXJ2ZXlzKGlubGluZVN1cnZleXMpIHtcbiAgICBpZiAoaW5saW5lU3VydmV5cykge1xuICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheSh1dGlsaXRpZXMuaXNBcnJheShpbmxpbmVTdXJ2ZXlzKSA/IGlubGluZVN1cnZleXMgOiBbaW5saW5lU3VydmV5c10sIGZ1bmN0aW9uIChzdXJ2ZXkpIHtcbiAgICAgICAgaWYodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoc3VydmV5LmtleVZhbHVlKSl7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVyaTogc3VydmV5LmtleVZhbHVlLFxuICAgICAgICAgICAgdHlwZTogc3VydmV5LmF0dHIoJ3R5cGUnKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTW9hdChleHRlbnNpb25zKSB7XG5cdCAgdmFyIGdldE1vYXRDb25maWdEYXRhID0gZnVuY3Rpb24oYXJyRXh0ZW50aW9ucykge1xuXHRcdCAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJFeHRlbnRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQgIHZhciBleHRlbnNpb24gPSBhcnJFeHRlbnRpb25zW2ldLmV4dGVuc2lvbjtcblx0XHRcdCAgaWYgKGV4dGVuc2lvbiAmJiBleHRlbnNpb24ubW9hdCkge1xuXHRcdFx0XHQgIHZhciBtb2F0ID0ge307XG5cdFx0XHRcdCAgdmFyIHZhbHVlID0geG1sLmtleVZhbHVlKGV4dGVuc2lvbi5tb2F0KTtcblx0XHRcdFx0ICB2YXIgYXJyID0gdmFsdWUuc3BsaXQoJzsnKTtcblx0XHRcdFx0ICBmb3IgKHZhciBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdCAgdmFyIHBhcmFtcyA9IGFycltqXS5zcGxpdCgnPScpO1xuXHRcdFx0XHRcdCAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRcdFx0XHQgIG1vYXRbcGFyYW1zWzBdXSA9IHBhcmFtc1sxXTtcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgcmV0dXJuIG1vYXQ7XG5cdFx0XHQgIH1cblx0XHQgIH1cblx0XHQgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgfTtcblx0ICBpZiAoZXh0ZW5zaW9ucykge1xuXHRcdCAgcmV0dXJuIGdldE1vYXRDb25maWdEYXRhKHV0aWxpdGllcy5pc0FycmF5KGV4dGVuc2lvbnMpID8gZXh0ZW5zaW9ucyA6IFtleHRlbnNpb25zXSk7XG5cdCAgfVxuXHQgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBhbGwgdGhlIGNyZWF0aXZlcy5cbiAqL1xuSW5MaW5lLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpLGxlbjtcblxuICBpZih0aGlzLmNyZWF0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IoaSA9IDAsIGxlbiA9IHRoaXMuY3JlYXRpdmVzLmxlbmd0aDsgaTwgbGVuOyBpKz0xKXtcbiAgICBpZighdGhpcy5jcmVhdGl2ZXNbaV0uaXNTdXBwb3J0ZWQoKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbkxpbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIEludGVyYWN0aXZlQ3JlYXRpdmVGaWxlKGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlSlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUpKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZShpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZUpUcmVlKTtcbiAgfVxuXG4gIHRoaXMudHlwZSA9IGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlSlRyZWUuYXR0cigndHlwZScpO1xuICB0aGlzLmFwaUZyYW1ld29yayA9IGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlSlRyZWUuYXR0cignYXBpRnJhbWV3b3JrJyk7XG4gIHRoaXMuc3JjID0geG1sLmtleVZhbHVlKGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlSlRyZWUpO1xufVxuXG5JbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZS5wYXJzZUludGVyYWN0aXZlQ3JlYXRpdmVGaWxlcyA9IGZ1bmN0aW9uIHBhcnNlSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzKGljZnNKVHJlZSkge1xuICB2YXIgaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzID0gW107XG4gIHZhciBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXNEYXRhO1xuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChpY2ZzSlRyZWUpKSB7XG5cdCAgaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGljZnNKVHJlZSkgPyBpY2ZzSlRyZWUgOiBbaWNmc0pUcmVlXTtcblx0ICBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGZpbGVKVHJlZSkge1xuXHRcdCAgaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzLnB1c2gobmV3IEludGVyYWN0aXZlQ3JlYXRpdmVGaWxlKGZpbGVKVHJlZSkpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyYWN0aXZlQ3JlYXRpdmVGaWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xudmFyIE1lZGlhRmlsZSA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlJyk7XG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XG52YXIgSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUgPSByZXF1aXJlKCcuL0ludGVyYWN0aXZlQ3JlYXRpdmVGaWxlJyk7XG52YXIgSWNvbiA9IHJlcXVpcmUoJy4vSWNvbicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHBhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5cbmZ1bmN0aW9uIExpbmVhcihsaW5lYXJKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTGluZWFyKSkge1xuICAgIHJldHVybiBuZXcgTGluZWFyKGxpbmVhckpUcmVlKTtcbiAgfVxuXG4gIC8vUmVxdWlyZWQgRWxlbWVudHNcbiAgdGhpcy5kdXJhdGlvbiA9IHBhcnNlcnMuZHVyYXRpb24oeG1sLmtleVZhbHVlKGxpbmVhckpUcmVlLmR1cmF0aW9uKSk7XG4gIHRoaXMubWVkaWFGaWxlcyA9IHBhcnNlTWVkaWFGaWxlcyhsaW5lYXJKVHJlZS5tZWRpYUZpbGVzICYmIGxpbmVhckpUcmVlLm1lZGlhRmlsZXMubWVkaWFGaWxlKTtcblxuICAvL09wdGlvbmFsIGZpZWxkc1xuICB0aGlzLnRyYWNraW5nRXZlbnRzID0gcGFyc2VUcmFja2luZ0V2ZW50cyhsaW5lYXJKVHJlZS50cmFja2luZ0V2ZW50cyAmJiBsaW5lYXJKVHJlZS50cmFja2luZ0V2ZW50cy50cmFja2luZywgdGhpcy5kdXJhdGlvbik7XG4gIHRoaXMuc2tpcG9mZnNldCA9IHBhcnNlcnMub2Zmc2V0KHhtbC5hdHRyKGxpbmVhckpUcmVlLCAnc2tpcG9mZnNldCcpLCB0aGlzLmR1cmF0aW9uKTtcbiAgXG4gIC8vIGFkanVzdCBza2lwb2Zmc2V0IHRvIHB1Ymxpc2hlciBzZXR0aW5nc1xuICBpZiAodGhpcy5kdXJhdGlvbiAmJiB3aW5kb3cuX21vbFNldHRpbmdzICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlKSB7XG5cdCAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLmVuYWJsZWQpIHtcblx0XHQgaWYgKHRoaXMuZHVyYXRpb24gPj0gd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQpIHtcblx0XHRcdCB0aGlzLnNraXBvZmZzZXQgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS52aWRlb09mZnNldDtcblx0XHQgfVxuXHRcdCBlbHNlIHtcblx0XHRcdCB0aGlzLnNraXBvZmZzZXQgPSBudWxsOyBcblx0XHQgfVxuXHQgIH1cblx0ICBlbHNlIHtcblx0XHQgIHRoaXMuc2tpcG9mZnNldCA9IG51bGw7IFxuXHQgIH1cbiAgfVxuXG4gIGlmIChsaW5lYXJKVHJlZS52aWRlb0NsaWNrcykge1xuICAgIHRoaXMudmlkZW9DbGlja3MgPSBuZXcgVmlkZW9DbGlja3MobGluZWFySlRyZWUudmlkZW9DbGlja3MpO1xuICB9XG5cbiAgaWYobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwua2V5VmFsdWUobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKTtcblxuICAgIGlmKHhtbC5hdHRyKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycywgJ3htbEVuY29kZWQnKSkge1xuICAgICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwuZGVjb2RlKHRoaXMuYWRQYXJhbWV0ZXJzKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgaWYgKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMgJiYgbGluZWFySlRyZWUubWVkaWFGaWxlcy5tZXp6YW5pbmUpIHtcblx0XHQgIHRoaXMubWV6emFuaW5lID0geG1sLmtleVZhbHVlKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMubWV6emFuaW5lKTtcblx0ICB9XG5cdCAgaWYgKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMgJiYgbGluZWFySlRyZWUubWVkaWFGaWxlcy5pbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZSkge1xuXHRcdCAgdGhpcy5pbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXMgPSBJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZS5wYXJzZUludGVyYWN0aXZlQ3JlYXRpdmVGaWxlcyhsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLmludGVyYWN0aXZlQ3JlYXRpdmVGaWxlKTtcblx0ICB9XG4gIH1cblxuICBpZiAobGluZWFySlRyZWUuaWNvbnMpIHtcbiAgICB0aGlzLmljb25zID0gcGFyc2VJY29ucyhsaW5lYXJKVHJlZS5pY29ucyAmJiBsaW5lYXJKVHJlZS5pY29ucy5pY29uKTtcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VUcmFja2luZ0V2ZW50cyh0cmFja2luZ0V2ZW50cywgZHVyYXRpb24pIHtcbiAgICB2YXIgdHJhY2tpbmdzID0gW107XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodHJhY2tpbmdFdmVudHMpKSB7XG4gICAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRGF0YSkge1xuICAgICAgICB0cmFja2luZ3MucHVzaChuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0RhdGEsIGR1cmF0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNraW5ncztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTWVkaWFGaWxlcyhtZWRpYUZpbGVzSnhvblRyZWUpIHtcbiAgICB2YXIgbWVkaWFGaWxlcyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG1lZGlhRmlsZXNKeG9uVHJlZSkpIHtcbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZSA9IHV0aWxpdGllcy5pc0FycmF5KG1lZGlhRmlsZXNKeG9uVHJlZSkgPyBtZWRpYUZpbGVzSnhvblRyZWUgOiBbbWVkaWFGaWxlc0p4b25UcmVlXTtcblxuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlLmZvckVhY2goZnVuY3Rpb24gKG1mRGF0YSkge1xuICAgICAgICBtZWRpYUZpbGVzLnB1c2gobmV3IE1lZGlhRmlsZShtZkRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVkaWFGaWxlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSWNvbnMoaWNvbnNKeG9uVHJlZSkge1xuICAgIHZhciBpY29ucyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGljb25zSnhvblRyZWUpKSB7XG4gICAgICBpY29uc0p4b25UcmVlID0gdXRpbGl0aWVzLmlzQXJyYXkoaWNvbnNKeG9uVHJlZSkgPyBpY29uc0p4b25UcmVlIDogW2ljb25zSnhvblRyZWVdO1xuXG4gICAgICBpY29uc0p4b25UcmVlLmZvckVhY2goZnVuY3Rpb24gKGljb25EYXRhKSB7XG4gICAgICAgIGljb25zLnB1c2gobmV3IEljb24oaWNvbkRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbnM7XG4gIH1cbn1cblxuLyoqXG4gKiBNdXN0IHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgTWVkaWFGaWxlcycgdHlwZSBpcyBzdXBwb3J0ZWRcbiAqL1xuTGluZWFyLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yKGk9MCwgbGVuPXRoaXMubWVkaWFGaWxlcy5sZW5ndGg7IGk8bGVuOyBpKz0xKSB7XG4gICAgaWYodGhpcy5tZWRpYUZpbGVzW2ldLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZWFyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhdHRyaWJ1dGVzTGlzdCA9IFtcbiAgLy9SZXF1aXJlZCBhdHRyaWJ1dGVzXG4gICdkZWxpdmVyeScsXG4gICd0eXBlJyxcbiAgJ3dpZHRoJyxcbiAgJ2hlaWdodCcsXG4gIC8vT3B0aW9uYWwgYXR0cmlidXRlc1xuICAnY29kZWMnLFxuICAnaWQnLFxuICAnYml0cmF0ZScsXG4gICdtaW5CaXRyYXRlJyxcbiAgJ21heEJpdHJhdGUnLFxuICAnc2NhbGFibGUnLFxuICAnbWFpbnRhaW5Bc3BlY3RSYXRpbycsXG4gICdhcGlGcmFtZXdvcmsnXG5dO1xuXG5mdW5jdGlvbiBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1lZGlhRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IE1lZGlhRmlsZShtZWRpYUZpbGVKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIGF0dHJpYnV0ZXNcbiAgdGhpcy5zcmMgPSB4bWwua2V5VmFsdWUobWVkaWFGaWxlSlRyZWUpO1xuXG4gIGZvcih2YXIgeD0wOyB4PGF0dHJpYnV0ZXNMaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNMaXN0W3hdO1xuICAgIHRoaXNbYXR0cmlidXRlXSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoYXR0cmlidXRlKTtcbiAgfVxufVxuXG5NZWRpYUZpbGUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcbiAgaWYodmFzdFV0aWwuaXNWUEFJRCh0aGlzKSkge1xuICAgIHJldHVybiAhIXZhc3RVdGlsLmZpbmRTdXBwb3J0ZWRWUEFJRFRlY2godGhpcy50eXBlKTtcbiAgfVxuXG4gIGlmICh0aGlzLnR5cGUgPT09ICd2aWRlby94LWZsdicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFGaWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIFRyYWNraW5nRXZlbnQodHJhY2tpbmdKVHJlZSwgZHVyYXRpb24pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRyYWNraW5nRXZlbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKTtcbiAgfVxuXG4gIHRoaXMubmFtZSA9IHRyYWNraW5nSlRyZWUuYXR0cignZXZlbnQnKTtcbiAgdGhpcy51cmkgPSB4bWwua2V5VmFsdWUodHJhY2tpbmdKVHJlZSk7XG5cbiAgaWYoJ3Byb2dyZXNzJyA9PT0gdGhpcy5uYW1lKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBwYXJzZXJzLm9mZnNldCh0cmFja2luZ0pUcmVlLmF0dHIoJ29mZnNldCcpLCBkdXJhdGlvbik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFja2luZ0V2ZW50OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVW5pdmVyc2FsQWRJZCh1bml2ZXJzYWxBZElkSlRyZWUpIHtcblx0ICBpZighKHRoaXMgaW5zdGFuY2VvZiBVbml2ZXJzYWxBZElkKSkge1xuXHQgICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxBZElkKHVuaXZlcnNhbEFkSWRKVHJlZSk7XG5cdCAgfVxuXG5cdCAgdGhpcy5pZFJlZ2lzdHJ5ID0gdW5pdmVyc2FsQWRJZEpUcmVlLmF0dHIoJ2lkUmVnaXN0cnknKTtcblx0ICB0aGlzLmlkVmFsdWUgPSB1bml2ZXJzYWxBZElkSlRyZWUuYXR0cignaWRWYWx1ZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXZlcnNhbEFkSWQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2h0dHAnKS5odHRwO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZBU1RDbGllbnQob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVENsaWVudCkpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RDbGllbnQob3B0aW9ucyk7XG4gIH1cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIFdSQVBQRVJfTElNSVQ6IG9wdGlvbnMgJiYgb3B0aW9ucy53cmFwcGVyTGltaXQgJiYgb3B0aW9ucy53cmFwcGVyTGltaXQgPiAwID8gb3B0aW9ucy53cmFwcGVyTGltaXQgOiA1XG4gIH07XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcbn1cblxuVkFTVENsaWVudC5wcm90b3R5cGUuZ2V0VkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gZ2V0VkFTVFJlc3BvbnNlKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgdmFyIGVycm9yID0gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNhbGxiYWNrKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgdGhpcy5fZ2V0VkFTVEFkLmJpbmQodGhpcywgYWRUYWdVcmwpLFxuICAgICAgYnVpbGRWQVNUUmVzcG9uc2VcbiAgICBdLFxuICAgIGNhbGxiYWNrKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluLCBjYikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB0aGF0Ll9idWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbik7XG4gICAgICBjYihudWxsLCByZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2IoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNiKSB7XG4gICAgaWYgKCFhZFRhZ1VybCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGFkIHRhZyBVUkwnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGNhbGxiYWNrIGZ1bmN0aW9uJyk7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fZ2V0VkFTVEFkID0gZnVuY3Rpb24gKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgdmFzdFRyZWUpIHtcbiAgICB2YXIgd2F0ZXJmYWxsQWRzID0gdmFzdFRyZWUgJiYgdXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWRzKSA/IHZhc3RUcmVlLmFkcyA6IG51bGw7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgIH1cbiAgICBnZXRBZCh3YXRlcmZhbGxBZHMuc2hpZnQoKSwgW10sIHdhdGVyZmFsbEhhbmRsZXIpO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHdhdGVyZmFsbEhhbmRsZXIoZXJyb3IsIGFkQ2hhaW4pIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCBhZENoYWluKTtcbiAgICAgICAgaWYgKHdhdGVyZmFsbEFkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZ2V0QWQod2F0ZXJmYWxsQWRzLnNoaWZ0KCksW10sIHdhdGVyZmFsbEhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhZENoYWluKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGdldEFkV2F0ZXJmYWxsKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0VmFzdFhNTCA9IHRoYXQuX3JlcXVlc3RWQVNUWG1sLmJpbmQodGhhdCwgYWRUYWdVcmwpO1xuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICByZXF1ZXN0VmFzdFhNTCxcbiAgICAgIGJ1aWxkVmFzdFdhdGVyZmFsbFxuICAgIF0sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVmFzdFdhdGVyZmFsbCh4bWxTdHIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHZhc3RUcmVlO1xuICAgIHRyeSB7XG4gICAgICB2YXN0VHJlZSA9IHhtbC50b0pYT05UcmVlKHhtbFN0cik7XG4gICAgICBsb2dnZXIuZGVidWcgKFwiYnVpbHQgSlhPTlRyZWUgZnJvbSBWQVNUIHJlc3BvbnNlOlwiLCB2YXN0VHJlZSk7XG5cbiAgICAgIGlmKHV0aWxpdGllcy5pc0FycmF5KHZhc3RUcmVlLmFkKSkge1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSB2YXN0VHJlZS5hZDtcbiAgICAgIH0gZWxzZSBpZih2YXN0VHJlZS5hZCl7XG4gICAgICAgIHZhc3RUcmVlLmFkcyA9IFt2YXN0VHJlZS5hZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpLCB2YXN0VHJlZSk7XG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRWYXN0V2F0ZXJmYWxsLCBlcnJvciBwYXJzaW5nIHhtbFwiLCAxMDApLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSB7XG4gICAgdmFyIHZhc3RWZXJzaW9uID0geG1sLmF0dHIodmFzdFRyZWUsICd2ZXJzaW9uJyk7XG5cbiAgICBpZiAoIXZhc3RUcmVlLmFkKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm8gQWQgaW4gVkFTVCB0cmVlJywgMzAzKTtcbiAgICB9XG5cbiAgICAvL2lmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyKSkge1xuICAgIGlmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyICYmIHZhc3RWZXJzaW9uICE9IDQpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm90IHN1cHBvcnRlZCBWQVNUIHZlcnNpb24gXCInICsgdmFzdFZlcnNpb24gKyAnXCInLCAxMDIpO1xuICAgIH1cbiAgICB3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID0gdmFzdFZlcnNpb247XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFkKGFkVGFnVXJsLCBhZENoYWluLCBjYWxsYmFjaykge1xuICAgIGlmIChhZENoYWluLmxlbmd0aCA+PSB0aGF0LnNldHRpbmdzLldSQVBQRVJfTElNSVQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuZ2V0QWQsIHBsYXllcnMgd3JhcHBlciBsaW1pdCByZWFjaGVkICh0aGUgbGltaXQgaXMgXCIgKyBcbiAgICAgICAgdGhhdC5zZXR0aW5ncy5XUkFQUEVSX0xJTUlUICsgXCIpXCIsIDMwMiksIGFkQ2hhaW4pO1xuICAgIH1cblxuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGFkVGFnVXJsKSkge1xuICAgICAgICAgIHJlcXVlc3RWQVNUQWQoYWRUYWdVcmwsIG5leHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQobnVsbCwgYWRUYWdVcmwpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYnVpbGRBZFxuICAgIF0sIGZ1bmN0aW9uIChlcnJvciwgYWQpIHtcbiAgICAgIGlmIChhZCkge1xuICAgICAgICBhZENoYWluLnB1c2goYWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCBhZENoYWluKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFkLndyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIGdldEFkKGFkLndyYXBwZXIuVkFTVEFkVGFnVVJJLCBhZENoYWluLCBjYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBhZENoYWluKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkQWQoYWRKeG9uVHJlZSwgY2FsbGJhY2spIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGFkID0gbmV3IEFkKGFkSnhvblRyZWUpO1xuICAgICAgY2FsbGJhY2sodmFsaWRhdGVBZChhZCksIGFkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5idWlsZEFkLCBlcnJvciBwYXJzaW5nIHhtbCcsIDEwMCksIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQWQoYWQpIHtcbiAgICB2YXIgd3JhcHBlciA9IGFkLndyYXBwZXI7XG4gICAgdmFyIGluTGluZSA9IGFkLmluTGluZTtcbiAgICB2YXIgZXJyTXNnUHJlZml4ID0gJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlQWQsICc7XG5cbiAgICBpZiAoaW5MaW5lICYmIHdyYXBwZXIpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArXCJJbkxpbmUgYW5kIFdyYXBwZXIgYm90aCBmb3VuZCBvbiB0aGUgc2FtZSBBZFwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmICghaW5MaW5lICYmICF3cmFwcGVyKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcIm5vciB3cmFwcGVyIG5vciBpbmxpbmUgZWxlbWVudHMgZm91bmQgb24gdGhlIEFkXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgaWYgKGluTGluZSAmJiAhaW5MaW5lLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwiY291bGQgbm90IGZpbmQgTWVkaWFGaWxlIHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgdmlkZW8gcGxheWVyXCIsIDQwMyk7XG4gICAgfVxuXG4gICAgaWYgKHdyYXBwZXIgJiYgIXdyYXBwZXIuVkFTVEFkVGFnVVJJKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcIm1pc3NpbmcgJ1ZBU1RBZFRhZ1VSSScgaW4gd3JhcHBlclwiLCAxMDEpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgY2FsbGJhY2spIHtcbiAgICB0aGF0Ll9yZXF1ZXN0VkFTVFhtbChhZFRhZ1VybCwgZnVuY3Rpb24gKGVycm9yLCB4bWxTdHIpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHZhc3RUcmVlID0geG1sLnRvSlhPTlRyZWUoeG1sU3RyKTtcbiAgICAgICAgY2FsbGJhY2sodmFsaWRhdGVWQVNUVHJlZSh2YXN0VHJlZSksIHZhc3RUcmVlLmFkKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnJlcXVlc3RWQVNUQWQsIGVycm9yIHBhcnNpbmcgeG1sXCIsIDEwMCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fcmVxdWVzdFZBU1RYbWwgPSBmdW5jdGlvbiByZXF1ZXN0VkFTVFhtbChhZFRhZ1VybCwgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICBpZiAodXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRUYWdVcmwpKSB7XG4gICAgICBhZFRhZ1VybChyZXF1ZXN0SGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ2dlci5pbmZvIChcInJlcXVlc3RpbmcgYWRUYWdVcmw6IFwiICsgYWRUYWdVcmwpO1xuICAgICAgaHR0cC5nZXQoYWRUYWdVcmwsIHJlcXVlc3RIYW5kbGVyLCB7XG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FsbGJhY2soZSk7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHJlcXVlc3RIYW5kbGVyKGVycm9yLCByZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB2YXIgZXJyTXNnID0gdXRpbGl0aWVzLmlzRGVmaW5lZChzdGF0dXMpID9cbiAgICAgIFwib24gVkFTVENsaWVudC5yZXF1ZXN0VmFzdFhNTCwgSFRUUCByZXF1ZXN0IGVycm9yIHdpdGggc3RhdHVzICdcIiArIHN0YXR1cyArIFwiJ1wiIDpcbiAgICAgICAgXCJvbiBWQVNUQ2xpZW50LnJlcXVlc3RWYXN0WE1MLCBFcnJvciBnZXR0aW5nIHRoZSB0aGUgVkFTVCBYTUwgd2l0aCBoZSBwYXNzZWQgYWRUYWdYTUwgZm5cIjtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKGVyck1zZywgMzAxKSwgbnVsbCk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fYnVpbGRWQVNUUmVzcG9uc2UgPSBmdW5jdGlvbiBidWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbikge1xuICB2YXIgcmVzcG9uc2UgPSBuZXcgVkFTVFJlc3BvbnNlKCk7XG4gIGFkZEFkc1RvUmVzcG9uc2UocmVzcG9uc2UsIGFkc0NoYWluKTtcbiAgdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xuXG4gIC8vKioqIExvY2FsIGZ1bmN0aW9uICoqKipcbiAgZnVuY3Rpb24gYWRkQWRzVG9SZXNwb25zZShyZXNwb25zZSwgYWRzKSB7XG4gICAgYWRzLmZvckVhY2goZnVuY3Rpb24gKGFkKSB7XG4gICAgICByZXNwb25zZS5hZGRBZChhZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdmFyIHByb2dyZXNzRXZlbnRzID0gcmVzcG9uc2UudHJhY2tpbmdFdmVudHMucHJvZ3Jlc3M7XG5cbiAgICBpZiAoIXJlc3BvbnNlLmhhc0xpbmVhcigpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIFJlY2VpdmVkIGFuIEFkIHR5cGUgdGhhdCBpcyBub3Qgc3VwcG9ydGVkXCIsIDIwMCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLmR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgTWlzc2luZyBkdXJhdGlvbiBmaWVsZCBpbiBWQVNUIHJlc3BvbnNlXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2dyZXNzRXZlbnRzKSB7XG4gICAgICBwcm9ncmVzc0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzTnVtYmVyKHByb2dyZXNzRXZlbnQub2Zmc2V0KSkge1xuICAgICAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgbWlzc2luZyBvciB3cm9uZyBvZmZzZXQgYXR0cmlidXRlIG9uIHByb2dyZXNzIHRyYWNraW5nIGV2ZW50XCIsIDEwMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIGFkQ2hhaW4pIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheShhZENoYWluKSB8fCBhZENoYWluLmxlbmd0aCA9PT0gMCkgeyAvL1RoZXJlIGlzIG5vdGhpbmcgdG8gdHJhY2tcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZXJyb3JVUkxNYWNyb3MgPSBbXTtcbiAgYWRDaGFpbi5mb3JFYWNoKGFkZEVycm9yVXJsTWFjcm9zKTtcbiAgdmFzdFV0aWwudHJhY2soZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yLmNvZGUgfHwgOTAwfSk7ICAvLzkwMCA8PT0gVW5kZWZpbmVkIGVycm9yXG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgICoqKi9cbiAgZnVuY3Rpb24gYWRkRXJyb3JVcmxNYWNyb3MoYWQpIHtcbiAgICAvKmlmIChhZC53cmFwcGVyICYmIGFkLndyYXBwZXIuZXJyb3IgJiYgdHlwZW9mKGFkLndyYXBwZXIuZXJyb3IpID09PSAnc3RyaW5nJykge1xuICAgICAgICBlcnJvclVSTE1hY3Jvcy5wdXNoKGFkLndyYXBwZXIuZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChhZC5pbkxpbmUgJiYgYWQuaW5MaW5lLmVycm9yICYmIHR5cGVvZihhZC5pbkxpbmUuZXJyb3IpID09PSAnc3RyaW5nJykge1xuICAgIFx0ZXJyb3JVUkxNYWNyb3MucHVzaChhZC5pbkxpbmUuZXJyb3IpO1xuICAgIH0qL1xuXHQgIFxuICAgICAgaWYgKGFkLndyYXBwZXIgJiYgYWQud3JhcHBlci5lcnJvcnMgJiYgQXJyYXkuaXNBcnJheShhZC53cmFwcGVyLmVycm9ycykpIHtcbiAgICBcdCAgZXJyb3JVUkxNYWNyb3MgPSBlcnJvclVSTE1hY3Jvcy5jb25jYXQoYWQud3JhcHBlci5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWQuaW5MaW5lICYmIGFkLmluTGluZS5lcnJvcnMgJiYgQXJyYXkuaXNBcnJheShhZC5pbkxpbmUuZXJyb3JzKSkge1xuICAgIFx0ICBlcnJvclVSTE1hY3JvcyA9IGVycm9yVVJMTWFjcm9zLmNvbmNhdChhZC5pbkxpbmUuZXJyb3JzKTtcbiAgICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUQ2xpZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBWQVNURXJyb3IobWVzc2FnZSwgY29kZSkge1xuICB0aGlzLm1lc3NhZ2UgPSAnVkFTVCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcbiAgaWYgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICB9XG59XG5cblZBU1RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblZBU1RFcnJvci5wcm90b3R5cGUubmFtZSA9IFwiVkFTVCBFcnJvclwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RFcnJvcjsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW5uZXIgaGVscGVyIGNsYXNzIHRoYXQgZGVhbHMgd2l0aCB0aGUgbG9naWMgb2YgdGhlIGluZGl2aWR1YWwgc3RlcHMgbmVlZGVkIHRvIHNldHVwIGFuIGFkIGluIHRoZSBwbGF5ZXIuXG4gKlxuICogQHBhcmFtIHBsYXllciB7b2JqZWN0fSBpbnN0YW5jZSBvZiB0aGUgcGxheWVyIHRoYXQgd2lsbCBwbGF5IHRoZSBhZC4gSXQgYXNzdW1lcyB0aGF0IHRoZSB2aWRlb2pzLWNvbnRyaWItYWRzIHBsdWdpblxuICogICAgICAgICAgICAgICAgICAgICAgICBoYXMgYmVlbiBpbml0aWFsaXplZCB3aGVuIHlvdSB1c2UgaXRzIHV0aWxpdHkgZnVuY3Rpb25zLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuL1ZBU1RUcmFja2VyJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZBU1RJbnRlZ3JhdG9yKHBsYXllcikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVEludGVncmF0b3IpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xuICB9XG5cbiAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIHRoaXMuZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lID0gZmFsc2U7XG59XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdXRpbGl0aWVzLm5vb3A7XG5cbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdPbiBWQVNUSW50ZWdyYXRvciwgbWlzc2luZyByZXF1aXJlZCBWQVNUUmVzcG9uc2UnKSk7XG4gIH1cblxuICBhc3luYy53YXRlcmZhbGwoW1xuICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICBuZXh0KG51bGwsIHZhc3RSZXNwb25zZSk7XG4gICAgfSxcbiAgICB0aGlzLl9zZWxlY3RBZFNvdXJjZS5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2NyZWF0ZVZBU1RUcmFja2VyLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkQ2xpY2tUaHJvdWdoLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkQ2xpY2tUaHJvdWdoRGl2QmxvY2tlci5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3BsYXlTZWxlY3RlZEFkLmJpbmQodGhpcylcbiAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xuICAgIGlmIChlcnJvciAmJiByZXNwb25zZSkge1xuICAgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICAgICAgXHR3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRFcnJvcicsIGFkVm9sdW1lOiB0aGF0LnBsYXllci52b2x1bWUoKX0pO1xuICAgICAgICB9XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgfVxuICAgIGNhbGxiYWNrKGVycm9yLCByZXNwb25zZSk7XG4gIH0pO1xuXG4gIHRoaXMuX2FkVW5pdCA9IHtcbiAgICBfc3JjOiBudWxsLFxuICAgIHR5cGU6ICdWQVNUJyxcbiAgICBwYXVzZUFkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LnBsYXllci5wYXVzZSh0cnVlKTtcbiAgICB9LFxuXG4gICAgcmVzdW1lQWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQucGxheWVyLnBsYXkodHJ1ZSk7XG4gICAgfSxcblxuICAgIGlzUGF1c2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhhdC5wbGF5ZXIucGF1c2VkKHRydWUpO1xuICAgIH0sXG5cbiAgICBnZXRTcmM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zcmM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB0aGlzLl9hZFVuaXQ7XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NlbGVjdEFkU291cmNlID0gZnVuY3Rpb24gc2VsZWN0QWRTb3VyY2UocmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBzb3VyY2U7XG5cbiAgdmFyIHBsYXllcldpZHRoID0gZG9tLmdldERpbWVuc2lvbih0aGlzLnBsYXllci5lbCgpKS53aWR0aDtcbiAgcmVzcG9uc2UubWVkaWFGaWxlcy5zb3J0KGZ1bmN0aW9uIGNvbXBhcmVUbyhhLCBiKSB7XG4gICAgdmFyIGRlbHRhQSA9IE1hdGguYWJzKHBsYXllcldpZHRoIC0gYS53aWR0aCk7XG4gICAgdmFyIGRlbHRhQiA9IE1hdGguYWJzKHBsYXllcldpZHRoIC0gYi53aWR0aCk7XG4gICAgcmV0dXJuIGRlbHRhQSAtIGRlbHRhQjtcbiAgfSk7XG5cbiAgc291cmNlID0gdGhpcy5wbGF5ZXIuc2VsZWN0U291cmNlKHJlc3BvbnNlLm1lZGlhRmlsZXMpLnNvdXJjZTtcbiAgaWYgKHNvdXJjZSkge1xuICAgIHRoaXMucGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5tZXNzYWdlJywgZGF0YToge21lc3NhZ2U6ICdQbGF5aW5nICcgKyBzb3VyY2Uuc3JjICsgJyAodHlwZSA9ICcgKyBzb3VyY2UudHlwZSArICcpJ319KTtcbiAgfVxuICBcbiAgaWYgKHNvdXJjZSkge1xuICAgIGxvZ2dlci5pbmZvIChcInNlbGVjdGVkIHNvdXJjZTogXCIsIHNvdXJjZSk7XG4gICAgaWYgKHRoaXMuX2FkVW5pdCkge1xuICAgICAgdGhpcy5fYWRVbml0Ll9zcmMgPSBzb3VyY2U7XG4gICAgfVxuICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBzb3VyY2UsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIC8vIGNvZGUgNDAzIDw9PSBDb3VsZG4ndCBmaW5kIE1lZGlhRmlsZSB0aGF0IGlzIHN1cHBvcnRlZCBieSB0aGlzIHZpZGVvIHBsYXllclxuICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwiQ291bGQgbm90IGZpbmQgQWQgbWVkaWFmaWxlIHN1cHBvcnRlZCBieSB0aGlzIHBsYXllclwiLCA0MDMpLCByZXNwb25zZSk7XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZBU1RUcmFja2VyID0gZnVuY3Rpb24gY3JlYXRlVkFTVFRyYWNrZXIoYWRNZWRpYUZpbGUsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGNhbGxiYWNrKG51bGwsIGFkTWVkaWFGaWxlLCBuZXcgVkFTVFRyYWNrZXIoYWRNZWRpYUZpbGUuc3JjLCByZXNwb25zZSksIHJlc3BvbnNlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhbGxiYWNrKGUsIHJlc3BvbnNlKTtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uIHNldHVwRXZlbnRzKGFkTWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHByZXZpb3VzbHlNdXRlZDtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIHRyYWNrSW1wcmVzc2lvbnMpO1xuICBwbGF5ZXIub24oJ3BhdXNlJywgdHJhY2tQYXVzZSk7XG4gIHBsYXllci5vbigndGltZXVwZGF0ZScsIHRyYWNrUHJvZ3Jlc3MpO1xuICBwbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIHRyYWNrVm9sdW1lQ2hhbmdlKTtcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHVuYmluZEV2ZW50cyk7XG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZFNraXAnXSwgZnVuY3Rpb24oZXZ0KXtcbiAgICBpZihldnQudHlwZSA9PT0gJ3Zhc3QuYWRFbmQnKXtcbiAgICAgIHRyYWNrZXIudHJhY2tDb21wbGV0ZSgpO1xuICAgIH1cbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdHZhciB0eXBlID0gZXZ0LnR5cGUgPT09ICd2YXN0LmFkRW5kJyA/ICdBZFZpZGVvQ29tcGxldGUnIDogJ0FkU3RvcHBlZCc7XG4gIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiB0eXBlLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHBsYXllci5vbmUoJ2FkU3RvcCcsIGZ1bmN0aW9uKCkge1xuXHQgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7IFxuICB9KTtcblxuICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkU3RhcnQnLCB0cmFja0ltcHJlc3Npb25zKTtcbiAgICBwbGF5ZXIub2ZmKCdwYXVzZScsIHRyYWNrUGF1c2UpO1xuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcbiAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UoKSB7XG4gICAgaWYgKHBsYXllci5pc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgdHJhY2tlci50cmFja0Z1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhY2tlci50cmFja0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tQYXVzZSgpIHtcbiAgICAvL05PVEU6IHdoZW5ldmVyIGEgdmlkZW8gZW5kcyB0aGUgdmlkZW8gRWxlbWVudCB0cmlnZ2VycyBhICdwYXVzZScgZXZlbnQgYmVmb3JlIHRoZSAnZW5kZWQnIGV2ZW50LlxuICAgIC8vICAgICAgV2Ugc2hvdWxkIG5vdCB0cmFjayB0aGlzIHBhdXNlIGV2ZW50IGJlY2F1c2UgaXQgbWFrZXMgdGhlIFZBU1QgdHJhY2tpbmcgY29uZnVzaW5nIGFnYWluIHdlIHVzZSBhXG4gICAgLy8gICAgICBUaHJlc2hvbGQgb2YgMiBzZWNvbmRzIHRvIHByZXZlbnQgZmFsc2UgcG9zaXRpdmVzIG9uIElPUy5cblx0XHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5icmVha0R1cmF0aW9uKSB7XG5cdFx0XHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5yZWFsVmlkZW9EdXJhdGlvbikge1xuXHRcdFx0ICAgIGlmIChNYXRoLmFicyh3aW5kb3cuX21vbFNldHRpbmdzLnJlYWxWaWRlb0R1cmF0aW9uIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpIDwgMikge1xuXHRcdFx0ICAgICAgICByZXR1cm47XG5cdFx0XHQgICAgfVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmIChNYXRoLmFicyhwbGF5ZXIuZHVyYXRpb24oKSAtIHBsYXllci5jdXJyZW50VGltZSgpKSA8IDIpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG4gICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFBhdXNlZCcsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgdHJhY2tlci50cmFja1BhdXNlKCk7XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5JywgJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYoZXZ0LnR5cGUgPT09ICdwbGF5Jyl7XG5cdCAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcblx0ICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRQbGF5aW5nJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHQgICAgfVxuICAgICAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XG4gICAgICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tQcm9ncmVzcygpIHtcbiAgICB2YXIgY3VycmVudFRpbWVJbk1zID0gcGxheWVyLmN1cnJlbnRUaW1lKCkgKiAxMDAwO1xuICAgIHRyYWNrZXIudHJhY2tQcm9ncmVzcyhjdXJyZW50VGltZUluTXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tJbXByZXNzaW9ucygpIHtcbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkSW1wcmVzc2lvbicsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgdHJhY2tlci50cmFja0ltcHJlc3Npb25zKCk7XG4gICAgdHJhY2tlci50cmFja0NyZWF0aXZlVmlldygpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tWb2x1bWVDaGFuZ2UoKSB7XG4gICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWb2x1bWVDaGFuZ2UnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgfVxuICAgIHZhciBtdXRlZCA9IHBsYXllci5tdXRlZCgpO1xuICAgIGlmIChtdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja011dGUoKTtcbiAgICB9IGVsc2UgaWYgKHByZXZpb3VzbHlNdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xuICAgIH1cbiAgICBwcmV2aW91c2x5TXV0ZWQgPSBtdXRlZDtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRTa2lwQnV0dG9uID0gZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgc2tpcE9mZnNldEluU2VjO1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihyZXNwb25zZS5za2lwb2Zmc2V0KSkge1xuICAgIHNraXBPZmZzZXRJblNlYyA9IHJlc3BvbnNlLnNraXBvZmZzZXQgLyAxMDAwO1xuICAgIGFkZFNraXBCdXR0b25Ub1BsYXllcih0aGlzLnBsYXllciwgc2tpcE9mZnNldEluU2VjKTtcbiAgfVxuICBjYWxsYmFjayhudWxsLCBzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldCkge1xuICAgIHZhciBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgIHZhciB1cGRhdGVTa2lwQnV0dG9uID0gdXBkYXRlU2tpcEJ1dHRvblN0YXRlLmJpbmQodGhhdCwgc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCwgcGxheWVyKTtcblxuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xuICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XG4gICAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG4gICAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKSB7XG4gICAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJ2YXN0LXNraXAtYnV0dG9uXCIpO1xuICAgIHNraXBCdXR0b24uaWQgPSAnYWRTa2lwQnV0dG9uJztcblxuICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZG9tLmhhc0NsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJykpIHtcbiAgICAgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICAgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFNraXBwZWQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICAgICAgfVxuICAgICAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFNraXAnKTtcbiAgICAgIH1cbiAgICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXG4gICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNraXBCdXR0b247XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uU3RhdGUoc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCwgcGxheWVyKSB7XG4gICAgdmFyIHRpbWVMZWZ0ID0gTWF0aC5jZWlsKHNraXBPZmZzZXQgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSk7XG4gICAgaWYgKHRpbWVMZWZ0ID4gMCkge1xuICAgICAgICAvL3NraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGluIFwiICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHModGltZUxlZnQsIDIpICsgXCIuLi5cIjtcbiAgICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJ2YXN0LXNraXAtYnV0dG9uLXRleHRcIj4nICsgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwVGV4dC5yZXBsYWNlKCclJVRJTUUlJScsIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHRpbWVMZWZ0LCAyKSkgKyAnPC9wPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZG9tLmhhc0NsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJykpIHtcbiAgICAgICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJyk7XG4gICAgICAgIC8vc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgYWRcIjtcbiAgICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBCdXR0b25UZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaWZyYW1lQmFja0J1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lQmFja0J1dHRvbicpO1xuICAgIGlmICghaWZyYW1lQmFja0J1dHRvbikge1xuICAgICAgICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2ggPSBmdW5jdGlvbiBhZGRDbGlja1Rocm91Z2gobWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIGVuYWJsZUZ1bGxzY3JlZW5DbGlja0lGcmFtZSA9IHRoaXMuZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lO1xuICBcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgYmxvY2tlciA9IGNyZWF0ZUNsaWNrVGhyb3VnaEJsb2NrZXIocGxheWVyLCB0cmFja2VyLCByZXNwb25zZSk7XG4gIHZhciB1cGRhdGVCbG9ja2VyID0gdXBkYXRlQmxvY2tlclVSTC5iaW5kKHRoaXMsIGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpO1xuXG4gIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShibG9ja2VyLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlQmxvY2tlcik7XG4gIFxuICBpZiAoZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lKSB7XG5cdCAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlRGlzcGxheVN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKSB7XG5cdFx0aWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MuZGlzYWJsZUNsaWNrVGhydSkge1xuXHRcdCAgICB2YXIgYmxvY2tlckRpdiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdCAgICBkb20uYWRkQ2xhc3MoYmxvY2tlckRpdiwgJ3Zhc3QtYmxvY2tlcicpO1xuXHRcdFx0cmV0dXJuIGJsb2NrZXJEaXY7XG5cdFx0fVxuICAgIHZhciBibG9ja2VyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHZhciBjbGlja1Rocm91Z2hNYWNybyA9IHJlc3BvbnNlLmNsaWNrVGhyb3VnaDtcblxuICAgIGRvbS5hZGRDbGFzcyhibG9ja2VyLCAndmFzdC1ibG9ja2VyJyk7XG4gICAgYmxvY2tlci5ocmVmID0gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllcik7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNsaWNrVGhyb3VnaE1hY3JvKSkge1xuICAgICAgYmxvY2tlci50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIH1cblxuICAgIHZhciBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChwbGF5ZXIucGF1c2VkKCkpIHtcbiAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XG5cbiAgICAgICAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBwbGF5ZXIncyBub3JtYWwgcGF1c2UgbWVjaGFuaXNtXG4gICAgICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcblxuICAgICAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgICAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkQ2xpY2tUaHJ1JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIH07XG4gIFxuICAgIGlmICh1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcbiAgICAgICAgYmxvY2tlci5vbnRvdWNoZW5kID0gY2xpY2tIYW5kbGVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYmxvY2tlci5vbmNsaWNrID0gY2xpY2tIYW5kbGVyO1xuICAgIH1cbiAgICBcbiAgICBpZiAocGxheWVyLmlzRnVsbHNjcmVlbigpICYmIGVuYWJsZUZ1bGxzY3JlZW5DbGlja0lGcmFtZSkge1xuICAgIFx0YmxvY2tlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHJldHVybiBibG9ja2VyO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQmxvY2tlclVSTChibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKSB7XG4gICAgYmxvY2tlci5ocmVmID0gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwocmVzcG9uc2UuY2xpY2tUaHJvdWdoLCBwbGF5ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllcikge1xuICAgIHZhciB2YXJpYWJsZXMgPSB7XG4gICAgICBBU1NFVFVSSTogbWVkaWFGaWxlLnNyYyxcbiAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3MocGxheWVyLmN1cnJlbnRUaW1lKCkgKiAxMDAwKVxuICAgIH07XG5cbiAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogJyMnO1xuICB9XG4gIFxuICBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5U3R5bGUoKSB7XG5cdCAgYmxvY2tlci5zdHlsZS5kaXNwbGF5ID0gcGxheWVyLmlzRnVsbHNjcmVlbigpID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUJsb2NrZXIoKSB7XG4gICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuXHRwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlRGlzcGxheVN0eWxlKTtcbiAgICBkb20ucmVtb3ZlKGJsb2NrZXIpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaERpdkJsb2NrZXIgPSBmdW5jdGlvbiBhZGRDbGlja1Rocm91Z2gobWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcblx0aWYgKCF0aGlzLmVuYWJsZUZ1bGxzY3JlZW5DbGlja0lGcmFtZSkge1xuXHRcdHJldHVybiBjYWxsYmFjayhudWxsLCBtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblx0fVxuXHR2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdCAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hEaXYocGxheWVyLCB0cmFja2VyLCByZXNwb25zZSk7XG5cdCAgdmFyIHVwZGF0ZUJsb2NrZXIgPSB1cGRhdGVCbG9ja2VyVVJMLmJpbmQodGhpcywgYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcik7XG5cdCAgdmFyIGJsb2NrZXJVcmw7XG5cdCAgdmFyIGlGcmFtZTtcblx0ICB2YXIgaUZyYW1lQmFja0J1dHRvbjtcblxuXHQgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShibG9ja2VyLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcblx0ICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcblx0ICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUJsb2NrZXIpO1xuXG5cdCAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlRGlzcGxheVN0eWxlKTtcblxuXHQgIHJldHVybiBjYWxsYmFjayhudWxsLCBtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblx0XG5cdCAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoRGl2KHBsYXllciwgdHJhY2tlcikge1xuXHQgICAgdmFyIGJsb2NrZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHQgICAgZG9tLmFkZENsYXNzKGJsb2NrZXIsICd2YXN0LWJsb2NrZXInKTtcblxuXHRcdGlmICghd2luZG93Ll9tb2xTZXR0aW5ncy5kaXNhYmxlQ2xpY2tUaHJ1KSB7XG5cdFx0ICAgIGJsb2NrZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0ICAgICAgaWYgKHBsYXllci5wYXVzZWQoKSkge1xuXHRcdCAgICAgICAgcGxheWVyLnBsYXkoKTtcblx0XG5cdFx0ICAgICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgcGxheWVyJ3Mgbm9ybWFsIHBhdXNlIG1lY2hhbmlzbVxuXHRcdCAgICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHQgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0XHQgICAgICB9XG5cdFxuXHRcdCAgICAgIHBsYXllci5wYXVzZSgpO1xuXHRcdCAgICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xuXHRcblx0XHQgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcblx0XHQgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZENsaWNrVGhydScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgXG5cdFx0ICAgICAgLy8gY3JlYXRlIElGcmFtZSB3aXRoIGJhY2sgYnV0dG9uXG5cdFx0ICAgICAgaUZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cdFx0XHQgIGRvbS5hZGRDbGFzcyhpRnJhbWUsICd2YXN0LWJsb2NrZXInKTtcblx0XHRcdCAgaUZyYW1lLnNyYyA9IGJsb2NrZXJVcmw7XG5cdFx0XHQgIGJsb2NrZXIuYXBwZW5kQ2hpbGQoaUZyYW1lKTtcblx0XHRcdCAgXG5cdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdCAgZG9tLmFkZENsYXNzKGlGcmFtZUJhY2tCdXR0b24sIFwidmFzdC1iYWNrLWJ1dHRvblwiKTtcblx0XHQgICAgICBkb20uYWRkQ2xhc3MoaUZyYW1lQmFja0J1dHRvbiwgJ2VuYWJsZWQnKTtcblx0XHRcdCAgaUZyYW1lQmFja0J1dHRvbi5pbm5lckhUTUwgPSBcIkJhY2tcIjtcblx0XHRcdCAgaUZyYW1lQmFja0J1dHRvbi5pZCA9ICdpZnJhbWVCYWNrQnV0dG9uJztcblx0XHRcdCAgYmxvY2tlci5hcHBlbmRDaGlsZChpRnJhbWVCYWNrQnV0dG9uKTtcblx0XHRcdCAgaUZyYW1lQmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyIChcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQgIGJsb2NrZXIucmVtb3ZlQ2hpbGQoaUZyYW1lKTtcblx0XHRcdFx0ICBpRnJhbWUgPSBudWxsO1xuXHRcdFx0XHQgIGJsb2NrZXIucmVtb3ZlQ2hpbGQoaUZyYW1lQmFja0J1dHRvbik7XG5cdFx0XHRcdCAgaUZyYW1lQmFja0J1dHRvbiA9IG51bGw7XG5cdFxuXHRcdFx0XHQgIC8vIHNob3cgY29udHJvbHNcblx0XHRcdFx0ICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdFx0XHRcdCAgaWYgKHNraXBCdXR0b24pIHtcblx0XHRcdFx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IFxuXHRcdFx0XHQgIH1cblx0XHRcdFx0ICBwbGF5ZXIuY29udHJvbHModHJ1ZSk7XG5cdFx0XHRcdCAgXG5cdFx0XHRcdCAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdCAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHQgIH1cblx0XHRcdCAgfSk7XG5cdFx0XHQgIFxuXHRcdFx0ICAvLyBoaWRlIGNvbnRyb2xzXG5cdFx0XHQgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG5cdFx0XHQgIH0sIDEpO1xuXHRcdFx0ICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdFx0XHQgIGlmIChza2lwQnV0dG9uKSB7XG5cdFx0XHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcblx0XHRcdCAgfVxuXHRcdFx0ICBwbGF5ZXIuY29udHJvbHMoZmFsc2UpO1xuXHRcblx0XHQgICAgfTtcblx0XHR9XG5cblx0ICAgIGlmICghcGxheWVyLmlzRnVsbHNjcmVlbigpKSB7XG5cdCAgICBcdGJsb2NrZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGJsb2NrZXI7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gdXBkYXRlQmxvY2tlclVSTChibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKSB7XG5cdFx0ICBibG9ja2VyVXJsID0gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwocmVzcG9uc2UuY2xpY2tUaHJvdWdoLCBwbGF5ZXIpO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpIHtcblx0ICAgIHZhciB2YXJpYWJsZXMgPSB7XG5cdCAgICAgIEFTU0VUVVJJOiBtZWRpYUZpbGUuc3JjLFxuXHQgICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMClcblx0ICAgIH07XG5cblx0ICAgIHJldHVybiBjbGlja1Rocm91Z2hNYWNybyA/IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm8oY2xpY2tUaHJvdWdoTWFjcm8sIHZhcmlhYmxlcykgOiAnIyc7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheVN0eWxlKCkge1xuXHRcdCAgYmxvY2tlci5zdHlsZS5kaXNwbGF5ID0gcGxheWVyLmlzRnVsbHNjcmVlbigpID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHQgIGlmICghcGxheWVyLmlzRnVsbHNjcmVlbigpICYmIGlGcmFtZSkge1xuXHRcdFx0ICBibG9ja2VyLnJlbW92ZUNoaWxkKGlGcmFtZSk7XG5cdFx0XHQgIGlGcmFtZSA9IG51bGw7XG5cdFx0XHQgIGJsb2NrZXIucmVtb3ZlQ2hpbGQoaUZyYW1lQmFja0J1dHRvbik7XG5cdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24gPSBudWxsO1xuXHRcdFx0ICBcblx0XHRcdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcblx0XHRcdCAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuXHRcdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG5cdFx0XHQgIH1cblx0XHRcdCAgcGxheWVyLmNvbnRyb2xzKHRydWUpO1xuXHRcdCAgfVxuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIHJlbW92ZUJsb2NrZXIoKSB7XG5cdCAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XG5cdFx0cGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZURpc3BsYXlTdHlsZSk7XG5cdCAgICBkb20ucmVtb3ZlKGJsb2NrZXIpO1xuXHQgIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fcGxheVNlbGVjdGVkQWQgPSBmdW5jdGlvbiBwbGF5U2VsZWN0ZWRBZChzb3VyY2UsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cbiAgLy93aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSA9IG51bGw7XG5cbiAgcGxheWVyLnByZWxvYWQoXCJhdXRvXCIpOyAvL3dpdGhvdXQgcHJlbG9hZD1hdXRvIHRoZSBkdXJhdGlvbmNoYW5nZSBldmVudCBpcyBuZXZlciBmaXJlZFxuICBwbGF5ZXIuc3JjKHNvdXJjZSk7XG5cbiAgbG9nZ2VyLmRlYnVnIChcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQ+IHdhaXRpbmcgZm9yIGR1cmF0aW9uY2hhbmdlIHRvIHBsYXkgdGhlIGFkLi4uXCIpO1xuXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ2R1cmF0aW9uY2hhbmdlJywgJ2Vycm9yJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdkdXJhdGlvbmNoYW5nZScpIHtcbiAgICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkPiBnb3QgZHVyYXRpb25jaGFuZ2U7IGNhbGxpbmcgcGxheUFkKClcIik7XG4gICAgICBwbGF5QWQoKTtcbiAgICB9IGVsc2UgaWYoZXZ0LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUSW50ZWdyYXRvciwgUGxheWVyIGlzIHVuYWJsZSB0byBwbGF5IHRoZSBBZFwiLCA0MDApLCByZXNwb25zZSk7XG4gICAgfVxuICAgIC8vTk9URTogSWYgdGhlIGFkcyBnZXQgY2FuY2VsZWQgd2UgZG8gbm90aGluZy9cbiAgfSk7XG5cbiAgLyoqKiogbG9jYWwgZnVuY3Rpb25zICoqKioqKi9cbiAgZnVuY3Rpb24gcGxheUFkKCkge1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZihldnQudHlwZSA9PT0gJ3Zhc3QuYWRzQ2FuY2VsJyl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLypDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNiBNb2F0IEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4qL1xuICAgICAgLypmdW5jdGlvbiBpbml0TW9hdFRyYWNraW5nKGEsYyxkLGgsayl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiPVtdO2M9e2FkRGF0YTp7aWRzOmMsZHVyYXRpb246ZCx1cmw6a30sZGlzcGF0Y2hFdmVudDpmdW5jdGlvbihhKXt0aGlzLnNlbmRFdmVudD8oYiYmKGIucHVzaChhKSxhPWIsYj0hMSksdGhpcy5zZW5kRXZlbnQoYSkpOmIucHVzaChhKX19O2Q9XCJfbW9hdEFwaVwiK01hdGguZmxvb3IoMUU4Kk1hdGgucmFuZG9tKCkpO3ZhciBlLGc7dHJ5e2U9YS5vd25lckRvY3VtZW50LGc9ZS5kZWZhdWx0Vmlld3x8ZS5wYXJlbnRXaW5kb3d9Y2F0Y2gobCl7ZT1kb2N1bWVudCxnPXdpbmRvd31nW2RdPWM7Zi50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7YSYmYS5pbnNlcnRCZWZvcmUoZixhLmNoaWxkTm9kZXNbMF18fG51bGwpO2Yuc3JjPVwiaHR0cHM6Ly96Lm1vYXRhZHMuY29tL1wiK2grXCIvbW9hdHZpZGVvLmpzI1wiK2Q7cmV0dXJuIGN9O1xuICAgICAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBudWxsO1xuICAgICAgaWYgKHJlc3BvbnNlLmFkcyAmJiByZXNwb25zZS5hZHMubGVuZ3RoID4gMCAmJiByZXNwb25zZS5hZHNbMF0uaW5MaW5lICYmIHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdCkge1xuICAgIFx0ICB2YXIgaWRzID0ge2xldmVsMTogcmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmFkdmlkLFxuICAgIFx0XHRcdCAgICAgbGV2ZWwyOiByZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3BnaWQsXG4gICAgXHRcdFx0ICAgICBsZXZlbDM6IHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5jcGlkLFxuICAgIFx0XHRcdCAgICAgbGV2ZWw0OiByZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3JpZH07XG4gICAgXHQgIGlmIChyZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuc2l0ZV9pZCkge1xuICAgIFx0XHQgIGlkcy5zbGljZXIxID0gcmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LnNpdGVfaWQ7XG4gICAgXHQgIH1cbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBpbml0TW9hdFRyYWNraW5nKHBsYXllci5lbF8sIGlkcywgcGxheWVyLmR1cmF0aW9uKCksIHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5wYXJ0bmVyY29kZSwgcGxheWVyLmN1cnJlbnRTb3VyY2UoKS5zcmMpO1xuICAgIFx0ICAvL3dpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gaW5pdE1vYXRUcmFja2luZyhwbGF5ZXIuZWxfLCBpZHMsIHBsYXllci5kdXJhdGlvbigpLCAnbmluZW1lZGlhdnBhaWQ3ODk2MTE2NCcsIHBsYXllci5jdXJyZW50U291cmNlKCkuc3JjKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcpIHtcbiAgICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nLmluaXQod2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eS5jb250ZXh0SWQsIFxuICAgIFx0XHRcdCAgcGxheWVyLmR1cmF0aW9uKCksIHBsYXllci5lbF8ub2Zmc2V0V2lkdGgsIHBsYXllci5lbF8ub2Zmc2V0SGVpZ2h0KTtcbiAgICAgIH0qL1xuICAgICAgXG4gICAgICBsb2dnZXIuZGVidWcgKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZC9wbGF5QWQ+IGdvdCBwbGF5aW5nIGV2ZW50OyB0cmlnZ2VyaW5nIHZhc3QuYWRTdGFydC4uLlwiKTtcblxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xuXG4gICAgICBpZiAodXRpbGl0aWVzLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAvLyBWSURMQS0yMzM2IChzaW11bGF0ZSB1c2VyIGFjdGl2aXR5IHRvIG1ha2Ugc3VyZSBjb250cm9sLWJhciBpcyB2aXNpYmxlIG9uIG1vYmlsZSBkZXZpY2VzKVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFx0XHRwbGF5ZXIudXNlckFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICBcdH0sIGkgKiAyMDAwKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWaWRlb1N0YXJ0JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJvY2VlZCk7XG4gICAgICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgcHJvY2VlZCk7XG4gICAgICBwbGF5ZXIub24oJ3Zhc3QuYWRTa2lwJywgcHJvY2VlZCk7XG5cbiAgICAgIGZ1bmN0aW9uIHByb2NlZWQoZXZ0KSB7XG5cbiAgICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJykge1xuICAgICAgICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxuICAgICAgICAgICAgICAvLyBhdm9pZHMgaXNzdWVzIHdoZXJlIElPUyBjb250cm9scyBjb3VsZCBza2lwIHRoZSBBZFxuICAgICAgICAgICAgXHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5icmVha0R1cmF0aW9uKSB7XG4gICAgICAgICAgICBcdFx0aWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MucmVhbFZpZGVvRHVyYXRpb24pIHtcbiAgICAgICAgICAgIFx0XHQgICAgaWYgKCh3aW5kb3cuX21vbFNldHRpbmdzLnJlYWxWaWRlb0R1cmF0aW9uIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpID4gMykge1xuICAgICAgICAgICAgXHRcdCAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXHRcdCAgICB9XG4gICAgICAgICAgICBcdFx0fVxuICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICBcdGVsc2UgaWYgKChwbGF5ZXIuZHVyYXRpb24oKSAtIHBsYXllci5jdXJyZW50VGltZSgpKSA+IDMpIHtcbiAgICBcdFx0XHRcdHJldHVybjtcbiAgICBcdFx0XHR9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLyppZihldnQudHlwZSA9PT0gJ2VuZGVkJyAmJiAocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPiAzICkge1xuICAgICAgICAgIC8vIElnbm9yZSBlbmRlZCBldmVudCBpZiB0aGUgQWQgdGltZSB3YXMgbm90ICduZWFyJyB0aGUgZW5kXG4gICAgICAgICAgLy8gYXZvaWRzIGlzc3VlcyB3aGVyZSBJT1MgY29udHJvbHMgY291bGQgc2tpcCB0aGUgQWRcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHBsYXllci5vZmYoJ2VuZGVkJywgcHJvY2VlZCk7XG4gICAgICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgcHJvY2VlZCk7XG4gICAgICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRTa2lwJywgcHJvY2VlZCk7XG5cbiAgICAgICAgLy9OT1RFOiBpZiB0aGUgYWRzIGdldCBjYW5jZWwgd2UgZG8gbm90aGluZyBhcGFydCByZW1vdmluZyB0aGUgbGlzdG5lcnNcbiAgICAgICAgaWYoZXZ0LnR5cGUgPT09ICdlbmRlZCcgfHwgZXZ0LnR5cGUgPT09ICd2YXN0LmFkU2tpcCcpe1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9nZ2VyLmRlYnVnIChcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQvcGxheUFkPiBjYWxsaW5nIHBsYXllci5wbGF5KCkuLi5cIik7XG5cbiAgICBwbGF5ZXIucGxheSgpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSkge1xuICB2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3IuY29kZSB8fCA5MDB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVEludGVncmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbi8vdmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG53aW5kb3cuSW5MaW5lX19BID0gSW5MaW5lO1xuZnVuY3Rpb24gVkFTVFJlc3BvbnNlKCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHJldHVybiBuZXcgVkFTVFJlc3BvbnNlKCk7XG4gIH1cblxuICB0aGlzLl9saW5lYXJBZGRlZCA9IGZhbHNlO1xuICB0aGlzLnZhc3RWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB0aGlzLmFkcyA9IFtdO1xuICB0aGlzLmVycm9yVVJMTWFjcm9zID0gW107XG4gIHRoaXMuaW1wcmVzc2lvbnMgPSBbXTtcbiAgdGhpcy5jbGlja1RyYWNraW5ncyA9IFtdO1xuICB0aGlzLmN1c3RvbUNsaWNrcyA9IFtdO1xuICB0aGlzLnRyYWNraW5nRXZlbnRzID0ge307XG4gIHRoaXMubWVkaWFGaWxlcyA9IFtdO1xuICB0aGlzLmNsaWNrVGhyb3VnaCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5hZFRpdGxlID0gJyc7XG4gIHRoaXMuZHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gIHRoaXMuc2tpcG9mZnNldCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5pY29ucyA9IFtdO1xufVxuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLmFkZEFkID0gZnVuY3Rpb24gKGFkKSB7XG4gIHZhciBpbkxpbmUsIHdyYXBwZXI7XG4gIGlmIChhZCBpbnN0YW5jZW9mIEFkKSB7XG4gICAgaW5MaW5lID0gYWQuaW5MaW5lO1xuICAgIHdyYXBwZXIgPSBhZC53cmFwcGVyO1xuXG4gICAgdGhpcy5hZHMucHVzaChhZCk7XG5cbiAgICBpZiAoaW5MaW5lKSB7XG4gICAgICB0aGlzLl9hZGRJbkxpbmUoaW5MaW5lKTtcbiAgICB9XG5cbiAgICBpZiAod3JhcHBlcikge1xuICAgICAgdGhpcy5fYWRkV3JhcHBlcih3cmFwcGVyKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRXJyb3JUcmFja1VybCA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHQgIHZhciBlcnJvclVSTCA9IGVycm9yIGluc3RhbmNlb2YgeG1sLkpYT05UcmVlID8geG1sLmtleVZhbHVlKGVycm9yKSA6IGVycm9yO1xuXHQgIGlmIChlcnJvclVSTCkge1xuXHQgICAgdGhpcy5lcnJvclVSTE1hY3Jvcy5wdXNoKGVycm9yVVJMKTtcblx0ICB9XG5cdH07Ki9cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEVycm9yVHJhY2tVcmxzID0gZnVuY3Rpb24gKGVycm9ycykge1xuXHQgIHV0aWxpdGllcy5pc0FycmF5KGVycm9ycykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmVycm9yVVJMTWFjcm9zLCBlcnJvcnMpO1xuXHR9O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJbXByZXNzaW9ucyA9IGZ1bmN0aW9uIChpbXByZXNzaW9ucykge1xuICB1dGlsaXRpZXMuaXNBcnJheShpbXByZXNzaW9ucykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmltcHJlc3Npb25zLCBpbXByZXNzaW9ucyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2ggPSBmdW5jdGlvbiAoY2xpY2tUaHJvdWdoKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjbGlja1Rocm91Z2gpKSB7XG4gICAgdGhpcy5jbGlja1Rocm91Z2ggPSBjbGlja1Rocm91Z2g7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZENsaWNrVHJhY2tpbmdzID0gZnVuY3Rpb24gKGNsaWNrVHJhY2tpbmdzKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGNsaWNrVHJhY2tpbmdzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuY2xpY2tUcmFja2luZ3MsIGNsaWNrVHJhY2tpbmdzKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEN1c3RvbUNsaWNrcyA9IGZ1bmN0aW9uIChjdXN0b21DbGlja3MpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoY3VzdG9tQ2xpY2tzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuY3VzdG9tQ2xpY2tzLCBjdXN0b21DbGlja3MpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVHJhY2tpbmdFdmVudHMgPSBmdW5jdGlvbiAodHJhY2tpbmdFdmVudHMpIHtcbiAgdmFyIGV2ZW50c01hcCA9IHRoaXMudHJhY2tpbmdFdmVudHM7XG5cbiAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XG4gICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdFdmVudCkge1xuICAgICAgaWYgKCFldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSkge1xuICAgICAgICBldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0ucHVzaCh0cmFja2luZ0V2ZW50KTtcbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHRpdGxlKSkge1xuICAgIHRoaXMuYWRUaXRsZSA9IHRpdGxlO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGREdXJhdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGR1cmF0aW9uKSkge1xuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVmlkZW9DbGlja3MgPSBmdW5jdGlvbiAodmlkZW9DbGlja3MpIHtcbiAgaWYgKHZpZGVvQ2xpY2tzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpIHtcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2godmlkZW9DbGlja3MuY2xpY2tUaHJvdWdoKTtcbiAgICB0aGlzLl9hZGRDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrcy5jbGlja1RyYWNraW5ncyk7XG4gICAgdGhpcy5fYWRkQ3VzdG9tQ2xpY2tzKHZpZGVvQ2xpY2tzLmN1c3RvbUNsaWNrcyk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZE1lZGlhRmlsZXMgPSBmdW5jdGlvbiAobWVkaWFGaWxlcykge1xuICB1dGlsaXRpZXMuaXNBcnJheShtZWRpYUZpbGVzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMubWVkaWFGaWxlcywgbWVkaWFGaWxlcyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRTa2lwb2Zmc2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuXHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlKSB7XG5cdFx0ICBpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUuZW5hYmxlZCkge1xuXHRcdFx0ICBpZiAoIXRoaXMuZHVyYXRpb24gfHwgIXdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLnZpZGVvVGhyZXNob2xkIHx8IHRoaXMuZHVyYXRpb24gPj0gd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQpIHtcblx0XHRcdFx0ICB0aGlzLnNraXBvZmZzZXQgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS52aWRlb09mZnNldDtcblx0XHRcdCAgfVxuXHRcdCAgfVxuXHQgIH1cblx0ICBlbHNlIGlmIChvZmZzZXQpIHtcblx0ICAgIHRoaXMuc2tpcG9mZnNldCA9IG9mZnNldDtcblx0ICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRBZFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoYWRQYXJhbWV0ZXJzKSB7XG4gIGlmIChhZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLmFkUGFyYW1ldGVycyA9IGFkUGFyYW1ldGVycztcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSWNvbnMgPSBmdW5jdGlvbiAoaWNvbnMpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoaWNvbnMpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5pY29ucywgaWNvbnMpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkTGluZWFyID0gZnVuY3Rpb24gKGxpbmVhcikge1xuICBpZiAobGluZWFyIGluc3RhbmNlb2YgTGluZWFyKSB7XG4gICAgdGhpcy5fYWRkRHVyYXRpb24obGluZWFyLmR1cmF0aW9uKTtcbiAgICB0aGlzLl9hZGRUcmFja2luZ0V2ZW50cyhsaW5lYXIudHJhY2tpbmdFdmVudHMpO1xuICAgIHRoaXMuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XG4gICAgdGhpcy5fYWRkTWVkaWFGaWxlcyhsaW5lYXIubWVkaWFGaWxlcyk7XG4gICAgdGhpcy5fYWRkU2tpcG9mZnNldChsaW5lYXIuc2tpcG9mZnNldCk7XG4gICAgdGhpcy5fYWRkQWRQYXJhbWV0ZXJzKGxpbmVhci5hZFBhcmFtZXRlcnMpO1xuICAgIHRoaXMuX2FkZEljb25zKGxpbmVhci5pY29ucyk7XG4gICAgdGhpcy5fbGluZWFyQWRkZWQgPSB0cnVlO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJbkxpbmUgPSBmdW5jdGlvbiAoaW5MaW5lKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBpZiAoaW5MaW5lIGluc3RhbmNlb2YgSW5MaW5lKSB7XG4gICAgdGhpcy5fYWRkVGl0bGUoaW5MaW5lLmFkVGl0bGUpO1xuICAgIHRoaXMuX2FkZEVycm9yVHJhY2tVcmxzKGluTGluZS5lcnJvcnMpO1xuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKGluTGluZS5pbXByZXNzaW9ucyk7XG5cbiAgICBpbkxpbmUuY3JlYXRpdmVzLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XG4gICAgICBpZiAoY3JlYXRpdmUubGluZWFyKSB7XG4gICAgICAgIHRoYXQuX2FkZExpbmVhcihjcmVhdGl2ZS5saW5lYXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRXcmFwcGVyID0gZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGlmICh3cmFwcGVyIGluc3RhbmNlb2YgV3JhcHBlcikge1xuICAgIHRoaXMuX2FkZEVycm9yVHJhY2tVcmxzKHdyYXBwZXIuZXJyb3JzKTtcbiAgICB0aGlzLl9hZGRJbXByZXNzaW9ucyh3cmFwcGVyLmltcHJlc3Npb25zKTtcblxuICAgIHdyYXBwZXIuY3JlYXRpdmVzLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XG4gICAgICB2YXIgbGluZWFyID0gY3JlYXRpdmUubGluZWFyO1xuICAgICAgaWYgKGxpbmVhcikge1xuICAgICAgICB0aGF0Ll9hZGRWaWRlb0NsaWNrcyhsaW5lYXIudmlkZW9DbGlja3MpO1xuICAgICAgICB0aGF0LmNsaWNrVGhyb3VnaCA9IHVuZGVmaW5lZDsvL1dlIGVuc3VyZSB0aGF0IG5vIGNsaWNrVGhyb3VnaCBoYXMgYmVlbiBhZGRlZFxuICAgICAgICB0aGF0Ll9hZGRUcmFja2luZ0V2ZW50cyhsaW5lYXIudHJhY2tpbmdFdmVudHMpO1xuICAgICAgICB0aGF0Ll9hZGRJY29ucyhsaW5lYXIuaWNvbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLmhhc0xpbmVhciA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLl9saW5lYXJBZGRlZDtcbn07XG5cbmZ1bmN0aW9uIGFwcGVuZFRvQXJyYXkoYXJyYXksIGl0ZW1zKSB7XG4gIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RSZXNwb25zZTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVFRyYWNrZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUVHJhY2tlcihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcbiAgfVxuXG4gIHRoaXMuc2FuaXR5Q2hlY2soYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XG4gIHRoaXMuaW5pdGlhbGl6ZShhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcblxufVxuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcbiAgdGhpcy5yZXNwb25zZSA9IHZhc3RSZXNwb25zZTtcbiAgdGhpcy5hc3NldFVSSSA9IGFzc2V0VVJJO1xuICB0aGlzLnByb2dyZXNzID0gMDtcbiAgdGhpcy5xdWFydGlsZXMgPSB7XG4gICAgZmlyc3RRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDI1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXG4gICAgbWlkcG9pbnQ6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCg1MCAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9LFxuICAgIHRoaXJkUXVhcnRpbGU6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCg3NSAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9XG4gIH07XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuc2FuaXR5Q2hlY2sgPSBmdW5jdGlvbihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKGFzc2V0VVJJKSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyhhc3NldFVSSSkpIHtcbiAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWQVNUVHJhY2tlciBjb25zdHJ1Y3RvciwgbWlzc2luZyByZXF1aXJlZCB0aGUgVVJJIG9mIHRoZSBhZCBhc3NldCBiZWluZyBwbGF5ZWQnKTtcbiAgfVxuXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWQVNUVHJhY2tlciBjb25zdHJ1Y3RvciwgbWlzc2luZyByZXF1aXJlZCBWQVNUIHJlc3BvbnNlJyk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja1VSTHMgPSBmdW5jdGlvbiB0cmFja1VSTHModXJscywgdmFyaWFibGVzKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNBcnJheSh1cmxzKSAmJiB1cmxzLmxlbmd0aCA+IDApIHtcbiAgICB2YXJpYWJsZXMgPSB1dGlsaXRpZXMuZXh0ZW5kKHtcbiAgICAgIEFTU0VUVVJJOiB0aGlzLmFzc2V0VVJJLFxuICAgICAgQ09OVEVOVFBMQVlIRUFEOiB2YXN0VXRpbC5mb3JtYXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKVxuICAgIH0sIHZhcmlhYmxlcyB8fCB7fSk7XG5cbiAgICB2YXN0VXRpbC50cmFjayh1cmxzLCB2YXJpYWJsZXMpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFdmVudCA9IGZ1bmN0aW9uIHRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UpIHtcbiAgICBpZiAodGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZykge1xuICAgIFx0ICB3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcuaW52b2tlRXZlbnQoZXZlbnROYW1lKTtcbiAgICB9XG4gIHRoaXMudHJhY2tVUkxzKGdldEV2ZW50VXJpcyh0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0pKTtcbiAgaWYgKHRyYWNrT25jZSkge1xuICAgIHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiBnZXRFdmVudFVyaXModHJhY2tpbmdFdmVudHMpIHtcbiAgICB2YXIgdXJpcztcblxuICAgIGlmICh0cmFja2luZ0V2ZW50cykge1xuICAgICAgdXJpcyA9IFtdO1xuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoIWV2ZW50LnVyaSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXJpcy5wdXNoKGV2ZW50LnVyaSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHVyaXM7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja1Byb2dyZXNzID0gZnVuY3Rpb24gdHJhY2tQcm9ncmVzcyhuZXdQcm9ncmVzc0luTXMpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgZXZlbnRzID0gW107XG4gIHZhciBPTkNFID0gdHJ1ZTtcbiAgdmFyIEFMV0FZUyA9IGZhbHNlO1xuICB2YXIgdHJhY2tpbmdFdmVudHMgPSB0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzO1xuXG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIobmV3UHJvZ3Jlc3NJbk1zKSkge1xuICAgIGFkZFRyYWNrRXZlbnQoJ3N0YXJ0JywgT05DRSwgbmV3UHJvZ3Jlc3NJbk1zID4gMCk7XG4gICAgYWRkVHJhY2tFdmVudCgncmV3aW5kJywgQUxXQVlTLCBoYXNSZXdvdW5kKHRoaXMucHJvZ3Jlc3MsIG5ld1Byb2dyZXNzSW5NcykpO1xuICAgIGFkZFF1YXJ0aWxlRXZlbnRzKG5ld1Byb2dyZXNzSW5Ncyk7XG4gICAgdHJhY2tQcm9ncmVzc0V2ZW50cyhuZXdQcm9ncmVzc0luTXMpO1xuICAgIHRyYWNrRXZlbnRzKCk7XG4gICAgdGhpcy5wcm9ncmVzcyA9IG5ld1Byb2dyZXNzSW5NcztcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiBoYXNSZXdvdW5kKGN1cnJlbnRQcm9ncmVzcywgbmV3UHJvZ3Jlc3MpIHtcbiAgICB2YXIgUkVXSU5EX1RIUkVTSE9MRCA9IDMwMDA7IC8vSU9TIHZpZGVvIGNsb2NrIGlzIHZlcnkgdW5yZWxpYWJsZSBhbmQgd2UgbmVlZCBhIDMgc2Vjb25kcyB0aHJlc2hvbGQgdG8gZW5zdXJlIHRoYXQgdGhlcmUgd2FzIGEgcmV3aW5kIGFuIHRoYXQgaXQgd2FzIG9uIHB1cnBvc2UuXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9ncmVzcyA+IG5ld1Byb2dyZXNzSW5NcyAmJiBNYXRoLmFicyhuZXdQcm9ncmVzcyAtIGN1cnJlbnRQcm9ncmVzcykgPiBSRVdJTkRfVEhSRVNIT0xEO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVHJhY2tFdmVudChldmVudE5hbWUsIHRyYWNrT25jZSwgY2FuQmVBZGRlZCkge1xuICAgIGlmICh0cmFja2luZ0V2ZW50c1tldmVudE5hbWVdICYmIGNhbkJlQWRkZWQpIHtcbiAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgbmFtZTogZXZlbnROYW1lLFxuICAgICAgICB0cmFja09uY2U6ICEhdHJhY2tPbmNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRRdWFydGlsZUV2ZW50cyhwcm9ncmVzcykge1xuICAgIHZhciBxdWFydGlsZXMgPSB0aGF0LnF1YXJ0aWxlcztcbiAgICB2YXIgZmlyc3RRdWFydGlsZSA9IHRoYXQucXVhcnRpbGVzLmZpcnN0UXVhcnRpbGU7XG4gICAgdmFyIG1pZHBvaW50ID0gdGhhdC5xdWFydGlsZXMubWlkcG9pbnQ7XG4gICAgdmFyIHRoaXJkUXVhcnRpbGUgPSB0aGF0LnF1YXJ0aWxlcy50aGlyZFF1YXJ0aWxlO1xuXG4gICAgaWYgKCFmaXJzdFF1YXJ0aWxlLnRyYWNrZWQpIHtcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ2ZpcnN0UXVhcnRpbGUnLCBwcm9ncmVzcyk7XG4gICAgfSBlbHNlIGlmICghbWlkcG9pbnQudHJhY2tlZCkge1xuICAgICAgdHJhY2tRdWFydGlsZSgnbWlkcG9pbnQnLCBwcm9ncmVzcyk7XG4gICAgfSBlbHNlIGlmICghdGhpcmRRdWFydGlsZS50cmFja2VkKXtcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ3RoaXJkUXVhcnRpbGUnLCBwcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gICAgZnVuY3Rpb24gdHJhY2tRdWFydGlsZShxdWFydGlsZU5hbWUsIHByb2dyZXNzKXtcbiAgICAgIHZhciBxdWFydGlsZSA9IHF1YXJ0aWxlc1txdWFydGlsZU5hbWVdO1xuICAgICAgaWYoY2FuQmVUcmFja2VkKHF1YXJ0aWxlLCBwcm9ncmVzcykpe1xuICAgICAgICBxdWFydGlsZS50cmFja2VkID0gdHJ1ZTtcbiAgICAgICAgYWRkVHJhY2tFdmVudChxdWFydGlsZU5hbWUsIE9OQ0UsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkJlVHJhY2tlZChxdWFydGlsZSwgcHJvZ3Jlc3MpIHtcbiAgICB2YXIgcXVhcnRpbGVUaW1lID0gcXVhcnRpbGUudGltZTtcbiAgICAvL1dlIG9ubHkgZmlyZSB0aGUgcXVhcnRpbGUgZXZlbnQgaWYgdGhlIHByb2dyZXNzIGlzIGJpZ2dlciB0aGFuIHRoZSBxdWFydGlsZSB0aW1lIGJ5IDUgc2Vjb25kcyBhdCBtb3N0LlxuICAgIHJldHVybiBwcm9ncmVzcyA+PSBxdWFydGlsZVRpbWUgJiYgcHJvZ3Jlc3MgPD0gKHF1YXJ0aWxlVGltZSArIDUwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tQcm9ncmVzc0V2ZW50cyhwcm9ncmVzcykge1xuICAgIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MpKSB7XG4gICAgICByZXR1cm47IC8vTm90aGluZyB0byB0cmFja1xuICAgIH1cblxuICAgIHZhciBwZW5kaW5nUHJvZ3Jlc3NFdnRzID0gW107XG5cbiAgICB0cmFja2luZ0V2ZW50cy5wcm9ncmVzcy5mb3JFYWNoKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChldnQub2Zmc2V0IDw9IHByb2dyZXNzKSB7XG4gICAgICAgIHRoYXQudHJhY2tVUkxzKFtldnQudXJpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZW5kaW5nUHJvZ3Jlc3NFdnRzLnB1c2goZXZ0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0cmFja2luZ0V2ZW50cy5wcm9ncmVzcyA9IHBlbmRpbmdQcm9ncmVzc0V2dHM7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0V2ZW50cygpIHtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHRoYXQudHJhY2tFdmVudChldmVudC5uYW1lLCBldmVudC50cmFja09uY2UpO1xuICAgIH0pO1xuICB9XG59O1xuXG5bXG4gICdyZXdpbmQnLFxuICAnZnVsbHNjcmVlbicsXG4gICdleGl0RnVsbHNjcmVlbicsXG4gICdwYXVzZScsXG4gICdyZXN1bWUnLFxuICAnbXV0ZScsXG4gICd1bm11dGUnLFxuICAnYWNjZXB0SW52aXRhdGlvbicsXG4gICdhY2NlcHRJbnZpdGF0aW9uTGluZWFyJyxcbiAgJ2NvbGxhcHNlJyxcbiAgJ2V4cGFuZCdcbl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShldmVudE5hbWUpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUpO1xuICAgIH07XG4gIH0pO1xuXG5bXG4gICdzdGFydCcsXG4gICdza2lwJyxcbiAgJ2Nsb3NlJyxcbiAgJ2Nsb3NlTGluZWFyJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKGV2ZW50TmFtZSldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmFja0V2ZW50KGV2ZW50TmFtZSwgdHJ1ZSk7XG4gICAgfTtcbiAgfSk7XG5cbltcbiAgJ2ZpcnN0UXVhcnRpbGUnLFxuICAnbWlkcG9pbnQnLFxuICAndGhpcmRRdWFydGlsZSdcbl0uZm9yRWFjaChmdW5jdGlvbiAocXVhcnRpbGUpIHtcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKHF1YXJ0aWxlKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnF1YXJ0aWxlc1txdWFydGlsZV0udHJhY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLnRyYWNrRXZlbnQocXVhcnRpbGUsIHRydWUpO1xuICAgIH07XG4gIH0pO1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYodGhpcy5xdWFydGlsZXMudGhpcmRRdWFydGlsZS50cmFja2VkKXtcbiAgICB0aGlzLnRyYWNrRXZlbnQoJ2NvbXBsZXRlJywgdHJ1ZSk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0Vycm9yV2l0aENvZGUgPSBmdW5jdGlvbiB0cmFja0Vycm9yV2l0aENvZGUoZXJyb3Jjb2RlKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIoZXJyb3Jjb2RlKSkge1xuICAgIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yY29kZX0pO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tJbXByZXNzaW9ucyA9IGZ1bmN0aW9uIHRyYWNrSW1wcmVzc2lvbnMoKSB7XG4gIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuaW1wcmVzc2lvbnMpO1xufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ3JlYXRpdmVWaWV3ID0gZnVuY3Rpb24gdHJhY2tDcmVhdGl2ZVZpZXcoKSB7XG4gIHRoaXMudHJhY2tFdmVudCgnY3JlYXRpdmVWaWV3Jyk7XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDbGljayA9IGZ1bmN0aW9uIHRyYWNrQ2xpY2soKSB7XG4gICAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZykge1xuICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nLmludm9rZUV2ZW50KCdhZC1jbGljaycpO1xuICAgIH1cbiAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5jbGlja1RyYWNraW5ncyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RUcmFja2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBWZXJpZmljYXRpb24odmVyaWZpY2F0aW9uSlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgVmVyaWZpY2F0aW9uKSkge1xuICAgIHJldHVybiBuZXcgVmVyaWZpY2F0aW9uKHZlcmlmaWNhdGlvbkpUcmVlKTtcbiAgfVxuXG4gIHRoaXMudmVuZG9yID0gdmVyaWZpY2F0aW9uSlRyZWUuYXR0cigndmVuZG9yJyk7XG4gIGlmICh2ZXJpZmljYXRpb25KVHJlZS5qYXZhU2NyaXB0UmVzb3VyY2UpIHtcblx0ICB0aGlzLmphdmFTY3JpcHRSZXNvdXJjZXMgPSBwYXJzZVJlc291cmNlcyh2ZXJpZmljYXRpb25KVHJlZS5qYXZhU2NyaXB0UmVzb3VyY2UpO1xuICB9XG4gIGlmICh2YXN0VXRpbC5pc0ZsYXNoU3VwcG9ydGVkKCkgJiYgdmVyaWZpY2F0aW9uSlRyZWUuZmxhc2hSZXNvdXJjZSkge1xuXHQgIHRoaXMuamF2YVNjcmlwdFJlc291cmNlcyA9IHBhcnNlUmVzb3VyY2VzKHZlcmlmaWNhdGlvbkpUcmVlLmphdmFTY3JpcHRSZXNvdXJjZSk7XG4gIH1cbiAgaWYgKHZlcmlmaWNhdGlvbkpUcmVlLnZpZXdhYmxlSW1wcmVzc2lvbikge1xuXHQgIHRoaXMudmlld2FibGVJbXByZXNzaW9uID0ge2lkOiB2ZXJpZmljYXRpb25KVHJlZS52aWV3YWJsZUltcHJlc3Npb24uYXR0cignaWQnKSwgdXJpOiB4bWwua2V5VmFsdWUodmVyaWZpY2F0aW9uSlRyZWUudmlld2FibGVJbXByZXNzaW9uKX07XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHBhcnNlUmVzb3VyY2VzKHJlc291cmNlcykge1xuXHQgIHZhciBhcnIgPSBbXTtcblx0ICB2YXIgYXJyRGF0YTtcblx0ICBpZiAocmVzb3VyY2VzKSB7XG5cdFx0ICBhcnJEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkocmVzb3VyY2VzKSA/IHJlc291cmNlcyA6IFtyZXNvdXJjZXNdO1xuXHRcdCAgYXJyRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHQgIGFyci5wdXNoKHthcGlGcmFtZXdvcms6IGVsZW0uYXR0cignYXBpRnJhbWV3b3JrJyksIHVyaTogeG1sLmtleVZhbHVlKGVsZW0pfSk7XG5cdFx0ICB9KTtcblx0ICB9XG5cdCAgcmV0dXJuIGFycjtcbiAgfVxufVxuXG5WZXJpZmljYXRpb24ucGFyc2VBZFZlcmlmaWNhdGlvbnMgPSBmdW5jdGlvbiBwYXJzZUFkVmVyaWZpY2F0aW9ucyh2ZXJpZmljYXRpb25zSlRyZWUpIHtcbiAgdmFyIHZlcmlmaWNhdGlvbnMgPSBbXTtcbiAgdmFyIHZlcmlmaWNhdGlvbnNEYXRhO1xuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh2ZXJpZmljYXRpb25zSlRyZWUpICYmIHV0aWxpdGllcy5pc0RlZmluZWQodmVyaWZpY2F0aW9uc0pUcmVlLnZlcmlmaWNhdGlvbikpIHtcblx0ICB2ZXJpZmljYXRpb25zRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KHZlcmlmaWNhdGlvbnNKVHJlZS52ZXJpZmljYXRpb24pID8gdmVyaWZpY2F0aW9uc0pUcmVlLnZlcmlmaWNhdGlvbiA6IFt2ZXJpZmljYXRpb25zSlRyZWUudmVyaWZpY2F0aW9uXTtcblx0ICB2ZXJpZmljYXRpb25zRGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh2ZXJpZmljYXRpb24pIHtcbiAgICBcdHZlcmlmaWNhdGlvbnMucHVzaChuZXcgVmVyaWZpY2F0aW9uKHZlcmlmaWNhdGlvbikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB2ZXJpZmljYXRpb25zO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZXJpZmljYXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIFZpZGVvQ2xpY2tzKHZpZGVvQ2xpY2tKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpKSB7XG4gICAgcmV0dXJuIG5ldyBWaWRlb0NsaWNrcyh2aWRlb0NsaWNrSlRyZWUpO1xuICB9XG5cbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUodmlkZW9DbGlja0pUcmVlLmNsaWNrVGhyb3VnaCk7XG4gIHRoaXMuY2xpY2tUcmFja2luZ3MgPSBwYXJzZUNsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1RyYWNraW5nKTtcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBwYXJzZUNsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tKVHJlZS5jdXN0b21DbGljayk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZUNsaWNrVHJhY2tpbmdzKHRyYWNraW5nRGF0YSkge1xuICAgIHZhciBjbGlja1RyYWNraW5ncyA9IFtdO1xuICAgIGlmICh0cmFja2luZ0RhdGEpIHtcbiAgICAgIHRyYWNraW5nRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRGF0YSkgPyB0cmFja2luZ0RhdGEgOiBbdHJhY2tpbmdEYXRhXTtcbiAgICAgIHRyYWNraW5nRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChjbGlja1RyYWNraW5nRGF0YSkge1xuICAgICAgICBjbGlja1RyYWNraW5ncy5wdXNoKHhtbC5rZXlWYWx1ZShjbGlja1RyYWNraW5nRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjbGlja1RyYWNraW5ncztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZGVvQ2xpY2tzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVmlld2FibGVJbXByZXNzaW9uKHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlKSB7XG5cdCAgaWYoISh0aGlzIGluc3RhbmNlb2YgVmlld2FibGVJbXByZXNzaW9uKSkge1xuXHQgICAgcmV0dXJuIG5ldyBWaWV3YWJsZUltcHJlc3Npb24odmlld2FibGVJbXByZXNzaW9uSlRyZWUpO1xuXHQgIH1cblxuXHQgIC8vT3B0aW9uYWwgRmllbGRzXG5cdCAgdGhpcy5pZCA9IHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlLmF0dHIoJ2lkJyk7XG5cdCAgaWYgKHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlLnZpZXdhYmxlKSB7XG5cdFx0ICB0aGlzLnZpZXdhYmxlcyA9IHBhcnNlVXJpQXJyYXkodmlld2FibGVJbXByZXNzaW9uSlRyZWUudmlld2FibGUpO1xuXHQgIH1cblx0ICBpZiAodmlld2FibGVJbXByZXNzaW9uSlRyZWUubm90Vmlld2FibGUpIHtcblx0XHQgIHRoaXMubm90Vmlld2FibGVzID0gcGFyc2VVcmlBcnJheSh2aWV3YWJsZUltcHJlc3Npb25KVHJlZS5ub3RWaWV3YWJsZSk7XG5cdCAgfVxuXHQgIGlmICh2aWV3YWJsZUltcHJlc3Npb25KVHJlZS52aWV3VW5kZXRlcm1pbmVkKSB7XG5cdFx0ICB0aGlzLnZpZXdVbmRldGVybWluZWRzID0gcGFyc2VVcmlBcnJheSh2aWV3YWJsZUltcHJlc3Npb25KVHJlZS52aWV3VW5kZXRlcm1pbmVkKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBwYXJzZVVyaUFycmF5KGFyckpUcmVlKSB7XG5cdFx0ICB2YXIgYXJyID0gW107XG5cdFx0ICB2YXIgYXJyRGF0YTtcblx0XHQgIGlmIChhcnJKVHJlZSkge1xuXHRcdFx0ICBhcnJEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkoYXJySlRyZWUpID8gYXJySlRyZWUgOiBbYXJySlRyZWVdO1xuXHRcdFx0ICBhcnJEYXRhLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdFx0ICBhcnIucHVzaCh4bWwua2V5VmFsdWUoZWxlbSkpO1xuXHRcdFx0ICB9KTtcblx0XHQgIH1cblx0XHQgIHJldHVybiBhcnI7XG5cdCB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlld2FibGVJbXByZXNzaW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG52YXIgQ3JlYXRpdmUgPSByZXF1aXJlKCcuL0NyZWF0aXZlJyk7XG52YXIgVmlld2FibGVJbXByZXNzaW9uID0gcmVxdWlyZSgnLi9WaWV3YWJsZUltcHJlc3Npb24nKTtcbnZhciBWZXJpZmljYXRpb24gPSByZXF1aXJlKCcuL1ZlcmlmaWNhdGlvbicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHdyYXBwZXJKVHJlZSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBXcmFwcGVyKSkge1xuICAgIHJldHVybiBuZXcgV3JhcHBlcih3cmFwcGVySlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBlbGVtZW50c1xuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5hZFN5c3RlbSk7XG4gIHRoaXMuaW1wcmVzc2lvbnMgPSB2YXN0VXRpbC5wYXJzZUltcHJlc3Npb25zKHdyYXBwZXJKVHJlZS5pbXByZXNzaW9uKTtcbiAgdGhpcy5WQVNUQWRUYWdVUkkgPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLnZBU1RBZFRhZ1VSSSk7XG5cbiAgLy9PcHRpb25hbCBlbGVtZW50c1xuICB0aGlzLmNyZWF0aXZlcyA9IENyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzKHdyYXBwZXJKVHJlZS5jcmVhdGl2ZXMpO1xuICAvL3RoaXMuZXJyb3IgPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLmVycm9yKTtcbiAgdGhpcy5lcnJvcnMgPSB2YXN0VXRpbC5wYXJzZUVycm9ycyh3cmFwcGVySlRyZWUuZXJyb3IpO1xuICB0aGlzLmV4dGVuc2lvbnMgPSB3cmFwcGVySlRyZWUuZXh0ZW5zaW9ucztcblxuICAvL09wdGlvbmFsIGF0dHJzXG4gIHRoaXMuZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzID0gdXRpbGl0aWVzLmlzRGVmaW5lZCh4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMnKSk/IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycycpOiB0cnVlO1xuICB0aGlzLmFsbG93TXVsdGlwbGVBZHMgPSB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdhbGxvd011bHRpcGxlQWRzJyk7XG4gIHRoaXMuZmFsbGJhY2tPbk5vQWQgPSB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmYWxsYmFja09uTm9BZCcpO1xuXG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgaWYgKHdyYXBwZXJKVHJlZS52aWV3YWJsZUltcHJlc3Npb24pIHtcblx0XHQgIHRoaXMudmlld2FibGVJbXByZXNzaW9uID0gbmV3IFZpZXdhYmxlSW1wcmVzc2lvbih3cmFwcGVySlRyZWUudmlld2FibGVJbXByZXNzaW9uKTtcblx0ICB9XG5cdCAgaWYgKHdyYXBwZXJKVHJlZS5hZFZlcmlmaWNhdGlvbnMpIHtcblx0XHQgIHRoaXMuYWRWZXJpZmljYXRpb25zID0gVmVyaWZpY2F0aW9uLnBhcnNlQWRWZXJpZmljYXRpb25zKHdyYXBwZXJKVHJlZS5hZFZlcmlmaWNhdGlvbnMpO1xuXHQgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdyYXBwZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xuXG52YXIgcGFyc2VycyA9IHtcblxuICBkdXJhdGlvbjogZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvblN0cikge1xuXG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGR1cmF0aW9uU3RyKSkge1xuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBkdXJhdGlvbkluTXMgPSBwYXJzZUhvdXJzVG9NcyhtYXRjaFsxXSkgKyBwYXJzZU1pblRvTXMobWF0Y2hbMl0pICsgcGFyc2VTZWNUb01zKG1hdGNoWzNdKSArIHBhcnNlSW50KG1hdGNoWzVdIHx8IDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcblxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaG91clN0ciwgMTApICogNjAgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNaW5Ub01zKG1pblN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KG1pblN0ciwgMTApICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlU2VjVG9NcyhzZWNTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XG4gICAgfVxuICB9LFxuXG4gIG9mZnNldDogZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBkdXJhdGlvbikge1xuICAgIGlmKGlzUGVyY2VudGFnZShvZmZzZXQpKXtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2Vycy5kdXJhdGlvbihvZmZzZXQpO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKG9mZnNldCkge1xuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xuICAgICAgcmV0dXJuIHBlcmNlbnRhZ2VSZWdleC50ZXN0KG9mZnNldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGVyY2VudGFnZShwZXJjZW50U3RyLCBkdXJhdGlvbikge1xuICAgICAgaWYoZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhbGNQZXJjZW50KGR1cmF0aW9uLCBwYXJzZUZsb2F0KHBlcmNlbnRTdHIucmVwbGFjZSgnJScsICcnKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY1BlcmNlbnQocXVhbnRpdHksIHBlcmNlbnQpe1xuICAgICAgcmV0dXJuIHF1YW50aXR5ICogcGVyY2VudCAvIDEwMDtcbiAgICB9XG4gIH1cblxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlcnM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIFZQQUlESFRNTDVUZWNoID0gcmVxdWlyZSgnLi4vdnBhaWQvVlBBSURIVE1MNVRlY2gnKTtcblxudmFyIHZhc3RVdGlsID0ge1xuXG4gIHRyYWNrOiBmdW5jdGlvbiB0cmFjayhVUkxNYWNyb3MsIHZhcmlhYmxlcykge1xuICAgIHZhciBzb3VyY2VzID0gdmFzdFV0aWwucGFyc2VVUkxNYWNyb3MoVVJMTWFjcm9zLCB2YXJpYWJsZXMpO1xuICAgIHZhciB0cmFja0ltZ3MgPSBbXTtcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNyYykge1xuICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgIHRyYWNrSW1ncy5wdXNoKGltZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYWNrSW1ncztcbiAgfSxcblxuICBwYXJzZVVSTE1hY3JvczogZnVuY3Rpb24gcGFyc2VNYWNyb3MoVVJMTWFjcm9zLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgcGFyc2VkVVJMcyA9IFtdO1xuXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xuXG4gICAgaWYgKCEodmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdKSkge1xuICAgICAgdmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4wZSsxMCk7XG4gICAgfVxuXG4gICAgVVJMTWFjcm9zLmZvckVhY2goZnVuY3Rpb24gKFVSTE1hY3JvKSB7XG4gICAgICBwYXJzZWRVUkxzLnB1c2godmFzdFV0aWwuX3BhcnNlVVJMTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlZFVSTHM7XG4gIH0sXG5cbiAgcGFyc2VVUkxNYWNybzogZnVuY3Rpb24gcGFyc2VNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSB7XG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xuXG4gICAgaWYgKCEodmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdKSkge1xuICAgICAgdmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4wZSsxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpO1xuICB9LFxuXG4gIF9wYXJzZVVSTE1hY3JvOiBmdW5jdGlvbiBwYXJzZU1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpIHtcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XG5cbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh2YXJpYWJsZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBVUkxNYWNybyA9IFVSTE1hY3JvLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxbXCIgKyBrZXkgKyBcIlxcXFxcXF1cIiwgJ2dtJyksIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBVUkxNYWNybztcbiAgfSxcblxuICBwYXJzZUR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XG4gICAgdmFyIGR1cmF0aW9uUmVnZXggPSAvKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkoXFwuKFxcZFxcZFxcZCkpPy87XG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGR1cmF0aW9uU3RyKSkge1xuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBkdXJhdGlvbkluTXMgPSBwYXJzZUhvdXJzVG9NcyhtYXRjaFsxXSkgKyBwYXJzZU1pblRvTXMobWF0Y2hbMl0pICsgcGFyc2VTZWNUb01zKG1hdGNoWzNdKSArIHBhcnNlSW50KG1hdGNoWzVdIHx8IDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcblxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaG91clN0ciwgMTApICogNjAgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNaW5Ub01zKG1pblN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KG1pblN0ciwgMTApICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlU2VjVG9NcyhzZWNTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XG4gICAgfVxuICB9LFxuXG4gIHBhcnNlSW1wcmVzc2lvbnM6IGZ1bmN0aW9uIHBhcnNlSW1wcmVzc2lvbnMoaW1wcmVzc2lvbnMpIHtcblx0ICAgIGlmIChpbXByZXNzaW9ucykge1xuXHQgICAgICBpbXByZXNzaW9ucyA9IHV0aWxpdGllcy5pc0FycmF5KGltcHJlc3Npb25zKSA/IGltcHJlc3Npb25zIDogW2ltcHJlc3Npb25zXTtcblx0ICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheShpbXByZXNzaW9ucywgZnVuY3Rpb24gKGltcHJlc3Npb24pIHtcblx0ICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoaW1wcmVzc2lvbi5rZXlWYWx1ZSkpIHtcblx0ICAgICAgICAgIHJldHVybiBpbXByZXNzaW9uLmtleVZhbHVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBbXTtcblx0ICB9LFxuXG5cdCAgcGFyc2VFcnJvcnM6IGZ1bmN0aW9uIHBhcnNlRXJyb3JzKGVycm9ycykge1xuXHQgICAgaWYgKGVycm9ycykge1xuXHQgICAgXHRlcnJvcnMgPSB1dGlsaXRpZXMuaXNBcnJheShlcnJvcnMpID8gZXJyb3JzIDogW2Vycm9yc107XG5cdCAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkoZXJyb3JzLCBmdW5jdGlvbiAoZXJyb3IpIHtcblx0ICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoZXJyb3Iua2V5VmFsdWUpKSB7XG5cdCAgICAgICAgICByZXR1cm4gZXJyb3Iua2V5VmFsdWU7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIFtdO1xuXHQgIH0sXG5cbiAgLy9XZSBhc3N1bWUgdGhhdCB0aGUgcHJvZ3Jlc3MgaXMgZ29pbmcgdG8gYXJyaXZlIGluIG1pbGxpc2Vjb25kc1xuICBmb3JtYXRQcm9ncmVzczogZnVuY3Rpb24gZm9ybWF0UHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcbiAgICB2YXIgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcztcbiAgICBob3VycyA9IHByb2dyZXNzIC8gKDYwICogNjAgKiAxMDAwKTtcbiAgICBob3VycyA9IE1hdGguZmxvb3IoaG91cnMpO1xuICAgIG1pbnV0ZXMgPSAocHJvZ3Jlc3MgLyAoNjAgKiAxMDAwKSkgJSA2MDtcbiAgICBtaW51dGVzID0gTWF0aC5mbG9vcihtaW51dGVzKTtcbiAgICBzZWNvbmRzID0gKHByb2dyZXNzIC8gMTAwMCkgJSA2MDtcbiAgICBzZWNvbmRzID0gTWF0aC5mbG9vcihzZWNvbmRzKTtcbiAgICBtaWxsaXNlY29uZHMgPSBwcm9ncmVzcyAlIDEwMDA7XG4gICAgcmV0dXJuIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKGhvdXJzLCAyKSArICc6JyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKG1pbnV0ZXMsIDIpICsgJzonICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMoc2Vjb25kcywgMikgKyAnLicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhtaWxsaXNlY29uZHMsIDMpO1xuICB9LFxuXG4gIHBhcnNlT2Zmc2V0OiBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgaWYgKGlzUGVyY2VudGFnZShvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlUGVyY2VudGFnZShvZmZzZXQsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhc3RVdGlsLnBhcnNlRHVyYXRpb24ob2Zmc2V0KTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShvZmZzZXQpIHtcbiAgICAgIHZhciBwZXJjZW50YWdlUmVnZXggPSAvXlxcZCsoXFwuXFxkKyk/JSQvZztcbiAgICAgIHJldHVybiBwZXJjZW50YWdlUmVnZXgudGVzdChvZmZzZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVBlcmNlbnRhZ2UocGVyY2VudFN0ciwgZHVyYXRpb24pIHtcbiAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FsY1BlcmNlbnQoZHVyYXRpb24sIHBhcnNlRmxvYXQocGVyY2VudFN0ci5yZXBsYWNlKCclJywgJycpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjUGVyY2VudChxdWFudGl0eSwgcGVyY2VudCkge1xuICAgICAgcmV0dXJuIHF1YW50aXR5ICogcGVyY2VudCAvIDEwMDtcbiAgICB9XG4gIH0sXG5cblxuICAvL0xpc3Qgb2Ygc3VwcG9ydGVkIFZQQUlEIHRlY2hub2xvZ2llc1xuICBWUEFJRF90ZWNoczogW1xuICAgIC8vVlBBSURGbGFzaFRlY2gsXG4gICAgVlBBSURIVE1MNVRlY2hcbiAgXSxcblxuICBpc1ZQQUlEOiBmdW5jdGlvbiBpc1ZQQUlETWVkaWFGaWxlKG1lZGlhRmlsZSkge1xuICAgIHJldHVybiAhIW1lZGlhRmlsZSAmJiBtZWRpYUZpbGUuYXBpRnJhbWV3b3JrID09PSAnVlBBSUQnO1xuICB9LFxuXG4gIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2g6IGZ1bmN0aW9uIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2gobWltZVR5cGUpIHtcbiAgICB2YXIgaSwgbGVuLCBWUEFJRFRlY2g7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLlZQQUlEX3RlY2hzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBWUEFJRFRlY2ggPSB0aGlzLlZQQUlEX3RlY2hzW2ldO1xuICAgICAgaWYgKFZQQUlEVGVjaC5zdXBwb3J0cyhtaW1lVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIFZQQUlEVGVjaDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgaXNGbGFzaFN1cHBvcnRlZDogZnVuY3Rpb24gaXNGbGFzaFN1cHBvcnRlZCgpIHtcblx0ICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFzdFV0aWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlEQWRVbml0V3JhcHBlcikpIHtcbiAgICByZXR1cm4gbmV3IFZQQUlEQWRVbml0V3JhcHBlcih2cGFpZEFkVW5pdCwgb3B0cyk7XG4gIH1cbiAgc2FuaXR5Q2hlY2sodnBhaWRBZFVuaXQsIG9wdHMpO1xuXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxpdGllcy5leHRlbmQoe30sIG9wdHMpO1xuICB0aGlzLmFkU3RhcnRlZCA9IGZhbHNlO1xuXG4gIHRoaXMuX2FkVW5pdCA9IHZwYWlkQWRVbml0O1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRVbml0LCBvcHRzKSB7XG4gICAgaWYgKCFhZFVuaXQgfHwgIVZQQUlEQWRVbml0V3JhcHBlci5jaGVja1ZQQUlESW50ZXJmYWNlKGFkVW5pdCkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlEQWRVbml0V3JhcHBlciwgdGhlIHBhc3NlZCBWUEFJRCBhZFVuaXQgZG9lcyBub3QgZnVsbHkgaW1wbGVtZW50IHRoZSBWUEFJRCBpbnRlcmZhY2UnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc09iamVjdChvcHRzKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgZXhwZWN0ZWQgb3B0aW9ucyBoYXNoICBidXQgZ290ICdcIiArIG9wdHMgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKCEoXCJyZXNwb25zZVRpbWVvdXRcIiBpbiBvcHRzKSB8fCAhdXRpbGl0aWVzLmlzTnVtYmVyKG9wdHMucmVzcG9uc2VUaW1lb3V0KSApe1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgZXhwZWN0ZWQgcmVzcG9uc2VUaW1lb3V0IGluIG9wdGlvbnNcIik7XG4gICAgfVxuICB9XG59XG5cblZQQUlEQWRVbml0V3JhcHBlci5jaGVja1ZQQUlESW50ZXJmYWNlID0gZnVuY3Rpb24gY2hlY2tWUEFJREludGVyZmFjZShWUEFJREFkVW5pdCkge1xuICAvL05PVEU6IHNraXBBZCBpcyBub3QgcGFydCBvZiB0aGUgbWV0aG9kIGxpc3QgYmVjYXVzZSBpdCBvbmx5IGFwcGVhcnMgaW4gVlBBSUQgMi4wIGFuZCB3ZSBzdXBwb3J0IFZQQUlEIDEuMFxuICB2YXIgVlBBSURJbnRlcmZhY2VNZXRob2RzID0gW1xuICAgICdoYW5kc2hha2VWZXJzaW9uJywgJ2luaXRBZCcsICdzdGFydEFkJywgJ3N0b3BBZCcsICdyZXNpemVBZCcsICdwYXVzZUFkJywgJ2V4cGFuZEFkJywgJ2NvbGxhcHNlQWQnXG4gIF07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IFZQQUlESW50ZXJmYWNlTWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghVlBBSURBZFVuaXQgfHwgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKFZQQUlEQWRVbml0W1ZQQUlESW50ZXJmYWNlTWV0aG9kc1tpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gY2FuU3Vic2NyaWJlVG9FdmVudHMoVlBBSURBZFVuaXQpICYmIGNhblVuc3Vic2NyaWJlRnJvbUV2ZW50cyhWUEFJREFkVW5pdCk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIGZ1bmN0aW9uIGNhblN1YnNjcmliZVRvRXZlbnRzKGFkVW5pdCkge1xuICAgIHJldHVybiB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQuc3Vic2NyaWJlKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQuYWRkRXZlbnRMaXN0ZW5lcikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0Lm9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblVuc3Vic2NyaWJlRnJvbUV2ZW50cyhhZFVuaXQpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnVuc3Vic2NyaWJlKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0Lm9mZik7XG5cbiAgfVxufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5hZFVuaXRBc3luY0NhbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcbiAgdmFyIG1ldGhvZCA9IGFyZ3Muc2hpZnQoKTtcbiAgdmFyIGNiID0gYXJncy5wb3AoKTtcbiAgdmFyIHRpbWVvdXRJZDtcblxuICBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCB0aGlzLl9hZFVuaXQpO1xuICBhcmdzLnB1c2god3JhcENhbGxiYWNrKCkpO1xuXG4gIHRoaXMuX2FkVW5pdFttZXRob2RdLmFwcGx5KHRoaXMuX2FkVW5pdCwgYXJncyk7XG4gIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY2IobmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgdGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBhIHJlc3BvbnNlIG9uIGNhbGwgJ1wiICsgbWV0aG9kICsgXCInXCIpKTtcbiAgICBjYiA9IHV0aWxpdGllcy5ub29wO1xuICB9LCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0KTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1ldGhvZCwgY2IsIGFkVW5pdCkge1xuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKG1ldGhvZCkgfHwgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdFttZXRob2RdKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci5hZFVuaXRBc3luY0NhbGwsIGludmFsaWQgbWV0aG9kIG5hbWVcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXBDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIH1cbiAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5fYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIgfHwgdGhpcy5fYWRVbml0LnN1YnNjcmliZSB8fCB0aGlzLl9hZFVuaXQub247XG4gIGFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLl9hZFVuaXQsIGV2dE5hbWUsIGhhbmRsZXIpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xuICB2YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5yZW1vdmVFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC51bnN1YnNjcmliZSB8fCB0aGlzLl9hZFVuaXQub2ZmO1xuICByZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUud2FpdEZvckV2ZW50ID0gZnVuY3Rpb24gKGV2dE5hbWUsIGNiLCBjb250ZXh0KSB7XG5cdCAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgdGltZW91dElkO1xuICBzYW5pdHlDaGVjayhldnROYW1lLCBjYik7XG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IG51bGw7XG5cbiAgdGhpcy5vbihldnROYW1lLCByZXNwb25zZUxpc3RlbmVyKTtcblxuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICB0aGF0Lm9mZihldnROYW1lLCByZXNwb25zZUxpc3RlbmVyKTtcblx0XHQvLyBpZ25vcmUgZXZlbnRzIGlmIGFkIGlzIGZpbmlzaGVkXG5cdFx0aWYgKHdpbmRvdy5fdGltZW91dElkcy5pbmRleE9mKHRpbWVvdXRJZCkgPj0gMCkge1xuICAgICAgaWYgKHRoYXQub3B0aW9ucyAmJiB0aGF0Lm9wdGlvbnMucGxheWVyKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5wbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLm1lc3NhZ2UnLCBkYXRhOiB7bWVzc2FnZTogJ1RpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgZXZlbnQgJyArIGV2dE5hbWV9fSk7XG4gICAgICB9XG5cdFx0XHRjYihuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgdGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBldmVudCAnXCIgKyBldnROYW1lICsgXCInXCIpKTtcblx0XHR9XG4gICAgdGltZW91dElkID0gbnVsbDtcbiAgICBjYiA9IHV0aWxpdGllcy5ub29wO1xuICB9LCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0KTtcblxuICAvLyBFTlxuICB3aW5kb3cuX3RpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhldnROYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIG1pc3NpbmcgZXZ0IG5hbWVcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3BvbnNlTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoYXQub3B0aW9ucyAmJiB0aGF0Lm9wdGlvbnMucGxheWVyKSB7XG4gICAgICB0aGF0Lm9wdGlvbnMucGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogZXZ0TmFtZX19KTtcbiAgICB9XG5cdCAgdGhhdC5vZmYoZXZ0TmFtZSwgcmVzcG9uc2VMaXN0ZW5lcik7XG4gICAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJyYXlMaWtlT2JqVG9BcnJheShhcmd1bWVudHMpO1xuXG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcbiAgICBjYi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgfVxufTtcblxuLy8gVlBBSUQgTUVUSE9EU1xuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKHZlcnNpb24sIGNiKSB7XG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdoYW5kc2hha2VWZXJzaW9uJywgdmVyc2lvbiwgY2IpO1xufTtcblxuLyoganNoaW50IG1heHBhcmFtczo2ICovXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGFkVW5pdERhdGEsIGNiKSB7XG5cdGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgaW5pdEFkIG9uIGNyZWF0aXZlJyk7XG5cdHRoaXMud2FpdEZvckV2ZW50KCdBZExvYWRlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGFkVW5pdERhdGEpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXNpemVBZCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpIHtcbiAgLy8gTk9URTogQWRTaXplQ2hhbmdlIGV2ZW50IGlzIG9ubHkgc3VwcG9ydGVkIG9uIFZQQUlEIDIuMCBzbyBmb3IgdGhlIG1vbWVudCB3ZSBhcmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuICAvLyBhbmQgd2lsbCBhc3N1bWUgdGhhdCBldmVyeXRoaW5nIGlzIGZpbmUgYWZ0ZXIgdGhlIGFzeW5jIGNhbGxcblx0Y29uc29sZS5sb2coJ1tCQy1NT0xdIFZQQUlEQWRVbml0V3JhcHBlci0+Q2FsbGluZyByZXNpemVBZCBvbiBjcmVhdGl2ZScpO1xuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgncmVzaXplQWQnLCB3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpO1xuICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgXHR3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRTaXplQ2hhbmdlJywgYWRWb2x1bWU6IHRoaXMub3B0aW9ucy5wbGF5ZXIudm9sdW1lKCl9KTtcbiAgfVxufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdGFydEFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgc3RhcnRBZCBvbiBjcmVhdGl2ZScpO1xuXHRpZiAoIXRoaXMuYWRTdGFydGVkKSB7XG5cdFx0dGhpcy53YWl0Rm9yRXZlbnQoJ0FkU3RhcnRlZCcsIGNiKTtcblx0fVxuICB0aGlzLl9hZFVuaXQuc3RhcnRBZCgpO1xuICBpZiAodGhpcy5hZFN0YXJ0ZWQpIHtcbiAgICBjYihudWxsKTtcbiAgfVxufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbiAoY2IpIHtcblx0Y29uc29sZS5sb2coJ1tCQy1NT0xdIFZQQUlEQWRVbml0V3JhcHBlci0+Q2FsbGluZyBzdG9wQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU3RvcHBlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnN0b3BBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgcGF1c2VBZCBvbiBjcmVhdGl2ZScpO1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRQYXVzZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5wYXVzZUFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnJlc3VtZUFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgcmVzdW1lQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkUGxheWluZycsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnJlc3VtZUFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmV4cGFuZEFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgZXhwYW5kQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5leHBhbmRBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgY29sbGFwc2VBZCBvbiBjcmVhdGl2ZScpO1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRFeHBhbmRlZENoYW5nZScsIGNiKTtcbiAgdGhpcy5fYWRVbml0LmNvbGxhcHNlQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc2tpcEFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgc2tpcEFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFNraXBwZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5za2lwQWQoKTtcbn07XG5cbi8vVlBBSUQgcHJvcGVydHkgZ2V0dGVyc1xuW1xuICAnYWRMaW5lYXInLFxuICAnYWRXaWR0aCcsXG4gICdhZEhlaWdodCcsXG4gICdhZEV4cGFuZGVkJyxcbiAgJ2FkU2tpcHBhYmxlU3RhdGUnLFxuICAnYWRSZW1haW5pbmdUaW1lJyxcbiAgJ2FkRHVyYXRpb24nLFxuICAnYWRWb2x1bWUnLFxuICAnYWRDb21wYW5pb25zJyxcbiAgJ2FkSWNvbnMnXG5dLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gIHZhciBnZXR0ZXJOYW1lID0gJ2dldCcgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShwcm9wZXJ0eSk7XG5cbiAgVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZVtnZXR0ZXJOYW1lXSA9IGZ1bmN0aW9uIChjYikge1xuICAgIHRoaXMuYWRVbml0QXN5bmNDYWxsKGdldHRlck5hbWUsIGNiKTtcbiAgfTtcbn0pO1xuXG4vL1ZQQUlEIHByb3BlcnR5IHNldHRlcnNcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbih2b2x1bWUsIGNiKXtcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ3NldEFkVm9sdW1lJyx2b2x1bWUsIGNiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURBZFVuaXRXcmFwcGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTWltZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbWltZXR5cGVzJyk7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xuXG52YXIgVlBBSURIVE1MNUNsaWVudCA9IHJlcXVpcmUoJ1ZQQUlESFRNTDVDbGllbnQvanMvVlBBSURIVE1MNUNsaWVudCcpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xuXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxuZnVuY3Rpb24gVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKSB7XG5cbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgVlBBSURIVE1MNVRlY2gpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREhUTUw1VGVjaChtZWRpYUZpbGUpO1xuICB9XG5cbiAgc2FuaXR5Q2hlY2sobWVkaWFGaWxlKTtcblxuICB0aGlzLm5hbWUgPSAndnBhaWQtaHRtbDUnO1xuICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcbiAgdGhpcy52aWRlb0VsID0gbnVsbDtcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBudWxsO1xuXG4gIHRoaXMubWVkaWFGaWxlID0gbWVkaWFGaWxlO1xuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1lZGlhRmlsZSkge1xuICAgICAgaWYgKCFtZWRpYUZpbGUgfHwgIXV0aWxpdGllcy5pc1N0cmluZyhtZWRpYUZpbGUuc3JjKSkge1xuICAgICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLklOVkFMSURfTUVESUFfRklMRSk7XG4gICAgICB9XG4gIH1cbn1cblxuVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudCA9IFZQQUlESFRNTDVDbGllbnQ7XG5cblZQQUlESFRNTDVUZWNoLnN1cHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuICF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIE1pbWVUeXBlcy5odG1sNS5pbmRleE9mKHR5cGUpID4gLTE7XG59O1xuXG5WUEFJREhUTUw1VGVjaC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRBZFVuaXQoY29udGFpbmVyRWwsIHZpZGVvRWwsIGNhbGxiYWNrKSB7XG4gIHNhbml0eUNoZWNrKGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjayk7XG5cbiAgdGhpcy5jb250YWluZXJFbCA9IGNvbnRhaW5lckVsO1xuICB0aGlzLnZpZGVvRWwgPSB2aWRlb0VsO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG5ldyBWUEFJREhUTUw1VGVjaC5WUEFJREhUTUw1Q2xpZW50KGNvbnRhaW5lckVsLCB2aWRlb0VsLCB7fSk7XG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50LmxvYWRBZFVuaXQodGhpcy5tZWRpYUZpbGUuc3JjLCBjYWxsYmFjayk7XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soY29udGFpbmVyLCB2aWRlbywgY2IpIHtcbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQoY29udGFpbmVyKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xuICAgIH1cblxuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudCh2aWRlbykgfHwgdmlkZW8udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndmlkZW8nKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guTUlTU0lOR19DQUxMQkFDSyk7XG4gICAgfVxuICB9XG59O1xuXG5WUEFJREhUTUw1VGVjaC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICBpZiAodGhpcy52cGFpZEhUTUxDbGllbnQpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy52cGFpZEhUTUxDbGllbnQuZGVzdHJveSgpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgbG9nZ2VyLmVycm9yICgnVkFTVCBFUlJPUjogdHJ5aW5nIHRvIHVubG9hZCB0aGUgVlBBSUQgYWR1bml0Jyk7XG4gICAgfVxuXG4gICAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuY29udGFpbmVyRWwpIHtcbiAgICBkb20ucmVtb3ZlKHRoaXMuY29udGFpbmVyRWwpO1xuICAgIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xuICB9XG59O1xuXG52YXIgUFJFRklYID0gJ29uIFZQQUlESFRNTDVUZWNoJztcblZQQUlESFRNTDVUZWNoLklOVkFMSURfTUVESUFfRklMRSA9IFBSRUZJWCArICcsIGludmFsaWQgTWVkaWFGaWxlJztcblZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCA9IFBSRUZJWCArICcsIGludmFsaWQgY29udGFpbmVyIEh0bWxFbGVtZW50JztcblZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX1ZJREVPX0VMID0gUFJFRklYICsgJywgaW52YWxpZCBIVE1MVmlkZW9FbGVtZW50JztcblZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0sgPSBQUkVGSVggKyAnLCBtaXNzaW5nIHZhbGlkIGNhbGxiYWNrJztcblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1VGVjaDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1pbWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL21pbWV0eXBlcycpO1xudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNUUmVzcG9uc2UnKTtcbnZhciBWQVNUVHJhY2tlciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFRyYWNrZXInKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL3Zhc3QvdmFzdFV0aWwnKTtcblxudmFyIFZQQUlEQWRVbml0V3JhcHBlciA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXRXcmFwcGVyJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZQQUlESW50ZWdyYXRvcihwbGF5ZXIsIHNldHRpbmdzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREludGVncmF0b3IpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREludGVncmF0b3IocGxheWVyKTtcbiAgfVxuXG4gIHRoaXMuVklFV19NT0RFID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgRlVMTFNDUkVFTjogXCJmdWxsc2NyZWVuXCIsXG4gICAgVEhVTUJOQUlMOiBcInRodW1ibmFpbFwiXG4gIH07XG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB0aGlzLmNvbnRhaW5lckVsID0gY3JlYXRlVlBBSURDb250YWluZXJFbChwbGF5ZXIpO1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2VUaW1lb3V0OiA1MDAwLFxuICAgIFZQQUlEX1ZFUlNJT046ICcyLjAnXG4gIH07XG4gIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgXG4gIHRoaXMuY29udGVudFNvdXJjZSA9IHBsYXllci50ZWNoXy5lbF8uc3JjO1xuICB0aGlzLm5lZWRzU2hvd1BsYXllciA9IGZhbHNlO1xuICBcbiAgdGhpcy5lcnJvckhhc0JlZW5UcmFja2VkID0gZmFsc2U7XG4gIHRoaXMuYWRGaW5pc2hlZCA9IGZhbHNlO1xuICBcbiAgdGhpcy50aW1lVXBkYXRlVGltZXIgPSBudWxsO1xuICBcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVZQQUlEQ29udGFpbmVyRWwoKSB7XG4gICAgdmFyIGNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyRWwuaWQgPSAnQkMtVlBBSUQtY29udGFpbmVyJztcbiAgICBkb20uYWRkQ2xhc3MoY29udGFpbmVyRWwsICdWUEFJRC1jb250YWluZXInKTtcbiAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoY29udGFpbmVyRWwsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xuICAgIHJldHVybiBjb250YWluZXJFbDtcbiAgfVxufVxuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLnBsYXlBZCA9IGZ1bmN0aW9uIHBsYXlWUGFpZEFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdvbiBWQVNUSW50ZWdyYXRvci5wbGF5QWQsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVFJlc3BvbnNlJykpO1xuICB9XG5cbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIGxvZ2dlci5kZWJ1ZyAoXCI8VlBBSURJbnRlZ3JhdG9yLnBsYXlBZD4gbG9va2luZyBmb3Igc3VwcG9ydGVkIHRlY2guLi5cIik7XG4gIHZhciB0ZWNoID0gdGhpcy5fZmluZFN1cHBvcnRlZFRlY2godmFzdFJlc3BvbnNlLCB0aGlzLnNldHRpbmdzKTtcblxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHV0aWxpdGllcy5ub29wO1xuXG4gIHRoaXMuX2FkVW5pdCA9IG51bGw7XG5cbiAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZwYWlkLWFkJyk7XG4gIFxuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgdHJpZ2dlclZwYWlkQWRFbmQpO1xuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uKCl7XG4gICAgcGxheWVyLm9mZigndmFzdC5hZHNDYW5jZWwnLCB0cmlnZ2VyVnBhaWRBZEVuZCk7XG4gICAgcmVtb3ZlQWRVbml0KCk7XG4gIH0pO1xuXG4gIGlmICh0ZWNoKSB7XG4gICAgbG9nZ2VyLmluZm8gKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGZvdW5kIHRlY2g6IFwiLCB0ZWNoKTtcblxuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBuZXh0KG51bGwsIHRlY2gsIHZhc3RSZXNwb25zZSk7XG4gICAgICB9LFxuICAgICAgdGhpcy5fbG9hZEFkVW5pdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5fcGxheUFkVW5pdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5fZmluaXNoUGxheWluZy5iaW5kKHRoaXMpXG5cbiAgICBdLCBhZENvbXBsZXRlKTtcblxuICAgIHRoaXMuX2FkVW5pdCA9IHtcbiAgICAgIF9wYXVzZWQ6IHRydWUsXG4gICAgICB0eXBlOiAnVlBBSUQnLFxuICAgICAgcGF1c2VBZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5wYXVzZUFkJyk7XG4gICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsvL3dlIG1ha2Ugc3VyZSB0aGF0IHRoZSB2aWRlbyBjb250ZW50IGdldHMgc3RvcHBlZC5cbiAgICAgIH0sXG4gICAgICByZXN1bWVBZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLnJlc3VtZUFkJyk7XG4gICAgICB9LFxuICAgICAgaXNQYXVzZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkO1xuICAgICAgfSxcbiAgICAgIGdldFNyYzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZWNoLm1lZGlhRmlsZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIH0gZWxzZSB7XG4gICAgbG9nZ2VyLmRlYnVnIChcIjxWUEFJREludGVncmF0b3IucGxheUFkPiBjb3VsZCBub3QgZmluZCBzdWl0YWJsZSB0ZWNoXCIpO1xuICAgIHZhciBlcnJvciA9IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5wbGF5QWQsIGNvdWxkIG5vdCBmaW5kIGEgc3VwcG9ydGVkIG1lZGlhRmlsZScsIDQwMyk7XG4gICAgYWRDb21wbGV0ZShlcnJvciwgdGhpcy5fYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX2FkVW5pdDtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGFkQ29tcGxldGUoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKSB7XG4gICAgaWYgKGVycm9yICYmIHZhc3RSZXNwb25zZSkge1xuICAgICAgdGhhdC5fdHJhY2tFcnJvcih2YXN0UmVzcG9uc2UsIGVycm9yLmNvZGUpO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuYWRFbmQnKTtcbiAgICBjYWxsYmFjayhlcnJvciwgdmFzdFJlc3BvbnNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJWcGFpZEFkRW5kKCl7XG5cdCAgICAvL3BsYXllci50cmlnZ2VyKCdzdG9wQWQnKTtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuYWRFbmQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFkVW5pdCgpIHtcbiAgICBpZiAodGVjaCkge1xuICAgICAgY29uc29sZS5sb2coJ1tCQy1NT0xdIFZQQUlESW50ZWdyYXRvci0+Q2FsbGluZyB1bmxvYWRBZFVuaXQgKGltcGxpY2l0bHkgaW52b2tlcyBzdG9wQWQgYW5kIHVuc3Vic2NyaWJlcyBWUEFJRCBldmVudHMpJyk7XG4gICAgICB0ZWNoLnVubG9hZEFkVW5pdCgpO1xuICAgIH1cbiAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluZFN1cHBvcnRlZFRlY2ggPSBmdW5jdGlvbiAodmFzdFJlc3BvbnNlLCBzZXR0aW5ncykge1xuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdnBhaWRNZWRpYUZpbGVzID0gdmFzdFJlc3BvbnNlLm1lZGlhRmlsZXMuZmlsdGVyKHZhc3RVdGlsLmlzVlBBSUQpO1xuICB2YXIgcHJlZmVycmVkVGVjaCA9IHNldHRpbmdzICYmIHNldHRpbmdzLnByZWZlcnJlZFRlY2g7XG4gIHZhciBza2lwcGVkU3VwcG9ydFRlY2hzID0gW107XG4gIHZhciBpLCBsZW4sIG1lZGlhRmlsZSwgVlBBSURUZWNoLCBpc1ByZWZlcmVkVGVjaDtcblxuICBmb3IgKGkgPSAwLCBsZW4gPSB2cGFpZE1lZGlhRmlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtZWRpYUZpbGUgPSB2cGFpZE1lZGlhRmlsZXNbaV07XG4gICAgVlBBSURUZWNoID0gdmFzdFV0aWwuZmluZFN1cHBvcnRlZFZQQUlEVGVjaChtZWRpYUZpbGUudHlwZSk7XG5cbiAgICAvLyBubyBzdXBwb3J0ZWQgVlBBSUQgdGVjaCBmb3VuZCwgc2tpcCBtZWRpYWZpbGVcbiAgICBpZiAoIVZQQUlEVGVjaCkgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gZG8gd2UgaGF2ZSBhIHByZWZlcmVkIHRlY2gsIGRvZXMgaXQgcGxheSB0aGlzIG1lZGlhIGZpbGUgP1xuICAgIGlzUHJlZmVyZWRUZWNoID0gcHJlZmVycmVkVGVjaCA/XG4gICAgICAobWVkaWFGaWxlLnR5cGUgPT09IHByZWZlcnJlZFRlY2ggfHwgKE1pbWVUeXBlc1twcmVmZXJyZWRUZWNoXSAmJiBNaW1lVHlwZXNbcHJlZmVycmVkVGVjaF0uaW5kZXhPZihtZWRpYUZpbGUudHlwZSkgPiAtMSApKSA6XG4gICAgICBmYWxzZTtcblxuICAgIC8vIG91ciBwcmVmZXJlZCB0ZWNoIGNhbiByZWFkIHRoaXMgbWVkaWFmaWxlLCBkZWZhdWx0aW5nIHRvIGl0LlxuICAgIGlmIChpc1ByZWZlcmVkVGVjaCkge1xuICAgICAgcmV0dXJuIG5ldyBWUEFJRFRlY2gobWVkaWFGaWxlLCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgc2tpcHBlZFN1cHBvcnRUZWNocy5wdXNoKHsgbWVkaWFGaWxlOiBtZWRpYUZpbGUsIHRlY2g6IFZQQUlEVGVjaCB9KTtcbiAgfVxuXG4gIGlmIChza2lwcGVkU3VwcG9ydFRlY2hzLmxlbmd0aCkge1xuICAgIHZhciBmaXJzdFRlY2ggPSBza2lwcGVkU3VwcG9ydFRlY2hzWzBdO1xuICAgIHJldHVybiBuZXcgZmlyc3RUZWNoLnRlY2goZmlyc3RUZWNoLm1lZGlhRmlsZSwgc2V0dGluZ3MpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIgPSBmdW5jdGlvbihhZFVuaXQsIHNyYywgcmVzcG9uc2VUaW1lb3V0LCBwbGF5ZXIpIHtcblx0cmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB7c3JjOiBzcmMsIHJlc3BvbnNlVGltZW91dDogcmVzcG9uc2VUaW1lb3V0LCBwbGF5ZXI6IHBsYXllcn0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbG9hZEFkVW5pdCA9IGZ1bmN0aW9uICh0ZWNoLCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB2anNUZWNoRWwgPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgLy92YXIgcmVzcG9uc2VUaW1lb3V0ID0gdGhpcy5zZXR0aW5ncy5yZXNwb25zZVRpbWVvdXQgfHwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dDtcbiAgdmFyIHJlc3BvbnNlVGltZW91dCA9IHRoaXMuc2V0dGluZ3MuYWRDYW5jZWxUaW1lb3V0IHx8IHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQ7XG4gIHRlY2gubG9hZEFkVW5pdCh0aGlzLmNvbnRhaW5lckVsLCB2anNUZWNoRWwsIGZ1bmN0aW9uIChlcnJvciwgYWRVbml0KSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB2YXIgZnJtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJRlJBTUUnKTtcbiAgICAgIGlmIChmcm1zICYmIGZybXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmcm1zWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCIqKioqKiogdXNlciBhY3Rpdml0eVwiKTtcbiAgICAgICAgICAgIHBsYXllci51c2VyQWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgaWYgKCFkb20uaGFzQ2xhc3MocGxheWVyLmVsKCksICd2anMtaGFzLXN0YXJ0ZWQnKSkge1xuICAgICAgICAgICAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1oYXMtc3RhcnRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UubWVzc2FnZScsIGRhdGE6IHttZXNzYWdlOiAnUGxheWluZyAnICsgdGVjaC5tZWRpYUZpbGUuc3JjICsgJyAodHlwZSA9ICcgKyB0ZWNoLm1lZGlhRmlsZS50eXBlICsgXG4gICAgICBcdCAgJywgYXBpRnJhbWV3b3JrID0gJyArIHRlY2gubWVkaWFGaWxlLmFwaUZyYW1ld29yayArICcpJ319KTtcbiAgICAgIHZhciBXcmFwcGVkQWRVbml0ID0gdGhhdC5fY3JlYXRlVlBBSURBZFVuaXRXcmFwcGVyKGFkVW5pdCwgdGVjaC5tZWRpYUZpbGUuc3JjLCByZXNwb25zZVRpbWVvdXQsIHBsYXllcik7XG4gICAgICB2YXIgdGVjaENsYXNzID0gJ3Zqcy0nICsgdGVjaC5uYW1lICsgJy1hZCc7XG4gICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksIHRlY2hDbGFzcyk7XG4gICAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksdGVjaENsYXNzKTtcbiAgICAgIH0pO1xuICAgICAgbmV4dChudWxsLCBXcmFwcGVkQWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG5leHQoZSwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9wbGF5QWRVbml0ID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xuICBhc3luYy53YXRlcmZhbGwoW1xuICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9LFxuICAgIHRoaXMuX2hhbmRzaGFrZS5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXG4gICAgdGhpcy5faW5pdEFkLmJpbmQodGhpcyksXG4gICAgLy90aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcbiAgICB0aGlzLl9saW5rUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zdGFydEFkLmJpbmQodGhpcylcbiAgXSwgY2FsbGJhY2spO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5faGFuZHNoYWtlID0gZnVuY3Rpb24gaGFuZHNoYWtlKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIGFkVW5pdC5oYW5kc2hha2VWZXJzaW9uKHRoaXMub3B0aW9ucy5WUEFJRF9WRVJTSU9OLCBmdW5jdGlvbiAoZXJyb3IsIHZlcnNpb24pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgaXNTdXBwb3J0ZWRWZXJzaW9uKHZlcnNpb24pKSB7XG4gICAgICByZXR1cm4gbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQobmV3IFZBU1RFcnJvcignb24gVlBBSURJbnRlZ3JhdG9yLl9oYW5kc2hha2UsIHVuc3VwcG9ydGVkIHZlcnNpb24gXCInICsgdmVyc2lvbiArICdcIicpLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGlzU3VwcG9ydGVkVmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgdmFyIG1ham9yTnVtID0gbWFqb3IodmVyc2lvbik7XG4gICAgcmV0dXJuIG1ham9yTnVtID49IDEgJiYgbWFqb3JOdW0gPD0gMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ham9yKHZlcnNpb24pIHtcbiAgICB2YXIgcGFydHMgPSB2ZXJzaW9uLnNwbGl0KCcuJyk7XG4gICAgcmV0dXJuIHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2luaXRBZCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgdGVjaCA9IHRoaXMucGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIHZhciBkaW1lbnNpb24gPSBkb20uZ2V0RGltZW5zaW9uKHRlY2gpO1xuICBhZFVuaXQuaW5pdEFkKGRpbWVuc2lvbi53aWR0aCwgZGltZW5zaW9uLmhlaWdodCwgdGhpcy5WSUVXX01PREUuTk9STUFMLCAtMSwge0FkUGFyYW1ldGVyczogdmFzdFJlc3BvbnNlLmFkUGFyYW1ldGVycyB8fCAnJ30sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWQVNUVHJhY2tlciA9IGZ1bmN0aW9uKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKSB7XG4gIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIGFkVW5pdFNyYyA9IGFkVW5pdC5vcHRpb25zLnNyYztcbiAgdmFyIHRyYWNrZXIgPSB0aGlzLl9jcmVhdGVWQVNUVHJhY2tlcihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSk7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIGNvbnRlbnRTb3VyY2UgPSB0aGlzLmNvbnRlbnRTb3VyY2U7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgXG4gIHRoaXMudHJhY2tlciA9IHRyYWNrZXI7XG4gIFxuICB0aGlzLmltcHJlc3Npb25UcmlnZ2VyZWQgPSBmYWxzZTtcblxuICBhZFVuaXQub24oJ0FkU2tpcHBlZCcsIGZ1bmN0aW9uICgpIHtcblx0ICBcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFNraXBwZWQnfX0pO1xuXHQgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcblx0ICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRTa2lwcGVkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHQgICAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU2tpcHBlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tTa2lwKCk7XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgXG4gICAgYWRVbml0LnN0b3BBZCh1dGlsaXRpZXMubm9vcCk7XG4gICAgLy8gVklETEEtMjY3NiAtIGZvcmNlIHBsYXllciB0byBjbGVhbiByZXNvdXJjZXNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkc0NhbmNlbCcpO1xuICAgIH0sIDMwMCk7XG4gICAgLy9wbGF5ZXIudHJpZ2dlcignYWRTdG9wJyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHRyaWdnZXJJbXByZXNzaW9uKCkge1xuXHQgIGlmICghdGhhdC5pbXByZXNzaW9uVHJpZ2dlcmVkKSB7XG5cdFx0ICB0aGF0LmltcHJlc3Npb25UcmlnZ2VyZWQgPSB0cnVlO1xuXHQgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcblx0ICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRJbXByZXNzaW9uJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHQgICAgICB9XG5cdFx0ICBwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRJbXByZXNzaW9uJ319KTtcblx0XHQgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZEltcHJlc3Npb24nKTtcblx0XHQgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xuXHQgIH1cbiAgfVxuICBhZFVuaXQub24oJ0FkSW1wcmVzc2lvbicsIGZ1bmN0aW9uICgpIHtcblx0ICB0cmlnZ2VySW1wcmVzc2lvbigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkU3RhcnRlZCcsIGZ1bmN0aW9uICgpIHtcblx0ICBpZiAoYWRVbml0LmFkU3RhcnRlZCkge1xuXHRcdCAgLy8gaWdub3JlIHNlY29uZCBBZFN0YXJ0ZWQgZXZlbnRcblx0XHQgIHJldHVybjtcblx0ICB9XG4gICAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZykge1xuICAgICAgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nLmluaXQod2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eS5jb250ZXh0SWQsIFxuICAgICAgICAgIHBsYXllci5kdXJhdGlvbigpLCBwbGF5ZXIuZWxfLm9mZnNldFdpZHRoLCBwbGF5ZXIuZWxfLm9mZnNldEhlaWdodCk7XG4gICAgfVxuICAgIGFkVW5pdC5hZFN0YXJ0ZWQgPSB0cnVlO1xuICAgIGlmICghZG9tLmhhc0NsYXNzKHBsYXllci5lbCgpLCAndmpzLWhhcy1zdGFydGVkJykpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1oYXMtc3RhcnRlZCcpO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTdGFydGVkJyk7XG4gICAgdHJhY2tlci50cmFja0NyZWF0aXZlVmlldygpO1xuICAgIGlmICghd2luZG93Ll9tb2xTZXR0aW5ncy5wbGF5c0luQnJlYWsgJiYgYWRVbml0LmdldEFkRHVyYXRpb24pIHtcbiAgICAgIGFkVW5pdC5nZXRBZER1cmF0aW9uKGZ1bmN0aW9uKHRoYXQsIGR1cikge1xuICAgICAgICBpZiAoZHVyID4gMCkge1xuICAgICAgICAgIHBsYXllci5kdXJhdGlvbihkdXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIFx0dHJpZ2dlckltcHJlc3Npb24oKTtcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcbiAgICBwbGF5ZXIub25lKCdhZFN0b3AnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChhZFVuaXQuc3RvcEFkKSB7XG4gICAgICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGlmICh1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcbiAgICBcdC8vIFZJRExBLTI4MzYgKEFkIGNsaWNrIHRocnUgZG9lcyBub3QgbGFuZGluZyBjbGljayB0aHJ1IHVybClcbiAgICBcdC8vIGlQaG9uZSBhbmQgaVBhZFxuICAgIFx0dmFyIGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmpzLXJlc2l6ZS1tYW5hZ2VyJyk7XG4gICAgXHRpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoID4gMCkge1xuICAgIFx0XHR2YXIgcGFyZW50ID0gZWxlbXNbMF0ucGFyZW50RWxlbWVudDtcbiAgICBcdFx0aWYgKHBhcmVudCkge1xuICAgIFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChlbGVtc1swXSk7XG4gICAgXHRcdH1cbiAgICBcdH1cbiAgICB9XG5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGltZUNvbnRyb2xzKCkge1xuXHQgIFx0dmFyIGNvbnZlcnRUaW1lVG9TdHIgPSBmdW5jdGlvbih0aW1lKSB7XG5cdFx0XHR2YXIgc2VjcyA9IHBhcnNlSW50KHRpbWUgKyAwLjUpO1xuXHRcdFx0dmFyIG1pbnMgPSBwYXJzZUludChzZWNzIC8gNjApO1xuXHRcdFx0c2VjcyAtPSAobWlucyAqIDYwKTtcblx0XHRcdHZhciBzdHIgPSBtaW5zLnRvU3RyaW5nKCkgKyAnOicgKyAoc2VjcyA+IDkgPyAnJyAgOiAnMCcpICsgc2Vjcy50b1N0cmluZygpO1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9O1xuXHRcdFxuXHRcdHZhciBiY1RpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JjX3RpbWVfZGlzcGxheScpO1xuXHRcdGlmICghYmNUaW1lRGlzcGxheSkge1xuXHRcdFx0YmNUaW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0cGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5hcHBlbmRDaGlsZChiY1RpbWVEaXNwbGF5KTtcblx0XHRcdGJjVGltZURpc3BsYXkuaWQgPSAnYmNfdGltZV9kaXNwbGF5Jztcblx0XHRcdGJjVGltZURpc3BsYXkuY2xhc3MgPSAndmpzLWN1cnJlbnQtdGltZS1kaXNwbGF5Jztcblx0XHRcdGJjVGltZURpc3BsYXlbJ2FyaWEtbGl2ZSddID0gJ29mZic7XG5cdFx0XHRiY1RpbWVEaXNwbGF5LmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInZqcy1jb250cm9sLXRleHRcIj48L3NwYW4+MDowMCc7XG4gICAgICBzaG93T3JpZ2luYWxUaW1lRGlzcGxheShwbGF5ZXIsIGZhbHNlKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG4gICAgICBzaG93T3JpZ2luYWxUaW1lRGlzcGxheShwbGF5ZXIsIGZhbHNlKTtcblx0XHRcdGJjVGltZURpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0fVxuXHRcdGFkVW5pdC5nZXRBZFJlbWFpbmluZ1RpbWUoZnVuY3Rpb24odGhhdCwgdGltZSkge1xuXHRcdFx0aWYgKHRpbWUgPj0gMCkge1xuXHRcdFx0XHR2YXIgY3VyVGltZSA9IHBsYXllci5kdXJhdGlvbigpIC0gdGltZTtcblx0XHRcdFx0aWYgKGN1clRpbWUgPj0gMCkge1xuXHRcdFx0XHRcdGJjVGltZURpc3BsYXkuY2hpbGROb2Rlc1sxXS5ub2RlVmFsdWUgPSBjb252ZXJ0VGltZVRvU3RyKGN1clRpbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG4gIH1cblx0ICBcbiAgYWRVbml0Lm9uKCdBZFZpZGVvU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ0FkVmlkZW9TdGFydCd9fSk7XG4gICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVmlkZW9TdGFydCcsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICAgIH1cblxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvU3RhcnQnKTtcbiAgICB0cmFja2VyLnRyYWNrU3RhcnQoKTtcblx0aWYgKCF3aW5kb3cuX21vbFNldHRpbmdzLnBsYXlzSW5CcmVhayAmJiBhZFVuaXQuZ2V0QWREdXJhdGlvbikge1xuXHRcdGFkVW5pdC5nZXRBZER1cmF0aW9uKGZ1bmN0aW9uKHRoYXQsIGR1cikge1xuXHRcdFx0aWYgKGR1ciA+IDApIHtcblx0XHRcdFx0cGxheWVyLmR1cmF0aW9uKGR1cik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcbiAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcbiAgICBpZiAodXRpbGl0aWVzLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgLy8gVklETEEtMjMzNiAoc2ltdWxhdGUgdXNlciBhY3Rpdml0eSB0byBtYWtlIHN1cmUgY29udHJvbCBiYXIgaXMgdmlzaWJsZSBvbiBtb2JpbGUgZGV2aWNlcylcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lGUkFNRScpWzBdLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdtb3VzZW92ZXInKSk7XG4gICAgICAgIFx0fSwgaSAqIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjb250ZW50U291cmNlID09PSBwbGF5ZXIudGVjaF8uZWxfLnNyYykge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLm1lc3NhZ2UnLCBkYXRhOiB7bWVzc2FnZTogJ1ZQQUlEIGNyZWF0aXZlIHVzZXMgaXRzIG93biB2aWRlbyB0YWcnfX0pO1xuICAgICAgICAvL3BsYXllci50ZWNoXy5lbF8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy9wbGF5ZXIuY29udHJvbEJhci5oaWRlKCk7XG4gICAgICAgIHRoYXQubmVlZHNTaG93UGxheWVyID0gdHJ1ZTtcbiAgICBcdGlmICghd2luZG93Ll9tb2xTZXR0aW5ncy5wbGF5c0luQnJlYWspIHtcbiAgICBcdFx0dGhhdC50aW1lVXBkYXRlVGltZXIgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lQ29udHJvbHMsIDUwMCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFBsYXlpbmcnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cbiAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRQbGF5aW5nJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBsYXlpbmcnKTtcbiAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRQYXVzZWQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cbiAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRQYXVzZWQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkUGF1c2VkJyk7XG4gICAgdHJhY2tlci50cmFja1BhdXNlKCk7XG4gICAgbm90aWZ5UGF1c2VUb1BsYXllcigpO1xuXHQgIHZhciBpZnJhbWVCYWNrQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVCYWNrQnV0dG9uJyk7XG5cdCAgaWYgKGlmcmFtZUJhY2tCdXR0b24pIHtcblx0XHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cbiAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIHRydWUpO1xuICB9KTtcblxuICBmdW5jdGlvbiBub3RpZnlQbGF5VG9QbGF5ZXIoKXtcbiAgICBpZih0aGF0Ll9hZFVuaXQgJiYgdGhhdC5fYWRVbml0LmlzUGF1c2VkKCkpe1xuICAgICAgdGhhdC5fYWRVbml0Ll9wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3BsYXknKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5UGF1c2VUb1BsYXllcigpIHtcbiAgICBpZih0aGF0Ll9hZFVuaXQpe1xuICAgICAgdGhhdC5fYWRVbml0Ll9wYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigncGF1c2UnKTtcbiAgfVxuXG4gIGFkVW5pdC5vbignQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRWaWRlb0ZpcnN0UXVhcnRpbGUnfX0pO1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0d2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0ZpcnN0UXVhcnRpbGUnKTtcbiAgICB0cmFja2VyLnRyYWNrRmlyc3RRdWFydGlsZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9NaWRwb2ludCcsIGZ1bmN0aW9uICgpIHtcblx0ICBpZiAodGhhdC5hZEZpbmlzaGVkKSB7XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFZpZGVvTWlkcG9pbnQnfX0pO1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0d2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVmlkZW9NaWRwb2ludCcsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9NaWRwb2ludCcpO1xuICAgIHRyYWNrZXIudHJhY2tNaWRwb2ludCgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVmlkZW9UaGlyZFF1YXJ0aWxlJ319KTtcbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvVGhpcmRRdWFydGlsZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9UaGlyZFF1YXJ0aWxlJyk7XG4gICAgdHJhY2tlci50cmFja1RoaXJkUXVhcnRpbGUoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvQ29tcGxldGUnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRWaWRlb0NvbXBsZXRlJ319KTtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0NvbXBsZXRlJyk7XG4gICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWaWRlb0NvbXBsZXRlJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgICAvLyBWSURMQS0yNDA2IGZvcnNlIGFkIHRvIHN0b3BcbiAgICBpZiAoYWRVbml0LnN0b3BBZCkge1xuICAgICAgYWRVbml0LnN0b3BBZCh1dGlsaXRpZXMubm9vcCk7XG4gICAgfVxuICB9KTtcblxuICBhZFVuaXQub24oJ0FkQ2xpY2tUaHJ1JywgZnVuY3Rpb24gKGRhdGEpIHtcblx0ICBpZiAodGhhdC5hZEZpbmlzaGVkKSB7XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuXHQgIHZhciBlbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUgPSBmYWxzZTtcblx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkQ2xpY2tUaHJ1J319KTtcbiAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRDbGlja1RocnUnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkQ2xpY2tUaHJ1Jyk7XG4gICAgdmFyIHVybCA9IGRhdGEudXJsO1xuICAgIHZhciBwbGF5ZXJIYW5kbGVzID0gZGF0YS5wbGF5ZXJIYW5kbGVzO1xuICAgIHZhciBjbGlja1RocnVVcmwgPSB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh1cmwpID8gdXJsIDogZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwodmFzdFJlc3BvbnNlLmNsaWNrVGhyb3VnaCk7XG5cblx0aWYgKHBsYXllckhhbmRsZXMgJiYgd2luZG93Ll9tb2xTZXR0aW5ncy5kaXNhYmxlQ2xpY2tUaHJ1KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xuICAgIGlmIChwbGF5ZXJIYW5kbGVzICYmIGNsaWNrVGhydVVybCkge1xuICAgIFx0aWYgKHBsYXllci5pc0Z1bGxzY3JlZW4oKSAmJiBlbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUpIHtcbiAgICBcdFx0YWRkQ2xpY2tUaHJvdWdoRGl2QmxvY2tlcihjbGlja1RocnVVcmwpO1xuICAgIFx0fVxuICAgIFx0ZWxzZSB7XG4gICAgXHRcdHdpbmRvdy5vcGVuKGNsaWNrVGhydVVybCwgJ19ibGFuaycpO1xuICAgIFx0fVxuICAgIH1cbiAgICBcbiAgICAvLyBWSURMQS0yMjY5IChBZCBkb2VzIG5vdCBwYXVzZSB3aGVuIGJyb3dzaW5nIG91dCB0byBhIGNsaWNrIHVybCBmcm9tIGEgdnBhaWQgYWQpXG4gICAgYWRVbml0LnBhdXNlQWQodXRpbGl0aWVzLm5vb3ApO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8pIHtcbiAgICAgIHZhciB2YXJpYWJsZXMgPSB7XG4gICAgICAgIEFTU0VUVVJJOiBhZFVuaXQub3B0aW9ucy5zcmMsXG4gICAgICAgIENPTlRFTlRQTEFZSEVBRDogMCAvL0luIFZQQUlEIHRoZXJlIGlzIG5vIG1ldGhvZCB0byBrbm93IHRoZSBjdXJyZW50IHRpbWUgZnJvbSB0aGUgYWRVbml0XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsIGZ1bmN0aW9uICgpIHtcblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRVc2VyQWNjZXB0SW52aXRhdGlvbid9fSk7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlckFjY2VwdEludml0YXRpb24nKTtcbiAgICB0cmFja2VyLnRyYWNrQWNjZXB0SW52aXRhdGlvbigpO1xuICAgIHRyYWNrZXIudHJhY2tBY2NlcHRJbnZpdGF0aW9uTGluZWFyKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRVc2VyQ2xvc2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVXNlckNsb3NlJ319KTtcblx0ICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVXNlckNsb3NlJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHQgICAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlckNsb3NlJyk7XG4gICAgdHJhY2tlci50cmFja0Nsb3NlKCk7XG4gICAgdHJhY2tlci50cmFja0Nsb3NlTGluZWFyKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRVc2VyTWluaW1pemUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVXNlck1pbmltaXplJ319KTtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyTWluaW1pemUnKTtcbiAgICB0cmFja2VyLnRyYWNrQ29sbGFwc2UoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZEVycm9yJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG5cdCAgLy8gVklETEEtMjM4OSBzdXBwcmVzcyBlcm9yIHRyYWNraW5nIGFmdGVyIGFkIGltcHJlc3Npb24gaGFzIGJlZW4gcmVwb3J0ZWRcblx0ICBpZiAoIXRoYXQuaW1wcmVzc2lvblRyaWdnZXJlZCAmJiAhdGhhdC5lcnJvckhhc0JlZW5UcmFja2VkKSB7XG5cdFx0ICBwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRFcnJvcid9fSk7XG5cdCAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHQgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZEVycm9yJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHQgICAgICB9XG5cdCAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZEVycm9yJyk7XG5cdCAgICAvL05PVEU6IHdlIHRyYWNrIGVycm9ycyBjb2RlIDkwMSwgYXMgbm90ZWQgaW4gVkFTVCAzLjBcblx0ICAgIHRyYWNrZXIudHJhY2tFcnJvcldpdGhDb2RlKDkwMSk7XG5cdCAgICB0aGF0LmVycm9ySGFzQmVlblRyYWNrZWQgPSB0cnVlO1xuXHQgIH1cblx0ICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZvbHVtZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRWb2x1bWVDaGFuZ2UnfX0pO1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZvbHVtZUNoYW5nZScpO1xuICAgIHZhciBsYXN0Vm9sdW1lID0gcGxheWVyLnZvbHVtZSgpO1xuICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIGN1cnJlbnRWb2x1bWUpIHtcbiAgICAgIGlmIChsYXN0Vm9sdW1lICE9PSBjdXJyZW50Vm9sdW1lKSB7XG4gICAgICAgIGlmIChjdXJyZW50Vm9sdW1lID09PSAwICYmIGxhc3RWb2x1bWUgPiAwKSB7XG4gICAgICAgICAgdHJhY2tlci50cmFja011dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50Vm9sdW1lID4gMCAmJiBsYXN0Vm9sdW1lID09PSAwKSB7XG4gICAgICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFNpemVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHBsYXllci52YXN0ICYmIHBsYXllci52YXN0Lm5lZWRTeW5jUGxheSkge1xuXHRcdCAgaWYgKHBsYXllci5wYXVzZWQoKSAhPT0gcGxheWVyLnRlY2hfLmVsXy5wYXVzZWQpIHtcbiAgICAgICAgLy8gYWQgdXNlcyBtYWluIGNvbnRlbnQgdGFnXG4gICAgICAgIGlmIChjb250ZW50U291cmNlICE9IHBsYXllci50ZWNoXy5lbF8uc3JjKSB7XG4gICAgICAgICAgaWYgKHBsYXllci50ZWNoXy5lbF8ucGF1c2VkKSB7XG4gICAgICAgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRQYXVzZWQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub3RpZnlQYXVzZVRvUGxheWVyKCk7XG4gICAgICAgICAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFBsYXlpbmcnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcbiAgICAgICAgICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXHRcdCAgfVxuXHRcdCAgcGxheWVyLnZhc3QubmVlZFN5bmNQbGF5ID0gZmFsc2U7XG5cdCAgfSBcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2xpY2tUaHJvdWdoRGl2QmxvY2tlcihjbGlja1RocnVVcmwpIHtcblx0ICB2YXIgYmxvY2tlciA9IGNyZWF0ZUNsaWNrVGhyb3VnaERpdihwbGF5ZXIsIGNsaWNrVGhydVVybCk7XG5cdCAgdmFyIGlGcmFtZTtcblx0ICB2YXIgaUZyYW1lQmFja0J1dHRvbjtcblxuXHQgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShibG9ja2VyLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcblxuXHQgIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZURpc3BsYXlTdHlsZSk7XG5cblx0ICBmdW5jdGlvbiBjcmVhdGVDbGlja1Rocm91Z2hEaXYocGxheWVyLCB1cmwpIHtcblx0ICAgIHZhciBibG9ja2VyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0ICAgIGRvbS5hZGRDbGFzcyhibG9ja2VyLCAndmFzdC1ibG9ja2VyJyk7XG5cblx0ICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRDbGlja1RocnUnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgICB9XG4gICAgICBcblx0ICAgIC8vIGNyZWF0ZSBJRnJhbWUgd2l0aCBiYWNrIGJ1dHRvblxuXHQgICAgaUZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cdCAgICBkb20uYWRkQ2xhc3MoaUZyYW1lLCAndmFzdC1ibG9ja2VyJyk7XG5cdCAgICBpRnJhbWUuc3JjID0gdXJsO1xuXHQgICAgYmxvY2tlci5hcHBlbmRDaGlsZChpRnJhbWUpO1xuXHQgIFxuXHQgICAgaUZyYW1lQmFja0J1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHQgICAgZG9tLmFkZENsYXNzKGlGcmFtZUJhY2tCdXR0b24sIFwidmFzdC1iYWNrLWJ1dHRvblwiKTtcblx0ICAgIGRvbS5hZGRDbGFzcyhpRnJhbWVCYWNrQnV0dG9uLCAnZW5hYmxlZCcpO1xuXHQgICAgaUZyYW1lQmFja0J1dHRvbi5pbm5lckhUTUwgPSBcIkJhY2tcIjtcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24uaWQgPSAnaWZyYW1lQmFja0J1dHRvbic7XG5cdCAgICBibG9ja2VyLmFwcGVuZENoaWxkKGlGcmFtZUJhY2tCdXR0b24pO1xuXHQgICAgaUZyYW1lQmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyIChcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHQgIC8vIHNob3cgY29udHJvbHNcblx0XHQgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZFNraXBCdXR0b24nKTtcblx0XHQgIGlmIChza2lwQnV0dG9uKSB7XG5cdFx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IFxuXHRcdCAgfVxuXHRcdCAgcGxheWVyLmNvbnRyb2xzKHRydWUpO1xuXHRcdCAgXG5cdFx0ICBwbGF5ZXIuZWwoKS5yZW1vdmVDaGlsZChibG9ja2VyKTtcblx0XHQgIHJlc3VtZUFkVW5pdCgpO1xuXHRcdCAgXG5cdFx0ICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQgIH1cblx0ICAgIH0pO1xuXHRcdCAgXG5cdCAgICAvLyBoaWRlIGNvbnRyb2xzXG5cdCAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG5cdCAgICB9LCAxKTtcblx0ICAgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZFNraXBCdXR0b24nKTtcblx0ICAgIGlmIChza2lwQnV0dG9uKSB7XG5cdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxuXHQgICAgfVxuXHQgICAgcGxheWVyLmNvbnRyb2xzKGZhbHNlKTtcblxuXHQgICAgcmV0dXJuIGJsb2NrZXI7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheVN0eWxlKCkge1xuXHRcdCAgaWYgKCFwbGF5ZXIuaXNGdWxsc2NyZWVuKCkpIHtcdFx0XHQgIFxuXHRcdFx0ICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIHRydWUpO1xuXHRcdFx0ICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdFx0XHQgIGlmIChza2lwQnV0dG9uKSB7XG5cdFx0XHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcblx0XHRcdCAgfVxuXHRcdFx0ICBwbGF5ZXIuY29udHJvbHModHJ1ZSk7XG5cdFx0XHQgIHBsYXllci5lbCgpLnJlbW92ZUNoaWxkKGJsb2NrZXIpO1xuXHRcdFx0ICByZXN1bWVBZFVuaXQoKTtcblx0XHQgIH1cblx0ICB9XG4gIH1cblxuICB2YXIgdXBkYXRlVmlld1NpemUgPSByZXNpemVBZC5iaW5kKHRoaXMsIHBsYXllciwgYWRVbml0LCB0aGlzLlZJRVdfTU9ERSk7XG4gIHZhciB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCA9IHV0aWxpdGllcy50aHJvdHRsZSh1cGRhdGVWaWV3U2l6ZSwgMTAwKTtcbiAgdmFyIGF1dG9SZXNpemUgPSB0aGlzLnNldHRpbmdzLmF1dG9SZXNpemU7XG5cbiAgaWYgKGF1dG9SZXNpemUpIHtcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gIH1cblxuICBwbGF5ZXIub24oJ3Zhc3QucmVzaXplJywgdXBkYXRlVmlld1NpemUpO1xuICBwbGF5ZXIub24oJ3ZwYWlkLnBhdXNlQWQnLCBwYXVzZUFkVW5pdCk7XG4gIHBsYXllci5vbigndnBhaWQucmVzdW1lQWQnLCByZXN1bWVBZFVuaXQpO1xuICBwbGF5ZXIub24oJ3N0b3BBZCcsIHN0b3BBZFVuaXQpO1xuXG4gIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci5vZmYoJ3Zhc3QucmVzaXplJywgdXBkYXRlVmlld1NpemUpO1xuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnBhdXNlQWQnLCBwYXVzZUFkVW5pdCk7XG4gICAgcGxheWVyLm9mZigndnBhaWQucmVzdW1lQWQnLCByZXN1bWVBZFVuaXQpO1xuICAgIHBsYXllci5vZmYoJ3N0b3BBZCcsIHN0b3BBZFVuaXQpO1xuXG4gICAgaWYgKGF1dG9SZXNpemUpIHtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXVzZUFkVW5pdCgpIHtcbiAgICBhZFVuaXQucGF1c2VBZCh1dGlsaXRpZXMubm9vcCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWVBZFVuaXQoKSB7XG4gICAgYWRVbml0LnJlc3VtZUFkKHV0aWxpdGllcy5ub29wKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gc3RvcEFkVW5pdCgpIHtcbiAgICBpZiAoYWRVbml0LnN0b3BBZCkge1xuICAgICAgYWRVbml0LnN0b3BBZCh1dGlsaXRpZXMubm9vcCk7XG4gICAgfVxuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9hZGRTa2lwQnV0dG9uID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBza2lwQnV0dG9uO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB0cmFja2VyID0gdGhpcy50cmFja2VyO1xuXG4gIC8vIFZJRExBLTIwODQgKHB1Ymxpc2hlci1zcGVjaWZpZWQgU0tJUCBiZWhhdmlvciBmb3IgVlBBSUQgY3JlYXRpdmVzKVxuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBza2lwT2Zmc2V0SW5TZWM7XG4gIHZhciBkdXJhdGlvbjtcbiAgdmFyIHJlbWFpbmluZ1RpbWU7XG4gIHZhciBwcm9ncmVzc0ludGVydmFsO1xuICBpZiAoIXdpbmRvdy5fbW9sU2V0dGluZ3MuZGlzYWJsZVNraXBwYWJpbGl0eSkge1xuXHQgIGlmICh2YXN0UmVzcG9uc2Uuc2tpcG9mZnNldCAmJiB1dGlsaXRpZXMuaXNOdW1iZXIodmFzdFJlc3BvbnNlLnNraXBvZmZzZXQpKSB7XG5cdFx0ICBza2lwT2Zmc2V0SW5TZWMgPSB2YXN0UmVzcG9uc2Uuc2tpcG9mZnNldCAvIDEwMDA7XG5cdFx0ICBwdWJBZGRTa2lwQnV0dG9uVG9QbGF5ZXIocGxheWVyLCBza2lwT2Zmc2V0SW5TZWMpO1xuXHQgIH1cblx0ICBlbHNlIHtcblx0XHQgIC8vIGNoZWNrIGlmIHB1Ymxpc2hlciBoYWQgZXhwbGljaXRseSBkaXNhYmxlIHNraXBwYWJpbGl0eVxuXHRcdCAgdmFyIGRpc2FibGVTa2lwcGFiaWxpdHlCeVB1Ymxpc2hlciA9IGZhbHNlO1xuXHRcdCAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MgJiYgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUpIHtcblx0XHRcdCAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLmVuYWJsZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdCAgZGlzYWJsZVNraXBwYWJpbGl0eUJ5UHVibGlzaGVyID0gdHJ1ZTsgXG5cdFx0XHQgIH1cblx0XHRcdCAgaWYgKHZhc3RSZXNwb25zZS5kdXJhdGlvbiAmJiB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS52aWRlb1RocmVzaG9sZCAmJiBcblx0XHRcdFx0ICB2YXN0UmVzcG9uc2UuZHVyYXRpb24gPCB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS52aWRlb1RocmVzaG9sZCkge1xuXHRcdFx0XHQgIGRpc2FibGVTa2lwcGFiaWxpdHlCeVB1Ymxpc2hlciA9IHRydWU7IFxuXHRcdFx0ICB9XG5cdFx0ICB9XG5cdFx0ICBpZiAoIWRpc2FibGVTa2lwcGFiaWxpdHlCeVB1Ymxpc2hlcikge1xuXHRcdFx0ICBhZFVuaXQub24oJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCB1cGRhdGVTa2lwQnV0dG9uU3RhdGUpO1xuXHRcdFx0ICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNraXBCdXR0b24pO1xuXHRcdCAgfVxuXHQgIH1cbiAgfVxuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uU3RhdGUoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnKTtcbiAgICBhZFVuaXQuZ2V0QWRTa2lwcGFibGVTdGF0ZShmdW5jdGlvbiAoZXJyb3IsIGlzU2tpcHBhYmxlKSB7XG4gICAgICBpZiAoaXNTa2lwcGFibGUpIHtcbiAgICAgICAgaWYgKCFza2lwQnV0dG9uKSB7XG4gICAgICAgICAgYWRkU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uKHBsYXllcikge1xuICAgIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xuICAgIGRvbS5yZW1vdmUoc2tpcEJ1dHRvbik7XG4gICAgc2tpcEJ1dHRvbiA9IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTa2lwQnV0dG9uKCkge1xuICAgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJlbmFibGVkXCIpO1xuICAgIC8vc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgYWRcIjtcbiAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcEJ1dHRvblRleHQ7XG4gICAgc2tpcEJ1dHRvbi5pZCA9ICdhZFNraXBCdXR0b24nO1xuXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgYWRVbml0LmdldEFkU2tpcHBhYmxlU3RhdGUoZnVuY3Rpb24gKGVycm9yLCBpc1NraXBwYWJsZSkge1xuICAgICAgICAgICAgaWYgKGlzU2tpcHBhYmxlKSB7XG4gICAgICAgICAgICAgICAgYWRVbml0LnNraXBBZCh1dGlsaXRpZXMubm9vcCk7Ly9XZSBza2lwIHRoZSBhZFVuaXRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcdHRyYWNrZXIudHJhY2tTa2lwKCk7XG4gICAgICAgICAgICAgICAgYWRVbml0LnN0b3BBZCh1dGlsaXRpZXMubm9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAvL2FkVW5pdC5za2lwQWQodXRpbGl0aWVzLm5vb3ApOy8vV2Ugc2tpcCB0aGUgYWRVbml0XG5cbiAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXG4gICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2tpcEJ1dHRvbjtcbiAgfVxuXHRcblx0Ly8gVklETEEtMjA4NCAocHVibGlzaGVyLXNwZWNpZmllZCBTS0lQIGJlaGF2aW9yIGZvciBWUEFJRCBjcmVhdGl2ZXMpXG5cdC8vIEVOIC0gc3VwcG9ydCBwdWJsaXNoZXIgU0tJUCBzZXR0aW5nc1xuXHQvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cblx0ZnVuY3Rpb24gcHViQWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldCkge1xuXHQgIHZhciBza2lwQnV0dG9uID0gcHViQ3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuXHQgIHZhciB1cGRhdGVTa2lwQnV0dG9uID0gcHViVXBkYXRlU2tpcEJ1dHRvblN0YXRlLmJpbmQodGhhdCwgc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCk7XG5cdFxuXHQgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xuXHQgIC8vcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG5cdCAgcHJvZ3Jlc3NJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVNraXBCdXR0b24sIDUwMCk7XG5cdFxuXHQgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcHViUmVtb3ZlU2tpcEJ1dHRvbik7XG5cdFxuXHQgIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XG5cdCAgICAvL3BsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVTa2lwQnV0dG9uKTtcblx0ICAgIGRvbS5yZW1vdmUoc2tpcEJ1dHRvbik7XG5cdCAgICBza2lwQnV0dG9uID0gbnVsbDtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHB1YlJlbW92ZVNraXBCdXR0b24oKSB7XG5cdFx0ICBpZiAocHJvZ3Jlc3NJbnRlcnZhbCkge1xuXHRcdFx0ICBjbGVhckludGVydmFsKHByb2dyZXNzSW50ZXJ2YWwpO1xuXHRcdFx0ICBwcm9ncmVzc0ludGVydmFsID0gbnVsbDtcblx0XHQgIH1cblx0XHQgIHJlbW92ZVNraXBCdXR0b24oKTtcblx0ICB9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHB1YkNyZWF0ZVNraXBCdXR0b24ocGxheWVyKSB7XG5cdCAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJ2YXN0LXNraXAtYnV0dG9uXCIpO1xuXHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICBza2lwQnV0dG9uLmlkID0gJ2FkU2tpcEJ1dHRvbic7XG5cdFxuXHQgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG5cdCAgICBpZiAoZG9tLmhhc0NsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJykpIHtcblx0ICAgICAgICBhZFVuaXQuZ2V0QWRTa2lwcGFibGVTdGF0ZShmdW5jdGlvbiAoZXJyb3IsIGlzU2tpcHBhYmxlKSB7XG4gICAgICAgICAgICAgICAgYWRVbml0LnNraXBBZCh1dGlsaXRpZXMubm9vcCk7Ly9XZSBza2lwIHRoZSBhZFVuaXRcblx0ICAgICAgICAgICAgaWYgKCFpc1NraXBwYWJsZSkge1xuXHQgICAgICAgICAgICBcdHRyYWNrZXIudHJhY2tTa2lwKCk7XG5cdCAgICAgICAgICAgICAgICBhZFVuaXQuc3RvcEFkKHV0aWxpdGllcy5ub29wKTtcblx0ICAgICAgICAgICAgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdCAgICAgICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZHNDYW5jZWwnKTtcblx0ICAgICAgICAgICAgXHR9LCAxKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfSk7XG5cdCAgICAgICAgLy9hZFVuaXQuc2tpcEFkKHV0aWxpdGllcy5ub29wKTsvL1dlIHNraXAgdGhlIGFkVW5pdFxuXHQgICAgfVxuXHQgICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG5cdFxuXHQgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cblx0ICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfTtcblx0XG5cdCAgcmV0dXJuIHNraXBCdXR0b247XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHB1YlVwZGF0ZVNraXBCdXR0b25TdGF0ZShza2lwQnV0dG9uLCBza2lwT2Zmc2V0KSB7XG5cdFx0Ly92YXIgdGltZUxlZnQgPSBNYXRoLmNlaWwoc2tpcE9mZnNldCAtIHBsYXllci5jdXJyZW50VGltZSgpKTtcblx0XHRhZFVuaXQuZ2V0QWREdXJhdGlvbihmdW5jdGlvbih0aGF0LCBkdXIpIHtcblx0XHRcdGlmIChkdXIgPiAwKSB7XG5cdFx0XHRcdGR1cmF0aW9uID0gZHVyO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGFkVW5pdC5nZXRBZFJlbWFpbmluZ1RpbWUoZnVuY3Rpb24odGhhdCwgdGltZSkge1xuXHRcdFx0cmVtYWluaW5nVGltZSA9IHRpbWU7IFxuXHRcdH0pO1xuXHRcdGlmICghZHVyYXRpb24gfHwgIXJlbWFpbmluZ1RpbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly9jb25zb2xlLmxvZyhcIioqKioqKjogc2tpcE9mZnNldCA9IFwiICsgc2tpcE9mZnNldCArIFwiLCBkdXJhdGlvbiA9IFwiICsgZHVyYXRpb24gKyBcIiwgcmVtYWluaW5nVGltZSA9IFwiICsgcmVtYWluaW5nVGltZSk7XG5cdFx0Ly92YXIgcmVtYWluaW5nVGltZSA9IGFkVW5pdC5fYWRVbml0LmdldEFkUmVtYWluaW5nVGltZSgpO1xuXHRcdHZhciB0aW1lTGVmdCA9IE1hdGguY2VpbChza2lwT2Zmc2V0IC0gKGR1cmF0aW9uIC0gcmVtYWluaW5nVGltZSkpO1xuXHQgIGlmICh0aW1lTGVmdCA+IDApIHtcblx0ICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJ2YXN0LXNraXAtYnV0dG9uLXRleHRcIj4nICsgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwVGV4dC5yZXBsYWNlKCclJVRJTUUlJScsIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHRpbWVMZWZ0LCAyKSkgKyAnPC9wPic7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGlmICghZG9tLmhhc0NsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJykpIHtcblx0ICAgICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJyk7XG5cdCAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwQnV0dG9uVGV4dDtcblx0ICAgIH1cblx0ICB9XG5cdCAgdmFyIGlmcmFtZUJhY2tCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZUJhY2tCdXR0b24nKTtcblx0ICBpZiAoIWlmcmFtZUJhY2tCdXR0b24pIHtcblx0XHQgIGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgJiYgdXRpbGl0aWVzLmlzQW5kcm9pZCgpKSB7XG5cdFx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdCAgcmV0dXJuO1xuXHRcdCAgfVxuXHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0ICB9XG5cdCAgLy9za2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9saW5rUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICBsaW5rVm9sdW1lQ29udHJvbCh0aGlzLnBsYXllciwgYWRVbml0KTtcbiAgbGlua0Z1bGxTY3JlZW5Db250cm9sKHRoaXMucGxheWVyLCBhZFVuaXQsIHRoaXMuVklFV19NT0RFKTtcblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGxpbmtWb2x1bWVDb250cm9sKHBsYXllciwgYWRVbml0KSB7XG4gICAgcGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCB1cGRhdGVBZFVuaXRWb2x1bWUpO1xuICAgIGFkVW5pdC5vbignQWRWb2x1bWVDaGFuZ2UnLCB1cGRhdGVQbGF5ZXJWb2x1bWUpO1xuXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB1cGRhdGVBZFVuaXRWb2x1bWUpO1xuICAgIH0pO1xuXG5cbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gdXBkYXRlQWRVbml0Vm9sdW1lKCkge1xuICAgICAgdmFyIHZvbCA9IHBsYXllci5tdXRlZCgpID8gMCA6IHBsYXllci52b2x1bWUoKTtcbiAgICAgIGFkVW5pdC5zZXRBZFZvbHVtZSh2b2wsIGxvZ0Vycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJWb2x1bWUoKSB7XG5cdCAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdFx0ICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZvbHVtZUNoYW5nZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICB9XG4gICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcbiAgICAgIHZhciBsYXN0Vm9sdW1lID0gcGxheWVyLnZvbHVtZSgpO1xuICAgICAgYWRVbml0LmdldEFkVm9sdW1lKGZ1bmN0aW9uIChlcnJvciwgdm9sKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGxvZ0Vycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobGFzdFZvbHVtZSAhPT0gdm9sKSB7XG4gICAgICAgICAgICBwbGF5ZXIudm9sdW1lKHZvbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaW5rRnVsbFNjcmVlbkNvbnRyb2wocGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSkge1xuICAgIHZhciB1cGRhdGVWaWV3U2l6ZSA9IHJlc2l6ZUFkLmJpbmQodGhhdCwgcGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSk7XG5cbiAgICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZSk7XG5cbiAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3N0YXJ0QWQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgYWxyZWFkeUdvdEFkU3RhcnRlZCA9IGFkVW5pdC5hZFN0YXJ0ZWQ7XG5cbiAgaWYgKGFscmVhZHlHb3RBZFN0YXJ0ZWQpIHtcblx0ICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFN0YXJ0Jyk7XG5cdCAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkU3RhcnRlZCd9fSk7XG4gIH1cbiAgYWRVbml0LnN0YXJ0QWQoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKCFlcnJvciAmJiAhYWxyZWFkeUdvdEFkU3RhcnRlZCkge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xuICAgIH1cbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluaXNoUGxheWluZyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgYWRVbml0Lm9uKCdBZFN0b3BwZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFN0b3BwZWQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgIH1cbiAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0b3BwZWQnKTtcbiAgIGZpbmlzaFBsYXlpbmdBZChudWxsKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZEVycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgIGlmICh0aGF0LmltcHJlc3Npb25UcmlnZ2VyZWQpIHtcbiAgICAgICAgZmluaXNoUGxheWluZ0FkKG51bGwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICBcdHZhciBlcnJNc2cgPSBlcnJvcj8gZXJyb3IubWVzc2FnZSA6ICdvbiBWUEFJREludGVncmF0b3IsIGVycm9yIHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBhZFVuaXQgdG8gZmluaXNoIHBsYXlpbmcnO1xuICAgICAgICBmaW5pc2hQbGF5aW5nQWQobmV3IFZBU1RFcnJvcihlcnJNc2cpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgdmFyIG5lZWRzU2hvd1BsYXllciA9IHRoaXMubmVlZHNTaG93UGxheWVyO1xuICBmdW5jdGlvbiBmaW5pc2hQbGF5aW5nQWQoZXJyb3IpIHtcblx0ICB0aGF0LmFkRmluaXNoZWQgPSB0cnVlO1xuXHRcdHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHRcdGlmIChuZWVkc1Nob3dQbGF5ZXIpIHtcblx0XHRcdGlmICh0aGF0LnRpbWVVcGRhdGVUaW1lcikge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoYXQudGltZVVwZGF0ZVRpbWVyKTtcblx0XHRcdFx0dGhhdC50aW1lVXBkYXRlVGltZXIgPSBudWxsO1xuXHRcdFx0XHR2YXIgYmNUaW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiY190aW1lX2Rpc3BsYXknKTtcblx0XHRcdFx0aWYgKGJjVGltZURpc3BsYXkpIHtcblx0XHRcdFx0XHRwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZCgnY3VycmVudFRpbWVEaXNwbGF5JykuZWxfLnJlbW92ZUNoaWxkKGJjVGltZURpc3BsYXkpO1xuXHRcdFx0XHR9XG4gICAgICAgIHNob3dPcmlnaW5hbFRpbWVEaXNwbGF5KHBsYXllciwgdHJ1ZSk7XG4gICAgICB9XG5cdCAgICBwbGF5ZXIuY29udHJvbEJhci5zaG93KCk7XG5cdFx0XHRwbGF5ZXIudGVjaF8uZWxfLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdH1cbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKHJlc3BvbnNlLCBlcnJvckNvZGUpIHtcblx0aWYgKCF0aGlzLmVycm9ySGFzQmVlblRyYWNrZWQpIHtcblx0XHR0aGlzLmVycm9ySGFzQmVlblRyYWNrZWQgPSB0cnVlO1xuXHRcdHZhc3RVdGlsLnRyYWNrKHJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvckNvZGUgfHwgOTAxfSk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIHNob3dPcmlnaW5hbFRpbWVEaXNwbGF5KHBsYXllciwgc2hvdykge1xuICB2YXIgY2hpbGRyZW4gPSBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZCgnY3VycmVudFRpbWVEaXNwbGF5JykuZWxfLmNoaWxkcmVuO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNoaWxkcmVuW2ldLmlkICE9ICdiY190aW1lX2Rpc3BsYXknKSB7XG4gICAgICBjaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/ICcnIDogJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNpemVBZChwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKSB7XG5cdHZhciBza2lwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgZGltZW5zaW9uID0gZG9tLmdldERpbWVuc2lvbih0ZWNoKTtcbiAgdmFyIE1PREUgPSBwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgPyBWSUVXX01PREUuRlVMTFNDUkVFTiA6IFZJRVdfTU9ERS5OT1JNQUw7XG4gIGlmIChNT0RFID09PSBWSUVXX01PREUuTk9STUFMKSB7XG4gICAgaWYgKHBsYXllci52YXN0KSB7XG4gICAgICBwbGF5ZXIudmFzdC5uZWVkU3luY1BsYXkgPSB0cnVlO1xuICAgIH1cblx0ICBkaW1lbnNpb24ud2lkdGggPSBwbGF5ZXIuZWxfLm9mZnNldFdpZHRoO1xuXHQgIGRpbWVuc2lvbi5oZWlnaHQgPSBwbGF5ZXIuZWxfLm9mZnNldEhlaWdodDtcblx0ICBpZiAodXRpbGl0aWVzLmlzQW5kcm9pZCgpICYmIHNraXBCdXR0b24pIHtcblx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdCAgfVxuICB9XG4gIGlmIChNT0RFID09PSBWSUVXX01PREUuRlVMTFNDUkVFTikge1xuXHQgIGNvbnNvbGUubG9nKCcqKioqKiogdG8gZnVsbHNjcmVlbiBkaW1lbnNpb24gPSAnICsgZGltZW5zaW9uLndpZHRoICsgJywnICsgZGltZW5zaW9uLmhlaWdodCk7XG5cdCAgaWYgKHV0aWxpdGllcy5pc0FuZHJvaWQoKSAmJiBza2lwQnV0dG9uKSB7XG5cdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgfVxuICB9XG4gIGFkVW5pdC5yZXNpemVBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIE1PREUsIGxvZ0Vycm9yKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IpIHtcbiAgaWYgKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yICgnRVJST1I6ICcgKyBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREludGVncmF0b3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVGhlIGNvbXBvbmVudCB0aGF0IHNob3dzIGEgYmxhY2sgc2NyZWVuIHVudGlsIHRoZSBhZHMgcGx1Z2luIGhhcyBkZWNpZGVkIGlmIGl0IGNhbiBvciBpdCBjYW4gbm90IHBsYXkgdGhlIGFkLlxuICpcbiAqIE5vdGU6IEluIGNhc2UgeW91IHdvbmRlciB3aHkgaW5zdGVhZCBvZiB0aGlzIGJsYWNrIHBvc3RlciB3ZSBkb24ndCBqdXN0IHNob3cgdGhlIHNwaW5uZXIgbG9hZGVyLlxuICogICAgICAgSU9TIGRldmljZXMgZG8gbm90IHdvcmsgd2VsbCB3aXRoIGFuaW1hdGlvbnMgYW5kIHRoZSBicm93c2VyIGNocmFzaGVzIGZyb20gdGltZSB0byB0aW1lIFRoYXQgaXMgd2h5IHdlIGNob3NlIHRvXG4gKiAgICAgICBoYXZlIGEgc2Vjb25kYXJ5IGJsYWNrIHBvc3Rlci5cbiAqXG4gKiAgICAgICBJdCBhbHNvIG1ha2VzIGl0IG11Y2ggbW9yZSBlYXNpZXIgZm9yIHRoZSB1c2VycyBvZiB0aGUgcGx1Z2luIHNpbmNlIGl0IGRvZXMgbm90IGNoYW5nZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgdGhlXG4gKiAgICAgICBzcGlubmVyIGFuZCB0aGUgcGxheWVyIHdvcmtzIHRoZSBzYW1lIHdheSB3aXRoIGFuZCB3aXRob3V0IHRoZSBwbHVnaW4uXG4gKlxuICogQHBhcmFtIHt2anMuUGxheWVyfE9iamVjdH0gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG52YXIgQmxhY2tQb3N0ZXJGYWN0b3J5ID0gZnVuY3Rpb24oYmFzZUNvbXBvbmVudCkge1xuICByZXR1cm4ge1xuICAgIC8qKiBAY29uc3RydWN0b3IgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICd2anMtYmxhY2stcG9zdGVyJztcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xuXG4gICAgICB2YXIgcG9zdGVySW1nID0gcGxheWVyLmdldENoaWxkKCdwb3N0ZXJJbWFnZScpO1xuXG4gICAgICAvL1dlIG5lZWQgdG8gZG8gaXQgYXN5bmNocm9ub3VzbHkgdG8gYmUgc3VyZSB0aGF0IHRoZSBibGFjayBwb3N0ZXIgZWwgaXMgb24gdGhlIGRvbS5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHBvc3RlckltZyAmJiBwbGF5ZXIgJiYgcGxheWVyLmVsKCkpIHtcbiAgICAgICAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcG9zdGVySW1nLmVsKCkpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9LFxuICAgIGVsOiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCbGFja1Bvc3RlckZhY3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFzZVZpZGVvSnNDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbnZhciBCbGFja1Bvc3RlciA9IHJlcXVpcmUoJy4vYmxhY2stcG9zdGVyJykoYmFzZVZpZGVvSnNDb21wb25lbnQpO1xuXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdCbGFja1Bvc3RlcicsIHZpZGVvanMuZXh0ZW5kKGJhc2VWaWRlb0pzQ29tcG9uZW50LCBCbGFja1Bvc3RlcikpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVENsaWVudCA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RDbGllbnQnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNURXJyb3InKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L3Zhc3RVdGlsJyk7XG5cbnZhciBWQVNUSW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yJyk7XG52YXIgVlBBSURJbnRlZ3JhdG9yID0gcmVxdWlyZSgnLi4vYWRzL3ZwYWlkL1ZQQUlESW50ZWdyYXRvcicpO1xudmFyIEljb25JbnRlZ3JhdG9yID0gcmVxdWlyZSgnLi4vYWRzL2ljb24vSWNvbkludGVncmF0b3InKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi91dGlscy9kb20nKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIFZpZXdhYmlsaXR5VHJhY2tpbmcgPSByZXF1aXJlKFwiLi4vdXRpbHMvYW5WaWRlb1ZpZXdhYmlsaXR5XCIpO1xuXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWQVNUUGx1Z2luKG9wdGlvbnMpIHtcbiAgdmFyIHNuYXBzaG90O1xuICB2YXIgcGxheWVyID0gdGhpcztcbiAgdmFyIHZhc3QgPSBuZXcgVkFTVENsaWVudCh7d3JhcHBlckxpbWl0OiBvcHRpb25zLndyYXBwZXJMaW1pdH0pO1xuICB2YXIgYWRzQ2FuY2VsZWQgPSBmYWxzZTtcbiAgdmFyIHBsYXlsaXN0TmV4dEJ1dHRvbjtcbiAgdmFyIGRlZmF1bHRPcHRzID0ge1xuICAgIC8vIG1heGltdW0gYW1vdW50IG9mIHRpbWUgaW4gbXMgdG8gd2FpdCB0byByZWNlaXZlIGBhZHNyZWFkeWAgZnJvbSB0aGUgYWRcbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBhZnRlciBwbGF5IGhhcyBiZWVuIHJlcXVlc3RlZC4gQWQgaW1wbGVtZW50YXRpb25zIGFyZVxuICAgIC8vIGV4cGVjdGVkIHRvIGxvYWQgYW55IGR5bmFtaWMgbGlicmFyaWVzIGFuZCBtYWtlIGFueSByZXF1ZXN0cyB0byBkZXRlcm1pbmVcbiAgICAvLyBhZCBwb2xpY2llcyBmb3IgYSB2aWRlbyBkdXJpbmcgdGhpcyB0aW1lLlxuICAgIHRpbWVvdXQ6IDUwMCxcblxuICAgIC8vVE9ETzpmaW5pc2ggdGhpcyBJT1MgRklYXG4gICAgLy9XaGVuZXZlciB5b3UgcGxheSBhbiBhZGQgb24gSU9TLCB0aGUgbmF0aXZlIHBsYXllciBraWNrcyBpbiBhbmQgd2UgbG9vc2UgY29udHJvbCBvZiBpdC4gT24gdmVyeSBoZWF2eSBwYWdlcyB0aGUgJ3BsYXknIGV2ZW50XG4gICAgLy8gTWF5IG9jY3VyIGFmdGVyIHRoZSB2aWRlbyBjb250ZW50IGhhcyBhbHJlYWR5IHN0YXJ0ZWQuIFRoaXMgaXMgd3JvbmcgaWYgeW91IHdhbnQgdG8gcGxheSBhIHByZXJvbGwgYWQgdGhhdCBuZWVkcyB0byBoYXBwZW4gYmVmb3JlIHRoZSB1c2VyXG4gICAgLy8gc3RhcnRzIHdhdGNoaW5nIHRoZSBjb250ZW50LiBUbyBwcmV2ZW50IHRoaXMgdXNlY1xuICAgIGlvc1ByZXJvbGxDYW5jZWxUaW1lb3V0OiAyMDAwLFxuXG4gICAgLy8gbWF4aW11biBhbW91bnQgb2YgdGltZSBmb3IgdGhlIGFkIHRvIGFjdHVhbGx5IHN0YXJ0IHBsYXlpbmcuIElmIHRoaXMgdGltZW91dCBnZXRzXG4gICAgLy8gdHJpZ2dlcmVkIHRoZSBhZHMgd2lsbCBiZSBjYW5jZWxsZWRcbiAgICBhZENhbmNlbFRpbWVvdXQ6IDMwMDAsXG5cbiAgICAvLyBCb29sZWFuIGZsYWcgdGhhdCBjb25maWd1cmVzIHRoZSBwbGF5ZXIgdG8gcGxheSBhIG5ldyBhZCBiZWZvcmUgdGhlIHVzZXIgc2VlcyB0aGUgdmlkZW8gYWdhaW5cbiAgICAvLyB0aGUgY3VycmVudCB2aWRlb1xuICAgIHBsYXlBZEFsd2F5czogZmFsc2UsXG5cbiAgICAvLyBGbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhZHMgYnkgZGVmYXVsdC5cbiAgICBhZHNFbmFibGVkOiB0cnVlLFxuXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSByZXNpemUgd2l0aCB3aW5kb3cucmVzaXplIG9yIG9yaWVudGF0aW9uY2hhbmdlXG4gICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcblxuICAgIC8vIHZlcmJvc2l0eSBvZiBjb25zb2xlIGxvZ2dpbmc6XG4gICAgLy8gMCAtIGVycm9yXG4gICAgLy8gMSAtIGVycm9yLCB3YXJuXG4gICAgLy8gMiAtIGVycm9yLCB3YXJuLCBpbmZvXG4gICAgLy8gMyAtIGVycm9yLCB3YXJuLCBpbmZvLCBsb2dcbiAgICAvLyA0IC0gZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWdcbiAgICB2ZXJib3NpdHk6IDAsXG4gICAgXG4gICAgLy8gcGx1Z2luIG9wdGlvbnNcbiAgICBwbGF5c0luQnJlYWs6IGZhbHNlLFxuICAgIHNraXBUZXh0OiAnU2tpcCBpbiAlJVRJTUUlJSBzZWNvbmRzJyxcbiAgICBza2lwQnV0dG9uVGV4dDogJ1NraXAgYWQnLFxuICAgIGluaXRpYWxQbGF5YmFjazogXCJhdXRvXCIsXG4gICAgaW5pdGlhbEF1ZGlvOiBcIm9uXCIsXG4gICAgZGlzYWJsZUNsaWNrVGhydTogZmFsc2UsXG4gICAgXG4gICAgZmlyc3RQbGF5OiB0cnVlXG4gIH07XG5cbiAgdmFyIHNldHRpbmdzID0gdXRpbGl0aWVzLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIG9wdGlvbnMgfHwge30pO1xuICBcbiAgaWYodXRpbGl0aWVzLmlzVW5kZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLnVybCkpe1xuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gc2V0dGluZ3MudXJsO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhzZXR0aW5ncy5hZFRhZ1VybCkpIHtcbiAgICBzZXR0aW5ncy5hZFRhZ1VybCA9IHV0aWxpdGllcy5lY2hvRm4oc2V0dGluZ3MuYWRUYWdVcmwpO1xuICB9XG4gIFxuICBpZiAoc2V0dGluZ3Mudmlld2FiaWxpdHkgJiYgc2V0dGluZ3Mudmlld2FiaWxpdHkuY29uZmlnKSB7XG5cdCAgc2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZyA9IG5ldyBWaWV3YWJpbGl0eVRyYWNraW5nKHBsYXllcik7XG4gIH1cbiAgXG4gIHdpbmRvdy5fbW9sU2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgd2luZG93Ll90aW1lb3V0SWRzID0gW107XG4gIFxuICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSA9IG51bGw7XG5cbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MuYWRUYWdYTUwpICYmICF1dGlsaXRpZXMuaXNGdW5jdGlvbihzZXR0aW5ncy5hZFRhZ1hNTCkpIHtcbiAgICByZXR1cm4gdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ29uIFZpZGVvSlMgVkFTVCBwbHVnaW4sIHRoZSBwYXNzZWQgYWRUYWdYTUwgb3B0aW9uIGRvZXMgbm90IGNvbnRhaW4gYSBmdW5jdGlvbicpKTtcbiAgfVxuXG4gIGlmICghdXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1VybCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgbWlzc2luZyBhZFRhZ1VybCBvbiBvcHRpb25zIG9iamVjdCcpKTtcbiAgfVxuXG4gIGxvZ2dlci5zZXRWZXJib3NpdHkgKHNldHRpbmdzLnZlcmJvc2l0eSk7XG5cbiAgaWYgKCFzZXR0aW5ncy5wbGF5c0luQnJlYWspIHtcblx0ICBzbmFwc2hvdCA9IHBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90KHBsYXllcik7XG5cdCAgc25hcHNob3QucGxheWluZyA9IHRydWU7XHQvLyBmb3JjZSB0byBwbGF5IGNvbnRlbnQgYWZ0ZXIgYWQgZW5kZWRcbiAgfVxuICBcbiAgaWYgKHNldHRpbmdzLmluaXRpYWxQbGF5YmFjayA9PT0gJ2NsaWNrJykge1xuXHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgdHJ1ZSk7XG4gIH1cblxuICBwbGF5ZXJVdGlscy5wcmVwYXJlRm9yQWRzKHBsYXllcik7XG5cbiAgaWYgKHNldHRpbmdzLnBsYXlBZEFsd2F5cykge1xuICAgIC8vIE5vIG1hdHRlciB3aGF0IGhhcHBlbnMgd2UgcGxheSBhIG5ldyBhZCBiZWZvcmUgdGhlIHVzZXIgc2VlcyB0aGUgdmlkZW8gYWdhaW4uXG4gICAgcGxheWVyLm9uKCd2YXN0LmNvbnRlbnRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QucmVzZXQnKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgcGxheWVyLm9uKCd2YXN0LmZpcnN0UGxheScsIHRyeVRvUGxheVByZXJvbGxBZCk7XG5cbiAgcGxheWVyLm9uKCd2YXN0LnJlc2V0JywgZnVuY3Rpb24gKCkge1xuICAgIC8vSWYgd2UgYXJlIHJlc2V0aW5nIHRoZSBwbHVnaW4sIHdlIGRvbid0IHdhbnQgdG8gcmVzdG9yZSB0aGUgY29udGVudFxuICAgIHNuYXBzaG90ID0gbnVsbDtcbiAgICBjYW5jZWxBZHMoKTtcbiAgfSk7XG5cbiAgcGxheWVyLnZhc3QgPSB7XG4gICAgaXNFbmFibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2V0dGluZ3MuYWRzRW5hYmxlZDtcbiAgICB9LFxuXG4gICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXR0aW5ncy5hZHNFbmFibGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgc2V0dGluZ3MuYWRzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcGxheWVyLnZhc3Q7XG5cbiAgLyoqKiogTG9jYWwgZnVuY3Rpb25zICoqKiovXG4gIGZ1bmN0aW9uIHRyeVRvUGxheVByZXJvbGxBZCgpIHtcblx0Ly8gbWFrZSBzdXJlIHdlIGFyZSBnb2luZyB0byB1c2Ugc2FtZSBwbHVnaW4gaW5zdGFuY2UgdHdpY2Vcblx0cGxheWVyLm9mZigndmFzdC5maXJzdFBsYXknLCB0cnlUb1BsYXlQcmVyb2xsQWQpO1xuXHRcblx0cGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG5cblx0aWYgKHNldHRpbmdzLmluaXRpYWxBdWRpbyA9PT0gJ29mZicpIHtcblx0XHRzZXR0aW5ncy5jb250ZW50Vm9sdW1lID0ge211dGVkOiBwbGF5ZXIubXV0ZWQoKSwgdm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9O1xuXHRcdHBsYXllci5tdXRlZCh0cnVlKTtcblx0fVxuXG4gICAgLy9XZSByZW1vdmUgdGhlIHBvc3RlciB0byBwcmV2ZW50IGZsaWNrZXJpbmcgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgc3RhcnRzIHBsYXlpbmdcbiAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRFbmQnXSwgZnVuY3Rpb24gKCkge1xuICAgIFx0cGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgICByZW1vdmVBZFVuaXQoKTtcbiAgICAgIHJlc3RvcmVWaWRlb0NvbnRlbnQoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCdhZEZpbmlzaGVkJyk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBjaGVja0Fkc0VuYWJsZWQsXG4gICAgICBwcmVwYXJlUGxheWVyRm9yQWQsXG4gICAgICBzdGFydEFkQ2FuY2VsVGltZW91dCxcbiAgICAgIHBsYXlQcmVyb2xsQWRcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdHJhY2tBZEVycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZEVuZCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xuICAgICAgaWYgKHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdCkge1xuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQgPSBudWxsOyAvL1dlIHJlbW92ZSB0aGUgYWRVbml0XG4gICAgICAgIHBsYXllci52YXN0LlZQQUlEID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5fbW9sU2V0dGluZ3MuZmlyc3RQbGF5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdG9yZVZpZGVvQ29udGVudCgpIHtcbiAgICAgIHNldHVwQ29udGVudEV2ZW50cygpO1xuICAgICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICAgIHBsYXllclV0aWxzLnJlc3RvcmVQbGF5ZXJTbmFwc2hvdChwbGF5ZXIsIHNuYXBzaG90KTtcbiAgICAgICAgc25hcHNob3QgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwQ29udGVudEV2ZW50cygpIHtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmIChldnQudHlwZSAhPT0gJ3BsYXlpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuY29udGVudFN0YXJ0Jyk7XG5cbiAgICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZW5kZWQnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC50eXBlID09PSAnZW5kZWQnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50RW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQWRzRW5hYmxlZChuZXh0KSB7XG4gICAgICBpZiAoc2V0dGluZ3MuYWRzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbmV4dChudWxsKTtcbiAgICAgIH1cbiAgICAgIG5leHQobmV3IFZBU1RFcnJvcignQWRzIGFyZSBub3QgZW5hYmxlZCcpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlUGxheWVyRm9yQWQobmV4dCkge1xuICAgICAgaWYgKGNhblBsYXlQcmVyb2xsQWQoKSkge1xuICAgICAgICAvL3NuYXBzaG90ID0gcGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QocGxheWVyKTtcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIGFkZFNwaW5uZXJJY29uKCk7XG5cbiAgICAgICAgaWYocGxheWVyLnBhdXNlZCgpKSB7XG4gICAgICAgICAgbmV4dChudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5aW5nJ10sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICBuZXh0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ3ZpZGVvIGNvbnRlbnQgaGFzIGJlZW4gcGxheWluZyBiZWZvcmUgcHJlcm9sbCBhZCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5QbGF5UHJlcm9sbEFkKCkge1xuICAgICAgcmV0dXJuICF1dGlsaXRpZXMuaXNJUGhvbmUoKSB8fCBwbGF5ZXIuY3VycmVudFRpbWUoKSA8PSBzZXR0aW5ncy5pb3NQcmVyb2xsQ2FuY2VsVGltZW91dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEFkQ2FuY2VsVGltZW91dChuZXh0KSB7XG4gICAgICB2YXIgYWRDYW5jZWxUaW1lb3V0SWQ7XG4gICAgICBhZHNDYW5jZWxlZCA9IGZhbHNlO1xuXG4gICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgIFx0ICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBzdGFydCBwbGF5aW5nJywgNDAyKSk7XG4gICAgICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgICAgICBpZiAocGxheWVyLnZhc3QuVlBBSUQpIHtcbiAgICAgICAgXHRwbGF5ZXIudHJpZ2dlcigndnBhaWQuYWRFbmQnKTtcbiAgICAgICAgfVxuICAgICAgfSwgc2V0dGluZ3MuYWRDYW5jZWxUaW1lb3V0KTtcblxuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ2NsZWFyQWRDYW5jZWxUaW1lb3V0J10sIGNsZWFyQWRDYW5jZWxUaW1lb3V0KTtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFcnJvcicsICd2cGFpZC5hZEVuZCcsICd2cGFpZC5hZEVycm9yJ10sIGZ1bmN0aW9uKCkge1xuICAgIFx0ICBjbGVhckFkQ2FuY2VsVGltZW91dCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICAgIGZ1bmN0aW9uIGNsZWFyQWRDYW5jZWxUaW1lb3V0KCkge1xuICAgICAgICBpZiAoYWRDYW5jZWxUaW1lb3V0SWQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYWRDYW5jZWxUaW1lb3V0SWQpO1xuICAgICAgICAgIGFkQ2FuY2VsVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXh0KG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNwaW5uZXJJY29uKCkge1xuICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNwaW5uZXJJY29uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTcGlubmVySWNvbigpIHtcbiAgICAgIC8vSU1QT1JUQU5UIE5PVEU6IFdlIHJlbW92ZSB0aGUgc3Bpbm5lckljb24gYXN5bmNocm9ub3VzbHkgdG8gZ2l2ZSB0aW1lIHRvIHRoZSBicm93c2VyIHRvIHN0YXJ0IHRoZSB2aWRlby5cbiAgICAgIC8vIElmIHdlIHJlbW92ZSBpdCBzeW5jaHJvbm91c2x5IHdlIHNlZSBhIGZsYXNoIG9mIHRoZSBjb250ZW50IHZpZGVvIGJlZm9yZSB0aGUgYWQgc3RhcnRzIHBsYXlpbmcuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xuICAgICAgICAvLyBWSURMQS0yMjY4IChTYWZhcmkgMTEgb24gTWFjIC0gU3Bpbm5lciBrZWVwcyBnb2luZyBvbiBmaXJzdCBmcmFtZSBvZiBhZClcblx0XHRwbGF5ZXIubG9hZGluZ1NwaW5uZXIuZWxfLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxMDApO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsQWRzKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkc0NhbmNlbCcpO1xuICAgIGFkc0NhbmNlbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlQcmVyb2xsQWQoY2FsbGJhY2spIHtcbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZ2V0VmFzdFJlc3BvbnNlLFxuICAgICAgcGxheUFkXG4gICAgXSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFzdFJlc3BvbnNlKGNhbGxiYWNrKSB7XG4gICAgdmFzdC5nZXRWQVNUUmVzcG9uc2Uoc2V0dGluZ3MuYWRUYWdVcmwgPyBzZXR0aW5ncy5hZFRhZ1VybCgpIDogc2V0dGluZ3MuYWRUYWdYTUwsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gICAgLy9UT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byBzdG9wIHRoZSBwbGF5LiBUaGUgJ3BsYXlQcmVyb2xsV2F0ZXJmYWxsJyBlbmRzIGluIGFuIGluY29uc2lzdGVudCBzaXR1YXRpb25cbiAgICAvL0lmIHRoZSBzdGF0ZSBpcyBub3QgJ3ByZXJvbGw/JyBpdCBtZWFucyB0aGUgYWRzIHdlcmUgY2FuY2VsZWQgdGhlcmVmb3JlLCB3ZSBicmVhayB0aGUgd2F0ZXJmYWxsXG4gICAgaWYgKGFkc0NhbmNlbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLypDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNiBNb2F0IEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4qL1xuICAgIGZ1bmN0aW9uIGluaXRNb2F0VHJhY2tpbmcoYSxjLGQsaCxrKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGI9W107Yz17YWREYXRhOntpZHM6YyxkdXJhdGlvbjpkLHVybDprfSxkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe3RoaXMuc2VuZEV2ZW50PyhiJiYoYi5wdXNoKGEpLGE9YixiPSExKSx0aGlzLnNlbmRFdmVudChhKSk6Yi5wdXNoKGEpfX07ZD1cIl9tb2F0QXBpXCIrTWF0aC5mbG9vcigxRTgqTWF0aC5yYW5kb20oKSk7dmFyIGUsZzt0cnl7ZT1hLm93bmVyRG9jdW1lbnQsZz1lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvd31jYXRjaChsKXtlPWRvY3VtZW50LGc9d2luZG93fWdbZF09YztmLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjthJiZhLmluc2VydEJlZm9yZShmLGEuY2hpbGROb2Rlc1swXXx8bnVsbCk7Zi5zcmM9XCJodHRwczovL3oubW9hdGFkcy5jb20vXCIraCtcIi9tb2F0dmlkZW8uanMjXCIrZDtyZXR1cm4gY307XG4gICAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBudWxsO1xuICAgIGlmICh2YXN0UmVzcG9uc2UuYWRzICYmIHZhc3RSZXNwb25zZS5hZHMubGVuZ3RoID4gMCAmJiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZSAmJiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0KSB7XG4gIFx0ICB2YXIgaWRzID0ge2xldmVsMTogdmFzdFJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5hZHZpZCxcbiAgXHRcdFx0ICAgICBsZXZlbDI6IHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3BnaWQsXG4gIFx0XHRcdCAgICAgbGV2ZWwzOiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmNwaWQsXG4gIFx0XHRcdCAgICAgbGV2ZWw0OiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmNyaWR9O1xuICBcdCAgaWYgKHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuc2l0ZV9pZCkge1xuICBcdFx0ICBpZHMuc2xpY2VyMSA9IHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuc2l0ZV9pZDtcbiAgXHQgIH1cbiAgXHQgIC8vd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBpbml0TW9hdFRyYWNraW5nKHBsYXllci5lbF8sIGlkcywgcGxheWVyLmR1cmF0aW9uKCksIHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQucGFydG5lcmNvZGUsIHBsYXllci5jdXJyZW50U291cmNlKCkuc3JjKTtcbiAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gaW5pdE1vYXRUcmFja2luZyhwbGF5ZXIuZWxfLCBpZHMsIHBsYXllci5kdXJhdGlvbigpLCAnbmluZW1lZGlhdnBhaWQ3ODk2MTE2NCcsIHBsYXllci5jdXJyZW50U291cmNlKCkuc3JjKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZykge1xuICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nLmluaXQod2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eS5jb250ZXh0SWQsIFxuICBcdFx0XHQgIHBsYXllci5kdXJhdGlvbigpLCBwbGF5ZXIuZWxfLm9mZnNldFdpZHRoLCBwbGF5ZXIuZWxfLm9mZnNldEhlaWdodCk7XG4gICAgfVxuXG4gICAgdmFyIGlzQWRWUEFJRCAgPSBpc1ZQQUlEKHZhc3RSZXNwb25zZSk7XG4gICAgdmFyIGFkSW50ZWdyYXRvciA9IGlzQWRWUEFJRCA/IG5ldyBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykgOiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcbiAgICB2YXIgYWRGaW5pc2hlZCA9IGZhbHNlO1xuICAgIGlmIChpc0FkVlBBSUQpIHtcbiAgICBcdHBsYXllci50cmlnZ2VyKCdjbGVhckFkQ2FuY2VsVGltZW91dCcpO1xuICAgIH1cblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LnR5cGUgPT09ICd2YXN0LmFkU3RhcnQnKSB7XG4gICAgICAgIGFkZEFkc0xhYmVsKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUFkc0xhYmVsKTtcblxuICAgIGlmICh1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcbiAgICAgIHByZXZlbnRNYW51YWxQcm9ncmVzcygpO1xuICAgIH1cblxuICAgIHBsYXllci52YXN0LnZhc3RSZXNwb25zZSA9IHZhc3RSZXNwb25zZTtcbiAgICBsb2dnZXIuZGVidWcgKFwiY2FsbGluZyBhZEludGVncmF0b3IucGxheUFkKCkgd2l0aCB2YXN0UmVzcG9uc2U6XCIsIHZhc3RSZXNwb25zZSk7XG4gICAgcGxheWVyLnZhc3QuYWRVbml0ID0gYWRJbnRlZ3JhdG9yLnBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKTtcbiAgICBwbGF5ZXIudmFzdC5WUEFJRCA9IGlzQWRWUEFJRDtcblxuICAgIHZhciBhZEljb25JbnRlZ3JhdG9yO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqKi9cbiAgICBmdW5jdGlvbiBhZGRBZHNMYWJlbCgpIHtcbiAgICBcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnBsYXlzSW5CcmVhaykge1xuICAgIFx0XHRwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB1cGRhdGVUaW1lQ29udHJvbHMpO1xuICAgIFx0fVxuICAgICAgaWYgKGFkRmluaXNoZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFzdFJlc3BvbnNlLmljb25zICYmIHZhc3RSZXNwb25zZS5pY29ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFkSWNvbkludGVncmF0b3IgPSBuZXcgSWNvbkludGVncmF0b3IocGxheWVyKTtcbiAgICAgICAgYWRJY29uSW50ZWdyYXRvci5yZW5kZXJJY29ucyh2YXN0UmVzcG9uc2UuaWNvbnMsIGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmpzLW5leHQtYnV0dG9uJyk7XG4gICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICBwbGF5bGlzdE5leHRCdXR0b24gPSBlbGVtc1swXTtcbiAgICAgICAgcGxheWxpc3ROZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRzTGFiZWwoKSB7XG4gICAgXHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5wbGF5c0luQnJlYWspIHtcbiAgICBcdFx0cGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZVRpbWVDb250cm9scyk7XG4gICAgXHRcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnRpbWVPZmZzZXQpIHtcbiAgICAgICAgICBzaG93T3JpZ2luYWxUaW1lRGlzcGxheSh0cnVlKTtcbiAgICAgICAgICB2YXIgYmNUaW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiY190aW1lX2Rpc3BsYXknKTtcbiAgICAgICAgICBpZiAoYmNUaW1lRGlzcGxheSkge1xuICAgICAgICAgICAgYmNUaW1lRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICBcdFx0fVxuICAgIFx0fVxuICAgICAgaWYgKHBsYXlsaXN0TmV4dEJ1dHRvbikge1xuICAgICAgICBwbGF5bGlzdE5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICBwbGF5bGlzdE5leHRCdXR0b24gPSBudWxsO1xuICAgICAgfVxuICAgICAgYWRGaW5pc2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd09yaWdpbmFsVGltZURpc3BsYXkoc2hvdykge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5jaGlsZHJlbjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldLmlkICE9ICdiY190aW1lX2Rpc3BsYXknKSB7XG4gICAgICAgICAgY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9IHNob3cgPyAnJyA6ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVDb250cm9scygpIHtcbiAgICBcdHZhciBjb252ZXJ0VGltZVRvU3RyID0gZnVuY3Rpb24odGltZSkge1xuICAgIFx0XHR2YXIgc2VjcyA9IHBhcnNlSW50KHRpbWUgKyAwLjUpO1xuICAgIFx0XHR2YXIgbWlucyA9IHBhcnNlSW50KHNlY3MgLyA2MCk7XG4gICAgXHRcdHNlY3MgLT0gKG1pbnMgKiA2MCk7XG4gICAgXHRcdHZhciBzdHIgPSBtaW5zLnRvU3RyaW5nKCkgKyAnOicgKyAoc2VjcyA+IDkgPyAnJyAgOiAnMCcpICsgc2Vjcy50b1N0cmluZygpO1xuICAgIFx0XHRyZXR1cm4gc3RyO1xuICAgIFx0fTtcbiAgICBcdFxuICAgICAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MuYnJlYWtEdXJhdGlvbikge1xuICAgICAgICBpZiAocGxheWVyLmR1cmF0aW9uKCkgIT0gd2luZG93Ll9tb2xTZXR0aW5ncy5icmVha0R1cmF0aW9uKSB7XG4gICAgICAgICAgaWYgKHBsYXllci5kdXJhdGlvbigpKSB7XG4gICAgICAgICAgICB3aW5kb3cuX21vbFNldHRpbmdzLnJlYWxWaWRlb0R1cmF0aW9uID0gcGxheWVyLmR1cmF0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5kdXJhdGlvbih3aW5kb3cuX21vbFNldHRpbmdzLmJyZWFrRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAod2luZG93Ll9tb2xTZXR0aW5ncy50aW1lT2Zmc2V0KSB7XG4gICAgICAgIHZhciBiY1RpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JjX3RpbWVfZGlzcGxheScpO1xuICAgICAgICBpZiAoIWJjVGltZURpc3BsYXkpIHtcbiAgICAgICAgICBiY1RpbWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5hcHBlbmRDaGlsZChiY1RpbWVEaXNwbGF5KTtcbiAgICAgICAgICBiY1RpbWVEaXNwbGF5LmlkID0gJ2JjX3RpbWVfZGlzcGxheSc7XG4gICAgICAgICAgYmNUaW1lRGlzcGxheS5jbGFzcyA9ICd2anMtY3VycmVudC10aW1lLWRpc3BsYXknO1xuICAgICAgICAgIGJjVGltZURpc3BsYXlbJ2FyaWEtbGl2ZSddID0gJ29mZic7XG4gICAgICAgICAgYmNUaW1lRGlzcGxheS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ2anMtY29udHJvbC10ZXh0XCI+PC9zcGFuPjA6MDAnO1xuICAgICAgICAgIHNob3dPcmlnaW5hbFRpbWVEaXNwbGF5KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzaG93T3JpZ2luYWxUaW1lRGlzcGxheShmYWxzZSk7XG4gICAgICAgICAgYmNUaW1lRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGltZSA9IHBsYXllci5jdXJyZW50VGltZSgpICsgd2luZG93Ll9tb2xTZXR0aW5ncy50aW1lT2Zmc2V0O1xuICAgICAgICBiY1RpbWVEaXNwbGF5LmNoaWxkTm9kZXNbMV0ubm9kZVZhbHVlID0gY29udmVydFRpbWVUb1N0cih0aW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XG4gICAgICAvL0lPUyB2aWRlbyBjbG9jayBpcyB2ZXJ5IHVucmVsaWFibGUgYW5kIHdlIG5lZWQgYSAzIHNlY29uZHMgdGhyZXNob2xkIHRvIGVuc3VyZSB0aGF0IHRoZSB1c2VyIGZvcndhcmRlZC9yZXdvdW5kIHRoZSBhZFxuICAgICAgdmFyIFBST0dSRVNTX1RIUkVTSE9MRCA9IDM7XG4gICAgICB2YXIgcHJldmlvdXNUaW1lID0gMDtcbiAgICAgIHZhciBza2lwYWRfYXR0ZW1wdHMgPSAwO1xuXG4gICAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBwcmV2ZW50QWRTZWVrKTtcbiAgICAgIHBsYXllci5vbignZW5kZWQnLCBwcmV2ZW50QWRTa2lwKTtcblxuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkRXJyb3InXSwgc3RvcFByZXZlbnRNYW51YWxQcm9ncmVzcyk7XG5cbiAgICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICAgIGZ1bmN0aW9uIHByZXZlbnRBZFNraXAoKSB7XG4gICAgICAgIC8vIElnbm9yZSBlbmRlZCBldmVudCBpZiB0aGUgQWQgdGltZSB3YXMgbm90ICduZWFyJyB0aGUgZW5kXG4gICAgICAgIC8vIGFuZCByZXZlcnQgdGltZSB0byB0aGUgcHJldmlvdXMgJ3ZhbGlkJyB0aW1lXG4gICAgICAgIGlmICgocGxheWVyLmR1cmF0aW9uKCkgLSBwcmV2aW91c1RpbWUpID4gUFJPR1JFU1NfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpOyAvLyB0aGlzIHJlZHVjZSB0aGUgdmlkZW8gaml0dGVyIGlmIHRoZSBJT1Mgc2tpcCBidXR0b24gaXMgcHJlc3NlZFxuICAgICAgICAgIHBsYXllci5wbGF5KHRydWUpOyAvLyB3ZSBuZWVkIHRvIHRyaWdnZXIgdGhlIHBsYXkgdG8gcHV0IHRoZSB2aWRlbyBlbGVtZW50IGJhY2sgaW4gYSB2YWxpZCBzdGF0ZVxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShwcmV2aW91c1RpbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHByZXZlbnRBZFNlZWsoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHBsYXllci5jdXJyZW50VGltZSgpO1xuICAgICAgICB2YXIgcHJvZ3Jlc3NEZWx0YSA9IE1hdGguYWJzKGN1cnJlbnRUaW1lIC0gcHJldmlvdXNUaW1lKTtcbiAgICAgICAgaWYgKHByb2dyZXNzRGVsdGEgPiBQUk9HUkVTU19USFJFU0hPTEQpIHtcbiAgICAgICAgICBza2lwYWRfYXR0ZW1wdHMgKz0gMTtcbiAgICAgICAgICBpZiAoc2tpcGFkX2F0dGVtcHRzID49IDIpIHtcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHByZXZpb3VzVGltZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldmlvdXNUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc3RvcFByZXZlbnRNYW51YWxQcm9ncmVzcygpIHtcbiAgICAgICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHByZXZlbnRBZFNlZWspO1xuICAgICAgICBwbGF5ZXIub2ZmKCdlbmRlZCcsIHByZXZlbnRBZFNraXApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrQWRFcnJvcihlcnJvciwgdmFzdFJlc3BvbnNlKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd2YXN0LmFkRXJyb3InLCBlcnJvcjogZXJyb3J9KTtcbiAgICBjYW5jZWxBZHMoKTtcbiAgICBsb2dnZXIuZXJyb3IgKCdBRCBFUlJPUjonLCBlcnJvci5tZXNzYWdlLCBlcnJvciwgdmFzdFJlc3BvbnNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVlBBSUQodmFzdFJlc3BvbnNlKSB7XG4gICAgdmFyIGksIGxlbjtcbiAgICB2YXIgbWVkaWFGaWxlcyA9IHZhc3RSZXNwb25zZS5tZWRpYUZpbGVzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IG1lZGlhRmlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh2YXN0VXRpbC5pc1ZQQUlEKG1lZGlhRmlsZXNbaV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCIvKipcbiAqIFZpZXdhYmlsaXR5IFdyYXBwZXJcbiAqL1xuXG4vL3ZhciBBTlZpZGVvVmlld2FiaWxpdHlUcmFja2VyID0gcmVxdWlyZShcImFuLXZpZGVvLXZpZXdhYmlsaXR5XCIpOy8vdmlld2FiaWxpdHkgbGlicmFyeVxudmFyIEFOVmlkZW9WaWV3YWJpbGl0eVRyYWNrZXIgPSBudWxsO1xudmFyIGxvZ2dlciA9IHJlcXVpcmUoXCIuL2NvbnNvbGVMb2dnZXJcIik7XG52YXIgZGVidWcgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIGxvZ2dlci5kZWJ1ZyhtZXNzYWdlKTtcbn07XG52YXIgaW5mbyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbG9nZ2VyLmluZm8obWVzc2FnZSk7XG59O1xuXG52YXIgaHRtbDVWaWRlb1ZpZXdhYmlsaXR5ID0gZnVuY3Rpb24gKHBsYXllcl8pIHtcblxuXHR2YXIgcGxheWVyID0gcGxheWVyXztcbiAgICB2YXIgdHJhY2tlciA9IG51bGw7XG4gICAgdmFyIG1hcHBlZEFjdGlvbnMgPSB7XG4gICAgICAgIFwic3RhcnRcIjogXCJzdGFydFwiLFxuICAgICAgICBcImV4cGFuZFwiOiBcImV4cGFuZFwiLFxuICAgICAgICBcImNvbGxhcHNlXCI6IFwiY29sbGFwc2VcIixcbiAgICAgICAgXCJ1bm11dGVcIjogXCJzb3VuZF9vblwiLFxuICAgICAgICBcIm11dGVcIjogXCJzb3VuZF9vZmZcIixcbiAgICAgICAgXCJwYXVzZVwiOiBcInBhdXNlXCIsXG4gICAgICAgIFwicmVzdW1lXCI6IFwicmVzdW1lXCIsXG4gICAgICAgIFwiYWQtY2xpY2tcIjogXCJjbGlja1wiLFxuICAgICAgICBcInNraXBcIjogXCJzdG9wXCIsXG4gICAgICAgIFwiY29tcGxldGVcIjogXCJzdG9wXCIsXG4gICAgICAgIFwiZnVsbHNjcmVlblwiOiBcImZ1bGxzY3JlZW5cIixcbiAgICAgICAgXCJleGl0RnVsbHNjcmVlblwiOiBcImV4aXRGdWxsc2NyZWVuXCJcbiAgICB9O1xuXG4gICAgdmFyIGZpcmVPbmNlRXZlbnRzID0ge1xuICAgICAgICBcInN0YXJ0XCI6IGZhbHNlLFxuICAgICAgICBcInNraXBcIjogZmFsc2UsXG4gICAgICAgIFwiY29tcGxldGVcIjogZmFsc2VcbiAgICB9O1xuXG4gICAgdmFyIGdldENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHkgJiYgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eS5jb25maWc7XG4gICAgfTtcblxuICAgIHZhciBnZXRQbGF5ZXJET01FbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGxheWVyLmVsXztcbiAgICB9O1xuXG4gICAgdmFyIGdldFZpZGVvSW5mbyA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICByZXR1cm4ge2R1cmF0aW9uOiBkdXJhdGlvbiwgdzogd2lkdGgsIGg6IGhlaWdodH07XG4gICAgfTtcblxuXHQvLyBVc2luZyBjYWxsYmFjayBmb3IgbG9ncyBoZWxwcyBnZXR0aW5nIGEgcmlnaHQgbG9nZ2VyIGluIGVhY2ggYXBwXG5cdHZhciBsb2dnZXJDYWxsYmFjayA9IGZ1bmN0aW9uIChfbGV2ZWwsIF9tZXNzYWdlKSB7XG5cdFx0aWYgKF9sZXZlbCAmJiBfbGV2ZWwgPT09IFwiZGVidWdcIikge1xuXHRcdFx0ZGVidWcoX21lc3NhZ2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbmZvKF9tZXNzYWdlKTtcblx0XHR9XG4gICAgfTtcblxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChjb250ZXh0SWQsIGR1cmF0aW9uLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICghQU5WaWRlb1ZpZXdhYmlsaXR5VHJhY2tlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ICAgXG4gICAgICAgIGluZm8oXCJpbml0aWFsaXplIHdpdGggZHVyYXRpb246IFwiICsgZHVyYXRpb24gKyBcIiwgd2lkdGg6IFwiICsgd2lkdGggKyBcIiwgaGVpZ2h0OiBcIiArIGhlaWdodCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0cmFja2VyID0gbmV3IEFOVmlkZW9WaWV3YWJpbGl0eVRyYWNrZXIoXG5cdFx0XHRcdGdldENvbmZpZygpLFxuICAgICAgICAgICAgICAgIGdldFBsYXllckRPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgICBnZXRWaWRlb0luZm8oZHVyYXRpb24sIHdpZHRoLCBoZWlnaHQpLCAvLyBUaGUgZHVyYXRpb24gb2YgdGhlIHZpZGVvIGFkXG4gICAgICAgICAgICAgICAgY29udGV4dElkLFxuXHRcdFx0XHRsb2dnZXJDYWxsYmFja1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVycm9yIG9uIHZpZXdhYmlsaXR5IGxpYnJhcnk6IFwiKTtcbiAgICAgICAgICAgIGRlYnVnKGV4KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoaXMuaW52b2tlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfKSB7XG4gICAgICAgIGlmICghQU5WaWRlb1ZpZXdhYmlsaXR5VHJhY2tlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUmVhZHkgJiYgZXZlbnRfICYmIG1hcHBlZEFjdGlvbnNbZXZlbnRfXSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZihmaXJlT25jZUV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudF8pKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZmlyZU9uY2VFdmVudHNbZXZlbnRfXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvKFwic3VwcmVzc2luZyBmaXJlT25jZUV2ZW50cyBldmVudCBhcyBpdCBpcyBhbHJlYWR5IGZpcmVkIG9uY2UgYnkgdmlld2FiaWxpdHkgbGlicmFyeTogXCIgKyBtYXBwZWRBY3Rpb25zW2V2ZW50X10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlT25jZUV2ZW50c1tldmVudF9dID0gdHJ1ZTsgLy8gbWFyayB0aGF0IHRoZSBldmVudCBoYXMgYmVlbiBmaXJlZC5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmZvKFwiZXZlbnQgaW52b2tlZCBieSB2aWV3YWJpbGl0eSBsaWJyYXJ5OiBcIiArIG1hcHBlZEFjdGlvbnNbZXZlbnRfXSk7XG4gICAgICAgICAgICAgICAgdHJhY2tlci5ub3RpZnlFdmVudChtYXBwZWRBY3Rpb25zW2V2ZW50X10pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImVycm9yIG9uIHZpZXdhYmlsaXR5IGxpYnJhcnk6IFwiKTtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG5cblxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGh0bWw1VmlkZW9WaWV3YWJpbGl0eTsiLCIvL1NtYWxsIHN1YnNldCBvZiBhc3luY1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBhc3luYyA9IHt9O1xuXG5hc3luYy5zZXRJbW1lZGlhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgc2V0VGltZW91dChmbiwgMCk7XG59O1xuXG5hc3luYy5pdGVyYXRvciA9IGZ1bmN0aW9uICh0YXNrcykge1xuICB2YXIgbWFrZUNhbGxiYWNrID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgdmFyIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgICAgICB0YXNrc1tpbmRleF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmbi5uZXh0KCk7XG4gICAgfTtcbiAgICBmbi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIChpbmRleCA8IHRhc2tzLmxlbmd0aCAtIDEpID8gbWFrZUNhbGxiYWNrKGluZGV4ICsgMSkgOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIGZuO1xuICB9O1xuICByZXR1cm4gbWFrZUNhbGxiYWNrKDApO1xufTtcblxuXG5hc3luYy53YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRhc2tzKSkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIHdhdGVyZmFsbCBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpO1xuICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICB9XG4gIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH1cbiAgdmFyIHdyYXBJdGVyYXRvciA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBJdGVyYXRvcihuZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZXJhdG9yLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICB3cmFwSXRlcmF0b3IoYXN5bmMuaXRlcmF0b3IodGFza3MpKSgpO1xufTtcblxuYXN5bmMud2hlbiA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGNhbGxiYWNrKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYXN5bmMud2hlbiBlcnJvcjogbWlzc2luZyBjYWxsYmFjayBhcmd1bWVudFwiKTtcbiAgfVxuXG4gIHZhciBpc0FsbG93ZWQgPSB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25kaXRpb24pID8gY29uZGl0aW9uIDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIWNvbmRpdGlvbjtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICB2YXIgbmV4dCA9IGFyZ3MucG9wKCk7XG5cbiAgICBpZiAoaXNBbGxvd2VkLmFwcGx5KG51bGwsIGFyZ3MpKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XG4gICAgcmV0dXJuIG5leHQuYXBwbHkobnVsbCwgYXJncyk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xuXG4iLCIvKmpzaGludCB1bnVzZWQ6ZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3ZlcmJvc2l0eSA9IDA7XG52YXIgX3ByZWZpeCA9IFwiW3ZpZGVvanMtdmFzdC12cGFpZF0gXCI7XG5cbmZ1bmN0aW9uIHNldFZlcmJvc2l0eSAodilcbntcbiAgICBfdmVyYm9zaXR5ID0gdjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTXNnIChtZXRob2QsIGFyZ3MpXG57XG4gICAgaWYgKChhcmdzLmxlbmd0aCkgPiAwICYmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpKVxuICAgIHtcbiAgICAgICAgYXJnc1swXSA9IF9wcmVmaXggKyBhcmdzWzBdO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QuYXBwbHkpXG4gICAge1xuICAgICAgICBtZXRob2QuYXBwbHkgKGNvbnNvbGUsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgbWV0aG9kIChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWJ1ZyAoKVxue1xuICAgIGlmIChfdmVyYm9zaXR5IDwgNClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUuZGVidWcgPT09ICd1bmRlZmluZWQnKVxuICAgIHtcbiAgICAgICAgLy8gSUUgMTAgZG9lc24ndCBoYXZlIGEgY29uc29sZS5kZWJ1ZygpIGZ1bmN0aW9uXG4gICAgICAgIGhhbmRsZU1zZyAoY29uc29sZS5sb2csIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGhhbmRsZU1zZyAoY29uc29sZS5kZWJ1ZywgYXJndW1lbnRzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvZyAoKVxue1xuICAgIGlmIChfdmVyYm9zaXR5IDwgMylcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUubG9nLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBpbmZvICgpXG57XG4gICAgaWYgKF92ZXJib3NpdHkgPCAyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZU1zZyAoY29uc29sZS5pbmZvLCBhcmd1bWVudHMpO1xufVxuXG5cbmZ1bmN0aW9uIHdhcm4gKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDEpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlTXNnIChjb25zb2xlLndhcm4sIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGVycm9yICgpXG57XG4gICAgaGFuZGxlTXNnIChjb25zb2xlLmVycm9yLCBhcmd1bWVudHMpO1xufVxuXG52YXIgY29uc29sZUxvZ2dlciA9IHtcbiAgICBzZXRWZXJib3NpdHk6IHNldFZlcmJvc2l0eSxcbiAgICBkZWJ1ZzogZGVidWcsXG4gICAgbG9nOiBsb2csXG4gICAgaW5mbzogaW5mbyxcbiAgICB3YXJuOiB3YXJuLFxuICAgIGVycm9yOiBlcnJvclxufTtcblxuaWYgKCh0eXBlb2YgKGNvbnNvbGUpID09PSAndW5kZWZpbmVkJykgfHwgIWNvbnNvbGUubG9nKVxue1xuICAgIC8vIG5vIGNvbnNvbGUgYXZhaWxhYmxlOyBtYWtlIGZ1bmN0aW9ucyBuby1vcFxuICAgIGNvbnNvbGVMb2dnZXIuZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmxvZyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGNvbnNvbGVMb2dnZXIuaW5mbyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGNvbnNvbGVMb2dnZXIud2FybiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGNvbnNvbGVMb2dnZXIuZXJyb3IgPSBmdW5jdGlvbiAoKSB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zb2xlTG9nZ2VyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgZG9tID0ge307XG5cbmRvbS5pc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWwpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICByZXR1cm4gc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbic7XG59O1xuXG5kb20uaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihlbCkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIHJldHVybiBzdHlsZS5kaXNwbGF5ID09PSAnbm9uZSc7XG59O1xuXG5kb20uaXNTaG93biA9IGZ1bmN0aW9uIGlzU2hvd24oZWwpIHtcbiAgcmV0dXJuICFkb20uaXNIaWRkZW4oZWwpO1xufTtcblxuZG9tLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsKSB7XG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IGVsLnN0eWxlLmRpc3BsYXk7XG4gIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5kb20uc2hvdyA9IGZ1bmN0aW9uIHNob3coZWwpIHtcbiAgaWYgKGRvbS5pc0hpZGRlbihlbCkpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX19wcmV2X3N0eWxlX2Rpc3BsYXlfO1xuICB9XG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IHVuZGVmaW5lZDtcbn07XG5cbmRvbS5oYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjc3NDbGFzcykge1xuICB2YXIgY2xhc3NlcywgaSwgbGVuO1xuXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcykpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIGNzc0NsYXNzID0gKGNzc0NsYXNzIHx8ICcnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGlmIChjbGFzc2VzW2ldID09PSBjc3NDbGFzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZG9tLmFkZENsYXNzID0gZnVuY3Rpb24gKGVsLCBjc3NDbGFzcykge1xuICB2YXIgY2xhc3NlcztcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSB1dGlsaXRpZXMuaXNTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSA/IGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgvXFxzKy8pIDogW107XG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhjc3NDbGFzcykgJiYgdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MucmVwbGFjZSgvXFxzKy8sICcnKSkpIHtcbiAgICAgIGNsYXNzZXMucHVzaChjc3NDbGFzcyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3Nlcy5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxufTtcblxuZG9tLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjc3NDbGFzcykge1xuICB2YXIgY2xhc3NlcztcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSB1dGlsaXRpZXMuaXNTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSA/IGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgvXFxzKy8pIDogW107XG4gICAgdmFyIG5ld0NsYXNzZXMgPSBbXTtcbiAgICB2YXIgaSwgbGVuO1xuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XG5cbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNzc0NsYXNzICE9PSBjbGFzc2VzW2ldKSB7XG4gICAgICAgICAgbmV3Q2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV3Q2xhc3Nlcy5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxufTtcblxuZG9tLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goZWwsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGUsIHR5cGUsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KHR5cGUpKXtcbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh0eXBlLCBmdW5jdGlvbih0KSB7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xuICAgIC8vIFdBUk5JTkchISEgdGhpcyBpcyBhIHZlcnkgbmFpdmUgaW1wbGVtZW50YXRpb24gIVxuICAgIC8vIHRoZSBldmVudCBvYmplY3QgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBoYW5kbGVyXG4gICAgLy8gd291bGQgbm90IGJlIHRoZXJlIGZvciBJRThcbiAgICAvLyB3ZSBzaG91bGQgdXNlIFwid2luZG93LmV2ZW50XCIgYW5kIHRoZW4gXCJldmVudC5zcmNFbGVtZW50XCJcbiAgICAvLyBpbnN0ZWFkIG9mIFwiZXZlbnQudGFyZ2V0XCJcbiAgICBlbC5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcbiAgfVxufTtcblxuZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goZWwsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHR5cGUsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KHR5cGUpKXtcbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh0eXBlLCBmdW5jdGlvbih0KSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgfSBlbHNlIGlmIChlbC5kZXRhY2hFdmVudCkge1xuICAgIGVsLmRldGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGVsW1wib25cIiArIHR5cGVdID0gbnVsbDtcbiAgfVxufTtcblxuZG9tLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsLCBldmVudCkge1xuICBpZiAoZWwuZGlzcGF0Y2hFdmVudCkge1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2Uge1xuICAgIGVsLmZpcmVFdmVudChcIm9uXCIgKyBldmVudC5ldmVudFR5cGUsIGV2ZW50KTtcbiAgfVxufTtcblxuZG9tLmlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5kb20uZ2V0VGV4dENvbnRlbnQgPSBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChlbCl7XG4gIHJldHVybiBlbC50ZXh0Q29udGVudCB8fCBlbC50ZXh0O1xufTtcblxuZG9tLnByZXBlbmRDaGlsZCA9IGZ1bmN0aW9uIHByZXBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG4gIGlmKGNoaWxkLnBhcmVudE5vZGUpe1xuICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG4gIHJldHVybiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBwYXJlbnQuZmlyc3RDaGlsZCk7XG59O1xuXG5kb20ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKXtcbiAgaWYobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpe1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgfVxufTtcblxuZG9tLmlzRG9tRWxlbWVudCA9IGZ1bmN0aW9uIGlzRG9tRWxlbWVudChvKSB7XG4gIHJldHVybiBvIGluc3RhbmNlb2YgRWxlbWVudDtcbn07XG5cbmRvbS5jbGljayA9IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKSB7XG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbn07XG5cbmRvbS5vbmNlID0gZnVuY3Rpb24oZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gaGFuZGxlcldyYXAoKSB7XG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyV3JhcCk7XG4gIH1cblxuICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcldyYXApO1xufTtcblxuLy9Ob3RlOiB0aGVyZSBpcyBubyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gaVBhZCBzbyB3ZSBuZWVkIGEgZmFsbGJhY2tcbmRvbS5nZXREaW1lbnNpb24gPSBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWxlbWVudCkge1xuICB2YXIgcmVjdDtcblxuICAvL09uIElFOSBhbmQgYmVsb3cgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGRvZXMgbm90IHdvcmsgY29uc2lzdGVudGx5XG4gIGlmKCF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVybFV0aWxzID0gcmVxdWlyZSgnLi91cmxVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBIdHRwUmVxdWVzdEVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ0h0dHBSZXF1ZXN0IEVycm9yOiAnICsgKG1lc3NhZ2UgfHwgJycpO1xufVxuSHR0cFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbkh0dHBSZXF1ZXN0RXJyb3IucHJvdG90eXBlLm5hbWUgPSBcIkh0dHBSZXF1ZXN0IEVycm9yXCI7XG5cbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0KGNyZWF0ZVhocikge1xuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNyZWF0ZVhocikpIHtcbiAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcignTWlzc2luZyBYTUxIdHRwUmVxdWVzdCBmYWN0b3J5IG1ldGhvZCcpO1xuICB9XG5cbiAgdGhpcy5jcmVhdGVYaHIgPSBjcmVhdGVYaHI7XG59XG5cbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHNhbml0eUNoZWNrKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB2YXIgdGltZW91dCwgdGltZW91dElkO1xuICB2YXIgeGhyID0gdGhpcy5jcmVhdGVYaHIoKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRpbWVvdXQgPSB1dGlsaXRpZXMuaXNOdW1iZXIob3B0aW9ucy50aW1lb3V0KSA/IG9wdGlvbnMudGltZW91dCA6IDA7XG5cbiAgeGhyLm9wZW4obWV0aG9kLCB1cmxVdGlscy51cmxQYXJ0cyh1cmwpLmhyZWYsIHRydWUpO1xuXG4gIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICBzZXRIZWFkZXJzKHhociwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICB9XG5cbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzVGV4dCwgcmVzcG9uc2UsIHN0YXR1cztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvbmx5IHdheSB0byBkbyBhIHNlY3VyZSByZXF1ZXN0IG9uIElFOCBhbmQgSUU5IGlzIHdpdGggdGhlIFhEb21haW5SZXF1ZXN0IG9iamVjdC4gVW5mb3J0dW5hdGVseSwgbWljcm9zb2Z0IGlzXG4gICAgICogc28gbmljZSB0aGF0IGRlY2lkZWQgdGhhdCB0aGUgc3RhdHVzIHByb3BlcnR5IGFuZCB0aGUgJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgbWV0aG9kIHdoZXJlIG5vdCBuZWVkZWQgc28gd2UgaGF2ZSB0b1xuICAgICAqIGZha2UgdGhlbS4gSWYgdGhlIHJlcXVlc3QgZ2V0cyBkb25lIHdpdGggYW4gWERvbWFpblJlcXVlc3QgaW5zdGFuY2UsIHdlIHdpbGwgYXNzdW1lIHRoYXQgdGhlcmUgYXJlIG5vIGhlYWRlcnMgYW5kXG4gICAgICogdGhlIHN0YXR1cyB3aWxsIGFsd2F5cyBiZSAyMDAuIElmIHlvdSBkb24ndCBsaWtlIGl0LCBETyBOT1QgVVNFIEFOQ0lFTlQgQlJPV1NFUlMhISFcbiAgICAgKlxuICAgICAqIEZvciBtb3IgaW5mbyBnbyB0bzogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9jYzI4ODA2MCh2PXZzLjg1KS5hc3B4XG4gICAgICovXG4gICAgaWYgKCF4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCF4aHIuc3RhdHVzKSB7XG4gICAgICB4aHIuc3RhdHVzID0gMjAwO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRpbWVvdXRJZCkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dCB8fCAnJztcblxuICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXG4gICAgLy8gcmVzcG9uc2UvcmVzcG9uc2VUeXBlIHByb3BlcnRpZXMgd2VyZSBpbnRyb2R1Y2VkIGluIFhIUiBMZXZlbDIgc3BlYyAoc3VwcG9ydGVkIGJ5IElFMTApXG4gICAgcmVzcG9uc2UgPSAoJ3Jlc3BvbnNlJyBpbiB4aHIpID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcblxuICAgIC8vIG5vcm1hbGl6ZSBJRTkgYnVnIChodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xNDUwKVxuICAgIHN0YXR1cyA9IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzO1xuXG4gICAgY2FsbGJhY2soXG4gICAgICBzdGF0dXMsXG4gICAgICByZXNwb25zZSxcbiAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxcbiAgICAgIHN0YXR1c1RleHQpO1xuICB9O1xuXG4gIHhoci5vbmVycm9yID0gcmVxdWVzdEVycm9yO1xuICB4aHIub25hYm9ydCA9IHJlcXVlc3RFcnJvcjtcblxuICB4aHIuc2VuZCgpO1xuXG4gIGlmICh0aW1lb3V0ID4gMCkge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgeGhyICYmIHhoci5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHVybCkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcodXJsKSkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIHVybCAnXCIgKyB1cmwgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCBoYW5kbGVyICdcIiArIGNhbGxiYWNrICsgXCInIGZvciB0aGUgaHR0cCByZXF1ZXN0XCIpO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG9wdGlvbnMpICYmICF1dGlsaXRpZXMuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCBvcHRpb25zIG1hcCAnXCIgKyBvcHRpb25zICsgXCInXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEhlYWRlcnMoeGhyLCBoZWFkZXJzKSB7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVlc3RFcnJvcigpIHtcbiAgICBjYWxsYmFjaygtMSwgbnVsbCwgbnVsbCwgJycpO1xuICB9XG59O1xuXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdGhpcy5ydW4oJ0dFVCcsIHVybCwgcHJvY2Vzc1Jlc3BvbnNlLCBvcHRpb25zKTtcblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2Uoc3RhdHVzLCByZXNwb25zZSwgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCkge1xuICAgIGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBIdHRwUmVxdWVzdEVycm9yKHN0YXR1c1RleHQpLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzU3RyaW5nLCBzdGF0dXNUZXh0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7XG4gICAgcmV0dXJuIDIwMCA8PSBzdGF0dXMgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVYaHIoKSB7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgaWYgKCEoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpKSB7XG4gICAgLy8gWERvbWFpblJlcXVlc3QgZm9yIElFLlxuICAgIHhociA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICB9XG4gIHJldHVybiB4aHI7XG59XG5cbnZhciBodHRwID0gbmV3IEh0dHBSZXF1ZXN0KGNyZWF0ZVhocik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBodHRwOiBodHRwLFxuICBIdHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXF1ZXN0RXJyb3I6IEh0dHBSZXF1ZXN0RXJyb3IsXG4gIGNyZWF0ZVhocjogY3JlYXRlWGhyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaHRtbDU6IFtcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAndGV4dC9qYXZhc2NyaXB0MS4wJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0MS4yJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0MS40JyxcbiAgICAndGV4dC9qc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvZWNtYXNjcmlwdCcsXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuMCcsXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuMicsXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuNCcsXG4gICAgJ3RleHQvbGl2ZXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2VjbWFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHQnLFxuICBdLFxuXG4gIGZsYXNoOiBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ1xuICBdLFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBwbGF5ZXJVdGlscyA9IHt9O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FwdHVyZXMgdGhlIHBvcnRpb25zIG9mIHBsYXllciBzdGF0ZSByZWxldmFudCB0b1xuICogdmlkZW8gcGxheWJhY2suIFRoZSByZXN1bHQgb2YgdGhpcyBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIHRvXG4gKiByZXN0b3JlUGxheWVyU25hcHNob3Qgd2l0aCBhIHBsYXllciB0byByZXR1cm4gdGhlIHBsYXllciB0byB0aGUgc3RhdGUgaXRcbiAqIHdhcyBpbiB3aGVuIHRoaXMgZnVuY3Rpb24gd2FzIGludm9rZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGxheWVyIFRoZSB2aWRlb2pzIHBsYXllciBvYmplY3RcbiAqL1xucGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiBnZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcblxuICB2YXIgc25hcHNob3QgPSB7XG4gICAgZW5kZWQ6IHBsYXllci5lbmRlZCgpLFxuICAgIHNyYzogcGxheWVyLmN1cnJlbnRTcmMoKSxcbiAgICBjdXJyZW50VGltZTogcGxheWVyLmN1cnJlbnRUaW1lKCksXG4gICAgdHlwZTogcGxheWVyLmN1cnJlbnRUeXBlKCksXG4gICAgcGxheWluZzogIXBsYXllci5wYXVzZWQoKSxcbiAgICBzdXBwcmVzc2VkVHJhY2tzOiBnZXRTdXBwcmVzc2VkVHJhY2tzKHBsYXllcilcbiAgfTtcblxuICBpZiAodGVjaCkge1xuICAgIHNuYXBzaG90Lm5hdGl2ZVBvc3RlciA9IHRlY2gucG9zdGVyO1xuICAgIHNuYXBzaG90LnN0eWxlID0gdGVjaC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIH1cblxuXHR2YXIgZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmpzLWRvY2stdGV4dCcpO1xuXHRpZiAoZWxzICYmIGVscy5sZW5ndGggPiAwKSB7XG5cdFx0c25hcHNob3QuZG9ja1RleHQgPSBlbHNbMF07XG5cdFx0c25hcHNob3QuZG9ja1RleHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuICByZXR1cm4gc25hcHNob3Q7XG5cbiAgLyoqKiogTG9jYWwgRnVuY3Rpb25zICoqKiovXG4gIGZ1bmN0aW9uIGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKSB7XG4gICAgdmFyIHRyYWNrcyA9IHBsYXllci5yZW1vdGVUZXh0VHJhY2tzID8gcGxheWVyLnJlbW90ZVRleHRUcmFja3MoKSA6IFtdO1xuXG4gICAgaWYgKHRyYWNrcyAmJiB1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MudHJhY2tzXykpIHtcbiAgICAgIHRyYWNrcyA9IHRyYWNrcy50cmFja3NfO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tzKSkge1xuICAgICAgdHJhY2tzID0gW107XG4gICAgfVxuXG4gICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBbXTtcbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgIHN1cHByZXNzZWRUcmFja3MucHVzaCh7XG4gICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgbW9kZTogdHJhY2subW9kZVxuICAgICAgfSk7XG4gICAgICB0cmFjay5tb2RlID0gJ2Rpc2FibGVkJztcbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwcmVzc2VkVHJhY2tzO1xuICB9XG59O1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIG1vZGlmeSB0aGUgc3BlY2lmaWVkIHBsYXllciBzbyB0aGF0IGl0cyBzdGF0ZSBpcyBlcXVpdmFsZW50IHRvXG4gKiB0aGUgc3RhdGUgb2YgdGhlIHNuYXBzaG90LlxuICogQHBhcmFtIHtvYmplY3R9IHNuYXBzaG90IC0gdGhlIHBsYXllciBzdGF0ZSB0byBhcHBseVxuICovXG5wbGF5ZXJVdGlscy5yZXN0b3JlUGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiByZXN0b3JlUGxheWVyU25hcHNob3QocGxheWVyLCBzbmFwc2hvdCkge1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgYXR0ZW1wdHMgPSAyMDsgLy8gdGhlIG51bWJlciBvZiByZW1haW5pbmcgYXR0ZW1wdHMgdG8gcmVzdG9yZSB0aGUgc25hcHNob3RcblxuICBpZiAoc25hcHNob3QubmF0aXZlUG9zdGVyKSB7XG4gICAgdGVjaC5wb3N0ZXIgPSBzbmFwc2hvdC5uYXRpdmVQb3N0ZXI7XG4gIH1cblxuICBpZiAoJ3N0eWxlJyBpbiBzbmFwc2hvdCkge1xuICAgIC8vIG92ZXJ3cml0ZSBhbGwgY3NzIHN0eWxlIHByb3BlcnRpZXMgdG8gcmVzdG9yZSBzdGF0ZSBwcmVjaXNlbHlcbiAgICB0ZWNoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzbmFwc2hvdC5zdHlsZSB8fCAnJyk7XG4gIH1cblxuXHRpZiAoc25hcHNob3QuZG9ja1RleHQpIHtcblx0XHRzbmFwc2hvdC5kb2NrVGV4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fVxuXG4gIC8vaWYgKGhhc1NyY0NoYW5nZWQocGxheWVyLCBzbmFwc2hvdCkpIHtcblxuICAgIC8vIG9uIGlvczcsIGZpZGRsaW5nIHdpdGggdGV4dFRyYWNrcyB0b28gZWFybHkgd2lsbCBjYXVzZSBzYWZhcmkgdG8gY3Jhc2hcbiAgICBwbGF5ZXIub25lKCdjb250ZW50bG9hZGVkbWV0YWRhdGEnLCByZXN0b3JlVHJhY2tzKTtcblxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCB0cnlUb1Jlc3VtZSk7XG4gICAgZW5zdXJlQ2FucGxheUV2dEdldHNGaXJlZCgpO1xuXG4gICAgLy8gaWYgdGhlIHNyYyBjaGFuZ2VkIGZvciBhZCBwbGF5YmFjaywgcmVzZXQgaXRcbiAgICBwbGF5ZXIuc3JjKHtzcmM6IHNuYXBzaG90LnNyYywgdHlwZTogc25hcHNob3QudHlwZX0pO1xuXG4gICAgLy8gc2FmYXJpIHJlcXVpcmVzIGEgY2FsbCB0byBgbG9hZGAgdG8gcGljayB1cCBhIGNoYW5nZWQgc291cmNlXG4gICAgLy8gcGxheWVyLmxvYWQoKTtcdC8vIFNhZmFyaSAxMSBubyBtb3JlIHJlcXVpcmVzICdsb2FkJy4gRmlyZWZveCBkb2Vzbid0IGxpa2UgJ2xvYWQnIGNhbGwgZm9yIGFscmVhZHkgbG9hZGVkIGNvbnRlbnQgKGluIGNhc2Ugb2YgQWRMb2FkZWQgdGltZW91dCkuXG5cbiAgLyp9IGVsc2Uge1xuICAgIHJlc3RvcmVUcmFja3MoKTtcblxuICAgIGlmIChzbmFwc2hvdC5wbGF5aW5nKSB7XG4gICAgICBwbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgfSovXG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIC8qKlxuICAgKiBTb21ldGltZXMgZmlyZWZveCBkb2VzIG5vdCB0cmlnZ2VyIHRoZSAnY2FucGxheScgZXZ0LlxuICAgKiBUaGlzIGNvZGUgZW5zdXJlIHRoYXQgaXQgYWx3YXlzIGdldHMgdHJpZ2dlcmVkIHRyaWdnZXJlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbnBsYXlFdnRHZXRzRmlyZWQoKSB7XG4gICAgdmFyIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwbGF5ZXIudHJpZ2dlcignY2FucGxheScpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcGxheWVyLm9uZSgnY2FucGxheScsIGZ1bmN0aW9uKCl7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGxheWVyIG5lZWRzIHRvIGJlIHJlc3RvcmVkIHRvIGl0cyBzdGF0ZVxuICAgKiBiZWZvcmUgYWQgcGxheWJhY2sgYmVnYW4uIFdpdGggYSBjdXN0b20gYWQgZGlzcGxheSBvciBidXJuZWQtaW5cbiAgICogYWRzLCB0aGUgY29udGVudCBwbGF5ZXIgc3RhdGUgaGFzbid0IGJlZW4gbW9kaWZpZWQgYW5kIHNvIG5vXG4gICAqIHJlc3RvcmF0aW9uIGlzIHJlcXVpcmVkXG4gICAqL1xuICAvKmZ1bmN0aW9uIGhhc1NyY0NoYW5nZWQocGxheWVyLCBzbmFwc2hvdCkge1xuICAgIGlmIChwbGF5ZXIuc3JjKCkpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIuc3JjKCkgIT09IHNuYXBzaG90LnNyYztcbiAgICB9XG4gICAgLy8gdGhlIHBsYXllciB3YXMgY29uZmlndXJlZCB0aHJvdWdoIHNvdXJjZSBlbGVtZW50IGNoaWxkcmVuXG4gICAgcmV0dXJuIHBsYXllci5jdXJyZW50U3JjKCkgIT09IHNuYXBzaG90LnNyYztcbiAgfSovXG5cbiAgZnVuY3Rpb24gcmVzdG9yZVRyYWNrcygpIHtcbiAgICB2YXIgc3VwcHJlc3NlZFRyYWNrcyA9IHNuYXBzaG90LnN1cHByZXNzZWRUcmFja3M7XG4gICAgc3VwcHJlc3NlZFRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja1NuYXBzaG90KSB7XG4gICAgICB0cmFja1NuYXBzaG90LnRyYWNrLm1vZGUgPSB0cmFja1NuYXBzaG90Lm1vZGU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSB2aWRlbyBlbGVtZW50IGhhcyBsb2FkZWQgZW5vdWdoIG9mIHRoZSBzbmFwc2hvdCBzb3VyY2VcbiAgICogdG8gYmUgcmVhZHkgdG8gYXBwbHkgdGhlIHJlc3Qgb2YgdGhlIHN0YXRlXG4gICAqL1xuICBmdW5jdGlvbiB0cnlUb1Jlc3VtZSgpIHtcblxuICAgIC8vIGlmIHNvbWUgcGVyaW9kIG9mIHRoZSB2aWRlbyBpcyBzZWVrYWJsZSwgcmVzdW1lIHBsYXliYWNrXG4gICAgLy8gb3RoZXJ3aXNlIGRlbGF5IGEgYml0IGFuZCB0aGVuIGNoZWNrIGFnYWluIHVubGVzcyB3ZSdyZSBvdXQgb2YgYXR0ZW1wdHNcblxuXHQgIC8vIHNhZmFyaSAxMSByZXF1aXJlcyBjYWxsIGBwbGF5YCB0byBtYWtlIHNlZWsgYXZhaWxhYmxlXG4gICAgICBwbGF5ZXIucGxheSgpO1xuXG4gICAgaWYgKCFwbGF5ZXJVdGlscy5pc1JlYWR5VG9SZXN1bWUocGxheWVyKSAmJiBhdHRlbXB0cy0tKSB7XG4gICAgICBzZXRUaW1lb3V0KHRyeVRvUmVzdW1lLCA1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKHBsYXllci5jdXJyZW50VGltZSgpICE9PSBzbmFwc2hvdC5jdXJyZW50VGltZSkge1xuICAgICAgICAgIGlmIChzbmFwc2hvdC5wbGF5aW5nKSB7IC8vIGlmIG5lZWRlZCByZXN0b3JlIHBsYXlpbmcgc3RhdHVzIGFmdGVyIHNlZWsgY29tcGxldGVzXG4gICAgICAgICAgICBwbGF5ZXIub25lKCdzZWVrZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUoc25hcHNob3QuY3VycmVudFRpbWUpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoc25hcHNob3QucGxheWluZykge1xuICAgICAgICAgIC8vIGlmIG5lZWRlZCBhbmQgbm8gc2VlayBoYXMgYmVlbiBwZXJmb3JtZWQsIHJlc3RvcmUgcGxheWluZyBzdGF0dXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdmlkZW9qcy5sb2cud2FybignRmFpbGVkIHRvIHJlc3VtZSB0aGUgY29udGVudCBhZnRlciBhbiBhZHZlcnRpc2VtZW50JywgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5wbGF5ZXJVdGlscy5pc1JlYWR5VG9SZXN1bWUgPSBmdW5jdGlvbiAocGxheWVyKSB7XG5cbiAgaWYgKHBsYXllci5yZWFkeVN0YXRlKCkgPiAxKSB7XG4gICAgLy8gc29tZSBicm93c2VycyBhbmQgbWVkaWEgYXJlbid0IFwic2Vla2FibGVcIi5cbiAgICAvLyByZWFkeVN0YXRlIGdyZWF0ZXIgdGhhbiAxIGFsbG93cyBmb3Igc2Vla2luZyB3aXRob3V0IGV4Y2VwdGlvbnNcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwbGF5ZXIuc2Vla2FibGUoKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gaWYgdGhlIHBsYXllciBkb2Vzbid0IGV4cG9zZSB0aGUgc2Vla2FibGUgdGltZSByYW5nZXMsIHRyeSB0b1xuICAgIC8vIHJlc3VtZSBwbGF5YmFjayBpbW1lZGlhdGVseVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHBsYXllci5zZWVrYWJsZSgpLmxlbmd0aCA+IDApIHtcbiAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHByZXBhcmVzIHRoZSBwbGF5ZXIgdG8gZGlzcGxheSBhZHMuXG4gKiBBZGRpbmcgY29udmVuaWVuY2UgZXZlbnRzIGxpa2UgdGhlICd2YXN0LmZpcnNQbGF5JyB0aGF0IGdldHMgZmlyZWQgd2hlbiB0aGUgdmlkZW8gaXMgZmlyc3QgcGxheWVkXG4gKiBhbmQgYWRzIHRoZSBibGFja1Bvc3RlciB0byB0aGUgcGxheWVyIHRvIHByZXZlbnQgY29udGVudCBmcm9tIGJlaW5nIGRpc3BsYXllZCBiZWZvcmUgdGhlIHByZXJvbGwgYWQuXG4gKlxuICogQHBhcmFtIHBsYXllclxuICovXG5wbGF5ZXJVdGlscy5wcmVwYXJlRm9yQWRzID0gZnVuY3Rpb24gKHBsYXllcikge1xuICB2YXIgYmxhY2tQb3N0ZXIgPSBwbGF5ZXIuYWRkQ2hpbGQoJ2JsYWNrUG9zdGVyJyk7XG4gIC8vdmFyIF9maXJzdFBsYXkgPSB0cnVlO1xuICB2YXIgdm9sdW1lU25hcHNob3Q7XG5cblxuICBtb25rZXlQYXRjaFBsYXllckFwaSgpO1xuXG4gIHBsYXllci5vbigncGxheScsIHRyeVRvVHJpZ2dlckZpcnN0UGxheSk7XG4gIHBsYXllci5vbigndmFzdC5yZXNldCcsIHJlc2V0Rmlyc3RQbGF5KTsvL0V2ZXJ5IHRpbWUgd2UgY2hhbmdlIHRoZSBzb3VyY2VzIHdlIHJlc2V0IHRoZSBmaXJzdCBwbGF5LlxuICBwbGF5ZXIub24oJ3Zhc3QuZmlyc3RQbGF5JywgcmVzdG9yZUNvbnRlbnRWb2x1bWUpO1xuICBwbGF5ZXIub24oJ2Vycm9yJywgaGlkZUJsYWNrUG9zdGVyKTsvL0lmIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBwbGF5ZXIgd2UgcmVtb3ZlIHRoZSBibGFja3Bvc3RlciB0byBzaG93IHRoZSBlcnIgbXNnXG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgaGlkZUJsYWNrUG9zdGVyKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZEVycm9yJywgaGlkZUJsYWNrUG9zdGVyKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCBhZGRTdHlsZXMpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRFbmQnLCByZW1vdmVTdHlsZXMpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgcmVtb3ZlU3R5bGVzKTtcblxuICAvLyBWSURMQS0yNDY1IC0gaGlkZSB2anMgZXJyb3IgZGlhbG9nIHdoZW4gYWQgcnVubmluZ1xuICB2YXIgZXJyb3JEaWFsb2c7XG4gIHZhciBkbGdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmpzLWVycm9yLWRpc3BsYXknKTtcbiAgaWYgKGRsZ3MgJiYgZGxncy5sZW5ndGggPiAwKSB7XG5cdCAgZXJyb3JEaWFsb2cgPSBkbGdzWzBdO1xuXHQgIGVycm9yRGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XG4gIH1cbiAgXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICAvKipcbiAgIFdoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIGlzIHVnbHkgYW5kIGhvcnJpYmxlIGFuZCBJIHNob3VsZCB0aGluayB0d2ljZSBiZWZvcmUgY2FsbGluZyBteXNlbGYgYSBnb29kIGRldmVsb3Blci4gV2l0aCB0aGF0IHNhaWQsXG4gICBpdCBpcyB0aGUgYmVzdCBzb2x1dGlvbiBJIGNvdWxkIGZpbmQgdG8gbXV0ZSB0aGUgdmlkZW8gdW50aWwgdGhlICdwbGF5JyBldmVudCBoYXBwZW5zIChvbiBtb2JpbGUgZGV2aWNlcykgYW5kIHRoZSBwbHVnaW4gY2FuIGRlY2lkZSB3aGV0aGVyXG4gICB0byBwbGF5IHRoZSBhZCBvciBub3QuXG5cbiAgIFdlIGFsc28gbmVlZCB0aGlzIG1vbmtleXBhdGNoIHRvIGJlIGFibGUgdG8gcGF1c2UgYW5kIHJlc3VtZSBhbiBhZCB1c2luZyB0aGUgcGxheWVyJ3MgQVBJXG5cbiAgIElmIHlvdSBoYXZlIGEgYmV0dGVyIHNvbHV0aW9uIHBsZWFzZSBkbyB0ZWxsIG1lLlxuICAgKi9cbiAgZnVuY3Rpb24gbW9ua2V5UGF0Y2hQbGF5ZXJBcGkoKSB7XG5cbiAgICAvKipcbiAgICAgKiBNb25rZXkgcGF0Y2ggbmVlZGVkIHRvIGhhbmRsZSBmaXJzdFBsYXkgYW5kIHJlc3VtZSBvZiBwbGF5aW5nIGFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHJlc3RvcmluZyBhIFZBU1QgYWQuXG4gICAgICogQHJldHVybnMge3BsYXllcn1cbiAgICAgKi9cbiAgICB2YXIgb3JpZ1BsYXkgPSBwbGF5ZXIucGxheTtcbiAgICBwbGF5ZXIucGxheSA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BsYXkpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgaWYgKGlzRmlyc3RQbGF5KCkpIHtcbiAgICAgICAgZmlyc3RQbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bWUoY2FsbE9yaWdQbGF5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICAgIGZ1bmN0aW9uIGZpcnN0UGxheSgpIHtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNJUGhvbmUoKSkge1xuICAgICAgICAgIGlmICghdm9sdW1lU25hcHNob3QpIHtcbiAgICAgICAgICAgICAgdm9sdW1lU25hcHNob3QgPSBzYXZlVm9sdW1lU25hcHNob3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyLm11dGVkKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzdW1lKGNhbGxPcmlnUGxheSkge1xuICAgICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQbGF5KSB7XG4gICAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0LnJlc3VtZUFkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIFx0aWYgKCFpc1ZwYWlkUGxheWluZygpKSB7XG4gICAgICAgICAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICAgICAgXHR9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZSBvZiBwbGF5aW5nIGFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHBhdXNpbmcgYSBWQVNUIGFkLlxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XG4gICAgICovXG4gICAgdmFyIG9yaWdQYXVzZSA9IHBsYXllci5wYXVzZTtcbiAgICBwbGF5ZXIucGF1c2UgPSBmdW5jdGlvbiAoY2FsbE9yaWdQYXVzZSkge1xuICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2UpIHtcbiAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0LnBhdXNlQWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICBcdGlmICghaXNWcGFpZFBsYXlpbmcoKSkge1xuICAgICAgXHRcdG9yaWdQYXVzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgXHR9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllciB3aGVuIGFkcyBhcmUgcGxheWluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGF1c2VkID0gcGxheWVyLnBhdXNlZDtcbiAgICBwbGF5ZXIucGF1c2VkID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2VkKSB7XG4gICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQYXVzZWQpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllci52YXN0LmFkVW5pdC5pc1BhdXNlZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdQYXVzZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG4gIFxuICBmdW5jdGlvbiBpc1ZwYWlkUGxheWluZygpIHtcblx0ICByZXR1cm4gcGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuVlBBSUQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc0FkUGxheWluZygpIHtcbiAgICByZXR1cm4gcGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0O1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VG9UcmlnZ2VyRmlyc3RQbGF5KCkge1xuICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XG4gIFx0ICB3aW5kb3cuX21vbFNldHRpbmdzLmZpcnN0UGxheSA9IGZhbHNlO1xuICAgICAgLy9fZmlyc3RQbGF5ID0gZmFsc2U7XG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5maXJzdFBsYXknKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEZpcnN0UGxheSgpIHtcblx0ICB3aW5kb3cuX21vbFNldHRpbmdzLmZpcnN0UGxheSA9IHRydWU7XG5cdCAgICAvL19maXJzdFBsYXkgPSB0cnVlO1xuICAgIGJsYWNrUG9zdGVyLnNob3coKTtcbiAgICByZXN0b3JlQ29udGVudFZvbHVtZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGaXJzdFBsYXkoKSB7XG5cdCAgcmV0dXJuIHdpbmRvdy5fbW9sU2V0dGluZ3MuZmlyc3RQbGF5O1xuXHQgICAgLy9yZXR1cm4gX2ZpcnN0UGxheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVWb2x1bWVTbmFwc2hvdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXV0ZWQ6IHBsYXllci5tdXRlZCgpLFxuICAgICAgdm9sdW1lOiBwbGF5ZXIudm9sdW1lKClcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZUNvbnRlbnRWb2x1bWUoKSB7XG4gICAgaWYgKHZvbHVtZVNuYXBzaG90KSB7XG4gICAgICAvL3BsYXllci5jdXJyZW50VGltZSgwKTtcbiAgICAgIHJlc3RvcmVWb2x1bWVTbmFwc2hvdCh2b2x1bWVTbmFwc2hvdCk7XG4gICAgICB2b2x1bWVTbmFwc2hvdCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZVZvbHVtZVNuYXBzaG90KHNuYXBzaG90KSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc09iamVjdChzbmFwc2hvdCkpIHtcbiAgICAgIHBsYXllci52b2x1bWUoc25hcHNob3Qudm9sdW1lKTtcbiAgICAgIHBsYXllci5tdXRlZChzbmFwc2hvdC5tdXRlZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJsYWNrUG9zdGVyKCkge1xuICAgIGlmICghZG9tLmhhc0NsYXNzKGJsYWNrUG9zdGVyLmVsKCksICd2anMtaGlkZGVuJykpIHtcbiAgICAgIGJsYWNrUG9zdGVyLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdHlsZXMoKSB7XG4gICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLWFkLXBsYXlpbmcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVN0eWxlcygpIHtcblx0ICBwbGF5ZXIub2ZmKCdwbGF5JywgdHJ5VG9UcmlnZ2VyRmlyc3RQbGF5KTtcblx0ICBwbGF5ZXIub2ZmKCd2YXN0LnJlc2V0JywgcmVzZXRGaXJzdFBsYXkpOy8vRXZlcnkgdGltZSB3ZSBjaGFuZ2UgdGhlIHNvdXJjZXMgd2UgcmVzZXQgdGhlIGZpcnN0IHBsYXkuXG5cdCAgcGxheWVyLm9mZigndmFzdC5maXJzdFBsYXknLCByZXN0b3JlQ29udGVudFZvbHVtZSk7XG5cdCAgcGxheWVyLm9mZignZXJyb3InLCBoaWRlQmxhY2tQb3N0ZXIpOy8vSWYgdGhlcmUgaXMgYW4gZXJyb3IgaW4gdGhlIHBsYXllciB3ZSByZW1vdmUgdGhlIGJsYWNrcG9zdGVyIHRvIHNob3cgdGhlIGVyciBtc2dcblx0ICBwbGF5ZXIub2ZmKCd2YXN0LmFkU3RhcnQnLCBoaWRlQmxhY2tQb3N0ZXIpO1xuXHQgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgaGlkZUJsYWNrUG9zdGVyKTtcblx0ICBwbGF5ZXIub2ZmKCd2YXN0LmFkRXJyb3InLCBoaWRlQmxhY2tQb3N0ZXIpO1xuXHQgIHBsYXllci5vZmYoJ3Zhc3QuYWRTdGFydCcsIGFkZFN0eWxlcyk7XG5cdCAgcGxheWVyLm9mZigndmFzdC5hZEVuZCcsIHJlbW92ZVN0eWxlcyk7XG5cdCAgcGxheWVyLm9mZigndmFzdC5hZHNDYW5jZWwnLCByZW1vdmVTdHlsZXMpO1xuXHQgIFxuICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLWFkLXBsYXlpbmcnKTtcblx0ICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmNvbnRyb2xCYXIucGxheVRvZ2dsZS5lbCgpLCAndmpzLWVuZGVkJyk7XG5cdCAgXG5cdCAgaWYgKGVycm9yRGlhbG9nKSB7XG5cdFx0ICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0ICBlcnJvckRpYWxvZy5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuXHRcdCAgfSwgNTAwKTtcblx0ICB9XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBwb3N0ZXIgYXR0cmlidXRlIGZyb20gdGhlIHZpZGVvIGVsZW1lbnQgdGVjaCwgaWYgcHJlc2VudC4gV2hlblxuICogcmV1c2luZyBhIHZpZGVvIGVsZW1lbnQgZm9yIG11bHRpcGxlIHZpZGVvcywgdGhlIHBvc3RlciBpbWFnZSB3aWxsIGJyaWVmbHlcbiAqIHJlYXBwZWFyIHdoaWxlIHRoZSBuZXcgc291cmNlIGxvYWRzLiBSZW1vdmluZyB0aGUgYXR0cmlidXRlIGFoZWFkIG9mIHRpbWVcbiAqIHByZXZlbnRzIHRoZSBwb3N0ZXIgZnJvbSBzaG93aW5nIHVwIGJldHdlZW4gdmlkZW9zLlxuICogQHBhcmFtIHtvYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBwbGF5ZXIgb2JqZWN0XG4gKi9cbnBsYXllclV0aWxzLnJlbW92ZU5hdGl2ZVBvc3RlciA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgaWYgKHRlY2gpIHtcbiAgICB0ZWNoLnJlbW92ZUF0dHJpYnV0ZSgncG9zdGVyJyk7XG4gIH1cbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGxpc3RlbiB0byBtYW55IGV2ZW50cyB1bnRpbCBvbmUgb2YgdGhlbSBnZXRzIGZpcmVkLCB0aGVuIHdlXG4gKiBleGVjdXRlIHRoZSBoYW5kbGVyIGFuZCB1bnN1YnNjcmliZSBhbGwgdGhlIGV2ZW50IGxpc3RlbmVycztcbiAqXG4gKiBAcGFyYW0gcGxheWVyIHNwZWNpZmljIHBsYXllciBmcm9tIHdoZXJlIHRvIGxpc3RlbiBmb3IgdGhlIGV2ZW50c1xuICogQHBhcmFtIGV2ZW50cyBhcnJheSBvZiBldmVudHNcbiAqIEBwYXJhbSBoYW5kbGVyIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgb25jZSBvbmUgb2YgdGhlIGV2ZW50cyBmaXJlc1xuICovXG5wbGF5ZXJVdGlscy5vbmNlID0gZnVuY3Rpb24gb25jZShwbGF5ZXIsIGV2ZW50cywgaGFuZGxlcikge1xuICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHBsYXllci5vZmYoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHBsYXllci5vbihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn07XG5cbi8vcGx1Z2luIHV0aWxzXG5wbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbiA9IGZ1bmN0aW9uKHBsYXllciwgc2hvdykge1xuXHR2YXIgYnV0dG9uID0gcGxheWVyLmJpZ1BsYXlCdXR0b24uZWxfO1xuXHRpZiAoYnV0dG9uKSB7XG5cdFx0aWYgKHNob3cpIHtcblx0XHRcdGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdGJ1dHRvbi5zdHlsZS56SW5kZXggPSA5OTk5OTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGJ1dHRvbi5zdHlsZS56SW5kZXggPSAnJztcblx0XHR9XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyVXRpbHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbi8qKlxuICpcbiAqIElNUE9SVEFOVCBOT1RFOiBUaGlzIGZ1bmN0aW9uIGNvbWVzIGZyb20gYW5ndWxhckpzIGFuZCB3YXMgb3JpZ2luYWxseSBjYWxsZWQgdXJsUmVzb2x2ZVxuICogICAgICAgICAgICAgICAgIHlvdSBjYW4gdGFrZSBhIGxvb2sgYXQgdGhlIG9yaWdpbmFsIGNvZGUgaGVyZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvbWFzdGVyL3NyYy9uZy91cmxVdGlscy5qc1xuICpcbiAqIEltcGxlbWVudGF0aW9uIE5vdGVzIGZvciBub24tSUUgYnJvd3NlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFzc2lnbmluZyBhIFVSTCB0byB0aGUgaHJlZiBwcm9wZXJ0eSBvZiBhbiBhbmNob3IgRE9NIG5vZGUsIGV2ZW4gb25lIGF0dGFjaGVkIHRvIHRoZSBET00sXG4gKiByZXN1bHRzIGJvdGggaW4gdGhlIG5vcm1hbGl6aW5nIGFuZCBwYXJzaW5nIG9mIHRoZSBVUkwuICBOb3JtYWxpemluZyBtZWFucyB0aGF0IGEgcmVsYXRpdmVcbiAqIFVSTCB3aWxsIGJlIHJlc29sdmVkIGludG8gYW4gYWJzb2x1dGUgVVJMIGluIHRoZSBjb250ZXh0IG9mIHRoZSBhcHBsaWNhdGlvbiBkb2N1bWVudC5cbiAqIFBhcnNpbmcgbWVhbnMgdGhhdCB0aGUgYW5jaG9yIG5vZGUncyBob3N0LCBob3N0bmFtZSwgcHJvdG9jb2wsIHBvcnQsIHBhdGhuYW1lIGFuZCByZWxhdGVkXG4gKiBwcm9wZXJ0aWVzIGFyZSBhbGwgcG9wdWxhdGVkIHRvIHJlZmxlY3QgdGhlIG5vcm1hbGl6ZWQgVVJMLiAgVGhpcyBhcHByb2FjaCBoYXMgd2lkZVxuICogY29tcGF0aWJpbGl0eSAtIFNhZmFyaSAxKywgTW96aWxsYSAxKywgT3BlcmEgNyssZSBldGMuICBTZWVcbiAqIGh0dHA6Ly93d3cuYXB0YW5hLmNvbS9yZWZlcmVuY2UvaHRtbC9hcGkvSFRNTEFuY2hvckVsZW1lbnQuaHRtbFxuICpcbiAqIEltcGxlbWVudGF0aW9uIE5vdGVzIGZvciBJRVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBJRSA+PSA4IGFuZCA8PSAxMCBub3JtYWxpemVzIHRoZSBVUkwgd2hlbiBhc3NpZ25lZCB0byB0aGUgYW5jaG9yIG5vZGUgc2ltaWxhciB0byB0aGUgb3RoZXJcbiAqIGJyb3dzZXJzLiAgSG93ZXZlciwgdGhlIHBhcnNlZCBjb21wb25lbnRzIHdpbGwgbm90IGJlIHNldCBpZiB0aGUgVVJMIGFzc2lnbmVkIGRpZCBub3Qgc3BlY2lmeVxuICogdGhlbS4gIChlLmcuIGlmIHlvdSBhc3NpZ24gYS5ocmVmID0gXCJmb29cIiwgdGhlbiBhLnByb3RvY29sLCBhLmhvc3QsIGV0Yy4gd2lsbCBiZSBlbXB0eS4pICBXZVxuICogd29yayBhcm91bmQgdGhhdCBieSBwZXJmb3JtaW5nIHRoZSBwYXJzaW5nIGluIGEgMm5kIHN0ZXAgYnkgdGFraW5nIGEgcHJldmlvdXNseSBub3JtYWxpemVkXG4gKiBVUkwgKGUuZy4gYnkgYXNzaWduaW5nIHRvIGEuaHJlZikgYW5kIGFzc2lnbmluZyBpdCBhLmhyZWYgYWdhaW4uICBUaGlzIGNvcnJlY3RseSBwb3B1bGF0ZXMgdGhlXG4gKiBwcm9wZXJ0aWVzIHN1Y2ggYXMgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0LCBldGMuXG4gKlxuICogSUU3IGRvZXMgbm90IG5vcm1hbGl6ZSB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gYW4gYW5jaG9yIG5vZGUuICAoQXBwYXJlbnRseSwgaXQgZG9lcywgaWYgb25lXG4gKiB1c2VzIHRoZSBpbm5lciBIVE1MIGFwcHJvYWNoIHRvIGFzc2lnbiB0aGUgVVJMIGFzIHBhcnQgb2YgYW4gSFRNTCBzbmlwcGV0IC1cbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3MjcyOSkgIEhvd2V2ZXIsIHNldHRpbmcgaW1nW3NyY10gZG9lcyBub3JtYWxpemUgdGhlIFVSTC5cbiAqIFVuZm9ydHVuYXRlbHksIHNldHRpbmcgaW1nW3NyY10gdG8gc29tZXRoaW5nIGxpa2UgXCJqYXZhc2NyaXB0OmZvb1wiIG9uIElFIHRocm93cyBhbiBleGNlcHRpb24uXG4gKiBTaW5jZSB0aGUgcHJpbWFyeSB1c2FnZSBmb3Igbm9ybWFsaXppbmcgVVJMcyBpcyB0byBzYW5pdGl6ZSBzdWNoIFVSTHMsIHdlIGNhbid0IHVzZSB0aGF0XG4gKiBtZXRob2QgYW5kIElFIDwgOCBpcyB1bnN1cHBvcnRlZC5cbiAqXG4gKiBSZWZlcmVuY2VzOlxuICogICBodHRwOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQW5jaG9yRWxlbWVudFxuICogICBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcbiAqICAgaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvcHVsbC8yOTAyXG4gKiAgIGh0dHA6Ly9qYW1lcy5wYWRvbHNleS5jb20vamF2YXNjcmlwdC9wYXJzaW5nLXVybHMtd2l0aC10aGUtZG9tL1xuICpcbiAqIEBraW5kIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkLlxuICogQGRlc2NyaXB0aW9uIE5vcm1hbGl6ZXMgYW5kIHBhcnNlcyBhIFVSTC5cbiAqIEByZXR1cm5zIHtvYmplY3R9IFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgVVJMIGFzIGEgZGljdGlvbmFyeS5cbiAqXG4gKiAgIHwgbWVtYmVyIG5hbWUgICB8IERlc2NyaXB0aW9uICAgIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGhyZWYgICAgICAgICAgfCBBIG5vcm1hbGl6ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgVVJMIGlmIGl0IHdhcyBub3QgYW4gYWJzb2x1dGUgVVJMIHxcbiAqICAgfCBwcm90b2NvbCAgICAgIHwgVGhlIHByb3RvY29sIGluY2x1ZGluZyB0aGUgdHJhaWxpbmcgY29sb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgIHwgaG9zdCAgICAgICAgICB8IFRoZSBob3N0IGFuZCBwb3J0IChpZiB0aGUgcG9ydCBpcyBub24tZGVmYXVsdCkgb2YgdGhlIG5vcm1hbGl6ZWRVcmwgICAgfFxuICogICB8IHNlYXJjaCAgICAgICAgfCBUaGUgc2VhcmNoIHBhcmFtcywgbWludXMgdGhlIHF1ZXN0aW9uIG1hcmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgfCBoYXNoICAgICAgICAgIHwgVGhlIGhhc2ggc3RyaW5nLCBtaW51cyB0aGUgaGFzaCBzeW1ib2xcbiAqICAgfCBob3N0bmFtZSAgICAgIHwgVGhlIGhvc3RuYW1lXG4gKiAgIHwgcG9ydCAgICAgICAgICB8IFRoZSBwb3J0LCB3aXRob3V0IFwiOlwiXG4gKiAgIHwgcGF0aG5hbWUgICAgICB8IFRoZSBwYXRobmFtZSwgYmVnaW5uaW5nIHdpdGggXCIvXCJcbiAqXG4gKi9cblxudmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4vKipcbiAqIGRvY3VtZW50TW9kZSBpcyBhbiBJRS1vbmx5IHByb3BlcnR5XG4gKiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvY2MxOTY5ODgodj12cy44NSkuYXNweFxuICovXG52YXIgbXNpZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcblxuZnVuY3Rpb24gdXJsUGFydHModXJsKSB7XG4gIHZhciBocmVmID0gdXJsO1xuXG4gIGlmIChtc2llKSB7XG4gICAgLy8gTm9ybWFsaXplIGJlZm9yZSBwYXJzZS4gIFJlZmVyIEltcGxlbWVudGF0aW9uIE5vdGVzIG9uIHdoeSB0aGlzIGlzXG4gICAgLy8gZG9uZSBpbiB0d28gc3RlcHMgb24gSUUuXG4gICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcbiAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgfVxuXG4gIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgcmV0dXJuIHtcbiAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgcG9ydDogdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsUGFyc2luZ05vZGUucG9ydCk/IHVybFBhcnNpbmdOb2RlLnBvcnQ6IDgwLFxuICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpXG4gICAgICA/IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gIH07XG59XG5cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYSBxdWVyeSBzdHJpbmcgKHNlYXJjaCBwYXJ0IG9mIGEgdXJsKSBhbmQgcmV0dXJucyBhIGRpY3Rpb25hcnkgd2l0aFxuICogdGhlIGRpZmZlcmVudCBrZXkgdmFsdWUgcGFpcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBxcyBxdWVyeVN0cmluZ1xuICovXG5mdW5jdGlvbiBxdWVyeVN0cmluZ1RvT2JqKHFzLCBjb25kKSB7XG4gIHZhciBwYWlycywgcXNPYmo7XG5cbiAgY29uZCA9IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbmQpPyBjb25kIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcXMgPSBxcy50cmltKCkucmVwbGFjZSgvXlxcPy8sICcnKTtcbiAgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xuICBxc09iaiA9IHt9O1xuXG4gIHV0aWxpdGllcy5mb3JFYWNoKHBhaXJzLCBmdW5jdGlvbiAocGFpcikge1xuICAgIHZhciBrZXlWYWx1ZSwga2V5LCB2YWx1ZTtcbiAgICBpZiAocGFpciAhPT0gJycpIHtcbiAgICAgIGtleVZhbHVlID0gcGFpci5zcGxpdCgnPScpO1xuICAgICAga2V5ID0ga2V5VmFsdWVbMF07XG4gICAgICB2YWx1ZSA9IGtleVZhbHVlWzFdO1xuICAgICAgaWYoY29uZChrZXksIHZhbHVlKSl7XG4gICAgICAgIHFzT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBxc09iajtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW4gb2JqZWN0IGFuZCBzZXJpYWxpemVzIGl0IGludG8gYSBxdWVyeSBzdHJpbmcgd2l0aG91dCB0aGUgbGVhZGluZyAnPydcbiAqIEBwYXJhbSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9ialRvUXVlcnlTdHJpbmcob2JqKSB7XG4gIHZhciBwYWlycyA9IFtdO1xuICB1dGlsaXRpZXMuZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgcGFpcnMucHVzaChrZXkgKyAnPScgKyB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXJsUGFydHM6IHVybFBhcnRzLFxuICBxdWVyeVN0cmluZ1RvT2JqOiBxdWVyeVN0cmluZ1RvT2JqLFxuICBvYmpUb1F1ZXJ5U3RyaW5nOiBvYmpUb1F1ZXJ5U3RyaW5nXG59O1xuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE5PREVfVFlQRV9FTEVNRU5UID0gMTtcbnZhciBTTkFLRV9DQVNFX1JFR0VYUCA9IC9bQS1aXS9nO1xudmFyIEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykrJC9pO1xuLypqc2xpbnQgbWF4bGVuOiA1MDAgKi9cbnZhciBJU084MDg2X1JFR0VYUCA9IC9eKFtcXCstXT9cXGR7NH0oPyFcXGR7Mn1cXGIpKSgoLT8pKCgwWzEtOV18MVswLTJdKShcXDMoWzEyXVxcZHwwWzEtOV18M1swMV0pKT98VyhbMC00XVxcZHw1WzAtMl0pKC0/WzEtN10pP3woMDBbMS05XXwwWzEtOV1cXGR8WzEyXVxcZHsyfXwzKFswLTVdXFxkfDZbMS02XSkpKShbVFxcc10oKChbMDFdXFxkfDJbMC0zXSkoKDo/KVswLTVdXFxkKT98MjRcXDo/MDApKFtcXC4sXVxcZCsoPyE6KSk/KT8oXFwxN1swLTVdXFxkKFtcXC4sXVxcZCspPyk/KFt6Wl18KFtcXCstXSkoWzAxXVxcZHwyWzAtM10pOj8oWzAtNV1cXGQpPyk/KT8pPyQvO1xuXG5cbmZ1bmN0aW9uIG5vb3AoKXsgfVxuXG5mdW5jdGlvbiBpc051bGwobykge1xuICByZXR1cm4gbyA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKG8pe1xuICByZXR1cm4gbyAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvKXtcbiAgcmV0dXJuIG8gPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbihzdHIpe1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIobnVtKXtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgcmV0dXJuIHV0aWxpdGllcy5pc09iamVjdChvYmopICYmIG9iai53aW5kb3cgPT09IG9iajtcbn1cblxuZnVuY3Rpb24gaXNBcnJheShhcnJheSl7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIGFycmF5ICkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IHV0aWxpdGllcy5pc1dpbmRvdyhvYmopIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKG9iaikgfHwgdXRpbGl0aWVzLmlzVW5kZWZpbmVkKG9iaikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gb2JqLmxlbmd0aDtcblxuICBpZiAob2JqLm5vZGVUeXBlID09PSBOT0RFX1RZUEVfRUxFTUVOVCAmJiBsZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcob2JqKSB8fCB1dGlsaXRpZXMuaXNBcnJheShvYmopIHx8IGxlbmd0aCA9PT0gMCB8fFxuICAgIHR5cGVvZiBsZW5ndGggPT09ICdudW1iZXInICYmIGxlbmd0aCA+IDAgJiYgKGxlbmd0aCAtIDEpIGluIG9iajtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNFbXB0eVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhzdHIpICYmIHN0ci5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzTm90RW1wdHlTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSAmJiBzdHIubGVuZ3RoICE9PSAwO1xufVxuXG5mdW5jdGlvbiBhcnJheUxpa2VPYmpUb0FycmF5KGFyZ3MpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGtleSwgbGVuZ3RoO1xuICBpZiAob2JqKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgaGFzT3duUHJvcGVydHkgZXhpc3RzLFxuICAgICAgICAvLyBhcyBvbiBJRTggdGhlIHJlc3VsdCBvZiBxdWVyeVNlbGVjdG9yQWxsIGlzIGFuIG9iamVjdCB3aXRob3V0IGEgaGFzT3duUHJvcGVydHkgZnVuY3Rpb25cbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb3RvdHlwZScgJiYga2V5ICE9PSAnbGVuZ3RoJyAmJiBrZXkgIT09ICduYW1lJyAmJiAoIW9iai5oYXNPd25Qcm9wZXJ0eSB8fCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgdmFyIGlzUHJpbWl0aXZlID0gdHlwZW9mIG9iaiAhPT0gJ29iamVjdCc7XG4gICAgICBmb3IgKGtleSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlIHx8IGtleSBpbiBvYmopIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9iai5mb3JFYWNoICYmIG9iai5mb3JFYWNoICE9PSBmb3JFYWNoKSB7XG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCwgb2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBzbmFrZV9jYXNlKG5hbWUsIHNlcGFyYXRvcikge1xuICBzZXBhcmF0b3IgPSBzZXBhcmF0b3IgfHwgJ18nO1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKFNOQUtFX0NBU0VfUkVHRVhQLCBmdW5jdGlvbihsZXR0ZXIsIHBvcykge1xuICAgIHJldHVybiAocG9zID8gc2VwYXJhdG9yIDogJycpICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWwpe1xuICBpZighdXRpbGl0aWVzLmlzU3RyaW5nKGVtYWlsKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIEVNQUlMX1JFR0VYUC50ZXN0KGVtYWlsLnRyaW0oKSk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCAob2JqKSB7XG4gIHZhciBhcmcsIGksIGs7XG4gIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yIChrIGluIGFyZykge1xuICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBpZihpc09iamVjdChvYmpba10pICYmICFpc051bGwob2JqW2tdKSAmJiBpc09iamVjdChhcmdba10pKXtcbiAgICAgICAgICBvYmpba10gPSBleHRlbmQoe30sIG9ialtrXSwgYXJnW2tdKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIG9ialtrXSA9IGFyZ1trXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHMpe1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGRlY2FwaXRhbGl6ZShzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB3b3JrcyB0aGUgc2FtZSB3YXkgYXJyYXkucHJvdG90eXBlLm1hcCB3b3JrcyBidXQgaWYgdGhlIHRyYW5zZm9ybWVyIHJldHVybnMgdW5kZWZpbmUsIHRoZW5cbiAqIGl0IHdvbid0IGJlIGFkZGVkIHRvIHRoZSB0cmFuc2Zvcm1lZCBBcnJheS5cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtQXJyYXkoYXJyYXksIHRyYW5zZm9ybWVyKSB7XG4gIHZhciB0cmFuc2Zvcm1lZEFycmF5ID0gW107XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCl7XG4gICAgdmFyIHRyYW5zZm9ybWVkSXRlbSA9IHRyYW5zZm9ybWVyKGl0ZW0sIGluZGV4KTtcbiAgICBpZih1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYW5zZm9ybWVkSXRlbSkpIHtcbiAgICAgIHRyYW5zZm9ybWVkQXJyYXkucHVzaCh0cmFuc2Zvcm1lZEl0ZW0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHRvRml4ZWREaWdpdHMobnVtLCBkaWdpdHMpIHtcbiAgdmFyIGZvcm1hdHRlZE51bSA9IG51bSArICcnO1xuICBkaWdpdHMgPSB1dGlsaXRpZXMuaXNOdW1iZXIoZGlnaXRzKSA/IGRpZ2l0cyA6IDA7XG4gIG51bSA9IHV0aWxpdGllcy5pc051bWJlcihudW0pID8gbnVtIDogcGFyc2VJbnQobnVtLCAxMCk7XG4gIGlmKHV0aWxpdGllcy5pc051bWJlcihudW0pICYmICFpc05hTihudW0pKXtcbiAgICBmb3JtYXR0ZWROdW0gPSBudW0gKyAnJztcbiAgICB3aGlsZShmb3JtYXR0ZWROdW0ubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgICBmb3JtYXR0ZWROdW0gPSAnMCcgKyBmb3JtYXR0ZWROdW07XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWROdW07XG4gIH1cbiAgcmV0dXJuIE5hTiArICcnO1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIHByZXZpb3VzQ2FsbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gKGRlbGF5ICsgMSk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGlmICgodGltZSAtIHByZXZpb3VzQ2FsbCkgPj0gZGVsYXkpIHtcbiAgICAgIHByZXZpb3VzQ2FsbCA9IHRpbWU7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UgKGNhbGxiYWNrLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0SWQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpe1xuICAgIGlmKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfSwgd2FpdCk7XG4gIH07XG59XG5cbi8vIGEgZnVuY3Rpb24gZGVzaWduZWQgdG8gYmxvdyB1cCB0aGUgc3RhY2sgaW4gYSBuYWl2ZSB3YXlcbi8vIGJ1dCBpdCBpcyBvayBmb3IgdmlkZW9KcyBjaGlsZHJlbiBjb21wb25lbnRzXG5mdW5jdGlvbiB0cmVlU2VhcmNoKHJvb3QsIGdldENoaWxkcmVuLCBmb3VuZCl7XG4gIHZhciBjaGlsZHJlbiA9IGdldENoaWxkcmVuKHJvb3QpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICBpZiAoZm91bmQoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW5baV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIGVsID0gdHJlZVNlYXJjaChjaGlsZHJlbltpXSwgZ2V0Q2hpbGRyZW4sIGZvdW5kKTtcbiAgICAgIGlmIChlbCl7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZWNob0ZuKHZhbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB2YWw7XG4gIH07XG59XG5cbi8vTm90ZTogU3VwcG9ydGVkIGZvcm1hdHMgY29tZSBmcm9tIGh0dHA6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcbi8vIGFuZCB0aGUgaXNvODYwMSByZWdleCBjb21lcyBmcm9tIGh0dHA6Ly93d3cucGVsYWdvZGVzaWduLmNvbS9ibG9nLzIwMDkvMDUvMjAvaXNvLTg2MDEtZGF0ZS12YWxpZGF0aW9uLXRoYXQtZG9lc250LXN1Y2svXG5mdW5jdGlvbiBpc0lTTzg2MDEodmFsdWUpIHtcbiAgaWYodXRpbGl0aWVzLmlzTnVtYmVyKHZhbHVlKSl7XG4gICAgdmFsdWUgPSB2YWx1ZSArICcnOyAgLy93ZSBtYWtlIHN1cmUgdGhhdCB3ZSBhcmUgd29ya2luZyB3aXRoIHN0cmluZ3NcbiAgfVxuXG4gIGlmKCF1dGlsaXRpZXMuaXNTdHJpbmcodmFsdWUpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gSVNPODA4Nl9SRUdFWFAudGVzdCh2YWx1ZS50cmltKCkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgQnJvd3NlciBpcyBJRTkgYW5kIGJlbG93XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIHZlcnNpb24gPSB1dGlsaXRpZXMuZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKTtcbiAgaWYgKHZlcnNpb24gPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHZlcnNpb24gPCAxMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIG9yIGEgLTEgKGluZGljYXRpbmcgdGhlIHVzZSBvZiBhbm90aGVyIGJyb3dzZXIpLlxuICogU291cmNlOiBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTA5KHY9dnMuODUpLmFzcHhcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIG9yIGEgLTEgKGluZGljYXRpbmcgdGhlIHVzZSBvZiBhbm90aGVyIGJyb3dzZXIpLlxuICovXG5mdW5jdGlvbiBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbihuYXZpZ2F0b3IpIHtcbiAgdmFyIHJ2ID0gLTE7XG5cbiAgaWYgKG5hdmlnYXRvci5hcHBOYW1lID09ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInKSB7XG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiTVNJRSAoWzAtOV17MSx9W1xcLjAtOV17MCx9KVwiKTtcbiAgICB2YXIgcmVzID0gcmUuZXhlYyh1YSk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgcnYgPSBwYXJzZUZsb2F0KHJlc1sxXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJ2O1xufVxuXG5mdW5jdGlvbiBpc0lFMTEoKSB7XG4gIHZhciByZXMgPSBuYXZpZ2F0b3IudXNlckFnZW50LnNlYXJjaCgvKHRyaWRlbnQpLitydls6XFxzXShbXFx3XFwuXSspLitsaWtlXFxzZ2Vja28vaSk7XG4gIHJldHVybiByZXMgPj0gMDtcbn1cblxuLyoqKiBNb2JpbGUgVXRpbGl0eSBmdW5jdGlvbnMgKioqL1xuZnVuY3Rpb24gaXNJRGV2aWNlKCkge1xuICByZXR1cm4gL2lQKGhvbmV8YWQpLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc01vYmlsZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfGFkfG9kKXxBbmRyb2lkfFdpbmRvd3MgUGhvbmUvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbmZ1bmN0aW9uIGlzSVBob25lKCkge1xuICByZXR1cm4gL2lQKGhvbmV8b2QpLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc0FuZHJvaWQoKSB7XG4gIHJldHVybiAvQW5kcm9pZC8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxudmFyIHV0aWxpdGllcyA9IHtcbiAgX1VBOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBub29wOiBub29wLFxuICBpc051bGw6IGlzTnVsbCxcbiAgaXNEZWZpbmVkOiBpc0RlZmluZWQsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzRW1wdHlTdHJpbmc6IGlzRW1wdHlTdHJpbmcsXG4gIGlzTm90RW1wdHlTdHJpbmc6IGlzTm90RW1wdHlTdHJpbmcsXG4gIGFycmF5TGlrZU9ialRvQXJyYXk6IGFycmF5TGlrZU9ialRvQXJyYXksXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIHNuYWtlX2Nhc2U6IHNuYWtlX2Nhc2UsXG4gIGlzVmFsaWRFbWFpbDogaXNWYWxpZEVtYWlsLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcbiAgZGVjYXBpdGFsaXplOiBkZWNhcGl0YWxpemUsXG4gIHRyYW5zZm9ybUFycmF5OiB0cmFuc2Zvcm1BcnJheSxcbiAgdG9GaXhlZERpZ2l0czogdG9GaXhlZERpZ2l0cyxcbiAgdGhyb3R0bGU6IHRocm90dGxlLFxuICBkZWJvdW5jZTogZGVib3VuY2UsXG4gIHRyZWVTZWFyY2g6IHRyZWVTZWFyY2gsXG4gIGVjaG9GbjogZWNob0ZuLFxuICBpc0lTTzg2MDE6IGlzSVNPODYwMSxcbiAgaXNPbGRJRTogaXNPbGRJRSxcbiAgaXNJRTExOiBpc0lFMTEsXG4gIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uOiBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbixcbiAgaXNJRGV2aWNlOiBpc0lEZXZpY2UsXG4gIGlzTW9iaWxlOiBpc01vYmlsZSxcbiAgaXNJUGhvbmU6IGlzSVBob25lLFxuICBpc0FuZHJvaWQ6IGlzQW5kcm9pZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsaXRpZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIHhtbCA9IHt9O1xuXG54bWwuc3RyVG9YTUxEb2MgPSBmdW5jdGlvbiBzdHJUb1hNTERvYyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKXtcbiAgLy9JRSA4XG4gIGlmKHR5cGVvZiB3aW5kb3cuRE9NUGFyc2VyID09PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIHhtbERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxET00nKTtcbiAgICB4bWxEb2N1bWVudC5hc3luYyA9IGZhbHNlO1xuICAgIHhtbERvY3VtZW50LmxvYWRYTUwoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XG4gICAgcmV0dXJuIHhtbERvY3VtZW50O1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpO1xuXG4gIGZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xuICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgdmFyIHBhcnNlZERvY3VtZW50O1xuXG4gICAgLy9Ob3RlOiBUaGlzIHRyeSBjYXRjaCBpcyB0byBkZWFsIHdpdGggdGhlIGZhY3QgdGhhdCBvbiBJRSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nIGRvZXMgdGhyb3cgYW4gZXJyb3IgYnV0IHRoZSByZXN0IG9mIHRoZSBicm93c2VycyBkb24ndC5cbiAgICB0cnkge1xuICAgICAgcGFyc2VkRG9jdW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UsIFwiYXBwbGljYXRpb24veG1sXCIpO1xuXG4gICAgICBpZihpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICB9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwieG1sLnN0clRvWE1MRE9DOiBFcnJvciBwYXJzaW5nIHRoZSBzdHJpbmc6ICdcIiArIHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UgKyBcIidcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZERvY3VtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB7XG4gICAgdHJ5IHsgLy8gcGFyc2VyIGFuZCBwYXJzZXJlcnJvck5TIGNvdWxkIGJlIGNhY2hlZCBvbiBzdGFydHVwIGZvciBlZmZpY2llbmN5XG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpLFxuICAgICAgICBlcnJvbmVvdXNQYXJzZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoJ0lOVkFMSUQnLCAndGV4dC94bWwnKSxcbiAgICAgICAgcGFyc2VyZXJyb3JOUyA9IGVycm9uZW91c1BhcnNlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIilbMF0ubmFtZXNwYWNlVVJJO1xuXG4gICAgICBpZiAocGFyc2VyZXJyb3JOUyA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKSB7XG4gICAgICAgIC8vIEluIFBoYW50b21KUyB0aGUgcGFyc2VlcnJvciBlbGVtZW50IGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGEgc3BlY2lhbCBuYW1lc3BhY2UsIHNvIHdlIGFyZSBqdXN0IGd1ZXNzaW5nIGhlcmUgOihcbiAgICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoID4gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lTlMocGFyc2VyZXJyb3JOUywgJ3BhcnNlcmVycm9yJykubGVuZ3RoID4gMDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvL05vdGUgb24gSUUgcGFyc2VTdHJpbmcgdGhyb3dzIGFuIGVycm9yIGJ5IGl0c2VsZiBhbmQgaXQgd2lsbCBuZXZlciByZWFjaCB0aGlzIGNvZGUuIEJlY2F1c2UgaXQgd2lsbCBoYXZlIGZhaWxlZCBiZWZvcmVcbiAgICB9XG4gIH1cbn07XG5cbnhtbC5wYXJzZVRleHQgPSBmdW5jdGlvbiBwYXJzZVRleHQgKHNWYWx1ZSkge1xuICBpZiAoL15cXHMqJC8udGVzdChzVmFsdWUpKSB7IHJldHVybiBudWxsOyB9XG4gIGlmICgvXig/OnRydWV8ZmFsc2UpJC9pLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gc1ZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiOyB9XG4gIGlmIChpc0Zpbml0ZShzVmFsdWUpKSB7IHJldHVybiBwYXJzZUZsb2F0KHNWYWx1ZSk7IH1cbiAgaWYgKHV0aWxpdGllcy5pc0lTTzg2MDEoc1ZhbHVlKSkgeyByZXR1cm4gbmV3IERhdGUoc1ZhbHVlKTsgfVxuICByZXR1cm4gc1ZhbHVlLnRyaW0oKTtcbn07XG5cbnhtbC5KWE9OVHJlZSA9IGZ1bmN0aW9uIEpYT05UcmVlIChvWE1MUGFyZW50KSB7XG4gIHZhciBwYXJzZVRleHQgPSB4bWwucGFyc2VUZXh0O1xuXG4gIC8vVGhlIGRvY3VtZW50IG9iamVjdCBpcyBhbiBlc3BlY2lhbCBvYmplY3QgdGhhdCBpdCBtYXkgbWlzcyBzb21lIGZ1bmN0aW9ucyBvciBhdHRycyBkZXBlbmRpbmcgb24gdGhlIGJyb3dzZXIuXG4gIC8vVG8gcHJldmVudCB0aGlzIHByb2JsZW0gd2l0aCBjcmVhdGUgdGhlIEpYT05UcmVlIHVzaW5nIHRoZSByb290IGNoaWxkTm9kZSB3aGljaCBpcyBhIGZ1bGx5IGZsZXNoZWQgbm9kZSBvbiBhbGwgc3VwcG9ydGVkXG4gIC8vYnJvd3NlcnMuXG4gIGlmKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KXtcbiAgICByZXR1cm4gbmV3IHhtbC5KWE9OVHJlZShvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCk7XG4gIH1cblxuICBpZiAob1hNTFBhcmVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICB2YXIgc0NvbGxlY3RlZFR4dCA9IFwiXCI7XG4gICAgZm9yICh2YXIgb05vZGUsIHNQcm9wLCB2Q29udGVudCwgbkl0ZW0gPSAwOyBuSXRlbSA8IG9YTUxQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IG5JdGVtKyspIHtcbiAgICAgIG9Ob2RlID0gb1hNTFBhcmVudC5jaGlsZE5vZGVzLml0ZW0obkl0ZW0pO1xuICAgICAgLypqc2hpbnQgYml0d2lzZTogZmFsc2UqL1xuICAgICAgaWYgKChvTm9kZS5ub2RlVHlwZSAtIDEgfCAxKSA9PT0gMykgeyBzQ29sbGVjdGVkVHh0ICs9IG9Ob2RlLm5vZGVUeXBlID09PSAzID8gb05vZGUubm9kZVZhbHVlLnRyaW0oKSA6IG9Ob2RlLm5vZGVWYWx1ZTsgfVxuICAgICAgZWxzZSBpZiAob05vZGUubm9kZVR5cGUgPT09IDEgJiYgIW9Ob2RlLnByZWZpeCkge1xuICAgICAgICBzUHJvcCA9IHV0aWxpdGllcy5kZWNhcGl0YWxpemUob05vZGUubm9kZU5hbWUpO1xuICAgICAgICB2Q29udGVudCA9IG5ldyB4bWwuSlhPTlRyZWUob05vZGUpO1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShzUHJvcCkpIHtcbiAgICAgICAgICBpZiAodGhpc1tzUHJvcF0uY29uc3RydWN0b3IgIT09IEFycmF5KSB7IHRoaXNbc1Byb3BdID0gW3RoaXNbc1Byb3BdXTsgfVxuICAgICAgICAgIHRoaXNbc1Byb3BdLnB1c2godkNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgeyB0aGlzW3NQcm9wXSA9IHZDb250ZW50OyB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzQ29sbGVjdGVkVHh0KSB7IHRoaXMua2V5VmFsdWUgPSBwYXJzZVRleHQoc0NvbGxlY3RlZFR4dCk7IH1cbiAgfVxuXG4gIC8vSUU4IFN0dXBpZCBmaXhcbiAgdmFyIGhhc0F0dHIgPSB0eXBlb2Ygb1hNTFBhcmVudC5oYXNBdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJz8gb1hNTFBhcmVudC5hdHRyaWJ1dGVzLmxlbmd0aCA+IDA6IG9YTUxQYXJlbnQuaGFzQXR0cmlidXRlcygpO1xuICBpZiAoaGFzQXR0cikge1xuICAgIHZhciBvQXR0cmliO1xuICAgIGZvciAodmFyIG5BdHRyaWIgPSAwOyBuQXR0cmliIDwgb1hNTFBhcmVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgbkF0dHJpYisrKSB7XG4gICAgICBvQXR0cmliID0gb1hNTFBhcmVudC5hdHRyaWJ1dGVzLml0ZW0obkF0dHJpYik7XG4gICAgICB0aGlzW1wiQFwiICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvQXR0cmliLm5hbWUpXSA9IHBhcnNlVGV4dChvQXR0cmliLnZhbHVlLnRyaW0oKSk7XG4gICAgfVxuICB9XG59O1xuXG54bWwuSlhPTlRyZWUucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XG4gIHJldHVybiB0aGlzWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xufTtcblxueG1sLnRvSlhPTlRyZWUgPSBmdW5jdGlvbiB0b0pYT05UcmVlKHhtbFN0cmluZyl7XG4gIHZhciB4bWxEb2MgPSB4bWwuc3RyVG9YTUxEb2MoeG1sU3RyaW5nKTtcbiAgcmV0dXJuIG5ldyB4bWwuSlhPTlRyZWUoeG1sRG9jKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGV4dHJhY3QgdGhlIGtleXZhbHVlIG9mIGEgSlhPTlRyZWUgb2JqXG4gKlxuICogQHBhcmFtIHhtbE9iaiB7SlhPTlRyZWV9XG4gKiByZXR1cm4gdGhlIGtleSB2YWx1ZSBvciB1bmRlZmluZWQ7XG4gKi9cbnhtbC5rZXlWYWx1ZSA9IGZ1bmN0aW9uIGdldEtleVZhbHVlKHhtbE9iaikge1xuICBpZih4bWxPYmope1xuICAgIHJldHVybiB4bWxPYmoua2V5VmFsdWU7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnhtbC5hdHRyID0gZnVuY3Rpb24gZ2V0QXR0clZhbHVlKHhtbE9iaiwgYXR0cikge1xuICBpZih4bWxPYmopIHtcbiAgICByZXR1cm4geG1sT2JqWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG54bWwuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlWE1MKHN0cikge1xuICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhzdHIpKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmYXBvczsnKTtcbn07XG5cbnhtbC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGVYTUwoc3RyKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mYXBvczsvZywgXCInXCIpXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+JylcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhtbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy9AZXhjbHVkZVxudmFyIHZpZGVvanMgPSB3aW5kb3cudmlkZW9qcyB8fCB7XG5cdGdldENvbXBvbmVudCA6IGZ1bmN0aW9uKCkge30sXG5cdGV4dGVuZCA6IGZ1bmN0aW9uKCkge30sXG5cdHJlZ2lzdGVyQ29tcG9uZW50IDogZnVuY3Rpb24oKSB7fSxcblx0cmVnaXN0ZXJQbHVnaW4gOiBmdW5jdGlvbigpIHt9XG59O1xuLy8gQGVuZGV4Y2x1ZGVcblxud2luZG93Ll9tb2xTZXR0aW5ncyA9IG51bGw7XG5cbi8vIHJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsXzUnKTtcbnJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzUnKTtcblxuY29uc29sZS5sb2coJ1ByZWJpZCBNYWlsT25saW5lIHBsdWdpbiB2ZXJzaW9uIDEuMi45Jyk7XG5cbnZhciB2aWRlb0pzVkFTVCA9IHJlcXVpcmUoJy4vcGx1Z2luL3ZpZGVvanMudmFzdC52cGFpZCcpO1xuXG5pZiAodmlkZW9qcy5yZWdpc3RlclBsdWdpbikge1xuXHR2aWRlb2pzLnJlZ2lzdGVyUGx1Z2luKCd2YXN0Q2xpZW50JywgdmlkZW9Kc1ZBU1QpO1xufVxuZWxzZSB7XG5cdHZpZGVvanMucGx1Z2luKCd2YXN0Q2xpZW50JywgdmlkZW9Kc1ZBU1QpO1xufVxuIl19
=======
},{"./plugin/components/ads-label_5":33,"./plugin/components/black-poster_5":35,"./plugin/videojs.vast.vpaid":36}]},{},[47])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9zY3JpcHRzL2Fkcy9pY29uL0ljb25JbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9DYXRlZ29yeS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0NvbXBhbmlvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0NyZWF0aXZlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvSWNvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0luTGluZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0ludGVyYWN0aXZlQ3JlYXRpdmVGaWxlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvTGluZWFyLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvTWVkaWFGaWxlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVHJhY2tpbmdFdmVudC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1VuaXZlcnNhbEFkSWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUQ2xpZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEVycm9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEludGVncmF0b3IuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUUmVzcG9uc2UuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUVHJhY2tlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZlcmlmaWNhdGlvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZpZGVvQ2xpY2tzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVmlld2FibGVJbXByZXNzaW9uLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvV3JhcHBlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L3BhcnNlcnMuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC92YXN0VXRpbC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92cGFpZC9WUEFJREFkVW5pdFdyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURIVE1MNVRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsXzUuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXIuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNS5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi92aWRlb2pzLnZhc3QudnBhaWQuanMiLCJzcmMvc2NyaXB0cy91dGlscy9hblZpZGVvVmlld2FiaWxpdHkuanMiLCJzcmMvc2NyaXB0cy91dGlscy9hc3luYy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL2NvbnNvbGVMb2dnZXIuanMiLCJzcmMvc2NyaXB0cy91dGlscy9kb20uanMiLCJzcmMvc2NyaXB0cy91dGlscy9odHRwLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvbWltZXR5cGVzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvcGxheWVyVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91cmxVdGlscy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJzcmMvc2NyaXB0cy91dGlscy94bWwuanMiLCJzcmMvc2NyaXB0cy92aWRlb2pzXzUudmFzdC52cGFpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdm5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBNRVRIT0RTID0gW1xuICAgICdoYW5kc2hha2VWZXJzaW9uJyxcbiAgICAnaW5pdEFkJyxcbiAgICAnc3RhcnRBZCcsXG4gICAgJ3N0b3BBZCcsXG4gICAgJ3NraXBBZCcsIC8vIFZQQUlEIDIuMCBuZXcgbWV0aG9kXG4gICAgJ3Jlc2l6ZUFkJyxcbiAgICAncGF1c2VBZCcsXG4gICAgJ3Jlc3VtZUFkJyxcbiAgICAnZXhwYW5kQWQnLFxuICAgICdjb2xsYXBzZUFkJyxcbiAgICAnc3Vic2NyaWJlJyxcbiAgICAndW5zdWJzY3JpYmUnXG5dO1xuXG52YXIgRVZFTlRTID0gW1xuICAgICdBZExvYWRlZCcsXG4gICAgJ0FkU3RhcnRlZCcsXG4gICAgJ0FkU3RvcHBlZCcsXG4gICAgJ0FkU2tpcHBlZCcsXG4gICAgJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkU2l6ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRMaW5lYXJDaGFuZ2UnLFxuICAgICdBZER1cmF0aW9uQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZEV4cGFuZGVkQ2hhbmdlJyxcbiAgICAnQWRSZW1haW5pbmdUaW1lQ2hhbmdlJywgLy8gW0RlcHJlY2F0ZWQgaW4gMi4wXSBidXQgd2lsbCBiZSBzdGlsbCBmaXJlZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAnQWRWb2x1bWVDaGFuZ2UnLFxuICAgICdBZEltcHJlc3Npb24nLFxuICAgICdBZFZpZGVvU3RhcnQnLFxuICAgICdBZFZpZGVvRmlyc3RRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9NaWRwb2ludCcsXG4gICAgJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJyxcbiAgICAnQWRWaWRlb0NvbXBsZXRlJyxcbiAgICAnQWRDbGlja1RocnUnLFxuICAgICdBZEludGVyYWN0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyxcbiAgICAnQWRVc2VyTWluaW1pemUnLFxuICAgICdBZFVzZXJDbG9zZScsXG4gICAgJ0FkUGF1c2VkJyxcbiAgICAnQWRQbGF5aW5nJyxcbiAgICAnQWRMb2cnLFxuICAgICdBZEVycm9yJ1xuXTtcblxudmFyIEdFVFRFUlMgPSBbXG4gICAgJ2dldEFkTGluZWFyJyxcbiAgICAnZ2V0QWRXaWR0aCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkSGVpZ2h0JywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRFeHBhbmRlZCcsXG4gICAgJ2dldEFkU2tpcHBhYmxlU3RhdGUnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZFJlbWFpbmluZ1RpbWUnLFxuICAgICdnZXRBZER1cmF0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRWb2x1bWUnLFxuICAgICdnZXRBZENvbXBhbmlvbnMnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEljb25zJyAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuXTtcblxudmFyIFNFVFRFUlMgPSBbXG4gICAgJ3NldEFkVm9sdW1lJ1xuXTtcblxuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIElWUEFJREFkVW5pdFxuICpcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW9cbiAqL1xuZnVuY3Rpb24gSVZQQUlEQWRVbml0KGNyZWF0aXZlLCBlbCwgdmlkZW8pIHt9XG5cblxuLyoqXG4gKiBoYW5kc2hha2VWZXJzaW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFZQQUlEVmVyc2lvblxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKFZQQUlEVmVyc2lvbiwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGluaXRBZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvblxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdG9wQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0b3BBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBza2lwQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiByZXNpemVBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUucmVzaXplQWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHBhdXNlQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnBhdXNlQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzdW1lQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc3VtZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGV4cGFuZEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBjb2xsYXBzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY29udGV4dCkge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHt9O1xuXG5cblxuLyoqXG4gKiBnZXRBZExpbmVhclxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRMaW5lYXIgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRXaWR0aFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRXaWR0aCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEhlaWdodFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRIZWlnaHQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRFeHBhbmRlZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRFeHBhbmRlZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFNraXBwYWJsZVN0YXRlXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFNraXBwYWJsZVN0YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkUmVtYWluaW5nVGltZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRSZW1haW5pbmdUaW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRHVyYXRpb25cbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRHVyYXRpb24gPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkVm9sdW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkQ29tcGFuaW9uc1xuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRDb21wYW5pb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkSWNvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSWNvbnMgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYWxsYmFjaykge307XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ01FVEhPRFMnLCBNRVRIT0RTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0dFVFRFUlMnLCBHRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ1NFVFRFUlMnLCBTRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0VWRU5UUycsICBFVkVOVFMpO1xuXG5cbnZhciBWUEFJRDFfTUVUSE9EUyA9IE1FVEhPRFMuZmlsdGVyKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiBbJ3NraXBBZCddLmluZGV4T2YobWV0aG9kKSA9PT0gLTE7XG59KTtcblxuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnY2hlY2tWUEFJREludGVyZmFjZScsIGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UgKGNyZWF0aXZlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFZQQUlEMV9NRVRIT0RTLmV2ZXJ5KGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNyZWF0aXZlW2tleV0gPT09ICdmdW5jdGlvbic7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElWUEFJREFkVW5pdDtcblxuZnVuY3Rpb24gYWRkU3RhdGljVG9JbnRlcmZhY2UoSW50ZXJmYWNlLCBuYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRlcmZhY2UsIG5hbWUsIHtcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSVZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9JVlBBSURBZFVuaXQnKTtcbnZhciBTdWJzY3JpYmVyID0gcmVxdWlyZSgnLi9zdWJzY3JpYmVyJyk7XG52YXIgY2hlY2tWUEFJREludGVyZmFjZSA9IElWUEFJREFkVW5pdC5jaGVja1ZQQUlESW50ZXJmYWNlO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIE1FVEhPRFMgPSBJVlBBSURBZFVuaXQuTUVUSE9EUztcbnZhciBFUlJPUiA9ICdBZEVycm9yJztcbnZhciBBRF9DTElDSyA9ICdBZENsaWNrVGhydSc7XG52YXIgRklMVEVSRURfRVZFTlRTID0gSVZQQUlEQWRVbml0LkVWRU5UUy5maWx0ZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIGV2ZW50ICE9IEFEX0NMSUNLO1xufSk7XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG5cbi8qKlxuICogVlBBSURBZFVuaXRcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSBWUEFJRENyZWF0aXZlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbZWxdIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMuc2xvdCBpZiBkZWZpbmVkXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IFt2aWRlb10gdGhpcyB3aWxsIGJlIHVzZWQgaW4gaW5pdEFkIGVudmlyb25tZW50VmFycy52aWRlb1Nsb3QgaWYgZGVmaW5lZFxuICovXG5mdW5jdGlvbiBWUEFJREFkVW5pdChWUEFJRENyZWF0aXZlLCBlbCwgdmlkZW8sIGlmcmFtZSkge1xuICAgIHRoaXMuX2lzVmFsaWQgPSBjaGVja1ZQQUlESW50ZXJmYWNlKFZQQUlEQ3JlYXRpdmUpO1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlID0gVlBBSURDcmVhdGl2ZTtcbiAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgICAgICB0aGlzLl9pZnJhbWUgPSBpZnJhbWU7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gbmV3IFN1YnNjcmliZXIoKTtcbiAgICAgICAgdXRpbHMuc2V0RnVsbFNpemVTdHlsZShlbCk7XG4gICAgICAgICRhZGRFdmVudHNTdWJzY3JpYmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbn1cblxuVlBBSURBZFVuaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJVlBBSURBZFVuaXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBpc1ZhbGlkVlBBSURBZCB3aWxsIHJldHVybiBpZiB0aGUgVlBBSURDcmVhdGl2ZSBwYXNzZWQgaW4gY29uc3RydWN0b3IgaXMgdmFsaWQgb3Igbm90XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmlzVmFsaWRWUEFJREFkID0gZnVuY3Rpb24gaXNWYWxpZFZQQUlEQWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG59O1xuXG5JVlBBSURBZFVuaXQuTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIC8vTk9URTogdGhpcyBtZXRob2RzIGFyZ3VtZW50cyBvcmRlciBhcmUgaW1wbGVtZW50ZWQgZGlmZmVyZW50bHkgZnJvbSB0aGUgc3BlY1xuICAgIHZhciBpZ25vcmVzID0gW1xuICAgICAgICAnc3Vic2NyaWJlJyxcbiAgICAgICAgJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgJ2luaXRBZCdcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZXMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmlhdHkgPSBJVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0ubGVuZ3RoO1xuICAgICAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IChhcmlhdHkgPT09IGFyZ3MubGVuZ3RoKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW21ldGhvZF0uYXBwbHkodGhpcy5fY3JlYXRpdmUsIGFyZ3MpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9O1xufSk7XG5cblxuLyoqXG4gKiBpbml0QWQgY29uY3JlYXRlIGltcGxlbWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmlld01vZGUgY2FuIGJlICdub3JtYWwnLCAndGh1bWJuYWlsJyBvciAnZnVsbHNjcmVlbidcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXNpcmVkQml0cmF0ZSBpbmRpY2F0ZXMgdGhlIGRlc2lyZWQgYml0cmF0ZSBpbiBrYnBzXG4gKiBAcGFyYW0ge29iamVjdH0gW2NyZWF0aXZlRGF0YV0gdXNlZCBmb3IgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gW2Vudmlyb25tZW50VmFyc10gdXNlZCBmb3IgcGFzc2luZyBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBvZiBqcyB2ZXJzaW9uLCBpZiBlbCAmIHZpZGVvIHdhcyB1c2VkIGluIGNvbnN0cnVjdG9yIHNsb3QgJiB2aWRlb1Nsb3Qgd2lsbCBiZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge05vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24gaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMsIGNhbGxiYWNrKSB7XG4gICAgY3JlYXRpdmVEYXRhID0gY3JlYXRpdmVEYXRhIHx8IHt9O1xuICAgIGVudmlyb25tZW50VmFycyA9IHV0aWxzLmV4dGVuZCh7XG4gICAgICAgIHNsb3Q6IHRoaXMuX2VsLFxuICAgICAgICB2aWRlb1Nsb3Q6IHRoaXMuX3ZpZGVvRWxcbiAgICB9LCBlbnZpcm9ubWVudFZhcnMgfHwge30pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IpO1xuICAgIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnN1YnNjcmliZShoYW5kbGVyLCBldmVudCwgY29udGV4dCk7XG59O1xuXG5cbi8qKlxuICogdW5zdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZShoYW5kbGVyLCBldmVudCk7XG59O1xuXG4vL2FsaWFzXG5WUEFJREFkVW5pdC5wcm90b3R5cGUub24gPSBWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlO1xuVlBBSURBZFVuaXQucHJvdG90eXBlLm9mZiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZTtcblxuSVZQQUlEQWRVbml0LkdFVFRFUlMuZm9yRWFjaChmdW5jdGlvbihnZXR0ZXIpIHtcbiAgICBWUEFJREFkVW5pdC5wcm90b3R5cGVbZ2V0dGVyXSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVtnZXR0ZXJdKCk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBzZXRBZFZvbHVtZVxuICpcbiAqIEBwYXJhbSB2b2x1bWVcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uIHNldEFkVm9sdW1lKHZvbHVtZSwgY2FsbGJhY2spIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zZXRBZFZvbHVtZSh2b2x1bWUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmUuZ2V0QWRWb2x1bWUoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHJlc3VsdCA9PT0gdm9sdW1lLCAnZmFpbGVkIHRvIGFwcGx5IHZvbHVtZTogJyArIHZvbHVtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wQWQoKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZUFsbCgpO1xufTtcblxuZnVuY3Rpb24gJGFkZEV2ZW50c1N1YnNjcmliZXJzKCkge1xuICAgIC8vIHNvbWUgYWRzIGltcGxlbWVudFxuICAgIC8vIHNvIHRoZXkgb25seSBoYW5kbGUgb25lIHN1YnNjcmliZXJcbiAgICAvLyB0byBoYW5kbGUgdGhpcyB3ZSBjcmVhdGUgb3VyIG9uZVxuICAgIEZJTFRFUkVEX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJHRyaWdnZXIuYmluZCh0aGlzLCBldmVudCksIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgLy8gbWFwIHRoZSBjbGljayBldmVudCB0byBiZSBhbiBvYmplY3QgaW5zdGVhZCBvZiBkZXBlbmRpbmcgb2YgdGhlIG9yZGVyIG9mIHRoZSBhcmd1bWVudHNcbiAgICAvLyBhbmQgdG8gYmUgY29uc2lzdGVudCB3aXRoIHRoZSBmbGFzaFxuICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkY2xpY2tUaHJ1SG9vay5iaW5kKHRoaXMpLCBBRF9DTElDSyk7XG5cbiAgICAvLyBiZWNhdXNlIHdlIGFyZSBhZGRpbmcgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWVcbiAgICAvLyB0aGUgdXNlciBpcyBub3QgYWJsZSB0byBjbGljayBpbiB0aGUgdmlkZW9cbiAgICBpZiAodGhpcy5fdmlkZW9FbCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5faWZyYW1lLmNvbnRlbnREb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciB2aWRlb0VsID0gdGhpcy5fdmlkZW9FbDtcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2aWRlb0VsLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGNsaWNrVGhydUhvb2sodXJsLCBpZCwgcGxheWVySGFuZGxlcykge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXJTeW5jKEFEX0NMSUNLLCB7dXJsOiB1cmwsIGlkOiBpZCwgcGxheWVySGFuZGxlczogcGxheWVySGFuZGxlc30pO1xufVxuXG5mdW5jdGlvbiAkdHJpZ2dlcihldmVudCkge1xuICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyKGV2ZW50LCBBcnJheS5wcm90b3R5cGUuc2xpY2UoYXJndW1lbnRzLCAxKSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICBzdWJzY3JpYmVycy50cmlnZ2VyKEVSUk9SLCBlcnJvcik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciB1bmlxdWUgPSB1dGlscy51bmlxdWUoJ3ZwYWlkSWZyYW1lJyk7XG52YXIgVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0Jyk7XG5cbnZhciBkZWZhdWx0VGVtcGxhdGUgPSAnPCFET0NUWVBFIGh0bWw+JyArXG4gICAgJzxodG1sIGxhbmc9XCJlblwiPicgK1xuICAgICc8aGVhZD48bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L2hlYWQ+JyArXG4gICAgJzxib2R5IHN0eWxlPVwibWFyZ2luOjA7cGFkZGluZzowXCI+PGRpdiBjbGFzcz1cImFkLWVsZW1lbnRcIj48L2Rpdj4nICtcbiAgICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwie3tpZnJhbWVVUkxfSlN9fVwiPjwvc2NyaXB0PicgK1xuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj4nICtcbiAgICAnd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShcXCd7XCJldmVudFwiOiBcInJlYWR5XCIsIFwiaWRcIjogXCJ7e2lmcmFtZUlEfX1cIn1cXCcsIFxcJ3t7b3JpZ2lufX1cXCcpOycgK1xuICAgICc8L3NjcmlwdD4nICtcbiAgICAnPC9ib2R5PicgK1xuICAgICc8L2h0bWw+JztcblxudmFyIEFEX1NUT1BQRUQgPSAnQWRTdG9wcGVkJztcblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cbi8qKlxuICogVlBBSURIVE1MNUNsaWVudFxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGlmcmFtZSB0byBsb2FkIGFkVW5pdCBhbmQgYSBlbCB0byBhZGQgdG8gYWRVbml0IHNsb3RcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW8gZGVmYXVsdCB2aWRlbyBlbGVtZW50IHRvIGJlIHVzZWQgYnkgYWRVbml0XG4gKiBAcGFyYW0ge29iamVjdH0gW3RlbXBsYXRlQ29uZmlnXSB0ZW1wbGF0ZTogaHRtbCB0ZW1wbGF0ZSB0byBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIGV4dHJhT3B0aW9uczogdG8gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdnBhaWRPcHRpb25zXSB0aW1lb3V0OiB3aGVuIGxvYWRpbmcgYWRVbml0XG4gKi9cbmZ1bmN0aW9uIFZQQUlESFRNTDVDbGllbnQoZWwsIHZpZGVvLCB0ZW1wbGF0ZUNvbmZpZywgdnBhaWRPcHRpb25zKSB7XG4gICAgdGVtcGxhdGVDb25maWcgPSB0ZW1wbGF0ZUNvbmZpZyB8fCB7fTtcblxuICAgIHRoaXMuX2lkID0gdW5pcXVlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9mcmFtZUNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZUVsZW1lbnRJbkVsKGVsLCAnZGl2Jyk7XG4gICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgIHRoaXMuX3ZwYWlkT3B0aW9ucyA9IHZwYWlkT3B0aW9ucyB8fCB7dGltZW91dDogMTAwMDB9O1xuXG4gICAgdGhpcy5fdGVtcGxhdGVDb25maWcgPSB7XG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGUsXG4gICAgICAgIGV4dHJhT3B0aW9uczogdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zIHx8IHt9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBkZXN0cm95XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogaXNEZXN0cm95ZWRcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5pc0Rlc3Ryb3llZCA9IGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG59O1xuXG4vKipcbiAqIGxvYWRBZFVuaXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWRVUkwgdXJsIG9mIHRoZSBqcyBvZiB0aGUgYWRVbml0XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEFkVW5pdChhZFVSTCwgY2FsbGJhY2spIHtcbiAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBmcmFtZSA9IHV0aWxzLmNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KFxuICAgICAgICB0aGlzLl9mcmFtZUNvbnRhaW5lcixcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVDb25maWcudGVtcGxhdGUsXG4gICAgICAgIHV0aWxzLmV4dGVuZCh7XG4gICAgICAgICAgICBpZnJhbWVVUkxfSlM6IGFkVVJMLFxuICAgICAgICAgICAgaWZyYW1lSUQ6IHRoaXMuZ2V0SUQoKSxcbiAgICAgICAgICAgIG9yaWdpbjogZ2V0T3JpZ2luKClcbiAgICAgICAgfSwgdGhpcy5fdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zKVxuICAgICk7XG5cbiAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgdGhpcy5fb25Mb2FkID0gdXRpbHMuY2FsbGJhY2tUaW1lb3V0KFxuICAgICAgICB0aGlzLl92cGFpZE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgb25Mb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG9uVGltZW91dC5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcblxuICAgIGZ1bmN0aW9uIG9uTG9hZCAoZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IGZhbHNlICovXG4gICAgICAgIC8vZG9uJ3QgY2xlYXIgdGltZW91dFxuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IGdldE9yaWdpbigpKSByZXR1cm47XG4gICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG5cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChyZXN1bHQuaWQgIT09IHRoYXQuZ2V0SUQoKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhZFVuaXQsIGVycm9yLCBjcmVhdGVBZDtcbiAgICAgICAgaWYgKCF0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93KSB7XG5cbiAgICAgICAgICAgIGVycm9yID0gJ3RoZSBpZnJhbWUgaXMgbm90IGFueW1vcmUgaW4gdGhlIERPTSB0cmVlJztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlQWQgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmdldFZQQUlEQWQ7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHR5cGVvZiBjcmVhdGVBZCA9PT0gJ2Z1bmN0aW9uJywgJ3RoZSBhZCBkaWRuXFwndCByZXR1cm4gYSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBhZEVsID0gdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWQtZWxlbWVudCcpO1xuICAgICAgICAgICAgYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KGNyZWF0ZUFkKCksIGFkRWwsIHRoYXQuX3ZpZGVvRWwsIHRoYXQuX2ZyYW1lKTtcbiAgICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoQURfU1RPUFBFRCwgJGFkRGVzdHJveWVkLmJpbmQodGhhdCkpO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShhZFVuaXQuaXNWYWxpZFZQQUlEQWQoKSwgJ3RoZSBhZGQgaXMgbm90IGZ1bGx5IGNvbXBsYWludCB3aXRoIFZQQUlEIHNwZWNpZmljYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQuX2FkVW5pdCA9IGFkVW5pdDtcbiAgICAgICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGF0KTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIGVycm9yID8gbnVsbCA6IGFkVW5pdCk7XG5cbiAgICAgICAgLy9jbGVhciB0aW1lb3V0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgICAgY2FsbGJhY2soJ3RpbWVvdXQnLCBudWxsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIHVubG9hZEFkVW5pdFxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBnZXRJRCB3aWxsIHJldHVybiB0aGUgdW5pcXVlIGlkXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG59O1xuXG5cbi8qKlxuICogJHJlbW92ZUVsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5mdW5jdGlvbiAkcmVtb3ZlRWwoa2V5KSB7XG4gICAgdmFyIGVsID0gdGhpc1trZXldO1xuICAgIGlmIChlbCkge1xuICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRhZERlc3Ryb3llZCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG59XG5cbmZ1bmN0aW9uICR1bmxvYWRQcmV2aW91c0FkVW5pdCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgICRkZXN0cm95QWRVbml0LmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uICRyZW1vdmVBZEVsZW1lbnRzKCkge1xuICAgICRyZW1vdmVFbC5jYWxsKHRoaXMsICdfZnJhbWUnKTtcbiAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoaXMpO1xufVxuXG4vKipcbiAqICRkZXN0cm95TG9hZExpc3RlbmVyXG4gKlxuICovXG5mdW5jdGlvbiAkZGVzdHJveUxvYWRMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5fb25Mb2FkKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcbiAgICAgICAgdXRpbHMuY2xlYXJDYWxsYmFja1RpbWVvdXQodGhpcy5fb25Mb2FkKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29uTG9hZDtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gJGRlc3Ryb3lBZFVuaXQoKSB7XG4gICAgaWYgKHRoaXMuX2FkVW5pdCkge1xuICAgICAgICB0aGlzLl9hZFVuaXQuc3RvcEFkKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG4gICAgfVxufVxuXG4vKipcbiAqICR0aHJvd0lmRGVzdHJveWVkXG4gKlxuICovXG5mdW5jdGlvbiAkdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciAoJ1ZQQUlESFRNTDVDbGllbnQgYWxyZWFkeSBkZXN0cm95ZWQhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRPcmlnaW4oKSB7XG4gICAgaWYoIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgK1xuICAgICAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNUNsaWVudDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTdWJzY3JpYmVyKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge307XG59XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUsIGNvbnRleHQpIHtcbiAgICBpZiAoIXRoaXMuaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSkge1xuICAgICAgICB0aGlzLmdldChldmVudE5hbWUpLnB1c2goe2hhbmRsZXI6IGhhbmRsZXIsIGNvbnRleHQ6IGNvbnRleHQsIGV2ZW50TmFtZTogZXZlbnROYW1lfSk7XG4gICAgfVxufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gdGhpcy5nZXQoZXZlbnROYW1lKS5maWx0ZXIoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgIT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmlzSGFuZGxlckF0dGFjaGVkKHN1YnNjcmliZXIuaGFuZGxlciwgc3Vic2NyaWJlci5ldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS50cmlnZ2VyU3luYyA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBzdWJzY3JpYmVycyA9IHRoaXMuZ2V0KGV2ZW50TmFtZSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLmdldCgnKicpKTtcblxuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChldmVudE5hbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmlzSGFuZGxlckF0dGFjaGVkID0gZnVuY3Rpb24gaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGV2ZW50TmFtZSkuc29tZShmdW5jdGlvbihzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyID09PSBzdWJzY3JpYmVyLmhhbmRsZXI7XG4gICAgfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3Vic2NyaWJlcjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIG5vb3AgYSBlbXB0eSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiB2YWxpZGF0ZSBpZiBpcyBub3QgdmFsaWRhdGUgd2lsbCByZXR1cm4gYW4gRXJyb3Igd2l0aCB0aGUgbWVzc2FnZVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGUoaXNWYWxpZCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxudmFyIHRpbWVvdXRzID0ge307XG4vKipcbiAqIGNsZWFyQ2FsbGJhY2tUaW1lb3V0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBoYW5kbGVyIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiBjbGVhckNhbGxiYWNrVGltZW91dChmdW5jKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aW1lb3V0c1tmdW5jXTtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0c1tmdW5jXTtcbiAgICB9XG59XG5cbi8qKlxuICogY2FsbGJhY2tUaW1lb3V0IGlmIHRoZSBvblN1Y2Nlc3MgaXMgbm90IGNhbGxlZCBhbmQgcmV0dXJucyB0cnVlIGluIHRoZSB0aW1lbGltaXQgdGhlbiBvblRpbWVvdXQgd2lsbCBiZSBjYWxsZWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uU3VjY2Vzc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gb25UaW1lb3V0XG4gKi9cbmZ1bmN0aW9uIGNhbGxiYWNrVGltZW91dCh0aW1lciwgb25TdWNjZXNzLCBvblRpbWVvdXQpIHtcbiAgICB2YXIgY2FsbGJhY2ssIHRpbWVvdXQ7XG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uU3VjY2VzcyA9IG5vb3A7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0W2NhbGxiYWNrXTtcbiAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgfSwgdGltZXIpO1xuXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIGlmIChvblN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgY2xlYXJDYWxsYmFja1RpbWVvdXQoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRpbWVvdXRzW2NhbGxiYWNrXSA9IHRpbWVvdXQ7XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG59XG5cblxuLyoqXG4gKiBjcmVhdGVFbGVtZW50SW5FbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50SW5FbChwYXJlbnQsIHRhZ05hbWUsIGlkKSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgaWYgKGlkKSBuRWwuaWQgPSBpZDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgc2ltcGxlIHRlbXBsYXRlIHVzaW5nIHt7dmFyfX1cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KHBhcmVudCwgdGVtcGxhdGUsIGRhdGEpIHtcbiAgICB2YXIgaWZyYW1lID0gY3JlYXRlSWZyYW1lKHBhcmVudCwgbnVsbCwgZGF0YS56SW5kZXgpO1xuICAgIGlmICghc2V0SWZyYW1lQ29udGVudChpZnJhbWUsIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSkpIHJldHVybjtcbiAgICByZXR1cm4gaWZyYW1lO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5mdW5jdGlvbiBjcmVhdGVJZnJhbWUocGFyZW50LCB1cmwsIHpJbmRleCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBuRWwuc3JjID0gdXJsIHx8ICdhYm91dDpibGFuayc7XG4gICAgbkVsLm1hcmdpbldpZHRoID0gJzAnO1xuICAgIG5FbC5tYXJnaW5IZWlnaHQgPSAnMCc7XG4gICAgbkVsLmZyYW1lQm9yZGVyID0gJzAnO1xuICAgIG5FbC53aWR0aCA9ICcxMDAlJztcbiAgICBuRWwuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHNldEZ1bGxTaXplU3R5bGUobkVsKTtcblxuICAgIGlmKHpJbmRleCl7XG4gICAgICAgIG5FbC5zdHlsZS56SW5kZXggPSB6SW5kZXg7XG4gICAgfVxuXG4gICAgbkVsLnNldEF0dHJpYnV0ZSgnU0NST0xMSU5HJywnTk8nKTtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuZnVuY3Rpb24gc2V0RnVsbFNpemVTdHlsZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbn1cblxuLyoqXG4gKiBzaW1wbGVUZW1wbGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpIHtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKSA6IGRhdGFba2V5XTtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ3t7JyArIGtleSArICd9fScsICdnJyksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogc2V0SWZyYW1lQ29udGVudFxuICpcbiAqIEBwYXJhbSB7SFRNTElmcmFtZUVsZW1lbnR9IGlmcmFtZUVsXG4gKiBAcGFyYW0gY29udGVudFxuICovXG5mdW5jdGlvbiBzZXRJZnJhbWVDb250ZW50KGlmcmFtZUVsLCBjb250ZW50KSB7XG4gICAgdmFyIGlmcmFtZURvYyA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cgJiYgaWZyYW1lRWwuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICBpZiAoIWlmcmFtZURvYykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWZyYW1lRG9jLndyaXRlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuLyoqXG4gKiBleHRlbmQgb2JqZWN0IHdpdGgga2V5cyBmcm9tIGFub3RoZXIgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRvRXh0ZW5kXG4gKiBAcGFyYW0ge29iamVjdH0gZnJvbVNvdXJjZVxuICovXG5mdW5jdGlvbiBleHRlbmQodG9FeHRlbmQsIGZyb21Tb3VyY2UpIHtcbiAgICBPYmplY3Qua2V5cyhmcm9tU291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB0b0V4dGVuZFtrZXldID0gZnJvbVNvdXJjZVtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiB0b0V4dGVuZDtcbn1cblxuXG4vKipcbiAqIHVuaXF1ZSB3aWxsIGNyZWF0ZSBhIHVuaXF1ZSBzdHJpbmcgZXZlcnl0aW1lIGlzIGNhbGxlZCwgc2VxdWVudGlhbGx5IGFuZCBwcmVmaXhlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gdW5pcXVlKHByZWZpeCkge1xuICAgIHZhciBjb3VudCA9IC0xO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnXycgKyAoKytjb3VudCk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbm9vcDogbm9vcCxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGUsXG4gICAgY2xlYXJDYWxsYmFja1RpbWVvdXQ6IGNsZWFyQ2FsbGJhY2tUaW1lb3V0LFxuICAgIGNhbGxiYWNrVGltZW91dDogY2FsbGJhY2tUaW1lb3V0LFxuICAgIGNyZWF0ZUVsZW1lbnRJbkVsOiBjcmVhdGVFbGVtZW50SW5FbCxcbiAgICBjcmVhdGVJZnJhbWVXaXRoQ29udGVudDogY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQsXG4gICAgY3JlYXRlSWZyYW1lOiBjcmVhdGVJZnJhbWUsXG4gICAgc2V0RnVsbFNpemVTdHlsZTogc2V0RnVsbFNpemVTdHlsZSxcbiAgICBzaW1wbGVUZW1wbGF0ZTogc2ltcGxlVGVtcGxhdGUsXG4gICAgc2V0SWZyYW1lQ29udGVudDogc2V0SWZyYW1lQ29udGVudCxcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICB1bmlxdWU6IHVuaXF1ZVxufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIElubmVyIGhlbHBlciBjbGFzcyB0aGF0IGRlYWxzIHdpdGggdGhlIGxvZ2ljIG9mIHRoZSBpY29uIHJlbmRlcnJpbmcuXG4gKlxuICogQHBhcmFtIHBsYXllciB7b2JqZWN0fSBpbnN0YW5jZSBvZiB0aGUgcGxheWVyIHRoYXQgd2lsbCBwbGF5IHRoZSBhZC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBJY29uSW50ZWdyYXRvcihwbGF5ZXIpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEljb25JbnRlZ3JhdG9yKSkge1xuICAgIHJldHVybiBuZXcgSWNvbkludGVncmF0b3IocGxheWVyKTtcbiAgfVxuXG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB0aGlzLmljb25zID0gW107XG4gIHRoaXMuY29udHJvbEJhclRpbWVyID0gbnVsbDtcbiAgdGhpcy5jYkhpZGRlbjtcbn1cblxuSWNvbkludGVncmF0b3IucHJvdG90eXBlLnJlbmRlckljb25zID0gZnVuY3Rpb24gcmVuZGVySWNvbnMoaWNvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoaWNvbnMpIHx8IGljb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdPbiBJY29uSW50ZWdyYXRvciwgbWlzc2luZyByZXF1aXJlZCBpY29uIGFycmF5JykpO1xuICB9XG5cbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgbmV4dChudWxsLCBpY29ucyk7XG4gICAgfSxcbiAgICB0aGlzLl9jcmVhdGVJY29ucy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fcmVuZGVySWNvbnMuYmluZCh0aGlzKVxuICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgaWYgKGVycm9yICYmIHJlc3BvbnNlKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgfVxuICAgIGNhbGxiYWNrKGVycm9yLCByZXNwb25zZSk7XG4gIH0pO1xufTtcblxuSWNvbkludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVJY29ucyA9IGZ1bmN0aW9uIGNyZWF0ZUljb25zKGljb25zLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpY29uT2JqID0ge307XG4gICAgaWNvbk9iai5pY29uID0gaWNvbnNbaV07XG4gICAgLy8gbWFrZSBzdXJlIHdlIG9ubHkgb25lIGljb24gcGVyIHByb2dyYW1cbiAgICB2YXIgaWR4ID0gZ2V0SWNvbkJ5UHJvZ3JhbShpY29uT2JqLmljb24ucHJvZ3JhbSk7XG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICB0aGlzLmljb25zLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbiAgICBpY29uT2JqLmNvbnRlbnQgPSBnZXRDb250ZW50KGljb25PYmouaWNvbik7XG4gICAgaWYgKGljb25PYmouY29udGVudCkge1xuICAgICAgdGhpcy5pY29ucy5wdXNoKGljb25PYmopO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLmljb25zLmxlbmd0aCA+IDApIHtcbiAgICBjYWxsYmFjayhudWxsKTtcbiAgfVxuICBlbHNlIHtcbiAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBBZEljb24gY29udGVudFwiLCA5MDApKTtcbiAgfVxuICByZXR1cm47XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBnZXRDb250ZW50KGljb24pIHtcbiAgICB2YXIgY29udGVudCA9IG51bGw7XG4gICAgaWYgKGljb24uc3RhdGljUmVzb3VyY2UpIHtcbiAgICAgIHZhciBpbWFnZVR5cGVzID0gW1wiaW1hZ2UvZ2lmXCIsIFwiaW1hZ2UvanBlZ1wiLCBcImltYWdlL3BuZ1wiXTtcbiAgICAgIGlmIChpbWFnZVR5cGVzLmluZGV4T2YoaWNvbi5jcmVhdGl2ZVR5cGUpKSB7XG4gICAgICAgIGNvbnRlbnQgPSBcIjxpbWcgc3JjPSdcIiArIGljb24uc3RhdGljUmVzb3VyY2UgKyBcIicgd2lkdGg9J1wiICsgaWNvbi53aWR0aCArIFwiJyBoZWlnaHQ9J1wiICsgaWNvbi5oZWlnaHQgKyBcIic+XCI7XG4gICAgICB9XG4gICAgfVxuICAgIC8qZWxzZSBpZiAoaWNvbi5odG1sUmVzb3VyY2UpIHtcbiAgICAgIC8vIHRvIGRvIC4uLlxuICAgIH1cbiAgICBlbHNlIGlmIChpY29uLmlmcmFtZVJlc291cmNlKSB7XG4gICAgICAvLyB0byBkbyAuLi5cbiAgICB9Ki9cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEljb25CeVByb2dyYW0ocHJvZ3JhbSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdC5pY29ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoYXQuaWNvbnNbaV0uaWNvbi5wcm9ncmFtID09PSBwcm9ncmFtKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cbn07XG5cbkljb25JbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiBzZXR1cEV2ZW50cyhjYWxsYmFjaykge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRTa2lwJywgJ2FkU3RvcCddLCBmdW5jdGlvbigpe1xuICAgIGlmICh0aGF0Lmljb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGF0LmNvbnRyb2xCYXJUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHRoYXQuY29udHJvbEJhclRpbWVyKTtcbiAgICAgICAgdGhhdC5jb250cm9sQmFyVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0Lmljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpY29uID0gdGhhdC5pY29uc1tpXTtcbiAgICAgICAgaWYgKGljb24uZGl2KSB7XG4gICAgICAgICAgaWYgKGljb24uY2xpY2tIYW5kbGVyKSB7XG4gICAgICAgICAgICBpY29uLmRpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGljb24uY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyLmVsKCkucmVtb3ZlQ2hpbGQoaWNvbi5kaXYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGF0Lmljb25zID0gW107XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBjYWxsYmFjayhudWxsKTtcbn07XG5cbkljb25JbnRlZ3JhdG9yLnByb3RvdHlwZS5fcmVuZGVySWNvbnMgPSBmdW5jdGlvbiByZW5kZXJJY29ucygpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGljb24gPSB0aGlzLmljb25zW2ldO1xuXG4gICAgLy9wb3NpdGlvbiBieSBvZmZzZXRcbiAgICB2YXIgeFBvc2l0aW9uID0gXCJsZWZ0XCI7Ly9vciByaWdodFxuICAgIHZhciB4UG9zaXRpb25PZmZzZXQgPSAwO1xuICAgIHZhciB5UG9zaXRpb24gPSBcInRvcFwiOy8vb3IgYm90dG9tXG4gICAgdmFyIHlQb3NpdGlvbk9mZnNldCA9IDA7XG4gICAgdmFyIHRvcE1hcmdpbiA9IDA7XG4gICAgdmFyIGJvdHRvbU1hcmdpbiA9IDA7ICAgLy8gbWF5YmUgY29udHJvbCBiYXIgaGVpZ2h0XG5cbiAgICBpZiAoaWNvbiAmJiBpY29uLmljb24ueFBvc2l0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICB4UG9zaXRpb24gPSBcImxlZnRcIjtcbiAgICAgICAgeFBvc2l0aW9uT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgaWYgKGljb24gJiYgaWNvbi5pY29uLnhQb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHhQb3NpdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgeFBvc2l0aW9uT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgaWYgKGljb24gJiYgTnVtYmVyKGljb24uaWNvbi54UG9zaXRpb24pID49IDApIHtcbiAgICAgICAgeFBvc2l0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgIHhQb3NpdGlvbk9mZnNldCA9IE51bWJlcihpY29uLnhQb3NpdGlvbik7XG4gICAgfVxuICAgIGlmIChpY29uICYmIGljb24uaWNvbi55UG9zaXRpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgeVBvc2l0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgeVBvc2l0aW9uT2Zmc2V0ID0gMDtcbiAgICAgICAgeVBvc2l0aW9uT2Zmc2V0ID0geVBvc2l0aW9uT2Zmc2V0ICsgYm90dG9tTWFyZ2luO1xuICAgIH1cbiAgICBpZiAoaWNvbiAmJiBpY29uLmljb24ueVBvc2l0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICAgIHlQb3NpdGlvbiA9IFwidG9wXCI7XG4gICAgICAgIHlQb3NpdGlvbk9mZnNldCA9IDA7XG4gICAgICAgIHlQb3NpdGlvbk9mZnNldCA9IHlQb3NpdGlvbk9mZnNldCArIHRvcE1hcmdpbjtcbiAgICB9XG4gICAgaWYgKGljb24gJiYgTnVtYmVyKGljb24uaWNvbi55UG9zaXRpb24pID49IDApIHtcbiAgICAgICAgeVBvc2l0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgeVBvc2l0aW9uT2Zmc2V0ID0gTnVtYmVyKGljb24uaWNvbi55UG9zaXRpb24pO1xuICAgICAgICB5UG9zaXRpb25PZmZzZXQgPSB5UG9zaXRpb25PZmZzZXQgKyB0b3BNYXJnaW47XG4gICAgfVxuXG4gICAgdmFyIGRpc3BsYXlJY29uID0gcGxheWVyLmVsKCkub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChkaXNwbGF5SWNvbik7XG5cbiAgICBkaXNwbGF5SWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiYWRpY29uXCIpO1xuICAgIGRpc3BsYXlJY29uLmlkID0gXCJhZGljb25fXCIgKyBpY29uLmljb24ucHJvZ3JhbTtcbiAgICBkaXNwbGF5SWNvbi5pbm5lckhUTUwgPSBpY29uLmNvbnRlbnQ7XG4gICAgZGlzcGxheUljb24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZGlzcGxheUljb24uc3R5bGVbeFBvc2l0aW9uXSA9IHhQb3NpdGlvbk9mZnNldCArIFwicHhcIjtcbiAgICBkaXNwbGF5SWNvbi5zdHlsZVt5UG9zaXRpb25dID0geVBvc2l0aW9uT2Zmc2V0ICsgXCJweFwiO1xuICAgIGRpc3BsYXlJY29uLnN0eWxlLnpJbmRleCA9IDIxNDc0ODM2NDc7IC8vdG9wIG1vc3Qgb2YgMzJiaXRcbiAgICBkaXNwbGF5SWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaWNvbi5vcmlnWSA9IHlQb3NpdGlvbk9mZnNldDtcbiAgXG4gICAgLy9zZXQgd2lkdGgsaGVpZ2h0IG9mIGRpdiBlbGVtZW50IFxuICAgIGRpc3BsYXlJY29uLnN0eWxlLndpZHRoID0gaWNvbi53aWR0aCArIFwicHhcIjtcbiAgICBkaXNwbGF5SWNvbi5zdHlsZS5oZWlnaHQgPSBpY29uLmhlaWdodCArIFwicHhcIjtcblxuICAgIGljb24uZGl2ID0gZGlzcGxheUljb247XG5cbiAgICBpZiAoaWNvbi5pY29uLmljb25DbGlja1Rocm91Z2gpIHtcbiAgICAgIGljb24uZGl2LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgaWNvbi5jbGlja0hhbmRsZXIgPSBoYW5kbGVDbGljayhpY29uKTtcbiAgICAgIGljb24uZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaWNvbi5jbGlja0hhbmRsZXIpO1xuICAgIH1cblxuICAgIHN0YXJ0SWNvbihpY29uLCB5UG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKHRoaXMuaWNvbnMubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuY29udHJvbEJhclRpbWVyID0gc2V0SW50ZXJ2YWwoYWRqdXN0SWNvbnNCeUNvbnRyb2xCYXIsIHV0aWxpdGllcy5pc0lFMTEoKSA/IDEwMCA6IDUwMCk7XG4gIH1cblxuICAvKioqKiBsb2NhbCBmdW5jdGlvbnMgKioqKioqL1xuICBmdW5jdGlvbiBhZGp1c3RJY29uc0J5Q29udHJvbEJhcigpIHtcbiAgICB2YXIgY29tcFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhhdC5wbGF5ZXIuY29udHJvbEJhci5lbCgpLCBudWxsKTtcbiAgICB2YXIgY2JIaWRkZW5DdXIgPSBjb21wU3R5bGUuYmFja2ZhY2VWaXNpYmlsaXR5ID09PSAnaGlkZGVuJyB8fCBjb21wU3R5bGUudHJhbnNmb3JtICE9ICdub25lJztcbiAgICBpZiAoY2JIaWRkZW5DdXIgIT0gdGhhdC5jYkhpZGRlbikge1xuICAgICAgdGhhdC5jYkhpZGRlbiA9IGNiSGlkZGVuQ3VyO1xuICAgICAgdmFyIGNiSGVpZ2h0ID0gY2JIaWRkZW5DdXIgPyAwIDogdGhhdC5wbGF5ZXIuY29udHJvbEJhci5lbCgpLm9mZnNldEhlaWdodDtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhhdC5pY29ucy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWMgPSB0aGF0Lmljb25zW2tdO1xuICAgICAgICBpZiAoaWMuZGl2ICYmIGljLmRpdi5zdHlsZS5kaXNwbGF5ID09PSdibG9jaycpIHtcbiAgICAgICAgICBpZiAoY2JIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAvLyBjb250cm9sIGJhciB2aXNpYmxlXG4gICAgICAgICAgICBpZiAoZWxlbWVudHNJbnRlcnNlY3RlZChpYy5kaXYsIHRoYXQucGxheWVyLmNvbnRyb2xCYXIuZWwoKSkpIHtcbiAgICAgICAgICAgICAgaWYgKGljLmRpdi5zdHlsZS50b3AgJiYgaWMuZGl2LnN0eWxlLnRvcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHlQb3MgPSBpYy5vcmlnWSAtIGNiSGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmICh5UG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgeVBvcyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGljLmRpdi5zdHlsZS50b3AgPSB5UG9zICsgJ3B4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpYy5kaXYuc3R5bGUuYm90dG9tID0gKGljLm9yaWdZICsgY2JIZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhZGp1c3RJY29uc1Bvc2l0aW9uKGljLCBjYkhlaWdodCwgdGhhdCwgMSk7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGljLmRpdi5zdHlsZS50b3AgJiYgaWMuZGl2LnN0eWxlLnRvcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGljLmRpdi5zdHlsZS50b3AgPSBpYy5vcmlnWSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgaWMuZGl2LnN0eWxlLmJvdHRvbSA9IChpYy5vcmlnWSArIGNiSGVpZ2h0KSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0SWNvbnNQb3NpdGlvbihpYywgY2JIZWlnaHQsIHRoYXQsIGxldmVsKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0Lmljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWNvbiA9IHRoYXQuaWNvbnNbaV07XG4gICAgICBpZiAoaWNvbi5kaXYuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyAmJiBpY29uLmRpdiAhPSBpYy5kaXYpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzSW50ZXJzZWN0ZWQoaWMuZGl2LCBpY29uLmRpdikpIHtcbiAgICAgICAgICBpZiAoaWNvbi5kaXYuc3R5bGUudG9wICYmIGljb24uZGl2LnN0eWxlLnRvcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgeVBvcyA9IGljb24ub3JpZ1kgLSBjYkhlaWdodDtcbiAgICAgICAgICAgIGlmICh5UG9zIDwgMCkge1xuICAgICAgICAgICAgICB5UG9zID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGljb24uZGl2LnN0eWxlLnRvcCA9IHlQb3MgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGljb24uZGl2LnN0eWxlLmJvdHRvbSA9IChpY29uLm9yaWdZICsgY2JIZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcHJvdGVjdGlvbiBhZ2FpbnN0IGluZmluaXRlIHJlY3Vyc2l2ZVxuICAgICAgICAgIGxldmVsKys7XG4gICAgICAgICAgaWYgKGxldmVsIDwgNSkge1xuICAgICAgICAgICAgYWRqdXN0SWNvbnNQb3NpdGlvbihpY29uLCBjYkhlaWdodCwgdGhhdCwgbGV2ZWwpOyAgICBcbiAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVsZW1lbnRzSW50ZXJzZWN0ZWQoZGl2MSwgZGl2Mikge1xuICAgIHZhciBjb2xsaWRlID0gZnVuY3Rpb24oZWwxLCBlbDIpIHtcbiAgICAgIHZhciByZWN0MSA9IGVsMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciByZWN0MiA9IGVsMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgXG4gICAgICByZXR1cm4gIShcbiAgICAgICAgcmVjdDEudG9wID4gcmVjdDIuYm90dG9tIHx8XG4gICAgICAgIHJlY3QxLnJpZ2h0IDwgcmVjdDIubGVmdCB8fFxuICAgICAgICByZWN0MS5ib3R0b20gPCByZWN0Mi50b3AgfHxcbiAgICAgICAgcmVjdDEubGVmdCA+IHJlY3QyLnJpZ2h0XG4gICAgICApO1xuICAgIH07XG4gICAgdmFyIGluc2lkZSA9IGZ1bmN0aW9uKGVsMSwgZWwyKSB7XG4gICAgICB2YXIgcmVjdDEgPSBlbDEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgcmVjdDIgPSBlbDIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKChyZWN0Mi50b3AgPD0gcmVjdDEudG9wKSAmJiAocmVjdDEudG9wIDw9IHJlY3QyLmJvdHRvbSkpICYmXG4gICAgICAgICgocmVjdDIudG9wIDw9IHJlY3QxLmJvdHRvbSkgJiYgKHJlY3QxLmJvdHRvbSA8PSByZWN0Mi5ib3R0b20pKSAmJlxuICAgICAgICAoKHJlY3QyLmxlZnQgPD0gcmVjdDEubGVmdCkgJiYgKHJlY3QxLmxlZnQgPD0gcmVjdDIucmlnaHQpKSAmJlxuICAgICAgICAoKHJlY3QyLmxlZnQgPD0gcmVjdDEucmlnaHQpICYmIChyZWN0MS5yaWdodCA8PSByZWN0Mi5yaWdodCkpXG4gICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIGNvbGxpZGUoZGl2MSwgZGl2MikgfHwgaW5zaWRlKGRpdjEsIGRpdjIpIHx8IGluc2lkZShkaXYyLCBkaXYxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrVXJscyh1cmxzKSB7XG4gICAgdXJscy5mb3JFYWNoKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhpY29uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdHJhY2tVcmxzKGljb24uaWNvbi5pY29uQ2xpY2tUcmFja2luZ3MpO1xuICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICB3aW5kb3cub3BlbihpY29uLmljb24uaWNvbkNsaWNrVGhyb3VnaCwgJ19ibGFuaycpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEljb24oaWNvbiwgeVBvc2l0aW9uKSB7XG4gICAgdmFyIG9mZnNldCA9IGljb24uaWNvbi5vZmZzZXQgJiYgaWNvbi5pY29uLm9mZnNldCA+IDAgPyBpY29uLmljb24ub2Zmc2V0IDogMDtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWNvbi5kaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0cmFja1VybHMoaWNvbi5pY29uLmljb25WaWV3VHJhY2tpbmdzKTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGF0Lmljb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGF0Lmljb25zW2pdLmRpdiAmJiB0aGF0Lmljb25zW2pdLmRpdiAhPSBpY29uLmRpdikge1xuICAgICAgICAgIGlmIChlbGVtZW50c0ludGVyc2VjdGVkKHRoYXQuaWNvbnNbal0uZGl2LCBpY29uLmRpdikpIHtcbiAgICAgICAgICAgIHZhciByZWN0MSA9IHRoYXQuaWNvbnNbal0uZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKHlQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgaWNvbi5kaXYuc3R5bGUudG9wID0gKHRoYXQuaWNvbnNbal0uZGl2Lm9mZnNldFRvcCArIHRoYXQuaWNvbnNbal0uZGl2Lm9mZnNldEhlaWdodCArIDEpICsgJ3B4JztcbiAgICAgICAgICAgICAgaWNvbi5vcmlnWSA9IHRoYXQuaWNvbnNbal0uZGl2Lm9mZnNldFRvcCArIHRoYXQuaWNvbnNbal0uZGl2Lm9mZnNldEhlaWdodCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIHJlY3QyID0gdGhhdC5wbGF5ZXIuZWwoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgaWNvbi5kaXYuc3R5bGUuYm90dG9tID0gKHJlY3QyLmhlaWdodCArIHJlY3QyLnRvcCAtIHJlY3QxLnRvcCArIDEpICsgJ3B4JztcbiAgICAgICAgICAgICAgaWNvbi5vcmlnWSA9IHJlY3QyLmhlaWdodCArIHJlY3QyLnRvcCAtIHJlY3QxLnRvcCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaWYgKGljb24uaWNvbi5kdXJhdGlvbiAmJiBpY29uLmljb24uZHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGljb24uaWNvbi5kdXJhdGlvbjtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaWR4ID0gdGhhdC5pY29ucy5pbmRleE9mKGljb24pO1xuICAgICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgaWYgKGljb24uY2xpY2tIYW5kbGVyKSB7XG4gICAgICAgICAgICAgIGljb24uZGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaWNvbi5jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyLmVsKCkucmVtb3ZlQ2hpbGQoaWNvbi5kaXYpO1xuICAgICAgICAgICAgdGhhdC5pY29ucy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LCBvZmZzZXQpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEljb25JbnRlZ3JhdG9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XG52YXIgV3JhcHBlciA9IHJlcXVpcmUoJy4vV3JhcHBlcicpO1xuXG5mdW5jdGlvbiBBZChhZEpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBBZCkpIHtcbiAgICByZXR1cm4gbmV3IEFkKGFkSlRyZWUpO1xuICB9XG4gIHRoaXMuaW5pdGlhbGl6ZShhZEpUcmVlKTtcbn1cblxuQWQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihhZEpUcmVlKSB7XG4gIHRoaXMuaWQgPSBhZEpUcmVlLmF0dHIoJ2lkJyk7XG4gIHRoaXMuc2VxdWVuY2UgPSBhZEpUcmVlLmF0dHIoJ3NlcXVlbmNlJyk7XG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgdGhpcy5jb25kaXRpb25hbEFkID0gYWRKVHJlZS5hdHRyKCdjb25kaXRpb25hbEFkJyk7XG4gIH1cblxuICBpZihhZEpUcmVlLmluTGluZSkge1xuICAgIHRoaXMuaW5MaW5lID0gbmV3IEluTGluZShhZEpUcmVlLmluTGluZSk7XG4gIH1cblxuICBpZihhZEpUcmVlLndyYXBwZXIpe1xuICAgIHRoaXMud3JhcHBlciA9IG5ldyBXcmFwcGVyKGFkSlRyZWUud3JhcHBlcik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBDYXRlZ29yeShjYXRlZ29yeUpUcmVlKSB7XG5cdCAgaWYoISh0aGlzIGluc3RhbmNlb2YgQ2F0ZWdvcnkpKSB7XG5cdCAgICByZXR1cm4gbmV3IENhdGVnb3J5KGNhdGVnb3J5SlRyZWUpO1xuXHQgIH1cblxuXHQgIHRoaXMuYXV0aG9yaXR5ID0gY2F0ZWdvcnlKVHJlZS5hdHRyKCdhdXRob3JpdHknKTtcblx0ICB0aGlzLmNhdGVnb3J5ID0geG1sLmtleVZhbHVlKGNhdGVnb3J5SlRyZWUpO1xufVxuXG5DYXRlZ29yeS5wYXJzZUNhdGVnb3JpZXMgPSBmdW5jdGlvbiBwYXJzZUNhdGVnb3RpZXMoY2F0ZWdvcmllc0pUcmVlKSB7XG5cdCAgdmFyIGNhdGVnb3JpZXMgPSBbXTtcblx0ICB2YXIgY2F0ZWdvcmllc0RhdGE7XG5cdCAgaWYgKGNhdGVnb3JpZXMpIHtcblx0XHQgIGNhdGVnb3JpZXNEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkoY2F0ZWdvcmllc0pUcmVlKSA/IGNhdGVnb3JpZXNKVHJlZSA6IFtjYXRlZ29yaWVzSlRyZWVdO1xuXHRcdCAgY2F0ZWdvcmllc0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcblx0XHRcdCAgdmFyIGNhdCA9IG5ldyBDYXRlZ29yeShjYXRlZ29yeSk7XG5cdFx0XHQgIGlmIChjYXQuY2F0ZWdvcnkgJiYgY2F0LmNhdGVnb3J5Lmxlbmd0aCA+IDAgJiYgY2F0LmF1dGhvcml0eSAmJiBjYXQuYXV0aG9yaXR5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ICBjYXRlZ29yaWVzLnB1c2gobmV3IENhdGVnb3J5KGNhdGVnb3J5KSk7XG5cdFx0XHQgIH1cblx0XHQgIH0pO1xuXHQgIH1cblx0ICByZXR1cm4gY2F0ZWdvcmllcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2F0ZWdvcnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBUcmFja2luZ0V2ZW50ID0gcmVxdWlyZSgnLi9UcmFja2luZ0V2ZW50Jyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cblxuZnVuY3Rpb24gQ29tcGFuaW9uKGNvbXBhbmlvbkpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYW5pb24pKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYW5pb24oY29tcGFuaW9uSlRyZWUpO1xuICB9XG5cbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gZm91bmQgY29tcGFuaW9uIGFkXCIpO1xuICBsb2dnZXIuZGVidWcgKFwiPENvbXBhbmlvbj4gIGNvbXBhbmlvbkpUcmVlOlwiLCBjb21wYW5pb25KVHJlZSk7XG5cbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xuICB0aGlzLmNyZWF0aXZlVHlwZSA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLnN0YXRpY1Jlc291cmNlLCAnY3JlYXRpdmVUeXBlJyk7XG4gIHRoaXMuc3RhdGljUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuc3RhdGljUmVzb3VyY2UpO1xuXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBjcmVhdGl2ZVR5cGU6IFwiICsgdGhpcy5jcmVhdGl2ZVR5cGUpO1xuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiAgc3RhdGljUmVzb3VyY2U6IFwiICsgdGhpcy5zdGF0aWNSZXNvdXJjZSk7XG5cbiAgLy8gV2VpcmQgYnVnIHdoZW4gdGhlIEpYT04gdHJlZSBpcyBidWlsdCBpdCBkb2Vzbid0IGhhbmRsZSBjYXNpbmcgcHJvcGVybHkgaW4gdGhpcyBzaXR1YXRpb24uLi5cbiAgdmFyIGh0bWxSZXNvdXJjZSA9IG51bGw7XG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSFRNTFJlc291cmNlKSkge1xuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5IVE1MUmVzb3VyY2UpO1xuICB9IGVsc2UgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5oVE1MUmVzb3VyY2UpKSB7XG4gICAgaHRtbFJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmhUTUxSZXNvdXJjZSk7XG4gIH1cblxuICBpZiAoaHRtbFJlc291cmNlICE9PSBudWxsKVxuICB7XG4gICAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gZm91bmQgaHRtbCByZXNvdXJjZVwiLCBodG1sUmVzb3VyY2UpO1xuICB9XG5cbiAgdGhpcy5odG1sUmVzb3VyY2UgPSBodG1sUmVzb3VyY2U7XG5cbiAgdmFyIGlmcmFtZVJlc291cmNlID0gbnVsbDtcbiAgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5JRnJhbWVSZXNvdXJjZSkpIHtcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5JRnJhbWVSZXNvdXJjZSk7XG4gIH0gZWxzZSBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmlGcmFtZXJlc291cmNlKSkge1xuICAgIGlmcmFtZVJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmlGcmFtZXJlc291cmNlKTtcbiAgfVxuXG4gIGlmIChpZnJhbWVSZXNvdXJjZSAhPT0gbnVsbClcbiAge1xuICAgIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGlmcmFtZSByZXNvdXJjZVwiLCBpZnJhbWVSZXNvdXJjZSk7XG4gIH1cblxuICB0aGlzLmlmcmFtZVJlc291cmNlID0gaWZyYW1lUmVzb3VyY2U7XG5cbiAgLy9PcHRpb25hbCBmaWVsZHNcbiAgdGhpcy5pZCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnaWQnKTtcbiAgdGhpcy53aWR0aCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnd2lkdGgnKTtcbiAgdGhpcy5oZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2hlaWdodCcpO1xuICB0aGlzLmFzc2V0V2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2Fzc2V0V2lkdGgnKTtcbiAgdGhpcy5hc3NldEhlaWdodCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnYXNzZXRIZWlnaHQnKTtcbiAgdGhpcy5leHBhbmRlZFdpZHRoID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdleHBhbmRlZFdpZHRoJyk7XG4gIHRoaXMuZXhwYW5kZWRIZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2V4cGFuZGVkSGVpZ2h0Jyk7XG4gIHRoaXMuYXBpRnJhbWV3b3JrID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdhcGlGcmFtZXdvcmsnKTtcbiAgdGhpcy5hZFNsb3RJRCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnYWRTbG90SUQnKTtcbiAgdGhpcy5jb21wYW5pb25DbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuY29tcGFuaW9uQ2xpY2tUaHJvdWdoKTtcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHBhcnNlVHJhY2tpbmdFdmVudHMoY29tcGFuaW9uSlRyZWUudHJhY2tpbmdFdmVudHMgJiYgY29tcGFuaW9uSlRyZWUudHJhY2tpbmdFdmVudHMudHJhY2tpbmcpO1xuICBcbiAgaWYgKHdpbmRvdy5tb2xfdmFzdFZlcnNpb24gPT09IDQpIHtcblx0ICB0aGlzLnB4cmF0aW8gPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3B4cmF0aW8nKTtcbiAgfVxuXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBjb21wYW5pb25DbGlja1Rocm91Z2g6IFwiICsgdGhpcy5jb21wYW5pb25DbGlja1Rocm91Z2gpO1xuXG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5nRXZlbnRzKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdmFyIHRyYWNraW5ncyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYWNraW5nRXZlbnRzKSkge1xuICAgICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0RhdGEpIHtcbiAgICAgICAgdHJhY2tpbmdzLnB1c2gobmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdEYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNraW5ncztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBhbmlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMaW5lYXIgPSByZXF1aXJlKCcuL0xpbmVhcicpO1xudmFyIENvbXBhbmlvbiA9IHJlcXVpcmUoJy4vQ29tcGFuaW9uJyk7XG52YXIgVW5pdmVyc2FsQWRJZCA9IHJlcXVpcmUoJy4vVW5pdmVyc2FsQWRJZCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gQ3JlYXRpdmUoY3JlYXRpdmVKVHJlZSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBDcmVhdGl2ZSkpIHtcbiAgICByZXR1cm4gbmV3IENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpO1xuICB9XG5cbiAgdGhpcy5pZCA9IGNyZWF0aXZlSlRyZWUuYXR0cignaWQnKTtcbiAgdGhpcy5zZXF1ZW5jZSA9IGNyZWF0aXZlSlRyZWUuYXR0cignc2VxdWVuY2UnKTtcbiAgdGhpcy5hZElkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhZElkJyk7XG4gIHRoaXMuYXBpRnJhbWV3b3JrID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhcGlGcmFtZXdvcmsnKTtcblxuICBpZihjcmVhdGl2ZUpUcmVlLmxpbmVhcikge1xuICAgIHRoaXMubGluZWFyID0gbmV3IExpbmVhcihjcmVhdGl2ZUpUcmVlLmxpbmVhcik7XG4gIH1cblxuICBpZiAoY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMpIHtcbiAgICB2YXIgY29tcGFuaW9ucyA9IFtdO1xuICAgIHZhciBjb21wYW5pb25BZHMgPSBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcyAmJiBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcy5jb21wYW5pb247XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoY29tcGFuaW9uQWRzKSkge1xuICAgICAgY29tcGFuaW9uQWRzID0gdXRpbGl0aWVzLmlzQXJyYXkoY29tcGFuaW9uQWRzKSA/IGNvbXBhbmlvbkFkcyA6IFtjb21wYW5pb25BZHNdO1xuICAgICAgY29tcGFuaW9uQWRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBhbmlvbkRhdGEpIHtcbiAgICAgICAgY29tcGFuaW9ucy5wdXNoKG5ldyBDb21wYW5pb24oY29tcGFuaW9uRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY29tcGFuaW9uQWRzID0gY29tcGFuaW9ucztcbiAgfVxuXG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgdGhpcy51bml2ZXJzYWxBZElkID0gbmV3IFVuaXZlcnNhbEFkSWQoY3JlYXRpdmVKVHJlZS51bml2ZXJzYWxBZElkKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBhdCB0aGUgY3JlYXRpdmUuXG4gKi9cbkNyZWF0aXZlLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubGluZWFyKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZWFyLmlzU3VwcG9ydGVkKCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkNyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzID0gZnVuY3Rpb24gcGFyc2VDcmVhdGl2ZXMoY3JlYXRpdmVzSlRyZWUpIHtcbiAgdmFyIGNyZWF0aXZlcyA9IFtdO1xuICB2YXIgY3JlYXRpdmVzRGF0YTtcbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUpKSB7XG4gICAgY3JlYXRpdmVzRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlKSA/IGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlIDogW2NyZWF0aXZlc0pUcmVlLmNyZWF0aXZlXTtcbiAgICBjcmVhdGl2ZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XG4gICAgICBjcmVhdGl2ZXMucHVzaChuZXcgQ3JlYXRpdmUoY3JlYXRpdmUpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY3JlYXRpdmVzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDcmVhdGl2ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciBhdHRyaWJ1dGVzTGlzdCA9IFtcbiAgJ3Byb2dyYW0nLFxuICAnd2lkdGgnLFxuICAnaGVpZ2h0JyxcbiAgJ3hQb3NpdGlvbicsXG4gICd5UG9zaXRpb24nLFxuICAnZHVyYXRpb24nLFxuICAnb2Zmc2V0JyxcbiAgJ2FwaUZyYW1ld29yaycsXG4gICdweHJhdGlvJ1xuXTtcblxuZnVuY3Rpb24gSWNvbihpY29uSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEljb24pKSB7XG4gICAgcmV0dXJuIG5ldyBJY29uKGljb25KVHJlZSk7XG4gIH1cblxuICAvL0F0dHJpYnV0ZXNcbiAgZm9yKHZhciB4PTA7IHg8YXR0cmlidXRlc0xpc3QubGVuZ3RoOyB4KyspIHtcbiAgICB2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlc0xpc3RbeF07XG4gICAgdGhpc1thdHRyaWJ1dGVdID0gaWNvbkpUcmVlLmF0dHIoYXR0cmlidXRlKTtcbiAgfVxuICBpZiAodGhpcy5kdXJhdGlvbikge1xuICAgIHRoaXMuZHVyYXRpb24gPSBwYXJzZXJzLmR1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICB9XG4gIGlmICh0aGlzLm9mZnNldCkge1xuICAgIHRoaXMub2Zmc2V0ID0gcGFyc2Vycy5kdXJhdGlvbih0aGlzLm9mZnNldCk7XG4gIH1cblxuICAvL1JlcXVpcmVkIEVsZW1lbnRzXG4gIHRoaXMuY3JlYXRpdmVUeXBlID0geG1sLmF0dHIoaWNvbkpUcmVlLnN0YXRpY1Jlc291cmNlLCAnY3JlYXRpdmVUeXBlJyk7XG4gIHRoaXMuc3RhdGljUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoaWNvbkpUcmVlLnN0YXRpY1Jlc291cmNlKTtcblxuICB2YXIgaHRtbFJlc291cmNlID0gbnVsbDtcbiAgaWYgKHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuSFRNTFJlc291cmNlKSkge1xuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuSFRNTFJlc291cmNlKTtcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoaWNvbkpUcmVlLmhUTUxSZXNvdXJjZSkpIHtcbiAgICBodG1sUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoaWNvbkpUcmVlLmhUTUxSZXNvdXJjZSk7XG4gIH1cblxuICB0aGlzLmh0bWxSZXNvdXJjZSA9IGh0bWxSZXNvdXJjZTtcblxuICB2YXIgaWZyYW1lUmVzb3VyY2UgPSBudWxsO1xuICBpZiAoeG1sLmtleVZhbHVlKGljb25KVHJlZS5JRnJhbWVSZXNvdXJjZSkpIHtcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuSUZyYW1lUmVzb3VyY2UpO1xuICB9IGVsc2UgaWYgKHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuaUZyYW1lcmVzb3VyY2UpKSB7XG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoaWNvbkpUcmVlLmlGcmFtZXJlc291cmNlKTtcbiAgfVxuXG4gIHRoaXMuaWZyYW1lUmVzb3VyY2UgPSBpZnJhbWVSZXNvdXJjZTtcblxuICB0aGlzLmljb25WaWV3VHJhY2tpbmdzID0gcGFyc2VUcmFja2luZ3MoaWNvbkpUcmVlLmljb25WaWV3VHJhY2tpbmcpO1xuXG4gIGlmIChpY29uSlRyZWUuaWNvbkNsaWNrcykge1xuICAgIHRoaXMuaWNvbkNsaWNrVGhyb3VnaCA9IHhtbC5rZXlWYWx1ZShpY29uSlRyZWUuaWNvbkNsaWNrcy5pY29uQ2xpY2tUaHJvdWdoKTtcbiAgICB0aGlzLmljb25DbGlja1RyYWNraW5ncyA9IHBhcnNlVHJhY2tpbmdzKGljb25KVHJlZS5pY29uQ2xpY2tzLmljb25DbGlja1RyYWNraW5nKTtcbiAgfVxuXG4gIC8vIExvY2FsIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5ncyh0cmFja2luZ3MpIHtcbiAgICBpZiAodHJhY2tpbmdzKSB7XG4gICAgICB0cmFja2luZ3MgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ3MpID8gdHJhY2tpbmdzIDogW3RyYWNraW5nc107XG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KHRyYWNraW5ncywgZnVuY3Rpb24gKHRyYWNraW5ncykge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodHJhY2tpbmdzLmtleVZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cmFja2luZ3Mua2V5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJY29uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG52YXIgQ3JlYXRpdmUgPSByZXF1aXJlKCcuL0NyZWF0aXZlJyk7XG52YXIgQ2F0ZWdvcnkgPSByZXF1aXJlKCcuL0NhdGVnb3J5Jyk7XG52YXIgVmlld2FibGVJbXByZXNzaW9uID0gcmVxdWlyZSgnLi9WaWV3YWJsZUltcHJlc3Npb24nKTtcbnZhciBWZXJpZmljYXRpb24gPSByZXF1aXJlKCcuL1ZlcmlmaWNhdGlvbicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBJbkxpbmUoaW5saW5lSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEluTGluZSkpIHtcbiAgICByZXR1cm4gbmV3IEluTGluZShpbmxpbmVKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIEZpZWxkc1xuICB0aGlzLmFkVGl0bGUgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWRUaXRsZSk7XG4gIHRoaXMuYWRTeXN0ZW0gPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWRTeXN0ZW0pO1xuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyhpbmxpbmVKVHJlZS5pbXByZXNzaW9uKTtcbiAgdGhpcy5jcmVhdGl2ZXMgPSBDcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyhpbmxpbmVKVHJlZS5jcmVhdGl2ZXMpO1xuXG4gIC8vT3B0aW9uYWwgRmllbGRzXG4gIHRoaXMuZGVzY3JpcHRpb24gPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuZGVzY3JpcHRpb24pO1xuICB0aGlzLmFkdmVydGlzZXIgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWR2ZXJ0aXNlcik7XG4gIHRoaXMuc3VydmV5cyA9IHBhcnNlU3VydmV5cyhpbmxpbmVKVHJlZS5zdXJ2ZXkpO1xuICAvL3RoaXMuZXJyb3IgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuZXJyb3IpO1xuICB0aGlzLmVycm9ycyA9IHZhc3RVdGlsLnBhcnNlRXJyb3JzKGlubGluZUpUcmVlLmVycm9yKTtcbiAgdGhpcy5wcmljaW5nID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLnByaWNpbmcpO1xuICB0aGlzLmV4dGVuc2lvbnMgPSBpbmxpbmVKVHJlZS5leHRlbnNpb25zO1xuICBpZiAodGhpcy5leHRlbnNpb25zKSB7XG5cdCAgdGhpcy5tb2F0ID0gcGFyc2VNb2F0KHRoaXMuZXh0ZW5zaW9ucyk7XG4gIH1cbiAgaWYgKHdpbmRvdy5tb2xfdmFzdFZlcnNpb24gPT09IDQpIHtcblx0ICBpZiAoaW5saW5lSlRyZWUuY2F0ZWdvcnkpIHtcblx0XHQgIHRoaXMuY2F0ZWdvcmllcyA9IENhdGVnb3J5LnBhcnNlQ2F0ZWdvcmllcyhpbmxpbmVKVHJlZS5jYXRlZ29yeSk7XG5cdCAgfVxuXHQgIGlmIChpbmxpbmVKVHJlZS52aWV3YWJsZUltcHJlc3Npb24pIHtcblx0XHQgIHRoaXMudmlld2FibGVJbXByZXNzaW9uID0gbmV3IFZpZXdhYmxlSW1wcmVzc2lvbihpbmxpbmVKVHJlZS52aWV3YWJsZUltcHJlc3Npb24pO1xuXHQgIH1cblx0ICBpZiAoaW5saW5lSlRyZWUuYWRWZXJpZmljYXRpb25zKSB7XG5cdFx0ICB0aGlzLmFkVmVyaWZpY2F0aW9ucyA9IFZlcmlmaWNhdGlvbi5wYXJzZUFkVmVyaWZpY2F0aW9ucyhpbmxpbmVKVHJlZS5hZFZlcmlmaWNhdGlvbnMpO1xuXHQgIH1cbiAgfVxuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VTdXJ2ZXlzKGlubGluZVN1cnZleXMpIHtcbiAgICBpZiAoaW5saW5lU3VydmV5cykge1xuICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheSh1dGlsaXRpZXMuaXNBcnJheShpbmxpbmVTdXJ2ZXlzKSA/IGlubGluZVN1cnZleXMgOiBbaW5saW5lU3VydmV5c10sIGZ1bmN0aW9uIChzdXJ2ZXkpIHtcbiAgICAgICAgaWYodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoc3VydmV5LmtleVZhbHVlKSl7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVyaTogc3VydmV5LmtleVZhbHVlLFxuICAgICAgICAgICAgdHlwZTogc3VydmV5LmF0dHIoJ3R5cGUnKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTW9hdChleHRlbnNpb25zKSB7XG5cdCAgdmFyIGdldE1vYXRDb25maWdEYXRhID0gZnVuY3Rpb24oYXJyRXh0ZW50aW9ucykge1xuXHRcdCAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJFeHRlbnRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQgIHZhciBleHRlbnNpb24gPSBhcnJFeHRlbnRpb25zW2ldLmV4dGVuc2lvbjtcblx0XHRcdCAgaWYgKGV4dGVuc2lvbiAmJiBleHRlbnNpb24ubW9hdCkge1xuXHRcdFx0XHQgIHZhciBtb2F0ID0ge307XG5cdFx0XHRcdCAgdmFyIHZhbHVlID0geG1sLmtleVZhbHVlKGV4dGVuc2lvbi5tb2F0KTtcblx0XHRcdFx0ICB2YXIgYXJyID0gdmFsdWUuc3BsaXQoJzsnKTtcblx0XHRcdFx0ICBmb3IgKHZhciBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdCAgdmFyIHBhcmFtcyA9IGFycltqXS5zcGxpdCgnPScpO1xuXHRcdFx0XHRcdCAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRcdFx0XHQgIG1vYXRbcGFyYW1zWzBdXSA9IHBhcmFtc1sxXTtcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgcmV0dXJuIG1vYXQ7XG5cdFx0XHQgIH1cblx0XHQgIH1cblx0XHQgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgfTtcblx0ICBpZiAoZXh0ZW5zaW9ucykge1xuXHRcdCAgcmV0dXJuIGdldE1vYXRDb25maWdEYXRhKHV0aWxpdGllcy5pc0FycmF5KGV4dGVuc2lvbnMpID8gZXh0ZW5zaW9ucyA6IFtleHRlbnNpb25zXSk7XG5cdCAgfVxuXHQgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBhbGwgdGhlIGNyZWF0aXZlcy5cbiAqL1xuSW5MaW5lLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpLGxlbjtcblxuICBpZih0aGlzLmNyZWF0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IoaSA9IDAsIGxlbiA9IHRoaXMuY3JlYXRpdmVzLmxlbmd0aDsgaTwgbGVuOyBpKz0xKXtcbiAgICBpZighdGhpcy5jcmVhdGl2ZXNbaV0uaXNTdXBwb3J0ZWQoKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbkxpbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIEludGVyYWN0aXZlQ3JlYXRpdmVGaWxlKGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlSlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUpKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZShpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZUpUcmVlKTtcbiAgfVxuXG4gIHRoaXMudHlwZSA9IGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlSlRyZWUuYXR0cigndHlwZScpO1xuICB0aGlzLmFwaUZyYW1ld29yayA9IGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlSlRyZWUuYXR0cignYXBpRnJhbWV3b3JrJyk7XG4gIHRoaXMuc3JjID0geG1sLmtleVZhbHVlKGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlSlRyZWUpO1xufVxuXG5JbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZS5wYXJzZUludGVyYWN0aXZlQ3JlYXRpdmVGaWxlcyA9IGZ1bmN0aW9uIHBhcnNlSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzKGljZnNKVHJlZSkge1xuICB2YXIgaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzID0gW107XG4gIHZhciBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXNEYXRhO1xuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChpY2ZzSlRyZWUpKSB7XG5cdCAgaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGljZnNKVHJlZSkgPyBpY2ZzSlRyZWUgOiBbaWNmc0pUcmVlXTtcblx0ICBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGZpbGVKVHJlZSkge1xuXHRcdCAgaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzLnB1c2gobmV3IEludGVyYWN0aXZlQ3JlYXRpdmVGaWxlKGZpbGVKVHJlZSkpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyYWN0aXZlQ3JlYXRpdmVGaWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xudmFyIE1lZGlhRmlsZSA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlJyk7XG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XG52YXIgSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUgPSByZXF1aXJlKCcuL0ludGVyYWN0aXZlQ3JlYXRpdmVGaWxlJyk7XG52YXIgSWNvbiA9IHJlcXVpcmUoJy4vSWNvbicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHBhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5cbmZ1bmN0aW9uIExpbmVhcihsaW5lYXJKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTGluZWFyKSkge1xuICAgIHJldHVybiBuZXcgTGluZWFyKGxpbmVhckpUcmVlKTtcbiAgfVxuXG4gIC8vUmVxdWlyZWQgRWxlbWVudHNcbiAgdGhpcy5kdXJhdGlvbiA9IHBhcnNlcnMuZHVyYXRpb24oeG1sLmtleVZhbHVlKGxpbmVhckpUcmVlLmR1cmF0aW9uKSk7XG4gIHRoaXMubWVkaWFGaWxlcyA9IHBhcnNlTWVkaWFGaWxlcyhsaW5lYXJKVHJlZS5tZWRpYUZpbGVzICYmIGxpbmVhckpUcmVlLm1lZGlhRmlsZXMubWVkaWFGaWxlKTtcblxuICAvL09wdGlvbmFsIGZpZWxkc1xuICB0aGlzLnRyYWNraW5nRXZlbnRzID0gcGFyc2VUcmFja2luZ0V2ZW50cyhsaW5lYXJKVHJlZS50cmFja2luZ0V2ZW50cyAmJiBsaW5lYXJKVHJlZS50cmFja2luZ0V2ZW50cy50cmFja2luZywgdGhpcy5kdXJhdGlvbik7XG4gIHRoaXMuc2tpcG9mZnNldCA9IHBhcnNlcnMub2Zmc2V0KHhtbC5hdHRyKGxpbmVhckpUcmVlLCAnc2tpcG9mZnNldCcpLCB0aGlzLmR1cmF0aW9uKTtcbiAgXG4gIC8vIGFkanVzdCBza2lwb2Zmc2V0IHRvIHB1Ymxpc2hlciBzZXR0aW5nc1xuICBpZiAodGhpcy5kdXJhdGlvbiAmJiB3aW5kb3cuX21vbFNldHRpbmdzICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlKSB7XG5cdCAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLmVuYWJsZWQpIHtcblx0XHQgaWYgKHRoaXMuZHVyYXRpb24gPj0gd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQpIHtcblx0XHRcdCB0aGlzLnNraXBvZmZzZXQgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS52aWRlb09mZnNldDtcblx0XHQgfVxuXHRcdCBlbHNlIHtcblx0XHRcdCB0aGlzLnNraXBvZmZzZXQgPSBudWxsOyBcblx0XHQgfVxuXHQgIH1cblx0ICBlbHNlIHtcblx0XHQgIHRoaXMuc2tpcG9mZnNldCA9IG51bGw7IFxuXHQgIH1cbiAgfVxuXG4gIGlmIChsaW5lYXJKVHJlZS52aWRlb0NsaWNrcykge1xuICAgIHRoaXMudmlkZW9DbGlja3MgPSBuZXcgVmlkZW9DbGlja3MobGluZWFySlRyZWUudmlkZW9DbGlja3MpO1xuICB9XG5cbiAgaWYobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwua2V5VmFsdWUobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKTtcblxuICAgIGlmKHhtbC5hdHRyKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycywgJ3htbEVuY29kZWQnKSkge1xuICAgICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwuZGVjb2RlKHRoaXMuYWRQYXJhbWV0ZXJzKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgaWYgKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMgJiYgbGluZWFySlRyZWUubWVkaWFGaWxlcy5tZXp6YW5pbmUpIHtcblx0XHQgIHRoaXMubWV6emFuaW5lID0geG1sLmtleVZhbHVlKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMubWV6emFuaW5lKTtcblx0ICB9XG5cdCAgaWYgKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMgJiYgbGluZWFySlRyZWUubWVkaWFGaWxlcy5pbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZSkge1xuXHRcdCAgdGhpcy5pbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXMgPSBJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZS5wYXJzZUludGVyYWN0aXZlQ3JlYXRpdmVGaWxlcyhsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLmludGVyYWN0aXZlQ3JlYXRpdmVGaWxlKTtcblx0ICB9XG4gIH1cblxuICBpZiAobGluZWFySlRyZWUuaWNvbnMpIHtcbiAgICB0aGlzLmljb25zID0gcGFyc2VJY29ucyhsaW5lYXJKVHJlZS5pY29ucyAmJiBsaW5lYXJKVHJlZS5pY29ucy5pY29uKTtcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VUcmFja2luZ0V2ZW50cyh0cmFja2luZ0V2ZW50cywgZHVyYXRpb24pIHtcbiAgICB2YXIgdHJhY2tpbmdzID0gW107XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodHJhY2tpbmdFdmVudHMpKSB7XG4gICAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRGF0YSkge1xuICAgICAgICB0cmFja2luZ3MucHVzaChuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0RhdGEsIGR1cmF0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNraW5ncztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTWVkaWFGaWxlcyhtZWRpYUZpbGVzSnhvblRyZWUpIHtcbiAgICB2YXIgbWVkaWFGaWxlcyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG1lZGlhRmlsZXNKeG9uVHJlZSkpIHtcbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZSA9IHV0aWxpdGllcy5pc0FycmF5KG1lZGlhRmlsZXNKeG9uVHJlZSkgPyBtZWRpYUZpbGVzSnhvblRyZWUgOiBbbWVkaWFGaWxlc0p4b25UcmVlXTtcblxuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlLmZvckVhY2goZnVuY3Rpb24gKG1mRGF0YSkge1xuICAgICAgICBtZWRpYUZpbGVzLnB1c2gobmV3IE1lZGlhRmlsZShtZkRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVkaWFGaWxlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSWNvbnMoaWNvbnNKeG9uVHJlZSkge1xuICAgIHZhciBpY29ucyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGljb25zSnhvblRyZWUpKSB7XG4gICAgICBpY29uc0p4b25UcmVlID0gdXRpbGl0aWVzLmlzQXJyYXkoaWNvbnNKeG9uVHJlZSkgPyBpY29uc0p4b25UcmVlIDogW2ljb25zSnhvblRyZWVdO1xuXG4gICAgICBpY29uc0p4b25UcmVlLmZvckVhY2goZnVuY3Rpb24gKGljb25EYXRhKSB7XG4gICAgICAgIGljb25zLnB1c2gobmV3IEljb24oaWNvbkRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbnM7XG4gIH1cbn1cblxuLyoqXG4gKiBNdXN0IHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgTWVkaWFGaWxlcycgdHlwZSBpcyBzdXBwb3J0ZWRcbiAqL1xuTGluZWFyLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yKGk9MCwgbGVuPXRoaXMubWVkaWFGaWxlcy5sZW5ndGg7IGk8bGVuOyBpKz0xKSB7XG4gICAgaWYodGhpcy5tZWRpYUZpbGVzW2ldLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZWFyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhdHRyaWJ1dGVzTGlzdCA9IFtcbiAgLy9SZXF1aXJlZCBhdHRyaWJ1dGVzXG4gICdkZWxpdmVyeScsXG4gICd0eXBlJyxcbiAgJ3dpZHRoJyxcbiAgJ2hlaWdodCcsXG4gIC8vT3B0aW9uYWwgYXR0cmlidXRlc1xuICAnY29kZWMnLFxuICAnaWQnLFxuICAnYml0cmF0ZScsXG4gICdtaW5CaXRyYXRlJyxcbiAgJ21heEJpdHJhdGUnLFxuICAnc2NhbGFibGUnLFxuICAnbWFpbnRhaW5Bc3BlY3RSYXRpbycsXG4gICdhcGlGcmFtZXdvcmsnXG5dO1xuXG5mdW5jdGlvbiBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1lZGlhRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IE1lZGlhRmlsZShtZWRpYUZpbGVKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIGF0dHJpYnV0ZXNcbiAgdGhpcy5zcmMgPSB4bWwua2V5VmFsdWUobWVkaWFGaWxlSlRyZWUpO1xuXG4gIGZvcih2YXIgeD0wOyB4PGF0dHJpYnV0ZXNMaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNMaXN0W3hdO1xuICAgIHRoaXNbYXR0cmlidXRlXSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoYXR0cmlidXRlKTtcbiAgfVxufVxuXG5NZWRpYUZpbGUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcbiAgaWYodmFzdFV0aWwuaXNWUEFJRCh0aGlzKSkge1xuICAgIHJldHVybiAhIXZhc3RVdGlsLmZpbmRTdXBwb3J0ZWRWUEFJRFRlY2godGhpcy50eXBlKTtcbiAgfVxuXG4gIGlmICh0aGlzLnR5cGUgPT09ICd2aWRlby94LWZsdicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFGaWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIFRyYWNraW5nRXZlbnQodHJhY2tpbmdKVHJlZSwgZHVyYXRpb24pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRyYWNraW5nRXZlbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKTtcbiAgfVxuXG4gIHRoaXMubmFtZSA9IHRyYWNraW5nSlRyZWUuYXR0cignZXZlbnQnKTtcbiAgdGhpcy51cmkgPSB4bWwua2V5VmFsdWUodHJhY2tpbmdKVHJlZSk7XG5cbiAgaWYoJ3Byb2dyZXNzJyA9PT0gdGhpcy5uYW1lKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBwYXJzZXJzLm9mZnNldCh0cmFja2luZ0pUcmVlLmF0dHIoJ29mZnNldCcpLCBkdXJhdGlvbik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFja2luZ0V2ZW50OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVW5pdmVyc2FsQWRJZCh1bml2ZXJzYWxBZElkSlRyZWUpIHtcblx0ICBpZighKHRoaXMgaW5zdGFuY2VvZiBVbml2ZXJzYWxBZElkKSkge1xuXHQgICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxBZElkKHVuaXZlcnNhbEFkSWRKVHJlZSk7XG5cdCAgfVxuXG5cdCAgdGhpcy5pZFJlZ2lzdHJ5ID0gdW5pdmVyc2FsQWRJZEpUcmVlLmF0dHIoJ2lkUmVnaXN0cnknKTtcblx0ICB0aGlzLmlkVmFsdWUgPSB1bml2ZXJzYWxBZElkSlRyZWUuYXR0cignaWRWYWx1ZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXZlcnNhbEFkSWQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2h0dHAnKS5odHRwO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZBU1RDbGllbnQob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVENsaWVudCkpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RDbGllbnQob3B0aW9ucyk7XG4gIH1cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIFdSQVBQRVJfTElNSVQ6IG9wdGlvbnMgJiYgb3B0aW9ucy53cmFwcGVyTGltaXQgJiYgb3B0aW9ucy53cmFwcGVyTGltaXQgPiAwID8gb3B0aW9ucy53cmFwcGVyTGltaXQgOiA1XG4gIH07XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcbn1cblxuVkFTVENsaWVudC5wcm90b3R5cGUuZ2V0VkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gZ2V0VkFTVFJlc3BvbnNlKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgdmFyIGVycm9yID0gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNhbGxiYWNrKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgdGhpcy5fZ2V0VkFTVEFkLmJpbmQodGhpcywgYWRUYWdVcmwpLFxuICAgICAgYnVpbGRWQVNUUmVzcG9uc2VcbiAgICBdLFxuICAgIGNhbGxiYWNrKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluLCBjYikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB0aGF0Ll9idWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbik7XG4gICAgICBjYihudWxsLCByZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2IoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNiKSB7XG4gICAgaWYgKCFhZFRhZ1VybCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGFkIHRhZyBVUkwnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGNhbGxiYWNrIGZ1bmN0aW9uJyk7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fZ2V0VkFTVEFkID0gZnVuY3Rpb24gKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgdmFzdFRyZWUpIHtcbiAgICB2YXIgd2F0ZXJmYWxsQWRzID0gdmFzdFRyZWUgJiYgdXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWRzKSA/IHZhc3RUcmVlLmFkcyA6IG51bGw7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgIH1cbiAgICBnZXRBZCh3YXRlcmZhbGxBZHMuc2hpZnQoKSwgW10sIHdhdGVyZmFsbEhhbmRsZXIpO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHdhdGVyZmFsbEhhbmRsZXIoZXJyb3IsIGFkQ2hhaW4pIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCBhZENoYWluKTtcbiAgICAgICAgaWYgKHdhdGVyZmFsbEFkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZ2V0QWQod2F0ZXJmYWxsQWRzLnNoaWZ0KCksW10sIHdhdGVyZmFsbEhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhZENoYWluKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGdldEFkV2F0ZXJmYWxsKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0VmFzdFhNTCA9IHRoYXQuX3JlcXVlc3RWQVNUWG1sLmJpbmQodGhhdCwgYWRUYWdVcmwpO1xuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICByZXF1ZXN0VmFzdFhNTCxcbiAgICAgIGJ1aWxkVmFzdFdhdGVyZmFsbFxuICAgIF0sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVmFzdFdhdGVyZmFsbCh4bWxTdHIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHZhc3RUcmVlO1xuICAgIHRyeSB7XG4gICAgICB2YXN0VHJlZSA9IHhtbC50b0pYT05UcmVlKHhtbFN0cik7XG4gICAgICBsb2dnZXIuZGVidWcgKFwiYnVpbHQgSlhPTlRyZWUgZnJvbSBWQVNUIHJlc3BvbnNlOlwiLCB2YXN0VHJlZSk7XG5cbiAgICAgIGlmKHV0aWxpdGllcy5pc0FycmF5KHZhc3RUcmVlLmFkKSkge1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSB2YXN0VHJlZS5hZDtcbiAgICAgIH0gZWxzZSBpZih2YXN0VHJlZS5hZCl7XG4gICAgICAgIHZhc3RUcmVlLmFkcyA9IFt2YXN0VHJlZS5hZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpLCB2YXN0VHJlZSk7XG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRWYXN0V2F0ZXJmYWxsLCBlcnJvciBwYXJzaW5nIHhtbFwiLCAxMDApLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSB7XG4gICAgdmFyIHZhc3RWZXJzaW9uID0geG1sLmF0dHIodmFzdFRyZWUsICd2ZXJzaW9uJyk7XG5cbiAgICBpZiAoIXZhc3RUcmVlLmFkKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm8gQWQgaW4gVkFTVCB0cmVlJywgMzAzKTtcbiAgICB9XG5cbiAgICAvL2lmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyKSkge1xuICAgIGlmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyICYmIHZhc3RWZXJzaW9uICE9IDQpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm90IHN1cHBvcnRlZCBWQVNUIHZlcnNpb24gXCInICsgdmFzdFZlcnNpb24gKyAnXCInLCAxMDIpO1xuICAgIH1cbiAgICB3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID0gdmFzdFZlcnNpb247XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFkKGFkVGFnVXJsLCBhZENoYWluLCBjYWxsYmFjaykge1xuICAgIGlmIChhZENoYWluLmxlbmd0aCA+PSB0aGF0LnNldHRpbmdzLldSQVBQRVJfTElNSVQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuZ2V0QWQsIHBsYXllcidzIHdyYXBwZXIgbGltaXQgcmVhY2hlZCAodGhlIGxpbWl0IGlzIFwiICsgXG4gICAgICAgIHRoYXQuc2V0dGluZ3MuV1JBUFBFUl9MSU1JVCArIFwiKVwiLCAzMDIpLCBhZENoYWluKTtcbiAgICB9XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhhZFRhZ1VybCkpIHtcbiAgICAgICAgICByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KG51bGwsIGFkVGFnVXJsKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1aWxkQWRcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIGFkKSB7XG4gICAgICBpZiAoYWQpIHtcbiAgICAgICAgYWRDaGFpbi5wdXNoKGFkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZC53cmFwcGVyKSB7XG4gICAgICAgIHJldHVybiBnZXRBZChhZC53cmFwcGVyLlZBU1RBZFRhZ1VSSSwgYWRDaGFpbiwgY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEFkKGFkSnhvblRyZWUsIGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhZCA9IG5ldyBBZChhZEp4b25UcmVlKTtcbiAgICAgIGNhbGxiYWNrKHZhbGlkYXRlQWQoYWQpLCBhZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRBZCwgZXJyb3IgcGFyc2luZyB4bWwnLCAxMDApLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUFkKGFkKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBhZC53cmFwcGVyO1xuICAgIHZhciBpbkxpbmUgPSBhZC5pbkxpbmU7XG4gICAgdmFyIGVyck1zZ1ByZWZpeCA9ICdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC52YWxpZGF0ZUFkLCAnO1xuXG4gICAgaWYgKGluTGluZSAmJiB3cmFwcGVyKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggK1wiSW5MaW5lIGFuZCBXcmFwcGVyIGJvdGggZm91bmQgb24gdGhlIHNhbWUgQWRcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWluTGluZSAmJiAhd3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJub3Igd3JhcHBlciBub3IgaW5saW5lIGVsZW1lbnRzIGZvdW5kIG9uIHRoZSBBZFwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmIChpbkxpbmUgJiYgIWluTGluZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcImNvdWxkIG5vdCBmaW5kIE1lZGlhRmlsZSB0aGF0IGlzIHN1cHBvcnRlZCBieSB0aGlzIHZpZGVvIHBsYXllclwiLCA0MDMpO1xuICAgIH1cblxuICAgIGlmICh3cmFwcGVyICYmICF3cmFwcGVyLlZBU1RBZFRhZ1VSSSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJtaXNzaW5nICdWQVNUQWRUYWdVUkknIGluIHdyYXBwZXJcIiwgMTAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVlc3RWQVNUQWQoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gICAgdGhhdC5fcmVxdWVzdFZBU1RYbWwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgeG1sU3RyKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB2YXN0VHJlZSA9IHhtbC50b0pYT05UcmVlKHhtbFN0cik7XG4gICAgICAgIGNhbGxiYWNrKHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpLCB2YXN0VHJlZS5hZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5yZXF1ZXN0VkFTVEFkLCBlcnJvciBwYXJzaW5nIHhtbFwiLCAxMDApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX3JlcXVlc3RWQVNUWG1sID0gZnVuY3Rpb24gcmVxdWVzdFZBU1RYbWwoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVGFnVXJsKSkge1xuICAgICAgYWRUYWdVcmwocmVxdWVzdEhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIuaW5mbyAoXCJyZXF1ZXN0aW5nIGFkVGFnVXJsOiBcIiArIGFkVGFnVXJsKTtcbiAgICAgIGh0dHAuZ2V0KGFkVGFnVXJsLCByZXF1ZXN0SGFuZGxlciwge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhbGxiYWNrKGUpO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiByZXF1ZXN0SGFuZGxlcihlcnJvciwgcmVzcG9uc2UsIHN0YXR1cykge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdmFyIGVyck1zZyA9IHV0aWxpdGllcy5pc0RlZmluZWQoc3RhdHVzKSA/XG4gICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEhUVFAgcmVxdWVzdCBlcnJvciB3aXRoIHN0YXR1cyAnXCIgKyBzdGF0dXMgKyBcIidcIiA6XG4gICAgICAgIFwib24gVkFTVENsaWVudC5yZXF1ZXN0VmFzdFhNTCwgRXJyb3IgZ2V0dGluZyB0aGUgdGhlIFZBU1QgWE1MIHdpdGggaGUgcGFzc2VkIGFkVGFnWE1MIGZuXCI7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcihlcnJNc2csIDMwMSksIG51bGwpO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX2J1aWxkVkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4pIHtcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFZBU1RSZXNwb25zZSgpO1xuICBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHNDaGFpbik7XG4gIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpO1xuXG4gIHJldHVybiByZXNwb25zZTtcblxuICAvLyoqKiBMb2NhbCBmdW5jdGlvbiAqKioqXG4gIGZ1bmN0aW9uIGFkZEFkc1RvUmVzcG9uc2UocmVzcG9uc2UsIGFkcykge1xuICAgIGFkcy5mb3JFYWNoKGZ1bmN0aW9uIChhZCkge1xuICAgICAgcmVzcG9uc2UuYWRkQWQoYWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIHZhciBwcm9ncmVzc0V2ZW50cyA9IHJlc3BvbnNlLnRyYWNraW5nRXZlbnRzLnByb2dyZXNzO1xuXG4gICAgaWYgKCFyZXNwb25zZS5oYXNMaW5lYXIoKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBSZWNlaXZlZCBhbiBBZCB0eXBlIHRoYXQgaXMgbm90IHN1cHBvcnRlZFwiLCAyMDApO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIE1pc3NpbmcgZHVyYXRpb24gZmllbGQgaW4gVkFTVCByZXNwb25zZVwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmIChwcm9ncmVzc0V2ZW50cykge1xuICAgICAgcHJvZ3Jlc3NFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkge1xuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc051bWJlcihwcm9ncmVzc0V2ZW50Lm9mZnNldCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIG1pc3Npbmcgb3Igd3Jvbmcgb2Zmc2V0IGF0dHJpYnV0ZSBvbiBwcm9ncmVzcyB0cmFja2luZyBldmVudFwiLCAxMDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBhZENoYWluKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzQXJyYXkoYWRDaGFpbikgfHwgYWRDaGFpbi5sZW5ndGggPT09IDApIHsgLy9UaGVyZSBpcyBub3RoaW5nIHRvIHRyYWNrXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVycm9yVVJMTWFjcm9zID0gW107XG4gIGFkQ2hhaW4uZm9yRWFjaChhZGRFcnJvclVybE1hY3Jvcyk7XG4gIHZhc3RVdGlsLnRyYWNrKGVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvci5jb2RlIHx8IDkwMH0pOyAgLy85MDAgPD09IFVuZGVmaW5lZCBlcnJvclxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICAqKiovXG4gIGZ1bmN0aW9uIGFkZEVycm9yVXJsTWFjcm9zKGFkKSB7XG4gICAgLyppZiAoYWQud3JhcHBlciAmJiBhZC53cmFwcGVyLmVycm9yICYmIHR5cGVvZihhZC53cmFwcGVyLmVycm9yKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC53cmFwcGVyLmVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoYWQuaW5MaW5lICYmIGFkLmluTGluZS5lcnJvciAmJiB0eXBlb2YoYWQuaW5MaW5lLmVycm9yKSA9PT0gJ3N0cmluZycpIHtcbiAgICBcdGVycm9yVVJMTWFjcm9zLnB1c2goYWQuaW5MaW5lLmVycm9yKTtcbiAgICB9Ki9cblx0ICBcbiAgICAgIGlmIChhZC53cmFwcGVyICYmIGFkLndyYXBwZXIuZXJyb3JzICYmIEFycmF5LmlzQXJyYXkoYWQud3JhcHBlci5lcnJvcnMpKSB7XG4gICAgXHQgIGVycm9yVVJMTWFjcm9zID0gZXJyb3JVUkxNYWNyb3MuY29uY2F0KGFkLndyYXBwZXIuZXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFkLmluTGluZSAmJiBhZC5pbkxpbmUuZXJyb3JzICYmIEFycmF5LmlzQXJyYXkoYWQuaW5MaW5lLmVycm9ycykpIHtcbiAgICBcdCAgZXJyb3JVUkxNYWNyb3MgPSBlcnJvclVSTE1hY3Jvcy5jb25jYXQoYWQuaW5MaW5lLmVycm9ycyk7XG4gICAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVENsaWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVkFTVEVycm9yKG1lc3NhZ2UsIGNvZGUpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1ZBU1QgRXJyb3I6ICcgKyAobWVzc2FnZSB8fCAnJyk7XG4gIGlmIChjb2RlKSB7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgfVxufVxuXG5WQVNURXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5WQVNURXJyb3IucHJvdG90eXBlLm5hbWUgPSBcIlZBU1QgRXJyb3JcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNURXJyb3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIElubmVyIGhlbHBlciBjbGFzcyB0aGF0IGRlYWxzIHdpdGggdGhlIGxvZ2ljIG9mIHRoZSBpbmRpdmlkdWFsIHN0ZXBzIG5lZWRlZCB0byBzZXR1cCBhbiBhZCBpbiB0aGUgcGxheWVyLlxuICpcbiAqIEBwYXJhbSBwbGF5ZXIge29iamVjdH0gaW5zdGFuY2Ugb2YgdGhlIHBsYXllciB0aGF0IHdpbGwgcGxheSB0aGUgYWQuIEl0IGFzc3VtZXMgdGhhdCB0aGUgdmlkZW9qcy1jb250cmliLWFkcyBwbHVnaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgd2hlbiB5b3UgdXNlIGl0cyB1dGlsaXR5IGZ1bmN0aW9ucy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xudmFyIFZBU1RUcmFja2VyID0gcmVxdWlyZSgnLi9WQVNUVHJhY2tlcicpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RJbnRlZ3JhdG9yKSkge1xuICAgIHJldHVybiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcbiAgfVxuXG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB0aGlzLmVuYWJsZUZ1bGxzY3JlZW5DbGlja0lGcmFtZSA9IGZhbHNlO1xufVxuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUucGxheUFkID0gZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHV0aWxpdGllcy5ub29wO1xuXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignT24gVkFTVEludGVncmF0b3IsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVFJlc3BvbnNlJykpO1xuICB9XG5cbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgbmV4dChudWxsLCB2YXN0UmVzcG9uc2UpO1xuICAgIH0sXG4gICAgdGhpcy5fc2VsZWN0QWRTb3VyY2UuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9jcmVhdGVWQVNUVHJhY2tlci5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaC5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaERpdkJsb2NrZXIuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRTa2lwQnV0dG9uLmJpbmQodGhpcyksXG4gICAgdGhpcy5fc2V0dXBFdmVudHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9wbGF5U2VsZWN0ZWRBZC5iaW5kKHRoaXMpXG4gIF0sIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UpIHtcbiAgICBpZiAoZXJyb3IgJiYgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgICAgIFx0d2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkRXJyb3InLCBhZFZvbHVtZTogdGhhdC5wbGF5ZXIudm9sdW1lKCl9KTtcbiAgICAgICAgfVxuICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xuICB9KTtcblxuICB0aGlzLl9hZFVuaXQgPSB7XG4gICAgX3NyYzogbnVsbCxcbiAgICB0eXBlOiAnVkFTVCcsXG4gICAgcGF1c2VBZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5wbGF5ZXIucGF1c2UodHJ1ZSk7XG4gICAgfSxcblxuICAgIHJlc3VtZUFkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LnBsYXllci5wbGF5KHRydWUpO1xuICAgIH0sXG5cbiAgICBpc1BhdXNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoYXQucGxheWVyLnBhdXNlZCh0cnVlKTtcbiAgICB9LFxuXG4gICAgZ2V0U3JjOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3JjO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdGhpcy5fYWRVbml0O1xufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9zZWxlY3RBZFNvdXJjZSA9IGZ1bmN0aW9uIHNlbGVjdEFkU291cmNlKHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgc291cmNlO1xuXG4gIHZhciBwbGF5ZXJXaWR0aCA9IGRvbS5nZXREaW1lbnNpb24odGhpcy5wbGF5ZXIuZWwoKSkud2lkdGg7XG4gIHJlc3BvbnNlLm1lZGlhRmlsZXMuc29ydChmdW5jdGlvbiBjb21wYXJlVG8oYSwgYikge1xuICAgIHZhciBkZWx0YUEgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGEud2lkdGgpO1xuICAgIHZhciBkZWx0YUIgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGIud2lkdGgpO1xuICAgIHJldHVybiBkZWx0YUEgLSBkZWx0YUI7XG4gIH0pO1xuXG4gIHNvdXJjZSA9IHRoaXMucGxheWVyLnNlbGVjdFNvdXJjZShyZXNwb25zZS5tZWRpYUZpbGVzKS5zb3VyY2U7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB0aGlzLnBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UubWVzc2FnZScsIGRhdGE6IHttZXNzYWdlOiAnUGxheWluZyAnICsgc291cmNlLnNyYyArICcgKHR5cGUgPSAnICsgc291cmNlLnR5cGUgKyAnKSd9fSk7XG4gIH1cbiAgXG4gIGlmIChzb3VyY2UpIHtcbiAgICBsb2dnZXIuaW5mbyAoXCJzZWxlY3RlZCBzb3VyY2U6IFwiLCBzb3VyY2UpO1xuICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgIHRoaXMuX2FkVW5pdC5fc3JjID0gc291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgc291cmNlLCByZXNwb25zZSk7XG4gIH1cblxuICAvLyBjb2RlIDQwMyA8PT0gQ291bGRuJ3QgZmluZCBNZWRpYUZpbGUgdGhhdCBpcyBzdXBwb3J0ZWQgYnkgdGhpcyB2aWRlbyBwbGF5ZXJcbiAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIkNvdWxkIG5vdCBmaW5kIEFkIG1lZGlhZmlsZSBzdXBwb3J0ZWQgYnkgdGhpcyBwbGF5ZXJcIiwgNDAzKSwgcmVzcG9uc2UpO1xufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWQVNUVHJhY2tlciA9IGZ1bmN0aW9uIGNyZWF0ZVZBU1RUcmFja2VyKGFkTWVkaWFGaWxlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICBjYWxsYmFjayhudWxsLCBhZE1lZGlhRmlsZSwgbmV3IFZBU1RUcmFja2VyKGFkTWVkaWFGaWxlLnNyYywgcmVzcG9uc2UpLCByZXNwb25zZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWxsYmFjayhlLCByZXNwb25zZSk7XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiBzZXR1cEV2ZW50cyhhZE1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBwcmV2aW91c2x5TXV0ZWQ7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCB0cmFja0ltcHJlc3Npb25zKTtcbiAgcGxheWVyLm9uKCdwYXVzZScsIHRyYWNrUGF1c2UpO1xuICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcbiAgcGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XG5cbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCB1bmJpbmRFdmVudHMpO1xuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRTa2lwJ10sIGZ1bmN0aW9uKGV2dCl7XG4gICAgaWYoZXZ0LnR5cGUgPT09ICd2YXN0LmFkRW5kJyl7XG4gICAgICB0cmFja2VyLnRyYWNrQ29tcGxldGUoKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHR2YXIgdHlwZSA9IGV2dC50eXBlID09PSAndmFzdC5hZEVuZCcgPyAnQWRWaWRlb0NvbXBsZXRlJyA6ICdBZFN0b3BwZWQnO1xuICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogdHlwZSwgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgfSk7XG4gIFxuICBwbGF5ZXIub25lKCdhZFN0b3AnLCBmdW5jdGlvbigpIHtcblx0IHBsYXllci50cmlnZ2VyKCd2YXN0LmFkc0NhbmNlbCcpOyBcbiAgfSk7XG5cbiAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGFkTWVkaWFGaWxlLCByZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XG4gICAgcGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSk7XG4gICAgcGxheWVyLm9mZigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XG4gICAgcGxheWVyLm9mZigncGF1c2UnLCB0cmFja1BhdXNlKTtcbiAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XG4gICAgcGxheWVyLm9mZigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKCkge1xuICAgIGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkpIHtcbiAgICAgIHRyYWNrZXIudHJhY2tGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYWNrZXIudHJhY2tFeGl0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUGF1c2UoKSB7XG4gICAgLy9OT1RFOiB3aGVuZXZlciBhIHZpZGVvIGVuZHMgdGhlIHZpZGVvIEVsZW1lbnQgdHJpZ2dlcnMgYSAncGF1c2UnIGV2ZW50IGJlZm9yZSB0aGUgJ2VuZGVkJyBldmVudC5cbiAgICAvLyAgICAgIFdlIHNob3VsZCBub3QgdHJhY2sgdGhpcyBwYXVzZSBldmVudCBiZWNhdXNlIGl0IG1ha2VzIHRoZSBWQVNUIHRyYWNraW5nIGNvbmZ1c2luZyBhZ2FpbiB3ZSB1c2UgYVxuICAgIC8vICAgICAgVGhyZXNob2xkIG9mIDIgc2Vjb25kcyB0byBwcmV2ZW50IGZhbHNlIHBvc2l0aXZlcyBvbiBJT1MuXG5cdFx0aWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MuYnJlYWtEdXJhdGlvbikge1xuXHRcdFx0aWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MucmVhbFZpZGVvRHVyYXRpb24pIHtcblx0XHRcdCAgICBpZiAoTWF0aC5hYnMod2luZG93Ll9tb2xTZXR0aW5ncy5yZWFsVmlkZW9EdXJhdGlvbiAtIHBsYXllci5jdXJyZW50VGltZSgpKSA8IDIpIHtcblx0XHRcdCAgICAgICAgcmV0dXJuO1xuXHRcdFx0ICAgIH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoTWF0aC5hYnMocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPCAyKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRQYXVzZWQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgfVxuICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xuICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgdHJ1ZSk7XG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheScsICd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmKGV2dC50eXBlID09PSAncGxheScpe1xuXHQgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGxheWluZycsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICAgIH1cbiAgICAgICAgdHJhY2tlci50cmFja1Jlc3VtZSgpO1xuICAgICAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3MoKSB7XG4gICAgdmFyIGN1cnJlbnRUaW1lSW5NcyA9IHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMDtcbiAgICB0cmFja2VyLnRyYWNrUHJvZ3Jlc3MoY3VycmVudFRpbWVJbk1zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrSW1wcmVzc2lvbnMoKSB7XG4gICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZEltcHJlc3Npb24nLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgfVxuICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrVm9sdW1lQ2hhbmdlKCkge1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVm9sdW1lQ2hhbmdlJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgICB2YXIgbXV0ZWQgPSBwbGF5ZXIubXV0ZWQoKTtcbiAgICBpZiAobXV0ZWQpIHtcbiAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XG4gICAgfSBlbHNlIGlmIChwcmV2aW91c2x5TXV0ZWQpIHtcbiAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcbiAgICB9XG4gICAgcHJldmlvdXNseU11dGVkID0gbXV0ZWQ7XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIGFkZFNraXBCdXR0b24oc291cmNlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHNraXBPZmZzZXRJblNlYztcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIocmVzcG9uc2Uuc2tpcG9mZnNldCkpIHtcbiAgICBza2lwT2Zmc2V0SW5TZWMgPSByZXNwb25zZS5za2lwb2Zmc2V0IC8gMTAwMDtcbiAgICBhZGRTa2lwQnV0dG9uVG9QbGF5ZXIodGhpcy5wbGF5ZXIsIHNraXBPZmZzZXRJblNlYyk7XG4gIH1cbiAgY2FsbGJhY2sobnVsbCwgc291cmNlLCB0cmFja2VyLCByZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gIGZ1bmN0aW9uIGFkZFNraXBCdXR0b25Ub1BsYXllcihwbGF5ZXIsIHNraXBPZmZzZXQpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKTtcbiAgICB2YXIgdXBkYXRlU2tpcEJ1dHRvbiA9IHVwZGF0ZVNraXBCdXR0b25TdGF0ZS5iaW5kKHRoYXQsIHNraXBCdXR0b24sIHNraXBPZmZzZXQsIHBsYXllcik7XG5cbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcbiAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB1cGRhdGVTa2lwQnV0dG9uKTtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU2tpcEJ1dHRvbik7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xuICAgICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xuICAgICAgZG9tLnJlbW92ZShza2lwQnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcikge1xuICAgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcbiAgICBza2lwQnV0dG9uLmlkID0gJ2FkU2tpcEJ1dHRvbic7XG5cbiAgICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRTa2lwcGVkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgdHJhY2tlci50cmFja1NraXAoKTtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTa2lwJyk7XG4gICAgICB9XG4gICAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcblxuICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cbiAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBza2lwQnV0dG9uO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKHNraXBCdXR0b24sIHNraXBPZmZzZXQsIHBsYXllcikge1xuICAgIHZhciB0aW1lTGVmdCA9IE1hdGguY2VpbChza2lwT2Zmc2V0IC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpO1xuICAgIGlmICh0aW1lTGVmdCA+IDApIHtcbiAgICAgICAgLy9za2lwQnV0dG9uLmlubmVySFRNTCA9IFwiU2tpcCBpbiBcIiArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHRpbWVMZWZ0LCAyKSArIFwiLi4uXCI7XG4gICAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwidmFzdC1za2lwLWJ1dHRvbi10ZXh0XCI+JyArIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcFRleHQucmVwbGFjZSgnJSVUSU1FJSUnLCB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyh0aW1lTGVmdCwgMikpICsgJzwvcD4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpO1xuICAgICAgICAvL3NraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGFkXCI7XG4gICAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwQnV0dG9uVGV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGlmcmFtZUJhY2tCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZUJhY2tCdXR0b24nKTtcbiAgICBpZiAoIWlmcmFtZUJhY2tCdXR0b24pIHtcbiAgICAgICAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoID0gZnVuY3Rpb24gYWRkQ2xpY2tUaHJvdWdoKG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBlbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUgPSB0aGlzLmVuYWJsZUZ1bGxzY3JlZW5DbGlja0lGcmFtZTtcbiAgXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hCbG9ja2VyKHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpO1xuICB2YXIgdXBkYXRlQmxvY2tlciA9IHVwZGF0ZUJsb2NrZXJVUkwuYmluZCh0aGlzLCBibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKTtcblxuICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG4gIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUJsb2NrZXIpO1xuICBcbiAgaWYgKGVuYWJsZUZ1bGxzY3JlZW5DbGlja0lGcmFtZSkge1xuXHQgIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZURpc3BsYXlTdHlsZSk7XG4gIH1cblxuICByZXR1cm4gY2FsbGJhY2sobnVsbCwgbWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNsaWNrVGhyb3VnaEJsb2NrZXIocGxheWVyLCB0cmFja2VyLCByZXNwb25zZSkge1xuXHRcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLmRpc2FibGVDbGlja1RocnUpIHtcblx0XHQgICAgdmFyIGJsb2NrZXJEaXYgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHQgICAgZG9tLmFkZENsYXNzKGJsb2NrZXJEaXYsICd2YXN0LWJsb2NrZXInKTtcblx0XHRcdHJldHVybiBibG9ja2VyRGl2O1xuXHRcdH1cbiAgICB2YXIgYmxvY2tlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICB2YXIgY2xpY2tUaHJvdWdoTWFjcm8gPSByZXNwb25zZS5jbGlja1Rocm91Z2g7XG5cbiAgICBkb20uYWRkQ2xhc3MoYmxvY2tlciwgJ3Zhc3QtYmxvY2tlcicpO1xuICAgIGJsb2NrZXIuaHJlZiA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpO1xuXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhjbGlja1Rocm91Z2hNYWNybykpIHtcbiAgICAgIGJsb2NrZXIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICB9XG5cbiAgICB2YXIgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAocGxheWVyLnBhdXNlZCgpKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuXG4gICAgICAgICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgcGxheWVyJ3Mgbm9ybWFsIHBhdXNlIG1lY2hhbmlzbVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgdHJhY2tlci50cmFja0NsaWNrKCk7XG5cbiAgICAgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICAgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZENsaWNrVGhydScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0lEZXZpY2UoKSkge1xuICAgICAgICAgICAgICB3aW5kb3cub3BlbihnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKSwgJ19ibGFuaycpO1xuICAgICAgICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICB9O1xuICBcbiAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XG4gICAgICAgIGJsb2NrZXIub250b3VjaGVuZCA9IGNsaWNrSGFuZGxlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJsb2NrZXIub25jbGljayA9IGNsaWNrSGFuZGxlcjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHBsYXllci5pc0Z1bGxzY3JlZW4oKSAmJiBlbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUpIHtcbiAgICBcdGJsb2NrZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICByZXR1cm4gYmxvY2tlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXJVUkwoYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcikge1xuICAgIGJsb2NrZXIuaHJlZiA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHJlc3BvbnNlLmNsaWNrVGhyb3VnaCwgcGxheWVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpIHtcbiAgICB2YXIgdmFyaWFibGVzID0ge1xuICAgICAgQVNTRVRVUkk6IG1lZGlhRmlsZS5zcmMsXG4gICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMClcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6ICcjJztcbiAgfVxuICBcbiAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheVN0eWxlKCkge1xuXHQgIGJsb2NrZXIuc3R5bGUuZGlzcGxheSA9IHBsYXllci5pc0Z1bGxzY3JlZW4oKSA/ICdub25lJyA6ICdibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVCbG9ja2VyKCkge1xuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcblx0cGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZURpc3BsYXlTdHlsZSk7XG4gICAgZG9tLnJlbW92ZShibG9ja2VyKTtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2hEaXZCbG9ja2VyID0gZnVuY3Rpb24gYWRkQ2xpY2tUaHJvdWdoKG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG5cdGlmICghdGhpcy5lbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUpIHtcblx0XHRyZXR1cm4gY2FsbGJhY2sobnVsbCwgbWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSk7XG5cdH1cblx0dmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXHQgIHZhciBibG9ja2VyID0gY3JlYXRlQ2xpY2tUaHJvdWdoRGl2KHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpO1xuXHQgIHZhciB1cGRhdGVCbG9ja2VyID0gdXBkYXRlQmxvY2tlclVSTC5iaW5kKHRoaXMsIGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpO1xuXHQgIHZhciBibG9ja2VyVXJsO1xuXHQgIHZhciBpRnJhbWU7XG5cdCAgdmFyIGlGcmFtZUJhY2tCdXR0b247XG5cblx0ICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG5cdCAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XG5cdCAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVCbG9ja2VyKTtcblxuXHQgIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZURpc3BsYXlTdHlsZSk7XG5cblx0ICByZXR1cm4gY2FsbGJhY2sobnVsbCwgbWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSk7XG5cdFxuXHQgIGZ1bmN0aW9uIGNyZWF0ZUNsaWNrVGhyb3VnaERpdihwbGF5ZXIsIHRyYWNrZXIpIHtcblx0ICAgIHZhciBibG9ja2VyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0ICAgIGRvbS5hZGRDbGFzcyhibG9ja2VyLCAndmFzdC1ibG9ja2VyJyk7XG5cblx0XHRpZiAoIXdpbmRvdy5fbW9sU2V0dGluZ3MuZGlzYWJsZUNsaWNrVGhydSkge1xuXHRcdCAgICBibG9ja2VyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuXHRcdCAgICAgIGlmIChwbGF5ZXIucGF1c2VkKCkpIHtcblx0XHQgICAgICAgIHBsYXllci5wbGF5KCk7XG5cdFxuXHRcdCAgICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIHBsYXllcidzIG5vcm1hbCBwYXVzZSBtZWNoYW5pc21cblx0XHQgICAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0ICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdFx0ICAgICAgfVxuXHRcblx0XHQgICAgICBwbGF5ZXIucGF1c2UoKTtcblx0XHQgICAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcblx0XG5cdFx0ICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdFx0ICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRDbGlja1RocnUnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgIFxuXHRcdCAgICAgIC8vIGNyZWF0ZSBJRnJhbWUgd2l0aCBiYWNrIGJ1dHRvblxuXHRcdCAgICAgIGlGcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXHRcdFx0ICBkb20uYWRkQ2xhc3MoaUZyYW1lLCAndmFzdC1ibG9ja2VyJyk7XG5cdFx0XHQgIGlGcmFtZS5zcmMgPSBibG9ja2VyVXJsO1xuXHRcdFx0ICBibG9ja2VyLmFwcGVuZENoaWxkKGlGcmFtZSk7XG5cdFx0XHQgIFxuXHRcdFx0ICBpRnJhbWVCYWNrQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHQgIGRvbS5hZGRDbGFzcyhpRnJhbWVCYWNrQnV0dG9uLCBcInZhc3QtYmFjay1idXR0b25cIik7XG5cdFx0ICAgICAgZG9tLmFkZENsYXNzKGlGcmFtZUJhY2tCdXR0b24sICdlbmFibGVkJyk7XG5cdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24uaW5uZXJIVE1MID0gXCJCYWNrXCI7XG5cdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24uaWQgPSAnaWZyYW1lQmFja0J1dHRvbic7XG5cdFx0XHQgIGJsb2NrZXIuYXBwZW5kQ2hpbGQoaUZyYW1lQmFja0J1dHRvbik7XG5cdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ICBibG9ja2VyLnJlbW92ZUNoaWxkKGlGcmFtZSk7XG5cdFx0XHRcdCAgaUZyYW1lID0gbnVsbDtcblx0XHRcdFx0ICBibG9ja2VyLnJlbW92ZUNoaWxkKGlGcmFtZUJhY2tCdXR0b24pO1xuXHRcdFx0XHQgIGlGcmFtZUJhY2tCdXR0b24gPSBudWxsO1xuXHRcblx0XHRcdFx0ICAvLyBzaG93IGNvbnRyb2xzXG5cdFx0XHRcdCAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuXHRcdFx0XHQgIGlmIChza2lwQnV0dG9uKSB7XG5cdFx0XHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcblx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgcGxheWVyLmNvbnRyb2xzKHRydWUpO1xuXHRcdFx0XHQgIFxuXHRcdFx0XHQgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0ICB9XG5cdFx0XHQgIH0pO1xuXHRcdFx0ICBcblx0XHRcdCAgLy8gaGlkZSBjb250cm9sc1xuXHRcdFx0ICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHRcdFx0ICB9LCAxKTtcblx0XHRcdCAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuXHRcdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG5cdFx0XHQgIH1cblx0XHRcdCAgcGxheWVyLmNvbnRyb2xzKGZhbHNlKTtcblx0XG5cdFx0ICAgIH07XG5cdFx0fVxuXG5cdCAgICBpZiAoIXBsYXllci5pc0Z1bGxzY3JlZW4oKSkge1xuXHQgICAgXHRibG9ja2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBibG9ja2VyO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXJVUkwoYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcikge1xuXHRcdCAgYmxvY2tlclVybCA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHJlc3BvbnNlLmNsaWNrVGhyb3VnaCwgcGxheWVyKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKSB7XG5cdCAgICB2YXIgdmFyaWFibGVzID0ge1xuXHQgICAgICBBU1NFVFVSSTogbWVkaWFGaWxlLnNyYyxcblx0ICAgICAgQ09OVEVOVFBMQVlIRUFEOiB2YXN0VXRpbC5mb3JtYXRQcm9ncmVzcyhwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDApXG5cdCAgICB9O1xuXG5cdCAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogJyMnO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlTdHlsZSgpIHtcblx0XHQgIGJsb2NrZXIuc3R5bGUuZGlzcGxheSA9IHBsYXllci5pc0Z1bGxzY3JlZW4oKSA/ICdibG9jaycgOiAnbm9uZSc7XG5cdFx0ICBpZiAoIXBsYXllci5pc0Z1bGxzY3JlZW4oKSAmJiBpRnJhbWUpIHtcblx0XHRcdCAgYmxvY2tlci5yZW1vdmVDaGlsZChpRnJhbWUpO1xuXHRcdFx0ICBpRnJhbWUgPSBudWxsO1xuXHRcdFx0ICBibG9ja2VyLnJlbW92ZUNoaWxkKGlGcmFtZUJhY2tCdXR0b24pO1xuXHRcdFx0ICBpRnJhbWVCYWNrQnV0dG9uID0gbnVsbDtcblx0XHRcdCAgXG5cdFx0XHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgdHJ1ZSk7XG5cdFx0XHQgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZFNraXBCdXR0b24nKTtcblx0XHRcdCAgaWYgKHNraXBCdXR0b24pIHtcblx0XHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxuXHRcdFx0ICB9XG5cdFx0XHQgIHBsYXllci5jb250cm9scyh0cnVlKTtcblx0XHQgIH1cblx0ICB9XG5cblx0ICBmdW5jdGlvbiByZW1vdmVCbG9ja2VyKCkge1xuXHQgICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuXHRcdHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVEaXNwbGF5U3R5bGUpO1xuXHQgICAgZG9tLnJlbW92ZShibG9ja2VyKTtcblx0ICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlTZWxlY3RlZEFkID0gZnVuY3Rpb24gcGxheVNlbGVjdGVkQWQoc291cmNlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gIC8vd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBudWxsO1xuXG4gIHBsYXllci5wcmVsb2FkKFwiYXV0b1wiKTsgLy93aXRob3V0IHByZWxvYWQ9YXV0byB0aGUgZHVyYXRpb25jaGFuZ2UgZXZlbnQgaXMgbmV2ZXIgZmlyZWRcbiAgcGxheWVyLnNyYyhzb3VyY2UpO1xuXG4gIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkPiB3YWl0aW5nIGZvciBkdXJhdGlvbmNoYW5nZSB0byBwbGF5IHRoZSBhZC4uLlwiKTtcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydkdXJhdGlvbmNoYW5nZScsICdlcnJvcicsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dC50eXBlID09PSAnZHVyYXRpb25jaGFuZ2UnKSB7XG4gICAgICBsb2dnZXIuZGVidWcgKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZD4gZ290IGR1cmF0aW9uY2hhbmdlOyBjYWxsaW5nIHBsYXlBZCgpXCIpO1xuICAgICAgcGxheUFkKCk7XG4gICAgfSBlbHNlIGlmKGV2dC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVEludGVncmF0b3IsIFBsYXllciBpcyB1bmFibGUgdG8gcGxheSB0aGUgQWRcIiwgNDAwKSwgcmVzcG9uc2UpO1xuICAgIH1cbiAgICAvL05PVEU6IElmIHRoZSBhZHMgZ2V0IGNhbmNlbGVkIHdlIGRvIG5vdGhpbmcvXG4gIH0pO1xuXG4gIC8qKioqIGxvY2FsIGZ1bmN0aW9ucyAqKioqKiovXG4gIGZ1bmN0aW9uIHBsYXlBZCgpIHtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYoZXZ0LnR5cGUgPT09ICd2YXN0LmFkc0NhbmNlbCcpe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8qQ29weXJpZ2h0IChjKSAyMDExLTIwMTYgTW9hdCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuKi9cbiAgICAgIC8qZnVuY3Rpb24gaW5pdE1vYXRUcmFja2luZyhhLGMsZCxoLGspe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYj1bXTtjPXthZERhdGE6e2lkczpjLGR1cmF0aW9uOmQsdXJsOmt9LGRpc3BhdGNoRXZlbnQ6ZnVuY3Rpb24oYSl7dGhpcy5zZW5kRXZlbnQ/KGImJihiLnB1c2goYSksYT1iLGI9ITEpLHRoaXMuc2VuZEV2ZW50KGEpKTpiLnB1c2goYSl9fTtkPVwiX21vYXRBcGlcIitNYXRoLmZsb29yKDFFOCpNYXRoLnJhbmRvbSgpKTt2YXIgZSxnO3RyeXtlPWEub3duZXJEb2N1bWVudCxnPWUuZGVmYXVsdFZpZXd8fGUucGFyZW50V2luZG93fWNhdGNoKGwpe2U9ZG9jdW1lbnQsZz13aW5kb3d9Z1tkXT1jO2YudHlwZT1cInRleHQvamF2YXNjcmlwdFwiO2EmJmEuaW5zZXJ0QmVmb3JlKGYsYS5jaGlsZE5vZGVzWzBdfHxudWxsKTtmLnNyYz1cImh0dHBzOi8vei5tb2F0YWRzLmNvbS9cIitoK1wiL21vYXR2aWRlby5qcyNcIitkO3JldHVybiBjfTtcbiAgICAgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gbnVsbDtcbiAgICAgIGlmIChyZXNwb25zZS5hZHMgJiYgcmVzcG9uc2UuYWRzLmxlbmd0aCA+IDAgJiYgcmVzcG9uc2UuYWRzWzBdLmluTGluZSAmJiByZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQpIHtcbiAgICBcdCAgdmFyIGlkcyA9IHtsZXZlbDE6IHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5hZHZpZCxcbiAgICBcdFx0XHQgICAgIGxldmVsMjogcmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmNwZ2lkLFxuICAgIFx0XHRcdCAgICAgbGV2ZWwzOiByZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3BpZCxcbiAgICBcdFx0XHQgICAgIGxldmVsNDogcmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmNyaWR9O1xuICAgIFx0ICBpZiAocmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LnNpdGVfaWQpIHtcbiAgICBcdFx0ICBpZHMuc2xpY2VyMSA9IHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5zaXRlX2lkO1xuICAgIFx0ICB9XG4gICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gaW5pdE1vYXRUcmFja2luZyhwbGF5ZXIuZWxfLCBpZHMsIHBsYXllci5kdXJhdGlvbigpLCByZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQucGFydG5lcmNvZGUsIHBsYXllci5jdXJyZW50U291cmNlKCkuc3JjKTtcbiAgICBcdCAgLy93aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSA9IGluaXRNb2F0VHJhY2tpbmcocGxheWVyLmVsXywgaWRzLCBwbGF5ZXIuZHVyYXRpb24oKSwgJ25pbmVtZWRpYXZwYWlkNzg5NjExNjQnLCBwbGF5ZXIuY3VycmVudFNvdXJjZSgpLnNyYyk7XG4gICAgICB9XG4gICAgICBpZiAod2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nKSB7XG4gICAgXHQgIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZy5pbml0KHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHkuY29udGV4dElkLCBcbiAgICBcdFx0XHQgIHBsYXllci5kdXJhdGlvbigpLCBwbGF5ZXIuZWxfLm9mZnNldFdpZHRoLCBwbGF5ZXIuZWxfLm9mZnNldEhlaWdodCk7XG4gICAgICB9Ki9cbiAgICAgIFxuICAgICAgbG9nZ2VyLmRlYnVnIChcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQvcGxheUFkPiBnb3QgcGxheWluZyBldmVudDsgdHJpZ2dlcmluZyB2YXN0LmFkU3RhcnQuLi5cIik7XG5cbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcblxuICAgICAgaWYgKHV0aWxpdGllcy5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgLy8gVklETEEtMjMzNiAoc2ltdWxhdGUgdXNlciBhY3Rpdml0eSB0byBtYWtlIHN1cmUgY29udHJvbC1iYXIgaXMgdmlzaWJsZSBvbiBtb2JpbGUgZGV2aWNlcylcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBcdFx0cGxheWVyLnVzZXJBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgXHR9LCBpICogMjAwMCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVmlkZW9TdGFydCcsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICAgIH1cblxuICAgICAgcGxheWVyLm9uKCdlbmRlZCcsIHByb2NlZWQpO1xuICAgICAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHByb2NlZWQpO1xuICAgICAgcGxheWVyLm9uKCd2YXN0LmFkU2tpcCcsIHByb2NlZWQpO1xuXG4gICAgICBmdW5jdGlvbiBwcm9jZWVkKGV2dCkge1xuXG4gICAgICAgICAgaWYoZXZ0LnR5cGUgPT09ICdlbmRlZCcpIHtcbiAgICAgICAgICAgICAgLy8gSWdub3JlIGVuZGVkIGV2ZW50IGlmIHRoZSBBZCB0aW1lIHdhcyBub3QgJ25lYXInIHRoZSBlbmRcbiAgICAgICAgICAgICAgLy8gYXZvaWRzIGlzc3VlcyB3aGVyZSBJT1MgY29udHJvbHMgY291bGQgc2tpcCB0aGUgQWRcbiAgICAgICAgICAgIFx0aWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MuYnJlYWtEdXJhdGlvbikge1xuICAgICAgICAgICAgXHRcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnJlYWxWaWRlb0R1cmF0aW9uKSB7XG4gICAgICAgICAgICBcdFx0ICAgIGlmICgod2luZG93Ll9tb2xTZXR0aW5ncy5yZWFsVmlkZW9EdXJhdGlvbiAtIHBsYXllci5jdXJyZW50VGltZSgpKSA+IDMpIHtcbiAgICAgICAgICAgIFx0XHQgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFx0XHQgICAgfVxuICAgICAgICAgICAgXHRcdH1cbiAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgXHRlbHNlIGlmICgocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPiAzKSB7XG4gICAgXHRcdFx0XHRyZXR1cm47XG4gICAgXHRcdFx0fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8qaWYoZXZ0LnR5cGUgPT09ICdlbmRlZCcgJiYgKHBsYXllci5kdXJhdGlvbigpIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpID4gMyApIHtcbiAgICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxuICAgICAgICAgIC8vIGF2b2lkcyBpc3N1ZXMgd2hlcmUgSU9TIGNvbnRyb2xzIGNvdWxkIHNraXAgdGhlIEFkXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9Ki9cblxuICAgICAgICBwbGF5ZXIub2ZmKCdlbmRlZCcsIHByb2NlZWQpO1xuICAgICAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIHByb2NlZWQpO1xuICAgICAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkU2tpcCcsIHByb2NlZWQpO1xuXG4gICAgICAgIC8vTk9URTogaWYgdGhlIGFkcyBnZXQgY2FuY2VsIHdlIGRvIG5vdGhpbmcgYXBhcnQgcmVtb3ZpbmcgdGhlIGxpc3RuZXJzXG4gICAgICAgIGlmKGV2dC50eXBlID09PSAnZW5kZWQnIHx8IGV2dC50eXBlID09PSAndmFzdC5hZFNraXAnKXtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkL3BsYXlBZD4gY2FsbGluZyBwbGF5ZXIucGxheSgpLi4uXCIpO1xuXG4gICAgcGxheWVyLnBsYXkoKTtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gdHJhY2tFcnJvcihlcnJvciwgcmVzcG9uc2UpIHtcbiAgdmFzdFV0aWwudHJhY2socmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yLmNvZGUgfHwgOTAwfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RJbnRlZ3JhdG9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFkID0gcmVxdWlyZSgnLi9BZCcpO1xudmFyIFZpZGVvQ2xpY2tzID0gcmVxdWlyZSgnLi9WaWRlb0NsaWNrcycpO1xudmFyIExpbmVhciA9IHJlcXVpcmUoJy4vTGluZWFyJyk7XG52YXIgSW5MaW5lID0gcmVxdWlyZSgnLi9JbkxpbmUnKTtcbnZhciBXcmFwcGVyID0gcmVxdWlyZSgnLi9XcmFwcGVyJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG4vL3ZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxud2luZG93LkluTGluZV9fQSA9IEluTGluZTtcbmZ1bmN0aW9uIFZBU1RSZXNwb25zZSgpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RSZXNwb25zZSgpO1xuICB9XG5cbiAgdGhpcy5fbGluZWFyQWRkZWQgPSBmYWxzZTtcbiAgdGhpcy52YXN0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgdGhpcy5hZHMgPSBbXTtcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xuICB0aGlzLmltcHJlc3Npb25zID0gW107XG4gIHRoaXMuY2xpY2tUcmFja2luZ3MgPSBbXTtcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBbXTtcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHt9O1xuICB0aGlzLm1lZGlhRmlsZXMgPSBbXTtcbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7XG4gIHRoaXMuYWRUaXRsZSA9ICcnO1xuICB0aGlzLmR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB0aGlzLnNraXBvZmZzZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuaWNvbnMgPSBbXTtcbn1cblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5hZGRBZCA9IGZ1bmN0aW9uIChhZCkge1xuICB2YXIgaW5MaW5lLCB3cmFwcGVyO1xuICBpZiAoYWQgaW5zdGFuY2VvZiBBZCkge1xuICAgIGluTGluZSA9IGFkLmluTGluZTtcbiAgICB3cmFwcGVyID0gYWQud3JhcHBlcjtcblxuICAgIHRoaXMuYWRzLnB1c2goYWQpO1xuXG4gICAgaWYgKGluTGluZSkge1xuICAgICAgdGhpcy5fYWRkSW5MaW5lKGluTGluZSk7XG4gICAgfVxuXG4gICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgIHRoaXMuX2FkZFdyYXBwZXIod3JhcHBlcik7XG4gICAgfVxuICB9XG59O1xuXG4vKlZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEVycm9yVHJhY2tVcmwgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0ICB2YXIgZXJyb3JVUkwgPSBlcnJvciBpbnN0YW5jZW9mIHhtbC5KWE9OVHJlZSA/IHhtbC5rZXlWYWx1ZShlcnJvcikgOiBlcnJvcjtcblx0ICBpZiAoZXJyb3JVUkwpIHtcblx0ICAgIHRoaXMuZXJyb3JVUkxNYWNyb3MucHVzaChlcnJvclVSTCk7XG5cdCAgfVxuXHR9OyovXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRFcnJvclRyYWNrVXJscyA9IGZ1bmN0aW9uIChlcnJvcnMpIHtcblx0ICB1dGlsaXRpZXMuaXNBcnJheShlcnJvcnMpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5lcnJvclVSTE1hY3JvcywgZXJyb3JzKTtcblx0fTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiAoaW1wcmVzc2lvbnMpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoaW1wcmVzc2lvbnMpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5pbXByZXNzaW9ucywgaW1wcmVzc2lvbnMpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoID0gZnVuY3Rpb24gKGNsaWNrVGhyb3VnaCkge1xuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY2xpY2tUaHJvdWdoKSkge1xuICAgIHRoaXMuY2xpY2tUaHJvdWdoID0gY2xpY2tUaHJvdWdoO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDbGlja1RyYWNraW5ncyA9IGZ1bmN0aW9uIChjbGlja1RyYWNraW5ncykge1xuICB1dGlsaXRpZXMuaXNBcnJheShjbGlja1RyYWNraW5ncykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmNsaWNrVHJhY2tpbmdzLCBjbGlja1RyYWNraW5ncyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDdXN0b21DbGlja3MgPSBmdW5jdGlvbiAoY3VzdG9tQ2xpY2tzKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGN1c3RvbUNsaWNrcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmN1c3RvbUNsaWNrcywgY3VzdG9tQ2xpY2tzKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRyYWNraW5nRXZlbnRzID0gZnVuY3Rpb24gKHRyYWNraW5nRXZlbnRzKSB7XG4gIHZhciBldmVudHNNYXAgPSB0aGlzLnRyYWNraW5nRXZlbnRzO1xuXG4gIGlmICh0cmFja2luZ0V2ZW50cykge1xuICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xuICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0pIHtcbiAgICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdLnB1c2godHJhY2tpbmdFdmVudCk7XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh0aXRsZSkpIHtcbiAgICB0aGlzLmFkVGl0bGUgPSB0aXRsZTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRHVyYXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihkdXJhdGlvbikpIHtcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFZpZGVvQ2xpY2tzID0gZnVuY3Rpb24gKHZpZGVvQ2xpY2tzKSB7XG4gIGlmICh2aWRlb0NsaWNrcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSB7XG4gICAgdGhpcy5fYWRkQ2xpY2tUaHJvdWdoKHZpZGVvQ2xpY2tzLmNsaWNrVGhyb3VnaCk7XG4gICAgdGhpcy5fYWRkQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja3MuY2xpY2tUcmFja2luZ3MpO1xuICAgIHRoaXMuX2FkZEN1c3RvbUNsaWNrcyh2aWRlb0NsaWNrcy5jdXN0b21DbGlja3MpO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRNZWRpYUZpbGVzID0gZnVuY3Rpb24gKG1lZGlhRmlsZXMpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLm1lZGlhRmlsZXMsIG1lZGlhRmlsZXMpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkU2tpcG9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcblx0ICBpZiAod2luZG93Ll9tb2xTZXR0aW5ncyAmJiB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZSkge1xuXHRcdCAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLmVuYWJsZWQpIHtcblx0XHRcdCAgaWYgKCF0aGlzLmR1cmF0aW9uIHx8ICF3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS52aWRlb1RocmVzaG9sZCB8fCB0aGlzLmR1cmF0aW9uID49IHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLnZpZGVvVGhyZXNob2xkKSB7XG5cdFx0XHRcdCAgdGhpcy5za2lwb2Zmc2V0ID0gd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9PZmZzZXQ7XG5cdFx0XHQgIH1cblx0XHQgIH1cblx0ICB9XG5cdCAgZWxzZSBpZiAob2Zmc2V0KSB7XG5cdCAgICB0aGlzLnNraXBvZmZzZXQgPSBvZmZzZXQ7XG5cdCAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQWRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKGFkUGFyYW1ldGVycykge1xuICBpZiAoYWRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSBhZFBhcmFtZXRlcnM7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEljb25zID0gZnVuY3Rpb24gKGljb25zKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGljb25zKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuaWNvbnMsIGljb25zKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZExpbmVhciA9IGZ1bmN0aW9uIChsaW5lYXIpIHtcbiAgaWYgKGxpbmVhciBpbnN0YW5jZW9mIExpbmVhcikge1xuICAgIHRoaXMuX2FkZER1cmF0aW9uKGxpbmVhci5kdXJhdGlvbik7XG4gICAgdGhpcy5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcbiAgICB0aGlzLl9hZGRWaWRlb0NsaWNrcyhsaW5lYXIudmlkZW9DbGlja3MpO1xuICAgIHRoaXMuX2FkZE1lZGlhRmlsZXMobGluZWFyLm1lZGlhRmlsZXMpO1xuICAgIHRoaXMuX2FkZFNraXBvZmZzZXQobGluZWFyLnNraXBvZmZzZXQpO1xuICAgIHRoaXMuX2FkZEFkUGFyYW1ldGVycyhsaW5lYXIuYWRQYXJhbWV0ZXJzKTtcbiAgICB0aGlzLl9hZGRJY29ucyhsaW5lYXIuaWNvbnMpO1xuICAgIHRoaXMuX2xpbmVhckFkZGVkID0gdHJ1ZTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSW5MaW5lID0gZnVuY3Rpb24gKGluTGluZSkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKGluTGluZSBpbnN0YW5jZW9mIEluTGluZSkge1xuICAgIHRoaXMuX2FkZFRpdGxlKGluTGluZS5hZFRpdGxlKTtcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJscyhpbkxpbmUuZXJyb3JzKTtcbiAgICB0aGlzLl9hZGRJbXByZXNzaW9ucyhpbkxpbmUuaW1wcmVzc2lvbnMpO1xuXG4gICAgaW5MaW5lLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgaWYgKGNyZWF0aXZlLmxpbmVhcikge1xuICAgICAgICB0aGF0Ll9hZGRMaW5lYXIoY3JlYXRpdmUubGluZWFyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkV3JhcHBlciA9IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBpZiAod3JhcHBlciBpbnN0YW5jZW9mIFdyYXBwZXIpIHtcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJscyh3cmFwcGVyLmVycm9ycyk7XG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMod3JhcHBlci5pbXByZXNzaW9ucyk7XG5cbiAgICB3cmFwcGVyLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgdmFyIGxpbmVhciA9IGNyZWF0aXZlLmxpbmVhcjtcbiAgICAgIGlmIChsaW5lYXIpIHtcbiAgICAgICAgdGhhdC5fYWRkVmlkZW9DbGlja3MobGluZWFyLnZpZGVvQ2xpY2tzKTtcbiAgICAgICAgdGhhdC5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7Ly9XZSBlbnN1cmUgdGhhdCBubyBjbGlja1Rocm91Z2ggaGFzIGJlZW4gYWRkZWRcbiAgICAgICAgdGhhdC5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcbiAgICAgICAgdGhhdC5fYWRkSWNvbnMobGluZWFyLmljb25zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5oYXNMaW5lYXIgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5fbGluZWFyQWRkZWQ7XG59O1xuXG5mdW5jdGlvbiBhcHBlbmRUb0FycmF5KGFycmF5LCBpdGVtcykge1xuICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGFycmF5LnB1c2goaXRlbSk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUUmVzcG9uc2U7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIFZBU1RUcmFja2VyKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RUcmFja2VyKSkge1xuICAgIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICB0aGlzLnNhbml0eUNoZWNrKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xuICB0aGlzLmluaXRpYWxpemUoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XG5cbn1cblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XG4gIHRoaXMucmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XG4gIHRoaXMuYXNzZXRVUkkgPSBhc3NldFVSSTtcbiAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIHRoaXMucXVhcnRpbGVzID0ge1xuICAgIGZpcnN0UXVhcnRpbGU6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCgyNSAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9LFxuICAgIG1pZHBvaW50OiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoNTAgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfSxcbiAgICB0aGlyZFF1YXJ0aWxlOiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoNzUgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfVxuICB9O1xufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnNhbml0eUNoZWNrID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xuICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhhc3NldFVSSSkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcoYXNzZXRVUkkpKSB7XG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgdGhlIFVSSSBvZiB0aGUgYWQgYXNzZXQgYmVpbmcgcGxheWVkJyk7XG4gIH1cblxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVCByZXNwb25zZScpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tVUkxzID0gZnVuY3Rpb24gdHJhY2tVUkxzKHVybHMsIHZhcmlhYmxlcykge1xuICBpZiAodXRpbGl0aWVzLmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPiAwKSB7XG4gICAgdmFyaWFibGVzID0gdXRpbGl0aWVzLmV4dGVuZCh7XG4gICAgICBBU1NFVFVSSTogdGhpcy5hc3NldFVSSSxcbiAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcylcbiAgICB9LCB2YXJpYWJsZXMgfHwge30pO1xuXG4gICAgdmFzdFV0aWwudHJhY2sodXJscywgdmFyaWFibGVzKTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrRXZlbnQgPSBmdW5jdGlvbiB0cmFja0V2ZW50KGV2ZW50TmFtZSwgdHJhY2tPbmNlKSB7XG4gICAgaWYgKHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSAmJiB3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcpIHtcbiAgICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nLmludm9rZUV2ZW50KGV2ZW50TmFtZSk7XG4gICAgfVxuICB0aGlzLnRyYWNrVVJMcyhnZXRFdmVudFVyaXModGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdKSk7XG4gIGlmICh0cmFja09uY2UpIHtcbiAgICB0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gZ2V0RXZlbnRVcmlzKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdmFyIHVyaXM7XG5cbiAgICBpZiAodHJhY2tpbmdFdmVudHMpIHtcbiAgICAgIHVyaXMgPSBbXTtcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCFldmVudC51cmkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVyaXMucHVzaChldmVudC51cmkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1cmlzO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tQcm9ncmVzcyA9IGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3MobmV3UHJvZ3Jlc3NJbk1zKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIGV2ZW50cyA9IFtdO1xuICB2YXIgT05DRSA9IHRydWU7XG4gIHZhciBBTFdBWVMgPSBmYWxzZTtcbiAgdmFyIHRyYWNraW5nRXZlbnRzID0gdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50cztcblxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKG5ld1Byb2dyZXNzSW5NcykpIHtcbiAgICBhZGRUcmFja0V2ZW50KCdzdGFydCcsIE9OQ0UsIG5ld1Byb2dyZXNzSW5NcyA+IDApO1xuICAgIGFkZFRyYWNrRXZlbnQoJ3Jld2luZCcsIEFMV0FZUywgaGFzUmV3b3VuZCh0aGlzLnByb2dyZXNzLCBuZXdQcm9ncmVzc0luTXMpKTtcbiAgICBhZGRRdWFydGlsZUV2ZW50cyhuZXdQcm9ncmVzc0luTXMpO1xuICAgIHRyYWNrUHJvZ3Jlc3NFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcbiAgICB0cmFja0V2ZW50cygpO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBuZXdQcm9ncmVzc0luTXM7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gaGFzUmV3b3VuZChjdXJyZW50UHJvZ3Jlc3MsIG5ld1Byb2dyZXNzKSB7XG4gICAgdmFyIFJFV0lORF9USFJFU0hPTEQgPSAzMDAwOyAvL0lPUyB2aWRlbyBjbG9jayBpcyB2ZXJ5IHVucmVsaWFibGUgYW5kIHdlIG5lZWQgYSAzIHNlY29uZHMgdGhyZXNob2xkIHRvIGVuc3VyZSB0aGF0IHRoZXJlIHdhcyBhIHJld2luZCBhbiB0aGF0IGl0IHdhcyBvbiBwdXJwb3NlLlxuICAgIHJldHVybiBjdXJyZW50UHJvZ3Jlc3MgPiBuZXdQcm9ncmVzc0luTXMgJiYgTWF0aC5hYnMobmV3UHJvZ3Jlc3MgLSBjdXJyZW50UHJvZ3Jlc3MpID4gUkVXSU5EX1RIUkVTSE9MRDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UsIGNhbkJlQWRkZWQpIHtcbiAgICBpZiAodHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSAmJiBjYW5CZUFkZGVkKSB7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgdHJhY2tPbmNlOiAhIXRyYWNrT25jZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUXVhcnRpbGVFdmVudHMocHJvZ3Jlc3MpIHtcbiAgICB2YXIgcXVhcnRpbGVzID0gdGhhdC5xdWFydGlsZXM7XG4gICAgdmFyIGZpcnN0UXVhcnRpbGUgPSB0aGF0LnF1YXJ0aWxlcy5maXJzdFF1YXJ0aWxlO1xuICAgIHZhciBtaWRwb2ludCA9IHRoYXQucXVhcnRpbGVzLm1pZHBvaW50O1xuICAgIHZhciB0aGlyZFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMudGhpcmRRdWFydGlsZTtcblxuICAgIGlmICghZmlyc3RRdWFydGlsZS50cmFja2VkKSB7XG4gICAgICB0cmFja1F1YXJ0aWxlKCdmaXJzdFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSBpZiAoIW1pZHBvaW50LnRyYWNrZWQpIHtcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ21pZHBvaW50JywgcHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XG4gICAgICB0cmFja1F1YXJ0aWxlKCd0aGlyZFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICAgIGZ1bmN0aW9uIHRyYWNrUXVhcnRpbGUocXVhcnRpbGVOYW1lLCBwcm9ncmVzcyl7XG4gICAgICB2YXIgcXVhcnRpbGUgPSBxdWFydGlsZXNbcXVhcnRpbGVOYW1lXTtcbiAgICAgIGlmKGNhbkJlVHJhY2tlZChxdWFydGlsZSwgcHJvZ3Jlc3MpKXtcbiAgICAgICAgcXVhcnRpbGUudHJhY2tlZCA9IHRydWU7XG4gICAgICAgIGFkZFRyYWNrRXZlbnQocXVhcnRpbGVOYW1lLCBPTkNFLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5CZVRyYWNrZWQocXVhcnRpbGUsIHByb2dyZXNzKSB7XG4gICAgdmFyIHF1YXJ0aWxlVGltZSA9IHF1YXJ0aWxlLnRpbWU7XG4gICAgLy9XZSBvbmx5IGZpcmUgdGhlIHF1YXJ0aWxlIGV2ZW50IGlmIHRoZSBwcm9ncmVzcyBpcyBiaWdnZXIgdGhhbiB0aGUgcXVhcnRpbGUgdGltZSBieSA1IHNlY29uZHMgYXQgbW9zdC5cbiAgICByZXR1cm4gcHJvZ3Jlc3MgPj0gcXVhcnRpbGVUaW1lICYmIHByb2dyZXNzIDw9IChxdWFydGlsZVRpbWUgKyA1MDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3NFdmVudHMocHJvZ3Jlc3MpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzLnByb2dyZXNzKSkge1xuICAgICAgcmV0dXJuOyAvL05vdGhpbmcgdG8gdHJhY2tcbiAgICB9XG5cbiAgICB2YXIgcGVuZGluZ1Byb2dyZXNzRXZ0cyA9IFtdO1xuXG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MuZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0Lm9mZnNldCA8PSBwcm9ncmVzcykge1xuICAgICAgICB0aGF0LnRyYWNrVVJMcyhbZXZ0LnVyaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVuZGluZ1Byb2dyZXNzRXZ0cy5wdXNoKGV2dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MgPSBwZW5kaW5nUHJvZ3Jlc3NFdnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tFdmVudHMoKSB7XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGF0LnRyYWNrRXZlbnQoZXZlbnQubmFtZSwgZXZlbnQudHJhY2tPbmNlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuW1xuICAncmV3aW5kJyxcbiAgJ2Z1bGxzY3JlZW4nLFxuICAnZXhpdEZ1bGxzY3JlZW4nLFxuICAncGF1c2UnLFxuICAncmVzdW1lJyxcbiAgJ211dGUnLFxuICAndW5tdXRlJyxcbiAgJ2FjY2VwdEludml0YXRpb24nLFxuICAnYWNjZXB0SW52aXRhdGlvbkxpbmVhcicsXG4gICdjb2xsYXBzZScsXG4gICdleHBhbmQnXG5dLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYWNrRXZlbnQoZXZlbnROYW1lKTtcbiAgICB9O1xuICB9KTtcblxuW1xuICAnc3RhcnQnLFxuICAnc2tpcCcsXG4gICdjbG9zZScsXG4gICdjbG9zZUxpbmVhcidcbl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShldmVudE5hbWUpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUsIHRydWUpO1xuICAgIH07XG4gIH0pO1xuXG5bXG4gICdmaXJzdFF1YXJ0aWxlJyxcbiAgJ21pZHBvaW50JyxcbiAgJ3RoaXJkUXVhcnRpbGUnXG5dLmZvckVhY2goZnVuY3Rpb24gKHF1YXJ0aWxlKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShxdWFydGlsZSldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5xdWFydGlsZXNbcXVhcnRpbGVdLnRyYWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy50cmFja0V2ZW50KHF1YXJ0aWxlLCB0cnVlKTtcbiAgICB9O1xuICB9KTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMucXVhcnRpbGVzLnRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XG4gICAgdGhpcy50cmFja0V2ZW50KCdjb21wbGV0ZScsIHRydWUpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFcnJvcldpdGhDb2RlID0gZnVuY3Rpb24gdHJhY2tFcnJvcldpdGhDb2RlKGVycm9yY29kZSkge1xuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGVycm9yY29kZSkpIHtcbiAgICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvcmNvZGV9KTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmltcHJlc3Npb25zKTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NyZWF0aXZlVmlldyA9IGZ1bmN0aW9uIHRyYWNrQ3JlYXRpdmVWaWV3KCkge1xuICB0aGlzLnRyYWNrRXZlbnQoJ2NyZWF0aXZlVmlldycpO1xufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ2xpY2sgPSBmdW5jdGlvbiB0cmFja0NsaWNrKCkge1xuICAgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcpIHtcbiAgXHQgIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZy5pbnZva2VFdmVudCgnYWQtY2xpY2snKTtcbiAgICB9XG4gIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuY2xpY2tUcmFja2luZ3MpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUVHJhY2tlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVmVyaWZpY2F0aW9uKHZlcmlmaWNhdGlvbkpUcmVlKSB7XG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZlcmlmaWNhdGlvbikpIHtcbiAgICByZXR1cm4gbmV3IFZlcmlmaWNhdGlvbih2ZXJpZmljYXRpb25KVHJlZSk7XG4gIH1cblxuICB0aGlzLnZlbmRvciA9IHZlcmlmaWNhdGlvbkpUcmVlLmF0dHIoJ3ZlbmRvcicpO1xuICBpZiAodmVyaWZpY2F0aW9uSlRyZWUuamF2YVNjcmlwdFJlc291cmNlKSB7XG5cdCAgdGhpcy5qYXZhU2NyaXB0UmVzb3VyY2VzID0gcGFyc2VSZXNvdXJjZXModmVyaWZpY2F0aW9uSlRyZWUuamF2YVNjcmlwdFJlc291cmNlKTtcbiAgfVxuICBpZiAodmFzdFV0aWwuaXNGbGFzaFN1cHBvcnRlZCgpICYmIHZlcmlmaWNhdGlvbkpUcmVlLmZsYXNoUmVzb3VyY2UpIHtcblx0ICB0aGlzLmphdmFTY3JpcHRSZXNvdXJjZXMgPSBwYXJzZVJlc291cmNlcyh2ZXJpZmljYXRpb25KVHJlZS5qYXZhU2NyaXB0UmVzb3VyY2UpO1xuICB9XG4gIGlmICh2ZXJpZmljYXRpb25KVHJlZS52aWV3YWJsZUltcHJlc3Npb24pIHtcblx0ICB0aGlzLnZpZXdhYmxlSW1wcmVzc2lvbiA9IHtpZDogdmVyaWZpY2F0aW9uSlRyZWUudmlld2FibGVJbXByZXNzaW9uLmF0dHIoJ2lkJyksIHVyaTogeG1sLmtleVZhbHVlKHZlcmlmaWNhdGlvbkpUcmVlLnZpZXdhYmxlSW1wcmVzc2lvbil9O1xuICB9XG4gIFxuICBmdW5jdGlvbiBwYXJzZVJlc291cmNlcyhyZXNvdXJjZXMpIHtcblx0ICB2YXIgYXJyID0gW107XG5cdCAgdmFyIGFyckRhdGE7XG5cdCAgaWYgKHJlc291cmNlcykge1xuXHRcdCAgYXJyRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KHJlc291cmNlcykgPyByZXNvdXJjZXMgOiBbcmVzb3VyY2VzXTtcblx0XHQgIGFyckRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0ICBhcnIucHVzaCh7YXBpRnJhbWV3b3JrOiBlbGVtLmF0dHIoJ2FwaUZyYW1ld29yaycpLCB1cmk6IHhtbC5rZXlWYWx1ZShlbGVtKX0pO1xuXHRcdCAgfSk7XG5cdCAgfVxuXHQgIHJldHVybiBhcnI7XG4gIH1cbn1cblxuVmVyaWZpY2F0aW9uLnBhcnNlQWRWZXJpZmljYXRpb25zID0gZnVuY3Rpb24gcGFyc2VBZFZlcmlmaWNhdGlvbnModmVyaWZpY2F0aW9uc0pUcmVlKSB7XG4gIHZhciB2ZXJpZmljYXRpb25zID0gW107XG4gIHZhciB2ZXJpZmljYXRpb25zRGF0YTtcbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodmVyaWZpY2F0aW9uc0pUcmVlKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKHZlcmlmaWNhdGlvbnNKVHJlZS52ZXJpZmljYXRpb24pKSB7XG5cdCAgdmVyaWZpY2F0aW9uc0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheSh2ZXJpZmljYXRpb25zSlRyZWUudmVyaWZpY2F0aW9uKSA/IHZlcmlmaWNhdGlvbnNKVHJlZS52ZXJpZmljYXRpb24gOiBbdmVyaWZpY2F0aW9uc0pUcmVlLnZlcmlmaWNhdGlvbl07XG5cdCAgdmVyaWZpY2F0aW9uc0RhdGEuZm9yRWFjaChmdW5jdGlvbiAodmVyaWZpY2F0aW9uKSB7XG4gICAgXHR2ZXJpZmljYXRpb25zLnB1c2gobmV3IFZlcmlmaWNhdGlvbih2ZXJpZmljYXRpb24pKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdmVyaWZpY2F0aW9ucztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVyaWZpY2F0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBWaWRlb0NsaWNrcyh2aWRlb0NsaWNrSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSkge1xuICAgIHJldHVybiBuZXcgVmlkZW9DbGlja3ModmlkZW9DbGlja0pUcmVlKTtcbiAgfVxuXG4gIHRoaXMuY2xpY2tUaHJvdWdoID0geG1sLmtleVZhbHVlKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1Rocm91Z2gpO1xuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY2xpY2tUcmFja2luZyk7XG4gIHRoaXMuY3VzdG9tQ2xpY2tzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY3VzdG9tQ2xpY2spO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VDbGlja1RyYWNraW5ncyh0cmFja2luZ0RhdGEpIHtcbiAgICB2YXIgY2xpY2tUcmFja2luZ3MgPSBbXTtcbiAgICBpZiAodHJhY2tpbmdEYXRhKSB7XG4gICAgICB0cmFja2luZ0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0RhdGEpID8gdHJhY2tpbmdEYXRhIDogW3RyYWNraW5nRGF0YV07XG4gICAgICB0cmFja2luZ0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY2xpY2tUcmFja2luZ0RhdGEpIHtcbiAgICAgICAgY2xpY2tUcmFja2luZ3MucHVzaCh4bWwua2V5VmFsdWUoY2xpY2tUcmFja2luZ0RhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2xpY2tUcmFja2luZ3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaWRlb0NsaWNrczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIFZpZXdhYmxlSW1wcmVzc2lvbih2aWV3YWJsZUltcHJlc3Npb25KVHJlZSkge1xuXHQgIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZpZXdhYmxlSW1wcmVzc2lvbikpIHtcblx0ICAgIHJldHVybiBuZXcgVmlld2FibGVJbXByZXNzaW9uKHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlKTtcblx0ICB9XG5cblx0ICAvL09wdGlvbmFsIEZpZWxkc1xuXHQgIHRoaXMuaWQgPSB2aWV3YWJsZUltcHJlc3Npb25KVHJlZS5hdHRyKCdpZCcpO1xuXHQgIGlmICh2aWV3YWJsZUltcHJlc3Npb25KVHJlZS52aWV3YWJsZSkge1xuXHRcdCAgdGhpcy52aWV3YWJsZXMgPSBwYXJzZVVyaUFycmF5KHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlLnZpZXdhYmxlKTtcblx0ICB9XG5cdCAgaWYgKHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlLm5vdFZpZXdhYmxlKSB7XG5cdFx0ICB0aGlzLm5vdFZpZXdhYmxlcyA9IHBhcnNlVXJpQXJyYXkodmlld2FibGVJbXByZXNzaW9uSlRyZWUubm90Vmlld2FibGUpO1xuXHQgIH1cblx0ICBpZiAodmlld2FibGVJbXByZXNzaW9uSlRyZWUudmlld1VuZGV0ZXJtaW5lZCkge1xuXHRcdCAgdGhpcy52aWV3VW5kZXRlcm1pbmVkcyA9IHBhcnNlVXJpQXJyYXkodmlld2FibGVJbXByZXNzaW9uSlRyZWUudmlld1VuZGV0ZXJtaW5lZCk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gcGFyc2VVcmlBcnJheShhcnJKVHJlZSkge1xuXHRcdCAgdmFyIGFyciA9IFtdO1xuXHRcdCAgdmFyIGFyckRhdGE7XG5cdFx0ICBpZiAoYXJySlRyZWUpIHtcblx0XHRcdCAgYXJyRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGFyckpUcmVlKSA/IGFyckpUcmVlIDogW2FyckpUcmVlXTtcblx0XHRcdCAgYXJyRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdCAgYXJyLnB1c2goeG1sLmtleVZhbHVlKGVsZW0pKTtcblx0XHRcdCAgfSk7XG5cdFx0ICB9XG5cdFx0ICByZXR1cm4gYXJyO1xuXHQgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdhYmxlSW1wcmVzc2lvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIENyZWF0aXZlID0gcmVxdWlyZSgnLi9DcmVhdGl2ZScpO1xudmFyIFZpZXdhYmxlSW1wcmVzc2lvbiA9IHJlcXVpcmUoJy4vVmlld2FibGVJbXByZXNzaW9uJyk7XG52YXIgVmVyaWZpY2F0aW9uID0gcmVxdWlyZSgnLi9WZXJpZmljYXRpb24nKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gV3JhcHBlcih3cmFwcGVySlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgV3JhcHBlcikpIHtcbiAgICByZXR1cm4gbmV3IFdyYXBwZXIod3JhcHBlckpUcmVlKTtcbiAgfVxuXG4gIC8vUmVxdWlyZWQgZWxlbWVudHNcbiAgdGhpcy5hZFN5c3RlbSA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUuYWRTeXN0ZW0pO1xuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyh3cmFwcGVySlRyZWUuaW1wcmVzc2lvbik7XG4gIHRoaXMuVkFTVEFkVGFnVVJJID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS52QVNUQWRUYWdVUkkpO1xuXG4gIC8vT3B0aW9uYWwgZWxlbWVudHNcbiAgdGhpcy5jcmVhdGl2ZXMgPSBDcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyh3cmFwcGVySlRyZWUuY3JlYXRpdmVzKTtcbiAgLy90aGlzLmVycm9yID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5lcnJvcik7XG4gIHRoaXMuZXJyb3JzID0gdmFzdFV0aWwucGFyc2VFcnJvcnMod3JhcHBlckpUcmVlLmVycm9yKTtcbiAgdGhpcy5leHRlbnNpb25zID0gd3JhcHBlckpUcmVlLmV4dGVuc2lvbnM7XG5cbiAgLy9PcHRpb25hbCBhdHRyc1xuICB0aGlzLmZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycyA9IHV0aWxpdGllcy5pc0RlZmluZWQoeG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzJykpPyB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMnKTogdHJ1ZTtcbiAgdGhpcy5hbGxvd011bHRpcGxlQWRzID0geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnYWxsb3dNdWx0aXBsZUFkcycpO1xuICB0aGlzLmZhbGxiYWNrT25Ob0FkID0geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZmFsbGJhY2tPbk5vQWQnKTtcblxuICBpZiAod2luZG93Lm1vbF92YXN0VmVyc2lvbiA9PT0gNCkge1xuXHQgIGlmICh3cmFwcGVySlRyZWUudmlld2FibGVJbXByZXNzaW9uKSB7XG5cdFx0ICB0aGlzLnZpZXdhYmxlSW1wcmVzc2lvbiA9IG5ldyBWaWV3YWJsZUltcHJlc3Npb24od3JhcHBlckpUcmVlLnZpZXdhYmxlSW1wcmVzc2lvbik7XG5cdCAgfVxuXHQgIGlmICh3cmFwcGVySlRyZWUuYWRWZXJpZmljYXRpb25zKSB7XG5cdFx0ICB0aGlzLmFkVmVyaWZpY2F0aW9ucyA9IFZlcmlmaWNhdGlvbi5wYXJzZUFkVmVyaWZpY2F0aW9ucyh3cmFwcGVySlRyZWUuYWRWZXJpZmljYXRpb25zKTtcblx0ICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXcmFwcGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgZHVyYXRpb25SZWdleCA9IC8oXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKShcXC4oXFxkXFxkXFxkKSk/LztcblxudmFyIHBhcnNlcnMgPSB7XG5cbiAgZHVyYXRpb246IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb25TdHIpIHtcblxuICAgIHZhciBtYXRjaCwgZHVyYXRpb25Jbk1zO1xuXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhkdXJhdGlvblN0cikpIHtcbiAgICAgIG1hdGNoID0gZHVyYXRpb25TdHIubWF0Y2goZHVyYXRpb25SZWdleCk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZHVyYXRpb25Jbk1zID0gcGFyc2VIb3Vyc1RvTXMobWF0Y2hbMV0pICsgcGFyc2VNaW5Ub01zKG1hdGNoWzJdKSArIHBhcnNlU2VjVG9NcyhtYXRjaFszXSkgKyBwYXJzZUludChtYXRjaFs1XSB8fCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNOYU4oZHVyYXRpb25Jbk1zKSA/IG51bGwgOiBkdXJhdGlvbkluTXM7XG5cbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gcGFyc2VIb3Vyc1RvTXMoaG91clN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhvdXJTdHIsIDEwKSAqIDYwICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTWluVG9NcyhtaW5TdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChtaW5TdHIsIDEwKSAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVNlY1RvTXMoc2VjU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VjU3RyLCAxMCkgKiAxMDAwO1xuICAgIH1cbiAgfSxcblxuICBvZmZzZXQ6IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICBpZihpc1BlcmNlbnRhZ2Uob2Zmc2V0KSl7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlUGVyY2VudGFnZShvZmZzZXQsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlcnMuZHVyYXRpb24ob2Zmc2V0KTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShvZmZzZXQpIHtcbiAgICAgIHZhciBwZXJjZW50YWdlUmVnZXggPSAvXlxcZCsoXFwuXFxkKyk/JSQvZztcbiAgICAgIHJldHVybiBwZXJjZW50YWdlUmVnZXgudGVzdChvZmZzZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVBlcmNlbnRhZ2UocGVyY2VudFN0ciwgZHVyYXRpb24pIHtcbiAgICAgIGlmKGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYWxjUGVyY2VudChkdXJhdGlvbiwgcGFyc2VGbG9hdChwZXJjZW50U3RyLnJlcGxhY2UoJyUnLCAnJykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KHF1YW50aXR5LCBwZXJjZW50KXtcbiAgICAgIHJldHVybiBxdWFudGl0eSAqIHBlcmNlbnQgLyAxMDA7XG4gICAgfVxuICB9XG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZXJzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBWUEFJREhUTUw1VGVjaCA9IHJlcXVpcmUoJy4uL3ZwYWlkL1ZQQUlESFRNTDVUZWNoJyk7XG5cbnZhciB2YXN0VXRpbCA9IHtcblxuICB0cmFjazogZnVuY3Rpb24gdHJhY2soVVJMTWFjcm9zLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgc291cmNlcyA9IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm9zKFVSTE1hY3JvcywgdmFyaWFibGVzKTtcbiAgICB2YXIgdHJhY2tJbWdzID0gW107XG4gICAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICB0cmFja0ltZ3MucHVzaChpbWcpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmFja0ltZ3M7XG4gIH0sXG5cbiAgcGFyc2VVUkxNYWNyb3M6IGZ1bmN0aW9uIHBhcnNlTWFjcm9zKFVSTE1hY3JvcywgdmFyaWFibGVzKSB7XG4gICAgdmFyIHBhcnNlZFVSTHMgPSBbXTtcblxuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcblxuICAgIGlmICghKHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSkpIHtcbiAgICAgIHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuMGUrMTApO1xuICAgIH1cblxuICAgIFVSTE1hY3Jvcy5mb3JFYWNoKGZ1bmN0aW9uIChVUkxNYWNybykge1xuICAgICAgcGFyc2VkVVJMcy5wdXNoKHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJzZWRVUkxzO1xuICB9LFxuXG4gIHBhcnNlVVJMTWFjcm86IGZ1bmN0aW9uIHBhcnNlTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykge1xuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcblxuICAgIGlmICghKHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSkpIHtcbiAgICAgIHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuMGUrMTApO1xuICAgIH1cblxuICAgIHJldHVybiB2YXN0VXRpbC5fcGFyc2VVUkxNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKTtcbiAgfSxcblxuICBfcGFyc2VVUkxNYWNybzogZnVuY3Rpb24gcGFyc2VNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSB7XG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xuXG4gICAgdXRpbGl0aWVzLmZvckVhY2godmFyaWFibGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgVVJMTWFjcm8gPSBVUkxNYWNyby5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcW1wiICsga2V5ICsgXCJcXFxcXFxdXCIsICdnbScpLCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gVVJMTWFjcm87XG4gIH0sXG5cbiAgcGFyc2VEdXJhdGlvbjogZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvblN0cikge1xuICAgIHZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xuICAgIHZhciBtYXRjaCwgZHVyYXRpb25Jbk1zO1xuXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhkdXJhdGlvblN0cikpIHtcbiAgICAgIG1hdGNoID0gZHVyYXRpb25TdHIubWF0Y2goZHVyYXRpb25SZWdleCk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZHVyYXRpb25Jbk1zID0gcGFyc2VIb3Vyc1RvTXMobWF0Y2hbMV0pICsgcGFyc2VNaW5Ub01zKG1hdGNoWzJdKSArIHBhcnNlU2VjVG9NcyhtYXRjaFszXSkgKyBwYXJzZUludChtYXRjaFs1XSB8fCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNOYU4oZHVyYXRpb25Jbk1zKSA/IG51bGwgOiBkdXJhdGlvbkluTXM7XG5cbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gcGFyc2VIb3Vyc1RvTXMoaG91clN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhvdXJTdHIsIDEwKSAqIDYwICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTWluVG9NcyhtaW5TdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChtaW5TdHIsIDEwKSAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVNlY1RvTXMoc2VjU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VjU3RyLCAxMCkgKiAxMDAwO1xuICAgIH1cbiAgfSxcblxuICBwYXJzZUltcHJlc3Npb25zOiBmdW5jdGlvbiBwYXJzZUltcHJlc3Npb25zKGltcHJlc3Npb25zKSB7XG5cdCAgICBpZiAoaW1wcmVzc2lvbnMpIHtcblx0ICAgICAgaW1wcmVzc2lvbnMgPSB1dGlsaXRpZXMuaXNBcnJheShpbXByZXNzaW9ucykgPyBpbXByZXNzaW9ucyA6IFtpbXByZXNzaW9uc107XG5cdCAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkoaW1wcmVzc2lvbnMsIGZ1bmN0aW9uIChpbXByZXNzaW9uKSB7XG5cdCAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGltcHJlc3Npb24ua2V5VmFsdWUpKSB7XG5cdCAgICAgICAgICByZXR1cm4gaW1wcmVzc2lvbi5rZXlWYWx1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gW107XG5cdCAgfSxcblxuXHQgIHBhcnNlRXJyb3JzOiBmdW5jdGlvbiBwYXJzZUVycm9ycyhlcnJvcnMpIHtcblx0ICAgIGlmIChlcnJvcnMpIHtcblx0ICAgIFx0ZXJyb3JzID0gdXRpbGl0aWVzLmlzQXJyYXkoZXJyb3JzKSA/IGVycm9ycyA6IFtlcnJvcnNdO1xuXHQgICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KGVycm9ycywgZnVuY3Rpb24gKGVycm9yKSB7XG5cdCAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGVycm9yLmtleVZhbHVlKSkge1xuXHQgICAgICAgICAgcmV0dXJuIGVycm9yLmtleVZhbHVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBbXTtcblx0ICB9LFxuXG4gIC8vV2UgYXNzdW1lIHRoYXQgdGhlIHByb2dyZXNzIGlzIGdvaW5nIHRvIGFycml2ZSBpbiBtaWxsaXNlY29uZHNcbiAgZm9ybWF0UHJvZ3Jlc3M6IGZ1bmN0aW9uIGZvcm1hdFByb2dyZXNzKHByb2dyZXNzKSB7XG4gICAgdmFyIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHM7XG4gICAgaG91cnMgPSBwcm9ncmVzcyAvICg2MCAqIDYwICogMTAwMCk7XG4gICAgaG91cnMgPSBNYXRoLmZsb29yKGhvdXJzKTtcbiAgICBtaW51dGVzID0gKHByb2dyZXNzIC8gKDYwICogMTAwMCkpICUgNjA7XG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IobWludXRlcyk7XG4gICAgc2Vjb25kcyA9IChwcm9ncmVzcyAvIDEwMDApICUgNjA7XG4gICAgc2Vjb25kcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyk7XG4gICAgbWlsbGlzZWNvbmRzID0gcHJvZ3Jlc3MgJSAxMDAwO1xuICAgIHJldHVybiB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhob3VycywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhtaW51dGVzLCAyKSArICc6JyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHNlY29uZHMsIDIpICsgJy4nICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWlsbGlzZWNvbmRzLCAzKTtcbiAgfSxcblxuICBwYXJzZU9mZnNldDogZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBkdXJhdGlvbikge1xuICAgIGlmIChpc1BlcmNlbnRhZ2Uob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB2YXN0VXRpbC5wYXJzZUR1cmF0aW9uKG9mZnNldCk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhbGNQZXJjZW50KGR1cmF0aW9uLCBwYXJzZUZsb2F0KHBlcmNlbnRTdHIucmVwbGFjZSgnJScsICcnKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY1BlcmNlbnQocXVhbnRpdHksIHBlcmNlbnQpIHtcbiAgICAgIHJldHVybiBxdWFudGl0eSAqIHBlcmNlbnQgLyAxMDA7XG4gICAgfVxuICB9LFxuXG5cbiAgLy9MaXN0IG9mIHN1cHBvcnRlZCBWUEFJRCB0ZWNobm9sb2dpZXNcbiAgVlBBSURfdGVjaHM6IFtcbiAgICAvL1ZQQUlERmxhc2hUZWNoLFxuICAgIFZQQUlESFRNTDVUZWNoXG4gIF0sXG5cbiAgaXNWUEFJRDogZnVuY3Rpb24gaXNWUEFJRE1lZGlhRmlsZShtZWRpYUZpbGUpIHtcbiAgICByZXR1cm4gISFtZWRpYUZpbGUgJiYgbWVkaWFGaWxlLmFwaUZyYW1ld29yayA9PT0gJ1ZQQUlEJztcbiAgfSxcblxuICBmaW5kU3VwcG9ydGVkVlBBSURUZWNoOiBmdW5jdGlvbiBmaW5kU3VwcG9ydGVkVlBBSURUZWNoKG1pbWVUeXBlKSB7XG4gICAgdmFyIGksIGxlbiwgVlBBSURUZWNoO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5WUEFJRF90ZWNocy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgVlBBSURUZWNoID0gdGhpcy5WUEFJRF90ZWNoc1tpXTtcbiAgICAgIGlmIChWUEFJRFRlY2guc3VwcG9ydHMobWltZVR5cGUpKSB7XG4gICAgICAgIHJldHVybiBWUEFJRFRlY2g7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIGlzRmxhc2hTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzRmxhc2hTdXBwb3J0ZWQoKSB7XG5cdCAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhc3RVdGlsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREFkVW5pdFdyYXBwZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpO1xuICB9XG4gIHNhbml0eUNoZWNrKHZwYWlkQWRVbml0LCBvcHRzKTtcblxuICB0aGlzLm9wdGlvbnMgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRzKTtcbiAgdGhpcy5hZFN0YXJ0ZWQgPSBmYWxzZTtcblxuICB0aGlzLl9hZFVuaXQgPSB2cGFpZEFkVW5pdDtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGFkVW5pdCwgb3B0cykge1xuICAgIGlmICghYWRVbml0IHx8ICFWUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZShhZFVuaXQpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRoZSBwYXNzZWQgVlBBSUQgYWRVbml0IGRvZXMgbm90IGZ1bGx5IGltcGxlbWVudCB0aGUgVlBBSUQgaW50ZXJmYWNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNPYmplY3Qob3B0cykpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIG9wdGlvbnMgaGFzaCAgYnV0IGdvdCAnXCIgKyBvcHRzICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmICghKFwicmVzcG9uc2VUaW1lb3V0XCIgaW4gb3B0cykgfHwgIXV0aWxpdGllcy5pc051bWJlcihvcHRzLnJlc3BvbnNlVGltZW91dCkgKXtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIHJlc3BvbnNlVGltZW91dCBpbiBvcHRpb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5WUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZSA9IGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UoVlBBSURBZFVuaXQpIHtcbiAgLy9OT1RFOiBza2lwQWQgaXMgbm90IHBhcnQgb2YgdGhlIG1ldGhvZCBsaXN0IGJlY2F1c2UgaXQgb25seSBhcHBlYXJzIGluIFZQQUlEIDIuMCBhbmQgd2Ugc3VwcG9ydCBWUEFJRCAxLjBcbiAgdmFyIFZQQUlESW50ZXJmYWNlTWV0aG9kcyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsICdpbml0QWQnLCAnc3RhcnRBZCcsICdzdG9wQWQnLCAncmVzaXplQWQnLCAncGF1c2VBZCcsICdleHBhbmRBZCcsICdjb2xsYXBzZUFkJ1xuICBdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBWUEFJREludGVyZmFjZU1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIVZQQUlEQWRVbml0IHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihWUEFJREFkVW5pdFtWUEFJREludGVyZmFjZU1ldGhvZHNbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIGNhblN1YnNjcmliZVRvRXZlbnRzKFZQQUlEQWRVbml0KSAmJiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoVlBBSURBZFVuaXQpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjYW5TdWJzY3JpYmVUb0V2ZW50cyhhZFVuaXQpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vbik7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoYWRVbml0KSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC51bnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vZmYpO1xuXG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuYWRVbml0QXN5bmNDYWxsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gIHZhciBtZXRob2QgPSBhcmdzLnNoaWZ0KCk7XG4gIHZhciBjYiA9IGFyZ3MucG9wKCk7XG4gIHZhciB0aW1lb3V0SWQ7XG5cbiAgc2FuaXR5Q2hlY2sobWV0aG9kLCBjYiwgdGhpcy5fYWRVbml0KTtcbiAgYXJncy5wdXNoKHdyYXBDYWxsYmFjaygpKTtcblxuICB0aGlzLl9hZFVuaXRbbWV0aG9kXS5hcHBseSh0aGlzLl9hZFVuaXQsIGFyZ3MpO1xuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgYSByZXNwb25zZSBvbiBjYWxsICdcIiArIG1ldGhvZCArIFwiJ1wiKSk7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCBhZFVuaXQpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhtZXRob2QpIHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXRbbWV0aG9kXSkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBpbnZhbGlkIG1ldGhvZCBuYW1lXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLmFkVW5pdEFzeW5jQ2FsbCwgbWlzc2luZyBjYWxsYmFja1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xuICB2YXIgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5hZGRFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9uO1xuICBhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGV2dE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLl9hZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCB0aGlzLl9hZFVuaXQudW5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9mZjtcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMuX2FkVW5pdCwgZXZ0TmFtZSwgaGFuZGxlcik7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLndhaXRGb3JFdmVudCA9IGZ1bmN0aW9uIChldnROYW1lLCBjYiwgY29udGV4dCkge1xuXHQgIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHRpbWVvdXRJZDtcbiAgc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpO1xuICBjb250ZXh0ID0gY29udGV4dCB8fCBudWxsO1xuXG4gIHRoaXMub24oZXZ0TmFtZSwgcmVzcG9uc2VMaXN0ZW5lcik7XG5cbiAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgdGhhdC5vZmYoZXZ0TmFtZSwgcmVzcG9uc2VMaXN0ZW5lcik7XG5cdFx0Ly8gaWdub3JlIGV2ZW50cyBpZiBhZCBpcyBmaW5pc2hlZFxuXHRcdGlmICh3aW5kb3cuX3RpbWVvdXRJZHMuaW5kZXhPZih0aW1lb3V0SWQpID49IDApIHtcbiAgICAgIGlmICh0aGF0Lm9wdGlvbnMgJiYgdGhhdC5vcHRpb25zLnBsYXllcikge1xuICAgICAgICB0aGF0Lm9wdGlvbnMucGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5tZXNzYWdlJywgZGF0YToge21lc3NhZ2U6ICdUaW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGV2ZW50ICcgKyBldnROYW1lfX0pO1xuICAgICAgfVxuXHRcdFx0Y2IobmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgZXZlbnQgJ1wiICsgZXZ0TmFtZSArIFwiJ1wiKSk7XG5cdFx0fVxuICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLy8gRU5cbiAgd2luZG93Ll90aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGV2dE5hbWUsIGNiKSB7XG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoZXZ0TmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGV2dCBuYW1lXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgbWlzc2luZyBjYWxsYmFja1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNwb25zZUxpc3RlbmVyKCkge1xuICAgIGlmICh0aGF0Lm9wdGlvbnMgJiYgdGhhdC5vcHRpb25zLnBsYXllcikge1xuICAgICAgdGhhdC5vcHRpb25zLnBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6IGV2dE5hbWV9fSk7XG4gICAgfVxuXHQgIHRoYXQub2ZmKGV2dE5hbWUsIHJlc3BvbnNlTGlzdGVuZXIpO1xuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcblxuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgdGltZW91dElkID0gbnVsbDtcbiAgICB9XG5cbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XG4gICAgY2IuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH1cbn07XG5cbi8vIFZQQUlEIE1FVEhPRFNcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uICh2ZXJzaW9uLCBjYikge1xuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgnaGFuZHNoYWtlVmVyc2lvbicsIHZlcnNpb24sIGNiKTtcbn07XG5cbi8qIGpzaGludCBtYXhwYXJhbXM6NiAqL1xuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhLCBjYikge1xuXHRjb25zb2xlLmxvZygnW0JDLU1PTF0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIGluaXRBZCBvbiBjcmVhdGl2ZScpO1xuXHR0aGlzLndhaXRGb3JFdmVudCgnQWRMb2FkZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5pbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucmVzaXplQWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNiKSB7XG4gIC8vIE5PVEU6IEFkU2l6ZUNoYW5nZSBldmVudCBpcyBvbmx5IHN1cHBvcnRlZCBvbiBWUEFJRCAyLjAgc28gZm9yIHRoZSBtb21lbnQgd2UgYXJlIG5vdCBnb2luZyB0byB1c2UgaXRcbiAgLy8gYW5kIHdpbGwgYXNzdW1lIHRoYXQgZXZlcnl0aGluZyBpcyBmaW5lIGFmdGVyIHRoZSBhc3luYyBjYWxsXG5cdGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgcmVzaXplQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ3Jlc2l6ZUFkJywgd2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNiKTtcbiAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gIFx0d2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkU2l6ZUNoYW5nZScsIGFkVm9sdW1lOiB0aGlzLm9wdGlvbnMucGxheWVyLnZvbHVtZSgpfSk7XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0JDLU1PTF0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHN0YXJ0QWQgb24gY3JlYXRpdmUnKTtcblx0aWYgKCF0aGlzLmFkU3RhcnRlZCkge1xuXHRcdHRoaXMud2FpdEZvckV2ZW50KCdBZFN0YXJ0ZWQnLCBjYik7XG5cdH1cbiAgdGhpcy5fYWRVbml0LnN0YXJ0QWQoKTtcbiAgaWYgKHRoaXMuYWRTdGFydGVkKSB7XG4gICAgY2IobnVsbCk7XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RvcEFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgc3RvcEFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFN0b3BwZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucGF1c2VBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0JDLU1PTF0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHBhdXNlQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkUGF1c2VkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQucGF1c2VBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0JDLU1PTF0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHJlc3VtZUFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBsYXlpbmcnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5yZXN1bWVBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0JDLU1PTF0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIGV4cGFuZEFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZEV4cGFuZGVkQ2hhbmdlJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuZXhwYW5kQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0JDLU1PTF0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIGNvbGxhcHNlQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5jb2xsYXBzZUFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0JDLU1PTF0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHNraXBBZCBvbiBjcmVhdGl2ZScpO1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTa2lwcGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuc2tpcEFkKCk7XG59O1xuXG4vL1ZQQUlEIHByb3BlcnR5IGdldHRlcnNcbltcbiAgJ2FkTGluZWFyJyxcbiAgJ2FkV2lkdGgnLFxuICAnYWRIZWlnaHQnLFxuICAnYWRFeHBhbmRlZCcsXG4gICdhZFNraXBwYWJsZVN0YXRlJyxcbiAgJ2FkUmVtYWluaW5nVGltZScsXG4gICdhZER1cmF0aW9uJyxcbiAgJ2FkVm9sdW1lJyxcbiAgJ2FkQ29tcGFuaW9ucycsXG4gICdhZEljb25zJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICB2YXIgZ2V0dGVyTmFtZSA9ICdnZXQnICsgdXRpbGl0aWVzLmNhcGl0YWxpemUocHJvcGVydHkpO1xuXG4gIFZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGVbZ2V0dGVyTmFtZV0gPSBmdW5jdGlvbiAoY2IpIHtcbiAgICB0aGlzLmFkVW5pdEFzeW5jQ2FsbChnZXR0ZXJOYW1lLCBjYik7XG4gIH07XG59KTtcblxuLy9WUEFJRCBwcm9wZXJ0eSBzZXR0ZXJzXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYil7XG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdzZXRBZFZvbHVtZScsdm9sdW1lLCBjYik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0V3JhcHBlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1pbWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL21pbWV0eXBlcycpO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIFZQQUlESFRNTDVDbGllbnQgPSByZXF1aXJlKCdWUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZQQUlESFRNTDVUZWNoKG1lZGlhRmlsZSkge1xuXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlESFRNTDVUZWNoKSkge1xuICAgIHJldHVybiBuZXcgVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKTtcbiAgfVxuXG4gIHNhbml0eUNoZWNrKG1lZGlhRmlsZSk7XG5cbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWh0bWw1JztcbiAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XG4gIHRoaXMudmlkZW9FbCA9IG51bGw7XG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcblxuICB0aGlzLm1lZGlhRmlsZSA9IG1lZGlhRmlsZTtcblxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcbiAgICAgIGlmICghbWVkaWFGaWxlIHx8ICF1dGlsaXRpZXMuaXNTdHJpbmcobWVkaWFGaWxlLnNyYykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUpO1xuICAgICAgfVxuICB9XG59XG5cblZQQUlESFRNTDVUZWNoLlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xuXG5WUEFJREhUTUw1VGVjaC5zdXBwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiAhdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBNaW1lVHlwZXMuaHRtbDUuaW5kZXhPZih0eXBlKSA+IC0xO1xufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjaykge1xuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spO1xuXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjb250YWluZXJFbDtcbiAgdGhpcy52aWRlb0VsID0gdmlkZW9FbDtcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBuZXcgVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudChjb250YWluZXJFbCwgdmlkZW9FbCwge30pO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudC5sb2FkQWRVbml0KHRoaXMubWVkaWFGaWxlLnNyYywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGNvbnRhaW5lciwgdmlkZW8sIGNiKSB7XG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KGNvbnRhaW5lcikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQodmlkZW8pIHx8IHZpZGVvLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ZpZGVvJykge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0spO1xuICAgIH1cbiAgfVxufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIHVubG9hZEFkVW5pdCgpIHtcbiAgaWYgKHRoaXMudnBhaWRIVE1MQ2xpZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50LmRlc3Ryb3koKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGxvZ2dlci5lcnJvciAoJ1ZBU1QgRVJST1I6IHRyeWluZyB0byB1bmxvYWQgdGhlIFZQQUlEIGFkdW5pdCcpO1xuICAgIH1cblxuICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbnRhaW5lckVsKSB7XG4gICAgZG9tLnJlbW92ZSh0aGlzLmNvbnRhaW5lckVsKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcbiAgfVxufTtcblxudmFyIFBSRUZJWCA9ICdvbiBWUEFJREhUTUw1VGVjaCc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUgPSBQUkVGSVggKyAnLCBpbnZhbGlkIE1lZGlhRmlsZSc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwgPSBQUkVGSVggKyAnLCBpbnZhbGlkIGNvbnRhaW5lciBIdG1sRWxlbWVudCc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9WSURFT19FTCA9IFBSRUZJWCArICcsIGludmFsaWQgSFRNTFZpZGVvRWxlbWVudCc7XG5WUEFJREhUTUw1VGVjaC5NSVNTSU5HX0NBTExCQUNLID0gUFJFRklYICsgJywgbWlzc2luZyB2YWxpZCBjYWxsYmFjayc7XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNVRlY2g7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9taW1ldHlwZXMnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFJlc3BvbnNlJyk7XG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RUcmFja2VyJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi92YXN0L3Zhc3RVdGlsJyk7XG5cbnZhciBWUEFJREFkVW5pdFdyYXBwZXIgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0V3JhcHBlcicpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVlBBSURJbnRlZ3JhdG9yKSkge1xuICAgIHJldHVybiBuZXcgVlBBSURJbnRlZ3JhdG9yKHBsYXllcik7XG4gIH1cblxuICB0aGlzLlZJRVdfTU9ERSA9IHtcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxuICAgIEZVTExTQ1JFRU46IFwiZnVsbHNjcmVlblwiLFxuICAgIFRIVU1CTkFJTDogXCJ0aHVtYm5haWxcIlxuICB9O1xuICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgdGhpcy5jb250YWluZXJFbCA9IGNyZWF0ZVZQQUlEQ29udGFpbmVyRWwocGxheWVyKTtcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIHJlc3BvbnNlVGltZW91dDogNTAwMCxcbiAgICBWUEFJRF9WRVJTSU9OOiAnMi4wJ1xuICB9O1xuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIFxuICB0aGlzLmNvbnRlbnRTb3VyY2UgPSBwbGF5ZXIudGVjaF8uZWxfLnNyYztcbiAgdGhpcy5uZWVkc1Nob3dQbGF5ZXIgPSBmYWxzZTtcbiAgXG4gIHRoaXMuZXJyb3JIYXNCZWVuVHJhY2tlZCA9IGZhbHNlO1xuICB0aGlzLmFkRmluaXNoZWQgPSBmYWxzZTtcbiAgXG4gIHRoaXMudGltZVVwZGF0ZVRpbWVyID0gbnVsbDtcbiAgXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjcmVhdGVWUEFJRENvbnRhaW5lckVsKCkge1xuICAgIHZhciBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckVsLmlkID0gJ0JDLVZQQUlELWNvbnRhaW5lcic7XG4gICAgZG9tLmFkZENsYXNzKGNvbnRhaW5lckVsLCAnVlBBSUQtY29udGFpbmVyJyk7XG4gICAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lckVsLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcbiAgICByZXR1cm4gY29udGFpbmVyRWw7XG4gIH1cbn1cblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5VlBhaWRBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVEludGVncmF0b3IucGxheUFkLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1RSZXNwb25zZScpKTtcbiAgfVxuXG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICBsb2dnZXIuZGVidWcgKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGxvb2tpbmcgZm9yIHN1cHBvcnRlZCB0ZWNoLi4uXCIpO1xuICB2YXIgdGVjaCA9IHRoaXMuX2ZpbmRTdXBwb3J0ZWRUZWNoKHZhc3RSZXNwb25zZSwgdGhpcy5zZXR0aW5ncyk7XG5cbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcblxuICB0aGlzLl9hZFVuaXQgPSBudWxsO1xuXG4gIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12cGFpZC1hZCcpO1xuICBcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHRyaWdnZXJWcGFpZEFkRW5kKTtcbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpe1xuICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgdHJpZ2dlclZwYWlkQWRFbmQpO1xuICAgIHJlbW92ZUFkVW5pdCgpO1xuICB9KTtcblxuICBpZiAodGVjaCkge1xuICAgIGxvZ2dlci5pbmZvIChcIjxWUEFJREludGVncmF0b3IucGxheUFkPiBmb3VuZCB0ZWNoOiBcIiwgdGVjaCk7XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgbmV4dChudWxsLCB0ZWNoLCB2YXN0UmVzcG9uc2UpO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2xvYWRBZFVuaXQuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuX3BsYXlBZFVuaXQuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuX2ZpbmlzaFBsYXlpbmcuYmluZCh0aGlzKVxuXG4gICAgXSwgYWRDb21wbGV0ZSk7XG5cbiAgICB0aGlzLl9hZFVuaXQgPSB7XG4gICAgICBfcGF1c2VkOiB0cnVlLFxuICAgICAgdHlwZTogJ1ZQQUlEJyxcbiAgICAgIHBhdXNlQWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQucGF1c2VBZCcpO1xuICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7Ly93ZSBtYWtlIHN1cmUgdGhhdCB0aGUgdmlkZW8gY29udGVudCBnZXRzIHN0b3BwZWQuXG4gICAgICB9LFxuICAgICAgcmVzdW1lQWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5yZXN1bWVBZCcpO1xuICAgICAgfSxcbiAgICAgIGlzUGF1c2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgICAgIH0sXG4gICAgICBnZXRTcmM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGVjaC5tZWRpYUZpbGU7XG4gICAgICB9XG4gICAgfTtcblxuICB9IGVsc2Uge1xuICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VlBBSURJbnRlZ3JhdG9yLnBsYXlBZD4gY291bGQgbm90IGZpbmQgc3VpdGFibGUgdGVjaFwiKTtcbiAgICB2YXIgZXJyb3IgPSBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREludGVncmF0b3IucGxheUFkLCBjb3VsZCBub3QgZmluZCBhIHN1cHBvcnRlZCBtZWRpYUZpbGUnLCA0MDMpO1xuICAgIGFkQ29tcGxldGUoZXJyb3IsIHRoaXMuX2FkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9hZFVuaXQ7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBhZENvbXBsZXRlKGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSkge1xuICAgIGlmIChlcnJvciAmJiB2YXN0UmVzcG9uc2UpIHtcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IodmFzdFJlc3BvbnNlLCBlcnJvci5jb2RlKTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XG4gICAgY2FsbGJhY2soZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyVnBhaWRBZEVuZCgpe1xuXHQgICAgLy9wbGF5ZXIudHJpZ2dlcignc3RvcEFkJyk7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XG4gICAgaWYgKHRlY2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbQkMtTU9MXSBWUEFJREludGVncmF0b3ItPkNhbGxpbmcgdW5sb2FkQWRVbml0IChpbXBsaWNpdGx5IGludm9rZXMgc3RvcEFkIGFuZCB1bnN1YnNjcmliZXMgVlBBSUQgZXZlbnRzKScpO1xuICAgICAgdGVjaC51bmxvYWRBZFVuaXQoKTtcbiAgICB9XG4gICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLXZwYWlkLWFkJyk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2ZpbmRTdXBwb3J0ZWRUZWNoID0gZnVuY3Rpb24gKHZhc3RSZXNwb25zZSwgc2V0dGluZ3MpIHtcbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHZwYWlkTWVkaWFGaWxlcyA9IHZhc3RSZXNwb25zZS5tZWRpYUZpbGVzLmZpbHRlcih2YXN0VXRpbC5pc1ZQQUlEKTtcbiAgdmFyIHByZWZlcnJlZFRlY2ggPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5wcmVmZXJyZWRUZWNoO1xuICB2YXIgc2tpcHBlZFN1cHBvcnRUZWNocyA9IFtdO1xuICB2YXIgaSwgbGVuLCBtZWRpYUZpbGUsIFZQQUlEVGVjaCwgaXNQcmVmZXJlZFRlY2g7XG5cbiAgZm9yIChpID0gMCwgbGVuID0gdnBhaWRNZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbWVkaWFGaWxlID0gdnBhaWRNZWRpYUZpbGVzW2ldO1xuICAgIFZQQUlEVGVjaCA9IHZhc3RVdGlsLmZpbmRTdXBwb3J0ZWRWUEFJRFRlY2gobWVkaWFGaWxlLnR5cGUpO1xuXG4gICAgLy8gbm8gc3VwcG9ydGVkIFZQQUlEIHRlY2ggZm91bmQsIHNraXAgbWVkaWFmaWxlXG4gICAgaWYgKCFWUEFJRFRlY2gpIHsgY29udGludWU7IH1cblxuICAgIC8vIGRvIHdlIGhhdmUgYSBwcmVmZXJlZCB0ZWNoLCBkb2VzIGl0IHBsYXkgdGhpcyBtZWRpYSBmaWxlID9cbiAgICBpc1ByZWZlcmVkVGVjaCA9IHByZWZlcnJlZFRlY2ggP1xuICAgICAgKG1lZGlhRmlsZS50eXBlID09PSBwcmVmZXJyZWRUZWNoIHx8IChNaW1lVHlwZXNbcHJlZmVycmVkVGVjaF0gJiYgTWltZVR5cGVzW3ByZWZlcnJlZFRlY2hdLmluZGV4T2YobWVkaWFGaWxlLnR5cGUpID4gLTEgKSkgOlxuICAgICAgZmFsc2U7XG5cbiAgICAvLyBvdXIgcHJlZmVyZWQgdGVjaCBjYW4gcmVhZCB0aGlzIG1lZGlhZmlsZSwgZGVmYXVsdGluZyB0byBpdC5cbiAgICBpZiAoaXNQcmVmZXJlZFRlY2gpIHtcbiAgICAgIHJldHVybiBuZXcgVlBBSURUZWNoKG1lZGlhRmlsZSwgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIHNraXBwZWRTdXBwb3J0VGVjaHMucHVzaCh7IG1lZGlhRmlsZTogbWVkaWFGaWxlLCB0ZWNoOiBWUEFJRFRlY2ggfSk7XG4gIH1cblxuICBpZiAoc2tpcHBlZFN1cHBvcnRUZWNocy5sZW5ndGgpIHtcbiAgICB2YXIgZmlyc3RUZWNoID0gc2tpcHBlZFN1cHBvcnRUZWNoc1swXTtcbiAgICByZXR1cm4gbmV3IGZpcnN0VGVjaC50ZWNoKGZpcnN0VGVjaC5tZWRpYUZpbGUsIHNldHRpbmdzKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVlBBSURBZFVuaXRXcmFwcGVyID0gZnVuY3Rpb24oYWRVbml0LCBzcmMsIHJlc3BvbnNlVGltZW91dCwgcGxheWVyKSB7XG5cdHJldHVybiBuZXcgVlBBSURBZFVuaXRXcmFwcGVyKGFkVW5pdCwge3NyYzogc3JjLCByZXNwb25zZVRpbWVvdXQ6IHJlc3BvbnNlVGltZW91dCwgcGxheWVyOiBwbGF5ZXJ9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2xvYWRBZFVuaXQgPSBmdW5jdGlvbiAodGVjaCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdmpzVGVjaEVsID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIC8vdmFyIHJlc3BvbnNlVGltZW91dCA9IHRoaXMuc2V0dGluZ3MucmVzcG9uc2VUaW1lb3V0IHx8IHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQ7XG4gIHZhciByZXNwb25zZVRpbWVvdXQgPSB0aGlzLnNldHRpbmdzLmFkQ2FuY2VsVGltZW91dCB8fCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0O1xuICB0ZWNoLmxvYWRBZFVuaXQodGhpcy5jb250YWluZXJFbCwgdmpzVGVjaEVsLCBmdW5jdGlvbiAoZXJyb3IsIGFkVW5pdCkge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdmFyIGZybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSUZSQU1FJyk7XG4gICAgICBpZiAoZnJtcyAmJiBmcm1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZnJtc1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiKioqKioqIHVzZXIgYWN0aXZpdHlcIik7XG4gICAgICAgICAgICBwbGF5ZXIudXNlckFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgIGlmICghZG9tLmhhc0NsYXNzKHBsYXllci5lbCgpLCAndmpzLWhhcy1zdGFydGVkJykpIHtcbiAgICAgICAgICAgICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtaGFzLXN0YXJ0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLm1lc3NhZ2UnLCBkYXRhOiB7bWVzc2FnZTogJ1BsYXlpbmcgJyArIHRlY2gubWVkaWFGaWxlLnNyYyArICcgKHR5cGUgPSAnICsgdGVjaC5tZWRpYUZpbGUudHlwZSArIFxuICAgICAgXHQgICcsIGFwaUZyYW1ld29yayA9ICcgKyB0ZWNoLm1lZGlhRmlsZS5hcGlGcmFtZXdvcmsgKyAnKSd9fSk7XG4gICAgICB2YXIgV3JhcHBlZEFkVW5pdCA9IHRoYXQuX2NyZWF0ZVZQQUlEQWRVbml0V3JhcHBlcihhZFVuaXQsIHRlY2gubWVkaWFGaWxlLnNyYywgcmVzcG9uc2VUaW1lb3V0LCBwbGF5ZXIpO1xuICAgICAgdmFyIHRlY2hDbGFzcyA9ICd2anMtJyArIHRlY2gubmFtZSArICctYWQnO1xuICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCB0ZWNoQ2xhc3MpO1xuICAgICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLHRlY2hDbGFzcyk7XG4gICAgICB9KTtcbiAgICAgIG5leHQobnVsbCwgV3JhcHBlZEFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuZXh0KGUsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fcGxheUFkVW5pdCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfSxcbiAgICB0aGlzLl9oYW5kc2hha2UuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2luaXRBZC5iaW5kKHRoaXMpLFxuICAgIC8vdGhpcy5fc2V0dXBFdmVudHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRTa2lwQnV0dG9uLmJpbmQodGhpcyksXG4gICAgdGhpcy5fbGlua1BsYXllckNvbnRyb2xzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fc3RhcnRBZC5iaW5kKHRoaXMpXG4gIF0sIGNhbGxiYWNrKTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2hhbmRzaGFrZSA9IGZ1bmN0aW9uIGhhbmRzaGFrZShhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICBhZFVuaXQuaGFuZHNoYWtlVmVyc2lvbih0aGlzLm9wdGlvbnMuVlBBSURfVkVSU0lPTiwgZnVuY3Rpb24gKGVycm9yLCB2ZXJzaW9uKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmIGlzU3VwcG9ydGVkVmVyc2lvbih2ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5faGFuZHNoYWtlLCB1bnN1cHBvcnRlZCB2ZXJzaW9uIFwiJyArIHZlcnNpb24gKyAnXCInKSwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcblxuICBmdW5jdGlvbiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikge1xuICAgIHZhciBtYWpvck51bSA9IG1ham9yKHZlcnNpb24pO1xuICAgIHJldHVybiBtYWpvck51bSA+PSAxICYmIG1ham9yTnVtIDw9IDI7XG4gIH1cblxuICBmdW5jdGlvbiBtYWpvcih2ZXJzaW9uKSB7XG4gICAgdmFyIHBhcnRzID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuICAgIHJldHVybiBwYXJzZUludChwYXJ0c1swXSwgMTApO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9pbml0QWQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRlY2ggPSB0aGlzLnBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgZGltZW5zaW9uID0gZG9tLmdldERpbWVuc2lvbih0ZWNoKTtcbiAgYWRVbml0LmluaXRBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIHRoaXMuVklFV19NT0RFLk5PUk1BTCwgLTEsIHtBZFBhcmFtZXRlcnM6IHZhc3RSZXNwb25zZS5hZFBhcmFtZXRlcnMgfHwgJyd9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSkge1xuICByZXR1cm4gbmV3IFZBU1RUcmFja2VyKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBhZFVuaXRTcmMgPSBhZFVuaXQub3B0aW9ucy5zcmM7XG4gIHZhciB0cmFja2VyID0gdGhpcy5fY3JlYXRlVkFTVFRyYWNrZXIoYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciBjb250ZW50U291cmNlID0gdGhpcy5jb250ZW50U291cmNlO1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIFxuICB0aGlzLnRyYWNrZXIgPSB0cmFja2VyO1xuICBcbiAgdGhpcy5pbXByZXNzaW9uVHJpZ2dlcmVkID0gZmFsc2U7XG5cbiAgYWRVbml0Lm9uKCdBZFNraXBwZWQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgXHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRTa2lwcGVkJ319KTtcblx0ICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkU2tpcHBlZCcsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwZWQnKTtcbiAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xuICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgIFxuICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgIC8vIFZJRExBLTI2NzYgLSBmb3JjZSBwbGF5ZXIgdG8gY2xlYW4gcmVzb3VyY2VzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZHNDYW5jZWwnKTtcbiAgICB9LCAzMDApO1xuICAgIC8vcGxheWVyLnRyaWdnZXIoJ2FkU3RvcCcpO1xuICB9KTtcblxuICBmdW5jdGlvbiB0cmlnZ2VySW1wcmVzc2lvbigpIHtcblx0ICBpZiAoIXRoYXQuaW1wcmVzc2lvblRyaWdnZXJlZCkge1xuXHRcdCAgdGhhdC5pbXByZXNzaW9uVHJpZ2dlcmVkID0gdHJ1ZTtcblx0ICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkSW1wcmVzc2lvbicsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICAgICAgfVxuXHRcdCAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkSW1wcmVzc2lvbid9fSk7XG5cdFx0ICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRJbXByZXNzaW9uJyk7XG5cdFx0ICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcblx0ICB9XG4gIH1cbiAgYWRVbml0Lm9uKCdBZEltcHJlc3Npb24nLCBmdW5jdGlvbiAoKSB7XG5cdCAgdHJpZ2dlckltcHJlc3Npb24oKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFN0YXJ0ZWQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKGFkVW5pdC5hZFN0YXJ0ZWQpIHtcblx0XHQgIC8vIGlnbm9yZSBzZWNvbmQgQWRTdGFydGVkIGV2ZW50XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuICAgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZy5pbml0KHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHkuY29udGV4dElkLCBcbiAgICAgICAgICBwbGF5ZXIuZHVyYXRpb24oKSwgcGxheWVyLmVsXy5vZmZzZXRXaWR0aCwgcGxheWVyLmVsXy5vZmZzZXRIZWlnaHQpO1xuICAgIH1cbiAgICBhZFVuaXQuYWRTdGFydGVkID0gdHJ1ZTtcbiAgICBpZiAoIWRvbS5oYXNDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1oYXMtc3RhcnRlZCcpKSB7XG4gICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtaGFzLXN0YXJ0ZWQnKTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RhcnRlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcbiAgICBpZiAoIXdpbmRvdy5fbW9sU2V0dGluZ3MucGxheXNJbkJyZWFrICYmIGFkVW5pdC5nZXRBZER1cmF0aW9uKSB7XG4gICAgICBhZFVuaXQuZ2V0QWREdXJhdGlvbihmdW5jdGlvbih0aGF0LCBkdXIpIHtcbiAgICAgICAgaWYgKGR1ciA+IDApIHtcbiAgICAgICAgICBwbGF5ZXIuZHVyYXRpb24oZHVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICBcdHRyaWdnZXJJbXByZXNzaW9uKCk7XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gICAgcGxheWVyLm9uZSgnYWRTdG9wJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYWRVbml0LnN0b3BBZCkge1xuICAgICAgICBhZFVuaXQuc3RvcEFkKHV0aWxpdGllcy5ub29wKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XG4gICAgXHQvLyBWSURMQS0yODM2IChBZCBjbGljayB0aHJ1IGRvZXMgbm90IGxhbmRpbmcgY2xpY2sgdGhydSB1cmwpXG4gICAgXHQvLyBpUGhvbmUgYW5kIGlQYWRcbiAgICBcdHZhciBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Zqcy1yZXNpemUtbWFuYWdlcicpO1xuICAgIFx0aWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCA+IDApIHtcbiAgICBcdFx0dmFyIHBhcmVudCA9IGVsZW1zWzBdLnBhcmVudEVsZW1lbnQ7XG4gICAgXHRcdGlmIChwYXJlbnQpIHtcbiAgICBcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbXNbMF0pO1xuICAgIFx0XHR9XG4gICAgXHR9XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRpbWVDb250cm9scygpIHtcblx0ICBcdHZhciBjb252ZXJ0VGltZVRvU3RyID0gZnVuY3Rpb24odGltZSkge1xuXHRcdFx0dmFyIHNlY3MgPSBwYXJzZUludCh0aW1lICsgMC41KTtcblx0XHRcdHZhciBtaW5zID0gcGFyc2VJbnQoc2VjcyAvIDYwKTtcblx0XHRcdHNlY3MgLT0gKG1pbnMgKiA2MCk7XG5cdFx0XHR2YXIgc3RyID0gbWlucy50b1N0cmluZygpICsgJzonICsgKHNlY3MgPiA5ID8gJycgIDogJzAnKSArIHNlY3MudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fTtcblx0XHRcblx0XHR2YXIgYmNUaW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiY190aW1lX2Rpc3BsYXknKTtcblx0XHRpZiAoIWJjVGltZURpc3BsYXkpIHtcblx0XHRcdGJjVGltZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdjdXJyZW50VGltZURpc3BsYXknKS5lbF8uYXBwZW5kQ2hpbGQoYmNUaW1lRGlzcGxheSk7XG5cdFx0XHRiY1RpbWVEaXNwbGF5LmlkID0gJ2JjX3RpbWVfZGlzcGxheSc7XG5cdFx0XHRiY1RpbWVEaXNwbGF5LmNsYXNzID0gJ3Zqcy1jdXJyZW50LXRpbWUtZGlzcGxheSc7XG5cdFx0XHRiY1RpbWVEaXNwbGF5WydhcmlhLWxpdmUnXSA9ICdvZmYnO1xuXHRcdFx0YmNUaW1lRGlzcGxheS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ2anMtY29udHJvbC10ZXh0XCI+PC9zcGFuPjA6MDAnO1xuICAgICAgc2hvd09yaWdpbmFsVGltZURpc3BsYXkocGxheWVyLCBmYWxzZSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuICAgICAgc2hvd09yaWdpbmFsVGltZURpc3BsYXkocGxheWVyLCBmYWxzZSk7XG5cdFx0XHRiY1RpbWVEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdH1cblx0XHRhZFVuaXQuZ2V0QWRSZW1haW5pbmdUaW1lKGZ1bmN0aW9uKHRoYXQsIHRpbWUpIHtcblx0XHRcdGlmICh0aW1lID49IDApIHtcblx0XHRcdFx0dmFyIGN1clRpbWUgPSBwbGF5ZXIuZHVyYXRpb24oKSAtIHRpbWU7XG5cdFx0XHRcdGlmIChjdXJUaW1lID49IDApIHtcblx0XHRcdFx0XHRiY1RpbWVEaXNwbGF5LmNoaWxkTm9kZXNbMV0ubm9kZVZhbHVlID0gY29udmVydFRpbWVUb1N0cihjdXJUaW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuICB9XG5cdCAgXG4gIGFkVW5pdC5vbignQWRWaWRlb1N0YXJ0JywgZnVuY3Rpb24gKCkge1xuXHQgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICdBZFZpZGVvU3RhcnQnfX0pO1xuICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvU3RhcnQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICB9XG5cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb1N0YXJ0Jyk7XG4gICAgdHJhY2tlci50cmFja1N0YXJ0KCk7XG5cdGlmICghd2luZG93Ll9tb2xTZXR0aW5ncy5wbGF5c0luQnJlYWsgJiYgYWRVbml0LmdldEFkRHVyYXRpb24pIHtcblx0XHRhZFVuaXQuZ2V0QWREdXJhdGlvbihmdW5jdGlvbih0aGF0LCBkdXIpIHtcblx0XHRcdGlmIChkdXIgPiAwKSB7XG5cdFx0XHRcdHBsYXllci5kdXJhdGlvbihkdXIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgaWYgKHV0aWxpdGllcy5pc01vYmlsZSgpKSB7XG4gICAgICAgIC8vIFZJRExBLTIzMzYgKHNpbXVsYXRlIHVzZXIgYWN0aXZpdHkgdG8gbWFrZSBzdXJlIGNvbnRyb2wgYmFyIGlzIHZpc2libGUgb24gbW9iaWxlIGRldmljZXMpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJRlJBTUUnKVswXS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbW91c2VvdmVyJykpO1xuICAgICAgICBcdH0sIGkgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGVudFNvdXJjZSA9PT0gcGxheWVyLnRlY2hfLmVsXy5zcmMpIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5tZXNzYWdlJywgZGF0YToge21lc3NhZ2U6ICdWUEFJRCBjcmVhdGl2ZSB1c2VzIGl0cyBvd24gdmlkZW8gdGFnJ319KTtcbiAgICAgICAgLy9wbGF5ZXIudGVjaF8uZWxfLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIC8vcGxheWVyLmNvbnRyb2xCYXIuaGlkZSgpO1xuICAgICAgICB0aGF0Lm5lZWRzU2hvd1BsYXllciA9IHRydWU7XG4gICAgXHRpZiAoIXdpbmRvdy5fbW9sU2V0dGluZ3MucGxheXNJbkJyZWFrKSB7XG4gICAgXHRcdHRoYXQudGltZVVwZGF0ZVRpbWVyID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZUNvbnRyb2xzLCA1MDApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHBsYXllci5jb250cm9sQmFyLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRQbGF5aW5nJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG4gICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGxheWluZycsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRQbGF5aW5nJyk7XG4gICAgdHJhY2tlci50cmFja1Jlc3VtZSgpO1xuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xuICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkUGF1c2VkJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG4gICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGF1c2VkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBhdXNlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xuICAgIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKTtcblx0ICB2YXIgaWZyYW1lQmFja0J1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lQmFja0J1dHRvbicpO1xuXHQgIGlmIChpZnJhbWVCYWNrQnV0dG9uKSB7XG5cdFx0ICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcblx0XHQgIHJldHVybjtcblx0ICB9XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbm90aWZ5UGxheVRvUGxheWVyKCl7XG4gICAgaWYodGhhdC5fYWRVbml0ICYmIHRoYXQuX2FkVW5pdC5pc1BhdXNlZCgpKXtcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCdwbGF5Jyk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKSB7XG4gICAgaWYodGhhdC5fYWRVbml0KXtcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3BhdXNlJyk7XG4gIH1cblxuICBhZFVuaXQub24oJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVmlkZW9GaXJzdFF1YXJ0aWxlJ319KTtcbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvRmlyc3RRdWFydGlsZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9GaXJzdFF1YXJ0aWxlJyk7XG4gICAgdHJhY2tlci50cmFja0ZpcnN0UXVhcnRpbGUoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvTWlkcG9pbnQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRWaWRlb01pZHBvaW50J319KTtcbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvTWlkcG9pbnQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvTWlkcG9pbnQnKTtcbiAgICB0cmFja2VyLnRyYWNrTWlkcG9pbnQoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvVGhpcmRRdWFydGlsZScsIGZ1bmN0aW9uICgpIHtcblx0ICBpZiAodGhhdC5hZEZpbmlzaGVkKSB7XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFZpZGVvVGhpcmRRdWFydGlsZSd9fSk7XG4gICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHR3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWaWRlb1RoaXJkUXVhcnRpbGUnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvVGhpcmRRdWFydGlsZScpO1xuICAgIHRyYWNrZXIudHJhY2tUaGlyZFF1YXJ0aWxlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWaWRlb0NvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVmlkZW9Db21wbGV0ZSd9fSk7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9Db21wbGV0ZScpO1xuICAgIHRyYWNrZXIudHJhY2tDb21wbGV0ZSgpO1xuICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVmlkZW9Db21wbGV0ZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgLy8gVklETEEtMjQwNiBmb3JzZSBhZCB0byBzdG9wXG4gICAgaWYgKGFkVW5pdC5zdG9wQWQpIHtcbiAgICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZENsaWNrVGhydScsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cblx0ICB2YXIgZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lID0gZmFsc2U7XG5cdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZENsaWNrVGhydSd9fSk7XG4gICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkQ2xpY2tUaHJ1JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZENsaWNrVGhydScpO1xuICAgIHZhciB1cmwgPSBkYXRhLnVybDtcbiAgICB2YXIgcGxheWVySGFuZGxlcyA9IGRhdGEucGxheWVySGFuZGxlcztcbiAgICB2YXIgY2xpY2tUaHJ1VXJsID0gdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsKSA/IHVybCA6IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHZhc3RSZXNwb25zZS5jbGlja1Rocm91Z2gpO1xuXG5cdGlmIChwbGF5ZXJIYW5kbGVzICYmIHdpbmRvdy5fbW9sU2V0dGluZ3MuZGlzYWJsZUNsaWNrVGhydSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRcbiAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcbiAgICBpZiAocGxheWVySGFuZGxlcyAmJiBjbGlja1RocnVVcmwpIHtcbiAgICBcdGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgJiYgZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lKSB7XG4gICAgXHRcdGFkZENsaWNrVGhyb3VnaERpdkJsb2NrZXIoY2xpY2tUaHJ1VXJsKTtcbiAgICBcdH1cbiAgICBcdGVsc2Uge1xuICAgIFx0XHR3aW5kb3cub3BlbihjbGlja1RocnVVcmwsICdfYmxhbmsnKTtcbiAgICBcdH1cbiAgICB9XG4gICAgXG4gICAgLy8gVklETEEtMjI2OSAoQWQgZG9lcyBub3QgcGF1c2Ugd2hlbiBicm93c2luZyBvdXQgdG8gYSBjbGljayB1cmwgZnJvbSBhIHZwYWlkIGFkKVxuICAgIGFkVW5pdC5wYXVzZUFkKHV0aWxpdGllcy5ub29wKTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvKSB7XG4gICAgICB2YXIgdmFyaWFibGVzID0ge1xuICAgICAgICBBU1NFVFVSSTogYWRVbml0Lm9wdGlvbnMuc3JjLFxuICAgICAgICBDT05URU5UUExBWUhFQUQ6IDAgLy9JbiBWUEFJRCB0aGVyZSBpcyBubyBtZXRob2QgdG8ga25vdyB0aGUgY3VycmVudCB0aW1lIGZyb20gdGhlIGFkVW5pdFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6IG51bGw7XG4gICAgfVxuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlckFjY2VwdEludml0YXRpb24nLCBmdW5jdGlvbiAoKSB7XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVXNlckFjY2VwdEludml0YXRpb24nfX0pO1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyk7XG4gICAgdHJhY2tlci50cmFja0FjY2VwdEludml0YXRpb24oKTtcbiAgICB0cmFja2VyLnRyYWNrQWNjZXB0SW52aXRhdGlvbkxpbmVhcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlckNsb3NlJywgZnVuY3Rpb24gKCkge1xuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFVzZXJDbG9zZSd9fSk7XG5cdCAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHQgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFVzZXJDbG9zZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJDbG9zZScpO1xuICAgIHRyYWNrZXIudHJhY2tDbG9zZSgpO1xuICAgIHRyYWNrZXIudHJhY2tDbG9zZUxpbmVhcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlck1pbmltaXplJywgZnVuY3Rpb24gKCkge1xuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFVzZXJNaW5pbWl6ZSd9fSk7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlck1pbmltaXplJyk7XG4gICAgdHJhY2tlci50cmFja0NvbGxhcHNlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRFcnJvcicsIGZ1bmN0aW9uICgpIHtcblx0ICBpZiAodGhhdC5hZEZpbmlzaGVkKSB7XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuXHQgIC8vIFZJRExBLTIzODkgc3VwcHJlc3MgZXJvciB0cmFja2luZyBhZnRlciBhZCBpbXByZXNzaW9uIGhhcyBiZWVuIHJlcG9ydGVkXG5cdCAgaWYgKCF0aGF0LmltcHJlc3Npb25UcmlnZ2VyZWQgJiYgIXRoYXQuZXJyb3JIYXNCZWVuVHJhY2tlZCkge1xuXHRcdCAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkRXJyb3InfX0pO1xuXHQgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcblx0ICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRFcnJvcicsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0ICAgICAgfVxuXHQgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRFcnJvcicpO1xuXHQgICAgLy9OT1RFOiB3ZSB0cmFjayBlcnJvcnMgY29kZSA5MDEsIGFzIG5vdGVkIGluIFZBU1QgMy4wXG5cdCAgICB0cmFja2VyLnRyYWNrRXJyb3JXaXRoQ29kZSg5MDEpO1xuXHQgICAgdGhhdC5lcnJvckhhc0JlZW5UcmFja2VkID0gdHJ1ZTtcblx0ICB9XG5cdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWb2x1bWVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJ319KTtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcbiAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcbiAgICBhZFVuaXQuZ2V0QWRWb2x1bWUoZnVuY3Rpb24gKGVycm9yLCBjdXJyZW50Vm9sdW1lKSB7XG4gICAgICBpZiAobGFzdFZvbHVtZSAhPT0gY3VycmVudFZvbHVtZSkge1xuICAgICAgICBpZiAoY3VycmVudFZvbHVtZSA9PT0gMCAmJiBsYXN0Vm9sdW1lID4gMCkge1xuICAgICAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFZvbHVtZSA+IDAgJiYgbGFzdFZvbHVtZSA9PT0gMCkge1xuICAgICAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllci52b2x1bWUoY3VycmVudFZvbHVtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRTaXplQ2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmIChwbGF5ZXIudmFzdCAmJiBwbGF5ZXIudmFzdC5uZWVkU3luY1BsYXkpIHtcblx0XHQgIGlmIChwbGF5ZXIucGF1c2VkKCkgIT09IHBsYXllci50ZWNoXy5lbF8ucGF1c2VkKSB7XG4gICAgICAgIC8vIGFkIHVzZXMgbWFpbiBjb250ZW50IHRhZ1xuICAgICAgICBpZiAoY29udGVudFNvdXJjZSAhPSBwbGF5ZXIudGVjaF8uZWxfLnNyYykge1xuICAgICAgICAgIGlmIChwbGF5ZXIudGVjaF8uZWxfLnBhdXNlZCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGF1c2VkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm90aWZ5UGF1c2VUb1BsYXllcigpO1xuICAgICAgICAgICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRQbGF5aW5nJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gICAgICAgICAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblx0XHQgIH1cblx0XHQgIHBsYXllci52YXN0Lm5lZWRTeW5jUGxheSA9IGZhbHNlO1xuXHQgIH0gXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFkZENsaWNrVGhyb3VnaERpdkJsb2NrZXIoY2xpY2tUaHJ1VXJsKSB7XG5cdCAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hEaXYocGxheWVyLCBjbGlja1RocnVVcmwpO1xuXHQgIHZhciBpRnJhbWU7XG5cdCAgdmFyIGlGcmFtZUJhY2tCdXR0b247XG5cblx0ICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG5cblx0ICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVEaXNwbGF5U3R5bGUpO1xuXG5cdCAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoRGl2KHBsYXllciwgdXJsKSB7XG5cdCAgICB2YXIgYmxvY2tlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdCAgICBkb20uYWRkQ2xhc3MoYmxvY2tlciwgJ3Zhc3QtYmxvY2tlcicpO1xuXG5cdCAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkQ2xpY2tUaHJ1JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHQgICAgfVxuICAgICAgXG5cdCAgICAvLyBjcmVhdGUgSUZyYW1lIHdpdGggYmFjayBidXR0b25cblx0ICAgIGlGcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXHQgICAgZG9tLmFkZENsYXNzKGlGcmFtZSwgJ3Zhc3QtYmxvY2tlcicpO1xuXHQgICAgaUZyYW1lLnNyYyA9IHVybDtcblx0ICAgIGJsb2NrZXIuYXBwZW5kQ2hpbGQoaUZyYW1lKTtcblx0ICBcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ICAgIGRvbS5hZGRDbGFzcyhpRnJhbWVCYWNrQnV0dG9uLCBcInZhc3QtYmFjay1idXR0b25cIik7XG5cdCAgICBkb20uYWRkQ2xhc3MoaUZyYW1lQmFja0J1dHRvbiwgJ2VuYWJsZWQnKTtcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24uaW5uZXJIVE1MID0gXCJCYWNrXCI7XG5cdCAgICBpRnJhbWVCYWNrQnV0dG9uLmlkID0gJ2lmcmFtZUJhY2tCdXR0b24nO1xuXHQgICAgYmxvY2tlci5hcHBlbmRDaGlsZChpRnJhbWVCYWNrQnV0dG9uKTtcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0ICAvLyBzaG93IGNvbnRyb2xzXG5cdFx0ICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcblx0XHQgIH1cblx0XHQgIHBsYXllci5jb250cm9scyh0cnVlKTtcblx0XHQgIFxuXHRcdCAgcGxheWVyLmVsKCkucmVtb3ZlQ2hpbGQoYmxvY2tlcik7XG5cdFx0ICByZXN1bWVBZFVuaXQoKTtcblx0XHQgIFxuXHRcdCAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ICB9XG5cdCAgICB9KTtcblx0XHQgIFxuXHQgICAgLy8gaGlkZSBjb250cm9sc1xuXHQgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHQgICAgfSwgMSk7XG5cdCAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdCAgICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcblx0ICAgIH1cblx0ICAgIHBsYXllci5jb250cm9scyhmYWxzZSk7XG5cblx0ICAgIHJldHVybiBibG9ja2VyO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlTdHlsZSgpIHtcblx0XHQgIGlmICghcGxheWVyLmlzRnVsbHNjcmVlbigpKSB7XHRcdFx0ICBcblx0XHRcdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcblx0XHRcdCAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuXHRcdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG5cdFx0XHQgIH1cblx0XHRcdCAgcGxheWVyLmNvbnRyb2xzKHRydWUpO1xuXHRcdFx0ICBwbGF5ZXIuZWwoKS5yZW1vdmVDaGlsZChibG9ja2VyKTtcblx0XHRcdCAgcmVzdW1lQWRVbml0KCk7XG5cdFx0ICB9XG5cdCAgfVxuICB9XG5cbiAgdmFyIHVwZGF0ZVZpZXdTaXplID0gcmVzaXplQWQuYmluZCh0aGlzLCBwbGF5ZXIsIGFkVW5pdCwgdGhpcy5WSUVXX01PREUpO1xuICB2YXIgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQgPSB1dGlsaXRpZXMudGhyb3R0bGUodXBkYXRlVmlld1NpemUsIDEwMCk7XG4gIHZhciBhdXRvUmVzaXplID0gdGhpcy5zZXR0aW5ncy5hdXRvUmVzaXplO1xuXG4gIGlmIChhdXRvUmVzaXplKSB7XG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICB9XG5cbiAgcGxheWVyLm9uKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgcGxheWVyLm9uKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICBwbGF5ZXIub24oJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcbiAgcGxheWVyLm9uKCdzdG9wQWQnLCBzdG9wQWRVbml0KTtcblxuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcbiAgICBwbGF5ZXIub2ZmKCdzdG9wQWQnLCBzdG9wQWRVbml0KTtcblxuICAgIGlmIChhdXRvUmVzaXplKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGF1c2VBZFVuaXQoKSB7XG4gICAgYWRVbml0LnBhdXNlQWQodXRpbGl0aWVzLm5vb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lQWRVbml0KCkge1xuICAgIGFkVW5pdC5yZXN1bWVBZCh1dGlsaXRpZXMubm9vcCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHN0b3BBZFVuaXQoKSB7XG4gICAgaWYgKGFkVW5pdC5zdG9wQWQpIHtcbiAgICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgIH1cbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgc2tpcEJ1dHRvbjtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdHJhY2tlciA9IHRoaXMudHJhY2tlcjtcblxuICAvLyBWSURMQS0yMDg0IChwdWJsaXNoZXItc3BlY2lmaWVkIFNLSVAgYmVoYXZpb3IgZm9yIFZQQUlEIGNyZWF0aXZlcylcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgc2tpcE9mZnNldEluU2VjO1xuICB2YXIgZHVyYXRpb247XG4gIHZhciByZW1haW5pbmdUaW1lO1xuICB2YXIgcHJvZ3Jlc3NJbnRlcnZhbDtcbiAgaWYgKCF3aW5kb3cuX21vbFNldHRpbmdzLmRpc2FibGVTa2lwcGFiaWxpdHkpIHtcblx0ICBpZiAodmFzdFJlc3BvbnNlLnNraXBvZmZzZXQgJiYgdXRpbGl0aWVzLmlzTnVtYmVyKHZhc3RSZXNwb25zZS5za2lwb2Zmc2V0KSkge1xuXHRcdCAgc2tpcE9mZnNldEluU2VjID0gdmFzdFJlc3BvbnNlLnNraXBvZmZzZXQgLyAxMDAwO1xuXHRcdCAgcHViQWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldEluU2VjKTtcblx0ICB9XG5cdCAgZWxzZSB7XG5cdFx0ICAvLyBjaGVjayBpZiBwdWJsaXNoZXIgaGFkIGV4cGxpY2l0bHkgZGlzYWJsZSBza2lwcGFiaWxpdHlcblx0XHQgIHZhciBkaXNhYmxlU2tpcHBhYmlsaXR5QnlQdWJsaXNoZXIgPSBmYWxzZTtcblx0XHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlKSB7XG5cdFx0XHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS5lbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHQgIGRpc2FibGVTa2lwcGFiaWxpdHlCeVB1Ymxpc2hlciA9IHRydWU7IFxuXHRcdFx0ICB9XG5cdFx0XHQgIGlmICh2YXN0UmVzcG9uc2UuZHVyYXRpb24gJiYgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQgJiYgXG5cdFx0XHRcdCAgdmFzdFJlc3BvbnNlLmR1cmF0aW9uIDwgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQpIHtcblx0XHRcdFx0ICBkaXNhYmxlU2tpcHBhYmlsaXR5QnlQdWJsaXNoZXIgPSB0cnVlOyBcblx0XHRcdCAgfVxuXHRcdCAgfVxuXHRcdCAgaWYgKCFkaXNhYmxlU2tpcHBhYmlsaXR5QnlQdWJsaXNoZXIpIHtcblx0XHRcdCAgYWRVbml0Lm9uKCdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgdXBkYXRlU2tpcEJ1dHRvblN0YXRlKTtcblx0XHRcdCAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcblx0XHQgIH1cblx0ICB9XG4gIH1cblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwYWJsZVN0YXRlQ2hhbmdlJyk7XG4gICAgYWRVbml0LmdldEFkU2tpcHBhYmxlU3RhdGUoZnVuY3Rpb24gKGVycm9yLCBpc1NraXBwYWJsZSkge1xuICAgICAgaWYgKGlzU2tpcHBhYmxlKSB7XG4gICAgICAgIGlmICghc2tpcEJ1dHRvbikge1xuICAgICAgICAgIGFkZFNraXBCdXR0b24ocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihwbGF5ZXIpIHtcbiAgICBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcbiAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuICAgIHNraXBCdXR0b24gPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbigpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwiZW5hYmxlZFwiKTtcbiAgICAvL3NraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGFkXCI7XG4gICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBCdXR0b25UZXh0O1xuICAgIHNraXBCdXR0b24uaWQgPSAnYWRTa2lwQnV0dG9uJztcblxuICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGFkVW5pdC5nZXRBZFNraXBwYWJsZVN0YXRlKGZ1bmN0aW9uIChlcnJvciwgaXNTa2lwcGFibGUpIHtcbiAgICAgICAgICAgIGlmIChpc1NraXBwYWJsZSkge1xuICAgICAgICAgICAgICAgIGFkVW5pdC5za2lwQWQodXRpbGl0aWVzLm5vb3ApOy8vV2Ugc2tpcCB0aGUgYWRVbml0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXHR0cmFja2VyLnRyYWNrU2tpcCgpO1xuICAgICAgICAgICAgICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgLy9hZFVuaXQuc2tpcEFkKHV0aWxpdGllcy5ub29wKTsvL1dlIHNraXAgdGhlIGFkVW5pdFxuXG4gICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNraXBCdXR0b247XG4gIH1cblx0XG5cdC8vIFZJRExBLTIwODQgKHB1Ymxpc2hlci1zcGVjaWZpZWQgU0tJUCBiZWhhdmlvciBmb3IgVlBBSUQgY3JlYXRpdmVzKVxuXHQvLyBFTiAtIHN1cHBvcnQgcHVibGlzaGVyIFNLSVAgc2V0dGluZ3Ncblx0LyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG5cdGZ1bmN0aW9uIHB1YkFkZFNraXBCdXR0b25Ub1BsYXllcihwbGF5ZXIsIHNraXBPZmZzZXQpIHtcblx0ICB2YXIgc2tpcEJ1dHRvbiA9IHB1YkNyZWF0ZVNraXBCdXR0b24ocGxheWVyKTtcblx0ICB2YXIgdXBkYXRlU2tpcEJ1dHRvbiA9IHB1YlVwZGF0ZVNraXBCdXR0b25TdGF0ZS5iaW5kKHRoYXQsIHNraXBCdXR0b24sIHNraXBPZmZzZXQpO1xuXHRcblx0ICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcblx0ICAvL3BsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xuXHQgIHByb2dyZXNzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVTa2lwQnV0dG9uLCA1MDApO1xuXHRcblx0ICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHB1YlJlbW92ZVNraXBCdXR0b24pO1xuXHRcblx0ICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xuXHQgICAgLy9wbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG5cdCAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuXHQgICAgc2tpcEJ1dHRvbiA9IG51bGw7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBwdWJSZW1vdmVTa2lwQnV0dG9uKCkge1xuXHRcdCAgaWYgKHByb2dyZXNzSW50ZXJ2YWwpIHtcblx0XHRcdCAgY2xlYXJJbnRlcnZhbChwcm9ncmVzc0ludGVydmFsKTtcblx0XHRcdCAgcHJvZ3Jlc3NJbnRlcnZhbCA9IG51bGw7XG5cdFx0ICB9XG5cdFx0ICByZW1vdmVTa2lwQnV0dG9uKCk7XG5cdCAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBwdWJDcmVhdGVTa2lwQnV0dG9uKHBsYXllcikge1xuXHQgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdCAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcblx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgc2tpcEJ1dHRvbi5pZCA9ICdhZFNraXBCdXR0b24nO1xuXHRcblx0ICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKGRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG5cdCAgICAgICAgYWRVbml0LmdldEFkU2tpcHBhYmxlU3RhdGUoZnVuY3Rpb24gKGVycm9yLCBpc1NraXBwYWJsZSkge1xuICAgICAgICAgICAgICAgIGFkVW5pdC5za2lwQWQodXRpbGl0aWVzLm5vb3ApOy8vV2Ugc2tpcCB0aGUgYWRVbml0XG5cdCAgICAgICAgICAgIGlmICghaXNTa2lwcGFibGUpIHtcblx0ICAgICAgICAgICAgXHR0cmFja2VyLnRyYWNrU2tpcCgpO1xuXHQgICAgICAgICAgICAgICAgYWRVbml0LnN0b3BBZCh1dGlsaXRpZXMubm9vcCk7XG5cdCAgICAgICAgICAgIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQgICAgICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XG5cdCAgICAgICAgICAgIFx0fSwgMSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIC8vYWRVbml0LnNraXBBZCh1dGlsaXRpZXMubm9vcCk7Ly9XZSBza2lwIHRoZSBhZFVuaXRcblx0ICAgIH1cblx0ICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHRcblx0ICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXG5cdCAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH07XG5cdFxuXHQgIHJldHVybiBza2lwQnV0dG9uO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBwdWJVcGRhdGVTa2lwQnV0dG9uU3RhdGUoc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCkge1xuXHRcdC8vdmFyIHRpbWVMZWZ0ID0gTWF0aC5jZWlsKHNraXBPZmZzZXQgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSk7XG5cdFx0YWRVbml0LmdldEFkRHVyYXRpb24oZnVuY3Rpb24odGhhdCwgZHVyKSB7XG5cdFx0XHRpZiAoZHVyID4gMCkge1xuXHRcdFx0XHRkdXJhdGlvbiA9IGR1cjtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRhZFVuaXQuZ2V0QWRSZW1haW5pbmdUaW1lKGZ1bmN0aW9uKHRoYXQsIHRpbWUpIHtcblx0XHRcdHJlbWFpbmluZ1RpbWUgPSB0aW1lOyBcblx0XHR9KTtcblx0XHRpZiAoIWR1cmF0aW9uIHx8ICFyZW1haW5pbmdUaW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vY29uc29sZS5sb2coXCIqKioqKio6IHNraXBPZmZzZXQgPSBcIiArIHNraXBPZmZzZXQgKyBcIiwgZHVyYXRpb24gPSBcIiArIGR1cmF0aW9uICsgXCIsIHJlbWFpbmluZ1RpbWUgPSBcIiArIHJlbWFpbmluZ1RpbWUpO1xuXHRcdC8vdmFyIHJlbWFpbmluZ1RpbWUgPSBhZFVuaXQuX2FkVW5pdC5nZXRBZFJlbWFpbmluZ1RpbWUoKTtcblx0XHR2YXIgdGltZUxlZnQgPSBNYXRoLmNlaWwoc2tpcE9mZnNldCAtIChkdXJhdGlvbiAtIHJlbWFpbmluZ1RpbWUpKTtcblx0ICBpZiAodGltZUxlZnQgPiAwKSB7XG5cdCAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwidmFzdC1za2lwLWJ1dHRvbi10ZXh0XCI+JyArIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcFRleHQucmVwbGFjZSgnJSVUSU1FJSUnLCB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyh0aW1lTGVmdCwgMikpICsgJzwvcD4nO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBpZiAoIWRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG5cdCAgICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpO1xuXHQgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcEJ1dHRvblRleHQ7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHZhciBpZnJhbWVCYWNrQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVCYWNrQnV0dG9uJyk7XG5cdCAgaWYgKCFpZnJhbWVCYWNrQnV0dG9uKSB7XG5cdFx0ICBpZiAocGxheWVyLmlzRnVsbHNjcmVlbigpICYmIHV0aWxpdGllcy5pc0FuZHJvaWQoKSkge1xuXHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHQgIHJldHVybjtcblx0XHQgIH1cblx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdCAgfVxuXHQgIC8vc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbGlua1BsYXllckNvbnRyb2xzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgbGlua1ZvbHVtZUNvbnRyb2wodGhpcy5wbGF5ZXIsIGFkVW5pdCk7XG4gIGxpbmtGdWxsU2NyZWVuQ29udHJvbCh0aGlzLnBsYXllciwgYWRVbml0LCB0aGlzLlZJRVdfTU9ERSk7XG5cbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBsaW5rVm9sdW1lQ29udHJvbChwbGF5ZXIsIGFkVW5pdCkge1xuICAgIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcbiAgICBhZFVuaXQub24oJ0FkVm9sdW1lQ2hhbmdlJywgdXBkYXRlUGxheWVyVm9sdW1lKTtcblxuICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcGxheWVyLm9mZigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcbiAgICB9KTtcblxuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUFkVW5pdFZvbHVtZSgpIHtcbiAgICAgIHZhciB2b2wgPSBwbGF5ZXIubXV0ZWQoKSA/IDAgOiBwbGF5ZXIudm9sdW1lKCk7XG4gICAgICBhZFVuaXQuc2V0QWRWb2x1bWUodm9sLCBsb2dFcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheWVyVm9sdW1lKCkge1xuXHQgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHRcdCAgXHR3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWb2x1bWVDaGFuZ2UnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgfVxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJyk7XG4gICAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcbiAgICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIHZvbCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBsb2dFcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxhc3RWb2x1bWUgIT09IHZvbCkge1xuICAgICAgICAgICAgcGxheWVyLnZvbHVtZSh2b2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlua0Z1bGxTY3JlZW5Db250cm9sKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcbiAgICB2YXIgdXBkYXRlVmlld1NpemUgPSByZXNpemVBZC5iaW5kKHRoYXQsIHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpO1xuXG4gICAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xuXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xuICAgIH0pO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9zdGFydEFkID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIGFscmVhZHlHb3RBZFN0YXJ0ZWQgPSBhZFVuaXQuYWRTdGFydGVkO1xuXG4gIGlmIChhbHJlYWR5R290QWRTdGFydGVkKSB7XG5cdCAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xuXHQgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFN0YXJ0ZWQnfX0pO1xuICB9XG4gIGFkVW5pdC5zdGFydEFkKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmICghZXJyb3IgJiYgIWFscmVhZHlHb3RBZFN0YXJ0ZWQpIHtcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcbiAgICB9XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2ZpbmlzaFBsYXlpbmcgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGFkVW5pdC5vbignQWRTdG9wcGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRTdG9wcGVkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICB9XG4gICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTdG9wcGVkJyk7XG4gICBmaW5pc2hQbGF5aW5nQWQobnVsbCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRFcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICBpZiAodGhhdC5pbXByZXNzaW9uVHJpZ2dlcmVkKSB7XG4gICAgICAgIGZpbmlzaFBsYXlpbmdBZChudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgXHR2YXIgZXJyTXNnID0gZXJyb3I/IGVycm9yLm1lc3NhZ2UgOiAnb24gVlBBSURJbnRlZ3JhdG9yLCBlcnJvciB3aGlsZSB3YWl0aW5nIGZvciB0aGUgYWRVbml0IHRvIGZpbmlzaCBwbGF5aW5nJztcbiAgICAgICAgZmluaXNoUGxheWluZ0FkKG5ldyBWQVNURXJyb3IoZXJyTXNnKSk7XG4gICAgfVxuICB9KTtcblxuICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIHZhciBuZWVkc1Nob3dQbGF5ZXIgPSB0aGlzLm5lZWRzU2hvd1BsYXllcjtcbiAgZnVuY3Rpb24gZmluaXNoUGxheWluZ0FkKGVycm9yKSB7XG5cdCAgdGhhdC5hZEZpbmlzaGVkID0gdHJ1ZTtcblx0XHRwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcblx0XHRpZiAobmVlZHNTaG93UGxheWVyKSB7XG5cdFx0XHRpZiAodGhhdC50aW1lVXBkYXRlVGltZXIpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVVcGRhdGVUaW1lcik7XG5cdFx0XHRcdHRoYXQudGltZVVwZGF0ZVRpbWVyID0gbnVsbDtcblx0XHRcdFx0dmFyIGJjVGltZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmNfdGltZV9kaXNwbGF5Jyk7XG5cdFx0XHRcdGlmIChiY1RpbWVEaXNwbGF5KSB7XG5cdFx0XHRcdFx0cGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5yZW1vdmVDaGlsZChiY1RpbWVEaXNwbGF5KTtcblx0XHRcdFx0fVxuICAgICAgICBzaG93T3JpZ2luYWxUaW1lRGlzcGxheShwbGF5ZXIsIHRydWUpO1xuICAgICAgfVxuXHQgICAgcGxheWVyLmNvbnRyb2xCYXIuc2hvdygpO1xuXHRcdFx0cGxheWVyLnRlY2hfLmVsXy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR9XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gdHJhY2tFcnJvcihyZXNwb25zZSwgZXJyb3JDb2RlKSB7XG5cdGlmICghdGhpcy5lcnJvckhhc0JlZW5UcmFja2VkKSB7XG5cdFx0dGhpcy5lcnJvckhhc0JlZW5UcmFja2VkID0gdHJ1ZTtcblx0XHR2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3JDb2RlIHx8IDkwMX0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBzaG93T3JpZ2luYWxUaW1lRGlzcGxheShwbGF5ZXIsIHNob3cpIHtcbiAgdmFyIGNoaWxkcmVuID0gcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5jaGlsZHJlbjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjaGlsZHJlbltpXS5pZCAhPSAnYmNfdGltZV9kaXNwbGF5Jykge1xuICAgICAgY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9IHNob3cgPyAnJyA6ICdub25lJztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplQWQocGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSkge1xuXHR2YXIgc2tpcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZFNraXBCdXR0b24nKTtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGRpbWVuc2lvbiA9IGRvbS5nZXREaW1lbnNpb24odGVjaCk7XG4gIHZhciBNT0RFID0gcGxheWVyLmlzRnVsbHNjcmVlbigpID8gVklFV19NT0RFLkZVTExTQ1JFRU4gOiBWSUVXX01PREUuTk9STUFMO1xuICBpZiAoTU9ERSA9PT0gVklFV19NT0RFLk5PUk1BTCkge1xuICAgIGlmIChwbGF5ZXIudmFzdCkge1xuICAgICAgcGxheWVyLnZhc3QubmVlZFN5bmNQbGF5ID0gdHJ1ZTtcbiAgICB9XG5cdCAgZGltZW5zaW9uLndpZHRoID0gcGxheWVyLmVsXy5vZmZzZXRXaWR0aDtcblx0ICBkaW1lbnNpb24uaGVpZ2h0ID0gcGxheWVyLmVsXy5vZmZzZXRIZWlnaHQ7XG5cdCAgaWYgKHV0aWxpdGllcy5pc0FuZHJvaWQoKSAmJiBza2lwQnV0dG9uKSB7XG5cdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHQgIH1cbiAgfVxuICBpZiAoTU9ERSA9PT0gVklFV19NT0RFLkZVTExTQ1JFRU4pIHtcblx0ICBjb25zb2xlLmxvZygnKioqKioqIHRvIGZ1bGxzY3JlZW4gZGltZW5zaW9uID0gJyArIGRpbWVuc2lvbi53aWR0aCArICcsJyArIGRpbWVuc2lvbi5oZWlnaHQpO1xuXHQgIGlmICh1dGlsaXRpZXMuaXNBbmRyb2lkKCkgJiYgc2tpcEJ1dHRvbikge1xuXHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQgIH1cbiAgfVxuICBhZFVuaXQucmVzaXplQWQoZGltZW5zaW9uLndpZHRoLCBkaW1lbnNpb24uaGVpZ2h0LCBNT0RFLCBsb2dFcnJvcik7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yKSB7XG4gIGlmIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvciAoJ0VSUk9SOiAnICsgZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURJbnRlZ3JhdG9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG5cbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbGVtZW50LmNsYXNzTmFtZSA9ICd2anMtYWRzLWxhYmVsIHZqcy1jb250cm9sIHZqcy1sYWJlbC1oaWRkZW4nO1xuZWxlbWVudC5pbm5lckhUTUwgPSAnQWR2ZXJ0aXNlbWVudCc7XG5cbnZhciBBZHNMYWJlbEZhY3RvcnkgPSBmdW5jdGlvbihiYXNlQ29tcG9uZW50KSB7XG4gIHJldHVybiB7XG4gICAgLyoqIEBjb25zdHJ1Y3RvciAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQocGxheWVyLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zLmVsID0gZWxlbWVudDtcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBXZSBhc3luY2hyb25vdXNseSByZXBvc2l0aW9uIHRoZSBhZHMgbGFiZWwgZWxlbWVudFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZUNvbXAgPSBwbGF5ZXIuY29udHJvbEJhciAmJiggcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoXCJ0aW1lckNvbnRyb2xzXCIpIHx8IHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKFwiY3VycmVudFRpbWVEaXNwbGF5XCIpICk7XG4gICAgICAgIGlmKGN1cnJlbnRUaW1lQ29tcCkge1xuICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmVsKCkuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGN1cnJlbnRUaW1lQ29tcC5lbCgpKTtcbiAgICAgICAgfVxuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ3Zqcy1sYWJlbC1oaWRkZW4nKTtcbiAgICAgIH0sIDApO1xuICAgIH0sXG5cbiAgICBlbDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRzTGFiZWxGYWN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhc2VWaWRlb0pzQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG52YXIgQWRzTGFiZWwgPSByZXF1aXJlKCcuL2Fkcy1sYWJlbCcpKGJhc2VWaWRlb0pzQ29tcG9uZW50KTtcblxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQWRzTGFiZWwnLCB2aWRlb2pzLmV4dGVuZChiYXNlVmlkZW9Kc0NvbXBvbmVudCwgQWRzTGFiZWwpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBUaGUgY29tcG9uZW50IHRoYXQgc2hvd3MgYSBibGFjayBzY3JlZW4gdW50aWwgdGhlIGFkcyBwbHVnaW4gaGFzIGRlY2lkZWQgaWYgaXQgY2FuIG9yIGl0IGNhbiBub3QgcGxheSB0aGUgYWQuXG4gKlxuICogTm90ZTogSW4gY2FzZSB5b3Ugd29uZGVyIHdoeSBpbnN0ZWFkIG9mIHRoaXMgYmxhY2sgcG9zdGVyIHdlIGRvbid0IGp1c3Qgc2hvdyB0aGUgc3Bpbm5lciBsb2FkZXIuXG4gKiAgICAgICBJT1MgZGV2aWNlcyBkbyBub3Qgd29yayB3ZWxsIHdpdGggYW5pbWF0aW9ucyBhbmQgdGhlIGJyb3dzZXIgY2hyYXNoZXMgZnJvbSB0aW1lIHRvIHRpbWUgVGhhdCBpcyB3aHkgd2UgY2hvc2UgdG9cbiAqICAgICAgIGhhdmUgYSBzZWNvbmRhcnkgYmxhY2sgcG9zdGVyLlxuICpcbiAqICAgICAgIEl0IGFsc28gbWFrZXMgaXQgbXVjaCBtb3JlIGVhc2llciBmb3IgdGhlIHVzZXJzIG9mIHRoZSBwbHVnaW4gc2luY2UgaXQgZG9lcyBub3QgY2hhbmdlIHRoZSBkZWZhdWx0IGJlaGF2aW91ciBvZiB0aGVcbiAqICAgICAgIHNwaW5uZXIgYW5kIHRoZSBwbGF5ZXIgd29ya3MgdGhlIHNhbWUgd2F5IHdpdGggYW5kIHdpdGhvdXQgdGhlIHBsdWdpbi5cbiAqXG4gKiBAcGFyYW0ge3Zqcy5QbGF5ZXJ8T2JqZWN0fSBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbnZhciBCbGFja1Bvc3RlckZhY3RvcnkgPSBmdW5jdGlvbihiYXNlQ29tcG9uZW50KSB7XG4gIHJldHVybiB7XG4gICAgLyoqIEBjb25zdHJ1Y3RvciAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQocGxheWVyLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zLmVsID0gZWxlbWVudDtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3Zqcy1ibGFjay1wb3N0ZXInO1xuICAgICAgYmFzZUNvbXBvbmVudC5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XG5cbiAgICAgIHZhciBwb3N0ZXJJbWcgPSBwbGF5ZXIuZ2V0Q2hpbGQoJ3Bvc3RlckltYWdlJyk7XG5cbiAgICAgIC8vV2UgbmVlZCB0byBkbyBpdCBhc3luY2hyb25vdXNseSB0byBiZSBzdXJlIHRoYXQgdGhlIGJsYWNrIHBvc3RlciBlbCBpcyBvbiB0aGUgZG9tLlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYocG9zdGVySW1nICYmIHBsYXllciAmJiBwbGF5ZXIuZWwoKSkge1xuICAgICAgICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShlbGVtZW50LCBwb3N0ZXJJbWcuZWwoKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH0sXG4gICAgZWw6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJsYWNrUG9zdGVyRmFjdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYXNlVmlkZW9Kc0NvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxudmFyIEJsYWNrUG9zdGVyID0gcmVxdWlyZSgnLi9ibGFjay1wb3N0ZXInKShiYXNlVmlkZW9Kc0NvbXBvbmVudCk7XG5cbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0JsYWNrUG9zdGVyJywgdmlkZW9qcy5leHRlbmQoYmFzZVZpZGVvSnNDb21wb25lbnQsIEJsYWNrUG9zdGVyKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNUQ2xpZW50ID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVENsaWVudCcpO1xudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RFcnJvcicpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvdmFzdFV0aWwnKTtcblxudmFyIFZBU1RJbnRlZ3JhdG9yID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVEludGVncmF0b3InKTtcbnZhciBWUEFJREludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yJyk7XG52YXIgSWNvbkludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvaWNvbi9JY29uSW50ZWdyYXRvcicpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgVmlld2FiaWxpdHlUcmFja2luZyA9IHJlcXVpcmUoXCIuLi91dGlscy9hblZpZGVvVmlld2FiaWxpdHlcIik7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFZBU1RQbHVnaW4ob3B0aW9ucykge1xuICB2YXIgc25hcHNob3Q7XG4gIHZhciBwbGF5ZXIgPSB0aGlzO1xuICB2YXIgdmFzdCA9IG5ldyBWQVNUQ2xpZW50KHt3cmFwcGVyTGltaXQ6IG9wdGlvbnMud3JhcHBlckxpbWl0fSk7XG4gIHZhciBhZHNDYW5jZWxlZCA9IGZhbHNlO1xuICB2YXIgcGxheWxpc3ROZXh0QnV0dG9uO1xuICB2YXIgZGVmYXVsdE9wdHMgPSB7XG4gICAgLy8gbWF4aW11bSBhbW91bnQgb2YgdGltZSBpbiBtcyB0byB3YWl0IHRvIHJlY2VpdmUgYGFkc3JlYWR5YCBmcm9tIHRoZSBhZFxuICAgIC8vIGltcGxlbWVudGF0aW9uIGFmdGVyIHBsYXkgaGFzIGJlZW4gcmVxdWVzdGVkLiBBZCBpbXBsZW1lbnRhdGlvbnMgYXJlXG4gICAgLy8gZXhwZWN0ZWQgdG8gbG9hZCBhbnkgZHluYW1pYyBsaWJyYXJpZXMgYW5kIG1ha2UgYW55IHJlcXVlc3RzIHRvIGRldGVybWluZVxuICAgIC8vIGFkIHBvbGljaWVzIGZvciBhIHZpZGVvIGR1cmluZyB0aGlzIHRpbWUuXG4gICAgdGltZW91dDogNTAwLFxuXG4gICAgLy9UT0RPOmZpbmlzaCB0aGlzIElPUyBGSVhcbiAgICAvL1doZW5ldmVyIHlvdSBwbGF5IGFuIGFkZCBvbiBJT1MsIHRoZSBuYXRpdmUgcGxheWVyIGtpY2tzIGluIGFuZCB3ZSBsb29zZSBjb250cm9sIG9mIGl0LiBPbiB2ZXJ5IGhlYXZ5IHBhZ2VzIHRoZSAncGxheScgZXZlbnRcbiAgICAvLyBNYXkgb2NjdXIgYWZ0ZXIgdGhlIHZpZGVvIGNvbnRlbnQgaGFzIGFscmVhZHkgc3RhcnRlZC4gVGhpcyBpcyB3cm9uZyBpZiB5b3Ugd2FudCB0byBwbGF5IGEgcHJlcm9sbCBhZCB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgdGhlIHVzZXJcbiAgICAvLyBzdGFydHMgd2F0Y2hpbmcgdGhlIGNvbnRlbnQuIFRvIHByZXZlbnQgdGhpcyB1c2VjXG4gICAgaW9zUHJlcm9sbENhbmNlbFRpbWVvdXQ6IDIwMDAsXG5cbiAgICAvLyBtYXhpbXVuIGFtb3VudCBvZiB0aW1lIGZvciB0aGUgYWQgdG8gYWN0dWFsbHkgc3RhcnQgcGxheWluZy4gSWYgdGhpcyB0aW1lb3V0IGdldHNcbiAgICAvLyB0cmlnZ2VyZWQgdGhlIGFkcyB3aWxsIGJlIGNhbmNlbGxlZFxuICAgIGFkQ2FuY2VsVGltZW91dDogMzAwMCxcblxuICAgIC8vIEJvb2xlYW4gZmxhZyB0aGF0IGNvbmZpZ3VyZXMgdGhlIHBsYXllciB0byBwbGF5IGEgbmV3IGFkIGJlZm9yZSB0aGUgdXNlciBzZWVzIHRoZSB2aWRlbyBhZ2FpblxuICAgIC8vIHRoZSBjdXJyZW50IHZpZGVvXG4gICAgcGxheUFkQWx3YXlzOiBmYWxzZSxcblxuICAgIC8vIEZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGFkcyBieSBkZWZhdWx0LlxuICAgIGFkc0VuYWJsZWQ6IHRydWUsXG5cbiAgICAvLyBCb29sZWFuIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIHJlc2l6ZSB3aXRoIHdpbmRvdy5yZXNpemUgb3Igb3JpZW50YXRpb25jaGFuZ2VcbiAgICBhdXRvUmVzaXplOiB0cnVlLFxuXG4gICAgLy8gdmVyYm9zaXR5IG9mIGNvbnNvbGUgbG9nZ2luZzpcbiAgICAvLyAwIC0gZXJyb3JcbiAgICAvLyAxIC0gZXJyb3IsIHdhcm5cbiAgICAvLyAyIC0gZXJyb3IsIHdhcm4sIGluZm9cbiAgICAvLyAzIC0gZXJyb3IsIHdhcm4sIGluZm8sIGxvZ1xuICAgIC8vIDQgLSBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1Z1xuICAgIHZlcmJvc2l0eTogMCxcbiAgICBcbiAgICAvLyBwbHVnaW4gb3B0aW9uc1xuICAgIHBsYXlzSW5CcmVhazogZmFsc2UsXG4gICAgc2tpcFRleHQ6ICdTa2lwIGluICUlVElNRSUlIHNlY29uZHMnLFxuICAgIHNraXBCdXR0b25UZXh0OiAnU2tpcCBhZCcsXG4gICAgaW5pdGlhbFBsYXliYWNrOiBcImF1dG9cIixcbiAgICBpbml0aWFsQXVkaW86IFwib25cIixcbiAgICBkaXNhYmxlQ2xpY2tUaHJ1OiBmYWxzZSxcbiAgICBcbiAgICBmaXJzdFBsYXk6IHRydWVcbiAgfTtcblxuICB2YXIgc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgb3B0aW9ucyB8fCB7fSk7XG4gIFxuICBpZih1dGlsaXRpZXMuaXNVbmRlZmluZWQoc2V0dGluZ3MuYWRUYWdVcmwpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MudXJsKSl7XG4gICAgc2V0dGluZ3MuYWRUYWdVcmwgPSBzZXR0aW5ncy51cmw7XG4gIH1cblxuICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKHNldHRpbmdzLmFkVGFnVXJsKSkge1xuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gdXRpbGl0aWVzLmVjaG9GbihzZXR0aW5ncy5hZFRhZ1VybCk7XG4gIH1cbiAgXG4gIGlmIChzZXR0aW5ncy52aWV3YWJpbGl0eSAmJiBzZXR0aW5ncy52aWV3YWJpbGl0eS5jb25maWcpIHtcblx0ICBzZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nID0gbmV3IFZpZXdhYmlsaXR5VHJhY2tpbmcocGxheWVyKTtcbiAgfVxuICBcbiAgd2luZG93Ll9tb2xTZXR0aW5ncyA9IHNldHRpbmdzO1xuICB3aW5kb3cuX3RpbWVvdXRJZHMgPSBbXTtcbiAgXG4gIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gbnVsbDtcblxuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1hNTCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgdGhlIHBhc3NlZCBhZFRhZ1hNTCBvcHRpb24gZG9lcyBub3QgY29udGFpbiBhIGZ1bmN0aW9uJykpO1xuICB9XG5cbiAgaWYgKCF1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oc2V0dGluZ3MuYWRUYWdYTUwpKSB7XG4gICAgcmV0dXJuIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCdvbiBWaWRlb0pTIFZBU1QgcGx1Z2luLCBtaXNzaW5nIGFkVGFnVXJsIG9uIG9wdGlvbnMgb2JqZWN0JykpO1xuICB9XG5cbiAgbG9nZ2VyLnNldFZlcmJvc2l0eSAoc2V0dGluZ3MudmVyYm9zaXR5KTtcblxuICBpZiAoIXNldHRpbmdzLnBsYXlzSW5CcmVhaykge1xuXHQgIHNuYXBzaG90ID0gcGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QocGxheWVyKTtcblx0ICBzbmFwc2hvdC5wbGF5aW5nID0gdHJ1ZTtcdC8vIGZvcmNlIHRvIHBsYXkgY29udGVudCBhZnRlciBhZCBlbmRlZFxuICB9XG4gIFxuICBpZiAoc2V0dGluZ3MuaW5pdGlhbFBsYXliYWNrID09PSAnY2xpY2snKSB7XG5cdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcbiAgfVxuXG4gIHBsYXllclV0aWxzLnByZXBhcmVGb3JBZHMocGxheWVyKTtcblxuICBpZiAoc2V0dGluZ3MucGxheUFkQWx3YXlzKSB7XG4gICAgLy8gTm8gbWF0dGVyIHdoYXQgaGFwcGVucyB3ZSBwbGF5IGEgbmV3IGFkIGJlZm9yZSB0aGUgdXNlciBzZWVzIHRoZSB2aWRlbyBhZ2Fpbi5cbiAgICBwbGF5ZXIub24oJ3Zhc3QuY29udGVudEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5yZXNldCcpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBwbGF5ZXIub24oJ3Zhc3QuZmlyc3RQbGF5JywgdHJ5VG9QbGF5UHJlcm9sbEFkKTtcblxuICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy9JZiB3ZSBhcmUgcmVzZXRpbmcgdGhlIHBsdWdpbiwgd2UgZG9uJ3Qgd2FudCB0byByZXN0b3JlIHRoZSBjb250ZW50XG4gICAgc25hcHNob3QgPSBudWxsO1xuICAgIGNhbmNlbEFkcygpO1xuICB9KTtcblxuICBwbGF5ZXIudmFzdCA9IHtcbiAgICBpc0VuYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXR0aW5ncy5hZHNFbmFibGVkO1xuICAgIH0sXG5cbiAgICBlbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXR0aW5ncy5hZHNFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBwbGF5ZXIudmFzdDtcblxuICAvKioqKiBMb2NhbCBmdW5jdGlvbnMgKioqKi9cbiAgZnVuY3Rpb24gdHJ5VG9QbGF5UHJlcm9sbEFkKCkge1xuXHQvLyBtYWtlIHN1cmUgd2UgYXJlIGdvaW5nIHRvIHVzZSBzYW1lIHBsdWdpbiBpbnN0YW5jZSB0d2ljZVxuXHRwbGF5ZXIub2ZmKCd2YXN0LmZpcnN0UGxheScsIHRyeVRvUGxheVByZXJvbGxBZCk7XG5cdFxuXHRwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcblxuXHRpZiAoc2V0dGluZ3MuaW5pdGlhbEF1ZGlvID09PSAnb2ZmJykge1xuXHRcdHNldHRpbmdzLmNvbnRlbnRWb2x1bWUgPSB7bXV0ZWQ6IHBsYXllci5tdXRlZCgpLCB2b2x1bWU6IHBsYXllci52b2x1bWUoKX07XG5cdFx0cGxheWVyLm11dGVkKHRydWUpO1xuXHR9XG5cbiAgICAvL1dlIHJlbW92ZSB0aGUgcG9zdGVyIHRvIHByZXZlbnQgZmxpY2tlcmluZyB3aGVuZXZlciB0aGUgY29udGVudCBzdGFydHMgcGxheWluZ1xuICAgIHBsYXllclV0aWxzLnJlbW92ZU5hdGl2ZVBvc3RlcihwbGF5ZXIpO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVuZCddLCBmdW5jdGlvbiAoKSB7XG4gICAgXHRwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcbiAgICAgIHJlbW92ZUFkVW5pdCgpO1xuICAgICAgcmVzdG9yZVZpZGVvQ29udGVudCgpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ2FkRmluaXNoZWQnKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIGNoZWNrQWRzRW5hYmxlZCxcbiAgICAgIHByZXBhcmVQbGF5ZXJGb3JBZCxcbiAgICAgIHN0YXJ0QWRDYW5jZWxUaW1lb3V0LFxuICAgICAgcGxheVByZXJvbGxBZFxuICAgIF0sIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0cmFja0FkRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkRW5kJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XG4gICAgICBpZiAocGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0KSB7XG4gICAgICAgIHBsYXllci52YXN0LmFkVW5pdCA9IG51bGw7IC8vV2UgcmVtb3ZlIHRoZSBhZFVuaXRcbiAgICAgICAgcGxheWVyLnZhc3QuVlBBSUQgPSBudWxsO1xuICAgICAgfVxuICAgICAgd2luZG93Ll9tb2xTZXR0aW5ncy5maXJzdFBsYXkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0b3JlVmlkZW9Db250ZW50KCkge1xuICAgICAgc2V0dXBDb250ZW50RXZlbnRzKCk7XG4gICAgICBpZiAoc25hcHNob3QpIHtcbiAgICAgICAgcGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpO1xuICAgICAgICBzbmFwc2hvdCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBDb250ZW50RXZlbnRzKCkge1xuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LnJlc2V0JywgJ3Zhc3QuZmlyc3RQbGF5J10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKGV2dC50eXBlICE9PSAncGxheWluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50U3RhcnQnKTtcblxuICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydlbmRlZCcsICd2YXN0LnJlc2V0JywgJ3Zhc3QuZmlyc3RQbGF5J10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdlbmRlZCcpIHtcbiAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmNvbnRlbnRFbmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tBZHNFbmFibGVkKG5leHQpIHtcbiAgICAgIGlmIChzZXR0aW5ncy5hZHNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0KG51bGwpO1xuICAgICAgfVxuICAgICAgbmV4dChuZXcgVkFTVEVycm9yKCdBZHMgYXJlIG5vdCBlbmFibGVkJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXBhcmVQbGF5ZXJGb3JBZChuZXh0KSB7XG4gICAgICBpZiAoY2FuUGxheVByZXJvbGxBZCgpKSB7XG4gICAgICAgIC8vc25hcHNob3QgPSBwbGF5ZXJVdGlscy5nZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpO1xuICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgYWRkU3Bpbm5lckljb24oKTtcblxuICAgICAgICBpZihwbGF5ZXIucGF1c2VkKCkpIHtcbiAgICAgICAgICBuZXh0KG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIG5leHQobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQobmV3IFZBU1RFcnJvcigndmlkZW8gY29udGVudCBoYXMgYmVlbiBwbGF5aW5nIGJlZm9yZSBwcmVyb2xsIGFkJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblBsYXlQcmVyb2xsQWQoKSB7XG4gICAgICByZXR1cm4gIXV0aWxpdGllcy5pc0lQaG9uZSgpIHx8IHBsYXllci5jdXJyZW50VGltZSgpIDw9IHNldHRpbmdzLmlvc1ByZXJvbGxDYW5jZWxUaW1lb3V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0QWRDYW5jZWxUaW1lb3V0KG5leHQpIHtcbiAgICAgIHZhciBhZENhbmNlbFRpbWVvdXRJZDtcbiAgICAgIGFkc0NhbmNlbGVkID0gZmFsc2U7XG5cbiAgICAgIGFkQ2FuY2VsVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgXHQgIGFkQ2FuY2VsVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ3RpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgdGhlIHZpZGVvIHRvIHN0YXJ0IHBsYXlpbmcnLCA0MDIpKTtcbiAgICAgICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgICAgIGlmIChwbGF5ZXIudmFzdC5WUEFJRCkge1xuICAgICAgICBcdHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xuICAgICAgICB9XG4gICAgICB9LCBzZXR0aW5ncy5hZENhbmNlbFRpbWVvdXQpO1xuXG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnLCAnY2xlYXJBZENhbmNlbFRpbWVvdXQnXSwgY2xlYXJBZENhbmNlbFRpbWVvdXQpO1xuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVycm9yJywgJ3ZwYWlkLmFkRW5kJywgJ3ZwYWlkLmFkRXJyb3InXSwgZnVuY3Rpb24oKSB7XG4gICAgXHQgIGNsZWFyQWRDYW5jZWxUaW1lb3V0KCk7XG4gICAgICB9KTtcblxuICAgICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgICAgZnVuY3Rpb24gY2xlYXJBZENhbmNlbFRpbWVvdXQoKSB7XG4gICAgICAgIGlmIChhZENhbmNlbFRpbWVvdXRJZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChhZENhbmNlbFRpbWVvdXRJZCk7XG4gICAgICAgICAgYWRDYW5jZWxUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5leHQobnVsbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3Bpbm5lckljb24oKSB7XG4gICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtdmFzdC1hZC1sb2FkaW5nJyk7XG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU3Bpbm5lckljb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVNwaW5uZXJJY29uKCkge1xuICAgICAgLy9JTVBPUlRBTlQgTk9URTogV2UgcmVtb3ZlIHRoZSBzcGlubmVySWNvbiBhc3luY2hyb25vdXNseSB0byBnaXZlIHRpbWUgdG8gdGhlIGJyb3dzZXIgdG8gc3RhcnQgdGhlIHZpZGVvLlxuICAgICAgLy8gSWYgd2UgcmVtb3ZlIGl0IHN5bmNocm9ub3VzbHkgd2Ugc2VlIGEgZmxhc2ggb2YgdGhlIGNvbnRlbnQgdmlkZW8gYmVmb3JlIHRoZSBhZCBzdGFydHMgcGxheWluZy5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdmFzdC1hZC1sb2FkaW5nJyk7XG4gICAgICAgIC8vIFZJRExBLTIyNjggKFNhZmFyaSAxMSBvbiBNYWMgLSBTcGlubmVyIGtlZXBzIGdvaW5nIG9uIGZpcnN0IGZyYW1lIG9mIGFkKVxuXHRcdHBsYXllci5sb2FkaW5nU3Bpbm5lci5lbF8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBZHMoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XG4gICAgYWRzQ2FuY2VsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheVByZXJvbGxBZChjYWxsYmFjaykge1xuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBnZXRWYXN0UmVzcG9uc2UsXG4gICAgICBwbGF5QWRcbiAgICBdLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWYXN0UmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB2YXN0LmdldFZBU1RSZXNwb25zZShzZXR0aW5ncy5hZFRhZ1VybCA/IHNldHRpbmdzLmFkVGFnVXJsKCkgOiBzZXR0aW5ncy5hZFRhZ1hNTCwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgICAvL1RPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHN0b3AgdGhlIHBsYXkuIFRoZSAncGxheVByZXJvbGxXYXRlcmZhbGwnIGVuZHMgaW4gYW4gaW5jb25zaXN0ZW50IHNpdHVhdGlvblxuICAgIC8vSWYgdGhlIHN0YXRlIGlzIG5vdCAncHJlcm9sbD8nIGl0IG1lYW5zIHRoZSBhZHMgd2VyZSBjYW5jZWxlZCB0aGVyZWZvcmUsIHdlIGJyZWFrIHRoZSB3YXRlcmZhbGxcbiAgICBpZiAoYWRzQ2FuY2VsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKkNvcHlyaWdodCAoYykgMjAxMS0yMDE2IE1vYXQgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLiovXG4gICAgZnVuY3Rpb24gaW5pdE1vYXRUcmFja2luZyhhLGMsZCxoLGspe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYj1bXTtjPXthZERhdGE6e2lkczpjLGR1cmF0aW9uOmQsdXJsOmt9LGRpc3BhdGNoRXZlbnQ6ZnVuY3Rpb24oYSl7dGhpcy5zZW5kRXZlbnQ/KGImJihiLnB1c2goYSksYT1iLGI9ITEpLHRoaXMuc2VuZEV2ZW50KGEpKTpiLnB1c2goYSk7fX07ZD1cIl9tb2F0QXBpXCIrTWF0aC5mbG9vcigxRTgqTWF0aC5yYW5kb20oKSk7dmFyIGUsZzt0cnl7ZT1hLm93bmVyRG9jdW1lbnQsZz1lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvdzt9Y2F0Y2gobCl7ZT1kb2N1bWVudCxnPXdpbmRvdzt9Z1tkXT1jO2YudHlwZT1cInRleHQvamF2YXNjcmlwdFwiO2EmJmEuaW5zZXJ0QmVmb3JlKGYsYS5jaGlsZE5vZGVzWzBdfHxudWxsKTtmLnNyYz1cImh0dHBzOi8vei5tb2F0YWRzLmNvbS9cIitoK1wiL21vYXR2aWRlby5qcyNcIitkO3JldHVybiBjO31cbiAgICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSA9IG51bGw7XG4gICAgaWYgKHZhc3RSZXNwb25zZS5hZHMgJiYgdmFzdFJlc3BvbnNlLmFkcy5sZW5ndGggPiAwICYmIHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lICYmIHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQpIHtcbiAgXHQgIHZhciBpZHMgPSB7bGV2ZWwxOiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmFkdmlkLFxuICBcdFx0XHQgICAgIGxldmVsMjogdmFzdFJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5jcGdpZCxcbiAgXHRcdFx0ICAgICBsZXZlbDM6IHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3BpZCxcbiAgXHRcdFx0ICAgICBsZXZlbDQ6IHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3JpZH07XG4gIFx0ICBpZiAodmFzdFJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5zaXRlX2lkKSB7XG4gIFx0XHQgIGlkcy5zbGljZXIxID0gdmFzdFJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5zaXRlX2lkO1xuICBcdCAgfVxuICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBpbml0TW9hdFRyYWNraW5nKHBsYXllci5lbF8sIGlkcywgcGxheWVyLmR1cmF0aW9uKCksIHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQucGFydG5lcmNvZGUsIHBsYXllci5jdXJyZW50U291cmNlKCkuc3JjKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZykge1xuICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nLmluaXQod2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eS5jb250ZXh0SWQsIFxuICBcdFx0XHQgIHBsYXllci5kdXJhdGlvbigpLCBwbGF5ZXIuZWxfLm9mZnNldFdpZHRoLCBwbGF5ZXIuZWxfLm9mZnNldEhlaWdodCk7XG4gICAgfVxuXG4gICAgdmFyIGlzQWRWUEFJRCAgPSBpc1ZQQUlEKHZhc3RSZXNwb25zZSk7XG4gICAgdmFyIGFkSW50ZWdyYXRvciA9IGlzQWRWUEFJRCA/IG5ldyBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykgOiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcbiAgICB2YXIgYWRGaW5pc2hlZCA9IGZhbHNlO1xuICAgIGlmIChpc0FkVlBBSUQpIHtcbiAgICBcdHBsYXllci50cmlnZ2VyKCdjbGVhckFkQ2FuY2VsVGltZW91dCcpO1xuICAgIH1cblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LnR5cGUgPT09ICd2YXN0LmFkU3RhcnQnKSB7XG4gICAgICAgIGFkZEFkc0xhYmVsKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUFkc0xhYmVsKTtcblxuICAgIGlmICh1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcbiAgICAgIHByZXZlbnRNYW51YWxQcm9ncmVzcygpO1xuICAgIH1cblxuICAgIHBsYXllci52YXN0LnZhc3RSZXNwb25zZSA9IHZhc3RSZXNwb25zZTtcbiAgICBsb2dnZXIuZGVidWcgKFwiY2FsbGluZyBhZEludGVncmF0b3IucGxheUFkKCkgd2l0aCB2YXN0UmVzcG9uc2U6XCIsIHZhc3RSZXNwb25zZSk7XG4gICAgcGxheWVyLnZhc3QuYWRVbml0ID0gYWRJbnRlZ3JhdG9yLnBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKTtcbiAgICBwbGF5ZXIudmFzdC5WUEFJRCA9IGlzQWRWUEFJRDtcblxuICAgIHZhciBhZEljb25JbnRlZ3JhdG9yO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqKi9cbiAgICBmdW5jdGlvbiBhZGRBZHNMYWJlbCgpIHtcbiAgICBcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnBsYXlzSW5CcmVhaykge1xuICAgIFx0XHRwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB1cGRhdGVUaW1lQ29udHJvbHMpO1xuICAgIFx0fVxuICAgICAgaWYgKGFkRmluaXNoZWQgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ0Fkc0xhYmVsJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCgnQWRzTGFiZWwnKTtcbiAgICAgIGlmICh2YXN0UmVzcG9uc2UuaWNvbnMgJiYgdmFzdFJlc3BvbnNlLmljb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWRJY29uSW50ZWdyYXRvciA9IG5ldyBJY29uSW50ZWdyYXRvcihwbGF5ZXIpO1xuICAgICAgICBhZEljb25JbnRlZ3JhdG9yLnJlbmRlckljb25zKHZhc3RSZXNwb25zZS5pY29ucywgY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2anMtbmV4dC1idXR0b24nKTtcbiAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBsYXlsaXN0TmV4dEJ1dHRvbiA9IGVsZW1zWzBdO1xuICAgICAgICBwbGF5bGlzdE5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZHNMYWJlbCgpIHtcbiAgICBcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnBsYXlzSW5CcmVhaykge1xuICAgIFx0XHRwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlVGltZUNvbnRyb2xzKTtcbiAgICBcdFx0aWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MudGltZU9mZnNldCkge1xuICAgICAgICAgIHNob3dPcmlnaW5hbFRpbWVEaXNwbGF5KHRydWUpO1xuICAgICAgICAgIHZhciBiY1RpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JjX3RpbWVfZGlzcGxheScpO1xuICAgICAgICAgIGlmIChiY1RpbWVEaXNwbGF5KSB7XG4gICAgICAgICAgICBiY1RpbWVEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgIFx0XHR9XG4gICAgXHR9XG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5yZW1vdmVDaGlsZCgnQWRzTGFiZWwnKTtcbiAgICAgIGlmIChwbGF5bGlzdE5leHRCdXR0b24pIHtcbiAgICAgICAgcGxheWxpc3ROZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgcGxheWxpc3ROZXh0QnV0dG9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGFkRmluaXNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dPcmlnaW5hbFRpbWVEaXNwbGF5KHNob3cpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdjdXJyZW50VGltZURpc3BsYXknKS5lbF8uY2hpbGRyZW47XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbltpXS5pZCAhPSAnYmNfdGltZV9kaXNwbGF5Jykge1xuICAgICAgICAgIGNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lQ29udHJvbHMoKSB7XG4gICAgXHR2YXIgY29udmVydFRpbWVUb1N0ciA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICBcdFx0dmFyIHNlY3MgPSBwYXJzZUludCh0aW1lICsgMC41KTtcbiAgICBcdFx0dmFyIG1pbnMgPSBwYXJzZUludChzZWNzIC8gNjApO1xuICAgIFx0XHRzZWNzIC09IChtaW5zICogNjApO1xuICAgIFx0XHR2YXIgc3RyID0gbWlucy50b1N0cmluZygpICsgJzonICsgKHNlY3MgPiA5ID8gJycgIDogJzAnKSArIHNlY3MudG9TdHJpbmcoKTtcbiAgICBcdFx0cmV0dXJuIHN0cjtcbiAgICBcdH07XG4gICAgXHRcbiAgICAgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLmJyZWFrRHVyYXRpb24pIHtcbiAgICAgICAgaWYgKHBsYXllci5kdXJhdGlvbigpICE9IHdpbmRvdy5fbW9sU2V0dGluZ3MuYnJlYWtEdXJhdGlvbikge1xuICAgICAgICAgIGlmIChwbGF5ZXIuZHVyYXRpb24oKSkge1xuICAgICAgICAgICAgd2luZG93Ll9tb2xTZXR0aW5ncy5yZWFsVmlkZW9EdXJhdGlvbiA9IHBsYXllci5kdXJhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwbGF5ZXIuZHVyYXRpb24od2luZG93Ll9tb2xTZXR0aW5ncy5icmVha0R1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3MudGltZU9mZnNldCkge1xuICAgICAgICB2YXIgYmNUaW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiY190aW1lX2Rpc3BsYXknKTtcbiAgICAgICAgaWYgKCFiY1RpbWVEaXNwbGF5KSB7XG4gICAgICAgICAgYmNUaW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdjdXJyZW50VGltZURpc3BsYXknKS5lbF8uYXBwZW5kQ2hpbGQoYmNUaW1lRGlzcGxheSk7XG4gICAgICAgICAgYmNUaW1lRGlzcGxheS5pZCA9ICdiY190aW1lX2Rpc3BsYXknO1xuICAgICAgICAgIGJjVGltZURpc3BsYXkuY2xhc3MgPSAndmpzLWN1cnJlbnQtdGltZS1kaXNwbGF5JztcbiAgICAgICAgICBiY1RpbWVEaXNwbGF5WydhcmlhLWxpdmUnXSA9ICdvZmYnO1xuICAgICAgICAgIGJjVGltZURpc3BsYXkuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidmpzLWNvbnRyb2wtdGV4dFwiPjwvc3Bhbj4wOjAwJztcbiAgICAgICAgICBzaG93T3JpZ2luYWxUaW1lRGlzcGxheShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2hvd09yaWdpbmFsVGltZURpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgIGJjVGltZURpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSArIHdpbmRvdy5fbW9sU2V0dGluZ3MudGltZU9mZnNldDtcbiAgICAgICAgYmNUaW1lRGlzcGxheS5jaGlsZE5vZGVzWzFdLm5vZGVWYWx1ZSA9IGNvbnZlcnRUaW1lVG9TdHIodGltZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldmVudE1hbnVhbFByb2dyZXNzKCkge1xuICAgICAgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGUgdXNlciBmb3J3YXJkZWQvcmV3b3VuZCB0aGUgYWRcbiAgICAgIHZhciBQUk9HUkVTU19USFJFU0hPTEQgPSAzO1xuICAgICAgdmFyIHByZXZpb3VzVGltZSA9IDA7XG4gICAgICB2YXIgc2tpcGFkX2F0dGVtcHRzID0gMDtcblxuICAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgcHJldmVudEFkU2Vlayk7XG4gICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJldmVudEFkU2tpcCk7XG5cbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVycm9yJ10sIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MpO1xuXG4gICAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTa2lwKCkge1xuICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxuICAgICAgICAvLyBhbmQgcmV2ZXJ0IHRpbWUgdG8gdGhlIHByZXZpb3VzICd2YWxpZCcgdGltZVxuICAgICAgICBpZiAoKHBsYXllci5kdXJhdGlvbigpIC0gcHJldmlvdXNUaW1lKSA+IFBST0dSRVNTX1RIUkVTSE9MRCkge1xuICAgICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsgLy8gdGhpcyByZWR1Y2UgdGhlIHZpZGVvIGppdHRlciBpZiB0aGUgSU9TIHNraXAgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgICBwbGF5ZXIucGxheSh0cnVlKTsgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIHRoZSBwbGF5IHRvIHB1dCB0aGUgdmlkZW8gZWxlbWVudCBiYWNrIGluIGEgdmFsaWQgc3RhdGVcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTZWVrKCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdmFyIHByb2dyZXNzRGVsdGEgPSBNYXRoLmFicyhjdXJyZW50VGltZSAtIHByZXZpb3VzVGltZSk7XG4gICAgICAgIGlmIChwcm9ncmVzc0RlbHRhID4gUFJPR1JFU1NfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgc2tpcGFkX2F0dGVtcHRzICs9IDE7XG4gICAgICAgICAgaWYgKHNraXBhZF9hdHRlbXB0cyA+PSAyKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShwcmV2aW91c1RpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZpb3VzVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XG4gICAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCBwcmV2ZW50QWRTZWVrKTtcbiAgICAgICAgcGxheWVyLm9mZignZW5kZWQnLCBwcmV2ZW50QWRTa2lwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0FkRXJyb3IoZXJyb3IsIHZhc3RSZXNwb25zZSkge1xuICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndmFzdC5hZEVycm9yJywgZXJyb3I6IGVycm9yfSk7XG4gICAgY2FuY2VsQWRzKCk7XG4gICAgbG9nZ2VyLmVycm9yICgnQUQgRVJST1I6JywgZXJyb3IubWVzc2FnZSwgZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZQQUlEKHZhc3RSZXNwb25zZSkge1xuICAgIHZhciBpLCBsZW47XG4gICAgdmFyIG1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBtZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodmFzdFV0aWwuaXNWUEFJRChtZWRpYUZpbGVzW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwiLyoqXG4gKiBWaWV3YWJpbGl0eSBXcmFwcGVyXG4gKi9cblxuLy92YXIgQU5WaWRlb1ZpZXdhYmlsaXR5VHJhY2tlciA9IHJlcXVpcmUoXCJhbi12aWRlby12aWV3YWJpbGl0eVwiKTsvL3ZpZXdhYmlsaXR5IGxpYnJhcnlcbnZhciBBTlZpZGVvVmlld2FiaWxpdHlUcmFja2VyID0gbnVsbDtcbnZhciBsb2dnZXIgPSByZXF1aXJlKFwiLi9jb25zb2xlTG9nZ2VyXCIpO1xudmFyIGRlYnVnID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBsb2dnZXIuZGVidWcobWVzc2FnZSk7XG59O1xudmFyIGluZm8gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIGxvZ2dlci5pbmZvKG1lc3NhZ2UpO1xufTtcblxudmFyIGh0bWw1VmlkZW9WaWV3YWJpbGl0eSA9IGZ1bmN0aW9uIChwbGF5ZXJfKSB7XG5cblx0dmFyIHBsYXllciA9IHBsYXllcl87XG4gICAgdmFyIHRyYWNrZXIgPSBudWxsO1xuICAgIHZhciBtYXBwZWRBY3Rpb25zID0ge1xuICAgICAgICBcInN0YXJ0XCI6IFwic3RhcnRcIixcbiAgICAgICAgXCJleHBhbmRcIjogXCJleHBhbmRcIixcbiAgICAgICAgXCJjb2xsYXBzZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgIFwidW5tdXRlXCI6IFwic291bmRfb25cIixcbiAgICAgICAgXCJtdXRlXCI6IFwic291bmRfb2ZmXCIsXG4gICAgICAgIFwicGF1c2VcIjogXCJwYXVzZVwiLFxuICAgICAgICBcInJlc3VtZVwiOiBcInJlc3VtZVwiLFxuICAgICAgICBcImFkLWNsaWNrXCI6IFwiY2xpY2tcIixcbiAgICAgICAgXCJza2lwXCI6IFwic3RvcFwiLFxuICAgICAgICBcImNvbXBsZXRlXCI6IFwic3RvcFwiLFxuICAgICAgICBcImZ1bGxzY3JlZW5cIjogXCJmdWxsc2NyZWVuXCIsXG4gICAgICAgIFwiZXhpdEZ1bGxzY3JlZW5cIjogXCJleGl0RnVsbHNjcmVlblwiXG4gICAgfTtcblxuICAgIHZhciBmaXJlT25jZUV2ZW50cyA9IHtcbiAgICAgICAgXCJzdGFydFwiOiBmYWxzZSxcbiAgICAgICAgXCJza2lwXCI6IGZhbHNlLFxuICAgICAgICBcImNvbXBsZXRlXCI6IGZhbHNlXG4gICAgfTtcblxuICAgIHZhciBnZXRDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5ICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHkuY29uZmlnO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0UGxheWVyRE9NRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllci5lbF87XG4gICAgfTtcblxuICAgIHZhciBnZXRWaWRlb0luZm8gPSBmdW5jdGlvbiAoZHVyYXRpb24sIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtkdXJhdGlvbjogZHVyYXRpb24sIHc6IHdpZHRoLCBoOiBoZWlnaHR9O1xuICAgIH07XG5cblx0Ly8gVXNpbmcgY2FsbGJhY2sgZm9yIGxvZ3MgaGVscHMgZ2V0dGluZyBhIHJpZ2h0IGxvZ2dlciBpbiBlYWNoIGFwcFxuXHR2YXIgbG9nZ2VyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoX2xldmVsLCBfbWVzc2FnZSkge1xuXHRcdGlmIChfbGV2ZWwgJiYgX2xldmVsID09PSBcImRlYnVnXCIpIHtcblx0XHRcdGRlYnVnKF9tZXNzYWdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5mbyhfbWVzc2FnZSk7XG5cdFx0fVxuICAgIH07XG5cbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoY29udGV4dElkLCBkdXJhdGlvbiwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBpZiAoIUFOVmlkZW9WaWV3YWJpbGl0eVRyYWNrZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAgIFxuICAgICAgICBpbmZvKFwiaW5pdGlhbGl6ZSB3aXRoIGR1cmF0aW9uOiBcIiArIGR1cmF0aW9uICsgXCIsIHdpZHRoOiBcIiArIHdpZHRoICsgXCIsIGhlaWdodDogXCIgKyBoZWlnaHQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdHJhY2tlciA9IG5ldyBBTlZpZGVvVmlld2FiaWxpdHlUcmFja2VyKFxuXHRcdFx0XHRnZXRDb25maWcoKSxcbiAgICAgICAgICAgICAgICBnZXRQbGF5ZXJET01FbGVtZW50KCksXG4gICAgICAgICAgICAgICAgZ2V0VmlkZW9JbmZvKGR1cmF0aW9uLCB3aWR0aCwgaGVpZ2h0KSwgLy8gVGhlIGR1cmF0aW9uIG9mIHRoZSB2aWRlbyBhZFxuICAgICAgICAgICAgICAgIGNvbnRleHRJZCxcblx0XHRcdFx0bG9nZ2VyQ2FsbGJhY2tcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgZGVidWcoXCJlcnJvciBvbiB2aWV3YWJpbGl0eSBsaWJyYXJ5OiBcIik7XG4gICAgICAgICAgICBkZWJ1ZyhleCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGlzLmludm9rZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50Xykge1xuICAgICAgICBpZiAoIUFOVmlkZW9WaWV3YWJpbGl0eVRyYWNrZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1JlYWR5ICYmIGV2ZW50XyAmJiBtYXBwZWRBY3Rpb25zW2V2ZW50X10pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYoZmlyZU9uY2VFdmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnRfKSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGZpcmVPbmNlRXZlbnRzW2V2ZW50X10pe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyhcInN1cHJlc3NpbmcgZmlyZU9uY2VFdmVudHMgZXZlbnQgYXMgaXQgaXMgYWxyZWFkeSBmaXJlZCBvbmNlIGJ5IHZpZXdhYmlsaXR5IGxpYnJhcnk6IFwiICsgbWFwcGVkQWN0aW9uc1tldmVudF9dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZU9uY2VFdmVudHNbZXZlbnRfXSA9IHRydWU7IC8vIG1hcmsgdGhhdCB0aGUgZXZlbnQgaGFzIGJlZW4gZmlyZWQuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5mbyhcImV2ZW50IGludm9rZWQgYnkgdmlld2FiaWxpdHkgbGlicmFyeTogXCIgKyBtYXBwZWRBY3Rpb25zW2V2ZW50X10pO1xuICAgICAgICAgICAgICAgIHRyYWNrZXIubm90aWZ5RXZlbnQobWFwcGVkQWN0aW9uc1tldmVudF9dKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJlcnJvciBvbiB2aWV3YWJpbGl0eSBsaWJyYXJ5OiBcIik7XG4gICAgICAgICAgICAgICAgZGVidWcoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuXG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBodG1sNVZpZGVvVmlld2FiaWxpdHk7IiwiLy9TbWFsbCBzdWJzZXQgb2YgYXN5bmNcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgYXN5bmMgPSB7fTtcblxuYXN5bmMuc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHNldFRpbWVvdXQoZm4sIDApO1xufTtcblxuYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm4ubmV4dCgpO1xuICAgIH07XG4gICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpIDogbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBmbjtcbiAgfTtcbiAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbn07XG5cblxuYXN5bmMud2F0ZXJmYWxsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0YXNrcykpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byB3YXRlcmZhbGwgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnKTtcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgfVxuICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG4gIHZhciB3cmFwSXRlcmF0b3IgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcbn07XG5cbmFzeW5jLndoZW4gPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBjYWxsYmFjaykge1xuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImFzeW5jLndoZW4gZXJyb3I6IG1pc3NpbmcgY2FsbGJhY2sgYXJndW1lbnRcIik7XG4gIH1cblxuICB2YXIgaXNBbGxvd2VkID0gdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uZGl0aW9uKSA/IGNvbmRpdGlvbiA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFjb25kaXRpb247XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gICAgdmFyIG5leHQgPSBhcmdzLnBvcCgpO1xuXG4gICAgaWYgKGlzQWxsb3dlZC5hcHBseShudWxsLCBhcmdzKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xuICAgIHJldHVybiBuZXh0LmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYztcblxuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF92ZXJib3NpdHkgPSAwO1xudmFyIF9wcmVmaXggPSBcIlt2aWRlb2pzLXZhc3QtdnBhaWRdIFwiO1xuXG5mdW5jdGlvbiBzZXRWZXJib3NpdHkgKHYpXG57XG4gICAgX3ZlcmJvc2l0eSA9IHY7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1zZyAobWV0aG9kLCBhcmdzKVxue1xuICAgIGlmICgoYXJncy5sZW5ndGgpID4gMCAmJiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSlcbiAgICB7XG4gICAgICAgIGFyZ3NbMF0gPSBfcHJlZml4ICsgYXJnc1swXTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kLmFwcGx5KVxuICAgIHtcbiAgICAgICAgbWV0aG9kLmFwcGx5IChjb25zb2xlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIG1ldGhvZCAoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVidWcgKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlLmRlYnVnID09PSAndW5kZWZpbmVkJylcbiAgICB7XG4gICAgICAgIC8vIElFIDEwIGRvZXNuJ3QgaGF2ZSBhIGNvbnNvbGUuZGVidWcoKSBmdW5jdGlvblxuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUubG9nLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUuZGVidWcsIGFyZ3VtZW50cyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2cgKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDMpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlTXNnIChjb25zb2xlLmxvZywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gaW5mbyAoKVxue1xuICAgIGlmIChfdmVyYm9zaXR5IDwgMilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUuaW5mbywgYXJndW1lbnRzKTtcbn1cblxuXG5mdW5jdGlvbiB3YXJuICgpXG57XG4gICAgaWYgKF92ZXJib3NpdHkgPCAxKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZU1zZyAoY29uc29sZS53YXJuLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBlcnJvciAoKVxue1xuICAgIGhhbmRsZU1zZyAoY29uc29sZS5lcnJvciwgYXJndW1lbnRzKTtcbn1cblxudmFyIGNvbnNvbGVMb2dnZXIgPSB7XG4gICAgc2V0VmVyYm9zaXR5OiBzZXRWZXJib3NpdHksXG4gICAgZGVidWc6IGRlYnVnLFxuICAgIGxvZzogbG9nLFxuICAgIGluZm86IGluZm8sXG4gICAgd2Fybjogd2FybixcbiAgICBlcnJvcjogZXJyb3Jcbn07XG5cbmlmICgodHlwZW9mIChjb25zb2xlKSA9PT0gJ3VuZGVmaW5lZCcpIHx8ICFjb25zb2xlLmxvZylcbntcbiAgICAvLyBubyBjb25zb2xlIGF2YWlsYWJsZTsgbWFrZSBmdW5jdGlvbnMgbm8tb3BcbiAgICBjb25zb2xlTG9nZ2VyLmRlYnVnID0gZnVuY3Rpb24gKCkge307XG4gICAgY29uc29sZUxvZ2dlci5sb2cgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLndhcm4gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmVycm9yID0gZnVuY3Rpb24gKCkge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc29sZUxvZ2dlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGRvbSA9IHt9O1xuXG5kb20uaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgcmV0dXJuIHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xufTtcblxuZG9tLmlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4oZWwpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICByZXR1cm4gc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xufTtcblxuZG9tLmlzU2hvd24gPSBmdW5jdGlvbiBpc1Nob3duKGVsKSB7XG4gIHJldHVybiAhZG9tLmlzSGlkZGVuKGVsKTtcbn07XG5cbmRvbS5oaWRlID0gZnVuY3Rpb24gaGlkZShlbCkge1xuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSBlbC5zdHlsZS5kaXNwbGF5O1xuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuZG9tLnNob3cgPSBmdW5jdGlvbiBzaG93KGVsKSB7XG4gIGlmIChkb20uaXNIaWRkZW4oZWwpKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XztcbiAgfVxuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSB1bmRlZmluZWQ7XG59O1xuXG5kb20uaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXMsIGksIGxlbjtcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcyk7XG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICBjc3NDbGFzcyA9IChjc3NDbGFzcyB8fCAnJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBpZiAoY2xhc3Nlc1tpXSA9PT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmRvbS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XG4gICAgICBjbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIHZhciBuZXdDbGFzc2VzID0gW107XG4gICAgdmFyIGksIGxlbjtcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xuXG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjc3NDbGFzcyAhPT0gY2xhc3Nlc1tpXSkge1xuICAgICAgICAgIG5ld0NsYXNzZXMucHVzaChjbGFzc2VzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0NsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAvLyBXQVJOSU5HISEhIHRoaXMgaXMgYSB2ZXJ5IG5haXZlIGltcGxlbWVudGF0aW9uICFcbiAgICAvLyB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlclxuICAgIC8vIHdvdWxkIG5vdCBiZSB0aGVyZSBmb3IgSUU4XG4gICAgLy8gd2Ugc2hvdWxkIHVzZSBcIndpbmRvdy5ldmVudFwiIGFuZCB0aGVuIFwiZXZlbnQuc3JjRWxlbWVudFwiXG4gICAgLy8gaW5zdGVhZCBvZiBcImV2ZW50LnRhcmdldFwiXG4gICAgZWwuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgaGFuZGxlcik7XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuZGV0YWNoRXZlbnQpIHtcbiAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICBlbFtcIm9uXCIgKyB0eXBlXSA9IG51bGw7XG4gIH1cbn07XG5cbmRvbS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbCwgZXZlbnQpIHtcbiAgaWYgKGVsLmRpc3BhdGNoRXZlbnQpIHtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBlbC5maXJlRXZlbnQoXCJvblwiICsgZXZlbnQuZXZlbnRUeXBlLCBldmVudCk7XG4gIH1cbn07XG5cbmRvbS5pc0Rlc2NlbmRhbnQgPSBmdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZG9tLmdldFRleHRDb250ZW50ID0gZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWwpe1xuICByZXR1cm4gZWwudGV4dENvbnRlbnQgfHwgZWwudGV4dDtcbn07XG5cbmRvbS5wcmVwZW5kQ2hpbGQgPSBmdW5jdGlvbiBwcmVwZW5kQ2hpbGQocGFyZW50LCBjaGlsZCkge1xuICBpZihjaGlsZC5wYXJlbnROb2RlKXtcbiAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xufTtcblxuZG9tLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSl7XG4gIGlmKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKXtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cbn07XG5cbmRvbS5pc0RvbUVsZW1lbnQgPSBmdW5jdGlvbiBpc0RvbUVsZW1lbnQobykge1xuICByZXR1cm4gbyBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59O1xuXG5kb20uY2xpY2sgPSBmdW5jdGlvbihlbCwgaGFuZGxlcikge1xuICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG59O1xuXG5kb20ub25jZSA9IGZ1bmN0aW9uKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZXJXcmFwKCkge1xuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcldyYXApO1xuICB9XG5cbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXJXcmFwKTtcbn07XG5cbi8vTm90ZTogdGhlcmUgaXMgbm8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGlQYWQgc28gd2UgbmVlZCBhIGZhbGxiYWNrXG5kb20uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3Q7XG5cbiAgLy9PbiBJRTkgYW5kIGJlbG93IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBkb2VzIG5vdCB3b3JrIGNvbnNpc3RlbnRseVxuICBpZighdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cmxVdGlscyA9IHJlcXVpcmUoJy4vdXJsVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gSHR0cFJlcXVlc3RFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdIdHRwUmVxdWVzdCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcbn1cbkh0dHBSZXF1ZXN0RXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJIdHRwUmVxdWVzdCBFcnJvclwiO1xuXG5mdW5jdGlvbiBIdHRwUmVxdWVzdChjcmVhdGVYaHIpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjcmVhdGVYaHIpKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoJ01pc3NpbmcgWE1MSHR0cFJlcXVlc3QgZmFjdG9yeSBtZXRob2QnKTtcbiAgfVxuXG4gIHRoaXMuY3JlYXRlWGhyID0gY3JlYXRlWGhyO1xufVxuXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBzYW5pdHlDaGVjayh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgdmFyIHRpbWVvdXQsIHRpbWVvdXRJZDtcbiAgdmFyIHhociA9IHRoaXMuY3JlYXRlWGhyKCk7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aW1lb3V0ID0gdXRpbGl0aWVzLmlzTnVtYmVyKG9wdGlvbnMudGltZW91dCkgPyBvcHRpb25zLnRpbWVvdXQgOiAwO1xuXG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsVXRpbHMudXJsUGFydHModXJsKS5ocmVmLCB0cnVlKTtcblxuICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgc2V0SGVhZGVycyh4aHIsIG9wdGlvbnMuaGVhZGVycyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXR1c1RleHQsIHJlc3BvbnNlLCBzdGF0dXM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb25seSB3YXkgdG8gZG8gYSBzZWN1cmUgcmVxdWVzdCBvbiBJRTggYW5kIElFOSBpcyB3aXRoIHRoZSBYRG9tYWluUmVxdWVzdCBvYmplY3QuIFVuZm9ydHVuYXRlbHksIG1pY3Jvc29mdCBpc1xuICAgICAqIHNvIG5pY2UgdGhhdCBkZWNpZGVkIHRoYXQgdGhlIHN0YXR1cyBwcm9wZXJ0eSBhbmQgdGhlICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIG1ldGhvZCB3aGVyZSBub3QgbmVlZGVkIHNvIHdlIGhhdmUgdG9cbiAgICAgKiBmYWtlIHRoZW0uIElmIHRoZSByZXF1ZXN0IGdldHMgZG9uZSB3aXRoIGFuIFhEb21haW5SZXF1ZXN0IGluc3RhbmNlLCB3ZSB3aWxsIGFzc3VtZSB0aGF0IHRoZXJlIGFyZSBubyBoZWFkZXJzIGFuZFxuICAgICAqIHRoZSBzdGF0dXMgd2lsbCBhbHdheXMgYmUgMjAwLiBJZiB5b3UgZG9uJ3QgbGlrZSBpdCwgRE8gTk9UIFVTRSBBTkNJRU5UIEJST1dTRVJTISEhXG4gICAgICpcbiAgICAgKiBGb3IgbW9yIGluZm8gZ28gdG86IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvY2MyODgwNjAodj12cy44NSkuYXNweFxuICAgICAqL1xuICAgIGlmICgheGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycykge1xuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICgheGhyLnN0YXR1cykge1xuICAgICAgeGhyLnN0YXR1cyA9IDIwMDtcbiAgICB9XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0aW1lb3V0SWQpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQgfHwgJyc7XG5cbiAgICAvLyByZXNwb25zZVRleHQgaXMgdGhlIG9sZC1zY2hvb2wgd2F5IG9mIHJldHJpZXZpbmcgcmVzcG9uc2UgKHN1cHBvcnRlZCBieSBJRTggJiA5KVxuICAgIC8vIHJlc3BvbnNlL3Jlc3BvbnNlVHlwZSBwcm9wZXJ0aWVzIHdlcmUgaW50cm9kdWNlZCBpbiBYSFIgTGV2ZWwyIHNwZWMgKHN1cHBvcnRlZCBieSBJRTEwKVxuICAgIHJlc3BvbnNlID0gKCdyZXNwb25zZScgaW4geGhyKSA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG5cbiAgICAvLyBub3JtYWxpemUgSUU5IGJ1ZyAoaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTQ1MClcbiAgICBzdGF0dXMgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcblxuICAgIGNhbGxiYWNrKFxuICAgICAgc3RhdHVzLFxuICAgICAgcmVzcG9uc2UsXG4gICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCksXG4gICAgICBzdGF0dXNUZXh0KTtcbiAgfTtcblxuICB4aHIub25lcnJvciA9IHJlcXVlc3RFcnJvcjtcbiAgeGhyLm9uYWJvcnQgPSByZXF1ZXN0RXJyb3I7XG5cbiAgeGhyLnNlbmQoKTtcblxuICBpZiAodGltZW91dCA+IDApIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHhociAmJiB4aHIuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyh1cmwpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHVybCkpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCB1cmwgJ1wiICsgdXJsICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgaGFuZGxlciAnXCIgKyBjYWxsYmFjayArIFwiJyBmb3IgdGhlIGh0dHAgcmVxdWVzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChvcHRpb25zKSAmJiAhdXRpbGl0aWVzLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgb3B0aW9ucyBtYXAgJ1wiICsgb3B0aW9ucyArIFwiJ1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRIZWFkZXJzKHhociwgaGVhZGVycykge1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0RXJyb3IoKSB7XG4gICAgY2FsbGJhY2soLTEsIG51bGwsIG51bGwsICcnKTtcbiAgfVxufTtcblxuSHR0cFJlcXVlc3QucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHRoaXMucnVuKCdHRVQnLCB1cmwsIHByb2Nlc3NSZXNwb25zZSwgb3B0aW9ucyk7XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKHN0YXR1cywgcmVzcG9uc2UsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpIHtcbiAgICBpZiAoaXNTdWNjZXNzKHN0YXR1cykpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhuZXcgSHR0cFJlcXVlc3RFcnJvcihzdGF0dXNUZXh0KSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTdWNjZXNzKHN0YXR1cykge1xuICAgIHJldHVybiAyMDAgPD0gc3RhdHVzICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlWGhyKCkge1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIGlmICghKFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyKSkge1xuICAgIC8vIFhEb21haW5SZXF1ZXN0IGZvciBJRS5cbiAgICB4aHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgfVxuICByZXR1cm4geGhyO1xufVxuXG52YXIgaHR0cCA9IG5ldyBIdHRwUmVxdWVzdChjcmVhdGVYaHIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaHR0cDogaHR0cCxcbiAgSHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVxdWVzdEVycm9yOiBIdHRwUmVxdWVzdEVycm9yLFxuICBjcmVhdGVYaHI6IGNyZWF0ZVhoclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGh0bWw1OiBbXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuMCcsXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuMicsXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuNCcsXG4gICAgJ3RleHQvanNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi94LWphdmFzY3JpcHQnLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQnLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjAnLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjInLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjQnLFxuICAgICd0ZXh0L2xpdmVzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi9lY21hc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24veC1lY21hc2NyaXB0JyxcbiAgXSxcblxuICBmbGFzaDogW1xuICAgICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCdcbiAgXSxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgcGxheWVyVXRpbHMgPSB7fTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhcHR1cmVzIHRoZSBwb3J0aW9ucyBvZiBwbGF5ZXIgc3RhdGUgcmVsZXZhbnQgdG9cbiAqIHZpZGVvIHBsYXliYWNrLiBUaGUgcmVzdWx0IG9mIHRoaXMgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCB0b1xuICogcmVzdG9yZVBsYXllclNuYXBzaG90IHdpdGggYSBwbGF5ZXIgdG8gcmV0dXJuIHRoZSBwbGF5ZXIgdG8gdGhlIHN0YXRlIGl0XG4gKiB3YXMgaW4gd2hlbiB0aGlzIGZ1bmN0aW9uIHdhcyBpbnZva2VkLlxuICogQHBhcmFtIHtvYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBwbGF5ZXIgb2JqZWN0XG4gKi9cbnBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gZ2V0UGxheWVyU25hcHNob3QocGxheWVyKSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG5cbiAgdmFyIHNuYXBzaG90ID0ge1xuICAgIGVuZGVkOiBwbGF5ZXIuZW5kZWQoKSxcbiAgICBzcmM6IHBsYXllci5jdXJyZW50U3JjKCksXG4gICAgY3VycmVudFRpbWU6IHBsYXllci5jdXJyZW50VGltZSgpLFxuICAgIHR5cGU6IHBsYXllci5jdXJyZW50VHlwZSgpLFxuICAgIHBsYXlpbmc6ICFwbGF5ZXIucGF1c2VkKCksXG4gICAgc3VwcHJlc3NlZFRyYWNrczogZ2V0U3VwcHJlc3NlZFRyYWNrcyhwbGF5ZXIpXG4gIH07XG5cbiAgaWYgKHRlY2gpIHtcbiAgICBzbmFwc2hvdC5uYXRpdmVQb3N0ZXIgPSB0ZWNoLnBvc3RlcjtcbiAgICBzbmFwc2hvdC5zdHlsZSA9IHRlY2guZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICB9XG5cblx0dmFyIGVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Zqcy1kb2NrLXRleHQnKTtcblx0aWYgKGVscyAmJiBlbHMubGVuZ3RoID4gMCkge1xuXHRcdHNuYXBzaG90LmRvY2tUZXh0ID0gZWxzWzBdO1xuXHRcdHNuYXBzaG90LmRvY2tUZXh0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cbiAgcmV0dXJuIHNuYXBzaG90O1xuXG4gIC8qKioqIExvY2FsIEZ1bmN0aW9ucyAqKioqL1xuICBmdW5jdGlvbiBnZXRTdXBwcmVzc2VkVHJhY2tzKHBsYXllcikge1xuICAgIHZhciB0cmFja3MgPSBwbGF5ZXIucmVtb3RlVGV4dFRyYWNrcyA/IHBsYXllci5yZW1vdGVUZXh0VHJhY2tzKCkgOiBbXTtcblxuICAgIGlmICh0cmFja3MgJiYgdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tzLnRyYWNrc18pKSB7XG4gICAgICB0cmFja3MgPSB0cmFja3MudHJhY2tzXztcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNrcykpIHtcbiAgICAgIHRyYWNrcyA9IFtdO1xuICAgIH1cblxuICAgIHZhciBzdXBwcmVzc2VkVHJhY2tzID0gW107XG4gICAgdHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICBzdXBwcmVzc2VkVHJhY2tzLnB1c2goe1xuICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIG1vZGU6IHRyYWNrLm1vZGVcbiAgICAgIH0pO1xuICAgICAgdHJhY2subW9kZSA9ICdkaXNhYmxlZCc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcHJlc3NlZFRyYWNrcztcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBtb2RpZnkgdGhlIHNwZWNpZmllZCBwbGF5ZXIgc28gdGhhdCBpdHMgc3RhdGUgaXMgZXF1aXZhbGVudCB0b1xuICogdGhlIHN0YXRlIG9mIHRoZSBzbmFwc2hvdC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBzbmFwc2hvdCAtIHRoZSBwbGF5ZXIgc3RhdGUgdG8gYXBwbHlcbiAqL1xucGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gcmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGF0dGVtcHRzID0gMjA7IC8vIHRoZSBudW1iZXIgb2YgcmVtYWluaW5nIGF0dGVtcHRzIHRvIHJlc3RvcmUgdGhlIHNuYXBzaG90XG5cbiAgaWYgKHNuYXBzaG90Lm5hdGl2ZVBvc3Rlcikge1xuICAgIHRlY2gucG9zdGVyID0gc25hcHNob3QubmF0aXZlUG9zdGVyO1xuICB9XG5cbiAgaWYgKCdzdHlsZScgaW4gc25hcHNob3QpIHtcbiAgICAvLyBvdmVyd3JpdGUgYWxsIGNzcyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHJlc3RvcmUgc3RhdGUgcHJlY2lzZWx5XG4gICAgdGVjaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc25hcHNob3Quc3R5bGUgfHwgJycpO1xuICB9XG5cblx0aWYgKHNuYXBzaG90LmRvY2tUZXh0KSB7XG5cdFx0c25hcHNob3QuZG9ja1RleHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuICAvL2lmIChoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpKSB7XG5cbiAgICAvLyBvbiBpb3M3LCBmaWRkbGluZyB3aXRoIHRleHRUcmFja3MgdG9vIGVhcmx5IHdpbGwgY2F1c2Ugc2FmYXJpIHRvIGNyYXNoXG4gICAgcGxheWVyLm9uZSgnY29udGVudGxvYWRlZG1ldGFkYXRhJywgcmVzdG9yZVRyYWNrcyk7XG5cbiAgICBwbGF5ZXIub25lKCdjYW5wbGF5JywgdHJ5VG9SZXN1bWUpO1xuICAgIGVuc3VyZUNhbnBsYXlFdnRHZXRzRmlyZWQoKTtcblxuICAgIC8vIGlmIHRoZSBzcmMgY2hhbmdlZCBmb3IgYWQgcGxheWJhY2ssIHJlc2V0IGl0XG4gICAgcGxheWVyLnNyYyh7c3JjOiBzbmFwc2hvdC5zcmMsIHR5cGU6IHNuYXBzaG90LnR5cGV9KTtcblxuICAgIC8vIHNhZmFyaSByZXF1aXJlcyBhIGNhbGwgdG8gYGxvYWRgIHRvIHBpY2sgdXAgYSBjaGFuZ2VkIHNvdXJjZVxuICAgIC8vIHBsYXllci5sb2FkKCk7XHQvLyBTYWZhcmkgMTEgbm8gbW9yZSByZXF1aXJlcyAnbG9hZCcuIEZpcmVmb3ggZG9lc24ndCBsaWtlICdsb2FkJyBjYWxsIGZvciBhbHJlYWR5IGxvYWRlZCBjb250ZW50IChpbiBjYXNlIG9mIEFkTG9hZGVkIHRpbWVvdXQpLlxuXG4gIC8qfSBlbHNlIHtcbiAgICByZXN0b3JlVHJhY2tzKCk7XG5cbiAgICBpZiAoc25hcHNob3QucGxheWluZykge1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICB9XG4gIH0qL1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICAvKipcbiAgICogU29tZXRpbWVzIGZpcmVmb3ggZG9lcyBub3QgdHJpZ2dlciB0aGUgJ2NhbnBsYXknIGV2dC5cbiAgICogVGhpcyBjb2RlIGVuc3VyZSB0aGF0IGl0IGFsd2F5cyBnZXRzIHRyaWdnZXJlZCB0cmlnZ2VyZWQuXG4gICAqL1xuICBmdW5jdGlvbiBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCkge1xuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ2NhbnBsYXknKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCBmdW5jdGlvbigpe1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBsYXllciBuZWVkcyB0byBiZSByZXN0b3JlZCB0byBpdHMgc3RhdGVcbiAgICogYmVmb3JlIGFkIHBsYXliYWNrIGJlZ2FuLiBXaXRoIGEgY3VzdG9tIGFkIGRpc3BsYXkgb3IgYnVybmVkLWluXG4gICAqIGFkcywgdGhlIGNvbnRlbnQgcGxheWVyIHN0YXRlIGhhc24ndCBiZWVuIG1vZGlmaWVkIGFuZCBzbyBub1xuICAgKiByZXN0b3JhdGlvbiBpcyByZXF1aXJlZFxuICAgKi9cbiAgLypmdW5jdGlvbiBoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpIHtcbiAgICBpZiAocGxheWVyLnNyYygpKSB7XG4gICAgICByZXR1cm4gcGxheWVyLnNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gICAgfVxuICAgIC8vIHRoZSBwbGF5ZXIgd2FzIGNvbmZpZ3VyZWQgdGhyb3VnaCBzb3VyY2UgZWxlbWVudCBjaGlsZHJlblxuICAgIHJldHVybiBwbGF5ZXIuY3VycmVudFNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gIH0qL1xuXG4gIGZ1bmN0aW9uIHJlc3RvcmVUcmFja3MoKSB7XG4gICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBzbmFwc2hvdC5zdXBwcmVzc2VkVHJhY2tzO1xuICAgIHN1cHByZXNzZWRUcmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tTbmFwc2hvdCkge1xuICAgICAgdHJhY2tTbmFwc2hvdC50cmFjay5tb2RlID0gdHJhY2tTbmFwc2hvdC5tb2RlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgdmlkZW8gZWxlbWVudCBoYXMgbG9hZGVkIGVub3VnaCBvZiB0aGUgc25hcHNob3Qgc291cmNlXG4gICAqIHRvIGJlIHJlYWR5IHRvIGFwcGx5IHRoZSByZXN0IG9mIHRoZSBzdGF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gdHJ5VG9SZXN1bWUoKSB7XG5cbiAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xuICAgIC8vIG90aGVyd2lzZSBkZWxheSBhIGJpdCBhbmQgdGhlbiBjaGVjayBhZ2FpbiB1bmxlc3Mgd2UncmUgb3V0IG9mIGF0dGVtcHRzXG5cblx0ICAvLyBzYWZhcmkgMTEgcmVxdWlyZXMgY2FsbCBgcGxheWAgdG8gbWFrZSBzZWVrIGF2YWlsYWJsZVxuICAgICAgcGxheWVyLnBsYXkoKTtcblxuICAgIGlmICghcGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lKHBsYXllcikgJiYgYXR0ZW1wdHMtLSkge1xuICAgICAgc2V0VGltZW91dCh0cnlUb1Jlc3VtZSwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZihwbGF5ZXIuY3VycmVudFRpbWUoKSAhPT0gc25hcHNob3QuY3VycmVudFRpbWUpIHtcbiAgICAgICAgICBpZiAoc25hcHNob3QucGxheWluZykgeyAvLyBpZiBuZWVkZWQgcmVzdG9yZSBwbGF5aW5nIHN0YXR1cyBhZnRlciBzZWVrIGNvbXBsZXRlc1xuICAgICAgICAgICAgcGxheWVyLm9uZSgnc2Vla2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHNuYXBzaG90LmN1cnJlbnRUaW1lKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcbiAgICAgICAgICAvLyBpZiBuZWVkZWQgYW5kIG5vIHNlZWsgaGFzIGJlZW4gcGVyZm9ybWVkLCByZXN0b3JlIHBsYXlpbmcgc3RhdHVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHZpZGVvanMubG9nLndhcm4oJ0ZhaWxlZCB0byByZXN1bWUgdGhlIGNvbnRlbnQgYWZ0ZXIgYW4gYWR2ZXJ0aXNlbWVudCcsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxucGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lID0gZnVuY3Rpb24gKHBsYXllcikge1xuXG4gIGlmIChwbGF5ZXIucmVhZHlTdGF0ZSgpID4gMSkge1xuICAgIC8vIHNvbWUgYnJvd3NlcnMgYW5kIG1lZGlhIGFyZW4ndCBcInNlZWthYmxlXCIuXG4gICAgLy8gcmVhZHlTdGF0ZSBncmVhdGVyIHRoYW4gMSBhbGxvd3MgZm9yIHNlZWtpbmcgd2l0aG91dCBleGNlcHRpb25zXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocGxheWVyLnNlZWthYmxlKCkgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGlmIHRoZSBwbGF5ZXIgZG9lc24ndCBleHBvc2UgdGhlIHNlZWthYmxlIHRpbWUgcmFuZ2VzLCB0cnkgdG9cbiAgICAvLyByZXN1bWUgcGxheWJhY2sgaW1tZWRpYXRlbHlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwbGF5ZXIuc2Vla2FibGUoKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gaWYgc29tZSBwZXJpb2Qgb2YgdGhlIHZpZGVvIGlzIHNlZWthYmxlLCByZXN1bWUgcGxheWJhY2tcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBwcmVwYXJlcyB0aGUgcGxheWVyIHRvIGRpc3BsYXkgYWRzLlxuICogQWRkaW5nIGNvbnZlbmllbmNlIGV2ZW50cyBsaWtlIHRoZSAndmFzdC5maXJzUGxheScgdGhhdCBnZXRzIGZpcmVkIHdoZW4gdGhlIHZpZGVvIGlzIGZpcnN0IHBsYXllZFxuICogYW5kIGFkcyB0aGUgYmxhY2tQb3N0ZXIgdG8gdGhlIHBsYXllciB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBkaXNwbGF5ZWQgYmVmb3JlIHRoZSBwcmVyb2xsIGFkLlxuICpcbiAqIEBwYXJhbSBwbGF5ZXJcbiAqL1xucGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgdmFyIGJsYWNrUG9zdGVyID0gcGxheWVyLmFkZENoaWxkKCdibGFja1Bvc3RlcicpO1xuICAvL3ZhciBfZmlyc3RQbGF5ID0gdHJ1ZTtcbiAgdmFyIHZvbHVtZVNuYXBzaG90O1xuXG5cbiAgbW9ua2V5UGF0Y2hQbGF5ZXJBcGkoKTtcblxuICBwbGF5ZXIub24oJ3BsYXknLCB0cnlUb1RyaWdnZXJGaXJzdFBsYXkpO1xuICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCByZXNldEZpcnN0UGxheSk7Ly9FdmVyeSB0aW1lIHdlIGNoYW5nZSB0aGUgc291cmNlcyB3ZSByZXNldCB0aGUgZmlyc3QgcGxheS5cbiAgcGxheWVyLm9uKCd2YXN0LmZpcnN0UGxheScsIHJlc3RvcmVDb250ZW50Vm9sdW1lKTtcbiAgcGxheWVyLm9uKCdlcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7Ly9JZiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgcGxheWVyIHdlIHJlbW92ZSB0aGUgYmxhY2twb3N0ZXIgdG8gc2hvdyB0aGUgZXJyIG1zZ1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCBoaWRlQmxhY2tQb3N0ZXIpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRFcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgYWRkU3R5bGVzKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkRW5kJywgcmVtb3ZlU3R5bGVzKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHJlbW92ZVN0eWxlcyk7XG5cbiAgLy8gVklETEEtMjQ2NSAtIGhpZGUgdmpzIGVycm9yIGRpYWxvZyB3aGVuIGFkIHJ1bm5pbmdcbiAgdmFyIGVycm9yRGlhbG9nO1xuICB2YXIgZGxncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Zqcy1lcnJvci1kaXNwbGF5Jyk7XG4gIGlmIChkbGdzICYmIGRsZ3MubGVuZ3RoID4gMCkge1xuXHQgIGVycm9yRGlhbG9nID0gZGxnc1swXTtcblx0ICBlcnJvckRpYWxvZy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpO1xuICB9XG4gIFxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgLyoqXG4gICBXaGF0IHRoaXMgZnVuY3Rpb24gZG9lcyBpcyB1Z2x5IGFuZCBob3JyaWJsZSBhbmQgSSBzaG91bGQgdGhpbmsgdHdpY2UgYmVmb3JlIGNhbGxpbmcgbXlzZWxmIGEgZ29vZCBkZXZlbG9wZXIuIFdpdGggdGhhdCBzYWlkLFxuICAgaXQgaXMgdGhlIGJlc3Qgc29sdXRpb24gSSBjb3VsZCBmaW5kIHRvIG11dGUgdGhlIHZpZGVvIHVudGlsIHRoZSAncGxheScgZXZlbnQgaGFwcGVucyAob24gbW9iaWxlIGRldmljZXMpIGFuZCB0aGUgcGx1Z2luIGNhbiBkZWNpZGUgd2hldGhlclxuICAgdG8gcGxheSB0aGUgYWQgb3Igbm90LlxuXG4gICBXZSBhbHNvIG5lZWQgdGhpcyBtb25rZXlwYXRjaCB0byBiZSBhYmxlIHRvIHBhdXNlIGFuZCByZXN1bWUgYW4gYWQgdXNpbmcgdGhlIHBsYXllcidzIEFQSVxuXG4gICBJZiB5b3UgaGF2ZSBhIGJldHRlciBzb2x1dGlvbiBwbGVhc2UgZG8gdGVsbCBtZS5cbiAgICovXG4gIGZ1bmN0aW9uIG1vbmtleVBhdGNoUGxheWVyQXBpKCkge1xuXG4gICAgLyoqXG4gICAgICogTW9ua2V5IHBhdGNoIG5lZWRlZCB0byBoYW5kbGUgZmlyc3RQbGF5IGFuZCByZXN1bWUgb2YgcGxheWluZyBhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSByZXN0b3JpbmcgYSBWQVNUIGFkLlxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XG4gICAgICovXG4gICAgdmFyIG9yaWdQbGF5ID0gcGxheWVyLnBsYXk7XG4gICAgcGxheWVyLnBsYXkgPSBmdW5jdGlvbiAoY2FsbE9yaWdQbGF5KSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XG4gICAgICAgIGZpcnN0UGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdW1lKGNhbGxPcmlnUGxheSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBmaXJzdFBsYXkoKSB7XG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzSVBob25lKCkpIHtcbiAgICAgICAgICBpZiAoIXZvbHVtZVNuYXBzaG90KSB7XG4gICAgICAgICAgICAgIHZvbHVtZVNuYXBzaG90ID0gc2F2ZVZvbHVtZVNuYXBzaG90KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5tdXRlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdQbGF5LmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3VtZShjYWxsT3JpZ1BsYXkpIHtcbiAgICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGxheSkge1xuICAgICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5yZXN1bWVBZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBcdGlmICghaXNWcGFpZFBsYXlpbmcoKSkge1xuICAgICAgICAgICAgICAgIG9yaWdQbGF5LmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgICAgIFx0fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIG1vbmtleSBwYXRjaCB0byBoYW5kbGUgcGF1c2Ugb2YgcGxheWluZyBhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGF1c2UgPSBwbGF5ZXIucGF1c2U7XG4gICAgcGxheWVyLnBhdXNlID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2UpIHtcbiAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BhdXNlKSB7XG4gICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5wYXVzZUFkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgXHRpZiAoIWlzVnBhaWRQbGF5aW5nKCkpIHtcbiAgICAgIFx0XHRvcmlnUGF1c2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIFx0fVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIG1vbmtleSBwYXRjaCB0byBoYW5kbGUgcGF1c2VkIHN0YXRlIG9mIHRoZSBwbGF5ZXIgd2hlbiBhZHMgYXJlIHBsYXlpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXG4gICAgICogQHJldHVybnMge3BsYXllcn1cbiAgICAgKi9cbiAgICB2YXIgb3JpZ1BhdXNlZCA9IHBsYXllci5wYXVzZWQ7XG4gICAgcGxheWVyLnBhdXNlZCA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BhdXNlZCkge1xuICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2VkKSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIudmFzdC5hZFVuaXQuaXNQYXVzZWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnUGF1c2VkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gaXNWcGFpZFBsYXlpbmcoKSB7XG5cdCAgcmV0dXJuIHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LlZQQUlEO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBZFBsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVRvVHJpZ2dlckZpcnN0UGxheSgpIHtcbiAgICBpZiAoaXNGaXJzdFBsYXkoKSkge1xuICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy5maXJzdFBsYXkgPSBmYWxzZTtcbiAgICAgIC8vX2ZpcnN0UGxheSA9IGZhbHNlO1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuZmlyc3RQbGF5Jyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRGaXJzdFBsYXkoKSB7XG5cdCAgd2luZG93Ll9tb2xTZXR0aW5ncy5maXJzdFBsYXkgPSB0cnVlO1xuXHQgICAgLy9fZmlyc3RQbGF5ID0gdHJ1ZTtcbiAgICBibGFja1Bvc3Rlci5zaG93KCk7XG4gICAgcmVzdG9yZUNvbnRlbnRWb2x1bWUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRmlyc3RQbGF5KCkge1xuXHQgIHJldHVybiB3aW5kb3cuX21vbFNldHRpbmdzLmZpcnN0UGxheTtcblx0ICAgIC8vcmV0dXJuIF9maXJzdFBsYXk7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlVm9sdW1lU25hcHNob3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG11dGVkOiBwbGF5ZXIubXV0ZWQoKSxcbiAgICAgIHZvbHVtZTogcGxheWVyLnZvbHVtZSgpXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVDb250ZW50Vm9sdW1lKCkge1xuICAgIGlmICh2b2x1bWVTbmFwc2hvdCkge1xuICAgICAgLy9wbGF5ZXIuY3VycmVudFRpbWUoMCk7XG4gICAgICByZXN0b3JlVm9sdW1lU25hcHNob3Qodm9sdW1lU25hcHNob3QpO1xuICAgICAgdm9sdW1lU25hcHNob3QgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVWb2x1bWVTbmFwc2hvdChzbmFwc2hvdCkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNPYmplY3Qoc25hcHNob3QpKSB7XG4gICAgICBwbGF5ZXIudm9sdW1lKHNuYXBzaG90LnZvbHVtZSk7XG4gICAgICBwbGF5ZXIubXV0ZWQoc25hcHNob3QubXV0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCbGFja1Bvc3RlcigpIHtcbiAgICBpZiAoIWRvbS5oYXNDbGFzcyhibGFja1Bvc3Rlci5lbCgpLCAndmpzLWhpZGRlbicpKSB7XG4gICAgICBibGFja1Bvc3Rlci5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3R5bGVzKCkge1xuICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTdHlsZXMoKSB7XG5cdCAgcGxheWVyLm9mZigncGxheScsIHRyeVRvVHJpZ2dlckZpcnN0UGxheSk7XG5cdCAgcGxheWVyLm9mZigndmFzdC5yZXNldCcsIHJlc2V0Rmlyc3RQbGF5KTsvL0V2ZXJ5IHRpbWUgd2UgY2hhbmdlIHRoZSBzb3VyY2VzIHdlIHJlc2V0IHRoZSBmaXJzdCBwbGF5LlxuXHQgIHBsYXllci5vZmYoJ3Zhc3QuZmlyc3RQbGF5JywgcmVzdG9yZUNvbnRlbnRWb2x1bWUpO1xuXHQgIHBsYXllci5vZmYoJ2Vycm9yJywgaGlkZUJsYWNrUG9zdGVyKTsvL0lmIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBwbGF5ZXIgd2UgcmVtb3ZlIHRoZSBibGFja3Bvc3RlciB0byBzaG93IHRoZSBlcnIgbXNnXG5cdCAgcGxheWVyLm9mZigndmFzdC5hZFN0YXJ0JywgaGlkZUJsYWNrUG9zdGVyKTtcblx0ICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIGhpZGVCbGFja1Bvc3Rlcik7XG5cdCAgcGxheWVyLm9mZigndmFzdC5hZEVycm9yJywgaGlkZUJsYWNrUG9zdGVyKTtcblx0ICBwbGF5ZXIub2ZmKCd2YXN0LmFkU3RhcnQnLCBhZGRTdHlsZXMpO1xuXHQgIHBsYXllci5vZmYoJ3Zhc3QuYWRFbmQnLCByZW1vdmVTdHlsZXMpO1xuXHQgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgcmVtb3ZlU3R5bGVzKTtcblx0ICBcbiAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XG5cdCAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5jb250cm9sQmFyLnBsYXlUb2dnbGUuZWwoKSwgJ3Zqcy1lbmRlZCcpO1xuXHQgIFxuXHQgIGlmIChlcnJvckRpYWxvZykge1xuXHRcdCAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCAgZXJyb3JEaWFsb2cuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcblx0XHQgIH0sIDUwMCk7XG5cdCAgfVxuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgcG9zdGVyIGF0dHJpYnV0ZSBmcm9tIHRoZSB2aWRlbyBlbGVtZW50IHRlY2gsIGlmIHByZXNlbnQuIFdoZW5cbiAqIHJldXNpbmcgYSB2aWRlbyBlbGVtZW50IGZvciBtdWx0aXBsZSB2aWRlb3MsIHRoZSBwb3N0ZXIgaW1hZ2Ugd2lsbCBicmllZmx5XG4gKiByZWFwcGVhciB3aGlsZSB0aGUgbmV3IHNvdXJjZSBsb2Fkcy4gUmVtb3ZpbmcgdGhlIGF0dHJpYnV0ZSBhaGVhZCBvZiB0aW1lXG4gKiBwcmV2ZW50cyB0aGUgcG9zdGVyIGZyb20gc2hvd2luZyB1cCBiZXR3ZWVuIHZpZGVvcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwbGF5ZXIgVGhlIHZpZGVvanMgcGxheWVyIG9iamVjdFxuICovXG5wbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIGlmICh0ZWNoKSB7XG4gICAgdGVjaC5yZW1vdmVBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICB9XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBsaXN0ZW4gdG8gbWFueSBldmVudHMgdW50aWwgb25lIG9mIHRoZW0gZ2V0cyBmaXJlZCwgdGhlbiB3ZVxuICogZXhlY3V0ZSB0aGUgaGFuZGxlciBhbmQgdW5zdWJzY3JpYmUgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnM7XG4gKlxuICogQHBhcmFtIHBsYXllciBzcGVjaWZpYyBwbGF5ZXIgZnJvbSB3aGVyZSB0byBsaXN0ZW4gZm9yIHRoZSBldmVudHNcbiAqIEBwYXJhbSBldmVudHMgYXJyYXkgb2YgZXZlbnRzXG4gKiBAcGFyYW0gaGFuZGxlciBmdW5jdGlvbiB0byBleGVjdXRlIG9uY2Ugb25lIG9mIHRoZSBldmVudHMgZmlyZXNcbiAqL1xucGxheWVyVXRpbHMub25jZSA9IGZ1bmN0aW9uIG9uY2UocGxheWVyLCBldmVudHMsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBwbGF5ZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBwbGF5ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59O1xuXG4vL3BsdWdpbiB1dGlsc1xucGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24gPSBmdW5jdGlvbihwbGF5ZXIsIHNob3cpIHtcblx0dmFyIGJ1dHRvbiA9IHBsYXllci5iaWdQbGF5QnV0dG9uLmVsXztcblx0aWYgKGJ1dHRvbikge1xuXHRcdGlmIChzaG93KSB7XG5cdFx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRidXR0b24uc3R5bGUuekluZGV4ID0gOTk5OTk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0YnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRidXR0b24uc3R5bGUuekluZGV4ID0gJyc7XG5cdFx0fVxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllclV0aWxzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG4vKipcbiAqXG4gKiBJTVBPUlRBTlQgTk9URTogVGhpcyBmdW5jdGlvbiBjb21lcyBmcm9tIGFuZ3VsYXJKcyBhbmQgd2FzIG9yaWdpbmFsbHkgY2FsbGVkIHVybFJlc29sdmVcbiAqICAgICAgICAgICAgICAgICB5b3UgY2FuIHRha2UgYSBsb29rIGF0IHRoZSBvcmlnaW5hbCBjb2RlIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL21hc3Rlci9zcmMvbmcvdXJsVXRpbHMuanNcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3Igbm9uLUlFIGJyb3dzZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBc3NpZ25pbmcgYSBVUkwgdG8gdGhlIGhyZWYgcHJvcGVydHkgb2YgYW4gYW5jaG9yIERPTSBub2RlLCBldmVuIG9uZSBhdHRhY2hlZCB0byB0aGUgRE9NLFxuICogcmVzdWx0cyBib3RoIGluIHRoZSBub3JtYWxpemluZyBhbmQgcGFyc2luZyBvZiB0aGUgVVJMLiAgTm9ybWFsaXppbmcgbWVhbnMgdGhhdCBhIHJlbGF0aXZlXG4gKiBVUkwgd2lsbCBiZSByZXNvbHZlZCBpbnRvIGFuIGFic29sdXRlIFVSTCBpbiB0aGUgY29udGV4dCBvZiB0aGUgYXBwbGljYXRpb24gZG9jdW1lbnQuXG4gKiBQYXJzaW5nIG1lYW5zIHRoYXQgdGhlIGFuY2hvciBub2RlJ3MgaG9zdCwgaG9zdG5hbWUsIHByb3RvY29sLCBwb3J0LCBwYXRobmFtZSBhbmQgcmVsYXRlZFxuICogcHJvcGVydGllcyBhcmUgYWxsIHBvcHVsYXRlZCB0byByZWZsZWN0IHRoZSBub3JtYWxpemVkIFVSTC4gIFRoaXMgYXBwcm9hY2ggaGFzIHdpZGVcbiAqIGNvbXBhdGliaWxpdHkgLSBTYWZhcmkgMSssIE1vemlsbGEgMSssIE9wZXJhIDcrLGUgZXRjLiAgU2VlXG4gKiBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3IgSUVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSUUgPj0gOCBhbmQgPD0gMTAgbm9ybWFsaXplcyB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gdGhlIGFuY2hvciBub2RlIHNpbWlsYXIgdG8gdGhlIG90aGVyXG4gKiBicm93c2Vycy4gIEhvd2V2ZXIsIHRoZSBwYXJzZWQgY29tcG9uZW50cyB3aWxsIG5vdCBiZSBzZXQgaWYgdGhlIFVSTCBhc3NpZ25lZCBkaWQgbm90IHNwZWNpZnlcbiAqIHRoZW0uICAoZS5nLiBpZiB5b3UgYXNzaWduIGEuaHJlZiA9IFwiZm9vXCIsIHRoZW4gYS5wcm90b2NvbCwgYS5ob3N0LCBldGMuIHdpbGwgYmUgZW1wdHkuKSAgV2VcbiAqIHdvcmsgYXJvdW5kIHRoYXQgYnkgcGVyZm9ybWluZyB0aGUgcGFyc2luZyBpbiBhIDJuZCBzdGVwIGJ5IHRha2luZyBhIHByZXZpb3VzbHkgbm9ybWFsaXplZFxuICogVVJMIChlLmcuIGJ5IGFzc2lnbmluZyB0byBhLmhyZWYpIGFuZCBhc3NpZ25pbmcgaXQgYS5ocmVmIGFnYWluLiAgVGhpcyBjb3JyZWN0bHkgcG9wdWxhdGVzIHRoZVxuICogcHJvcGVydGllcyBzdWNoIGFzIHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCwgZXRjLlxuICpcbiAqIElFNyBkb2VzIG5vdCBub3JtYWxpemUgdGhlIFVSTCB3aGVuIGFzc2lnbmVkIHRvIGFuIGFuY2hvciBub2RlLiAgKEFwcGFyZW50bHksIGl0IGRvZXMsIGlmIG9uZVxuICogdXNlcyB0aGUgaW5uZXIgSFRNTCBhcHByb2FjaCB0byBhc3NpZ24gdGhlIFVSTCBhcyBwYXJ0IG9mIGFuIEhUTUwgc25pcHBldCAtXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NzI3MjkpICBIb3dldmVyLCBzZXR0aW5nIGltZ1tzcmNdIGRvZXMgbm9ybWFsaXplIHRoZSBVUkwuXG4gKiBVbmZvcnR1bmF0ZWx5LCBzZXR0aW5nIGltZ1tzcmNdIHRvIHNvbWV0aGluZyBsaWtlIFwiamF2YXNjcmlwdDpmb29cIiBvbiBJRSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICogU2luY2UgdGhlIHByaW1hcnkgdXNhZ2UgZm9yIG5vcm1hbGl6aW5nIFVSTHMgaXMgdG8gc2FuaXRpemUgc3VjaCBVUkxzLCB3ZSBjYW4ndCB1c2UgdGhhdFxuICogbWV0aG9kIGFuZCBJRSA8IDggaXMgdW5zdXBwb3J0ZWQuXG4gKlxuICogUmVmZXJlbmNlczpcbiAqICAgaHR0cDovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEFuY2hvckVsZW1lbnRcbiAqICAgaHR0cDovL3d3dy5hcHRhbmEuY29tL3JlZmVyZW5jZS9odG1sL2FwaS9IVE1MQW5jaG9yRWxlbWVudC5odG1sXG4gKiAgIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL3B1bGwvMjkwMlxuICogICBodHRwOi8vamFtZXMucGFkb2xzZXkuY29tL2phdmFzY3JpcHQvcGFyc2luZy11cmxzLXdpdGgtdGhlLWRvbS9cbiAqXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZC5cbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxpemVzIGFuZCBwYXJzZXMgYSBVUkwuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIFVSTCBhcyBhIGRpY3Rpb25hcnkuXG4gKlxuICogICB8IG1lbWJlciBuYW1lICAgfCBEZXNjcmlwdGlvbiAgICB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBocmVmICAgICAgICAgIHwgQSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIFVSTCBpZiBpdCB3YXMgbm90IGFuIGFic29sdXRlIFVSTCB8XG4gKiAgIHwgcHJvdG9jb2wgICAgICB8IFRoZSBwcm90b2NvbCBpbmNsdWRpbmcgdGhlIHRyYWlsaW5nIGNvbG9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICB8IGhvc3QgICAgICAgICAgfCBUaGUgaG9zdCBhbmQgcG9ydCAoaWYgdGhlIHBvcnQgaXMgbm9uLWRlZmF1bHQpIG9mIHRoZSBub3JtYWxpemVkVXJsICAgIHxcbiAqICAgfCBzZWFyY2ggICAgICAgIHwgVGhlIHNlYXJjaCBwYXJhbXMsIG1pbnVzIHRoZSBxdWVzdGlvbiBtYXJrICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgIHwgaGFzaCAgICAgICAgICB8IFRoZSBoYXNoIHN0cmluZywgbWludXMgdGhlIGhhc2ggc3ltYm9sXG4gKiAgIHwgaG9zdG5hbWUgICAgICB8IFRoZSBob3N0bmFtZVxuICogICB8IHBvcnQgICAgICAgICAgfCBUaGUgcG9ydCwgd2l0aG91dCBcIjpcIlxuICogICB8IHBhdGhuYW1lICAgICAgfCBUaGUgcGF0aG5hbWUsIGJlZ2lubmluZyB3aXRoIFwiL1wiXG4gKlxuICovXG5cbnZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuLyoqXG4gKiBkb2N1bWVudE1vZGUgaXMgYW4gSUUtb25seSBwcm9wZXJ0eVxuICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2NjMTk2OTg4KHY9dnMuODUpLmFzcHhcbiAqL1xudmFyIG1zaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cbmZ1bmN0aW9uIHVybFBhcnRzKHVybCkge1xuICB2YXIgaHJlZiA9IHVybDtcblxuICBpZiAobXNpZSkge1xuICAgIC8vIE5vcm1hbGl6ZSBiZWZvcmUgcGFyc2UuICBSZWZlciBJbXBsZW1lbnRhdGlvbiBOb3RlcyBvbiB3aHkgdGhpcyBpc1xuICAgIC8vIGRvbmUgaW4gdHdvIHN0ZXBzIG9uIElFLlxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XG4gICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gIH1cblxuICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gIHJldHVybiB7XG4gICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgIHBvcnQ6IHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHVybFBhcnNpbmdOb2RlLnBvcnQpPyB1cmxQYXJzaW5nTm9kZS5wb3J0OiA4MCxcbiAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKVxuICAgICAgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgOiAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICB9O1xufVxuXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGEgcXVlcnkgc3RyaW5nIChzZWFyY2ggcGFydCBvZiBhIHVybCkgYW5kIHJldHVybnMgYSBkaWN0aW9uYXJ5IHdpdGhcbiAqIHRoZSBkaWZmZXJlbnQga2V5IHZhbHVlIHBhaXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gcXMgcXVlcnlTdHJpbmdcbiAqL1xuZnVuY3Rpb24gcXVlcnlTdHJpbmdUb09iaihxcywgY29uZCkge1xuICB2YXIgcGFpcnMsIHFzT2JqO1xuXG4gIGNvbmQgPSB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25kKT8gY29uZCA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHFzID0gcXMudHJpbSgpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG4gIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcbiAgcXNPYmogPSB7fTtcblxuICB1dGlsaXRpZXMuZm9yRWFjaChwYWlycywgZnVuY3Rpb24gKHBhaXIpIHtcbiAgICB2YXIga2V5VmFsdWUsIGtleSwgdmFsdWU7XG4gICAgaWYgKHBhaXIgIT09ICcnKSB7XG4gICAgICBrZXlWYWx1ZSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgIGtleSA9IGtleVZhbHVlWzBdO1xuICAgICAgdmFsdWUgPSBrZXlWYWx1ZVsxXTtcbiAgICAgIGlmKGNvbmQoa2V5LCB2YWx1ZSkpe1xuICAgICAgICBxc09ialtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcXNPYmo7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuIG9iamVjdCBhbmQgc2VyaWFsaXplcyBpdCBpbnRvIGEgcXVlcnkgc3RyaW5nIHdpdGhvdXQgdGhlIGxlYWRpbmcgJz8nXG4gKiBAcGFyYW0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBvYmpUb1F1ZXJ5U3RyaW5nKG9iaikge1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgdXRpbGl0aWVzLmZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVybFBhcnRzOiB1cmxQYXJ0cyxcbiAgcXVlcnlTdHJpbmdUb09iajogcXVlcnlTdHJpbmdUb09iaixcbiAgb2JqVG9RdWVyeVN0cmluZzogb2JqVG9RdWVyeVN0cmluZ1xufTtcbiIsIi8qanNoaW50IHVudXNlZDpmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBOT0RFX1RZUEVfRUxFTUVOVCA9IDE7XG52YXIgU05BS0VfQ0FTRV9SRUdFWFAgPSAvW0EtWl0vZztcbnZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKyQvaTtcbi8qanNsaW50IG1heGxlbjogNTAwICovXG52YXIgSVNPODA4Nl9SRUdFWFAgPSAvXihbXFwrLV0/XFxkezR9KD8hXFxkezJ9XFxiKSkoKC0/KSgoMFsxLTldfDFbMC0yXSkoXFwzKFsxMl1cXGR8MFsxLTldfDNbMDFdKSk/fFcoWzAtNF1cXGR8NVswLTJdKSgtP1sxLTddKT98KDAwWzEtOV18MFsxLTldXFxkfFsxMl1cXGR7Mn18MyhbMC01XVxcZHw2WzEtNl0pKSkoW1RcXHNdKCgoWzAxXVxcZHwyWzAtM10pKCg6PylbMC01XVxcZCk/fDI0XFw6PzAwKShbXFwuLF1cXGQrKD8hOikpPyk/KFxcMTdbMC01XVxcZChbXFwuLF1cXGQrKT8pPyhbelpdfChbXFwrLV0pKFswMV1cXGR8MlswLTNdKTo/KFswLTVdXFxkKT8pPyk/KT8kLztcblxuXG5mdW5jdGlvbiBub29wKCl7IH1cblxuZnVuY3Rpb24gaXNOdWxsKG8pIHtcbiAgcmV0dXJuIG8gPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZChvKXtcbiAgcmV0dXJuIG8gIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQobyl7XG4gIHJldHVybiBvID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKG51bSl7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNPYmplY3Qob2JqKSAmJiBvYmoud2luZG93ID09PSBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJyYXkpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBhcnJheSApID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB1dGlsaXRpZXMuaXNXaW5kb3cob2JqKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihvYmopIHx8IHV0aWxpdGllcy5pc1VuZGVmaW5lZChvYmopKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGg7XG5cbiAgaWYgKG9iai5ub2RlVHlwZSA9PT0gTk9ERV9UWVBFX0VMRU1FTlQgJiYgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKG9iaikgfHwgdXRpbGl0aWVzLmlzQXJyYXkob2JqKSB8fCBsZW5ndGggPT09IDAgfHxcbiAgICB0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSAmJiBzdHIubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc05vdEVtcHR5U3RyaW5nKHN0cikge1xuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikgJiYgc3RyLmxlbmd0aCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gYXJyYXlMaWtlT2JqVG9BcnJheShhcmdzKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gIHZhciBrZXksIGxlbmd0aDtcbiAgaWYgKG9iaikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIGhhc093blByb3BlcnR5IGV4aXN0cyxcbiAgICAgICAgLy8gYXMgb24gSUU4IHRoZSByZXN1bHQgb2YgcXVlcnlTZWxlY3RvckFsbCBpcyBhbiBvYmplY3Qgd2l0aG91dCBhIGhhc093blByb3BlcnR5IGZ1bmN0aW9uXG4gICAgICAgIGlmIChrZXkgIT09ICdwcm90b3R5cGUnICYmIGtleSAhPT0gJ2xlbmd0aCcgJiYga2V5ICE9PSAnbmFtZScgJiYgKCFvYmouaGFzT3duUHJvcGVydHkgfHwgb2JqLmhhc093blByb3BlcnR5KGtleSkpKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgIHZhciBpc1ByaW1pdGl2ZSA9IHR5cGVvZiBvYmogIT09ICdvYmplY3QnO1xuICAgICAgZm9yIChrZXkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSB8fCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvYmouZm9yRWFjaCAmJiBvYmouZm9yRWFjaCAhPT0gZm9yRWFjaCkge1xuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQsIG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gc25ha2VfY2FzZShuYW1lLCBzZXBhcmF0b3IpIHtcbiAgc2VwYXJhdG9yID0gc2VwYXJhdG9yIHx8ICdfJztcbiAgcmV0dXJuIG5hbWUucmVwbGFjZShTTkFLRV9DQVNFX1JFR0VYUCwgZnVuY3Rpb24obGV0dGVyLCBwb3MpIHtcbiAgICByZXR1cm4gKHBvcyA/IHNlcGFyYXRvciA6ICcnKSArIGxldHRlci50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsKXtcbiAgaWYoIXV0aWxpdGllcy5pc1N0cmluZyhlbWFpbCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdChlbWFpbC50cmltKCkpO1xufVxuXG5mdW5jdGlvbiBleHRlbmQgKG9iaikge1xuICB2YXIgYXJnLCBpLCBrO1xuICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJnID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAoayBpbiBhcmcpIHtcbiAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qob2JqW2tdKSAmJiAhaXNOdWxsKG9ialtrXSkgJiYgaXNPYmplY3QoYXJnW2tdKSl7XG4gICAgICAgICAgb2JqW2tdID0gZXh0ZW5kKHt9LCBvYmpba10sIGFyZ1trXSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBvYmpba10gPSBhcmdba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKXtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBkZWNhcGl0YWxpemUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2Qgd29ya3MgdGhlIHNhbWUgd2F5IGFycmF5LnByb3RvdHlwZS5tYXAgd29ya3MgYnV0IGlmIHRoZSB0cmFuc2Zvcm1lciByZXR1cm5zIHVuZGVmaW5lLCB0aGVuXG4gKiBpdCB3b24ndCBiZSBhZGRlZCB0byB0aGUgdHJhbnNmb3JtZWQgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybUFycmF5KGFycmF5LCB0cmFuc2Zvcm1lcikge1xuICB2YXIgdHJhbnNmb3JtZWRBcnJheSA9IFtdO1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpe1xuICAgIHZhciB0cmFuc2Zvcm1lZEl0ZW0gPSB0cmFuc2Zvcm1lcihpdGVtLCBpbmRleCk7XG4gICAgaWYodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFuc2Zvcm1lZEl0ZW0pKSB7XG4gICAgICB0cmFuc2Zvcm1lZEFycmF5LnB1c2godHJhbnNmb3JtZWRJdGVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZEFycmF5O1xufVxuXG5mdW5jdGlvbiB0b0ZpeGVkRGlnaXRzKG51bSwgZGlnaXRzKSB7XG4gIHZhciBmb3JtYXR0ZWROdW0gPSBudW0gKyAnJztcbiAgZGlnaXRzID0gdXRpbGl0aWVzLmlzTnVtYmVyKGRpZ2l0cykgPyBkaWdpdHMgOiAwO1xuICBudW0gPSB1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSA/IG51bSA6IHBhcnNlSW50KG51bSwgMTApO1xuICBpZih1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSAmJiAhaXNOYU4obnVtKSl7XG4gICAgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XG4gICAgd2hpbGUoZm9ybWF0dGVkTnVtLmxlbmd0aCA8IGRpZ2l0cykge1xuICAgICAgZm9ybWF0dGVkTnVtID0gJzAnICsgZm9ybWF0dGVkTnVtO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkTnVtO1xuICB9XG4gIHJldHVybiBOYU4gKyAnJztcbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBwcmV2aW91c0NhbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIChkZWxheSArIDEpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAoKHRpbWUgLSBwcmV2aW91c0NhbGwpID49IGRlbGF5KSB7XG4gICAgICBwcmV2aW91c0NhbGwgPSB0aW1lO1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlIChjYWxsYmFjaywgd2FpdCkge1xuICB2YXIgdGltZW91dElkO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKXtcbiAgICBpZih0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH0sIHdhaXQpO1xuICB9O1xufVxuXG4vLyBhIGZ1bmN0aW9uIGRlc2lnbmVkIHRvIGJsb3cgdXAgdGhlIHN0YWNrIGluIGEgbmFpdmUgd2F5XG4vLyBidXQgaXQgaXMgb2sgZm9yIHZpZGVvSnMgY2hpbGRyZW4gY29tcG9uZW50c1xuZnVuY3Rpb24gdHJlZVNlYXJjaChyb290LCBnZXRDaGlsZHJlbiwgZm91bmQpe1xuICB2YXIgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbihyb290KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgaWYgKGZvdW5kKGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBlbCA9IHRyZWVTZWFyY2goY2hpbGRyZW5baV0sIGdldENoaWxkcmVuLCBmb3VuZCk7XG4gICAgICBpZiAoZWwpe1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVjaG9Gbih2YWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9O1xufVxuXG4vL05vdGU6IFN1cHBvcnRlZCBmb3JtYXRzIGNvbWUgZnJvbSBodHRwOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lXG4vLyBhbmQgdGhlIGlzbzg2MDEgcmVnZXggY29tZXMgZnJvbSBodHRwOi8vd3d3LnBlbGFnb2Rlc2lnbi5jb20vYmxvZy8yMDA5LzA1LzIwL2lzby04NjAxLWRhdGUtdmFsaWRhdGlvbi10aGF0LWRvZXNudC1zdWNrL1xuZnVuY3Rpb24gaXNJU084NjAxKHZhbHVlKSB7XG4gIGlmKHV0aWxpdGllcy5pc051bWJlcih2YWx1ZSkpe1xuICAgIHZhbHVlID0gdmFsdWUgKyAnJzsgIC8vd2UgbWFrZSBzdXJlIHRoYXQgd2UgYXJlIHdvcmtpbmcgd2l0aCBzdHJpbmdzXG4gIH1cblxuICBpZighdXRpbGl0aWVzLmlzU3RyaW5nKHZhbHVlKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIElTTzgwODZfUkVHRVhQLnRlc3QodmFsdWUudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIEJyb3dzZXIgaXMgSUU5IGFuZCBiZWxvd1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciB2ZXJzaW9uID0gdXRpbGl0aWVzLmdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKG5hdmlnYXRvcik7XG4gIGlmICh2ZXJzaW9uID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uIDwgMTA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cbiAqIFNvdXJjZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwOSh2PXZzLjg1KS5hc3B4XG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cbiAqL1xuZnVuY3Rpb24gZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKSB7XG4gIHZhciBydiA9IC0xO1xuXG4gIGlmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJykge1xuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIk1TSUUgKFswLTldezEsfVtcXC4wLTldezAsfSlcIik7XG4gICAgdmFyIHJlcyA9IHJlLmV4ZWModWEpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIHJ2ID0gcGFyc2VGbG9hdChyZXNbMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydjtcbn1cblxuZnVuY3Rpb24gaXNJRTExKCkge1xuICB2YXIgcmVzID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zZWFyY2goLyh0cmlkZW50KS4rcnZbOlxcc10oW1xcd1xcLl0rKS4rbGlrZVxcc2dlY2tvL2kpO1xuICByZXR1cm4gcmVzID49IDA7XG59XG5cbi8qKiogTW9iaWxlIFV0aWxpdHkgZnVuY3Rpb25zICoqKi9cbmZ1bmN0aW9uIGlzSURldmljZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfGFkKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG4gIHJldHVybiAvaVAoaG9uZXxhZHxvZCl8QW5kcm9pZHxXaW5kb3dzIFBob25lLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc0lQaG9uZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfG9kKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNBbmRyb2lkKCkge1xuICByZXR1cm4gL0FuZHJvaWQvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbnZhciB1dGlsaXRpZXMgPSB7XG4gIF9VQTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgbm9vcDogbm9vcCxcbiAgaXNOdWxsOiBpc051bGwsXG4gIGlzRGVmaW5lZDogaXNEZWZpbmVkLFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlMaWtlOiBpc0FycmF5TGlrZSxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc0VtcHR5U3RyaW5nOiBpc0VtcHR5U3RyaW5nLFxuICBpc05vdEVtcHR5U3RyaW5nOiBpc05vdEVtcHR5U3RyaW5nLFxuICBhcnJheUxpa2VPYmpUb0FycmF5OiBhcnJheUxpa2VPYmpUb0FycmF5LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBzbmFrZV9jYXNlOiBzbmFrZV9jYXNlLFxuICBpc1ZhbGlkRW1haWw6IGlzVmFsaWRFbWFpbCxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIGNhcGl0YWxpemU6IGNhcGl0YWxpemUsXG4gIGRlY2FwaXRhbGl6ZTogZGVjYXBpdGFsaXplLFxuICB0cmFuc2Zvcm1BcnJheTogdHJhbnNmb3JtQXJyYXksXG4gIHRvRml4ZWREaWdpdHM6IHRvRml4ZWREaWdpdHMsXG4gIHRocm90dGxlOiB0aHJvdHRsZSxcbiAgZGVib3VuY2U6IGRlYm91bmNlLFxuICB0cmVlU2VhcmNoOiB0cmVlU2VhcmNoLFxuICBlY2hvRm46IGVjaG9GbixcbiAgaXNJU084NjAxOiBpc0lTTzg2MDEsXG4gIGlzT2xkSUU6IGlzT2xkSUUsXG4gIGlzSUUxMTogaXNJRTExLFxuICBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbjogZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24sXG4gIGlzSURldmljZTogaXNJRGV2aWNlLFxuICBpc01vYmlsZTogaXNNb2JpbGUsXG4gIGlzSVBob25lOiBpc0lQaG9uZSxcbiAgaXNBbmRyb2lkOiBpc0FuZHJvaWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbGl0aWVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciB4bWwgPSB7fTtcblxueG1sLnN0clRvWE1MRG9jID0gZnVuY3Rpb24gc3RyVG9YTUxEb2Moc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XG4gIC8vSUUgOFxuICBpZih0eXBlb2Ygd2luZG93LkRPTVBhcnNlciA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciB4bWxEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MRE9NJyk7XG4gICAgeG1sRG9jdW1lbnQuYXN5bmMgPSBmYWxzZTtcbiAgICB4bWxEb2N1bWVudC5sb2FkWE1MKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpO1xuICAgIHJldHVybiB4bWxEb2N1bWVudDtcbiAgfVxuXG4gIHJldHVybiBwYXJzZVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcblxuICBmdW5jdGlvbiBwYXJzZVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKXtcbiAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIHZhciBwYXJzZWREb2N1bWVudDtcblxuICAgIC8vTm90ZTogVGhpcyB0cnkgY2F0Y2ggaXMgdG8gZGVhbCB3aXRoIHRoZSBmYWN0IHRoYXQgb24gSUUgcGFyc2VyLnBhcnNlRnJvbVN0cmluZyBkb2VzIHRocm93IGFuIGVycm9yIGJ1dCB0aGUgcmVzdCBvZiB0aGUgYnJvd3NlcnMgZG9uJ3QuXG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZERvY3VtZW50ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlLCBcImFwcGxpY2F0aW9uL3htbFwiKTtcblxuICAgICAgaWYoaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInhtbC5zdHJUb1hNTERPQzogRXJyb3IgcGFyc2luZyB0aGUgc3RyaW5nOiAnXCIgKyBzdHJpbmdDb250YWluaW5nWE1MU291cmNlICsgXCInXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWREb2N1bWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUGFyc2VFcnJvcihwYXJzZWREb2N1bWVudCkge1xuICAgIHRyeSB7IC8vIHBhcnNlciBhbmQgcGFyc2VyZXJyb3JOUyBjb3VsZCBiZSBjYWNoZWQgb24gc3RhcnR1cCBmb3IgZWZmaWNpZW5jeVxuICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKSxcbiAgICAgICAgZXJyb25lb3VzUGFyc2UgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKCdJTlZBTElEJywgJ3RleHQveG1sJyksXG4gICAgICAgIHBhcnNlcmVycm9yTlMgPSBlcnJvbmVvdXNQYXJzZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpWzBdLm5hbWVzcGFjZVVSSTtcblxuICAgICAgaWYgKHBhcnNlcmVycm9yTlMgPT09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJykge1xuICAgICAgICAvLyBJbiBQaGFudG9tSlMgdGhlIHBhcnNlZXJyb3IgZWxlbWVudCBkb2Vzbid0IHNlZW0gdG8gaGF2ZSBhIHNwZWNpYWwgbmFtZXNwYWNlLCBzbyB3ZSBhcmUganVzdCBndWVzc2luZyBoZXJlIDooXG4gICAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCA+IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZU5TKHBhcnNlcmVycm9yTlMsICdwYXJzZXJlcnJvcicpLmxlbmd0aCA+IDA7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy9Ob3RlIG9uIElFIHBhcnNlU3RyaW5nIHRocm93cyBhbiBlcnJvciBieSBpdHNlbGYgYW5kIGl0IHdpbGwgbmV2ZXIgcmVhY2ggdGhpcyBjb2RlLiBCZWNhdXNlIGl0IHdpbGwgaGF2ZSBmYWlsZWQgYmVmb3JlXG4gICAgfVxuICB9XG59O1xuXG54bWwucGFyc2VUZXh0ID0gZnVuY3Rpb24gcGFyc2VUZXh0IChzVmFsdWUpIHtcbiAgaWYgKC9eXFxzKiQvLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gbnVsbDsgfVxuICBpZiAoL14oPzp0cnVlfGZhbHNlKSQvaS50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIHNWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIjsgfVxuICBpZiAoaXNGaW5pdGUoc1ZhbHVlKSkgeyByZXR1cm4gcGFyc2VGbG9hdChzVmFsdWUpOyB9XG4gIGlmICh1dGlsaXRpZXMuaXNJU084NjAxKHNWYWx1ZSkpIHsgcmV0dXJuIG5ldyBEYXRlKHNWYWx1ZSk7IH1cbiAgcmV0dXJuIHNWYWx1ZS50cmltKCk7XG59O1xuXG54bWwuSlhPTlRyZWUgPSBmdW5jdGlvbiBKWE9OVHJlZSAob1hNTFBhcmVudCkge1xuICB2YXIgcGFyc2VUZXh0ID0geG1sLnBhcnNlVGV4dDtcblxuICAvL1RoZSBkb2N1bWVudCBvYmplY3QgaXMgYW4gZXNwZWNpYWwgb2JqZWN0IHRoYXQgaXQgbWF5IG1pc3Mgc29tZSBmdW5jdGlvbnMgb3IgYXR0cnMgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLlxuICAvL1RvIHByZXZlbnQgdGhpcyBwcm9ibGVtIHdpdGggY3JlYXRlIHRoZSBKWE9OVHJlZSB1c2luZyB0aGUgcm9vdCBjaGlsZE5vZGUgd2hpY2ggaXMgYSBmdWxseSBmbGVzaGVkIG5vZGUgb24gYWxsIHN1cHBvcnRlZFxuICAvL2Jyb3dzZXJzLlxuICBpZihvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCl7XG4gICAgcmV0dXJuIG5ldyB4bWwuSlhPTlRyZWUob1hNTFBhcmVudC5kb2N1bWVudEVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKG9YTUxQYXJlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgdmFyIHNDb2xsZWN0ZWRUeHQgPSBcIlwiO1xuICAgIGZvciAodmFyIG9Ob2RlLCBzUHJvcCwgdkNvbnRlbnQsIG5JdGVtID0gMDsgbkl0ZW0gPCBvWE1MUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBuSXRlbSsrKSB7XG4gICAgICBvTm9kZSA9IG9YTUxQYXJlbnQuY2hpbGROb2Rlcy5pdGVtKG5JdGVtKTtcbiAgICAgIC8qanNoaW50IGJpdHdpc2U6IGZhbHNlKi9cbiAgICAgIGlmICgob05vZGUubm9kZVR5cGUgLSAxIHwgMSkgPT09IDMpIHsgc0NvbGxlY3RlZFR4dCArPSBvTm9kZS5ub2RlVHlwZSA9PT0gMyA/IG9Ob2RlLm5vZGVWYWx1ZS50cmltKCkgOiBvTm9kZS5ub2RlVmFsdWU7IH1cbiAgICAgIGVsc2UgaWYgKG9Ob2RlLm5vZGVUeXBlID09PSAxICYmICFvTm9kZS5wcmVmaXgpIHtcbiAgICAgICAgc1Byb3AgPSB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9Ob2RlLm5vZGVOYW1lKTtcbiAgICAgICAgdkNvbnRlbnQgPSBuZXcgeG1sLkpYT05UcmVlKG9Ob2RlKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoc1Byb3ApKSB7XG4gICAgICAgICAgaWYgKHRoaXNbc1Byb3BdLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgeyB0aGlzW3NQcm9wXSA9IFt0aGlzW3NQcm9wXV07IH1cbiAgICAgICAgICB0aGlzW3NQcm9wXS5wdXNoKHZDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHsgdGhpc1tzUHJvcF0gPSB2Q29udGVudDsgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc0NvbGxlY3RlZFR4dCkgeyB0aGlzLmtleVZhbHVlID0gcGFyc2VUZXh0KHNDb2xsZWN0ZWRUeHQpOyB9XG4gIH1cblxuICAvL0lFOCBTdHVwaWQgZml4XG4gIHZhciBoYXNBdHRyID0gdHlwZW9mIG9YTUxQYXJlbnQuaGFzQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCc/IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGggPiAwOiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMoKTtcbiAgaWYgKGhhc0F0dHIpIHtcbiAgICB2YXIgb0F0dHJpYjtcbiAgICBmb3IgKHZhciBuQXR0cmliID0gMDsgbkF0dHJpYiA8IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGg7IG5BdHRyaWIrKykge1xuICAgICAgb0F0dHJpYiA9IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5pdGVtKG5BdHRyaWIpO1xuICAgICAgdGhpc1tcIkBcIiArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUob0F0dHJpYi5uYW1lKV0gPSBwYXJzZVRleHQob0F0dHJpYi52YWx1ZS50cmltKCkpO1xuICAgIH1cbiAgfVxufTtcblxueG1sLkpYT05UcmVlLnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICByZXR1cm4gdGhpc1snQCcgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKGF0dHIpXTtcbn07XG5cbnhtbC50b0pYT05UcmVlID0gZnVuY3Rpb24gdG9KWE9OVHJlZSh4bWxTdHJpbmcpe1xuICB2YXIgeG1sRG9jID0geG1sLnN0clRvWE1MRG9jKHhtbFN0cmluZyk7XG4gIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKHhtbERvYyk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBleHRyYWN0IHRoZSBrZXl2YWx1ZSBvZiBhIEpYT05UcmVlIG9ialxuICpcbiAqIEBwYXJhbSB4bWxPYmoge0pYT05UcmVlfVxuICogcmV0dXJuIHRoZSBrZXkgdmFsdWUgb3IgdW5kZWZpbmVkO1xuICovXG54bWwua2V5VmFsdWUgPSBmdW5jdGlvbiBnZXRLZXlWYWx1ZSh4bWxPYmopIHtcbiAgaWYoeG1sT2JqKXtcbiAgICByZXR1cm4geG1sT2JqLmtleVZhbHVlO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG54bWwuYXR0ciA9IGZ1bmN0aW9uIGdldEF0dHJWYWx1ZSh4bWxPYmosIGF0dHIpIHtcbiAgaWYoeG1sT2JqKSB7XG4gICAgcmV0dXJuIHhtbE9ialsnQCcgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKGF0dHIpXTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxueG1sLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZVhNTChzdHIpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jyk7XG59O1xuXG54bWwuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlWE1MKHN0cikge1xuICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhzdHIpKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvJmFwb3M7L2csIFwiJ1wiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcbiAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB4bWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vQGV4Y2x1ZGVcbnZhciB2aWRlb2pzID0gd2luZG93LnZpZGVvanMgfHwge1xuXHRnZXRDb21wb25lbnQgOiBmdW5jdGlvbigpIHt9LFxuXHRleHRlbmQgOiBmdW5jdGlvbigpIHt9LFxuXHRyZWdpc3RlckNvbXBvbmVudCA6IGZ1bmN0aW9uKCkge30sXG5cdHJlZ2lzdGVyUGx1Z2luIDogZnVuY3Rpb24oKSB7fVxufTtcbi8vIEBlbmRleGNsdWRlXG5cbndpbmRvdy5fbW9sU2V0dGluZ3MgPSBudWxsO1xuXG5yZXF1aXJlKCcuL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF81Jyk7XG5yZXF1aXJlKCcuL3BsdWdpbi9jb21wb25lbnRzL2JsYWNrLXBvc3Rlcl81Jyk7XG5cbmNvbnNvbGUubG9nKCdQcmViaWQgTWFpbE9ubGluZSBwbHVnaW4gdmVyc2lvbiAxLjIuOScpO1xuXG52YXIgdmlkZW9Kc1ZBU1QgPSByZXF1aXJlKCcuL3BsdWdpbi92aWRlb2pzLnZhc3QudnBhaWQnKTtcblxuaWYgKHZpZGVvanMucmVnaXN0ZXJQbHVnaW4pIHtcblx0dmlkZW9qcy5yZWdpc3RlclBsdWdpbigndmFzdENsaWVudCcsIHZpZGVvSnNWQVNUKTtcbn1cbmVsc2Uge1xuXHR2aWRlb2pzLnBsdWdpbigndmFzdENsaWVudCcsIHZpZGVvSnNWQVNUKTtcbn1cbiJdfQ==
>>>>>>> VIDLA-3567
