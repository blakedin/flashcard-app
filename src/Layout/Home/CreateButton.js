import { useHistory } from "react-router-dom";
function CreateButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("/decks/new")}>
      + Create
    </button>
  );
}

export default CreateButton;
