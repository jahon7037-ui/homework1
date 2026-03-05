import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from './Logo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Logo />
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#home" className={styles.active}>Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Projects</a></li>
        </ul>
        <button className={styles.contactBtn}>Contact us</button>
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
