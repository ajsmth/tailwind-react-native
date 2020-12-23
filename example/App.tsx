import React from "react";
import { Animated, Button, Text, View } from "react-native";

import styles from "./styles.json";
import { create } from "./lib";

const { style, variant, useTransition } = create(styles);

export default function App() {
  return (
    <View style={style("flex-1 p-24")}>
      <MyComponent />
      <MyComponent />
    </View>
  );
}

function MyComponent() {
  const [status, setStatus] = React.useState("loading");

  const useTransitionStyle = useTransition(
    {
      success: "bg-red-500 scale-110",
      loading: "bg-blue-500 scale-90",
    },
    status
  );

  return (
    <View>
      <Animated.View
        style={[style("w-12 h-24  bg-red-500"), useTransitionStyle]}
      />
      <Text style={style("text-2xl")}>Status: {status}</Text>
      <Button
        title="toggle"
        onPress={() =>
          setStatus((s) => (s === "success" ? "loading" : "success"))
        }
      />
    </View>
  );
}
