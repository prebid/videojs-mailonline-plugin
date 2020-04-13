'use strict';

function UniversalAdId (universalAdIdJTree) {
	  if (!(this instanceof UniversalAdId)) {
	    return new UniversalAdId(universalAdIdJTree);
	  }

	  if (universalAdIdJTree) {
		this.idRegistry = universalAdIdJTree.attr('idRegistry');
		this.idValue = universalAdIdJTree.attr('idValue');
	  }
	  else {
		this.idRegistry = 'unknown';
		this.idValue = 'unknown';
	  }
}

module.exports = UniversalAdId;
