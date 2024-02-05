import { chdir } from "process";
import { homedir } from "os";

export function homeDirectory() {
  try {
    chdir(homedir());
  } catch (e) {
    process.emit("message", "Operation failed");
  }
}
