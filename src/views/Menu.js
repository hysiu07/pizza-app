import React, { useContext, useState } from 'react';
import './Menu.css';
import { BasketContext } from '../context/BasketContex';
import MenuChoicePanel from '../components/MenuChoicePanel';

const Menu = (props) => {
	const [choisePanel, showChoicePanel] = useState(false);
	const [infoPizza, setInfoPizza] = useState(null)
	return (
		<div className='menu'>
			{choisePanel && (
				<MenuChoicePanel
					choisePanel={choisePanel}
					showChoicePanel={showChoicePanel}
					infoPizza={infoPizza}
				/>
			)}

			{props.pizzas.map((pizza) => {
				return (
					<div
						className='menu-el'
						onClick={() => {
							showChoicePanel(!choisePanel);
							setInfoPizza(pizza)
						}}
					>
						<div
							className='menu-el-img'
							style={{ backgroundImage: `url(${pizza.img})` }}
						>
							{pizza.discount && (
								<div className='menu-el-special-offer'>OFFER</div>
							)}
						</div>
						<div className='menu-el-text'>
							<h3 className='menu-el-title'>{pizza.name}</h3>
							<p className='menu-el-ingredients'>{pizza.ingredients}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Menu;
