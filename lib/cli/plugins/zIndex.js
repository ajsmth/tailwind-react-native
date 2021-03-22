const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "zIndex",

  properties: {
    ["z"]: ["zIndex"],
  },
};

const zIndexPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: zIndexPlugin,
  config: pluginConfig,
};
