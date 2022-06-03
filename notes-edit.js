const noteTitle = document.querySelector("#note-title")
const noteBody = document.querySelector('#note-body')
const deleteButton = document.querySelector('#delete-button')

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

noteBody.addEventListener('input', function handleBodyChange(e){
note.Body = e.target.value
saveNote(notes)
}
)


noteTitle.addEventListener('input', function handleTitleChange(e) {
    note.Title = e.target.value
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