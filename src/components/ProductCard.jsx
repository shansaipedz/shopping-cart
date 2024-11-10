import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const fallbackImage = 'https://via.placeholder.com/100?text=No+Image';

  return (
    <div className="product-card">
      <img
        src={product.images?.[0] || fallbackImage}
        alt={product.title}
        style={{ width: '100px', height: '100px' }}
        onError={(e) => (e.target.src = fallbackImage)}  // Handle broken image URLs
      />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
