import * as React from "react";
import { View } from "react-native";
import { style } from "./styles";

export default function App() {
  return (
    <View style={[style(["flex-1", "p-24"])]}>
      <View style={style("flex-1 border")}>
        <View style={style("shadow h-10 w-10 bg-white rounded-ish")} />
      </View>
    </View>
  );
}
