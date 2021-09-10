import createStyleFn from "./style";
import createVariantFn from "./variant";
import createTransitionFns from "./transition";

export function create(styleMap = {}) {
  const style = createStyleFn(styleMap);
  const variant = createVariantFn(style);
  const transitionFns = createTransitionFns(variant);

  return {
    style,
    variant,
    ...transitionFns,
  };
}


