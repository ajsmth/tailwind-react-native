function overflow(theme) {
  const overflow = {};

  for (let overflowName in theme.overflow) {
    const value = theme.overflow[overflowName];

    overflow[`overflow-${overflowName}`] = {
      overflow: value,
    };
  }

  return overflow;
}

module.exports = overflow;
