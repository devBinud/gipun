import p1 from '../assets/images/products/1.jpeg';
import p2 from '../assets/images/products/2.jpeg';
import p3 from '../assets/images/products/3.jpeg';
import p4 from '../assets/images/products/4.jpeg';
import p5 from '../assets/images/products/5.jpeg';

export const products = [
  // Special
  { id: 1, brand: 'Gipun', name: 'Special Handwoven Set', price: '2,999', originalPrice: '4,199', discount: 28, badge: 'Special', category: 'special', image: p1 },
  { id: 2, brand: 'Gipun', name: 'Festive Collection', price: '3,499', originalPrice: '4,999', discount: 30, badge: 'Special', category: 'special', image: p2 },
  { id: 3, brand: 'Gipun', name: 'Heritage Weave', price: '4,999', originalPrice: '6,500', discount: 23, badge: 'Special', category: 'special', image: p3 },

  // Muffler
  { id: 4, brand: 'Gipun', name: 'Handwoven Muffler', price: '899', originalPrice: '1,299', discount: 30, badge: 'Best Seller', category: 'muffler', image: p4 },
  { id: 5, brand: 'Gipun', name: 'Silk Muffler', price: '1,199', originalPrice: '1,699', discount: 29, badge: 'Trending', category: 'muffler', image: p5 },
  { id: 6, brand: 'Gipun', name: 'Cotton Muffler', price: '699', originalPrice: '999', discount: 30, badge: 'New Arrival', category: 'muffler', image: p1 },

  // Customize Order
  { id: 7, brand: 'Gipun', name: 'Custom Embroidery Set', price: '3,999', originalPrice: '5,499', discount: 27, badge: 'Custom', category: 'customize-order', image: p2 },
  { id: 8, brand: 'Gipun', name: 'Personalized Stole', price: '1,499', originalPrice: '1,999', discount: 25, badge: 'Custom', category: 'customize-order', image: p3 },

  // Kids Attire
  { id: 9, brand: 'Gipun', name: 'Kids Ethnic Set', price: '699', originalPrice: '999', discount: 30, badge: 'New Arrival', category: 'kids-attire', image: p4 },
  { id: 10, brand: 'Gipun', name: 'Girls Frock', price: '549', originalPrice: '799', discount: 31, badge: 'Trending', category: 'kids-attire', image: p5 },
  { id: 11, brand: 'Gipun', name: 'Boys Kurta', price: '499', originalPrice: '699', discount: 28, badge: 'Best Seller', category: 'kids-attire', image: p1 },
  { id: 12, brand: 'Gipun', name: 'Kids Dhoti Set', price: '649', originalPrice: '899', discount: 27, badge: 'Latest Style', category: 'kids-attire', image: p2 },

  // Men's Wear
  { id: 13, brand: 'Gipun', name: "Men's Kurta", price: '1,199', originalPrice: '1,799', discount: 33, badge: 'Best Seller', category: 'mens-wear', image: p3 },
  { id: 14, brand: 'Gipun', name: 'Dhoti Kurta Set', price: '1,899', originalPrice: '2,699', discount: 29, badge: 'Trending', category: 'mens-wear', image: p4 },
  { id: 15, brand: 'Gipun', name: 'Nehru Jacket', price: '1,499', originalPrice: '2,199', discount: 31, badge: 'New Arrival', category: 'mens-wear', image: p5 },
  { id: 16, brand: 'Gipun', name: 'Linen Shirt', price: '899', originalPrice: '1,299', discount: 30, badge: 'Latest Style', category: 'mens-wear', image: p1 },

  // Unisex
  { id: 17, brand: 'Gipun', name: 'Cotton Stole', price: '449', originalPrice: '650', discount: 31, badge: 'New Arrival', category: 'unisex', image: p2 },
  { id: 18, brand: 'Gipun', name: 'Gamosa Towel', price: '349', originalPrice: '499', discount: 30, badge: 'Best Seller', category: 'unisex', image: p3 },
  { id: 19, brand: 'Gipun', name: 'Eri Silk Stole', price: '1,299', originalPrice: '1,899', discount: 31, badge: 'Trending', category: 'unisex', image: p4 },

  // Mibu Galuk
  { id: 20, brand: 'Gipun', name: 'Mibu Galuk Traditional', price: '2,199', originalPrice: '2,999', discount: 26, badge: 'Trending', category: 'mibu-galuk', image: p5 },
  { id: 21, brand: 'Gipun', name: 'Mibu Galuk Premium', price: '2,999', originalPrice: '3,999', discount: 25, badge: 'Best Seller', category: 'mibu-galuk', image: p1 },

  // Erkok
  { id: 22, brand: 'Gipun', name: 'Erkok Classic', price: '1,799', originalPrice: '2,499', discount: 28, badge: 'Latest Style', category: 'erkok', image: p2 },
  { id: 23, brand: 'Gipun', name: 'Erkok Premium', price: '2,499', originalPrice: '3,299', discount: 24, badge: 'Trending', category: 'erkok', image: p3 },

  // Mekhela Sador
  { id: 24, brand: 'Gipun', name: 'Mekhela Sador Set', price: '2,499', originalPrice: '3,500', discount: 28, badge: 'Trending', category: 'mekhela-sador', image: p4 },
  { id: 25, brand: 'Gipun', name: 'Muga Silk Mekhela', price: '4,499', originalPrice: '5,999', discount: 25, badge: 'Best Seller', category: 'mekhela-sador', image: p5 },
  { id: 26, brand: 'Gipun', name: 'Cotton Mekhela', price: '1,899', originalPrice: '2,699', discount: 29, badge: 'New Arrival', category: 'mekhela-sador', image: p1 },
];

export const categories = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'special', name: 'Special', slug: 'special' },
  { id: 'muffler', name: 'Muffler', slug: 'muffler' },
  { id: 'customize-order', name: 'Customize Order', slug: 'customize-order' },
  { id: 'kids-attire', name: 'Kids Attire', slug: 'kids-attire' },
  { id: 'mens-wear', name: "Men's Wear", slug: 'mens-wear' },
  { id: 'unisex', name: 'Unisex', slug: 'unisex' },
  { id: 'mibu-galuk', name: 'Mibu Galuk', slug: 'mibu-galuk' },
  { id: 'erkok', name: 'Erkok', slug: 'erkok' },
  { id: 'mekhela-sador', name: 'Mekhela Sador', slug: 'mekhela-sador' },
];
