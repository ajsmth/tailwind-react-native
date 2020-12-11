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
      default: {
        borderWidth: value,
      },
    };

    borderWidth[`border-t${borderWidthName}`] = {
      default: {
        borderTopWidth: value,
      },
    };

    borderWidth[`border-b${borderWidthName}`] = {
      default: {
        borderBottomWidth: value,
      },
    };

    borderWidth[`border-l${borderWidthName}`] = {
      default: {
        borderLeftWidth: value,
      },
    };

    borderWidth[`border-r${borderWidthName}`] = {
      default: {
        borderRightWidth: value,
      },
    };

    borderWidth[`border-tl${borderWidthName}`] = {
      default: {
        borderWidthTopLeft: value,
      },
    };

    borderWidth[`border-s${borderWidthName}`] = {
      default: {
        borderStartWidth: value,
      },
    };

    borderWidth[`border-e${borderWidthName}`] = {
      default: {
        borderEndWidth: value,
      },
    };
  }

  return borderWidth;
}

module.exports = borderWidth;
