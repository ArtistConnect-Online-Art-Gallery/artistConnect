import CommentPopup from './CommentPopup';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { usePopup } from '../hooks/usePopup';
import baseURL from '../utils/baseURL';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function ArtworksCard({ artwork }) {
  const { showPopup, openPopup, closePopup } = usePopup();
  const userToken = useSelector((state) => state.users.userAuth.userInfo.token);

  const { artworkImg, title, description, id } = artwork;
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const storedFavoritedArtworks = JSON.parse(localStorage.getItem('favoritedArtworks')) || {};
    setIsFavorited(storedFavoritedArtworks[id] || false);
  }, [id]);

  const handleFavoriteClick = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      if (isFavorited) {
        await axios.delete(`${baseURL}/artworks/${id}/favorite`, config);
      } else {
        await axios.post(`${baseURL}/artworks/${id}/favorite`, {}, config);
      }

      const updatedFavoritedArtworks = {
        ...JSON.parse(localStorage.getItem('favoritedArtworks')) || {},
        [id]: !isFavorited,
      };
      localStorage.setItem('favoritedArtworks', JSON.stringify(updatedFavoritedArtworks));

      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error(error);
      console.error('Response:', error.response); 
    } 
  };

  return ( 
    <>
      <div key={id} className="group relative mb-4">
        <img src={artworkImg} alt="" className="w-full h-auto object-cover rounded-lg" />
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <button>
            <XMarkIcon className="w-6 h-6 mr-2 text-gray-500" />
          </button>
          <button>
            <ExclamationTriangleIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="bg-white bg-opacity-80 py-4 flex justify-between">
          <button className="text-left">
            <Link to={`/artworks/${id}`}>
              <h3 className="text-lg hover:underline font-semibold">{title}</h3>
            </Link>
            <p className="text-sm text-gray-500">{artwork.username}</p>
            <p className="text-sm text-gray-600">{description}</p>
          </button>

          <div className="flex justify-between mt-2">
          <div className="flex space-x-4">
            <button
              onClick={handleFavoriteClick}
              className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 focus:outline-none"
            >
              {isFavorited ? <IoHeart className="w-6 h-6 text-pink-600" /> : <IoHeartOutline className="w-6 h-6 hover:text-pink-600" />}
            </button>
            <button
                onClick={openPopup}
                className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 focus:outline-none">
                <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 " />
            </button>
              {showPopup && <CommentPopup onClose={closePopup} artworkID={id} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
