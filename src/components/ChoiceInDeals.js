import React, { useState, useContext } from 'react';
import './ChoiceInDeals.css';
import { GrClose } from 'react-icons/gr';
import { BasketContext } from '../context/BasketContex';

const ChoiceInDeals = (props) => {
	const [base, setBase] = useState(10);
	const { basketValue, setBasketValue } = useContext(BasketContext);

	let summary = props.infopizza.price + base;

	const addPizzaWithDiscount = () => {
		let size = '';
		if (base === 7) {
			size = 'small';
		} else if (base === 10) {
			size = 'medium';
		} else {
			size = 'big';
		}
		let myPizza = {
			name: props.infopizza.name,
			size: size,
			cost: summary,
			ingredients: props.infopizza.ingredients,
			img: props.infopizza.img,
			id: Date.now(),
		};

		setBasketValue([...basketValue, myPizza]);
	};

	return (
		<div
			className='background'
			onClick={() => {
				props.closeChoiceInDeals();
			}}
		>
			<div
				className=' choice-in-deals-box'
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div
					className='choice-in-deals-close-btn'
					onClick={() => {
						props.closeChoiceInDeals();
					}}
				>
					<GrClose size={'30px'} />
				</div>

				<div
					className='choice-in-deals-img'
					style={{ backgroundImage: `url(${props.infopizza.img})` }}
				></div>
				<div className='choice-in-deals-info'>
					<h3>{props.infopizza.name}</h3>
					<p>{props.infopizza.ingredients}</p>
					<div className='choice-in-deals-size-pizza'>
						<img
							src='./img2/pizza-size.png'
							className={
								'small-size ' + (base === 7 && 'choice-in-deals-base-choise')
							}
							alt='pizza-size'
							onClick={() => {
								setBase(7);
							}}
						/>
						<img
							src='./img2/pizza-size.png'
							className={
								'midt-size ' + (base === 10 && 'choice-in-deals-base-choise')
							}
							alt='pizza-size'
							onClick={() => {
								setBase(10);
							}}
						/>
						<img
							src='./img2/pizza-size.png'
							className={
								'big-size ' + (base === 15 && 'choice-in-deals-base-choise')
							}
							alt='pizza-size'
							onClick={() => {
								setBase(15);
							}}
						/>
					</div>
					<p className='choice-in-deal-summary'> Price: {summary} USD</p>
					<button
						className='choice-in-deal-add-btn'
						onClick={() => {
							addPizzaWithDiscount();
						}}
					>
						Add to your basket
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChoiceInDeals;
