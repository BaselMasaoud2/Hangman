import React from 'react';
import Letter from './Letter';
const Letters = ({ selectLetter, letterStatus }) => {
  const availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return (
    <div>
      {availableLetters.split('').map((letter, index) => (
        <Letter
          key={index}
          value={letter}
          selectLetter={selectLetter}
          isDisabled={letterStatus[letter]}
        />
      ))}
    </div>
  );
};
export default Letters;
