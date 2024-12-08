import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShipDetails from "./pages/ShipDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ship/:id" element={<ShipDetails />} />
    </Routes>
  );
}

export default App;
