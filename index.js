#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Unique and Simple Password Generator')

program
.option('-l, --length <number>', 'length of password', '8')
.option('-s, --save', 'save password to passwords.txt')
.option('-nn, --no-numbers', 'remove numbers')
.option('-ns, --no-symbols', 'remove symbols')
//limited symbols
.option('-ls, --limited-symbols <String>', 'limited symbols')
.parse()

const {length, save, numbers, symbols, limitedSymbols} = program.opts()

//console.log(numbers, symbols)

//get generated password
const generatedPassword = createPassword(length, numbers, symbols, limitedSymbols)

//Save to file
if(save) {
    savePassword(generatedPassword)
}
//copy to clipboard
clipboardy.writeSync(generatedPassword)

//output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))