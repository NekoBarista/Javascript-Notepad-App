'use strict'


const getSavedNotes = () => {

const notesJSON = localStorage.getItem('notes')
try {
  return notesJSON ? JSON.parse(notesJSON): []
}
catch (e) {
  return []
}

}


const removeNote = (id) => {
  let noteIndex = notes.findIndex((note) => note.id === id
  )

  if (noteIndex > -1) {
      notes.splice(noteIndex, 1)
  }
}



const saveNote =  (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

const generateNoteDOM = (note) => {
  
const NoteElement = document.createElement('div')
const textElement = document.createElement('a')
textElement.setAttribute('href', `./editnote.html#${note.id}`)

// set up delete button
const button = document.createElement("button")
button.textContent = "x"
NoteElement.appendChild(button)
button.addEventListener("click",  () => {
  removeNote(note.id)
  getSavedNotes(notes)
  saveNote (notes)
  renderNotes(notes, filters)
})

if (note.Title.length > 0) {
  textElement.textContent = note.Title

}

else {
  textElement.textContent = "Untitled Note"
}
NoteElement.appendChild(textElement)

return NoteElement
}

const sortNotes =(notes, sortBy) => {
  console.log(sortBy)
  if (sortBy === 'byEdited') {
      return notes.sort((a, b) => {
          if (a.Updated > b.Updated) {
              return -1
          } else if (a.Updated < b.Updated) {
              return 1
          } else {
              return 0
          }
      })
  } else if (sortBy === 'newest') {
      return notes.sort((a, b) => {
          if (a.Created > b.Created) {
              return -1
          } else if (a.Created < b.Created) {
              return 1
          } else {
              return 0
          }
      })
  } else if (sortBy === 'alphabetical') {
      return notes.sort((a, b) => {
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



const renderNotes = (notes, filters) => {
notes = sortNotes(notes, filters.sortBy)
    let filteredNotes = notes.filter((note) => note.Title.toLowerCase().includes(filters.searchText.toLowerCase())
    )

    document.querySelector("#notes").innerHTML=" "

    if(filteredNotes.length > 0) {    filteredNotes.forEach((note) => {
      let NoteElement = generateNoteDOM(note)
      document.querySelector("#notes").appendChild(NoteElement)
      
    
    })}

    else {const emptyMessage = document.createElement('p')
    emptyMessage.textContent = "You have no notes - create one to get started!"
    document.querySelector("#notes").appendChild(emptyMessage)
    emptyMessage.classList.add("empty-message")
  
  }

    }