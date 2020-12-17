function flexWrap(theme) {
  const flexWrap = {};

  for (let flexWrapName in theme.flexWrap) {
    const value = theme.flexWrap[flexWrapName];

    flexWrap[`${flexWrapName}`] = {
      flexWrap: value,
    };
  }

  return flexWrap;
}

module.exports = flexWrap;
