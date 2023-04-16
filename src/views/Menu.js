import React, { useContext, useState } from 'react';
import './Menu.css';
import { BasketContext } from '../context/BasketContex';

const Menu = (props) => {
	const { basketValue } = useContext(BasketContext);
	const [choisePanel, showChoicePanel] = useState(false);
	return (
		<div className='menu'>
			{choisePanel && (
				<div className='choice-panel-bcg'onClick={()=>{
                    showChoicePanel(!choisePanel)
                }}>
					<div className='choice-panel' onClick={(e) => {
                        e.stopPropagation()
                    }}></div>
				</div>
			)}

			{props.pizzas.map((product) => {
				return (
					<div className='menu-el' onClick={()=>{
                        showChoicePanel(!choisePanel)
                    }} >
						<div
							className='menu-el-img'
							style={{ backgroundImage: `url(${product.img})` }}
						>
							{product.discount && (
								<div className='menu-el-special-offer'>OFFER</div>
							)}
						</div>
						<div className='menu-el-text'>
							<h3 className='menu-el-title'>{product.name}</h3>
							<p className='menu-el-ingredients'>{product.ingredients}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Menu;
