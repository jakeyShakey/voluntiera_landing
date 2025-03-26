import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Voluntiera</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We&apos;re on a mission to connect passionate volunteers with impactful opportunities, 
            making a real difference in communities around the world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="mb-10 text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Voluntiera was born from a simple observation: while many people want to volunteer their time and skills, 
                finding the right opportunity can be challenging. Similarly, charities often struggle to connect with 
                volunteers who have the specific skills they need.
              </p>
              <p>
                Founded in 2023, our platform aims to bridge this gap by using smart matching technology to connect 
                volunteers with opportunities that align with their skills, interests, and availability.
              </p>
              <p>
                What started as a simple idea has grown into a thriving community of volunteers and organizations 
                working together to make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission & Values</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--primary)]">Mission</h3>
              <p className="text-lg text-gray-700">
                To create a world where everyone can contribute their unique skills to causes they care about, 
                making volunteering more accessible, efficient, and impactful.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Community</h3>
                <p className="text-gray-700">
                  We believe in the power of community and the collective impact we can make when we work together.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Accessibility</h3>
                <p className="text-gray-700">
                  We&apos;re committed to making volunteering accessible to everyone, regardless of background or experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Impact</h3>
                <p className="text-gray-700">
                  We measure our success by the positive change we help create in communities around the world.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Innovation</h3>
                <p className="text-gray-700">
                  We continuously innovate to make the volunteering experience better for everyone involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[var(--primary-light)] rounded-lg p-8 md:p-12 text-white text-center">
            <FaQuoteLeft className="mx-auto mb-6 text-3xl opacity-80" />
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              &quot;Voluntiera has transformed how we connect with volunteers. We&apos;re now able to find people 
              with exactly the skills we need, when we need them. It&apos;s made a huge difference to our charity.&quot;
            </p>
            <FaQuoteRight className="mx-auto mb-6 text-3xl opacity-80" />
            <p className="font-semibold">Jane Doe, Charity Director</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-[var(--primary-light)] h-48 flex items-center justify-center">
                <span className="text-white">Founder Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">John Smith</h3>
                <p className="text-[var(--primary)] font-semibold mb-3">Co-Founder & CEO</p>
                <p className="text-gray-600">
                  With a background in tech and nonprofit work, John brings a unique perspective to Voluntiera.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-[var(--primary-light)] h-48 flex items-center justify-center">
                <span className="text-white">Founder Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Emma Johnson</h3>
                <p className="text-[var(--primary)] font-semibold mb-3">Co-Founder & CTO</p>
                <p className="text-gray-600">
                  Emma&apos;s expertise in technology and passion for social impact drives our platform development.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-[var(--primary-light)] h-48 flex items-center justify-center">
                <span className="text-white">Team Member Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                <p className="text-[var(--primary)] font-semibold mb-3">Head of Partnerships</p>
                <p className="text-gray-600">
                  Michael works closely with charities to ensure Voluntiera meets their evolving needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 