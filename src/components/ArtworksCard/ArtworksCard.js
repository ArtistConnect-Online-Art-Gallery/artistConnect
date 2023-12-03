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
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">artworks</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{artworks.map((artwork) => (
						<div key={artwork.id} className="group relative">
							<img src={artwork.imageSrc} alt={artwork.imageAlt} className="w-full h-60 object-cover rounded-lg" />
							<div className="absolute top-0 right-0 mt-2 mr-2">
								<button className="border border-gray-300 rounded p-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
										/>
									</svg>
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
										<button className="flex items-center space-x-1 text-gray-600 hover:text-red-400 focus:outline-none">
											{/* Like Icon */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="w-6 h-6">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
												/>
											</svg>
										</button>
										<button className="flex items-center space-x-1 text-gray-600 hover:text-blue-400 focus:outline-none">
											{/* Comment Icon */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="w-6 h-6">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
												/>
											</svg>
										</button>
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
