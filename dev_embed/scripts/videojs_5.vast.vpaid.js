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
},{"./InLine":10,"./Wrapper":24}],7:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"../../utils/xml":44}],8:[function(require,module,exports){
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
},{"../../utils/consoleLogger":37,"../../utils/utilityFunctions":43,"../../utils/xml":44,"./TrackingEvent":14}],9:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"./Companion":8,"./Linear":12,"./UniversalAdId":15}],10:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"../../utils/xml":44,"./Category":7,"./Creative":9,"./Verification":21,"./ViewableImpression":23,"./vastUtil":26}],11:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"../../utils/xml":44}],12:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');
var MediaFile = require('./MediaFile');
var VideoClicks = require('./VideoClicks');
var InteractiveCreativeFile = require('./InteractiveCreativeFile');

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

},{"../../utils/utilityFunctions":43,"../../utils/xml":44,"./InteractiveCreativeFile":11,"./MediaFile":13,"./TrackingEvent":14,"./VideoClicks":22,"./parsers":25}],13:[function(require,module,exports){
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

},{"../../utils/xml":44,"./vastUtil":26}],14:[function(require,module,exports){
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
},{"../../utils/xml":44,"./parsers":25}],15:[function(require,module,exports){
'use strict';

function UniversalAdId(universalAdIdJTree) {
	  if(!(this instanceof UniversalAdId)) {
	    return new UniversalAdId(universalAdIdJTree);
	  }

	  this.idRegistry = universalAdIdJTree.attr('idRegistry');
	  this.idValue = universalAdIdJTree.attr('idValue');
}

module.exports = UniversalAdId;

},{}],16:[function(require,module,exports){
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
    WRAPPER_LIMIT: 5
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
    if (adChain.length >= that.WRAPPER_LIMIT) {
      return callback(new VASTError("on VASTClient.getVASTAd.getAd, players wrapper limit reached (the limit is " + that.WRAPPER_LIMIT + ")", 302), adChain);
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

},{"../../utils/async":36,"../../utils/consoleLogger":37,"../../utils/http":39,"../../utils/utilityFunctions":43,"../../utils/xml":44,"./Ad":6,"./VASTError":17,"./VASTResponse":19,"./vastUtil":26}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
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
},{"../../utils/async":36,"../../utils/consoleLogger":37,"../../utils/dom":38,"../../utils/playerUtils":41,"../../utils/utilityFunctions":43,"./VASTError":17,"./VASTResponse":19,"./VASTTracker":20,"./vastUtil":26}],19:[function(require,module,exports){
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

VASTResponse.prototype._addLinear = function (linear) {
  if (linear instanceof Linear) {
    this._addDuration(linear.duration);
    this._addTrackingEvents(linear.trackingEvents);
    this._addVideoClicks(linear.videoClicks);
    this._addMediaFiles(linear.mediaFiles);
    this._addSkipoffset(linear.skipoffset);
    this._addAdParameters(linear.adParameters);
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


},{"../../utils/utilityFunctions":43,"./Ad":6,"./InLine":10,"./Linear":12,"./VideoClicks":22,"./Wrapper":24}],20:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"./VASTError":17,"./VASTResponse":19,"./vastUtil":26}],21:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"../../utils/xml":44,"./vastUtil":26}],22:[function(require,module,exports){
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
},{"../../utils/utilityFunctions":43,"../../utils/xml":44}],23:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"../../utils/xml":44}],24:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"../../utils/xml":44,"./Creative":9,"./Verification":21,"./ViewableImpression":23,"./vastUtil":26}],25:[function(require,module,exports){
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
},{"../../utils/utilityFunctions":43}],26:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":43,"../vpaid/VPAIDHTML5Tech":28}],27:[function(require,module,exports){
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
	console.log('[APN] VPAIDAdUnitWrapper->Calling initAd on creative');
	this.waitForEvent('AdLoaded', cb);
  this._adUnit.initAd(width, height, viewMode, desiredBitrate, adUnitData);
};

VPAIDAdUnitWrapper.prototype.resizeAd = function (width, height, viewMode, cb) {
  // NOTE: AdSizeChange event is only supported on VPAID 2.0 so for the moment we are not going to use it
  // and will assume that everything is fine after the async call
	console.log('[APN] VPAIDAdUnitWrapper->Calling resizeAd on creative');
  this.adUnitAsyncCall('resizeAd', width, height, viewMode, cb);
  if (window.MoatApiReference) {
  	window.MoatApiReference.dispatchEvent({type: 'AdSizeChange', adVolume: this.options.player.volume()});
  }
};

VPAIDAdUnitWrapper.prototype.startAd = function (cb) {
	console.log('[APN] VPAIDAdUnitWrapper->Calling startAd on creative');
	if (!this.adStarted) {
		this.waitForEvent('AdStarted', cb);
	}
  this._adUnit.startAd();
  if (this.adStarted) {
    cb(null);
  }
};

VPAIDAdUnitWrapper.prototype.stopAd = function (cb) {
	console.log('[APN] VPAIDAdUnitWrapper->Calling stopAd on creative');
  this.waitForEvent('AdStopped', cb);
  this._adUnit.stopAd();
};

VPAIDAdUnitWrapper.prototype.pauseAd = function (cb) {
	console.log('[APN] VPAIDAdUnitWrapper->Calling pauseAd on creative');
  this.waitForEvent('AdPaused', cb);
  this._adUnit.pauseAd();
};

VPAIDAdUnitWrapper.prototype.resumeAd = function (cb) {
	console.log('[APN] VPAIDAdUnitWrapper->Calling resumeAd on creative');
  this.waitForEvent('AdPlaying', cb);
  this._adUnit.resumeAd();
};

VPAIDAdUnitWrapper.prototype.expandAd = function (cb) {
	console.log('[APN] VPAIDAdUnitWrapper->Calling expandAd on creative');
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.expandAd();
};

VPAIDAdUnitWrapper.prototype.collapseAd = function (cb) {
	console.log('[APN] VPAIDAdUnitWrapper->Calling collapseAd on creative');
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.collapseAd();
};

VPAIDAdUnitWrapper.prototype.skipAd = function (cb) {
	console.log('[APN] VPAIDAdUnitWrapper->Calling skipAd on creative');
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

},{"../../utils/utilityFunctions":43,"../vast/VASTError":17}],28:[function(require,module,exports){
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

},{"../../utils/consoleLogger":37,"../../utils/dom":38,"../../utils/mimetypes":40,"../../utils/utilityFunctions":43,"../vast/VASTError":17,"VPAIDHTML5Client/js/VPAIDHTML5Client":3}],29:[function(require,module,exports){
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
    containerEl.id = 'APN-VPAID-container';
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
    	console.log('[APN] VPAIDIntegrator->Calling unloadAdUnit (implicitly invokes stopAd and unsubscribes VPAID events)');
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
		
		var apnTimeDisplay = document.getElementById('apn_time_display');
		if (!apnTimeDisplay) {
			apnTimeDisplay = document.createElement('div');
			player.controlBar.getChild('currentTimeDisplay').el_.appendChild(apnTimeDisplay);
			apnTimeDisplay.id = 'apn_time_display';
			apnTimeDisplay.class = 'vjs-current-time-display';
			apnTimeDisplay['aria-live'] = 'off';
			apnTimeDisplay.innerHTML = '<span class="vjs-control-text"></span>0:00';
			player.controlBar.getChild('currentTimeDisplay').el_.children[0].style.display = 'none';
		}
		else {
			player.controlBar.getChild('currentTimeDisplay').el_.children[0].style.display = 'none';
			apnTimeDisplay.style.display = 'block';
		}
		adUnit.getAdRemainingTime(function(that, time) {
			if (time >= 0) {
				var curTime = player.duration() - time;
				if (curTime >= 0) {
					apnTimeDisplay.childNodes[1].nodeValue = convertTimeToStr(curTime);
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
    //addClickThroughDivBlocker('https://www.appnexus.com/en');
    
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
				var apnTimeDisplay = document.getElementById('apn_time_display');
				if (apnTimeDisplay) {
					player.controlBar.getChild('currentTimeDisplay').el_.removeChild(apnTimeDisplay);
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

},{"../../utils/async":36,"../../utils/consoleLogger":37,"../../utils/dom":38,"../../utils/mimetypes":40,"../../utils/playerUtils":41,"../../utils/utilityFunctions":43,"../vast/VASTError":17,"../vast/VASTResponse":19,"../vast/VASTTracker":20,"../vast/vastUtil":26,"./VPAIDAdUnitWrapper":27}],30:[function(require,module,exports){
'use strict';

var dom = require('../../utils/dom');

var element = document.createElement('div');
element.className = 'vjs-ads-label vjs-control vjs-label-hidden';
element.innerHTML = 'Advertisement';

var AdsLabelFactory = function(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      baseComponent.call(this, player, options);

      // We asynchronously reposition the ads label element
      setTimeout(function () {
        var currentTimeComp = player.controlBar &&( player.controlBar.getChild("timerControls") || player.controlBar.getChild("currentTimeDisplay") );
        if(currentTimeComp) {
          player.controlBar.el().insertBefore(element, currentTimeComp.el());
        }
        dom.removeClass(element, 'vjs-label-hidden');
      }, 0);
    },

    el: function getElement() {
      return element;
    }
  };
};

module.exports = AdsLabelFactory;
},{"../../utils/dom":38}],31:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.getComponent('Component');

var AdsLabel = require('./ads-label')(baseVideoJsComponent);

videojs.registerComponent('AdsLabel', videojs.extend(baseVideoJsComponent, AdsLabel));

},{"./ads-label":30}],32:[function(require,module,exports){
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

var async = require('../utils/async');
var dom = require('../utils/dom');
var playerUtils = require('../utils/playerUtils');
var utilities = require('../utils/utilityFunctions');
var ViewabilityTracking = require("../utils/anVideoViewability");

var logger = require ('../utils/consoleLogger');

module.exports = function VASTPlugin(options) {
  var snapshot;
  var player = this;
  var vast = new VASTClient();
  var adsCanceled = false;
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
    
    // APN options
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
    function initMoatTracking(a,c,d,h,k){var f=document.createElement("script"),b=[];c={adData:{ids:c,duration:d,url:k},dispatchEvent:function(a){this.sendEvent?(b&&(b.push(a),a=b,b=!1),this.sendEvent(a)):b.push(a)}};d="_moatApi"+Math.floor(1E8*Math.random());var e,g;try{e=a.ownerDocument,g=e.defaultView||e.parentWindow}catch(l){e=document,g=window}g[d]=c;f.type="text/javascript";a&&a.insertBefore(f,a.childNodes[0]||null);f.src="https://z.moatads.com/"+h+"/moatvideo.js#"+d;return c};
    window.MoatApiReference = null;
    if (vastResponse.ads && vastResponse.ads.length > 0 && vastResponse.ads[0].inLine && vastResponse.ads[0].inLine.moat) {
  	  var ids = {level1: vastResponse.ads[0].inLine.moat.advid,
  			     level2: vastResponse.ads[0].inLine.moat.cpgid,
  			     level3: vastResponse.ads[0].inLine.moat.cpid,
  			     level4: vastResponse.ads[0].inLine.moat.crid};
  	  if (vastResponse.ads[0].inLine.moat.site_id) {
  		  ids.slicer1 = vastResponse.ads[0].inLine.moat.site_id;
  	  }
  	  //window.MoatApiReference = initMoatTracking(player.el_, ids, player.duration(), vastResponse.ads[0].inLine.moat.partnercode, player.currentSource().src);
  	  window.MoatApiReference = initMoatTracking(player.el_, ids, player.duration(), 'ninemediavpaid78961164', player.currentSource().src);
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

    /*** Local functions ****/
    function addAdsLabel() {
    	if (window._molSettings.playsInBreak) {
    		player.on('timeupdate', updateTimeControls);
    	}
      if (adFinished || player.controlBar.getChild('AdsLabel')) {
        return;
      }

      player.controlBar.addChild('AdsLabel');
    }

    function removeAdsLabel() {
    	if (window._molSettings.playsInBreak) {
    		player.off('timeupdate', updateTimeControls);
    		if (window._molSettings.timeOffset) {
				player.controlBar.getChild('currentTimeDisplay').el_.children[0].style.display = 'block';
				var apnTimeDisplay = document.getElementById('apn_time_display');
				if (apnTimeDisplay) {
					apnTimeDisplay.style.display = 'none';
				}
    		}
    	}
      player.controlBar.removeChild('AdsLabel');
      adFinished = true;
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
			var apnTimeDisplay = document.getElementById('apn_time_display');
			if (!apnTimeDisplay) {
				apnTimeDisplay = document.createElement('div');
				player.controlBar.getChild('currentTimeDisplay').el_.appendChild(apnTimeDisplay);
				apnTimeDisplay.id = 'apn_time_display';
				apnTimeDisplay.class = 'vjs-current-time-display';
				apnTimeDisplay['aria-live'] = 'off';
				apnTimeDisplay.innerHTML = '<span class="vjs-control-text"></span>0:00';
				player.controlBar.getChild('currentTimeDisplay').el_.children[0].style.display = 'none';
			}
			else {
				player.controlBar.getChild('currentTimeDisplay').el_.children[0].style.display = 'none';
				apnTimeDisplay.style.display = 'block';
			}
			var time = player.currentTime() + window._molSettings.timeOffset;
			apnTimeDisplay.childNodes[1].nodeValue = convertTimeToStr(time);
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

},{"../ads/vast/VASTClient":16,"../ads/vast/VASTError":17,"../ads/vast/VASTIntegrator":18,"../ads/vast/vastUtil":26,"../ads/vpaid/VPAIDIntegrator":29,"../utils/anVideoViewability":35,"../utils/async":36,"../utils/consoleLogger":37,"../utils/dom":38,"../utils/playerUtils":41,"../utils/utilityFunctions":43}],35:[function(require,module,exports){
/**
 * Appnexus Viewability Wrapper
 */

//var ANVideoViewabilityTracker = require("an-video-viewability");//appnexus viewability library
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

//APN utils
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

require('./plugin/components/ads-label_5');
require('./plugin/components/black-poster_5');

console.log('AppNexus MailOnline plugin version 1.1.25');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

if (videojs.registerPlugin) {
	videojs.registerPlugin('vastClient', videoJsVAST);
}
else {
	videojs.plugin('vastClient', videoJsVAST);
}

},{"./plugin/components/ads-label_5":31,"./plugin/components/black-poster_5":33,"./plugin/videojs.vast.vpaid":34}]},{},[45])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0FkLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQ2F0ZWdvcnkuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9Db21wYW5pb24uanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9DcmVhdGl2ZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0luTGluZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0ludGVyYWN0aXZlQ3JlYXRpdmVGaWxlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvTGluZWFyLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvTWVkaWFGaWxlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVHJhY2tpbmdFdmVudC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1VuaXZlcnNhbEFkSWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUQ2xpZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEVycm9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEludGVncmF0b3IuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUUmVzcG9uc2UuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUVHJhY2tlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZlcmlmaWNhdGlvbi5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZpZGVvQ2xpY2tzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVmlld2FibGVJbXByZXNzaW9uLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvV3JhcHBlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L3BhcnNlcnMuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC92YXN0VXRpbC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92cGFpZC9WUEFJREFkVW5pdFdyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURIVE1MNVRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsXzUuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXIuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNS5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi92aWRlb2pzLnZhc3QudnBhaWQuanMiLCJzcmMvc2NyaXB0cy91dGlscy9hblZpZGVvVmlld2FiaWxpdHkuanMiLCJzcmMvc2NyaXB0cy91dGlscy9hc3luYy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL2NvbnNvbGVMb2dnZXIuanMiLCJzcmMvc2NyaXB0cy91dGlscy9kb20uanMiLCJzcmMvc2NyaXB0cy91dGlscy9odHRwLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvbWltZXR5cGVzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvcGxheWVyVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91cmxVdGlscy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJzcmMvc2NyaXB0cy91dGlscy94bWwuanMiLCJzcmMvc2NyaXB0cy92aWRlb2pzXzUudmFzdC52cGFpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25UQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDck9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1a0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDamNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1FVEhPRFMgPSBbXG4gICAgJ2hhbmRzaGFrZVZlcnNpb24nLFxuICAgICdpbml0QWQnLFxuICAgICdzdGFydEFkJyxcbiAgICAnc3RvcEFkJyxcbiAgICAnc2tpcEFkJywgLy8gVlBBSUQgMi4wIG5ldyBtZXRob2RcbiAgICAncmVzaXplQWQnLFxuICAgICdwYXVzZUFkJyxcbiAgICAncmVzdW1lQWQnLFxuICAgICdleHBhbmRBZCcsXG4gICAgJ2NvbGxhcHNlQWQnLFxuICAgICdzdWJzY3JpYmUnLFxuICAgICd1bnN1YnNjcmliZSdcbl07XG5cbnZhciBFVkVOVFMgPSBbXG4gICAgJ0FkTG9hZGVkJyxcbiAgICAnQWRTdGFydGVkJyxcbiAgICAnQWRTdG9wcGVkJyxcbiAgICAnQWRTa2lwcGVkJyxcbiAgICAnQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRTaXplQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZExpbmVhckNoYW5nZScsXG4gICAgJ0FkRHVyYXRpb25DaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkRXhwYW5kZWRDaGFuZ2UnLFxuICAgICdBZFJlbWFpbmluZ1RpbWVDaGFuZ2UnLCAvLyBbRGVwcmVjYXRlZCBpbiAyLjBdIGJ1dCB3aWxsIGJlIHN0aWxsIGZpcmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICdBZFZvbHVtZUNoYW5nZScsXG4gICAgJ0FkSW1wcmVzc2lvbicsXG4gICAgJ0FkVmlkZW9TdGFydCcsXG4gICAgJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJyxcbiAgICAnQWRWaWRlb01pZHBvaW50JyxcbiAgICAnQWRWaWRlb1RoaXJkUXVhcnRpbGUnLFxuICAgICdBZFZpZGVvQ29tcGxldGUnLFxuICAgICdBZENsaWNrVGhydScsXG4gICAgJ0FkSW50ZXJhY3Rpb24nLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkVXNlckFjY2VwdEludml0YXRpb24nLFxuICAgICdBZFVzZXJNaW5pbWl6ZScsXG4gICAgJ0FkVXNlckNsb3NlJyxcbiAgICAnQWRQYXVzZWQnLFxuICAgICdBZFBsYXlpbmcnLFxuICAgICdBZExvZycsXG4gICAgJ0FkRXJyb3InXG5dO1xuXG52YXIgR0VUVEVSUyA9IFtcbiAgICAnZ2V0QWRMaW5lYXInLFxuICAgICdnZXRBZFdpZHRoJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRIZWlnaHQnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEV4cGFuZGVkJyxcbiAgICAnZ2V0QWRTa2lwcGFibGVTdGF0ZScsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkUmVtYWluaW5nVGltZScsXG4gICAgJ2dldEFkRHVyYXRpb24nLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZFZvbHVtZScsXG4gICAgJ2dldEFkQ29tcGFuaW9ucycsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkSWNvbnMnIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG5dO1xuXG52YXIgU0VUVEVSUyA9IFtcbiAgICAnc2V0QWRWb2x1bWUnXG5dO1xuXG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG5cbi8qKlxuICogSVZQQUlEQWRVbml0XG4gKlxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNyZWF0aXZlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSB2aWRlb1xuICovXG5mdW5jdGlvbiBJVlBBSURBZFVuaXQoY3JlYXRpdmUsIGVsLCB2aWRlbykge31cblxuXG4vKipcbiAqIGhhbmRzaGFrZVZlcnNpb25cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gVlBBSURWZXJzaW9uXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmhhbmRzaGFrZVZlcnNpb24gPSBmdW5jdGlvbiAoVlBBSURWZXJzaW9uLCBjYWxsYmFjaykge307XG5cbi8qKlxuICogaW5pdEFkXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmlld01vZGUgY2FuIGJlICdub3JtYWwnLCAndGh1bWJuYWlsJyBvciAnZnVsbHNjcmVlbidcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXNpcmVkQml0cmF0ZSBpbmRpY2F0ZXMgdGhlIGRlc2lyZWQgYml0cmF0ZSBpbiBrYnBzXG4gKiBAcGFyYW0ge29iamVjdH0gW2NyZWF0aXZlRGF0YV0gdXNlZCBmb3IgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gW2Vudmlyb25tZW50VmFyc10gdXNlZCBmb3IgcGFzc2luZyBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBvZiBqcyB2ZXJzaW9uXG4gKiBAcGFyYW0ge05vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMsIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdGFydEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdGFydEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN0b3BBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3RvcEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHNraXBBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc2tpcEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHJlc2l6ZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXNpemVBZCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjaykge307XG5cbi8qKlxuICogcGF1c2VBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUucGF1c2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiByZXN1bWVBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUucmVzdW1lQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZXhwYW5kQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmV4cGFuZEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGNvbGxhcHNlQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmNvbGxhcHNlQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7fTtcblxuLyoqXG4gKiBzdGFydEFkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge307XG5cblxuXG4vKipcbiAqIGdldEFkTGluZWFyXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZExpbmVhciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFdpZHRoXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFdpZHRoID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkSGVpZ2h0XG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEhlaWdodCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEV4cGFuZGVkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEV4cGFuZGVkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkU2tpcHBhYmxlU3RhdGVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkU2tpcHBhYmxlU3RhdGUgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRSZW1haW5pbmdUaW1lXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFJlbWFpbmluZ1RpbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWREdXJhdGlvblxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWREdXJhdGlvbiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFZvbHVtZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRWb2x1bWUgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRDb21wYW5pb25zXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZENvbXBhbmlvbnMgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRJY29uc1xuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRJY29ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzZXRBZFZvbHVtZVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2b2x1bWVcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbih2b2x1bWUsIGNhbGxiYWNrKSB7fTtcblxuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnTUVUSE9EUycsIE1FVEhPRFMpO1xuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnR0VUVEVSUycsIEdFVFRFUlMpO1xuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnU0VUVEVSUycsIFNFVFRFUlMpO1xuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnRVZFTlRTJywgIEVWRU5UUyk7XG5cblxudmFyIFZQQUlEMV9NRVRIT0RTID0gTUVUSE9EUy5maWx0ZXIoZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgcmV0dXJuIFsnc2tpcEFkJ10uaW5kZXhPZihtZXRob2QpID09PSAtMTtcbn0pO1xuXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdjaGVja1ZQQUlESW50ZXJmYWNlJywgZnVuY3Rpb24gY2hlY2tWUEFJREludGVyZmFjZSAoY3JlYXRpdmUpIHtcbiAgICB2YXIgcmVzdWx0ID0gVlBBSUQxX01FVEhPRFMuZXZlcnkoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY3JlYXRpdmVba2V5XSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSVZQQUlEQWRVbml0O1xuXG5mdW5jdGlvbiBhZGRTdGF0aWNUb0ludGVyZmFjZShJbnRlcmZhY2UsIG5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEludGVyZmFjZSwgbmFtZSwge1xuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBJVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL0lWUEFJREFkVW5pdCcpO1xudmFyIFN1YnNjcmliZXIgPSByZXF1aXJlKCcuL3N1YnNjcmliZXInKTtcbnZhciBjaGVja1ZQQUlESW50ZXJmYWNlID0gSVZQQUlEQWRVbml0LmNoZWNrVlBBSURJbnRlcmZhY2U7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgTUVUSE9EUyA9IElWUEFJREFkVW5pdC5NRVRIT0RTO1xudmFyIEVSUk9SID0gJ0FkRXJyb3InO1xudmFyIEFEX0NMSUNLID0gJ0FkQ2xpY2tUaHJ1JztcbnZhciBGSUxURVJFRF9FVkVOVFMgPSBJVlBBSURBZFVuaXQuRVZFTlRTLmZpbHRlcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gZXZlbnQgIT0gQURfQ0xJQ0s7XG59KTtcblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cblxuLyoqXG4gKiBWUEFJREFkVW5pdFxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIFZQQUlEQ3JlYXRpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtlbF0gdGhpcyB3aWxsIGJlIHVzZWQgaW4gaW5pdEFkIGVudmlyb25tZW50VmFycy5zbG90IGlmIGRlZmluZWRcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gW3ZpZGVvXSB0aGlzIHdpbGwgYmUgdXNlZCBpbiBpbml0QWQgZW52aXJvbm1lbnRWYXJzLnZpZGVvU2xvdCBpZiBkZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIFZQQUlEQWRVbml0KFZQQUlEQ3JlYXRpdmUsIGVsLCB2aWRlbywgaWZyYW1lKSB7XG4gICAgdGhpcy5faXNWYWxpZCA9IGNoZWNrVlBBSURJbnRlcmZhY2UoVlBBSURDcmVhdGl2ZSk7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRpdmUgPSBWUEFJRENyZWF0aXZlO1xuICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICB0aGlzLl92aWRlb0VsID0gdmlkZW87XG4gICAgICAgIHRoaXMuX2lmcmFtZSA9IGlmcmFtZTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBuZXcgU3Vic2NyaWJlcigpO1xuICAgICAgICB1dGlscy5zZXRGdWxsU2l6ZVN0eWxlKGVsKTtcbiAgICAgICAgJGFkZEV2ZW50c1N1YnNjcmliZXJzLmNhbGwodGhpcyk7XG4gICAgfVxufVxuXG5WUEFJREFkVW5pdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKElWUEFJREFkVW5pdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIGlzVmFsaWRWUEFJREFkIHdpbGwgcmV0dXJuIGlmIHRoZSBWUEFJRENyZWF0aXZlIHBhc3NlZCBpbiBjb25zdHJ1Y3RvciBpcyB2YWxpZCBvciBub3RcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuaXNWYWxpZFZQQUlEQWQgPSBmdW5jdGlvbiBpc1ZhbGlkVlBBSURBZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbn07XG5cbklWUEFJREFkVW5pdC5NRVRIT0RTLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgLy9OT1RFOiB0aGlzIG1ldGhvZHMgYXJndW1lbnRzIG9yZGVyIGFyZSBpbXBsZW1lbnRlZCBkaWZmZXJlbnRseSBmcm9tIHRoZSBzcGVjXG4gICAgdmFyIGlnbm9yZXMgPSBbXG4gICAgICAgICdzdWJzY3JpYmUnLFxuICAgICAgICAndW5zdWJzY3JpYmUnLFxuICAgICAgICAnaW5pdEFkJ1xuICAgIF07XG5cbiAgICBpZiAoaWdub3Jlcy5pbmRleE9mKG1ldGhvZCkgIT09IC0xKSByZXR1cm47XG5cbiAgICBWUEFJREFkVW5pdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyaWF0eSA9IElWUEFJREFkVW5pdC5wcm90b3R5cGVbbWV0aG9kXS5sZW5ndGg7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gKGFyaWF0eSA9PT0gYXJncy5sZW5ndGgpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmVbbWV0aG9kXS5hcHBseSh0aGlzLl9jcmVhdGl2ZSwgYXJncyk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH07XG59KTtcblxuXG4vKipcbiAqIGluaXRBZCBjb25jcmVhdGUgaW1wbGVtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb24sIGlmIGVsICYgdmlkZW8gd2FzIHVzZWQgaW4gY29uc3RydWN0b3Igc2xvdCAmIHZpZGVvU2xvdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiBpbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHtcbiAgICBjcmVhdGl2ZURhdGEgPSBjcmVhdGl2ZURhdGEgfHwge307XG4gICAgZW52aXJvbm1lbnRWYXJzID0gdXRpbHMuZXh0ZW5kKHtcbiAgICAgICAgc2xvdDogdGhpcy5fZWwsXG4gICAgICAgIHZpZGVvU2xvdDogdGhpcy5fdmlkZW9FbFxuICAgIH0sIGVudmlyb25tZW50VmFycyB8fCB7fSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpdmUuaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvcik7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cbi8qKlxuICogc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50LCBjb250ZXh0KTtcbn07XG5cblxuLyoqXG4gKiB1bnN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudCwgaGFuZGxlcikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50KTtcbn07XG5cbi8vYWxpYXNcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vbiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmU7XG5WUEFJREFkVW5pdC5wcm90b3R5cGUub2ZmID0gVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlO1xuXG5JVlBBSURBZFVuaXQuR0VUVEVSUy5mb3JFYWNoKGZ1bmN0aW9uKGdldHRlcikge1xuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVtnZXR0ZXJdID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW2dldHRlcl0oKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24gc2V0QWRWb2x1bWUodm9sdW1lLCBjYWxsYmFjaykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLnNldEFkVm9sdW1lKHZvbHVtZSk7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZS5nZXRBZFZvbHVtZSgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUocmVzdWx0ID09PSB2b2x1bWUsICdmYWlsZWQgdG8gYXBwbHkgdm9sdW1lOiAnICsgdm9sdW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuVlBBSURBZFVuaXQucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLnN0b3BBZCgpO1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlQWxsKCk7XG59O1xuXG5mdW5jdGlvbiAkYWRkRXZlbnRzU3Vic2NyaWJlcnMoKSB7XG4gICAgLy8gc29tZSBhZHMgaW1wbGVtZW50XG4gICAgLy8gc28gdGhleSBvbmx5IGhhbmRsZSBvbmUgc3Vic2NyaWJlclxuICAgIC8vIHRvIGhhbmRsZSB0aGlzIHdlIGNyZWF0ZSBvdXIgb25lXG4gICAgRklMVEVSRURfRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkdHJpZ2dlci5iaW5kKHRoaXMsIGV2ZW50KSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvLyBtYXAgdGhlIGNsaWNrIGV2ZW50IHRvIGJlIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGRlcGVuZGluZyBvZiB0aGUgb3JkZXIgb2YgdGhlIGFyZ3VtZW50c1xuICAgIC8vIGFuZCB0byBiZSBjb25zaXN0ZW50IHdpdGggdGhlIGZsYXNoXG4gICAgdGhpcy5fY3JlYXRpdmUuc3Vic2NyaWJlKCRjbGlja1RocnVIb29rLmJpbmQodGhpcyksIEFEX0NMSUNLKTtcblxuICAgIC8vIGJlY2F1c2Ugd2UgYXJlIGFkZGluZyB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZVxuICAgIC8vIHRoZSB1c2VyIGlzIG5vdCBhYmxlIHRvIGNsaWNrIGluIHRoZSB2aWRlb1xuICAgIGlmICh0aGlzLl92aWRlb0VsKSB7XG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLl9pZnJhbWUuY29udGVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHZpZGVvRWwgPSB0aGlzLl92aWRlb0VsO1xuICAgICAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZpZGVvRWwuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkY2xpY2tUaHJ1SG9vayh1cmwsIGlkLCBwbGF5ZXJIYW5kbGVzKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudHJpZ2dlclN5bmMoQURfQ0xJQ0ssIHt1cmw6IHVybCwgaWQ6IGlkLCBwbGF5ZXJIYW5kbGVzOiBwbGF5ZXJIYW5kbGVzfSk7XG59XG5cbmZ1bmN0aW9uICR0cmlnZ2VyKGV2ZW50KSB7XG4gICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXIoZXZlbnQsIEFycmF5LnByb3RvdHlwZS5zbGljZShhcmd1bWVudHMsIDEpKTtcbn1cblxuZnVuY3Rpb24gY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCBzdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgIHN1YnNjcmliZXJzLnRyaWdnZXIoRVJST1IsIGVycm9yKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURBZFVuaXQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHVuaXF1ZSA9IHV0aWxzLnVuaXF1ZSgndnBhaWRJZnJhbWUnKTtcbnZhciBWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXQnKTtcblxudmFyIGRlZmF1bHRUZW1wbGF0ZSA9ICc8IURPQ1RZUEUgaHRtbD4nICtcbiAgICAnPGh0bWwgbGFuZz1cImVuXCI+JyArXG4gICAgJzxoZWFkPjxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjwvaGVhZD4nICtcbiAgICAnPGJvZHkgc3R5bGU9XCJtYXJnaW46MDtwYWRkaW5nOjBcIj48ZGl2IGNsYXNzPVwiYWQtZWxlbWVudFwiPjwvZGl2PicgK1xuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJ7e2lmcmFtZVVSTF9KU319XCI+PC9zY3JpcHQ+JyArXG4gICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPicgK1xuICAgICd3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxcJ3tcImV2ZW50XCI6IFwicmVhZHlcIiwgXCJpZFwiOiBcInt7aWZyYW1lSUR9fVwifVxcJywgXFwne3tvcmlnaW59fVxcJyk7JyArXG4gICAgJzwvc2NyaXB0PicgK1xuICAgICc8L2JvZHk+JyArXG4gICAgJzwvaHRtbD4nO1xuXG52YXIgQURfU1RPUFBFRCA9ICdBZFN0b3BwZWQnO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuLyoqXG4gKiBWUEFJREhUTUw1Q2xpZW50XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCB0aGF0IHdpbGwgY29udGFpbiB0aGUgaWZyYW1lIHRvIGxvYWQgYWRVbml0IGFuZCBhIGVsIHRvIGFkZCB0byBhZFVuaXQgc2xvdFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSB2aWRlbyBkZWZhdWx0IHZpZGVvIGVsZW1lbnQgdG8gYmUgdXNlZCBieSBhZFVuaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdGVtcGxhdGVDb25maWddIHRlbXBsYXRlOiBodG1sIHRlbXBsYXRlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgZXh0cmFPcHRpb25zOiB0byBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFt2cGFpZE9wdGlvbnNdIHRpbWVvdXQ6IHdoZW4gbG9hZGluZyBhZFVuaXRcbiAqL1xuZnVuY3Rpb24gVlBBSURIVE1MNUNsaWVudChlbCwgdmlkZW8sIHRlbXBsYXRlQ29uZmlnLCB2cGFpZE9wdGlvbnMpIHtcbiAgICB0ZW1wbGF0ZUNvbmZpZyA9IHRlbXBsYXRlQ29uZmlnIHx8IHt9O1xuXG4gICAgdGhpcy5faWQgPSB1bmlxdWUoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyID0gdXRpbHMuY3JlYXRlRWxlbWVudEluRWwoZWwsICdkaXYnKTtcbiAgICB0aGlzLl92aWRlb0VsID0gdmlkZW87XG4gICAgdGhpcy5fdnBhaWRPcHRpb25zID0gdnBhaWRPcHRpb25zIHx8IHt0aW1lb3V0OiAxMDAwMH07XG5cbiAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZyA9IHtcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlQ29uZmlnLnRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZSxcbiAgICAgICAgZXh0cmFPcHRpb25zOiB0ZW1wbGF0ZUNvbmZpZy5leHRyYU9wdGlvbnMgfHwge31cbiAgICB9O1xufVxuXG4vKipcbiAqIGRlc3Ryb3lcbiAqXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBpc0Rlc3Ryb3llZFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmlzRGVzdHJveWVkID0gZnVuY3Rpb24gaXNEZXN0cm95ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbn07XG5cbi8qKlxuICogbG9hZEFkVW5pdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhZFVSTCB1cmwgb2YgdGhlIGpzIG9mIHRoZSBhZFVuaXRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xuICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIGZyYW1lID0gdXRpbHMuY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQoXG4gICAgICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSxcbiAgICAgICAgdXRpbHMuZXh0ZW5kKHtcbiAgICAgICAgICAgIGlmcmFtZVVSTF9KUzogYWRVUkwsXG4gICAgICAgICAgICBpZnJhbWVJRDogdGhpcy5nZXRJRCgpLFxuICAgICAgICAgICAgb3JpZ2luOiBnZXRPcmlnaW4oKVxuICAgICAgICB9LCB0aGlzLl90ZW1wbGF0ZUNvbmZpZy5leHRyYU9wdGlvbnMpXG4gICAgKTtcblxuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XG5cbiAgICB0aGlzLl9vbkxvYWQgPSB1dGlscy5jYWxsYmFja1RpbWVvdXQoXG4gICAgICAgIHRoaXMuX3ZwYWlkT3B0aW9ucy50aW1lb3V0LFxuICAgICAgICBvbkxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgb25UaW1lb3V0LmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuXG4gICAgZnVuY3Rpb24gb25Mb2FkIChlKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogZmFsc2UgKi9cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChlLm9yaWdpbiAhPT0gZ2V0T3JpZ2luKCkpIHJldHVybjtcbiAgICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcblxuICAgICAgICAvL2Rvbid0IGNsZWFyIHRpbWVvdXRcbiAgICAgICAgaWYgKHJlc3VsdC5pZCAhPT0gdGhhdC5nZXRJRCgpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGFkVW5pdCwgZXJyb3IsIGNyZWF0ZUFkO1xuICAgICAgICBpZiAoIXRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcblxuICAgICAgICAgICAgZXJyb3IgPSAndGhlIGlmcmFtZSBpcyBub3QgYW55bW9yZSBpbiB0aGUgRE9NIHRyZWUnO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVBZCA9IHRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZ2V0VlBBSURBZDtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUodHlwZW9mIGNyZWF0ZUFkID09PSAnZnVuY3Rpb24nLCAndGhlIGFkIGRpZG5cXCd0IHJldHVybiBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBhZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgdmFyIGFkRWwgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZC1lbGVtZW50Jyk7XG4gICAgICAgICAgICBhZFVuaXQgPSBuZXcgVlBBSURBZFVuaXQoY3JlYXRlQWQoKSwgYWRFbCwgdGhhdC5fdmlkZW9FbCwgdGhhdC5fZnJhbWUpO1xuICAgICAgICAgICAgYWRVbml0LnN1YnNjcmliZShBRF9TVE9QUEVELCAkYWREZXN0cm95ZWQuYmluZCh0aGF0KSk7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKGFkVW5pdC5pc1ZhbGlkVlBBSURBZCgpLCAndGhlIGFkZCBpcyBub3QgZnVsbHkgY29tcGxhaW50IHdpdGggVlBBSUQgc3BlY2lmaWNhdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhhdC5fYWRVbml0ID0gYWRVbml0O1xuICAgICAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoYXQpO1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgZXJyb3IgPyBudWxsIDogYWRVbml0KTtcblxuICAgICAgICAvL2NsZWFyIHRpbWVvdXRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgICBjYWxsYmFjaygndGltZW91dCcsIG51bGwpO1xuICAgIH1cbn07XG5cbi8qKlxuICogdW5sb2FkQWRVbml0XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS51bmxvYWRBZFVuaXQgPSBmdW5jdGlvbiB1bmxvYWRBZFVuaXQoKSB7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIGdldElEIHdpbGwgcmV0dXJuIHRoZSB1bmlxdWUgaWRcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmdldElEID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbn07XG5cblxuLyoqXG4gKiAkcmVtb3ZlRWxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cbmZ1bmN0aW9uICRyZW1vdmVFbChrZXkpIHtcbiAgICB2YXIgZWwgPSB0aGlzW2tleV07XG4gICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGFkRGVzdHJveWVkKCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbn1cblxuZnVuY3Rpb24gJHVubG9hZFByZXZpb3VzQWRVbml0KCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgJGRlc3Ryb3lBZFVuaXQuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gJHJlbW92ZUFkRWxlbWVudHMoKSB7XG4gICAgJHJlbW92ZUVsLmNhbGwodGhpcywgJ19mcmFtZScpO1xuICAgICRkZXN0cm95TG9hZExpc3RlbmVyLmNhbGwodGhpcyk7XG59XG5cbi8qKlxuICogJGRlc3Ryb3lMb2FkTGlzdGVuZXJcbiAqXG4gKi9cbmZ1bmN0aW9uICRkZXN0cm95TG9hZExpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLl9vbkxvYWQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuICAgICAgICB1dGlscy5jbGVhckNhbGxiYWNrVGltZW91dCh0aGlzLl9vbkxvYWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5fb25Mb2FkO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiAkZGVzdHJveUFkVW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbiAgICB9XG59XG5cbi8qKlxuICogJHRocm93SWZEZXN0cm95ZWRcbiAqXG4gKi9cbmZ1bmN0aW9uICR0aHJvd0lmRGVzdHJveWVkKCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnVlBBSURIVE1MNUNsaWVudCBhbHJlYWR5IGRlc3Ryb3llZCEnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbigpIHtcbiAgICBpZiggd2luZG93LmxvY2F0aW9uLm9yaWdpbiApIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArXG4gICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1Q2xpZW50O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFN1YnNjcmliZXIoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn1cblxuU3Vic2NyaWJlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSwgY29udGV4dCkge1xuICAgIGlmICghdGhpcy5pc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpKSB7XG4gICAgICAgIHRoaXMuZ2V0KGV2ZW50TmFtZSkucHVzaCh7aGFuZGxlcjogaGFuZGxlciwgY29udGV4dDogY29udGV4dCwgZXZlbnROYW1lOiBldmVudE5hbWV9KTtcbiAgICB9XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSB0aGlzLmdldChldmVudE5hbWUpLmZpbHRlcihmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlciAhPT0gc3Vic2NyaWJlci5oYW5kbGVyO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHt9O1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgc3Vic2NyaWJlcnMgPSB0aGlzLmdldChldmVudE5hbWUpXG4gICAgICAgIC5jb25jYXQodGhpcy5nZXQoJyonKSk7XG5cbiAgICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuaXNIYW5kbGVyQXR0YWNoZWQoc3Vic2NyaWJlci5oYW5kbGVyLCBzdWJzY3JpYmVyLmV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIuY2FsbChzdWJzY3JpYmVyLmNvbnRleHQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXJTeW5jID0gZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIuY2FsbChzdWJzY3JpYmVyLmNvbnRleHQsIGRhdGEpO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGV2ZW50TmFtZSkge1xuICAgIGlmICghdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUuaXNIYW5kbGVyQXR0YWNoZWQgPSBmdW5jdGlvbiBpc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoZXZlbnROYW1lKS5zb21lKGZ1bmN0aW9uKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgPT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdWJzY3JpYmVyO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogbm9vcCBhIGVtcHR5IGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIHZhbGlkYXRlIGlmIGlzIG5vdCB2YWxpZGF0ZSB3aWxsIHJldHVybiBhbiBFcnJvciB3aXRoIHRoZSBtZXNzYWdlXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBpc1ZhbGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZShpc1ZhbGlkLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGlzVmFsaWQgPyBudWxsIDogbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuXG52YXIgdGltZW91dHMgPSB7fTtcbi8qKlxuICogY2xlYXJDYWxsYmFja1RpbWVvdXRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIGhhbmRsZXIgdG8gcmVtb3ZlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyQ2FsbGJhY2tUaW1lb3V0KGZ1bmMpIHtcbiAgICB2YXIgdGltZW91dCA9IHRpbWVvdXRzW2Z1bmNdO1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgZGVsZXRlIHRpbWVvdXRzW2Z1bmNdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBjYWxsYmFja1RpbWVvdXQgaWYgdGhlIG9uU3VjY2VzcyBpcyBub3QgY2FsbGVkIGFuZCByZXR1cm5zIHRydWUgaW4gdGhlIHRpbWVsaW1pdCB0aGVuIG9uVGltZW91dCB3aWxsIGJlIGNhbGxlZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25TdWNjZXNzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblRpbWVvdXRcbiAqL1xuZnVuY3Rpb24gY2FsbGJhY2tUaW1lb3V0KHRpbWVyLCBvblN1Y2Nlc3MsIG9uVGltZW91dCkge1xuICAgIHZhciBjYWxsYmFjaywgdGltZW91dDtcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25TdWNjZXNzID0gbm9vcDtcbiAgICAgICAgZGVsZXRlIHRpbWVvdXRbY2FsbGJhY2tdO1xuICAgICAgICBvblRpbWVvdXQoKTtcbiAgICB9LCB0aW1lcik7XG5cbiAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAgICAgaWYgKG9uU3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICBjbGVhckNhbGxiYWNrVGltZW91dChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGltZW91dHNbY2FsbGJhY2tdID0gdGltZW91dDtcblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuXG4vKipcbiAqIGNyZWF0ZUVsZW1lbnRJbkVsXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRJbkVsKHBhcmVudCwgdGFnTmFtZSwgaWQpIHtcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBpZiAoaWQpIG5FbC5pZCA9IGlkO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lV2l0aENvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBzaW1wbGUgdGVtcGxhdGUgdXNpbmcge3t2YXJ9fVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQocGFyZW50LCB0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHZhciBpZnJhbWUgPSBjcmVhdGVJZnJhbWUocGFyZW50LCBudWxsLCBkYXRhLnpJbmRleCk7XG4gICAgaWYgKCFzZXRJZnJhbWVDb250ZW50KGlmcmFtZSwgc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpKSkgcmV0dXJuO1xuICAgIHJldHVybiBpZnJhbWU7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShwYXJlbnQsIHVybCwgekluZGV4KSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIG5FbC5zcmMgPSB1cmwgfHwgJ2Fib3V0OmJsYW5rJztcbiAgICBuRWwubWFyZ2luV2lkdGggPSAnMCc7XG4gICAgbkVsLm1hcmdpbkhlaWdodCA9ICcwJztcbiAgICBuRWwuZnJhbWVCb3JkZXIgPSAnMCc7XG4gICAgbkVsLndpZHRoID0gJzEwMCUnO1xuICAgIG5FbC5oZWlnaHQgPSAnMTAwJSc7XG4gICAgc2V0RnVsbFNpemVTdHlsZShuRWwpO1xuXG4gICAgaWYoekluZGV4KXtcbiAgICAgICAgbkVsLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcbiAgICB9XG5cbiAgICBuRWwuc2V0QXR0cmlidXRlKCdTQ1JPTExJTkcnLCdOTycpO1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG5mdW5jdGlvbiBzZXRGdWxsU2l6ZVN0eWxlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xufVxuXG4vKipcbiAqIHNpbXBsZVRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBzaW1wbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgPyBKU09OLnN0cmluZ2lmeShkYXRhW2tleV0pIDogZGF0YVtrZXldO1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cCgne3snICsga2V5ICsgJ319JywgJ2cnKSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLyoqXG4gKiBzZXRJZnJhbWVDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MSWZyYW1lRWxlbWVudH0gaWZyYW1lRWxcbiAqIEBwYXJhbSBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIHNldElmcmFtZUNvbnRlbnQoaWZyYW1lRWwsIGNvbnRlbnQpIHtcbiAgICB2YXIgaWZyYW1lRG9jID0gaWZyYW1lRWwuY29udGVudFdpbmRvdyAmJiBpZnJhbWVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgIGlmICghaWZyYW1lRG9jKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZnJhbWVEb2Mud3JpdGUoY29udGVudCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIGV4dGVuZCBvYmplY3Qgd2l0aCBrZXlzIGZyb20gYW5vdGhlciBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdG9FeHRlbmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcm9tU291cmNlXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0b0V4dGVuZCwgZnJvbVNvdXJjZSkge1xuICAgIE9iamVjdC5rZXlzKGZyb21Tb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHRvRXh0ZW5kW2tleV0gPSBmcm9tU291cmNlW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvRXh0ZW5kO1xufVxuXG5cbi8qKlxuICogdW5pcXVlIHdpbGwgY3JlYXRlIGEgdW5pcXVlIHN0cmluZyBldmVyeXRpbWUgaXMgY2FsbGVkLCBzZXF1ZW50aWFsbHkgYW5kIHByZWZpeGVkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICovXG5mdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XG4gICAgdmFyIGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdfJyArICgrK2NvdW50KTtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBub29wOiBub29wLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZSxcbiAgICBjbGVhckNhbGxiYWNrVGltZW91dDogY2xlYXJDYWxsYmFja1RpbWVvdXQsXG4gICAgY2FsbGJhY2tUaW1lb3V0OiBjYWxsYmFja1RpbWVvdXQsXG4gICAgY3JlYXRlRWxlbWVudEluRWw6IGNyZWF0ZUVsZW1lbnRJbkVsLFxuICAgIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50OiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudCxcbiAgICBjcmVhdGVJZnJhbWU6IGNyZWF0ZUlmcmFtZSxcbiAgICBzZXRGdWxsU2l6ZVN0eWxlOiBzZXRGdWxsU2l6ZVN0eWxlLFxuICAgIHNpbXBsZVRlbXBsYXRlOiBzaW1wbGVUZW1wbGF0ZSxcbiAgICBzZXRJZnJhbWVDb250ZW50OiBzZXRJZnJhbWVDb250ZW50LFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIHVuaXF1ZTogdW5pcXVlXG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcblxuZnVuY3Rpb24gQWQoYWRKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQWQpKSB7XG4gICAgcmV0dXJuIG5ldyBBZChhZEpUcmVlKTtcbiAgfVxuICB0aGlzLmluaXRpYWxpemUoYWRKVHJlZSk7XG59XG5cbkFkLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYWRKVHJlZSkge1xuICB0aGlzLmlkID0gYWRKVHJlZS5hdHRyKCdpZCcpO1xuICB0aGlzLnNlcXVlbmNlID0gYWRKVHJlZS5hdHRyKCdzZXF1ZW5jZScpO1xuICBpZiAod2luZG93Lm1vbF92YXN0VmVyc2lvbiA9PT0gNCkge1xuXHQgIHRoaXMuY29uZGl0aW9uYWxBZCA9IGFkSlRyZWUuYXR0cignY29uZGl0aW9uYWxBZCcpO1xuICB9XG5cbiAgaWYoYWRKVHJlZS5pbkxpbmUpIHtcbiAgICB0aGlzLmluTGluZSA9IG5ldyBJbkxpbmUoYWRKVHJlZS5pbkxpbmUpO1xuICB9XG5cbiAgaWYoYWRKVHJlZS53cmFwcGVyKXtcbiAgICB0aGlzLndyYXBwZXIgPSBuZXcgV3JhcHBlcihhZEpUcmVlLndyYXBwZXIpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gQ2F0ZWdvcnkoY2F0ZWdvcnlKVHJlZSkge1xuXHQgIGlmKCEodGhpcyBpbnN0YW5jZW9mIENhdGVnb3J5KSkge1xuXHQgICAgcmV0dXJuIG5ldyBDYXRlZ29yeShjYXRlZ29yeUpUcmVlKTtcblx0ICB9XG5cblx0ICB0aGlzLmF1dGhvcml0eSA9IGNhdGVnb3J5SlRyZWUuYXR0cignYXV0aG9yaXR5Jyk7XG5cdCAgdGhpcy5jYXRlZ29yeSA9IHhtbC5rZXlWYWx1ZShjYXRlZ29yeUpUcmVlKTtcbn1cblxuQ2F0ZWdvcnkucGFyc2VDYXRlZ29yaWVzID0gZnVuY3Rpb24gcGFyc2VDYXRlZ290aWVzKGNhdGVnb3JpZXNKVHJlZSkge1xuXHQgIHZhciBjYXRlZ29yaWVzID0gW107XG5cdCAgdmFyIGNhdGVnb3JpZXNEYXRhO1xuXHQgIGlmIChjYXRlZ29yaWVzKSB7XG5cdFx0ICBjYXRlZ29yaWVzRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGNhdGVnb3JpZXNKVHJlZSkgPyBjYXRlZ29yaWVzSlRyZWUgOiBbY2F0ZWdvcmllc0pUcmVlXTtcblx0XHQgIGNhdGVnb3JpZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG5cdFx0XHQgIHZhciBjYXQgPSBuZXcgQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuXHRcdFx0ICBpZiAoY2F0LmNhdGVnb3J5ICYmIGNhdC5jYXRlZ29yeS5sZW5ndGggPiAwICYmIGNhdC5hdXRob3JpdHkgJiYgY2F0LmF1dGhvcml0eS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCAgY2F0ZWdvcmllcy5wdXNoKG5ldyBDYXRlZ29yeShjYXRlZ29yeSkpO1xuXHRcdFx0ICB9XG5cdFx0ICB9KTtcblx0ICB9XG5cdCAgcmV0dXJuIGNhdGVnb3JpZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhdGVnb3J5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5cbmZ1bmN0aW9uIENvbXBhbmlvbihjb21wYW5pb25KVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFuaW9uKSkge1xuICAgIHJldHVybiBuZXcgQ29tcGFuaW9uKGNvbXBhbmlvbkpUcmVlKTtcbiAgfVxuXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGNvbXBhbmlvbiBhZFwiKTtcbiAgbG9nZ2VyLmRlYnVnIChcIjxDb21wYW5pb24+ICBjb21wYW5pb25KVHJlZTpcIiwgY29tcGFuaW9uSlRyZWUpO1xuXG4gIC8vUmVxdWlyZWQgRWxlbWVudHNcbiAgdGhpcy5jcmVhdGl2ZVR5cGUgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZS5zdGF0aWNSZXNvdXJjZSwgJ2NyZWF0aXZlVHlwZScpO1xuICB0aGlzLnN0YXRpY1Jlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLnN0YXRpY1Jlc291cmNlKTtcblxuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiAgY3JlYXRpdmVUeXBlOiBcIiArIHRoaXMuY3JlYXRpdmVUeXBlKTtcbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gIHN0YXRpY1Jlc291cmNlOiBcIiArIHRoaXMuc3RhdGljUmVzb3VyY2UpO1xuXG4gIC8vIFdlaXJkIGJ1ZyB3aGVuIHRoZSBKWE9OIHRyZWUgaXMgYnVpbHQgaXQgZG9lc24ndCBoYW5kbGUgY2FzaW5nIHByb3Blcmx5IGluIHRoaXMgc2l0dWF0aW9uLi4uXG4gIHZhciBodG1sUmVzb3VyY2UgPSBudWxsO1xuICBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLkhUTUxSZXNvdXJjZSkpIHtcbiAgICBodG1sUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSFRNTFJlc291cmNlKTtcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaFRNTFJlc291cmNlKSkge1xuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5oVE1MUmVzb3VyY2UpO1xuICB9XG5cbiAgaWYgKGh0bWxSZXNvdXJjZSAhPT0gbnVsbClcbiAge1xuICAgIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGh0bWwgcmVzb3VyY2VcIiwgaHRtbFJlc291cmNlKTtcbiAgfVxuXG4gIHRoaXMuaHRtbFJlc291cmNlID0gaHRtbFJlc291cmNlO1xuXG4gIHZhciBpZnJhbWVSZXNvdXJjZSA9IG51bGw7XG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpKSB7XG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpO1xuICB9IGVsc2UgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5pRnJhbWVyZXNvdXJjZSkpIHtcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5pRnJhbWVyZXNvdXJjZSk7XG4gIH1cblxuICBpZiAoaWZyYW1lUmVzb3VyY2UgIT09IG51bGwpXG4gIHtcbiAgICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiBmb3VuZCBpZnJhbWUgcmVzb3VyY2VcIiwgaWZyYW1lUmVzb3VyY2UpO1xuICB9XG5cbiAgdGhpcy5pZnJhbWVSZXNvdXJjZSA9IGlmcmFtZVJlc291cmNlO1xuXG4gIC8vT3B0aW9uYWwgZmllbGRzXG4gIHRoaXMuaWQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2lkJyk7XG4gIHRoaXMud2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3dpZHRoJyk7XG4gIHRoaXMuaGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdoZWlnaHQnKTtcbiAgdGhpcy5hc3NldFdpZHRoID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdhc3NldFdpZHRoJyk7XG4gIHRoaXMuYXNzZXRIZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2Fzc2V0SGVpZ2h0Jyk7XG4gIHRoaXMuZXhwYW5kZWRXaWR0aCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnZXhwYW5kZWRXaWR0aCcpO1xuICB0aGlzLmV4cGFuZGVkSGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdleHBhbmRlZEhlaWdodCcpO1xuICB0aGlzLmFwaUZyYW1ld29yayA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnYXBpRnJhbWV3b3JrJyk7XG4gIHRoaXMuYWRTbG90SUQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2FkU2xvdElEJyk7XG4gIHRoaXMuY29tcGFuaW9uQ2xpY2tUaHJvdWdoID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmNvbXBhbmlvbkNsaWNrVGhyb3VnaCk7XG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSBwYXJzZVRyYWNraW5nRXZlbnRzKGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzICYmIGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzLnRyYWNraW5nKTtcbiAgXG4gIGlmICh3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID09PSA0KSB7XG5cdCAgdGhpcy5weHJhdGlvID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdweHJhdGlvJyk7XG4gIH1cblxuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiAgY29tcGFuaW9uQ2xpY2tUaHJvdWdoOiBcIiArIHRoaXMuY29tcGFuaW9uQ2xpY2tUaHJvdWdoKTtcblxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VUcmFja2luZ0V2ZW50cyh0cmFja2luZ0V2ZW50cykge1xuICAgIHZhciB0cmFja2luZ3MgPSBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFja2luZ0V2ZW50cykpIHtcbiAgICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdEYXRhKSB7XG4gICAgICAgIHRyYWNraW5ncy5wdXNoKG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cmFja2luZ3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wYW5pb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcbnZhciBDb21wYW5pb24gPSByZXF1aXJlKCcuL0NvbXBhbmlvbicpO1xudmFyIFVuaXZlcnNhbEFkSWQgPSByZXF1aXJlKCcuL1VuaXZlcnNhbEFkSWQnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgQ3JlYXRpdmUpKSB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGl2ZShjcmVhdGl2ZUpUcmVlKTtcbiAgfVxuXG4gIHRoaXMuaWQgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2lkJyk7XG4gIHRoaXMuc2VxdWVuY2UgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ3NlcXVlbmNlJyk7XG4gIHRoaXMuYWRJZCA9IGNyZWF0aXZlSlRyZWUuYXR0cignYWRJZCcpO1xuICB0aGlzLmFwaUZyYW1ld29yayA9IGNyZWF0aXZlSlRyZWUuYXR0cignYXBpRnJhbWV3b3JrJyk7XG5cbiAgaWYoY3JlYXRpdmVKVHJlZS5saW5lYXIpIHtcbiAgICB0aGlzLmxpbmVhciA9IG5ldyBMaW5lYXIoY3JlYXRpdmVKVHJlZS5saW5lYXIpO1xuICB9XG5cbiAgaWYgKGNyZWF0aXZlSlRyZWUuY29tcGFuaW9uQWRzKSB7XG4gICAgdmFyIGNvbXBhbmlvbnMgPSBbXTtcbiAgICB2YXIgY29tcGFuaW9uQWRzID0gY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMgJiYgY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMuY29tcGFuaW9uO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGNvbXBhbmlvbkFkcykpIHtcbiAgICAgIGNvbXBhbmlvbkFkcyA9IHV0aWxpdGllcy5pc0FycmF5KGNvbXBhbmlvbkFkcykgPyBjb21wYW5pb25BZHMgOiBbY29tcGFuaW9uQWRzXTtcbiAgICAgIGNvbXBhbmlvbkFkcy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wYW5pb25EYXRhKSB7XG4gICAgICAgIGNvbXBhbmlvbnMucHVzaChuZXcgQ29tcGFuaW9uKGNvbXBhbmlvbkRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNvbXBhbmlvbkFkcyA9IGNvbXBhbmlvbnM7XG4gIH1cblxuICBpZiAod2luZG93Lm1vbF92YXN0VmVyc2lvbiA9PT0gNCkge1xuXHQgIHRoaXMudW5pdmVyc2FsQWRJZCA9IG5ldyBVbml2ZXJzYWxBZElkKGNyZWF0aXZlSlRyZWUudW5pdmVyc2FsQWRJZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYXQgdGhlIGNyZWF0aXZlLlxuICovXG5DcmVhdGl2ZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmxpbmVhcikge1xuICAgIHJldHVybiB0aGlzLmxpbmVhci5pc1N1cHBvcnRlZCgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5DcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyA9IGZ1bmN0aW9uIHBhcnNlQ3JlYXRpdmVzKGNyZWF0aXZlc0pUcmVlKSB7XG4gIHZhciBjcmVhdGl2ZXMgPSBbXTtcbiAgdmFyIGNyZWF0aXZlc0RhdGE7XG4gIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGNyZWF0aXZlc0pUcmVlKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlKSkge1xuICAgIGNyZWF0aXZlc0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheShjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkgPyBjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSA6IFtjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZV07XG4gICAgY3JlYXRpdmVzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgY3JlYXRpdmVzLnB1c2gobmV3IENyZWF0aXZlKGNyZWF0aXZlKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0aXZlcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3JlYXRpdmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcbnZhciBDcmVhdGl2ZSA9IHJlcXVpcmUoJy4vQ3JlYXRpdmUnKTtcbnZhciBDYXRlZ29yeSA9IHJlcXVpcmUoJy4vQ2F0ZWdvcnknKTtcbnZhciBWaWV3YWJsZUltcHJlc3Npb24gPSByZXF1aXJlKCcuL1ZpZXdhYmxlSW1wcmVzc2lvbicpO1xudmFyIFZlcmlmaWNhdGlvbiA9IHJlcXVpcmUoJy4vVmVyaWZpY2F0aW9uJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIEluTGluZShpbmxpbmVKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSW5MaW5lKSkge1xuICAgIHJldHVybiBuZXcgSW5MaW5lKGlubGluZUpUcmVlKTtcbiAgfVxuXG4gIC8vUmVxdWlyZWQgRmllbGRzXG4gIHRoaXMuYWRUaXRsZSA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZFRpdGxlKTtcbiAgdGhpcy5hZFN5c3RlbSA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZFN5c3RlbSk7XG4gIHRoaXMuaW1wcmVzc2lvbnMgPSB2YXN0VXRpbC5wYXJzZUltcHJlc3Npb25zKGlubGluZUpUcmVlLmltcHJlc3Npb24pO1xuICB0aGlzLmNyZWF0aXZlcyA9IENyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzKGlubGluZUpUcmVlLmNyZWF0aXZlcyk7XG5cbiAgLy9PcHRpb25hbCBGaWVsZHNcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5kZXNjcmlwdGlvbik7XG4gIHRoaXMuYWR2ZXJ0aXNlciA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZHZlcnRpc2VyKTtcbiAgdGhpcy5zdXJ2ZXlzID0gcGFyc2VTdXJ2ZXlzKGlubGluZUpUcmVlLnN1cnZleSk7XG4gIC8vdGhpcy5lcnJvciA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5lcnJvcik7XG4gIHRoaXMuZXJyb3JzID0gdmFzdFV0aWwucGFyc2VFcnJvcnMoaW5saW5lSlRyZWUuZXJyb3IpO1xuICB0aGlzLnByaWNpbmcgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUucHJpY2luZyk7XG4gIHRoaXMuZXh0ZW5zaW9ucyA9IGlubGluZUpUcmVlLmV4dGVuc2lvbnM7XG4gIGlmICh0aGlzLmV4dGVuc2lvbnMpIHtcblx0ICB0aGlzLm1vYXQgPSBwYXJzZU1vYXQodGhpcy5leHRlbnNpb25zKTtcbiAgfVxuICBpZiAod2luZG93Lm1vbF92YXN0VmVyc2lvbiA9PT0gNCkge1xuXHQgIGlmIChpbmxpbmVKVHJlZS5jYXRlZ29yeSkge1xuXHRcdCAgdGhpcy5jYXRlZ29yaWVzID0gQ2F0ZWdvcnkucGFyc2VDYXRlZ29yaWVzKGlubGluZUpUcmVlLmNhdGVnb3J5KTtcblx0ICB9XG5cdCAgaWYgKGlubGluZUpUcmVlLnZpZXdhYmxlSW1wcmVzc2lvbikge1xuXHRcdCAgdGhpcy52aWV3YWJsZUltcHJlc3Npb24gPSBuZXcgVmlld2FibGVJbXByZXNzaW9uKGlubGluZUpUcmVlLnZpZXdhYmxlSW1wcmVzc2lvbik7XG5cdCAgfVxuXHQgIGlmIChpbmxpbmVKVHJlZS5hZFZlcmlmaWNhdGlvbnMpIHtcblx0XHQgIHRoaXMuYWRWZXJpZmljYXRpb25zID0gVmVyaWZpY2F0aW9uLnBhcnNlQWRWZXJpZmljYXRpb25zKGlubGluZUpUcmVlLmFkVmVyaWZpY2F0aW9ucyk7XG5cdCAgfVxuICB9XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZVN1cnZleXMoaW5saW5lU3VydmV5cykge1xuICAgIGlmIChpbmxpbmVTdXJ2ZXlzKSB7XG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KHV0aWxpdGllcy5pc0FycmF5KGlubGluZVN1cnZleXMpID8gaW5saW5lU3VydmV5cyA6IFtpbmxpbmVTdXJ2ZXlzXSwgZnVuY3Rpb24gKHN1cnZleSkge1xuICAgICAgICBpZih1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhzdXJ2ZXkua2V5VmFsdWUpKXtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJpOiBzdXJ2ZXkua2V5VmFsdWUsXG4gICAgICAgICAgICB0eXBlOiBzdXJ2ZXkuYXR0cigndHlwZScpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VNb2F0KGV4dGVuc2lvbnMpIHtcblx0ICB2YXIgZ2V0TW9hdENvbmZpZ0RhdGEgPSBmdW5jdGlvbihhcnJFeHRlbnRpb25zKSB7XG5cdFx0ICBmb3IgKHZhciBpID0gMDsgaSA8IGFyckV4dGVudGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdCAgdmFyIGV4dGVuc2lvbiA9IGFyckV4dGVudGlvbnNbaV0uZXh0ZW5zaW9uO1xuXHRcdFx0ICBpZiAoZXh0ZW5zaW9uICYmIGV4dGVuc2lvbi5tb2F0KSB7XG5cdFx0XHRcdCAgdmFyIG1vYXQgPSB7fTtcblx0XHRcdFx0ICB2YXIgdmFsdWUgPSB4bWwua2V5VmFsdWUoZXh0ZW5zaW9uLm1vYXQpO1xuXHRcdFx0XHQgIHZhciBhcnIgPSB2YWx1ZS5zcGxpdCgnOycpO1xuXHRcdFx0XHQgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ICB2YXIgcGFyYW1zID0gYXJyW2pdLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdFx0ICBpZiAocGFyYW1zICYmIHBhcmFtcy5sZW5ndGggPT09IDIpIHtcblx0XHRcdFx0XHRcdCAgbW9hdFtwYXJhbXNbMF1dID0gcGFyYW1zWzFdO1xuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHQgIH1cblx0XHRcdFx0ICByZXR1cm4gbW9hdDtcblx0XHRcdCAgfVxuXHRcdCAgfVxuXHRcdCAgcmV0dXJuIHVuZGVmaW5lZDtcblx0ICB9O1xuXHQgIGlmIChleHRlbnNpb25zKSB7XG5cdFx0ICByZXR1cm4gZ2V0TW9hdENvbmZpZ0RhdGEodXRpbGl0aWVzLmlzQXJyYXkoZXh0ZW5zaW9ucykgPyBleHRlbnNpb25zIDogW2V4dGVuc2lvbnNdKTtcblx0ICB9XG5cdCAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGFsbCB0aGUgY3JlYXRpdmVzLlxuICovXG5JbkxpbmUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcbiAgdmFyIGksbGVuO1xuXG4gIGlmKHRoaXMuY3JlYXRpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvcihpID0gMCwgbGVuID0gdGhpcy5jcmVhdGl2ZXMubGVuZ3RoOyBpPCBsZW47IGkrPTEpe1xuICAgIGlmKCF0aGlzLmNyZWF0aXZlc1tpXS5pc1N1cHBvcnRlZCgpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluTGluZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUoaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVKVHJlZSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IEludGVyYWN0aXZlQ3JlYXRpdmVGaWxlKGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlSlRyZWUpO1xuICB9XG5cbiAgdGhpcy50eXBlID0gaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVKVHJlZS5hdHRyKCd0eXBlJyk7XG4gIHRoaXMuYXBpRnJhbWV3b3JrID0gaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVKVHJlZS5hdHRyKCdhcGlGcmFtZXdvcmsnKTtcbiAgdGhpcy5zcmMgPSB4bWwua2V5VmFsdWUoaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVKVHJlZSk7XG59XG5cbkludGVyYWN0aXZlQ3JlYXRpdmVGaWxlLnBhcnNlSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzID0gZnVuY3Rpb24gcGFyc2VJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXMoaWNmc0pUcmVlKSB7XG4gIHZhciBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXMgPSBbXTtcbiAgdmFyIGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlc0RhdGE7XG4gIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGljZnNKVHJlZSkpIHtcblx0ICBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXNEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkoaWNmc0pUcmVlKSA/IGljZnNKVHJlZSA6IFtpY2ZzSlRyZWVdO1xuXHQgIGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlc0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoZmlsZUpUcmVlKSB7XG5cdFx0ICBpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXMucHVzaChuZXcgSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUoZmlsZUpUcmVlKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGludGVyYWN0aXZlQ3JlYXRpdmVGaWxlcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBUcmFja2luZ0V2ZW50ID0gcmVxdWlyZSgnLi9UcmFja2luZ0V2ZW50Jyk7XG52YXIgTWVkaWFGaWxlID0gcmVxdWlyZSgnLi9NZWRpYUZpbGUnKTtcbnZhciBWaWRlb0NsaWNrcyA9IHJlcXVpcmUoJy4vVmlkZW9DbGlja3MnKTtcbnZhciBJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZSA9IHJlcXVpcmUoJy4vSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuXG5mdW5jdGlvbiBMaW5lYXIobGluZWFySlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExpbmVhcikpIHtcbiAgICByZXR1cm4gbmV3IExpbmVhcihsaW5lYXJKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIEVsZW1lbnRzXG4gIHRoaXMuZHVyYXRpb24gPSBwYXJzZXJzLmR1cmF0aW9uKHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5kdXJhdGlvbikpO1xuICB0aGlzLm1lZGlhRmlsZXMgPSBwYXJzZU1lZGlhRmlsZXMobGluZWFySlRyZWUubWVkaWFGaWxlcyAmJiBsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLm1lZGlhRmlsZSk7XG5cbiAgLy9PcHRpb25hbCBmaWVsZHNcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHBhcnNlVHJhY2tpbmdFdmVudHMobGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMgJiYgbGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMudHJhY2tpbmcsIHRoaXMuZHVyYXRpb24pO1xuICB0aGlzLnNraXBvZmZzZXQgPSBwYXJzZXJzLm9mZnNldCh4bWwuYXR0cihsaW5lYXJKVHJlZSwgJ3NraXBvZmZzZXQnKSwgdGhpcy5kdXJhdGlvbik7XG4gIFxuICAvLyBhZGp1c3Qgc2tpcG9mZnNldCB0byBwdWJsaXNoZXIgc2V0dGluZ3NcbiAgaWYgKHRoaXMuZHVyYXRpb24gJiYgd2luZG93Ll9tb2xTZXR0aW5ncyAmJiB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZSkge1xuXHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS5lbmFibGVkKSB7XG5cdFx0IGlmICh0aGlzLmR1cmF0aW9uID49IHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLnZpZGVvVGhyZXNob2xkKSB7XG5cdFx0XHQgdGhpcy5za2lwb2Zmc2V0ID0gd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9PZmZzZXQ7XG5cdFx0IH1cblx0XHQgZWxzZSB7XG5cdFx0XHQgdGhpcy5za2lwb2Zmc2V0ID0gbnVsbDsgXG5cdFx0IH1cblx0ICB9XG5cdCAgZWxzZSB7XG5cdFx0ICB0aGlzLnNraXBvZmZzZXQgPSBudWxsOyBcblx0ICB9XG4gIH1cblxuICBpZiAobGluZWFySlRyZWUudmlkZW9DbGlja3MpIHtcbiAgICB0aGlzLnZpZGVvQ2xpY2tzID0gbmV3IFZpZGVvQ2xpY2tzKGxpbmVhckpUcmVlLnZpZGVvQ2xpY2tzKTtcbiAgfVxuXG4gIGlmKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycykge1xuICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0geG1sLmtleVZhbHVlKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycyk7XG5cbiAgICBpZih4bWwuYXR0cihsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMsICd4bWxFbmNvZGVkJykpIHtcbiAgICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0geG1sLmRlY29kZSh0aGlzLmFkUGFyYW1ldGVycyk7XG4gICAgfVxuICB9XG4gIFxuICBpZiAod2luZG93Lm1vbF92YXN0VmVyc2lvbiA9PT0gNCkge1xuXHQgIGlmIChsaW5lYXJKVHJlZS5tZWRpYUZpbGVzICYmIGxpbmVhckpUcmVlLm1lZGlhRmlsZXMubWV6emFuaW5lKSB7XG5cdFx0ICB0aGlzLm1lenphbmluZSA9IHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLm1lenphbmluZSk7XG5cdCAgfVxuXHQgIGlmIChsaW5lYXJKVHJlZS5tZWRpYUZpbGVzICYmIGxpbmVhckpUcmVlLm1lZGlhRmlsZXMuaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUpIHtcblx0XHQgIHRoaXMuaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVzID0gSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGUucGFyc2VJbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZXMobGluZWFySlRyZWUubWVkaWFGaWxlcy5pbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZSk7XG5cdCAgfVxuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5nRXZlbnRzKHRyYWNraW5nRXZlbnRzLCBkdXJhdGlvbikge1xuICAgIHZhciB0cmFja2luZ3MgPSBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFja2luZ0V2ZW50cykpIHtcbiAgICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdEYXRhKSB7XG4gICAgICAgIHRyYWNraW5ncy5wdXNoKG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nRGF0YSwgZHVyYXRpb24pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJhY2tpbmdzO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VNZWRpYUZpbGVzKG1lZGlhRmlsZXNKeG9uVHJlZSkge1xuICAgIHZhciBtZWRpYUZpbGVzID0gW107XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQobWVkaWFGaWxlc0p4b25UcmVlKSkge1xuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlID0gdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlc0p4b25UcmVlKSA/IG1lZGlhRmlsZXNKeG9uVHJlZSA6IFttZWRpYUZpbGVzSnhvblRyZWVdO1xuXG4gICAgICBtZWRpYUZpbGVzSnhvblRyZWUuZm9yRWFjaChmdW5jdGlvbiAobWZEYXRhKSB7XG4gICAgICAgIG1lZGlhRmlsZXMucHVzaChuZXcgTWVkaWFGaWxlKG1mRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtZWRpYUZpbGVzO1xuICB9XG59XG5cbi8qKlxuICogTXVzdCByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIE1lZGlhRmlsZXMnIHR5cGUgaXMgc3VwcG9ydGVkXG4gKi9cbkxpbmVhci5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvcihpPTAsIGxlbj10aGlzLm1lZGlhRmlsZXMubGVuZ3RoOyBpPGxlbjsgaSs9MSkge1xuICAgIGlmKHRoaXMubWVkaWFGaWxlc1tpXS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVhcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgYXR0cmlidXRlc0xpc3QgPSBbXG4gIC8vUmVxdWlyZWQgYXR0cmlidXRlc1xuICAnZGVsaXZlcnknLFxuICAndHlwZScsXG4gICd3aWR0aCcsXG4gICdoZWlnaHQnLFxuICAvL09wdGlvbmFsIGF0dHJpYnV0ZXNcbiAgJ2NvZGVjJyxcbiAgJ2lkJyxcbiAgJ2JpdHJhdGUnLFxuICAnbWluQml0cmF0ZScsXG4gICdtYXhCaXRyYXRlJyxcbiAgJ3NjYWxhYmxlJyxcbiAgJ21haW50YWluQXNwZWN0UmF0aW8nLFxuICAnYXBpRnJhbWV3b3JrJ1xuXTtcblxuZnVuY3Rpb24gTWVkaWFGaWxlKG1lZGlhRmlsZUpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNZWRpYUZpbGUpKSB7XG4gICAgcmV0dXJuIG5ldyBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBhdHRyaWJ1dGVzXG4gIHRoaXMuc3JjID0geG1sLmtleVZhbHVlKG1lZGlhRmlsZUpUcmVlKTtcblxuICBmb3IodmFyIHg9MDsgeDxhdHRyaWJ1dGVzTGlzdC5sZW5ndGg7IHgrKykge1xuICAgIHZhciBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzTGlzdFt4XTtcbiAgICB0aGlzW2F0dHJpYnV0ZV0gPSBtZWRpYUZpbGVKVHJlZS5hdHRyKGF0dHJpYnV0ZSk7XG4gIH1cbn1cblxuTWVkaWFGaWxlLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XG4gIGlmKHZhc3RVdGlsLmlzVlBBSUQodGhpcykpIHtcbiAgICByZXR1cm4gISF2YXN0VXRpbC5maW5kU3VwcG9ydGVkVlBBSURUZWNoKHRoaXMudHlwZSk7XG4gIH1cblxuICBpZiAodGhpcy50eXBlID09PSAndmlkZW8veC1mbHYnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhRmlsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHBhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFja2luZ0V2ZW50KSkge1xuICAgIHJldHVybiBuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0pUcmVlLCBkdXJhdGlvbik7XG4gIH1cblxuICB0aGlzLm5hbWUgPSB0cmFja2luZ0pUcmVlLmF0dHIoJ2V2ZW50Jyk7XG4gIHRoaXMudXJpID0geG1sLmtleVZhbHVlKHRyYWNraW5nSlRyZWUpO1xuXG4gIGlmKCdwcm9ncmVzcycgPT09IHRoaXMubmFtZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gcGFyc2Vycy5vZmZzZXQodHJhY2tpbmdKVHJlZS5hdHRyKCdvZmZzZXQnKSwgZHVyYXRpb24pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2tpbmdFdmVudDsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFVuaXZlcnNhbEFkSWQodW5pdmVyc2FsQWRJZEpUcmVlKSB7XG5cdCAgaWYoISh0aGlzIGluc3RhbmNlb2YgVW5pdmVyc2FsQWRJZCkpIHtcblx0ICAgIHJldHVybiBuZXcgVW5pdmVyc2FsQWRJZCh1bml2ZXJzYWxBZElkSlRyZWUpO1xuXHQgIH1cblxuXHQgIHRoaXMuaWRSZWdpc3RyeSA9IHVuaXZlcnNhbEFkSWRKVHJlZS5hdHRyKCdpZFJlZ2lzdHJ5Jyk7XG5cdCAgdGhpcy5pZFZhbHVlID0gdW5pdmVyc2FsQWRJZEpUcmVlLmF0dHIoJ2lkVmFsdWUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml2ZXJzYWxBZElkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGh0dHAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9odHRwJykuaHR0cDtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWQVNUQ2xpZW50KG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RDbGllbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUQ2xpZW50KG9wdGlvbnMpO1xuICB9XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBXUkFQUEVSX0xJTUlUOiA1XG4gIH07XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcbn1cblxuVkFTVENsaWVudC5wcm90b3R5cGUuZ2V0VkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gZ2V0VkFTVFJlc3BvbnNlKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgdmFyIGVycm9yID0gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNhbGxiYWNrKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgdGhpcy5fZ2V0VkFTVEFkLmJpbmQodGhpcywgYWRUYWdVcmwpLFxuICAgICAgYnVpbGRWQVNUUmVzcG9uc2VcbiAgICBdLFxuICAgIGNhbGxiYWNrKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluLCBjYikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB0aGF0Ll9idWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbik7XG4gICAgICBjYihudWxsLCByZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2IoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNiKSB7XG4gICAgaWYgKCFhZFRhZ1VybCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGFkIHRhZyBVUkwnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGNhbGxiYWNrIGZ1bmN0aW9uJyk7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fZ2V0VkFTVEFkID0gZnVuY3Rpb24gKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgdmFzdFRyZWUpIHtcbiAgICB2YXIgd2F0ZXJmYWxsQWRzID0gdmFzdFRyZWUgJiYgdXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWRzKSA/IHZhc3RUcmVlLmFkcyA6IG51bGw7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgIH1cbiAgICBnZXRBZCh3YXRlcmZhbGxBZHMuc2hpZnQoKSwgW10sIHdhdGVyZmFsbEhhbmRsZXIpO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHdhdGVyZmFsbEhhbmRsZXIoZXJyb3IsIGFkQ2hhaW4pIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCBhZENoYWluKTtcbiAgICAgICAgaWYgKHdhdGVyZmFsbEFkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZ2V0QWQod2F0ZXJmYWxsQWRzLnNoaWZ0KCksW10sIHdhdGVyZmFsbEhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhZENoYWluKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGdldEFkV2F0ZXJmYWxsKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0VmFzdFhNTCA9IHRoYXQuX3JlcXVlc3RWQVNUWG1sLmJpbmQodGhhdCwgYWRUYWdVcmwpO1xuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICByZXF1ZXN0VmFzdFhNTCxcbiAgICAgIGJ1aWxkVmFzdFdhdGVyZmFsbFxuICAgIF0sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkVmFzdFdhdGVyZmFsbCh4bWxTdHIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHZhc3RUcmVlO1xuICAgIHRyeSB7XG4gICAgICB2YXN0VHJlZSA9IHhtbC50b0pYT05UcmVlKHhtbFN0cik7XG4gICAgICBsb2dnZXIuZGVidWcgKFwiYnVpbHQgSlhPTlRyZWUgZnJvbSBWQVNUIHJlc3BvbnNlOlwiLCB2YXN0VHJlZSk7XG5cbiAgICAgIGlmKHV0aWxpdGllcy5pc0FycmF5KHZhc3RUcmVlLmFkKSkge1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSB2YXN0VHJlZS5hZDtcbiAgICAgIH0gZWxzZSBpZih2YXN0VHJlZS5hZCl7XG4gICAgICAgIHZhc3RUcmVlLmFkcyA9IFt2YXN0VHJlZS5hZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpLCB2YXN0VHJlZSk7XG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRWYXN0V2F0ZXJmYWxsLCBlcnJvciBwYXJzaW5nIHhtbFwiLCAxMDApLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSB7XG4gICAgdmFyIHZhc3RWZXJzaW9uID0geG1sLmF0dHIodmFzdFRyZWUsICd2ZXJzaW9uJyk7XG5cbiAgICBpZiAoIXZhc3RUcmVlLmFkKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm8gQWQgaW4gVkFTVCB0cmVlJywgMzAzKTtcbiAgICB9XG5cbiAgICAvL2lmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyKSkge1xuICAgIGlmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyICYmIHZhc3RWZXJzaW9uICE9IDQpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm90IHN1cHBvcnRlZCBWQVNUIHZlcnNpb24gXCInICsgdmFzdFZlcnNpb24gKyAnXCInLCAxMDIpO1xuICAgIH1cbiAgICB3aW5kb3cubW9sX3Zhc3RWZXJzaW9uID0gdmFzdFZlcnNpb247XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFkKGFkVGFnVXJsLCBhZENoYWluLCBjYWxsYmFjaykge1xuICAgIGlmIChhZENoYWluLmxlbmd0aCA+PSB0aGF0LldSQVBQRVJfTElNSVQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuZ2V0QWQsIHBsYXllcnMgd3JhcHBlciBsaW1pdCByZWFjaGVkICh0aGUgbGltaXQgaXMgXCIgKyB0aGF0LldSQVBQRVJfTElNSVQgKyBcIilcIiwgMzAyKSwgYWRDaGFpbik7XG4gICAgfVxuXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoYWRUYWdVcmwpKSB7XG4gICAgICAgICAgcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgbmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dChudWxsLCBhZFRhZ1VybCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBidWlsZEFkXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCBhZCkge1xuICAgICAgaWYgKGFkKSB7XG4gICAgICAgIGFkQ2hhaW4ucHVzaChhZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWQud3JhcHBlcikge1xuICAgICAgICByZXR1cm4gZ2V0QWQoYWQud3JhcHBlci5WQVNUQWRUYWdVUkksIGFkQ2hhaW4sIGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGFkQ2hhaW4pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRBZChhZEp4b25UcmVlLCBjYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYWQgPSBuZXcgQWQoYWRKeG9uVHJlZSk7XG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZUFkKGFkKSwgYWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkQWQsIGVycm9yIHBhcnNpbmcgeG1sJywgMTAwKSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVBZChhZCkge1xuICAgIHZhciB3cmFwcGVyID0gYWQud3JhcHBlcjtcbiAgICB2YXIgaW5MaW5lID0gYWQuaW5MaW5lO1xuICAgIHZhciBlcnJNc2dQcmVmaXggPSAnb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVBZCwgJztcblxuICAgIGlmIChpbkxpbmUgJiYgd3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICtcIkluTGluZSBhbmQgV3JhcHBlciBib3RoIGZvdW5kIG9uIHRoZSBzYW1lIEFkXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgaWYgKCFpbkxpbmUgJiYgIXdyYXBwZXIpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibm9yIHdyYXBwZXIgbm9yIGlubGluZSBlbGVtZW50cyBmb3VuZCBvbiB0aGUgQWRcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAoaW5MaW5lICYmICFpbkxpbmUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJjb3VsZCBub3QgZmluZCBNZWRpYUZpbGUgdGhhdCBpcyBzdXBwb3J0ZWQgYnkgdGhpcyB2aWRlbyBwbGF5ZXJcIiwgNDAzKTtcbiAgICB9XG5cbiAgICBpZiAod3JhcHBlciAmJiAhd3JhcHBlci5WQVNUQWRUYWdVUkkpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibWlzc2luZyAnVkFTVEFkVGFnVVJJJyBpbiB3cmFwcGVyXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICAgIHRoYXQuX3JlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBmdW5jdGlvbiAoZXJyb3IsIHhtbFN0cikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdmFzdFRyZWUgPSB4bWwudG9KWE9OVHJlZSh4bWxTdHIpO1xuICAgICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUuYWQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQucmVxdWVzdFZBU1RBZCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl9yZXF1ZXN0VkFTVFhtbCA9IGZ1bmN0aW9uIHJlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFRhZ1VybCkpIHtcbiAgICAgIGFkVGFnVXJsKHJlcXVlc3RIYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nZ2VyLmluZm8gKFwicmVxdWVzdGluZyBhZFRhZ1VybDogXCIgKyBhZFRhZ1VybCk7XG4gICAgICBodHRwLmdldChhZFRhZ1VybCwgcmVxdWVzdEhhbmRsZXIsIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWxsYmFjayhlKTtcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcmVxdWVzdEhhbmRsZXIoZXJyb3IsIHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHZhciBlcnJNc2cgPSB1dGlsaXRpZXMuaXNEZWZpbmVkKHN0YXR1cykgP1xuICAgICAgXCJvbiBWQVNUQ2xpZW50LnJlcXVlc3RWYXN0WE1MLCBIVFRQIHJlcXVlc3QgZXJyb3Igd2l0aCBzdGF0dXMgJ1wiICsgc3RhdHVzICsgXCInXCIgOlxuICAgICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEVycm9yIGdldHRpbmcgdGhlIHRoZSBWQVNUIFhNTCB3aXRoIGhlIHBhc3NlZCBhZFRhZ1hNTCBmblwiO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoZXJyTXNnLCAzMDEpLCBudWxsKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl9idWlsZFZBU1RSZXNwb25zZSA9IGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluKSB7XG4gIHZhciByZXNwb25zZSA9IG5ldyBWQVNUUmVzcG9uc2UoKTtcbiAgYWRkQWRzVG9SZXNwb25zZShyZXNwb25zZSwgYWRzQ2hhaW4pO1xuICB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG5cbiAgLy8qKiogTG9jYWwgZnVuY3Rpb24gKioqKlxuICBmdW5jdGlvbiBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHMpIHtcbiAgICBhZHMuZm9yRWFjaChmdW5jdGlvbiAoYWQpIHtcbiAgICAgIHJlc3BvbnNlLmFkZEFkKGFkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NFdmVudHMgPSByZXNwb25zZS50cmFja2luZ0V2ZW50cy5wcm9ncmVzcztcblxuICAgIGlmICghcmVzcG9uc2UuaGFzTGluZWFyKCkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgUmVjZWl2ZWQgYW4gQWQgdHlwZSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWRcIiwgMjAwKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UuZHVyYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBNaXNzaW5nIGR1cmF0aW9uIGZpZWxkIGluIFZBU1QgcmVzcG9uc2VcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAocHJvZ3Jlc3NFdmVudHMpIHtcbiAgICAgIHByb2dyZXNzRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIHtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNOdW1iZXIocHJvZ3Jlc3NFdmVudC5vZmZzZXQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBtaXNzaW5nIG9yIHdyb25nIG9mZnNldCBhdHRyaWJ1dGUgb24gcHJvZ3Jlc3MgdHJhY2tpbmcgZXZlbnRcIiwgMTAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgYWRDaGFpbikge1xuICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KGFkQ2hhaW4pIHx8IGFkQ2hhaW4ubGVuZ3RoID09PSAwKSB7IC8vVGhlcmUgaXMgbm90aGluZyB0byB0cmFja1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlcnJvclVSTE1hY3JvcyA9IFtdO1xuICBhZENoYWluLmZvckVhY2goYWRkRXJyb3JVcmxNYWNyb3MpO1xuICB2YXN0VXRpbC50cmFjayhlcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3IuY29kZSB8fCA5MDB9KTsgIC8vOTAwIDw9PSBVbmRlZmluZWQgZXJyb3JcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAgKioqL1xuICBmdW5jdGlvbiBhZGRFcnJvclVybE1hY3JvcyhhZCkge1xuICAgIC8qaWYgKGFkLndyYXBwZXIgJiYgYWQud3JhcHBlci5lcnJvciAmJiB0eXBlb2YoYWQud3JhcHBlci5lcnJvcikgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVycm9yVVJMTWFjcm9zLnB1c2goYWQud3JhcHBlci5lcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGFkLmluTGluZSAmJiBhZC5pbkxpbmUuZXJyb3IgJiYgdHlwZW9mKGFkLmluTGluZS5lcnJvcikgPT09ICdzdHJpbmcnKSB7XG4gICAgXHRlcnJvclVSTE1hY3Jvcy5wdXNoKGFkLmluTGluZS5lcnJvcik7XG4gICAgfSovXG5cdCAgXG4gICAgICBpZiAoYWQud3JhcHBlciAmJiBhZC53cmFwcGVyLmVycm9ycyAmJiBBcnJheS5pc0FycmF5KGFkLndyYXBwZXIuZXJyb3JzKSkge1xuICAgIFx0ICBlcnJvclVSTE1hY3JvcyA9IGVycm9yVVJMTWFjcm9zLmNvbmNhdChhZC53cmFwcGVyLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZC5pbkxpbmUgJiYgYWQuaW5MaW5lLmVycm9ycyAmJiBBcnJheS5pc0FycmF5KGFkLmluTGluZS5lcnJvcnMpKSB7XG4gICAgXHQgIGVycm9yVVJMTWFjcm9zID0gZXJyb3JVUkxNYWNyb3MuY29uY2F0KGFkLmluTGluZS5lcnJvcnMpO1xuICAgICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RDbGllbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFZBU1RFcnJvcihtZXNzYWdlLCBjb2RlKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdWQVNUIEVycm9yOiAnICsgKG1lc3NhZ2UgfHwgJycpO1xuICBpZiAoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gIH1cbn1cblxuVkFTVEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuVkFTVEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJWQVNUIEVycm9yXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVEVycm9yOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBJbm5lciBoZWxwZXIgY2xhc3MgdGhhdCBkZWFscyB3aXRoIHRoZSBsb2dpYyBvZiB0aGUgaW5kaXZpZHVhbCBzdGVwcyBuZWVkZWQgdG8gc2V0dXAgYW4gYWQgaW4gdGhlIHBsYXllci5cbiAqXG4gKiBAcGFyYW0gcGxheWVyIHtvYmplY3R9IGluc3RhbmNlIG9mIHRoZSBwbGF5ZXIgdGhhdCB3aWxsIHBsYXkgdGhlIGFkLiBJdCBhc3N1bWVzIHRoYXQgdGhlIHZpZGVvanMtY29udHJpYi1hZHMgcGx1Z2luXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGhhcyBiZWVuIGluaXRpYWxpemVkIHdoZW4geW91IHVzZSBpdHMgdXRpbGl0eSBmdW5jdGlvbnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUVHJhY2tlciA9IHJlcXVpcmUoJy4vVkFTVFRyYWNrZXInKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxuZnVuY3Rpb24gVkFTVEludGVncmF0b3IocGxheWVyKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUSW50ZWdyYXRvcikpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RJbnRlZ3JhdG9yKHBsYXllcik7XG4gIH1cblxuICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgdGhpcy5lbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUgPSBmYWxzZTtcbn1cblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLnBsYXlBZCA9IGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcblxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ09uIFZBU1RJbnRlZ3JhdG9yLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1RSZXNwb25zZScpKTtcbiAgfVxuXG4gIGFzeW5jLndhdGVyZmFsbChbXG4gICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIG5leHQobnVsbCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9LFxuICAgIHRoaXMuX3NlbGVjdEFkU291cmNlLmJpbmQodGhpcyksXG4gICAgdGhpcy5fY3JlYXRlVkFTVFRyYWNrZXIuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2guYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2hEaXZCbG9ja2VyLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkU2tpcEJ1dHRvbi5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fcGxheVNlbGVjdGVkQWQuYmluZCh0aGlzKVxuICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgaWYgKGVycm9yICYmIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgICAgICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZEVycm9yJywgYWRWb2x1bWU6IHRoYXQucGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICAgIH1cbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgY2FsbGJhY2soZXJyb3IsIHJlc3BvbnNlKTtcbiAgfSk7XG5cbiAgdGhpcy5fYWRVbml0ID0ge1xuICAgIF9zcmM6IG51bGwsXG4gICAgdHlwZTogJ1ZBU1QnLFxuICAgIHBhdXNlQWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQucGxheWVyLnBhdXNlKHRydWUpO1xuICAgIH0sXG5cbiAgICByZXN1bWVBZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5wbGF5ZXIucGxheSh0cnVlKTtcbiAgICB9LFxuXG4gICAgaXNQYXVzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGF0LnBsYXllci5wYXVzZWQodHJ1ZSk7XG4gICAgfSxcblxuICAgIGdldFNyYzogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRoaXMuX2FkVW5pdDtcbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2VsZWN0QWRTb3VyY2UgPSBmdW5jdGlvbiBzZWxlY3RBZFNvdXJjZShyZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHNvdXJjZTtcblxuICB2YXIgcGxheWVyV2lkdGggPSBkb20uZ2V0RGltZW5zaW9uKHRoaXMucGxheWVyLmVsKCkpLndpZHRoO1xuICByZXNwb25zZS5tZWRpYUZpbGVzLnNvcnQoZnVuY3Rpb24gY29tcGFyZVRvKGEsIGIpIHtcbiAgICB2YXIgZGVsdGFBID0gTWF0aC5hYnMocGxheWVyV2lkdGggLSBhLndpZHRoKTtcbiAgICB2YXIgZGVsdGFCID0gTWF0aC5hYnMocGxheWVyV2lkdGggLSBiLndpZHRoKTtcbiAgICByZXR1cm4gZGVsdGFBIC0gZGVsdGFCO1xuICB9KTtcblxuICBzb3VyY2UgPSB0aGlzLnBsYXllci5zZWxlY3RTb3VyY2UocmVzcG9uc2UubWVkaWFGaWxlcykuc291cmNlO1xuICBpZiAoc291cmNlKSB7XG4gICAgdGhpcy5wbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLm1lc3NhZ2UnLCBkYXRhOiB7bWVzc2FnZTogJ1BsYXlpbmcgJyArIHNvdXJjZS5zcmMgKyAnICh0eXBlID0gJyArIHNvdXJjZS50eXBlICsgJyknfX0pO1xuICB9XG4gIFxuICBpZiAoc291cmNlKSB7XG4gICAgbG9nZ2VyLmluZm8gKFwic2VsZWN0ZWQgc291cmNlOiBcIiwgc291cmNlKTtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICB0aGlzLl9hZFVuaXQuX3NyYyA9IHNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgcmVzcG9uc2UpO1xuICB9XG5cbiAgLy8gY29kZSA0MDMgPD09IENvdWxkbid0IGZpbmQgTWVkaWFGaWxlIHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgdmlkZW8gcGxheWVyXG4gIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJDb3VsZCBub3QgZmluZCBBZCBtZWRpYWZpbGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGxheWVyXCIsIDQwMyksIHJlc3BvbnNlKTtcbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbiBjcmVhdGVWQVNUVHJhY2tlcihhZE1lZGlhRmlsZSwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIG5ldyBWQVNUVHJhY2tlcihhZE1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlKSwgcmVzcG9uc2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FsbGJhY2soZSwgcmVzcG9uc2UpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gc2V0dXBFdmVudHMoYWRNZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgcHJldmlvdXNseU11dGVkO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSk7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XG4gIHBsYXllci5vbigncGF1c2UnLCB0cmFja1BhdXNlKTtcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XG4gIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xuXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgdW5iaW5kRXZlbnRzKTtcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkU2tpcCddLCBmdW5jdGlvbihldnQpe1xuICAgIGlmKGV2dC50eXBlID09PSAndmFzdC5hZEVuZCcpe1xuICAgICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0dmFyIHR5cGUgPSBldnQudHlwZSA9PT0gJ3Zhc3QuYWRFbmQnID8gJ0FkVmlkZW9Db21wbGV0ZScgOiAnQWRTdG9wcGVkJztcbiAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6IHR5cGUsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcGxheWVyLm9uZSgnYWRTdG9wJywgZnVuY3Rpb24oKSB7XG5cdCBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZHNDYW5jZWwnKTsgXG4gIH0pO1xuXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBhZE1lZGlhRmlsZSwgcmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge1xuICAgIHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UpO1xuICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRTdGFydCcsIHRyYWNrSW1wcmVzc2lvbnMpO1xuICAgIHBsYXllci5vZmYoJ3BhdXNlJywgdHJhY2tQYXVzZSk7XG4gICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHRyYWNrUHJvZ3Jlc3MpO1xuICAgIHBsYXllci5vZmYoJ3ZvbHVtZWNoYW5nZScsIHRyYWNrVm9sdW1lQ2hhbmdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSgpIHtcbiAgICBpZiAocGxheWVyLmlzRnVsbHNjcmVlbigpKSB7XG4gICAgICB0cmFja2VyLnRyYWNrRnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFja2VyLnRyYWNrRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1BhdXNlKCkge1xuICAgIC8vTk9URTogd2hlbmV2ZXIgYSB2aWRlbyBlbmRzIHRoZSB2aWRlbyBFbGVtZW50IHRyaWdnZXJzIGEgJ3BhdXNlJyBldmVudCBiZWZvcmUgdGhlICdlbmRlZCcgZXZlbnQuXG4gICAgLy8gICAgICBXZSBzaG91bGQgbm90IHRyYWNrIHRoaXMgcGF1c2UgZXZlbnQgYmVjYXVzZSBpdCBtYWtlcyB0aGUgVkFTVCB0cmFja2luZyBjb25mdXNpbmcgYWdhaW4gd2UgdXNlIGFcbiAgICAvLyAgICAgIFRocmVzaG9sZCBvZiAyIHNlY29uZHMgdG8gcHJldmVudCBmYWxzZSBwb3NpdGl2ZXMgb24gSU9TLlxuXHRcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLmJyZWFrRHVyYXRpb24pIHtcblx0XHRcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnJlYWxWaWRlb0R1cmF0aW9uKSB7XG5cdFx0XHQgICAgaWYgKE1hdGguYWJzKHdpbmRvdy5fbW9sU2V0dGluZ3MucmVhbFZpZGVvRHVyYXRpb24gLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPCAyKSB7XG5cdFx0XHQgICAgICAgIHJldHVybjtcblx0XHRcdCAgICB9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKE1hdGguYWJzKHBsYXllci5kdXJhdGlvbigpIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpIDwgMikge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGF1c2VkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgICB0cmFja2VyLnRyYWNrUGF1c2UoKTtcbiAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIHRydWUpO1xuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXknLCAndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZihldnQudHlwZSA9PT0gJ3BsYXknKXtcblx0ICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHQgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFBsYXlpbmcnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgICB9XG4gICAgICAgIHRyYWNrZXIudHJhY2tSZXN1bWUoKTtcbiAgICAgICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKCkge1xuICAgIHZhciBjdXJyZW50VGltZUluTXMgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDA7XG4gICAgdHJhY2tlci50cmFja1Byb2dyZXNzKGN1cnJlbnRUaW1lSW5Ncyk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRJbXByZXNzaW9uJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcbiAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1ZvbHVtZUNoYW5nZSgpIHtcbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZvbHVtZUNoYW5nZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgdmFyIG11dGVkID0gcGxheWVyLm11dGVkKCk7XG4gICAgaWYgKG11dGVkKSB7XG4gICAgICB0cmFja2VyLnRyYWNrTXV0ZSgpO1xuICAgIH0gZWxzZSBpZiAocHJldmlvdXNseU11dGVkKSB7XG4gICAgICB0cmFja2VyLnRyYWNrVW5tdXRlKCk7XG4gICAgfVxuICAgIHByZXZpb3VzbHlNdXRlZCA9IG11dGVkO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZFNraXBCdXR0b24gPSBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uKHNvdXJjZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBza2lwT2Zmc2V0SW5TZWM7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKHJlc3BvbnNlLnNraXBvZmZzZXQpKSB7XG4gICAgc2tpcE9mZnNldEluU2VjID0gcmVzcG9uc2Uuc2tpcG9mZnNldCAvIDEwMDA7XG4gICAgYWRkU2tpcEJ1dHRvblRvUGxheWVyKHRoaXMucGxheWVyLCBza2lwT2Zmc2V0SW5TZWMpO1xuICB9XG4gIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uVG9QbGF5ZXIocGxheWVyLCBza2lwT2Zmc2V0KSB7XG4gICAgdmFyIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgdmFyIHVwZGF0ZVNraXBCdXR0b24gPSB1cGRhdGVTa2lwQnV0dG9uU3RhdGUuYmluZCh0aGF0LCBza2lwQnV0dG9uLCBza2lwT2Zmc2V0LCBwbGF5ZXIpO1xuXG4gICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XG4gICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNraXBCdXR0b24pO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcbiAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVTa2lwQnV0dG9uKTtcbiAgICAgIGRvbS5yZW1vdmUoc2tpcEJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XG4gICAgc2tpcEJ1dHRvbi5pZCA9ICdhZFNraXBCdXR0b24nO1xuXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgICAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkU2tpcHBlZCcsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICAgICAgICB9XG4gICAgICAgIHRyYWNrZXIudHJhY2tTa2lwKCk7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU2tpcCcpO1xuICAgICAgfVxuICAgICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG5cbiAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXG4gICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2tpcEJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25TdGF0ZShza2lwQnV0dG9uLCBza2lwT2Zmc2V0LCBwbGF5ZXIpIHtcbiAgICB2YXIgdGltZUxlZnQgPSBNYXRoLmNlaWwoc2tpcE9mZnNldCAtIHBsYXllci5jdXJyZW50VGltZSgpKTtcbiAgICBpZiAodGltZUxlZnQgPiAwKSB7XG4gICAgICAgIC8vc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgaW4gXCIgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyh0aW1lTGVmdCwgMikgKyBcIi4uLlwiO1xuICAgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cInZhc3Qtc2tpcC1idXR0b24tdGV4dFwiPicgKyB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBUZXh0LnJlcGxhY2UoJyUlVElNRSUlJywgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHModGltZUxlZnQsIDIpKSArICc8L3A+JztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKTtcbiAgICAgICAgLy9za2lwQnV0dG9uLmlubmVySFRNTCA9IFwiU2tpcCBhZFwiO1xuICAgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcEJ1dHRvblRleHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpZnJhbWVCYWNrQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVCYWNrQnV0dG9uJyk7XG4gICAgaWYgKCFpZnJhbWVCYWNrQnV0dG9uKSB7XG4gICAgICAgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaCA9IGZ1bmN0aW9uIGFkZENsaWNrVGhyb3VnaChtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lID0gdGhpcy5lbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWU7XG4gIFxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciBibG9ja2VyID0gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKTtcbiAgdmFyIHVwZGF0ZUJsb2NrZXIgPSB1cGRhdGVCbG9ja2VyVVJMLmJpbmQodGhpcywgYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcik7XG5cbiAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGJsb2NrZXIsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xuICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVCbG9ja2VyKTtcbiAgXG4gIGlmIChlbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUpIHtcblx0ICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVEaXNwbGF5U3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjcmVhdGVDbGlja1Rocm91Z2hCbG9ja2VyKHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpIHtcblx0XHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5kaXNhYmxlQ2xpY2tUaHJ1KSB7XG5cdFx0ICAgIHZhciBibG9ja2VyRGl2ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ICAgIGRvbS5hZGRDbGFzcyhibG9ja2VyRGl2LCAndmFzdC1ibG9ja2VyJyk7XG5cdFx0XHRyZXR1cm4gYmxvY2tlckRpdjtcblx0XHR9XG4gICAgdmFyIGJsb2NrZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdmFyIGNsaWNrVGhyb3VnaE1hY3JvID0gcmVzcG9uc2UuY2xpY2tUaHJvdWdoO1xuXG4gICAgZG9tLmFkZENsYXNzKGJsb2NrZXIsICd2YXN0LWJsb2NrZXInKTtcbiAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKTtcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY2xpY2tUaHJvdWdoTWFjcm8pKSB7XG4gICAgICBibG9ja2VyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgfVxuXG4gICAgdmFyIGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKHBsYXllci5wYXVzZWQoKSkge1xuICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcblxuICAgICAgICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIHBsYXllcidzIG5vcm1hbCBwYXVzZSBtZWNoYW5pc21cbiAgICAgICAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xuXG4gICAgICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRDbGlja1RocnUnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcbiAgICAgICAgICAgICAgd2luZG93Lm9wZW4oZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllciksICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgfTtcbiAgXG4gICAgaWYgKHV0aWxpdGllcy5pc0lEZXZpY2UoKSkge1xuICAgICAgICBibG9ja2VyLm9udG91Y2hlbmQgPSBjbGlja0hhbmRsZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBibG9ja2VyLm9uY2xpY2sgPSBjbGlja0hhbmRsZXI7XG4gICAgfVxuICAgIFxuICAgIGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgJiYgZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lKSB7XG4gICAgXHRibG9ja2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyVVJMKGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpIHtcbiAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChyZXNwb25zZS5jbGlja1Rocm91Z2gsIHBsYXllcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKSB7XG4gICAgdmFyIHZhcmlhYmxlcyA9IHtcbiAgICAgIEFTU0VUVVJJOiBtZWRpYUZpbGUuc3JjLFxuICAgICAgQ09OVEVOVFBMQVlIRUFEOiB2YXN0VXRpbC5mb3JtYXRQcm9ncmVzcyhwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDApXG4gICAgfTtcblxuICAgIHJldHVybiBjbGlja1Rocm91Z2hNYWNybyA/IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm8oY2xpY2tUaHJvdWdoTWFjcm8sIHZhcmlhYmxlcykgOiAnIyc7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlTdHlsZSgpIHtcblx0ICBibG9ja2VyLnN0eWxlLmRpc3BsYXkgPSBwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQmxvY2tlcigpIHtcbiAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XG5cdHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVEaXNwbGF5U3R5bGUpO1xuICAgIGRvbS5yZW1vdmUoYmxvY2tlcik7XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoRGl2QmxvY2tlciA9IGZ1bmN0aW9uIGFkZENsaWNrVGhyb3VnaChtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuXHRpZiAoIXRoaXMuZW5hYmxlRnVsbHNjcmVlbkNsaWNrSUZyYW1lKSB7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKG51bGwsIG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xuXHR9XG5cdHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0ICB2YXIgYmxvY2tlciA9IGNyZWF0ZUNsaWNrVGhyb3VnaERpdihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblx0ICB2YXIgdXBkYXRlQmxvY2tlciA9IHVwZGF0ZUJsb2NrZXJVUkwuYmluZCh0aGlzLCBibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKTtcblx0ICB2YXIgYmxvY2tlclVybDtcblx0ICB2YXIgaUZyYW1lO1xuXHQgIHZhciBpRnJhbWVCYWNrQnV0dG9uO1xuXG5cdCAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGJsb2NrZXIsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xuXHQgIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuXHQgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlQmxvY2tlcik7XG5cblx0ICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVEaXNwbGF5U3R5bGUpO1xuXG5cdCAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xuXHRcblx0ICBmdW5jdGlvbiBjcmVhdGVDbGlja1Rocm91Z2hEaXYocGxheWVyLCB0cmFja2VyKSB7XG5cdCAgICB2YXIgYmxvY2tlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdCAgICBkb20uYWRkQ2xhc3MoYmxvY2tlciwgJ3Zhc3QtYmxvY2tlcicpO1xuXG5cdFx0aWYgKCF3aW5kb3cuX21vbFNldHRpbmdzLmRpc2FibGVDbGlja1RocnUpIHtcblx0XHQgICAgYmxvY2tlci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcblx0XHQgICAgICBpZiAocGxheWVyLnBhdXNlZCgpKSB7XG5cdFx0ICAgICAgICBwbGF5ZXIucGxheSgpO1xuXHRcblx0XHQgICAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBwbGF5ZXIncyBub3JtYWwgcGF1c2UgbWVjaGFuaXNtXG5cdFx0ICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdCAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcdCAgICAgIH1cblx0XG5cdFx0ICAgICAgcGxheWVyLnBhdXNlKCk7XG5cdFx0ICAgICAgdHJhY2tlci50cmFja0NsaWNrKCk7XG5cdFxuXHRcdCAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHRcdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkQ2xpY2tUaHJ1JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHRcdCAgICAgIH1cblx0XHQgICAgICBcblx0XHQgICAgICAvLyBjcmVhdGUgSUZyYW1lIHdpdGggYmFjayBidXR0b25cblx0XHQgICAgICBpRnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblx0XHRcdCAgZG9tLmFkZENsYXNzKGlGcmFtZSwgJ3Zhc3QtYmxvY2tlcicpO1xuXHRcdFx0ICBpRnJhbWUuc3JjID0gYmxvY2tlclVybDtcblx0XHRcdCAgYmxvY2tlci5hcHBlbmRDaGlsZChpRnJhbWUpO1xuXHRcdFx0ICBcblx0XHRcdCAgaUZyYW1lQmFja0J1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0ICBkb20uYWRkQ2xhc3MoaUZyYW1lQmFja0J1dHRvbiwgXCJ2YXN0LWJhY2stYnV0dG9uXCIpO1xuXHRcdCAgICAgIGRvbS5hZGRDbGFzcyhpRnJhbWVCYWNrQnV0dG9uLCAnZW5hYmxlZCcpO1xuXHRcdFx0ICBpRnJhbWVCYWNrQnV0dG9uLmlubmVySFRNTCA9IFwiQmFja1wiO1xuXHRcdFx0ICBpRnJhbWVCYWNrQnV0dG9uLmlkID0gJ2lmcmFtZUJhY2tCdXR0b24nO1xuXHRcdFx0ICBibG9ja2VyLmFwcGVuZENoaWxkKGlGcmFtZUJhY2tCdXR0b24pO1xuXHRcdFx0ICBpRnJhbWVCYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCAgYmxvY2tlci5yZW1vdmVDaGlsZChpRnJhbWUpO1xuXHRcdFx0XHQgIGlGcmFtZSA9IG51bGw7XG5cdFx0XHRcdCAgYmxvY2tlci5yZW1vdmVDaGlsZChpRnJhbWVCYWNrQnV0dG9uKTtcblx0XHRcdFx0ICBpRnJhbWVCYWNrQnV0dG9uID0gbnVsbDtcblx0XG5cdFx0XHRcdCAgLy8gc2hvdyBjb250cm9sc1xuXHRcdFx0XHQgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZFNraXBCdXR0b24nKTtcblx0XHRcdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0XHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgXG5cdFx0XHRcdCAgfVxuXHRcdFx0XHQgIHBsYXllci5jb250cm9scyh0cnVlKTtcblx0XHRcdFx0ICBcblx0XHRcdFx0ICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdCAgfVxuXHRcdFx0ICB9KTtcblx0XHRcdCAgXG5cdFx0XHQgIC8vIGhpZGUgY29udHJvbHNcblx0XHRcdCAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0ICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcblx0XHRcdCAgfSwgMSk7XG5cdFx0XHQgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZFNraXBCdXR0b24nKTtcblx0XHRcdCAgaWYgKHNraXBCdXR0b24pIHtcblx0XHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxuXHRcdFx0ICB9XG5cdFx0XHQgIHBsYXllci5jb250cm9scyhmYWxzZSk7XG5cdFxuXHRcdCAgICB9O1xuXHRcdH1cblxuXHQgICAgaWYgKCFwbGF5ZXIuaXNGdWxsc2NyZWVuKCkpIHtcblx0ICAgIFx0YmxvY2tlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gYmxvY2tlcjtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyVVJMKGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpIHtcblx0XHQgIGJsb2NrZXJVcmwgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChyZXNwb25zZS5jbGlja1Rocm91Z2gsIHBsYXllcik7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllcikge1xuXHQgICAgdmFyIHZhcmlhYmxlcyA9IHtcblx0ICAgICAgQVNTRVRVUkk6IG1lZGlhRmlsZS5zcmMsXG5cdCAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3MocGxheWVyLmN1cnJlbnRUaW1lKCkgKiAxMDAwKVxuXHQgICAgfTtcblxuXHQgICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6ICcjJztcblx0ICB9XG5cblx0ICBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5U3R5bGUoKSB7XG5cdFx0ICBibG9ja2VyLnN0eWxlLmRpc3BsYXkgPSBwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgPyAnYmxvY2snIDogJ25vbmUnO1xuXHRcdCAgaWYgKCFwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgJiYgaUZyYW1lKSB7XG5cdFx0XHQgIGJsb2NrZXIucmVtb3ZlQ2hpbGQoaUZyYW1lKTtcblx0XHRcdCAgaUZyYW1lID0gbnVsbDtcblx0XHRcdCAgYmxvY2tlci5yZW1vdmVDaGlsZChpRnJhbWVCYWNrQnV0dG9uKTtcblx0XHRcdCAgaUZyYW1lQmFja0J1dHRvbiA9IG51bGw7XG5cdFx0XHQgIFxuXHRcdFx0ICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIHRydWUpO1xuXHRcdFx0ICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdFx0XHQgIGlmIChza2lwQnV0dG9uKSB7XG5cdFx0XHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcblx0XHRcdCAgfVxuXHRcdFx0ICBwbGF5ZXIuY29udHJvbHModHJ1ZSk7XG5cdFx0ICB9XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gcmVtb3ZlQmxvY2tlcigpIHtcblx0ICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcblx0XHRwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlRGlzcGxheVN0eWxlKTtcblx0ICAgIGRvbS5yZW1vdmUoYmxvY2tlcik7XG5cdCAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9wbGF5U2VsZWN0ZWRBZCA9IGZ1bmN0aW9uIHBsYXlTZWxlY3RlZEFkKHNvdXJjZSwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblxuICAvL3dpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gbnVsbDtcblxuICBwbGF5ZXIucHJlbG9hZChcImF1dG9cIik7IC8vd2l0aG91dCBwcmVsb2FkPWF1dG8gdGhlIGR1cmF0aW9uY2hhbmdlIGV2ZW50IGlzIG5ldmVyIGZpcmVkXG4gIHBsYXllci5zcmMoc291cmNlKTtcblxuICBsb2dnZXIuZGVidWcgKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZD4gd2FpdGluZyBmb3IgZHVyYXRpb25jaGFuZ2UgdG8gcGxheSB0aGUgYWQuLi5cIik7XG5cbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZHVyYXRpb25jaGFuZ2UnLCAnZXJyb3InLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmIChldnQudHlwZSA9PT0gJ2R1cmF0aW9uY2hhbmdlJykge1xuICAgICAgbG9nZ2VyLmRlYnVnIChcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQ+IGdvdCBkdXJhdGlvbmNoYW5nZTsgY2FsbGluZyBwbGF5QWQoKVwiKTtcbiAgICAgIHBsYXlBZCgpO1xuICAgIH0gZWxzZSBpZihldnQudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RJbnRlZ3JhdG9yLCBQbGF5ZXIgaXMgdW5hYmxlIHRvIHBsYXkgdGhlIEFkXCIsIDQwMCksIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgLy9OT1RFOiBJZiB0aGUgYWRzIGdldCBjYW5jZWxlZCB3ZSBkbyBub3RoaW5nL1xuICB9KTtcblxuICAvKioqKiBsb2NhbCBmdW5jdGlvbnMgKioqKioqL1xuICBmdW5jdGlvbiBwbGF5QWQoKSB7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5aW5nJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmKGV2dC50eXBlID09PSAndmFzdC5hZHNDYW5jZWwnKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKkNvcHlyaWdodCAoYykgMjAxMS0yMDE2IE1vYXQgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLiovXG4gICAgICAvKmZ1bmN0aW9uIGluaXRNb2F0VHJhY2tpbmcoYSxjLGQsaCxrKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGI9W107Yz17YWREYXRhOntpZHM6YyxkdXJhdGlvbjpkLHVybDprfSxkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe3RoaXMuc2VuZEV2ZW50PyhiJiYoYi5wdXNoKGEpLGE9YixiPSExKSx0aGlzLnNlbmRFdmVudChhKSk6Yi5wdXNoKGEpfX07ZD1cIl9tb2F0QXBpXCIrTWF0aC5mbG9vcigxRTgqTWF0aC5yYW5kb20oKSk7dmFyIGUsZzt0cnl7ZT1hLm93bmVyRG9jdW1lbnQsZz1lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvd31jYXRjaChsKXtlPWRvY3VtZW50LGc9d2luZG93fWdbZF09YztmLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjthJiZhLmluc2VydEJlZm9yZShmLGEuY2hpbGROb2Rlc1swXXx8bnVsbCk7Zi5zcmM9XCJodHRwczovL3oubW9hdGFkcy5jb20vXCIraCtcIi9tb2F0dmlkZW8uanMjXCIrZDtyZXR1cm4gY307XG4gICAgICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSA9IG51bGw7XG4gICAgICBpZiAocmVzcG9uc2UuYWRzICYmIHJlc3BvbnNlLmFkcy5sZW5ndGggPiAwICYmIHJlc3BvbnNlLmFkc1swXS5pbkxpbmUgJiYgcmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0KSB7XG4gICAgXHQgIHZhciBpZHMgPSB7bGV2ZWwxOiByZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuYWR2aWQsXG4gICAgXHRcdFx0ICAgICBsZXZlbDI6IHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5jcGdpZCxcbiAgICBcdFx0XHQgICAgIGxldmVsMzogcmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmNwaWQsXG4gICAgXHRcdFx0ICAgICBsZXZlbDQ6IHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5jcmlkfTtcbiAgICBcdCAgaWYgKHJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5zaXRlX2lkKSB7XG4gICAgXHRcdCAgaWRzLnNsaWNlcjEgPSByZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuc2l0ZV9pZDtcbiAgICBcdCAgfVxuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSA9IGluaXRNb2F0VHJhY2tpbmcocGxheWVyLmVsXywgaWRzLCBwbGF5ZXIuZHVyYXRpb24oKSwgcmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LnBhcnRuZXJjb2RlLCBwbGF5ZXIuY3VycmVudFNvdXJjZSgpLnNyYyk7XG4gICAgXHQgIC8vd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBpbml0TW9hdFRyYWNraW5nKHBsYXllci5lbF8sIGlkcywgcGxheWVyLmR1cmF0aW9uKCksICduaW5lbWVkaWF2cGFpZDc4OTYxMTY0JywgcGxheWVyLmN1cnJlbnRTb3VyY2UoKS5zcmMpO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZykge1xuICAgIFx0ICB3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcuaW5pdCh3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5LmNvbnRleHRJZCwgXG4gICAgXHRcdFx0ICBwbGF5ZXIuZHVyYXRpb24oKSwgcGxheWVyLmVsXy5vZmZzZXRXaWR0aCwgcGxheWVyLmVsXy5vZmZzZXRIZWlnaHQpO1xuICAgICAgfSovXG4gICAgICBcbiAgICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkL3BsYXlBZD4gZ290IHBsYXlpbmcgZXZlbnQ7IHRyaWdnZXJpbmcgdmFzdC5hZFN0YXJ0Li4uXCIpO1xuXG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFN0YXJ0Jyk7XG5cbiAgICAgIGlmICh1dGlsaXRpZXMuaXNNb2JpbGUoKSkge1xuICAgICAgICAgIC8vIFZJRExBLTIzMzYgKHNpbXVsYXRlIHVzZXIgYWN0aXZpdHkgdG8gbWFrZSBzdXJlIGNvbnRyb2wtYmFyIGlzIHZpc2libGUgb24gbW9iaWxlIGRldmljZXMpXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgXHRcdHBsYXllci51c2VyQWN0aXZlKHRydWUpO1xuICAgICAgICAgIFx0fSwgaSAqIDIwMDApO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvU3RhcnQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICB9XG5cbiAgICAgIHBsYXllci5vbignZW5kZWQnLCBwcm9jZWVkKTtcbiAgICAgIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCBwcm9jZWVkKTtcbiAgICAgIHBsYXllci5vbigndmFzdC5hZFNraXAnLCBwcm9jZWVkKTtcblxuICAgICAgZnVuY3Rpb24gcHJvY2VlZChldnQpIHtcblxuICAgICAgICAgIGlmKGV2dC50eXBlID09PSAnZW5kZWQnKSB7XG4gICAgICAgICAgICAgIC8vIElnbm9yZSBlbmRlZCBldmVudCBpZiB0aGUgQWQgdGltZSB3YXMgbm90ICduZWFyJyB0aGUgZW5kXG4gICAgICAgICAgICAgIC8vIGF2b2lkcyBpc3N1ZXMgd2hlcmUgSU9TIGNvbnRyb2xzIGNvdWxkIHNraXAgdGhlIEFkXG4gICAgICAgICAgICBcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLmJyZWFrRHVyYXRpb24pIHtcbiAgICAgICAgICAgIFx0XHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5yZWFsVmlkZW9EdXJhdGlvbikge1xuICAgICAgICAgICAgXHRcdCAgICBpZiAoKHdpbmRvdy5fbW9sU2V0dGluZ3MucmVhbFZpZGVvRHVyYXRpb24gLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPiAzKSB7XG4gICAgICAgICAgICBcdFx0ICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcdFx0ICAgIH1cbiAgICAgICAgICAgIFx0XHR9XG4gICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIFx0ZWxzZSBpZiAoKHBsYXllci5kdXJhdGlvbigpIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpID4gMykge1xuICAgIFx0XHRcdFx0cmV0dXJuO1xuICAgIFx0XHRcdH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvKmlmKGV2dC50eXBlID09PSAnZW5kZWQnICYmIChwbGF5ZXIuZHVyYXRpb24oKSAtIHBsYXllci5jdXJyZW50VGltZSgpKSA+IDMgKSB7XG4gICAgICAgICAgLy8gSWdub3JlIGVuZGVkIGV2ZW50IGlmIHRoZSBBZCB0aW1lIHdhcyBub3QgJ25lYXInIHRoZSBlbmRcbiAgICAgICAgICAvLyBhdm9pZHMgaXNzdWVzIHdoZXJlIElPUyBjb250cm9scyBjb3VsZCBza2lwIHRoZSBBZFxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSovXG5cbiAgICAgICAgcGxheWVyLm9mZignZW5kZWQnLCBwcm9jZWVkKTtcbiAgICAgICAgcGxheWVyLm9mZigndmFzdC5hZHNDYW5jZWwnLCBwcm9jZWVkKTtcbiAgICAgICAgcGxheWVyLm9mZigndmFzdC5hZFNraXAnLCBwcm9jZWVkKTtcblxuICAgICAgICAvL05PVEU6IGlmIHRoZSBhZHMgZ2V0IGNhbmNlbCB3ZSBkbyBub3RoaW5nIGFwYXJ0IHJlbW92aW5nIHRoZSBsaXN0bmVyc1xuICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJyB8fCBldnQudHlwZSA9PT0gJ3Zhc3QuYWRTa2lwJyl7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsb2dnZXIuZGVidWcgKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZC9wbGF5QWQ+IGNhbGxpbmcgcGxheWVyLnBsYXkoKS4uLlwiKTtcblxuICAgIHBsYXllci5wbGF5KCk7XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIHRyYWNrRXJyb3IoZXJyb3IsIHJlc3BvbnNlKSB7XG4gIHZhc3RVdGlsLnRyYWNrKHJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvci5jb2RlIHx8IDkwMH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUSW50ZWdyYXRvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcbnZhciBWaWRlb0NsaWNrcyA9IHJlcXVpcmUoJy4vVmlkZW9DbGlja3MnKTtcbnZhciBMaW5lYXIgPSByZXF1aXJlKCcuL0xpbmVhcicpO1xudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XG52YXIgV3JhcHBlciA9IHJlcXVpcmUoJy4vV3JhcHBlcicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuLy92YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbndpbmRvdy5JbkxpbmVfX0EgPSBJbkxpbmU7XG5mdW5jdGlvbiBWQVNUUmVzcG9uc2UoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUUmVzcG9uc2UoKTtcbiAgfVxuXG4gIHRoaXMuX2xpbmVhckFkZGVkID0gZmFsc2U7XG4gIHRoaXMudmFzdFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIHRoaXMuYWRzID0gW107XG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcbiAgdGhpcy5pbXByZXNzaW9ucyA9IFtdO1xuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gW107XG4gIHRoaXMuY3VzdG9tQ2xpY2tzID0gW107XG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSB7fTtcbiAgdGhpcy5tZWRpYUZpbGVzID0gW107XG4gIHRoaXMuY2xpY2tUaHJvdWdoID0gdW5kZWZpbmVkO1xuICB0aGlzLmFkVGl0bGUgPSAnJztcbiAgdGhpcy5kdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgdGhpcy5za2lwb2Zmc2V0ID0gdW5kZWZpbmVkO1xufVxuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLmFkZEFkID0gZnVuY3Rpb24gKGFkKSB7XG4gIHZhciBpbkxpbmUsIHdyYXBwZXI7XG4gIGlmIChhZCBpbnN0YW5jZW9mIEFkKSB7XG4gICAgaW5MaW5lID0gYWQuaW5MaW5lO1xuICAgIHdyYXBwZXIgPSBhZC53cmFwcGVyO1xuXG4gICAgdGhpcy5hZHMucHVzaChhZCk7XG5cbiAgICBpZiAoaW5MaW5lKSB7XG4gICAgICB0aGlzLl9hZGRJbkxpbmUoaW5MaW5lKTtcbiAgICB9XG5cbiAgICBpZiAod3JhcHBlcikge1xuICAgICAgdGhpcy5fYWRkV3JhcHBlcih3cmFwcGVyKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRXJyb3JUcmFja1VybCA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHQgIHZhciBlcnJvclVSTCA9IGVycm9yIGluc3RhbmNlb2YgeG1sLkpYT05UcmVlID8geG1sLmtleVZhbHVlKGVycm9yKSA6IGVycm9yO1xuXHQgIGlmIChlcnJvclVSTCkge1xuXHQgICAgdGhpcy5lcnJvclVSTE1hY3Jvcy5wdXNoKGVycm9yVVJMKTtcblx0ICB9XG5cdH07Ki9cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEVycm9yVHJhY2tVcmxzID0gZnVuY3Rpb24gKGVycm9ycykge1xuXHQgIHV0aWxpdGllcy5pc0FycmF5KGVycm9ycykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmVycm9yVVJMTWFjcm9zLCBlcnJvcnMpO1xuXHR9O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJbXByZXNzaW9ucyA9IGZ1bmN0aW9uIChpbXByZXNzaW9ucykge1xuICB1dGlsaXRpZXMuaXNBcnJheShpbXByZXNzaW9ucykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmltcHJlc3Npb25zLCBpbXByZXNzaW9ucyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2ggPSBmdW5jdGlvbiAoY2xpY2tUaHJvdWdoKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjbGlja1Rocm91Z2gpKSB7XG4gICAgdGhpcy5jbGlja1Rocm91Z2ggPSBjbGlja1Rocm91Z2g7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZENsaWNrVHJhY2tpbmdzID0gZnVuY3Rpb24gKGNsaWNrVHJhY2tpbmdzKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGNsaWNrVHJhY2tpbmdzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuY2xpY2tUcmFja2luZ3MsIGNsaWNrVHJhY2tpbmdzKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEN1c3RvbUNsaWNrcyA9IGZ1bmN0aW9uIChjdXN0b21DbGlja3MpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoY3VzdG9tQ2xpY2tzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuY3VzdG9tQ2xpY2tzLCBjdXN0b21DbGlja3MpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVHJhY2tpbmdFdmVudHMgPSBmdW5jdGlvbiAodHJhY2tpbmdFdmVudHMpIHtcbiAgdmFyIGV2ZW50c01hcCA9IHRoaXMudHJhY2tpbmdFdmVudHM7XG5cbiAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XG4gICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdFdmVudCkge1xuICAgICAgaWYgKCFldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSkge1xuICAgICAgICBldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0ucHVzaCh0cmFja2luZ0V2ZW50KTtcbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHRpdGxlKSkge1xuICAgIHRoaXMuYWRUaXRsZSA9IHRpdGxlO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGREdXJhdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGR1cmF0aW9uKSkge1xuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVmlkZW9DbGlja3MgPSBmdW5jdGlvbiAodmlkZW9DbGlja3MpIHtcbiAgaWYgKHZpZGVvQ2xpY2tzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpIHtcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2godmlkZW9DbGlja3MuY2xpY2tUaHJvdWdoKTtcbiAgICB0aGlzLl9hZGRDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrcy5jbGlja1RyYWNraW5ncyk7XG4gICAgdGhpcy5fYWRkQ3VzdG9tQ2xpY2tzKHZpZGVvQ2xpY2tzLmN1c3RvbUNsaWNrcyk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZE1lZGlhRmlsZXMgPSBmdW5jdGlvbiAobWVkaWFGaWxlcykge1xuICB1dGlsaXRpZXMuaXNBcnJheShtZWRpYUZpbGVzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMubWVkaWFGaWxlcywgbWVkaWFGaWxlcyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRTa2lwb2Zmc2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuXHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlKSB7XG5cdFx0ICBpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUuZW5hYmxlZCkge1xuXHRcdFx0ICBpZiAoIXRoaXMuZHVyYXRpb24gfHwgIXdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlLnZpZGVvVGhyZXNob2xkIHx8IHRoaXMuZHVyYXRpb24gPj0gd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQpIHtcblx0XHRcdFx0ICB0aGlzLnNraXBvZmZzZXQgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS52aWRlb09mZnNldDtcblx0XHRcdCAgfVxuXHRcdCAgfVxuXHQgIH1cblx0ICBlbHNlIGlmIChvZmZzZXQpIHtcblx0ICAgIHRoaXMuc2tpcG9mZnNldCA9IG9mZnNldDtcblx0ICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRBZFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoYWRQYXJhbWV0ZXJzKSB7XG4gIGlmIChhZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLmFkUGFyYW1ldGVycyA9IGFkUGFyYW1ldGVycztcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkTGluZWFyID0gZnVuY3Rpb24gKGxpbmVhcikge1xuICBpZiAobGluZWFyIGluc3RhbmNlb2YgTGluZWFyKSB7XG4gICAgdGhpcy5fYWRkRHVyYXRpb24obGluZWFyLmR1cmF0aW9uKTtcbiAgICB0aGlzLl9hZGRUcmFja2luZ0V2ZW50cyhsaW5lYXIudHJhY2tpbmdFdmVudHMpO1xuICAgIHRoaXMuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XG4gICAgdGhpcy5fYWRkTWVkaWFGaWxlcyhsaW5lYXIubWVkaWFGaWxlcyk7XG4gICAgdGhpcy5fYWRkU2tpcG9mZnNldChsaW5lYXIuc2tpcG9mZnNldCk7XG4gICAgdGhpcy5fYWRkQWRQYXJhbWV0ZXJzKGxpbmVhci5hZFBhcmFtZXRlcnMpO1xuICAgIHRoaXMuX2xpbmVhckFkZGVkID0gdHJ1ZTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSW5MaW5lID0gZnVuY3Rpb24gKGluTGluZSkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKGluTGluZSBpbnN0YW5jZW9mIEluTGluZSkge1xuICAgIHRoaXMuX2FkZFRpdGxlKGluTGluZS5hZFRpdGxlKTtcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJscyhpbkxpbmUuZXJyb3JzKTtcbiAgICB0aGlzLl9hZGRJbXByZXNzaW9ucyhpbkxpbmUuaW1wcmVzc2lvbnMpO1xuXG4gICAgaW5MaW5lLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgaWYgKGNyZWF0aXZlLmxpbmVhcikge1xuICAgICAgICB0aGF0Ll9hZGRMaW5lYXIoY3JlYXRpdmUubGluZWFyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkV3JhcHBlciA9IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBpZiAod3JhcHBlciBpbnN0YW5jZW9mIFdyYXBwZXIpIHtcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJscyh3cmFwcGVyLmVycm9ycyk7XG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMod3JhcHBlci5pbXByZXNzaW9ucyk7XG5cbiAgICB3cmFwcGVyLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgdmFyIGxpbmVhciA9IGNyZWF0aXZlLmxpbmVhcjtcbiAgICAgIGlmIChsaW5lYXIpIHtcbiAgICAgICAgdGhhdC5fYWRkVmlkZW9DbGlja3MobGluZWFyLnZpZGVvQ2xpY2tzKTtcbiAgICAgICAgdGhhdC5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7Ly9XZSBlbnN1cmUgdGhhdCBubyBjbGlja1Rocm91Z2ggaGFzIGJlZW4gYWRkZWRcbiAgICAgICAgdGhhdC5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5oYXNMaW5lYXIgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5fbGluZWFyQWRkZWQ7XG59O1xuXG5mdW5jdGlvbiBhcHBlbmRUb0FycmF5KGFycmF5LCBpdGVtcykge1xuICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGFycmF5LnB1c2goaXRlbSk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUUmVzcG9uc2U7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIFZBU1RUcmFja2VyKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RUcmFja2VyKSkge1xuICAgIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICB0aGlzLnNhbml0eUNoZWNrKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xuICB0aGlzLmluaXRpYWxpemUoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XG5cbn1cblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XG4gIHRoaXMucmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XG4gIHRoaXMuYXNzZXRVUkkgPSBhc3NldFVSSTtcbiAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIHRoaXMucXVhcnRpbGVzID0ge1xuICAgIGZpcnN0UXVhcnRpbGU6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCgyNSAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9LFxuICAgIG1pZHBvaW50OiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoNTAgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfSxcbiAgICB0aGlyZFF1YXJ0aWxlOiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoNzUgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfVxuICB9O1xufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnNhbml0eUNoZWNrID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xuICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhhc3NldFVSSSkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcoYXNzZXRVUkkpKSB7XG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgdGhlIFVSSSBvZiB0aGUgYWQgYXNzZXQgYmVpbmcgcGxheWVkJyk7XG4gIH1cblxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVCByZXNwb25zZScpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tVUkxzID0gZnVuY3Rpb24gdHJhY2tVUkxzKHVybHMsIHZhcmlhYmxlcykge1xuICBpZiAodXRpbGl0aWVzLmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPiAwKSB7XG4gICAgdmFyaWFibGVzID0gdXRpbGl0aWVzLmV4dGVuZCh7XG4gICAgICBBU1NFVFVSSTogdGhpcy5hc3NldFVSSSxcbiAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcylcbiAgICB9LCB2YXJpYWJsZXMgfHwge30pO1xuXG4gICAgdmFzdFV0aWwudHJhY2sodXJscywgdmFyaWFibGVzKTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrRXZlbnQgPSBmdW5jdGlvbiB0cmFja0V2ZW50KGV2ZW50TmFtZSwgdHJhY2tPbmNlKSB7XG4gICAgaWYgKHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSAmJiB3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcpIHtcbiAgICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nLmludm9rZUV2ZW50KGV2ZW50TmFtZSk7XG4gICAgfVxuICB0aGlzLnRyYWNrVVJMcyhnZXRFdmVudFVyaXModGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdKSk7XG4gIGlmICh0cmFja09uY2UpIHtcbiAgICB0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gZ2V0RXZlbnRVcmlzKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdmFyIHVyaXM7XG5cbiAgICBpZiAodHJhY2tpbmdFdmVudHMpIHtcbiAgICAgIHVyaXMgPSBbXTtcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCFldmVudC51cmkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVyaXMucHVzaChldmVudC51cmkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1cmlzO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tQcm9ncmVzcyA9IGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3MobmV3UHJvZ3Jlc3NJbk1zKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIGV2ZW50cyA9IFtdO1xuICB2YXIgT05DRSA9IHRydWU7XG4gIHZhciBBTFdBWVMgPSBmYWxzZTtcbiAgdmFyIHRyYWNraW5nRXZlbnRzID0gdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50cztcblxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKG5ld1Byb2dyZXNzSW5NcykpIHtcbiAgICBhZGRUcmFja0V2ZW50KCdzdGFydCcsIE9OQ0UsIG5ld1Byb2dyZXNzSW5NcyA+IDApO1xuICAgIGFkZFRyYWNrRXZlbnQoJ3Jld2luZCcsIEFMV0FZUywgaGFzUmV3b3VuZCh0aGlzLnByb2dyZXNzLCBuZXdQcm9ncmVzc0luTXMpKTtcbiAgICBhZGRRdWFydGlsZUV2ZW50cyhuZXdQcm9ncmVzc0luTXMpO1xuICAgIHRyYWNrUHJvZ3Jlc3NFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcbiAgICB0cmFja0V2ZW50cygpO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBuZXdQcm9ncmVzc0luTXM7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gaGFzUmV3b3VuZChjdXJyZW50UHJvZ3Jlc3MsIG5ld1Byb2dyZXNzKSB7XG4gICAgdmFyIFJFV0lORF9USFJFU0hPTEQgPSAzMDAwOyAvL0lPUyB2aWRlbyBjbG9jayBpcyB2ZXJ5IHVucmVsaWFibGUgYW5kIHdlIG5lZWQgYSAzIHNlY29uZHMgdGhyZXNob2xkIHRvIGVuc3VyZSB0aGF0IHRoZXJlIHdhcyBhIHJld2luZCBhbiB0aGF0IGl0IHdhcyBvbiBwdXJwb3NlLlxuICAgIHJldHVybiBjdXJyZW50UHJvZ3Jlc3MgPiBuZXdQcm9ncmVzc0luTXMgJiYgTWF0aC5hYnMobmV3UHJvZ3Jlc3MgLSBjdXJyZW50UHJvZ3Jlc3MpID4gUkVXSU5EX1RIUkVTSE9MRDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UsIGNhbkJlQWRkZWQpIHtcbiAgICBpZiAodHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSAmJiBjYW5CZUFkZGVkKSB7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgdHJhY2tPbmNlOiAhIXRyYWNrT25jZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUXVhcnRpbGVFdmVudHMocHJvZ3Jlc3MpIHtcbiAgICB2YXIgcXVhcnRpbGVzID0gdGhhdC5xdWFydGlsZXM7XG4gICAgdmFyIGZpcnN0UXVhcnRpbGUgPSB0aGF0LnF1YXJ0aWxlcy5maXJzdFF1YXJ0aWxlO1xuICAgIHZhciBtaWRwb2ludCA9IHRoYXQucXVhcnRpbGVzLm1pZHBvaW50O1xuICAgIHZhciB0aGlyZFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMudGhpcmRRdWFydGlsZTtcblxuICAgIGlmICghZmlyc3RRdWFydGlsZS50cmFja2VkKSB7XG4gICAgICB0cmFja1F1YXJ0aWxlKCdmaXJzdFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSBpZiAoIW1pZHBvaW50LnRyYWNrZWQpIHtcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ21pZHBvaW50JywgcHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XG4gICAgICB0cmFja1F1YXJ0aWxlKCd0aGlyZFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICAgIGZ1bmN0aW9uIHRyYWNrUXVhcnRpbGUocXVhcnRpbGVOYW1lLCBwcm9ncmVzcyl7XG4gICAgICB2YXIgcXVhcnRpbGUgPSBxdWFydGlsZXNbcXVhcnRpbGVOYW1lXTtcbiAgICAgIGlmKGNhbkJlVHJhY2tlZChxdWFydGlsZSwgcHJvZ3Jlc3MpKXtcbiAgICAgICAgcXVhcnRpbGUudHJhY2tlZCA9IHRydWU7XG4gICAgICAgIGFkZFRyYWNrRXZlbnQocXVhcnRpbGVOYW1lLCBPTkNFLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5CZVRyYWNrZWQocXVhcnRpbGUsIHByb2dyZXNzKSB7XG4gICAgdmFyIHF1YXJ0aWxlVGltZSA9IHF1YXJ0aWxlLnRpbWU7XG4gICAgLy9XZSBvbmx5IGZpcmUgdGhlIHF1YXJ0aWxlIGV2ZW50IGlmIHRoZSBwcm9ncmVzcyBpcyBiaWdnZXIgdGhhbiB0aGUgcXVhcnRpbGUgdGltZSBieSA1IHNlY29uZHMgYXQgbW9zdC5cbiAgICByZXR1cm4gcHJvZ3Jlc3MgPj0gcXVhcnRpbGVUaW1lICYmIHByb2dyZXNzIDw9IChxdWFydGlsZVRpbWUgKyA1MDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3NFdmVudHMocHJvZ3Jlc3MpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzLnByb2dyZXNzKSkge1xuICAgICAgcmV0dXJuOyAvL05vdGhpbmcgdG8gdHJhY2tcbiAgICB9XG5cbiAgICB2YXIgcGVuZGluZ1Byb2dyZXNzRXZ0cyA9IFtdO1xuXG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MuZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0Lm9mZnNldCA8PSBwcm9ncmVzcykge1xuICAgICAgICB0aGF0LnRyYWNrVVJMcyhbZXZ0LnVyaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVuZGluZ1Byb2dyZXNzRXZ0cy5wdXNoKGV2dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MgPSBwZW5kaW5nUHJvZ3Jlc3NFdnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tFdmVudHMoKSB7XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGF0LnRyYWNrRXZlbnQoZXZlbnQubmFtZSwgZXZlbnQudHJhY2tPbmNlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuW1xuICAncmV3aW5kJyxcbiAgJ2Z1bGxzY3JlZW4nLFxuICAnZXhpdEZ1bGxzY3JlZW4nLFxuICAncGF1c2UnLFxuICAncmVzdW1lJyxcbiAgJ211dGUnLFxuICAndW5tdXRlJyxcbiAgJ2FjY2VwdEludml0YXRpb24nLFxuICAnYWNjZXB0SW52aXRhdGlvbkxpbmVhcicsXG4gICdjb2xsYXBzZScsXG4gICdleHBhbmQnXG5dLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYWNrRXZlbnQoZXZlbnROYW1lKTtcbiAgICB9O1xuICB9KTtcblxuW1xuICAnc3RhcnQnLFxuICAnc2tpcCcsXG4gICdjbG9zZScsXG4gICdjbG9zZUxpbmVhcidcbl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShldmVudE5hbWUpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUsIHRydWUpO1xuICAgIH07XG4gIH0pO1xuXG5bXG4gICdmaXJzdFF1YXJ0aWxlJyxcbiAgJ21pZHBvaW50JyxcbiAgJ3RoaXJkUXVhcnRpbGUnXG5dLmZvckVhY2goZnVuY3Rpb24gKHF1YXJ0aWxlKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShxdWFydGlsZSldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5xdWFydGlsZXNbcXVhcnRpbGVdLnRyYWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy50cmFja0V2ZW50KHF1YXJ0aWxlLCB0cnVlKTtcbiAgICB9O1xuICB9KTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMucXVhcnRpbGVzLnRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XG4gICAgdGhpcy50cmFja0V2ZW50KCdjb21wbGV0ZScsIHRydWUpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFcnJvcldpdGhDb2RlID0gZnVuY3Rpb24gdHJhY2tFcnJvcldpdGhDb2RlKGVycm9yY29kZSkge1xuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGVycm9yY29kZSkpIHtcbiAgICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvcmNvZGV9KTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmltcHJlc3Npb25zKTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NyZWF0aXZlVmlldyA9IGZ1bmN0aW9uIHRyYWNrQ3JlYXRpdmVWaWV3KCkge1xuICB0aGlzLnRyYWNrRXZlbnQoJ2NyZWF0aXZlVmlldycpO1xufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ2xpY2sgPSBmdW5jdGlvbiB0cmFja0NsaWNrKCkge1xuICAgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcpIHtcbiAgXHQgIHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZy5pbnZva2VFdmVudCgnYWQtY2xpY2snKTtcbiAgICB9XG4gIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuY2xpY2tUcmFja2luZ3MpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUVHJhY2tlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVmVyaWZpY2F0aW9uKHZlcmlmaWNhdGlvbkpUcmVlKSB7XG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZlcmlmaWNhdGlvbikpIHtcbiAgICByZXR1cm4gbmV3IFZlcmlmaWNhdGlvbih2ZXJpZmljYXRpb25KVHJlZSk7XG4gIH1cblxuICB0aGlzLnZlbmRvciA9IHZlcmlmaWNhdGlvbkpUcmVlLmF0dHIoJ3ZlbmRvcicpO1xuICBpZiAodmVyaWZpY2F0aW9uSlRyZWUuamF2YVNjcmlwdFJlc291cmNlKSB7XG5cdCAgdGhpcy5qYXZhU2NyaXB0UmVzb3VyY2VzID0gcGFyc2VSZXNvdXJjZXModmVyaWZpY2F0aW9uSlRyZWUuamF2YVNjcmlwdFJlc291cmNlKTtcbiAgfVxuICBpZiAodmFzdFV0aWwuaXNGbGFzaFN1cHBvcnRlZCgpICYmIHZlcmlmaWNhdGlvbkpUcmVlLmZsYXNoUmVzb3VyY2UpIHtcblx0ICB0aGlzLmphdmFTY3JpcHRSZXNvdXJjZXMgPSBwYXJzZVJlc291cmNlcyh2ZXJpZmljYXRpb25KVHJlZS5qYXZhU2NyaXB0UmVzb3VyY2UpO1xuICB9XG4gIGlmICh2ZXJpZmljYXRpb25KVHJlZS52aWV3YWJsZUltcHJlc3Npb24pIHtcblx0ICB0aGlzLnZpZXdhYmxlSW1wcmVzc2lvbiA9IHtpZDogdmVyaWZpY2F0aW9uSlRyZWUudmlld2FibGVJbXByZXNzaW9uLmF0dHIoJ2lkJyksIHVyaTogeG1sLmtleVZhbHVlKHZlcmlmaWNhdGlvbkpUcmVlLnZpZXdhYmxlSW1wcmVzc2lvbil9O1xuICB9XG4gIFxuICBmdW5jdGlvbiBwYXJzZVJlc291cmNlcyhyZXNvdXJjZXMpIHtcblx0ICB2YXIgYXJyID0gW107XG5cdCAgdmFyIGFyckRhdGE7XG5cdCAgaWYgKHJlc291cmNlcykge1xuXHRcdCAgYXJyRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KHJlc291cmNlcykgPyByZXNvdXJjZXMgOiBbcmVzb3VyY2VzXTtcblx0XHQgIGFyckRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0ICBhcnIucHVzaCh7YXBpRnJhbWV3b3JrOiBlbGVtLmF0dHIoJ2FwaUZyYW1ld29yaycpLCB1cmk6IHhtbC5rZXlWYWx1ZShlbGVtKX0pO1xuXHRcdCAgfSk7XG5cdCAgfVxuXHQgIHJldHVybiBhcnI7XG4gIH1cbn1cblxuVmVyaWZpY2F0aW9uLnBhcnNlQWRWZXJpZmljYXRpb25zID0gZnVuY3Rpb24gcGFyc2VBZFZlcmlmaWNhdGlvbnModmVyaWZpY2F0aW9uc0pUcmVlKSB7XG4gIHZhciB2ZXJpZmljYXRpb25zID0gW107XG4gIHZhciB2ZXJpZmljYXRpb25zRGF0YTtcbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodmVyaWZpY2F0aW9uc0pUcmVlKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKHZlcmlmaWNhdGlvbnNKVHJlZS52ZXJpZmljYXRpb24pKSB7XG5cdCAgdmVyaWZpY2F0aW9uc0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheSh2ZXJpZmljYXRpb25zSlRyZWUudmVyaWZpY2F0aW9uKSA/IHZlcmlmaWNhdGlvbnNKVHJlZS52ZXJpZmljYXRpb24gOiBbdmVyaWZpY2F0aW9uc0pUcmVlLnZlcmlmaWNhdGlvbl07XG5cdCAgdmVyaWZpY2F0aW9uc0RhdGEuZm9yRWFjaChmdW5jdGlvbiAodmVyaWZpY2F0aW9uKSB7XG4gICAgXHR2ZXJpZmljYXRpb25zLnB1c2gobmV3IFZlcmlmaWNhdGlvbih2ZXJpZmljYXRpb24pKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdmVyaWZpY2F0aW9ucztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVyaWZpY2F0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBWaWRlb0NsaWNrcyh2aWRlb0NsaWNrSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSkge1xuICAgIHJldHVybiBuZXcgVmlkZW9DbGlja3ModmlkZW9DbGlja0pUcmVlKTtcbiAgfVxuXG4gIHRoaXMuY2xpY2tUaHJvdWdoID0geG1sLmtleVZhbHVlKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1Rocm91Z2gpO1xuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY2xpY2tUcmFja2luZyk7XG4gIHRoaXMuY3VzdG9tQ2xpY2tzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY3VzdG9tQ2xpY2spO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VDbGlja1RyYWNraW5ncyh0cmFja2luZ0RhdGEpIHtcbiAgICB2YXIgY2xpY2tUcmFja2luZ3MgPSBbXTtcbiAgICBpZiAodHJhY2tpbmdEYXRhKSB7XG4gICAgICB0cmFja2luZ0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0RhdGEpID8gdHJhY2tpbmdEYXRhIDogW3RyYWNraW5nRGF0YV07XG4gICAgICB0cmFja2luZ0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY2xpY2tUcmFja2luZ0RhdGEpIHtcbiAgICAgICAgY2xpY2tUcmFja2luZ3MucHVzaCh4bWwua2V5VmFsdWUoY2xpY2tUcmFja2luZ0RhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2xpY2tUcmFja2luZ3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaWRlb0NsaWNrczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIFZpZXdhYmxlSW1wcmVzc2lvbih2aWV3YWJsZUltcHJlc3Npb25KVHJlZSkge1xuXHQgIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZpZXdhYmxlSW1wcmVzc2lvbikpIHtcblx0ICAgIHJldHVybiBuZXcgVmlld2FibGVJbXByZXNzaW9uKHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlKTtcblx0ICB9XG5cblx0ICAvL09wdGlvbmFsIEZpZWxkc1xuXHQgIHRoaXMuaWQgPSB2aWV3YWJsZUltcHJlc3Npb25KVHJlZS5hdHRyKCdpZCcpO1xuXHQgIGlmICh2aWV3YWJsZUltcHJlc3Npb25KVHJlZS52aWV3YWJsZSkge1xuXHRcdCAgdGhpcy52aWV3YWJsZXMgPSBwYXJzZVVyaUFycmF5KHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlLnZpZXdhYmxlKTtcblx0ICB9XG5cdCAgaWYgKHZpZXdhYmxlSW1wcmVzc2lvbkpUcmVlLm5vdFZpZXdhYmxlKSB7XG5cdFx0ICB0aGlzLm5vdFZpZXdhYmxlcyA9IHBhcnNlVXJpQXJyYXkodmlld2FibGVJbXByZXNzaW9uSlRyZWUubm90Vmlld2FibGUpO1xuXHQgIH1cblx0ICBpZiAodmlld2FibGVJbXByZXNzaW9uSlRyZWUudmlld1VuZGV0ZXJtaW5lZCkge1xuXHRcdCAgdGhpcy52aWV3VW5kZXRlcm1pbmVkcyA9IHBhcnNlVXJpQXJyYXkodmlld2FibGVJbXByZXNzaW9uSlRyZWUudmlld1VuZGV0ZXJtaW5lZCk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gcGFyc2VVcmlBcnJheShhcnJKVHJlZSkge1xuXHRcdCAgdmFyIGFyciA9IFtdO1xuXHRcdCAgdmFyIGFyckRhdGE7XG5cdFx0ICBpZiAoYXJySlRyZWUpIHtcblx0XHRcdCAgYXJyRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGFyckpUcmVlKSA/IGFyckpUcmVlIDogW2FyckpUcmVlXTtcblx0XHRcdCAgYXJyRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdCAgYXJyLnB1c2goeG1sLmtleVZhbHVlKGVsZW0pKTtcblx0XHRcdCAgfSk7XG5cdFx0ICB9XG5cdFx0ICByZXR1cm4gYXJyO1xuXHQgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdhYmxlSW1wcmVzc2lvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIENyZWF0aXZlID0gcmVxdWlyZSgnLi9DcmVhdGl2ZScpO1xudmFyIFZpZXdhYmxlSW1wcmVzc2lvbiA9IHJlcXVpcmUoJy4vVmlld2FibGVJbXByZXNzaW9uJyk7XG52YXIgVmVyaWZpY2F0aW9uID0gcmVxdWlyZSgnLi9WZXJpZmljYXRpb24nKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gV3JhcHBlcih3cmFwcGVySlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgV3JhcHBlcikpIHtcbiAgICByZXR1cm4gbmV3IFdyYXBwZXIod3JhcHBlckpUcmVlKTtcbiAgfVxuXG4gIC8vUmVxdWlyZWQgZWxlbWVudHNcbiAgdGhpcy5hZFN5c3RlbSA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUuYWRTeXN0ZW0pO1xuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyh3cmFwcGVySlRyZWUuaW1wcmVzc2lvbik7XG4gIHRoaXMuVkFTVEFkVGFnVVJJID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS52QVNUQWRUYWdVUkkpO1xuXG4gIC8vT3B0aW9uYWwgZWxlbWVudHNcbiAgdGhpcy5jcmVhdGl2ZXMgPSBDcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyh3cmFwcGVySlRyZWUuY3JlYXRpdmVzKTtcbiAgLy90aGlzLmVycm9yID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5lcnJvcik7XG4gIHRoaXMuZXJyb3JzID0gdmFzdFV0aWwucGFyc2VFcnJvcnMod3JhcHBlckpUcmVlLmVycm9yKTtcbiAgdGhpcy5leHRlbnNpb25zID0gd3JhcHBlckpUcmVlLmV4dGVuc2lvbnM7XG5cbiAgLy9PcHRpb25hbCBhdHRyc1xuICB0aGlzLmZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycyA9IHV0aWxpdGllcy5pc0RlZmluZWQoeG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzJykpPyB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMnKTogdHJ1ZTtcbiAgdGhpcy5hbGxvd011bHRpcGxlQWRzID0geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnYWxsb3dNdWx0aXBsZUFkcycpO1xuICB0aGlzLmZhbGxiYWNrT25Ob0FkID0geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZmFsbGJhY2tPbk5vQWQnKTtcblxuICBpZiAod2luZG93Lm1vbF92YXN0VmVyc2lvbiA9PT0gNCkge1xuXHQgIGlmICh3cmFwcGVySlRyZWUudmlld2FibGVJbXByZXNzaW9uKSB7XG5cdFx0ICB0aGlzLnZpZXdhYmxlSW1wcmVzc2lvbiA9IG5ldyBWaWV3YWJsZUltcHJlc3Npb24od3JhcHBlckpUcmVlLnZpZXdhYmxlSW1wcmVzc2lvbik7XG5cdCAgfVxuXHQgIGlmICh3cmFwcGVySlRyZWUuYWRWZXJpZmljYXRpb25zKSB7XG5cdFx0ICB0aGlzLmFkVmVyaWZpY2F0aW9ucyA9IFZlcmlmaWNhdGlvbi5wYXJzZUFkVmVyaWZpY2F0aW9ucyh3cmFwcGVySlRyZWUuYWRWZXJpZmljYXRpb25zKTtcblx0ICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXcmFwcGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgZHVyYXRpb25SZWdleCA9IC8oXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKShcXC4oXFxkXFxkXFxkKSk/LztcblxudmFyIHBhcnNlcnMgPSB7XG5cbiAgZHVyYXRpb246IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb25TdHIpIHtcblxuICAgIHZhciBtYXRjaCwgZHVyYXRpb25Jbk1zO1xuXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhkdXJhdGlvblN0cikpIHtcbiAgICAgIG1hdGNoID0gZHVyYXRpb25TdHIubWF0Y2goZHVyYXRpb25SZWdleCk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZHVyYXRpb25Jbk1zID0gcGFyc2VIb3Vyc1RvTXMobWF0Y2hbMV0pICsgcGFyc2VNaW5Ub01zKG1hdGNoWzJdKSArIHBhcnNlU2VjVG9NcyhtYXRjaFszXSkgKyBwYXJzZUludChtYXRjaFs1XSB8fCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNOYU4oZHVyYXRpb25Jbk1zKSA/IG51bGwgOiBkdXJhdGlvbkluTXM7XG5cbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gcGFyc2VIb3Vyc1RvTXMoaG91clN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhvdXJTdHIsIDEwKSAqIDYwICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTWluVG9NcyhtaW5TdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChtaW5TdHIsIDEwKSAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVNlY1RvTXMoc2VjU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VjU3RyLCAxMCkgKiAxMDAwO1xuICAgIH1cbiAgfSxcblxuICBvZmZzZXQ6IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICBpZihpc1BlcmNlbnRhZ2Uob2Zmc2V0KSl7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlUGVyY2VudGFnZShvZmZzZXQsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlcnMuZHVyYXRpb24ob2Zmc2V0KTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShvZmZzZXQpIHtcbiAgICAgIHZhciBwZXJjZW50YWdlUmVnZXggPSAvXlxcZCsoXFwuXFxkKyk/JSQvZztcbiAgICAgIHJldHVybiBwZXJjZW50YWdlUmVnZXgudGVzdChvZmZzZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVBlcmNlbnRhZ2UocGVyY2VudFN0ciwgZHVyYXRpb24pIHtcbiAgICAgIGlmKGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYWxjUGVyY2VudChkdXJhdGlvbiwgcGFyc2VGbG9hdChwZXJjZW50U3RyLnJlcGxhY2UoJyUnLCAnJykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KHF1YW50aXR5LCBwZXJjZW50KXtcbiAgICAgIHJldHVybiBxdWFudGl0eSAqIHBlcmNlbnQgLyAxMDA7XG4gICAgfVxuICB9XG5cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZXJzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBWUEFJREhUTUw1VGVjaCA9IHJlcXVpcmUoJy4uL3ZwYWlkL1ZQQUlESFRNTDVUZWNoJyk7XG5cbnZhciB2YXN0VXRpbCA9IHtcblxuICB0cmFjazogZnVuY3Rpb24gdHJhY2soVVJMTWFjcm9zLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgc291cmNlcyA9IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm9zKFVSTE1hY3JvcywgdmFyaWFibGVzKTtcbiAgICB2YXIgdHJhY2tJbWdzID0gW107XG4gICAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICB0cmFja0ltZ3MucHVzaChpbWcpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmFja0ltZ3M7XG4gIH0sXG5cbiAgcGFyc2VVUkxNYWNyb3M6IGZ1bmN0aW9uIHBhcnNlTWFjcm9zKFVSTE1hY3JvcywgdmFyaWFibGVzKSB7XG4gICAgdmFyIHBhcnNlZFVSTHMgPSBbXTtcblxuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcblxuICAgIGlmICghKHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSkpIHtcbiAgICAgIHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuMGUrMTApO1xuICAgIH1cblxuICAgIFVSTE1hY3Jvcy5mb3JFYWNoKGZ1bmN0aW9uIChVUkxNYWNybykge1xuICAgICAgcGFyc2VkVVJMcy5wdXNoKHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJzZWRVUkxzO1xuICB9LFxuXG4gIHBhcnNlVVJMTWFjcm86IGZ1bmN0aW9uIHBhcnNlTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykge1xuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcblxuICAgIGlmICghKHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSkpIHtcbiAgICAgIHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuMGUrMTApO1xuICAgIH1cblxuICAgIHJldHVybiB2YXN0VXRpbC5fcGFyc2VVUkxNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKTtcbiAgfSxcblxuICBfcGFyc2VVUkxNYWNybzogZnVuY3Rpb24gcGFyc2VNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSB7XG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xuXG4gICAgdXRpbGl0aWVzLmZvckVhY2godmFyaWFibGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgVVJMTWFjcm8gPSBVUkxNYWNyby5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcW1wiICsga2V5ICsgXCJcXFxcXFxdXCIsICdnbScpLCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gVVJMTWFjcm87XG4gIH0sXG5cbiAgcGFyc2VEdXJhdGlvbjogZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvblN0cikge1xuICAgIHZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xuICAgIHZhciBtYXRjaCwgZHVyYXRpb25Jbk1zO1xuXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhkdXJhdGlvblN0cikpIHtcbiAgICAgIG1hdGNoID0gZHVyYXRpb25TdHIubWF0Y2goZHVyYXRpb25SZWdleCk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZHVyYXRpb25Jbk1zID0gcGFyc2VIb3Vyc1RvTXMobWF0Y2hbMV0pICsgcGFyc2VNaW5Ub01zKG1hdGNoWzJdKSArIHBhcnNlU2VjVG9NcyhtYXRjaFszXSkgKyBwYXJzZUludChtYXRjaFs1XSB8fCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNOYU4oZHVyYXRpb25Jbk1zKSA/IG51bGwgOiBkdXJhdGlvbkluTXM7XG5cbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gcGFyc2VIb3Vyc1RvTXMoaG91clN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhvdXJTdHIsIDEwKSAqIDYwICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTWluVG9NcyhtaW5TdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChtaW5TdHIsIDEwKSAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVNlY1RvTXMoc2VjU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VjU3RyLCAxMCkgKiAxMDAwO1xuICAgIH1cbiAgfSxcblxuICBwYXJzZUltcHJlc3Npb25zOiBmdW5jdGlvbiBwYXJzZUltcHJlc3Npb25zKGltcHJlc3Npb25zKSB7XG5cdCAgICBpZiAoaW1wcmVzc2lvbnMpIHtcblx0ICAgICAgaW1wcmVzc2lvbnMgPSB1dGlsaXRpZXMuaXNBcnJheShpbXByZXNzaW9ucykgPyBpbXByZXNzaW9ucyA6IFtpbXByZXNzaW9uc107XG5cdCAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkoaW1wcmVzc2lvbnMsIGZ1bmN0aW9uIChpbXByZXNzaW9uKSB7XG5cdCAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGltcHJlc3Npb24ua2V5VmFsdWUpKSB7XG5cdCAgICAgICAgICByZXR1cm4gaW1wcmVzc2lvbi5rZXlWYWx1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gW107XG5cdCAgfSxcblxuXHQgIHBhcnNlRXJyb3JzOiBmdW5jdGlvbiBwYXJzZUVycm9ycyhlcnJvcnMpIHtcblx0ICAgIGlmIChlcnJvcnMpIHtcblx0ICAgIFx0ZXJyb3JzID0gdXRpbGl0aWVzLmlzQXJyYXkoZXJyb3JzKSA/IGVycm9ycyA6IFtlcnJvcnNdO1xuXHQgICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KGVycm9ycywgZnVuY3Rpb24gKGVycm9yKSB7XG5cdCAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGVycm9yLmtleVZhbHVlKSkge1xuXHQgICAgICAgICAgcmV0dXJuIGVycm9yLmtleVZhbHVlO1xuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBbXTtcblx0ICB9LFxuXG4gIC8vV2UgYXNzdW1lIHRoYXQgdGhlIHByb2dyZXNzIGlzIGdvaW5nIHRvIGFycml2ZSBpbiBtaWxsaXNlY29uZHNcbiAgZm9ybWF0UHJvZ3Jlc3M6IGZ1bmN0aW9uIGZvcm1hdFByb2dyZXNzKHByb2dyZXNzKSB7XG4gICAgdmFyIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHM7XG4gICAgaG91cnMgPSBwcm9ncmVzcyAvICg2MCAqIDYwICogMTAwMCk7XG4gICAgaG91cnMgPSBNYXRoLmZsb29yKGhvdXJzKTtcbiAgICBtaW51dGVzID0gKHByb2dyZXNzIC8gKDYwICogMTAwMCkpICUgNjA7XG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IobWludXRlcyk7XG4gICAgc2Vjb25kcyA9IChwcm9ncmVzcyAvIDEwMDApICUgNjA7XG4gICAgc2Vjb25kcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyk7XG4gICAgbWlsbGlzZWNvbmRzID0gcHJvZ3Jlc3MgJSAxMDAwO1xuICAgIHJldHVybiB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhob3VycywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhtaW51dGVzLCAyKSArICc6JyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHNlY29uZHMsIDIpICsgJy4nICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWlsbGlzZWNvbmRzLCAzKTtcbiAgfSxcblxuICBwYXJzZU9mZnNldDogZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBkdXJhdGlvbikge1xuICAgIGlmIChpc1BlcmNlbnRhZ2Uob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB2YXN0VXRpbC5wYXJzZUR1cmF0aW9uKG9mZnNldCk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhbGNQZXJjZW50KGR1cmF0aW9uLCBwYXJzZUZsb2F0KHBlcmNlbnRTdHIucmVwbGFjZSgnJScsICcnKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY1BlcmNlbnQocXVhbnRpdHksIHBlcmNlbnQpIHtcbiAgICAgIHJldHVybiBxdWFudGl0eSAqIHBlcmNlbnQgLyAxMDA7XG4gICAgfVxuICB9LFxuXG5cbiAgLy9MaXN0IG9mIHN1cHBvcnRlZCBWUEFJRCB0ZWNobm9sb2dpZXNcbiAgVlBBSURfdGVjaHM6IFtcbiAgICAvL1ZQQUlERmxhc2hUZWNoLFxuICAgIFZQQUlESFRNTDVUZWNoXG4gIF0sXG5cbiAgaXNWUEFJRDogZnVuY3Rpb24gaXNWUEFJRE1lZGlhRmlsZShtZWRpYUZpbGUpIHtcbiAgICByZXR1cm4gISFtZWRpYUZpbGUgJiYgbWVkaWFGaWxlLmFwaUZyYW1ld29yayA9PT0gJ1ZQQUlEJztcbiAgfSxcblxuICBmaW5kU3VwcG9ydGVkVlBBSURUZWNoOiBmdW5jdGlvbiBmaW5kU3VwcG9ydGVkVlBBSURUZWNoKG1pbWVUeXBlKSB7XG4gICAgdmFyIGksIGxlbiwgVlBBSURUZWNoO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5WUEFJRF90ZWNocy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgVlBBSURUZWNoID0gdGhpcy5WUEFJRF90ZWNoc1tpXTtcbiAgICAgIGlmIChWUEFJRFRlY2guc3VwcG9ydHMobWltZVR5cGUpKSB7XG4gICAgICAgIHJldHVybiBWUEFJRFRlY2g7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIGlzRmxhc2hTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzRmxhc2hTdXBwb3J0ZWQoKSB7XG5cdCAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhc3RVdGlsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREFkVW5pdFdyYXBwZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpO1xuICB9XG4gIHNhbml0eUNoZWNrKHZwYWlkQWRVbml0LCBvcHRzKTtcblxuICB0aGlzLm9wdGlvbnMgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRzKTtcbiAgdGhpcy5hZFN0YXJ0ZWQgPSBmYWxzZTtcblxuICB0aGlzLl9hZFVuaXQgPSB2cGFpZEFkVW5pdDtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGFkVW5pdCwgb3B0cykge1xuICAgIGlmICghYWRVbml0IHx8ICFWUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZShhZFVuaXQpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRoZSBwYXNzZWQgVlBBSUQgYWRVbml0IGRvZXMgbm90IGZ1bGx5IGltcGxlbWVudCB0aGUgVlBBSUQgaW50ZXJmYWNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNPYmplY3Qob3B0cykpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIG9wdGlvbnMgaGFzaCAgYnV0IGdvdCAnXCIgKyBvcHRzICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmICghKFwicmVzcG9uc2VUaW1lb3V0XCIgaW4gb3B0cykgfHwgIXV0aWxpdGllcy5pc051bWJlcihvcHRzLnJlc3BvbnNlVGltZW91dCkgKXtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIHJlc3BvbnNlVGltZW91dCBpbiBvcHRpb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5WUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZSA9IGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UoVlBBSURBZFVuaXQpIHtcbiAgLy9OT1RFOiBza2lwQWQgaXMgbm90IHBhcnQgb2YgdGhlIG1ldGhvZCBsaXN0IGJlY2F1c2UgaXQgb25seSBhcHBlYXJzIGluIFZQQUlEIDIuMCBhbmQgd2Ugc3VwcG9ydCBWUEFJRCAxLjBcbiAgdmFyIFZQQUlESW50ZXJmYWNlTWV0aG9kcyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsICdpbml0QWQnLCAnc3RhcnRBZCcsICdzdG9wQWQnLCAncmVzaXplQWQnLCAncGF1c2VBZCcsICdleHBhbmRBZCcsICdjb2xsYXBzZUFkJ1xuICBdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBWUEFJREludGVyZmFjZU1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIVZQQUlEQWRVbml0IHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihWUEFJREFkVW5pdFtWUEFJREludGVyZmFjZU1ldGhvZHNbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIGNhblN1YnNjcmliZVRvRXZlbnRzKFZQQUlEQWRVbml0KSAmJiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoVlBBSURBZFVuaXQpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjYW5TdWJzY3JpYmVUb0V2ZW50cyhhZFVuaXQpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vbik7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoYWRVbml0KSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC51bnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vZmYpO1xuXG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuYWRVbml0QXN5bmNDYWxsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gIHZhciBtZXRob2QgPSBhcmdzLnNoaWZ0KCk7XG4gIHZhciBjYiA9IGFyZ3MucG9wKCk7XG4gIHZhciB0aW1lb3V0SWQ7XG5cbiAgc2FuaXR5Q2hlY2sobWV0aG9kLCBjYiwgdGhpcy5fYWRVbml0KTtcbiAgYXJncy5wdXNoKHdyYXBDYWxsYmFjaygpKTtcblxuICB0aGlzLl9hZFVuaXRbbWV0aG9kXS5hcHBseSh0aGlzLl9hZFVuaXQsIGFyZ3MpO1xuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgYSByZXNwb25zZSBvbiBjYWxsICdcIiArIG1ldGhvZCArIFwiJ1wiKSk7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCBhZFVuaXQpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhtZXRob2QpIHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXRbbWV0aG9kXSkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBpbnZhbGlkIG1ldGhvZCBuYW1lXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLmFkVW5pdEFzeW5jQ2FsbCwgbWlzc2luZyBjYWxsYmFja1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xuICB2YXIgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5hZGRFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9uO1xuICBhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGV2dE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLl9hZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCB0aGlzLl9hZFVuaXQudW5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9mZjtcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMuX2FkVW5pdCwgZXZ0TmFtZSwgaGFuZGxlcik7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLndhaXRGb3JFdmVudCA9IGZ1bmN0aW9uIChldnROYW1lLCBjYiwgY29udGV4dCkge1xuXHQgIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHRpbWVvdXRJZDtcbiAgc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpO1xuICBjb250ZXh0ID0gY29udGV4dCB8fCBudWxsO1xuXG4gIHRoaXMub24oZXZ0TmFtZSwgcmVzcG9uc2VMaXN0ZW5lcik7XG5cbiAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgdGhhdC5vZmYoZXZ0TmFtZSwgcmVzcG9uc2VMaXN0ZW5lcik7XG5cdFx0Ly8gaWdub3JlIGV2ZW50cyBpZiBhZCBpcyBmaW5pc2hlZFxuXHRcdGlmICh3aW5kb3cuX3RpbWVvdXRJZHMuaW5kZXhPZih0aW1lb3V0SWQpID49IDApIHtcbiAgICAgIGlmICh0aGF0Lm9wdGlvbnMgJiYgdGhhdC5vcHRpb25zLnBsYXllcikge1xuICAgICAgICB0aGF0Lm9wdGlvbnMucGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5tZXNzYWdlJywgZGF0YToge21lc3NhZ2U6ICdUaW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGV2ZW50ICcgKyBldnROYW1lfX0pO1xuICAgICAgfVxuXHRcdFx0Y2IobmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgZXZlbnQgJ1wiICsgZXZ0TmFtZSArIFwiJ1wiKSk7XG5cdFx0fVxuICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLy8gRU5cbiAgd2luZG93Ll90aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGV2dE5hbWUsIGNiKSB7XG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoZXZ0TmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGV2dCBuYW1lXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgbWlzc2luZyBjYWxsYmFja1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNwb25zZUxpc3RlbmVyKCkge1xuICAgIGlmICh0aGF0Lm9wdGlvbnMgJiYgdGhhdC5vcHRpb25zLnBsYXllcikge1xuICAgICAgdGhhdC5vcHRpb25zLnBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6IGV2dE5hbWV9fSk7XG4gICAgfVxuXHQgIHRoYXQub2ZmKGV2dE5hbWUsIHJlc3BvbnNlTGlzdGVuZXIpO1xuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcblxuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgdGltZW91dElkID0gbnVsbDtcbiAgICB9XG5cbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XG4gICAgY2IuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH1cbn07XG5cbi8vIFZQQUlEIE1FVEhPRFNcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uICh2ZXJzaW9uLCBjYikge1xuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgnaGFuZHNoYWtlVmVyc2lvbicsIHZlcnNpb24sIGNiKTtcbn07XG5cbi8qIGpzaGludCBtYXhwYXJhbXM6NiAqL1xuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhLCBjYikge1xuXHRjb25zb2xlLmxvZygnW0FQTl0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIGluaXRBZCBvbiBjcmVhdGl2ZScpO1xuXHR0aGlzLndhaXRGb3JFdmVudCgnQWRMb2FkZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5pbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucmVzaXplQWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNiKSB7XG4gIC8vIE5PVEU6IEFkU2l6ZUNoYW5nZSBldmVudCBpcyBvbmx5IHN1cHBvcnRlZCBvbiBWUEFJRCAyLjAgc28gZm9yIHRoZSBtb21lbnQgd2UgYXJlIG5vdCBnb2luZyB0byB1c2UgaXRcbiAgLy8gYW5kIHdpbGwgYXNzdW1lIHRoYXQgZXZlcnl0aGluZyBpcyBmaW5lIGFmdGVyIHRoZSBhc3luYyBjYWxsXG5cdGNvbnNvbGUubG9nKCdbQVBOXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgcmVzaXplQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ3Jlc2l6ZUFkJywgd2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNiKTtcbiAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gIFx0d2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkU2l6ZUNoYW5nZScsIGFkVm9sdW1lOiB0aGlzLm9wdGlvbnMucGxheWVyLnZvbHVtZSgpfSk7XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0FQTl0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHN0YXJ0QWQgb24gY3JlYXRpdmUnKTtcblx0aWYgKCF0aGlzLmFkU3RhcnRlZCkge1xuXHRcdHRoaXMud2FpdEZvckV2ZW50KCdBZFN0YXJ0ZWQnLCBjYik7XG5cdH1cbiAgdGhpcy5fYWRVbml0LnN0YXJ0QWQoKTtcbiAgaWYgKHRoaXMuYWRTdGFydGVkKSB7XG4gICAgY2IobnVsbCk7XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RvcEFkID0gZnVuY3Rpb24gKGNiKSB7XG5cdGNvbnNvbGUubG9nKCdbQVBOXSBWUEFJREFkVW5pdFdyYXBwZXItPkNhbGxpbmcgc3RvcEFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFN0b3BwZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucGF1c2VBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0FQTl0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHBhdXNlQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkUGF1c2VkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQucGF1c2VBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0FQTl0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHJlc3VtZUFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBsYXlpbmcnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5yZXN1bWVBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0FQTl0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIGV4cGFuZEFkIG9uIGNyZWF0aXZlJyk7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZEV4cGFuZGVkQ2hhbmdlJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuZXhwYW5kQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0FQTl0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIGNvbGxhcHNlQWQgb24gY3JlYXRpdmUnKTtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5jb2xsYXBzZUFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uIChjYikge1xuXHRjb25zb2xlLmxvZygnW0FQTl0gVlBBSURBZFVuaXRXcmFwcGVyLT5DYWxsaW5nIHNraXBBZCBvbiBjcmVhdGl2ZScpO1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTa2lwcGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuc2tpcEFkKCk7XG59O1xuXG4vL1ZQQUlEIHByb3BlcnR5IGdldHRlcnNcbltcbiAgJ2FkTGluZWFyJyxcbiAgJ2FkV2lkdGgnLFxuICAnYWRIZWlnaHQnLFxuICAnYWRFeHBhbmRlZCcsXG4gICdhZFNraXBwYWJsZVN0YXRlJyxcbiAgJ2FkUmVtYWluaW5nVGltZScsXG4gICdhZER1cmF0aW9uJyxcbiAgJ2FkVm9sdW1lJyxcbiAgJ2FkQ29tcGFuaW9ucycsXG4gICdhZEljb25zJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICB2YXIgZ2V0dGVyTmFtZSA9ICdnZXQnICsgdXRpbGl0aWVzLmNhcGl0YWxpemUocHJvcGVydHkpO1xuXG4gIFZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGVbZ2V0dGVyTmFtZV0gPSBmdW5jdGlvbiAoY2IpIHtcbiAgICB0aGlzLmFkVW5pdEFzeW5jQ2FsbChnZXR0ZXJOYW1lLCBjYik7XG4gIH07XG59KTtcblxuLy9WUEFJRCBwcm9wZXJ0eSBzZXR0ZXJzXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYil7XG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdzZXRBZFZvbHVtZScsdm9sdW1lLCBjYik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0V3JhcHBlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1pbWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL21pbWV0eXBlcycpO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIFZQQUlESFRNTDVDbGllbnQgPSByZXF1aXJlKCdWUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZQQUlESFRNTDVUZWNoKG1lZGlhRmlsZSkge1xuXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlESFRNTDVUZWNoKSkge1xuICAgIHJldHVybiBuZXcgVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKTtcbiAgfVxuXG4gIHNhbml0eUNoZWNrKG1lZGlhRmlsZSk7XG5cbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWh0bWw1JztcbiAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XG4gIHRoaXMudmlkZW9FbCA9IG51bGw7XG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcblxuICB0aGlzLm1lZGlhRmlsZSA9IG1lZGlhRmlsZTtcblxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcbiAgICAgIGlmICghbWVkaWFGaWxlIHx8ICF1dGlsaXRpZXMuaXNTdHJpbmcobWVkaWFGaWxlLnNyYykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUpO1xuICAgICAgfVxuICB9XG59XG5cblZQQUlESFRNTDVUZWNoLlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xuXG5WUEFJREhUTUw1VGVjaC5zdXBwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiAhdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBNaW1lVHlwZXMuaHRtbDUuaW5kZXhPZih0eXBlKSA+IC0xO1xufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjaykge1xuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spO1xuXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjb250YWluZXJFbDtcbiAgdGhpcy52aWRlb0VsID0gdmlkZW9FbDtcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBuZXcgVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudChjb250YWluZXJFbCwgdmlkZW9FbCwge30pO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudC5sb2FkQWRVbml0KHRoaXMubWVkaWFGaWxlLnNyYywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGNvbnRhaW5lciwgdmlkZW8sIGNiKSB7XG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KGNvbnRhaW5lcikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQodmlkZW8pIHx8IHZpZGVvLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ZpZGVvJykge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0spO1xuICAgIH1cbiAgfVxufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIHVubG9hZEFkVW5pdCgpIHtcbiAgaWYgKHRoaXMudnBhaWRIVE1MQ2xpZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50LmRlc3Ryb3koKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGxvZ2dlci5lcnJvciAoJ1ZBU1QgRVJST1I6IHRyeWluZyB0byB1bmxvYWQgdGhlIFZQQUlEIGFkdW5pdCcpO1xuICAgIH1cblxuICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbnRhaW5lckVsKSB7XG4gICAgZG9tLnJlbW92ZSh0aGlzLmNvbnRhaW5lckVsKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcbiAgfVxufTtcblxudmFyIFBSRUZJWCA9ICdvbiBWUEFJREhUTUw1VGVjaCc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUgPSBQUkVGSVggKyAnLCBpbnZhbGlkIE1lZGlhRmlsZSc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwgPSBQUkVGSVggKyAnLCBpbnZhbGlkIGNvbnRhaW5lciBIdG1sRWxlbWVudCc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9WSURFT19FTCA9IFBSRUZJWCArICcsIGludmFsaWQgSFRNTFZpZGVvRWxlbWVudCc7XG5WUEFJREhUTUw1VGVjaC5NSVNTSU5HX0NBTExCQUNLID0gUFJFRklYICsgJywgbWlzc2luZyB2YWxpZCBjYWxsYmFjayc7XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNVRlY2g7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9taW1ldHlwZXMnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFJlc3BvbnNlJyk7XG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RUcmFja2VyJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi92YXN0L3Zhc3RVdGlsJyk7XG5cbnZhciBWUEFJREFkVW5pdFdyYXBwZXIgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0V3JhcHBlcicpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVlBBSURJbnRlZ3JhdG9yKSkge1xuICAgIHJldHVybiBuZXcgVlBBSURJbnRlZ3JhdG9yKHBsYXllcik7XG4gIH1cblxuICB0aGlzLlZJRVdfTU9ERSA9IHtcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxuICAgIEZVTExTQ1JFRU46IFwiZnVsbHNjcmVlblwiLFxuICAgIFRIVU1CTkFJTDogXCJ0aHVtYm5haWxcIlxuICB9O1xuICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgdGhpcy5jb250YWluZXJFbCA9IGNyZWF0ZVZQQUlEQ29udGFpbmVyRWwocGxheWVyKTtcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIHJlc3BvbnNlVGltZW91dDogNTAwMCxcbiAgICBWUEFJRF9WRVJTSU9OOiAnMi4wJ1xuICB9O1xuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIFxuICB0aGlzLmNvbnRlbnRTb3VyY2UgPSBwbGF5ZXIudGVjaF8uZWxfLnNyYztcbiAgdGhpcy5uZWVkc1Nob3dQbGF5ZXIgPSBmYWxzZTtcbiAgXG4gIHRoaXMuZXJyb3JIYXNCZWVuVHJhY2tlZCA9IGZhbHNlO1xuICB0aGlzLmFkRmluaXNoZWQgPSBmYWxzZTtcbiAgXG4gIHRoaXMudGltZVVwZGF0ZVRpbWVyID0gbnVsbDtcbiAgXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjcmVhdGVWUEFJRENvbnRhaW5lckVsKCkge1xuICAgIHZhciBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckVsLmlkID0gJ0FQTi1WUEFJRC1jb250YWluZXInO1xuICAgIGRvbS5hZGRDbGFzcyhjb250YWluZXJFbCwgJ1ZQQUlELWNvbnRhaW5lcicpO1xuICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShjb250YWluZXJFbCwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lckVsO1xuICB9XG59XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUucGxheUFkID0gZnVuY3Rpb24gcGxheVZQYWlkQWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZBU1RJbnRlZ3JhdG9yLnBsYXlBZCwgbWlzc2luZyByZXF1aXJlZCBWQVNUUmVzcG9uc2UnKSk7XG4gIH1cblxuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgbG9nZ2VyLmRlYnVnIChcIjxWUEFJREludGVncmF0b3IucGxheUFkPiBsb29raW5nIGZvciBzdXBwb3J0ZWQgdGVjaC4uLlwiKTtcbiAgdmFyIHRlY2ggPSB0aGlzLl9maW5kU3VwcG9ydGVkVGVjaCh2YXN0UmVzcG9uc2UsIHRoaXMuc2V0dGluZ3MpO1xuXG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdXRpbGl0aWVzLm5vb3A7XG5cbiAgdGhpcy5fYWRVbml0ID0gbnVsbDtcblxuICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcbiAgXG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCB0cmlnZ2VyVnBhaWRBZEVuZCk7XG4gIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24oKXtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIHRyaWdnZXJWcGFpZEFkRW5kKTtcbiAgICByZW1vdmVBZFVuaXQoKTtcbiAgfSk7XG5cbiAgaWYgKHRlY2gpIHtcbiAgICBsb2dnZXIuaW5mbyAoXCI8VlBBSURJbnRlZ3JhdG9yLnBsYXlBZD4gZm91bmQgdGVjaDogXCIsIHRlY2gpO1xuXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIG5leHQobnVsbCwgdGVjaCwgdmFzdFJlc3BvbnNlKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLl9sb2FkQWRVbml0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLl9wbGF5QWRVbml0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLl9maW5pc2hQbGF5aW5nLmJpbmQodGhpcylcblxuICAgIF0sIGFkQ29tcGxldGUpO1xuXG4gICAgdGhpcy5fYWRVbml0ID0ge1xuICAgICAgX3BhdXNlZDogdHJ1ZSxcbiAgICAgIHR5cGU6ICdWUEFJRCcsXG4gICAgICBwYXVzZUFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLnBhdXNlQWQnKTtcbiAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpOy8vd2UgbWFrZSBzdXJlIHRoYXQgdGhlIHZpZGVvIGNvbnRlbnQgZ2V0cyBzdG9wcGVkLlxuICAgICAgfSxcbiAgICAgIHJlc3VtZUFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQucmVzdW1lQWQnKTtcbiAgICAgIH0sXG4gICAgICBpc1BhdXNlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XG4gICAgICB9LFxuICAgICAgZ2V0U3JjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRlY2gubWVkaWFGaWxlO1xuICAgICAgfVxuICAgIH07XG5cbiAgfSBlbHNlIHtcbiAgICBsb2dnZXIuZGVidWcgKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGNvdWxkIG5vdCBmaW5kIHN1aXRhYmxlIHRlY2hcIik7XG4gICAgdmFyIGVycm9yID0gbmV3IFZBU1RFcnJvcignb24gVlBBSURJbnRlZ3JhdG9yLnBsYXlBZCwgY291bGQgbm90IGZpbmQgYSBzdXBwb3J0ZWQgbWVkaWFGaWxlJywgNDAzKTtcbiAgICBhZENvbXBsZXRlKGVycm9yLCB0aGlzLl9hZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fYWRVbml0O1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gYWRDb21wbGV0ZShlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpIHtcbiAgICBpZiAoZXJyb3IgJiYgdmFzdFJlc3BvbnNlKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKHZhc3RSZXNwb25zZSwgZXJyb3IuY29kZSk7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xuICAgIGNhbGxiYWNrKGVycm9yLCB2YXN0UmVzcG9uc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlclZwYWlkQWRFbmQoKXtcblx0ICAgIC8vcGxheWVyLnRyaWdnZXIoJ3N0b3BBZCcpO1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xuICAgIGlmICh0ZWNoKSB7XG4gICAgXHRjb25zb2xlLmxvZygnW0FQTl0gVlBBSURJbnRlZ3JhdG9yLT5DYWxsaW5nIHVubG9hZEFkVW5pdCAoaW1wbGljaXRseSBpbnZva2VzIHN0b3BBZCBhbmQgdW5zdWJzY3JpYmVzIFZQQUlEIGV2ZW50cyknKTtcbiAgICAgIHRlY2gudW5sb2FkQWRVbml0KCk7XG4gICAgfVxuICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12cGFpZC1hZCcpO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9maW5kU3VwcG9ydGVkVGVjaCA9IGZ1bmN0aW9uICh2YXN0UmVzcG9uc2UsIHNldHRpbmdzKSB7XG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB2cGFpZE1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcy5maWx0ZXIodmFzdFV0aWwuaXNWUEFJRCk7XG4gIHZhciBwcmVmZXJyZWRUZWNoID0gc2V0dGluZ3MgJiYgc2V0dGluZ3MucHJlZmVycmVkVGVjaDtcbiAgdmFyIHNraXBwZWRTdXBwb3J0VGVjaHMgPSBbXTtcbiAgdmFyIGksIGxlbiwgbWVkaWFGaWxlLCBWUEFJRFRlY2gsIGlzUHJlZmVyZWRUZWNoO1xuXG4gIGZvciAoaSA9IDAsIGxlbiA9IHZwYWlkTWVkaWFGaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIG1lZGlhRmlsZSA9IHZwYWlkTWVkaWFGaWxlc1tpXTtcbiAgICBWUEFJRFRlY2ggPSB2YXN0VXRpbC5maW5kU3VwcG9ydGVkVlBBSURUZWNoKG1lZGlhRmlsZS50eXBlKTtcblxuICAgIC8vIG5vIHN1cHBvcnRlZCBWUEFJRCB0ZWNoIGZvdW5kLCBza2lwIG1lZGlhZmlsZVxuICAgIGlmICghVlBBSURUZWNoKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBkbyB3ZSBoYXZlIGEgcHJlZmVyZWQgdGVjaCwgZG9lcyBpdCBwbGF5IHRoaXMgbWVkaWEgZmlsZSA/XG4gICAgaXNQcmVmZXJlZFRlY2ggPSBwcmVmZXJyZWRUZWNoID9cbiAgICAgIChtZWRpYUZpbGUudHlwZSA9PT0gcHJlZmVycmVkVGVjaCB8fCAoTWltZVR5cGVzW3ByZWZlcnJlZFRlY2hdICYmIE1pbWVUeXBlc1twcmVmZXJyZWRUZWNoXS5pbmRleE9mKG1lZGlhRmlsZS50eXBlKSA+IC0xICkpIDpcbiAgICAgIGZhbHNlO1xuXG4gICAgLy8gb3VyIHByZWZlcmVkIHRlY2ggY2FuIHJlYWQgdGhpcyBtZWRpYWZpbGUsIGRlZmF1bHRpbmcgdG8gaXQuXG4gICAgaWYgKGlzUHJlZmVyZWRUZWNoKSB7XG4gICAgICByZXR1cm4gbmV3IFZQQUlEVGVjaChtZWRpYUZpbGUsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBza2lwcGVkU3VwcG9ydFRlY2hzLnB1c2goeyBtZWRpYUZpbGU6IG1lZGlhRmlsZSwgdGVjaDogVlBBSURUZWNoIH0pO1xuICB9XG5cbiAgaWYgKHNraXBwZWRTdXBwb3J0VGVjaHMubGVuZ3RoKSB7XG4gICAgdmFyIGZpcnN0VGVjaCA9IHNraXBwZWRTdXBwb3J0VGVjaHNbMF07XG4gICAgcmV0dXJuIG5ldyBmaXJzdFRlY2gudGVjaChmaXJzdFRlY2gubWVkaWFGaWxlLCBzZXR0aW5ncyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZQQUlEQWRVbml0V3JhcHBlciA9IGZ1bmN0aW9uKGFkVW5pdCwgc3JjLCByZXNwb25zZVRpbWVvdXQsIHBsYXllcikge1xuXHRyZXR1cm4gbmV3IFZQQUlEQWRVbml0V3JhcHBlcihhZFVuaXQsIHtzcmM6IHNyYywgcmVzcG9uc2VUaW1lb3V0OiByZXNwb25zZVRpbWVvdXQsIHBsYXllcjogcGxheWVyfSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9sb2FkQWRVbml0ID0gZnVuY3Rpb24gKHRlY2gsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIHZqc1RlY2hFbCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICAvL3ZhciByZXNwb25zZVRpbWVvdXQgPSB0aGlzLnNldHRpbmdzLnJlc3BvbnNlVGltZW91dCB8fCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0O1xuICB2YXIgcmVzcG9uc2VUaW1lb3V0ID0gdGhpcy5zZXR0aW5ncy5hZENhbmNlbFRpbWVvdXQgfHwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dDtcbiAgdGVjaC5sb2FkQWRVbml0KHRoaXMuY29udGFpbmVyRWwsIHZqc1RlY2hFbCwgZnVuY3Rpb24gKGVycm9yLCBhZFVuaXQpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBmcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lGUkFNRScpO1xuICAgICAgaWYgKGZybXMgJiYgZnJtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZybXNbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIioqKioqKiB1c2VyIGFjdGl2aXR5XCIpO1xuICAgICAgICAgICAgcGxheWVyLnVzZXJBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIWRvbS5oYXNDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1oYXMtc3RhcnRlZCcpKSB7XG4gICAgICAgICAgICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLWhhcy1zdGFydGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5tZXNzYWdlJywgZGF0YToge21lc3NhZ2U6ICdQbGF5aW5nICcgKyB0ZWNoLm1lZGlhRmlsZS5zcmMgKyAnICh0eXBlID0gJyArIHRlY2gubWVkaWFGaWxlLnR5cGUgKyBcbiAgICAgIFx0ICAnLCBhcGlGcmFtZXdvcmsgPSAnICsgdGVjaC5tZWRpYUZpbGUuYXBpRnJhbWV3b3JrICsgJyknfX0pO1xuICAgICAgdmFyIFdyYXBwZWRBZFVuaXQgPSB0aGF0Ll9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB0ZWNoLm1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlVGltZW91dCwgcGxheWVyKTtcbiAgICAgIHZhciB0ZWNoQ2xhc3MgPSAndmpzLScgKyB0ZWNoLm5hbWUgKyAnLWFkJztcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgdGVjaENsYXNzKTtcbiAgICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSx0ZWNoQ2xhc3MpO1xuICAgICAgfSk7XG4gICAgICBuZXh0KG51bGwsIFdyYXBwZWRBZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbmV4dChlLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlBZFVuaXQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIGFzeW5jLndhdGVyZmFsbChbXG4gICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH0sXG4gICAgdGhpcy5faGFuZHNoYWtlLmJpbmQodGhpcyksXG4gICAgdGhpcy5fc2V0dXBFdmVudHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9pbml0QWQuYmluZCh0aGlzKSxcbiAgICAvL3RoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkU2tpcEJ1dHRvbi5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2xpbmtQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3N0YXJ0QWQuYmluZCh0aGlzKVxuICBdLCBjYWxsYmFjayk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9oYW5kc2hha2UgPSBmdW5jdGlvbiBoYW5kc2hha2UoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgYWRVbml0LmhhbmRzaGFrZVZlcnNpb24odGhpcy5vcHRpb25zLlZQQUlEX1ZFUlNJT04sIGZ1bmN0aW9uIChlcnJvciwgdmVyc2lvbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikpIHtcbiAgICAgIHJldHVybiBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChuZXcgVkFTVEVycm9yKCdvbiBWUEFJREludGVncmF0b3IuX2hhbmRzaGFrZSwgdW5zdXBwb3J0ZWQgdmVyc2lvbiBcIicgKyB2ZXJzaW9uICsgJ1wiJyksIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaXNTdXBwb3J0ZWRWZXJzaW9uKHZlcnNpb24pIHtcbiAgICB2YXIgbWFqb3JOdW0gPSBtYWpvcih2ZXJzaW9uKTtcbiAgICByZXR1cm4gbWFqb3JOdW0gPj0gMSAmJiBtYWpvck51bSA8PSAyO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFqb3IodmVyc2lvbikge1xuICAgIHZhciBwYXJ0cyA9IHZlcnNpb24uc3BsaXQoJy4nKTtcbiAgICByZXR1cm4gcGFyc2VJbnQocGFydHNbMF0sIDEwKTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5faW5pdEFkID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciB0ZWNoID0gdGhpcy5wbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGRpbWVuc2lvbiA9IGRvbS5nZXREaW1lbnNpb24odGVjaCk7XG4gIGFkVW5pdC5pbml0QWQoZGltZW5zaW9uLndpZHRoLCBkaW1lbnNpb24uaGVpZ2h0LCB0aGlzLlZJRVdfTU9ERS5OT1JNQUwsIC0xLCB7QWRQYXJhbWV0ZXJzOiB2YXN0UmVzcG9uc2UuYWRQYXJhbWV0ZXJzIHx8ICcnfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZBU1RUcmFja2VyID0gZnVuY3Rpb24oYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpIHtcbiAgcmV0dXJuIG5ldyBWQVNUVHJhY2tlcihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgYWRVbml0U3JjID0gYWRVbml0Lm9wdGlvbnMuc3JjO1xuICB2YXIgdHJhY2tlciA9IHRoaXMuX2NyZWF0ZVZBU1RUcmFja2VyKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKTtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgY29udGVudFNvdXJjZSA9IHRoaXMuY29udGVudFNvdXJjZTtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICBcbiAgdGhpcy50cmFja2VyID0gdHJhY2tlcjtcbiAgXG4gIHRoaXMuaW1wcmVzc2lvblRyaWdnZXJlZCA9IGZhbHNlO1xuXG4gIGFkVW5pdC5vbignQWRTa2lwcGVkJywgZnVuY3Rpb24gKCkge1xuXHQgIFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkU2tpcHBlZCd9fSk7XG5cdCAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHQgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFNraXBwZWQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTa2lwcGVkJyk7XG4gICAgdHJhY2tlci50cmFja1NraXAoKTtcbiAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcbiAgICBcbiAgICAvLyBWSURMQS0yNjc2IC0gZm9yY2UgcGxheWVyIHRvIGNsZWFuIHJlc291cmNlc1xuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZHNDYW5jZWwnKTtcblx0fSwgMzAwKTtcbiAgICAvL3BsYXllci50cmlnZ2VyKCdhZFN0b3AnKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gdHJpZ2dlckltcHJlc3Npb24oKSB7XG5cdCAgaWYgKCF0aGF0LmltcHJlc3Npb25UcmlnZ2VyZWQpIHtcblx0XHQgIHRoYXQuaW1wcmVzc2lvblRyaWdnZXJlZCA9IHRydWU7XG5cdCAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHQgICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZEltcHJlc3Npb24nLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgICAgIH1cblx0XHQgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZEltcHJlc3Npb24nfX0pO1xuXHRcdCAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkSW1wcmVzc2lvbicpO1xuXHRcdCAgdHJhY2tlci50cmFja0ltcHJlc3Npb25zKCk7XG5cdCAgfVxuICB9XG4gIGFkVW5pdC5vbignQWRJbXByZXNzaW9uJywgZnVuY3Rpb24gKCkge1xuXHQgIHRyaWdnZXJJbXByZXNzaW9uKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRTdGFydGVkJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmIChhZFVuaXQuYWRTdGFydGVkKSB7XG5cdFx0ICAvLyBpZ25vcmUgc2Vjb25kIEFkU3RhcnRlZCBldmVudFxuXHRcdCAgcmV0dXJuO1xuXHQgIH1cbiAgICBpZiAod2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nKSB7XG4gICAgICB3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5VHJhY2tpbmcuaW5pdCh3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5LmNvbnRleHRJZCwgXG4gICAgICAgICAgcGxheWVyLmR1cmF0aW9uKCksIHBsYXllci5lbF8ub2Zmc2V0V2lkdGgsIHBsYXllci5lbF8ub2Zmc2V0SGVpZ2h0KTtcbiAgICB9XG4gICAgYWRVbml0LmFkU3RhcnRlZCA9IHRydWU7XG4gICAgaWYgKCFkb20uaGFzQ2xhc3MocGxheWVyLmVsKCksICd2anMtaGFzLXN0YXJ0ZWQnKSkge1xuICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLWhhcy1zdGFydGVkJyk7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0YXJ0ZWQnKTtcbiAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XG4gICAgaWYgKCF3aW5kb3cuX21vbFNldHRpbmdzLnBsYXlzSW5CcmVhayAmJiBhZFVuaXQuZ2V0QWREdXJhdGlvbikge1xuICAgICAgYWRVbml0LmdldEFkRHVyYXRpb24oZnVuY3Rpb24odGhhdCwgZHVyKSB7XG4gICAgICAgIGlmIChkdXIgPiAwKSB7XG4gICAgICAgICAgcGxheWVyLmR1cmF0aW9uKGR1cik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgXHR0cmlnZ2VySW1wcmVzc2lvbigpO1xuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xuICAgIHBsYXllci5vbmUoJ2FkU3RvcCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGFkVW5pdC5zdG9wQWQpIHtcbiAgICAgICAgYWRVbml0LnN0b3BBZCh1dGlsaXRpZXMubm9vcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgaWYgKHV0aWxpdGllcy5pc0lEZXZpY2UoKSkge1xuICAgIFx0Ly8gVklETEEtMjgzNiAoQWQgY2xpY2sgdGhydSBkb2VzIG5vdCBsYW5kaW5nIGNsaWNrIHRocnUgdXJsKVxuICAgIFx0Ly8gaVBob25lIGFuZCBpUGFkXG4gICAgXHR2YXIgZWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2anMtcmVzaXplLW1hbmFnZXInKTtcbiAgICBcdGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGggPiAwKSB7XG4gICAgXHRcdHZhciBwYXJlbnQgPSBlbGVtc1swXS5wYXJlbnRFbGVtZW50O1xuICAgIFx0XHRpZiAocGFyZW50KSB7XG4gICAgXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGVsZW1zWzBdKTtcbiAgICBcdFx0fVxuICAgIFx0fVxuICAgIH1cblxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVUaW1lQ29udHJvbHMoKSB7XG5cdCAgXHR2YXIgY29udmVydFRpbWVUb1N0ciA9IGZ1bmN0aW9uKHRpbWUpIHtcblx0XHRcdHZhciBzZWNzID0gcGFyc2VJbnQodGltZSArIDAuNSk7XG5cdFx0XHR2YXIgbWlucyA9IHBhcnNlSW50KHNlY3MgLyA2MCk7XG5cdFx0XHRzZWNzIC09IChtaW5zICogNjApO1xuXHRcdFx0dmFyIHN0ciA9IG1pbnMudG9TdHJpbmcoKSArICc6JyArIChzZWNzID4gOSA/ICcnICA6ICcwJykgKyBzZWNzLnRvU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH07XG5cdFx0XG5cdFx0dmFyIGFwblRpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fwbl90aW1lX2Rpc3BsYXknKTtcblx0XHRpZiAoIWFwblRpbWVEaXNwbGF5KSB7XG5cdFx0XHRhcG5UaW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0cGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5hcHBlbmRDaGlsZChhcG5UaW1lRGlzcGxheSk7XG5cdFx0XHRhcG5UaW1lRGlzcGxheS5pZCA9ICdhcG5fdGltZV9kaXNwbGF5Jztcblx0XHRcdGFwblRpbWVEaXNwbGF5LmNsYXNzID0gJ3Zqcy1jdXJyZW50LXRpbWUtZGlzcGxheSc7XG5cdFx0XHRhcG5UaW1lRGlzcGxheVsnYXJpYS1saXZlJ10gPSAnb2ZmJztcblx0XHRcdGFwblRpbWVEaXNwbGF5LmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInZqcy1jb250cm9sLXRleHRcIj48L3NwYW4+MDowMCc7XG5cdFx0XHRwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZCgnY3VycmVudFRpbWVEaXNwbGF5JykuZWxfLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0YXBuVGltZURpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0fVxuXHRcdGFkVW5pdC5nZXRBZFJlbWFpbmluZ1RpbWUoZnVuY3Rpb24odGhhdCwgdGltZSkge1xuXHRcdFx0aWYgKHRpbWUgPj0gMCkge1xuXHRcdFx0XHR2YXIgY3VyVGltZSA9IHBsYXllci5kdXJhdGlvbigpIC0gdGltZTtcblx0XHRcdFx0aWYgKGN1clRpbWUgPj0gMCkge1xuXHRcdFx0XHRcdGFwblRpbWVEaXNwbGF5LmNoaWxkTm9kZXNbMV0ubm9kZVZhbHVlID0gY29udmVydFRpbWVUb1N0cihjdXJUaW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuICB9XG5cdCAgXG4gIGFkVW5pdC5vbignQWRWaWRlb1N0YXJ0JywgZnVuY3Rpb24gKCkge1xuXHQgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICdBZFZpZGVvU3RhcnQnfX0pO1xuICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gICAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvU3RhcnQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICB9XG5cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb1N0YXJ0Jyk7XG4gICAgdHJhY2tlci50cmFja1N0YXJ0KCk7XG5cdGlmICghd2luZG93Ll9tb2xTZXR0aW5ncy5wbGF5c0luQnJlYWsgJiYgYWRVbml0LmdldEFkRHVyYXRpb24pIHtcblx0XHRhZFVuaXQuZ2V0QWREdXJhdGlvbihmdW5jdGlvbih0aGF0LCBkdXIpIHtcblx0XHRcdGlmIChkdXIgPiAwKSB7XG5cdFx0XHRcdHBsYXllci5kdXJhdGlvbihkdXIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgaWYgKHV0aWxpdGllcy5pc01vYmlsZSgpKSB7XG4gICAgICAgIC8vIFZJRExBLTIzMzYgKHNpbXVsYXRlIHVzZXIgYWN0aXZpdHkgdG8gbWFrZSBzdXJlIGNvbnRyb2wgYmFyIGlzIHZpc2libGUgb24gbW9iaWxlIGRldmljZXMpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJRlJBTUUnKVswXS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbW91c2VvdmVyJykpO1xuICAgICAgICBcdH0sIGkgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGVudFNvdXJjZSA9PT0gcGxheWVyLnRlY2hfLmVsXy5zcmMpIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5tZXNzYWdlJywgZGF0YToge21lc3NhZ2U6ICdWUEFJRCBjcmVhdGl2ZSB1c2VzIGl0cyBvd24gdmlkZW8gdGFnJ319KTtcbiAgICAgICAgLy9wbGF5ZXIudGVjaF8uZWxfLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIC8vcGxheWVyLmNvbnRyb2xCYXIuaGlkZSgpO1xuICAgICAgICB0aGF0Lm5lZWRzU2hvd1BsYXllciA9IHRydWU7XG4gICAgXHRpZiAoIXdpbmRvdy5fbW9sU2V0dGluZ3MucGxheXNJbkJyZWFrKSB7XG4gICAgXHRcdHRoYXQudGltZVVwZGF0ZVRpbWVyID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZUNvbnRyb2xzLCA1MDApO1xuICAgIFx0fVxuICAgIH1cbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFBsYXlpbmcnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cbiAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRQbGF5aW5nJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBsYXlpbmcnKTtcbiAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRQYXVzZWQnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cbiAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRQYXVzZWQnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkUGF1c2VkJyk7XG4gICAgdHJhY2tlci50cmFja1BhdXNlKCk7XG4gICAgbm90aWZ5UGF1c2VUb1BsYXllcigpO1xuXHQgIHZhciBpZnJhbWVCYWNrQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVCYWNrQnV0dG9uJyk7XG5cdCAgaWYgKGlmcmFtZUJhY2tCdXR0b24pIHtcblx0XHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cbiAgICBwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIHRydWUpO1xuICB9KTtcblxuICBmdW5jdGlvbiBub3RpZnlQbGF5VG9QbGF5ZXIoKXtcbiAgICBpZih0aGF0Ll9hZFVuaXQgJiYgdGhhdC5fYWRVbml0LmlzUGF1c2VkKCkpe1xuICAgICAgdGhhdC5fYWRVbml0Ll9wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3BsYXknKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5UGF1c2VUb1BsYXllcigpIHtcbiAgICBpZih0aGF0Ll9hZFVuaXQpe1xuICAgICAgdGhhdC5fYWRVbml0Ll9wYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigncGF1c2UnKTtcbiAgfVxuXG4gIGFkVW5pdC5vbignQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRWaWRlb0ZpcnN0UXVhcnRpbGUnfX0pO1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0d2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0ZpcnN0UXVhcnRpbGUnKTtcbiAgICB0cmFja2VyLnRyYWNrRmlyc3RRdWFydGlsZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9NaWRwb2ludCcsIGZ1bmN0aW9uICgpIHtcblx0ICBpZiAodGhhdC5hZEZpbmlzaGVkKSB7XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFZpZGVvTWlkcG9pbnQnfX0pO1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0d2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkVmlkZW9NaWRwb2ludCcsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9NaWRwb2ludCcpO1xuICAgIHRyYWNrZXIudHJhY2tNaWRwb2ludCgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJywgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGF0LmFkRmluaXNoZWQpIHtcblx0XHQgIHJldHVybjtcblx0ICB9XG5cdFx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkVmlkZW9UaGlyZFF1YXJ0aWxlJ319KTtcbiAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlLmRpc3BhdGNoRXZlbnQoe3R5cGU6ICdBZFZpZGVvVGhpcmRRdWFydGlsZScsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9UaGlyZFF1YXJ0aWxlJyk7XG4gICAgdHJhY2tlci50cmFja1RoaXJkUXVhcnRpbGUoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvQ29tcGxldGUnLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRWaWRlb0NvbXBsZXRlJ319KTtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0NvbXBsZXRlJyk7XG4gICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XG4gICAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG4gIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWaWRlb0NvbXBsZXRlJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgIH1cbiAgICAvLyBWSURMQS0yNDA2IGZvcnNlIGFkIHRvIHN0b3BcbiAgICBpZiAoYWRVbml0LnN0b3BBZCkge1xuICAgICAgYWRVbml0LnN0b3BBZCh1dGlsaXRpZXMubm9vcCk7XG4gICAgfVxuICB9KTtcblxuICBhZFVuaXQub24oJ0FkQ2xpY2tUaHJ1JywgZnVuY3Rpb24gKGRhdGEpIHtcblx0ICBpZiAodGhhdC5hZEZpbmlzaGVkKSB7XG5cdFx0ICByZXR1cm47XG5cdCAgfVxuXHQgIHZhciBlbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUgPSBmYWxzZTtcblx0cGxheWVyLnRyaWdnZXIoe3R5cGU6ICd0cmFjZS5ldmVudCcsIGRhdGE6IHtldmVudDogJ3ZwYWlkLkFkQ2xpY2tUaHJ1J319KTtcbiAgICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRDbGlja1RocnUnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG4gICAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkQ2xpY2tUaHJ1Jyk7XG4gICAgdmFyIHVybCA9IGRhdGEudXJsO1xuICAgIHZhciBwbGF5ZXJIYW5kbGVzID0gZGF0YS5wbGF5ZXJIYW5kbGVzO1xuICAgIHZhciBjbGlja1RocnVVcmwgPSB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh1cmwpID8gdXJsIDogZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwodmFzdFJlc3BvbnNlLmNsaWNrVGhyb3VnaCk7XG5cblx0aWYgKHBsYXllckhhbmRsZXMgJiYgd2luZG93Ll9tb2xTZXR0aW5ncy5kaXNhYmxlQ2xpY2tUaHJ1KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xuICAgIGlmIChwbGF5ZXJIYW5kbGVzICYmIGNsaWNrVGhydVVybCkge1xuICAgIFx0aWYgKHBsYXllci5pc0Z1bGxzY3JlZW4oKSAmJiBlbmFibGVGdWxsc2NyZWVuQ2xpY2tJRnJhbWUpIHtcbiAgICBcdFx0YWRkQ2xpY2tUaHJvdWdoRGl2QmxvY2tlcihjbGlja1RocnVVcmwpO1xuICAgIFx0fVxuICAgIFx0ZWxzZSB7XG4gICAgXHRcdHdpbmRvdy5vcGVuKGNsaWNrVGhydVVybCwgJ19ibGFuaycpO1xuICAgIFx0fVxuICAgIH1cbiAgICAvL2FkZENsaWNrVGhyb3VnaERpdkJsb2NrZXIoJ2h0dHBzOi8vd3d3LmFwcG5leHVzLmNvbS9lbicpO1xuICAgIFxuICAgIC8vIFZJRExBLTIyNjkgKEFkIGRvZXMgbm90IHBhdXNlIHdoZW4gYnJvd3Npbmcgb3V0IHRvIGEgY2xpY2sgdXJsIGZyb20gYSB2cGFpZCBhZClcbiAgICBhZFVuaXQucGF1c2VBZCh1dGlsaXRpZXMubm9vcCk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybykge1xuICAgICAgdmFyIHZhcmlhYmxlcyA9IHtcbiAgICAgICAgQVNTRVRVUkk6IGFkVW5pdC5vcHRpb25zLnNyYyxcbiAgICAgICAgQ09OVEVOVFBMQVlIRUFEOiAwIC8vSW4gVlBBSUQgdGhlcmUgaXMgbm8gbWV0aG9kIHRvIGtub3cgdGhlIGN1cnJlbnQgdGltZSBmcm9tIHRoZSBhZFVuaXRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBjbGlja1Rocm91Z2hNYWNybyA/IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm8oY2xpY2tUaHJvdWdoTWFjcm8sIHZhcmlhYmxlcykgOiBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJywgZnVuY3Rpb24gKCkge1xuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFVzZXJBY2NlcHRJbnZpdGF0aW9uJ319KTtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyQWNjZXB0SW52aXRhdGlvbicpO1xuICAgIHRyYWNrZXIudHJhY2tBY2NlcHRJbnZpdGF0aW9uKCk7XG4gICAgdHJhY2tlci50cmFja0FjY2VwdEludml0YXRpb25MaW5lYXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFVzZXJDbG9zZScsIGZ1bmN0aW9uICgpIHtcblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRVc2VyQ2xvc2UnfX0pO1xuXHQgICAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcblx0ICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRVc2VyQ2xvc2UnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyQ2xvc2UnKTtcbiAgICB0cmFja2VyLnRyYWNrQ2xvc2UoKTtcbiAgICB0cmFja2VyLnRyYWNrQ2xvc2VMaW5lYXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFVzZXJNaW5pbWl6ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3RyYWNlLmV2ZW50JywgZGF0YToge2V2ZW50OiAndnBhaWQuQWRVc2VyTWluaW1pemUnfX0pO1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJNaW5pbWl6ZScpO1xuICAgIHRyYWNrZXIudHJhY2tDb2xsYXBzZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkRXJyb3InLCBmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHRoYXQuYWRGaW5pc2hlZCkge1xuXHRcdCAgcmV0dXJuO1xuXHQgIH1cblx0ICAvLyBWSURMQS0yMzg5IHN1cHByZXNzIGVyb3IgdHJhY2tpbmcgYWZ0ZXIgYWQgaW1wcmVzc2lvbiBoYXMgYmVlbiByZXBvcnRlZFxuXHQgIGlmICghdGhhdC5pbXByZXNzaW9uVHJpZ2dlcmVkICYmICF0aGF0LmVycm9ySGFzQmVlblRyYWNrZWQpIHtcblx0XHQgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZEVycm9yJ319KTtcblx0ICAgICAgaWYgKHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlKSB7XG5cdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkRXJyb3InLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgICAgIH1cblx0ICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkRXJyb3InKTtcblx0ICAgIC8vTk9URTogd2UgdHJhY2sgZXJyb3JzIGNvZGUgOTAxLCBhcyBub3RlZCBpbiBWQVNUIDMuMFxuXHQgICAgdHJhY2tlci50cmFja0Vycm9yV2l0aENvZGUoOTAxKTtcblx0ICAgIHRoYXQuZXJyb3JIYXNCZWVuVHJhY2tlZCA9IHRydWU7XG5cdCAgfVxuXHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVm9sdW1lQ2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFZvbHVtZUNoYW5nZSd9fSk7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJyk7XG4gICAgdmFyIGxhc3RWb2x1bWUgPSBwbGF5ZXIudm9sdW1lKCk7XG4gICAgYWRVbml0LmdldEFkVm9sdW1lKGZ1bmN0aW9uIChlcnJvciwgY3VycmVudFZvbHVtZSkge1xuICAgICAgaWYgKGxhc3RWb2x1bWUgIT09IGN1cnJlbnRWb2x1bWUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRWb2x1bWUgPT09IDAgJiYgbGFzdFZvbHVtZSA+IDApIHtcbiAgICAgICAgICB0cmFja2VyLnRyYWNrTXV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRWb2x1bWUgPiAwICYmIGxhc3RWb2x1bWUgPT09IDApIHtcbiAgICAgICAgICB0cmFja2VyLnRyYWNrVW5tdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIudm9sdW1lKGN1cnJlbnRWb2x1bWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkU2l6ZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0ICBpZiAocGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QubmVlZFN5bmNQbGF5KSB7XG5cdFx0ICBpZiAocGxheWVyLnBhdXNlZCgpICE9PSBwbGF5ZXIudGVjaF8uZWxfLnBhdXNlZCkge1xuXHRcdFx0ICBpZiAocGxheWVyLnRlY2hfLmVsXy5wYXVzZWQpIHtcblx0XHRcdFx0ICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcblx0XHRcdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGF1c2VkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHRcdFx0XHQgIH1cblx0XHRcdFx0ICBub3RpZnlQYXVzZVRvUGxheWVyKCk7XG5cdFx0XHRcdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcblx0XHRcdCAgfVxuXHRcdFx0ICBlbHNlIHtcblx0XHRcdFx0ICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcblx0XHRcdCAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkUGxheWluZycsIGFkVm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9KTtcblx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG5cdFx0XHRcdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG5cdFx0XHQgIH1cblx0XHQgIH1cblx0XHQgIHBsYXllci52YXN0Lm5lZWRTeW5jUGxheSA9IGZhbHNlO1xuXHQgIH0gXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFkZENsaWNrVGhyb3VnaERpdkJsb2NrZXIoY2xpY2tUaHJ1VXJsKSB7XG5cdCAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hEaXYocGxheWVyLCBjbGlja1RocnVVcmwpO1xuXHQgIHZhciBpRnJhbWU7XG5cdCAgdmFyIGlGcmFtZUJhY2tCdXR0b247XG5cblx0ICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG5cblx0ICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVEaXNwbGF5U3R5bGUpO1xuXG5cdCAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoRGl2KHBsYXllciwgdXJsKSB7XG5cdCAgICB2YXIgYmxvY2tlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdCAgICBkb20uYWRkQ2xhc3MoYmxvY2tlciwgJ3Zhc3QtYmxvY2tlcicpO1xuXG5cdCAgICBpZiAod2luZG93Lk1vYXRBcGlSZWZlcmVuY2UpIHtcbiAgICBcdCAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UuZGlzcGF0Y2hFdmVudCh7dHlwZTogJ0FkQ2xpY2tUaHJ1JywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuXHQgICAgfVxuICAgICAgXG5cdCAgICAvLyBjcmVhdGUgSUZyYW1lIHdpdGggYmFjayBidXR0b25cblx0ICAgIGlGcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXHQgICAgZG9tLmFkZENsYXNzKGlGcmFtZSwgJ3Zhc3QtYmxvY2tlcicpO1xuXHQgICAgaUZyYW1lLnNyYyA9IHVybDtcblx0ICAgIGJsb2NrZXIuYXBwZW5kQ2hpbGQoaUZyYW1lKTtcblx0ICBcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ICAgIGRvbS5hZGRDbGFzcyhpRnJhbWVCYWNrQnV0dG9uLCBcInZhc3QtYmFjay1idXR0b25cIik7XG5cdCAgICBkb20uYWRkQ2xhc3MoaUZyYW1lQmFja0J1dHRvbiwgJ2VuYWJsZWQnKTtcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24uaW5uZXJIVE1MID0gXCJCYWNrXCI7XG5cdCAgICBpRnJhbWVCYWNrQnV0dG9uLmlkID0gJ2lmcmFtZUJhY2tCdXR0b24nO1xuXHQgICAgYmxvY2tlci5hcHBlbmRDaGlsZChpRnJhbWVCYWNrQnV0dG9uKTtcblx0ICAgIGlGcmFtZUJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0ICAvLyBzaG93IGNvbnRyb2xzXG5cdFx0ICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyBcblx0XHQgIH1cblx0XHQgIHBsYXllci5jb250cm9scyh0cnVlKTtcblx0XHQgIFxuXHRcdCAgcGxheWVyLmVsKCkucmVtb3ZlQ2hpbGQoYmxvY2tlcik7XG5cdFx0ICByZXN1bWVBZFVuaXQoKTtcblx0XHQgIFxuXHRcdCAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ICB9XG5cdCAgICB9KTtcblx0XHQgIFxuXHQgICAgLy8gaGlkZSBjb250cm9sc1xuXHQgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHQgICAgfSwgMSk7XG5cdCAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRTa2lwQnV0dG9uJyk7XG5cdCAgICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdCAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcblx0ICAgIH1cblx0ICAgIHBsYXllci5jb250cm9scyhmYWxzZSk7XG5cblx0ICAgIHJldHVybiBibG9ja2VyO1xuXHQgIH1cblxuXHQgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlTdHlsZSgpIHtcblx0XHQgIGlmICghcGxheWVyLmlzRnVsbHNjcmVlbigpKSB7XHRcdFx0ICBcblx0XHRcdCAgcGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCB0cnVlKTtcblx0XHRcdCAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuXHRcdFx0ICBpZiAoc2tpcEJ1dHRvbikge1xuXHRcdFx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG5cdFx0XHQgIH1cblx0XHRcdCAgcGxheWVyLmNvbnRyb2xzKHRydWUpO1xuXHRcdFx0ICBwbGF5ZXIuZWwoKS5yZW1vdmVDaGlsZChibG9ja2VyKTtcblx0XHRcdCAgcmVzdW1lQWRVbml0KCk7XG5cdFx0ICB9XG5cdCAgfVxuICB9XG5cbiAgdmFyIHVwZGF0ZVZpZXdTaXplID0gcmVzaXplQWQuYmluZCh0aGlzLCBwbGF5ZXIsIGFkVW5pdCwgdGhpcy5WSUVXX01PREUpO1xuICB2YXIgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQgPSB1dGlsaXRpZXMudGhyb3R0bGUodXBkYXRlVmlld1NpemUsIDEwMCk7XG4gIHZhciBhdXRvUmVzaXplID0gdGhpcy5zZXR0aW5ncy5hdXRvUmVzaXplO1xuXG4gIGlmIChhdXRvUmVzaXplKSB7XG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICB9XG5cbiAgcGxheWVyLm9uKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgcGxheWVyLm9uKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICBwbGF5ZXIub24oJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcbiAgcGxheWVyLm9uKCdzdG9wQWQnLCBzdG9wQWRVbml0KTtcblxuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcbiAgICBwbGF5ZXIub2ZmKCdzdG9wQWQnLCBzdG9wQWRVbml0KTtcblxuICAgIGlmIChhdXRvUmVzaXplKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGF1c2VBZFVuaXQoKSB7XG4gICAgYWRVbml0LnBhdXNlQWQodXRpbGl0aWVzLm5vb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lQWRVbml0KCkge1xuICAgIGFkVW5pdC5yZXN1bWVBZCh1dGlsaXRpZXMubm9vcCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHN0b3BBZFVuaXQoKSB7XG4gICAgaWYgKGFkVW5pdC5zdG9wQWQpIHtcbiAgICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgIH1cbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgc2tpcEJ1dHRvbjtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdHJhY2tlciA9IHRoaXMudHJhY2tlcjtcblxuICAvLyBWSURMQS0yMDg0IChwdWJsaXNoZXItc3BlY2lmaWVkIFNLSVAgYmVoYXZpb3IgZm9yIFZQQUlEIGNyZWF0aXZlcylcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgc2tpcE9mZnNldEluU2VjO1xuICB2YXIgZHVyYXRpb247XG4gIHZhciByZW1haW5pbmdUaW1lO1xuICB2YXIgcHJvZ3Jlc3NJbnRlcnZhbDtcbiAgaWYgKCF3aW5kb3cuX21vbFNldHRpbmdzLmRpc2FibGVTa2lwcGFiaWxpdHkpIHtcblx0ICBpZiAodmFzdFJlc3BvbnNlLnNraXBvZmZzZXQgJiYgdXRpbGl0aWVzLmlzTnVtYmVyKHZhc3RSZXNwb25zZS5za2lwb2Zmc2V0KSkge1xuXHRcdCAgc2tpcE9mZnNldEluU2VjID0gdmFzdFJlc3BvbnNlLnNraXBvZmZzZXQgLyAxMDAwO1xuXHRcdCAgcHViQWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldEluU2VjKTtcblx0ICB9XG5cdCAgZWxzZSB7XG5cdFx0ICAvLyBjaGVjayBpZiBwdWJsaXNoZXIgaGFkIGV4cGxpY2l0bHkgZGlzYWJsZSBza2lwcGFiaWxpdHlcblx0XHQgIHZhciBkaXNhYmxlU2tpcHBhYmlsaXR5QnlQdWJsaXNoZXIgPSBmYWxzZTtcblx0XHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzICYmIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcHBhYmxlKSB7XG5cdFx0XHQgIGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnNraXBwYWJsZS5lbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHQgIGRpc2FibGVTa2lwcGFiaWxpdHlCeVB1Ymxpc2hlciA9IHRydWU7IFxuXHRcdFx0ICB9XG5cdFx0XHQgIGlmICh2YXN0UmVzcG9uc2UuZHVyYXRpb24gJiYgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQgJiYgXG5cdFx0XHRcdCAgdmFzdFJlc3BvbnNlLmR1cmF0aW9uIDwgd2luZG93Ll9tb2xTZXR0aW5ncy5za2lwcGFibGUudmlkZW9UaHJlc2hvbGQpIHtcblx0XHRcdFx0ICBkaXNhYmxlU2tpcHBhYmlsaXR5QnlQdWJsaXNoZXIgPSB0cnVlOyBcblx0XHRcdCAgfVxuXHRcdCAgfVxuXHRcdCAgaWYgKCFkaXNhYmxlU2tpcHBhYmlsaXR5QnlQdWJsaXNoZXIpIHtcblx0XHRcdCAgYWRVbml0Lm9uKCdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgdXBkYXRlU2tpcEJ1dHRvblN0YXRlKTtcblx0XHRcdCAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcblx0XHQgIH1cblx0ICB9XG4gIH1cblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwYWJsZVN0YXRlQ2hhbmdlJyk7XG4gICAgYWRVbml0LmdldEFkU2tpcHBhYmxlU3RhdGUoZnVuY3Rpb24gKGVycm9yLCBpc1NraXBwYWJsZSkge1xuICAgICAgaWYgKGlzU2tpcHBhYmxlKSB7XG4gICAgICAgIGlmICghc2tpcEJ1dHRvbikge1xuICAgICAgICAgIGFkZFNraXBCdXR0b24ocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihwbGF5ZXIpIHtcbiAgICBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcbiAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuICAgIHNraXBCdXR0b24gPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbigpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwiZW5hYmxlZFwiKTtcbiAgICAvL3NraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGFkXCI7XG4gICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSB3aW5kb3cuX21vbFNldHRpbmdzLnNraXBCdXR0b25UZXh0O1xuICAgIHNraXBCdXR0b24uaWQgPSAnYWRTa2lwQnV0dG9uJztcblxuICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGFkVW5pdC5nZXRBZFNraXBwYWJsZVN0YXRlKGZ1bmN0aW9uIChlcnJvciwgaXNTa2lwcGFibGUpIHtcbiAgICAgICAgICAgIGlmIChpc1NraXBwYWJsZSkge1xuICAgICAgICAgICAgICAgIGFkVW5pdC5za2lwQWQodXRpbGl0aWVzLm5vb3ApOy8vV2Ugc2tpcCB0aGUgYWRVbml0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXHR0cmFja2VyLnRyYWNrU2tpcCgpO1xuICAgICAgICAgICAgICAgIGFkVW5pdC5zdG9wQWQodXRpbGl0aWVzLm5vb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgLy9hZFVuaXQuc2tpcEFkKHV0aWxpdGllcy5ub29wKTsvL1dlIHNraXAgdGhlIGFkVW5pdFxuXG4gICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNraXBCdXR0b247XG4gIH1cblx0XG5cdC8vIFZJRExBLTIwODQgKHB1Ymxpc2hlci1zcGVjaWZpZWQgU0tJUCBiZWhhdmlvciBmb3IgVlBBSUQgY3JlYXRpdmVzKVxuXHQvLyBFTiAtIHN1cHBvcnQgcHVibGlzaGVyIFNLSVAgc2V0dGluZ3Ncblx0LyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG5cdGZ1bmN0aW9uIHB1YkFkZFNraXBCdXR0b25Ub1BsYXllcihwbGF5ZXIsIHNraXBPZmZzZXQpIHtcblx0ICB2YXIgc2tpcEJ1dHRvbiA9IHB1YkNyZWF0ZVNraXBCdXR0b24ocGxheWVyKTtcblx0ICB2YXIgdXBkYXRlU2tpcEJ1dHRvbiA9IHB1YlVwZGF0ZVNraXBCdXR0b25TdGF0ZS5iaW5kKHRoYXQsIHNraXBCdXR0b24sIHNraXBPZmZzZXQpO1xuXHRcblx0ICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcblx0ICAvL3BsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xuXHQgIHByb2dyZXNzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVTa2lwQnV0dG9uLCA1MDApO1xuXHRcblx0ICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHB1YlJlbW92ZVNraXBCdXR0b24pO1xuXHRcblx0ICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xuXHQgICAgLy9wbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG5cdCAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuXHQgICAgc2tpcEJ1dHRvbiA9IG51bGw7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBwdWJSZW1vdmVTa2lwQnV0dG9uKCkge1xuXHRcdCAgaWYgKHByb2dyZXNzSW50ZXJ2YWwpIHtcblx0XHRcdCAgY2xlYXJJbnRlcnZhbChwcm9ncmVzc0ludGVydmFsKTtcblx0XHRcdCAgcHJvZ3Jlc3NJbnRlcnZhbCA9IG51bGw7XG5cdFx0ICB9XG5cdFx0ICByZW1vdmVTa2lwQnV0dG9uKCk7XG5cdCAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBwdWJDcmVhdGVTa2lwQnV0dG9uKHBsYXllcikge1xuXHQgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdCAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcblx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgc2tpcEJ1dHRvbi5pZCA9ICdhZFNraXBCdXR0b24nO1xuXHRcblx0ICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKGRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG5cdCAgICAgICAgYWRVbml0LmdldEFkU2tpcHBhYmxlU3RhdGUoZnVuY3Rpb24gKGVycm9yLCBpc1NraXBwYWJsZSkge1xuICAgICAgICAgICAgICAgIGFkVW5pdC5za2lwQWQodXRpbGl0aWVzLm5vb3ApOy8vV2Ugc2tpcCB0aGUgYWRVbml0XG5cdCAgICAgICAgICAgIGlmICghaXNTa2lwcGFibGUpIHtcblx0ICAgICAgICAgICAgXHR0cmFja2VyLnRyYWNrU2tpcCgpO1xuXHQgICAgICAgICAgICAgICAgYWRVbml0LnN0b3BBZCh1dGlsaXRpZXMubm9vcCk7XG5cdCAgICAgICAgICAgIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQgICAgICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XG5cdCAgICAgICAgICAgIFx0fSwgMSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIC8vYWRVbml0LnNraXBBZCh1dGlsaXRpZXMubm9vcCk7Ly9XZSBza2lwIHRoZSBhZFVuaXRcblx0ICAgIH1cblx0ICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuXHRcblx0ICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXG5cdCAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH07XG5cdFxuXHQgIHJldHVybiBza2lwQnV0dG9uO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBwdWJVcGRhdGVTa2lwQnV0dG9uU3RhdGUoc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCkge1xuXHRcdC8vdmFyIHRpbWVMZWZ0ID0gTWF0aC5jZWlsKHNraXBPZmZzZXQgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSk7XG5cdFx0YWRVbml0LmdldEFkRHVyYXRpb24oZnVuY3Rpb24odGhhdCwgZHVyKSB7XG5cdFx0XHRpZiAoZHVyID4gMCkge1xuXHRcdFx0XHRkdXJhdGlvbiA9IGR1cjtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRhZFVuaXQuZ2V0QWRSZW1haW5pbmdUaW1lKGZ1bmN0aW9uKHRoYXQsIHRpbWUpIHtcblx0XHRcdHJlbWFpbmluZ1RpbWUgPSB0aW1lOyBcblx0XHR9KTtcblx0XHRpZiAoIWR1cmF0aW9uIHx8ICFyZW1haW5pbmdUaW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vY29uc29sZS5sb2coXCIqKioqKio6IHNraXBPZmZzZXQgPSBcIiArIHNraXBPZmZzZXQgKyBcIiwgZHVyYXRpb24gPSBcIiArIGR1cmF0aW9uICsgXCIsIHJlbWFpbmluZ1RpbWUgPSBcIiArIHJlbWFpbmluZ1RpbWUpO1xuXHRcdC8vdmFyIHJlbWFpbmluZ1RpbWUgPSBhZFVuaXQuX2FkVW5pdC5nZXRBZFJlbWFpbmluZ1RpbWUoKTtcblx0XHR2YXIgdGltZUxlZnQgPSBNYXRoLmNlaWwoc2tpcE9mZnNldCAtIChkdXJhdGlvbiAtIHJlbWFpbmluZ1RpbWUpKTtcblx0ICBpZiAodGltZUxlZnQgPiAwKSB7XG5cdCAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwidmFzdC1za2lwLWJ1dHRvbi10ZXh0XCI+JyArIHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcFRleHQucmVwbGFjZSgnJSVUSU1FJSUnLCB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyh0aW1lTGVmdCwgMikpICsgJzwvcD4nO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBpZiAoIWRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG5cdCAgICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpO1xuXHQgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IHdpbmRvdy5fbW9sU2V0dGluZ3Muc2tpcEJ1dHRvblRleHQ7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHZhciBpZnJhbWVCYWNrQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVCYWNrQnV0dG9uJyk7XG5cdCAgaWYgKCFpZnJhbWVCYWNrQnV0dG9uKSB7XG5cdFx0ICBpZiAocGxheWVyLmlzRnVsbHNjcmVlbigpICYmIHV0aWxpdGllcy5pc0FuZHJvaWQoKSkge1xuXHRcdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHQgIHJldHVybjtcblx0XHQgIH1cblx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdCAgfVxuXHQgIC8vc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbGlua1BsYXllckNvbnRyb2xzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgbGlua1ZvbHVtZUNvbnRyb2wodGhpcy5wbGF5ZXIsIGFkVW5pdCk7XG4gIGxpbmtGdWxsU2NyZWVuQ29udHJvbCh0aGlzLnBsYXllciwgYWRVbml0LCB0aGlzLlZJRVdfTU9ERSk7XG5cbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBsaW5rVm9sdW1lQ29udHJvbChwbGF5ZXIsIGFkVW5pdCkge1xuICAgIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcbiAgICBhZFVuaXQub24oJ0FkVm9sdW1lQ2hhbmdlJywgdXBkYXRlUGxheWVyVm9sdW1lKTtcblxuICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcGxheWVyLm9mZigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcbiAgICB9KTtcblxuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUFkVW5pdFZvbHVtZSgpIHtcbiAgICAgIHZhciB2b2wgPSBwbGF5ZXIubXV0ZWQoKSA/IDAgOiBwbGF5ZXIudm9sdW1lKCk7XG4gICAgICBhZFVuaXQuc2V0QWRWb2x1bWUodm9sLCBsb2dFcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheWVyVm9sdW1lKCkge1xuXHQgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuXHRcdCAgXHR3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRWb2x1bWVDaGFuZ2UnLCBhZFZvbHVtZTogcGxheWVyLnZvbHVtZSgpfSk7XG5cdCAgfVxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJyk7XG4gICAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcbiAgICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIHZvbCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBsb2dFcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxhc3RWb2x1bWUgIT09IHZvbCkge1xuICAgICAgICAgICAgcGxheWVyLnZvbHVtZSh2b2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlua0Z1bGxTY3JlZW5Db250cm9sKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcbiAgICB2YXIgdXBkYXRlVmlld1NpemUgPSByZXNpemVBZC5iaW5kKHRoYXQsIHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpO1xuXG4gICAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xuXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xuICAgIH0pO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9zdGFydEFkID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIGFscmVhZHlHb3RBZFN0YXJ0ZWQgPSBhZFVuaXQuYWRTdGFydGVkO1xuXG4gIGlmIChhbHJlYWR5R290QWRTdGFydGVkKSB7XG5cdCAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xuXHQgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndHJhY2UuZXZlbnQnLCBkYXRhOiB7ZXZlbnQ6ICd2cGFpZC5BZFN0YXJ0ZWQnfX0pO1xuICB9XG4gIGFkVW5pdC5zdGFydEFkKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmICghZXJyb3IgJiYgIWFscmVhZHlHb3RBZFN0YXJ0ZWQpIHtcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcbiAgICB9XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2ZpbmlzaFBsYXlpbmcgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGFkVW5pdC5vbignQWRTdG9wcGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSkge1xuICAgIFx0ICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZS5kaXNwYXRjaEV2ZW50KHt0eXBlOiAnQWRTdG9wcGVkJywgYWRWb2x1bWU6IHBsYXllci52b2x1bWUoKX0pO1xuICAgICB9XG4gICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTdG9wcGVkJyk7XG4gICBmaW5pc2hQbGF5aW5nQWQobnVsbCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRFcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICBpZiAodGhhdC5pbXByZXNzaW9uVHJpZ2dlcmVkKSB7XG4gICAgICAgIGZpbmlzaFBsYXlpbmdBZChudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgXHR2YXIgZXJyTXNnID0gZXJyb3I/IGVycm9yLm1lc3NhZ2UgOiAnb24gVlBBSURJbnRlZ3JhdG9yLCBlcnJvciB3aGlsZSB3YWl0aW5nIGZvciB0aGUgYWRVbml0IHRvIGZpbmlzaCBwbGF5aW5nJztcbiAgICAgICAgZmluaXNoUGxheWluZ0FkKG5ldyBWQVNURXJyb3IoZXJyTXNnKSk7XG4gICAgfVxuICB9KTtcblxuICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIHZhciBuZWVkc1Nob3dQbGF5ZXIgPSB0aGlzLm5lZWRzU2hvd1BsYXllcjtcbiAgZnVuY3Rpb24gZmluaXNoUGxheWluZ0FkKGVycm9yKSB7XG5cdCAgdGhhdC5hZEZpbmlzaGVkID0gdHJ1ZTtcblx0XHRwbGF5ZXJVdGlscy5zaG93QmlnUGxheUJ1dHRvbihwbGF5ZXIsIGZhbHNlKTtcblx0XHRpZiAobmVlZHNTaG93UGxheWVyKSB7XG5cdFx0XHRpZiAodGhhdC50aW1lVXBkYXRlVGltZXIpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVVcGRhdGVUaW1lcik7XG5cdFx0XHRcdHRoYXQudGltZVVwZGF0ZVRpbWVyID0gbnVsbDtcblx0XHRcdFx0dmFyIGFwblRpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fwbl90aW1lX2Rpc3BsYXknKTtcblx0XHRcdFx0aWYgKGFwblRpbWVEaXNwbGF5KSB7XG5cdFx0XHRcdFx0cGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5yZW1vdmVDaGlsZChhcG5UaW1lRGlzcGxheSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdCAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuc2hvdygpO1xuXHRcdFx0cGxheWVyLnRlY2hfLmVsXy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR9XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gdHJhY2tFcnJvcihyZXNwb25zZSwgZXJyb3JDb2RlKSB7XG5cdGlmICghdGhpcy5lcnJvckhhc0JlZW5UcmFja2VkKSB7XG5cdFx0dGhpcy5lcnJvckhhc0JlZW5UcmFja2VkID0gdHJ1ZTtcblx0XHR2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3JDb2RlIHx8IDkwMX0pO1xuXHR9XG59O1xuXG5mdW5jdGlvbiByZXNpemVBZChwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKSB7XG5cdHZhciBza2lwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkU2tpcEJ1dHRvbicpO1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgZGltZW5zaW9uID0gZG9tLmdldERpbWVuc2lvbih0ZWNoKTtcbiAgdmFyIE1PREUgPSBwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgPyBWSUVXX01PREUuRlVMTFNDUkVFTiA6IFZJRVdfTU9ERS5OT1JNQUw7XG4gIGlmIChNT0RFID09PSBWSUVXX01PREUuTk9STUFMKSB7XG4gICAgaWYgKHBsYXllci52YXN0KSB7XG4gICAgICBwbGF5ZXIudmFzdC5uZWVkU3luY1BsYXkgPSB0cnVlO1xuICAgIH1cblx0ICBkaW1lbnNpb24ud2lkdGggPSBwbGF5ZXIuZWxfLm9mZnNldFdpZHRoO1xuXHQgIGRpbWVuc2lvbi5oZWlnaHQgPSBwbGF5ZXIuZWxfLm9mZnNldEhlaWdodDtcblx0ICBpZiAodXRpbGl0aWVzLmlzQW5kcm9pZCgpICYmIHNraXBCdXR0b24pIHtcblx0XHQgIHNraXBCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdCAgfVxuICB9XG4gIGlmIChNT0RFID09PSBWSUVXX01PREUuRlVMTFNDUkVFTikge1xuXHQgIGNvbnNvbGUubG9nKCcqKioqKiogdG8gZnVsbHNjcmVlbiBkaW1lbnNpb24gPSAnICsgZGltZW5zaW9uLndpZHRoICsgJywnICsgZGltZW5zaW9uLmhlaWdodCk7XG5cdCAgaWYgKHV0aWxpdGllcy5pc0FuZHJvaWQoKSAmJiBza2lwQnV0dG9uKSB7XG5cdFx0ICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgfVxuICB9XG4gIGFkVW5pdC5yZXNpemVBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIE1PREUsIGxvZ0Vycm9yKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IpIHtcbiAgaWYgKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yICgnRVJST1I6ICcgKyBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREludGVncmF0b3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcblxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVsZW1lbnQuY2xhc3NOYW1lID0gJ3Zqcy1hZHMtbGFiZWwgdmpzLWNvbnRyb2wgdmpzLWxhYmVsLWhpZGRlbic7XG5lbGVtZW50LmlubmVySFRNTCA9ICdBZHZlcnRpc2VtZW50JztcblxudmFyIEFkc0xhYmVsRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiogQGNvbnN0cnVjdG9yICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbGVtZW50O1xuICAgICAgYmFzZUNvbXBvbmVudC5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFdlIGFzeW5jaHJvbm91c2x5IHJlcG9zaXRpb24gdGhlIGFkcyBsYWJlbCBlbGVtZW50XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lQ29tcCA9IHBsYXllci5jb250cm9sQmFyICYmKCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZChcInRpbWVyQ29udHJvbHNcIikgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoXCJjdXJyZW50VGltZURpc3BsYXlcIikgKTtcbiAgICAgICAgaWYoY3VycmVudFRpbWVDb21wKSB7XG4gICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgY3VycmVudFRpbWVDb21wLmVsKCkpO1xuICAgICAgICB9XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhlbGVtZW50LCAndmpzLWxhYmVsLWhpZGRlbicpO1xuICAgICAgfSwgMCk7XG4gICAgfSxcblxuICAgIGVsOiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZHNMYWJlbEZhY3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFzZVZpZGVvSnNDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbnZhciBBZHNMYWJlbCA9IHJlcXVpcmUoJy4vYWRzLWxhYmVsJykoYmFzZVZpZGVvSnNDb21wb25lbnQpO1xuXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdBZHNMYWJlbCcsIHZpZGVvanMuZXh0ZW5kKGJhc2VWaWRlb0pzQ29tcG9uZW50LCBBZHNMYWJlbCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFRoZSBjb21wb25lbnQgdGhhdCBzaG93cyBhIGJsYWNrIHNjcmVlbiB1bnRpbCB0aGUgYWRzIHBsdWdpbiBoYXMgZGVjaWRlZCBpZiBpdCBjYW4gb3IgaXQgY2FuIG5vdCBwbGF5IHRoZSBhZC5cbiAqXG4gKiBOb3RlOiBJbiBjYXNlIHlvdSB3b25kZXIgd2h5IGluc3RlYWQgb2YgdGhpcyBibGFjayBwb3N0ZXIgd2UgZG9uJ3QganVzdCBzaG93IHRoZSBzcGlubmVyIGxvYWRlci5cbiAqICAgICAgIElPUyBkZXZpY2VzIGRvIG5vdCB3b3JrIHdlbGwgd2l0aCBhbmltYXRpb25zIGFuZCB0aGUgYnJvd3NlciBjaHJhc2hlcyBmcm9tIHRpbWUgdG8gdGltZSBUaGF0IGlzIHdoeSB3ZSBjaG9zZSB0b1xuICogICAgICAgaGF2ZSBhIHNlY29uZGFyeSBibGFjayBwb3N0ZXIuXG4gKlxuICogICAgICAgSXQgYWxzbyBtYWtlcyBpdCBtdWNoIG1vcmUgZWFzaWVyIGZvciB0aGUgdXNlcnMgb2YgdGhlIHBsdWdpbiBzaW5jZSBpdCBkb2VzIG5vdCBjaGFuZ2UgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIG9mIHRoZVxuICogICAgICAgc3Bpbm5lciBhbmQgdGhlIHBsYXllciB3b3JrcyB0aGUgc2FtZSB3YXkgd2l0aCBhbmQgd2l0aG91dCB0aGUgcGx1Z2luLlxuICpcbiAqIEBwYXJhbSB7dmpzLlBsYXllcnxPYmplY3R9IHBsYXllclxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxudmFyIEJsYWNrUG9zdGVyRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiogQGNvbnN0cnVjdG9yICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbGVtZW50O1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAndmpzLWJsYWNrLXBvc3Rlcic7XG4gICAgICBiYXNlQ29tcG9uZW50LmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcblxuICAgICAgdmFyIHBvc3RlckltZyA9IHBsYXllci5nZXRDaGlsZCgncG9zdGVySW1hZ2UnKTtcblxuICAgICAgLy9XZSBuZWVkIHRvIGRvIGl0IGFzeW5jaHJvbm91c2x5IHRvIGJlIHN1cmUgdGhhdCB0aGUgYmxhY2sgcG9zdGVyIGVsIGlzIG9uIHRoZSBkb20uXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZihwb3N0ZXJJbWcgJiYgcGxheWVyICYmIHBsYXllci5lbCgpKSB7XG4gICAgICAgICAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHBvc3RlckltZy5lbCgpKTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfSxcbiAgICBlbDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmxhY2tQb3N0ZXJGYWN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhc2VWaWRlb0pzQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG52YXIgQmxhY2tQb3N0ZXIgPSByZXF1aXJlKCcuL2JsYWNrLXBvc3RlcicpKGJhc2VWaWRlb0pzQ29tcG9uZW50KTtcblxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQmxhY2tQb3N0ZXInLCB2aWRlb2pzLmV4dGVuZChiYXNlVmlkZW9Kc0NvbXBvbmVudCwgQmxhY2tQb3N0ZXIpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RDbGllbnQgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUQ2xpZW50Jyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVEVycm9yJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC92YXN0VXRpbCcpO1xuXG52YXIgVkFTVEludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUSW50ZWdyYXRvcicpO1xudmFyIFZQQUlESW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy92cGFpZC9WUEFJREludGVncmF0b3InKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi91dGlscy9kb20nKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIFZpZXdhYmlsaXR5VHJhY2tpbmcgPSByZXF1aXJlKFwiLi4vdXRpbHMvYW5WaWRlb1ZpZXdhYmlsaXR5XCIpO1xuXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWQVNUUGx1Z2luKG9wdGlvbnMpIHtcbiAgdmFyIHNuYXBzaG90O1xuICB2YXIgcGxheWVyID0gdGhpcztcbiAgdmFyIHZhc3QgPSBuZXcgVkFTVENsaWVudCgpO1xuICB2YXIgYWRzQ2FuY2VsZWQgPSBmYWxzZTtcbiAgdmFyIGRlZmF1bHRPcHRzID0ge1xuICAgIC8vIG1heGltdW0gYW1vdW50IG9mIHRpbWUgaW4gbXMgdG8gd2FpdCB0byByZWNlaXZlIGBhZHNyZWFkeWAgZnJvbSB0aGUgYWRcbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBhZnRlciBwbGF5IGhhcyBiZWVuIHJlcXVlc3RlZC4gQWQgaW1wbGVtZW50YXRpb25zIGFyZVxuICAgIC8vIGV4cGVjdGVkIHRvIGxvYWQgYW55IGR5bmFtaWMgbGlicmFyaWVzIGFuZCBtYWtlIGFueSByZXF1ZXN0cyB0byBkZXRlcm1pbmVcbiAgICAvLyBhZCBwb2xpY2llcyBmb3IgYSB2aWRlbyBkdXJpbmcgdGhpcyB0aW1lLlxuICAgIHRpbWVvdXQ6IDUwMCxcblxuICAgIC8vVE9ETzpmaW5pc2ggdGhpcyBJT1MgRklYXG4gICAgLy9XaGVuZXZlciB5b3UgcGxheSBhbiBhZGQgb24gSU9TLCB0aGUgbmF0aXZlIHBsYXllciBraWNrcyBpbiBhbmQgd2UgbG9vc2UgY29udHJvbCBvZiBpdC4gT24gdmVyeSBoZWF2eSBwYWdlcyB0aGUgJ3BsYXknIGV2ZW50XG4gICAgLy8gTWF5IG9jY3VyIGFmdGVyIHRoZSB2aWRlbyBjb250ZW50IGhhcyBhbHJlYWR5IHN0YXJ0ZWQuIFRoaXMgaXMgd3JvbmcgaWYgeW91IHdhbnQgdG8gcGxheSBhIHByZXJvbGwgYWQgdGhhdCBuZWVkcyB0byBoYXBwZW4gYmVmb3JlIHRoZSB1c2VyXG4gICAgLy8gc3RhcnRzIHdhdGNoaW5nIHRoZSBjb250ZW50LiBUbyBwcmV2ZW50IHRoaXMgdXNlY1xuICAgIGlvc1ByZXJvbGxDYW5jZWxUaW1lb3V0OiAyMDAwLFxuXG4gICAgLy8gbWF4aW11biBhbW91bnQgb2YgdGltZSBmb3IgdGhlIGFkIHRvIGFjdHVhbGx5IHN0YXJ0IHBsYXlpbmcuIElmIHRoaXMgdGltZW91dCBnZXRzXG4gICAgLy8gdHJpZ2dlcmVkIHRoZSBhZHMgd2lsbCBiZSBjYW5jZWxsZWRcbiAgICBhZENhbmNlbFRpbWVvdXQ6IDMwMDAsXG5cbiAgICAvLyBCb29sZWFuIGZsYWcgdGhhdCBjb25maWd1cmVzIHRoZSBwbGF5ZXIgdG8gcGxheSBhIG5ldyBhZCBiZWZvcmUgdGhlIHVzZXIgc2VlcyB0aGUgdmlkZW8gYWdhaW5cbiAgICAvLyB0aGUgY3VycmVudCB2aWRlb1xuICAgIHBsYXlBZEFsd2F5czogZmFsc2UsXG5cbiAgICAvLyBGbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhZHMgYnkgZGVmYXVsdC5cbiAgICBhZHNFbmFibGVkOiB0cnVlLFxuXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSByZXNpemUgd2l0aCB3aW5kb3cucmVzaXplIG9yIG9yaWVudGF0aW9uY2hhbmdlXG4gICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcblxuICAgIC8vIHZlcmJvc2l0eSBvZiBjb25zb2xlIGxvZ2dpbmc6XG4gICAgLy8gMCAtIGVycm9yXG4gICAgLy8gMSAtIGVycm9yLCB3YXJuXG4gICAgLy8gMiAtIGVycm9yLCB3YXJuLCBpbmZvXG4gICAgLy8gMyAtIGVycm9yLCB3YXJuLCBpbmZvLCBsb2dcbiAgICAvLyA0IC0gZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWdcbiAgICB2ZXJib3NpdHk6IDAsXG4gICAgXG4gICAgLy8gQVBOIG9wdGlvbnNcbiAgICBwbGF5c0luQnJlYWs6IGZhbHNlLFxuICAgIHNraXBUZXh0OiAnU2tpcCBpbiAlJVRJTUUlJSBzZWNvbmRzJyxcbiAgICBza2lwQnV0dG9uVGV4dDogJ1NraXAgYWQnLFxuICAgIGluaXRpYWxQbGF5YmFjazogXCJhdXRvXCIsXG4gICAgaW5pdGlhbEF1ZGlvOiBcIm9uXCIsXG4gICAgZGlzYWJsZUNsaWNrVGhydTogZmFsc2UsXG4gICAgXG4gICAgZmlyc3RQbGF5OiB0cnVlXG4gIH07XG5cbiAgdmFyIHNldHRpbmdzID0gdXRpbGl0aWVzLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIG9wdGlvbnMgfHwge30pO1xuICBcbiAgaWYodXRpbGl0aWVzLmlzVW5kZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLnVybCkpe1xuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gc2V0dGluZ3MudXJsO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhzZXR0aW5ncy5hZFRhZ1VybCkpIHtcbiAgICBzZXR0aW5ncy5hZFRhZ1VybCA9IHV0aWxpdGllcy5lY2hvRm4oc2V0dGluZ3MuYWRUYWdVcmwpO1xuICB9XG4gIFxuICBpZiAoc2V0dGluZ3Mudmlld2FiaWxpdHkgJiYgc2V0dGluZ3Mudmlld2FiaWxpdHkuY29uZmlnKSB7XG5cdCAgc2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZyA9IG5ldyBWaWV3YWJpbGl0eVRyYWNraW5nKHBsYXllcik7XG4gIH1cbiAgXG4gIHdpbmRvdy5fbW9sU2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgd2luZG93Ll90aW1lb3V0SWRzID0gW107XG4gIFxuICB3aW5kb3cuTW9hdEFwaVJlZmVyZW5jZSA9IG51bGw7XG5cbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MuYWRUYWdYTUwpICYmICF1dGlsaXRpZXMuaXNGdW5jdGlvbihzZXR0aW5ncy5hZFRhZ1hNTCkpIHtcbiAgICByZXR1cm4gdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ29uIFZpZGVvSlMgVkFTVCBwbHVnaW4sIHRoZSBwYXNzZWQgYWRUYWdYTUwgb3B0aW9uIGRvZXMgbm90IGNvbnRhaW4gYSBmdW5jdGlvbicpKTtcbiAgfVxuXG4gIGlmICghdXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1VybCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgbWlzc2luZyBhZFRhZ1VybCBvbiBvcHRpb25zIG9iamVjdCcpKTtcbiAgfVxuXG4gIGxvZ2dlci5zZXRWZXJib3NpdHkgKHNldHRpbmdzLnZlcmJvc2l0eSk7XG5cbiAgaWYgKCFzZXR0aW5ncy5wbGF5c0luQnJlYWspIHtcblx0ICBzbmFwc2hvdCA9IHBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90KHBsYXllcik7XG5cdCAgc25hcHNob3QucGxheWluZyA9IHRydWU7XHQvLyBmb3JjZSB0byBwbGF5IGNvbnRlbnQgYWZ0ZXIgYWQgZW5kZWRcbiAgfVxuICBcbiAgaWYgKHNldHRpbmdzLmluaXRpYWxQbGF5YmFjayA9PT0gJ2NsaWNrJykge1xuXHQgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgdHJ1ZSk7XG4gIH1cblxuICBwbGF5ZXJVdGlscy5wcmVwYXJlRm9yQWRzKHBsYXllcik7XG5cbiAgaWYgKHNldHRpbmdzLnBsYXlBZEFsd2F5cykge1xuICAgIC8vIE5vIG1hdHRlciB3aGF0IGhhcHBlbnMgd2UgcGxheSBhIG5ldyBhZCBiZWZvcmUgdGhlIHVzZXIgc2VlcyB0aGUgdmlkZW8gYWdhaW4uXG4gICAgcGxheWVyLm9uKCd2YXN0LmNvbnRlbnRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QucmVzZXQnKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgcGxheWVyLm9uKCd2YXN0LmZpcnN0UGxheScsIHRyeVRvUGxheVByZXJvbGxBZCk7XG5cbiAgcGxheWVyLm9uKCd2YXN0LnJlc2V0JywgZnVuY3Rpb24gKCkge1xuICAgIC8vSWYgd2UgYXJlIHJlc2V0aW5nIHRoZSBwbHVnaW4sIHdlIGRvbid0IHdhbnQgdG8gcmVzdG9yZSB0aGUgY29udGVudFxuICAgIHNuYXBzaG90ID0gbnVsbDtcbiAgICBjYW5jZWxBZHMoKTtcbiAgfSk7XG5cbiAgcGxheWVyLnZhc3QgPSB7XG4gICAgaXNFbmFibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2V0dGluZ3MuYWRzRW5hYmxlZDtcbiAgICB9LFxuXG4gICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXR0aW5ncy5hZHNFbmFibGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgc2V0dGluZ3MuYWRzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcGxheWVyLnZhc3Q7XG5cbiAgLyoqKiogTG9jYWwgZnVuY3Rpb25zICoqKiovXG4gIGZ1bmN0aW9uIHRyeVRvUGxheVByZXJvbGxBZCgpIHtcblx0Ly8gbWFrZSBzdXJlIHdlIGFyZSBnb2luZyB0byB1c2Ugc2FtZSBwbHVnaW4gaW5zdGFuY2UgdHdpY2Vcblx0cGxheWVyLm9mZigndmFzdC5maXJzdFBsYXknLCB0cnlUb1BsYXlQcmVyb2xsQWQpO1xuXHRcblx0cGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG5cblx0aWYgKHNldHRpbmdzLmluaXRpYWxBdWRpbyA9PT0gJ29mZicpIHtcblx0XHRzZXR0aW5ncy5jb250ZW50Vm9sdW1lID0ge211dGVkOiBwbGF5ZXIubXV0ZWQoKSwgdm9sdW1lOiBwbGF5ZXIudm9sdW1lKCl9O1xuXHRcdHBsYXllci5tdXRlZCh0cnVlKTtcblx0fVxuXG4gICAgLy9XZSByZW1vdmUgdGhlIHBvc3RlciB0byBwcmV2ZW50IGZsaWNrZXJpbmcgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgc3RhcnRzIHBsYXlpbmdcbiAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRFbmQnXSwgZnVuY3Rpb24gKCkge1xuICAgIFx0cGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24ocGxheWVyLCBmYWxzZSk7XG4gICAgICByZW1vdmVBZFVuaXQoKTtcbiAgICAgIHJlc3RvcmVWaWRlb0NvbnRlbnQoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCdhZEZpbmlzaGVkJyk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBjaGVja0Fkc0VuYWJsZWQsXG4gICAgICBwcmVwYXJlUGxheWVyRm9yQWQsXG4gICAgICBzdGFydEFkQ2FuY2VsVGltZW91dCxcbiAgICAgIHBsYXlQcmVyb2xsQWRcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdHJhY2tBZEVycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZEVuZCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xuICAgICAgaWYgKHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdCkge1xuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQgPSBudWxsOyAvL1dlIHJlbW92ZSB0aGUgYWRVbml0XG4gICAgICAgIHBsYXllci52YXN0LlZQQUlEID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5fbW9sU2V0dGluZ3MuZmlyc3RQbGF5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdG9yZVZpZGVvQ29udGVudCgpIHtcbiAgICAgIHNldHVwQ29udGVudEV2ZW50cygpO1xuICAgICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICAgIHBsYXllclV0aWxzLnJlc3RvcmVQbGF5ZXJTbmFwc2hvdChwbGF5ZXIsIHNuYXBzaG90KTtcbiAgICAgICAgc25hcHNob3QgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwQ29udGVudEV2ZW50cygpIHtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmIChldnQudHlwZSAhPT0gJ3BsYXlpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuY29udGVudFN0YXJ0Jyk7XG5cbiAgICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZW5kZWQnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC50eXBlID09PSAnZW5kZWQnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50RW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQWRzRW5hYmxlZChuZXh0KSB7XG4gICAgICBpZiAoc2V0dGluZ3MuYWRzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbmV4dChudWxsKTtcbiAgICAgIH1cbiAgICAgIG5leHQobmV3IFZBU1RFcnJvcignQWRzIGFyZSBub3QgZW5hYmxlZCcpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlUGxheWVyRm9yQWQobmV4dCkge1xuICAgICAgaWYgKGNhblBsYXlQcmVyb2xsQWQoKSkge1xuICAgICAgICAvL3NuYXBzaG90ID0gcGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QocGxheWVyKTtcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIGFkZFNwaW5uZXJJY29uKCk7XG5cbiAgICAgICAgaWYocGxheWVyLnBhdXNlZCgpKSB7XG4gICAgICAgICAgbmV4dChudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5aW5nJ10sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICBuZXh0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ3ZpZGVvIGNvbnRlbnQgaGFzIGJlZW4gcGxheWluZyBiZWZvcmUgcHJlcm9sbCBhZCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5QbGF5UHJlcm9sbEFkKCkge1xuICAgICAgcmV0dXJuICF1dGlsaXRpZXMuaXNJUGhvbmUoKSB8fCBwbGF5ZXIuY3VycmVudFRpbWUoKSA8PSBzZXR0aW5ncy5pb3NQcmVyb2xsQ2FuY2VsVGltZW91dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEFkQ2FuY2VsVGltZW91dChuZXh0KSB7XG4gICAgICB2YXIgYWRDYW5jZWxUaW1lb3V0SWQ7XG4gICAgICBhZHNDYW5jZWxlZCA9IGZhbHNlO1xuXG4gICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgIFx0ICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBzdGFydCBwbGF5aW5nJywgNDAyKSk7XG4gICAgICAgIHBsYXllclV0aWxzLnNob3dCaWdQbGF5QnV0dG9uKHBsYXllciwgZmFsc2UpO1xuICAgICAgICBpZiAocGxheWVyLnZhc3QuVlBBSUQpIHtcbiAgICAgICAgXHRwbGF5ZXIudHJpZ2dlcigndnBhaWQuYWRFbmQnKTtcbiAgICAgICAgfVxuICAgICAgfSwgc2V0dGluZ3MuYWRDYW5jZWxUaW1lb3V0KTtcblxuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ2NsZWFyQWRDYW5jZWxUaW1lb3V0J10sIGNsZWFyQWRDYW5jZWxUaW1lb3V0KTtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFcnJvcicsICd2cGFpZC5hZEVuZCcsICd2cGFpZC5hZEVycm9yJ10sIGZ1bmN0aW9uKCkge1xuICAgIFx0ICBjbGVhckFkQ2FuY2VsVGltZW91dCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICAgIGZ1bmN0aW9uIGNsZWFyQWRDYW5jZWxUaW1lb3V0KCkge1xuICAgICAgICBpZiAoYWRDYW5jZWxUaW1lb3V0SWQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYWRDYW5jZWxUaW1lb3V0SWQpO1xuICAgICAgICAgIGFkQ2FuY2VsVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXh0KG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNwaW5uZXJJY29uKCkge1xuICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNwaW5uZXJJY29uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTcGlubmVySWNvbigpIHtcbiAgICAgIC8vSU1QT1JUQU5UIE5PVEU6IFdlIHJlbW92ZSB0aGUgc3Bpbm5lckljb24gYXN5bmNocm9ub3VzbHkgdG8gZ2l2ZSB0aW1lIHRvIHRoZSBicm93c2VyIHRvIHN0YXJ0IHRoZSB2aWRlby5cbiAgICAgIC8vIElmIHdlIHJlbW92ZSBpdCBzeW5jaHJvbm91c2x5IHdlIHNlZSBhIGZsYXNoIG9mIHRoZSBjb250ZW50IHZpZGVvIGJlZm9yZSB0aGUgYWQgc3RhcnRzIHBsYXlpbmcuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xuICAgICAgICAvLyBWSURMQS0yMjY4IChTYWZhcmkgMTEgb24gTWFjIC0gU3Bpbm5lciBrZWVwcyBnb2luZyBvbiBmaXJzdCBmcmFtZSBvZiBhZClcblx0XHRwbGF5ZXIubG9hZGluZ1NwaW5uZXIuZWxfLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxMDApO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsQWRzKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkc0NhbmNlbCcpO1xuICAgIGFkc0NhbmNlbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlQcmVyb2xsQWQoY2FsbGJhY2spIHtcbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZ2V0VmFzdFJlc3BvbnNlLFxuICAgICAgcGxheUFkXG4gICAgXSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFzdFJlc3BvbnNlKGNhbGxiYWNrKSB7XG4gICAgdmFzdC5nZXRWQVNUUmVzcG9uc2Uoc2V0dGluZ3MuYWRUYWdVcmwgPyBzZXR0aW5ncy5hZFRhZ1VybCgpIDogc2V0dGluZ3MuYWRUYWdYTUwsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gICAgLy9UT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byBzdG9wIHRoZSBwbGF5LiBUaGUgJ3BsYXlQcmVyb2xsV2F0ZXJmYWxsJyBlbmRzIGluIGFuIGluY29uc2lzdGVudCBzaXR1YXRpb25cbiAgICAvL0lmIHRoZSBzdGF0ZSBpcyBub3QgJ3ByZXJvbGw/JyBpdCBtZWFucyB0aGUgYWRzIHdlcmUgY2FuY2VsZWQgdGhlcmVmb3JlLCB3ZSBicmVhayB0aGUgd2F0ZXJmYWxsXG4gICAgaWYgKGFkc0NhbmNlbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLypDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNiBNb2F0IEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4qL1xuICAgIGZ1bmN0aW9uIGluaXRNb2F0VHJhY2tpbmcoYSxjLGQsaCxrKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGI9W107Yz17YWREYXRhOntpZHM6YyxkdXJhdGlvbjpkLHVybDprfSxkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe3RoaXMuc2VuZEV2ZW50PyhiJiYoYi5wdXNoKGEpLGE9YixiPSExKSx0aGlzLnNlbmRFdmVudChhKSk6Yi5wdXNoKGEpfX07ZD1cIl9tb2F0QXBpXCIrTWF0aC5mbG9vcigxRTgqTWF0aC5yYW5kb20oKSk7dmFyIGUsZzt0cnl7ZT1hLm93bmVyRG9jdW1lbnQsZz1lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvd31jYXRjaChsKXtlPWRvY3VtZW50LGc9d2luZG93fWdbZF09YztmLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjthJiZhLmluc2VydEJlZm9yZShmLGEuY2hpbGROb2Rlc1swXXx8bnVsbCk7Zi5zcmM9XCJodHRwczovL3oubW9hdGFkcy5jb20vXCIraCtcIi9tb2F0dmlkZW8uanMjXCIrZDtyZXR1cm4gY307XG4gICAgd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBudWxsO1xuICAgIGlmICh2YXN0UmVzcG9uc2UuYWRzICYmIHZhc3RSZXNwb25zZS5hZHMubGVuZ3RoID4gMCAmJiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZSAmJiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0KSB7XG4gIFx0ICB2YXIgaWRzID0ge2xldmVsMTogdmFzdFJlc3BvbnNlLmFkc1swXS5pbkxpbmUubW9hdC5hZHZpZCxcbiAgXHRcdFx0ICAgICBsZXZlbDI6IHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuY3BnaWQsXG4gIFx0XHRcdCAgICAgbGV2ZWwzOiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmNwaWQsXG4gIFx0XHRcdCAgICAgbGV2ZWw0OiB2YXN0UmVzcG9uc2UuYWRzWzBdLmluTGluZS5tb2F0LmNyaWR9O1xuICBcdCAgaWYgKHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuc2l0ZV9pZCkge1xuICBcdFx0ICBpZHMuc2xpY2VyMSA9IHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQuc2l0ZV9pZDtcbiAgXHQgIH1cbiAgXHQgIC8vd2luZG93Lk1vYXRBcGlSZWZlcmVuY2UgPSBpbml0TW9hdFRyYWNraW5nKHBsYXllci5lbF8sIGlkcywgcGxheWVyLmR1cmF0aW9uKCksIHZhc3RSZXNwb25zZS5hZHNbMF0uaW5MaW5lLm1vYXQucGFydG5lcmNvZGUsIHBsYXllci5jdXJyZW50U291cmNlKCkuc3JjKTtcbiAgXHQgIHdpbmRvdy5Nb2F0QXBpUmVmZXJlbmNlID0gaW5pdE1vYXRUcmFja2luZyhwbGF5ZXIuZWxfLCBpZHMsIHBsYXllci5kdXJhdGlvbigpLCAnbmluZW1lZGlhdnBhaWQ3ODk2MTE2NCcsIHBsYXllci5jdXJyZW50U291cmNlKCkuc3JjKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5fbW9sU2V0dGluZ3Mudmlld2FiaWxpdHlUcmFja2luZykge1xuICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eVRyYWNraW5nLmluaXQod2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eS5jb250ZXh0SWQsIFxuICBcdFx0XHQgIHBsYXllci5kdXJhdGlvbigpLCBwbGF5ZXIuZWxfLm9mZnNldFdpZHRoLCBwbGF5ZXIuZWxfLm9mZnNldEhlaWdodCk7XG4gICAgfVxuXG4gICAgdmFyIGlzQWRWUEFJRCAgPSBpc1ZQQUlEKHZhc3RSZXNwb25zZSk7XG4gICAgdmFyIGFkSW50ZWdyYXRvciA9IGlzQWRWUEFJRCA/IG5ldyBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykgOiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcbiAgICB2YXIgYWRGaW5pc2hlZCA9IGZhbHNlO1xuICAgIGlmIChpc0FkVlBBSUQpIHtcbiAgICBcdHBsYXllci50cmlnZ2VyKCdjbGVhckFkQ2FuY2VsVGltZW91dCcpO1xuICAgIH1cblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LnR5cGUgPT09ICd2YXN0LmFkU3RhcnQnKSB7XG4gICAgICAgIGFkZEFkc0xhYmVsKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUFkc0xhYmVsKTtcblxuICAgIGlmICh1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcbiAgICAgIHByZXZlbnRNYW51YWxQcm9ncmVzcygpO1xuICAgIH1cblxuICAgIHBsYXllci52YXN0LnZhc3RSZXNwb25zZSA9IHZhc3RSZXNwb25zZTtcbiAgICBsb2dnZXIuZGVidWcgKFwiY2FsbGluZyBhZEludGVncmF0b3IucGxheUFkKCkgd2l0aCB2YXN0UmVzcG9uc2U6XCIsIHZhc3RSZXNwb25zZSk7XG4gICAgcGxheWVyLnZhc3QuYWRVbml0ID0gYWRJbnRlZ3JhdG9yLnBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKTtcbiAgICBwbGF5ZXIudmFzdC5WUEFJRCA9IGlzQWRWUEFJRDtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKiovXG4gICAgZnVuY3Rpb24gYWRkQWRzTGFiZWwoKSB7XG4gICAgXHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5wbGF5c0luQnJlYWspIHtcbiAgICBcdFx0cGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlVGltZUNvbnRyb2xzKTtcbiAgICBcdH1cbiAgICAgIGlmIChhZEZpbmlzaGVkIHx8IHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdBZHNMYWJlbCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGxheWVyLmNvbnRyb2xCYXIuYWRkQ2hpbGQoJ0Fkc0xhYmVsJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRzTGFiZWwoKSB7XG4gICAgXHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy5wbGF5c0luQnJlYWspIHtcbiAgICBcdFx0cGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZVRpbWVDb250cm9scyk7XG4gICAgXHRcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLnRpbWVPZmZzZXQpIHtcblx0XHRcdFx0cGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0dmFyIGFwblRpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fwbl90aW1lX2Rpc3BsYXknKTtcblx0XHRcdFx0aWYgKGFwblRpbWVEaXNwbGF5KSB7XG5cdFx0XHRcdFx0YXBuVGltZURpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9XG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5yZW1vdmVDaGlsZCgnQWRzTGFiZWwnKTtcbiAgICAgIGFkRmluaXNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVDb250cm9scygpIHtcbiAgICBcdHZhciBjb252ZXJ0VGltZVRvU3RyID0gZnVuY3Rpb24odGltZSkge1xuICAgIFx0XHR2YXIgc2VjcyA9IHBhcnNlSW50KHRpbWUgKyAwLjUpO1xuICAgIFx0XHR2YXIgbWlucyA9IHBhcnNlSW50KHNlY3MgLyA2MCk7XG4gICAgXHRcdHNlY3MgLT0gKG1pbnMgKiA2MCk7XG4gICAgXHRcdHZhciBzdHIgPSBtaW5zLnRvU3RyaW5nKCkgKyAnOicgKyAoc2VjcyA+IDkgPyAnJyAgOiAnMCcpICsgc2Vjcy50b1N0cmluZygpO1xuICAgIFx0XHRyZXR1cm4gc3RyO1xuICAgIFx0fTtcbiAgICBcdFxuXHRcdGlmICh3aW5kb3cuX21vbFNldHRpbmdzLmJyZWFrRHVyYXRpb24pIHtcblx0XHRcdGlmIChwbGF5ZXIuZHVyYXRpb24oKSAhPSB3aW5kb3cuX21vbFNldHRpbmdzLmJyZWFrRHVyYXRpb24pIHtcblx0XHRcdFx0aWYgKHBsYXllci5kdXJhdGlvbigpKSB7XG5cdFx0XHRcdFx0d2luZG93Ll9tb2xTZXR0aW5ncy5yZWFsVmlkZW9EdXJhdGlvbiA9IHBsYXllci5kdXJhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5kdXJhdGlvbih3aW5kb3cuX21vbFNldHRpbmdzLmJyZWFrRHVyYXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAod2luZG93Ll9tb2xTZXR0aW5ncy50aW1lT2Zmc2V0KSB7XG5cdFx0XHR2YXIgYXBuVGltZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBuX3RpbWVfZGlzcGxheScpO1xuXHRcdFx0aWYgKCFhcG5UaW1lRGlzcGxheSkge1xuXHRcdFx0XHRhcG5UaW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZCgnY3VycmVudFRpbWVEaXNwbGF5JykuZWxfLmFwcGVuZENoaWxkKGFwblRpbWVEaXNwbGF5KTtcblx0XHRcdFx0YXBuVGltZURpc3BsYXkuaWQgPSAnYXBuX3RpbWVfZGlzcGxheSc7XG5cdFx0XHRcdGFwblRpbWVEaXNwbGF5LmNsYXNzID0gJ3Zqcy1jdXJyZW50LXRpbWUtZGlzcGxheSc7XG5cdFx0XHRcdGFwblRpbWVEaXNwbGF5WydhcmlhLWxpdmUnXSA9ICdvZmYnO1xuXHRcdFx0XHRhcG5UaW1lRGlzcGxheS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ2anMtY29udHJvbC10ZXh0XCI+PC9zcGFuPjA6MDAnO1xuXHRcdFx0XHRwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZCgnY3VycmVudFRpbWVEaXNwbGF5JykuZWxfLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ2N1cnJlbnRUaW1lRGlzcGxheScpLmVsXy5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRhcG5UaW1lRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdH1cblx0XHRcdHZhciB0aW1lID0gcGxheWVyLmN1cnJlbnRUaW1lKCkgKyB3aW5kb3cuX21vbFNldHRpbmdzLnRpbWVPZmZzZXQ7XG5cdFx0XHRhcG5UaW1lRGlzcGxheS5jaGlsZE5vZGVzWzFdLm5vZGVWYWx1ZSA9IGNvbnZlcnRUaW1lVG9TdHIodGltZSk7XG5cdFx0fVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXZlbnRNYW51YWxQcm9ncmVzcygpIHtcbiAgICAgIC8vSU9TIHZpZGVvIGNsb2NrIGlzIHZlcnkgdW5yZWxpYWJsZSBhbmQgd2UgbmVlZCBhIDMgc2Vjb25kcyB0aHJlc2hvbGQgdG8gZW5zdXJlIHRoYXQgdGhlIHVzZXIgZm9yd2FyZGVkL3Jld291bmQgdGhlIGFkXG4gICAgICB2YXIgUFJPR1JFU1NfVEhSRVNIT0xEID0gMztcbiAgICAgIHZhciBwcmV2aW91c1RpbWUgPSAwO1xuICAgICAgdmFyIHNraXBhZF9hdHRlbXB0cyA9IDA7XG5cbiAgICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIHByZXZlbnRBZFNlZWspO1xuICAgICAgcGxheWVyLm9uKCdlbmRlZCcsIHByZXZlbnRBZFNraXApO1xuXG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRFcnJvciddLCBzdG9wUHJldmVudE1hbnVhbFByb2dyZXNzKTtcblxuICAgICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgICAgZnVuY3Rpb24gcHJldmVudEFkU2tpcCgpIHtcbiAgICAgICAgLy8gSWdub3JlIGVuZGVkIGV2ZW50IGlmIHRoZSBBZCB0aW1lIHdhcyBub3QgJ25lYXInIHRoZSBlbmRcbiAgICAgICAgLy8gYW5kIHJldmVydCB0aW1lIHRvIHRoZSBwcmV2aW91cyAndmFsaWQnIHRpbWVcbiAgICAgICAgaWYgKChwbGF5ZXIuZHVyYXRpb24oKSAtIHByZXZpb3VzVGltZSkgPiBQUk9HUkVTU19USFJFU0hPTEQpIHtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7IC8vIHRoaXMgcmVkdWNlIHRoZSB2aWRlbyBqaXR0ZXIgaWYgdGhlIElPUyBza2lwIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAgICAgICAgcGxheWVyLnBsYXkodHJ1ZSk7IC8vIHdlIG5lZWQgdG8gdHJpZ2dlciB0aGUgcGxheSB0byBwdXQgdGhlIHZpZGVvIGVsZW1lbnQgYmFjayBpbiBhIHZhbGlkIHN0YXRlXG4gICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHByZXZpb3VzVGltZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcHJldmVudEFkU2VlaygpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGxheWVyLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHZhciBwcm9ncmVzc0RlbHRhID0gTWF0aC5hYnMoY3VycmVudFRpbWUgLSBwcmV2aW91c1RpbWUpO1xuICAgICAgICBpZiAocHJvZ3Jlc3NEZWx0YSA+IFBST0dSRVNTX1RIUkVTSE9MRCkge1xuICAgICAgICAgIHNraXBhZF9hdHRlbXB0cyArPSAxO1xuICAgICAgICAgIGlmIChza2lwYWRfYXR0ZW1wdHMgPj0gMikge1xuICAgICAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2aW91c1RpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzdG9wUHJldmVudE1hbnVhbFByb2dyZXNzKCkge1xuICAgICAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgcHJldmVudEFkU2Vlayk7XG4gICAgICAgIHBsYXllci5vZmYoJ2VuZGVkJywgcHJldmVudEFkU2tpcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tBZEVycm9yKGVycm9yLCB2YXN0UmVzcG9uc2UpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3Zhc3QuYWRFcnJvcicsIGVycm9yOiBlcnJvcn0pO1xuICAgIGNhbmNlbEFkcygpO1xuICAgIGxvZ2dlci5lcnJvciAoJ0FEIEVSUk9SOicsIGVycm9yLm1lc3NhZ2UsIGVycm9yLCB2YXN0UmVzcG9uc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWUEFJRCh2YXN0UmVzcG9uc2UpIHtcbiAgICB2YXIgaSwgbGVuO1xuICAgIHZhciBtZWRpYUZpbGVzID0gdmFzdFJlc3BvbnNlLm1lZGlhRmlsZXM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gbWVkaWFGaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHZhc3RVdGlsLmlzVlBBSUQobWVkaWFGaWxlc1tpXSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsIi8qKlxuICogQXBwbmV4dXMgVmlld2FiaWxpdHkgV3JhcHBlclxuICovXG5cbi8vdmFyIEFOVmlkZW9WaWV3YWJpbGl0eVRyYWNrZXIgPSByZXF1aXJlKFwiYW4tdmlkZW8tdmlld2FiaWxpdHlcIik7Ly9hcHBuZXh1cyB2aWV3YWJpbGl0eSBsaWJyYXJ5XG52YXIgQU5WaWRlb1ZpZXdhYmlsaXR5VHJhY2tlciA9IG51bGw7XG52YXIgbG9nZ2VyID0gcmVxdWlyZShcIi4vY29uc29sZUxvZ2dlclwiKTtcbnZhciBkZWJ1ZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbG9nZ2VyLmRlYnVnKG1lc3NhZ2UpO1xufTtcbnZhciBpbmZvID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBsb2dnZXIuaW5mbyhtZXNzYWdlKTtcbn07XG5cbnZhciBodG1sNVZpZGVvVmlld2FiaWxpdHkgPSBmdW5jdGlvbiAocGxheWVyXykge1xuXG5cdHZhciBwbGF5ZXIgPSBwbGF5ZXJfO1xuICAgIHZhciB0cmFja2VyID0gbnVsbDtcbiAgICB2YXIgbWFwcGVkQWN0aW9ucyA9IHtcbiAgICAgICAgXCJzdGFydFwiOiBcInN0YXJ0XCIsXG4gICAgICAgIFwiZXhwYW5kXCI6IFwiZXhwYW5kXCIsXG4gICAgICAgIFwiY29sbGFwc2VcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICBcInVubXV0ZVwiOiBcInNvdW5kX29uXCIsXG4gICAgICAgIFwibXV0ZVwiOiBcInNvdW5kX29mZlwiLFxuICAgICAgICBcInBhdXNlXCI6IFwicGF1c2VcIixcbiAgICAgICAgXCJyZXN1bWVcIjogXCJyZXN1bWVcIixcbiAgICAgICAgXCJhZC1jbGlja1wiOiBcImNsaWNrXCIsXG4gICAgICAgIFwic2tpcFwiOiBcInN0b3BcIixcbiAgICAgICAgXCJjb21wbGV0ZVwiOiBcInN0b3BcIixcbiAgICAgICAgXCJmdWxsc2NyZWVuXCI6IFwiZnVsbHNjcmVlblwiLFxuICAgICAgICBcImV4aXRGdWxsc2NyZWVuXCI6IFwiZXhpdEZ1bGxzY3JlZW5cIlxuICAgIH07XG5cbiAgICB2YXIgZmlyZU9uY2VFdmVudHMgPSB7XG4gICAgICAgIFwic3RhcnRcIjogZmFsc2UsXG4gICAgICAgIFwic2tpcFwiOiBmYWxzZSxcbiAgICAgICAgXCJjb21wbGV0ZVwiOiBmYWxzZVxuICAgIH07XG5cbiAgICB2YXIgZ2V0Q29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93Ll9tb2xTZXR0aW5ncy52aWV3YWJpbGl0eSAmJiB3aW5kb3cuX21vbFNldHRpbmdzLnZpZXdhYmlsaXR5LmNvbmZpZztcbiAgICB9O1xuXG4gICAgdmFyIGdldFBsYXllckRPTUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIuZWxfO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0VmlkZW9JbmZvID0gZnVuY3Rpb24gKGR1cmF0aW9uLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7ZHVyYXRpb246IGR1cmF0aW9uLCB3OiB3aWR0aCwgaDogaGVpZ2h0fTtcbiAgICB9O1xuXG5cdC8vIFVzaW5nIGNhbGxiYWNrIGZvciBsb2dzIGhlbHBzIGdldHRpbmcgYSByaWdodCBsb2dnZXIgaW4gZWFjaCBhcHBcblx0dmFyIGxvZ2dlckNhbGxiYWNrID0gZnVuY3Rpb24gKF9sZXZlbCwgX21lc3NhZ2UpIHtcblx0XHRpZiAoX2xldmVsICYmIF9sZXZlbCA9PT0gXCJkZWJ1Z1wiKSB7XG5cdFx0XHRkZWJ1ZyhfbWVzc2FnZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluZm8oX21lc3NhZ2UpO1xuXHRcdH1cbiAgICB9O1xuXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKGNvbnRleHRJZCwgZHVyYXRpb24sIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKCFBTlZpZGVvVmlld2FiaWxpdHlUcmFja2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gICBcbiAgICAgICAgaW5mbyhcImluaXRpYWxpemUgd2l0aCBkdXJhdGlvbjogXCIgKyBkdXJhdGlvbiArIFwiLCB3aWR0aDogXCIgKyB3aWR0aCArIFwiLCBoZWlnaHQ6IFwiICsgaGVpZ2h0KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRyYWNrZXIgPSBuZXcgQU5WaWRlb1ZpZXdhYmlsaXR5VHJhY2tlcihcblx0XHRcdFx0Z2V0Q29uZmlnKCksXG4gICAgICAgICAgICAgICAgZ2V0UGxheWVyRE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgICAgIGdldFZpZGVvSW5mbyhkdXJhdGlvbiwgd2lkdGgsIGhlaWdodCksIC8vIFRoZSBkdXJhdGlvbiBvZiB0aGUgdmlkZW8gYWRcbiAgICAgICAgICAgICAgICBjb250ZXh0SWQsXG5cdFx0XHRcdGxvZ2dlckNhbGxiYWNrXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZXJyb3Igb24gdmlld2FiaWxpdHkgbGlicmFyeTogXCIpO1xuICAgICAgICAgICAgZGVidWcoZXgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5pbnZva2VFdmVudCA9IGZ1bmN0aW9uIChldmVudF8pIHtcbiAgICAgICAgaWYgKCFBTlZpZGVvVmlld2FiaWxpdHlUcmFja2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNSZWFkeSAmJiBldmVudF8gJiYgbWFwcGVkQWN0aW9uc1tldmVudF9dKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmKGZpcmVPbmNlRXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50Xykpe1xuICAgICAgICAgICAgICAgICAgICBpZihmaXJlT25jZUV2ZW50c1tldmVudF9dKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8oXCJzdXByZXNzaW5nIGZpcmVPbmNlRXZlbnRzIGV2ZW50IGFzIGl0IGlzIGFscmVhZHkgZmlyZWQgb25jZSBieSB2aWV3YWJpbGl0eSBsaWJyYXJ5OiBcIiArIG1hcHBlZEFjdGlvbnNbZXZlbnRfXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVPbmNlRXZlbnRzW2V2ZW50X10gPSB0cnVlOyAvLyBtYXJrIHRoYXQgdGhlIGV2ZW50IGhhcyBiZWVuIGZpcmVkLlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZm8oXCJldmVudCBpbnZva2VkIGJ5IHZpZXdhYmlsaXR5IGxpYnJhcnk6IFwiICsgbWFwcGVkQWN0aW9uc1tldmVudF9dKTtcbiAgICAgICAgICAgICAgICB0cmFja2VyLm5vdGlmeUV2ZW50KG1hcHBlZEFjdGlvbnNbZXZlbnRfXSk7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiZXJyb3Igb24gdmlld2FiaWxpdHkgbGlicmFyeTogXCIpO1xuICAgICAgICAgICAgICAgIGRlYnVnKGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcblxuXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gaHRtbDVWaWRlb1ZpZXdhYmlsaXR5OyIsIi8vU21hbGwgc3Vic2V0IG9mIGFzeW5jXG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGFzeW5jID0ge307XG5cbmFzeW5jLnNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBzZXRUaW1lb3V0KGZuLCAwKTtcbn07XG5cbmFzeW5jLml0ZXJhdG9yID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIHZhciBtYWtlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgICAgIHRhc2tzW2luZGV4XS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZuLm5leHQoKTtcbiAgICB9O1xuICAgIGZuLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKSA6IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gZm47XG4gIH07XG4gIHJldHVybiBtYWtlQ2FsbGJhY2soMCk7XG59O1xuXG5cbmFzeW5jLndhdGVyZmFsbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7IH07XG4gIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodGFza3MpKSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gd2F0ZXJmYWxsIG11c3QgYmUgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJyk7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gIH1cbiAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuICB2YXIgd3JhcEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICB2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcEl0ZXJhdG9yKG5leHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXRlcmF0b3IuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG4gIHdyYXBJdGVyYXRvcihhc3luYy5pdGVyYXRvcih0YXNrcykpKCk7XG59O1xuXG5hc3luYy53aGVuID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgY2FsbGJhY2spIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3luYy53aGVuIGVycm9yOiBtaXNzaW5nIGNhbGxiYWNrIGFyZ3VtZW50XCIpO1xuICB9XG5cbiAgdmFyIGlzQWxsb3dlZCA9IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbmRpdGlvbikgPyBjb25kaXRpb24gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhY29uZGl0aW9uO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJyYXlMaWtlT2JqVG9BcnJheShhcmd1bWVudHMpO1xuICAgIHZhciBuZXh0ID0gYXJncy5wb3AoKTtcblxuICAgIGlmIChpc0FsbG93ZWQuYXBwbHkobnVsbCwgYXJncykpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcbiAgICByZXR1cm4gbmV4dC5hcHBseShudWxsLCBhcmdzKTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXN5bmM7XG5cbiIsIi8qanNoaW50IHVudXNlZDpmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdmVyYm9zaXR5ID0gMDtcbnZhciBfcHJlZml4ID0gXCJbdmlkZW9qcy12YXN0LXZwYWlkXSBcIjtcblxuZnVuY3Rpb24gc2V0VmVyYm9zaXR5ICh2KVxue1xuICAgIF92ZXJib3NpdHkgPSB2O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNc2cgKG1ldGhvZCwgYXJncylcbntcbiAgICBpZiAoKGFyZ3MubGVuZ3RoKSA+IDAgJiYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykpXG4gICAge1xuICAgICAgICBhcmdzWzBdID0gX3ByZWZpeCArIGFyZ3NbMF07XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZC5hcHBseSlcbiAgICB7XG4gICAgICAgIG1ldGhvZC5hcHBseSAoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBtZXRob2QgKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlYnVnICgpXG57XG4gICAgaWYgKF92ZXJib3NpdHkgPCA0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAge1xuICAgICAgICAvLyBJRSAxMCBkb2Vzbid0IGhhdmUgYSBjb25zb2xlLmRlYnVnKCkgZnVuY3Rpb25cbiAgICAgICAgaGFuZGxlTXNnIChjb25zb2xlLmxvZywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgaGFuZGxlTXNnIChjb25zb2xlLmRlYnVnLCBhcmd1bWVudHMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9nICgpXG57XG4gICAgaWYgKF92ZXJib3NpdHkgPCAzKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZU1zZyAoY29uc29sZS5sb2csIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGluZm8gKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDIpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlTXNnIChjb25zb2xlLmluZm8sIGFyZ3VtZW50cyk7XG59XG5cblxuZnVuY3Rpb24gd2FybiAoKVxue1xuICAgIGlmIChfdmVyYm9zaXR5IDwgMSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUud2FybiwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZXJyb3IgKClcbntcbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUuZXJyb3IsIGFyZ3VtZW50cyk7XG59XG5cbnZhciBjb25zb2xlTG9nZ2VyID0ge1xuICAgIHNldFZlcmJvc2l0eTogc2V0VmVyYm9zaXR5LFxuICAgIGRlYnVnOiBkZWJ1ZyxcbiAgICBsb2c6IGxvZyxcbiAgICBpbmZvOiBpbmZvLFxuICAgIHdhcm46IHdhcm4sXG4gICAgZXJyb3I6IGVycm9yXG59O1xuXG5pZiAoKHR5cGVvZiAoY29uc29sZSkgPT09ICd1bmRlZmluZWQnKSB8fCAhY29uc29sZS5sb2cpXG57XG4gICAgLy8gbm8gY29uc29sZSBhdmFpbGFibGU7IG1ha2UgZnVuY3Rpb25zIG5vLW9wXG4gICAgY29uc29sZUxvZ2dlci5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGNvbnNvbGVMb2dnZXIubG9nID0gZnVuY3Rpb24gKCkge307XG4gICAgY29uc29sZUxvZ2dlci5pbmZvID0gZnVuY3Rpb24gKCkge307XG4gICAgY29uc29sZUxvZ2dlci53YXJuID0gZnVuY3Rpb24gKCkge307XG4gICAgY29uc29sZUxvZ2dlci5lcnJvciA9IGZ1bmN0aW9uICgpIHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnNvbGVMb2dnZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBkb20gPSB7fTtcblxuZG9tLmlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIHJldHVybiBzdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJztcbn07XG5cbmRvbS5pc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKGVsKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgcmV0dXJuIHN0eWxlLmRpc3BsYXkgPT09ICdub25lJztcbn07XG5cbmRvbS5pc1Nob3duID0gZnVuY3Rpb24gaXNTaG93bihlbCkge1xuICByZXR1cm4gIWRvbS5pc0hpZGRlbihlbCk7XG59O1xuXG5kb20uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZWwpIHtcbiAgZWwuX19wcmV2X3N0eWxlX2Rpc3BsYXlfID0gZWwuc3R5bGUuZGlzcGxheTtcbiAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbmRvbS5zaG93ID0gZnVuY3Rpb24gc2hvdyhlbCkge1xuICBpZiAoZG9tLmlzSGlkZGVuKGVsKSkge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV87XG4gIH1cbiAgZWwuX19wcmV2X3N0eWxlX2Rpc3BsYXlfID0gdW5kZWZpbmVkO1xufTtcblxuZG9tLmhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNzc0NsYXNzKSB7XG4gIHZhciBjbGFzc2VzLCBpLCBsZW47XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSB1dGlsaXRpZXMuaXNTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSA/IGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgvXFxzKy8pIDogW107XG4gICAgY3NzQ2xhc3MgPSAoY3NzQ2xhc3MgfHwgJycpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgaWYgKGNsYXNzZXNbaV0gPT09IGNzc0NsYXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5kb20uYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNzc0NsYXNzKSB7XG4gIHZhciBjbGFzc2VzO1xuXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcykpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKGNzc0NsYXNzKTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc2VzLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG59O1xuXG5kb20ucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNzc0NsYXNzKSB7XG4gIHZhciBjbGFzc2VzO1xuXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcykpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICB2YXIgbmV3Q2xhc3NlcyA9IFtdO1xuICAgIHZhciBpLCBsZW47XG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhjc3NDbGFzcykgJiYgdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MucmVwbGFjZSgvXFxzKy8sICcnKSkpIHtcblxuICAgICAgZm9yIChpID0gMCwgbGVuID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBpZiAoY3NzQ2xhc3MgIT09IGNsYXNzZXNbaV0pIHtcbiAgICAgICAgICBuZXdDbGFzc2VzLnB1c2goY2xhc3Nlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuZXdDbGFzc2VzLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG59O1xuXG5kb20uYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkoZWwpKXtcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChlbCwgZnVuY3Rpb24oZSkge1xuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZSwgdHlwZSwgaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkodHlwZSkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKHR5cGUsIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGVsLCB0LCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xuICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgLy8gV0FSTklORyEhISB0aGlzIGlzIGEgdmVyeSBuYWl2ZSBpbXBsZW1lbnRhdGlvbiAhXG4gICAgLy8gdGhlIGV2ZW50IG9iamVjdCB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGhhbmRsZXJcbiAgICAvLyB3b3VsZCBub3QgYmUgdGhlcmUgZm9yIElFOFxuICAgIC8vIHdlIHNob3VsZCB1c2UgXCJ3aW5kb3cuZXZlbnRcIiBhbmQgdGhlbiBcImV2ZW50LnNyY0VsZW1lbnRcIlxuICAgIC8vIGluc3RlYWQgb2YgXCJldmVudC50YXJnZXRcIlxuICAgIGVsLmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGhhbmRsZXIpO1xuICB9XG59O1xuXG5kb20ucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkoZWwpKXtcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChlbCwgZnVuY3Rpb24oZSkge1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgdHlwZSwgaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkodHlwZSkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKHR5cGUsIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCB0LCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xuICB9IGVsc2UgaWYgKGVsLmRldGFjaEV2ZW50KSB7XG4gICAgZWwuZGV0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgaGFuZGxlcik7XG4gIH0gZWxzZSB7XG4gICAgZWxbXCJvblwiICsgdHlwZV0gPSBudWxsO1xuICB9XG59O1xuXG5kb20uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZWwsIGV2ZW50KSB7XG4gIGlmIChlbC5kaXNwYXRjaEV2ZW50KSB7XG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0gZWxzZSB7XG4gICAgZWwuZmlyZUV2ZW50KFwib25cIiArIGV2ZW50LmV2ZW50VHlwZSwgZXZlbnQpO1xuICB9XG59O1xuXG5kb20uaXNEZXNjZW5kYW50ID0gZnVuY3Rpb24gaXNEZXNjZW5kYW50KHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlO1xuICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmRvbS5nZXRUZXh0Q29udGVudCA9IGZ1bmN0aW9uIGdldFRleHRDb250ZW50KGVsKXtcbiAgcmV0dXJuIGVsLnRleHRDb250ZW50IHx8IGVsLnRleHQ7XG59O1xuXG5kb20ucHJlcGVuZENoaWxkID0gZnVuY3Rpb24gcHJlcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcbiAgaWYoY2hpbGQucGFyZW50Tm9kZSl7XG4gICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHBhcmVudC5maXJzdENoaWxkKTtcbn07XG5cbmRvbS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpe1xuICBpZihub2RlICYmIG5vZGUucGFyZW50Tm9kZSl7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICB9XG59O1xuXG5kb20uaXNEb21FbGVtZW50ID0gZnVuY3Rpb24gaXNEb21FbGVtZW50KG8pIHtcbiAgcmV0dXJuIG8gaW5zdGFuY2VvZiBFbGVtZW50O1xufTtcblxuZG9tLmNsaWNrID0gZnVuY3Rpb24oZWwsIGhhbmRsZXIpIHtcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsICdjbGljaycsIGhhbmRsZXIpO1xufTtcblxuZG9tLm9uY2UgPSBmdW5jdGlvbihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBmdW5jdGlvbiBoYW5kbGVyV3JhcCgpIHtcbiAgICBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXJXcmFwKTtcbiAgfVxuXG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyV3JhcCk7XG59O1xuXG4vL05vdGU6IHRoZXJlIGlzIG5vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBpUGFkIHNvIHdlIG5lZWQgYSBmYWxsYmFja1xuZG9tLmdldERpbWVuc2lvbiA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbihlbGVtZW50KSB7XG4gIHZhciByZWN0O1xuXG4gIC8vT24gSUU5IGFuZCBiZWxvdyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZG9lcyBub3Qgd29yayBjb25zaXN0ZW50bHlcbiAgaWYoIXV0aWxpdGllcy5pc09sZElFKCkgJiYgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb207IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXJsVXRpbHMgPSByZXF1aXJlKCcuL3VybFV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0RXJyb3IobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSAnSHR0cFJlcXVlc3QgRXJyb3I6ICcgKyAobWVzc2FnZSB8fCAnJyk7XG59XG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuSHR0cFJlcXVlc3RFcnJvci5wcm90b3R5cGUubmFtZSA9IFwiSHR0cFJlcXVlc3QgRXJyb3JcIjtcblxuZnVuY3Rpb24gSHR0cFJlcXVlc3QoY3JlYXRlWGhyKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY3JlYXRlWGhyKSkge1xuICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKCdNaXNzaW5nIFhNTEh0dHBSZXF1ZXN0IGZhY3RvcnkgbWV0aG9kJyk7XG4gIH1cblxuICB0aGlzLmNyZWF0ZVhociA9IGNyZWF0ZVhocjtcbn1cblxuSHR0cFJlcXVlc3QucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgc2FuaXR5Q2hlY2sodXJsLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gIHZhciB0aW1lb3V0LCB0aW1lb3V0SWQ7XG4gIHZhciB4aHIgPSB0aGlzLmNyZWF0ZVhocigpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGltZW91dCA9IHV0aWxpdGllcy5pc051bWJlcihvcHRpb25zLnRpbWVvdXQpID8gb3B0aW9ucy50aW1lb3V0IDogMDtcblxuICB4aHIub3BlbihtZXRob2QsIHVybFV0aWxzLnVybFBhcnRzKHVybCkuaHJlZiwgdHJ1ZSk7XG5cbiAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgIHNldEhlYWRlcnMoeGhyLCBvcHRpb25zLmhlYWRlcnMpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIH1cblxuICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0dXNUZXh0LCByZXNwb25zZSwgc3RhdHVzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9ubHkgd2F5IHRvIGRvIGEgc2VjdXJlIHJlcXVlc3Qgb24gSUU4IGFuZCBJRTkgaXMgd2l0aCB0aGUgWERvbWFpblJlcXVlc3Qgb2JqZWN0LiBVbmZvcnR1bmF0ZWx5LCBtaWNyb3NvZnQgaXNcbiAgICAgKiBzbyBuaWNlIHRoYXQgZGVjaWRlZCB0aGF0IHRoZSBzdGF0dXMgcHJvcGVydHkgYW5kIHRoZSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBtZXRob2Qgd2hlcmUgbm90IG5lZWRlZCBzbyB3ZSBoYXZlIHRvXG4gICAgICogZmFrZSB0aGVtLiBJZiB0aGUgcmVxdWVzdCBnZXRzIGRvbmUgd2l0aCBhbiBYRG9tYWluUmVxdWVzdCBpbnN0YW5jZSwgd2Ugd2lsbCBhc3N1bWUgdGhhdCB0aGVyZSBhcmUgbm8gaGVhZGVycyBhbmRcbiAgICAgKiB0aGUgc3RhdHVzIHdpbGwgYWx3YXlzIGJlIDIwMC4gSWYgeW91IGRvbid0IGxpa2UgaXQsIERPIE5PVCBVU0UgQU5DSUVOVCBCUk9XU0VSUyEhIVxuICAgICAqXG4gICAgICogRm9yIG1vciBpbmZvIGdvIHRvOiBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2NjMjg4MDYwKHY9dnMuODUpLmFzcHhcbiAgICAgKi9cbiAgICBpZiAoIXhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpIHtcbiAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIXhoci5zdGF0dXMpIHtcbiAgICAgIHhoci5zdGF0dXMgPSAyMDA7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodGltZW91dElkKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0IHx8ICcnO1xuXG4gICAgLy8gcmVzcG9uc2VUZXh0IGlzIHRoZSBvbGQtc2Nob29sIHdheSBvZiByZXRyaWV2aW5nIHJlc3BvbnNlIChzdXBwb3J0ZWQgYnkgSUU4ICYgOSlcbiAgICAvLyByZXNwb25zZS9yZXNwb25zZVR5cGUgcHJvcGVydGllcyB3ZXJlIGludHJvZHVjZWQgaW4gWEhSIExldmVsMiBzcGVjIChzdXBwb3J0ZWQgYnkgSUUxMClcbiAgICByZXNwb25zZSA9ICgncmVzcG9uc2UnIGluIHhocikgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0O1xuXG4gICAgLy8gbm9ybWFsaXplIElFOSBidWcgKGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzE0NTApXG4gICAgc3RhdHVzID0geGhyLnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHhoci5zdGF0dXM7XG5cbiAgICBjYWxsYmFjayhcbiAgICAgIHN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLFxuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLFxuICAgICAgc3RhdHVzVGV4dCk7XG4gIH07XG5cbiAgeGhyLm9uZXJyb3IgPSByZXF1ZXN0RXJyb3I7XG4gIHhoci5vbmFib3J0ID0gcmVxdWVzdEVycm9yO1xuXG4gIHhoci5zZW5kKCk7XG5cbiAgaWYgKHRpbWVvdXQgPiAwKSB7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB4aHIgJiYgeGhyLmFib3J0KCk7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcodXJsKSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyh1cmwpKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgdXJsICdcIiArIHVybCArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIGhhbmRsZXIgJ1wiICsgY2FsbGJhY2sgKyBcIicgZm9yIHRoZSBodHRwIHJlcXVlc3RcIik7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQob3B0aW9ucykgJiYgIXV0aWxpdGllcy5pc09iamVjdChvcHRpb25zKSkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIG9wdGlvbnMgbWFwICdcIiArIG9wdGlvbnMgKyBcIidcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SGVhZGVycyh4aHIsIGhlYWRlcnMpIHtcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWVzdEVycm9yKCkge1xuICAgIGNhbGxiYWNrKC0xLCBudWxsLCBudWxsLCAnJyk7XG4gIH1cbn07XG5cbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICB0aGlzLnJ1bignR0VUJywgdXJsLCBwcm9jZXNzUmVzcG9uc2UsIG9wdGlvbnMpO1xuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShzdGF0dXMsIHJlc3BvbnNlLCBoZWFkZXJzU3RyaW5nLCBzdGF0dXNUZXh0KSB7XG4gICAgaWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzU3RyaW5nLCBzdGF0dXNUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sobmV3IEh0dHBSZXF1ZXN0RXJyb3Ioc3RhdHVzVGV4dCksIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VjY2VzcyhzdGF0dXMpIHtcbiAgICByZXR1cm4gMjAwIDw9IHN0YXR1cyAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVhocigpIHtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICBpZiAoIShcIndpdGhDcmVkZW50aWFsc1wiIGluIHhocikpIHtcbiAgICAvLyBYRG9tYWluUmVxdWVzdCBmb3IgSUUuXG4gICAgeGhyID0gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gIH1cbiAgcmV0dXJuIHhocjtcbn1cblxudmFyIGh0dHAgPSBuZXcgSHR0cFJlcXVlc3QoY3JlYXRlWGhyKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGh0dHA6IGh0dHAsXG4gIEh0dHBSZXF1ZXN0OiBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlcXVlc3RFcnJvcjogSHR0cFJlcXVlc3RFcnJvcixcbiAgY3JlYXRlWGhyOiBjcmVhdGVYaHJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBodG1sNTogW1xuICAgICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICd0ZXh0L2phdmFzY3JpcHQxLjAnLFxuICAgICd0ZXh0L2phdmFzY3JpcHQxLjInLFxuICAgICd0ZXh0L2phdmFzY3JpcHQxLjQnLFxuICAgICd0ZXh0L2pzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24veC1qYXZhc2NyaXB0JyxcbiAgICAndGV4dC9lY21hc2NyaXB0JyxcbiAgICAndGV4dC9lY21hc2NyaXB0MS4wJyxcbiAgICAndGV4dC9lY21hc2NyaXB0MS4yJyxcbiAgICAndGV4dC9lY21hc2NyaXB0MS40JyxcbiAgICAndGV4dC9saXZlc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24vZWNtYXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdCcsXG4gIF0sXG5cbiAgZmxhc2g6IFtcbiAgICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXG4gIF0sXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZG9tID0gcmVxdWlyZSgnLi9kb20nKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIHBsYXllclV0aWxzID0ge307XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjYXB0dXJlcyB0aGUgcG9ydGlvbnMgb2YgcGxheWVyIHN0YXRlIHJlbGV2YW50IHRvXG4gKiB2aWRlbyBwbGF5YmFjay4gVGhlIHJlc3VsdCBvZiB0aGlzIGZ1bmN0aW9uIGNhbiBiZSBwYXNzZWQgdG9cbiAqIHJlc3RvcmVQbGF5ZXJTbmFwc2hvdCB3aXRoIGEgcGxheWVyIHRvIHJldHVybiB0aGUgcGxheWVyIHRvIHRoZSBzdGF0ZSBpdFxuICogd2FzIGluIHdoZW4gdGhpcyBmdW5jdGlvbiB3YXMgaW52b2tlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwbGF5ZXIgVGhlIHZpZGVvanMgcGxheWVyIG9iamVjdFxuICovXG5wbGF5ZXJVdGlscy5nZXRQbGF5ZXJTbmFwc2hvdCA9IGZ1bmN0aW9uIGdldFBsYXllclNuYXBzaG90KHBsYXllcikge1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuXG4gIHZhciBzbmFwc2hvdCA9IHtcbiAgICBlbmRlZDogcGxheWVyLmVuZGVkKCksXG4gICAgc3JjOiBwbGF5ZXIuY3VycmVudFNyYygpLFxuICAgIGN1cnJlbnRUaW1lOiBwbGF5ZXIuY3VycmVudFRpbWUoKSxcbiAgICB0eXBlOiBwbGF5ZXIuY3VycmVudFR5cGUoKSxcbiAgICBwbGF5aW5nOiAhcGxheWVyLnBhdXNlZCgpLFxuICAgIHN1cHByZXNzZWRUcmFja3M6IGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKVxuICB9O1xuXG4gIGlmICh0ZWNoKSB7XG4gICAgc25hcHNob3QubmF0aXZlUG9zdGVyID0gdGVjaC5wb3N0ZXI7XG4gICAgc25hcHNob3Quc3R5bGUgPSB0ZWNoLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgfVxuICByZXR1cm4gc25hcHNob3Q7XG5cbiAgLyoqKiogTG9jYWwgRnVuY3Rpb25zICoqKiovXG4gIGZ1bmN0aW9uIGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKSB7XG4gICAgdmFyIHRyYWNrcyA9IHBsYXllci5yZW1vdGVUZXh0VHJhY2tzID8gcGxheWVyLnJlbW90ZVRleHRUcmFja3MoKSA6IFtdO1xuXG4gICAgaWYgKHRyYWNrcyAmJiB1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MudHJhY2tzXykpIHtcbiAgICAgIHRyYWNrcyA9IHRyYWNrcy50cmFja3NfO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tzKSkge1xuICAgICAgdHJhY2tzID0gW107XG4gICAgfVxuXG4gICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBbXTtcbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgIHN1cHByZXNzZWRUcmFja3MucHVzaCh7XG4gICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgbW9kZTogdHJhY2subW9kZVxuICAgICAgfSk7XG4gICAgICB0cmFjay5tb2RlID0gJ2Rpc2FibGVkJztcbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwcmVzc2VkVHJhY2tzO1xuICB9XG59O1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIG1vZGlmeSB0aGUgc3BlY2lmaWVkIHBsYXllciBzbyB0aGF0IGl0cyBzdGF0ZSBpcyBlcXVpdmFsZW50IHRvXG4gKiB0aGUgc3RhdGUgb2YgdGhlIHNuYXBzaG90LlxuICogQHBhcmFtIHtvYmplY3R9IHNuYXBzaG90IC0gdGhlIHBsYXllciBzdGF0ZSB0byBhcHBseVxuICovXG5wbGF5ZXJVdGlscy5yZXN0b3JlUGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiByZXN0b3JlUGxheWVyU25hcHNob3QocGxheWVyLCBzbmFwc2hvdCkge1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgYXR0ZW1wdHMgPSAyMDsgLy8gdGhlIG51bWJlciBvZiByZW1haW5pbmcgYXR0ZW1wdHMgdG8gcmVzdG9yZSB0aGUgc25hcHNob3RcblxuICBpZiAoc25hcHNob3QubmF0aXZlUG9zdGVyKSB7XG4gICAgdGVjaC5wb3N0ZXIgPSBzbmFwc2hvdC5uYXRpdmVQb3N0ZXI7XG4gIH1cblxuICBpZiAoJ3N0eWxlJyBpbiBzbmFwc2hvdCkge1xuICAgIC8vIG92ZXJ3cml0ZSBhbGwgY3NzIHN0eWxlIHByb3BlcnRpZXMgdG8gcmVzdG9yZSBzdGF0ZSBwcmVjaXNlbHlcbiAgICB0ZWNoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzbmFwc2hvdC5zdHlsZSB8fCAnJyk7XG4gIH1cblxuICAvL2lmIChoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpKSB7XG5cbiAgICAvLyBvbiBpb3M3LCBmaWRkbGluZyB3aXRoIHRleHRUcmFja3MgdG9vIGVhcmx5IHdpbGwgY2F1c2Ugc2FmYXJpIHRvIGNyYXNoXG4gICAgcGxheWVyLm9uZSgnY29udGVudGxvYWRlZG1ldGFkYXRhJywgcmVzdG9yZVRyYWNrcyk7XG5cbiAgICBwbGF5ZXIub25lKCdjYW5wbGF5JywgdHJ5VG9SZXN1bWUpO1xuICAgIGVuc3VyZUNhbnBsYXlFdnRHZXRzRmlyZWQoKTtcblxuICAgIC8vIGlmIHRoZSBzcmMgY2hhbmdlZCBmb3IgYWQgcGxheWJhY2ssIHJlc2V0IGl0XG4gICAgcGxheWVyLnNyYyh7c3JjOiBzbmFwc2hvdC5zcmMsIHR5cGU6IHNuYXBzaG90LnR5cGV9KTtcblxuICAgIC8vIHNhZmFyaSByZXF1aXJlcyBhIGNhbGwgdG8gYGxvYWRgIHRvIHBpY2sgdXAgYSBjaGFuZ2VkIHNvdXJjZVxuICAgIC8vIHBsYXllci5sb2FkKCk7XHQvLyBTYWZhcmkgMTEgbm8gbW9yZSByZXF1aXJlcyAnbG9hZCcuIEZpcmVmb3ggZG9lc24ndCBsaWtlICdsb2FkJyBjYWxsIGZvciBhbHJlYWR5IGxvYWRlZCBjb250ZW50IChpbiBjYXNlIG9mIEFkTG9hZGVkIHRpbWVvdXQpLlxuXG4gIC8qfSBlbHNlIHtcbiAgICByZXN0b3JlVHJhY2tzKCk7XG5cbiAgICBpZiAoc25hcHNob3QucGxheWluZykge1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICB9XG4gIH0qL1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICAvKipcbiAgICogU29tZXRpbWVzIGZpcmVmb3ggZG9lcyBub3QgdHJpZ2dlciB0aGUgJ2NhbnBsYXknIGV2dC5cbiAgICogVGhpcyBjb2RlIGVuc3VyZSB0aGF0IGl0IGFsd2F5cyBnZXRzIHRyaWdnZXJlZCB0cmlnZ2VyZWQuXG4gICAqL1xuICBmdW5jdGlvbiBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCkge1xuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ2NhbnBsYXknKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCBmdW5jdGlvbigpe1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBsYXllciBuZWVkcyB0byBiZSByZXN0b3JlZCB0byBpdHMgc3RhdGVcbiAgICogYmVmb3JlIGFkIHBsYXliYWNrIGJlZ2FuLiBXaXRoIGEgY3VzdG9tIGFkIGRpc3BsYXkgb3IgYnVybmVkLWluXG4gICAqIGFkcywgdGhlIGNvbnRlbnQgcGxheWVyIHN0YXRlIGhhc24ndCBiZWVuIG1vZGlmaWVkIGFuZCBzbyBub1xuICAgKiByZXN0b3JhdGlvbiBpcyByZXF1aXJlZFxuICAgKi9cbiAgLypmdW5jdGlvbiBoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpIHtcbiAgICBpZiAocGxheWVyLnNyYygpKSB7XG4gICAgICByZXR1cm4gcGxheWVyLnNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gICAgfVxuICAgIC8vIHRoZSBwbGF5ZXIgd2FzIGNvbmZpZ3VyZWQgdGhyb3VnaCBzb3VyY2UgZWxlbWVudCBjaGlsZHJlblxuICAgIHJldHVybiBwbGF5ZXIuY3VycmVudFNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gIH0qL1xuXG4gIGZ1bmN0aW9uIHJlc3RvcmVUcmFja3MoKSB7XG4gICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBzbmFwc2hvdC5zdXBwcmVzc2VkVHJhY2tzO1xuICAgIHN1cHByZXNzZWRUcmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tTbmFwc2hvdCkge1xuICAgICAgdHJhY2tTbmFwc2hvdC50cmFjay5tb2RlID0gdHJhY2tTbmFwc2hvdC5tb2RlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgdmlkZW8gZWxlbWVudCBoYXMgbG9hZGVkIGVub3VnaCBvZiB0aGUgc25hcHNob3Qgc291cmNlXG4gICAqIHRvIGJlIHJlYWR5IHRvIGFwcGx5IHRoZSByZXN0IG9mIHRoZSBzdGF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gdHJ5VG9SZXN1bWUoKSB7XG5cbiAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xuICAgIC8vIG90aGVyd2lzZSBkZWxheSBhIGJpdCBhbmQgdGhlbiBjaGVjayBhZ2FpbiB1bmxlc3Mgd2UncmUgb3V0IG9mIGF0dGVtcHRzXG5cblx0ICAvLyBzYWZhcmkgMTEgcmVxdWlyZXMgY2FsbCBgcGxheWAgdG8gbWFrZSBzZWVrIGF2YWlsYWJsZVxuICAgICAgcGxheWVyLnBsYXkoKTtcblxuICAgIGlmICghcGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lKHBsYXllcikgJiYgYXR0ZW1wdHMtLSkge1xuICAgICAgc2V0VGltZW91dCh0cnlUb1Jlc3VtZSwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZihwbGF5ZXIuY3VycmVudFRpbWUoKSAhPT0gc25hcHNob3QuY3VycmVudFRpbWUpIHtcbiAgICAgICAgICBpZiAoc25hcHNob3QucGxheWluZykgeyAvLyBpZiBuZWVkZWQgcmVzdG9yZSBwbGF5aW5nIHN0YXR1cyBhZnRlciBzZWVrIGNvbXBsZXRlc1xuICAgICAgICAgICAgcGxheWVyLm9uZSgnc2Vla2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHNuYXBzaG90LmN1cnJlbnRUaW1lKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcbiAgICAgICAgICAvLyBpZiBuZWVkZWQgYW5kIG5vIHNlZWsgaGFzIGJlZW4gcGVyZm9ybWVkLCByZXN0b3JlIHBsYXlpbmcgc3RhdHVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHZpZGVvanMubG9nLndhcm4oJ0ZhaWxlZCB0byByZXN1bWUgdGhlIGNvbnRlbnQgYWZ0ZXIgYW4gYWR2ZXJ0aXNlbWVudCcsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxucGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lID0gZnVuY3Rpb24gKHBsYXllcikge1xuXG4gIGlmIChwbGF5ZXIucmVhZHlTdGF0ZSgpID4gMSkge1xuICAgIC8vIHNvbWUgYnJvd3NlcnMgYW5kIG1lZGlhIGFyZW4ndCBcInNlZWthYmxlXCIuXG4gICAgLy8gcmVhZHlTdGF0ZSBncmVhdGVyIHRoYW4gMSBhbGxvd3MgZm9yIHNlZWtpbmcgd2l0aG91dCBleGNlcHRpb25zXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocGxheWVyLnNlZWthYmxlKCkgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGlmIHRoZSBwbGF5ZXIgZG9lc24ndCBleHBvc2UgdGhlIHNlZWthYmxlIHRpbWUgcmFuZ2VzLCB0cnkgdG9cbiAgICAvLyByZXN1bWUgcGxheWJhY2sgaW1tZWRpYXRlbHlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwbGF5ZXIuc2Vla2FibGUoKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gaWYgc29tZSBwZXJpb2Qgb2YgdGhlIHZpZGVvIGlzIHNlZWthYmxlLCByZXN1bWUgcGxheWJhY2tcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBwcmVwYXJlcyB0aGUgcGxheWVyIHRvIGRpc3BsYXkgYWRzLlxuICogQWRkaW5nIGNvbnZlbmllbmNlIGV2ZW50cyBsaWtlIHRoZSAndmFzdC5maXJzUGxheScgdGhhdCBnZXRzIGZpcmVkIHdoZW4gdGhlIHZpZGVvIGlzIGZpcnN0IHBsYXllZFxuICogYW5kIGFkcyB0aGUgYmxhY2tQb3N0ZXIgdG8gdGhlIHBsYXllciB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBkaXNwbGF5ZWQgYmVmb3JlIHRoZSBwcmVyb2xsIGFkLlxuICpcbiAqIEBwYXJhbSBwbGF5ZXJcbiAqL1xucGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgdmFyIGJsYWNrUG9zdGVyID0gcGxheWVyLmFkZENoaWxkKCdibGFja1Bvc3RlcicpO1xuICAvL3ZhciBfZmlyc3RQbGF5ID0gdHJ1ZTtcbiAgdmFyIHZvbHVtZVNuYXBzaG90O1xuXG5cbiAgbW9ua2V5UGF0Y2hQbGF5ZXJBcGkoKTtcblxuICBwbGF5ZXIub24oJ3BsYXknLCB0cnlUb1RyaWdnZXJGaXJzdFBsYXkpO1xuICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCByZXNldEZpcnN0UGxheSk7Ly9FdmVyeSB0aW1lIHdlIGNoYW5nZSB0aGUgc291cmNlcyB3ZSByZXNldCB0aGUgZmlyc3QgcGxheS5cbiAgcGxheWVyLm9uKCd2YXN0LmZpcnN0UGxheScsIHJlc3RvcmVDb250ZW50Vm9sdW1lKTtcbiAgcGxheWVyLm9uKCdlcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7Ly9JZiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgcGxheWVyIHdlIHJlbW92ZSB0aGUgYmxhY2twb3N0ZXIgdG8gc2hvdyB0aGUgZXJyIG1zZ1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCBoaWRlQmxhY2tQb3N0ZXIpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRFcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgYWRkU3R5bGVzKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkRW5kJywgcmVtb3ZlU3R5bGVzKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHJlbW92ZVN0eWxlcyk7XG5cbiAgLy8gVklETEEtMjQ2NSAtIGhpZGUgdmpzIGVycm9yIGRpYWxvZyB3aGVuIGFkIHJ1bm5pbmdcbiAgdmFyIGVycm9yRGlhbG9nO1xuICB2YXIgZGxncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Zqcy1lcnJvci1kaXNwbGF5Jyk7XG4gIGlmIChkbGdzICYmIGRsZ3MubGVuZ3RoID4gMCkge1xuXHQgIGVycm9yRGlhbG9nID0gZGxnc1swXTtcblx0ICBlcnJvckRpYWxvZy5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpO1xuICB9XG4gIFxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgLyoqXG4gICBXaGF0IHRoaXMgZnVuY3Rpb24gZG9lcyBpcyB1Z2x5IGFuZCBob3JyaWJsZSBhbmQgSSBzaG91bGQgdGhpbmsgdHdpY2UgYmVmb3JlIGNhbGxpbmcgbXlzZWxmIGEgZ29vZCBkZXZlbG9wZXIuIFdpdGggdGhhdCBzYWlkLFxuICAgaXQgaXMgdGhlIGJlc3Qgc29sdXRpb24gSSBjb3VsZCBmaW5kIHRvIG11dGUgdGhlIHZpZGVvIHVudGlsIHRoZSAncGxheScgZXZlbnQgaGFwcGVucyAob24gbW9iaWxlIGRldmljZXMpIGFuZCB0aGUgcGx1Z2luIGNhbiBkZWNpZGUgd2hldGhlclxuICAgdG8gcGxheSB0aGUgYWQgb3Igbm90LlxuXG4gICBXZSBhbHNvIG5lZWQgdGhpcyBtb25rZXlwYXRjaCB0byBiZSBhYmxlIHRvIHBhdXNlIGFuZCByZXN1bWUgYW4gYWQgdXNpbmcgdGhlIHBsYXllcidzIEFQSVxuXG4gICBJZiB5b3UgaGF2ZSBhIGJldHRlciBzb2x1dGlvbiBwbGVhc2UgZG8gdGVsbCBtZS5cbiAgICovXG4gIGZ1bmN0aW9uIG1vbmtleVBhdGNoUGxheWVyQXBpKCkge1xuXG4gICAgLyoqXG4gICAgICogTW9ua2V5IHBhdGNoIG5lZWRlZCB0byBoYW5kbGUgZmlyc3RQbGF5IGFuZCByZXN1bWUgb2YgcGxheWluZyBhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSByZXN0b3JpbmcgYSBWQVNUIGFkLlxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XG4gICAgICovXG4gICAgdmFyIG9yaWdQbGF5ID0gcGxheWVyLnBsYXk7XG4gICAgcGxheWVyLnBsYXkgPSBmdW5jdGlvbiAoY2FsbE9yaWdQbGF5KSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XG4gICAgICAgIGZpcnN0UGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdW1lKGNhbGxPcmlnUGxheSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBmaXJzdFBsYXkoKSB7XG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzSVBob25lKCkpIHtcbiAgICAgICAgICBpZiAoIXZvbHVtZVNuYXBzaG90KSB7XG4gICAgICAgICAgICAgIHZvbHVtZVNuYXBzaG90ID0gc2F2ZVZvbHVtZVNuYXBzaG90KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5tdXRlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdQbGF5LmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3VtZShjYWxsT3JpZ1BsYXkpIHtcbiAgICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGxheSkge1xuICAgICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5yZXN1bWVBZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBcdGlmICghaXNWcGFpZFBsYXlpbmcoKSkge1xuICAgICAgICAgICAgICAgIG9yaWdQbGF5LmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgICAgIFx0fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIG1vbmtleSBwYXRjaCB0byBoYW5kbGUgcGF1c2Ugb2YgcGxheWluZyBhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGF1c2UgPSBwbGF5ZXIucGF1c2U7XG4gICAgcGxheWVyLnBhdXNlID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2UpIHtcbiAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BhdXNlKSB7XG4gICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5wYXVzZUFkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgXHRpZiAoIWlzVnBhaWRQbGF5aW5nKCkpIHtcbiAgICAgIFx0XHRvcmlnUGF1c2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIFx0fVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIG1vbmtleSBwYXRjaCB0byBoYW5kbGUgcGF1c2VkIHN0YXRlIG9mIHRoZSBwbGF5ZXIgd2hlbiBhZHMgYXJlIHBsYXlpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXG4gICAgICogQHJldHVybnMge3BsYXllcn1cbiAgICAgKi9cbiAgICB2YXIgb3JpZ1BhdXNlZCA9IHBsYXllci5wYXVzZWQ7XG4gICAgcGxheWVyLnBhdXNlZCA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BhdXNlZCkge1xuICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2VkKSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIudmFzdC5hZFVuaXQuaXNQYXVzZWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnUGF1c2VkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gaXNWcGFpZFBsYXlpbmcoKSB7XG5cdCAgcmV0dXJuIHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LlZQQUlEO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBZFBsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVRvVHJpZ2dlckZpcnN0UGxheSgpIHtcbiAgICBpZiAoaXNGaXJzdFBsYXkoKSkge1xuICBcdCAgd2luZG93Ll9tb2xTZXR0aW5ncy5maXJzdFBsYXkgPSBmYWxzZTtcbiAgICAgIC8vX2ZpcnN0UGxheSA9IGZhbHNlO1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuZmlyc3RQbGF5Jyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRGaXJzdFBsYXkoKSB7XG5cdCAgd2luZG93Ll9tb2xTZXR0aW5ncy5maXJzdFBsYXkgPSB0cnVlO1xuXHQgICAgLy9fZmlyc3RQbGF5ID0gdHJ1ZTtcbiAgICBibGFja1Bvc3Rlci5zaG93KCk7XG4gICAgcmVzdG9yZUNvbnRlbnRWb2x1bWUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRmlyc3RQbGF5KCkge1xuXHQgIHJldHVybiB3aW5kb3cuX21vbFNldHRpbmdzLmZpcnN0UGxheTtcblx0ICAgIC8vcmV0dXJuIF9maXJzdFBsYXk7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlVm9sdW1lU25hcHNob3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG11dGVkOiBwbGF5ZXIubXV0ZWQoKSxcbiAgICAgIHZvbHVtZTogcGxheWVyLnZvbHVtZSgpXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVDb250ZW50Vm9sdW1lKCkge1xuICAgIGlmICh2b2x1bWVTbmFwc2hvdCkge1xuICAgICAgLy9wbGF5ZXIuY3VycmVudFRpbWUoMCk7XG4gICAgICByZXN0b3JlVm9sdW1lU25hcHNob3Qodm9sdW1lU25hcHNob3QpO1xuICAgICAgdm9sdW1lU25hcHNob3QgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVWb2x1bWVTbmFwc2hvdChzbmFwc2hvdCkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNPYmplY3Qoc25hcHNob3QpKSB7XG4gICAgICBwbGF5ZXIudm9sdW1lKHNuYXBzaG90LnZvbHVtZSk7XG4gICAgICBwbGF5ZXIubXV0ZWQoc25hcHNob3QubXV0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCbGFja1Bvc3RlcigpIHtcbiAgICBpZiAoIWRvbS5oYXNDbGFzcyhibGFja1Bvc3Rlci5lbCgpLCAndmpzLWhpZGRlbicpKSB7XG4gICAgICBibGFja1Bvc3Rlci5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3R5bGVzKCkge1xuICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTdHlsZXMoKSB7XG5cdCAgcGxheWVyLm9mZigncGxheScsIHRyeVRvVHJpZ2dlckZpcnN0UGxheSk7XG5cdCAgcGxheWVyLm9mZigndmFzdC5yZXNldCcsIHJlc2V0Rmlyc3RQbGF5KTsvL0V2ZXJ5IHRpbWUgd2UgY2hhbmdlIHRoZSBzb3VyY2VzIHdlIHJlc2V0IHRoZSBmaXJzdCBwbGF5LlxuXHQgIHBsYXllci5vZmYoJ3Zhc3QuZmlyc3RQbGF5JywgcmVzdG9yZUNvbnRlbnRWb2x1bWUpO1xuXHQgIHBsYXllci5vZmYoJ2Vycm9yJywgaGlkZUJsYWNrUG9zdGVyKTsvL0lmIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBwbGF5ZXIgd2UgcmVtb3ZlIHRoZSBibGFja3Bvc3RlciB0byBzaG93IHRoZSBlcnIgbXNnXG5cdCAgcGxheWVyLm9mZigndmFzdC5hZFN0YXJ0JywgaGlkZUJsYWNrUG9zdGVyKTtcblx0ICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIGhpZGVCbGFja1Bvc3Rlcik7XG5cdCAgcGxheWVyLm9mZigndmFzdC5hZEVycm9yJywgaGlkZUJsYWNrUG9zdGVyKTtcblx0ICBwbGF5ZXIub2ZmKCd2YXN0LmFkU3RhcnQnLCBhZGRTdHlsZXMpO1xuXHQgIHBsYXllci5vZmYoJ3Zhc3QuYWRFbmQnLCByZW1vdmVTdHlsZXMpO1xuXHQgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgcmVtb3ZlU3R5bGVzKTtcblx0ICBcbiAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XG5cdCAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5jb250cm9sQmFyLnBsYXlUb2dnbGUuZWwoKSwgJ3Zqcy1lbmRlZCcpO1xuXHQgIFxuXHQgIGlmIChlcnJvckRpYWxvZykge1xuXHRcdCAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCAgZXJyb3JEaWFsb2cuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcblx0XHQgIH0sIDUwMCk7XG5cdCAgfVxuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgcG9zdGVyIGF0dHJpYnV0ZSBmcm9tIHRoZSB2aWRlbyBlbGVtZW50IHRlY2gsIGlmIHByZXNlbnQuIFdoZW5cbiAqIHJldXNpbmcgYSB2aWRlbyBlbGVtZW50IGZvciBtdWx0aXBsZSB2aWRlb3MsIHRoZSBwb3N0ZXIgaW1hZ2Ugd2lsbCBicmllZmx5XG4gKiByZWFwcGVhciB3aGlsZSB0aGUgbmV3IHNvdXJjZSBsb2Fkcy4gUmVtb3ZpbmcgdGhlIGF0dHJpYnV0ZSBhaGVhZCBvZiB0aW1lXG4gKiBwcmV2ZW50cyB0aGUgcG9zdGVyIGZyb20gc2hvd2luZyB1cCBiZXR3ZWVuIHZpZGVvcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwbGF5ZXIgVGhlIHZpZGVvanMgcGxheWVyIG9iamVjdFxuICovXG5wbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIGlmICh0ZWNoKSB7XG4gICAgdGVjaC5yZW1vdmVBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICB9XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBsaXN0ZW4gdG8gbWFueSBldmVudHMgdW50aWwgb25lIG9mIHRoZW0gZ2V0cyBmaXJlZCwgdGhlbiB3ZVxuICogZXhlY3V0ZSB0aGUgaGFuZGxlciBhbmQgdW5zdWJzY3JpYmUgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnM7XG4gKlxuICogQHBhcmFtIHBsYXllciBzcGVjaWZpYyBwbGF5ZXIgZnJvbSB3aGVyZSB0byBsaXN0ZW4gZm9yIHRoZSBldmVudHNcbiAqIEBwYXJhbSBldmVudHMgYXJyYXkgb2YgZXZlbnRzXG4gKiBAcGFyYW0gaGFuZGxlciBmdW5jdGlvbiB0byBleGVjdXRlIG9uY2Ugb25lIG9mIHRoZSBldmVudHMgZmlyZXNcbiAqL1xucGxheWVyVXRpbHMub25jZSA9IGZ1bmN0aW9uIG9uY2UocGxheWVyLCBldmVudHMsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBwbGF5ZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBwbGF5ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59O1xuXG4vL0FQTiB1dGlsc1xucGxheWVyVXRpbHMuc2hvd0JpZ1BsYXlCdXR0b24gPSBmdW5jdGlvbihwbGF5ZXIsIHNob3cpIHtcblx0dmFyIGJ1dHRvbiA9IHBsYXllci5iaWdQbGF5QnV0dG9uLmVsXztcblx0aWYgKGJ1dHRvbikge1xuXHRcdGlmIChzaG93KSB7XG5cdFx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRidXR0b24uc3R5bGUuekluZGV4ID0gOTk5OTk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0YnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRidXR0b24uc3R5bGUuekluZGV4ID0gJyc7XG5cdFx0fVxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllclV0aWxzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG4vKipcbiAqXG4gKiBJTVBPUlRBTlQgTk9URTogVGhpcyBmdW5jdGlvbiBjb21lcyBmcm9tIGFuZ3VsYXJKcyBhbmQgd2FzIG9yaWdpbmFsbHkgY2FsbGVkIHVybFJlc29sdmVcbiAqICAgICAgICAgICAgICAgICB5b3UgY2FuIHRha2UgYSBsb29rIGF0IHRoZSBvcmlnaW5hbCBjb2RlIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL21hc3Rlci9zcmMvbmcvdXJsVXRpbHMuanNcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3Igbm9uLUlFIGJyb3dzZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBc3NpZ25pbmcgYSBVUkwgdG8gdGhlIGhyZWYgcHJvcGVydHkgb2YgYW4gYW5jaG9yIERPTSBub2RlLCBldmVuIG9uZSBhdHRhY2hlZCB0byB0aGUgRE9NLFxuICogcmVzdWx0cyBib3RoIGluIHRoZSBub3JtYWxpemluZyBhbmQgcGFyc2luZyBvZiB0aGUgVVJMLiAgTm9ybWFsaXppbmcgbWVhbnMgdGhhdCBhIHJlbGF0aXZlXG4gKiBVUkwgd2lsbCBiZSByZXNvbHZlZCBpbnRvIGFuIGFic29sdXRlIFVSTCBpbiB0aGUgY29udGV4dCBvZiB0aGUgYXBwbGljYXRpb24gZG9jdW1lbnQuXG4gKiBQYXJzaW5nIG1lYW5zIHRoYXQgdGhlIGFuY2hvciBub2RlJ3MgaG9zdCwgaG9zdG5hbWUsIHByb3RvY29sLCBwb3J0LCBwYXRobmFtZSBhbmQgcmVsYXRlZFxuICogcHJvcGVydGllcyBhcmUgYWxsIHBvcHVsYXRlZCB0byByZWZsZWN0IHRoZSBub3JtYWxpemVkIFVSTC4gIFRoaXMgYXBwcm9hY2ggaGFzIHdpZGVcbiAqIGNvbXBhdGliaWxpdHkgLSBTYWZhcmkgMSssIE1vemlsbGEgMSssIE9wZXJhIDcrLGUgZXRjLiAgU2VlXG4gKiBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3IgSUVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSUUgPj0gOCBhbmQgPD0gMTAgbm9ybWFsaXplcyB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gdGhlIGFuY2hvciBub2RlIHNpbWlsYXIgdG8gdGhlIG90aGVyXG4gKiBicm93c2Vycy4gIEhvd2V2ZXIsIHRoZSBwYXJzZWQgY29tcG9uZW50cyB3aWxsIG5vdCBiZSBzZXQgaWYgdGhlIFVSTCBhc3NpZ25lZCBkaWQgbm90IHNwZWNpZnlcbiAqIHRoZW0uICAoZS5nLiBpZiB5b3UgYXNzaWduIGEuaHJlZiA9IFwiZm9vXCIsIHRoZW4gYS5wcm90b2NvbCwgYS5ob3N0LCBldGMuIHdpbGwgYmUgZW1wdHkuKSAgV2VcbiAqIHdvcmsgYXJvdW5kIHRoYXQgYnkgcGVyZm9ybWluZyB0aGUgcGFyc2luZyBpbiBhIDJuZCBzdGVwIGJ5IHRha2luZyBhIHByZXZpb3VzbHkgbm9ybWFsaXplZFxuICogVVJMIChlLmcuIGJ5IGFzc2lnbmluZyB0byBhLmhyZWYpIGFuZCBhc3NpZ25pbmcgaXQgYS5ocmVmIGFnYWluLiAgVGhpcyBjb3JyZWN0bHkgcG9wdWxhdGVzIHRoZVxuICogcHJvcGVydGllcyBzdWNoIGFzIHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCwgZXRjLlxuICpcbiAqIElFNyBkb2VzIG5vdCBub3JtYWxpemUgdGhlIFVSTCB3aGVuIGFzc2lnbmVkIHRvIGFuIGFuY2hvciBub2RlLiAgKEFwcGFyZW50bHksIGl0IGRvZXMsIGlmIG9uZVxuICogdXNlcyB0aGUgaW5uZXIgSFRNTCBhcHByb2FjaCB0byBhc3NpZ24gdGhlIFVSTCBhcyBwYXJ0IG9mIGFuIEhUTUwgc25pcHBldCAtXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NzI3MjkpICBIb3dldmVyLCBzZXR0aW5nIGltZ1tzcmNdIGRvZXMgbm9ybWFsaXplIHRoZSBVUkwuXG4gKiBVbmZvcnR1bmF0ZWx5LCBzZXR0aW5nIGltZ1tzcmNdIHRvIHNvbWV0aGluZyBsaWtlIFwiamF2YXNjcmlwdDpmb29cIiBvbiBJRSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICogU2luY2UgdGhlIHByaW1hcnkgdXNhZ2UgZm9yIG5vcm1hbGl6aW5nIFVSTHMgaXMgdG8gc2FuaXRpemUgc3VjaCBVUkxzLCB3ZSBjYW4ndCB1c2UgdGhhdFxuICogbWV0aG9kIGFuZCBJRSA8IDggaXMgdW5zdXBwb3J0ZWQuXG4gKlxuICogUmVmZXJlbmNlczpcbiAqICAgaHR0cDovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEFuY2hvckVsZW1lbnRcbiAqICAgaHR0cDovL3d3dy5hcHRhbmEuY29tL3JlZmVyZW5jZS9odG1sL2FwaS9IVE1MQW5jaG9yRWxlbWVudC5odG1sXG4gKiAgIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL3B1bGwvMjkwMlxuICogICBodHRwOi8vamFtZXMucGFkb2xzZXkuY29tL2phdmFzY3JpcHQvcGFyc2luZy11cmxzLXdpdGgtdGhlLWRvbS9cbiAqXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZC5cbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxpemVzIGFuZCBwYXJzZXMgYSBVUkwuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIFVSTCBhcyBhIGRpY3Rpb25hcnkuXG4gKlxuICogICB8IG1lbWJlciBuYW1lICAgfCBEZXNjcmlwdGlvbiAgICB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBocmVmICAgICAgICAgIHwgQSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIFVSTCBpZiBpdCB3YXMgbm90IGFuIGFic29sdXRlIFVSTCB8XG4gKiAgIHwgcHJvdG9jb2wgICAgICB8IFRoZSBwcm90b2NvbCBpbmNsdWRpbmcgdGhlIHRyYWlsaW5nIGNvbG9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICB8IGhvc3QgICAgICAgICAgfCBUaGUgaG9zdCBhbmQgcG9ydCAoaWYgdGhlIHBvcnQgaXMgbm9uLWRlZmF1bHQpIG9mIHRoZSBub3JtYWxpemVkVXJsICAgIHxcbiAqICAgfCBzZWFyY2ggICAgICAgIHwgVGhlIHNlYXJjaCBwYXJhbXMsIG1pbnVzIHRoZSBxdWVzdGlvbiBtYXJrICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgIHwgaGFzaCAgICAgICAgICB8IFRoZSBoYXNoIHN0cmluZywgbWludXMgdGhlIGhhc2ggc3ltYm9sXG4gKiAgIHwgaG9zdG5hbWUgICAgICB8IFRoZSBob3N0bmFtZVxuICogICB8IHBvcnQgICAgICAgICAgfCBUaGUgcG9ydCwgd2l0aG91dCBcIjpcIlxuICogICB8IHBhdGhuYW1lICAgICAgfCBUaGUgcGF0aG5hbWUsIGJlZ2lubmluZyB3aXRoIFwiL1wiXG4gKlxuICovXG5cbnZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuLyoqXG4gKiBkb2N1bWVudE1vZGUgaXMgYW4gSUUtb25seSBwcm9wZXJ0eVxuICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2NjMTk2OTg4KHY9dnMuODUpLmFzcHhcbiAqL1xudmFyIG1zaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cbmZ1bmN0aW9uIHVybFBhcnRzKHVybCkge1xuICB2YXIgaHJlZiA9IHVybDtcblxuICBpZiAobXNpZSkge1xuICAgIC8vIE5vcm1hbGl6ZSBiZWZvcmUgcGFyc2UuICBSZWZlciBJbXBsZW1lbnRhdGlvbiBOb3RlcyBvbiB3aHkgdGhpcyBpc1xuICAgIC8vIGRvbmUgaW4gdHdvIHN0ZXBzIG9uIElFLlxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XG4gICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gIH1cblxuICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gIHJldHVybiB7XG4gICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgIHBvcnQ6IHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHVybFBhcnNpbmdOb2RlLnBvcnQpPyB1cmxQYXJzaW5nTm9kZS5wb3J0OiA4MCxcbiAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKVxuICAgICAgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgOiAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICB9O1xufVxuXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGEgcXVlcnkgc3RyaW5nIChzZWFyY2ggcGFydCBvZiBhIHVybCkgYW5kIHJldHVybnMgYSBkaWN0aW9uYXJ5IHdpdGhcbiAqIHRoZSBkaWZmZXJlbnQga2V5IHZhbHVlIHBhaXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gcXMgcXVlcnlTdHJpbmdcbiAqL1xuZnVuY3Rpb24gcXVlcnlTdHJpbmdUb09iaihxcywgY29uZCkge1xuICB2YXIgcGFpcnMsIHFzT2JqO1xuXG4gIGNvbmQgPSB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25kKT8gY29uZCA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHFzID0gcXMudHJpbSgpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG4gIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcbiAgcXNPYmogPSB7fTtcblxuICB1dGlsaXRpZXMuZm9yRWFjaChwYWlycywgZnVuY3Rpb24gKHBhaXIpIHtcbiAgICB2YXIga2V5VmFsdWUsIGtleSwgdmFsdWU7XG4gICAgaWYgKHBhaXIgIT09ICcnKSB7XG4gICAgICBrZXlWYWx1ZSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgIGtleSA9IGtleVZhbHVlWzBdO1xuICAgICAgdmFsdWUgPSBrZXlWYWx1ZVsxXTtcbiAgICAgIGlmKGNvbmQoa2V5LCB2YWx1ZSkpe1xuICAgICAgICBxc09ialtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcXNPYmo7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuIG9iamVjdCBhbmQgc2VyaWFsaXplcyBpdCBpbnRvIGEgcXVlcnkgc3RyaW5nIHdpdGhvdXQgdGhlIGxlYWRpbmcgJz8nXG4gKiBAcGFyYW0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBvYmpUb1F1ZXJ5U3RyaW5nKG9iaikge1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgdXRpbGl0aWVzLmZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVybFBhcnRzOiB1cmxQYXJ0cyxcbiAgcXVlcnlTdHJpbmdUb09iajogcXVlcnlTdHJpbmdUb09iaixcbiAgb2JqVG9RdWVyeVN0cmluZzogb2JqVG9RdWVyeVN0cmluZ1xufTtcbiIsIi8qanNoaW50IHVudXNlZDpmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBOT0RFX1RZUEVfRUxFTUVOVCA9IDE7XG52YXIgU05BS0VfQ0FTRV9SRUdFWFAgPSAvW0EtWl0vZztcbnZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKyQvaTtcbi8qanNsaW50IG1heGxlbjogNTAwICovXG52YXIgSVNPODA4Nl9SRUdFWFAgPSAvXihbXFwrLV0/XFxkezR9KD8hXFxkezJ9XFxiKSkoKC0/KSgoMFsxLTldfDFbMC0yXSkoXFwzKFsxMl1cXGR8MFsxLTldfDNbMDFdKSk/fFcoWzAtNF1cXGR8NVswLTJdKSgtP1sxLTddKT98KDAwWzEtOV18MFsxLTldXFxkfFsxMl1cXGR7Mn18MyhbMC01XVxcZHw2WzEtNl0pKSkoW1RcXHNdKCgoWzAxXVxcZHwyWzAtM10pKCg6PylbMC01XVxcZCk/fDI0XFw6PzAwKShbXFwuLF1cXGQrKD8hOikpPyk/KFxcMTdbMC01XVxcZChbXFwuLF1cXGQrKT8pPyhbelpdfChbXFwrLV0pKFswMV1cXGR8MlswLTNdKTo/KFswLTVdXFxkKT8pPyk/KT8kLztcblxuXG5mdW5jdGlvbiBub29wKCl7IH1cblxuZnVuY3Rpb24gaXNOdWxsKG8pIHtcbiAgcmV0dXJuIG8gPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZChvKXtcbiAgcmV0dXJuIG8gIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQobyl7XG4gIHJldHVybiBvID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKG51bSl7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNPYmplY3Qob2JqKSAmJiBvYmoud2luZG93ID09PSBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJyYXkpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBhcnJheSApID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB1dGlsaXRpZXMuaXNXaW5kb3cob2JqKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihvYmopIHx8IHV0aWxpdGllcy5pc1VuZGVmaW5lZChvYmopKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGg7XG5cbiAgaWYgKG9iai5ub2RlVHlwZSA9PT0gTk9ERV9UWVBFX0VMRU1FTlQgJiYgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKG9iaikgfHwgdXRpbGl0aWVzLmlzQXJyYXkob2JqKSB8fCBsZW5ndGggPT09IDAgfHxcbiAgICB0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSAmJiBzdHIubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc05vdEVtcHR5U3RyaW5nKHN0cikge1xuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikgJiYgc3RyLmxlbmd0aCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gYXJyYXlMaWtlT2JqVG9BcnJheShhcmdzKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gIHZhciBrZXksIGxlbmd0aDtcbiAgaWYgKG9iaikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIGhhc093blByb3BlcnR5IGV4aXN0cyxcbiAgICAgICAgLy8gYXMgb24gSUU4IHRoZSByZXN1bHQgb2YgcXVlcnlTZWxlY3RvckFsbCBpcyBhbiBvYmplY3Qgd2l0aG91dCBhIGhhc093blByb3BlcnR5IGZ1bmN0aW9uXG4gICAgICAgIGlmIChrZXkgIT09ICdwcm90b3R5cGUnICYmIGtleSAhPT0gJ2xlbmd0aCcgJiYga2V5ICE9PSAnbmFtZScgJiYgKCFvYmouaGFzT3duUHJvcGVydHkgfHwgb2JqLmhhc093blByb3BlcnR5KGtleSkpKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgIHZhciBpc1ByaW1pdGl2ZSA9IHR5cGVvZiBvYmogIT09ICdvYmplY3QnO1xuICAgICAgZm9yIChrZXkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSB8fCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvYmouZm9yRWFjaCAmJiBvYmouZm9yRWFjaCAhPT0gZm9yRWFjaCkge1xuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQsIG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gc25ha2VfY2FzZShuYW1lLCBzZXBhcmF0b3IpIHtcbiAgc2VwYXJhdG9yID0gc2VwYXJhdG9yIHx8ICdfJztcbiAgcmV0dXJuIG5hbWUucmVwbGFjZShTTkFLRV9DQVNFX1JFR0VYUCwgZnVuY3Rpb24obGV0dGVyLCBwb3MpIHtcbiAgICByZXR1cm4gKHBvcyA/IHNlcGFyYXRvciA6ICcnKSArIGxldHRlci50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsKXtcbiAgaWYoIXV0aWxpdGllcy5pc1N0cmluZyhlbWFpbCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdChlbWFpbC50cmltKCkpO1xufVxuXG5mdW5jdGlvbiBleHRlbmQgKG9iaikge1xuICB2YXIgYXJnLCBpLCBrO1xuICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJnID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAoayBpbiBhcmcpIHtcbiAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qob2JqW2tdKSAmJiAhaXNOdWxsKG9ialtrXSkgJiYgaXNPYmplY3QoYXJnW2tdKSl7XG4gICAgICAgICAgb2JqW2tdID0gZXh0ZW5kKHt9LCBvYmpba10sIGFyZ1trXSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBvYmpba10gPSBhcmdba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKXtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBkZWNhcGl0YWxpemUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2Qgd29ya3MgdGhlIHNhbWUgd2F5IGFycmF5LnByb3RvdHlwZS5tYXAgd29ya3MgYnV0IGlmIHRoZSB0cmFuc2Zvcm1lciByZXR1cm5zIHVuZGVmaW5lLCB0aGVuXG4gKiBpdCB3b24ndCBiZSBhZGRlZCB0byB0aGUgdHJhbnNmb3JtZWQgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybUFycmF5KGFycmF5LCB0cmFuc2Zvcm1lcikge1xuICB2YXIgdHJhbnNmb3JtZWRBcnJheSA9IFtdO1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpe1xuICAgIHZhciB0cmFuc2Zvcm1lZEl0ZW0gPSB0cmFuc2Zvcm1lcihpdGVtLCBpbmRleCk7XG4gICAgaWYodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFuc2Zvcm1lZEl0ZW0pKSB7XG4gICAgICB0cmFuc2Zvcm1lZEFycmF5LnB1c2godHJhbnNmb3JtZWRJdGVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZEFycmF5O1xufVxuXG5mdW5jdGlvbiB0b0ZpeGVkRGlnaXRzKG51bSwgZGlnaXRzKSB7XG4gIHZhciBmb3JtYXR0ZWROdW0gPSBudW0gKyAnJztcbiAgZGlnaXRzID0gdXRpbGl0aWVzLmlzTnVtYmVyKGRpZ2l0cykgPyBkaWdpdHMgOiAwO1xuICBudW0gPSB1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSA/IG51bSA6IHBhcnNlSW50KG51bSwgMTApO1xuICBpZih1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSAmJiAhaXNOYU4obnVtKSl7XG4gICAgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XG4gICAgd2hpbGUoZm9ybWF0dGVkTnVtLmxlbmd0aCA8IGRpZ2l0cykge1xuICAgICAgZm9ybWF0dGVkTnVtID0gJzAnICsgZm9ybWF0dGVkTnVtO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkTnVtO1xuICB9XG4gIHJldHVybiBOYU4gKyAnJztcbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBwcmV2aW91c0NhbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIChkZWxheSArIDEpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAoKHRpbWUgLSBwcmV2aW91c0NhbGwpID49IGRlbGF5KSB7XG4gICAgICBwcmV2aW91c0NhbGwgPSB0aW1lO1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlIChjYWxsYmFjaywgd2FpdCkge1xuICB2YXIgdGltZW91dElkO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKXtcbiAgICBpZih0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH0sIHdhaXQpO1xuICB9O1xufVxuXG4vLyBhIGZ1bmN0aW9uIGRlc2lnbmVkIHRvIGJsb3cgdXAgdGhlIHN0YWNrIGluIGEgbmFpdmUgd2F5XG4vLyBidXQgaXQgaXMgb2sgZm9yIHZpZGVvSnMgY2hpbGRyZW4gY29tcG9uZW50c1xuZnVuY3Rpb24gdHJlZVNlYXJjaChyb290LCBnZXRDaGlsZHJlbiwgZm91bmQpe1xuICB2YXIgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbihyb290KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgaWYgKGZvdW5kKGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBlbCA9IHRyZWVTZWFyY2goY2hpbGRyZW5baV0sIGdldENoaWxkcmVuLCBmb3VuZCk7XG4gICAgICBpZiAoZWwpe1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVjaG9Gbih2YWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9O1xufVxuXG4vL05vdGU6IFN1cHBvcnRlZCBmb3JtYXRzIGNvbWUgZnJvbSBodHRwOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lXG4vLyBhbmQgdGhlIGlzbzg2MDEgcmVnZXggY29tZXMgZnJvbSBodHRwOi8vd3d3LnBlbGFnb2Rlc2lnbi5jb20vYmxvZy8yMDA5LzA1LzIwL2lzby04NjAxLWRhdGUtdmFsaWRhdGlvbi10aGF0LWRvZXNudC1zdWNrL1xuZnVuY3Rpb24gaXNJU084NjAxKHZhbHVlKSB7XG4gIGlmKHV0aWxpdGllcy5pc051bWJlcih2YWx1ZSkpe1xuICAgIHZhbHVlID0gdmFsdWUgKyAnJzsgIC8vd2UgbWFrZSBzdXJlIHRoYXQgd2UgYXJlIHdvcmtpbmcgd2l0aCBzdHJpbmdzXG4gIH1cblxuICBpZighdXRpbGl0aWVzLmlzU3RyaW5nKHZhbHVlKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIElTTzgwODZfUkVHRVhQLnRlc3QodmFsdWUudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIEJyb3dzZXIgaXMgSUU5IGFuZCBiZWxvd1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciB2ZXJzaW9uID0gdXRpbGl0aWVzLmdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKG5hdmlnYXRvcik7XG4gIGlmICh2ZXJzaW9uID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uIDwgMTA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cbiAqIFNvdXJjZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwOSh2PXZzLjg1KS5hc3B4XG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cbiAqL1xuZnVuY3Rpb24gZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKSB7XG4gIHZhciBydiA9IC0xO1xuXG4gIGlmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJykge1xuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIk1TSUUgKFswLTldezEsfVtcXC4wLTldezAsfSlcIik7XG4gICAgdmFyIHJlcyA9IHJlLmV4ZWModWEpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIHJ2ID0gcGFyc2VGbG9hdChyZXNbMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydjtcbn1cblxuLyoqKiBNb2JpbGUgVXRpbGl0eSBmdW5jdGlvbnMgKioqL1xuZnVuY3Rpb24gaXNJRGV2aWNlKCkge1xuICByZXR1cm4gL2lQKGhvbmV8YWQpLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc01vYmlsZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfGFkfG9kKXxBbmRyb2lkfFdpbmRvd3MgUGhvbmUvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbmZ1bmN0aW9uIGlzSVBob25lKCkge1xuICByZXR1cm4gL2lQKGhvbmV8b2QpLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc0FuZHJvaWQoKSB7XG4gIHJldHVybiAvQW5kcm9pZC8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxudmFyIHV0aWxpdGllcyA9IHtcbiAgX1VBOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBub29wOiBub29wLFxuICBpc051bGw6IGlzTnVsbCxcbiAgaXNEZWZpbmVkOiBpc0RlZmluZWQsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzRW1wdHlTdHJpbmc6IGlzRW1wdHlTdHJpbmcsXG4gIGlzTm90RW1wdHlTdHJpbmc6IGlzTm90RW1wdHlTdHJpbmcsXG4gIGFycmF5TGlrZU9ialRvQXJyYXk6IGFycmF5TGlrZU9ialRvQXJyYXksXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIHNuYWtlX2Nhc2U6IHNuYWtlX2Nhc2UsXG4gIGlzVmFsaWRFbWFpbDogaXNWYWxpZEVtYWlsLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcbiAgZGVjYXBpdGFsaXplOiBkZWNhcGl0YWxpemUsXG4gIHRyYW5zZm9ybUFycmF5OiB0cmFuc2Zvcm1BcnJheSxcbiAgdG9GaXhlZERpZ2l0czogdG9GaXhlZERpZ2l0cyxcbiAgdGhyb3R0bGU6IHRocm90dGxlLFxuICBkZWJvdW5jZTogZGVib3VuY2UsXG4gIHRyZWVTZWFyY2g6IHRyZWVTZWFyY2gsXG4gIGVjaG9GbjogZWNob0ZuLFxuICBpc0lTTzg2MDE6IGlzSVNPODYwMSxcbiAgaXNPbGRJRTogaXNPbGRJRSxcbiAgZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb246IGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uLFxuICBpc0lEZXZpY2U6IGlzSURldmljZSxcbiAgaXNNb2JpbGU6IGlzTW9iaWxlLFxuICBpc0lQaG9uZTogaXNJUGhvbmUsXG4gIGlzQW5kcm9pZDogaXNBbmRyb2lkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxpdGllcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgeG1sID0ge307XG5cbnhtbC5zdHJUb1hNTERvYyA9IGZ1bmN0aW9uIHN0clRvWE1MRG9jKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xuICAvL0lFIDhcbiAgaWYodHlwZW9mIHdpbmRvdy5ET01QYXJzZXIgPT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgeG1sRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTERPTScpO1xuICAgIHhtbERvY3VtZW50LmFzeW5jID0gZmFsc2U7XG4gICAgeG1sRG9jdW1lbnQubG9hZFhNTChzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcbiAgICByZXR1cm4geG1sRG9jdW1lbnQ7XG4gIH1cblxuICByZXR1cm4gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XG5cbiAgZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB2YXIgcGFyc2VkRG9jdW1lbnQ7XG5cbiAgICAvL05vdGU6IFRoaXMgdHJ5IGNhdGNoIGlzIHRvIGRlYWwgd2l0aCB0aGUgZmFjdCB0aGF0IG9uIElFIHBhcnNlci5wYXJzZUZyb21TdHJpbmcgZG9lcyB0aHJvdyBhbiBlcnJvciBidXQgdGhlIHJlc3Qgb2YgdGhlIGJyb3dzZXJzIGRvbid0LlxuICAgIHRyeSB7XG4gICAgICBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSwgXCJhcHBsaWNhdGlvbi94bWxcIik7XG5cbiAgICAgIGlmKGlzUGFyc2VFcnJvcihwYXJzZWREb2N1bWVudCkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSkpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ4bWwuc3RyVG9YTUxET0M6IEVycm9yIHBhcnNpbmcgdGhlIHN0cmluZzogJ1wiICsgc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHtcbiAgICB0cnkgeyAvLyBwYXJzZXIgYW5kIHBhcnNlcmVycm9yTlMgY291bGQgYmUgY2FjaGVkIG9uIHN0YXJ0dXAgZm9yIGVmZmljaWVuY3lcbiAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCksXG4gICAgICAgIGVycm9uZW91c1BhcnNlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZygnSU5WQUxJRCcsICd0ZXh0L3htbCcpLFxuICAgICAgICBwYXJzZXJlcnJvck5TID0gZXJyb25lb3VzUGFyc2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKVswXS5uYW1lc3BhY2VVUkk7XG5cbiAgICAgIGlmIChwYXJzZXJlcnJvck5TID09PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpIHtcbiAgICAgICAgLy8gSW4gUGhhbnRvbUpTIHRoZSBwYXJzZWVycm9yIGVsZW1lbnQgZG9lc24ndCBzZWVtIHRvIGhhdmUgYSBzcGVjaWFsIG5hbWVzcGFjZSwgc28gd2UgYXJlIGp1c3QgZ3Vlc3NpbmcgaGVyZSA6KFxuICAgICAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGggPiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhwYXJzZXJlcnJvck5TLCAncGFyc2VyZXJyb3InKS5sZW5ndGggPiAwO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vTm90ZSBvbiBJRSBwYXJzZVN0cmluZyB0aHJvd3MgYW4gZXJyb3IgYnkgaXRzZWxmIGFuZCBpdCB3aWxsIG5ldmVyIHJlYWNoIHRoaXMgY29kZS4gQmVjYXVzZSBpdCB3aWxsIGhhdmUgZmFpbGVkIGJlZm9yZVxuICAgIH1cbiAgfVxufTtcblxueG1sLnBhcnNlVGV4dCA9IGZ1bmN0aW9uIHBhcnNlVGV4dCAoc1ZhbHVlKSB7XG4gIGlmICgvXlxccyokLy50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIG51bGw7IH1cbiAgaWYgKC9eKD86dHJ1ZXxmYWxzZSkkL2kudGVzdChzVmFsdWUpKSB7IHJldHVybiBzVmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCI7IH1cbiAgaWYgKGlzRmluaXRlKHNWYWx1ZSkpIHsgcmV0dXJuIHBhcnNlRmxvYXQoc1ZhbHVlKTsgfVxuICBpZiAodXRpbGl0aWVzLmlzSVNPODYwMShzVmFsdWUpKSB7IHJldHVybiBuZXcgRGF0ZShzVmFsdWUpOyB9XG4gIHJldHVybiBzVmFsdWUudHJpbSgpO1xufTtcblxueG1sLkpYT05UcmVlID0gZnVuY3Rpb24gSlhPTlRyZWUgKG9YTUxQYXJlbnQpIHtcbiAgdmFyIHBhcnNlVGV4dCA9IHhtbC5wYXJzZVRleHQ7XG5cbiAgLy9UaGUgZG9jdW1lbnQgb2JqZWN0IGlzIGFuIGVzcGVjaWFsIG9iamVjdCB0aGF0IGl0IG1heSBtaXNzIHNvbWUgZnVuY3Rpb25zIG9yIGF0dHJzIGRlcGVuZGluZyBvbiB0aGUgYnJvd3Nlci5cbiAgLy9UbyBwcmV2ZW50IHRoaXMgcHJvYmxlbSB3aXRoIGNyZWF0ZSB0aGUgSlhPTlRyZWUgdXNpbmcgdGhlIHJvb3QgY2hpbGROb2RlIHdoaWNoIGlzIGEgZnVsbHkgZmxlc2hlZCBub2RlIG9uIGFsbCBzdXBwb3J0ZWRcbiAgLy9icm93c2Vycy5cbiAgaWYob1hNTFBhcmVudC5kb2N1bWVudEVsZW1lbnQpe1xuICAgIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgfVxuXG4gIGlmIChvWE1MUGFyZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHZhciBzQ29sbGVjdGVkVHh0ID0gXCJcIjtcbiAgICBmb3IgKHZhciBvTm9kZSwgc1Byb3AsIHZDb250ZW50LCBuSXRlbSA9IDA7IG5JdGVtIDwgb1hNTFBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aDsgbkl0ZW0rKykge1xuICAgICAgb05vZGUgPSBvWE1MUGFyZW50LmNoaWxkTm9kZXMuaXRlbShuSXRlbSk7XG4gICAgICAvKmpzaGludCBiaXR3aXNlOiBmYWxzZSovXG4gICAgICBpZiAoKG9Ob2RlLm5vZGVUeXBlIC0gMSB8IDEpID09PSAzKSB7IHNDb2xsZWN0ZWRUeHQgKz0gb05vZGUubm9kZVR5cGUgPT09IDMgPyBvTm9kZS5ub2RlVmFsdWUudHJpbSgpIDogb05vZGUubm9kZVZhbHVlOyB9XG4gICAgICBlbHNlIGlmIChvTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAhb05vZGUucHJlZml4KSB7XG4gICAgICAgIHNQcm9wID0gdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvTm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIHZDb250ZW50ID0gbmV3IHhtbC5KWE9OVHJlZShvTm9kZSk7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHNQcm9wKSkge1xuICAgICAgICAgIGlmICh0aGlzW3NQcm9wXS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHsgdGhpc1tzUHJvcF0gPSBbdGhpc1tzUHJvcF1dOyB9XG4gICAgICAgICAgdGhpc1tzUHJvcF0ucHVzaCh2Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7IHRoaXNbc1Byb3BdID0gdkNvbnRlbnQ7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNDb2xsZWN0ZWRUeHQpIHsgdGhpcy5rZXlWYWx1ZSA9IHBhcnNlVGV4dChzQ29sbGVjdGVkVHh0KTsgfVxuICB9XG5cbiAgLy9JRTggU3R1cGlkIGZpeFxuICB2YXIgaGFzQXR0ciA9IHR5cGVvZiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnPyBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoID4gMDogb1hNTFBhcmVudC5oYXNBdHRyaWJ1dGVzKCk7XG4gIGlmIChoYXNBdHRyKSB7XG4gICAgdmFyIG9BdHRyaWI7XG4gICAgZm9yICh2YXIgbkF0dHJpYiA9IDA7IG5BdHRyaWIgPCBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBuQXR0cmliKyspIHtcbiAgICAgIG9BdHRyaWIgPSBvWE1MUGFyZW50LmF0dHJpYnV0ZXMuaXRlbShuQXR0cmliKTtcbiAgICAgIHRoaXNbXCJAXCIgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9BdHRyaWIubmFtZSldID0gcGFyc2VUZXh0KG9BdHRyaWIudmFsdWUudHJpbSgpKTtcbiAgICB9XG4gIH1cbn07XG5cbnhtbC5KWE9OVHJlZS5wcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcbiAgcmV0dXJuIHRoaXNbJ0AnICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShhdHRyKV07XG59O1xuXG54bWwudG9KWE9OVHJlZSA9IGZ1bmN0aW9uIHRvSlhPTlRyZWUoeG1sU3RyaW5nKXtcbiAgdmFyIHhtbERvYyA9IHhtbC5zdHJUb1hNTERvYyh4bWxTdHJpbmcpO1xuICByZXR1cm4gbmV3IHhtbC5KWE9OVHJlZSh4bWxEb2MpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUga2V5dmFsdWUgb2YgYSBKWE9OVHJlZSBvYmpcbiAqXG4gKiBAcGFyYW0geG1sT2JqIHtKWE9OVHJlZX1cbiAqIHJldHVybiB0aGUga2V5IHZhbHVlIG9yIHVuZGVmaW5lZDtcbiAqL1xueG1sLmtleVZhbHVlID0gZnVuY3Rpb24gZ2V0S2V5VmFsdWUoeG1sT2JqKSB7XG4gIGlmKHhtbE9iail7XG4gICAgcmV0dXJuIHhtbE9iai5rZXlWYWx1ZTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxueG1sLmF0dHIgPSBmdW5jdGlvbiBnZXRBdHRyVmFsdWUoeG1sT2JqLCBhdHRyKSB7XG4gIGlmKHhtbE9iaikge1xuICAgIHJldHVybiB4bWxPYmpbJ0AnICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShhdHRyKV07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnhtbC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGVYTUwoc3RyKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyZhcG9zOycpO1xufTtcblxueG1sLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZVhNTChzdHIpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyZhcG9zOy9nLCBcIidcIilcbiAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpXG4gICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxuICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0geG1sO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL0BleGNsdWRlXG52YXIgdmlkZW9qcyA9IHdpbmRvdy52aWRlb2pzIHx8IHtcblx0Z2V0Q29tcG9uZW50IDogZnVuY3Rpb24oKSB7fSxcblx0ZXh0ZW5kIDogZnVuY3Rpb24oKSB7fSxcblx0cmVnaXN0ZXJDb21wb25lbnQgOiBmdW5jdGlvbigpIHt9LFxuXHRyZWdpc3RlclBsdWdpbiA6IGZ1bmN0aW9uKCkge31cbn07XG4vLyBAZW5kZXhjbHVkZVxuXG53aW5kb3cuX21vbFNldHRpbmdzID0gbnVsbDtcblxucmVxdWlyZSgnLi9wbHVnaW4vY29tcG9uZW50cy9hZHMtbGFiZWxfNScpO1xucmVxdWlyZSgnLi9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNScpO1xuXG5jb25zb2xlLmxvZygnQXBwTmV4dXMgTWFpbE9ubGluZSBwbHVnaW4gdmVyc2lvbiAxLjEuMjUnKTtcblxudmFyIHZpZGVvSnNWQVNUID0gcmVxdWlyZSgnLi9wbHVnaW4vdmlkZW9qcy52YXN0LnZwYWlkJyk7XG5cbmlmICh2aWRlb2pzLnJlZ2lzdGVyUGx1Z2luKSB7XG5cdHZpZGVvanMucmVnaXN0ZXJQbHVnaW4oJ3Zhc3RDbGllbnQnLCB2aWRlb0pzVkFTVCk7XG59XG5lbHNlIHtcblx0dmlkZW9qcy5wbHVnaW4oJ3Zhc3RDbGllbnQnLCB2aWRlb0pzVkFTVCk7XG59XG4iXX0=
