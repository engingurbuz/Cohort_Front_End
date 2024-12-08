import React, { useState } from "react";
import Note from "./components/Note";
import NoteInput from "./components/NoteInput";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>NotesApp</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <NoteInput addNote={addNote} />
      <div className="notes">
        {filteredNotes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </div>
    </div>
  );
}

export default App;
