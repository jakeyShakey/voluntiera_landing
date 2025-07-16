'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

interface FormData {
  // Question 1
  consideredVolunteering: string;
  
  // Question 2
  wantToVolunteer: string;
  wantToVolunteerOther: string;
  
  // Question 3
  currentVolunteeringFrequency: string;
  
  // Question 4
  pastAccessMethods: string[];
  
  // Question 5
  challenges: string[];
  
  // Question 6
  motivations: string[];
  
  // Question 7
  willingToPay: string;
  
  // Question 8
  freeTimePerMonth: string;
  
  // Question 9
  expectedVolunteeringFrequency: string;
  
  // Question 10
  desiredFeatures: string[];
  
  // Question 11
  specificCauses: string;
  
  // Question 12
  additionalFeedback: string;
  
  // Question 13
  willingForFutureSurveys: string;
  emailForSurveys: string;
}

export default function VolunteerSurveyPage() {
  const [formData, setFormData] = useState<FormData>({
    consideredVolunteering: '',
    wantToVolunteer: '',
    wantToVolunteerOther: '',
    currentVolunteeringFrequency: '',
    pastAccessMethods: [],
    challenges: [],
    motivations: [],
    willingToPay: '',
    freeTimePerMonth: '',
    expectedVolunteeringFrequency: '',
    desiredFeatures: [],
    specificCauses: '',
    additionalFeedback: '',
    willingForFutureSurveys: '',
    emailForSurveys: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, error: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const checkedValue = checkbox.value;
      
      if (checkbox.checked) {
        setFormData(prev => ({
          ...prev,
          [name]: [...(prev[name as keyof FormData] as string[] || []), checkedValue]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: (prev[name as keyof FormData] as string[] || []).filter(item => item !== checkedValue)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult({ success: false, error: '' });

    try {
      const { error } = await supabase
        .from('volunteer_surveys')
        .insert([
          {
            considered_volunteering: formData.consideredVolunteering,
            want_to_volunteer: formData.wantToVolunteer,
            want_to_volunteer_other: formData.wantToVolunteerOther,
            current_volunteering_frequency: formData.currentVolunteeringFrequency,
            past_access_methods: formData.pastAccessMethods,
            challenges: formData.challenges,
            motivations: formData.motivations,
            willing_to_pay: formData.willingToPay,
            free_time_per_month: formData.freeTimePerMonth,
            expected_volunteering_frequency: formData.expectedVolunteeringFrequency,
            desired_features: formData.desiredFeatures,
            specific_causes: formData.specificCauses,
            additional_feedback: formData.additionalFeedback,
            willing_for_future_surveys: formData.willingForFutureSurveys,
            email_for_surveys: formData.emailForSurveys
          }
        ]);

      if (error) throw error;
      
      // Clear form
      setFormData({
        consideredVolunteering: '',
        wantToVolunteer: '',
        wantToVolunteerOther: '',
        currentVolunteeringFrequency: '',
        pastAccessMethods: [],
        challenges: [],
        motivations: [],
        willingToPay: '',
        freeTimePerMonth: '',
        expectedVolunteeringFrequency: '',
        desiredFeatures: [],
        specificCauses: '',
        additionalFeedback: '',
        willingForFutureSurveys: '',
        emailForSurveys: ''
      });
      
      setSubmitResult({ success: true, error: '' });
    } catch (error) {
      console.error('Error submitting survey:', error);
      setSubmitResult({ success: false, error: 'There was a problem submitting your survey. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Volunteer Survey</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Help us understand your volunteering needs and preferences to build the best platform for you.
          </p>
        </div>
      </section>

      {/* Survey Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Share Your Thoughts</h2>
              <p className="text-lg text-gray-700 mb-8">
                Your feedback will help us create a volunteering platform that truly meets your needs. 
                This survey should take about 5-10 minutes to complete.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">1. Is volunteering something you have ever considered?</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="consideredVolunteering"
                      value="Yes"
                      checked={formData.consideredVolunteering === 'Yes'}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="consideredVolunteering"
                      value="No"
                      checked={formData.consideredVolunteering === 'No'}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">2. Is volunteering something you would like to do in your spare time?</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="wantToVolunteer"
                      value="Yes"
                      checked={formData.wantToVolunteer === 'Yes'}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="wantToVolunteer"
                      value="No"
                      checked={formData.wantToVolunteer === 'No'}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>No</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="wantToVolunteer"
                      value="Other"
                      checked={formData.wantToVolunteer === 'Other'}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>Other</span>
                  </label>
                  {formData.wantToVolunteer === 'Other' && (
                    <input
                      type="text"
                      name="wantToVolunteerOther"
                      value={formData.wantToVolunteerOther}
                      onChange={handleChange}
                      placeholder="Please specify..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  )}
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">3. Do you volunteer already, if so how frequently?</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="currentVolunteeringFrequency"
                      value="I don&apos;t volunteer"
                      checked={formData.currentVolunteeringFrequency === "I don&apos;t volunteer"}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>I don&apos;t volunteer</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="currentVolunteeringFrequency"
                      value="I have volunteered once in the last 12 months"
                      checked={formData.currentVolunteeringFrequency === "I have volunteered once in the last 12 months"}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>I have volunteered once in the last 12 months</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="currentVolunteeringFrequency"
                      value="I have volunteered 2-5 times in the last 12 months"
                      checked={formData.currentVolunteeringFrequency === "I have volunteered 2-5 times in the last 12 months"}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>I have volunteered 2-5 times in the last 12 months</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="currentVolunteeringFrequency"
                      value="I volunteer most months"
                      checked={formData.currentVolunteeringFrequency === "I volunteer most months"}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>I volunteer most months</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="currentVolunteeringFrequency"
                      value="I am always volunteering (slay)"
                      checked={formData.currentVolunteeringFrequency === "I am always volunteering (slay)"}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>I am always volunteering (slay)</span>
                  </label>
                </div>
              </div>

              {/* Question 4 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">4. How have you accessed volunteering in the past? (multiple choice)</h3>
                <div className="space-y-2">
                  {["I haven&apos;t", "Through work", "Through school or university", "Other"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="pastAccessMethods"
                        value={option}
                        checked={formData.pastAccessMethods.includes(option)}
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 5 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">5. What challenges do you face when trying to find volunteering opportunities? (multiple choice)</h3>
                <div className="space-y-2">
                  {[
                    "Lack of time",
                    "Difficulty finding roles that match my interest",
                    "Lack of information",
                    "Unable to decide which cause to support",
                    "Previous negative experience",
                    "Accessibility",
                    "Cost",
                    "Too lengthy/complicated application process",
                    "Other"
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="challenges"
                        value={option}
                        checked={formData.challenges.includes(option)}
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 6 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">6. What would motivate you to volunteer? (multiple choice)</h3>
                <div className="space-y-2">
                  {[
                    "Giving back to the community",
                    "Learning new skills",
                    "Meeting new people / Dating",
                    "Career development",
                    "Boredom / free time",
                    "Other"
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="motivations"
                        value={option}
                        checked={formData.motivations.includes(option)}
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 7 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">7. If an app could connect you with meaningful volunteering opportunities tailored to your interests and availability, how much would you be willing to pay per month for this service?</h3>
                <div className="space-y-2">
                  {[
                    "£0 ((I prefer a free app with limited features or ads)",
                    "£1-3",
                    "£4-6",
                    "£7-10",
                    "£11+",
                    "Other"
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="willingToPay"
                        value={option}
                        checked={formData.willingToPay === option}
                        onChange={handleChange}
                        required
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 8 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">8. How much free time (roughly) do you have each month?</h3>
                <div className="space-y-2">
                  {[
                    "1-2 evenings",
                    "2-5 evenings",
                    "5-10 evenings",
                    "10< evenigs"
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="freeTimePerMonth"
                        value={option}
                        checked={formData.freeTimePerMonth === option}
                        onChange={handleChange}
                        required
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 9 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">9. How often do you think you would volunteer using Voluntiera?</h3>
                <div className="space-y-2">
                  {[
                    "Daily",
                    "Weekly",
                    "Monthly",
                    "Occasionally",
                    "Yearly",
                    "Never"
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="expectedVolunteeringFrequency"
                        value={option}
                        checked={formData.expectedVolunteeringFrequency === option}
                        onChange={handleChange}
                        required
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 10 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">10. What features would make a volunteering app most useful to you? (multiple choice)</h3>
                <div className="space-y-2">
                  {[
                    "Tailored Opportunities",
                    "Calendar Integration",
                    "Communication with Organisations",
                    "Volunteer with a friend",
                    "Impact Tracking",
                    "Other"
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="desiredFeatures"
                        value={option}
                        checked={formData.desiredFeatures.includes(option)}
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 11 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">11. Are there any specific causes you&apos;re passionate about supporting?</h3>
                <textarea
                  name="specificCauses"
                  value={formData.specificCauses}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="e.g., environmental conservation, animal welfare, education, healthcare, homelessness, etc."
                />
              </div>

              {/* Question 12 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">12. Do you have any other feedback or suggestions you would like to share with us at this stage?</h3>
                <textarea
                  name="additionalFeedback"
                  value={formData.additionalFeedback}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Any additional thoughts, suggestions, or feedback..."
                />
              </div>

              {/* Question 13 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Thank you so much for your inputs we really appreciate it! Would you be willing to be sent future surveys? (totally fine if not xx)</h3>
                <div className="space-y-2 mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="willingForFutureSurveys"
                      value="Yes"
                      checked={formData.willingForFutureSurveys === 'Yes'}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="willingForFutureSurveys"
                      value="No"
                      checked={formData.willingForFutureSurveys === 'No'}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>No</span>
                  </label>
                </div>
                
                {formData.willingForFutureSurveys === 'Yes' && (
                  <div>
                    <label htmlFor="emailForSurveys" className="block text-gray-700 font-semibold mb-2">
                      Please provide us with your email address:
                    </label>
                    <input
                      type="email"
                      id="emailForSurveys"
                      name="emailForSurveys"
                      value={formData.emailForSurveys}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary bg-[var(--primary)] text-white px-8 py-3 text-lg disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Survey'}
                </button>
              </div>
            </form>

            {submitResult.success && (
              <div className="mt-8 p-6 bg-green-50 text-green-700 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p>Your survey has been submitted successfully. Your feedback will help us create a better volunteering platform for everyone.</p>
              </div>
            )}

            {submitResult.error && (
              <div className="mt-8 p-6 bg-red-50 text-red-700 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">Error</h3>
                <p>{submitResult.error}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 