import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import './RecommendedProducts.css';

import p1 from '../../assets/images/products/1.jpeg';
import p2 from '../../assets/images/products/2.jpeg';
import p3 from '../../assets/images/products/3.jpeg';
import p4 from '../../assets/images/products/4.jpeg';
import p5 from '../../assets/images/products/5.jpeg';

const products = [
  { id: 1, brand: 'Gipun', name: 'Eri Silk Stole', price: '1,299', originalPrice: '1,899', discount: 31, badge: 'Trending', image: p1 },
  { id: 2, brand: 'Gipun', name: 'Muga Silk Saree', price: '4,499', originalPrice: '5,999', discount: 25, badge: 'Best Seller', image: p2 },
  { id: 3, brand: 'Gipun', name: 'Gamosa Towel', price: '349', originalPrice: '499', discount: 30, badge: 'New Arrival', image: p3 },
  { id: 4, brand: 'Gipun', name: 'Assamese Kurta', price: '1,599', originalPrice: '2,199', discount: 27, badge: 'Latest Style', image: p4 },
  { id: 5, brand: 'Gipun', name: 'Kids Jaapi Set', price: '799', originalPrice: '1,099', discount: 27, badge: 'New Arrival', image: p5 },
  { id: 6, brand: 'Gipun', name: 'Cotton Dupatta', price: '599', originalPrice: '899', discount: 33, badge: 'Trending', image: p1 },
];

export default function RecommendedProducts() {
  return (
    <section className="recommended-products">
      <div className="recommended-header">
        <div>
          <p className="recommended-label">Based on your interest</p>
          <h2>You Might Also Like</h2>
        </div>
        <Link to="/shop" className="recommended-view-all">View All →</Link>
      </div>

      <div className="recommended-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
