#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Unique and Simple Password Generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .option("-k, --keyword <string>", "add a keyword in your password.", "")
  .parse();

const { length, save, numbers, symbols, keyword } = program.opts();
// console.log(length);
// console.log(numbers, symbols);
// console.log(keyword);

//get generated password
const generatedPassword = createPassword(length, numbers, symbols, keyword);

//Save to file
if (save) {
  savePassword(generatedPassword);
}
//copy to clipboard
clipboardy.writeSync(generatedPassword);

//output generated password
log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard"));
