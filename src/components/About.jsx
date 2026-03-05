import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>About Us</div>
        <h2 className={styles.title}>Our Teammate</h2>

        <div className={styles.grid}>
          <div className={styles.imgWrapper}>
            <div className={styles.dotsOrange} />
            <div className={styles.dotsPink} />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80"
              alt="Our team"
              className={styles.img}
            />
          </div>

          <div className={styles.textCol}>
            <p className={styles.text}>
              We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
            </p>
            <p className={styles.text}>
              We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
            </p>
            <div className={styles.btnRow}>
              <button className={styles.btnPrimary}>About Us</button>
              <button className={styles.btnOutline}>
                <span className={styles.playIcon}>▶</span> Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
