import path from "path";
import process from "process";

export const absolutePath = (pathToDir) => {
  return path.isAbsolute(pathToDir)
    ? pathToDir
    : path.resolve(process.cwd(), pathToDir);
};
