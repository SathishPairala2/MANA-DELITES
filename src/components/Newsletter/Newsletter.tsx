'use client';

import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <h2>Join the <span className={styles.highlight}>Healthy Family</span></h2>
            <p>Get traditional recipes, health tips, and exclusive offers delivered to your inbox.</p>
          </div>
          <div className={styles.formWrapper}>
            {!subscribed ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit">Subscribe</button>
              </form>
            ) : (
              <div className={styles.success}>
                <p>Welcome to the family! Check your inbox soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
