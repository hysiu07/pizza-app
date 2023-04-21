import React from 'react';
import './Rating.css';
import ReactStars from 'react-rating-stars-component';

const Rating = (props) => {
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};

	return (
		<div className='rating-component'>
			<h2>Our ratings</h2>
			<div className='rating-add-rate'>
				<h3>Add your rate!</h3>
				<ReactStars
					classNames={'rating-add-stars'}
					count={5}
					onChange={ratingChanged}
					size={24}
					activeColor='#ffd700'
				/>
				<textarea
					name='rate-add-distription'
					id='rate-add-distription'
				></textarea>
				<button className='rate-add-btn'>Add.</button>
			</div>

			<div className='rating-previous-ratings'>
				<div className='rating-previous-rate'>
					<div className='rating-previous-rate-img'></div>
					<div className='rating-previous-rate-text'></div>
				</div>
				<div className='rating-previous-rate'>
					<div className='rating-previous-rate-img'></div>
					<div className='rating-previous-rate-text'></div>
				</div>
				<div className='rating-previous-rate'>
					<div className='rating-previous-rate-img'></div>
					<div className='rating-previous-rate-text'></div>
				</div>
				
			</div>
		</div>
	);
};

export default Rating;
