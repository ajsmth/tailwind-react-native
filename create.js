import styles from "./styles.json";
import createStyleFn from "./style";
import createVariantFn from "./variant";
import createTransitionFn from "./transition";

function create(styleMap = styles) {
  const style = createStyleFn(styleMap);
  const variant = createVariantFn(style);
  const useTransition = createTransitionFn(variant);

  return {
    style,
    variant,
    useTransition,
  };
}

export default create;
