function borderStyle(theme) {
    const borderStyle = {};
  
    for (let borderStyleName in theme.borderStyle) {
      const value = theme.borderStyle[borderStyleName];
  
      borderStyle[`border-${borderStyleName}`] = {
        default: {
          borderStyle: value,
        },
      };
    }
  
    return borderStyle;
  }
  
  module.exports = borderStyle;
  