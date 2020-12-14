# tailwind-react-native

### why

this library focuses on whats available in react native and matches it to tailwindcss naming conventions. this means things like platform colors, dynamic colors, and other native apis are available for use in your styles (now or in the near future) - aka this library is concerned with apis that tailwindcss will probably never include, but you might want to use in your apps

### install

```bash
yarn add tailwind-react-native
```

### functions

```jsx
import style from "tailwind-react-native/style";
import transform from "tailwind-react-native/transform";
import dynamic from "tailwind-react-native/dynamic";

function MyComponent() {
  return (
    <View style={style("flex-1 bg-platform-red")}>
      <View
        style={[
          style("h-12 w-12 bg-platform-blue"),
          transform("translate-y-12 rotate-x-12"),
          dynamic("w-12 sm:w-14 dark:bg-platform-purple")
        ]}
      />
    </View>
  );
}
```

### available styles

see the plugins available here: https://github.com/ajsmth/tailwind-react-native/tree/main/cli/plugins

### cool stuff

```jsx
// custom selectors allow you to quickly apply styles by specific platform

<View
  style={style(
    "h-12 w-12 ios:bg-blue-500 android:bg-red-500 web:bg-yellow-500"
  )}
/>
```

```jsx
import dynamic from "tailwind-react-native/dynamic";

// dynamic values based on width / theme
<View
  style={dynamic("h-12 w-12 light:bg-purple-500 lg:bg-blue-500 sm:bg-red-500")}
/>;
```

### build a custom styles.json

```bash
npx tailwind-react-native@latest build
```

- tailwind.config.js in cwd will be used for any customizations

### using your own config / styles

```jsx
import styleFn from "tailwind-react-native/style";
import transformFn from "tailwind-react-native/transform";
import create from "tailwind-react-native/create";
import styles from "./styles.json";

const style = create(styleFn, styles);
const transform = create(transformFn, styles);

style("flex-1 bg-green-500 py-12");
```

### future plans

- more documentation on classes available
- dynamic color ios / theme / screen size apis
- basic animation api
