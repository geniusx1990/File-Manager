import fs from "fs";
import { absolutePath } from "./absolutePath.js";

export function rn(name, newName) {
  const path = absolutePath(name ? name : "");
  const finalPath = absolutePath(newName ? newName : "");

  if (!name || !newName || !fs.existsSync(path) || fs.existsSync(finalPath)) {
    process.emit("message", "Operation failed");

    return;
  }

  fs.rename(path, newName, (err) => {
    if (err) {
      process.emit("message", "Operation failed");
    } else {
      process.emit("message", "test");
    }
  });
}
