import { useState, useEffect } from 'react';

export const useWidthResize = (minSizeMobile = 480) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWidthResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidthResize);
    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  });
  const isMobile = width <= minSizeMobile;
  return { width, isMobile };
};
