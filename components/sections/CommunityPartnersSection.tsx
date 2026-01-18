import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';
import partnerStyles from '../../styles/CommunityPartnersSection.module.css';

interface CardProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  discount?: string;
  customText?: string;
  mapsLink: string;
}

function CommunityPartnerCard({ title, imgSrc, imgAlt, discount = "", customText = "", mapsLink }: CardProps) {
  return (
    <div className={partnerStyles.partnerCard}>
        <h3 className={partnerStyles.partnerTitle}>{title}</h3>

        <div className={partnerStyles.partnerLogoWrap}>
            <Image
            src={imgSrc}
            alt={imgAlt}
            width={200}
            height={200}
            className={partnerStyles.partnerLogo}
            />
        </div>

        {discount && <p className={partnerStyles.partnerText}>
          Get <span style={{ fontWeight: 'bold' }}>{discount}</span> when you show your membership card.
        </p>}
        {customText && <p className={partnerStyles.partnerText}>
          {customText}
        </p>}

        <div className={partnerStyles.partnerButtonWrap}>
            <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className={partnerStyles.partnerContainerButton}>
                Open In Google Maps
            </button>
            </a>
        </div>
    </div>
  );
}

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

    <div className={partnerStyles.partnersContainer}>
      {/* GN Cafe Card */}
      <CommunityPartnerCard 
        title='GN Cafe' 
        imgSrc='/assets/partnerLogos/GN_Cafe_Logo.png'
        imgAlt='GN Cafe logo'
        discount='10% off'
        mapsLink='https://maps.app.goo.gl/yzK78282MPFkVumf6'
      />

      {/* Royal Tea House Card */}
      <CommunityPartnerCard 
        title='Royal Tea House' 
        imgSrc='/assets/partnerLogos/Royal_Tea_House_Logo_temp.jpg'
        imgAlt='Royal Tea House logo'
        discount='10% off'
        mapsLink='https://maps.app.goo.gl/26KpyGj2GrNpgxjs7'
      />
    </div>

    </section>
  );
};

export default CommunityPartnersSection;
