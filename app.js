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
  handler(argv) {
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
  handler(argv) {
    notes.removeNote(argv.title);
  } 
})

yargs.command({
  command: 'list',
  describe: 'list notes',
  handler() {
    console.log(chalk.blue.inverse('Your notes'));
    notes.loadNotes().forEach(e => {
      console.log(chalk.yellow(e.title))
    });
  } 
})

yargs.parse();