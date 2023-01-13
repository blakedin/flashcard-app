import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

function StudyDeckView({ cards, currentCard, setCurrentCard, deckId }) {
  const [cardCount, setCardCount] = useState(1);
  const [front, setFront] = useState(true);
  const history = useHistory();
  const { url } = useRouteMatch();
  const switchCardHandler = () => {
    if (cardCount < cards.length) {
      setFront((curCard) => !curCard);
      setCurrentCard(cards[cardCount]);
      setCardCount((curCard) => curCard + 1);
    } else {
      if (
        window.confirm(
          "Restart cards? Click 'cancel' to return to the home page."
        )
      ) {
        setFront(true);
        setCurrentCard(cards[0]);
        setCardCount(1);
        history.push(url);
      } else {
        history.push("/");
      }
    }
  };

  const handleAddCard = () => {
    history.push(`/decks/${deckId}/cards/new`);
  };

  const handleFlip = () => {
    setFront((curCard) => !curCard);
  };
  if (cards.length < 3) {
    return (
      <div>
        <h4>Not enough cards!</h4>
        <p>
          You need at least 3 cards to study. There are {cards.length} cards in
          this deck
        </p>
        <button type="button" onClick={handleAddCard}>
          Add card
        </button>
      </div>
    );
  }

  if (front) {
    return (
      <div style={{ border: "solid", padding: "20px" }}>
        <h4>
          Card {cardCount} of {cards.length}
        </h4>
        <h5>Front</h5>
        <p>{currentCard.front}</p>
        <button type="button" onClick={handleFlip}>
          Flip
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ border: "solid", padding: "20px" }}>
        <h4>
          Card {cardCount} of {cards.length}
        </h4>
        <h5>Back</h5>
        <p>{currentCard.back}</p>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "8px" }}>
            <button type="button" onClick={handleFlip}>
              Flip
            </button>
          </div>
          <div>
            <button type="button" onClick={switchCardHandler}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyDeckView;
