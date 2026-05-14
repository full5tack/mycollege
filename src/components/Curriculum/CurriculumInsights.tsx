import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import styles from './CurriculumInsights.module.scss';
import SampleDegreeTab from './SampleDegreeTab';
import EligibilityCriteriaTab from './EligibilityCriteriaTab';
import ExamPatternTab from './ExamPatternTab';
import AdmissionProcessTab from './AdmissionProcessTab';

const CurriculumInsights = () => {
  const [activeTab, setActiveTab] = useState('Eligibility Criteria');

  const tabs = [
    { id: 'Sample Degree' },
    { id: 'Eligibility Criteria' },
    { id: 'Exam Pattern' },
    { id: 'Admission Process' }
  ];

  return (
    <section className={styles.insightsSection}>
      <div className={styles.container}>
        <div className={styles.insightsLayout}>
          {/* Left Sidebar Menu */}
          <div className={styles.sidebar}>
            {tabs.map(tab => (
              <button 
                key={tab.id}
                className={`${styles.sidebarTab} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.icon}>
                  <MapPin size={18} />
                </span>
                {tab.id}
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className={styles.contentArea}>
            {/* Shared Main Header positioned perfectly over the right-hand content area */}
            <div className={styles.mainInsightTitle}>
              <h2>
                Key Insights You must know before<br/>
                choosing <span className={styles.highlightRed}>Amity Online in 2026</span>
              </h2>
            </div>

            {/* Tab Contents rendered dynamically via small sub-components */}
            {activeTab === 'Sample Degree' && <SampleDegreeTab />}
            {activeTab === 'Eligibility Criteria' && <EligibilityCriteriaTab />}
            {activeTab === 'Exam Pattern' && <ExamPatternTab />}
            {activeTab === 'Admission Process' && <AdmissionProcessTab />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumInsights;
