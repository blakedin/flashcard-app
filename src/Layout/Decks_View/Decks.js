import React, { useEffect, useState } from "react";
import { Route, useParams, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import { readCard } from "../../utils/api/index";
import DeleteButton from "../Home/DeleteButton";
import DecksViewNavbar from "./DecksViewNavbar";
import DeleteCardButton from "./DeleteCardButton";
function Decks() {
  //show specific decks
  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);
  const { deckId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCards(deckFromAPI.cards);
    }

    loadDeck();

    return () => {
      abortController.abort();
    };
  }, [deckId]);

  const handleEditClick = () => history.push(`/decks/${deckId}/edit`);
  const handleStudyClick = () => history.push(`/decks/${deckId}/study`);

  const cardDisplay = cards.map((card, index) => {
    return (
      <>
        <div style={{ border: "solid", marginBottom: "10px", padding: "10px" }}>
          <div style={{ marginBottom: "10px" }}>
            <div>{card.front}</div>
            <div>{card.back}</div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "8px" }}>
              <button
                type="button"
                onClick={() =>
                  history.push(`/decks/${deckId}/cards/${card.id}/edit`)
                }
              >
                Edit
              </button>
            </div>
            <div>
              <DeleteCardButton cardId={card.id} deckId={deckId} />
            </div>
          </div>
        </div>
      </>
    );
  });

  if (deck.name) {
    return (
      <div>
        <DecksViewNavbar deck={deck} />
        <div style={{ border: "solid", marginBottom: "20px", padding: "10px" }}>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{deck.name}</p>
          <p>{deck.description}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "8px" }}>
                <button type="button" onClick={handleEditClick}>
                  Edit
                </button>
              </div>
              <div style={{ marginRight: "8px" }}>
                <button type="button" onClick={handleStudyClick}>
                  Study
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => history.push(`/decks/${deckId}/cards/new`)}
                >
                  Add Cards
                </button>
              </div>
            </div>
            <DeleteButton deck={deck} />
          </div>
        </div>
        <div>{cardDisplay}</div>
      </div>
    );
  }
  return <p>Loading...</p>;
}

export default Decks;
