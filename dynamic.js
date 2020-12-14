import { useColorScheme, useWindowDimensions, Platform } from "react-native";
import create from "./create";
import styles from "./styles.json";

function dynamic(classNames = "", styleMap = styles, queryMap = {}) {
  const mergedQueryMap = {
    ...defaultQueries,
    ...queryMap,
  };

  const assembledStyles = {};

  const colorScheme = useColorScheme();
  const windowDimensions = useWindowDimensions();

  const dynamicData = {
    colorScheme,
    ...windowDimensions,
  };

  for (let className of classNames.split(" ").filter(Boolean)) {
    let [query = "", cN = ""] = className.split(":");

    const fn = mergedQueryMap[query];
    const style = styleMap[cN];

    if (fn && style && fn(dynamicData)) {
      Object.assign(assembledStyles, Platform.select(style));
    }
  }

  return assembledStyles;
}

const defaultQueries = {
  light: ({ colorScheme }) => colorScheme === "light",
  dark: ({ colorScheme }) => colorScheme === "dark",
  sm: ({ width }) => width >= 640,
  md: ({ width }) => width >= 768,
  lg: ({ width }) => width >= 1024,
  xl: ({ width }) => width >= 1280,
  ["2xl"]: ({ width }) => width >= 1536,
};

export default create(dynamic, styles, false);
