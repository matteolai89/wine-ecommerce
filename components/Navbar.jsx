import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <div className="navbar-container">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <Link href="/">
          <h1 className="logo">QUI PARLIAMO SOLO DI VINO</h1>
        </Link>

        <div className={isNavExpanded ? "navbar-link expanded" : "navbar-link"}>
          <Link href={"/about"}>
            <h2>ABOUT</h2>
          </Link>
          <Link href={"/contact"}>
            <h2>CONTACT</h2>
          </Link>
        </div>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
      </div>
    </>
  );
};

export default Navbar;
