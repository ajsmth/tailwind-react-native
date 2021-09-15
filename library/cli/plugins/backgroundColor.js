const createPlugin = require("./createPlugin");
const flattenColorPalette = require("../util/flattenColorPalette");

const pluginConfig = {
  name: "color",

  properties: {
    ["bg"]: ["backgroundColor"],
  },

  transformTheme: (colors) => flattenColorPalette(colors) 
};

const backgroundColor = createPlugin(pluginConfig);

module.exports = {
  plugin: backgroundColor,
  config: pluginConfig,
};

