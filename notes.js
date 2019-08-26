const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => title===note.title)

  if(!duplicateNote) {
     notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes);
    console.log(chalk.green.inverse('Note added'))
  } else {
    console.log(chalk.bold.red("Same note title already exists!"));
    
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(note => title !== note.title)

  if (notes.length > updatedNotes.length) {
    saveNotes(updatedNotes);
    console.log(chalk.green.inverse('Note removed'));
  } else {
    console.log(chalk.red.inverse('No Note found'));
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
}

const readNote = (title) => {
  const notes = loadNotes();

  const properNote = notes.find(note => title === note.title);
  properNote ? console.log(chalk.blue(properNote.title), properNote.body) : console.log(chalk.red.inverse("no note found"));
}

const saveNotes = notes => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
}

module.exports = {
   addNote,
   loadNotes,
   removeNote,
   readNote
 }