console.log('************* Starting app.js **********');

const yargs = require('yargs');
const lodash = require('lodash');
const notes = require('./notes.js');

const argv = yargs.argv; // to get arguments from CLI

var command = argv._[0]; // gettig first arguement 
// console.log('args',args);


if(command === 'add'){
	var note = notes.addNote(argv.title,argv.body);
	if(note){
		console.log('Note Created');
		notes.logNote(note);
	}
	else {
		console.log("Note not Created");
	}

}else if(command === 'remove'){
	var removedNote = notes.removeNote(argv.title);
	if(removedNote){
		console.log('Note is removed');
	}else {
		console.log('Note not found');
	}
}else if(command === 'list'){
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));

}else if(command === 'read'){
	var readedNote = notes.getNote(argv.title);
	if(readedNote){
		console.log('Note is Exists : ');
		notes.logNote(readedNote);
	}else {
		console.log('Note not exist');
	}
}