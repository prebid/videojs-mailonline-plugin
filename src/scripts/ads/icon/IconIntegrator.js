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

function IconIntegrator (player) {
  if (!(this instanceof IconIntegrator)) {
    return new IconIntegrator(player);
  }

  this.player = player;
  this.icons = [];
  this.controlBarTimer = null;
  this.cbHidden = null;
}

IconIntegrator.prototype.renderIcons = function renderIcons (icons, callback) {
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

IconIntegrator.prototype._createIcons = function createIcons (icons, callback) {

  // **** Local Functions **** //
  function getContent (icon) {
    var content = null;
    if (icon.staticResource) {
      var imageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      if (imageTypes.indexOf(icon.creativeType)) {
        content = "<img src='" + icon.staticResource + "' width='" + icon.width + "' height='" + icon.height + "'>";
      }
    }
    /* else if (icon.htmlResource) {
      // to do ...
    }
    else if (icon.iframeResource) {
      // to do ...
    } */
    return content;
  }

  function getIconByProgram (program) {
    for (var i = 0; i < that.icons.length; i++) {
      if (that.icons[i].icon.program === program) {
        return i;
      }
    }
    return -1;
  }

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
    callback(new VASTError('Could not create AdIcon content', 900));
  }

};

IconIntegrator.prototype._setupEvents = function setupEvents (callback) {
  var player = this.player;
  var that = this;

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adSkip', 'adStop'], function () {
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

IconIntegrator.prototype._renderIcons = function renderIcons () {
  var player = this.player;
  var that = this;

  for (var i = 0; i < this.icons.length; i++) {
    var icon = this.icons[i];

    // position by offset
    var xPosition = 'left'; // or right
    var xPositionOffset = 0;
    var yPosition = 'top';  // or bottom
    var yPositionOffset = 0;
    var topMargin = 0;
    var bottomMargin = 0;   // maybe control bar height

    if (icon && icon.icon.xPosition === 'left') {
        xPosition = 'left';
        xPositionOffset = 0;
    }
    if (icon && icon.icon.xPosition === 'right') {
        xPosition = 'right';
        xPositionOffset = 0;
    }
    if (icon && Number(icon.icon.xPosition) >= 0) {
        xPosition = 'left';
        xPositionOffset = Number(icon.xPosition);
    }
    if (icon && icon.icon.yPosition === 'bottom') {
        yPosition = 'bottom';
        yPositionOffset = 0;
        yPositionOffset = yPositionOffset + bottomMargin;
    }
    if (icon && icon.icon.yPosition === 'top') {
        yPosition = 'top';
        yPositionOffset = 0;
        yPositionOffset = yPositionOffset + topMargin;
    }
    if (icon && Number(icon.icon.yPosition) >= 0) {
        yPosition = 'top';
        yPositionOffset = Number(icon.icon.yPosition);
        yPositionOffset = yPositionOffset + topMargin;
    }

    var displayIcon = player.el().ownerDocument.createElement('div');
    player.el().appendChild(displayIcon);

    displayIcon.setAttribute('name', 'adicon');
    displayIcon.id = 'adicon_' + icon.icon.program;
    displayIcon.innerHTML = icon.content;
    displayIcon.style.position = 'absolute';
    displayIcon.style[xPosition] = xPositionOffset + 'px';
    displayIcon.style[yPosition] = yPositionOffset + 'px';
    displayIcon.style.zIndex = 2147483647; // top most of 32bit
    displayIcon.style.display = 'none';
    icon.origY = yPositionOffset;

    // set width, height of div element
    displayIcon.style.width = icon.width + 'px';
    displayIcon.style.height = icon.height + 'px';

    icon.div = displayIcon;

    if (icon.icon.iconClickThrough) {
      icon.div.style.cursor = 'pointer';
      icon.clickHandler = handleClick(icon);
      icon.div.addEventListener('click', icon.clickHandler);
    }

    startIcon(icon, yPosition);
  }

  if (this.icons.length > 0) {
    this.controlBarTimer = setInterval(adjustIconsByControlBar, utilities.isIE11() ? 100 : 500);
  }

  // **** local functions **** //
  function adjustIconsByControlBar () {
    var compStyle = window.getComputedStyle(that.player.controlBar.el(), null);
    var cbHiddenCur = compStyle.backfaceVisibility === 'hidden' || compStyle.transform !== 'none';
    if (cbHiddenCur !== that.cbHidden) {
      that.cbHidden = cbHiddenCur;
      var cbHeight = cbHiddenCur ? 0 : that.player.controlBar.el().offsetHeight;
      for (var k = 0; k < that.icons.length; k++) {
        var ic = that.icons[k];
        if (ic.div && ic.div.style.display === 'block') {
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

  function adjustIconsPosition (ic, cbHeight, that, level) {
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

  function elementsIntersected (div1, div2) {
    var collide = function (el1, el2) {
      var rect1 = el1.getBoundingClientRect();
      var rect2 = el2.getBoundingClientRect();

      return !(
        rect1.top > rect2.bottom ||
        rect1.right < rect2.left ||
        rect1.bottom < rect2.top ||
        rect1.left > rect2.right
      );
    };
    var inside = function (el1, el2) {
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

  function trackUrls (urls) {
    urls.forEach(function (src) {
      var img = new Image();
      img.src = src;
    });
  }

  function handleClick (icon) {
    return function () {
      trackUrls(icon.icon.iconClickTrackings);
      player.pause();
      window.open(icon.icon.iconClickThrough, '_blank');
    };
  }

  function startIcon (icon, yPosition) {
    var offset = icon.icon.offset && icon.icon.offset > 0 ? icon.icon.offset : 0;
    setTimeout(function () {
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
        setTimeout(function () {
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
