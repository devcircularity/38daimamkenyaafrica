// JourneySection.tsx

import React from 'react';
import { FaHandsHelping, FaHeart, FaGlobeAfrica } from 'react-icons/fa';
import './JourneySection.css';

const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="journey-section">
      <h1 className="heading">Our Journey</h1>
      <div className="row">
        <div className="content">
          <h3>
            Daima Mkenya Africa celebrates our journey and hopes to inspire a sense of belonging for every Kenyan and friends of Kenya, wherever they are in the world.
          </h3>
        </div>
      </div>
      <div className="cards-row">
        <div className="card">
          <div className="icon-wrapper">
            <FaHandsHelping className="icon" />
          </div>
          <h6>Supporting Local Communities</h6>
          <p>
            We are committed to supporting local communities and industries, fostering economic growth, and promoting Kenyan culture.
          </p>
        </div>
        <div className="card">
          <div className="icon-wrapper">
            <FaHeart className="icon" />
          </div>
          <h6>Promoting National Pride</h6>
          <p>
            Our fabrics evoke a sense of togetherness and pride among Kenyans, reflecting the beauty of our collective values and culture.
          </p>
        </div>
        <div className="card">
          <div className="icon-wrapper">
            <FaGlobeAfrica className="icon" />
          </div>
          <h6>Global Reach</h6>
          <p>
            We aim to connect Kenyans around the world, providing them with fabrics that carry the essence of our heritage and identity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
