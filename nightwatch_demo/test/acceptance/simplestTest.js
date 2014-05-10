var path = require('path');
var assert = require('chai').assert;

module.exports = {
	'Page title is correct': function (test) {
		var url = 'http://www.google.com',
            origValue = 3;

		test
	    	.url(url)
	    	.assert.elementPresent('title')
            .addTwoSync(origValue, function(result) {
                console.log("result is " + result);
                this.assert.equal(result, 5);
            })
	    	.end();
	}
};