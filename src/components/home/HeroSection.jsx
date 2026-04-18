import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

import s1 from "../../assets/images/sliders/s11.png"
import s2 from "../../assets/images/sliders/s2.png"
import s3 from "../../assets/images/sliders/s3.png"

const slides = [
  {
    id: 1,
    image: s1,
    tag: 'New Collection',
    title: 'Summer Styles',
    subtitle: 'STARTING AT',
    price: '₹999',
    cta: 'Shop Now',
    link: '/shop/women',
    bg: '#edddd0'
  },
  {
    id: 2,
    image: s2,
    tag: "Men's Wear",
    title: 'Classic Fits',
    subtitle: 'UP TO',
    price: '₹1100 OFF',
    cta: 'Explore',
    link: '/shop/men',
    bg: '#d9cfc4'
  },
  {
    id: 3,
    image: s3,
    tag: 'Kids Collection',
    title: 'Playful Looks',
    subtitle: 'FROM ONLY',
    price: '₹499',
    cta: 'Shop Kids',
    link: '/shop/children',
    bg: '#e0d5c8'
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="hero-section">

      {/* ── MOBILE: stacked layout ── */}
      <div className="hero-mobile">
        <div
          className="hero-mobile-image-wrap"
          style={{ backgroundColor: slide.bg }}
        >
          {slides.map((s, i) => (
            <img
              key={s.id}
              src={s.image}
              alt={s.title}
              className={`hero-mobile-img ${i === current ? 'active' : ''}`}
            />
          ))}
        </div>

        <div
          className="hero-mobile-content"
          style={{ backgroundColor: slide.bg, '--mobile-bg': slide.bg }}
        >
          <span className="hero-tag">{slide.tag}</span>
          <h2 className="hero-title">{slide.title}</h2>
          <p className="hero-subtitle">{slide.subtitle}</p>
          <p className="hero-price">{slide.price}</p>
          <Link to={slide.link} className="hero-cta">{slide.cta}</Link>
        </div>

        {/* Mobile dots */}
        <div className="hero-dots hero-dots-mobile">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === current ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP: full overlay layout ── */}
      <div className="hero-desktop">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`hero-slide ${index === current ? 'active' : ''}`}
            style={{ backgroundColor: s.bg }}
          >
            <img src={s.image} alt={s.title} className="hero-bg-image" />
            <div className="hero-slide-fade" />
            <div className="hero-card">
              <span className="hero-tag">{s.tag}</span>
              <h2 className="hero-title">{s.title}</h2>
              <p className="hero-subtitle">{s.subtitle}</p>
              <p className="hero-price">{s.price}</p>
              <Link to={s.link} className="hero-cta">{s.cta}</Link>
            </div>
          </div>
        ))}

        {/* Desktop dots - inside hero-desktop so they stay within bounds */}
        <div className="hero-dots hero-dots-desktop">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === current ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
