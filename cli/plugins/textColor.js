const flattenColorPalette = require("../util/flattenColorPalette");

function textColor(theme) {
  const colors = {};
  const flattenedColors = flattenColorPalette(theme.colors);

  for (let color in flattenedColors) {
    const hex = flattenedColors[color];

    colors[`text-${color}`] = {
      default: {
        color: hex,
      },
    };

    colors[`text-s-${color}`] = {
      default: {
        textShadowColor: hex,
      },
    };
  }

  return colors;
}

module.exports = textColor;
