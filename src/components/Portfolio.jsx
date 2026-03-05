import React from 'react';
import styles from './Portfolio.module.css';

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    label: 'Design Byte App'
  },
  {
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    label: 'Cloud App'
  },
  {
    img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80',
    label: 'Design Furniture App'
  },
];

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.dotsDecor} />
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>Our Portfolio</div>
        <h2 className={styles.title}>What do we do</h2>
        <p className={styles.subtitle}>
          all projects that we have already done , proven can help to use more<br />
          comfortable, then can used by client from our business
        </p>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={`${styles.card} ${i === 1 ? styles.cardCenter : ''}`}>
              <img src={p.img} alt={p.label} className={styles.img} />
              <div className={styles.label}>{p.label}</div>
            </div>
          ))}
        </div>

        <button className={styles.seeAll}>See All Portfolio</button>
      </div>
    </section>
  );
}
