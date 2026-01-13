import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import FAQ from '../components/sections/FAQ';
import Head from 'next/head';
import MembershipSection from '../components/sections/MembershipSection';
import OtherSection from '../components/sections/OtherSection';
import ParticleBackground from '../components/ParticleBackground';
import React from 'react';
import TriviaSection from '../components/sections/TriviaSection';
import CommunityPartnersSection from '../components/sections/CommunityPartnersSection';
import particleStyles from '../styles/ParticleBackground.module.css';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Your Site Titl</title>
        <meta name="description" content="Your site description" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <ParticleBackground />
      <main className={styles.main}>
        <div className="content-container">
          <div className={particleStyles.withParticles}>
            <AboutSection />
            <MembershipSection />
            <TriviaSection />
            <CommunityPartnersSection />
            <OtherSection />
            <FAQ />
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;