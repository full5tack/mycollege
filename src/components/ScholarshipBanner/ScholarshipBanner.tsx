"use client";

import React, { useState, useEffect } from 'react';
import { User, FileText, Phone, MessageSquare } from 'lucide-react';
import styles from './ScholarshipBanner.module.scss';

const ScholarshipBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hrs: 5,
    min: 31,
    sec: 52
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hrs, min, sec } = prev;
        if (sec > 0) sec--;
        else {
          sec = 59;
          if (min > 0) min--;
          else {
            min = 59;
            if (hrs > 0) hrs--;
            else {
              hrs = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hrs, min, sec };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="scholarships" className={styles.scholarshipSection}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h2>Early Bird Scholarship <br />Ending Soon</h2>
          <div className={styles.countdown}>
            <div className={styles.timeBox}>
              <div className={styles.number}>{formatNum(timeLeft.days)}</div>
              <span>DAYS</span>
            </div>
            <div className={styles.separator}>:</div>
            <div className={styles.timeBox}>
              <div className={styles.number}>{formatNum(timeLeft.hrs)}</div>
              <span>HRS</span>
            </div>
            <div className={styles.separator}>:</div>
            <div className={styles.timeBox}>
              <div className={styles.number}>{formatNum(timeLeft.min)}</div>
              <span>MIN</span>
            </div>
            <div className={styles.separator}>:</div>
            <div className={styles.timeBox}>
              <div className={styles.number}>{formatNum(timeLeft.sec)}</div>
              <span>SEC</span>
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.formCard}>
            <div className={styles.inputGroup}>
              <User size={18} className={styles.icon} />
              <input type="text" placeholder="Your Name" />
            </div>
            <div className={styles.inputGroup}>
              <FileText size={18} className={styles.icon} />
              <input type="text" placeholder="Course" />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.country}>
                <img src="https://flagcdn.com/w20/in.png" alt="India" />
                <span>+91</span>
                {/* <span className={styles.downArrow}>▼</span> */}
              </div>
              <Phone size={18} className={styles.icon} />
              <input type="text" placeholder="Mobile Number" />
            </div>

            <button className={styles.btnContinue} suppressHydrationWarning>
              Continue
            </button>

            <div className={styles.divider}>
              <span>Skip the form, get instant reply</span>
            </div>

            <button className={styles.btnWhatsapp} suppressHydrationWarning>
              <MessageSquare size={18} className={styles.waIcon} /> Talk to Us on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipBanner;
