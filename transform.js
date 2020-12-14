import { Platform } from "react-native";
import create from "./create";
import styles from "./styles.json";

function transform(classNames = "", styleMap = styles) {
  const assembledStyles = {
    transform: [],
  };

  for (let className of classNames.split(" ").filter(Boolean)) {
    const style = styleMap[className];

    if (style) {
      const platformStyles = Platform.select(style);
      if (platformStyles.transform) {
        assembledStyles.transform.push(...platformStyles.transform);
      }
    }
  }

  return assembledStyles;
}

export default create(transform, styles);
