import React from "react";
import { Link } from "react-router-dom";
import Decks from "../Decks_View/Decks";

function StudyDeckNavbar({ deck, deckId }) {
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
          <Link to={"/"}>Home</Link>
        </li>
        <div>
          <p>/ </p>
        </div>
        <li>
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <div>
          <p>/ </p>
        </div>
        <li>Study Deck</li>
      </ul>
    </nav>
  );
}

export default StudyDeckNavbar;
