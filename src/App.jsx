import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

const bikeRentalUrl = 'http://api.citybik.es/v2/networks';

function App() {
	const [bikeRentals, setBikeRentals] = useState([]);

	useEffect(() => {
		(async () => {
			const _bikeRentals = (await axios.get(bikeRentalUrl)).data.networks;
			setBikeRentals(_bikeRentals);
		})();
	}, []);

	return (
		<div className="App">
			<h1>Bike Rental App</h1>
			<p>There are {bikeRentals.length} bike rentals.</p>
			<div className="bikeRentals">
				{bikeRentals.map((bikeRental, i) => {
          return <div className="bikeRental" key={i}>{bikeRental.name} {bikeRental.location.city}</div>;
				})}
			</div>
		</div>
	);
}

export default App;
