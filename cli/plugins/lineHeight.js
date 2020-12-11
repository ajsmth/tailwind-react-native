function lineHeight(theme) {
    const lineHeight = {};
  
    for (let lineHeightName in theme.lineHeight) {
      const value = theme.lineHeight[lineHeightName];
  
      lineHeight[`leading-${lineHeightName}`] = {
        default: {
          lineHeight: value,
        },
      };
    }
  
    return lineHeight;
  }
  
  module.exports = lineHeight;
  