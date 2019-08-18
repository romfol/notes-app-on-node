const fs = require('fs');
const notes = require("./notes")

fs.writeFileSync('notes.txt', 'file created by NodeJs!');
fs.appendFileSync('notes.txt', ' and appended by NodeJs!');


console.log(notes());