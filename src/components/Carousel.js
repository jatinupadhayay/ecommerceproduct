import React from 'react';

const Carousel = () => {
  // Placeholder data (you can replace with actual content)
  const imageUrl = 'path/to/your-image.jpg';
  
  const shopNowText = 'Shop Now';

  return (
    <div className="advertisement-banner">
      <img src={imageUrl} alt="Product" />
   
      <div className="shop-now-button">{shopNowText}</div>
    </div>
  );
};

export default Carousel;
