const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "scale",

  properties: {
    ["scale"]: ["scale"],
    ["scale-x"]: ["scaleX"],
    ["scale-y"]: ["scaleY"],
  },

  includeNegativeValues: true,
};

const scalePlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: scalePlugin,
  config: pluginConfig,
};
