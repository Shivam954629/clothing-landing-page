import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import OffersSection from './Components/OffersSection';
import TrendingTShirts from './Components/TrendingTshirts';
import FeaturedProduct from './Components/FeaturedProduct';
import PromoBanner from './Components/PromoBanner';
import Collections from './Components/Collections';
import Stylish from './Components/Stylish';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Features from './Components/Features';
import PromoCards from './Components/PromoCards';
import diamondIcon from "./assets/diamond 1.png";
import discountIcon from "./assets/discount 1.png";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <OffersSection/>
      <TrendingTShirts/>
      <FeaturedProduct/>
      <PromoBanner/>
      <Collections/>
      <Stylish/>
      <PromoCards/>
      <Features/>
      <Subscribe/>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
