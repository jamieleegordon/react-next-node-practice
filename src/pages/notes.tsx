import { useEffect, useState } from "react"

export default function Notes() {
    const [newNote, setNewNote] = useState<string>("")
    const [notes, setNotes] = useState<string[]>([])
    const [message, setMessage] = useState<string>("")
    
    useEffect(() => {
        const fetchNotes = async () => {
            const res = await fetch('/api/notes')
            const data = await res.json()
            setNotes(data.notes)
            console.log(data.notes)
        }
        fetchNotes()
    }, [])

    const handleAddNote = async () => {
        try {
          const res = await fetch("/api/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ newNote }), // send the note
          })
    
          const data = await res.json()
          if (res.ok) {
            setMessage(data.message) // "Note added"
            setNotes(prev => [...prev, newNote])
          } else {
            setMessage(data.error)
          }
        } catch (err) {
          setMessage("Network error")
        }
      }

    return (
        <div>
            <h1>Notes</h1>

            <h2>New note</h2>
            <form>
                <input
                    placeholder="Enter new note"
                    onChange={e => setNewNote(e.target.value)}
                    value={newNote}
                    required
                >
                </input>       
                <button
                    type="button"
                    onClick={handleAddNote}
                >
                    Create note
                </button>         
            </form>
            {message && <p>{message}</p>}

            <h1>Current notes</h1>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    )
}