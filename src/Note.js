import React from "react";

const Note = (props) => {
  return (
    <li className="note">
      {console.log(props)}
      <input className="note__title" type="text" placeholder="Title" />
      <textarea className="note__description" placeholder="Description..." />
      <span className="note__delete">X</span>
    </li>
  );
};

export default Note;
