'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './Checkout.module.css';

const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className={styles.success}>
        <div className="container">
          <div className={styles.successIcon}>✓</div>
          <h2>Order Successfully Placed!</h2>
          <p>Thank you for choosing Mana Delites. Your healthy treats are on the way.</p>
          <div className={styles.orderId}>Order ID: #MD-{Math.floor(Math.random() * 100000)}</div>
          <a href="/products" className={styles.btn}>Continue Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Secure <span className={styles.highlight}>Checkout</span></h1>
        
        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleOrder}>
            <section className={styles.sectionHeader}>
              <h3>Shipping Details</h3>
              <div className={styles.formGrid}>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="Email" required className={styles.fullWidth} />
                <input type="text" placeholder="Address" required className={styles.fullWidth} />
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="Pincode" required />
                <input type="text" placeholder="Phone" required className={styles.fullWidth} />
              </div>
            </section>

            <section className={styles.sectionHeader}>
              <h3>Payment Method</h3>
              <div className={styles.paymentMethods}>
                <label className={styles.radio}>
                  <input type="radio" name="payment" defaultChecked />
                  <span>Cash on Delivery (COD)</span>
                </label>
                <label className={styles.radio}>
                  <input type="radio" name="payment" />
                  <span>Online Payment (UPI / Cards)</span>
                </label>
              </div>
            </section>

            <button type="submit" className={styles.orderBtn}>Place Order • ₹{cartTotal}</button>
          </form>

          <div className={styles.summary}>
            <h3>Your Order</h3>
            <div className={styles.items}>
              {cart.map(item => (
                <div key={item.id} className={styles.item}>
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className={styles.total}>
              <span>Total to Pay</span>
              <span>₹{cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
