import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index";
import CreateDeckNavbar from "./CreateDeckNavbar";
function CreateDeck() {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const history = useHistory();

  const handleDeckNameChange = (event) => setDeckName(event.target.value);
  const handleDeckDescriptionChange = (event) =>
    setDeckDescription(event.target.value);

  const handleCreateDeckSubmit = (event) => {
    event.preventDefault();
    createDeck({
      name: deckName,
      description: deckDescription,
    }).then((newDeck) => history.push(`/decks/${newDeck.id}`));
  };

  return (
    <div>
      <CreateDeckNavbar />
      <h2>Create Deck</h2>
      <form onSubmit={handleCreateDeckSubmit}>
        <div>
          <label htmlFor="deckName">Name</label>
          <input
            id="deckName"
            type="text"
            name="deckName"
            className="form-control"
            placeholder="Deck Name"
            onChange={handleDeckNameChange}
            value={deckName}
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="deckDescription">Description</label>
          <textarea
            id="deckDescription"
            name="deckDescription"
            className="form-control"
            placeholder="Brief description of the deck"
            rows="5"
            onChange={handleDeckDescriptionChange}
            value={deckDescription}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "8px" }}>
            <button type="submit">Submit</button>
          </div>
          <div>
            <button type="button" onClick={() => history.push("/")}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateDeck;
