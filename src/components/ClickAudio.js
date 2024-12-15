"use client"
import { useEffect } from 'react';

const ClickSoundProvider = ({ children }) => {
  useEffect(() => {
    // Create audio element once when component mounts
    const clickSound = new Audio('/click sound.mp3');
    // Optionally preload the sound
    clickSound.preload = 'auto';
    // Set volume (0.0 to 1.0)
    clickSound.volume = 0.2;

    const playClickSound = () => {
      // Clone and play to handle rapid clicks
      const soundClone = clickSound.cloneNode(true);
      soundClone.play().catch(error => {
        // Handle any autoplay restrictions or errors silently
        console.log('Sound play failed:', error);
      });
    };

    // Add click listener to document
    document.addEventListener('click', playClickSound);

    // Cleanup function
    return () => {
      document.removeEventListener('click', playClickSound);
    };
  }, []); // Empty dependency array means this runs once on mount

  return <>{children}</>;
};

export default ClickSoundProvider;