import React from "react";
import { Animated } from "react-native";
import interpolateStyles from "./interpolate";

const defaultAnimatedConfig = {
  method: Animated.spring,
  useNativeDriver: true,
};

function createTransitionFns(variantFn) {
  function useTransition(classNames = "", variantValue, animatedConfig = {}) {
    const memo = React.useRef({}).current;
    const animatedValue = React.useRef(new Animated.Value(0)).current;

    const previousVariant = usePrevious(variantValue);

    const currentStyle = variantFn(classNames, variantValue);

    if (!previousVariant) {
      return currentStyle;
    }

    if (memo[`${variantValue}-${previousVariant}`]) {
      animatedValue.setValue(1);
      runAnimation(0);
      return memo[`${variantValue}-${previousVariant}`];
    }

    if (memo[`${previousVariant}-${variantValue}`]) {
      animatedValue.setValue(0);
      runAnimation(1);
      return memo[`${previousVariant}-${variantValue}`];
    }

    function runAnimation(toValue) {
      const { method, ...rest } = {
        ...defaultAnimatedConfig,
        ...animatedConfig,
      };

      method(animatedValue, {
        toValue,
        ...rest,
      }).start();
    }

    let previousStyle = variantFn(classNames, previousVariant);

    const animatedStyle = interpolateStyles(
      animatedValue,
      currentStyle,
      previousStyle
    );

    memo[`${variantValue}-${previousVariant}`] = animatedStyle;

    animatedValue.setValue(1);
    runAnimation(0);

    return animatedStyle;
  }

  return {
    useTransition,
  };
}

export default createTransitionFns;

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
