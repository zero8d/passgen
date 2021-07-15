#!/usr/bin/env node
const chalk = require("chalk");
const program = require("commander");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const log = console.log;
const clipBoardy = require("clipboardy");
program.version("1.0.0").description("Simple Password Generator");

program.option("-l, --length <number>", "length of password", "8");
program.option("-s, --save", "Save password to passwords.txt");
program.option("-nn, --no-numbers", "Remove numbers");
program.option("-ns, --no-symbols", "Remove symbols");
program.parse();
const { length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

if (save) {
  savePassword(generatedPassword);
}
clipBoardy.writeSync(generatedPassword);
log(chalk.blue("Generated password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard"));
