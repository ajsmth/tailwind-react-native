function inset(theme) {
  const insets = {};

  for (let insetName in theme.inset) {
    const value = theme.inset[insetName];

    insets[`inset-${insetName}`] = {
      default: {
        top: value,
        left: value,
        right: value,
        bottom: value,
      },
    };
  }

  return insets;
}

module.exports = inset;
