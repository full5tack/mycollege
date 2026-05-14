import React from 'react';
import { User, BookOpen, Phone, MessageCircle } from 'lucide-react';
import styles from './EnquiryForm.module.scss';

const EnquiryForm = () => {
  return (
    <section className={styles.enquirySection}>
      <div className={styles.container}>
        {/* Top Heading Section */}
        <div className={styles.topHeader}>
          <div className={styles.expertIcon}>
            <img src="/logo.png" alt="Expert" />
          </div>
          <h2>
            Take <strong>FREE</strong> Counselling from Our Experts in <span className={styles.highlight}>Just 30 Seconds!</span>
          </h2>
        </div>

        <div className={styles.mainWrapper}>
          {/* Left Visual Side */}
          <div className={styles.visualSide}>
            <div className={styles.imageContainer}>
              <img src="/university_campus_hero.png" alt="Campus" className={styles.campusImg} />
              <img src="/university_library_slider.png" alt="Expert" className={styles.expertImg} />


            </div>
          </div>

          {/* Right Form Side */}
          <div className={styles.formSide}>
            <div className={styles.formCard}>
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <User size={18} className={styles.icon} />
                  <input suppressHydrationWarning type="text" placeholder="Your Name" />
                </div>

                <div className={styles.inputGroup}>
                  <BookOpen size={18} className={styles.icon} />
                  <input suppressHydrationWarning type="text" placeholder="Specialization" />
                </div>

                <div className={styles.phoneGroup}>
                  <div className={styles.flagPart}>
                    <img src="https://flagcdn.com/w20/in.png" alt="India" className={styles.flag} />
                    <span>+91</span>
                    {/* <span className={styles.arrow}>▼</span> */}
                  </div>
                  <Phone size={18} className={styles.icon} />
                  <input suppressHydrationWarning type="tel" placeholder="Mobile Number" />
                </div>

                <button suppressHydrationWarning type="submit" className={styles.btnContinue}>
                  Continue
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.btnArrow}
                  >
                    <path d="M4 12s4-3 14 0" />
                    <path d="M14 6s2.5 4.5 5 6-3 5-6 6" />
                  </svg>
                </button>

                <p className={styles.skipText}>Skip the form, get instant reply</p>

                <button type="button" className={styles.btnWhatsapp}>
                  <MessageCircle size={18} className={styles.wsIcon} />
                  Talk to Us on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
