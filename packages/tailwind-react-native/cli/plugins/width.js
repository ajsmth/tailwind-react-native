const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "width",

  properties: {
    ["w"]: ["width"],
    ["max-w"]: ["maxWidth"],
    ["min-w"]: ["minWidth"],
  },
};

const widthPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: widthPlugin,
  config: pluginConfig,
};
