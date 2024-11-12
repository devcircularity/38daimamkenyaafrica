import React from 'react';
import Image from 'next/image';
import './TeamSection.css'; // Importing the updated CSS file

const TeamSection: React.FC = () => {
  return (
    <section id="about" className="team-section">
      <h1 className="team-heading">Our Founder</h1>
      <div className="team-row">
        <div className="team-content">
          <h3>Seasoned Business Leader</h3>
          <p>
          Mrs. Zahra Bahlewa Moi is a distinguished business leader with extensive experience in strategic management and business development. She holds a Global Executive Master’s in Business Administration and a Bachelor of Science in International Business Administration, both from United States International University-Africa (USIU-A). Additionally, she earned an Executive Certificate in Being Innovative from IMD in Lausanne, Switzerland.
          </p>
          <p>
          From 2016 to 2022, Zahra served on the board of the Tourism Research Institute, where she played a pivotal role in shaping Kenya’s tourism research and policy development. As CEO of the award-winning Lord Erroll Restaurant from 2017 to 2022, she spearheaded operations, enhancing its reputation as one of Nairobi’s premier dining destinations. Zahra also serves as a director for several companies, leveraging her expertise to drive organizational growth and success.
          </p>
        </div>
        <div className="team-image-container">
          <Image
            src="/images/team/zahra-moi.jpg" // Ensure the image is in the public/team folder
            alt="Mrs. Zahra Bahlewa Moi"
            width={300}
            height={450}
            objectFit="cover"
            className="team-image"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
