"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Hero.module.scss';

const Hero = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.whiteCard}>
          <div className={styles.mainGrid}>
            <div className={styles.textSide}>
              <div className={styles.nirfBadge}>
                <div className={styles.nirfIconWrapper}>
                  <img src="/nirf.png" alt="NIRF" />
                </div>
                <span>NIRF 22<sup>nd</sup> Ranked by NIRF</span>
              </div>

              <h1 className={styles.title}>Amity Online MBA</h1>
              <p className={styles.description}>
                Upgrade your business skills with an MBA you can pursue
                anytime, anywhere, without putting your commitments on hold.
              </p>

              <div className={styles.verified}>
                <span className={styles.checkCircle}>✓</span>
                <span>CollegeSathi Verified</span>
              </div>

              <div className={styles.linksRow}>
                <button
                  className={styles.btnScholarship}
                  onClick={() => document.getElementById('scholarships')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Early Bird Scholarship ➔
                </button>
                <div className={styles.divider}></div>
                <a href="#">Placement Insights</a>
                <div className={styles.divider}></div>
                <a href="#">Compare Now</a>
              </div>

              <div className={styles.recognition}>
                <span className={styles.recText}>Globally Recognised Degrees ➔</span>
                <div className={styles.recIcons}>
                  <img src="/image 216.png" alt="Recognition" />
                  <img src="/image 219.png" alt="Recognition" />
                  <img src="/image 220.png" alt="Recognition" />
                  <img src="/image 225.png" alt="Recognition" />
                </div>
              </div>

              <div className={styles.ctaGroup}>
                <button className={styles.btnApply}>Apply for Admissions &gt;</button>
                <button className={styles.btnSyllabus}>Download Syllabus</button>
              </div>
            </div>

            <div className={styles.sliderSide}>
              <div className={styles.sliderContainer}>
                <div className={styles.amityLogo}>
                  <img src="/logo.png" alt="Amity Logo" />
                </div>

                <Swiper
                  modules={[Pagination, Autoplay, Navigation, EffectCards]}
                  effect="cards"
                  grabCursor={true}
                  cardsEffect={{
                    slideShadows: true,
                    rotate: true,
                    perSlideRotate: 15, /* Added strong angles to look like an open book */
                    perSlideOffset: 12  /* Adds depth between the "pages" */
                  }}
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={500} /* Added for faster page turn transition */
                  pagination={{
                    clickable: true,
                    el: `.${styles.customPagination}`
                  }}
                  autoplay={{ delay: 1800, disableOnInteraction: false }}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  className={styles.heroSwiper}
                >
                  <SwiperSlide>
                    <img src="/u1.png" alt="Campus" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/university_library_slider.png" alt="Library" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/university_campus_hero.png" alt="Library" />
                  </SwiperSlide><SwiperSlide>
                    <img src="/university_library_slider.png" alt="Library" />
                  </SwiperSlide>
                </Swiper>

                <div className={styles.ratingCard}>
                  <div className={styles.starIcon}>⭐</div>
                  <div className={styles.ratingText}>
                    <strong>4.1/5</strong>
                    <span>(1440 Reviews)</span>
                  </div>
                </div>
              </div>

              <div className={styles.sliderControls}>
                <div className={styles.customPagination}></div>
                <div className={styles.navArrows}>
                  <button suppressHydrationWarning onClick={() => swiperRef.current?.slidePrev()}>
                    <ChevronLeft size={24} />
                  </button>
                  <button suppressHydrationWarning onClick={() => swiperRef.current?.slideNext()}>
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
