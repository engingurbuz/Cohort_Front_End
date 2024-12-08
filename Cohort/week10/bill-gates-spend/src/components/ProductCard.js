import React from "react";

const ProductCard = ({ product, balance, onBuy, onSell }) => {
  const isBuyDisabled = balance < product.price;
  const isSellDisabled = product.quantity === 0;

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price.toLocaleString()}</p>
      <p>Quantity: {product.quantity}</p>
      <div>
        <button
          className="sell"
          onClick={() => onSell(product.id)}
          disabled={isSellDisabled}
        >
          Sell
        </button>
        <button
          className="buy"
          onClick={() => onBuy(product.id)}
          disabled={isBuyDisabled}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
