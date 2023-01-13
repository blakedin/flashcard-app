import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createDeck, readDeck, updateDeck } from "../../utils/api/index";
import EditDeckNavbar from "./EditDeckNavbar";
function EditDeck() {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const [deck, setDeck] = useState({});
  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromApi = await response;
      setDeck({ ...deckFromApi });
      setDeckName(deckFromApi.name);
      setDeckDescription(deckFromApi.description);
      console.log(deckName);
    }
    loadDeck();
  }, [deckId]);
  const handleDeckNameChange = (event) => setDeckName(event.target.value);
  const handleDeckDescriptionChange = (event) =>
    setDeckDescription(event.target.value);
  const tempName = deckName;
  const handleCreateDeckSubmit = (event) => {
    event.preventDefault();
    updateDeck({ ...deck, name: deckName, description: deckDescription }).then(
      (newDeck) => history.push(`/decks/${newDeck.id}`)
    );
  };

  return (
    <div>
      <EditDeckNavbar deckName={tempName} deckId={deckId} />
      <h2>Edit Deck</h2>
      <form onSubmit={handleCreateDeckSubmit}>
        <div className="form-group">
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
        <div className="form-group">
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
          <div>
            <button type="submit" style={{ marginRight: "8px" }}>
              Submit
            </button>
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

export default EditDeck;
