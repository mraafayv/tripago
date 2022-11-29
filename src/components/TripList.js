import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

//Styles
import "./TripList.css";

export default function TripList() {
  // const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips32");

  const { data: trips, isPending, error } = useFetch(url);
  return (
    <div>
      <h2 id="heading">Trip List</h2>
      {isPending && <div>Loading Trips...</div>}
      {error && <div>{error}</div>}
      <div>
        {trips && trips.map((trip) => {
          return (
            <div className="trip-card" key={trip.id}>
              <h2>{trip.title}</h2>
              <h4 className="price">{trip.price}</h4>
              <p className="loc">{trip.loc}</p>
            </div>
          );
        })}
        <div className="filters">
          <button
            onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
          >
            European Trips
          </button>
          <button
            onClick={() => setUrl("http://localhost:3000/trips?loc=america")}
          >
            US Trips{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
