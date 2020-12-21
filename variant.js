function createVariantFn(styleFn) {
  const memo = {};

  return function getStylesForVariant(classNames = "", variantValue) {
    if (typeof classNames === "object") {
      return styleFn(classNames[variantValue]);
    }

    let key = `${classNames}`;

    if (memo[key]) {
      return styleFn(memo[key][variantValue]);
    }

    memo[key] = {};

    let stylesByVariant = {};

    for (let cn of classNames.split(" ")) {
      if (!cn) {
        continue;
      }

      const [variant, className] = cn.split(":");

      if (!stylesByVariant[variant]) {
        stylesByVariant[variant] = [];
      }

      if (!variant || !className) {
        continue;
      }

      stylesByVariant[variant] += `${className} `;
    } 

    Object.keys(stylesByVariant).forEach((variant) => {
      console.log({ variant });
    });

    memo[key] = stylesByVariant;
    console.log({ stylesByVariant });
    return styleFn(stylesByVariant[variantValue]);
  };
}

export default createVariantFn;
