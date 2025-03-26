import React from 'react';
import Link from 'next/link';
import { FaUserPlus, FaChartLine, FaClipboardList } from 'react-icons/fa';

export default function CharitiesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">For Charities</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Connect with passionate volunteers who share your mission and values.
            Our platform simplifies volunteer management so you can focus on making a difference.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-[var(--primary-light)] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClipboardList className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Register Your Charity</h3>
              <p className="text-gray-600">
                Create your organization's profile and list the volunteer opportunities you offer.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-[var(--primary-light)] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUserPlus className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Connect with Volunteers</h3>
              <p className="text-gray-600">
                Our smart matching algorithm connects you with volunteers who have the skills you need.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-[var(--primary-light)] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Grow Your Impact</h3>
              <p className="text-gray-600">
                With a reliable volunteer base, your organization can expand its reach and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits for Charities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Access to Skilled Volunteers</h3>
                <p className="text-gray-700">
                  Connect with volunteers who have exactly the skills your organization needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Simplified Management</h3>
                <p className="text-gray-700">
                  Our platform streamlines volunteer coordination, saving you time and resources.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Increased Visibility</h3>
                <p className="text-gray-700">
                  Gain exposure to a growing community of passionate volunteers and supporters.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Data-Driven Insights</h3>
                <p className="text-gray-700">
                  Access analytics to better understand volunteer engagement and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[var(--primary-light)] rounded-lg p-8 md:p-12 text-white">
            <p className="text-xl mb-6 leading-relaxed italic">
              "Voluntiera has transformed how we find and manage volunteers. We've been able to connect with skilled 
              individuals who are passionate about our cause, and the platform makes coordination simple and efficient."
            </p>
            <p className="font-semibold">- Sarah Johnson, Executive Director at Community Hope Foundation</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Network of Charities</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Register your organization today and connect with passionate volunteers ready to support your cause.
          </p>
          <Link href="/register-charity" className="btn-primary bg-white text-[var(--primary)] hover:bg-gray-100">
            Register Your Charity
          </Link>
        </div>
      </section>
    </div>
  );
} 