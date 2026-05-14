"use client";

import { Calendar, PhoneCall } from 'lucide-react';
import styles from './ClarityBanner.module.scss';

const ClarityBanner = () => {
  return (
    <section id="key-insights" className={styles.claritySection}>
      <div className={styles.container}>
        <div className={styles.blueBar}>
          <h2>Get Clarity with Us!</h2>
          <div className={styles.actions}>
            <button className={styles.btnSchedule}>
              <Calendar size={18} className={styles.icon} /> Schedule Your Call
            </button>
            <button className={styles.btnTalk}>
              <PhoneCall size={18} className={styles.icon} /> Let's Talk Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClarityBanner;
