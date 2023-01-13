import React from "react";
import { Link } from "react-router-dom";

function EditCardNavbar({ deckId, cardId, deckName }) {
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
          <p>/</p>
        </div>
        <li>
          <Link to={`/decks/${deckId}/cards/${cardId}`}>{deckName}</Link>
        </li>
        <div>
          <p>/</p>
        </div>
        <li>Edit Card</li>
      </ul>
    </nav>
  );
}
export default EditCardNavbar;
