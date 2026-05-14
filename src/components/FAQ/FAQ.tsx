"use client";

import React, { useState } from 'react';
import { HelpCircle, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('About Course');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = [
    "About Course",
    "About Placements",
    "About Admissions"
  ];

  const questions = [
    {
      question: "Is Amity Online MBA valid in India?",
      answer: "Yes, Amity Online MBA is UGC-entitled and recognized by the Distance Education Bureau (DEB), making it fully valid for government jobs and higher studies in India and abroad."
    },
    {
      question: "What is the duration of the Amity Online MBA program?",
      answer: "The program is typically 2 years long, divided into 4 semesters."
    },
    {
      question: "What specializations are available in the Amity Online MBA?",
      answer: "Amity offers various specializations including Marketing, Finance, HR, IT, and more."
    },
    {
      question: "Can working professionals pursue the Amity Online MBA?",
      answer: "Absolutely. The program is designed for flexible learning, allowing professionals to study at their own pace."
    },
    {
      question: "Does Amity Online MBA offer live classes?",
      answer: "Yes, the program includes live sessions with faculty and industry experts, alongside recorded lectures."
    },
    {
      question: "Is there any entrance exam for the Amity Online MBA?",
      answer: "Generally, admissions are based on eligibility criteria, but some specializations might require an interview or a simple test."
    },
    {
      question: "Why choose Amity University for an Online MBA?",
      answer: "Amity is a top-ranked university with global recognition, strong placement support, and a modern digital learning platform."
    }
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        {/* Left Side: Categories */}
        <div className={styles.leftSide}>
          <h2>Frequently Asked <br />questions</h2>
          <p>Clear Your Doubts before Enrolling in Amity Online MBA</p>
          <div className={styles.line}></div>

          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={activeCategory === cat ? styles.activeCat : styles.catBtn}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <ArrowRight size={18} className={styles.arrow} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className={styles.rightSide}>
          {questions.map((item, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${expandedIndex === index ? styles.expanded : ''}`}
            >
              <div
                className={styles.questionRow}
                onClick={() => toggleAccordion(index)}
              >
                <HelpCircle size={18} className={styles.qIcon} />
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.toggleIcon}>
                  {expandedIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </div>
              <div className={styles.answerRow}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
