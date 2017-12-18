const fs = require('fs');

// code to fetch all notes from file and use this fn inside of notes.js
var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json');
	    notes = JSON.parse(notesString);
	    return notes;
		console.log('notes:',notes)
		}catch(e){
			return [];
		}
};

// code to save the notes and used this function inside of notes.js
var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json' , JSON.stringify(notes));
};

// code to add notes
var addNote = (title , body) => {
 var notes = fetchNotes();
 var note = {
 	title,
 	body
 };

// to check the duplicate notes filter() is userd as arrow function
var duplicateNotes = notes.filter((note) => note.title === title);
if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
		console.log('File is ready')			
	}
	else{
		console.log('Duplicate exittss',note.title);
	}

};

 // code to remove notes
var removeNote = (title) => {
	var notes = fetchNotes(); //get all notes first
	var filterdNotes = notes.filter((note) => note.title !== title) // filter notes according to the title argument
	saveNotes(filterdNotes); // after removing saving the array of new notes
	 	
 	return notes.length != filterdNotes.length;
 };
 // code to read Notes
 var getNote = (title) => {
 	var notes = fetchNotes(); //fetch the list first
 	var filteredNotes = notes.filter((note) => note.title === title) // get filteredNotes
 	return filteredNotes[0]; //if note exist than return otherwise return undefind
 }

// code to call logged note
 var logNote = (note) =>{
 	debugger;
 	console.log('--');
	console.log(`Body : ${note.body}`);
	console.log(`Title: ${note.title}`);
 }

// code to get all notes
var getAll = () => {
	return fetchNotes();
}

// Mendatory to add every function in exports to call in the main code
module.exports = {
	addNote:addNote,
	removeNote:removeNote,
	getNote:getNote,
	logNote:logNote,
	getAll:getAll
	}