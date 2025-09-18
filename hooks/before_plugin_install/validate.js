module.exports = function (ctx) {
  console.log("🔍 Running before_plugin_install hook for LEGIC plugin...");

  const fs = require("fs");
  const path = require("path");
  const aarPath = path.join(ctx.plugin.dir, "src", "android", "libs", "legicmobilesdk-release.aar");

  if (!fs.existsSync(aarPath)) {
    throw new Error("OUTSYSTEMS_PLUGIN_ERROR: Missing AAR file at " + aarPath);
  } else {
    console.log("✅ AAR file found: " + aarPath);
  }
};
