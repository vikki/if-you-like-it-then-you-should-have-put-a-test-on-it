define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	registerSuite({name : 'demo',
		'hello world test' : function () {
            var url = 'http://www.google.com';

            return this.remote
                .get(url)
                .elementById('gbqfsb')
                .text()
                .then(function assertTalksAboutFeelings (text) {
                    assert.match(text, /feeling/i);
                })
                .end();
		}
	});
});