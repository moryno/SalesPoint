import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const onScroll = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const currentUser = {
    name: "Miriam Muthee",
    isSeller: true,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <div className={isActive || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">salespoint</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>SalesPoint Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div onClick={() => setIsOpen((prev) => !prev)} className="user">
              <img src={currentUser?.image} alt="profilePic" />
              <span>{currentUser?.name}</span>
              {isOpen && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/products">
                        Products
                      </Link>
                      <Link className="link" to="/">
                        Add New Products
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/">
                    Orders
                  </Link>
                  <Link className="link" to="/">
                    Chats
                  </Link>
                  <span>SignOut</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(isActive || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
