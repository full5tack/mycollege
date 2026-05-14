"use client";

import { GraduationCap, Briefcase, TrendingUp, Rocket, ArrowUpRight, Sparkles } from 'lucide-react';
import styles from './Placements.module.scss';

const Placements = () => {
  const roles = [
    { title: "Management Consultant", salary: "₹5-₹6 LPA", growth: "+15% YoY", icon: <Briefcase size={24} /> },
    { title: "Financial Analyst", salary: "₹8-₹10 LPA", growth: "+18% YoY", icon: <TrendingUp size={24} /> },
    { title: "Marketing Manager", salary: "₹7-₹10 LPA", growth: "+22% YoY", icon: <TrendingUp size={24} /> },
    { title: "Business Development Manager", salary: "₹6-₹9 LPA", growth: "+26% YoY", icon: <Rocket size={24} /> },
  ];

  // Dummy logos for the slider
  const logos = [
    "/image 124.png",
    "/image 131.png",
    "/image 132.png",
    "/image 133.png",
    "/image 134.png",
    "/image 140.png",
    "/image 146.png",
    "/image 147.png",
    "/image 150.png",
    "/image 239.png",
    "/image 257.png",
  ];
  return (
    <section id="placements" className={styles.placementsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <GraduationCap size={16} className={styles.icon} /> Placements & Careers
          </div>
          <h2>Amity Online Placement 2026: <br />Jobs, Salaries & Hiring Partners</h2>
        </div>

        <div className={styles.mainGrid}>
          {/* Left Highlights Card */}
          <div className={styles.highlightsCard}>
            <h3>Placement Highlights</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <strong>450+</strong>
                <span>Hiring Partners</span>
              </div>
              <div className={styles.statBox}>
                <strong>1 Lac+</strong>
                <span>Jobs Created</span>
              </div>
              <div className={styles.statBox}>
                <strong>100%</strong>
                <span>Placement Assistance</span>
              </div>
            </div>
            <button className={styles.btnGuidance}>
              Get Placement Guidance <ArrowUpRight size={20} className={styles.arrow} />
            </button>
          </div>

          {/* Right Roles List */}
          <div className={styles.rolesList}>
            {roles.map((role, index) => (
              <div key={index} className={styles.roleCard}>
                <div className={styles.roleIcon}>{role.icon}</div>
                <div className={styles.roleInfo}>
                  <h4>{role.title}</h4>
                  <span>Annual Average Salary</span>
                </div>
                <div className={styles.roleStats}>
                  <div className={styles.growth}>{role.growth}</div>
                  <div className={styles.salary}>{role.salary}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Slider */}
        <div className={styles.logoSliderWrapper}>
          <div className={styles.logoTrack}>
            {logos.map((logo, i) => (
              <div key={i} className={styles.logoItem}>
                <img src={logo} alt="Partner Logo" />
              </div>
            ))}
            {/* Duplicate for infinite effect */}
            {logos.map((logo, i) => (
              <div key={`dup-${i}`} className={styles.logoItem}>
                <img src={logo} alt="Partner Logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.aiBadge}>
            <Sparkles size={24} className={styles.aiIcon} />
            <span>AI-Driven Tool</span>
          </div>
          <div className={styles.ctaText}>
            <h3>Want a smarter way to choose?</h3>
            <p>Use ClikPick, your AI-driven comparison guide to find your best-fit course based on your goals and career plans.</p>
          </div>
          <button className={styles.btnDecide}>Help me decide!</button>
        </div>
      </div>
    </section>
  );
};

export default Placements;
