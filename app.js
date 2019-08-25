const chalk = require('chalk');
const yargs = require('yargs'); 
const notes = require("./notes")

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
    notes.addNote(argv.title, argv.body);
  } 
})

yargs.command({
  command: 'remove',
  describe: 'remove note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  } 
})

yargs.parse();