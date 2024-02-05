import process from "process";
import { sep } from "path";
import { isCurrentRootDir } from "../isCurrentRootDir.js";
import { cd } from "./cd.js";
export function up() {
  if (isCurrentRootDir()) {
    process.emit("message", "test");
    return;
  }
  const path = process.cwd().split(sep);
  path.pop();
  cd(path.join(sep));
}
