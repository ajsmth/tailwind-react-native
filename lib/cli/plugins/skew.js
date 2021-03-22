const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "skew",

  properties: {
    ["skew"]: ["skew"],
    ["skew-x"]: ["skewX"],
    ["skew-y"]: ["skewY"],
  },

  includeNegativeValues: true,
};

const skewPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: skewPlugin,
  config: pluginConfig,
};
