// render saved notes


function getSavedNotes() {

  const notesJSON = localStorage.getItem('notes')


if (notesJSON !== null) {
return (JSON.parse(notesJSON))

} 
else {
    return []
}

}
 // delete Note
 const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
      return note.id === id
  })

  if (noteIndex > -1) {
      notes.splice(noteIndex, 1)
  }
}


//save Note

function saveNote () {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// render note title
function generateNoteDOM(note) {
  
const NoteElement = document.createElement('div')
const textElement = document.createElement('a')
textElement.setAttribute('href', `./editnote.html#${note.id}`)

// set up delete button
const button = document.createElement("button")
button.textContent = "x"
NoteElement.appendChild(button)
button.addEventListener("click", function () {
  removeNote(note.id)
  getSavedNotes(notes)
  renderNotes(notes, filters)
})

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