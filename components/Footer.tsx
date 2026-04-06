import React from 'react';
import styles from '../styles/Footer.module.css';
import contactStyles from '../styles/ContactSection.module.css';
import { faDiscord, faGithub, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Here we are using css mnodules 'className={styles.footer}', this allows us to have component specific css
//This will allow you to have same className components without clashing styles, the css file needs the module.css extension
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>triviaucalgary@gmail.com</p>
        <p>2500 University Drive NW, Calgary, AB</p>
      </div>
      <div className={styles.branding}>
        <p><b>Trivia Nights are Dinos Delight!</b></p>
        <p>© 2025-{new Date().getFullYear()} University of Calgary Trivia Club. All rights reserved.</p>
      </div>
      <div className={styles.social}>

            <a href="https://www.instagram.com/trivia.ucalgary/" className={contactStyles.socialIconLink} aria-label="Instagram">
              <div className={`${contactStyles.socialIconCircle} ${contactStyles.instagram}`}>
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </div>
            </a>
            <a href="https://discord.gg/sWmRgn9w2n" className={contactStyles.socialIconLink} aria-label="Discord">
              <div className={`${contactStyles.socialIconCircle} ${contactStyles.discord}`}>
                <FontAwesomeIcon icon={faDiscord} className={styles.icon} />
              </div>
            </a>
            <a href="https://github.com/uofc-trivia-club" className={contactStyles.socialIconLink} aria-label="GitHub">
              <div className={`${contactStyles.socialIconCircle} ${contactStyles.github}`}>
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              </div>
            </a>
            <a href="#" className={contactStyles.socialIconLink} aria-label="TikTok">
              <div className={`${contactStyles.socialIconCircle} ${contactStyles.tiktok}`}>
                <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
              </div>
            </a>
          </div>
    </footer>
  );
};

export default Footer;
