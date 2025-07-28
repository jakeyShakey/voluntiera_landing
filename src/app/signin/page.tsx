"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegClock, FaUserPlus, FaBuilding, FaEnvelope, FaUser, FaHandshake } from 'react-icons/fa';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: 'individual'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Stay in touch form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', userType: 'individual' });
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
                  <h2 className="text-xl font-semibold text-blue-700 mb-2">Closed Pilot Coming Soon</h2>
                  <p className="text-gray-700 mb-4">
                    We&apos;re currently preparing for our closed pilot program. Sign-in functionality will be available once the pilot launches.
                  </p>
                  <p className="text-gray-700 mb-2">
                    Interested in participating? Please register your interest by signing up as a:
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    >
                      <option value="individual">Individual (Volunteer)</option>
                      <option value="charity">Charity/Organization</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[var(--primary)] text-white py-3 px-6 rounded-md font-medium hover:bg-[var(--primary)]/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
                  >
                    Stay Updated
                  </button>
                </form>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/signup" className="group">
                <div className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-md bg-white h-full">
                  <div className="flex items-center mb-4">
                    <FaUserPlus className="text-[var(--primary)] text-2xl mr-3" />
                    <h3 className="text-xl font-semibold">Volunteer</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Register as a volunteer to be notified when the platform launches and get early access to volunteer opportunities.
                  </p>
                  <span className="text-[var(--primary)] font-medium group-hover:underline inline-flex items-center">
                    Register as a volunteer
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
              
              <Link href="/register-charity" className="group">
                <div className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-md bg-white h-full">
                  <div className="flex items-center mb-4">
                    <FaBuilding className="text-[var(--primary)] text-2xl mr-3" />
                    <h3 className="text-xl font-semibold">Charity</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Register your charity to join our platform and connect with skilled volunteers who can help with your mission.
                  </p>
                  <span className="text-[var(--primary)] font-medium group-hover:underline inline-flex items-center">
                    Register your charity
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
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