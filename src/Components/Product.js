import React, { Component } from "react";
import "../Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price"></p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
