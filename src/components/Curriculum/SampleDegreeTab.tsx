import React from 'react';
import Image from 'next/image';
import styles from './SampleDegreeTab.module.scss';

const SampleDegreeTab = () => {
  return (
    <div className={styles.sampleDegreeBox}>
      <div className={styles.textContent}>
        <h4>Your Career-ready Credential</h4>
        <ul className={styles.benefitsList}>
          <li>
            <span className={styles.bulletIcon}>🔄</span>
            <span>Get a UGC-entitled Amity Online MBA degree.</span>
          </li>
          <li>
            <span className={styles.bulletIcon}>📄</span>
            <span>The Online MBA from Amity University is globally recognized and accepted.</span>
          </li>
        </ul>
      </div>
      
      <div className={styles.imageContent}>
        <div className={styles.certificateFrame}>
          <Image 
            src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80" 
            alt="Sample Degree Certificate" 
            width={200} 
            height={280} 
            className={styles.certificateImg}
          />
        </div>
      </div>
    </div>
  );
};

export default SampleDegreeTab;
