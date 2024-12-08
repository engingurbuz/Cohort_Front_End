import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ShipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}/`)
      .then((response) => setShip(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!ship) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{ship.name}</h1>
      <p>Model: {ship.model}</p>
      <p>Manufacturer: {ship.manufacturer}</p>
      <p>Cost in Credits: {ship.cost_in_credits}</p>
      <p>Length: {ship.length}</p>
      <p>Max Atmosphering Speed: {ship.max_atmosphering_speed}</p>
      <p>Crew: {ship.crew}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ShipDetails;
