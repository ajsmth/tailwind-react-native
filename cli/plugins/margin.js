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

    margins[`m-s-${marginName}`] = {
      default: {
        marginStart: value,
      },
    };

    margins[`m-e-${marginName}`] = {
      default: {
        marginEnd: value,
      },
    };
  }
}

module.exports = margin;
