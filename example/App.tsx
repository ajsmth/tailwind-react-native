import React from "react";
import { Animated, Button, Text, View } from "react-native";

import styles from "./styles.json";
import { create } from "./lib";

const { style, variant, useTransition } = create(styles);

export default function App() {
  const [status, setStatus] = React.useState("loading");

  const transition = useTransition(
    {
      success:
        "scale-100 opacity-100 rounded-lg translate-y-10 translate-x-12 rotate-90",
      loading:
        "opacity-90 scale-95 rounded-none translate-y-56 translate-x-0 rotate-0",
    },
    status
  );

  return (
    <View style={style("flex-1 p-24")}>
      <Animated.View style={[style("w-12 h-24  bg-red-500"), transition]} />
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
