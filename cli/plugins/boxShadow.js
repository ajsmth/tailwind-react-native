function boxShadow(theme) {
  const boxShadow = {};

  for (let boxShadowName in theme.boxShadow) {
    const [width, height, radius, opacity, color] = theme.boxShadow[
      boxShadowName
    ];

    boxShadow[`shadow-${boxShadowName}`] = {
      default: {
        shadowColor: color,
        shadowOffset: {
          width,
          height,
        },
        shadowOpacity: opacity,
        shadowRadius: radius,
      },
      android: {
        elevation: radius,
      },
    };
  }

  return boxShadow;
}

module.exports = boxShadow;
