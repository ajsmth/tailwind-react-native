function direction(theme) {
  const direction = {};

  for (let directionName in theme.direction) {
    const value = theme.direction[directionName];

    direction[`direction-${directionName}`] = {
      default: {
        direction: value,
      },
    };
  }

  return direction;
}

module.exports = direction;
