import React from "react";
import { Text, View } from "react-native";

const style = () => {}

// const { style, variant } = create(styles);

export default function App() {
  return (
    <View style={style("flex-1 p-24")}>
      <View style={[style("w-24 h-24 bg-platform-red")]} />
      <Text style={style("text-2xl")}>Hi</Text>
    </View>
  );
}
