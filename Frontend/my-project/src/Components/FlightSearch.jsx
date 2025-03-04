import { useState } from "react";
import axios from "axios";

const FlightSearch = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState(null);
  const [error, setError] = useState("");

  const fetchFlights = async () => {
    setError("");
    setFlights(null);
    if (!source || !destination || !date) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/api/flights?source=${source}&destination=${destination}&date=${date}`
      );
      setFlights(response.data);
    } catch (err) {
        console.log(err);
      setError("No flights found or API error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Flight Price Checker</h2>
      <input
        type="text"
        placeholder="Source City"
        className="w-full p-2 mb-2 border rounded"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination City"
        className="w-full p-2 mb-2 border rounded"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        className="w-full p-2 mb-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={fetchFlights} className="w-full bg-blue-500 text-white p-2 rounded mt-2">
        Search Flights
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {flights && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h3 className="font-bold">Flight Prices:</h3>
          {Object.entries(flights).map(([airline, price]) => (
            <p key={airline} className="text-gray-700">
              {airline}: <span className="font-bold">{price}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
