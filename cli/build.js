#!/usr/bin/env node

let baseStyles = require("./base-styles");
const defaultConfig = require("./defaultConfig");
const defaultPlugins = require("./plugins");
const mergeConfigs = require("./util/mergeConfigs");

function build(customConfig) {
  let styles = { ...baseStyles };
  let mergedConfig = mergeConfigs(defaultConfig, customConfig);

  defaultPlugins.forEach((plugin) => {
    let style = plugin(mergedConfig.theme);
    Object.assign(styles, style);
  });

  return styles;
}

module.exports = build;
