var exec = require('cordova/exec');

var Legic = {
    echo: function (message, success, error) {
        exec(success, error, "LegicPlugin", "echo", [message]);
    },

    initSdk: function (success, error) {
        exec(success, error, "LegicPlugin", "initSdk", []);
    },

    getVersion: function (success, error) {
        exec(success, error, "LegicPlugin", "getVersion", []);
    },

    init: function (success, error) {
        exec(success, error, "LegicPlugin", "init", []);
    }
};

module.exports = Legic;
