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
date.textContent = lastUpdated (note)



noteBody.addEventListener('input', function handleBodyChange(e){
    let today = new Date()
    let updateDate = Date.parse(today)

note.Body = e.target.value
note.Updated = updateDate
date.textContent = lastUpdated (note)
saveNote(notes)
}
)


noteTitle.addEventListener('input', function handleTitleChange(e) {
    let today = new Date()
    let updateDate = Date.parse(today)
    note.Title = e.target.value
    note.Updated = updateDate
    date.textContent = lastUpdated (note)
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
        date.textContent = lastUpdated (note)
    }
})