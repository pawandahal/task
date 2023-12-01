import React from 'react';

const SpecialCharacter = ({ handleKeyPress }) => {
  const specialCharacters = '!@#$%^&*()_+'.split('');

  return (
    <div className="grid grid-cols-9 gap-2">
      {specialCharacters.map((character) => (
        <button
          key={character}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleKeyPress(character)}
        >
          {character}
        </button>
      ))}
    </div>
  );
};

export default SpecialCharacter;
