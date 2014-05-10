    define([
        'intern/dojo/Deferred',
        'intern/dojo/promise/when',
        'intern/dojo/topic'
    ], function (Deferred, when, topic, browsermob) {
        function setupAddTwoSync(remote) {
            remote.__proto__.addTwoSync = function(origValue) {
                var remote = this;

                this._lastPromise = when(this._lastPromise).then(function () {
                    var dfd = new Deferred();

                    dfd.resolve(origValue + 2);

                    return dfd.promise;
                });
                return this;
            }
        }

        return {
            setupAddTwoSync: setupAddTwoSync
        };
    });