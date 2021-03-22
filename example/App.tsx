import * as React from "react";
import { View } from "react-native";
import { style } from "./styles";

export default function App() {
  return (
    <View style={[style(["flex-1", "p-24"])]}>
      <View style={style("flex-1 border border-gray-200")}>
        <View style={style("shadow h-12 w-12 bg-red-100 rounded-ish")} />
      </View>
    </View>
  );
}
