import React from 'react';
import Header from '../components/Header';
import Deals from '../components/Deals';


import MakePizzaInfo from '../components/MakePizzaInfo';

const MainView = (props) => {
	return (
		<div className='main-view'>
			
			<Header />
			<Deals pizzas={props.pizzas}/>
			<MakePizzaInfo />
	
		</div>
	);
};

export default MainView;
