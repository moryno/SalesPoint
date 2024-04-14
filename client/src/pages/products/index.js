import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Product.scss";
import ProductCard from "../../components/productcard/ProductCard";
import { useGetProducts } from "_hooks";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { search } = useLocation();
  const [sortType, setSortType] = useState("createdAt");
  const minRef = useRef(null);
  const maxRef = useRef(null);
  const { isLoading, error, data, refetch } = useGetProducts(
    search,
    minRef.current?.value,
    maxRef.current?.value,
    sortType
  );
  const onTypeChange = (type) => {
    setSortType(type);
    setIsOpen(false);
  };

  const onApply = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    refetch();
  }, [refetch, sortType]);

  return (
    <div className="products">
      <div className="container">
        <span className="breadcrumbs">SALESPOINT {">"} GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundary of art and technology with SalesPoint AI Artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={onApply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">
              {sortType === "price" ? "Best Selling" : "Newest"}
            </span>
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              src="./img/down.png"
              alt="downarrow"
            />
            {isOpen && (
              <div className="rightMenu">
                {sortType === "price" ? (
                  <span onClick={() => onTypeChange("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => onTypeChange("price")}>
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading..."
            : error
            ? "Something went wrong"
            : data?.data?.map((product) => (
                <ProductCard key={product._id} item={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
