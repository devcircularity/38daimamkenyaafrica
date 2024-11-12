import React from 'react';
import './FabricsSection.css';
import { FaLeaf } from 'react-icons/fa';
import KenyanFlag from './kenyan-flag.svg'; // Imported as React component
import CottonIcon from './cotton.svg'; // Imported as React component

const FabricsSection: React.FC = () => {
  return (
    <div className="fabrics-section pt-5 pb-5" id="fabrics">
      <div className="container">
        <h1 className="section-title">Our Fabrics</h1>
        <p className="section-subtitle">
          By embracing these unique fabrics made out of 100% Kenyan cotton and inspired by the national colors that unite us, we wear our pride, our identity, and our unity.
        </p>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <CottonIcon className="icon" /> {/* Use the cotton icon */}
              <h6>100% Kenyan Cotton</h6>
              <p>
              Our fabrics are made from pure Kenyan cotton, supporting local farmers and industries. This ensures the highest quality while promoting sustainability.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <KenyanFlag className="icon" /> {/* Use the Kenyan flag */}
              <h6>Inspired by National Colors</h6>
              <p>
              Inspired by the colors of our national flag—black, red, green, and white—our fabrics symbolize unity, independence, and the richness of our fertile lands.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <FaLeaf className="icon" />
              <h6>Ethically Produced</h6>
              <p>
              We emphasize supporting local communities and industries. Our homegrown products promote sustainable designs and foster ethical economic growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricsSection;
