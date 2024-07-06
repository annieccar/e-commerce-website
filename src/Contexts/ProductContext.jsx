import { useState, createContext, useContext } from "react";

import products from "../assets/products.json";

const ProductContext = createContext();

const useProductContext = () => useContext(ProductContext);

const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProductContext, ProductContextProvider };
