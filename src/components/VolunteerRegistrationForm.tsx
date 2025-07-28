'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function VolunteerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
            agreed_to_terms: formData.agreedToTerms
          }
        ]);

      if (error) throw error;
      
      // Clear form
      setFormData({
        name: '',
        email: '',
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
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Join Our Pilot Program</h3>
        <p className="text-gray-700">
          Be one of the first volunteers to try Voluntiera and help shape the future of volunteering.
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
              I agree to Voluntiera's <a href="/terms" className="text-[var(--primary)] hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</a>.
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
          Thank you for your interest in Voluntiera! We've received your submission and will be in touch when our pilot program launches.
        </div>
      )}

      {submitResult.error && (
        <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-md">
          {submitResult.error}
        </div>
      )}

      {/* Survey Link */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
        <h4 className="text-lg font-semibold mb-3 text-[var(--primary)]">Help Us Build Better</h4>
        <p className="text-gray-700 mb-4">
          Want to help us understand what volunteers really need? Take our quick survey to share your thoughts and preferences.
        </p>
        <Link href="/volunteer-survey" className="btn-primary bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]">
          Take the Survey
        </Link>
      </div>
    </div>
  );
} 