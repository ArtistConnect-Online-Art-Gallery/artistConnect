// GalleryPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../utils/baseURL';
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import GalleryButtons from '../components/GalleryButtons';
import MyArtworks from '../components/MyArtworks';
import { useParams } from 'react-router-dom';

export default function GalleryPage() {
	const [artworks, setArtworks] = useState([]);
	const { id, username } = useParams();

	useEffect(() => {
		async function fetchArtworks() {
			try {
				const response = await axios.get(`${baseURL}/artworks/${id}`);
				setArtworks(response.data.artworks);
			} catch (error) {
				console.error(error);
			}
		}

		fetchArtworks();
	}, [id, username]);

	return (
		<div className="bg-white">
			{/* Header */}
			<UserHeader />
			<main>
				<GalleryButtons />
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					{/* Use the MyArtworks component */}
					<MyArtworks artworks={artworks} />
				</div>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}

// // _______________Original code ______________________
// import UserHeader from '../components/UserHeader';
// import Footer from '../components/Footer';
// import GalleryButtons from '../components/GalleryButtons';
// import { useEffect, useState } from 'react';
// import baseURL from '../utils/baseURL';
// import axios from 'axios';
// import ArtworksGallery from '../components/ArtworksGalleryExplore';

// export default function GalleryPage() {
// 	return (
// 		<div className="bg-white">
// 			{/* Header */}
// 			<UserHeader />
// 			<main>
// 				<GalleryButtons />
// 				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
// 					<ArtworksGallery />
// 				</div>
// 			</main>
// 			{/* Footer */}
// 			<Footer />
// 		</div>
// 	);
// }
