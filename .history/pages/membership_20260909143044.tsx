import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import CommunityPartnersSection from '../components/sections/CommunityPartnersSection';
import styles from '../styles/SubpageLayout.module.css';
import particleStyles from '../styles/ParticleBackground.module.css';

const MembershipPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Membership | UCalgary Trivia Club</title>
        <meta name="description" content="Join UC Trivia Club and enjoy exclusive benefits and discounts at local businesses while competing in trivia events." />
      </Head>

      <SubpageHeader title="Membership" />
      
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <p className="text-lg mb-6">
            Become a UCTC member and unlock exclusive benefits while competing in exciting trivia events!
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Member Benefits</h2>
            <p className="mb-4">As a UC Trivia Club member, you'll enjoy:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Priority Registration:</strong> Early access to trivia competitions</li>
              <li><strong>Exclusive Events:</strong> Members-only trivia nights and socials</li>
              <li><strong>Partner Discounts:</strong> Special offers from local businesses (see our Community Partners!)</li>
            </ul>
            <div className={particleStyles.withParticles}>
              <CommunityPartnersSection />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How to Become a Member</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Step 1: Register on Campus</h3>
                <p>Sign up through the University of Calgary Students' Union (SU) or visit us at any of our events.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Step 2: Pay Membership Fee</h3>
                <p>Annual membership is just $10 for students, $15 for non-students.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Step 3: Start Enjoying Benefits</h3>
                <p>Receive your membership card and start using your benefits immediately!</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h2 className="text-2xl font-semibold mb-4">Thank You to Our Sponsors</h2>
            <p className="mb-4">
              We're grateful for the support of our sponsors who help make our events and competitions possible. 
              Their contributions enable us to provide an engaging trivia experience for our community.
            </p>
          </section>

          <section className="mb-12 bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h2 className="text-2xl font-semibold mb-4">Want to Sponsor UCTC?</h2>
            <p className="mb-4">
              Are you a business owner or organization interested in partnering with UC Trivia Club? 
              We'd love to hear from you! Sponsorship opportunities help support our events and competitions 
              while giving your business visibility within our engaged student community.
            </p>
            <div className="space-y-3">
              <p className="font-semibold">Benefits for sponsors include:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Brand visibility at our events</li>
                <li>Social media promotion</li>
                <li>Logo placement on our website and materials</li>
                <li>Direct access to an engaged student audience</li>
              </ul>
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="/sponsorship" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More About Sponsorship
                </a>
                <a 
                  href="/assets/documents/sponsorship-package.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Download Sponsorship Package (PDF)
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MembershipPage;
