// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header>
      <h1>GreenThumb</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
        <FaShoppingCart />{/* Cart icon */}
          <span className="cart-count">{cartItems.length}</span> {/* Cart item count */}
        </Link>
      </nav>
    </header>
  );
};

export default Header;