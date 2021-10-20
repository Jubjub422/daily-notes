const notes = [
    {
        id: 1,
        subject: "leonid's toys JavaScript",
        date: "10/5/2021",
        feeling: "pretty good",
        timeSpent: 75
    }
]
const noteAboutToday = {
    id: 2,
    subject: "leonid's toys Javascript, more array fun",
    date: "10/6/2021",
    feeling: "tired but good about the material",
    timeSpent: 120

}

notes.push(noteAboutToday)


// for (const note of notes) {
//     console.log(`Note ${note.id}
//     Date: ${note.date}
//     Subject: ${note.subject}
//     How I'm doing: ${note.feeling}
//     How long it took: ${note.timeSpent}`)
// } 


// for (const note of notes) {
//     if (note.feeling === "pretty good") {
//         console.log (notes)
//     }
// }

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    
    note.id=idForNewNote

    notes.push(note)
}
const moreNewerNote = {
    subject: "loops and how to manipulate them",
    date: "10/6/2021",
    feeling: "getting a better grasp over the material",
    timeSpent: 240
}

createNote(moreNewerNote)


console.log(notes)