function scale(theme) {
  const scale = {};

  for (let scaleName in theme.scale) {
    const value = theme.scale[scaleName];

    scale[`scale-${scaleName}`] = {
      scale: value,
    };

    scale[`scale-x-${scaleName}`] = {
      scaleX: value,
    };

    scale[`scale-y-${scaleName}`] = {
      scaleY: value,
    };
  }

  return scale;
}

module.exports = scale;
