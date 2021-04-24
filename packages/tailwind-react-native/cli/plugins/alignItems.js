const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "alignItems",

  properties: {
    ["items"]: ["alignItems"],
  },
};

const alignItemsPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: alignItemsPlugin,
  config: pluginConfig,
};
