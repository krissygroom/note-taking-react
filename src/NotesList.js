import React from "react";
import Note from "./Note";

const NotesList = (props) => {
  const renderNote = (note) => <Note note={note} key={note.id} />;
  const notesList = props.notes.map(renderNote);
  return <ul className="notes-list">{notesList}</ul>;
};

export default NotesList;
