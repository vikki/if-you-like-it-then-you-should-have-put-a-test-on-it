var path = require('path');
var taf = require('../assertions/talksAboutFeelings');

module.exports = {
	'Page title is correct': function (test) {
		var url = 'http://www.google.com';

		test
			.open(url)
			.assert.exists('title')
            .assert.talksAboutFeelings('#gbqfsb', "I'm Feeling Lucky")
			.done();
	}
};