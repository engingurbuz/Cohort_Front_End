import React from "react";
import { useNavigate } from "react-router-dom";

const ShipCard = ({ ship }) => {
  const navigate = useNavigate();
  const id = ship.url.split("/").filter(Boolean).pop();

  return (
    <div className="ship-card" onClick={() => navigate(`/ship/${id}`)}>
      <h3>{ship.name}</h3>
      <p>Model: {ship.model}</p>
    </div>
  );
};

export default ShipCard;
