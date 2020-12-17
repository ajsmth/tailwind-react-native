function borderWidth(theme) {
  const borderWidth = {};

  for (let borderWidthName in theme.borderWidth) {
    const value = theme.borderWidth[borderWidthName];

    if (borderWidthName === "DEFAULT") {
      borderWidthName = "";
    } else {
      borderWidthName = `-${borderWidthName}`;
    }

    borderWidth[`border${borderWidthName}`] = {
      borderWidth: value,
    };

    borderWidth[`border-t${borderWidthName}`] = {
      borderTopWidth: value,
    };

    borderWidth[`border-b${borderWidthName}`] = {
      borderBottomWidth: value,
    };

    borderWidth[`border-l${borderWidthName}`] = {
      borderLeftWidth: value,
    };

    borderWidth[`border-r${borderWidthName}`] = {
      borderRightWidth: value,
    };

    borderWidth[`border-tl${borderWidthName}`] = {
      borderWidthTopLeft: value,
    };

    borderWidth[`border-s${borderWidthName}`] = {
      borderStartWidth: value,
    };

    borderWidth[`border-e${borderWidthName}`] = {
      borderEndWidth: value,
    };
  }

  return borderWidth;
}

module.exports = borderWidth;
