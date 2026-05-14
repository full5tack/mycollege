"use client";

import React, { useState } from 'react';
import { Star, Info, ChevronRight } from 'lucide-react';
import styles from './Curriculum.module.scss';
import CurriculumScholarships from './CurriculumScholarships';
import CurriculumInsights from './CurriculumInsights';

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState(1);

  const semesters = [
    {
      id: 1,
      subjects: [
        "Managerial Economics",
        "Statistics for Management",
        "Professional communication",
        "Accounting for Managers",
        "Marketing Management"
      ]
    },
    {
      id: 2,
      subjects: [
        "Human Resource Management",
        "Financial Management",
        "Operations Research",
        "Business Research Methods",
        "Economic Environment of Business"
      ]
    },
    {
      id: 3,
      subjects: [
        "Strategic Management",
        "Project Management",
        "Digital Marketing",
        "Business Analytics",
        "Consumer Behavior"
      ]
    },
    {
      id: 4,
      subjects: [
        "Corporate Governance",
        "Supply Chain Management",
        "Entrepreneurship Development",
        "Innovation Management",
        "Final Year Project"
      ]
    }
  ];

  return (
    <>
      <section id="curriculum" className={styles.curriculumSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Star size={14} className={styles.star} fill="currentColor" /> Amity University Online
          </div>
          <h2>
            Amity Online <span className={styles.underline}>MBA Syllabus</span>
          </h2>
          <p>
            Let's explore a future-focused Amity Online MBA curriculum built to strengthen 
            your business and leadership capabilities.
          </p>
        </div>

        <div className={styles.tabsWrapper}>
          <div className={styles.tabs}>
            {[1, 2, 3, 4].map((sem) => (
              <button
                key={sem}
                className={activeTab === sem ? styles.activeTab : ''}
                onClick={() => setActiveTab(sem)}
              >
                Semester {sem}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.subjectsCard}>
            <ul>
              {semesters.find(s => s.id === activeTab)?.subjects.map((subject, index) => (
                <li key={index}>
                  <ChevronRight size={16} className={styles.bullet} />
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.factsCard}>
            <div className={styles.quickFacts}>
              <div className={styles.factsHeader}>
                <span className={styles.quote}>“</span>
                <h3>Quick Facts</h3>
              </div>
              
              <div className={styles.factItem}>
                <ChevronRight size={18} className={styles.arrow} />
                <p><strong>AI-Powered Learning:</strong> Experience personalized learning paths driven by advanced AI.</p>
              </div>

              <div className={styles.factItem}>
                <ChevronRight size={18} className={styles.arrow} />
                <p><strong>Career Support:</strong> Dedicated mentorship and placement assistance for every student.</p>
              </div>
            </div>
            
            <div className={styles.noteBox}>
              <Info size={14} className={styles.infoIcon} />
              NOTE
            </div>
          </div>
        </div>
      </div>
      </section>
      <CurriculumScholarships />
      <CurriculumInsights />
    </>
  );
};

export default Curriculum;
