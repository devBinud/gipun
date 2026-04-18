import './FeaturedBanners.css';

export default function FeaturedBanners() {
  return (
    <section className="featured-banners">
      <div className="banner-card banner-1">
        <div className="banner-content">
          <h3>Where dreams meet couture</h3>
          <button className="banner-btn">Shop Now →</button>
        </div>
      </div>
      <div className="banner-card banner-2">
        <div className="banner-content">
          <h3>Enchanting styles for every women</h3>
          <button className="banner-btn">Shop Now →</button>
        </div>
      </div>
    </section>
  );
}
