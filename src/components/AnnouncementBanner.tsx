'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

const AnnouncementBanner = () => {
  // Use null for initial state to prevent rendering until client-side code runs
  const [isVisible, setIsVisible] = useState<boolean | null>(null);
  
  // Check localStorage on component mount (client-side only)
  useEffect(() => {
    // First check if user has given consent to functional cookies/local storage
    const cookieConsent = localStorage.getItem('voluntiera_cookie_consent');
    
    // If user hasn't given any cookie consent at all, or has only accepted essential cookies
    // Show the banner but don't store preferences
    if (!cookieConsent || cookieConsent === 'essential') {
      setIsVisible(true);
      document.body.classList.add('banner-visible');
      return;
    }
    
    // User has accepted all cookies/local storage, proceed with normal functionality
    const bannerClosedTimestamp = localStorage.getItem('voluntiera_announcement_closed');
    
    // If there's no timestamp, show the banner
    if (!bannerClosedTimestamp) {
      setIsVisible(true);
      document.body.classList.add('banner-visible');
      return;
    }
    
    // Check if it's been more than 24 hours since the banner was closed
    const closedTime = parseInt(bannerClosedTimestamp, 10);
    const currentTime = Date.now();
    const oneDayInMs = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    if (currentTime - closedTime > oneDayInMs) {
      // It's been more than a day, show the banner again
      setIsVisible(true);
      document.body.classList.add('banner-visible');
      // Remove the stored timestamp so we don't keep checking
      localStorage.removeItem('voluntiera_announcement_closed');
    } else {
      // It's been less than a day, keep the banner hidden
      setIsVisible(false);
      document.body.classList.remove('banner-visible');
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    
    // Only save to localStorage if user has consented to all cookies
    const cookieConsent = localStorage.getItem('voluntiera_cookie_consent');
    if (cookieConsent === 'all') {
      // Save the current timestamp to localStorage
      localStorage.setItem('voluntiera_announcement_closed', Date.now().toString());
    }
    
    // Remove class from body when banner is closed
    document.body.classList.remove('banner-visible');
  };

  // Don't render anything during SSR or until client-side effect runs
  if (isVisible === null) return null;
  
  // Don't render if explicitly set to not visible
  if (isVisible === false) return null;

  return (
    <div className="bg-[var(--accent)] w-full py-3 fixed top-[72px] left-0 right-0 shadow-sm z-40">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex-1 text-center sm:text-left pr-2">
          <p className="font-medium text-gray-800 text-sm sm:text-base">
            <span className="font-bold">Coming Soon:</span> We&apos;re planning a closed pilot! {' '}
            <Link href="/signup" className="underline font-semibold hover:text-[var(--primary)]">
              Sign up now
            </Link> {' '}
            <span className="hidden sm:inline">to be considered for early access.</span>
          </p>
        </div>
        <button 
          onClick={closeBanner} 
          className="ml-2 text-gray-800 hover:text-gray-900 focus:outline-none flex-shrink-0"
          aria-label="Close announcement"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner; 