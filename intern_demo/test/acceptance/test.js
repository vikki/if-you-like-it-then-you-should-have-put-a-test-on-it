define([
	'intern!object',
	'intern/chai!assert',
	'require',
    'test/acceptance/commands/addTwoAsync',
    'test/acceptance/commands/addTwoSync'

], function (registerSuite, assert, require, addTwoAsync, addTwoSync) {
	registerSuite({name : 'demo',
		'hello world test' : function () {
            var url = 'http://www.google.com',
                origValue = 4;

            addTwoAsync.setupAddTwoAsync(this.remote);

            return this.remote
                .get(url)
                .elementByTagName('title')
                .addTwoAsync(origValue)
                .then(function(res) {
                    assert.equal(res, origValue + 2);
                })
                .end();
		}
	});
});