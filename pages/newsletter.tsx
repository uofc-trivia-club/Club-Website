import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import styles from '../styles/SubpageLayout.module.css';

const NewsletterPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Newsletter | UCalgary Trivia Club</title>
        <meta name="description" content="Stay updated with our latest trivia insights, club updates, and community content." />
      </Head>

      <SubpageHeader title="Newsletter" />
      
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <p className="text-lg mb-6">
            Stay updated with our latest trivia insights, club updates, and community content.
          </p>
          
          <div className={styles.placeholder}>
            <p>Newsletter content coming soon!</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsletterPage;
