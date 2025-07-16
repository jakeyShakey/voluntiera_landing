import React from 'react';
import Link from 'next/link';
import { FaSearch, FaCalendarAlt, FaUsers } from 'react-icons/fa';

export default function VolunteersPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">For Volunteers</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Find meaningful opportunities to make a difference in your community.
            Use your skills to support causes you care about on your own schedule.
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
                <FaCalendarAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Schedule Your Time</h3>
              <p className="text-gray-600">
                Choose when you are free around your schedule. Volunteer once or as often as you like.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-[var(--primary-light)] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSearch className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Find Opportunities</h3>
              <p className="text-gray-600">
                Get recommended volunteering opportunities that match your skills, interests, and availability.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-[var(--primary-light)] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Make an Impact</h3>
              <p className="text-gray-600">
                Connect with organizations, contribute your skills, and see the difference you make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Volunteering</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">                
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Personal Growth</h3>
                <p className="text-gray-700">
                  Boost your confidence, gain a sense of achievement, and improve your overall wellbeing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Community Impact</h3>
                <p className="text-gray-700">
                  Make a tangible difference in your community by supporting causes you care about.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Skill Development</h3>
                <p className="text-gray-700">
                  Gain valuable experience and enhance your skill set through meaningful volunteer work.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Networking</h3>
                <p className="text-gray-700">
                  Connect with like-minded individuals and organizations in your community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join Voluntiera today and find opportunities to make a difference in your community.
          </p>
          <div className="space-y-4">
            <Link href="/signup" className="btn-primary bg-white text-[var(--primary)] hover:bg-gray-100">
              Sign Up Now
            </Link>
            <div className="mt-8">
              <p className="text-white mb-4">Help us build the perfect platform for you!</p>
              <Link href="/volunteer-survey" className="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]">
                Take Our Survey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 