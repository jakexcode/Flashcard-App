import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import DeckForm from "./DeckForm";
import { readDeck, updateDeck } from "../utils/api";

function DeckEdit() {
  const history = useHistory();
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ name: "", description: "" });

  useEffect(() => {
    async function deckRead() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    deckRead();
  }, [deckId]);

  function cancelHandler() {
    history.goBack();
  }

  function submitHandler(updatedDeck) {
    updateDeck(updatedDeck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }

  const child = deck.id ? (
    <DeckForm
      onCancel={cancelHandler}
      onSubmit={submitHandler}
      initialState={deck}
    />
  ) : (
    <p>Loading...</p>
  );

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {child}
    </>
  );
}

export default DeckEdit;