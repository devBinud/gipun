import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="product-card">
      {/* Image Area */}
      <Link to={`/product/${product.id}`} className="product-card-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img"
        />

        {/* Badge */}
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        {/* Wishlist */}
        <button
          className={`product-wishlist ${wishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            setWishlisted(!wishlisted);
          }}
          aria-label="Add to wishlist"
        >
          <svg viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="product-card-info">
        {product.badge && (
          <span className="product-card-badge-text">{product.badge}</span>
        )}
        <p className="product-brand">{product.brand || 'Gipun'}</p>
        <p className="product-name">{product.name}</p>
        <div className="product-pricing">
          <span className="product-price">₹{product.price}</span>
          {product.originalPrice && (
            <>
              <span className="product-original">₹{product.originalPrice}</span>
              <span className="product-discount">{product.discount}% off</span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}
