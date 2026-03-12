import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './FeaturedProducts.module.css';

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Taste Our <span className={styles.highlight}>Tradition</span></h2>
          <p className={styles.subtitle}>Our most loved homemade snacks and traditional pickles, prepared with care and natural ingredients.</p>
        </div>
        
        <div className={styles.grid}>
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className={styles.footer}>
          <a href="/products" className={styles.viewAll}>View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
