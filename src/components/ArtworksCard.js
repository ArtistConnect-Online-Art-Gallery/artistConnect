import CommentPopup from './CommentPopup';
import {
	HeartIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	ExclamationTriangleIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { usePopup } from '../hooks/usePopup';

export default function ArtworksCard({ artwork }) {
	const { showPopup, openPopup, closePopup } = usePopup();
	const { artworkImg, title, description, id } = artwork;
	return (
		<div>
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
		</div>
	);
}
