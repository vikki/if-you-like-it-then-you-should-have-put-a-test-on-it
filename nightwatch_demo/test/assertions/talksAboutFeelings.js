var util = require('util');
exports.assertion = function(selector, msg) {
    this.message = "Testing if there are any mentions of feelings in element " + selector + "'s text";

    this.expected = function() {
        return "contains feeeeels";
    };

    this.pass = function(value) {
        return value.match(/feeling/i);
    };

    this.failure = function(result) {
        var failed = (result === false) ||
            // no such element
            result && (result.status === -1 || result.value === null);

        if (failed) {
            var defaultMsg = "couldnae find element cap'n";
            if (result && result.value === null) {
                defaultMsg = "couldnae get text cap'n";
            }
            this.message = msg || defaultMsg;
        }
        return failed;
    };

    this.value = function(result) {
        return result.value;
    };

    this.command = function(callback) {
        return this.api.getText(selector, callback);
    };

};
