function letterSpacing(theme) {
  const letterSpacing = {};

  for (let letterSpacingName in theme.letterSpacing) {
    const value = theme.letterSpacing[letterSpacingName];

    letterSpacing[`tracking-${letterSpacingName}`] = {
      default: {
        letterSpacing: value,
      },
    };
  }

  return letterSpacing;
}

module.exports = letterSpacing;
