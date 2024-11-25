import { useEffect } from 'react';

const useIntersectionObserver = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1, ...options });

    const animateClasses = ['animate-slideUp', 'animate-slideRight', 'animate-slideLeft'];
    animateClasses.forEach((className) => {
      const elements = ref.current.querySelectorAll(`.${className}`);
      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    return () => {
      if (ref.current) {
        animateClasses.forEach((className) => {
          const elements = ref.current.querySelectorAll(`.${className}`);
          elements.forEach((element) => {
            observer.unobserve(element);
          });
        });
      }
    };
  }, [ref, options]);
};

export default useIntersectionObserver;
