import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import CreateDeck from "./CreateDeck/CreateDeck";
import Decks from "./Decks_View/Decks";
import StudyButton from "./Home/StudyButton";
import { Switch, Route } from "react-router-dom";
import StudyDeck from "./Decks_Study/StudyDeck";
import AddCard from "./AddCard/AddCard";
import EditDeck from "./EditData/EditDeck";
import EditCard from "./EditData/EditCard";
function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Decks />
          </Route>

          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
