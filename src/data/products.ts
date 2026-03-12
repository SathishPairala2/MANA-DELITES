export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  ingredients: string[];
  healthBenefits: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: 'millet-laddu-1',
    name: 'Millet Energy Laddus',
    price: 349,
    category: 'Millet Snacks',
    image: '/images/hero.png', // Reusing hero for now, will generate more
    rating: 4.8,
    reviews: 124,
    ingredients: ['Ragi', 'Jaggery', 'Ghee', 'Dry Fruits'],
    healthBenefits: ['Rich in Calcium', 'Iron Booster', 'Energy Rich'],
    description: 'Traditional homemade laddus made with nutrient-rich ragi and organic jaggery. Perfect for healthy snacking.'
  },
  {
    id: 'spicy-mango-pickle',
    name: 'Traditional Mango Pickle',
    price: 249,
    category: 'Traditional Pickles',
    image: '/images/pickles.png',
    rating: 4.9,
    reviews: 89,
    ingredients: ['Raw Mango', 'Cold Pressed Oil', 'Hand-ground Spices'],
    healthBenefits: ['Probiotic Rich', 'Aids Digestion'],
    description: 'Grandma\'s secret recipe. Sun-dried mangoes marinated in cold-pressed oil and aromatic spices.'
  },
  {
    id: 'millet-murukku-1',
    name: 'Millet Crunchy Murukku',
    price: 199,
    category: 'Millet Snacks',
    image: '/images/hero.png',
    rating: 4.7,
    reviews: 56,
    ingredients: ['Foxtail Millet', 'Gram Flour', 'Sesame Seeds'],
    healthBenefits: ['Gluten Free', 'High Fiber'],
    description: 'Crispy, crunchy, and surprisingly healthy. Made with premium foxtail millet and no preservatives.'
  },
  {
    id: 'lemon-pickle-1',
    name: 'Zesty Lemon Pickle',
    price: 189,
    category: 'Traditional Pickles',
    image: '/images/pickles.png',
    rating: 4.6,
    reviews: 42,
    ingredients: ['Fresh Lemons', 'Salt', 'Spices'],
    healthBenefits: ['Vitamin C Rich', 'Zero Oil'],
    description: 'A tangy oil-free pickle that gets better with age. Perfect accompaniment for traditional meals.'
  }
];
