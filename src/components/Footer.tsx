import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Voluntiera</h2>
            <p className="mb-4">Connecting volunteers with charities to make a real difference in the world.</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-white hover:text-gray-300 text-xl" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-white hover:text-gray-300 text-xl" />
              </a>
              <a href="https://instagram.com/voluntiera" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-white hover:text-gray-300 text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="text-white hover:text-gray-300 text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/volunteers" className="hover:text-gray-300 transition duration-300">
                  For Volunteers
                </Link>
              </li>
              <li>
                <Link href="/charities" className="hover:text-gray-300 transition duration-300">
                  For Charities
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 transition duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-gray-300 transition duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-300 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300 transition duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">info@voluntiera.com</p>
            <p>London, UK</p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Voluntiera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 