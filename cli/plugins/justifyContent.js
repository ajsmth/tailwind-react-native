function justifyContent(theme) {
  const justifyContent = {};

  for (let justifyContentName in theme.justifyContent) {
    const value = theme.justifyContent[justifyContentName];

    justifyContent[`justify-${justifyContentName}`] = {
      default: {
        justifyContent: value,
      },
    };
  }

  return justifyContent;
}

module.exports = justifyContent;
