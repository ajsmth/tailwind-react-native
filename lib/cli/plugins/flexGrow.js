const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "flexGrow",

  properties: {
    ["flex-grow"]: ["flexGrow"],
  },
};

const flexGrowPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: flexGrowPlugin,
  config: pluginConfig,
};
