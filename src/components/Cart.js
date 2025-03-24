// src/components/Cart.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import AlertModal from './AlertModal'; // Import the AlertModal

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [showAlert, setShowAlert] = useState(false); // State to control the modal

  const handleCheckout = () => {
    setShowAlert(true); // Show the modal
  };

  const closeAlert = () => {
    setShowAlert(false); // Hide the modal
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Delete Item</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p className='total-items'>Total Items: {cartItems.length}</p>
            <p className='total-cost'>Total Cost: ${totalCost}</p>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            <Link to="/products" className="continue-shopping">Continue Shopping</Link>
          </div>
        </>
      )}

      {/* Render the AlertModal */}
      {showAlert && (
        <AlertModal
          message="Coming Soon!"
          onClose={closeAlert}
        />
      )}
    </div>
  );
};

export default Cart;