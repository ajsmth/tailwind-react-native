import { ViewStyle } from "react-native";

export function create<T>(
  stylesJson: T
): {
  style: (classNames: Array<keyof T> | string) => ViewStyle;

  variant: (
    classNames:
      | Record<string, Array<keyof T>>
      | Record<string, string>
      | string,
    dynamicValue: any
  ) => ViewStyle;

  useTransition: (
    classNames:
      | Record<string, Array<keyof T>>
      | Record<string, string>
      | string,
    dynamicValue: any
  ) => ViewStyle;
};

import JSON from "./styles.json";
type Keys = keyof typeof JSON;

export function style(classNames: string | Keys[]): ViewStyle;

export function variant(
  classNames: Record<string, Keys[]> | Record<string, string> | string,
  dynamicValue: any
): ViewStyle;

export function useTransition(
  classNames: Record<string, Keys[]> | Record<string, string> | string,
  dynamicValue: any
): ViewStyle;
