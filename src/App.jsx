import { useState } from "react";
import { faker } from "@faker-js/faker";

import "../src/styles.css";

import NavBar from "./components/NavBar";
import FiltersBar from "./components/FiltersBar";
import ItemsWindow from "./components/ItemsWindow";
import { ProductContextProvider } from "./Contexts/ProductContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ProductContextProvider>
        <NavBar />
        <FiltersBar />
      </ProductContextProvider>
    </div>
  );
}

export default App;
