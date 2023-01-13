import React from "react";
import { deleteDeck } from "../../utils/api/index";

function DeleteButton({ deck }) {
  const handleClick = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it")
    ) {
      deleteDeck(deck.id);
    }
  };
  return (
    <button type="button" onClick={handleClick}>
      Delete
    </button>
  );
}

export default DeleteButton;
