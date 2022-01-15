import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  // Lifecycle methods
  componentDidMount() {
    const savedNotesString = localStorage.getItem("savedNotes");
    if (savedNotesString) {
      const savedNotes = JSON.parse(savedNotesString);
      this.setState({ notes: savedNotes });
    }
  }

  componentDidUpdate() {
    const savedNotesString = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", savedNotesString);
  }

  // create a new note when button is clicked
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    // add new note to existing notes array in state
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  // Fill in fields of Note when user types
  onType = (editNoteId, updatedField, updatedValue) => {
    // editNoteId === id of note that user clicks on to edit
    // updatedField === title/description?
    // updatedValue === text entered in the field
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === editNoteId) {
        // if this is the note user clicked, change the correct value
        // and return the note
        if (updatedField === "title") {
          note.title = updatedValue;
        } else {
          note.description = updatedValue;
        }
      }
      return note;
    });
    this.setState({ notes: updatedNotes });
  };

  // Check if user search input matches title or description of a note
  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    // map over all notes and see if input text matches text in fields
    const updatedNotes = this.state.notes.map((note) => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        titleMatch || descriptionMatch
          ? (note.doesMatchSearch = true)
          : (note.doesMatchSearch = false);
      }
      return note;
    });

    this.setState({
      notes: updatedNotes,
      searchText: newSearchText
    });
  };

  // Remove note if click on X
  removeNote = (noteId) => {
    // filter out note clicked on
    const updatedNotes = this.state.notes.filter((note) => note.id !== noteId);
    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          addNote={this.addNote}
          searchText={this.state.searchText}
        />
        <NotesList
          removeNote={this.removeNote}
          onType={this.onType}
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default App;
