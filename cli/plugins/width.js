function width(theme) {
  const widths = {};

  for (let widthName in theme.width) {
    const value = theme.width[widthName];

    widths[`w-${widthName}`] = {
      default: {
        width: value,
      },
    };
  }

  return widths;
}

module.exports = width;
