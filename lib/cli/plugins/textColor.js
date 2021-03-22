const createPlugin = require("./createPlugin");
const flattenColorPalette = require("../util/flattenColorPalette");

const pluginConfig = {
  name: "color",

  properties: {
    ["text"]: ["color"],
    ["text-s"]: ["textShadowColor"],
  },

  transformTheme: (colors) => flattenColorPalette(colors),
};

const textColorPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: textColorPlugin,
  config: pluginConfig,
};
