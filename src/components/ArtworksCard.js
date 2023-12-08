import React, { useState } from 'react';
import CommentPopup from './CommentPopup';
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const artworks = [
	{
		id: 1,
		title: 'Artworks Title 1',
		href: '#',
		description: 'test description 1',
		authorname: 'author 1',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		id: 2,
		title: 'Nomad Tumbler',
		href: '#',
		description: 'test description 2',
		authorname: 'author 2',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
		imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
	},
	{
		id: 3,
		title: 'Focus Paper Refill',
		href: '#',
		description: 'test description 3',
		authorname: 'author 3',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
		imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: 4,
		title: 'Machined Mechanical Pencil',
		href: '#',
		description: 'test description 4',
		authorname: 'author 4',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
	// More artworks...
];

export default function ArtworksCard() {
	const [showPopup, setShowPopup] = useState(false);


	// when user click comment button - open the popup
	const openPopup = () => {
		setShowPopup(true);
	};

	//when user click send button or delete button -close the popup
	const closePopup = () => {
		setShowPopup(false);
	};

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">artworks</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{artworks.map((artwork) => (
						<div key={artwork.id} className="group relative">
							<img src={artwork.imageSrc} alt={artwork.imageAlt} className="w-full h-60 object-cover rounded-lg" />
							<div className="absolute top-0 right-0 mt-2 mr-2">
								<button className="border border-gray-500 rounded p-1">
									<ExclamationTriangleIcon className="w-6 h-6 text-gray-500" />
								</button>
							</div>
							<div className="bg-white bg-opacity-80 p-4 flex justify-between">
								<div className="text-left">
									<h3 className="text-lg font-semibold">{artwork.title}</h3>
									<p className="text-sm text-gray-500">{artwork.authorname}</p>
									<p className="text-sm text-gray-600">{artwork.description}</p>
								</div>

								<div className="flex justify-between mt-2">
									<div className="flex space-x-4">
										<button className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 focus:outline-none">
											{/* Like Icon */}
											<HeartIcon className="w-6 h-6 " />
										</button>
										<button
											onClick={openPopup}
											className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 focus:outline-none">
											{/* Comment Icon */}
											<ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 " />
										</button>
										{showPopup && <CommentPopup onClose={closePopup} />}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
