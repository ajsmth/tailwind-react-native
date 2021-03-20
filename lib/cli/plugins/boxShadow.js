function boxShadow(theme) {
  const boxShadow = {};

  for (let boxShadowName in theme.boxShadow) {
    const [width, height, radius, opacity, color] = theme.boxShadow[
      boxShadowName
    ];

    if (boxShadowName === "DEFAULT") {
      boxShadowName = "";
    } else {
      boxShadowName = `-${boxShadowName}`;
    }


    boxShadow[`shadow${boxShadowName}`] = {
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
      web: {
        boxShadow: `${width}px ${height}px ${radius}px ${color}`
      }
    };
  }

  return boxShadow;
}

module.exports = boxShadow;
