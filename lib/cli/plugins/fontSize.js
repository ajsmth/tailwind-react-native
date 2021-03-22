const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "fontSize",

  properties: {
    ["text"]: ["fontSize"],
  },
};

const fontSizePlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: fontSizePlugin,
  config: pluginConfig,
};
