import React from "react";

const Note = (props) => {
  // event listener
  const updateField = (e) => {
    const updatedValue = e.target.value;
    const editNoteId = props.note.id;
    e.target.placeholder === "Title"
      ? props.onType(editNoteId, "title", updatedValue)
      : props.onType(editNoteId, "description", updatedValue);
  };

  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateField}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateField}
      />
      <span className="note__delete">X</span>
    </li>
  );
};

export default Note;
