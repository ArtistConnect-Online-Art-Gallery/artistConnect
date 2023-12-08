import React from 'react';

const MyArtworksButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
  >
    {children}
  </button>
);

export default MyArtworksButton;