import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/HomePage/LandingPage';
import ExplorePage from './pages/ExplorePage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route path="/explore" element={<ExplorePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
