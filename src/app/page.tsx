import Hero from '../components/Hero/Hero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import WhyMillets from '../components/WhyMillets/WhyMillets';
import Reviews from '../components/Reviews/Reviews';
import InstagramFeed from '../components/InstagramFeed/InstagramFeed';
import Newsletter from '../components/Newsletter/Newsletter';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <FeaturedProducts />
      <WhyMillets />
      <Reviews />
      <InstagramFeed />
      <Newsletter />
    </main>
  );
}
