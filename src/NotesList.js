import React from "react";
import Note from "./Note";

const NotesList = (props) => {
  // only keep notes that match search property
  const keepSearchMatches = (note) => note.doesMatchSearch;
  // filter through notesList to keep notes that match search
  const searchMatches = props.notes.filter(keepSearchMatches);

  const renderNote = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );
  const notesList = searchMatches.map(renderNote);
  return <ul className="notes-list">{notesList}</ul>;
};

export default NotesList;
