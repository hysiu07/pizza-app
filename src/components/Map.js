import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
	// latlong.net - checkt position
	const position = [51.45102, 0.01266];

	return (
		<div className='map-container'>
			<h2 className='map-title'>You find us here!</h2>
			<div className='map-boxes'>
				<div className='map-box-text'>
					<p>115 Burnt Ash Rd, London</p>
					<p>Monday - Saturday 13.00 - 22.00</p>
					<p>554-433-222</p>
				</div>
				<div className='map-box-map'>
					<MapContainer
						className='leaflet-container'
						center={position}
						zoom={13}
						scrollWheelZoom={true}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker
							position={position}
							icon={new Icon({ iconUrl: markerIconPng })}
						>
							<Popup>
								We are here! <br /> Best Pizza of London!
							</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
		</div>
	);
};

export default Map;
