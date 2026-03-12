'use client';

import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './Products.module.css';

const ProductsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Millet Snacks', 'Traditional Pickles', 'Healthy Snack Combos'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>All <span className={styles.highlight}>Products</span></h1>
          <p className={styles.subtitle}>Explore our range of traditional homemade healthy food.</p>
        </div>
      </header>

      <section className={styles.main}>
        <div className="container">
          <div className={styles.filterBar}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
