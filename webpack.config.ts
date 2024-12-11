import path from "path";
import webpack from "webpack";
import { buildConfig } from "./configs/build/buildConfig";
import type { BuildMode, BuildOptions, BuildPath } from "./configs/build/types";

const paths: BuildPath = {
  entry: path.resolve(__dirname, "index.ts"),
  output: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode: BuildMode = "development";

const options: BuildOptions = {
  mode,
  paths,
};

const config: webpack.Configuration = buildConfig(options);

export default config;
