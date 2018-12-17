const { getEntry } = require("./webpack/entry");
const { getOutput } = require("./webpack/output");
const { getResolve } = require("./webpack/resolve");
const { getDevServer } = require("./webpack/devServer");
const { getPlugins } = require("./webpack/plugins");
const { getLoaders } = require("./webpack/loaders");
const { getOptimization } = require("./webpack/optimization");
const { isDev } = require("./webpack/utils");

module.exports = env => {
  const config = {
    mode: isDev(env) ? "development" : "production",
    entry: getEntry(),
    output: getOutput(env),
    resolve: getResolve(),
    devServer: getDevServer(),
    plugins: getPlugins(env),
    module: {
      rules: getLoaders(env)
    },
    optimization: getOptimization()
  };
  return config;
};
