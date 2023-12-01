import React from 'react';

const Number = ({ handleKeyPress }) => {
  const keyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ];

  return (
    <div className="grid grid-cols-10 gap-4">
      {keyboardLayout[0].map((number) => (
        <button
          key={number}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleKeyPress(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Number;
