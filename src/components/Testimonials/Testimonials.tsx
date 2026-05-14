"use client";

import React, { useState } from 'react';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Rohit Verma",
      role: "Online MBA in Marketing",
      text: "I enrolled for the MBA program and quality of content has been very good. Professors are phd holders and their industry connections add real value. Collegesathi helped me understand eligibility and admission process clearly..."
    },
    {
      name: "Sneha Gupta",
      role: "Online MBA in HR",
      text: "The flexibility of the online MBA program at Amity is unmatched. I can manage my work and studies effortlessly. The faculty support is always available whenever I have doubts."
    },
    {
      name: "Amit Patel",
      role: "Online MBA in Finance",
      text: "Specializing in Finance has opened up so many doors for me. The curriculum is very practical and focuses on current market trends. Collegesathi was a great help in choosing the right path."
    },
    {
      name: "Priya Sharma",
      role: "Online MBA in Data Science",
      text: "The transition from a non-tech background to Data Science was smooth thanks to the well-structured course and excellent mentorship provided by the professors."
    },
    {
      name: "Vikram Singh",
      role: "Online MBA in Marketing",
      text: "I enrolled for the MBA program and quality of content has been very good. Professors are phd holders and their industry connections add real value. Collegesathi helped me understand eligibility."
    },
    {
      name: "Anjali Mehta",
      role: "Online MBA in International Finance",
      text: "The global perspective I gained through this program is invaluable. The interactive sessions with industry experts provided real-world insights that I use every day."
    }
  ];

  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.icon}>🚀</span> Student Experience & Testimonials
          </div>
          <h2>Success Stories from Our Alumni</h2>
          <p>
            Our commitment to excellence goes beyond the ordinary, providing you with unmatched
            benefits that make your educational journey truly extraordinary.
          </p>
        </div>

        <div className={styles.sliderWrapper}>
          {/* Row 1 */}
          <div
            className={`${styles.track} ${isPaused ? styles.paused : ''}`}
            onClick={() => setIsPaused(!isPaused)}
          >
            {[...row1, ...row1, ...row1].map((t, index) => (
              <div key={index} className={styles.card}>
                <p className={styles.text}>
                  {t.text} <span className={styles.readMore}>read more</span>
                </p>
                <div className={styles.user}>
                  <div className={styles.avatar}>
                    <img src="/MaskGroup.png" alt={t.name} />
                  </div>
                  <div className={styles.info}>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div
            className={`${styles.track} ${styles.reverse} ${isPaused ? styles.paused : ''}`}
            onClick={() => setIsPaused(!isPaused)}
          >
            {[...row2, ...row2, ...row2].map((t, index) => (
              <div key={index} className={styles.card}>
                <p className={styles.text}>
                  {t.text} <span className={styles.readMore}>read more</span>
                </p>
                <div className={styles.user}>
                  <div className={styles.avatar}>
                    <img src="/MaskGroup.png" alt={t.name} />
                  </div>
                  <div className={styles.info}>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
