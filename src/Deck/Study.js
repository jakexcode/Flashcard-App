import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import StudyPage from "./StudyPage";
import StudyNotEnoughCards from "./StudyNotEnoughCards";
import { readDeck } from "../utils/api";
import StudyCard from "./StudyCard";


function Study() {
  const [deck, setDeck] = useState({ name: "Loading..", cards: [] });
  const [cardNumber, setCardNumber] = useState(1);

  const { deckId } = useParams();

  const history = useHistory();

  useEffect(() => {
    async function deckLoad() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    deckLoad();
  }, [deckId]);

  const cardCount = deck.cards.length;

  const nextHandler = () => {
    if (cardNumber === cardCount) {
      const returnToHomePage = !window.confirm(
        "Restart cards?\n\nClick 'Cancel' to return to the home page."
      );
      return returnToHomePage ? history.push("/") : setCardNumber(1);
    }
    setCardNumber((prevState) => Math.min(cardCount, prevState + 1));
  };

  const cardTitle = `Card ${cardNumber} of ${cardCount}`;

  const card = deck.cards[cardNumber - 1];

  if (cardCount <= 2) {
    return (
      <StudyPage name={deck.name} deckId={deckId}>
        <StudyNotEnoughCards deckId={deckId} cardCount={cardCount} />
      </StudyPage>
    );
  }

  return (
    <StudyPage name={deck.name} deckId={deckId}>
      <StudyCard card={card} title={cardTitle}>
        <button type="button" className="btn btn-primary" onClick={nextHandler}>
          Next
        </button>
      </StudyCard>
    </StudyPage>
  );
}

export default Study;