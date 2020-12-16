import React from "react";
import { View } from "react-native";

import { create } from "./style";
import styles from "./styles.json";
const style = create(styles);

export default function App() {
  return (
    <View style={style("flex-1 p-24")}>
      <View style={[style("w-24 h-24 bg-platform-red")]} />
    </View>
  );
}
