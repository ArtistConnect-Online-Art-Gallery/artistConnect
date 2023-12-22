import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../utils/logo.png';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileAction, loginUserAction } from '../redux/slices/users';
import { Fragment, useState, useEffect } from 'react';
import { signoutAction } from '../redux/slices/users';

const navigation = [
	{ name: 'Home', to: '/' },
	{ name: 'Explore', to: '/explore' },
];
const userNavigation = [
	{ name: 'Your Profile', to: '/profile' },
	{ name: 'My Gallery', to: '/gallery' },
	{ name: 'Settings', to: '/settings' },
	{ name: 'Sign out', to: '/' },
];
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const dispatch = useDispatch();
	const [isSignOutButtonClicked, setIsSignOutButtonClicked] = useState(false);

	// logout user and remove localstorage user info
	const signoutHandler = (item) => {
		if (item.name === 'Sign out') {
			dispatch(signoutAction()); // Dispatch the signout action only if the "Sign out" button is clicked
			setIsSignOutButtonClicked(true);
			window.location.reload();
			window.location.href = '/';
		}
	};

	//get data from store
	const { error, loading, profile } = useSelector((state) => state?.users);
	//get login user from localstorage

	const user = JSON.parse(localStorage.getItem('userInfo'));

	const isLoggedIn = user?.token ? true : false;

	useEffect(() => {
		dispatch(getUserProfileAction());
	}, [dispatch]);

	return (
		<header className="bg-black">
			{!isLoggedIn ? (
				<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-1" aria-label="Global">
					<div className="flex items-center gap-x-12">
						<Link to="/" className="-m-1.5 p-1.5">
							<img className="h-7 w-auto" src={logo} alt="logo" />
						</Link>
						<div className="hidden lg:flex lg:gap-x-12">
							{navigation.map((item) => (
								<Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-white">
									{item.name}
								</Link>
							))}
						</div>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  text-white"
							onClick={() => setMobileMenuOpen(true)}>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden lg:flex">
						<Link to="/login" className="text-sm font-semibold leading-6 text-white">
							Log in <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>{' '}
					<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
						<div className="fixed inset-0 z-10" />
						<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
							<div className="flex items-center justify-between">
								<Link to="/" className="-m-1.5 p-1.5">
									<span className="sr-only">ArtistConnect</span>
									<img className="h-8 w-auto" src={logo} alt="" />
								</Link>
								<button
									type="button"
									className="-m-2.5 rounded-md p-2.5 text-white"
									onClick={() => setMobileMenuOpen(false)}>
									<span className="sr-only">Close menu</span>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-500/10">
									<div className="space-y-2 py-6">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.to}
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
												{item.name}
											</Link>
										))}
									</div>
									<div className="py-6">
										<Link
											to="/login"
											className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
											Log in
										</Link>
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Dialog>
				</nav>
			) : (
				<Disclosure as="nav" className="bg-black">
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 justify-between">
									<div className="flex">
										<div className="-ml-2 mr-2 flex items-center md:hidden">
											{/* Mobile menu button */}
											<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
												<span className="absolute -inset-0.5" />
												<span className="sr-only">Open main menu</span>
												{open ? (
													<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
												) : (
													<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
												)}
											</Disclosure.Button>
										</div>
										<Link to="/" className="flex flex-shrink-0 items-center">
											<img className="h-8 w-auto" src={logo} alt="artistconnet" />
										</Link>
										<div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
											{navigation.map((item) => (
												<Link
													key={item.name}
													to={item.to}
													className={classNames(
														item.current
															? 'bg-gray-900 text-white'
															: 'text-gray-300 hover:bg-gray-700 hover:text-white',
														'rounded-md px-3 py-2 text-sm font-medium'
													)}
													aria-current={item.current ? 'page' : undefined}>
													{item.name}
												</Link>
											))}
										</div>
									</div>
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<button
												type="button"
												className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
												{profile?.user?.username}
											</button>
										</div>
										<div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
											{/* Profile dropdown */}
											<Menu as="div" className="relative ml-3">
												<div>
													<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
														<span className="absolute -inset-1.5" />
														<span className="sr-only">Open user menu</span>
														<img className="h-8 w-8 rounded-full" src={profile?.user?.userAvatarImg} alt="" />
													</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													enter="transition ease-out duration-200"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95">
													<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
														{userNavigation.map((item) => (
															<Menu.Item key={item.name}>
																{({ active }) => (
																	<Link
																		to={item.to}
																		onClick={() => signoutHandler(item)}
																		className={classNames(
																			active ? 'bg-gray-100' : '',
																			'block px-4 py-2 text-sm text-gray-700'
																		)}>
																		{item.name}
																	</Link>
																)}
															</Menu.Item>
														))}
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="md:hidden">
								<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
									{navigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											to={item.to}
											className={classNames(
												item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'block rounded-md px-3 py-2 text-base font-medium'
											)}
											aria-current={item.current ? 'page' : undefined}>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
								<div className="flex flex-col justify-items-center border-t border-gray-700 pb-3 pt-4">
									<div className="flex items-center justify-center px-5 sm:px-6">
										<div className="flex-shrink-0">
											<img className="h-10 w-10 rounded-full" src={profile?.user?.userAvatarImg} alt="" />
										</div>
										<div className="ml-3">
											<div className="text-base font-medium text-white">{profile?.user?.username}</div>
											<div className="text-sm font-medium text-gray-400">{profile?.user?.email}</div>
										</div>
									</div>
									<div className="mt-3 space-y-1 px-2 sm:px-3">
										{userNavigation.map((item) => (
											<Link
												key={item.name}
												to={item.to}
												onClick={() => signoutHandler(item)}
												className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			)}
		</header>
	);
}
