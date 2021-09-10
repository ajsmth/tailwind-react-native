# tailwind-react-native

this library is a configurable, react native specific port of tailwind. it supports custom configurations fairly thoroughly, has typescript definitions, and the ability to purge unused styles from your final build

## alternatives

- https://github.com/z0al/react-native-styled.macro - super cool build time macro
- https://github.com/vadimdemedes/tailwind-rn - tailwindcss converted to stylesheet styles

## install

```bash
yarn add tailwind-react-native
```

## quickstart

quickly generate config files and customizable style function for use in your app by using the init command:

```bash
npx tailwind-react-native@latest init
```

## api

```jsx
import React from "react";
import sx from "../styles";

export default function App() {
  return (
    <View style={sx("flex-1 p-24")}>
      <View style={sx("w-24 h-24 bg-platform-red")} />
    </View>
  );
}
```

if you want to make use of the typescript definitions, you can use an array syntax like so:

```tsx
import * as React from "react";
import sx from "../styles";

export default function App() {
  return <View style={sx(["flex-1", "p-24"])} />;
}
```

## variants / selectors

you can add custom selectors that represent dynamic styles in your components

```jsx
import sx from "../styles";

function MyComponent() {
  const theme = useColorScheme();

  const platformStyles = sx(
    Platform.select({
      ios: "bg-platform-yellow",
      android: "bg-platform-blue",
      web: "bg-platform-red",
    }),
    theme === "dark" && "bg-white"
  );

  return <View style={platformStyles} />;
}
```

this can be useful for applying different styles based on enums like:

- Platform.OS
- useColorScheme()
- loading state

## customizing your styles

this library tries its best to stay as close to tailwind as possible. that being said, there are some things that are unique to one platform or another so it's necessary to be able to customize for one platform or another. this is pretty easy to do within your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // ... your other customizations

      // this will set `rounded-lg` to be 32 pts on android, and 45% on other platforms
      // this pattern is applicable to every style in your config file
      borderRadius: {
        lg: {
          android: 32,
          default: "45%",
        },
      },
    },
  },
};
```

## build and rebuild custom styles

```bash
npx tailwind-react-native@latest build --config path/to/config --out path/for/styles
```

## how it works:

there are two parts to this library - the cli which generates a `styles.json` file and the `create` function which takes this json and makes useful helper functions that can be used in your code:

```jsx
import create from "tailwind-react-native";
import styles from "./styles.json";

const fn = create(styles);

fn("flex-1 bg-green-500 py-12");
```

**_Note:_** this is what the `init` function of the cli does for you

## purging unused styles

```bash
npx tailwind-react-native@latest purge --config path/to/config --out path/for/styles
```

you can configure the purge function via your tailwind.config.js file:

```js
module.exports = {
  // ...rest of your config
  purge: {
    files: "**/*.{js,tsx}", // what file extensions to scan for styles
    whitelist: ["bg-red-500", "h-12"], // what classNames to keep regardless of what is scanned
  },
};
```

similar to purgecss - this will scan the source code of the directory and attempt to remove any unused styles in the project. you'll likely want to do this before building and / or deploying your app to reduce the bundle sizes included (styles.json is ~200kb out of the box).

as noted by the tailwindcss docs, dynamic styles are a tough nut to crack - if you know the dynamic styles your app is using, you can specify them in the whitelist property of your tailwind config to keep these styles from being stripped.

## future plans

- more documentation on classes available
- improve android platform colors, update ios platform colors to include UI colors
