import React from "react";
import { useHistory, Link } from "react-router-dom";
import DeckForm from "./DeckForm";
import { createDeck } from "../utils/api";

function DeckCreate() {
  const history = useHistory();

  function cancelHandler() {
    history.goBack();
  }

  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <DeckForm onCancel={cancelHandler} onSubmit={submitHandler} />
    </>
  );
}

export default DeckCreate;