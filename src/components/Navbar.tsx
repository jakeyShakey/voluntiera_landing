'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <h1 className="text-3xl font-bold text-[var(--primary)]">Voluntiera</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/volunteers" className="font-medium hover:text-[var(--primary)] transition-colors">
            For Volunteers
          </Link>
          <Link href="/charities" className="font-medium hover:text-[var(--primary)] transition-colors">
            For Charities
          </Link>
          <Link href="/about" className="font-medium hover:text-[var(--primary)] transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="font-medium hover:text-[var(--primary)] transition-colors">
            Contact
          </Link>
          <Link href="/signin" className="btn-secondary">
            Sign In
          </Link>
          <Link href="/signup" className="btn-primary">
            Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto py-4 flex flex-col space-y-4">
              <Link 
                href="/volunteers" 
                className="font-medium hover:text-[var(--primary)] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                For Volunteers
              </Link>
              <Link 
                href="/charities" 
                className="font-medium hover:text-[var(--primary)] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                For Charities
              </Link>
              <Link 
                href="/about" 
                className="font-medium hover:text-[var(--primary)] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="font-medium hover:text-[var(--primary)] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-2">
                <Link 
                  href="/signin" 
                  className="btn-secondary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  href="/signup" 
                  className="btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 