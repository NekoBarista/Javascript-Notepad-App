let notes = getSavedNotes()


const filters = {
  searchText: ''
}


renderNotes(notes, filters)


function handleCreateClick() {
  const id =  uuidv4()
 notes.push({
   id: id, 
   Title: "",
 Body:"",
})
saveNote(notes)
location.assign(`/editnote.html#${id}`)
}

document.querySelector("#create-note").addEventListener('click', handleCreateClick)



function searchNotes(event) {
  filters.searchText = event.target.value
  renderNotes(notes, filters)
}

function handleSubmit(event) {
event.preventDefault()
console.log(event.target.elements.firstName.value)
event.target.elements.firstName.value = ""

}


function handleCheck(event) {
  console.log(event.target.checked)

}

function sortBy(event) {
  console.log(event.target.value)
}

document.querySelector("#search-text").addEventListener("input",searchNotes)
document.querySelector('#sort').addEventListener("change", sortBy)



window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
      notes = JSON.parse(e.newValue)
      note = notes.find(function (note) {
          return note.id === noteId
      })

      if (note === undefined) {
          location.assign('/index.html')
      }

      noteTitle.value = note.title
      noteBody.value = note.body
  }
})


const now = new Date ('January 21 1998 6:26:01' )
console.log(now.toString())
console.log(`Year:${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Date: ${now.getDate()}`)
console.log(`Hour:${now.getHours()}`)
console.log(`Minute:${now.getMinutes()}`)
console.log(`Seconds:${now.getSeconds()}`)