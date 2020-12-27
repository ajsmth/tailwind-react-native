import styles from "../styles.json";
import createStyleFn from "./style";
import createVariantFn from "./variant";
import createTransitionFns from "./transition";

function create(styleMap = styles) {
  const style = createStyleFn(styleMap);
  const variant = createVariantFn(style);
  const transitionFns = createTransitionFns(variant);

  return {
    style,
    variant,
    ...transitionFns,
  };
}

export default create;
