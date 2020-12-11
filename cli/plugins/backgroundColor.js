const flattenColorPalette = require("../util/flattenColorPalette");

function backgroundColor(theme) {
  const colors = {};
  const flattenedColors = flattenColorPalette(theme.colors);

  for (let color in flattenedColors) {
    const hex = flattenedColors[color];

    colors[`bg-${color}`] = {
      default: {
        backgroundColor: hex,
      },
    };
  }

  return colors;
}

module.exports = backgroundColor;
