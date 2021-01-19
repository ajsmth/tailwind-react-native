const colors = require("../colors");

function platformColor(theme) {
  const platformColor = {};
  const platformColors = theme.platformColors({ color: getColor });

  for (let platformColorName in platformColors) {
    const value = platformColors[platformColorName];

    platformColor[`text-platform-${platformColorName}`] = {
      ios: {
        color: {
          semantic: [value.ios, value.default],
        },
      },
      android: {
        color: {
          resource_paths: [value.android, value.default],
        },
      },
      default: {
        color: value.default,
      },
    };

    platformColor[`bg-platform-${platformColorName}`] = {
      ios: {
        backgroundColor: {
          semantic: [value.ios, value.default],
        },
      },
      android: {
        backgroundColor: {
          resource_paths: [value.android, value.default],
        },
      },
      default: {
        backgroundColor: value.default,
      },
    };
  }

  return platformColor;
}

function getColor(colorName) {
  const [name, value] = colorName.split("-");
  const color = colors[name] ? colors[name][value] : colorName;
  return color || "";
}

module.exports = platformColor;
