const createPlugin = require("./createPlugin")

const pluginConfig = {
  name: "textAlignVertical",

  properties: {
    ["text-vertical"]: ["textAlignVertical"],
  }
}

const textAlignPlugin = createPlugin(pluginConfig)

module.exports = {
  plugin: textAlignPlugin,
  config: pluginConfig
}