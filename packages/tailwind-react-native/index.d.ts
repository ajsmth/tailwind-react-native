import { StyleProp } from "react-native";

export default function create<T>(
  stylesJson: T
): (classNames: Array<keyof T> | string) => StyleProp;
