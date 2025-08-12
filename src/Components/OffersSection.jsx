import React from 'react';
import './OffersSection.css';

import baggy from '../assets/image 2 (3).png';
import winter from '../assets/image 3 (1).png';
import womens from '../assets/image 4 (1).png';
import bestdeal from '../assets/image 5.png';
import trendy from '../assets/image 6.png';

const OffersSection = () => {
  return (
    <div className="offers-container">
      <div className="row row-large">
        <img src={baggy} alt="Baggy Offer" className="offer-img large" />
        <img src={winter} alt="Winter Offer" className="offer-img large" />
      </div>

      <div className="row row-small">
        <img src={womens} alt="Women's Wear" className="offer-img small" />
        <img src={bestdeal} alt="Best Deal" className="offer-img small" />
        <img src={trendy} alt="Trendy" className="offer-img small" />
      </div>
    </div>
  );
};

export default OffersSection;
