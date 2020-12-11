const flattenColorPalette = require("../util/flattenColorPalette");

function borderColor(theme) {
  const colors = {};
  const flattenedColors = flattenColorPalette(theme.colors);

  for (let color in flattenedColors) {
    const hex = flattenedColors[color];

    colors[`border-${color}`] = {
      default: {
        borderColor: hex,
      },
    };

    colors[`border-r-${color}`] = {
      default: {
        borderRightColor: hex,
      },
    };

    colors[`border-l-${color}`] = {
      default: {
        borderLeft: hex,
      },
    };

    colors[`border-t-${color}`] = {
      default: {
        borderTopColor: hex,
      },
    };

    colors[`border-b-${color}`] = {
      default: {
        borderBottomColor: hex,
      },
    };

    colors[`border-s-${color}`] = {
      default: {
        borderStartColor: hex,
      },
    };

    colors[`border-e-${color}`] = {
      default: {
        borderEndColor: hex,
      },
    };
  }

  return colors;
}

module.exports = borderColor;
