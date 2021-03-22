const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "translate",

  properties: {
    ["translate"]: ["translate"],
    ["translate-x"]: ["translateX"],
    ["translate-y"]: ["translateY"],
  },

  includeNegativeValues: true,
};

const translatePlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: translatePlugin,
  config: pluginConfig,
};
