import React from 'react';

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
                Voluntiera was founded by three friends on a mission to make volunteering more accessible, impactful, 
                and fulfilling for everyone. Seeing the growing need for dedicated volunteers in our communities, 
                we started this platform to bridge the gap between those who want to help and the organisations that 
                need their support. Our goal is simple: to create a place where passionate people and meaningful causes 
                connect effortlessly.
              </p>
              <p>
                What began as a conversation between friends about the volunteering shortages we saw around us has grown 
                into a movement. Our platform connects passionate people with causes that need their support, all 
                while keeping it simple, flexible, and rewarding. From one-time events to ongoing commitments, 
                we&apos;re here to help you find opportunities that fit your values, interests and schedule.
              </p>
              <p>
                Join us in building a stronger, more connected community one act of kindness at a time. Whether 
                you&apos;re a seasoned volunteer or new to giving back, we welcome you to our growing network 
                of changemakers. Together, we&apos;re making it easier than ever to lend a hand, support a cause, 
                and truly make a difference.
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

      {/* Testimonial Section
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
      </section> */}
    </div>
  );
} 