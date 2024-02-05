import { chdir } from "process";
import { isValidPath } from "../isValidPath.js";
import { absolutePath } from "../absolutePath.js";

export const cd = (pathToDir) => {
  if (!pathToDir || !isValidPath(absolutePath(pathToDir ? pathToDir : ""))) {
    process.emit("message", "Operation failed");
  }

  try {
    chdir(pathToDir);
    process.emit("message", "test");
  } catch (err) {
    process.emit("message", "Operation failed");
  }
};
