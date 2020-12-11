function borderRadius(theme) {
  const borderRadius = {};

  for (let borderRadiusName in theme.borderRadius) {
    const value = theme.borderRadius[borderRadiusName];

    if (borderRadiusName === "DEFAULT") {
      borderRadiusName = "";
    } else {
      borderRadiusName = `-${borderRadiusName}`;
    }

    borderRadius[`rounded${borderRadiusName}`] = {
      default: {
        borderRadius: value,
      },
    };

    borderRadius[`rounded-t${borderRadiusName}`] = {
      default: {
        borderRadiusTop: value,
      },
    };

    borderRadius[`rounded-b${borderRadiusName}`] = {
      default: {
        borderRadiusBottom: value,
      },
    };

    borderRadius[`rounded-l${borderRadiusName}`] = {
      default: {
        borderRadiusLeft: value,
      },
    };

    borderRadius[`rounded-r${borderRadiusName}`] = {
      default: {
        borderRadiusRight: value,
      },
    };

    borderRadius[`rounded-tl${borderRadiusName}`] = {
      default: {
        borderRadiusTopLeft: value,
      },
    };

    borderRadius[`rounded-tr${borderRadiusName}`] = {
      default: {
        borderRadiusTopRight: value,
      },
    };

    borderRadius[`rounded-bl${borderRadiusName}`] = {
      default: {
        borderRadiusBottomLeft: value,
      },
    };

    borderRadius[`rounded-br${borderRadiusName}`] = {
      default: {
        borderRadiusBottomRight: value,
      },
    };
  }

  return borderRadius;
}

module.exports = borderRadius;
