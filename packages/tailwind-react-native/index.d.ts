export function create<T>(
  stylesJson: T
): {
  style: (classNames: Array<keyof T> | string) => any;

  variant: (
    classNames:
      | Record<string, Array<keyof T>>
      | Record<string, string>
      | string,
    dynamicValue: any
  ) => any;

  useTransition: (
    classNames:
      | Record<string, Array<keyof T>>
      | Record<string, string>
      | string,
    dynamicValue: any
  ) => any;
};

import JSON from "./styles.json";
type Keys = keyof typeof JSON;

export function style(classNames: string | Keys[]): any;

export function variant(
  classNames: Record<string, Keys[]> | Record<string, string> | string,
  dynamicValue: any
): any;

export function useTransition(
  classNames: Record<string, Keys[]> | Record<string, string> | string,
  dynamicValue: any
): any;
