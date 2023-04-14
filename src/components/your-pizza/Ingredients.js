import React from 'react';
import './Ingredients.css';
import data from './dane.json';
import { useState } from 'react';
import { useEffect } from 'react';

const Ingredients = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		data.map((product) => {
			product.checked = product.cost === 0 ? true : false;
			return product;
		});
		setProducts(data);
	}, []);

	useEffect(() => {
		props.setCostYourPizza(
			products.reduce((sum, currentEl) => {
				return currentEl.checked ? sum + currentEl.cost : sum;
			}, props.base)
		);
	}, [props.base, products]);



	const addIngredients = (el) => {
		setProducts(
			products.map((product) => {
				if (product.name === el.name) {
					product.checked = !product.checked;
				}
				return product;
			})
		);
	};

	return (
		<div className='ingredients'>
			{products.map((el, indx) => {
				return (
					<div key={indx} className='ingredien-box'>
						<input
							type='checkbox'
							className='ingredients-checkbox'
							checked={el.checked}
							onChange={() => {
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
