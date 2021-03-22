const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "flexShrink",

  properties: {
    ["flex-shrink"]: ["flexShrink"],
  },
};

const flexShrinkPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: flexShrinkPlugin,
  config: pluginConfig,
};
