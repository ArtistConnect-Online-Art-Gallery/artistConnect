// MyArworkButton.js 
import React, { useState } from 'react';
import MyArtworks from '../MyArtworks';

function MyArtworksButton({ userArtworks, username }) {
  const [showArtworks, setShowArtworks] = useState(false);

  const handleButtonClick = () => {
    setShowArtworks(!showArtworks);

  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        {showArtworks ? 'Hide My Artworks ' : 'Show My Artworks'}

        {showArtworks && <MyArtworks artworks={userArtworks} username={username} />}

      </button>
    </div>
  );
}

export default MyArtworksButton;








// ________ORIGINAL CODE __________________

// import React from 'react';

// const MyArtworksButton = ({ onClick, children }) => (
//   <button
//     onClick={onClick}
//     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
//   >
//     {children}
//   </button>
// );

// export default MyArtworksButton;