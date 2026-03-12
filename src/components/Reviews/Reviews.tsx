import React from 'react';
import styles from './Reviews.module.css';

const Reviews = () => {
  const reviews = [
    {
      name: 'Priya Sharma',
      location: 'Hyderabad',
      text: 'The millet laddus are absolutely divine! They taste just like the ones my grandmother used to make. So glad I found a healthy alternative that doesnt compromise on taste.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      text: 'Their mango pickle is the best I have ever had. The quality of oil and spices used is evident. No preservatives makes it even better for my family.',
      rating: 5
    },
    {
      name: 'Anjali Reddy',
      location: 'Chennai',
      text: 'I started ordering the monthly snack box for my kids, and they love the millet murukku. It\'s a relief for me as a parent to give them something nutritious.',
      rating: 5
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our <span className={styles.highlight}>Community</span> Says</h2>
          <p className={styles.subtitle}>Join thousands of families who have chosen healthy tradition over processed snacks.</p>
        </div>
        
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.rating}>
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.author}>
                <strong>{review.name}</strong>
                <span>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
