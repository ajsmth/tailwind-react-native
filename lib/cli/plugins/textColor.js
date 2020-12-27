const flattenColorPalette = require("../util/flattenColorPalette");

function textColor(theme) {
  const colors = {};
  const flattenedColors = flattenColorPalette(theme.colors);

  for (let color in flattenedColors) {
    const hex = flattenedColors[color];

    colors[`text-${color}`] = {
      color: hex,
    };

    colors[`text-s-${color}`] = {
      textShadowColor: hex,
    };
  }

  return colors;
}

module.exports = textColor;
