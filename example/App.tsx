import * as React from "react";
import { View } from "react-native";
import sx from "./styles";
import { create } from "react-native-primitives";

// TODOs

// -> fix theme so that it works with fast refresh
// -> animation view / text
// -> accept a function (e.g component) as the first arg
// -> typescript infer the correct type based on the primitive option provided
const Image = create("Image", {
  base: {
    
  }
})

const Text = create("Text", {
  props: {
    color: {
      success: sx("text-green-500"),
      danger: sx("text-red-500"),
    },
  },

  variants: {
    h1: sx("text-4xl font-bold"),
    h2: sx("text-3xl font-semibold"),
    h3: sx("text-2xl font-medium"),
    h4: sx("text-xl font-medium"),
    p: sx("text-normal font-normal"),
  },

  queries: {
    appearance: {
      // light: sx("border-2 border-red-200"),
      // dark: sx("border-4 border-blue-200"),
    },
  },
});

export default function App() {
  return (
    <View style={[sx(["flex-1", "p-24"])]}>
      <View style={sx("flex-1")}>
        <Text variant="h1">
          Hello
        </Text>
      </View>
    </View>
  );
}
