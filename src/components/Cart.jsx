import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  const navigate = useNavigate(); // Ensures navigation works

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.images[0]} alt={item.title} />
              <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p>${item.price}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                <button className="remove-btn" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
        <p>Tax (12%): <span>${tax.toFixed(2)}</span></p>
        <p className="total">Total: <span>${total.toFixed(2)}</span></p>
      </div>

      <div className="cart-actions">
        <button className="clear-btn" onClick={clearCart}>Clear All</button>
        <button className="check-out-btn" onClick={() => navigate('/checkout')}>Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
