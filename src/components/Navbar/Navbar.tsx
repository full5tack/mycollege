"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Phone, Search, Menu, X, Sparkles } from 'lucide-react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/Group.png"
            alt="CollegeSathi Logo"
            className={styles.logoImg}
          />
        </div>

        {/* Overlay */}
        <div
          className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayVisible : ''
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Sidebar */}
        <div
          ref={menuRef}
          className={`${styles.navLinksWrapper} ${isMobileMenuOpen ? styles.mobileActive : ''
            }`}
        >
          <ul className={styles.navLinks}>
            <li>
              <a
                href="#programs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Programs
              </a>
            </li>

            <li>
              <a
                href="#universities"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Top Universities
              </a>
            </li>

            <li className={styles.clikpick}>
              <a
                href="#clikpick"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className={styles.aiBadge}>AI-Mode</div>
                <Sparkles size={14} className={styles.sparkleIcon} />
                ClikPick
              </a>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.btnTalk}>
            <Phone size={16} />
            <span className={styles.btnText}>Talk to Expert</span>
          </button>

          <button className={styles.btnSearch} aria-label="Search">
            <Search size={16} />
            <span className={styles.btnText}>Search</span>
          </button>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;