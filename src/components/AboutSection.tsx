// src/components/AboutSection.tsx

import React from 'react';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about">
      <h1 className="heading">About Us</h1>
      <div className="row">
        <div className="content">
          <h3>Celebrating Kenyan Identity, Pride, and Heritage</h3>
          <p>
            Daima Mkenya Africa&apos;s business is creating fabrics in colors that celebrate our shared
            identity, cultural pride, and traditional cultural expressions. Inspired by the scarcity of
            authentic clothing fabrics in colors that represent our national flag, our founder set out to
            create fabrics that give each one of us a strong sense of identity, belonging, and national
            pride, wherever we are in the world.
          </p>
          <Link href="#journey">
            <button className="btn">Our Journey</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
