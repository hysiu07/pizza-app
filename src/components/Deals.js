import React from 'react';
import Slider from 'react-slick';
import './Deals.css';
import Img from '../img/americana.jpg';
const Deals = (props) => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 6000,
		autoplaySpeed: 3000,
		cssEase: 'linear',
        pauseOnHover: true
	};
	return (
		<div className='deals'>
			<h2 className='deals-title'>Deal of day!</h2>
			<p className='deals-text'>Dzisiejsze promocje które mamy w ofercie!</p>
			<div className='deal-cards'>
				<Slider {...settings}>
					<div className='slider-box'>
						{/* <img src={Img} alt=''className='slider-img' /> */}
                        <div className='slider-imgn' style={}></div>
						<h3 className='slider-title'>{props.pizzas[0].name}</h3>
					</div>
					<div className='slider-box'>
						<img src={Img} alt=''className='slider-img' />
						<h3 className='slider-title'>{props.pizzas[0].name}</h3>
					</div>
					<div className='slider-box'>
						<img src={Img} alt=''className='slider-img' />
						<h3 className='slider-title'>{props.pizzas[0].name}</h3>
					</div>
					<div className='slider-box'>
						<img src={Img} alt=''className='slider-img' />
						<h3 className='slider-title'>{props.pizzas[0].name}</h3>
					</div>
					<div className='slider-box'>
						<img src={Img} alt=''className='slider-img' />
						<h3 className='slider-title'>{props.pizzas[0].name}</h3>
					</div>
                    {/* {props.pizzas.forEach(pizza => {
                        if(pizza.discount){
                            return(
                                <div className='slider-box'>
                             
                                <h3 className='slider-title'>{pizza.name}</h3>
                                </div> )
                        }
                        
                    })} */}
					
					
				</Slider>
			</div>
			{console.log(props.pizzas)}
		</div>
	);
};

export default Deals;
