import React from 'react';
import './Ingredients.css';

const Ingredients = (props) => {
	const addIngredients = (el) => {
		props.setCheckedIngredients((ingredients) => {
			return ingredients.map((ingredient) => {
				return ingredient.name === el.name
					? { ...ingredient, checked: !el.checked }
					: { ...ingredient };
			});
		});
	};

	return (
		<div className='ingredients'>
			{props.checkedIngredients.map((el, indx) => {
				return (
					<div key={indx} className='ingredien-box'>
						<input
							type='checkbox'
							className='ingredients-checkbox'
							checked={el.checked}
							onChange={(e) => {
								addIngredients(el);
							}}
						/>
						<img
							className='ingredients-img'
							src={process.env.PUBLIC_URL + '/img2/' + el.name + '.png'}
							alt={el.name}
						/>
						<span className='ingredients-name'>{el.name}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Ingredients;
