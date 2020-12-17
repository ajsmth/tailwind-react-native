import styles from "./styles.json";
import createStyleFn from "./style";
import createVariantFn from "./variant";

function create(styleMap = styles) {
  const style = createStyleFn(styleMap);
  const variant = createVariantFn(styleMap);

  return {
    style,
    variant,
  };
}

export default create;
