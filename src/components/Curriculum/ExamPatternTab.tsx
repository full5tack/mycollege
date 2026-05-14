import React from 'react';
import styles from './ExamPatternTab.module.scss';

const ExamPatternTab = () => {
  return (
    <div className={styles.examPatternContainer}>
      <div className={styles.cardsIllustration}>
        <div className={styles.examCardBack}>
          <p>
            These assessments are conducted to promote student&apos;s engagement throughout the coursework and includes quizzes and projects to increase overall understanding.
          </p>
          <h5>Internal<br/>Assessments</h5>
        </div>
        <div className={styles.examCardFront}>
          <h5>Term-End<br/>Examination</h5>
        </div>
      </div>

      <div className={styles.examTextContent}>
        <span className={styles.overline}>EXAM PATTERN</span>
        <h3>How are Exams Conducted for Amity Online MBA?</h3>
        <p>
          The exams for online MBA at Amity University are conducted in an Online mode with proctoring technology to ensure fair evaluation.
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.percentage}>30%</div>
            <div className={styles.statLabel}>Internal Assessment</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.percentage}>70%</div>
            <div className={styles.statLabel}>External Examination</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPatternTab;
