# videojs-vast-vpaid plugin

This plugin is used to render video ads inside of a videojs player.  It originated from the MailOnline/videojs-vast-vpaid plugin (version 0.0.0 dated Sep 28, 2016) which was created to allow videojs to monetise its videos. This plugin implementation includes some modifications whose purpose is to enhance and extend video ad playback behavior.

This plugin was designed to be used in conjunction with videojs-based prebid plugins.  However, it can also be used as a standalone plugin for use in rendering video ads.

To do so, this plugin implements the following IAB specifications: 
- [VAST 3.0](http://www.iab.net/media/file/VASTv3.0.pdf)
- [VAST 4.0](https://www.iab.com/wp-content/uploads/2016/04/VAST4.0_Updated_April_2016.pdf)
-- Note this plugin is able to fully parse a VAST 4.0 document.  However, it will render the creative using VAST 3.0 rendering rules.  This simply means that if the plugin receives a VAST 4.0 document, the xml will not be rejected or generate a parsing error.
- [VPAID](http://www.iab.net/media/file/VPAID_2.0_Final_04-10-2012.pdf)

Currently this plugin supports VAST and VPAID  [HTML5](https://github.com/MailOnline/VPAIDHTML5Client) ads.

This plugin includes the following modifications to the original MailOnline/videojs-vast-vpaid plugin:
- supports midroll and postrolls ads in addition to preroll ads
- supports parsing VAST 4.0 xml documents
- supports additional options that can be passed when calling ```player.vastClient``` to customize the ad playback behavior. These new options include:
-- skippability behavior customization
-- initial playback method (such as click-to-play, auto-play) and initial audio settings
-- configuration of click-thru behavior
- supports additional playback event:  adFinished - used to signal when the ad is done and the main content may be started or resumed
- integration support with video.js 4 has been deprecated
- VAST and VPAID support for Flash has been deprecated
---

## Integration with video.js 5+
To integrate the plugin with videoJs you need to:

**1- Add all files from `videojs-mailonline-plugin/dist` to some path in your server**

**2- If you don't have videoJs, add it's scripts and stylesheet to your page**
```html
<!-- Video.js 5 -->
<link href="http://vjs.zencdn.net/5.4.6/video-js.css" rel="stylesheet">
<script src="http://vjs.zencdn.net/5.4.6/video.js"></script>
```
**NOTE: You may use any version of video.js that version 5 and up.**
**NOTE: Skip this step if you are using this plugin with the Brightcove Prebid Plugin**

**3- After adding videoJs, add the plugin script stylesheet**
```html
<!-- Common -->
<link href="/path/to/bc_vpaid_vast_mo.css" rel="stylesheet">
```
and the videojs version specific plugin
```html
<!-- Video.js 5 -->
<script src="/path/to/videojs_5.vast.vpaid.min.js"></script>
```
**4- Create you own ads plugin to pass an add media tag to the plugin**

Below you have a simple ads-setup-plugin

```javascript
videojs.plugin('ads-setup', function (opts) {
    var player = this;
    var adsCancelTimeout = 3000;

    var vastAd = player.vastClient({
      //Media tag URL
      adTagUrl: "http://pubads.g.doubleclick.net/gampad/ads?env=....",
      playAdAlways: true,
      //Note: As requested we set the preroll timeout at the same place than the adsCancelTimeout
      adCancelTimeout: adsCancelTimeout,
      adsEnabled: !!options.adsEnabled
    });
});
```

You can also configure the vast plugin using the data-setup attribute

```html
<video id="example_video_1" class="video-js vjs-default-skin"
    controls preload="auto" width="640" height="264"
    poster="http://vjs.zencdn.net/v/oceans.png"
    data-setup='{
      "plugins": {
      "vastClient": {
        "adTagUrl": "http://pubads.g.doubleclick.net/gampad/ads?env=....",
        "adCancelTimeout": 5000,
        "adsEnabled": true
        }
      }
    }'>
  <source src="http://vjs.zencdn.net/v/oceans.mp4" type='video/mp4'/>
  <source src="http://vjs.zencdn.net/v/oceans.webm" type='video/webm'/>
  <source src="http://vjs.zencdn.net/v/oceans.ogv" type='video/ogg'/>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
  </p>
</video>
```

---

## Options

#### adTagUrl
Use it to pass the ad media tag, it can be a string containing the Media tag url or a function that will return the Media tag whenever called;
On initialization, the plugin will call the function and store the returned Media tag to request the VAST/VPAID ads
```javascript
// Hardcoded Media Tag
var vastAd = player.vastClient({
    adTagUrl: "http://pubads.g.doubleclick.net/gampad/ads?env=....",
    ...
});
```
```javascript
//Dynamic Media Tag
var vastAd = player.vastClient({
    adTagUrl: getAdsUrl,
    ...
});

function getAdsUrl() {
    return "http://pubads.g.doubleclick.net/gampad/ads?env=....";
}
```
#### adTagXML

You can do the VAST xml request on your own using the adTagXML option.
All you need to do is to pass the request fn as the adTagXML option when you initialize the plugin.
See below for an example

```javascript
var vastAd = player.vastClient({
    adTagXML: requestVASTXML,
    ...
});

function requestVASTXML(callback) {
    //The setTimeout below is to simulate asynchrony
    setTimeout(function(){
        callback(null, '<VAST version="3.0"><Ad><Inline>...</Inline></Ad></VAST>');
    }, 0);
}
```
As you can see the requestVASTXML function above expects a node like error-first-callback that needs to be called whenever we are ready to serve the VAST XML.
If you had any error executing the request, you need to pass it as the first argument of the callback
and if there was no error pass null as the first argument and the VAST XML string as the second argument.

#### playAdAlways
Flag to indicate if we must play an ad whenever possible. If set to true the plugin will play an ad every time the user watches a new video or replays the actual video.
```Defaults to false```

#### adCancelTimeout
Number of milliseconds for the ad to start before canceling it.
```Defaults to 3000ms```

#### adsEnabled
Flag to enable/disable the ads.
```Defaults to true```

#### autoResize
Flag to enable resize of the adUnit on window's `resize` and `orientationchange` events. This is useful for responsive players.
```Defaults to true```

#### verbosity
verbosity of console logging;
```Defaults to 0```

- 0 - error
- 1 - error, warn
- 2 - error, warn, info
- 3 - error, warn, info, log
- 4 - error, warn, info, log, debug

#### initialPlayback
specifies the method for how the ad should be started
```Defaults to 'auto'```
- 'auto' - autoplay - the ad video will start without a user action
- 'click' - click-to-play - the ad video requires a user click to start
 
#### initialAudio
specifies whether the ad video should be audible when it starts its playback
```Defaults to'on'```
- 'on' - ad video will be audible when it is started
- 'off' - ad video will be muted when it is started

#### skipText
specifies the text that will appear on the SKIP box before a SKIP button is enabled when the ad is skippable, i.e.,  either the xml contains a skipOffset attribute or the skippable.enabled option has been set to true.
If the value of this option is empty, then no countdown text will be displayed even though the ad is skippable.
Use the %%TIME%% macro as a placeholder to display the countdown time.
```Defaults to 'Skip in %%TIME%% seconds'```
Example:  'Video can be skipped in %%TIME%% seconds'

#### skipButtonText
specifies the text that will appear in the SKIP button when the ad is skippable, i.e.,  either the xml contains a skipOffset attribute or the skippable.enabled option has been set to true.
```Defaults to 'Skip ad'```

#### skippable
this object contains publisher options to control the skippable behavior.  This resulting behavior depends on what skippable options are specified in the object (see below) and whether the creative xml contains a skipOffset specification.
```No Defaults - if not present, skippable behavior is controlled by the presence of the skipOffset specification in the creative xml```
Example skippable object
```javascript
var clientParams = {};
var skipOptions = {};
skipOptions.enabled = true;
skipOptions.videoThreshold = 30;
skipOptions.videoOffset = 10;
clientParams.skippable = skipOptions;
```

#### skippable.enabled
specifies whether the publisher wants to enable or disable skippable behavior regardless of the presence of a skipOffset specification in the creative xml.
```No Default Value - if not present, skippable behavior is controlled by the presence of the skipOffset specification in the creative xml```
- true - enables skippable behavior
-- the ad will always show a SKIP button as long as a videoOffset value or a skipOffset value has been specified and there is no restriction based on videoThreshold (see below)
- false - disable skippable behavior regardless of whether the skipOffset is present in the ceative xml

#### skippable.videoThreshold
specifies the minimum duration in seconds of the ad video for which skippable behavior will be enforced.  Skippable controls (countdown text and button) will not be displayed for any skippable ad video whose duration is less than the specified videoThreshold.
```No Default Value - if not specified, the SKIP button will be displayed for any skippable ad regardless of the duration of the ad video```
Example: skippable.videoThreshold = 30;

#### skippable.videoOffset
specifies the time in seconds when the SKIP button should be become visible for a skippable ad.  If specified, this value will override any value specified in the skipOffset in the creative xml.
```No Default Value - if not specified, the SKIP button will be displayed for any skippable ad if the creative xml specifies a skipOffset```

Example: skippable.videoOffset = 10;

#### disableClickThru
allows the publisher to enable / disable click through behavior as long as the player is executing the click through.  If a VPAID creative is managing the click through behavior, then this setting will have no effect.
```Defaults to false```
- true - clicking on the ad video will not result in a click through as long as the player is responsible for handling the click through
- false - clicking on the ad video may result in a click through as long as a click through url has been specified
---

## Returned object
 An invocation to ```player.vastClient({...})``` returns and object that with some helper functions that allow you to dynamically enable or disable the vast plugin, or check if it is enabled.
```javascript
var vastPlugin = player.vastClient({
    adTagUrl: getAdsUrl,
    playAdAlways: true,
    //Note: As requested we set the preroll timeout at the same place than the adsCancelTimeout
    adCancelTimeout: adsCancelTimeout,
    adsEnabled: !!options.adsEnabled
});

player.on('reset', function () {
    if (!vastPlugin.isEnabled()) {
        vastPlugin.enable();
    } else {
        vastAd.disable();
    }
});
```

#### isEnabled()
This function returns true if the player is enabled and false otherwise.

#### enable()
Enables the VAST plugin

#### disable()
Disables the plugin

#### adUnit
If there is an ad playing (after the vast.adStart event) it will contain an obj like the one below:
```
player.vast.adUnit= {
    type: {string} <== The possible types are 'VAST' or 'VPAID'
    pauseAd: {function} <== Pauses the ad unit
    resumeAd: {function} <== Resumes the ad unit
    getSrc: {function} <== Returns the MediaFile instance used to play the ad
}
```
Otherwise it will be null or undefined

#### player.vast
The returned object described above it is also published as a player property so that you can use it anywhere as long as you have access to the player instance.
```javascript
player.vastClient({
    adTagUrl: getAdsUrl,
    playAdAlways: true,
    //Note: As requested we set the preroll timeout at the same place than the adsCancelTimeout
    adCancelTimeout: adsCancelTimeout,
    adsEnabled: !!options.adsEnabled
    });

player.on('reset', function () {
    if (!player.vast.isEnabled()) {
        player.vast.enable();
    } else {
        player.vast.disable();
    }
});
```

---

## Plugin events
The plugin does trigger some events that can be used for tracking or debugging.

##### vast.firstPlay
Fired when the user first plays a video or if the playAdAlways option is set to true every time the user replays the same video

##### vast.adStart
Fired when the ad starts playing

##### vast.adSkip
Fired when the a vast ad gets skiped

##### vast.adError
Fired whenever there is an error with the ad. The error itself gets added to the event object in the property 'error'.

##### vast.adsCancel
Fired whenever the ads are canceled due to an error or because the plugin is not enabled.

##### vast.contentStart
Fired whenever the video content starts playing

##### vast.contentEnd
Fired when the video content ends.

##### vast.reset
Trigger the 'vast.reset' event whenever you want to reset the plugin. Beware that if an ad is playing it will be canceled.

##### adFinished
Fired when the ad has finished successfully, by user interaction, or was terminated by an error.  It the the final event which indicates that the ad done and the main content is ready to be resumed.

---

## Running the plugin
If you want to run the plugin you need to clone the repo into your local environment
```
git clone https://github.com/prebid/videojs-mailonline-plugin.git
```
and install the dependencies

```
$ cd videojs-mailonline-plugin
$ npm install

```

after installing the dependencies you are ready to go. If you want to see the available build tasks, run
```
$ gulp

Welcome to MailOnline's new
____   ____.__     .___                     __          ____   ____                  __    ____   ____                .__     .___
\   \ /   /|__|  __| _/  ____    ____      |__|  ______ \   \ /   /_____     _______/  |_  \   \ /   /______  _____   |__|  __| _/
 \   Y   / |  | / __ | _/ __ \  /  _ \     |  | /  ___/  \   Y   / \__  \   /  ___/\   __\  \   Y   / \____ \ \__  \  |  | / __ |
  \     /  |  |/ /_/ | \  ___/ (  <_> )    |  | \___ \    \     /   / __ \_ \___ \  |  |     \     /  |  |_> > / __ \_|  |/ /_/ |
   \___/   |__|\____ |  \___  > \____/ /\__|  |/____  >    \___/   (____  //____  > |__|      \___/   |   __/ (____  /|__|\____ |
                    \/      \/         \______|     \/                  \/      \/                    |__|         \/          \/

###### Below, you have the list of all the available build tasks ########
╔═════════════════════════╤════════════════════════════════════════════════════════════════════════════════╗
║ Name                    │ Description                                                                    ║
╟─────────────────────────┼────────────────────────────────────────────────────────────────────────────────╢
║ build                   │ This task builds the plugin and runs karma tests                               ║
╟─────────────────────────┼────────────────────────────────────────────────────────────────────────────────╢
║ ci-test                 │ Starts karma test and generates test code coverage, to be used by CI Server    ║
╟─────────────────────────┼────────────────────────────────────────────────────────────────────────────────╢
║ test                    │ Starts karma and test the player                                               ║
╚═════════════════════════╧════════════════════════════════════════════════════════════════════════════════╝


## License

videojs-vast-vpaid plugin is licensed under the MIT License, Version 2.0. [View the license file](LICENSE)

