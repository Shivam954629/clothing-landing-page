import React from 'react';
import './PromoBanner.css';
import bannerImage from '../assets/banner1 2.png';

const PromoBanner = () => {
  return (
    <section className="promo-banner">
      <img src={bannerImage} alt="Promo Banner" className="banner-image" />
    </section>
  );
};

export default PromoBanner;

