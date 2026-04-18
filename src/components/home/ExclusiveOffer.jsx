import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import './ExclusiveOffer.css';

import product1 from "../../assets/images/products/1.jpeg"
import product2 from "../../assets/images/products/2.jpeg"
import product3 from "../../assets/images/products/3.jpeg"
import product4 from "../../assets/images/products/4.jpeg"
import product5 from "../../assets/images/products/5.jpeg"

const products = [
  {
    id: 1,
    brand: 'Gipun',
    name: 'Handwoven Muffler',
    price: '899',
    originalPrice: '1,299',
    discount: 30,
    badge: 'Latest Style',
    image: product1
  },
  {
    id: 2,
    brand: 'Gipun',
    name: 'Mekhela Sador',
    price: '2,499',
    originalPrice: '3,500',
    discount: 28,
    badge: 'Trending',
    image: product2
  },
  {
    id: 3,
    brand: 'Gipun',
    name: 'Kids Ethnic Set',
    price: '699',
    originalPrice: '999',
    discount: 30,
    badge: 'New Arrival',
    image: product3
  },
  {
    id: 4,
    brand: 'Gipun',
    name: 'Cotton Stole',
    price: '449',
    originalPrice: '650',
    discount: 31,
    badge: 'Best Seller',
    image: product4
  },
  {
    id: 5,
    brand: 'Gipun',
    name: "Men's Kurta",
    price: '1,199',
    originalPrice: '1,799',
    discount: 33,
    badge: 'Latest Style',
    image: product5
  },
  {
    id: 6,
    brand: 'Gipun',
    name: 'Eri Silk Stole',
    price: '1,299',
    originalPrice: '1,899',
    discount: 31,
    badge: 'Trending',
    image: product1
  }
];

export default function ExclusiveOffer() {
  return (
    <section className="exclusive-offer">
      <div className="offer-header">
        <div>
          <p className="offer-label">Limited Time</p>
          <h2>Exclusive Fashion Offers</h2>
        </div>
        <Link to="/shop" className="view-all-btn">View All →</Link>
      </div>

      <div className="offer-products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
