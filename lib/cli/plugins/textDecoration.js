function textDecoration(theme) {
  const textDecoration = {};

  for (let textDecorationName in theme.textDecoration) {
    const value = theme.textDecoration[textDecorationName];

    textDecoration[`${textDecorationName}`] = {
      textDecoration: value,
    };
  }

  return textDecoration;
}

module.exports = textDecoration;
