import React from "react";
import { Platform, Text, View } from "react-native";

import styles from "./styles.json";
import { create } from "./fns";
const { style, variant } = create(styles);

export default function App() {
  return (
    <View style={style("flex-1 p-24")}>
      <View
        style={[
          style("w-12 h-24 bg-platform-red"),
          variant("ios:bg-platform-red", Platform.OS),
        ]}
      />
      <Text style={style("text-2xl")}>Hi</Text>
    </View>
  );
}
