function fontFamily(theme) {
    const fontFamily = {};
  
    for (let fontFamilyName in theme.fontFamily) {
      const value = theme.fontFamily[fontFamilyName];
  
      fontFamily[`font-${fontFamilyName}`] = {
        default: {
          fontFamily: value,
        },
      };
    }
  
    return fontFamily;
  }
  
  module.exports = fontFamily;
  