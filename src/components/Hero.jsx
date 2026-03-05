import React, { useState } from 'react';
import styles from './Hero.module.css';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    alt: 'Team working together'
  },
  {
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    alt: 'Business meeting'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  return (
    <section className={styles.hero} id="home">
      {/* Decorative dots */}
      <div className={`${styles.dot} ${styles.dotBlueLeft}`} />
      <div className={`${styles.dot} ${styles.dotRedLeft}`} />
      <div className={`${styles.dot} ${styles.dotBlueRight}`} />

      <div className={styles.content}>
        <h1 className={styles.title}>Make your dream<br />business goal come true</h1>
        <p className={styles.subtitle}>
          when you need us for improve your business,<br />
          then come with us to help your business have reach it, you just sit and feel that goal
        </p>
        <button className={styles.cta}>Start Project</button>
      </div>

      {/* Slider dots */}
      <div className={styles.sliderDots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.sliderDot} ${i === current ? styles.sliderDotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.badge}>
          <span className={styles.star}>⭐</span>
          <div>
            <div className={styles.badgeLabel}>GREAT PROJECT</div>
            <div className={styles.badgeCount}><strong>800+</strong> Done</div>
          </div>
        </div>

        <div className={styles.slider}>
          <img
            src={slides[current].img}
            alt={slides[current].alt}
            className={styles.slideImg}
          />
          <div className={styles.sliderControls}>
            <button onClick={() => setCurrent(Math.max(0, current - 1))} className={styles.arrowBtn}>‹</button>
            <span className={styles.slideCount}>{current + 1} / {slides.length}</span>
            <button onClick={() => setCurrent(Math.min(slides.length - 1, current + 1))} className={styles.arrowBtn}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
