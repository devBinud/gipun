import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import TopBar from './TopBar';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleMenuEnter = (category) => {
    // Cancel any pending close
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveMenu(category);
  };

  const handleMenuLeave = () => {
    // Delay closing so mouse can travel to mega menu
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  const handleMegaMenuEnter = () => {
    // Cancel close when mouse enters mega menu
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleMegaMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="header-wrapper">
      {/* Top Bar */}
      <TopBar />

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <h2>GIPUN</h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {/* Main Links with Mega Menu */}
            <div className="nav-links">
              {['men', 'women', 'children' , 'Seasonal', 'New Arrival'].map((category) => (
                <div
                  key={category}
                  className="nav-link-wrapper"
                  onMouseEnter={() => handleMenuEnter(category)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button className={`nav-link ${activeMenu === category ? 'active' : ''}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </div>
              ))}
              <Link to="/shop/special" className="nav-link">
                Gipun Special
              </Link>
            </div>

            {/* Search Bar */}
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Action Icons */}
            <div className="action-icons">
              <button className="icon-btn" title="Wishlist">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="icon-btn" title="Account">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <Link to="/cart" className="icon-btn cart-btn" title="Cart">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="cart-badge">0</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <div className="hamburger-icon">
                <span className="bar bar-1" />
                <span className="bar bar-2" />
                <span className="bar bar-3" />
              </div>
            )}
          </button>
        </div>

        {/* Mega Menu */}
        <div
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <MegaMenu
            category={activeMenu}
            isOpen={!!activeMenu}
            onClose={handleMegaMenuLeave}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  );
}
