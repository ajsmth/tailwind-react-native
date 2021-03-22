const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "borderWidth",

  properties: {
    ["border"]: ["borderWidth"],
    ["border-t"]: ["borderWidthTop"],
    ["border-b"]: ["borderWidthBottom"],
    ["border-l"]: ["borderWidthLeft"],
    ["border-r"]: ["borderWidthRight"],
    ["border-s"]: ["borderWidthStart"],
    ["border-e"]: ["borderWidthEnd"],
  },
};

const borderWidthPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: borderWidthPlugin,
  config: pluginConfig,
};
