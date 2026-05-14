import React from 'react';
import styles from './SubNavbar.module.scss';

const SubNavbar = () => {
  const links = [
    "About",
    "Approvals/Rankings",
    "Specializations",
    "Fee Details",
    "Curriculum",
    "Scholarships",
    "Key Insights",
    "Campus Tour",
    "Placements",
    "Expert Guidance"
  ];

  return (
    <nav className={styles.subNavbar}>
      <div className={styles.container}>
        <div className={styles.scrollWrapper}>
          <ul className={styles.navLinks}>
            {links.map((link, index) => (
              <li key={index} className={link === "Approvals/Rankings" ? styles.active : ""}>
                <a href={`#${link.toLowerCase().replace(/[\/\s]/g, '-')}`}>
                  {link} {link === "Key Insights" && <span className={styles.arrow}>▼</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
