'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

export default function CharityRegistrationForm() {
  const [formData, setFormData] = useState({
    charityName: '',
    contactName: '',
    contactRole: '',
    email: '',
    phone: '',
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
            contact_name: formData.contactName,
            contact_role: formData.contactRole,
            email: formData.email,
            phone: formData.phone || null,
            agreed_to_terms: formData.agreedToTerms
          }
        ]);

      if (error) throw error;
      
      // Clear form
      setFormData({
        charityName: '',
        contactName: '',
        contactRole: '',
        email: '',
        phone: '',
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
        <h3 className="text-2xl font-bold mb-4">Join the Pilot Program</h3>
        <p className="text-gray-700">
        Register your interest in the pilot program to be one of the first organisations to be part of the pilot.
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
            placeholder="Your organization's name"
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
            {isSubmitting ? 'Submitting...' : 'Register for the Pilot Program'}
          </button>
        </div>
      </form>

      {submitResult.success && (
        <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-md">
          Thank you for your interest in Voluntiera! We've received your application and will be in touch when our pilot program launches.
        </div>
      )}

      {submitResult.error && (
        <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-md">
          {submitResult.error}
        </div>
      )}
    </div>
  );
} 