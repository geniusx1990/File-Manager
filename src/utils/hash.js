import crypto from "crypto";
import fs from "fs";
import { absolutePath } from "./absolutePath.js";

export function hash(path) {
  const pathToFile = absolutePath(path ? path : "");

  if (!path || !fs.existsSync(pathToFile)) {
    process.emit("message", "Operation failed");

    return;
  }

  const hash = crypto.createHash("sha256");
  const reader = fs.createReadStream(pathToFile);

  reader.on("data", function (chunk) {
    hash.update(chunk);
  });

  reader.on("end", function () {
    const resultHash = hash.digest("hex");
    console.log(`hash: ${resultHash}`);
    process.emit("message", "test");
  });
}
