import fs from "fs";
import path from "path";
import { absolutePath } from "./absolutePath.js";

export function mv(pathToFile, pathToNewDirectory) {
  const resolvedPathToFile = absolutePath(pathToFile ? pathToFile : "");
  const resolvedPathToCopy = absolutePath(
    pathToNewDirectory ? pathToNewDirectory : ""
  );
  const fileName = path.basename(resolvedPathToFile);
  const resolvedCopyFileName = path.join(resolvedPathToCopy, fileName);

  if (
    !pathToFile ||
    !pathToNewDirectory ||
    !fs.existsSync(resolvedPathToFile) ||
    !fs.existsSync(resolvedPathToCopy) ||
    fs.existsSync(resolvedCopyFileName)
  ) {
    process.emit("message", "Operation failed");

    return;
  }

  const readStream = fs.createReadStream(resolvedPathToFile);
  const writeStream = fs.createWriteStream(resolvedCopyFileName);

  readStream.on("error", () => {
    process.emit("message", "Operation failed");
  });

  writeStream.on("error", () => {
    process.emit("message", "Operation failed");
  });

  readStream.pipe(writeStream);

  writeStream.on("close", () => {
    fs.unlink(resolvedPathToFile, (err) => {
      if (err) {
        process.emit("message", "Operation failed");

        return;
      }
    });

    process.emit("message", "test");
  });
}
