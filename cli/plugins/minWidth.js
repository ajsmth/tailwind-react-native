function minWidth(theme) {
  const widths = {};

  for (let widthName in theme.width) {
    const value = theme.width[widthName];

    widths[`min-w-${widthName}`] = {
      default: {
        minWidth: value,
      },
    };
  }
  
  return widths
}

module.exports = minWidth;
