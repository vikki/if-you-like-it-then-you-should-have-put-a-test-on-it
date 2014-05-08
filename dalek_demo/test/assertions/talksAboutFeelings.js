var uuid = require("dalekjs/lib/dalek/uuid");
var chai = require("chai");
var Assertions = require('dalekjs/lib/dalek/assertions');

Assertions().prototype._invertMatch = function (a, b) {
    try {
        chai.expect(a).to.match(b);
    } catch (e) {
        return false;
    }

    return true;
};

Assertions().prototype.talksAboutFeelings = function(selector) {
    var message = "Check if element matching " + selector + " has feels.";
    var expected = /feeling/i;
    var hash = uuid();
    if (this.test.querying === true) {
        message = expected;
        expected = selector;
        selector = this.test.selector;
    }

    var cb = this._generateCallbackAssertion('text', 'text', this._invertMatch, hash, {selector: selector, expected: expected, message: message}).bind(this.test);
    this._addToActionQueue([selector, expected, hash], 'text', cb);
    return (this.chaining || this.test.querying) ? this : this.test;
};


module.exports = {};