import React from 'react';
import styles from './Specializations.module.scss';

const Specializations = () => {
  const specs = [
    "Finance & Accounting",
    "Marketing & Sales",
    "Human Resource Management",
    "Information Technology",
    "Digital Marketing",
    "Business Analytics",
    "Operations Management",
    "International Business"
  ];

  return (
    <section className={styles.specializations}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>10+ Industry-Oriented Specializations</h2>
          <p>Choose the path that aligns with your career goals.</p>
        </div>
        <div className={styles.grid}>
          {specs.map((spec, index) => (
            <div key={index} className={styles.tag}>
              {spec}
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <button className={styles.btnOutline}>View All Specializations</button>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
