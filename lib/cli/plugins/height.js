const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "height",

  properties: {
    ["h"]: ["height"],
    ["max-h"]: ["maxHeight"],
    ["min-h"]: ["minHeight"],
  },
};

const heightPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: heightPlugin,
  config: pluginConfig,
};
