const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "position",

  properties: {
    [""]: ['position']
  }
};

const positionPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: positionPlugin,
  config: pluginConfig,
};
