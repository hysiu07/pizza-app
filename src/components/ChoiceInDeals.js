import React from 'react';
import './ChoiceInDeals.css';
import { GrClose } from 'react-icons/gr';


const ChoiceInDeals = (props) => {
	return (
		<div
			className='background'
			onClick={() => {
				props.closeChoiceInDeals();
			}}
		>
			
			<div
				className=' choice-in-deals-box'
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className='choice-in-deals-btn'>
					<GrClose size={'30px'} />
				</div>

				<div
					className='choice-in-deals-img'
					style={{ backgroundImage: `url(${props.infopizza.img})` }}
				></div>
				<div className='choice-in-deals-info'>
					<h3>{props.infopizza.name}</h3>
					<p>{props.infopizza.ingredients}</p>
				</div>
			</div>
		</div>
	);
};

export default ChoiceInDeals;
