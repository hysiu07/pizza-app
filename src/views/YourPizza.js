import React, { useState, useContext, useEffect } from 'react';
import './YourPizza.css';
import Ingredients from '../components/your-pizza/Ingredients';
import SizePizza from '../components/your-pizza/SizePizza';
import TotalAmount from '../components/your-pizza/TotalAmount';
import { BasketContext } from '../context/BasketContex';
import data from '../components/your-pizza/dane.json';
// import imgmakePizza from '../img/makepizza.jpg';

const YourPizza = (props) => {
	const [costYourPizza, setCostYourPizza] = useState(0);
	const [base, setBase] = useState(10);
	const [checkedIngredients, setCheckedIngredients] = useState([]);
	const [ingredientsNames, setIngredientsName] = useState([]);
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
			ingredients: ingredientsNames,
			img: '/img/makepizza.jpg',
			id: Date.now(),
		};

		setBasketValue([...basketValue, myPizza]);
	};

	useEffect(() => {
		data.map((product) => {
			product.checked = product.cost === 0 ? true : false;
			return product;
		});

		setCheckedIngredients(data);
	}, []);

	useEffect(() => {
		setCostYourPizza(
			checkedIngredients.reduce((sum, currentEl) => {
				return currentEl.checked ? sum + currentEl.cost : sum;
			}, base)
		);

		setIngredientsName(
			checkedIngredients.filter((el) => {
				return el.checked && el.name;
			})
		);
	}, [base, checkedIngredients]);

	return (
		<div className='your-pizza'>
			<div className='you-pizza-shadow'>
				<div className='your-pizza-components'>
					<Ingredients
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
