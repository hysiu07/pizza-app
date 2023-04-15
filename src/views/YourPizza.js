import React, { useState, useContext } from 'react';
import './YourPizza.css';
import Ingredients from '../components/your-pizza/Ingredients';
import SizePizza from '../components/your-pizza/SizePizza';
import TotalAmount from '../components/your-pizza/TotalAmount';
import { BasketContext } from '../context/BasketContex';

const YourPizza = (props) => {
	const [costYourPizza, setCostYourPizza] = useState(0);
	const [base, setBase] = useState(0);
	const [checkedIngredients, setCheckedIngredients] = useState([]);
	const { basketValue, setBasketValue } = useContext(BasketContext);

	const addMyPizza = () => {
		let size = '';
		if (base === 7) {
			size = 'small';
		} else if (base === 10) {
			size = 'medium';
		} else {
			size = 'big';
		}
		let myPizza = {
			name: 'your pizza',
			size: size,
			cost: costYourPizza,
			ingredients: checkedIngredients,
			id:  Date.now(),
		};

		setBasketValue([...basketValue, myPizza]);
	};

	return (
		<div className='your-pizza'>
			<div className='you-pizza-shadow'>
				<div className='your-pizza-components'>
					<Ingredients
						setCostYourPizza={setCostYourPizza}
						base={base}
						setCheckedIngredients={setCheckedIngredients}
						checkedIngredients={checkedIngredients}
					/>
					<div className='you-pizza-components-box'>
						<SizePizza setBase={setBase} base={base} />
						<TotalAmount
							costYourPizza={costYourPizza}
							addMyPizza={addMyPizza}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YourPizza;
