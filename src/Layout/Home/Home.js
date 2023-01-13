import React, { useState, useEffect } from "react";
import { listDecks } from "../../utils/api/index";
import CreateButton from "./CreateButton";
import DeleteButton from "./DeleteButton";
import StudyButton from "./StudyButton";
import ViewButton from "./ViewButton";
function Home() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    async function loadDecks() {
      try {
        const response = await listDecks();
        console.log(response);
        const useFromApi = response;
        setDecks(useFromApi);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log(error.name);
        } else {
          throw error;
        }
      }
    }
    loadDecks();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <div style={{ margin: "10px 10px 10px 0" }}>
        <CreateButton />
      </div>
      {decks.map((deck, index) => {
        return (
          <div style={{ border: "solid", marginBottom: "20px" }}>
            <div
              style={{
                marginLeft: "10px",
                marginTop: "8px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  {deck.name}
                </div>
                <div style={{ fontSize: "20px" }}>{deck.description}</div>
              </div>
              <div style={{ marginRight: "20px", fontSize: "18px" }}>
                {deck.cards.length} cards
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginLeft: "10px",
                  marginTop: "8px",
                }}
              >
                <div style={{ marginRight: "8px" }}>
                  <StudyButton deck={deck} />
                </div>
                <div>
                  <ViewButton deck={deck} />
                </div>
              </div>
              <div style={{ margin: "10px 10px 10px 0" }}>
                <DeleteButton deck={deck} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
