import React, { useState, useContext, useEffect } from 'react';
import './Basket.css';
import { GrClose } from 'react-icons/gr';
import { BiMinus } from 'react-icons/bi';
import { BasketContext } from '../context/BasketContex';
import SummaryPanel from './SummaryPanel';

const Basket = (props) => {
	const { basketValue, setBasketValue } = useContext(BasketContext);
	const [priceInBasket, setPriceInBasket] = useState(0);
	const [showSummaryPanel, setShowSummaryPanel] = useState(false);

	useEffect(() => {
		setPriceInBasket(
			basketValue.reduce((sum, currentPrice) => {
				return sum + currentPrice.cost;
			}, 0)
		);
	});

	const deleteProduct = (el) => {
		setBasketValue(
			basketValue.filter((product) => {
				return el.id !== product.id;
			})
		);
	};

	return (
		<div>
			{showSummaryPanel && (
				<SummaryPanel
					setShowSummaryPanel={setShowSummaryPanel}
					showSummaryPanel={showSummaryPanel}
					priceInBasket={priceInBasket}
				/>
			)}
			<div
				className={'basket ' + (props.showBasket && 'show-basket')}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div
					className='basket-close-btn'
					onClick={() => {
						props.setShowBasket(!props.showBasket);
					}}
				>
					<GrClose />
				</div>
				<h2 className='basket-title'>Your basket!</h2>
				<p className='basket-summary'>{priceInBasket} USD</p>
				<div className='basket-elements'>
					{basketValue.map((el, index) => {
						return (
							<div className='basket-element' key={index} id={el.id}>
								<div
									className='basket-element-img'
									style={{
										backgroundImage: `url(${process.env.PUBLIC_URL + el.img})`,
									}}
								></div>
								<div className='basket-element-text'>
									<p className='element-title'>{el.name}</p>
									<p className='element-size'>{el.size}</p>
									<p className='element-price'>{el.cost} USD</p>
								</div>

								<div
									className='basket-element-delete-btn'
									onClick={() => {
										deleteProduct(el);
									}}
								>
									<BiMinus />
								</div>
							</div>
						);
					})}
					<button
						className='basket-btn'
						disabled={!priceInBasket}
						onClick={() => {
							setShowSummaryPanel(!showSummaryPanel);
							props.setShowBasket(!props.showBasket);
						}}
					>
						Summary
					</button>
				</div>
			</div>
		</div>
	);
};

export default Basket;
