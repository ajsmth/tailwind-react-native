const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "boxShadow",
  
  properties: {
    ["shadow"]: [],
  },
};

const alignItemsPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: alignItemsPlugin,
  config: pluginConfig,
};

