import { Fragment, useEffect, useState } from 'react';
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileAction } from '../redux/slices/users';
import ArtworksCard from '../components/ArtworksCard';

const sortOptions = [{ name: 'Favoriate Artowrks' }, { name: 'My Artworks' }];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	const [open, setOpen] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserProfileAction());
	}, [dispatch]);
	//get data from store
	const { profile } = useSelector((state) => state?.users);
	const myArtworks = profile?.user?.artworks || [];
	const favArtworks = profile?.user?.favArtworks || [];
	console.log('favArtworks', favArtworks);

	return (
		<div className="bg-gray-50">
			<div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="py-24">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900">My Gallery</h1>
					<p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">My artistic journey</p>
				</div>

				<section aria-labelledby="filter-heading" className="border-t border-gray-200 py-6">
					<div className="flex items-center justify-between">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
									Artworks Filter
									<ChevronDownIcon
										className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95">
								<Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										{sortOptions.map((option) => (
											<Menu.Item key={option}>
												{({ active }) => (
													<a
														href={option.href}
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm font-medium text-gray-900'
														)}>
														{option.name}
													</a>
												)}
											</Menu.Item>
										))}
									</div>
								</Menu.Items>
							</Transition>
						</Menu>

						<button
							type="button"
							className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
							onClick={() => setOpen(true)}>
							Filters
						</button>
					</div>
				</section>
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<div className="bg-white grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{favArtworks.map((artwork, index) => (
							<ArtworksCard key={index} artwork={artwork} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
