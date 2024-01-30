import React from 'react';
import Letter from './Letter';
const Solution = ({ solution, letterStatus }) => {
  const { word, hint } = solution;
  return (
    <div>
      {word.split('').map((letter, index) => (
        <Letter key={index} value={letterStatus[letter] ? letter : '_'} />
      ))}
      <div>
        <em>{hint}</em>
      </div>
    </div>
  );
};
export default Solution;
