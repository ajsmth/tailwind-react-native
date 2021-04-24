const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "aspectRatio",

  properties: {
    ["aspect-ratio"]: ["aspectRatio"],
  },
};

const aspectRatioPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: aspectRatioPlugin,
  config: pluginConfig,
};
