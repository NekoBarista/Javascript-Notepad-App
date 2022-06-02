const notes = getSavedNotes()


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



