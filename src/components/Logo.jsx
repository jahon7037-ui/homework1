import React from 'react';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" fill="url(#logoGrad)" />
        <path d="M20 10L29 15V25L20 30L11 25V15L20 10Z" fill="white" fillOpacity="0.3" />
        <path d="M20 16L24 18.5V23.5L20 26L16 23.5V18.5L20 16Z" fill="white" fillOpacity="0.6" />
        <defs>
          <linearGradient id="logoGrad" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <div className={styles.name}>Agency</div>
        <div className={styles.sub}>Creative</div>
      </div>
    </div>
  );
}
