import React, {useState} from 'react';
import logo from '../pizza.svg';
import './Nav.css';
import { Link } from 'react-router-dom';
import { BsBasket2Fill } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';
import Basket from './Basket';

const Nav = (props) => {
	const [showBasket, setShowBasket] = useState(false);
	return (
		<div className='nav'>
			<div className='nav-container'>
				<div className='nav-contact'>
					<FaPhone clasname='nav-contact-icon-phone' size='30px' />
					<div className='nav-contact-info'>
						<p className='nav-contact-text'>Order now!</p>{' '}
						<p className='nav-contact-number'>554-433-222</p>
					</div>
				</div>
				<div>
					<ul className='nav-items'>
						<li className='nav-item'>
							<Link to='/menu' className='link '>
								Menu
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/' className='link '>
								<img color='white' src={logo} className='logo' alt='logo' />
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/your-pizza' className='link '>
								Your Pizza
							</Link>
						</li>
					</ul>
				</div>
				<div className='nav-basket' onClick={(e)=> {
					
					setShowBasket(!showBasket)
				}}>
					<BsBasket2Fill className='nav-basket-icon' size='35px' />
					<Basket showBasket={showBasket} setShowBasket={setShowBasket} />
				</div>
			</div>
		</div>
	);
};

export default Nav;
