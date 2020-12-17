function translate(theme) {
  const translate = {};

  for (let translateName in theme.translate) {
    const value = theme.translate[translateName];

    translate[`translate-${translateName}`] = {
      translate: value,
    };

    translate[`-translate-${translateName}`] = {
      translate: -value,
    };

    translate[`translate-x-${translateName}`] = {
      translateX: value,
    };

    translate[`-translate-x-${translateName}`] = {
      translateX: -value,
    };

    translate[`translate-y-${translateName}`] = {
      translateY: value,
    };

    translate[`-translate-y-${translateName}`] = {
      translateY: -value,
    };
  }

  return translate;
}

module.exports = translate;
