const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "alignSelf",

  properties: {
    ["self"]: ["alignSelf"],
  },
};

const alignSelfPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: alignSelfPlugin,
  config: pluginConfig,
};
