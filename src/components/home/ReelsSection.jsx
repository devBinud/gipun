import { useEffect, useRef } from 'react';
import './ReelsSection.css';

const reels = [
  { id: 1, permalink: 'https://www.instagram.com/reel/DVuvH0gj5wK/', label: 'Handwoven Mising Galuk' },
  { id: 2, permalink: 'https://www.instagram.com/reel/DXEERcyvLgE/', label: 'Gipun Collection' },
  { id: 3, permalink: 'https://www.instagram.com/reel/DW73S7DD8tE/', label: 'New Arrivals' },
  { id: 4, permalink: 'https://www.instagram.com/reel/DVuvH0gj5wK/', label: 'Ethnic Wear' },
  { id: 5, permalink: 'https://www.instagram.com/reel/DXEERcyvLgE/', label: 'Summer Styles' },
  { id: 6, permalink: 'https://www.instagram.com/reel/DW73S7DD8tE/', label: 'Traditional Weaves' },
];

export default function ReelsSection() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPaused.current) {
        track.scrollLeft += speed;
        // Seamless loop — reset exactly at the halfway point (one full set width)
        const halfWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= halfWidth) {
          // Jump back by exactly one set — imperceptible to user
          track.scrollLeft -= halfWidth;
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    // Small delay to let iframes load and get correct scrollWidth
    const startTimer = setTimeout(() => {
      animRef.current = requestAnimationFrame(animate);
    }, 500);

    const pause = () => { isPaused.current = true; };
    const resume = () => { isPaused.current = false; };

    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', resume);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(animRef.current);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
      track.removeEventListener('touchstart', pause);
      track.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <section className="reels-section">
      {/* Header */}
      <div className="reels-header">
        <div>
          <p className="reels-label">As seen on Instagram</p>
          <h2>Our Reels</h2>
        </div>
        <a
          href="https://instagram.com/gipun_by_rashmi"
          target="_blank"
          rel="noreferrer"
          className="reels-ig-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
          </svg>
          Follow @gipun
        </a>
      </div>

      {/* Auto-scrolling track — duplicated for seamless loop */}
      <div className="reels-track" ref={trackRef}>
        {[...reels, ...reels].map((reel, i) => (
          <div key={`${reel.id}-${i}`} className="reel-card">
            <div className="reel-iframe-wrap">
              <iframe
                src={`${reel.permalink}embed/captioned/`}
                className="reel-iframe"
                allow="encrypted-media"
                title={reel.label}
              />
            </div>
            <p className="reel-label">{reel.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
