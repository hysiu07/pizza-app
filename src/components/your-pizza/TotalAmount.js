import React from 'react';
import './TotalAmount.css';

const TotalAmount = (props) => {
	return (
		<div className='total-amount'>
			<h2 className='total-amount-title'>Summary</h2>
			<p className='total-amount-price'>{props.costYourPizza.toFixed(1)} USD</p>
			<button className='total-amount-btn' onClick={props.addMyPizza}>Add to your basket!</button>

		</div>
	);
};

export default TotalAmount;
