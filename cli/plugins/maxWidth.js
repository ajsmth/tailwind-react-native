function maxWidth(theme) {
    const widths = {};
  
    for (let widthName in theme.width) {
      const value = theme.width[widthName];
  
      widths[`max-w-${widthName}`] = {
        default: {
          maxWidth: value,
        },
      };
    }

    return widths
  }
  
  module.exports = maxWidth;
  