import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-name">{product.name}</div>
      <img
        className="product-image"
        src={product.image}
        alt={product.description}
      />
      <div className="product-price"> {product.price} </div>
      <div className="product-description"> {product.description} </div>
    </div>
  );
};

export default ProductCard;
