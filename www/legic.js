var exec = require('cordova/exec');

exports.echo = function (message, success, error) {
    exec(success, error, "LegicPlugin", "echo", [message]);
};

exports.initSdk = function (success, error) {
    exec(success, error, "LegicPlugin", "initSdk", []);
};

exports.getVersion = function (success, error) {
    exec(success, error, "LegicPlugin", "getVersion", []);
};

// module.exports = Legic;
