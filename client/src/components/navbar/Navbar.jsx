import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore, useAuthUser } from "_hooks";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { user } = useAuthUser();
  const { logOut } = useAuthStore();

  const onScroll = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleLogout = () => {
    logOut();
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

          {!user?.isSeller && (
            <Link className="link" to="/register">
              Become a Seller
            </Link>
          )}
          {!user && (
            <>
              <Link className="link" to="/login">
                Sign in
              </Link>
              <Link className="link" to="/register">
                Join
              </Link>
            </>
          )}
          {user && (
            <div onClick={() => setIsOpen((prev) => !prev)} className="user">
              <img src={user?.image || "/img/noavatar.jpg"} alt="profilePic" />
              <span>{user?.fullName}</span>
              {isOpen && (
                <div className="options">
                  {user?.isSeller && (
                    <>
                      <Link className="link" to="/products">
                        Products
                      </Link>
                      <Link className="link" to="/">
                        Add New Products
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/chats">
                    Chats
                  </Link>
                  <span onClick={handleLogout}>SignOut</span>
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
            <Link className="link">Lifestyle</Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
