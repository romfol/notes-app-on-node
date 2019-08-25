const fs = require('fs');
const chalk = require('chalk');

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.filter(function(note) {
    return title===note.title;
  })

  if(duplicateNote.length === 0) {
     notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes);
  } else {
    console.log(chalk.bold.red("Same note title already exists!"));
    
  }
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
}

const saveNotes = function(notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
}

module.exports = {
   addNote: addNote,
   loadNotes: loadNotes
 }