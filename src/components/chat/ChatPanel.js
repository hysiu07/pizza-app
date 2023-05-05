import React, { useState } from 'react';
import './ChatPanel.css';
import MovingText from 'react-moving-text';

const ChatPanel = (props) => {
	const [responsMario, setResponsMario] = useState(
		`Hi! I'm Mario. How can i help you?`
	);
	return (
		<div className={`chat-panel ` + (props.showChat && 'show-chat')}>
			<h3>Chat with Mario</h3>
			<div className='chat-panel-cook-box'>
				<div className='chat-panel-cook-img'></div>
				{props.showChat && (
					<MovingText
						type='fadeInFromRight'
						duration='2000ms'
						delay='0s'
						direction='normal'
						timing='ease'
						iteration='1'
						fillMode='none'
					>
						<p>{responsMario}</p>
					</MovingText>
				)}
			</div>

			<div className='chat-panel-questions'>
				<div
					className={
						'chat-panel-question ' +
						(responsMario === `115 Burnt Ash Rd, London` && 'red-border')
					}
					onClick={() => {
						setResponsMario(`115 Burnt Ash Rd, London`);
					}}
				>
					<p>What's street is your restaurant? </p>
				</div>
				<div
					className={
						'chat-panel-question ' +
						(responsMario ===
							`5 USD, but if your order is over 30 USD, delivery for free!` &&
							'red-border')
					}
					onClick={() => {
						setResponsMario(
							`5 USD, but if your order is over 30 USD, delivery for free!`
						);
					}}
				>
					<p>How much for delivery?</p>
				</div>
				<div
					className={
						'chat-panel-question ' +
						(responsMario ===
							`Monday - Saturday 
							13.00 - 22.00 ` && 'red-border')
					}
					onClick={() => {
						setResponsMario(
							`Monday - Saturday 
							13.00 - 22.00 `
						);
					}}
				>
					<p>What's opening time?</p>
				</div>
				<div
					className={
						'chat-panel-question ' +
						(responsMario === `Check 'Deal of day' section! ` && 'red-border')
					}
					onClick={() => {
						setResponsMario(`Check 'Deal of day' section! `);
					}}
				>
					<p>Have you got any offer today? </p>
				</div>
				<div
					className={
						'chat-panel-question ' +
						(responsMario === `Yes! only without crocodile :D` && 'red-border')
					}
					onClick={() => {
						setResponsMario(`Yes! only without crocodile :D`);
					}}
				>
					<p>Can I come with my pets?</p>
				</div>
				<div
					className={
						'chat-panel-question ' +
						(responsMario === `Our nummber is : 554-433-222 ` && 'red-border')
					}
					onClick={() => {
						setResponsMario(`Our nummber is : 554-433-222 `);
					}}
				>
					<p>What's number to restaurant?</p>
				</div>
			</div>
		</div>
	);
};
export default ChatPanel;
