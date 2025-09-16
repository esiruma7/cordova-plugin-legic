var exec = require('cordova/exec');

exports.echo = function (msg, success, error) {
    exec(success, error, 'LegicPlugin', 'echo', [msg]);
};
