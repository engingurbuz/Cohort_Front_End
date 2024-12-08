import React, { useState } from "react";

const NoteInput = ({ addNote }) => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const colors = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71"];

  const handleAdd = () => {
    if (text && color) {
      addNote({ text, color });
      setText("");
      setColor("");
    }
  };

  return (
    <div className="note-input">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note here..."
        rows="3"
      ></textarea>
      <div className="colors">
        {colors.map((c) => (
          <div
            key={c}
            className={`color ${color === c ? "active" : ""}`}
            style={{ backgroundColor: c }}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>
      <button onClick={handleAdd} disabled={!text || !color}>
        ADD
      </button>
    </div>
  );
};

export default NoteInput;
