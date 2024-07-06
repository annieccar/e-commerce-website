import React from "react";
import { useProductContext } from "../Contexts/ProductContext";
import ProductCard from "./ProductCard";

const ItemsWindow = ({ search, sort, lowPrice, highPrice }) => {
  const { products } = useProductContext();

  const filteredProducts = products
    .filter((elem) => elem.name.toLowerCase().includes(search.toLowerCase()))
    .filter(
      (elem) =>
        lowPrice <= parseFloat(elem.price) &&
        parseFloat(elem.price) <= highPrice
    );

  const sortProducts = (filtered, sortCriteria) => {
    switch (sortCriteria) {
      case "priceLowHigh":
        return filtered.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      case "priceHighLow":
        return filtered.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      case "alphabetical":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));

      default:
        return filtered;
    }
  };

  const productsSorted = sortProducts(filteredProducts, sort);

  return (
    <div className="items-window">
      {productsSorted.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ItemsWindow;
