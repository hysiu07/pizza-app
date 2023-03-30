import React from 'react';
import Img from '../img/header1.jpg';
import Img2 from '../img/header2.jpg';
import Img3 from '../img/header3.jpg';
import './Header.css';
import MovingText from 'react-moving-text';

import Carousel from 'react-bootstrap/Carousel';

const Header = (props) => {
	return (
		<div className='header'>
			<Carousel indicators={false}>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100 header-img'
						src={Img2}
						alt='First slide'
					/>
					<Carousel.Caption>
						<MovingText
							type='fadeInFromRight'
							duration='1100ms'
							delay='0s'
							direction='normal'
							timing='ease'
							iteration='1'
							fillMode='none'
						>
							<h3 className='title-slide-one '>Kup 3</h3>
						</MovingText>
						<MovingText
							type='fadeInFromLeft'
							duration='1000ms'
							delay='0s'
							direction='normal'
							timing='ease'
							iteration='1'
							fillMode='none'
						>
							<h3 className='title-slide-one '>
								Zapłać za
								<MovingText
									type='shakeMix'
									duration='1000ms'
									delay='0s'
									direction='normal'
									timing='ease'
									iteration='infinite'
									fillMode='none'
								>
									<span>2!</span>
								</MovingText>
							</h3>
						</MovingText>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100 header-img'
						src={Img3}
						alt='Second slide'
					/>
					<Carousel.Caption>
						<MovingText
							type='slideInFromTop'
							duration='2000ms'
							delay='0s'
							direction='normal'
							timing='ease'
							iteration='1'
							fillMode='none'
						>
							<h3 className='title-slide-two'>Stwórz własną pizze!</h3>
						</MovingText>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100 header-img'
						src={Img}
						alt='Third slide'
					/>
					<Carousel.Caption>
						<MovingText
							type='fadeInFromLeft'
							duration='1500ms'
							delay='0s'
							direction='normal'
							timing='ease'
							iteration='1'
							fillMode='none'
						>
							<h3 className='title-slide-three'>Najszybsza dostawa!</h3>
						</MovingText>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Header;
