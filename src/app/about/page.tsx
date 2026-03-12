import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Our Story & Tradition</h1>
          <p className={styles.subtitle}>From a small kitchen to Your healthy home table.</p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.textContent}>
              <h2>Roots of <span className={styles.highlight}>Mana Delites</span></h2>
              <p>
                Mana Delites was born from a simple desire: to bring back the wholesome, traditional snacks we grew up with. In an era of processed foods and preservatives, we wanted to revive the authentic taste of homemade millet snacks and sun-dried pickles.
              </p>
              <p>
                Every product we sell is made using recipes passed down through generations. We source our millets directly from organic farmers, ensuring that every bite you take is packed with nutrition and the warmth of a homemade meal.
              </p>
              <div className={styles.values}>
                <div className={styles.valueItem}>
                  <strong>Tradition</strong>
                  <p>Authentic recipes from mother's kitchen.</p>
                </div>
                <div className={styles.valueItem}>
                  <strong>Purity</strong>
                  <p>100% natural ingredients, zero preservatives.</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <div className={styles.imgWrapper}>
                <Image 
                  src="/images/farm.png" 
                  alt="Traditional Cooking" 
                  width={600} 
                  height={500} 
                  className={styles.storyImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.milletFocus}>
        <div className="container">
          <div className={styles.focusHeader}>
            <h2 className={styles.focusTitle}>Why Millets?</h2>
            <p>Millets are not just grains; they are a legacy of health and sustainability.</p>
          </div>
          <div className={styles.focusGrid}>
            <div className={styles.focusItem}>
              <h3>Health First</h3>
              <p>Rich in proteins, minerals, and vitamins. Ideal for fitness enthusiasts and families.</p>
            </div>
            <div className={styles.focusItem}>
              <h3>Eco-Friendly</h3>
              <p>Requires 70% less water than rice or wheat. Good for the planet, good for you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
