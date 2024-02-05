import { cwd } from "process";
import { parse } from "path";
export function isCurrentRootDir() {
  const currentDir = cwd();
  const pathObj = parse(currentDir);

  return pathObj.root + pathObj.base === currentDir;
}
