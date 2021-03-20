import * as React from "react";
import { Animated, Button, Text, View } from "react-native";

import styles from "./styles.json";

import { create } from "tailwind-react-native";

const { style, variant, useTransition } = create(styles);

export default function App() {

  console.log(style('shadow h-10 w-10 border bg-white'))
  return (
    <View style={[style(["flex-1", "p-24"])]}>

      <View style={style('shadow h-10 w-10 bg-white')} />
      <MyComponent />
      <MyComponent />
    </View>
  );
}

function MyComponent() {
  const [status, setStatus] = React.useState("loading");

  const useTransitionStyle = useTransition(
    {
      success: "scale-110",
      loading: "scale-75",
    },
    status
  );

  return (
    <View>
      <Animated.View
        style={[style("w-12 h-12 bg-red-500 rounded-full"), useTransitionStyle]}
      />
      <Text style={style(["text-2xl"])}>Status: {status}</Text>
      <Button
        title="toggle"
        onPress={() =>
          setStatus((s) => (s === "success" ? "loading" : "success"))
        }
      />
    </View>
  );
}
