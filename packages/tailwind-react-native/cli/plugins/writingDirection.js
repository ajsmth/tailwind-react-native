const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "writingDirection",

  properties: {
    ["text-direction"]: ["writingDirection"],
  },
};

const writingDirectionPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: writingDirectionPlugin,
  config: pluginConfig,
};
