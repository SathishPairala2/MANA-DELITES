import React from 'react';
import Image from 'next/image';
import styles from './WhyMillets.module.css';

const WhyMillets = () => {
  const benefits = [
    {
      title: 'Nutrient Dense',
      description: 'Wealth of vitamins, minerals, and fibers compared to mainstream grains.',
      icon: '🌾'
    },
    {
      title: 'Gluten-Free',
      description: 'Naturally gluten-free, making it perfect for sensitive stomachs and health-conscious eaters.',
      icon: '🌿'
    },
    {
      title: 'Diabetes Friendly',
      description: 'Low glycemic index helps in managing blood sugar levels effectively.',
      icon: '🍃'
    },
    {
      title: 'Sustainable',
      description: 'Millets require significantly less water and are climate-resilient crops.',
      icon: '🌎'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image 
          src="/images/farm.png" 
          alt="Millet Farm" 
          fill 
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay}></div>
      
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Why Choose <span className={styles.highlight}>Millets?</span></h2>
          <p className={styles.subtitle}>Beyond tradition, millets are the superfoods of the future. Discover why they deserve a place on your plate.</p>
          
          <div className={styles.grid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.icon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.cta}>
            <a href="/blog/millet-benefits" className={styles.learnMore}>Learn More About Millets</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMillets;
