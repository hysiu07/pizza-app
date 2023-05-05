import React from 'react';
import './MakePizzaInfo.css';

const MakePizzaInfo = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${
					process.env.PUBLIC_URL + '/blob/master/public' + '/img/makepizza.jpg'
				})`,
			}}
			className='make-pizza-info'
		>
			<div className='make-pizza-info-shadow'></div>
		</div>
	);
};

export default MakePizzaInfo;
