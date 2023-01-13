import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import StudyDeckNavbar from "./StudyDeckNavbar";
import StudyDeckView from "./StudyDeckView";
function StudyDeck() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromApi = await response;
      setDeck(deckFromApi);
      setCards(deckFromApi.cards);
      setCurrentCard(deckFromApi.cards[0]);
    }
    loadDeck();
    return () => {
      abortController.abort();
    };
  }, [deckId]);

  return (
    <div>
      <StudyDeckNavbar deck={deck} deckId={deckId} />
      {/* { cards, currentCard, setCurrentCard, deckId } */}
      <StudyDeckView
        cards={cards}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        deckId={deckId}
      />
    </div>
  );
}

export default StudyDeck;
