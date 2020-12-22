import React from "react";
import { Animated } from "react-native";
import interpolateStyles from "./interpolate";

const defaultAnimatedConfig = {
  method: Animated.spring,
  useNativeDriver: true,
};

function createTransitionFn(variantFn) {
  // improvements:
  // we can map over the classNames object and get the interpolations matrix all at once?
  // we can hold onto the animatedValue over rerenders and transition to new styles smoothlier

  // memoize variantValue orders and mapped interpolations -> go 1 -> 0 or 0 -> 1 if we've seen it before

  return function useTransition(
    classNames = "",
    variantValue,
    animatedConfig = {}
  ) {
    const previousVariant = usePrevious(variantValue);

    const currentStyle = variantFn(classNames, variantValue);

    if (!previousVariant) {
      return currentStyle;
    }

    let previousStyle = variantFn(classNames, previousVariant);

    const animatedValue = new Animated.Value(1);

    const animatedStyle = interpolateStyles(
      animatedValue,
      currentStyle,
      previousStyle
    );

    const { method, ...rest } = {
      ...defaultAnimatedConfig,
      ...animatedConfig,
    };

    method(animatedValue, {
      toValue: 0,
      ...rest,
    }).start();

    return animatedStyle;
  };
}

export default createTransitionFn;

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = React.useRef();

  // Store current value in ref
  React.useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
