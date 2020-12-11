function maxHeight(theme) {
  const heights = {};

  for (let heightName in theme.height) {
    const value = theme.height[heightName];

    heights[`max-h-${heightName}`] = {
      default: {
        maxHeight: value,
      },
    };
  }

  return heights
}

module.exports = maxHeight;
