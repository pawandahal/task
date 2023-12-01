import React from 'react';

const Alphabet = ({ handleKeyPress }) => {
  const keyboardLayout = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
    ["z", "x", "c", "v", "b", "n", "m", "<", "."],
  ];

  return (
    <div className="grid grid-cols-11 md:grid-cols-10 sm:grid-cols-7 gap-2 lowercase">
      {keyboardLayout.map((row, rowIndex) => (
        row.map((letter) => (
          <div key={letter} className="h-[40px] w-[40px]">
            <button
              className="bg-black shadow-md lowercase font-poppins hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-full w-full"
              onClick={() => handleKeyPress(letter)}
            >
              {letter}
            </button>
          </div>
        ))
      ))}
    </div>
  );
};

export default Alphabet;
