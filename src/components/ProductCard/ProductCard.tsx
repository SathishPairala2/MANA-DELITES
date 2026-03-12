'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={product.image} 
          alt={product.name} 
          width={300} 
          height={350} 
          className={styles.image}
        />
        <div className={styles.badge}>{product.category}</div>
        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className={styles.cartBtn} onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
      <Link href={`/products/${product.id}`} className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.meta}>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span>{product.rating} ({product.reviews})</span>
          </div>
          <p className={styles.price}>₹{product.price}</p>
        </div>
      </Link>
    </div>
  );
};


export default ProductCard;
