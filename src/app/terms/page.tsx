import React from 'react';

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Terms & Conditions</h1>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="font-semibold">
                <strong>Effective Date:</strong> 4th November 2024
              </p>
              
              <p>
                Welcome to Voluntiera. By accessing or using our website and services, you agree to comply with and be bound by these Terms & Conditions. Please read these terms carefully, as they set forth your rights and obligations regarding the use of Voluntiera's platform.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">1. Introduction</h4>
              <p>
                Voluntiera provides an online platform to connect volunteers with charitable organisations for ad hoc volunteer opportunities. These Terms & Conditions govern your use of our website and services, and by using our platform, you agree to these terms in full. If you disagree with any part of these terms, you must discontinue using our website.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">2. Eligibility</h4>
              <p className="mb-4">
                To use our platform, you must:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Be at least 18 years old</li>
                <li className="mb-2">Use the platform solely for lawful purposes and in compliance with these Terms.</li>
                <li className="mb-2">Provide accurate and truthful information during sign-up and in any interactions on the platform.</li>
              </ul>

              <h4 className="text-xl font-bold mt-8 mb-4">3. User Responsibilities</h4>
              <p className="mb-4">
                You agree not to:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Use the platform to engage in any illegal activities or solicit others to do so.</li>
                <li className="mb-2">Post or share content that is harmful, offensive, or violates another individual's privacy or intellectual property rights.</li>
                <li className="mb-2">Attempt to interfere with the security or proper functioning of the platform, including unauthorised access or disruption.</li>
              </ul>

              <h4 className="text-xl font-bold mt-8 mb-4">4. Volunteering and Charitable Opportunities</h4>
              <p className="mb-4">
                Voluntiera's role is to facilitate connections between volunteers and charities; we do not vet, endorse, or guarantee any specific volunteer opportunities. Volunteers and charities are responsible for determining whether a volunteer placement or project is suitable and safe.
              </p>
              <p className="mb-2">
                <strong>Volunteers</strong>: By signing up, you agree to take part in volunteer roles at your own risk. You are responsible for confirming any necessary requirements with the respective organisation
              </p>
              <p className="mb-4">
                <strong>Charities</strong>: By joining Voluntiera, you acknowledge that volunteers are not subject to background checks through Voluntiera and should assess any additional requirements or training as needed. You agree to provide accurate information about volunteer roles, including any risks or conditions volunteers should be aware of.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">5. Data Protection and Privacy</h4>
              <p>
                Our use of your personal information is governed by our Privacy Policy, which complies with the UK GDPR and Data Protection Act 2018. By using our services, you consent to our collection and use of your data as outlined in our Privacy Policy.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">6. Intellectual Property</h4>
              <p>
                All content, trademarks, and materials on our website, including text, images, logos, and design, are owned by or licensed to Voluntiera and are protected by UK intellectual property laws. You may not copy, modify, distribute, or use any of our content without explicit permission from Voluntiera.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">7. Limitation of Liability</h4>
              <p className="mb-4">
                Voluntiera provides its platform and services 'as is' without any warranties or guarantees. We do not guarantee that our services will be uninterrupted, secure, or error-free.
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2"><strong>Volunteers and Charities</strong>: Voluntiera is not liable for any incidents, damages, or losses that occur during or as a result of volunteer placements or charity interactions. We encourage both volunteers and charities to exercise their own judgement when participating in activities facilitated through the platform.</li>
                <li className="mb-2"><strong>Platform Issues</strong>: We are not responsible for any losses or damages resulting from technical issues, data breaches, or service interruptions on our platform.</li>
              </ul>

              <h4 className="text-xl font-bold mt-8 mb-4">8. Indemnification</h4>
              <p>
                You agree to indemnify and hold Voluntiera harmless from any claims, losses, liabilities, damages, expenses, or costs arising from your use of the platform or any breach of these Terms & Conditions.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">9. Changes to Terms & Conditions</h4>
              <p>
                We may update these Terms & Conditions from time to time. Any changes will be posted on this page, and by continuing to use our services after such changes, you accept the modified terms.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">10. Termination</h4>
              <p>
                We reserve the right to suspend or terminate your account and access to the platform at our discretion, without notice, if you violate these Terms & Conditions.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">11. Governing Law</h4>
              <p>
                These Terms & Conditions are governed by the laws of England and Wales. Any disputes arising from or relating to these terms will be resolved in the courts of England and Wales.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">12. Contact Us</h4>
              <p>
                If you have any questions or concerns about these Terms & Conditions, please contact us at:
              </p>
              <ul className="list-none ml-6 mb-6">
                <li className="mb-2"><strong>Email:</strong> [contact@voluntiera.org]</li>
              </ul>

              <p className="font-semibold mt-8">
                By using Voluntiera, you agree to these Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 