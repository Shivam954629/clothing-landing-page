import React from "react";
import "./PromoCards.css";
import diamondIcon from "../assets/diamond 1.png";
import discountIcon from "../assets/discount 1.png";

const PromoCards = () => {
  const cards = [
    {
      id: 1,
      title: "Hurry Up!",
      discount: 85,
      bgColor: "#CCCEA7",
      icon: diamondIcon,
    },
    {
      id: 2,
      title: "Hurry Up!",
      discount: 75,
      bgColor: "#D6BEBE",
      icon: discountIcon,
    },
  ];

  return (
    <div className="promo-section">
      <div className="promo-row">
        {cards.map((card) => (
          <div
            key={card.id}
            className="promo-card"
            style={{ backgroundColor: card.bgColor }}
          >
            <img src={card.icon} alt="Promo Icon" className="promo-icon" />
            <h3 className="promo-title">{card.title}</h3>
            <h1 className="promo-discount">{card.discount}% OFF</h1>
            <p className="promo-sale">Sale</p>
            <button className="promo-button">SHOP NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCards;