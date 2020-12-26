function inset(theme) {
  const insets = {};

  for (let insetName in theme.inset) {
    const value = theme.inset[insetName];

    insets[`inset-${insetName}`] = {
      top: value,
      left: value,
      right: value,
      bottom: value,
    };

    insets[`bottom-${insetName}`] = {
      bottom: value,
    };

    insets[`top-${insetName}`] = {
      top: value,
    };

    insets[`left-${insetName}`] = {
      left: value,
    };

    insets[`right-${insetName}`] = {
      right: value,
    };

    insets[`start-${insetName}`] = {
      start: value,
    };

    insets[`end-${insetName}`] = {
      end: value,
    };
  }

  return insets;
}

module.exports = inset;
