import React from 'react';
import './TotalAmount.css';

const TotalAmount = (props) => {
	return (
		<div className='total-amount'>
			<h2 className='total-amount-title'>Summary</h2>
			<p className='total-amount-price'>{props.costYourPizza.toFixed(1)} zł</p>
			<button className='total-amount-btn'>Dodaj do koszyka!</button>

		</div>
	);
};

export default TotalAmount;
