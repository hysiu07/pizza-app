import React, { useState, useContext } from 'react';
import './MenuChoicePanel.css';
import { GrClose } from 'react-icons/gr';
import { BasketContext } from '../context/BasketContex';

const MenuChoicePanel = (props) => {
	const [base, setBase] = useState(10);
	const { basketValue, setBasketValue } = useContext(BasketContext);

	let summary = props.infoPizza.price + base;

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
			name: props.infoPizza.name,
			size: size,
			cost: summary,
			ingredients: props.infoPizza.ingredients,
			img: props.infoPizza.img,
			id: Date.now(),
		};

		setBasketValue([...basketValue, myPizza]);
	};
	return (
		<div
			className='choice-panel-bcg'
			onClick={() => {
				props.showChoicePanel(!props.choisePanel);
			}}
		>
			<div
				className='choice-panel'
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div
					className='choice-panel-close-btn'
					onClick={() => {
						props.showChoicePanel(!props.choisePanel);
					}}
				>
					<GrClose size={'30px'} />
				</div>

				<div
					className='choice-panel-img'
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + props.infoPizza.img
						})`,
					}}
				>
					{props.infoPizza.discount && (
						<div className='offer'>
							<p>offer</p>
						</div>
					)}
				</div>
				<div className='choice-panel-info'>
					<h3>{props.infoPizza.name}</h3>
					<p>{props.infoPizza.ingredients}</p>
					<div className='choice-panel-size-pizza'>
						<img
							src={process.env.PUBLIC_URL + '/img2/pizza-size.png'}
							className={
								'small-size ' + (base === 7 && 'choice-panel-base-choise')
							}
							alt='pizza-size'
							onClick={() => {
								setBase(7);
							}}
						/>
						<img
							src={process.env.PUBLIC_URL + '/img2/pizza-size.png'}
							className={
								'midt-size ' + (base === 10 && 'choice-panel-base-choise')
							}
							alt='pizza-size'
							onClick={() => {
								setBase(10);
							}}
						/>
						<img
							src={process.env.PUBLIC_URL + '/img2/pizza-size.png'}
							className={
								'big-size ' + (base === 15 && 'choice-panel-base-choise')
							}
							alt='pizza-size'
							onClick={() => {
								setBase(15);
							}}
						/>
					</div>
					<p className='choice-panel-summary'> Price: {summary} USD</p>
					<button
						className='choice-panel-add-btn'
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

export default MenuChoicePanel;
