import json from "@rollup/plugin-json";
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";


export default [
  {
    input: "src/index.js",
    output: {
      file: "build/index.js",
      format: "cjs",
    },
    plugins: [json()],
    external: ["react", "react-native"],
  },
  {
    input: "cli/index.js",
    output: {
      file: "build/cli.js",
      format: "cjs",
      exports: "default",
    },
    plugins: [commonjs(), terser()],
    external: ["fs", "path", "util", "glob", "cli-progress", "yargs/yargs", "yargs/helpers"],
  },
];
