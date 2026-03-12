'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogDetail.module.css';

const blogPosts = [
  {
    id: '1',
    title: 'The Hidden Health Benefits of Finger Millet (Ragi)',
    category: 'Healthy Eating',
    content: `
      <p>Finger millet, popularly known as Ragi in India, is one of the most nutritious grains available. It has been a staple in traditional Indian diets for centuries, especially in southern India. At Mana Delites, we prioritize Ragi in many of our homemade snacks because of its incredible health profile.</p>
      
      <h3>1. Rich in Calcium</h3>
      <p>Ragi has the highest calcium content among all cereals. It is essential for bone health and preventing osteoporosis, making it an excellent food for growing children and aging adults.</p>
      
      <h3>2. Helps in Weight Management</h3>
      <p>The high fiber content in Ragi keeps you full for longer, reducing cravings and helping in weight loss. It also contains an amino acid called Tryptophan, which reduces appetite.</p>
      
      <h3>3. Diabetes Friendly</h3>
      <p>Ragi has a low glycemic index and is rich in magnesium, which helps in managing blood sugar levels. It is a much better alternative to processed white rice or wheat.</p>
      
      <h3>4. Natural Iron Source</h3>
      <p>Regular consumption of Ragi helps in increasing hemoglobin levels, making it a natural remedy for anemia.</p>
      
      <p>Incorporating Ragi into your daily diet doesn't have to be boring. From our crispy Ragi snacks to traditional Ragi laddus, there are many ways to enjoy this superfood!</p>
    `,
    image: '/images/farm.png',
    date: 'March 10, 2026',
    author: 'Mana Delites Kitchen'
  }
];

const BlogDetail = () => {
  const params = useParams();
  const post = blogPosts.find(p => p.id === params.id) || blogPosts[0]; // Fallback to first for demo

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.date}>{post.date}</span>
          </div>
          <h1>{post.title}</h1>
          <div className={styles.author}>By {post.author}</div>
        </div>

        <div className={styles.featuredImg}>
          <Image src={post.image} alt={post.title} fill className={styles.image} />
        </div>

        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className={styles.footer}>
            <h3>Enjoyed this article?</h3>
            <p>Share it with your health-conscious friends or try our Ragi-based snacks today!</p>
            <div className={styles.cta}>
              <Link href="/products" className={styles.shopBtn}>Shop Ragi Snacks</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
