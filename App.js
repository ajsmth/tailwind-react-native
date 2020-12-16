import React from "react";
import { Button, View } from "react-native";

import { create } from "./style";
import styles from "./styles.json";
const style = create(styles);

export default function App() {
  const [status, setStatus] = React.useState("idle");

  return (
    <View style={style("flex-1 p-24")}>
      <View
        style={style("w-24 h-24 border error:scale-95 success:scale-125", {
          status,
        })}
      />

      <Button
        title="Toggle Status"
        onPress={() =>
          setStatus((s) => (s === "success" ? "error" : "success"))
        }
      />
    </View>
  );
}
