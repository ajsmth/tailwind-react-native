const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "borderStyle",

  properties: {
    [""]: ["borderStyle"]
  }
};

const borderStylePlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: borderStylePlugin,
  config: pluginConfig,
};
