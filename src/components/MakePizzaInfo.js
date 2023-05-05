import React from 'react';
import './MakePizzaInfo.css';
import makePizza from '../img/makepizza.jpg'

const MakePizzaInfo = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${makePizza})`,
			}}
			className='make-pizza-info'
		>
			<div className='make-pizza-info-shadow'></div>
		</div>
	);
};

export default MakePizzaInfo;
