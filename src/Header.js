import React from "react";

const Header = () => {
  return (
    <header className="app-header__title">
      <h1>Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new">+ New Note</button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
        />
      </aside>
    </header>
  );
};

export default Header;
