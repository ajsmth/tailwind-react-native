function applyBaseStyle(styles) {
  const obj = {};
  
  for (let className in styles) {
    const style = styles[className];

    obj[className] = {
      default: style,
    };
  }

  return obj;
}

module.exports = applyBaseStyle;
