'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if consent has been given previously
    const cookieConsent = localStorage.getItem('voluntiera_cookie_consent');
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('voluntiera_cookie_consent', 'all');
    localStorage.setItem('voluntiera_cookie_consent_date', new Date().toISOString());
    setIsVisible(false);
  };

  const acceptEssentialCookies = () => {
    localStorage.setItem('voluntiera_cookie_consent', 'essential');
    localStorage.setItem('voluntiera_cookie_consent_date', new Date().toISOString());
    setIsVisible(false);
  };

  const manageCookiePreferences = () => {
    // In the future, this could open a more detailed cookie preference modal
    // For now, it will just link to the cookie policy page
    window.location.href = '/cookie-policy';
  };

  // Don't render during SSR or until client-side effect has run
  if (isVisible === null) return null;
  
  // Don't render if explicitly set to not visible
  if (isVisible === false) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Your Privacy Choices</h3>
            <p className="text-sm text-gray-700 mb-2">
              We use cookies and local storage to enhance your browsing experience, analyze site traffic, 
              and remember your preferences. This includes storing your announcement banner preferences.
            </p>
            <p className="text-sm text-gray-700">
              For more information, please read our{' '}
              <Link href="/cookie-policy" className="text-[var(--primary)] hover:underline">
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-[var(--primary)] hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
            <button
              onClick={acceptEssentialCookies}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
            >
              Essential Only
            </button>
            <button
              onClick={manageCookiePreferences}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
            >
              Manage Preferences
            </button>
            <button
              onClick={acceptAllCookies}
              className="px-4 py-2 bg-[var(--primary)] text-white rounded-md text-sm font-medium hover:bg-[var(--primary-light)]"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 