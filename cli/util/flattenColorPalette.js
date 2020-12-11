function flattenColorPalette(colors) {
  const flattened = Object.entries(colors).reduce((acc, [color, val]) => {
    if (typeof val === "object") {
      const values = {};
      Object.entries(val).forEach(([number, hex]) => {
        values[color + (number === "DEFAULT" ? "" : `-${number}`)] = hex;
      });

      return {
        ...acc,
        ...values,
      };
    }

    return {
      ...acc,
      [`${color}`]: val,
    };
  }, {});

  return flattened;
}

module.exports = flattenColorPalette;
