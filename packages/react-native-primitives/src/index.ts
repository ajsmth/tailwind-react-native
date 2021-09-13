import * as React from "react";
import {
  Appearance,
  AccessibilityInfo,
  AccessibilityChangeEvent,
  AccessibilityChangeEventName,
  useWindowDimensions,
  StyleProp,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";

type Queries<T> = {
  appearance?: {
    light?: T;
    dark?: T;
  };

  accessibility?: {
    boldText?: T;
    grayScale?: T;
    invertColors?: T;
    reduceTransparency?: T;
  };

  screen?: ScreenSizeQuery<T>;
};

type ScreenSizeQuery<T> = {
  height?: { [key: string]: T };
  width?: { [key: string]: T };
};

type Variants<Style> = {
  base?: StyleProp<Style>;
  variants?: { [key: string]: { [key: string]: StyleProp<Style> } };
  queries?: Queries<Style>;
};

type VariantProp<Type> = {
  variant?: keyof Type;
};

type StyleFor<T> = T extends { style?: StyleProp<ImageStyle> }
  ? StyleProp<ImageStyle>
  : T extends { style?: StyleProp<TextStyle> }
  ? StyleProp<TextStyle>
  : T extends { style?: StyleProp<ViewStyle> }
  ? StyleProp<ViewStyle>
  : never;

type Options<T> = {
  base?: StyleFor<T>;
  variants?: VariantMap<StyleFor<T>>;
  queries?: Queries<StyleFor<T>>;
};

type VariantMap<T> = { [key: string]: { [key2: string]: T } };

type Nested<Type> = {
  [Property in keyof Type]?: keyof Type[Property];
};

export function create<T, O extends Options<T>>(
  component: React.ComponentType<T>,
  config: O
) {
  const styleFn = getStylesFn(config);

  function Component(
    props: React.PropsWithChildren<T & Nested<typeof config["variants"]>>
  ) {
    const qs = useQueryStyles(config.queries);
    const ss = useScreenSizeStyles(config?.queries?.screen);
    const style = styleFn(props);

    return React.createElement<T>(component, {
      ...props,
      // @ts-ignore
      style: [style, props.style, qs, ss],
    });
  }

  return Component;
}

export function getStylesFn<T>(options: Options<T>) {
  let styles: any = options.base || {};

  function handleVariantProps(props: any) {
    options.variants = options.variants || {};

    for (let key in props) {
      if (options.variants[key]) {
        const value = props[key];
        const styleValue = options.variants[key][value];

        styles = StyleSheet.compose(styles, styleValue);
      }
    }

    return styles;
  }

  return handleVariantProps;
}

const noop = () => {};

function useQueryStyles<T>(queries?: Queries<T>) {
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

function registerThemeListener<T>(
  queries: Queries<T>["appearance"],
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

function registerA11yListener<T>(
  queries: Queries<T>["accessibility"],
  update: any,
  config: {
    queryKey: keyof Queries<T>["accessibility"];
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

function useScreenSizeStyles<T>(sizes?: ScreenSizeQuery<T>) {
  const [widthStyles, setWidthStyles] = React.useState({});
  const [heightStyles, setHeightStyles] = React.useState({});

  const { width, height } = useWindowDimensions();

  React.useEffect(() => {
    if (sizes && sizes.width) {
      let updates: any = {};

      for (let key in sizes.width) {
        const expression = `${width} ${key}`;
        try {
          if (eval(expression) == true) {
            const queryStyles = sizes.width[key];
            updates = StyleSheet.compose(updates, queryStyles);
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
      let updates: any = {};

      for (let key in sizes.height) {
        const expression = `${height} ${key}`;
        try {
          if (eval(expression) == true) {
            const queryStyles = sizes.height[key];
            updates = StyleSheet.compose(updates, queryStyles);
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
