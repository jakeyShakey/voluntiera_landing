'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function RegisterCharityPage() {
  const [formData, setFormData] = useState({
    charityName: '',
    charityNumber: '',
    contactName: '',
    contactRole: '',
    email: '',
    phone: '',
    location: '',
    volunteerNeeds: '',
    additionalInfo: '',
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
        .from('charity_registrations')
        .insert([
          {
            charity_name: formData.charityName,
            charity_number: formData.charityNumber || null,
            contact_name: formData.contactName,
            contact_role: formData.contactRole,
            email: formData.email,
            phone: formData.phone || null,
            location: formData.location,
            volunteer_needs: formData.volunteerNeeds,
            additional_info: formData.additionalInfo || null,
            agreed_to_terms: formData.agreedToTerms
          }
        ]);

      if (error) throw error;
      
      // Clear form
      setFormData({
        charityName: '',
        charityNumber: '',
        contactName: '',
        contactRole: '',
        email: '',
        phone: '',
        location: '',
        volunteerNeeds: '',
        additionalInfo: '',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Register Your Charity</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join our upcoming pilot program and connect with passionate volunteers.
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Be Among the First Charities on Voluntiera</h2>
              <p className="text-lg text-gray-700 mb-8">
                We&apos;re preparing to launch our platform with a select group of charities and volunteers.
                Register your interest below to be considered for our exclusive pilot program.
              </p>
              <p className="text-md text-[var(--primary)] mb-8">
                <strong>Looking to volunteer?</strong>{' '}
                <Link href="/signup" className="underline hover:text-[var(--primary-dark)]">
                  Sign up as an individual here
                </Link> to join our network of volunteers.
              </p>
            </div>

            <form 
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <div className="mb-6">
                <label htmlFor="charityName" className="block text-gray-700 font-semibold mb-2">
                  Charity/Organization Name
                </label>
                <input
                  type="text"
                  id="charityName"
                  name="charityName"
                  value={formData.charityName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Your organization&apos;s name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="charityNumber" className="block text-gray-700 font-semibold mb-2">
                  Charity Registration Number (if applicable)
                </label>
                <input
                  type="text"
                  id="charityNumber"
                  name="charityNumber"
                  value={formData.charityNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Optional"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contactName" className="block text-gray-700 font-semibold mb-2">
                  Contact Person Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Full name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contactRole" className="block text-gray-700 font-semibold mb-2">
                  Your Role in the Organization
                </label>
                <input
                  type="text"
                  id="contactRole"
                  name="contactRole"
                  value={formData.contactRole}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="e.g., Volunteer Coordinator, Director, etc."
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
                  placeholder="contact@organization.org"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Optional"
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
                <label htmlFor="volunteerNeeds" className="block text-gray-700 font-semibold mb-2">
                  What type of volunteer help do you need?
                </label>
                <textarea
                  id="volunteerNeeds"
                  name="volunteerNeeds"
                  value={formData.volunteerNeeds}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Describe the volunteer roles or support you&apos;re looking for..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label htmlFor="additionalInfo" className="block text-gray-700 font-semibold mb-2">
                  Additional Information (optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Any other information you&apos;d like to share..."
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
                  {isSubmitting ? 'Submitting...' : 'Register for the Pilot Program'}
                </button>
              </div>
            </form>

            {submitResult.success && (
              <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-md">
                Thank you for your interest in Voluntiera! We&apos;ve received your application and will be in touch when our pilot program launches.
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
                  Thank you for your interest in Voluntiera! We&apos;ll review your application and be in touch when our pilot program launches.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 