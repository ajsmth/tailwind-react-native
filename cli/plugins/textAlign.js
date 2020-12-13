function textAlign(theme) {
  const textAlign = {};

  for (let textAlignName in theme.textAlign) {
    const value = theme.textAlign[textAlignName];

    textAlign[`text-${textAlignName}`] = {
      default: {
        textAlign: value,
      },
    };
  }

  return textAlign;
}

module.exports = textAlign;
