import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "antd";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore, useAuthUser } from "_hooks";
import {
  CART_ROUTE,
  CHATS_API,
  HOME_ROUTE,
  LOGIN_ROUTE,
  MY_PRODUCT_ROUTE,
  ORDER_ROUTE,
  PRODUCT_ROUTE,
  REGISTER_ROUTE,
} from "_constants";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { user } = useAuthUser();
  const { logOut } = useAuthStore();
  const quantity = useSelector((state) => state?.cart?.cartQty);

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
    <div
      className={
        isActive || pathname !== HOME_ROUTE ? "navbar active" : "navbar"
      }
    >
      <div className="container">
        <div className="logo">
          <Link className="link" to={HOME_ROUTE}>
            <span className="text">salespoint</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>SalesPoint Business</span>
          <span>Explore</span>
          {!user?.isSeller && (
            <Link className="link" to={REGISTER_ROUTE}>
              Become a Seller
            </Link>
          )}
          {!user && (
            <>
              <Link className="link" to={LOGIN_ROUTE}>
                Sign in
              </Link>
              <Link className="link" to={REGISTER_ROUTE}>
                Join
              </Link>
            </>
          )}
          <Link className="link" to={CART_ROUTE}>
            <Badge count={quantity} color="primary">
              <MdOutlineShoppingCart size={20} />
            </Badge>
          </Link>
          {user && (
            <div onClick={() => setIsOpen((prev) => !prev)} className="user">
              <img src={user?.image || "/img/noavatar.jpg"} alt="profilePic" />
              <span>{user?.fullName}</span>
              {isOpen && (
                <div className="options">
                  {user?.isSeller && (
                    <>
                      <Link className="link" to={MY_PRODUCT_ROUTE}>
                        Products
                      </Link>
                      <Link className="link" to={`${PRODUCT_ROUTE}/new`}>
                        Add New Products
                      </Link>
                    </>
                  )}
                  <Link className="link" to={ORDER_ROUTE}>
                    Orders
                  </Link>
                  <Link className="link" to={CHATS_API}>
                    Chats
                  </Link>
                  <span onClick={handleLogout}>SignOut</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(isActive || pathname !== HOME_ROUTE) && (
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
