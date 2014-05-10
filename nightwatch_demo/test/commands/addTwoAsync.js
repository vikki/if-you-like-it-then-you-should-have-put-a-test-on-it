var util = require('util');
var events = require('events');

function AddTwoCommand() {
    events.EventEmitter.call(this);
}

util.inherits(AddTwoCommand, events.EventEmitter);

AddTwoCommand.prototype.command = function(origValue, cb) {
    var self = this;
    var calcValue = origValue + 2;

    setTimeout(function() {
        if (cb) {
            cb.call(self.client.api, calcValue);
        }

        self.emit('complete');
    }, 1000);

    return this;
};

module.exports = AddTwoCommand;