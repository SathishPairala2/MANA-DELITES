import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { CartProvider } from '@/context/CartContext';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mana Delites | Healthy Homemade Millet Snacks & Pickles',
  description: 'Taste Tradition, Eat Healthy. Traditional millet snacks and homemade pickles made with organic ingredients.',
  keywords: 'Healthy Millet Snacks, Homemade Pickles, Organic Snacks India, Traditional Healthy Snacks, Mana Delites',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

