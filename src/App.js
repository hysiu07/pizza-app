import './App.css';
import React, { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import Nav from './components/Nav';
import { BasketContext } from './context/BasketContex';
import pizzas from './pizzas';
import MainView from './views/MainView';

function App() {
	const [basketValue, setBasketValue] = useState([]);

	return (
		<div className='App'>
			<BasketContext.Provider value={{ basketValue, setBasketValue }}>
				<Nav />
				{/* <MainView pizzas={pizzas} /> */}
				<AppRoutes pizzas={pizzas} />
			</BasketContext.Provider>
		</div>
	);
}

export default App;
