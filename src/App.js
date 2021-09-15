import React from 'react'
import { Route } from 'react-router-dom'
import Delivery from './components/Delivery/Delivery.jsx';


import Download from './components/Download/Download.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './pages/HomePage.jsx';

function App() {
	return (
		<div className="wrapper">
			<Route path='/' exact>
				<Navbar />
				<Home />
			</Route>

			<Route path='/home' exact>
				<Navbar />
				<HomePage />
				<Delivery />
				<Download />
				<Footer />
			</Route>
			<Route path='/Service' exact>
				<Navbar />

			</Route>

		</div>
	);
}

export default App;
