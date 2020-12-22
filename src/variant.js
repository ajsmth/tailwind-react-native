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

    // map out each [variant]: `${classname}` and memoize
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

    memo[key] = stylesByVariant;
    return styleFn(stylesByVariant[variantValue]);
  };
}

export default createVariantFn;
