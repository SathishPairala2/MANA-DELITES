'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const slides = [
  {
    image: '/images/hero.png',
    preTitle: 'Purely Homemade • 100% Natural',
    title: 'Healthy Homemade',
    highlight: 'Millet Snacks',
    tagline: 'Taste Tradition, Eat Healthy. Bring the authentic flavor of traditional recipes to your daily snacking.',
    primaryCTA: 'Shop Our Snacks',
    secondaryCTA: 'Our Tradition',
    link: '/products'
  },
  {
    image: '/images/pickles.png',
    preTitle: 'Traditional Recipes • Hand-Pounded',
    title: 'Authentic Organic',
    highlight: 'Natural Pickles',
    tagline: 'No preservatives, only pure flavor. Crafted with sun-dried ingredients and cold-pressed oils.',
    primaryCTA: 'Explore Pickles',
    secondaryCTA: 'Our Process',
    link: '/products'
  },
  {
    image: '/images/farm.png',
    preTitle: 'Directly From Farm • Sustainably Grown',
    title: 'The Goodness of',
    highlight: 'Native Millets',
    tagline: 'Nutrient-dense superfoods grown with care. Support local farmers and fuel your family right.',
    primaryCTA: 'Why Millets?',
    secondaryCTA: 'Shop All',
    link: '/about'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`${styles.imageContainer} ${index === currentSlide ? styles.active : ''}`}
        >
          <div className={styles.overlay}></div>
          <Image 
            src={slide.image} 
            alt={slide.title} 
            fill 
            priority={index === 0}
            className={styles.heroImage}
          />
        </div>
      ))}

      <div className={styles.content}>
        <div className={styles.container}>
          <div key={currentSlide} className={styles.slideAnimationWrapper}>
            <p className={styles.preTitle}>{slides[currentSlide].preTitle}</p>
            <h1 className={styles.title}>
              {slides[currentSlide].title} <span className={styles.highlight}>{slides[currentSlide].highlight}</span>
            </h1>
            <p className={styles.tagline}>{slides[currentSlide].tagline}</p>
            <div className={styles.ctaGroup}>
              <a href={slides[currentSlide].link} className={styles.primaryBtn}>{slides[currentSlide].primaryCTA}</a>
              <a href="/about" className={styles.secondaryBtn}>{slides[currentSlide].secondaryCTA}</a>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Organic Millets</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Zero</span>
              <span className={styles.statLabel}>Preservatives</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Homemade Recipes</span>
            </div>
          </div>

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button 
                key={index} 
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

