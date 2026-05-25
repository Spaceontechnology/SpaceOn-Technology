import { useEffect } from 'react';

interface ScrollToTopProps {
  selectedServiceId: string | null;
}

export default function ScrollToTop({ selectedServiceId }: ScrollToTopProps) {
  // Disable browser automatic scroll restoration to avoid middle-of-page jumping
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Smooth scroll to top whenever the active route state changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [selectedServiceId]);

  return null;
}
