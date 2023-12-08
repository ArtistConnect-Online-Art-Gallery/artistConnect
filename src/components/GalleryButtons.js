import React, { useState } from 'react';
import MyArtworksButton from './Buttons/MyArtworkButton';
import MyFavButton from './Buttons/MyFavButton';

const GalleryButtons = ({ artworks, onFavorite, onAddToMyArtworks }) => {
  // State to track selected artworks
  const [selectedArtworks, setSelectedArtworks] = useState([]);

  // Handler to add/remove artwork from selectedArtworks
  const toggleSelectedArtwork = (artwork) => {
    const isSelected = selectedArtworks.includes(artwork);

    if (isSelected) {
      // If artwork is already selected, remove it
      setSelectedArtworks(selectedArtworks.filter((selected) => selected !== artwork));
    } else {
      // If artwork is not selected, add it
      setSelectedArtworks([...selectedArtworks, artwork]);
    }
  };

  return (
    <div className="flex space-x-4 border p-4">
      <MyFavButton onClick={() => toggleSelectedArtwork('My Artworks')}>
        My Artworks
      </MyFavButton>
      <MyArtworksButton onClick={() => toggleSelectedArtwork('Favorite Artworks')}>
        Favorite Artworks
      </MyArtworksButton>

      {/* Display selected artworks */}
      <div>
        <h2>Selected Artworks:</h2>
        <ul>
          {selectedArtworks.map((artwork, index) => (
            <li key={index}>{artwork}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GalleryButtons;

