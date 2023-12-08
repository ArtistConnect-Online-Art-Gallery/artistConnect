import React from 'react';

const MyFavButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 border border-gray-300 rounded hover:bg-pink-100 focus:outline-none"
  >
    {children}
  </button>
);

export default MyFavButton;

