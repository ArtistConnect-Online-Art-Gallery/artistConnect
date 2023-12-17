import Footer from '../components/Footer';
import UserHeader from '../components/UserHeader';
import { useState } from 'react';
import { updateUserProfileAction } from '../redux/slices/users';
import { useDispatch, useSelector } from 'react-redux';

export default function SettingPage() {
	//dispatch
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		bio: '',
		userAvatarImg: '',
	});
	const { username, email, password, bio, userAvatarImg } = values;
	//onChange Handeler
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//submit Handeler
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(updateUserProfileAction({ username, email, password, bio, userAvatarImg }));
	};
	const [files, setFiles] = useState([]);
	const [filesErrs, setFilesErrs] = useState([]);

	return (
		<>
			<UserHeader />
			<div className="flex justify-center items-center">
				<div className="divide-y divide-dark/5">
					<div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
						<div>
							<h2 className="text-base font-semibold leading-7 text-dark">Personal Information</h2>
							<p className="mt-1 text-sm leading-6 text-gray-400">
								Use a permanent address where you can receive mail.
							</p>
						</div>

						<form onSubmit={onSubmit} className="md:col-span-2">
							<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
								<div className="col-span-full flex items-center gap-x-8">
									<img
										onChange={onChange}
										src={
											userAvatarImg ||
											'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										}
										alt="user avatar"
										className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
									/>
									<div>
										<input type="file" id="file" className="sr-only" />
										<label htmlFor="file">
											<span
												type="button"
												className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold hover:bg-indigo-400 text-white shadow-sm">
												Change avatar
											</span>
										</label>

										<p className="mt-2 text-xs leading-5 text-gray-400">JPG, GIF, or PNG. 1MB max.</p>
									</div>
								</div>

								<div className="col-span-full">
									<label htmlFor="username" className="block text-sm font-medium leading-6 text-dark">
										Username
									</label>
									<div className="mt-2">
										<div className="flex rounded-md bg-dark/5 ring-1 ring-inset ring-dark/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
											<input
												onChange={onChange}
												value={username}
												type="text"
												name="username"
												id="username"
												autoComplete="username"
												className=" indent-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-dark focus:ring-0 sm:text-sm sm:leading-6"
												placeholder="tom cook"
											/>
										</div>
									</div>
								</div>

								<div className="col-span-full">
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-dark">
										Email address
									</label>
									<div className="mt-2">
										<input
											onChange={onChange}
											value={email}
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className=" indent-2 block w-full rounded-md border-0 bg-dark/5 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>

							<div className="mt-8 flex">
								<button
									type="submit"
									className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
									Save
								</button>
							</div>
						</form>
					</div>

					<div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
						<div>
							<h2 className="text-base font-semibold leading-7 text-dark">Bio</h2>
							<p className="mt-1 text-sm leading-6 text-gray-400">Write few sentences about yourself.</p>
						</div>
						<form onSubmit={onSubmit} className="md:col-span-2 ">
							<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
								<div className="col-span-full">
									<label htmlFor="about" className="block text-sm font-medium leading-6 text-dark">
										About
									</label>
									<div className="mt-2">
										<textarea
											onChange={onChange}
											value={bio}
											id="about"
											name="bio"
											rows={3}
											className=" indent-2 block w-full rounded-md border-0 bg-dark/5 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>

							<div className="mt-8 flex">
								<button
									type="submit"
									className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
									Save
								</button>
							</div>
						</form>
					</div>

					<div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
						<div>
							<h2 className="text-base font-semibold leading-7 text-dark">Change password</h2>
							<p className="mt-1 text-sm leading-6 text-gray-400">Update your password associated with your account.</p>
						</div>

						<form onSubmit={onSubmit} className="md:col-span-2">
							<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
								<div className="col-span-full">
									<label htmlFor="current-password" className="block text-sm font-medium leading-6 text-dark">
										Current password
									</label>
									<div className="mt-2">
										<input
											id="current-password"
											name="current_password"
											type="password"
											autoComplete="current-password"
											className=" indent-2 block w-full rounded-md border-0 bg-dark/5 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="col-span-full">
									<label htmlFor="new-password" className="block text-sm font-medium leading-6 text-dark">
										New password
									</label>
									<div className="mt-2">
										<input
											onChange={onChange}
											value={password}
											id="new-password"
											name="password"
											type="password"
											autoComplete="new-password"
											className="  indent-2 block w-full rounded-md border-0 bg-dark/5 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="col-span-full">
									<label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-dark">
										Confirm password
									</label>
									<div className="mt-2">
										<input
											onChange={onChange}
											value={password}
											id="confirm-password"
											name="password"
											type="password"
											autoComplete="new-password"
											className=" indent-2 block w-full rounded-md border-0 bg-dark/5 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>

							<div className="mt-8 flex">
								<button
									type="submit"
									className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
									Save
								</button>
							</div>
						</form>
					</div>

					<div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
						<div>
							<h2 className="text-base font-semibold leading-7 text-dark">Delete account</h2>
							<p className="mt-1 text-sm leading-6 text-gray-400">
								No longer want to use our service? You can delete your account here. This action is not reversible. All
								information related to this account will be deleted permanently.
							</p>
						</div>

						<form className="flex items-start md:col-span-2">
							<button
								type="submit"
								className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400">
								Yes, delete my account
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
