import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/HomePage/LandingPage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import SettingPage from './pages/SettingPage';
import GalleryPage from './pages/GalleryPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route path="/explore" element={<ExplorePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/settings" element={<SettingPage />} />
					<Route path="/gallery" element={<GalleryPage />} />
					<Route path="/artwork/:id" element={<ArtworkDetailPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
