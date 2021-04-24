const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "opacity",

  properties: {
    ["opacity"]: ["opacity"],
  },
};

const opacityPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: opacityPlugin,
  config: pluginConfig,
};
