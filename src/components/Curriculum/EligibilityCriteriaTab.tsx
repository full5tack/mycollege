import React, { useState } from 'react';
import { Info, FileText, Award, Briefcase } from 'lucide-react';
import styles from './EligibilityCriteriaTab.module.scss';

const EligibilityCriteriaTab = () => {
  const [eligibilityType, setEligibilityType] = useState<'National' | 'International'>('National');

  return (
    <div>
      <div className={styles.eligibilityHeader}>
        <h3>Who can apply for Online MBA at Amity University?</h3>
        <div className={styles.toggleWrapper}>
          <div className={styles.toggleContainer}>
            <button 
              className={eligibilityType === 'National' ? styles.active : ''}
              onClick={() => setEligibilityType('National')}
            >
              National
            </button>
            <button 
              className={eligibilityType === 'International' ? styles.active : ''}
              onClick={() => setEligibilityType('International')}
            >
              International
            </button>
          </div>
          <div className={styles.noteText}>
            <Info size={14} />
            <span>NOTE</span>
          </div>
        </div>
      </div>

      <div className={styles.eligibilityCardsContainer}>
        <div className={styles.eligibilityCard}>
          <div className={styles.cardIconWrapper}>
            <FileText />
          </div>
          <h4>Academic Requirement</h4>
          <p>
            {eligibilityType === 'National' 
              ? "Candidates must have a bachelor's degree in any stream from a recognized university, along with sufficient English proficiency."
              : "Candidates must hold a bachelor's degree or equivalent from a recognized international institution, along with certified English proficiency."}
          </p>
        </div>

        <div className={styles.eligibilityCard}>
          <div className={styles.cardIconWrapper}>
            <Award />
          </div>
          <h4>Marks Required</h4>
          <p>
            {eligibilityType === 'National'
              ? "A minimum of 40% in your bachelor's is required. Candidates scoring below 40% will have to take the test and will be eligible for admission if they pass."
              : "Equivalent to passing scores or a minimum GPA standard as evaluated by international admissions criteria."}
          </p>
        </div>

        <div className={styles.eligibilityCard}>
          <div className={styles.cardIconWrapper}>
            <Briefcase />
          </div>
          <h4>Work Experience</h4>
          <p>
            The Amity University MBA Online course does not require you to have any prior work experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteriaTab;
