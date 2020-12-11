function mergeConfigs(...configs) {
  let [defaultConfig, customConfig = {}] = configs;
  let mergedConfigs = { ...defaultConfig };

  if (customConfig.theme) {
    const { extend = {}, ...rest } = customConfig.theme;
    const mergedThemes = {
      ...defaultConfig.theme,
      ...rest,
    };

    mergedConfigs.theme = mergedThemes;

    for (let key in extend) {
      mergedConfigs.theme[key] = extend[key];
    }
  }

  return mergedConfigs;
}

module.exports = mergeConfigs;
