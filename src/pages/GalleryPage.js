import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import GalleryButtons from '../components/GalleryButtons';
import { useEffect, useState } from 'react';
import baseURL from '../utils/baseURL';
import axios from 'axios';
import ArtworksGallery from '../components/ArtworksGalleryExplore';

export default function GalleryPage() {
	return (
		<div className="bg-white">
			{/* Header */}
			<UserHeader />
			<main>
				<GalleryButtons />
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<ArtworksGallery />
				</div>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}
