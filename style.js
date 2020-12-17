import { Platform } from "react-native";

const transformProps = ["translate", "rotate", "scale", "skew"];

function createStyleFn(styleMap) {
  const memo = {};

  return function getStylesForClassnames(classNames = "") {
    if (memo[classNames]) {
      return memo[classNames];
    }

    const assembledStyles = {};

    let transforms = [];

    for (let className of classNames.split(" ")) {
      if (!className) {
        continue;
      }

      let style = styleMap[className];

      if (transformProps.filter((t) => className.includes(t)).length > 0) {
        transforms.push(style);
        continue;
      }

      const platformStyle = Platform.select(style);
      if (platformStyle) {
        style = platformStyle;
      }

      Object.assign(assembledStyles, style);
    }

    if (transforms.length > 0) {
      Object.assign(assembledStyles, { transform: transforms });
    }

    memo[classNames] = assembledStyles;
    return assembledStyles;
  };
}

export default createStyleFn;
