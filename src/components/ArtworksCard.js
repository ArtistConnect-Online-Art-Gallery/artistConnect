// _____CODE IMPORTING artworkCardByIdFunction AND USING DB PARAMS _________________
import { useEffect, useState } from 'react';
import { artworkCardByIdFunc } from '../functions/artworkCard';
import CommentPopup from './CommentPopup';
import {
	HeartIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	ExclamationTriangleIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { usePopup } from '../hooks/usePopup';


export const artworks = [ 

	{
		id: 1,
		user: 'author 1',
		artworkImg: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
		title: 'Artworks Title 1',
		description: 'test description 1',
		genre: 'test genre1',
		medium: 'test medium 1',
	  },


	// More artworks...
];

export { useArtworkApp };

function useArtworkApp(artworkId) {
	const [artworkById, setArtworkById] = useState(null);
  
	useEffect(() => {
	  // Call the async function with required parameters
	  artworkCardByIdFunc(artworkId)
	  .then(newArtworkById => setArtworkById(newArtworkById))
	  .catch(error => console.log(error));
	}, [artworkId]);
  
	return artworkById;
}
  
export default function ArtworksCard({ artworkId }) {
	const { showPopup, openPopup, closePopup } = usePopup();
  
	// Get artwork information by ID
	const artworkById = useArtworkApp(artworkId);  
  
	if (!artworkById) {
	  // Render loading state or handle accordingly
	  return <div>Loading...</div>;
	}  
	
	
	return ( 
		
		<div key={artworkById.artwork.user} className="group relative">
			
			<img src={artworkById.artwork.artworkImg} 
			alt={artworkById.title || 'Artwork Image'}
			className="w-full h-auto object-cover rounded-lg" 
			/>
			<div className="absolute top-0 right-0 mt-2 mr-2"> 
				
				<button>
					<XMarkIcon className="w-6 h-6 mr-2 text-gray-500" />
				</button>
				<button>
					<ExclamationTriangleIcon className="w-6 h-6 text-gray-500" />
				</button>
			</div>
			<div className="bg-white bg-opacity-80 py-4 flex justify-between">
				<button className="text-left ">
					<Link to={`/artworks/${artworkById.artwork._id}`}>
						<h3 className="text-lg hover:underline font-semibold">{artworkById.artwork.title}</h3>
					</Link>
					<p className="text-sm text-gray-500">{artworkById.artwork.user.username}</p>
					<p className="text-sm text-gray-600">{artworkById.artwork.description}</p> 
				</button>

				<div className="flex justify-between mt-2">
					<div className="flex space-x-4">
						<button className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 focus:outline-none">
							{/* Like Icon */}
							<HeartIcon className="w-6 h-6 "/>
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
	);
}






// ____________ORIGINAL CODE ONLY FRONT END SKELETON ______________
// import CommentPopup from './CommentPopup';
// import {
// 	HeartIcon,
// 	ChatBubbleOvalLeftEllipsisIcon,
// 	ExclamationTriangleIcon,
// 	XMarkIcon,
// } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';
// import { usePopup } from '../hooks/usePopup';

// export const artworks = [ 


// 	{
// 		id: 1,
// 		title: 'Artworks Title 1',
// 		description: 'test description 1',
// 		authorname: 'author 1',
// 		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
// 		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
// 		report: true,
// 		genre: 'test genre1',
// 		medium: 'test medium 1',
// 	},
// 	{
// 		id: 2,
// 		title: 'Nomad Tumbler',
// 		description: 'test description 2',
// 		authorname: 'author 2',
// 		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
// 		imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
// 		report: false,
// 		genre: 'test genre2',
// 		medium: 'test medium 2',
// 	},
// 	{
// 		id: 3,
// 		title: 'Focus Paper Refill',
// 		description: 'test description 3',
// 		authorname: 'author 3',
// 		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
// 		imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
// 		report: true,
// 	},
// 	{
// 		id: 4,
// 		title: 'Machined Mechanical Pencil',
// 		description: 'test description 4',
// 		authorname: 'author 4',
// 		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
// 		imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
// 		report: false,
// 	},
// 	// More artworks...
// ];

// export default function ArtworksCard({ artwork }) {
// 	const { showPopup, openPopup, closePopup } = usePopup();
// 	return (
// 		<div key={artwork.id} className="group relative ">
// 			<img src={artwork.imageSrc} alt={artwork.imageAlt} className="w-full h-auto object-cover rounded-lg" />
// 			<div className="absolute top-0 right-0 mt-2 mr-2">
// 				<button>
// 					<XMarkIcon className="w-6 h-6 mr-2 text-gray-500" />
// 				</button>
// 				<button>
// 					<ExclamationTriangleIcon className="w-6 h-6 text-gray-500" />
// 				</button>
// 			</div>
// 			<div className="bg-white bg-opacity-80 py-4 flex justify-between">
// 				<button className="text-left ">
// 					<Link to={`/artwork/${artwork.id}`}>
// 						<h3 className="text-lg hover:underline font-semibold">{artwork.title}</h3>
// 					</Link>
// 					<p className="text-sm text-gray-500">{artwork.authorname}</p>
// 					<p className="text-sm text-gray-600">{artwork.description}</p>
// 				</button>

// 				<div className="flex justify-between mt-2">
// 					<div className="flex space-x-4">
// 						<button className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 focus:outline-none">
// 							{/* Like Icon */}
// 							<HeartIcon className="w-6 h-6 " />
// 						</button>
// 						<button
// 							onClick={openPopup}
// 							className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 focus:outline-none">
// 							{/* Comment Icon */}
// 							<ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 " />
// 						</button>
// 						{showPopup && <CommentPopup onClose={closePopup} />}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }