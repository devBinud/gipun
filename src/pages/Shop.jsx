import { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';
import './Shop.css';

const sortOptions = [
  { value: 'popular', label: 'Popularity' },
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'discount', label: 'Discount' },
];

export default function Shop() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [sort, setSort] = useState('popular');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState('all');
  const [discountFilter, setDiscountFilter] = useState('all');

  const activeCategory = category || 'all';

  const filtered = useMemo(() => {
    let list = activeCategory === 'all'
      ? products
      : products.filter(p => p.category === activeCategory);

    // Price filter
    if (priceRange === 'under500') list = list.filter(p => parseInt(p.price.replace(',', '')) < 500);
    else if (priceRange === '500-1500') list = list.filter(p => { const n = parseInt(p.price.replace(',', '')); return n >= 500 && n <= 1500; });
    else if (priceRange === 'above1500') list = list.filter(p => parseInt(p.price.replace(',', '')) > 1500);

    // Discount filter
    if (discountFilter === '20plus') list = list.filter(p => p.discount >= 20);
    else if (discountFilter === '30plus') list = list.filter(p => p.discount >= 30);

    // Sort
    if (sort === 'price-low') list = [...list].sort((a, b) => parseInt(a.price.replace(',', '')) - parseInt(b.price.replace(',', '')));
    else if (sort === 'price-high') list = [...list].sort((a, b) => parseInt(b.price.replace(',', '')) - parseInt(a.price.replace(',', '')));
    else if (sort === 'discount') list = [...list].sort((a, b) => b.discount - a.discount);

    return list;
  }, [activeCategory, sort, priceRange, discountFilter]);

  const activeCategoryName = categories.find(c => c.slug === activeCategory)?.name || 'All Products';

  return (
    <div className="shop-page">
      {/* Breadcrumb */}
      <div className="shop-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{activeCategoryName}</span>
      </div>

      <div className="shop-layout">
        {/* ── Sidebar Filters ── */}
        <aside className={`shop-sidebar ${filtersOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h3>Filters</h3>
            <button className="sidebar-close" onClick={() => setFiltersOpen(false)}>✕</button>
          </div>

          {/* Categories */}
          <div className="filter-group">
            <h4>Category</h4>
            <ul className="filter-list">
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    className={`filter-item ${activeCategory === cat.slug ? 'active' : ''}`}
                    onClick={() => {
                      navigate(cat.slug === 'all' ? '/shop' : `/shop/${cat.slug}`);
                      setFiltersOpen(false);
                    }}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <h4>Price</h4>
            <ul className="filter-list">
              {[
                { value: 'all', label: 'All Prices' },
                { value: 'under500', label: 'Under ₹500' },
                { value: '500-1500', label: '₹500 – ₹1,500' },
                { value: 'above1500', label: 'Above ₹1,500' },
              ].map(opt => (
                <li key={opt.value}>
                  <button
                    className={`filter-item ${priceRange === opt.value ? 'active' : ''}`}
                    onClick={() => setPriceRange(opt.value)}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Discount */}
          <div className="filter-group">
            <h4>Discount</h4>
            <ul className="filter-list">
              {[
                { value: 'all', label: 'All' },
                { value: '20plus', label: '20% and above' },
                { value: '30plus', label: '30% and above' },
              ].map(opt => (
                <li key={opt.value}>
                  <button
                    className={`filter-item ${discountFilter === opt.value ? 'active' : ''}`}
                    onClick={() => setDiscountFilter(opt.value)}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {filtersOpen && (
          <div className="sidebar-overlay" onClick={() => setFiltersOpen(false)} />
        )}

        {/* ── Main Content ── */}
        <main className="shop-main">
          {/* Top bar */}
          <div className="shop-topbar">
            <div className="shop-topbar-left">
              <button className="filter-toggle-btn" onClick={() => setFiltersOpen(true)}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
                Filters
              </button>
              <h1 className="shop-title">{activeCategoryName}</h1>
              <span className="shop-count">{filtered.length} items</span>
            </div>
            <div className="shop-sort">
              <span>Sort by</span>
              <select value={sort} onChange={e => setSort(e.target.value)}>
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active filters */}
          {(priceRange !== 'all' || discountFilter !== 'all') && (
            <div className="active-filters">
              {priceRange !== 'all' && (
                <span className="active-filter-tag">
                  {priceRange === 'under500' ? 'Under ₹500' : priceRange === '500-1500' ? '₹500–₹1,500' : 'Above ₹1,500'}
                  <button onClick={() => setPriceRange('all')}>✕</button>
                </span>
              )}
              {discountFilter !== 'all' && (
                <span className="active-filter-tag">
                  {discountFilter === '20plus' ? '20%+ off' : '30%+ off'}
                  <button onClick={() => setDiscountFilter('all')}>✕</button>
                </span>
              )}
            </div>
          )}

          {/* Product Grid */}
          {filtered.length > 0 ? (
            <div className="shop-grid">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="shop-empty">
              <p>No products found for this filter.</p>
              <button onClick={() => { setPriceRange('all'); setDiscountFilter('all'); }}>
                Clear Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
