import create from "./create";
import styles from "./styles.json";

const { style, variant } = create(styles);

export default style;
export { variant, create, style };
