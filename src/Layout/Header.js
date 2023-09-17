import React from 'react';

function Header() {
  return (
    <header className="jumbotron bg-dark ">
      <div className="container text-info shadow-lg p-3 mb-5 bg-light rounded ">
        <h1 className="display-3 ">Flashcard-O-Matic</h1>
        <p className="fst-italic">
          Discover The Flashcard Difference
        </p>
      </div>
    </header>
  );
}

export default Header;