import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
// const globals = { react: "React" };
const globals = {};
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/wing-git-branch-webpack-plugin.js",
      name: "wing-git-branch-webpack-plugin",
      format: "umd",
      globals,
    },
    {
      file: "dist/wing-git-branch-webpack-plugin.es.js",
      format: "es",
      globals,
    },
    {
      file: "dist/wing-git-branch-webpack-plugin.amd.js",
      format: "amd",
      globals,
    },
    {
      file: "dist/wing-git-branch-webpack-plugin.cjs.js",
      format: "cjs",
      globals,
    },
  ],
  // external: ["react"],
  plugins: [
    babel({ exclude: "**/node_modules/**", runtimeHelpers: true }),
    terser(),
  ],
};
