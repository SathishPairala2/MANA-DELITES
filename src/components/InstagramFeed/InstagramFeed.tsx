import React from 'react';
import Image from 'next/image';
import styles from './InstagramFeed.module.css';

const InstagramFeed = () => {
  // Using placeholders for Instagram images
  const posts = [
    { id: 1, image: '/images/hero.png', alt: 'Millet snacks prep' },
    { id: 2, image: '/images/pickles.png', alt: 'Fresh pickle jars' },
    { id: 3, image: '/images/farm.png', alt: 'Organic millet farm' },
    { id: 4, image: '/images/pickles.png', alt: 'Traditional spices' },
    { id: 5, image: '/images/hero.png', alt: 'Healthy snack box' },
    { id: 6, image: '/images/farm.png', alt: 'Harvesting millets' },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.instaTitle}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <h2>Follow Our Journey</h2>
          </div>
          <a href="https://www.instagram.com/mana_delites" target="_blank" rel="noopener noreferrer" className={styles.handle}>
            @mana_delites
          </a>
        </div>
        
        <div className={styles.grid}>
          {posts.map(post => (
            <div key={post.id} className={styles.postCard}>
              <Image 
                src={post.image} 
                alt={post.alt} 
                fill 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>❤ 245</span>
                <span>💬 18</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
