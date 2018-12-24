const path = require("path");
const { isDev } = require("./utils");

const getOutput = env => ({
  path: path.join(__dirname, "..", "dist", "ui"),
  filename: isDev(env)
    ? "[name].chunkhash.js"
    : "js/[name]".concat(".[chunkhash:8].js"),
  chunkFilename: "[name].chunkhash.js"
});

module.exports.getOutput = getOutput;
