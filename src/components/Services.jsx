import React from 'react';
import styles from './Services.module.css';

const services = [
  { icon: '🖥', label: 'Social Media\nManagement', color: '#2563EB' },
  { icon: '⚙️', label: 'Search Engine\nOpimization', color: '#EF4444' },
  { icon: '✏️', label: 'Design', color: '#22C55E' },
  { icon: '📺', label: 'Ads', color: '#F97316' },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.sectionLabel}>Our Services</div>
          <h2 className={styles.title}>Perfect and Fast Movement</h2>
          <p className={styles.text}>
            We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
          </p>
          <a href="#" className={styles.readMore}>Read more →</a>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap} style={{ background: s.color }}>
                <span className={styles.icon}>{s.icon}</span>
              </div>
              <div className={styles.cardLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
