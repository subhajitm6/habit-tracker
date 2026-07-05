import React, { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';

export default function SmoothScrollProvider({ children }) {
  const [shouldSmoothScroll, setShouldSmoothScroll] = useState(true);

  useEffect(() => {
    // Respect user's system preferences for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    setShouldSmoothScroll(!mediaQuery.matches);

    const listener = (e) => setShouldSmoothScroll(!e.matches);
    mediaQuery.addEventListener('change', listener);
    
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  if (!shouldSmoothScroll) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ 
      lerp: 0.1, // Adjust smoothness (lower = smoother/slower, higher = snappier)
      duration: 1.2, 
      smoothWheel: true, 
      wheelMultiplier: 1, 
      touchMultiplier: 2, 
      infinite: false 
    }}>
      {children}
    </ReactLenis>
  );
}
