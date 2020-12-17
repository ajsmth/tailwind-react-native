function fontSize(theme) {
  const fontSize = {};

  for (let fontSizeName in theme.fontSize) {
    if (typeof theme.fontSize[fontSizeName] === "number") {
      fontSize[`text-${fontSizeName}`] = {
        fontSize: fontSizeValue,
        ...lineHeightConfigs,
      };
    }

    const [fontSizeValue, { ...lineHeightConfigs }] = theme.fontSize[
      fontSizeName
    ];

    fontSize[`text-${fontSizeName}`] = {
      fontSize: fontSizeValue,
      ...lineHeightConfigs,
    };
  }

  return fontSize;
}

module.exports = fontSize;
