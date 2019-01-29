/*jshint unused:false */
"use strict";

var _verbosity = 0;
var _prefix = "[MOL-Plugin";
var _playerId = '';

function setPlayerId (id)
{
  _playerId = id;
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
    if (_verbosity < 1)
    {
      return;
    }

    //handleMsg (console.error, arguments);
    handleMsg (console.warn, arguments);      //VIDLA-4606: Switched to use warning-level logging, since these are technically not unhandled errors
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
