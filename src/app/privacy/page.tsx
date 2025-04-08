import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>
                Voluntiera is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with the UK GDPR and Data Protection Act 2018 when you visit our website and engage with our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we treat it.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">1. Information we collect</h4>
              <p className="mb-4">
                When you sign up for updates or express interest in our services, we may collect the following information:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2"><strong>Personal Details</strong>: Name, email address, and other information you voluntarily provide when completing our sign-up forms.</li>
                <li className="mb-2"><strong>Organisational Information</strong>: If you represent a charity, we may collect data such as organisation name, address, and contact details of representatives to facilitate our services.</li>
                <li className="mb-2"><strong>Technical Data</strong>: When you use our website, we may automatically collect information such as your IP address, browser type, operating system, and interaction with the website. We use cookies and similar tracking technologies to collect this information. Please see our Cookie Policy for more details.</li>
              </ul>

              <h4 className="text-xl font-bold mt-8 mb-4">2. How we use your information</h4>
              <p className="mb-4">
                We use the data we collect for the following purposes:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">To provide you with information on Voluntiera, including news, updates, and potential volunteer opportunities.</li>
                <li className="mb-2">To facilitate volunteer matches for charities, helping connect volunteers with specific organisational needs.</li>
                <li className="mb-2">To share relevant volunteer data with charities and charity information with volunteers to establish a working relationship and meet volunteering needs.</li>
                <li className="mb-2">To improve our website, user experience, and offerings.</li>
                <li className="mb-2">To respond to your inquiries, manage subscriptions, and provide customer support.</li>
                <li className="mb-2">For internal analysis and research to understand user interests and to enhance our services.</li>
              </ul>

              <h4 className="text-xl font-bold mt-8 mb-4">3. Legal Basis for Processing</h4>
              <p className="mb-4">
                Our legal basis for processing personal data under the UK GDPR and Data Protection Act 2018 includes:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2"><strong>Consent</strong>: We obtain your consent for marketing communications and updates via email.</li>
                <li className="mb-2"><strong>Lawful Interests</strong>: Processing is necessary for improving and operating our website, sharing volunteer data with charities and vice versa, and facilitating volunteer matching.</li>
              </ul>

              <h4 className="text-xl font-bold mt-8 mb-4">4. Data Sharing Between Volunteers and Charities</h4>
              <p>
                We share relevant volunteer data with charities and relevant charity data with volunteers as part of the Voluntiera platform's functionality. This data sharing is strictly for the purposes of connecting volunteers with organisations that align with their interests and skills. All parties are required to respect data confidentiality as outlined in this Privacy Policy.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">5. Data Storage, Retention and Disposal</h4>
              <p>
                We store your data securely and retain it only as long as necessary to fulfil the purposes for which it was collected or as required by law. If you wish to delete your information, please contact us at [contact@voluntiera.org].
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">6. Your Data Protection Rights</h4>
              <p className="mb-4">
                Under UK GDPR, you have rights including:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">The right to access – You have the right to request copies of your personal data.</li>
                <li className="mb-2">The right to rectification – You can ask us to correct inaccurate information.</li>
                <li className="mb-2">The right to erasure – You have the right to request the deletion of your data under certain conditions.</li>
                <li className="mb-2">The right to restrict processing – You may request limited use of your data.</li>
                <li className="mb-2">The right to object – You have the right to object to our processing of your data.</li>
                <li className="mb-2">The right to data portability – You may request that we transfer the data we have collected to another organisation, or directly to you.</li>
              </ul>

              <p>
                To exercise any of these rights, please contact us at [contact@voluntiera.org].
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">7. Data Security</h4>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. While we strive to protect your data, we cannot guarantee its absolute security.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">8. Cookies</h4>
              <p>
                Our website uses cookies to collect information about your browsing activities. You can adjust your browser settings to refuse cookies, but note that this may affect website functionality. For more details, please see our Cookie Policy.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">9. Changes to This Privacy Policy</h4>
              <p>
                We may update this Privacy Policy to reflect changes to our practices. Any updates will be posted on this page, and we encourage you to review it periodically.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">10. Contact Us</h4>
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
              </p>
              <ul className="list-none ml-6 mb-6">
                <li className="mb-2"><strong>Email:</strong> [contact@voluntiera.org]</li>
              </ul>

              <p className="font-semibold mt-8">
                By using our website, you consent to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 