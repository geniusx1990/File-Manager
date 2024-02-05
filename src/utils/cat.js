import fs from "fs";
import { absolutePath } from "./absolutePath.js";

export function cat(pathToFile) {
  const path = absolutePath(pathToFile ? pathToFile : "");

  if (!pathToFile || !fs.existsSync(path)) {
    process.emit("message", "Operation failed");

    return;
  }

  const readStream = fs.createReadStream(path);

  readStream.pipe(process.stdout);

  readStream.on("error", () => {
    process.emit("message", "Operation failed");
  });

  readStream.on("end", () => {
    process.emit("message", "test");
  });
}
