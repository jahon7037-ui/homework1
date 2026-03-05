import React from 'react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>Interesting Collaboration With Us?</h2>
          <p className={styles.subtitle}>Help you to reach your business goal</p>
          <button className={styles.btn}>Get Started</button>
        </div>

        <div className={styles.right}>
          <div className={styles.dotsDeco} />
          <div className={styles.imgGrid}>
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80"
              alt="Collaboration"
              className={styles.imgMain}
            />
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
              alt="Team meeting"
              className={styles.imgSecond}
            />
          </div>
          <div className={styles.dotsDecoOrange} />
        </div>
      </div>
    </section>
  );
}
