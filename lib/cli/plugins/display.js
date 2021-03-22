const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "display",
  properties: {
    [""]: ["display"],
  },
};

const displayPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: displayPlugin,
  config: pluginConfig,
};
