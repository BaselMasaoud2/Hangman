import React, { useState } from 'react';
import Letters from './components/Letters';
import Solution from './components/Solution';
import Score from './components/Score';
import EndGame from './components/EndGame';
const App = () => {
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
  const [score, setScore] = useState(100);
  const [solution, setSolution] = useState({
    word: "CALM",
    hint: "Your ideal mood when coding."
  });
  const selectLetter = (letter) => {
    const updatedLetterStatus = { ...letterStatus };
    updatedLetterStatus[letter] = true;
    setLetterStatus(updatedLetterStatus);

    const { word } = solution;
    if (word.includes(letter)) {
      setScore(score + 5);
    } else {
      setScore(score - 20);
    }
  };
  const isGameOver = () => {
    const { word } = solution;
    return Object.keys(letterStatus).every((letter) => letterStatus[letter] || !word.includes(letter));
  };
  return (
    <div className="container">
      <div className="game-header2">Hangman Game</div>
      <div className="game-subheader">Can you guess the word?</div>
      <Score score={score} />
      <Solution solution={solution} letterStatus={letterStatus} />
      <Letters selectLetter={selectLetter} letterStatus={letterStatus} />
      {isGameOver() && <EndGame score={score} />}
    </div>
  )
};
const generateLetterStatuses = () => {
  let letterStatus = {};
  for (let i = 65; i < 91; i++) {
    letterStatus[String.fromCharCode(i)] = false;
  }
  return letterStatus;
};

export default App;
