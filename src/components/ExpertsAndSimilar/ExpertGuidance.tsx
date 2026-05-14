"use client";

import { Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ExpertGuidance.module.scss';

const ExpertGuidance = () => {
  const experts = [
    {
      title: "Management Experts",
      rating: "4.9/5",
      learners: "1,15,000",
      team: "125+ Counsellors",
      tags: ["MBA", "BBA", "PGDM", "Executive MBA"],
      logo: "/MaskGroup.png"
    },
    {
      title: "Tech Specialists",
      rating: "4.7/5",
      learners: "67,000",
      team: "57+ Counsellors",
      tags: ["MCA", "M.Sc", "BCA", "Data Science"],
      logo: "/MaskGroup.png"
    },
    {
      title: "Scholarship & Finance Experts",
      rating: "4.5/5",
      learners: "89,000",
      team: "74+ Counsellors",
      tags: ["Scholarship", "EMI", "Finance", "Fees"],
      logo: "/MaskGroup.png"
    }
  ];

  const universities = [1, 2, 3, 4];

  return (
    <section id="expert-guidance" className={styles.expertSection}>
      <div id="expert-guidance-target" style={{ position: 'absolute', top: '-150px' }} />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Real Experts. Real Guidance</h2>
        </div>

        <div className={styles.expertsWrapper}>
          <button className={`${styles.navBtn} ${styles.prev}`}>
            <ChevronLeft size={20} />
          </button>

          {/* Scroll container for mobile */}
          <div className={styles.expertsScrollContainer}>
            <div className={styles.expertsGrid}>
              {experts.map((expert, index) => (
                <div key={index} className={styles.expertCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.avatar}>
                      <img src={expert.logo} alt="Expert" />
                    </div>
                    <div className={styles.info}>
                      <h3>{expert.title}</h3>
                      <div className={styles.stats}>
                        <span className={styles.star}><Star size={14} fill="currentColor" /> {expert.rating}</span>
                        <span className={styles.learners}><Users size={14} /> {expert.learners} learners</span>
                      </div>
                      <div className={styles.teamBadge}>
                        Team of {expert.team}
                      </div>
                    </div>
                  </div>
                  <div className={styles.tags}>
                    {expert.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <button className={styles.btnBook}>Book Counselling</button>
                </div>
              ))}
            </div>
          </div>

          <button className={`${styles.navBtn} ${styles.next}`}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className={styles.similarSection}>
        <div className={styles.container}>
          <div className={styles.similarHeader}>
            <h2>Want to Explore <span className={styles.highlight}>Similar Universities?</span></h2>
          </div>

          <div className={styles.similarGrid}>
            {universities.map((_, index) => (
              <div key={index} className={styles.uniCard}>
                <div className={styles.uniLogo}>
                  <img src="/manipallogo.png" alt="University" />
                  <div className={styles.uniName}>
                    <span>Manipal Online</span>
                    <strong>University</strong>
                  </div>
                </div>
                <div className={styles.uniInfo}>
                  <p>Manipal Online University</p>
                  <div className={styles.rating}>
                    Student Rating
                    <div className={styles.stars}>
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <span>(458 Reviews)</span>
                    </div>
                  </div>
                </div>
                <button className={styles.btnCompare}>
                  <input type="checkbox" id={`compare-${index}`} />
                  <label htmlFor={`compare-${index}`}>Add to compare</label>
                </button>
              </div>
            ))}
          </div>

          <div className={styles.bottomNav}>
            <button className={styles.circleBtn}><ChevronLeft size={18} /></button>
            <button className={`${styles.circleBtn} ${styles.active}`}><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertGuidance;