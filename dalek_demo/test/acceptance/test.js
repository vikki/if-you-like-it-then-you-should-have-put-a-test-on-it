var path = require('path');
var addTwoSync = require('./commands/addTwoSync');
var addTwoAsync = require('./commands/addTwoAsync');

module.exports = {

	'Page title is correct': function (test) {
		var url = 'http://www.google.com';

        addTwoSync.setupAddTwoSync(test);
        addTwoAsync.setupAddTwoAsync(test);

		test
			.open(url)
			.assert.exists('title')
            .addTwoSync(3)
			.done();
	}
};