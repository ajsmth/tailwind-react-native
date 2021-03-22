const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "alignContent",

  properties: {
    ["content"]: ["alignContent"],
  },
};

const alignContentPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: alignContentPlugin,
  config: pluginConfig,
};
