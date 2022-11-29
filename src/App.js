import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';

function App() {

  const [showTrips, setShowTrips] = useState(true);

  return (
    <div className="App">
      {!showTrips && <button onClick={()=> {setShowTrips(true)}} id="show-button">show trips</button>}
      {showTrips && <button onClick={()=> {setShowTrips(false)}} id="hide-button">hide trips</button>}
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
