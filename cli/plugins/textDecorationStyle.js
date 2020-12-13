function textDecorationStyle(theme) {
  const textDecorationStyle = {};

  for (let textDecorationStyleName in theme.textDecorationStyle) {
    const value = theme.textDecorationStyle[textDecorationStyleName];

    textDecorationStyle[`text-decoration-${textDecorationStyleName}`] = {
      default: {
        textDecorationStyle: value,
      },
    };
  }

  return textDecorationStyle;
}

module.exports = textDecorationStyle;
