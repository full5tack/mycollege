"use client";

import { Play } from 'lucide-react';
import styles from './CampusInsights.module.scss';

const CampusInsights = () => {
  return (
    <section id="campus-tour" className={styles.campusSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.playButtonWrapper}>
          <div className={styles.playButton}>
            <Play size={40} fill="currentColor" />
          </div>
        </div>
        
        <div className={styles.textSide}>
          <h2>Did you know?</h2>
          <p>
            Amity has a strong global presence with over 11 campuses across 
            India and 10+ internationally, offering global exposure. This 
            widespread network brings diverse learning and cultural experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CampusInsights;
