function alignSelf(theme) {
  const alignSelf = {};

  for (let alignSelfName in theme.alignSelf) {
    const value = theme.alignSelf[alignSelfName];

    alignSelf[`self-${alignSelfName}`] = {
      alignSelf: value,
    };
  }

  return alignSelf;
}

module.exports = alignSelf;
