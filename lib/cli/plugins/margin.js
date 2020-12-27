function margin(theme) {
  const margins = {};

  for (let marginName in theme.margin) {
    const value = theme.margin[marginName];

    if (marginName === "auto") {
      margins[`m-auto`] = {
        margin: "auto",
      };

      margins[`mx-auto`] = {
        marginHorizontal: "auto",
      };

      margins[`my-auto`] = {
        marginVertical: "auto",
      };

      continue;
    }

    margins[`m-${marginName}`] = {
      margin: value,
    };

    margins[`mt-${marginName}`] = {
      marginTop: value,
    };

    margins[`mb-${marginName}`] = {
      marginBottom: value,
    };

    margins[`ml-${marginName}`] = {
      marginLeft: value,
    };

    margins[`mr-${marginName}`] = {
      marginRight: value,
    };

    margins[`mx-${marginName}`] = {
      marginHorizontal: value,
    };

    margins[`my-${marginName}`] = {
      marginVertical: value,
    };

    margins[`ms-${marginName}`] = {
      marginStart: value,
    };

    margins[`me-${marginName}`] = {
      marginEnd: value,
    };

    margins[`-m-${marginName}`] = {
      margin: value,
    };

    margins[`-mt-${marginName}`] = {
      marginTop: value,
    };

    margins[`-mb-${marginName}`] = {
      marginBottom: value,
    };

    margins[`-ml-${marginName}`] = {
      marginLeft: value,
    };

    margins[`-mr-${marginName}`] = {
      marginRight: value,
    };

    margins[`-mx-${marginName}`] = {
      marginHorizontal: value,
    };

    margins[`-my-${marginName}`] = {
      marginVertical: value,
    };

    margins[`-ms-${marginName}`] = {
      marginStart: value,
    };

    margins[`-me-${marginName}`] = {
      marginEnd: value,
    };
  }

  return margins;
}

module.exports = margin;
