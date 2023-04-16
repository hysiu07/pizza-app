import React, {useState} from 'react';
import './MainView.css';
import Header from '../components/Header';
import Deals from '../components/Deals';
import ChatPanel from '../components/chat/ChatPanel';
import { BsFillChatRightDotsFill } from 'react-icons/bs';

import MakePizzaInfo from '../components/MakePizzaInfo';

const MainView = (props) => {

	const [showChat, setShowPanel] = useState(false)
console.log(showChat);

	return (
		<div className='main-view'>
			<div className='chat-btn'>
				<BsFillChatRightDotsFill onClick={()=>{
					setShowPanel(!showChat)
				}}/>
			</div>
			<ChatPanel showChat={showChat}/> 
			
			<Header />
			<Deals pizzas={props.pizzas} />
			<MakePizzaInfo />
		</div>
	);
};

export default MainView;
