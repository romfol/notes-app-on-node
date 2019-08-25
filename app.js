const chalk = require('chalk');
const yargs = require('yargs'); 
const notes = require("./notes")



//  console.log(yargs);
// console.log(process.argv);
// console.log(validator.isEmail('ddd@gmail.com'));
yargs.command({
  command: 'add',
  describe: 'add new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log(argv.title, argv.body);
    notes.addNote(argv.title, argv.body);
  } 
})

yargs.parse();