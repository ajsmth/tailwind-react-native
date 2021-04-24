const createPlugin = require("./createPlugin")

const pluginConfig = {
  name: "textAlign",

  properties: {
    ["text"]: ["textAlign"],
  }
}

const textAlignPlugin = createPlugin(pluginConfig)

module.exports = {
  plugin: textAlignPlugin,
  config: pluginConfig
}