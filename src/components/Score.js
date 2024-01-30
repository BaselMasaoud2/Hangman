import React from 'react';
const Score = ({ score }) => {
  let scoreClass = '';
  if (score >= 80) {
    scoreClass = 'high-score';
  } else if (score >= 50) {
    scoreClass = 'medium-score';
  } else {
    scoreClass = 'low-score';
  }
  return (
    <div className={`score ${scoreClass}`}>
      {score}
    </div>
  );
};
export default Score;
