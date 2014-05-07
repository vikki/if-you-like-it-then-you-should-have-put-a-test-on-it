define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	registerSuite({name : 'demo',
		'hello world test' : function () {
			assert(true);
		}
	});
});