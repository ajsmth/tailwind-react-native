function skew(theme) {
    const skew = {};
  
    for (let skewName in theme.skew) {
      const value = theme.skew[skewName];
  
      skew[`skew-${skewName}`] = {
        default: {
          transform: [{ skew: value }],
        },
      };
  
      skew[`-skew-${skewName}`] = {
        default: {
          transform: {
            skew: -value,
          },
        },
      };
  
      skew[`skew-x-${skewName}`] = {
        default: {
          transform: [{ skewX: value }],
        },
      };
  
      skew[`-skew-x-${skewName}`] = {
        default: {
          transform: {
            skewX: -value,
          },
        },
      };
  
      skew[`skew-y-${skewName}`] = {
        default: {
          transform: [{ skewY: value }],
        },
      };
  
      skew[`-skew-y-${skewName}`] = {
        default: {
          transform: {
            skewY: -value,
          },
        },
      };
    }
  
    return skew;
  }
  
  module.exports = skew;
  