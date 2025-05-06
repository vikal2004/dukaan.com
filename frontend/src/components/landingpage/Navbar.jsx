// import React from 'react';
// import { Link } from 'react-router-dom'; // If using React Router

// const Navbar = () => {
//   return (
//     <header className="w-full bg-white shadow-sm sticky top-0 z-50">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-teal-600 cursor-pointer">
//           Dukaan
//         </h1>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex gap-6 text-gray-700 text-base font-medium">
//           <li className="hover:text-teal-600 cursor-pointer">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="hover:text-teal-600 cursor-pointer">
//             <Link to="/stores">Explore Stores</Link>
//           </li>
//           <li className="hover:text-teal-600 cursor-pointer">
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>

//         {/* CTA Button */}
//         <div>
//           <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm md:text-base transition-all">
//             Start Free
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Navbar() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
   const {isAuthenticated, logout}=useContext(AuthContext)
    console.log(isAuthenticated)
  // Pages where we want to hide the navbar
  const hiddenRoutes = ["/order-confirmation"];

  // Update cart count from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, [location.pathname]); // refresh on route change

  if (hiddenRoutes.includes(location.pathname)) return null;

  return (
    <nav className="bg-white shadow-md px-6 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600">
          🛍️ Storefront
        </Link>
         
         {
          isAuthenticated ? (
            <ul className="flex gap-6 items-center">
            <li>
              <Link
                to="/"
                className={`text-gray-700 hover:text-green-600 transition ${
                  location.pathname === "/" ? "font-semibold underline" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/stores"
                className={`text-gray-700 hover:text-green-600 transition ${
                  location.pathname === "/stores" ? "font-semibold underline" : ""
                }`}
              >
                Explore Stores
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={`relative text-gray-700 hover:text-green-600 transition ${
                  location.pathname === "/cart" ? "font-semibold underline" : ""
                }`}
              >
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
               className=" px-4 py-3 bg-red-600 text-white 
               rounded-2xl shadow-md hover:bg-red-700 transition duration-300"
              >
                 logout
              </button>
            </li>
          </ul>
          ): (
            <ul className="flex gap-6 items-center">
          <li>
            <Link
              to="/"
              className={`text-gray-700 hover:text-green-600 transition ${
                location.pathname === "/" ? "font-semibold underline" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/stores"
              className={`text-gray-700 hover:text-green-600 transition ${
                location.pathname === "/stores" ? "font-semibold underline" : ""
              }`}
            >
              Explore Stores
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`relative text-gray-700 hover:text-green-600 transition ${
                location.pathname === "/cart" ? "font-semibold underline" : ""
              }`}
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
             className=" px-4 py-3 bg-teal-600 text-white 
             rounded-2xl shadow-md hover:bg-teal-700 transition duration-300"
            >
              Signup
            </Link>
          </li>
        </ul>
          )
         }
       

          </div>
    </nav>
  );
}
