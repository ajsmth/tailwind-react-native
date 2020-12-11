function fontSize(theme) {
  const fontSize = {};

  for (let fontSizeName in theme.fontSize) {
    const [fontSizeValue, { ...lineHeightConfigs }] = theme.fontSize[fontSizeName];

    fontSize[`text-${fontSizeName}`] = {
      default: {
        fontSize: fontSizeValue,
        ...lineHeightConfigs,
      },
    };
  }

  return fontSize;
}

module.exports = fontSize;
