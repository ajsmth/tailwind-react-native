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

    insets[`bottom-${insetName}`] = {
      default: {
        bottom: value,
      },
    };

    insets[`top-${insetName}`] = {
      default: {
        top: value,
      },
    };

    insets[`left-${insetName}`] = {
      default: {
        left: value,
      },
    };

    insets[`start-${insetName}`] = {
      default: {
        start: value,
      },
    };

    insets[`end-${insetName}`] = {
      default: {
        end: value,
      },
    };
  }

  return insets;
}

module.exports = inset;
