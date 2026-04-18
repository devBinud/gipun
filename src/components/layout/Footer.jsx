import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-top-container">
          <div className="app-download">
            <h3>DOWNLOAD OUR APP</h3>
            <div className="app-buttons">
              <a href="#" className="app-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div>
                  <span className="app-label">GET IT ON</span>
                  <span className="app-name">Google Play</span>
                </div>
              </a>
              <a href="#" className="app-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div>
                  <span className="app-label">Download on the</span>
                  <span className="app-name">App Store</span>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-info">
            <h3>FOR ANY HELP, REACH US AT</h3>
            <p className="phone">+91 9365414535</p>
            <p className="hours">(Monday to Saturday: 10 am – 8 pm, Sunday: 11 am – 6 pm)</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-main-container">

          <div className="footer-column">
            <h4>ABOUT GIPUN</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Artisan Community</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Press & Media</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>CUSTOMER CARE</h4>
            <ul>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Exchange</a></li>
              <li><a href="#">Track My Order</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><Link to="/shop">All Products</Link></li>
              <li><Link to="/shop/special">Gipun Special</Link></li>
              <li><Link to="/shop/mekhela-sador">Mekhela Sador</Link></li>
              <li><Link to="/shop/muffler">Muffler</Link></li>
              <li><a href="#">Customize Order</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="https://instagram.com/gipun_by_rashmi" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </a>
              <a href="https://facebook.com/gipun" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
              <a href="https://wa.me/919365414535" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.33 8.7 7.33 8.53 7.33Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Category Links */}
        <div className="footer-categories">
          <div className="category-group">
            <h5>SHOP BY CATEGORY</h5>
            <ul>
              <li><Link to="/shop/mekhela-sador">Mekhela Sador</Link></li>
              <li><Link to="/shop/muffler">Muffler</Link></li>
              <li><Link to="/shop/mibu-galuk">Mibu Galuk</Link></li>
              <li><Link to="/shop/erkok">Erkok</Link></li>
              <li><Link to="/shop/unisex">Unisex</Link></li>
            </ul>
          </div>

          <div className="category-group">
            <h5>COLLECTIONS</h5>
            <ul>
              <li><Link to="/shop/special">Gipun Special</Link></li>
              <li><Link to="/shop/kids-attire">Kids Attire</Link></li>
              <li><Link to="/shop/mens-wear">Men's Wear</Link></li>
              <li><Link to="/shop/customize-order">Customize Order</Link></li>
              <li><Link to="/shop">New Arrivals</Link></li>
            </ul>
          </div>

          <div className="category-group">
            <h5>HANDCRAFTED IN</h5>
            <ul>
              <li><a href="#">Assam, India</a></li>
              <li><a href="#">Mising Tribe Weaves</a></li>
              <li><a href="#">Traditional Looms</a></li>
              <li><a href="#">Eco-Friendly Fabric</a></li>
              <li><a href="#">Artisan Made</a></li>
            </ul>
          </div>

          <div className="category-group">
            <h5>POLICIES</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return & Refund</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>© 2026 Gipun by Rashmi — Handcrafted with ♥ in Assam, India. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
