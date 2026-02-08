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
        <div className={aboutStyles.aboutContent}>
          <h3>The Big Idea</h3>
          <p>
            Niche facts find a home at the University of Calgary Trivia Club (UCTC). If you're a walking encyclopedia or just here for the vibes, we bring students together to celebrate the thrill of the quest for knowledge. No topic is too niche; no fact is too small.
          </p>
          
          <h3>How We Play</h3>
          <p>
            UCTC hosts trivia for every speed. Whether you want a low pressure night to hang out with friends or a competitive match to flex your obscure knowledge, we've got you covered. Our categories span history, science, pop culture, and everything in between. No matter what you're into, you're in for a good time.
          </p>

          <h3>What We Promote</h3>
          <p>
            At UCTC, winning is secondary... 
            <br></br>
            It's about learning something new, making connections, and the sheer satisfaction of using that one weird fact you've been sitting on for years.
          </p>
          
          <p className={styles.listHeading}>Why you'll love it here:</p>
          <ul className={styles.bulletList}>
            <li>A friendly, welcoming environment for all students</li>
            <li>A room full of people who actually get your references</li>
            <li>Unmatched Dino pride (and arguably better facts).</li>
            <li>We’re all about sharing knowledge, not gatekeeping it.</li>
          </ul>
          
        </div>
        <div className={aboutStyles.aboutImage}>
          <Image 
            src="/assets/RexTriviaMascot.png"
            alt="Rex - Trivia Club Mascot" 
            width={300}
            height={300}
            className={aboutStyles.mascotImage}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;