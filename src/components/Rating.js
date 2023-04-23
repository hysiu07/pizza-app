import React, { useState } from 'react';
import './Rating.css';
import ReactStars from 'react-rating-stars-component';
import Slider from 'react-slick';
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import { layerGroup } from 'leaflet';

const Rating = (props) => {
	const [addRatePanel, setAddRatePanel] = useState(false);
	const [ratings, setRatings] = useState([
		{
			name: 'Eliza',
			discription: 'Best restaurant in all of London!',
			img: `url('/img/adult-1.jpg')`,
			ratingValue: 4,
		},
		{
			name: 'DuckFace007',
			discription: 'Amazing place!',
			img: `url('/img/adult-2.jpg')`,
			ratingValue: 5,
		},
		{
			name: 'Daniel',
			discription: 'Very well meals!',
			img: `url('/img/adult-3.jpg')`,
			ratingValue: 5,
		},
	]);

	const [rateInfo, setRateInfo] = useState(
		{
			name: '',
			discription: '',
			img: `url('/img/user-1.jpg')`,
			ratingValue: 0,
		},
	
	);
	const handleTakeInfo = (e) => {
		const target = e.target;
		const name = target.name;

		setRateInfo({
			...rateInfo,
			[name]: target.value,
		});
	};
	const ratingChanged = (newRating) => {
		setRateInfo({
			...rateInfo,
			ratingValue: newRating,
		});
	};
	const show = () => {
		ratings.push(rateInfo);
		console.log(ratings);
		setAddRatePanel(false);
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	// const addRate = () => {
	// 	// const newRate = {
	// 	// 	name:
	// 	// }
	// };

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
			<button
				className='add-rate-btn'
				onClick={() => {
					setAddRatePanel(true);
				}}
			>
				Add your rate!
			</button>
			
				<div className={'rating-add-rate ' + (addRatePanel && 'show-add-rate-panel')}>
					<h3>Add your rate!</h3>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Name'
						onChange={handleTakeInfo}
					/>
					<textarea
						onChange={handleTakeInfo}
						className='rate-add-distription'
						name='discription'
						placeholder='Your discription'
					></textarea>
					<ReactStars
						classNames={'rating-add-stars'}
						count={5}
						onChange={ratingChanged}
						size={24}
						activeColor='#ffd700'
					/>
					<div className='buttons'>
						{' '}
						<button
							onClick={() => {
								setAddRatePanel(false);
							}}
							className='rate-add-btn-close'
						>
							Close
						</button>
						<button className='rate-add-btn' onClick={show}>
							Add
						</button>
					</div>
				</div>
			
			<div className='rating-carousel'>
				<Slider {...settings}>
					{ratings.map((el) => {
						return (
							<div className='rating-carousel-box'>
								<div className='rating-previous-rate'>
									<h4>{el.name}</h4>
									<div
										className='rating-previous-rate-img'
										style={{ backgroundImage: el.img }}
									></div>
									<div className='rating-previous-rate-text'>
										<ImQuotesLeft className='quote-left' />
										<span>
											{el.discription}
											<ImQuotesRight className='quote-right' />
										</span>
									</div>
									<ReactStars
										classNames={'rating-add-stars-in-rate'}
										value={el.ratingValue}
										count={5}
										size={24}
										activeColor='#ffd700'
									/>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Rating;
