import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtworksGallery from '../components/ArtworksGallery';
import SearchBar from '../components/SearchBar';

export default function ExplorePage() {
	return (
		<div className="bg-white">
			{/* Header */}
			<Header />
			<main>
				<SearchBar />
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<ArtworksGallery />
				</div>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}
