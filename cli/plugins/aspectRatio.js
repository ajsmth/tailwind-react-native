function aspectRatio(theme) {
  const aspectRatio = {};

  for (let aspectRatioName in theme.aspectRatio) {
    const value = theme.aspectRatio[aspectRatioName];

    aspectRatio[`aspect-ratio-${aspectRatioName}`] = {
      aspectRatio: value,
    };
  }

  return aspectRatio;
}

module.exports = aspectRatio;
