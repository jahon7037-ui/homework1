import React from 'react';
import styles from './Footer.module.css';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <Logo />
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Terms & policies</h4>
          <ul className={styles.list}>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.list}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.list}>
            <li>(+62) 893912392190</li>
            <li>agecnycr@gmail.com</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Location</h4>
          <ul className={styles.list}>
            <li>PT Osiris Real Estate Internasional</li>
            <li>Jl. KH. Wahid Hasyim Kel No.10D</li>
            <li>Jakarta, Indonesia</li>
            <li>team@OsirisRealEstate.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
