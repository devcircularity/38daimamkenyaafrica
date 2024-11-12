// src/app/page.tsx

import React from 'react';
import Header from '../components/Header';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import FabricsSection from '../components/FabricsSection';
import JourneySection from '../components/JourneySection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <FabricsSection />
        <JourneySection />
        <TeamSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default Page;
