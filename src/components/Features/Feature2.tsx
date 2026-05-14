"use client";

import React, { useState, useRef } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Feature2.module.scss';

interface FeatureItem {
  title: string;
  image: string;
}

const ACCREDITATIONS: FeatureItem[] = [
  { title: "UGC-Entitled", image: "/asbp.png" },
  { title: "UGC-Entitled", image: "/asbp.png" },
  { title: "UGC-Entitled", image: "/asbp.png" },
  { title: "UGC-Entitled", image: "/asbp.png" }
];

const RANKINGS: FeatureItem[] = [
  { title: "NIRF 22nd", image: "/logo.png" },
  { title: "QS World 500+", image: "/logo.png" },
  { title: "Times Higher Ed", image: "/logo.png" },
  { title: "WES Evaluated", image: "/logo.png" }
];

const Feature2: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Approvals' | 'Rankings'>('Approvals');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const currentData = activeTab === 'Approvals' ? ACCREDITATIONS : RANKINGS;

  return (
    <section id="approvals-rankings" className={styles.feature2}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Header & Tabs Section */}
          <div className={styles.header}>
            <h2>Accredited. Recognized. <br />Career-Ready.</h2>
            <div className={styles.toggleRow} role="tablist" aria-label="Approvals and Rankings">
              <button
                suppressHydrationWarning
                role="tab"
                aria-selected={activeTab === 'Approvals'}
                className={activeTab === 'Approvals' ? styles.active : ''}
                onClick={() => setActiveTab('Approvals')}
              >
                Approvals
              </button>
              <button
                suppressHydrationWarning
                role="tab"
                aria-selected={activeTab === 'Rankings'}
                className={activeTab === 'Rankings' ? styles.active : ''}
                onClick={() => setActiveTab('Rankings')}
              >
                Rankings
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable Cards Grid Section */}
          <div className={styles.gridWrapper}>
            <div className={styles.grid} ref={scrollRef} tabIndex={0} aria-label="Accreditations and Rankings List">
              {currentData.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.checkIconWrapper}>
                    <CheckCircle size={18} className={styles.checkIcon} />
                  </div>
                  <div className={styles.logoWrapper}>
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className={styles.label}>{item.title}</div>
                </div>
              ))}
              {/* Bulletproof DOM spacer to enforce horizontal trailing space on strict mobile layout engines */}
              <div className={styles.scrollSpacer} aria-hidden="true" />
            </div>

            {/* Slider Navigation Controls */}
            <div className={styles.sliderControls}>
              <button className={styles.prev} onClick={() => scroll('left')} aria-label="Scroll Left">
                <ChevronLeft size={24} />
              </button>
              <button className={styles.next} onClick={() => scroll('right')} aria-label="Scroll Right">
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
