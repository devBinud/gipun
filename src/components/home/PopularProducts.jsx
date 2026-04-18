import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import './PopularProducts.css';

import p1 from '../../assets/images/products/1.jpeg';
import p2 from '../../assets/images/products/2.jpeg';
import p3 from '../../assets/images/products/3.jpeg';
import p4 from '../../assets/images/products/4.jpeg';
import p5 from '../../assets/images/products/5.jpeg';

const allProducts = {
  All: [
    { id: 1, brand: 'Gipun', name: 'Mekhela Sador Set', price: '2,499', originalPrice: '3,500', discount: 28, badge: 'Trending', image: p1 },
    { id: 2, brand: 'Gipun', name: 'Handwoven Muffler', price: '899', originalPrice: '1,299', discount: 30, badge: 'Best Seller', image: p2 },
    { id: 3, brand: 'Gipun', name: 'Cotton Stole', price: '449', originalPrice: '650', discount: 31, badge: 'New Arrival', image: p3 },
    { id: 4, brand: 'Gipun', name: "Men's Kurta", price: '1,199', originalPrice: '1,799', discount: 33, badge: 'Latest Style', image: p4 },
    { id: 5, brand: 'Gipun', name: 'Kids Ethnic Set', price: '699', originalPrice: '999', discount: 30, badge: 'New Arrival', image: p5 },
    { id: 6, brand: 'Gipun', name: 'Eri Silk Stole', price: '1,299', originalPrice: '1,899', discount: 31, badge: 'Trending', image: p1 },
  ],
  Women: [
    { id: 7, brand: 'Gipun', name: 'Silk Saree', price: '3,499', originalPrice: '4,999', discount: 30, badge: 'Trending', image: p2 },
    { id: 8, brand: 'Gipun', name: 'Embroidered Kurti', price: '1,099', originalPrice: '1,599', discount: 31, badge: 'Best Seller', image: p3 },
    { id: 9, brand: 'Gipun', name: 'Cotton Dupatta', price: '599', originalPrice: '899', discount: 33, badge: 'New Arrival', image: p4 },
    { id: 10, brand: 'Gipun', name: 'Anarkali Suit', price: '2,199', originalPrice: '2,999', discount: 26, badge: 'Latest Style', image: p5 },
    { id: 11, brand: 'Gipun', name: 'Palazzo Set', price: '1,299', originalPrice: '1,799', discount: 27, badge: 'Trending', image: p1 },
    { id: 12, brand: 'Gipun', name: 'Mekhela Sador', price: '2,499', originalPrice: '3,500', discount: 28, badge: 'Best Seller', image: p2 },
  ],
  Men: [
    { id: 13, brand: 'Gipun', name: "Men's Kurta", price: '1,199', originalPrice: '1,799', discount: 33, badge: 'Best Seller', image: p3 },
    { id: 14, brand: 'Gipun', name: 'Dhoti Kurta Set', price: '1,899', originalPrice: '2,699', discount: 29, badge: 'Trending', image: p4 },
    { id: 15, brand: 'Gipun', name: 'Nehru Jacket', price: '1,499', originalPrice: '2,199', discount: 31, badge: 'New Arrival', image: p5 },
    { id: 16, brand: 'Gipun', name: 'Linen Shirt', price: '899', originalPrice: '1,299', discount: 30, badge: 'Latest Style', image: p1 },
    { id: 17, brand: 'Gipun', name: 'Handwoven Muffler', price: '899', originalPrice: '1,299', discount: 30, badge: 'Best Seller', image: p2 },
    { id: 18, brand: 'Gipun', name: 'Cotton Kurta', price: '999', originalPrice: '1,499', discount: 33, badge: 'Trending', image: p3 },
  ],
  Kids: [
    { id: 19, brand: 'Gipun', name: 'Kids Ethnic Set', price: '699', originalPrice: '999', discount: 30, badge: 'New Arrival', image: p4 },
    { id: 20, brand: 'Gipun', name: 'Girls Frock', price: '549', originalPrice: '799', discount: 31, badge: 'Trending', image: p5 },
    { id: 21, brand: 'Gipun', name: 'Boys Kurta', price: '499', originalPrice: '699', discount: 28, badge: 'Best Seller', image: p1 },
    { id: 22, brand: 'Gipun', name: 'Kids Dhoti Set', price: '649', originalPrice: '899', discount: 27, badge: 'Latest Style', image: p2 },
    { id: 23, brand: 'Gipun', name: 'Baby Romper', price: '399', originalPrice: '599', discount: 33, badge: 'New Arrival', image: p3 },
    { id: 24, brand: 'Gipun', name: 'Kids Jaapi Set', price: '799', originalPrice: '1,099', discount: 27, badge: 'Trending', image: p4 },
  ],
};

const tabs = ['All', 'Women', 'Men', 'Kids'];

export default function PopularProducts() {
  const [activeTab, setActiveTab] = useState('All');
  const products = allProducts[activeTab];

  return (
    <section className="popular-products">
      {/* Header */}
      <div className="popular-header">
        <div className="popular-title-row">
          <div>
            <p className="popular-label">Handpicked for you</p>
            <h2>Popular Products</h2>
          </div>
          <Link to="/shop" className="popular-view-all">View All →</Link>
        </div>

        {/* Tabs */}
        <div className="popular-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`popular-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 5-card grid */}
      <div className="popular-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
