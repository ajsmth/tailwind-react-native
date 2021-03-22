const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "textDecoration",

  properties: {
    [""]: ['textDecoration']
  }
};

const textDecorationPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: textDecorationPlugin,
  config: pluginConfig,
};

