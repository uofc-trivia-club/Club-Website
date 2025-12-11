import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import memberStyles from '../styles/MembershipSection.module.css';
import styles from '../styles/Home.module.css';

const MembershipSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="membership" 
      ref={sectionRef}
      className={`${styles.section} ${memberStyles.membershipSection} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={styles.sectionTitle}>Membership</h2>
      
      {/* How to Join Section */}
      <div className={memberStyles.memberContainer}>
        <h3 className={styles.sectionTitle}>How to Join</h3>
        
        <div className={memberStyles.membersContainer}>
          {/* Member Card */}
          <div className={memberStyles.memberCard}>
            <div className={memberStyles.cardContent}>
              <h3>Become a Member</h3>
              <p>
                Join our community of trivia enthusiasts! 
              </p>
              <p>
                As a member, you'll get access to:
              </p>
              <ul className={styles.bulletList}>
                <li>Weekly small trivia meetings</li>
                <li>Other special events and competitions</li>
                <li>Monthly newsletters via email</li>
                <li>Connect with fellow trivia fans</li>
              </ul>
              <p>
                Membership is free and open to all students!
              </p>
            </div>
            <div className={memberStyles.buttonContainer}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeAC_U5k0pRnWev-RikadYsEi8WGku6O7ilecoZM26sWI4wWA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.primaryButton}>
                  Apply Now
                </button>
              </a>
            </div>
          </div>
          
          {/* Executive Card */}
          <div className={memberStyles.memberCard}>
            <div className={memberStyles.cardContent}>
              <h3>Executive Positions</h3>
              <p>
                Interested in a leadership role? The executive team helps run events, manage finances, connect with members, and guide the club.
              </p>
              <p className={styles.listHeading}>
                Executive positions include:
              </p>
              <ul className={styles.twoColumnList}>
                <li>President</li>
                <li>VP Finance</li>
                <li>VP Internal</li>
                <li>VP External</li>
                <li>VP Events</li>
                <li>VP Marketing</li>
              </ul>
              <p>
                First- or second-year? Join our Junior Executive Program for leadership experience with lighter responsibilities.
              </p>
            </div>
            <div className={memberStyles.buttonContainer}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdP4TnBVH3eN-QXyHmv5n_qB4K35MesnSURI9QcWs3D_eEcNQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.primaryButton}>
                  Apply Now
                </button>
              </a>
            </div>
          </div>
          
          {/* Other Positions Card */}
          <div className={memberStyles.memberCard}>
            <div className={memberStyles.cardContent}>
              <h3>Software Dev Team</h3>
              <p>
                Are you a Computer Science or Software Engineering student, or someone who likes to code?
                <br></br>
                Join our Software Dev Team! We have a bunch of neat projects going on
              </p>
              <ul className={styles.bulletList}>
                <li>Trivia Web Application</li>
                <li>Trivia Web Game</li>
                <li>Discord Bots</li>
                <li>Trivia Web Game</li>
                <li>Club Website</li>
              </ul>
            </div>
            <div className={memberStyles.buttonContainer}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfHysr_-Xoq7PYJu9mE-XCbAFjmfdqs9rJsFJ8Rdn1WK2cCQQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.primaryButton}>
                  Apply Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Current Members Section */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Current Members</h2>
        <p>Meet the team behind our UCalgary Trivia community</p>
        <div style={{ marginTop: '20px' }}>
          <Link href="/members">
            <button className={styles.primaryButton}>
              Learn More About Our Executive Team Members!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
