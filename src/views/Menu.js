import React, { useState } from 'react';
import './Menu.css';
import MenuChoicePanel from '../components/MenuChoicePanel';
import { BsCupStraw } from 'react-icons/bs';
import { TbSalad } from 'react-icons/tb';
import { IoIosIceCream } from 'react-icons/io';
import { CiPizza } from 'react-icons/ci';

const Menu = (props) => {
	const [choisePanel, showChoicePanel] = useState(false);
	const [infoPizza, setInfoPizza] = useState(null);
	const [typeOfMenu, setTypeOfMenu] = useState('pizza');
	return (
		<div className='menu'>
			{choisePanel && (
				<MenuChoicePanel
					choisePanel={choisePanel}
					showChoicePanel={showChoicePanel}
					infoPizza={infoPizza}
				/>
			)}
			<div className='panel-controls'>
				<div
					className={
						'panel-control ' + (typeOfMenu === 'pizza' && 'red-border-menu')
					}
					onClick={() => {
						setTypeOfMenu('pizza');
					}}
				>
					<CiPizza size={'80px'} />
				</div>
				<div
					className={
						'panel-control ' + (typeOfMenu === 'drinks' && 'red-border-menu')
					}
					onClick={() => {
						setTypeOfMenu('drinks');
					}}
				>
					<BsCupStraw size={'80px'} />
				</div>
				<div
					className={
						'panel-control ' + (typeOfMenu === 'salads' && 'red-border-menu')
					}
					onClick={() => {
						setTypeOfMenu('salads');
					}}
				>
					<TbSalad size={'80px'} />
				</div>
				<div
					className={
						'panel-control ' + (typeOfMenu === 'deserts' && 'red-border-menu')
					}
					onClick={() => {
						setTypeOfMenu('deserts');
					}}
				>
					<IoIosIceCream size={'80px'} />
				</div>
			</div>

			{props.pizzas.map((pizza) => {
				return (
					<div
						className='menu-el'
						onClick={() => {
							showChoicePanel(!choisePanel);
							setInfoPizza(pizza);
						}}
					>
						<div
							className='menu-el-img'
							style={{
								backgroundImage: `url(${
									process.env.PUBLIC_URL + pizza.img
								})`,
							}}
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
