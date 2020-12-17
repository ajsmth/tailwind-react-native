function letterSpacing(theme) {
  const letterSpacing = {};

  for (let letterSpacingName in theme.letterSpacing) {
    const value = theme.letterSpacing[letterSpacingName];

    letterSpacing[`tracking-${letterSpacingName}`] = {
      letterSpacing: value,
    };
  }

  return letterSpacing;
}

module.exports = letterSpacing;
