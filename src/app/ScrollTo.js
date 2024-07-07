"use client"
import { useEffect } from 'react';

const ScrollTo = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const targetId = window.location.hash || '#home'; // Default to '#home' if no hash
      const sections = document.querySelectorAll('main section');
      sections.forEach((section) => {
        if (section.id === targetId.substring(1)) {
          section.style.display= "block"
        } else {
          section.style.display="none"
        }
      });
    };

    const handleClick = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        const targetId = e.target.getAttribute('href');
        if (['#home', '#stats', '#contact'].includes(targetId)) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          const main = document.querySelector('main');

          if (targetElement) {
            main.scrollTo({
              top: targetElement.offsetTop - main.offsetTop,
              behavior: 'smooth'
            });
            window.history.pushState({}, '', targetId);
            handleHashChange();
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleClick);

    // Initial call to handleHashChange to show the correct section on page load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default ScrollTo;
