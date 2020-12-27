function skew(theme) {
  const skew = {};

  for (let skewName in theme.skew) {
    const value = theme.skew[skewName];

    skew[`skew-${skewName}`] = {
      skew: value,
    };

    skew[`-skew-${skewName}`] = {
      skew: `-${value}`,
    };

    skew[`skew-x-${skewName}`] = {
      skewX: value,
    };

    skew[`-skew-x-${skewName}`] = {
      skewX: `-${value}`,
    };

    skew[`skew-y-${skewName}`] = {
      skewY: value,
    };

    skew[`-skew-y-${skewName}`] = {
      skewY: `-${value}`,
    };
  }

  return skew;
}

module.exports = skew;
