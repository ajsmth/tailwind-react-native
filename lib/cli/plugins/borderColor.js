const createPlugin = require("./createPlugin");
const flattenColorPalette = require("../util/flattenColorPalette");

const pluginConfig = {
  name: "borderColor",

  properties: {
    ["border"]: ["borderColor"],
    ["border-r"]: ["borderRightColor"],
    ["border-l"]: ["borderLeftColor"],
    ["border-t"]: ["borderTopColor"],
    ["border-b"]: ["borderBottomColor"],
    ["border-s"]: ["borderStartColor"],
    ["border-end"]: ["borderEndColor"],
  },

  transformTheme: (colors) => flattenColorPalette(colors),
};

const borderColorPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: borderColorPlugin,
  config: pluginConfig,
};
