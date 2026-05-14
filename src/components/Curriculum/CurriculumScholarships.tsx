import React, { useState } from 'react';
import { Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Curriculum.module.scss';
import Image from 'next/image';

const CurriculumScholarships = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className={styles.scholarshipsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>
            Scholarships & Financial Benefits for<br/>
            Amity Online <span className={styles.underlineRed}>MBA Learners</span>
          </h2>
        </div>

        <div className={styles.scholarshipContent}>
          <div className={styles.leftCol}>
            <div className={styles.mainImageWrapper}>
              <div className={styles.redBgPattern}></div>
              <Image 
                src={images[activeImage]} 
                alt="Students studying" 
                width={600} 
                height={350} 
                className={styles.mainImage}
              />
            </div>
            
            <div className={styles.thumbnailSlider}>
              <button className={styles.navButton} onClick={() => setActiveImage(prev => prev > 0 ? prev - 1 : images.length - 1)}>
                <ChevronLeft size={20} />
              </button>
              <div className={styles.thumbnails}>
                {images.map((img, index) => (
                  <div 
                    key={index} 
                    className={`${styles.thumbnail} ${activeImage === index ? styles.active : ''}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image src={img} alt={`Thumbnail ${index + 1}`} width={120} height={80} />
                  </div>
                ))}
              </div>
              <button className={styles.navButton} onClick={() => setActiveImage(prev => prev < images.length - 1 ? prev + 1 : 0)}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.scholarshipCard}>
              <div className={styles.badgeTopRight}>#Every Learner Matters</div>
              
              <h3>Divyaang (for Learners with special needs)</h3>
              
              <div className={styles.eligibilityBadge}>Eligibility Criteria</div>
              
              <p className={styles.description}>
                Applicants are required to submit a valid certificate of disability issued by a recognized authority in accordance with government norms.
              </p>
              
              <div className={styles.cardFooter}>
                <span>Claim your<br/>scholarship today!</span>
                <button className={styles.unlockBtn}>
                  <Lock size={16} /> Unlock Benefits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumScholarships;
