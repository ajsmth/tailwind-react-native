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
    const theme = {};

    configs.forEach((config) => {
        if (config && config.theme) {
            const { extend = {}, ...overrides } = config.theme;

            Object.keys(overrides).forEach((key) => {
                theme[key] = config.theme[key];
            });

            Object.keys(extend).forEach((key) => {
                let extension = extend[key];

                if (typeof extension === "function") {
                    extension = extension(themeFns);
                }

                theme[key] = {
                    ...theme[key],
                    ...extension,
                };
            });
        }
    });

    return {
        theme,
    };
}

module.exports = mergeConfigs;
