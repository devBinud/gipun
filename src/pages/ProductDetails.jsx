import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import './ProductDetails.css';

function ImageMagnifier({ src, alt }) {
  const [showLens, setShowLens] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const LENS_SIZE = 120;
  const ZOOM = 2.5;

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Clamp lens within image bounds
    x = Math.max(LENS_SIZE / 2, Math.min(x, rect.width - LENS_SIZE / 2));
    y = Math.max(LENS_SIZE / 2, Math.min(y, rect.height - LENS_SIZE / 2));

    setLensPos({ x: x - LENS_SIZE / 2, y: y - LENS_SIZE / 2 });

    // Background position for zoomed preview
    const bgX = ((x / rect.width) * 100);
    const bgY = ((y / rect.height) * 100);
    setBgPos({ x: bgX, y: bgY });
  };

  return (
    <div className="magnifier-wrapper">
      {/* Main image with lens */}
      <div
        className="magnifier-img-container"
        onMouseEnter={() => setShowLens(true)}
        onMouseLeave={() => setShowLens(false)}
        onMouseMove={handleMouseMove}
      >
        <img ref={imgRef} src={src} alt={alt} className="magnifier-img" />

        {/* Lens box */}
        {showLens && (
          <div
            className="magnifier-lens"
            style={{
              left: lensPos.x,
              top: lensPos.y,
              width: LENS_SIZE,
              height: LENS_SIZE,
            }}
          />
        )}
      </div>

      {/* Zoomed preview panel */}
      {showLens && (
        <div
          className="magnifier-preview"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: `${ZOOM * 100}%`,
            backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
          }}
        />
      )}
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [wishlisted, setWishlisted] = useState(false);
  const [pincode, setPincode] = useState('');
  const [addedToBag, setAddedToBag] = useState(false);

  if (!product) {
    return (
      <div className="pd-not-found">
        <h2>Product not found</h2>
        <Link to="/shop">← Back to Shop</Link>
      </div>
    );
  }

  // Use same image multiple times as thumbnails (replace with real images later)
  const images = [product.image, product.image, product.image, product.image];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

  // Related products (same category, exclude current)
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const handleAddToBag = () => {
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  };

  return (
    <div className="pd-page">
      {/* Breadcrumb */}
      <div className="pd-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <Link to={`/shop/${product.category}`}>{product.category.replace(/-/g, ' ')}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      {/* Main Layout */}
      <div className="pd-layout">

        {/* ── Left: Image Gallery ── */}
        <div className="pd-gallery">
          {/* Thumbnails */}
          <div className="pd-thumbnails">
            {images.map((img, i) => (
              <button
                key={i}
                className={`pd-thumb ${selectedImage === i ? 'active' : ''}`}
                onMouseEnter={() => setSelectedImage(i)}
                onClick={() => setSelectedImage(i)}
              >
                <img src={img} alt={`${product.name} view ${i + 1}`} />
              </button>
            ))}
          </div>

          {/* Main Image with Magnifier */}
          <div className="pd-main-image">
            <ImageMagnifier
              src={images[selectedImage]}
              alt={product.name}
            />
            {product.badge && (
              <span className="pd-badge">{product.badge}</span>
            )}
          </div>
        </div>

        {/* ── Right: Product Info ── */}
        <div className="pd-info">
          {/* Brand & Name */}
          <h1 className="pd-brand">Gipun</h1>
          <h2 className="pd-name">{product.name}</h2>

          {/* Rating */}
          <div className="pd-rating">
            <span className="pd-rating-score">
              4.3
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
            <span className="pd-rating-count">Based on 128 ratings</span>
          </div>

          <div className="pd-divider" />

          {/* Pricing */}
          <div className="pd-pricing">
            <span className="pd-price">₹{product.price}</span>
            <span className="pd-discount">{product.discount}% Off</span>
          </div>
          <div className="pd-original">
            MRP <span>₹{product.originalPrice}</span>
            <span className="pd-tax">Inclusive of all taxes</span>
          </div>

          <div className="pd-divider" />

          {/* Size Selector */}
          <div className="pd-size-section">
            <div className="pd-size-header">
              <span className="pd-size-label">Select Size</span>
              <button className="pd-size-guide">Size Guide</button>
            </div>
            <div className="pd-sizes">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`pd-size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pd-actions">
            <button
              className={`pd-wishlist-btn ${wishlisted ? 'active' : ''}`}
              onClick={() => setWishlisted(!wishlisted)}
            >
              <svg viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlisted ? 'Wishlisted' : 'Add to Wishlist'}
            </button>
            <button
              className={`pd-bag-btn ${addedToBag ? 'added' : ''}`}
              onClick={handleAddToBag}
            >
              {addedToBag ? '✓ Added to Bag' : 'Add to Bag'}
            </button>
          </div>

          <div className="pd-divider" />

          {/* Delivery */}
          <div className="pd-delivery">
            <h4>Select Delivery Location</h4>
            <p>Enter the pincode of your area to check product availability and delivery options</p>
            <div className="pd-pincode">
              <input
                type="text"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={e => setPincode(e.target.value.replace(/\D/, '').slice(0, 6))}
                maxLength={6}
              />
              <button disabled={pincode.length < 6}>Apply</button>
            </div>
          </div>

          {/* Delivery Features */}
          <div className="pd-features">
            <div className="pd-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <p className="pd-feature-title">COD available</p>
                <button className="pd-know-more">Know More</button>
              </div>
            </div>
            <div className="pd-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <div>
                <p className="pd-feature-title">7-day return & size exchange</p>
                <button className="pd-know-more">Know More</button>
              </div>
            </div>
            <div className="pd-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <div>
                <p className="pd-feature-title">Delivery by Wed, 22 Apr</p>
                <button className="pd-know-more">Know More</button>
              </div>
            </div>
          </div>

          <div className="pd-divider" />

          {/* Product Details */}
          <div className="pd-details">
            <h4>Product Details</h4>
            <ul>
              <li>Brand: Gipun</li>
              <li>Category: {product.category.replace(/-/g, ' ')}</li>
              <li>Fabric: Handwoven Cotton / Silk</li>
              <li>Care: Dry clean recommended</li>
              <li>Origin: Assam, India</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="pd-related">
          <h3>You May Also Like</h3>
          <div className="pd-related-grid">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
