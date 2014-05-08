var path = require('path');

module.exports = {
	'Page title is correct': function (test) {
		var url = 'http://www.google.com';

		test
	    	.url(url)
	    	.assert.elementPresent('title')
	    	.end();
	}
};