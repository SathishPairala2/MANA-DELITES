'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Blog.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Hidden Health Benefits of Finger Millet (Ragi)',
    category: 'Healthy Eating',
    excerpt: 'Discover why Ragi is considered a superfood and how it can improve your bone health and digestion.',
    image: '/images/farm.png',
    date: 'March 10, 2026'
  },
  {
    id: 2,
    title: 'Grandma’s Secrets: Traditional Pickle Preservation',
    category: 'Recipes',
    excerpt: 'Learn the ancient techniques of natural preservation without using chemical preservatives.',
    image: '/images/pickles.png',
    date: 'March 5, 2026'
  },
  {
    id: 3,
    title: '5 Healthy Millet Snacks to Boost Your Energy',
    category: 'Fitness',
    excerpt: 'Swap your processed chips with these nutrient-dense millet crunchies for sustained energy.',
    image: '/images/hero.png',
    date: 'Feb 28, 2026'
  }
];

const BlogPage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Healthy <span className={styles.highlight}>Insights</span></h1>
          <p className={styles.subtitle}>Our journal on traditional wisdom, healthy recipes, and organic living.</p>
        </div>
      </header>

      <section className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map(post => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.imgWrapper}>
                  <Image src={post.image} alt={post.title} fill className={styles.image} />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className={styles.readMore}>Read Article</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
