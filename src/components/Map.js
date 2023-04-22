import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
	// latlong.net - checkt position
	const position = [51.45102, 0.01266];
	React.useEffect(() => {
		const L = require('leaflet');

		delete L.Icon.Default.prototype._getIconUrl;

		L.Icon.Default.mergeOptions({
			iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
			iconUrl: require('leaflet/dist/images/marker-icon.png'),
			shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
		});
	}, []);
	return (
		<div className='map-container'>
			<h2 className='map-title'>You find us here!</h2>
			<div className='map-boxes'>
				<div className='map-box-text'></div>
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
						<Marker position={position}>
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
