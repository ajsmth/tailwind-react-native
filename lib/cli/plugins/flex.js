const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "flex",

  properties: {
    ["flex"]: ["flex"],
  },
};

const flexPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: flexPlugin,
  config: pluginConfig,
};
