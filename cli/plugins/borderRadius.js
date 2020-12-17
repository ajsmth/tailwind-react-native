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
      borderRadius: value,
    };

    borderRadius[`rounded-t${borderRadiusName}`] = {
      borderRadiusTop: value,
    };

    borderRadius[`rounded-b${borderRadiusName}`] = {
      borderRadiusBottom: value,
    };

    borderRadius[`rounded-l${borderRadiusName}`] = {
      borderRadiusLeft: value,
    };

    borderRadius[`rounded-r${borderRadiusName}`] = {
      borderRadiusRight: value,
    };

    borderRadius[`rounded-tl${borderRadiusName}`] = {
      borderRadiusTopLeft: value,
    };

    borderRadius[`rounded-tr${borderRadiusName}`] = {
      borderRadiusTopRight: value,
    };

    borderRadius[`rounded-bl${borderRadiusName}`] = {
      borderRadiusBottomLeft: value,
    };

    borderRadius[`rounded-br${borderRadiusName}`] = {
      borderRadiusBottomRight: value,
    };
  }

  return borderRadius;
}

module.exports = borderRadius;
