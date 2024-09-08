import React from 'react';

const ProductShowcase = () => {
  return (
    <section className="product-showcase">
      <h2>Explore Our Products</h2>
      <div className="product-grid">
        {/* Product cards */}
        <div className="product-card">
          <img src="showcase1.jpg" alt="Product 1" />
          <h3>Product Name</h3>
          <p>Price: $50</p>
        </div>
        <div className="product-card">
          <img src="showcase2.jpg" alt="Product 2" />
          <h3>Product Name</h3>
          <p>Price: $70</p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
