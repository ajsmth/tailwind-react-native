# tailwind-react-native

### why

`tailwind-rn` and other alternatives are great but rely on converting tailwindcss into react native. this library focuses on whats available in react native and matches it to tailwindcss naming conventions. this means things like platform colors, dynamic colors, and other native apis are available for use in your styles (now or in the near future) - aka this library is concerned with apis that tailwindcss will never be concerned with, but you might be

### install

```bash
yarn add tailwind-react-native
```

### functions

```jsx
import style from "tailwind-react-native/style";
import transform from "tailwind-react-native/transform";

function MyComponent() {
  return (
    <View style={style("flex-1 bg-platform-red")}>
      <View
        style={[
          style("h-12 w-12 bg-platform-blue"),
          transform("translate-y-12 rotate-x-12"),
        ]}
      />
    </View>
  );
}
```

### cool stuff

```jsx
// custom selectors allow you to quickly apply styles by specific platform

<View
  style={
    style("h-12 w-12 ios:bg-blue-500 android:bg-red-500 web:bg-yellow-500"),
  }
/>
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

const customStyleFn = create(styles, styleFn);
const customTransform = create(styles, transformFn);

const style = customStyleFn("flex-1 bg-green-500 py-12");
```

### future plans

- more documentation on classes available
- dynamic color ios / theme / screen size apis
- basic animation api 
