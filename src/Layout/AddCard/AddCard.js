import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api/index";
import AddCardNavbar from "./AddCardNavbar";
import FormComponent from "../FormComponent/FormComponent";
function AddCard() {
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const history = useHistory();
  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromApi = await response;
      setDeck(deckFromApi);
    }
    loadDeck();
    return () => {
      abortController.abort();
    };
  }, [deckId]);
  const handleCardFrontChange = (event) => setCardFront(event.target.value);
  const handleCardBackChange = (event) => setCardBack(event.target.value);
  const handleCardSave = (event) => {
    event.preventDefault();
    createCard(deckId, { front: cardFront, back: cardBack });
    setCardFront("");
    setCardBack("");
    history.push(`/decks/${deckId}`);
  };

  if (deck.name) {
    return (
      <div>
        <AddCardNavbar deckName={deck.name} deckId={deckId} />
        <h2>{deck.name}</h2>
        {/* <form onSubmit={handleCardSave}>
          <label htmlFor="cardFront">Front</label>
          <textarea
            id="cardFront"
            name="cardFront"
            className="form-control"
            placeholder="Front side of card"
            rows="3"
            onChange={handleCardFrontChange}
            value={cardFront}
          />
          <label htmlFor="cardBack">Back</label>
          <textarea
            id="cardBack"
            name="cardBack"
            className="form-control"
            placeholder="Back side of card"
            rows="3"
            onChange={handleCardBackChange}
            value={cardBack}
            style={{ marginBottom: "20px" }}
          />
          <button type="submit">Save</button>
        </form> */}
        <FormComponent
          handleCardSave={handleCardSave}
          handleCardFrontChange={handleCardFrontChange}
          handleCardBackChange={handleCardBackChange}
          cardFront={cardFront}
          cardBack={cardBack}
        />
      </div>
    );
  }
  return "Loading...";
}

export default AddCard;
