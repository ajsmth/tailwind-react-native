function fontFamily(theme) {
  const fontFamily = {};

  for (let fontFamilyName in theme.fontFamily) {
    const value = theme.fontFamily[fontFamilyName];

    fontFamily[`font-${fontFamilyName}`] = {
      fontFamily: value,
    };
  }

  return fontFamily;
}

module.exports = fontFamily;
