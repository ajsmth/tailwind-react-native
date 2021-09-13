import * as React from "react";
import {
  Pressable,
  PressableProps,
  View,
  ViewProps,
  Image,
  ImageProps,
  Text,
  TextProps,
  Appearance,
  AccessibilityInfo,
  AccessibilityChangeEvent,
  AccessibilityChangeEventName,
  useWindowDimensions,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

type PrimitiveOption = "Button" | "View" | "Image" | "Text";

const PrimitiveMap: Record<PrimitiveOption, any> = {
  Button: Pressable,
  View: View,
  Image: Image,
  Text: Text,
};

type PropsMap = {
  Button: PressableProps;
  View: ViewProps;
  Image: ImageProps;
  Text: TextProps;
};

type StylesMap = {
  Button: ViewStyle;
  View: ViewStyle;
  Image: ViewStyle;
  Text: ViewStyle;
};

type VariantMap = {
  [key: string]: { [key: string]: any };
};

type Options<Type> = {
  [Property in keyof Type]?: keyof Type[Property];
};

type Queries = {
  appearance?: {
    light?: any;
    dark?: any;
  };

  accessibility?: {
    boldText?: any;
    grayScale?: any;
    invertColors?: any;
    reduceTransparency?: any;
  };

  screen?: ScreenSizeQuery;
};

type ScreenSizeQuery = {
  height?: { [key: string]: any };
  width?: { [key: string]: any };
};

type StyleVariants = {
  base?: any;
  props?: VariantMap;
  variants?: { [key: string]: any };
  queries?: Queries;
};

export function create<Variants extends StyleVariants>(
  component: PrimitiveOption,
  variants: Variants
) {
  const styleFn = getStylesFn(variants);
  const Primitive = PrimitiveMap[component];

  function Component(
    props: PropsMap[typeof component] &
      Options<Variants["props"]> & { variant?: keyof Variants["variants"] }
  ) {
    const qs = useQueryStyles(variants.queries);
    const ss = useScreenSizeStyles(variants?.queries?.screen);
    const style = styleFn(props);

    return React.createElement(Primitive, {
      ...props,
      style: [style, props.style, qs, ss],
    });
  }

  return Component;
}

export function getStylesFn<Variants extends StyleVariants>(options: Variants) {
  let styles = options.base || {};
  options.props = options.props || {};

  function handleVariantProps(props: any) {
    options.props = options.props || {};

    for (let key in props) {
      if (options.props[key]) {
        const value = props[key];
        const styleValue = options.props[key][value];

        styles = StyleSheet.compose(styles, styleValue);
      }

      if (key === "variant") {
        options.variants = options.variants || {};

        const value = props[key];
        const styleValue = options.variants[value] || {};

        styles = StyleSheet.compose(styles, styleValue);
      }
    }

    return styles;
  }

  return handleVariantProps;
}

const noop = () => {};

function useQueryStyles(queries?: Queries) {
  const [qs, setState] = React.useState({});

  const update = React.useCallback((nextState) => {
    setState((prevState) => {
      return {
        ...prevState,
        ...nextState,
      };
    });
  }, []);

  React.useEffect(() => {
    const listeners: any[] = [];

    if (queries?.appearance?.dark || queries?.appearance?.light) {
      listeners.push(registerThemeListener(queries.appearance, update));
    }

    if (queries?.accessibility?.boldText) {
      listeners.push(
        registerA11yListener(queries.accessibility, update, {
          // @ts-ignore - i have no idea why this complains
          queryKey: "boldText",
          a11yEventName: "boldTextChanged",
          getValueAsync: AccessibilityInfo.isBoldTextEnabled,
        })
      );
    }

    if (queries?.accessibility?.grayScale) {
      listeners.push(
        registerA11yListener(queries.accessibility, update, {
          // @ts-ignore - i have no idea why this complains
          queryKey: "grayScale",
          a11yEventName: "grayscaleChanged",
          getValueAsync: AccessibilityInfo.isGrayscaleEnabled,
        })
      );
    }

    if (queries?.accessibility?.invertColors) {
      listeners.push(
        registerA11yListener(queries.accessibility, update, {
          // @ts-ignore - i have no idea why this complains
          queryKey: "invertColors",
          a11yEventName: "invertColorsChanged",
          getValueAsync: AccessibilityInfo.isInvertColorsEnabled,
        })
      );
    }

    if (queries?.accessibility?.reduceTransparency) {
      listeners.push(
        registerA11yListener(queries.accessibility, update, {
          // @ts-ignore - i have no idea why this complains
          queryKey: "reduceTransparency",
          a11yEventName: "reduceTransparencyChanged",
          getValueAsync: AccessibilityInfo.isReduceTransparencyEnabled,
        })
      );
    }

    return () => listeners.forEach((l) => l());
  }, [queries]);

  return qs;
}

function registerThemeListener(
  queries: Queries["appearance"],
  update: any
): () => void {
  if (!queries?.dark && !queries?.light) {
    return noop;
  }

  let hasRegisteredTheme = false;

  if (!hasRegisteredTheme) {
    const colorScheme = Appearance.getColorScheme() || "light";
    const value = queries[colorScheme] || {};
    update(value);
    hasRegisteredTheme = true;
  }

  function handleAppearanceChange({
    colorScheme,
  }: Appearance.AppearancePreferences) {
    if (colorScheme != null) {
      const value = queries?.[colorScheme] || {};
      update(value);
    }
  }

  Appearance.addChangeListener(handleAppearanceChange);

  return () => Appearance.removeChangeListener(handleAppearanceChange);
}

function registerA11yListener(
  queries: Queries["accessibility"],
  update: any,
  config: {
    queryKey: keyof Queries["accessibility"];
    a11yEventName: AccessibilityChangeEventName;
    getValueAsync: () => Promise<boolean>;
  }
) {
  if (!queries) {
    return noop;
  }

  let hasRegistered = false;

  if (!hasRegistered) {
    config.getValueAsync().then((isValueSet) => {
      const value = isValueSet ? queries[config.queryKey] || {} : {};
      update(value);
      hasRegistered = true;
    });
  }

  function handleChange(event: AccessibilityChangeEvent) {
    const value = event ? queries?.[config.queryKey] || {} : {};
    update(value);
  }

  AccessibilityInfo.addEventListener(config.a11yEventName, handleChange);

  return () =>
    AccessibilityInfo.removeEventListener(config.a11yEventName, handleChange);
}

function useScreenSizeStyles(sizes?: ScreenSizeQuery) {
  const [widthStyles, setWidthStyles] = React.useState({});
  const [heightStyles, setHeightStyles] = React.useState({});

  const { width, height } = useWindowDimensions();

  React.useEffect(() => {
    if (sizes && sizes.width) {
      let updates = {};

      for (let key in sizes.width) {
        const expression = `${width} ${key}`;
        try {
          if (eval(expression) == true) {
            const queryStyles = sizes.width[key];
            updates = {
              ...updates,
              ...queryStyles,
            };
          }
        } catch (error) {
          console.warn(
            `Did not pass in a valid query selector '${expression}' -> try a key with a valid expression like '> {number}'`
          );
        }
      }

      setWidthStyles(updates);
    }
  }, [sizes?.width, width]);

  React.useEffect(() => {
    if (sizes && sizes.height) {
      let updates = {};

      for (let key in sizes.height) {
        const expression = `${height} ${key}`;
        try {
          if (eval(expression) == true) {
            const queryStyles = sizes.height[key];
            updates = {
              ...updates,
              ...queryStyles,
            };
          }
        } catch (error) {
          console.warn(
            `Did not pass in a valid query selector '${expression}' -> try a key with a valid expression like '> {number}'`
          );
        }
      }

      setHeightStyles(updates);
    }
  }, [sizes?.height, height]);

  return {
    ...widthStyles,
    ...heightStyles,
  };
}
