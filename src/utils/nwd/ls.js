import fs from "fs";

export const ls = (pathToDir) => {
  fs.readdir(pathToDir, (err, files) => {
    if (err) {
      process.emit("message", "Operation failed");
      return;
    }

    const tableData = files.map((file, index) => ({
      Name: file,
      Type: getFileType(file),
    }));

    console.table(tableData);

    process.emit("message", "test");
  });
};

const getFileType = (filename) => {
  const dotIndex = filename.lastIndexOf(".");
  return dotIndex === -1 ? "directory" : "file";
};
