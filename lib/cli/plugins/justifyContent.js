const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "justifyContent",

  properties: {
    ["justify"]: ["justifyContent"],
  },
};

const justifyContentPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: justifyContentPlugin,
  config: pluginConfig,
};

