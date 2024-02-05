import fs from "fs";
import { absolutePath } from "./absolutePath.js";

export function add(fileName) {
  const path = absolutePath(fileName ? fileName : "");

  if (!fileName || fs.existsSync(path)) {
    process.emit("message", "Operation failed");

    return;
  }

  const writeStream = fs.createWriteStream(path);

  writeStream.on("error", () => {
    process.emit("message", "Operation failed");
  });

  writeStream.on("close", () => {
    process.emit("message", "ok");
  });

  writeStream.close();
}
