export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
}

export type BuildMode = "development" | "production";

export interface BuildPath {
  html: string;
  output: string;
  entry: string;
}
