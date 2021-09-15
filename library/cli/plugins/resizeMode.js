const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "resizeMode",

  properties: {
    ["resize"]: ["resizeMode"],
  },
};

const resizeModePlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: resizeModePlugin,
  config: pluginConfig,
};
