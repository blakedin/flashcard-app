import React from "react";
import { Link } from "react-router-dom";

function EditDeckNavbar({ deckName, deckId }) {
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          padding: 0,
          width: "100%",
          fontSize: "24px",
          marginBottom: "0",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <div>
          <p>/</p>
        </div>
        <li>
          <Link to={`/decks/${deckId}`}>{deckName}</Link>
        </li>
        <div>
          <p>/</p>
        </div>
        <li>Edit Deck</li>
      </ul>
    </nav>
  );
}

export default EditDeckNavbar;
