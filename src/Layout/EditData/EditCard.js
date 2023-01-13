import { readCard, readDeck, updateCard } from "../../utils/api/index";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditCardNavbar from "./EditCardNavbar";
import FormComponent from "../FormComponent/FormComponent";
function EditCard() {
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const [deck, setDeck] = useState({});
  const [currentCard, setCurrentCard] = useState("");
  const { deckId, cardId } = useParams();

  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromApi = await response;
      setDeck(deckFromApi);
      console.log("bitch", cardId);
    }

    async function loadCard() {
      const response = readCard(cardId);
      const cardFromApi = await response;
      setCurrentCard(cardFromApi);
      setCardFront(cardFromApi.front);
      setCardBack(cardFromApi.back);
    }
    loadDeck();
    loadCard();
  }, [deckId, cardId]);
  const handleCardFrontChange = (event) => setCardFront(event.target.value);
  const handleCardBackChange = (event) => setCardBack(event.target.value);
  const handleEditCardSubmit = (event) => {
    event.preventDefault();
    updateCard({ ...currentCard, front: cardFront, back: cardBack }).then(
      (updatedDeck) => history.push(`/decks/${updatedDeck.deckId}`)
    );
    console.log("fuck");
  };

  return (
    <div>
      <EditCardNavbar cardId={cardId} deckId={deckId} deckName={deck.name} />
      {/* <form onSubmit={handleEditCardSubmit}>
        <div>
          <div>
            <label
              style={{ fontSize: "24px", fontWeight: "bold" }}
              htmlFor="cardFront"
            >
              Front
            </label>
          </div>
          <div>
            <textarea
              id="cardFront"
              name="cardFront"
              placeholder={"card front"}
              onChange={handleCardFrontChange}
              value={cardFront}
              rows="5"
              cols="60"
            ></textarea>
          </div>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <div>
            <label
              style={{ fontSize: "24px", fontWeight: "bold" }}
              htmlFor="cardBack"
            >
              Back
            </label>
          </div>
          <div>
            <textarea
              id="cardBack"
              name="cardBack"
              placeholder={"card back"}
              onChange={handleCardBackChange}
              value={cardBack}
              rows="5"
              cols="60"
            >
              Back of card
            </textarea>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "8px" }}>
            <button type="submit">Submit</button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => history.push(`/decks/${deckId}`)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form> */}
      <FormComponent
        handleCardSave={handleEditCardSubmit}
        handleCardFrontChange={handleCardFrontChange}
        handleCardBackChange={handleCardBackChange}
        cardFront={cardFront}
        cardBack={cardBack}
      />
      <div>
        <button type="button" onClick={() => history.push(`/decks/${deckId}`)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditCard;
