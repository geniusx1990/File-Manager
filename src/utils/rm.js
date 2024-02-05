import fs from "fs";
import { absolutePath } from "./absolutePath.js";

export function rm(path) {
  const resolvedPathToFile = absolutePath(path ? path : "");

  if (!path || !fs.existsSync(resolvedPathToFile)) {
    process.emit("message", "Operation failed");

    return;
  }

  fs.unlink(resolvedPathToFile, (err) => {
    if (err) {
      process.emit("message", "Operation failed");
    }

    process.emit("message", "test");
  });
}
