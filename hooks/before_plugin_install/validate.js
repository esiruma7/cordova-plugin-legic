module.exports = function (ctx) {
  var fs = require("fs");
  var path = require("path");
  var aarPath = path.join(ctx.opts.plugin.pluginInfo.dir, "src/android/libs/legicmobilesdk-release.aar");

  if (!fs.existsSync(aarPath)) {
    throw new Error("OUTSYSTEMS_PLUGIN_ERROR: Missing AAR at " + aarPath);
  }
  console.log("✅ AAR exists at:", aarPath);
};
