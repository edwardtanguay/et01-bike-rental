import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import { Map, Marker } from 'pigeon-maps';

const bikeRentalUrl = 'http://api.citybik.es/v2/networks';

function App() {
	const [bikeRentals, setBikeRentals] = useState([]);
	const [filteredBikeRentals, setFilteredBikeRentals] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		(async () => {
			const _bikeRentals = (await axios.get(bikeRentalUrl)).data.networks;
			console.log(_bikeRentals);
			setBikeRentals(_bikeRentals);
			setFilteredBikeRentals(_bikeRentals);
		})();
	}, []);

  const handleSearch = (e) => {
    const _searchText = e.target.value;

    setSearchText(_searchText);
  }

	return (
		<div className="App">
			<h1>Bike Rental App</h1>
			<p>There are {filteredBikeRentals.length} bike rentals.</p>
			<h2>pigeon maps</h2>
      <input value={searchText} onChange={(e) => handleSearch(e)} /> {searchText}
			<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
				{filteredBikeRentals.map((bikeRental, i) => {
					return (
						<Marker
							key={i}
							width={50}
							anchor={[
								bikeRental.location.latitude,
								bikeRental.location.longitude
							]}
						/>
					);
				})}
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
