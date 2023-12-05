import React from 'react';

export default function CommentPopup({ onClose }) {
	//when user click send button or delete button -close the popup
	const handSend = (event) => {
		event.preventDefault();
		onClose();
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-filter backdrop-blur-md">
			<div className="flex justify-center w-full space-x-4">
				<div>
					<img
						className="inline-block h-10 w-10 rounded-full"
						src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
				<div className="w-4/12">
					<form action="submit" className="relative  ">
						<div className="overflow-hidden rounded-lg shadow-sm ring-2 ring-inset focus-within:ring-indigo-900 ">
							<label htmlFor="comment" className="sr-only ">
								Add your comment
							</label>
							<textarea
								rows={12}
								name="comment"
								id="comment"
								className="block w-full resize-none border-0 py-1.5 text-large bg-transparent placeholder:text-gray-800 focus:ring-0 sm:text-sm sm:leading-6 indent-2"
								placeholder="Add your comment..."
								defaultValue={''}
							/>

							{/* Spacer element to match the height of the toolbar */}
							<div className="py-2" aria-hidden="true">
								{/* Matches height of button in toolbar (1px border + 36px content height) */}
								<div className="py-px">
									<div className="h-9" />
								</div>
							</div>
						</div>

						<div className="absolute inset-x-0 bottom-0 flex justify-end pl-2 py-2 pr-2 space-x-5">
							<div className="flex items-center space-x-5">
								<div className="flex items-center">
									{/* delete button */}
									<button
										onClick={handSend}
										type="submit"
										className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
								</div>
							</div>

							{/* sendButton */}
							<div>
								<button
									type="submit"
									onClick={handSend}
									className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
											d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
										/>
									</svg>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
