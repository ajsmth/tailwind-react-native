const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "rotate",

  properties: {
    ["rotate"]: ["rotate"],
    ["rotate-x"]: ["rotateX"],
    ["rotate-y"]: ["rotateY"],
  },

  includeNegativeValues: true,
};

const rotatePlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: rotatePlugin,
  config: pluginConfig,
};
