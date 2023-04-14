import React, { useState } from 'react';
import './Basket.css';
import { GrClose } from 'react-icons/gr';

const Basket = (props) => {
	

	return (
		<div>
			{props.showBasket && (
				<div className='basket' onClick={(e)=> {
                    e.stopPropagation()
                }}>
					<div
						className='basket-close-btn'
						onClick={(e) => {
                           
							props.setShowBasket(false);
						}}
					>
						<GrClose />
					</div>
				</div>
			)}
		</div>
	);
};

export default Basket;
