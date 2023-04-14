import React, { useState } from 'react';
import './YourPizza.css';
import Ingredients from '../components/your-pizza/Ingredients';
import SizePizza from '../components/your-pizza/SizePizza';
import TotalAmount from '../components/your-pizza/TotalAmount';

const YourPizza = (props) => {

	const [costYourPizza, setCostYourPizza] = useState(0)
	const [base, setBase] = useState(0)

	return (
		<div className='your-pizza'>
			<div className='you-pizza-shadow'>
				<div className='your-pizza-components'>
					<Ingredients setCostYourPizza={setCostYourPizza} base={base} />
					<div className='you-pizza-components-box'>
						<SizePizza setBase={setBase} base={base}/>
						<TotalAmount costYourPizza={costYourPizza} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default YourPizza;
