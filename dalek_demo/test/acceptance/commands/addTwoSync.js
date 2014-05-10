var path = require('path');
var Q = require('q');
var uuid = require('dalekjs/lib/dalek/uuid');
var chai = require("chai");

var Actions = require('dalekjs/lib/dalek/actions');

function setupAddTwoSync(test) {
    test.__proto__.addTwoSync = function (origValue) {
        var hash = uuid();

        var cb = function logMessageCb (data) {
            if (data && data.key === 'noop' && !this.uuids[data.hash]) {
                this.uuids[data.hash] = true;
                var result = origValue + 2;
                this.reporter.emit('report:log:user', 'MESSAGE: added 2 to ' + origValue + ' and got ' + result);
                console.log("res is " + result);
            }
        }.bind(this);

        this._addToActionQueue([origValue, hash], 'noop', cb);
        return this;
    };
}

module.exports = {
    setupAddTwoSync: setupAddTwoSync
};