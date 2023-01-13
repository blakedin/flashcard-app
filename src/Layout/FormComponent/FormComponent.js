import React from "react";
function FormComponent({
  handleCardSave,
  handleCardFrontChange,
  handleCardBackChange,
  cardFront,
  cardBack,
}) {
  return (
    <div>
      <form onSubmit={handleCardSave}>
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
      </form>
    </div>
  );
}

export default FormComponent;
