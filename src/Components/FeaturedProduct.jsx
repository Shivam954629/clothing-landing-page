// src/components/TrendingTShirts.jsx
import React from 'react';
import './FeaturedProduct.css';
import tshirt1 from '../assets/Rectangle 3.png';
import tshirt2 from '../assets/Rectangle 4.png';
import tshirt3 from '../assets/Rectangle 5.png';
import tshirt4 from '../assets/Rectangle 6.png';
import { FaShoppingCart, FaHeart, FaShareAlt } from 'react-icons/fa';

const products = [
  { id: 1, image: tshirt1 },
  { id: 2, image: tshirt2 },
  { id: 3, image: tshirt3 },
  { id: 4, image: tshirt4 },
];

const FeaturedProduct = () => {
  return (
    <div className="trending-container">
      <div className="heading-with-lines">
      <div className="line"></div>
      <h2 className="heading">Featured Products</h2>
      <div className="line"></div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper">
              <img src={product.image} alt="T-shirt" />
              <div className="icons">
              <button><FaShoppingCart /></button>
              <button><FaHeart /></button>
              <button><FaShareAlt /></button>
              </div>
              
            </div>
            <div className="details">
              <p>Men Henley Neck<br />Full Sleeve Red Wine</p>
              <p className="price">₹399 <span className="old-price">₹1299</span></p>
              <div className="sizes">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button key={size}>{size}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all">
        <button>VIEW ALL</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
