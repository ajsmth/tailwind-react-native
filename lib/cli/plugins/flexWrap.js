const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "flexWrap",

  properties: {
    ["flex-wrap"]: ["flexWrap"],
  },
};

const flexWrapPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: flexWrapPlugin,
  config: pluginConfig,
};
