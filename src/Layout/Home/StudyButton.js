import React from "react";
import { useHistory } from "react-router-dom";
function StudyButton({ deck }) {
  const history = useHistory();
  console.log(deck.id);
  return (
    <button
      type="button"
      onClick={() => history.push(`/decks/${deck.id}/study`)}
    >
      Study
    </button>
  );
}

export default StudyButton;
