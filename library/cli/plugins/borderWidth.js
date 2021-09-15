const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "borderWidth",

  properties: {
    ["border"]: ["borderWidth"],
    ["border-t"]: ["borderTopWidth"],
    ["border-b"]: ["borderBottomWidth"],
    ["border-l"]: ["borderLeftWidth"],
    ["border-r"]: ["borderRightWidth"],
    ["border-s"]: ["borderStartWidth"],
    ["border-e"]: ["borderEndWidth"],
  },
};

const borderWidthPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: borderWidthPlugin,
  config: pluginConfig,
};
