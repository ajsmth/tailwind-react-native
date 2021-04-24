const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "fontWeight",

  properties: {
    ['font']: ["fontWeight"],
  },
};

const fontWeightPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: fontWeightPlugin,
  config: pluginConfig,
};
