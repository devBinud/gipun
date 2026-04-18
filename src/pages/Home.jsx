import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryBrowser from '../components/home/CategoryBrowser';
import PopularProducts from '../components/home/PopularProducts';
import CustomerReviews from '../components/home/CustomerReviews';
import ExclusiveOffer from '../components/home/ExclusiveOffer';
import ReelsSection from '../components/home/ReelsSection';
import RecommendedProducts from '../components/home/RecommendedProducts';
import { initScrollAnimations } from '../utils/scrollAnimation';
import './Home.css';

export default function Home() {
  useEffect(() => {
    const observer = initScrollAnimations();
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <div className="hero-wrapper animate-fade-in">
        <HeroSection />
      </div>
      <div className="animate-on-scroll">
        <CategoryBrowser />
      </div>
      <div className="animate-on-scroll">
        <ExclusiveOffer />
      </div>
      <div className="animate-on-scroll">
        <ReelsSection />
      </div>
      <div className="animate-on-scroll">
        <PopularProducts />
      </div>
      <div className="animate-on-scroll">
        <CustomerReviews />
      </div>
      <div className="animate-on-scroll">
        <RecommendedProducts />
      </div>
    </div>
  );
}
