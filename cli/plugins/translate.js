function translate(theme) {
  const translate = {};

  for (let translateName in theme.translate) {
    const value = theme.translate[translateName];

    translate[`translate-${translateName}`] = {
      default: {
        transform: [{ translate: value }],
      },
    };

    translate[`-translate-${translateName}`] = {
      default: {
        transform: [
          {
            translate: -value,
          },
        ],
      },
    };

    translate[`translate-x-${translateName}`] = {
      default: {
        transform: [{ translateX: value }],
      },
    };

    translate[`-translate-x-${translateName}`] = {
      default: {
        transform: [
          {
            translateX: -value,
          },
        ],
      },
    };

    translate[`translate-y-${translateName}`] = {
      default: {
        transform: [{ translateY: value }],
      },
    };

    translate[`-translate-y-${translateName}`] = {
      default: {
        transform: [
          {
            translateY: -value,
          },
        ],
      },
    };
  }

  return translate;
}

module.exports = translate;
