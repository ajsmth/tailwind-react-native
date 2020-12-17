function flexDirection(theme) {
  const flexDirection = {};

  for (let flexDirectionName in theme.flexDirection) {
    const value = theme.flexDirection[flexDirectionName];

    flexDirection[`flex-${flexDirectionName}`] = {
      flexDirection: value,
    };
  }

  return flexDirection;
}

module.exports = flexDirection;
