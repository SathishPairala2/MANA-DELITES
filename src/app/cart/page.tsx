'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './Cart.module.css';

const CartPage = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.empty}>
        <div className="container">
          <h2>Your cart is empty</h2>
          <p>Treat yourself with some healthy tradition.</p>
          <Link href="/products" className={styles.shopBtn}>Explore Snacks</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Your <span className={styles.highlight}>Shopping Bag</span></h1>
        
        <div className={styles.grid}>
          <div className={styles.cartItems}>
            {cart.map(item => (
              <div key={item.id} className={styles.item}>
                <div className={styles.imgWrapper}>
                  <Image src={item.image} alt={item.name} fill className={styles.image} />
                </div>
                <div className={styles.itemInfo}>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                <div className={styles.quantity}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className={styles.price}>
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h3>Order Summary</h3>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            <Link href="/checkout" className={styles.checkoutBtn}>
              Proceed to Checkout
            </Link>
            <div className={styles.paymentIcons}>
              <p>Secure Checkout with UPI • COD • Cards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
