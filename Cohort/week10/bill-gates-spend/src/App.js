import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const initialProducts = [
  { id: 1, name: "Big Mac", price: 2, quantity: 0 },
  { id: 2, name: "Amazon Echo", price: 99, quantity: 0 },
  { id: 3, name: "Airpods", price: 199, quantity: 0 },
  { id: 4, name: "Bike", price: 800, quantity: 0 },
  { id: 5, name: "Horse", price: 2500, quantity: 0 },
  { id: 6, name: "Skyscraper", price: 850000000, quantity: 0 },
  { id: 7, name: "Cruise Ship", price: 930000000, quantity: 0 },
  { id: 8, name: "NBA Team", price: 2120000000, quantity: 0 },
];

function App() {
  const [balance, setBalance] = useState(100000000000);
  const [products, setProducts] = useState(initialProducts);

  const handleBuy = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    const productPrice = products.find((product) => product.id === id).price;
    setBalance(balance - productPrice);
    setProducts(updatedProducts);
  };

  const handleSell = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    const productPrice = products.find((product) => product.id === id).price;
    setBalance(balance + productPrice);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <header className="header">Balance: ${balance.toLocaleString()}</header>
      <div className="container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            balance={balance}
            onBuy={handleBuy}
            onSell={handleSell}
          />
        ))}
      </div>
      <div className="receipt">
        <h2>Your Receipt</h2>
        <ul>
          {products
            .filter((product) => product.quantity > 0)
            .map((product) => (
              <li key={product.id}>
                {product.name} x{product.quantity} = $
                {(product.price * product.quantity).toLocaleString()}
              </li>
            ))}
        </ul>
        <h3>
          Total: $
          {products
            .reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )
            .toLocaleString()}
        </h3>
      </div>
    </div>
  );
}

export default App;
