"use client"
// src/components/FAQSection.tsx

import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: 'What materials are used in your fabrics?',
    answer: 'We use 100% Kenyan cotton for premium quality and sustainability.',
  },
  {
    question: 'How can I purchase your fabrics?',
    answer: 'You can contact us through the form on our website or visit our store locations listed online.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship our fabrics worldwide so that everyone can embrace Kenyan heritage.',
  },
  {
    question: 'How do you support local communities?',
    answer: 'We work closely with local farmers and artisans, ensuring fair trade practices and contributing to community development projects.',
  },
  {
    question: 'Can I customize my fabric order?',
    answer: 'Yes, we offer customization options for bulk orders. Please contact us for more details.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards, mobile money, and bank transfers.',
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion-container">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <i className={`icon ${activeIndex === index ? 'rotate' : ''}`}></i>
            </button>
            <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
