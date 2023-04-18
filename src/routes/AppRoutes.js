import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainView from '../views/MainView';
import YourPizza from '../views/YourPizza';
import Menu from '../views/Menu';

const AppRoutes = (props) => {
	return (
		<Routes>
			<Route path='/' element={<MainView pizzas={props.pizzas} />} />
			<Route path='/menu' element={<Menu pizzas={props.pizzas} />} />
			<Route path='/your-pizza' element={<YourPizza />} />
		</Routes>
	);
};

export default AppRoutes;
