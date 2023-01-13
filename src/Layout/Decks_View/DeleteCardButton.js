import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { deleteCard } from "../../utils/api";

function DeleteCardButton({ cardId, deckId }) {
  const history = useHistory();
  const handleClick = () => {
    if (
      window.confirm("Delete this card? You will not be able to recover it")
    ) {
      deleteCard(cardId);
      window.location.reload();
    }
  };
  return (
    <button type="button" onClick={handleClick}>
      Delete
    </button>
  );
}

export default DeleteCardButton;
