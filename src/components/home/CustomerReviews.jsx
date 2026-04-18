import { useState, useRef, useEffect } from 'react';
import './CustomerReviews.css';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Guwahati, Assam',
    rating: 5,
    review: 'Absolutely love the Mekhela Sador! The quality is outstanding and the weave is so intricate. Will definitely order again.',
    product: 'Mekhela Sador Set',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
  },
  {
    id: 2,
    name: 'Rahul Das',
    location: 'Jorhat, Assam',
    rating: 5,
    review: 'The handwoven muffler is exactly what I was looking for. Warm, soft and beautifully crafted. Great packaging too!',
    product: 'Handwoven Muffler',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
  },
  {
    id: 3,
    name: 'Anita Borah',
    location: 'Dibrugarh, Assam',
    rating: 4,
    review: 'Ordered the kids ethnic set for my daughter. She looked adorable! Fast delivery and the fabric is very comfortable.',
    product: 'Kids Ethnic Set',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
  },
  {
    id: 4,
    name: 'Bikash Gogoi',
    location: 'Tezpur, Assam',
    rating: 5,
    review: 'The cotton stole is perfect for daily wear. Lightweight, elegant and the colors are vibrant. Highly recommended!',
    product: 'Cotton Stole',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
  },
  {
    id: 5,
    name: 'Mridula Kalita',
    location: 'Nagaon, Assam',
    rating: 5,
    review: 'Gipun never disappoints. The Assamese kurta fits perfectly and the embroidery work is stunning. Worth every rupee!',
    product: "Assamese Kurta",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop'
  },
  {
    id: 6,
    name: 'Deepak Nath',
    location: 'Silchar, Assam',
    rating: 4,
    review: 'Very happy with my purchase. The Eri silk stole is luxurious and the customer service was excellent throughout.',
    product: 'Eri Silk Stole',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop'
  }
];

function StarRating({ rating }) {
  return (
    <div className="cr-stars">
      {[1, 2, 3, 4, 5].map(star => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          fill={star <= rating ? '#f59e0b' : 'none'}
          stroke={star <= rating ? '#f59e0b' : '#d1d5db'}
          strokeWidth="1.5"
        >
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  const visibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const maxIndex = reviews.length - visibleCount();

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrent(clamped);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Auto scroll
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent(prev => {
        const max = reviews.length - visibleCount();
        return prev >= max ? 0 : prev + 1;
      });
    }, 4000);
    return () => clearInterval(autoRef.current);
  }, []);

  // Scroll track
  useEffect(() => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]?.offsetWidth + 16;
      trackRef.current.scrollTo({ left: current * cardWidth, behavior: 'smooth' });
    }
  }, [current]);

  return (
    <section className="customer-reviews">
      {/* Header */}
      <div className="cr-header">
        <div>
          <p className="cr-label">What they say</p>
          <h2>Customer Reviews</h2>
        </div>
        <div className="cr-controls">
          <button className="cr-arrow" onClick={prev} disabled={current === 0} aria-label="Previous">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="cr-arrow" onClick={next} disabled={current >= maxIndex} aria-label="Next">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards track */}
      <div className="cr-track" ref={trackRef}>
        {reviews.map(review => (
          <div key={review.id} className="cr-card">
            {/* Quote */}
            <div className="cr-quote">"</div>
            <p className="cr-text">{review.review}</p>

            {/* Stars */}
            <StarRating rating={review.rating} />

            {/* Product tag */}
            <span className="cr-product">{review.product}</span>

            {/* Author */}
            <div className="cr-author">
              <img src={review.avatar} alt={review.name} className="cr-avatar" />
              <div>
                <p className="cr-name">{review.name}</p>
                <p className="cr-location">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="cr-dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`cr-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Review ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
