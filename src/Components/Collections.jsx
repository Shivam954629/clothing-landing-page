import React from 'react';
import './Collections.css';
import tshirt1 from '../assets/Group 50.png'; // Streetwear
import tshirt2 from '../assets/Group 51.png'; // Striped
import tshirt3 from '../assets/Group 52.png'; // Round Neck

const products = [
  {
    id: 1,
    image: tshirt1,
    title: 'Streetwear Collections',
    bgColor: '#00c3b7',
    border: false,
  },
  {
    id: 2,
    image: tshirt2,
    title: 'Striped T-Shirts',
    bgColor: '#8be0ff',
    border: false,
  },
  {
    id: 3,
    image: tshirt3,
    title: 'Round Neck T-Shirts',
    bgColor: '#f14d41',
    border: true,
  },
];

const Collections = () => {
  return (
    <div className="trending-cont">
      <div className="product-g">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product ${product.border ? 'with-border' : ''}`}
            style={{ backgroundColor: product.bgColor }}
          >
            <div className="image-wrap">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-title">{product.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;

