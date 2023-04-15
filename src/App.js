import './App.css';

import React, { createContext, useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import Nav from './components/Nav';
import { BasketContext } from './context/BasketContex';

function App() {
	// main COST
	const [cost, setCost] = useState(0);

	// const BasketContext = createContext(null);

	const pizzas = [
		{
			name: 'Spicy Chicken',
			price: 18,
			discount: false,
			ingredients:
				'Grillowany kurczak, jalapeño, mozzarella, ziołowy sos pomidorowy',
			img: '/img/spicy-chicken.jpg',
		},
		{
			name: 'Pepperoni',
			price: 20,
			discount: false,
			ingredients: 'Pepperoni, kukurydza, mozzarella, sos czosnkowy',
			img: '/img/pepperoni.jpg',
		},
		{
			name: 'El Clasico',
			price: 16,
			discount: true,
			ingredients: 'Szynka, pieczarki, ser mozzarella, ziołowy sos pomidorowy',
			img: '/img/el-clasico.jpg',
		},
		{
			name: 'Margherita',
			price: 15,
			discount: true,
			ingredients: 'Mozzarella, ziołowy sos pomidorowy',
			img: '/img/margherita.jpg',
		},
		{
			name: 'Kebab',
			price: 22,
			discount: true,
			ingredients: 'Kurczak kebab, czerwona cebula, mozzarella, sos czosnkowy',
			img: '/img/kebab.jpg',
		},
		{
			name: 'Americana',
			price: 25,
			discount: true,
			ingredients:
				'Pieczarki, pomidory, ser mozzarella, ziołowy sos pomidorowy',
			img: '/img/americana.jpg',
		},
	];

	const [basketValue, setBasketValue] = useState([]);
	
	return (
		<div className='App'>
			<BasketContext.Provider value={ {basketValue, setBasketValue}}>
				<Nav />
				<AppRoutes pizzas={pizzas} />
			</BasketContext.Provider>
		</div>
	);
}

export default App;
