    define([
        'intern/dojo/Deferred',
        'intern/dojo/promise/when',
        'intern/dojo/topic'
    ], function (Deferred, when, topic, browsermob) {
        function setupAddTwoAsync(remote) {
            remote.__proto__.addTwoAsync = function(origValue) {
                var remote = this;

                this._lastPromise = when(this._lastPromise).then(function () {
                    var dfd = new Deferred();

                    setTimeout(function() {
                        dfd.resolve(origValue + 2);
                    }, 1000);

                    return dfd.promise;
                });
                return this;
            }
        }

        return {
            setupAddTwoAsync: setupAddTwoAsync
        };
    });