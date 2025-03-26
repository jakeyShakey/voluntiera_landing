import Link from 'next/link';
import { FaHandshake, FaUsers, FaChartLine, FaRegLightbulb } from 'react-icons/fa';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* For Volunteers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">For Volunteers</h2>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                Discover meaningful one-off volunteering opportunities that match your skills, interests, and availability. 
                Whether you&apos;re looking to gain experience, make a difference, or meet new people, 
                Voluntiera makes it easy to find the perfect opportunity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaHandshake className="text-[var(--primary)] text-2xl mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Find Meaningful Opportunities</h3>
                    <p className="text-gray-600">Get reccomended opportunities based on your skills and interests. No endless scrollig through job boards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaRegLightbulb className="text-[var(--primary)] text-2xl mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Develop New Skills</h3>
                    <p className="text-gray-600">Gain valuable experience and enhance your skillset through volunteering while making a difference where it&apos;s needed most.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/volunteers" className="btn-primary">
                  Find Opportunities
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
                {/* Replace with actual image */}
                <div className="bg-[var(--primary-light)] w-full h-full flex items-center justify-center">
                  <span className="text-white text-xl">Volunteer Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Charities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">For Charities</h2>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                Connect with passionate volunteers who want to make a difference and have skills that match your needs. 
                Our platform simplifies volunteer management, allowing you to focus on making a difference instead of admin.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaUsers className="text-[var(--primary)] text-2xl mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Access a Pool of Dedicated Volunteers</h3>
                    <p className="text-gray-600">Connect with volunteers who want to make a difference and are passionate about your cause.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaChartLine className="text-[var(--primary)] text-2xl mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Streamlined Management</h3>
                    <p className="text-gray-600">Easily manage volunteer applications, schedules, and communications. No more endless admin.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/charities" className="btn-primary">
                  Register Your Charity
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
                {/* Replace with actual image */}
                <div className="bg-[var(--primary-light)] w-full h-full flex items-center justify-center">
                  <span className="text-white text-xl">Charity Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Why Choose Voluntiera?</h2>
            <p className="text-lg text-gray-600">
              Our platform is designed to make volunteering easier and more rewarding for everyone involved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaHandshake className="text-[var(--primary)] text-4xl" />}
              title="Perfect Matching"
              description="Our smart matching algorithm connects volunteers with the most suitable opportunities for charities that need them."
            />
            <FeatureCard 
              icon={<FaUsers className="text-[var(--primary)] text-4xl" />}
              title="Community Building"
              description="Join a community of like-minded individuals who are passionate about making a difference."
            />
            <FeatureCard 
              icon={<FaRegLightbulb className="text-[var(--primary)] text-4xl" />}
              title="Skill Development"
              description="Gain valuable experience and develop new skills through meaningful volunteer work."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Make a Difference?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join Voluntiera today and be part of a community that&apos;s changing the world for the better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary bg-white text-[var(--primary)] hover:bg-gray-100">
              Sign Up Now
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--primary)]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
