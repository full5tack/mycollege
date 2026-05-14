import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.brandSide}>
            <div className={styles.logo}>
              <span className={styles.the}>THE</span>
              <span className={styles.main}>Collegesathi</span>
              <span className={styles.company}>COMPANY</span>
            </div>
            <div className={styles.socials}>
              <div className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
              </div>
              <div className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <div className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
            </div>
            <div className={styles.callBadge}>
              <span className={styles.talk}>TALK TO AN EXPERT</span>
              <span className={styles.number}>9785-800-008</span>
            </div>
          </div>

          <div className={styles.linksSide}>
            <div className={styles.linkColumn}>
              <h4>About the Company</h4>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>CS Careers <span className={styles.hiring}>Yes, We are Hiring</span></li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Disclaimer</li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4>Quick Links</h4>
              <ul>
                <li>Top Online Universities</li>
                <li>Blogs</li>
                <li>Scholarship</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Main Links Grid */}
        <div className={styles.mainGrid}>
          <div className={styles.gridColumn}>
            <h4>Popular PG Programs</h4>
            <ul>
              <li>Online MBA</li>
              <li>Online MCA</li>
              <li>Dual MBA</li>
              <li>Online BBA + MBA</li>
              <li>1-Year Online MBA</li>
            </ul>
          </div>
          <div className={styles.gridColumn}>
            <h4>Trending UG Programs</h4>
            <ul>
              <li>Online BBA</li>
              <li>Online BCA</li>
              <li>Online B.Com</li>
              <li>Online BA</li>
              <li>Distance B.Com</li>
            </ul>
          </div>
          <div className={styles.gridColumn}>
            <h4>Doctorate Programs</h4>
            <ul>
              <li>Online DBA</li>
              <li>Global DBA</li>
              <li>DNP</li>
              <li>EdD</li>
              <li>MBA + DBA</li>
            </ul>
          </div>
          <div className={styles.gridColumn}>
            <h4>Executive Programs</h4>
            <ul>
              <li>Executive MBA</li>
              <li>Executive DBA</li>
              <li>Executive PGDBA</li>
              <li>Executive PGDM</li>
              <li>Executive PGCM</li>
            </ul>
          </div>

          <div className={styles.gridColumn}>
            <h4>Trending Online Universities</h4>
            <ul>
              <li>Amity Online University</li>
              <li>NMIMS Online</li>
              <li>Online Manipal</li>
              <li>Jain University Online</li>
              <li>Sharda Online University</li>
              <li>Chandigarh Online University</li>
              <li>LPU Online</li>
              <li>DY Patil Vidyapeeth Online</li>
              <li>OP Jindal University</li>
            </ul>
          </div>
          <div className={styles.gridColumn}>
            <h4>In Demand MBA Specializations</h4>
            <ul>
              <li>HR Management</li>
              <li>Marketing Management</li>
              <li>Finance Management</li>
              <li>Fintech Management</li>
              <li>International Business</li>
              <li>Project Management</li>
              <li>Logistic and Supply chain</li>
              <li>Healthcare Management</li>
            </ul>
          </div>
          <div className={styles.gridColumn}>
            <h4>In Demand MCA Specializations</h4>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Cyber Security</li>
              <li>Cloud Computing</li>
              <li>Data Science and Analytics</li>
              <li>Computer Science and IT</li>
              <li>Full Stack Development</li>
              <li>Block Chain</li>
            </ul>
          </div>
          <div className={styles.gridColumn}>
            <h4>Top Certification Programs</h4>
            <ul>
              <li>PGCM</li>
              <li>Certificate in UI & UX</li>
              <li>Certificate in Data Science</li>
              <li>Certificate in Project Management</li>
              <li>Certificate in Text Mining & NLP</li>
              <li>Certificate in Big Data Analytics</li>
              <li>Certificate in HR Analytics</li>
              <li>Certificate in Financial Analytics</li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.policyLinks}>
            <span>Disclaimer</span> / <span>Terms and Conditions</span> / <span>Our Policy</span>
          </div>
          <p className={styles.description}>
            CollegeSathi aims to provide unbiased and precise information to aspirants, along with comparative guidance on universities and their programs. The content on the CollegeSathi website, including text, graphics, images, blogs, videos, and university logos, is meant for informational purposes only and should not be considered a substitute for official information provided by academic partners. While we make every effort to keep the information accurate and up to date, CollegeSathi does not guarantee the completeness of the content and is not responsible for any errors, omissions, or losses resulting from its use.
          </p>
          <div className={styles.copyright}>
            © CollegeSathi 2026. All Rights Reserved.
          </div>
        </div>
      </div>

      <div
        className={styles.floatingButton}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        CS
      </div>
    </footer>
  );
};

export default Footer;
