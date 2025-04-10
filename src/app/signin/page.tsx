import React from 'react';
import Link from 'next/link';
import { FaRegClock, FaUserPlus, FaBuilding } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | Voluntiera',
  description: 'Sign in to Voluntiera - Connect volunteers with charities for impactful opportunities.',
};

export default function SignInPage() {
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
                    We're currently preparing for our closed pilot program. Sign-in functionality will be available once the pilot launches.
                  </p>
                  <p className="text-gray-700 mb-2">
                    Interested in participating? Please register your interest by signing up as a:
                  </p>
                </div>
              </div>
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