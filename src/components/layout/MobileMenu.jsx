import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = {
    men: ['T-Shirts', 'Shirts', 'Jeans', 'Jackets', 'Shoes', 'Accessories'],
    women: ['Dresses', 'Tops', 'Jeans', 'Skirts', 'Heels', 'Handbags'],
    children: ['Boys', 'Girls', 'Baby', 'School Wear']
  };

  const toggleCategory = (cat) => {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      
      {/* Slide-in Menu */}
      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="mobile-menu-header">
          <h2>Menu</h2>
          <button 
            onClick={onClose}
            className="close-btn"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Menu Items */}
        <div className="mobile-menu-content">
          {/* Search */}
          <div className="mobile-search">
            <input 
              type="text" 
              placeholder="Search products..."
            />
          </div>

          {/* Categories */}
          <div className="mobile-categories">
            {Object.keys(categories).map((cat) => (
              <div key={cat}>
                <button
                  onClick={() => toggleCategory(cat)}
                  className="category-btn"
                >
                  <span>{cat}</span>
                  <span>{expandedCategory === cat ? '−' : '+'}</span>
                </button>
                
                <div className={`category-items ${expandedCategory === cat ? 'expanded' : ''}`}>
                  {categories[cat].map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/shop/${cat}/${item.toLowerCase()}`}
                      onClick={onClose}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mobile-quick-links">
            <Link to="/brands" onClick={onClose}>
              Brands
            </Link>
            <Link to="/about" onClick={onClose}>
              About
            </Link>
            <Link to="/faqs" onClick={onClose}>
              FAQs
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="mobile-actions">
            <Link to="/login" onClick={onClose}>
              Sign In
            </Link>
            <Link to="/signup" onClick={onClose}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
