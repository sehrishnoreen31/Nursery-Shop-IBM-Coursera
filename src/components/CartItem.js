// src/components/CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <img src={item.image} alt={item.name} className="cart-item-image" />
        {item.name}
      </td>
      <td>${item.price}</td>
      <td>
        <button className='minus-one' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button className='add-one' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </td>
      <td>${item.price * item.quantity}</td>
      <td>
        <button className='delete' onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
      </td>
    </tr>
  );
};

export default CartItem;