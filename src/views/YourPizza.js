import React from 'react';
import './YourPizza.css';
import Ingredients from '../components/your-pizza/Ingredients';

const YourPizza = (props) => {
	return (
		<div className='your-pizza'>
			<div className='you-pizza-shadow'>
				<div className='your-pizza-components'>
					<Ingredients />
				</div>
			</div>
		</div>
	);
};

export default YourPizza;
