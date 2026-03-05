import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  { name: 'Angel Rose', role: 'Creative Manager', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
  { name: 'Angel Rose', role: 'Creative Manager', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
  { name: 'Angel Rose', role: 'Creative Manager', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.dotsLeft} />
      <div className={styles.dotsRight} />
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>Testimonial</div>
        <h2 className={styles.title}>People Talk about us</h2>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.person}>
                <img src={t.img} alt={t.name} className={styles.avatar} />
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
              <p className={styles.quote}>
                There are many variations passages of Lorem Ipsum majority some by words which don't look .
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
