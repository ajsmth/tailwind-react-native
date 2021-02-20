const colors = require("../colors");

function getColor(colorName) {
    const [name, value] = colorName.split("-");
    const color = colors[name] ? colors[name][value] : colorName;
    return color || "";
}

const themeFns = {
    color: getColor,
};

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
            const themeConfig = extend[key];

            if (typeof themeConfig === "function") {
                mergedConfigs.theme[key] = {
                    ...mergedConfigs.theme[key],
                    ...themeConfig(themeFns),
                };
            } else {
                for (let prop in extend[key]) {
                    let value = extend[key][prop];

                    mergedConfigs.theme[key] = {
                        ...mergedConfigs.theme[key],
                        [prop]: value,
                    };
                }
            }
        }
    }

    return mergedConfigs;
}

module.exports = mergeConfigs;
