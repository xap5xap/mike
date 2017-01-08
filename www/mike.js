var exec = require('cordova/exec');

exports.coolMethod2 = function(arg0, success, error) {
    exec(success, error, "mike", "coolMethod2", [arg0]);
};
