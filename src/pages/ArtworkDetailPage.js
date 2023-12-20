// CODE IMPORTING THEE HOOK useArtworkApp  _________________
import React from 'react';
import { useParams } from 'react-router-dom';
import ArtworksCard, {useArtworkApp} from '../components/ArtworksCard'; 
import {
	HeartIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	ExclamationTriangleIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePopup } from '../hooks/usePopup';
import CommentPopup from '../components/CommentPopup';
import CommentCard, { comments } from '../components/CommentCard';

export default function ArtworkDetailPage() {
	const { showPopup, openPopup, closePopup } = usePopup();
	const { id } = useParams();



  // Use the useArtworkApp hook to get artwork details
  const selectedArtwork = useArtworkApp(id);
  const selectedArtworkComments = comments.filter((comment) => comment.artworkId === parseInt(id));

  if (!selectedArtwork) {
    return <div>Loading...</div>; // You might want to add a loading state here
  }

	return (
		<>
			{' '}
			<Header />
			<div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col sm:flex-row justify-between items-center">
				{/* description div */}

				<div className="flex flex-col relative w-full sm:w-2/5">
				  <ArtworksCard artworkId={id} /> {/* Include ArtworksCard here */}
					<div className="relative">
						<img
							src={selectedArtwork.artworkImg}
							alt={selectedArtwork.imageAlt}
							className="h-3/4 object-cover rounded-lg"
						/>

						{/* Exclamation Icon */}
						{/* <button className="absolute top-0 right-0 mt-2 mr-10">
							<XMarkIcon className="w-6 h-6 text-gray-500" />
						</button> */}
						{/* <button className="absolute top-0 right-0 mt-2 mr-2">
							<ExclamationTriangleIcon className="w-6 h-6 text-gray-500" />
						</button> */}

						{/* Heart Icon */}
						{/* <button className="absolute bottom-0 right-0 mb-2 mr-12 flex items-center space-x-1 text-gray-600 hover:text-pink-600 focus:outline-none">
							<HeartIcon className="w-6 h-6" />
						</button> */}
						{/* Comment Icon */}
						<button onClick={openPopup}>
							{/* // className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center space-x-1 text-gray-600 hover:text-indigo-600 focus:outline-none">
							// <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" /> */}
						</button>
						{showPopup && <CommentPopup onClose={closePopup} />}
					</div>
					<div className="border border-gray-300 rounded-lg mt-3">
						<div className="px-4 py-3">
							<h3 className="text-lg font-semibold">{selectedArtwork.title}</h3>
							<p className="text-sm text-gray-500">{selectedArtwork.user}</p>
						</div>
					</div>

					<div className="border border-gray-300 rounded-lg mt-3">
						<div className="px-4 py-3 text-gray-600">{selectedArtwork.description}</div>
					</div>
					<div className="border border-gray-300 rounded-lg mt-3">
						<div className="px-4 py-3 text-gray-600">
							<p>
								<strong>Genre:</strong> {selectedArtwork.genre}
							</p>
							<p>
								<strong>Medium:</strong> {selectedArtwork.medium}
							</p>
						</div>
					</div>
				</div>

				{/* comment div */}
				<div className=" w-full sm:w-2/5 p-8 mt-8 sm:mt-0">
					{selectedArtworkComments.map((comment) => (
						<CommentCard comment={comment} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}





// ____________ORIGINAL CODE ONLY FRONT END SKELETON ______________
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { artworks } from '../components/ArtworksCard';
// import {
// 	HeartIcon,
// 	ChatBubbleOvalLeftEllipsisIcon,
// 	ExclamationTriangleIcon,
// 	XMarkIcon,
// } from '@heroicons/react/24/outline';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { usePopup } from '../hooks/usePopup';
// import CommentPopup from '../components/CommentPopup';
// import CommentCard, { comments } from '../components/CommentCard';

// export default function ArtworkDetailPage() {
// 	const { showPopup, openPopup, closePopup } = usePopup();
// 	const { id } = useParams();

// 	// Find the selected artwork
// 	const selectedArtwork = artworks.find((artwork) => artwork.id === parseInt(id));
// 	const selectedArtworkComments = comments.filter((comment) => comment.artworkId === parseInt(id));

// 	if (!selectedArtwork) {
// 		return <div>Artwork not found!</div>;
// 	}

// 	return (
// 		<>
// 			{' '}
// 			<Header />
// 			<div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col sm:flex-row justify-between items-center">
// 				{/* description div */}

// 				<div className="flex flex-col relative w-full sm:w-2/5">
// 					<div className="relative">
// 						<img
// 							src={selectedArtwork.imageSrc}
// 							alt={selectedArtwork.imageAlt}
// 							className="h-3/4 object-cover rounded-lg"
// 						/>

// 						{/* Exclamation Icon */}
// 						<button className="absolute top-0 right-0 mt-2 mr-10">
// 							<XMarkIcon className="w-6 h-6 text-gray-500" />
// 						</button>
// 						<button className="absolute top-0 right-0 mt-2 mr-2">
// 							<ExclamationTriangleIcon className="w-6 h-6 text-gray-500" />
// 						</button>

// 						{/* Heart Icon */}
// 						<button className="absolute bottom-0 right-0 mb-2 mr-12 flex items-center space-x-1 text-gray-600 hover:text-pink-600 focus:outline-none">
// 							<HeartIcon className="w-6 h-6" />
// 						</button>
// 						{/* Comment Icon */}
// 						<button
// 							onClick={openPopup}
// 							className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center space-x-1 text-gray-600 hover:text-indigo-600 focus:outline-none">
// 							<ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
// 						</button>
// 						{showPopup && <CommentPopup onClose={closePopup} />}
// 					</div>
// 					<div className="border border-gray-300 rounded-lg mt-3">
// 						<div className="px-4 py-3">
// 							<h3 className="text-lg font-semibold">{selectedArtwork.title}</h3>
// 							<p className="text-sm text-gray-500">{selectedArtwork.authorname}</p>
// 						</div>
// 					</div>

// 					<div className="border border-gray-300 rounded-lg mt-3">
// 						<div className="px-4 py-3 text-gray-600">{selectedArtwork.description}</div>
// 					</div>
// 					<div className="border border-gray-300 rounded-lg mt-3">
// 						<div className="px-4 py-3 text-gray-600">
// 							<p>
// 								<strong>Genre:</strong> {selectedArtwork.genre}
// 							</p>
// 							<p>
// 								<strong>Medium:</strong> {selectedArtwork.medium}
// 							</p>
// 						</div>
// 					</div>
// 				</div>

// 				{/* comment div */}
// 				<div className=" w-full sm:w-2/5 p-8 mt-8 sm:mt-0">
// 					{selectedArtworkComments.map((comment) => (
// 						<CommentCard comment={comment} />
// 					))}
// 				</div>
// 			</div>
// 			<Footer />
// 		</>
// 	);
// }