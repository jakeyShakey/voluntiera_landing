"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegClock, FaEnvelope, FaUser, FaHandshake } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: 'individual',
    marketingConsent: false,
    termsConsent: false,
    privacyConsent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate required consents
    if (!formData.termsConsent || !formData.privacyConsent) {
      setError('Please accept the Terms & Conditions and Privacy Policy to continue.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Use Supabase directly like your other forms
      const { error } = await supabase
        .from('stay_in_touch_signups')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.toLowerCase().trim(),
            user_type: formData.userType,
            marketing_consent: formData.marketingConsent,
            terms_consent: formData.termsConsent,
            privacy_consent: formData.privacyConsent,
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        
        // Handle duplicate email
        if (error.code === '23505') {
          throw new Error('This email is already registered');
        }
        
        throw new Error('Failed to save signup information');
      }
      
      setIsSubmitted(true);
      setFormData({ 
        name: '', 
        email: '', 
        userType: 'individual',
        marketingConsent: false,
        termsConsent: false,
        privacyConsent: false
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-2 text-[var(--primary)]">Sign In</h1>
            <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FaRegClock className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-blue-700 mb-2">Coming Soon</h2>
                  <p className="text-gray-700 mb-4">
                    We&apos;re currently preparing for our closed pilot program. Sign-in functionality will be available once the pilot launches. In the meantime, sign up below to stay updated with what we&apos;re working on.
                  </p>
                </div>
              </div>
            </div>

            {/* Stay in Touch Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-[var(--primary)] text-xl mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">Stay in Touch</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Be the first to know when our platform launches! Enter your details below and we&apos;ll keep you updated on our progress.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <FaHandshake className="text-green-500 text-lg mr-2" />
                    <p className="text-green-700 font-medium">Thank you! We&apos;ll be in touch soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline mr-1" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="inline mr-1" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                      I am a:
                    </label>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="individual">Individual (Volunteer)</option>
                      <option value="charity">Charity/Organization</option>
                    </select>
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="space-y-3 border-t border-gray-200 pt-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="mt-1 h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-gray-300 rounded disabled:cursor-not-allowed"
                      />
                      <label htmlFor="marketingConsent" className="ml-3 text-sm text-gray-700">
                        Yes, sign me up to receive updates about Voluntiera&apos;s platform launch and opportunities
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="termsConsent"
                        name="termsConsent"
                        checked={formData.termsConsent}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="mt-1 h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-gray-300 rounded disabled:cursor-not-allowed"
                        required
                      />
                      <label htmlFor="termsConsent" className="ml-3 text-sm text-gray-700">
                        I accept the{' '}
                        <Link href="/terms" target="_blank" className="text-[var(--primary)] hover:underline">
                          Terms & Conditions
                        </Link>
                        {' '}<span className="text-red-500">*</span>
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        name="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="mt-1 h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-gray-300 rounded disabled:cursor-not-allowed"
                        required
                      />
                      <label htmlFor="privacyConsent" className="ml-3 text-sm text-gray-700">
                        I accept the{' '}
                        <Link href="/privacy" target="_blank" className="text-[var(--primary)] hover:underline">
                          Privacy Policy
                        </Link>
                        {' '}<span className="text-red-500">*</span>
                      </label>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-2">
                      <span className="text-red-500">*</span> Required fields
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.termsConsent || !formData.privacyConsent}
                    className="w-full bg-[var(--primary)] text-white py-3 px-6 rounded-md font-medium hover:bg-[var(--primary)]/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Stay Updated'}
                  </button>
                </form>
              )}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Interested in being part of the pilot program?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup" className="btn-primary">
                  Join the Pilot Program
                </Link>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-600">
                Have questions? <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact our team</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 