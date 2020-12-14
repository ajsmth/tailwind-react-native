import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import style from "./style";
import transform from "./transform";
import dynamic from './dynamic'

export default function App() {
  return (
    <View style={style("flex-1 items-center justify-center")}>
      <Text style={style("text-3xl text-blue-500 font-semibold")}>
        Open up App.js to start working on your app!
      </Text>
      <View
        style={[
          style("bg-red-500 w-12 h-12"),
          transform("translate-x-12 -translate-y-12 rotate-60"),
          dynamic('sm:bg-purple-500')
        ]}
      />
      <StatusBar style="auto" />
    </View>
  );
}
