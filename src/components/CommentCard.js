import React from 'react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
//test comments database
export const comments = [
	{
		id: 1,
		artworkId: 1,
		content: `
      This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!
    `,

		author: 'Emily Selman',
		avatarSrc:
			'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		report: true,
	},
	{
		id: 2,
		artworkId: 3,
		content: `
test message 123    `,

		author: 'Hector Gibbons',
		avatarSrc:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		report: true,
	},
	// More reviews...
	{
		id: 3,
		artworkId: 1,
		content: `
  Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.
    `,

		author: 'Hector Gibbons',
		avatarSrc:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		report: false,
	},
	// Mor
	{
		id: 4,
		artworkId: 1,
		content: `
  this is a test report message
    `,

		author: 'Report Author1 ',
		avatarSrc:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		report: true,
	},

	{
		id: 5,
		artworkId: 2,
		content: `
  this is a test report message 2
    `,

		author: 'Report Author2 ',
		avatarSrc:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		report: true,
	},
];

export default function CommentCard({ comment }) {
	// Filter comments based on the selected artwork's id
	return (
		<div>
			<div key={comment.id} className="border relative p-3 m-3 rounded-lg flex space-x-4 text-sm text-gray-500 ">
				<div className="flex-none py-10">
					<img src={comment.avatarSrc} alt="" className="h-10 w-10  rounded-full bg-gray-100" />
				</div>
				<button className="absolute top-0 right-2 mt-2  text-gray-500">
					<XMarkIcon className="w-6 h-6 mr-8" />
				</button>
				<button className="absolute top-0 right-2 mt-2 mr-2 text-gray-500">
					<ExclamationTriangleIcon className="w-6 h-6" />
				</button>
				<div className="flex items-start flex-col">
					<h3 className=" font-medium p-3 text-gray-900">{comment.author}</h3>
					<div className="prose prose-sm  max-w-none text-left py-2 p-3 text-gray-500">{comment.content}</div>
				</div>
			</div>
		</div>
	);
}
