
const createPlugin = require("./createPlugin");

const pluginConfig = {
  name: "fontFamily",

  properties: {
    ["font"]: ["fontFamily"],
  },
};

const fontFamilyPlugin = createPlugin(pluginConfig);

module.exports = {
  plugin: fontFamilyPlugin,
  config: pluginConfig,
};
