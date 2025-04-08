'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    organization: '',
    location: '',
    message: '',
    agreedToTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, error: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult({ success: false, error: '' });

    try {
      const { error } = await supabase
        .from('pilot_signups')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            user_type: formData.userType,
            organization: formData.organization || null,
            location: formData.location,
            message: formData.message || null,
            agreed_to_terms: formData.agreedToTerms
          }
        ]);

      if (error) throw error;
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        userType: '',
        organization: '',
        location: '',
        message: '',
        agreedToTerms: false
      });
      
      setSubmitResult({ success: true, error: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitResult({ success: false, error: 'There was a problem submitting your form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join Our Pilot Program</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We&apos;re currently gearing up for a closed pilot test of the Voluntiera platform.
          </p>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Be One of the First to Try Voluntiera</h2>
              <p className="text-lg text-gray-700 mb-8">
                We&apos;re looking for volunteers and charities to join our exclusive pilot program. 
                This is your chance to help shape the future of volunteering and provide valuable feedback 
                as we develop our platform.
              </p>
              <p className="text-md text-[var(--primary)] mb-8">
                <strong>Representing a charity?</strong>{' '}
                <Link href="/register-charity" className="underline hover:text-[var(--primary-dark)]">
                  Register your organization here
                </Link> for more tailored information.
              </p>
            </div>

            <form 
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="John Smith"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="userType" className="block text-gray-700 font-semibold mb-2">
                  I am a
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">Please select...</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="charity">Charity Representative</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="organization" className="block text-gray-700 font-semibold mb-2">
                  Organization Name (if applicable)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Charity name (if you represent a charity)"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="City, Country"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Why are you interested in joining our pilot? (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Tell us a bit about your interest in Voluntiera..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3"
                  />
                  <span className="text-gray-700 text-sm">
                    I agree to Voluntiera&apos;s <a href="/terms" className="text-[var(--primary)] hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary bg-[var(--primary)] text-white w-full py-3 disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Join the Pilot Program'}
                </button>
              </div>
            </form>

            {submitResult.success && (
              <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-md">
                Thank you for your interest in Voluntiera! We&apos;ve received your submission and will be in touch when our pilot program launches.
              </div>
            )}

            {submitResult.error && (
              <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-md">
                {submitResult.error}
              </div>
            )}

            {!submitResult.success && !submitResult.error && (
              <div className="mt-8 text-center text-gray-600">
                <p>
                  We&apos;ll be in touch when the pilot program is ready to launch. 
                  Thank you for your interest in Voluntiera!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 