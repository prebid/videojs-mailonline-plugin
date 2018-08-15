'use strict';

describe("IconIntegrator", function () {

  var VASTError = require('ads/vast/VASTError');
  var IconIntegrator = require('ads/icon/IconIntegrator');
  var Icon = require('ads/vast/Icon');

  var xml = require('utils/xml');
  var testUtils = require('../../test-utils');

  function assertError(callback, msg, code) {
    var error = testUtils.firstArg(callback);
    assert.instanceOf(error, VASTError);
    assert.equal(error.message, "VAST Error: " + msg);
    if (code) {
      assert.equal(error.code, code);
    }
  }

  function createIcons() {
    var xmlStr1 = `
      <Icon program="static1" width="80" height="80" xPosition="right" yPosition="bottom" offset="00:00:01" duration="00:00:02" apiFramework="string">
        <StaticResource creativeType="Image/jpeg">http://fake.net/images/Fallback_1.jpeg</StaticResource>
        <IconClicks>
          <IconClickTracking>http://fake.net/trackers/IconClickTracker_1.png</IconClickTracking>
          <IconClickThrough>http://www.wikipedia.com</IconClickThrough>
        </IconClicks>
        <IconViewTracking>http://fake.net/trackers/IconViewTracker_1.png</IconViewTracking>
      </Icon>`;
    var xmlStr2 = `
      <Icon program="static2" width="80" height="80" xPosition="right" yPosition="bottom" offset="00:00:02" duration="00:00:03" apiFramework="string">
        <StaticResource creativeType="Image/jpeg">http://fake.net/images/Fallback_2.jpeg</StaticResource>
        <IconClicks>
          <IconClickTracking>http://fake.net/trackers/IconClickTracker_2.png</IconClickTracking>
          <IconClickThrough>http://www.google.com</IconClickThrough>
        </IconClicks>
        <IconViewTracking>http://fake.net/trackers/IconViewTracker_1.png</IconViewTracking>
      </Icon>`;
    var arr = [];
    arr.push(new Icon(xml.toJXONTree(xmlStr1)));
    arr.push(new Icon(xml.toJXONTree(xmlStr2)));
    return arr;
  }

  describe("instance", function () {
    var iconIntegrator, player, callback;

    beforeEach(function () {
      player = videojs(document.createElement('video'), {});
      iconIntegrator = new IconIntegrator(player);
      callback = sinon.spy();
    });

    afterEach(function () {
    });

    describe("renderIcons", function () {
      beforeEach(function () {
        this.clock = sinon.useFakeTimers();
      });

      afterEach(function () {
        this.clock.restore();
      });

      it("must call the callback with an error if you don't pass a valid icon array", function () {
        iconIntegrator.renderIcons(null, callback);
        assertError(callback, 'On IconIntegrator, missing required icon array');
      });

      it("must render the icons", function () {
        iconIntegrator.renderIcons(createIcons(), callback);
        this.clock.tick();
        assert.equal(iconIntegrator.icons[0].div.id, 'adicon_static1');
        assert.equal(iconIntegrator.icons[1].div.id, 'adicon_static2');
        player.trigger('vast.adEnd');
        assert.equal(iconIntegrator.icons.length, 0);
      });
    });

    describe("_createIcons", function () {
      var icons;

      beforeEach(function () {
        icons = createIcons();
      });

      it("must create one content for icons with same program", function (done) {
        icons[1].program = icons[0].program;
        iconIntegrator._createIcons(icons, function(error) {
          assert.equal(iconIntegrator.icons.length, 1);
          assert.isNull(error);
          done();
        });
      });
    });

    describe("_renderIcons", function () {
      var icons;

      beforeEach(function () {
        icons = createIcons();
        iconIntegrator._createIcons(icons, function() {});
      });

      it("must begin to render two icons and remove them by icon durations", function (done) {
        this.timeout(15000);
        iconIntegrator._renderIcons(callback);
        assert.equal(iconIntegrator.icons.length, 2);
        assert.equal(iconIntegrator.icons[0].div.style.display, 'none');
        assert.equal(iconIntegrator.icons[1].div.style.display, 'none');
        setTimeout(function() {
          assert.equal(iconIntegrator.icons[0].div.style.display, 'block');
          assert.equal(iconIntegrator.icons[1].div.style.display, 'block');
          setTimeout(function() {
            assert.equal(iconIntegrator.icons.length, 0);
            done();
          }, 6000);
        }, 3000);
      });
    });
  });
});
