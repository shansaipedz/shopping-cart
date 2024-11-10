import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, resetCart }) => {
  const navigate = useNavigate();

  const handlePay = () => {
    alert('Payment Successful!');
    resetCart(); // Clear the cart
    navigate('/'); // Redirect back to the main page
  };

  return (
    <div className="checkout-container">
      <div className="checkout">
        <h2>Checkout</h2>
        <ul className="checkout-list">
          {cartItems.map((item) => (
            <li key={item.id} className="checkout-item">
              {item.title} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p className="checkout-total">
          <strong>Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</strong>
        </p>
        <div className="checkout-buttons">
          <button onClick={() => navigate('/')} className="cancel-btn">Cancel</button>
          <button onClick={handlePay} className="pay-btn">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
