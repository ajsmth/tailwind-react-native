const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "direction",

  properties: {
    ['direction']: ['direction']
  }
}

const directionPlugin = createPlugin(pluginConfig)

module.exports = {
  plugin: directionPlugin,
  config: pluginConfig
}

