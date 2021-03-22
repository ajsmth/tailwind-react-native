function platformColor(theme) {
  const platformColor = {};
  const platformColors = theme.platformColors

  for (let platformColorName in platformColors) {
    const value = platformColors[platformColorName];

    platformColor[`text-platform-${platformColorName}`] = {
      ios: {
        color: {
          semantic: [value.ios],
        },
      },
      android: {
        color: {
          resource_paths: [value.android],
        },
      },
      default: {
        color: value.default,
      },
    };

    platformColor[`bg-platform-${platformColorName}`] = {
      ios: {
        backgroundColor: {
          semantic: [value.ios],
        },
      },
      android: {
        backgroundColor: {
          resource_paths: [value.android],
        },
      },
      default: {
        backgroundColor: value.default,
      },
    };
  }

  return platformColor;
}

module.exports = platformColor;
