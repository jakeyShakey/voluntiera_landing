'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Create FormData object to send to FormSubmit
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      // Add form data manually to ensure all fields are included
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('subject', formData.subject);
      formDataObj.append('message', formData.message);
      
      // Add FormSubmit configuration fields
      formDataObj.append('_captcha', 'true');
      formDataObj.append('_subject', `New Contact Form: ${formData.subject}`);
      formDataObj.append('_template', 'table');
      formDataObj.append('_replyto', formData.email);
      
      // Send to FormSubmit service
      const response = await fetch('https://formsubmit.co/ajax/hello@voluntiera.co.uk', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitError('There was a problem submitting your form. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Got questions? We&apos;d love to hear from you. Reach out to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="md:col-span-2 bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6">
                    Thank you for your message! We&apos;ll get back to you as soon as possible.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-6">
                        {submitError}
                      </div>
                    )}
                    
                    {/* FormSubmit configuration fields */}
                    <input type="hidden" name="_captcha" value="true" />
                    <input type="hidden" name="_subject" value={`New Contact Form: ${formData.subject}`} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_replyto" value={formData.email} />
                    
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Volunteer Information">Volunteer Information</option>
                        <option value="Charity Partnership">Charity Partnership</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Contact Information */}
              <div className="bg-[var(--primary)] rounded-lg shadow-md p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-2xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p>hello@voluntiera.co.uk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <FaPhone className="text-2xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p>+44 (0) 123 456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-2xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p>56 Rutland Gardens</p>
                      <p>London, UK</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
                  <p className="mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 