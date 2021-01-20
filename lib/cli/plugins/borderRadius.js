const keys = {
  topLeft: 'borderTopLeftRadius',
  topRight: 'borderTopRightRadius',
  bottomLeft: 'borderBottomLeftRadius',
  bottomRight: 'borderBottomRightRadius'
}

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
      [keys.topLeft]: value,
      [keys.topRight]: value,
    };

    borderRadius[`rounded-b${borderRadiusName}`] = {
      [keys.bottomLeft]: value,
      [keys.bottomRight]: value,
    };

    borderRadius[`rounded-l${borderRadiusName}`] = {
      [keys.topLeft]: value,
      [keys.bottomLeft]: value,
    };

    borderRadius[`rounded-r${borderRadiusName}`] = {
      [keys.topRight]: value,
      [keys.bottomRight]: value,
    };

    borderRadius[`rounded-tl${borderRadiusName}`] = {
      [keys.topLeft]: value,
    };

    borderRadius[`rounded-tr${borderRadiusName}`] = {
      [keys.topRight]: value,
    };

    borderRadius[`rounded-bl${borderRadiusName}`] = {
      [keys.bottomLeft]: value,
    };

    borderRadius[`rounded-br${borderRadiusName}`] = {
      [keys.bottomRight]: value,
    };
  }

  return borderRadius;
}

module.exports = borderRadius;
