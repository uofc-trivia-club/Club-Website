import React, { useEffect, useRef } from 'react';

import Link from 'next/link';
import otherStyles from '../styles/OtherSection.module.css';
import styles from '../styles/Home.module.css';

const OtherSection: React.FC = () => {
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

  const links = [
    { 
      name: "Newsletter", 
      path: "/newsletter", 
      description: "Access our official newsletter featuring trivia insights, club updates, and community content." 
    },
    { 
      name: "Resources", 
      path: "/resources", 
      description: "Enhance your trivia knowledge with our curated collection of educational resources and reference materials." 
    },
    { 
      name: "Gallery", 
      path: "/gallery", 
      description: "Browse photographs from our past competitions, social gatherings, and campus events." 
    },
    { 
      name: "Yippee", 
      path: "/yippee", 
      description: "Experience our student-developed trivia application designed to test and expand your knowledge." 
    },
    { 
      name: "DailiesBot", 
      path: "/dailiesbot", 
      description: "Implement our Discord bot to track scores and manage daily trivia competitions for your server." 
    },
    { 
      name: "Sponsorship", 
      path: "/members", 
      description: "Partner with us to support trivia competitions and events while gaining visibility within our community." 
    },
    { 
      name: "Membership", 
      path: "/membership", 
      description: "Look at the benefits you have as a member of UCTC" 
    }
  ];

  return (
    <section id="other" ref={sectionRef} className={`${styles.section} ${otherStyles.otherSection}`}>
      <h2 className={styles.sectionTitle}>Other</h2>
      <p className={otherStyles.description}>Additional resources and platforms available for club members and visitors:</p>
      
      <div className={otherStyles.buttonsContainer}>
        {links.map((link, index) => (
          <div key={index} className={otherStyles.linkItem}>
            <Link 
              href={link.path}
              className={otherStyles.linkButton}
            >
              {link.name}
            </Link>
            <p className={otherStyles.linkDescription}>{link.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherSection;
