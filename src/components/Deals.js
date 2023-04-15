import React, {useState} from 'react';
import Slider from 'react-slick';
import ChoiceInDeals from './ChoiceInDeals';
import './Deals.css';

const Deals = (props) => {
	const [choiceInDeals , setChoiceInDeals] = useState(false)
	const [infoPizza, setInfoPizza] = useState()
	const settings = {
		
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 6000,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		pauseOnHover: true,
	};
	return (
		<div className='deals'>
			{choiceInDeals  && <ChoiceInDeals closeChoiceInDeals={setChoiceInDeals} infopizza={infoPizza}/>}
			
			<h2 className='deals-title'>Deal of day!</h2>
			<p className='deals-text'>Dzisiejsze promocje które mamy w ofercie!</p>
			<div className='deal-cards'>
				<Slider {...settings}>
					{props.pizzas.map((pizza, index) => {
						if (pizza.discount) {
							return (
								<div className='slider-box' key={index} onClick={() =>{
									setChoiceInDeals(!choiceInDeals)
									setInfoPizza(pizza)
								}}>
									<img src={pizza.img} alt='' className='slider-img' />
									<h3 className='slider-title'>{pizza.name}</h3>
									<p>{pizza.ingredients}</p>
								
								</div>
							);
						}
						console.log(pizza);
			
					})}
				</Slider>
				
			</div>
	
		</div>
	);
};

export default Deals;
