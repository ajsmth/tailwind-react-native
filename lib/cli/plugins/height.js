function height(theme) {
  const heights = {};

  for (let heightName in theme.height) {
    const value = theme.height[heightName];

    heights[`h-${heightName}`] = {
      height: value,
    };
  }

  return heights;
}

module.exports = height;
