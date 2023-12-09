import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import ArtworksCard from '../components/ArtworksCard';
import GalleryButtons from '../components/GalleryButtons';

export default function GalleryPage() {
	return (
		<div className="bg-white">
			{/* Header */}
			<UserHeader />
			<main>
				<GalleryButtons />
				<ArtworksCard />
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}
