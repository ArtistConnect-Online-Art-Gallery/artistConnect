export default function FileUploadForm({ onClose }) {
	const handSend = (event) => {
		event.preventDefault();
		onClose();
	};
	return (
		<div className="flex items-center justify-center p-18">
			<div className=" mx-auto w-full rounded-lg p-8  bg-white">
				<form className="py-6 px-9 " action="https://formbold.com/s/FORM_ID" method="POST">
					<div className="mb-6 pt-4">
						<label className="mb-5 block text-2xl font-semibold  text-dark">Upload Artwork</label>

						<div className="mb-8">
							<input type="file" name="file" id="file" className="sr-only" />
							<label
								for="file"
								className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
								<div>
									<span className="mb-2 block text-xl font-semibold text-gray-900">Drop files here</span>
									<span className="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
									<span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
										Browse
									</span>
								</div>
							</label>
						</div>

						<div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
							<div className="flex items-center justify-between">
								<span className="truncate pr-3 text-base font-medium text-gray-900">banner-design.png</span>
								<button className="text-gray-900">
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
											fill="currentColor"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
											fill="currentColor"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>

					<div className="mb-5">
						<label htmlFor="Description" className="flex justify-start text-sm font-medium leading-6 text-gray-900">
							Add your Description
						</label>
						<textarea
							type="description"
							name="description"
							id="description"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>

					<div className="mb-5">
						<label htmlFor="genre" className="flex  text-sm font-medium leading-6  justify-start text-gray-900">
							Genre
						</label>
						<select
							id="genre"
							name="genre"
							className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
							defaultValue="genre3">
							<option>Genre1</option>
							<option>Genre2</option>
							<option>Genre3</option>
						</select>
					</div>

					<div className="mb-5">
						<label htmlFor="medium" className="flex justify-start text-sm font-medium leading-6 text-gray-900">
							Medium
						</label>
						<select
							id="medium"
							name="medium"
							className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
							defaultValue="Medium2">
							<option>Medium1</option>
							<option>Medium2</option>
							<option>Medium3</option>
						</select>
					</div>
					<div className="mt-5">
						<button
							onClick={handSend}
							className="hover:shadow-form w-full rounded-md bg-indigo-600 py-3 px-8 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
							Send File
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
