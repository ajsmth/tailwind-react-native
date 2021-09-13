import * as React from "react";
import {
  View,
  Image,
  Text as RNText,
} from "react-native";

import sx from "./styles";

import { create } from "react-native-primitives";

// TODOs

// -> fix theme so that it works with fast refresh
// -> animation view / text
// -> apply arbitrary props for a given variant (e.g a11y traits for a heading)

const Text = create(RNText, {
  variants: {
    color: {
      success: sx("text-green-500"),
      danger: sx("text-red-500"),
    },

    variant: {
      h1: sx("text-4xl font-bold"),
      h2: sx("text-3xl font-semibold"),
      h3: sx("text-2xl font-medium"),
      h4: sx("text-xl font-medium"),
      p: sx("text-normal font-normal"),
    },
  },

  queries: {
    appearance: {
      // light: sx("border-2 border-red-200"),
      // dark: sx("border-4 border-blue-200"),
    },
  },
});

const V = create(View, {
  base: {},
  variants: {
    variant: {
      base: {
        flex: 1,
      },
    },

    color: {
      test: {},
      success: sx("text-green-500"),
      danger: sx("text-red-500"),
    },
  },

  queries: {
    appearance: {
      light: {
        flex: 1,
      },
    },
  },
});

export default function App() {
  return (
    <View style={sx("flex-1 pt-24")}>
      <V variant="base" color="success" />
      <Text variant="h2" color="success">
        Hi
      </Text>
    </View>
  );
}

create(Image, {
  base: {},
  variants: {},
});

// const View = createViewComponent({
//   base: {},

//   variants: {
//     flex: {},
//   },
// });

// const Image = createImageComponent({
//   base: {
//     resizeMode: "contain",
//   },
//   variants: {},
// });

// const Text = createTextComponent({
//   base: sx("flex-1"),

//   variants: {
//     color: {
//       success: sx("text-green-500"),
//       danger: sx("text-red-500"),
//     },

//     variant: {
//       h1: sx("text-4xl font-bold"),
//       h2: sx("text-3xl font-semibold"),
//       h3: sx("text-2xl font-medium"),
//       h4: sx("text-xl font-medium"),
//       p: sx("text-normal font-normal"),
//     },
//   },

//   queries: {
//     appearance: {
//       // light: sx("border-2 border-red-200"),
//       // dark: sx("border-4 border-blue-200"),
//     },
//   },
// });
