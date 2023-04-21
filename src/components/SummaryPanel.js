import React, { useContext, useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import './SummaryPanel.css';
import { BasketContext } from '../context/BasketContex';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
const SummaryPanel = (props) => {
	const { basketValue } = useContext(BasketContext);
	const [orderMessage, setOrderMessage] = useState('');
	const [showFormDelivery, setShowFormDelivery] = useState(false);

	const [state, handleSubmit] = useForm('xyyaleqw', {
		data: { essa: 'essa' },
	});
	const [paidFor, setPaidFor] = useState(false);

	useEffect(() => {
		setOrderMessage(
			basketValue.map((el, index) => {
				// return `Order nummber ${index + 1}. Name: ${el.name}.Size: ${
				// 	el.size
				// }. Price: ${el.cost}. Ingredients: ${el.ingredients}. `;
				return {
					order: el.name,
					size: el.size,
				};
			})
		);
	}, [basketValue]);

	// xyyaleqw

	return (
		<div
			className={
				'summary-panel-bcg ' + (props.showSummaryPanel && 'show-summary-panel')
			}
			onClick={(e) => {
				e.stopPropagation();
				props.setShowSummaryPanel(!props.showSummaryPanel);
			}}
		>
			<div
				className={
					`summary-panel ` + (showFormDelivery && 'move-summary-panel')
				}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<h3 className='summary-pannel-title'>Yours order summary</h3>

				<div className='summary-panel-container-products'>
					{basketValue.map((el, index) => {
						return (
							<div className='summary-panel-product' key={index}>
								<div className='summary-panel-product-number'>{index + 1}.</div>
								<div className='summary-panel-product-info'>
									<p className='summary-panel-product-name'> {el.name}</p>
									<p className='summary-panel-product-price'>{el.cost} USD</p>
									<p className='summary-panel-product-size'>
										Size: {el.size.toUpperCase()}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<span className='summary-panel-count'>
					Summary: {props.priceInBasket} USD
				</span>
				<button
					className='summary-panel-btn-next'
					onClick={() => {
						setShowFormDelivery(true);
					}}
				>
					&#8594;
				</button>
			</div>
			<div
				className={
					'summery-panel-delivery-container ' +
					(showFormDelivery && 'move-delivery-panel')
				}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className='summary-panel-delivery'>
					<h3 className='summary-panel-delivery-title'>Address</h3>
					<form onSubmit={handleSubmit}>
						<input type='text' name='Name' id='name' placeholder='Name' />
						<input
							type='text'
							name='LastName'
							id='lastName'
							placeholder='Last name'
						/>
						<input
							type='number'
							name='Number-phone'
							id='number-phone'
							placeholder='Number Phone'
						/>
						<input
							type='text'
							name='Address'
							id='address'
							placeholder='Address'
						/>
						<textarea
							name='Message'
							id='message'
							placeholder='Message '
						></textarea>
						<button
							className='send'
							type='submit'
							onClick={() => {}}
							disabled={state.submitting}
						>
							wyslij
						</button>
					</form>
					{/* {state.submitting && <div>Thank you for signing up!</div>} */}
					<PayPalScriptProvider
						options={{
							'client-id':
								'AVBcBnkBgM-VXZg2xT6SKoGXaq1XUXS-t4j0tO4e-SmacihGBW_sP0x77x1EYRlB84COJ5ncQaUOBbRy',
						}}
					>
						<PayPalButtons
							style={{
								layout: 'horizontal',
								color: 'black',
								shape: 'pill',
								layout: 'vertical',
							}}
							createOrder={(data, actions) => {
								return actions.order.create({
									purchase_units: [
										{
											amount: {
												value: props.priceInBasket,
											},
										},
									],
								});
							}}
							onApprove={async (data, actions) => {
								// const order = await actions.order.capture();
								alert('dddd');
								console.log('zaplacono');
								setPaidFor(!paidFor);
								handleSubmit();
							}}
						/>
					</PayPalScriptProvider>
					<button
						className='summary-panel-delivery-previous-btn'
						onClick={() => {
							setShowFormDelivery(false);
						}}
					>
						&#x2190;
					</button>
				</div>
			</div>
		</div>
	);
};
export default SummaryPanel;
