import { Platform } from "react-native";
import styles from "./styles.json";

const transformProps = ["translate", "rotate", "scale", "skew"];

function generateMemoKey(classNames = "", variants) {
  if (variants) {
    const values = Object.values(variants);
    return `${classNames}-${values.join("-")}`;
  }

  return classNames;
}

function createStyleFn(styleMap = styles) {
  const memo = {};

  return function getStyles(classNames = "", variants) {
    const assembledStyles = {};
    const key = generateMemoKey(classNames, variants);

    variants = variants || {};

    if (memo[key]) {
      return memo[key];
    }

    let transforms = [];

    for (let cn of classNames.split(" ")) {
      if (!cn) {
        continue;
      }

      let [variant, className] = cn.split(":");
      let includeStyle = false;

      if (!className) {
        className = variant;
        variant = null;
        includeStyle = true;
      }

      if (variant) {
        includeStyle =
          variants[variant] || Object.values(variants).includes(variant);
      }

      if (transformProps.filter((t) => className.includes(t)).length > 0) {
        includeStyle && transforms.push(className);
        continue;
      }

      const style = styleMap[className];

      if (style && includeStyle) {
        Object.assign(assembledStyles, Platform.select(style));
      }
    }

    if (transforms.length > 0) {
      const transform = [];

      transforms.forEach((className) => {
        const style = styleMap[className];
        if (style) {
          transform.push(...Platform.select(style).transform);
        }
      });

      Object.assign(assembledStyles, { transform });
    }

    memo[key] = assembledStyles;

    return assembledStyles;
  };
}

export { createStyleFn as create };
export default createStyleFn(styles);
