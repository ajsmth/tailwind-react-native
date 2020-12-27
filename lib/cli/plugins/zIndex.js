function zIndex(theme) {
  const zIndexes = {};

  for (let zIndexName in theme.zIndex) {
    const value = theme.zIndex[zIndexName];

    zIndexes[`z-${zIndexName}`] = {
      zIndex: value,
    };
  }

  return zIndexes;
}

module.exports = zIndex;
