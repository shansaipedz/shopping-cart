import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; // Import Checkout component
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
import './index.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  const updateQuantity = (product, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const resetCart = () => setCartItems([]); // Reset the cart after checkout

  const clearCart = () => setCartItems([]); // Clears the cart

  return (
    <div className="app-container">
      <Routes>
        {/* Route for main product and cart view */}
        <Route
          path="/"
          element={
            <>
              <ProductList addToCart={addToCart} />
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                clearCart={clearCart} // Pass the clearCart function to the Cart component
              />
            </>
          }
        />
        {/* Route for checkout page */}
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} resetCart={resetCart} />}
        />
      </Routes>
    </div>
  );
};

export default App;
