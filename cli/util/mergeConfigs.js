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
      for (let prop in extend[key]) {
        const value = extend[key][prop];

        mergedConfigs.theme[key] = {
          ...mergedConfigs.theme[key],
          [prop]: value,
        };
      }
    }
  }

  return mergedConfigs;
}

module.exports = mergeConfigs;
