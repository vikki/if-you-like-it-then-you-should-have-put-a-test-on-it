var path = require('path');
var Q = require('q');
var uuid = require('dalekjs/lib/dalek/uuid');
var chai = require("chai");

function setupAddTwoAsync(test) {
    test.driver.addTwo = function(origValue, hash) {
        test.driver.actionQueue.push(function() {
            var deferred = Q.defer(),
                result = origValue +2;

            deferred.resolve();

            // this bit is optional and is just part of the action
            test.reporter.emit('report:log:user', 'MESSAGE: added 2 to ' + origValue + ' and got ' + result);
            console.log("res is " + result);

            // you need this bit in order to get the test action to finish up correctly
            test.driver.events.emit('driver:message', {key: 'addTwo', hash: hash, value: result});

            //deferred.resolve(); // resolve late to preserve order of test commands
            return deferred.promise;
        });
    }


    test.__proto__.addTwoAsync = function (origValue) {
        var hash = uuid();
        var cb = this._generateCallbackAssertion('addTwo', 'addTwo', origValue, hash);
        this._addToActionQueue([origValue, hash], 'addTwo', cb);
        return this;
    };
}

module.exports = {
    setupAddTwoAsync: setupAddTwoAsync
};