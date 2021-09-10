import {
  Pressable,
  PressableProps,
  View,
  ViewProps,
  Image,
  ImageProps,
  Text,
  TextProps,
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

type VariantMap = {
  [key: string]: { [key: string]: any };
};

type Options<Type> = {
  [Property in keyof Type]?: keyof Type[Property];
};

type StyleVariants<T = VariantMap> = {
  base?: any;
  variants?: T;
  defaultVariants?: { [key in keyof T]: any };
};

export function create<Variants extends StyleVariants>(
  component: PrimitiveOption,
  variants: Variants
) {
  const styleFn = getStylesFn(variants);
  const Primitive = PrimitiveMap[component];

  function Component(
    props: PropsMap[typeof component] & Options<Variants["variants"]>
  ) {
    const style = styleFn(props);
    return <Primitive {...props} style={[style, props.style]} />;
  }

  return Component;
}

export function getStylesFn<Variants extends StyleVariants>(options: Variants) {
  let styles = options.base || {};
  options.defaultVariants = options.defaultVariants || {};
  options.variants = options.variants || {};

  for (let key in options.defaultVariants) {
    const value = options.defaultVariants[key];

    if (options.variants[key] && options.variants[key][value]) {
      styles = {
        ...styles,
        ...options.variants[key][value],
      };
    }
  }

  function handleVariantProps(props: any) {
    options.variants = options.variants || {};

    for (let key in props) {
      if (options.variants[key]) {
        const value = props[key];
        const styleValue = options.variants[key][value];

        styles = {
          ...styles,
          ...styleValue,
        };
      }
    }

    return styles;
  }

  return handleVariantProps;
}
