// components/HomeSection.tsx
import React from 'react';
import './HomeSection.css';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="overlay"></div>
      <h1>Together, Let's Wear Our Pride</h1>
      <h2>Embrace the Spirit of Kenya with Daima Mkenya Africa</h2>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </section>
  );
};

export default HomeSection;
