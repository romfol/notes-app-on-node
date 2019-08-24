const chalk = require('chalk');
const yargs = require('yargs'); 
const notes = require("./notes")



//  console.log(yargs);
// console.log(process.argv);
// console.log(validator.isEmail('ddd@gmail.com'));
yargs.command({
  command: 'add',
  describe: 'listing',
  handler: function() {
    console.log('11wsqws')
  }
})

console.log(yargs.argv);