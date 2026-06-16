import React, { useEffect, useRef } from 'react';

import Image from 'next/image';
import aboutStyles from '../../styles/AboutSection.module.css';
import styles from '../../styles/Home.module.css';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`${styles.section} ${aboutStyles.aboutSection}`}>
      <h2 className={styles.sectionTitle}>About Us</h2>
      <div className={aboutStyles.aboutContainer}>
        <div className={aboutStyles.aboutImage}>
          <Image 
            src="/assets/RexTriviaMascot.png"
            alt="Rex - Trivia Club Mascot" 
            width={320}
            height={320}
            className={aboutStyles.mascotImage}
            priority
          />
        </div>

        <div className={aboutStyles.rowBlock}>
          <span className={aboutStyles.kicker}>For UCalgary students who love trivia</span>
          <h3>Hey there! Are you a UCalgary student who loves trivia? Then we have a club for you!</h3>
          <p>
            UCTC is a student-led club at the University of Calgary where trivia fans can gather, compete, and discover new facts together.
          </p>
        </div>

        <div className={aboutStyles.rowBlock}>
          <h3>Who are we?</h3>
          <p>
            We are a student-led club at the University of Calgary who hosts monthly events based off a variety of trivia game shows and a variety of different trivia topics.
          </p>
        </div>

        <div className={aboutStyles.rowBlock}>
          <h3>What to expect</h3>
          <p>
            From relaxed socials to competitive nights, our events are built for every kind of trivia player.
          </p>
        </div>

        <div className={aboutStyles.rowBlock}>
          <h3>Why you'll love it</h3>
          <ul className={styles.bulletList}>
            <li>A friendly, welcoming environment for all students</li>
            <li>A room full of people who actually get your references</li>
            <li>Big Dino pride and even bigger trivia energy</li>
            <li>We share knowledge, not gatekeep it</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;