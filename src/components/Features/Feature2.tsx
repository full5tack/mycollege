"use client";

import React, { useState } from 'react';

import styles from './Feature2.module.scss';

interface RankingItem {
  id: string;
  renderLogo: () => React.ReactNode;
  text: string;
}

interface ApprovalItem {
  title: string;
  image: string;
}

const RANKINGS: RankingItem[] = [
  {
    id: "naac",
    renderLogo: () => (
      <div className={`${styles.customBadge} ${styles.naacBadge}`}>
        <div className={styles.badgeCircle}>
          <span className={styles.grade}>A+</span>
        </div>
        <span className={styles.badgeLabel}>NAAC</span>
      </div>
    ),
    text: 'NAAC accredited with "A+" grade.'
  },
  {
    id: "qs",
    renderLogo: () => (
      <div className={`${styles.customLogo} ${styles.qsLogo}`}>
        <span>QS</span>
      </div>
    ),
    text: 'Ranked among the Top 10 Online MBA in Asia Pacific (QS).'
  },
  {
    id: "nirf",
    renderLogo: () => (
      <div className={`${styles.customLogo} ${styles.nirfLogo}`}>
        <span className={styles.nirfText}>nirf</span>
        <span className={styles.underlineAccent}></span>
      </div>
    ),
    text: "20 Ranked in NIRF among India's top universities."
  },
  {
    id: "the",
    renderLogo: () => (
      <div className={`${styles.customLogo} ${styles.theLogo}`}>
        <span>THE</span>
      </div>
    ),
    text: 'Ranked globally for graduate employability by Times Higher Education (THE).'
  }
];

const ACCREDITATIONS: ApprovalItem[] = [
  { title: "UGC-Entitled", image: "/asbp.png" },
  { title: "UGC-Entitled", image: "/asbp.png" },
  { title: "UGC-Entitled", image: "/asbp.png" },
  { title: "UGC-Entitled", image: "/asbp.png" }
];

const Feature2: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Approvals' | 'Rankings'>('Approvals');

  return (
    <section id="approvals-rankings" className={styles.feature2}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Column: Title & Tab switches */}
          <div className={styles.leftCol}>
            <h2>
              Accredited. Recognized.<br />
              Career-Ready.
            </h2>
            <div className={styles.toggleRow} role="tablist" aria-label="Approvals and Rankings">
              <button
                role="tab"
                aria-selected={activeTab === 'Approvals'}
                className={activeTab === 'Approvals' ? styles.active : ''}
                onClick={() => setActiveTab('Approvals')}
              >
                Approvals
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'Rankings'}
                className={activeTab === 'Rankings' ? styles.active : ''}
                onClick={() => setActiveTab('Rankings')}
              >
                Rankings
              </button>
            </div>
          </div>

          {/* Right Column: Dynamically rendered based on activeTab */}
          <div className={styles.rightCol}>
            {activeTab === 'Approvals' ? (
              /* LAYOUT 1: 2x2 Grid of Cards (No horizontal scrolling) */
              <div className={styles.approvalsGrid}>
                {ACCREDITATIONS.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <div className={styles.logoWrapper}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <div className={styles.label}>{item.title}</div>
                  </div>
                ))}
              </div>
            ) : (
              /* LAYOUT 2: Stacked Horizontal Cards List */
              <div className={styles.cardsStack}>
                {RANKINGS.map((item) => (
                  <div key={item.id} className={styles.rowCard}>
                    <div className={styles.logoContainer}>
                      {item.renderLogo()}
                    </div>
                    <div className={styles.cardText}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
