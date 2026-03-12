import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/images/logo.png" 
                alt="Mana Delites Logo" 
                width={100} 
                height={100} 
                className={styles.footerLogoImg}
              />
            </Link>

            <p className={styles.description}>
              Bringing traditional homemade millet snacks and natural pickles from our kitchen to your home. Healthy, organic, and preservative-free.
            </p>

            <div className={styles.socials}>
              <a href="https://www.instagram.com/mana_delites" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://youtube.com/@manadelites" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4>Shop</h4>
            <ul>
              <li><Link href="/products/millet-snacks">Millet Snacks</Link></li>
              <li><Link href="/products/traditional-pickles">Traditional Pickles</Link></li>
              <li><Link href="/products/gift-combos">Healthy Combos</Link></li>
              <li><Link href="/products/new-arrivals">New Arrivals</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4>Information</h4>
            <ul>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/blog">Health Benefits</Link></li>
              <li><Link href="/shipping">Shipping Policy</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.newsletterCol}>
            <h4>Stay Healthy</h4>
            <p>Subscribe for recipes, health tips, and exclusive offers.</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Mana Delites. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
