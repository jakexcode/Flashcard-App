import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home";
import Header from "./Header";
import DeckEdit from "../Deck/DeckEdit";
import DeckView from "../Deck/DeckView";
import DeckCreate from "../Deck/DeckCreate";
import NotFound from "./NotFound";
import CardEdit from "../Card/CardEdit";
import CardCreate from "../Card/CardCreate";
import Study from "../Deck/Study";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact={true} path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;