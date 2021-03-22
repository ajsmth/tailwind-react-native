const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "flexDirection",

  properties: {
    ["flex"]: ["flexDirection"],
  },
};

const flexDirectionPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: flexDirectionPlugin,
  config: pluginConfig,
};
