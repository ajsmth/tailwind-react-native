import { Platform } from "react-native";
import create from "./create";
import styles from "./styles.json";

function tailwind(classNames = "", styleMap = styles) {
  const assembledStyles = {};

  for (let className of classNames.split(" ").filter(Boolean)) {
    // platform specific queries
    if (className.includes(":")) {
      const [platform, cn] = className.split(":");

      const style = styleMap[cn];

      if (style) {
        const platformStyles = Platform.select(style);
        Object.assign(
          assembledStyles,
          Platform.select({ [platform]: platformStyles })
        );
        continue;
      }
    }

    // general styles
    const style = styleMap[className];

    if (style) {
      const platformStyles = Platform.select(style);
      Object.assign(assembledStyles, platformStyles);
    }
  }

  return assembledStyles;
}

export default create(tailwind, styles);
