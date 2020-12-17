# tailwind-react-native

### why

this library focuses on whats available in react native and matches it to tailwindcss naming conventions. this means things like platform colors, dynamic colors, and other native apis are available for use in your styles (now or in the near future) - aka this library is concerned with apis that tailwindcss will probably never include, but you might want to use in your apps

### alternatives

- https://github.com/z0al/react-native-styled.macro - super cool build time macro
- https://github.com/vadimdemedes/tailwind-rn - tailwindcss converted to stylesheet styles

### install

```bash
yarn add tailwind-react-native
```

### api

```jsx
import React from "react";
import styles from "tailwind-react-native";

export default function App() {
  return (
    <View style={styles("flex-1 p-24")}>
      <View style={styles("w-24 h-24 bg-platform-red")} />
    </View>
  );
}
```

### variants / selectors

you can add custom selectors that represent dynamic styles in your components

```jsx
function MyComponent() {
  // apply styles based on the OS the app is running on
  const os = Platform.OS;

  const style = styles(
    `w-12 h-12 ios:bg-platform-yellow android:bg-platform-blue web:bg-platform-red`,
    { os }
  );

  return <View style={style} />;
}
```

this can be useful for applying different styles based on enums like:

- Platform.OS
- useColorScheme()
- loading state

### available styles

see the plugins available here: https://github.com/ajsmth/tailwind-react-native/tree/main/cli/plugins

### build a custom styles.json

```bash
npx tailwind-react-native@latest build --config path/to/config --out path/for/styles
```

### using your own config / styles

```jsx
import styleFn, { create } from "tailwind-react-native/style";
import styles from "./styles.json";

const style = create(styleFn, styles);

style("flex-1 bg-green-500 py-12");
```

### future plans

- more documentation on classes available
- transitions
- improve android platform colors, update ios platform colors to include UI colors
- reduce styles.json size
- typescript definitions / autocomplete (if possible)
