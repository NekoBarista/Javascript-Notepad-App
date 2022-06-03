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
 let removeNote = function (id) {
  let noteIndex = notes.findIndex(function (note) {
      return note.id === id
  })

  if (noteIndex > -1) {
      notes.splice(noteIndex, 1)
  }
}


//save Note

function saveNote (notes) {
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
  saveNote (notes)
  renderNotes(notes, filters)
})

// set up note title text
if (note.Title.length > 0) {
  textElement.textContent = note.Title

}

else {
  textElement.textContent = "Untitled Note"
}
NoteElement.appendChild(textElement)

return NoteElement
}

// sort notes by dropdown options
const sortNotes = function (notes, sortBy) {
  console.log(sortBy)
  if (sortBy === 'byEdited') {
      return notes.sort(function (a, b) {
          if (a.Updated > b.Updated) {
              return -1
          } else if (a.Updated < b.Updated) {
              return 1
          } else {
              return 0
          }
      })
  } else if (sortBy === 'newest') {
      return notes.sort(function (a, b) {
          if (a.Created > b.Created) {
              return -1
          } else if (a.Created < b.Created) {
              return 1
          } else {
              return 0
          }
      })
  } else if (sortBy === 'alphabetical') {
      return notes.sort(function (a, b) {
          if (a.Title < b.Title) {
              return -1
          } else if (a.Title > b.Title) {
              return 1
          } else {
              return 0
          }
      })
  } else {
      return notes
  }
}


//render application notes

function renderNotes (notes, filters) {
  notes = sortNotes(notes, filters.sortBy)
    let filteredNotes = notes.filter(function(note) {
      return note.Title.toLowerCase().includes(filters.searchText.toLowerCase())
    
    })

    document.querySelector("#notes").innerHTML=" "
    filteredNotes.forEach(function (note) {
      let NoteElement = generateNoteDOM(note)
      document.querySelector("#notes").appendChild(NoteElement)
      
    
    })
    }