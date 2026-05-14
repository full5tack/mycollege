import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  CreditCard, 
  ChevronLeft, 
  ChevronRight, 
  Bell, 
  Info 
} from 'lucide-react';
import styles from './AdmissionProcessTab.module.scss';

const AdmissionProcessTab = () => {
  const [stepsOrder, setStepsOrder] = useState([0, 1, 2]);

  const admissionStepsData = [
    {
      number: '01',
      title: 'Select Your Program',
      desc: 'Choose the program that aligns with your career goals and interests.',
      icon: <FileText size={18} />
    },
    {
      number: '02',
      title: 'Complete Your Application',
      desc: 'Fill in your details and submit all required information accurately.',
      icon: <CheckCircle size={18} />
    },
    {
      number: '03',
      title: 'Pay Program Fees',
      desc: 'Make a secure and hassle-free payment to proceed further.',
      icon: <CreditCard size={18} />
    }
  ];

  const handlePrevStep = () => {
    setStepsOrder(prev => [prev[2], prev[0], prev[1]]);
  };

  const handleNextStep = () => {
    setStepsOrder(prev => [prev[1], prev[2], prev[0]]);
  };

  return (
    <div className={styles.admissionContainer}>
      <div className={styles.admissionHeader}>
        <h3>Amity Online Admission Process 2026 - Step by Step Guide</h3>
      </div>

      <div className={styles.carouselWrapper}>
        <button 
          className={`${styles.navArrow} ${styles.prevArrow}`}
          onClick={handlePrevStep}
          aria-label="Previous step"
        >
          <ChevronLeft size={20} />
        </button>

        <div className={styles.stepsGrid}>
          {stepsOrder.map(index => {
            const step = admissionStepsData[index];
            return (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepCardHeader}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            );
          })}
        </div>

        <button 
          className={`${styles.navArrow} ${styles.nextArrow}`}
          onClick={handleNextStep}
          aria-label="Next step"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={styles.admissionFooter}>
        <button className={styles.notifyBtn}>
          <Bell size={16} />
          <span>Keep Me Notified</span>
        </button>
        <div className={styles.noteText}>
          <Info size={14} />
          <span>NOTE</span>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcessTab;
