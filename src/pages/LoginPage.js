import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const handleInput = (e) => {
		setValues((pre) => ({
			...pre,
			[e.target.name]: e.target.value,
		}));
	};

	const navigate = useNavigate();

	const handleSumbit = (e) => {
		e.preventDefault();
		// Assuming `values` is meant to hold the form data
		// Check if `values` exists and has valid data
		if (values) {
			axios
				.post('http://localhost:3000/users/login', values)
				.then((response) => {
					navigate('/profile').catch((error) => {
						console.log(error);
					});
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			console.log('Values are missing or invalid.');
		}
	};

	return (
		<>
			<Header />
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" method="POST" action="" onSubmit={handleSumbit}>
						<div>
							<label
								htmlFor="email"
								className=" text-sm font-medium  flex items-center justify-between leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									onChange={handleInput}
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-2 "
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
								<div className="text-sm">
									<Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</Link>
								</div>
							</div>
							<div className="mt-2">
								<input
									onChange={handleInput}
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-2"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{' '}
						<Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Register here
						</Link>
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
