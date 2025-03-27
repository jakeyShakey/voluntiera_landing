'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Volunteering <span className="text-[var(--primary)]">Reimagined</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl">one-off actions, endless impact</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connecting passionate volunteers with impactful opportunities. 
                Find your perfect match and make a real difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden shadow-2xl h-[400px]"
            >
              <Image 
                src="/hero-image.jpg"
                alt="Volunteers making a difference" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 