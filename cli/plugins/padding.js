function padding(theme) {
  const padding = {};

  for (let paddingName in theme.padding) {
    const value = theme.padding[paddingName];

    padding[`p-${paddingName}`] = {
      padding: value,
    };

    padding[`pt-${paddingName}`] = {
      paddingTop: value,
    };

    padding[`pb-${paddingName}`] = {
      paddingBottom: value,
    };

    padding[`pl-${paddingName}`] = {
      paddingLeft: value,
    };

    padding[`pr-${paddingName}`] = {
      paddingRight: value,
    };

    padding[`px-${paddingName}`] = {
      paddingHorizontal: value,
    };

    padding[`py-${paddingName}`] = {
      paddingVertical: value,
    };

    padding[`ps-${paddingName}`] = {
      paddingStart: value,
    };
    padding[`pe-${paddingName}`] = {
      paddingEnd: value,
    };
  }

  return padding;
}

module.exports = padding;
