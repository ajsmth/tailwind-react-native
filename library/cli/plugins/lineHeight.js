const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "lineHeight",

  properties: {
    ["leading"]: ["lineHeight"],
  },
};

const lineHeightPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: lineHeightPlugin,
  config: pluginConfig,
};
