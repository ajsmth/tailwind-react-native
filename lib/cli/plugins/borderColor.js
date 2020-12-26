const flattenColorPalette = require("../util/flattenColorPalette");

function borderColor(theme) {
  const colors = {};
  const flattenedColors = flattenColorPalette(theme.colors);

  for (let color in flattenedColors) {
    const hex = flattenedColors[color];

    colors[`border-${color}`] = {
      borderColor: hex,
    };

    colors[`border-r-${color}`] = {
      borderRightColor: hex,
    };

    colors[`border-l-${color}`] = {
      borderLeft: hex,
    };

    colors[`border-t-${color}`] = {
      borderTopColor: hex,
    };

    colors[`border-b-${color}`] = {
      borderBottomColor: hex,
    };

    colors[`border-s-${color}`] = {
      borderStartColor: hex,
    };

    colors[`border-e-${color}`] = {
      borderEndColor: hex,
    };
  }

  return colors;
}

module.exports = borderColor;
