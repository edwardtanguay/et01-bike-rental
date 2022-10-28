import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import { Map, Marker } from 'pigeon-maps';

const bikeRentalUrl = 'http://api.citybik.es/v2/networks';

function App() {
	const [bikeRentals, setBikeRentals] = useState([]);

	useEffect(() => {
		(async () => {
			const _bikeRentals = (await axios.get(bikeRentalUrl)).data.networks;
      console.log(_bikeRentals)
			setBikeRentals(_bikeRentals);
		})();
	}, []);

	return (
		<div className="App">
			<h1>Bike Rental App</h1>
			<p>There are {bikeRentals.length} bike rentals.</p>
			<h2>pigeon maps</h2>
			<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
				<Marker width={50} anchor={[50.879, 4.6997]} />
			</Map>
			<h2>all bikes</h2>
			<div className="bikeRentals">
				{bikeRentals.map((bikeRental, i) => {
					return (
						<div className="bikeRental" key={i}>
							{bikeRental.name} {bikeRental.location.city}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
