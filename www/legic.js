var exec = require('cordova/exec');

var Legic = {
    echo: function (message, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "LegicPlugin", "echo", [message]);
    }
};

module.exports = Legic;
