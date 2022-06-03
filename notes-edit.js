const noteTitle = document.querySelector("#note-title")
const noteBody = document.querySelector('#note-body')
const deleteButton = document.querySelector('#delete-button')
const date = document.querySelector("#last-updated")

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
return note.id === noteId

})

if (note === undefined) {
 location.assign('/index.html')   
}

noteTitle.value = note.Title
noteBody.value = note.Body
date.textContent = setEditDate(note)

function setEditDate(note) {
   let updateDate = new Date (note.Updated)
   let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
   let month = months[updateDate.getMonth()];
   let hours = updateDate.getHours();
   if (hours < 10) {
     hours = `0${hours}`;
   }
   
   let minutes = updateDate.getMinutes();
   if (minutes < 10) {
     minutes = `0${minutes}`;
   }
   console.log(updateDate)
   return `Last updated: ${updateDate.getDay()}th of ${month}, ${updateDate.getFullYear()} at  ${hours}:${updateDate.getMinutes()}`
 


}

noteBody.addEventListener('input', function handleBodyChange(e){
    let updateDate = new Date()
note.Body = e.target.value
note.Updated = updateDate
setEditDate(note)
saveNote(notes)
}
)


noteTitle.addEventListener('input', function handleTitleChange(e) {
    let updateDate = new Date()
    note.Title = e.target.value
    note.Updated = updateDate
    setEditDate(note)
    saveNote(notes)
})


deleteButton.addEventListener('click', function deleteNote(e) {
    removeNote(note.id) 
    saveNote(notes)
    location.assign('./index.html')})

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