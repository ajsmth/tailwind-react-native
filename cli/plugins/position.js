function position(theme) {
  const position = {};

  for (let positionName in theme.position) {
    const value = theme.position[positionName];

    position[`${positionName}`] = {
      position: value,
    };
  }

  return position;
}

module.exports = position;
