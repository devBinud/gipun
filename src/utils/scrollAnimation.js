// Intersection Observer for scroll animations
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right'
  );
  
  animatedElements.forEach(el => observer.observe(el));

  return observer;
}
