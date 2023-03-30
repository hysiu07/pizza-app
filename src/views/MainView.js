import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Deals from '../components/Deals';

const MainView = (props) => {
	return (
		<div className='main-view'>
			<Nav />
			<Header />
			<Deals pizzas={props.pizzas}/>
		</div>
	);
};

export default MainView;
