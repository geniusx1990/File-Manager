import readline from "readline";
import { cwd } from "process";
import { homeDirectory } from "./utils/homeDirectory.js";
import { checkCommand } from "./utils/checkCommand.js";
const args = process.argv.slice(2);

const userName = args[0].split("=")[1];
const userNameCapitilize = userName[0].toUpperCase() + userName.slice(1);
console.log(`Welcome to the File Manager, ${userNameCapitilize}!`);
homeDirectory();
console.log(`You are currently in ${cwd()}`);

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.on("line", (cmd) => {
  checkCommand(cmd);
});

process.on("message", (msg) => {
  if (msg !== "test") {
    console.log(msg);
  }
  console.log(`You are currently in ${cwd()}`);
});

process.on("exit", () => {
  console.log(
    `Thank you for using File Manager, ${userNameCapitilize}, goodbye!`
  );
});
