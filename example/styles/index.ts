import { create } from "tailwind-react-native";

import styles from "./styles.json";

const { variant, style, useTransition } = create(styles);

export { style, useTransition, variant };
