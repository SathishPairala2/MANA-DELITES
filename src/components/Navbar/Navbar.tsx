'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/logo.png" 
            alt="Mana Delites Logo" 
            width={120} 
            height={120} 
            className={styles.logoImg}
            priority
          />
        </Link>



        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <div className={styles.dropdown}>
            <Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <div className={styles.dropdownContent}>
              <Link href="/products/millet-snacks">Millet Snacks</Link>
              <Link href="/products/traditional-pickles">Traditional Pickles</Link>
              <Link href="/products/gift-combos">Snack Combos</Link>
            </div>
          </div>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <Link href="/cart" className={styles.cartBtn}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className={styles.cartCount}>{cartCount}</span>
          </Link>
          <button 
            className={styles.mobileToggle} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
