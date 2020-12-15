# tailwind-react-native

### why

this library focuses on whats available in react native and matches it to tailwindcss naming conventions. this means things like platform colors, dynamic colors, and other native apis are available for use in your styles (now or in the near future) - aka this library is concerned with apis that tailwindcss will probably never include, but you might want to use in your apps

### alternatives

- https://github.com/z0al/react-native-styled.macro - super cool build time macro
- https://github.com/vadimdemedes/tailwind-rn

### install

```bash
yarn add tailwind-react-native
```

### functions

- dynamic style selectors based on component / app / phone states


```jsx
import React from "react";
import { Platform, useColorScheme, View } from "react-native";

import style from "./style";

export default function App() {
  // selector: success:my-class
  const status = "success";

  // selector: loading:my-class
  const loading = true;

  // selector: dark:my-class / light:my-class
  const theme = useColorScheme();

  // selector: ios:my-class / android:my-class ...etc
  const os = Platform.OS;

  return (
    <View style={style("flex-1 p-24")}>
      <View
        style={style(
          "w-24 h-24 light:bg-platform-red loading:scale-110 success:border-2 ios:translate-y-12",
          {
            status,
            loading,
            theme,
            os,
          }
        )}
      />
    </View>
  );
}
```

### available styles

see the plugins available here: https://github.com/ajsmth/tailwind-react-native/tree/main/cli/plugins

### build a custom styles.json

```bash
npx tailwind-react-native@latest build
```

- tailwind.config.js in cwd will be used for any customizations

### using your own config / styles

```jsx
import styleFn, { create } from "tailwind-react-native/style";
import styles from "./styles.json";

const style = create(styleFn, styles);

style("flex-1 bg-green-500 py-12");
```

### future plans

- more documentation on classes available
- dynamic color ios / theme / screen size apis
- basic animation api
