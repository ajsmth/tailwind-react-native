function writingDirection(theme) {
  const writingDirection = {};

  for (let writingDirectionName in theme.writingDirection) {
    const value = theme.writingDirection[writingDirectionName];

    writingDirection[`text-direction-${writingDirectionName}`] = {
      writingDirection: value,
    };
  }

  return writingDirection;
}

module.exports = writingDirection;
