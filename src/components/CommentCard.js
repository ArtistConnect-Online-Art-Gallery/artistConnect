import React from 'react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function CommentCard({ comment }) {
	// Filter comments based on the selected artwork's id
	return (
		<div>
			<div key={comment.id} className="border relative p-3 m-3 rounded-lg flex space-x-4 text-sm text-gray-500 ">
				<div className="flex-none py-10">
					<img src={comment.avatarSrc} alt="" className="h-10 w-10  rounded-full bg-gray-100" />
				</div>
				<button className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">
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
