function margin(theme) {
  const margins = {};

  for (let marginName in theme.margin) {
    const value = theme.margin[marginName];

    if (marginName === "auto") {
      margins[`m-auto`] = {
        default: {
          margin: "auto",
        },
      };

      margins[`mx-auto`] = {
        default: {
          marginHorizontal: "auto",
        },
      };

      margins[`my-auto`] = {
        default: {
          marginVertical: "auto",
        },
      };

      continue;
    }

    margins[`m-${marginName}`] = {
      default: {
        margin: value,
      },
    };

    margins[`mt-${marginName}`] = {
      default: {
        marginTop: value,
      },
    };

    margins[`mb-${marginName}`] = {
      default: {
        marginBottom: value,
      },
    };

    margins[`ml-${marginName}`] = {
      default: {
        marginLeft: value,
      },
    };

    margins[`mr-${marginName}`] = {
      default: {
        marginRight: value,
      },
    };

    margins[`mx-${marginName}`] = {
      default: {
        marginHorizontal: value,
      },
    };

    margins[`my-${marginName}`] = {
      default: {
        marginVertical: value,
      },
    };

    margins[`ms-${marginName}`] = {
      default: {
        marginStart: value,
      },
    };

    margins[`me-${marginName}`] = {
      default: {
        marginEnd: value,
      },
    };
  }

  return margins
}

module.exports = margin;
