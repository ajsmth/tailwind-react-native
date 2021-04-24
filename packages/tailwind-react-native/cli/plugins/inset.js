const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "inset",

  properties: {
    ["inset"]: ["top", "left", "right", "bottom"],
    ["bottom"]: ["bottom"],
    ["top"]: ["top"],
    ["left"]: ["left"],
    ["right"]: ["right"],
    ["start"]: ["start"],
    ["end"]: ["end"],
  },
};


const insetPlugin = createPlugin(pluginConfig)

module.exports = {
  plugin: insetPlugin,
  config: pluginConfig
}
