import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';
import partnerStyles from '../../styles/CommunityPartnersSection.module.css';

const CommunityPartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    if (sectionRef.current){
         observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current){
        observer.unobserve(sectionRef.current);
      } 
    };
  }, []);

  return (
    <section
      id="community_partners"
      ref={sectionRef}
      className={`${styles.section} ${partnerStyles.partnersSection}`}
    >
      <h2 className={styles.sectionTitle}>Community Partners</h2>
      <p className={partnerStyles.subtitle}>
        Support the places that support our trivia community!
      </p>

    {/* GN Cafe Partner Card */}
    <div className={partnerStyles.partnersContainer}>
        <div className={partnerStyles.partnerCard}>
            <h3 className={partnerStyles.partnerTitle}>GN Cafe</h3>

            <div className={partnerStyles.partnerLogoWrap}>
                <Image
                src="/assets/GN_Cafe_Logo.png"
                alt="GN Cafe"
                width={200}
                height={200}
                className={partnerStyles.partnerLogo}
                />
            </div>

            <p className={partnerStyles.partnerText}>
                Get <strong>10% off</strong> when you show your membership card.
            </p>

            <div className={partnerStyles.partnerButtonWrap}>
                <a
                href="https://maps.app.goo.gl/yzK78282MPFkVumf6"
                target="_blank"
                rel="noopener noreferrer"
                >
                <button className={partnerStyles.partnerContainerButton}>
                    Open In Google Maps
                </button>
                </a>
            </div>
        </div>
    </div>

    </section>
  );
};

export default CommunityPartnersSection;
