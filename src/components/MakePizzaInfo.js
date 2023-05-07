import React from 'react';
import './MakePizzaInfo.css';
import makePizza from '../img/makepizza.jpg';

const MakePizzaInfo = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${makePizza})`,
			}}
			className='make-pizza-info'
		>
			<div className='make-pizza-info-shadow'>
				<h2 className='make-pizza-title'>Make your pizza!</h2>
				<p className='make-pizza-discription'>
					In our pizzeria, we offer a unique culinary experience that allows you
					to create your own pizza with your favorite ingredients. Whether you
					like traditional toppings such as ham, mushrooms, and cheese, or more
					elaborate ones such as arugula, sun-dried tomatoes, and olives, we
					have a wide selection of ingredients to ensure that everyone can
					create their ideal pizza.
				</p>
			</div>
		</div>
	);
};

export default MakePizzaInfo;
