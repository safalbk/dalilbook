import React from 'react';

function FilterButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-block bg-white text-gray-700 font-medium px-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 mx-1 my-1 cursor-pointer"
    >
      {text}
    </button>
  );
}

export default FilterButton;