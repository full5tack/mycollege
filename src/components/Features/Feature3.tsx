"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import styles from './Feature3.module.scss';

const Feature3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      title: "Online MBA in Marketing Management",
      image: "/course.png",
      duration: "2 Years",
      emi: "No-Cost EMI",
      deadline: "15th May 2026",
      courseBy: "Google"
    },
    {
      title: "Online MBA in Digital Marketing Management",
      image: "/course.png",
      duration: "2 Years",
      emi: "No-Cost EMI",
      deadline: "15th May 2026",
      courseBy: "Google"
    },
    {
      title: "Online MBA in International Finance",
      image: "/course.png",
      duration: "2 Years",
      emi: "No-Cost EMI",
      deadline: "15th May 2026",
      courseBy: "Google"
    },
    {
      title: "Online MBA in Data Science",
      image: "/university_library_slider.png",
      duration: "2 Years",
      emi: "No-Cost EMI",
      deadline: "20th May 2026",
      courseBy: "Google"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (features.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (features.length - 2)) % (features.length - 2));
  };

  return (
    <section id="specializations" className={styles.feature3}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Top Online MBA Specializations</h2>
          <h3>at <span>Amity University</span></h3>
        </div>

        <div className={styles.gridWrapper}>
          <div
            className={styles.grid}
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={feature.image} alt={feature.title} />
                  <div className={styles.icon}>
                    <GraduationCap size={20} />
                  </div>
                  <div className={styles.courseBadge}>
                    Course by <img src="/logo.png" alt="Google" className={styles.googleLogo} />
                  </div>
                </div>

                <div className={styles.content}>
                  <h4>{feature.title}</h4>

                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <span className={styles.icon}>💸</span>
                      {feature.emi}
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.icon}>🕒</span>
                      {feature.duration}
                    </div>
                  </div>

                  <div className={styles.deadline}>
                    <span className={styles.dot}></span>
                    Deadline: {feature.deadline}
                  </div>

                  <button className={styles.btnView}>
                    View Specialization <span className={styles.arrow}>➔</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.navButtons}>
          <button
            className={styles.navBtn}
            onClick={handlePrev}
            suppressHydrationWarning
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={styles.navBtn}
            onClick={handleNext}
            suppressHydrationWarning
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
