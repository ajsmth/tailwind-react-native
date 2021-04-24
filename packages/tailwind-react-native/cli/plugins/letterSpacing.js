const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "letterSpacing",

  properties: {
    ["tracking"]: ["letterSpacing"],
  },
};

const letterSpacingPlugin = createPlugin(pluginConfig)

module.exports = {
  plugin: letterSpacingPlugin,
  config: pluginConfig
}
