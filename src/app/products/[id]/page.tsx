'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { products, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const params = useParams();
  const product = products.find(p => p.id === params.id) as Product;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className={styles.notFound}>Product not found</div>;

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imgWrapper}>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.contentCol}>
            <div className={styles.breadcrumb}>
              <a href="/products">Products</a> / {product.category}
            </div>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty}>★</span>
              ))}
              <span className={styles.reviewCount}>({product.reviews} customer reviews)</span>
            </div>
            <p className={styles.price}>₹{product.price}</p>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.meta_box}>
              <div className={styles.meta_item}>
                <strong>Ingredients:</strong>
                <p>{product.ingredients.join(', ')}</p>
              </div>
              <div className={styles.meta_item}>
                <strong>Health Benefits:</strong>
                <ul className={styles.benefitList}>
                  {product.healthBenefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.purchaseBox}>
              <div className={styles.quantity}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button 
                className={styles.addBtn}
                onClick={() => addToCart(product, quantity)}
              >
                Add to Cart
              </button>
            </div>

            <div className={styles.footer_meta}>
              <p><span>Category:</span> {product.category}</p>
              <p><span>Tags:</span> Homemade, Healthy, Organic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
