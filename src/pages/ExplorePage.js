import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtworksCard from '../components/ArtworksCard';
import SearchBar from '../components/SearchBar';

export default function ExplorePage() {
	return (
		<div className="bg-white">
			{/* Header */}
			<Header />
			<main>
				<SearchBar />
				<ArtworksCard />
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}
