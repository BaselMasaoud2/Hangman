import React from 'react';
const EndGame = ({ score }) => {
  const isGameWon = score >= 100;
  return (
    <div className={`end-game ${isGameWon ? 'end-game-won' : 'end-game-lost'}`}>
      {isGameWon ? (
        <p>Congratulations! You guessed the word!</p>
      ) : (
        <p>Game over! The secret word was: CALM</p>
      )}
    </div>
  );
};
export default EndGame;