import React from "react";

const Note = ({ note }) => {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      {note.text}
    </div>
  );
};

export default Note;
