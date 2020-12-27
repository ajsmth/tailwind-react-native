function textShadow(theme) {
  const textShadow = {};

  for (let textShadowName in theme.textShadow) {
    const [width, height, radius, color] = theme.textShadow[textShadowName];

    if (textShadowName === "DEFAULT") {
      textShadowName = "";
    } else {
      textShadowName = `-${textShadowName}`;
    }

    textShadow[`text-shadow${textShadowName}`] = {
      textShadowOffset: {
        width,
        height,
      },
      textShadowRadius: radius,
    };

    if (color) {
      textShadow[`text-shadow${textShadowName}`].textShadowColor = color
    }
  }

  return textShadow;
}

module.exports = textShadow;
