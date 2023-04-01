import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Deals from '../components/Deals';

import MakePizzaInfo from '../components/MakePizzaInfo';

const MainView = (props) => {
	return (
		<div className='main-view'>
			<Nav />
			<Header />
			<Deals pizzas={props.pizzas}/>
			<MakePizzaInfo />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		</div>
	);
};

export default MainView;
