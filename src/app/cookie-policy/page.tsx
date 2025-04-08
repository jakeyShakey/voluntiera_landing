import React from 'react';

export default function CookiePolicyPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cookie Policy</h1>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="font-semibold mb-8">
                Effective 4th November 2024
              </p>

              <p>
                At Voluntiera, we are committed to ensuring your privacy and providing transparency about how we use cookies on our website. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookie use, in line with UK GDPR and the Data Protection Act 2018.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">1. What Are Cookies?</h4>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They allow us to recognise your device and remember certain information about your preferences or past actions on the site. Cookies help us improve our website's functionality and enhance your user experience.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">2. Types of Cookies We Use</h4>
              <p className="mb-4">
                We use the following types of cookies on our website:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2"><strong>Strictly Necessary Cookies</strong>: These cookies are essential for the website to function correctly. They enable basic functionalities such as page navigation and access to secure areas of the website. Without these cookies, some parts of the website may not function.</li>
                <li className="mb-2"><strong>Performance and Analytics Cookies</strong>: These cookies allow us to analyse how visitors use our website, helping us improve our content, navigation, and user experience. Data collected by these cookies is aggregated and anonymous.</li>
                <li className="mb-2"><strong>Functionality Cookies</strong>: These cookies remember your choices and preferences, such as language settings or region, to provide a more personalised experience.</li>
                <li className="mb-2"><strong>Targeting or Advertising Cookies</strong>: We may use cookies to deliver content that is more relevant to you and your interests, helping us measure the effectiveness of our campaigns. These cookies may track your browsing habits across other websites to better understand your preferences.</li>
              </ul>

              <h4 className="text-xl font-bold mt-8 mb-4">3. How We Use Cookies</h4>
              <p className="mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Enhance website functionality and improve your user experience.</li>
                <li className="mb-2">Analyse site traffic and track usage patterns to improve site performance.</li>
                <li className="mb-2">Remember your choices and personalise your experience on our website.</li>
                <li className="mb-2">Deliver relevant content and measure the effectiveness of our campaigns.</li>
              </ul>

              <h4 className="text-xl font-bold mt-8 mb-4">4. Third-Party Cookies</h4>
              <p>
                We may allow certain trusted third parties to place cookies on our website to help us understand user behaviour, improve our website's functionality, and deliver relevant content. These third parties include analytics providers like Google Analytics. Please refer to their privacy policies for more information on how they use cookies.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">5. Your Cookie Choices</h4>
              <p>
                When you first visit our website, you'll see a cookie banner asking for your consent to use certain types of cookies. You can manage your choices at any time by adjusting your browser settings to accept or decline cookies. However, please note that disabling certain cookies may affect the functionality of our website.
              </p>
              <p className="mt-4">
                For more information on managing cookies, you can visit www.aboutcookies.org or www.allaboutcookies.org.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">6. Changes to This Cookie Policy</h4>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. Any changes will be posted on this page, so please review it periodically.
              </p>

              <h4 className="text-xl font-bold mt-8 mb-4">7. Contact Us</h4>
              <p>
                If you have questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <ul className="list-none ml-6 mb-6">
                <li className="mb-2"><strong>Email:</strong> [contact@voluntiera.org]</li>
              </ul>

              <p className="font-semibold mt-8">
                By continuing to use our website, you agree to our use of cookies as described in this Cookie Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 