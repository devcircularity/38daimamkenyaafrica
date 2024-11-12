'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

const Header: React.FC = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="logo">
        <img src="/images/logo.png" alt="Daima Mkenya Africa Logo" />
      </Link>
      <div className="fas fa-bars" onClick={handleNavToggle}></div>
      <nav className={`navbar ${navToggle ? 'nav-toggle' : ''}`}>
        <ul>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#fabrics">Our Fabrics</Link>
          </li>
          <li>
            <Link href="#journey">Our Journey</Link>
          </li>
          <li>
            <Link href="#team">Our Founder</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="#faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
