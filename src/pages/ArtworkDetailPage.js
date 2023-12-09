import React from 'react';
import { useParams } from 'react-router-dom';
import { artworks } from '../components/ArtworksCard';
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePopup } from '../hooks/usePopup';
import CommentPopup from '../components/CommentPopup';

const comments = [
	{
		id: 1,
		artworkId: 1,
		content: `
      This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!
    `,

		author: 'Emily Selman',
		avatarSrc:
			'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
	},
	{
		id: 2,
		artworkId: 2,
		content: `
  Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.
    `,

		author: 'Hector Gibbons',
		avatarSrc:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
	},
	// More reviews...
];
export default function ArtworkDetailPage() {
	const { showPopup, openPopup, closePopup } = usePopup();
	const { id } = useParams();

	// Filter comments based on the selected artwork's id
	const selectedArtworkComments = comments.filter((comment) => comment.artworkId === parseInt(id));

	// Find the selected artwork
	const selectedArtwork = artworks.find((artwork) => artwork.id === parseInt(id));

	if (!selectedArtwork) {
		return <div>Artwork not found!</div>;
	}

	return (
		<>
			<Header />
			<div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-between items-center  ">
				{/* description div */}

				<div className="flex flex-col relative w-2/5">
					<div className="relative">
						<img
							src={selectedArtwork.imageSrc}
							alt={selectedArtwork.imageAlt}
							className="h-3/4 object-cover rounded-lg"
						/>

						{/* Exclamation Icon */}
						<button className="absolute top-0 right-0 mt-2 mr-2 border border-gray-500 rounded p-1">
							<ExclamationTriangleIcon className="w-6 h-6 text-gray-500" />
						</button>

						{/* Heart Icon */}
						<button className="absolute bottom-0 right-0 mb-2 mr-12 flex items-center space-x-1 text-gray-600 hover:text-pink-600 focus:outline-none">
							<HeartIcon className="w-6 h-6" />
						</button>
						{/* Comment Icon */}
						<button
							onClick={openPopup}
							className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center space-x-1 text-gray-600 hover:text-indigo-600 focus:outline-none">
							<ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
						</button>
						{showPopup && <CommentPopup onClose={closePopup} />}
					</div>
					<div className="border border-gray-300 rounded-lg mt-3">
						<div className="px-4 py-3">
							<h3 className="text-lg font-semibold">{selectedArtwork.title}</h3>
							<p className="text-sm text-gray-500">{selectedArtwork.authorname}</p>
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
				<div className="border rounded-lg  w-2/5 border-gray-200 pl-8 relative">
					<button className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">
						<ExclamationTriangleIcon className="w-6 h-6" />
					</button>
					<div>
						{selectedArtworkComments.map((comment) => (
							<div key={comment.id} className="flex space-x-4 text-sm text-gray-500 ">
								<div className="flex-none py-10">
									<img src={comment.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
								</div>
								<div className="flex items-start flex-col">
									<h3 className=" font-medium p-3 text-gray-900">{comment.author}</h3>
									<div className="prose prose-sm  max-w-none text-left py-2 pl-3 text-gray-500">{comment.content}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
