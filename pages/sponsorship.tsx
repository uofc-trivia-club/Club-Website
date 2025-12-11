import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import styles from '../styles/SubpageLayout.module.css';

const SponsorshipPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Sponsorship Opportunities | UCalgary Trivia Club</title>
        <meta name="description" content="Partner with UC Trivia Club to support our competitions and events while gaining visibility within our engaged community." />
      </Head>

      <SubpageHeader title="Sponsorship Opportunities" />
      
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <p className="text-lg mb-6">
            Partner with UC Trivia Club to support our competitions and events while gaining visibility within our engaged community.
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Sponsor Us?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Reach an engaged student audience</li>
              <li>Support educational activities and competitions</li>
              <li>Gain brand visibility at events and on our platforms</li>
              <li>Build community relationships</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Sponsorship Package</h2>
            <p className="mb-4">
              Download our comprehensive sponsorship package to learn more about partnership opportunities and benefits.
            </p>
            <a 
              href="/assets/documents/sponsorship-package.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Sponsorship Package (PDF)
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>Interested in sponsorship? Reach out to discuss partnership opportunities.</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SponsorshipPage;
