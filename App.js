import React from "react";
import { Platform, useColorScheme, View } from "react-native";

import style from "./style";

export default function App() {
  const status = "success";
  const loading = true;
  const theme = useColorScheme();
  const os = Platform.OS;

  return (
    <View style={style("flex-1 p-24")}>
      <View
        style={style("w-24 h-24 light:bg-platform-red loading:scale-110 success:border-2 ios:translate-y-12", {
          status,
          loading,
          theme,
          os,
        })}
      />
    </View>
  );
}
