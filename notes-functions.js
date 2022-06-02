
// render saved notes
console.log(uuidv4())

function getSavedNotes() {

const notesJSON = localStorage.getItem('notes')


if (notesJSON !== null) {
return (JSON.parse(notesJSON))

} 
else {
    return []
}

}

// render note title
function generateNoteDOM(note) {
  
const NoteElement = document.createElement('div')
const textElement = document.createElement('span')

// set up delete button
const button = document.createElement("button")
button.textContent = "x"
NoteElement.appendChild(button)
// set up note title text
if (note.title > 0) {
  textElement.textContent = note.Title

}

else {
  textElement.textContent = "Untitled Note"
}
NoteElement.appendChild(textElement)

return NoteElement
}


//render application notes

function renderNotes (notes, filters) {
    let filteredNotes = notes.filter(function(note) {
      return note.Title.toLowerCase().includes(filters.searchText.toLowerCase())
    
    })
    
    document.querySelector("#notes").innerHTML=" "
    
    filteredNotes.forEach(function (note) {
      const NoteElement = generateNoteDOM(note)
      document.querySelector("#notes").appendChild(NoteElement)
    
    })
    }