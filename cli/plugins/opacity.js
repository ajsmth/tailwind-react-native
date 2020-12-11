function opacity(theme) {
  const opacities = {};

  for (let opacityName in theme.opacity) {
    const value = theme.opacity[opacityName];

    opacities[`opacity-${opacityName}`] = {
      default: {
        opacity: value,
      },
    };
  }

  return opacities;
}

module.exports = opacity;
