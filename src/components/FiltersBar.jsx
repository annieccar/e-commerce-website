import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { FaEuroSign } from "react-icons/fa";
import ItemsWindow from "./ItemsWindow";

const FiltersBar = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(1000);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (choice) => {
    setSort(choice);
  };

  const handleLowPrice = (e) => {
    setLowPrice(e.target.value);
  };

  const handleHighPrice = (e) => {
    if (e.target.value === "") setHighPrice(1000);
    else setHighPrice(e.target.value);
  };

  return (
    <div className="window">
      <div className="organisation">
        <div className="search-box">
          <input
            className="input"
            placeholder="search"
            onChange={(e) => handleSearch(e)}
          />
          <SlMagnifier className="magnifier" />
        </div>
        <div className="sort-box">
          <div className="sort-title">Sort by:</div>
          <div
            className="sort-option"
            onClick={() => handleSort("priceLowHigh")}
          >
            Price - Low to High
          </div>
          <div
            className="sort-option"
            onClick={() => handleSort("priceHighLow")}
          >
            Price - High to Low
          </div>
          <div
            className="sort-option"
            onClick={() => handleSort("alphabetical")}
          >
            Alphabetical - A to Z
          </div>
        </div>
        <div className="filter-box">
          <div className="filter-title"> Filter by price: </div>
          <div className="filters">
            <div className="price-box">
              <input
                className="price-input"
                onChange={(e) => handleLowPrice(e)}
              />
              <FaEuroSign className="euro" />
            </div>
            <div> - </div>
            <div className="price-box">
              <input
                className="price-input"
                onChange={(e) => handleHighPrice(e)}
              />
              <FaEuroSign className="euro" />
            </div>
          </div>
        </div>
      </div>
      <ItemsWindow
        search={search}
        sort={sort}
        lowPrice={lowPrice}
        highPrice={highPrice}
      />
    </div>
  );
};

export default FiltersBar;
