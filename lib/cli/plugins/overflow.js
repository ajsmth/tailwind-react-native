const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "overflow",

  properties: {
    ["overflow"]: ["overflow"],
  },
};

const overflowPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: overflowPlugin,
  config: pluginConfig,
};

