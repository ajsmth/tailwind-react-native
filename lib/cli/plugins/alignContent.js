function alignContent(theme) {
  const alignContent = {};

  for (let alignContentName in theme.alignContent) {
    const value = theme.alignContent[alignContentName];

    alignContent[`content-${alignContentName}`] = {
      alignContent: value,
    };
  }

  return alignContent;
}

module.exports = alignContent;
