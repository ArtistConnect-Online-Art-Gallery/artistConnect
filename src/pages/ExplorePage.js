import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtworksCard from '../components/ArtworksCard';

export default function ExplorePage() {
	return (
		<div className="bg-white">
			{/* Header */}
			<Header />
			<main>
				<ArtworksCard />
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}
