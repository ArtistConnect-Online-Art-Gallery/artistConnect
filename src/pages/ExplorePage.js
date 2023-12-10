import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtworksCard, { artworks } from '../components/ArtworksCard';

import SearchBar from '../components/SearchBar';

export default function ExplorePage() {
	return (
		<div className="bg-white">
			{/* Header */}
			<Header />
			<main>
				<SearchBar />
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<div className="bg-white grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{artworks.map((artwork, index) => (
							<ArtworksCard key={index} artwork={artwork} />
						))}
					</div>
				</div>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}
