"use client";

import React from 'react';
import Link from 'next/link';
import { FaUserPlus, FaBuilding } from 'react-icons/fa';

export default function SignupPage() {
  return (
    <main className="pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[var(--primary)]">Join Voluntiera</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how you&apos;d like to get involved with our platform. Whether you&apos;re looking to volunteer or represent a charity, we have the right path for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/register-volunteer" className="group">
            <div className="border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-lg bg-white h-full">
              <div className="flex items-center mb-6">
                <FaUserPlus className="text-[var(--primary)] text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Volunteer</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Register as a volunteer to be notified when the platform launches and get early access to volunteer opportunities.
              </p>
              <div className="flex items-center text-[var(--primary)] font-medium group-hover:underline">
                Register as a volunteer
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/register-charity" className="group">
            <div className="border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-lg bg-white h-full">
              <div className="flex items-center mb-6">
                <FaBuilding className="text-[var(--primary)] text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Charity</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Register your charity to join our platform and connect with skilled volunteers who can help with your mission.
              </p>
              <div className="flex items-center text-[var(--primary)] font-medium group-hover:underline">
                Register your charity
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Already have an account? <Link href="/signin" className="text-[var(--primary)] hover:underline">Sign in here</Link>
          </p>
        </div>
      </div>
    </main>
  );
} 