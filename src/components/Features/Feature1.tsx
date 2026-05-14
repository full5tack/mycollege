"use client";

import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Play } from 'lucide-react';
import styles from './Feature1.module.scss';

const Feature1 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 5,
    minutes: 31,
    seconds: 52
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="about" className={styles.feature1}>
      <div className={styles.container}>
        <div className={styles.mainContent}>

          {/* Text Content Area */}
          <div className={styles.textContent}>
            <div className={styles.headingRow}>
              <h2>Why say "Yes" to <span className={styles.highlight}>Amity Online MBA?</span></h2>
              <button className={styles.playBtn} aria-label="Play Introduction">
                <Play size={28} fill="currentColor" />
              </button>
            </div>
            <p className={styles.description}>
              Amity Online MBA is a UGC-entitled, 2-year postgraduate program designed
              for learners who want to build strong business and leadership skills without
              leaving their current commitments.
            </p>
            <p className={styles.description}>
              Study anytime, anywhere with 24/7 access to resources. Ideal for professionals
              and fresh graduates looking to grow in today's competitive environment.
            </p>
          </div>

          {/* Placement Card Area */}
          <div className={styles.placementCard}>
            <div className={styles.cardFrame}>
              <div className={styles.thumbtack}>
                <div className={styles.pinHead}></div>
                <div className={styles.pinNeedle}></div>
              </div>

              <div className={styles.cardHeader}>
                <h3>Placement Opportunities <br />Starts from <span className={styles.redText}>1st Semester</span></h3>
              </div>

              <div className={styles.learnersBox}>
                <div className={styles.statItem}>
                  <Users size={24} className={styles.statIcon} />
                  <div className={styles.statInfo}>
                    <strong>1,15,000+</strong>
                    <span>Happy Learners</span>
                  </div>
                </div>
              </div>

              <div className={styles.timerWrapper}>
                <p className={styles.closingText}><Clock size={14} /> Applications Closing Soon</p>
                <div className={styles.countdown}>
                  <div className={styles.timerBox}>
                    <div className={styles.digit}>{formatDigit(timeLeft.days)}</div>
                    <span>DAYS</span>
                  </div>
                  <div className={styles.colon}>:</div>
                  <div className={styles.timerBox}>
                    <div className={styles.digit}>{formatDigit(timeLeft.hours)}</div>
                    <span>HRS</span>
                  </div>
                  <div className={styles.colon}>:</div>
                  <div className={styles.timerBox}>
                    <div className={styles.digit}>{formatDigit(timeLeft.minutes)}</div>
                    <span>MIN</span>
                  </div>
                  <div className={styles.colon}>:</div>
                  <div className={styles.timerBox}>
                    <div className={styles.digit}>{formatDigit(timeLeft.seconds)}</div>
                    <span>SEC</span>
                  </div>
                </div>
              </div>

              <button className={styles.btnBook}>Book your Slot Now!</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feature1;