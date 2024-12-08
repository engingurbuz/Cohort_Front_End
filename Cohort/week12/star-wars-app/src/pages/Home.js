import React, { useState, useEffect } from "react";
import axios from "axios";
import ShipCard from "../components/ShipCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Home = () => {
  const [ships, setShips] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => setShips(response.data.results))
      .catch((error) => console.error(error));
  }, [page]);

  const filteredShips = ships.filter((ship) =>
    ship.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Star Wars Starships</h1>
      <SearchBar search={search} setSearch={setSearch} />
      {filteredShips.map((ship, index) => (
        <ShipCard key={index} ship={ship} />
      ))}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
