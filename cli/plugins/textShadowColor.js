function textShadowColor(theme) {
    const textShadowColor = {};
  
    for (let textShadowColorName in theme.textShadowColor) {
      const value = theme.textShadowColor[textShadowColorName];
  
      textShadowColor[`textshadow-${textShadowColorName}`] = {
        default: {
          textShadowColor: value,
        },
      };
    }
  
    return textShadowColor;
  }
  
  module.exports = textShadowColor;
  