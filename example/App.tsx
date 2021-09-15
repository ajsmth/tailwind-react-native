import * as React from "react";
import { View, Text } from "react-native";

import sx from "./styles";

export default function App() {
  return (
    <View style={sx("p-8 pt-24")}>
      <Text style={sx("text-5xl font-black")}>Hi</Text>
    </View>
  );
}
