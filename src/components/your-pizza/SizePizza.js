import React from 'react';
import './SizePizza.css';

const SizePizza = (props) => {
	return (
		<div className='size-pizza'>
			<h2 className='size-pizza-title'>Choice size your pizza!</h2>
			<div className='size-pizza-img'>
				<img
					src={process.env.PUBLIC_URL + '/img2/pizza-size.png'}
					className={'small-size ' + (props.base === 7 && 'base-choise')}
					alt='pizza-size'
					onClick={() => {
						props.setBase(7);
					}}
				/>
				<img
					src={process.env.PUBLIC_URL + '/img2/pizza-size.png'}
					className={'midt-size ' + (props.base === 10 && 'base-choise')}
					alt='pizza-size'
					onClick={() => {
						props.setBase(10);
					}}
				/>
				<img
					src={process.env.PUBLIC_URL + '/img2/pizza-size.png'}
					className={'big-size ' + (props.base === 15 && 'base-choise')}
					alt='pizza-size'
					onClick={() => {
						props.setBase(15);
					}}
				/>
			</div>
		</div>
	);
};

export default SizePizza;
