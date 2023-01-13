import React from "react";
import { Link } from "react-router-dom";

function DecksViewNavbar({ deck }) {
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
        <li>{deck.name}</li>
      </ul>
    </nav>
  );
}

export default DecksViewNavbar;
