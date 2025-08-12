// src/components/Features.jsx
import React from 'react';
import './Features.css';
import { FaUndoAlt, FaAward, FaLock, FaHeadset } from 'react-icons/fa';

const features = [
  { id: 1, icon: <FaUndoAlt />, title: '7 Days Return' },
  { id: 2, icon: <FaAward />, title: 'Quality Products' },
  { id: 3, icon: <FaLock />, title: 'Safe Payment' },
  { id: 4, icon: <FaHeadset />, title: '24x7 Helpline' },
];

const Features = () => {
  return (
    <div className="features-container">
      <div className="half-circle left-circle"></div>
      <div className="features-content">
        {features.map((feature, index) => (
          <div key={feature.id} className="feature-item">
            <div className="icon">{feature.icon}</div>
            <p>{feature.title}</p>
            {index < features.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
      <div className="half-circle right-circle"></div>
    </div>
  );
};

export default Features;