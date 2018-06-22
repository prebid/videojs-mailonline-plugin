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
