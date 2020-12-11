function scale(theme) {
  const scale = {};

  for (let scaleName in theme.scale) {
    const value = theme.scale[scaleName];

    scale[`scale-${scaleName}`] = {
      default: {
        transform: [{ scale: value }],
      },
    };

    scale[`scale-x-${scaleName}`] = {
      default: {
        transform: [{ scaleX: value }],
      },
    };

    scale[`scale-y-${scaleName}`] = {
      default: {
        transform: [{ scaleY: value }],
      },
    };
  }

  return scale;
}

module.exports = scale;
