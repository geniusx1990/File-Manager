const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("Please type your name.");
  process.exit(1);
}
const userName = args[0].split("=")[1];
const userNameCapitilize = userName[0].toUpperCase() + userName.slice(1);
console.log(`Welcome to the File Manager, ${userNameCapitilize}!`);
