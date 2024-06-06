import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  dts: true,
  clean: true,
  external: ["react", "react-dom", "jotai"],
  outDir: "./dist",
  skipNodeModulesBundle: true,
  treeshake: true,
  sourcemap: "inline",
  minify: true,
});
