import React from 'react';
import './Rating.css';
import ReactStars from 'react-rating-stars-component';
import Slider from 'react-slick';

const Rating = (props) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};

	return (
		<div
			className='rating-component'
			style={{ backgroundImage: `url('/img/pizza-rating.jpg')` }}
		>
			<h2 className='rating-component-title'>Our ratings</h2>

			<ReactStars
				classNames={'rating-add-stars'}
				count={5}
				value={4}
				size={40}
				activeColor='#ffd700'
			/>

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
					className='rate-add-distription'
					name='rate-add-distription'
					id='rate-add-distription'
				></textarea>
				<button className='rate-add-btn'>Add.</button>
			</div>
			<div className='rating-carousel'>
				<Slider {...settings}>
					<div className=''>
						<div className='rating-previous-rate'>
							<div className='rating-previous-rate-img' style={{backgroundImage: `url(/img/adult-2.jpg)`}}></div>
							<div className='rating-previous-rate-text'>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Earum, assumenda!
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className='rating-previous-rate'>
							<div className='rating-previous-rate-img'></div>
							<div className='rating-previous-rate-text'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
									recusandae.
								</p>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default Rating;
