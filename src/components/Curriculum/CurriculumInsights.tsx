import React, { useState } from 'react';
import { Award, FileText, CheckCircle, Search } from 'lucide-react';
import styles from './Curriculum.module.scss';
import Image from 'next/image';

const CurriculumInsights = () => {
  const [activeTab, setActiveTab] = useState('Sample Degree');

  const tabs = [
    { id: 'Sample Degree', icon: <Award size={18} /> },
    { id: 'Exam Pattern', icon: <FileText size={18} /> },
    { id: 'Eligibility Criteria', icon: <CheckCircle size={18} /> },
    { id: 'Admission Process', icon: <Search size={18} /> }
  ];

  return (
    <section className={styles.insightsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>
            Key Insights You must know before<br/>
            choosing <span className={styles.highlightRed}>Amity Online in 2026</span>
          </h2>
        </div>

        <div className={styles.insightsLayout}>
          <div className={styles.sidebar}>
            {tabs.map(tab => (
              <button 
                key={tab.id}
                className={`${styles.sidebarTab} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.icon}>{tab.icon}</span>
                {tab.id}
              </button>
            ))}
          </div>

          <div className={styles.contentArea}>
            <div className={styles.contentHeader}>
              <h3>Amity Online MBA: {activeTab}</h3>
            </div>
            
            <div className={styles.contentBox}>
              <div className={styles.textContent}>
                <h4>Your Career-ready Credential</h4>
                <ul className={styles.benefitsList}>
                  <li>
                    <span className={styles.bulletIcon}>🔄</span>
                    Get a UGC-entitled Amity Online MBA degree.
                  </li>
                  <li>
                    <span className={styles.bulletIcon}>📄</span>
                    The Online MBA from Amity University is globally recognized and accepted.
                  </li>
                </ul>
              </div>
              
              <div className={styles.imageContent}>
                <div className={styles.certificateFrame}>
                  {/* Using an unsplash placeholder for the certificate */}
                  <Image 
                    src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80" 
                    alt="Sample Degree Certificate" 
                    width={300} 
                    height={400} 
                    className={styles.certificateImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumInsights;
