import React from 'react';
const Letter = ({ value, selectLetter, isDisabled }) => {
  const handleClick = () => {
    if (!isDisabled) {
      selectLetter(value);
    }
  };
  return (
    <span
      className={isDisabled ? 'selected' : ''}
      onClick={handleClick}
    >
      {isDisabled ? 'X' : value}
    </span>
  );
};
export default Letter;
