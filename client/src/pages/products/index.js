import React, { useState } from "react";
import "./Product.scss";
import { gigs } from "../../data";
import ProductCard from "../../components/productcard/ProductCard";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState("sales");
  const onTypeChange = (type) => {
    setSortType(type);
    setIsOpen(false);
  };

  return (
    <div className="products">
      <div className="container">
        <span className="breadcrumbs">SALESPOINT > GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundary of art and technology with SalesPoint AI Artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">
              {sortType === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              src="./img/down.png"
              alt="downarrow"
            />
            {isOpen && (
              <div className="rightMenu">
                {sortType === "sales" ? (
                  <span onClick={() => onTypeChange("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => onTypeChange("sales")}>
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs?.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
