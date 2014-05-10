var util = require('util');
var events = require('events');

module.exports.command = function(origValue, cb) {
    var self = this;
    var calcValue = origValue + 2;

    if (cb) {
        cb.call(self, calcValue);
    }

    return this;
};