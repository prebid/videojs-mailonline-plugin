var Icon = require('ads/vast/Icon');

var xml = require('utils/xml');

describe("Icon", function(){
  it("must return an instance of Icon", function(){
    var icon = new Icon(xml.toJXONTree('<Icon><StaticResource></StaticResource></Icon>'));
    assert.instanceOf(icon, Icon);
  });

  //Required Elements
  describe("staticResource", function(){
    it("must contain the static resource and mime type", function(){
      var iconXML = '<Icon><StaticResource creativeType="image/jpeg"><![CDATA[http://www.example.com/image.jpg]]></StaticResource></Icon>';
      var icon = new Icon(xml.toJXONTree(iconXML));
      assert.equal(icon.staticResource, "http://www.example.com/image.jpg");
      assert.equal(icon.creativeType, "image/jpeg");
    });
  });

  var iconXML = '<Icon width="300" height="250">' +
        '<StaticResource creativeType="image/jpeg"><![CDATA[http://www.example.com/image.jpg]]></StaticResource>' +
        '<IconClicks><IconClickThrough><![CDATA[http://www.example.com/whatever]]></IconClickThrough>' +
        '<IconClickTracking><![CDATA[http://www.example.com/tracking]]></IconClickTracking></IconClicks>' +
        '<IconViewTracking><![CDATA[http://www.example.com/viewTracking]]></IconViewTracking>' +
    '</Icon>';

  //Optional Elements
  describe("iconClicks", function(){
    it("must be filled with all the click data that the xml provides", function(){
      var icon = new Icon(xml.toJXONTree(iconXML));
      assert.equal(icon.iconClickThrough, 'http://www.example.com/whatever');
      var tracking = icon.iconClickTrackings[0]; 
      assert.equal(tracking, 'http://www.example.com/tracking');
      tracking = icon.iconViewTrackings[0]; 
      assert.equal(tracking, 'http://www.example.com/viewTracking');
    });
  });

  describe("dimensions", function(){
    it("must contain creative dimensions", function(){
      var icon = new Icon(xml.toJXONTree(iconXML));
      assert.equal(icon.width, 300);
      assert.equal(icon.height, 250);
    });
  });
});