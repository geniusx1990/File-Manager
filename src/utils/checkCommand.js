import { up } from "./nwd/up.js";
import { cd } from "./nwd/cd.js";
import { cwd } from "process";
import { ls } from "./nwd/ls.js";
import { cat } from "./cat.js";
import { add } from "./add.js";
import { rn } from "./rn.js";
import { cp } from "./cp.js";
import { mv } from "./mv.js";
import { rm } from "./rm.js";
import { hash } from "./hash.js";

export function checkCommand(cmd) {
  const cmdArgs = cmd.split(" ");
  const [command, ...args] = cmdArgs;
  switch (command) {
    case ".exit":
      process.exit();

    case "up":
      up();
      break;

    case "cd":
      cd(args[0]);
      break;

    case "ls":
      ls(cwd());
      break;

    case "cat":
      cat(args[0]);
      break;

    case "add":
      add(args[0]);
      break;

    case "rn":
      rn(args[0], args[1]);
      break;

    case "cp":
      cp(args[0], args[1]);
      break;

    case "mv":
      mv(args[0], args[1]);
      break;

    case "rm":
      rm(args[0]);
      break;

    case "hash":
      hash(args[0]);
      break;

    default:
      process.emit("message", "Invalid input");
  }
}
