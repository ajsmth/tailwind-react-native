const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "textShadow",
  
  properties: {
    ["text-shadow"]: [],
  },
};

const alignItemsPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: alignItemsPlugin,
  config: pluginConfig,
};

