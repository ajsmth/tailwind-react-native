const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "textTransform",

  properties: {
    [""]: ["textTransform"],
  },
};

const textTransformPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: textTransformPlugin,
  config: pluginConfig,
};
