import React from "react";
import { Link } from "react-router-dom";

function CreateDeckNavbar() {
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
        <li>Create Deck</li>
      </ul>
    </nav>
  );
}

export default CreateDeckNavbar;
