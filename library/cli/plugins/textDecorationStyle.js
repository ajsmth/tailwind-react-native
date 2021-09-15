const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "textDecorationStyle",

  properties: {
    ["text-decoration"]: ["textDecorationStyle"],
  },
};

const textDecorationStylePlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: textDecorationStylePlugin,
  config: pluginConfig,
};
