const ident = (i) => i;

function createPlugin(config) {
  return function (theme) {
    config.defaultValues = config.defaultValues || {};
    const styles = config.defaultValues;

    const configTransformFn = config.transformTheme || ident;
    let themeConfig = theme[config.name]

    if (!themeConfig) {
      return {}
    }

    themeConfig = configTransformFn(theme[config.name]);

    config.properties = config.properties || {};

    const propertyKeys = Object.keys(config.properties);

    for (let _key in themeConfig) {
      const key = _key === "DEFAULT" ? "" : `-${_key}`;

      propertyKeys.forEach((propertyKey) => {
        if (propertyKey === "") {
          styles[_key] = {};
        } else {
          styles[`${propertyKey}${key}`] = {};
        }
      });
    }

    for (let themeKey in themeConfig) {
      const themeValue = themeConfig[themeKey];
      let key = themeKey === "DEFAULT" ? "" : `-${themeKey}`;

      // handle custom platform styles
      if (typeof themeValue === "object") {
        for (let platformKey in themeValue) {
          propertyKeys.forEach((propertyKey) => {
            if (propertyKey === "") {
              key = themeKey;
            }

            const value = themeValue[platformKey];
            styles[`${propertyKey}${key}`][platformKey] = {};

            const propertyValueKeys = config.properties[propertyKey];

            if (propertyValueKeys.length === 0) {
              styles[`${propertyKey}${key}`][platformKey] =
                themeValue[platformKey];
            }

            propertyValueKeys.forEach((valueKey) => {
              styles[`${propertyKey}${key}`][platformKey][valueKey] = value;

              if (config.includeNegativeValues) {
                styles[`-${propertyKey}${key}`] = {};
                styles[`-${propertyKey}${key}`][platformKey] = {};
                styles[`-${propertyKey}${key}`][platformKey][valueKey] =
                  typeof value === "string" ? `-${value}` : -value;
              }
            });
          });
        }
      }
      // standard config
      else {
        propertyKeys.forEach((propertyKey) => {
          const propertyValueKeys = config.properties[propertyKey];
          const value = themeValue;

          if (propertyKey === "") {
            key = themeKey;
          }

          if (propertyValueKeys.length === 0) {
            style[`${propertyKey}${key}`] = value;
          }

          propertyValueKeys.forEach((valueKey) => {
            styles[`${propertyKey}${key}`][valueKey] = value;

            if (config.includeNegativeValues) {
              styles[`-${propertyKey}${key}`] = {};

              styles[`-${propertyKey}${key}`][valueKey] =
                typeof value === "string" ? `-${value}` : -value;
            }
          });
        });
      }
    }

    return styles;
  };
}

module.exports = createPlugin;
