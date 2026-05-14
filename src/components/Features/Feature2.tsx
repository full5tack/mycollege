"use client";

import React, { useState, useRef } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Feature2.module.scss';

const Feature2 = () => {
  const [activeTab, setActiveTab] = useState('Approvals');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const accreditations = [
    { title: "UGC-Entitled", image: "/asbp.png" },
    { title: "UGC-Entitled", image: "/asbp.png" },
    { title: "UGC-Entitled", image: "/asbp.png" },
    { title: "UGC-Entitled", image: "/asbp.png" }
  ];

  const rankings = [
    { title: "NIRF 22nd", image: "/logo.png" },
    { title: "QS World 500+", image: "/logo.png" },
    { title: "Times Higher Ed", image: "/logo.png" },
    { title: "WES Evaluated", image: "/logo.png" }
  ];

  const currentData = activeTab === 'Approvals' ? accreditations : rankings;

  return (
    <section id="approvals-rankings" className={styles.feature2}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Accredited. Recognized. <br />Career-Ready.</h2>
            <div className={styles.toggleRow}>
              <button
                suppressHydrationWarning
                className={activeTab === 'Approvals' ? styles.active : ''}
                onClick={() => setActiveTab('Approvals')}
              >
                Approvals
              </button>
              <button
                suppressHydrationWarning
                className={activeTab === 'Rankings' ? styles.active : ''}
                onClick={() => setActiveTab('Rankings')}
              >
                Rankings
              </button>
            </div>
          </div>

          <div className={styles.gridWrapper}>
            <div className={styles.grid} ref={scrollRef}>
              {currentData.map((item, index) => (
                <li key={index} className={styles.card}>
                  <div className={styles.checkIconWrapper}>
                    <CheckCircle size={18} className={styles.checkIcon} />
                  </div>
                  <div className={styles.logoWrapper}>
                    <img src={item.image} alt="Accreditation" />
                  </div>
                  <div className={styles.label}>{item.title}</div>
                </li>
              ))}
            </div>
            <div className={styles.sliderControls}>
              <button className={styles.prev} onClick={() => scroll('left')} aria-label="Previous">
                <ChevronLeft size={24} />
              </button>
              <button className={styles.next} onClick={() => scroll('right')} aria-label="Next">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
