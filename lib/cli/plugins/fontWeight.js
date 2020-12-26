function fontWeight(theme) {
  const fontWeight = {};

  for (let fontWeightName in theme.fontWeight) {
    const value = theme.fontWeight[fontWeightName];

    fontWeight[`font-${fontWeightName}`] = {
      fontWeight: value,
    };
  }

  return fontWeight;
}

module.exports = fontWeight;
