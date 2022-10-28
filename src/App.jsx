import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const [bikeRentals, setBikeRentals] = useState([]);

  return (
    <div className="App">
    <h1>Bike Rental App</h1>
      <p>There are {bikeRentals.length} bike rentals.</p>
    </div>
  )
}

export default App
