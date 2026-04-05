import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import styles from '../styles/SubpageLayout.module.css';
import Image from 'next/image';
import btnStyles from "../styles/Newsletter.module.css";
import { useState } from "react";


const NewsletterPage: React.FC = () => {
  const [selected, setSelected] = useState("april-2026");
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
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <button
              className = {`${btnStyles.newsletterButton} ${selected === "april-2026" ? styles.activeButton : ""}`}
              onClick={() => setSelected("april-2026")}>
              April 2026
            </button>


            <button
              className = {`${btnStyles.newsletterButton} ${selected === "mar-2026" ? styles.activeButton : ""}`}
              onClick={() => setSelected("mar-2026")}>
              March 2026
            </button>


            <button
              className = {`${btnStyles.newsletterButton} ${selected === "feb-2026" ? styles.activeButton : ""}`}
              onClick={() => setSelected("feb-2026")}>
              Febuary 2026
            </button>


            <button
              className = {`${btnStyles.newsletterButton} ${selected === "jan-2026" ? styles.activeButton : ""}`}
              onClick={() => setSelected("jan-2026")}>
              January 2026
            </button>


            <button
              className = {`${btnStyles.newsletterButton} ${selected === "dec-2025" ? styles.activeButton : ""}`}
              onClick={() => setSelected("dec-2025")}>
              December 2025
            </button>


            <button
              className = {`${btnStyles.newsletterButton} ${selected === "nov-2025" ? styles.activeButton : ""}`}
              onClick={() => setSelected("nov-2025")}>
              November 2025
            </button>


            <button
              className = {`${btnStyles.newsletterButton} ${selected === "oct-2025" ? styles.activeButton : ""}`}
              onClick={() => setSelected("oct-2025")}>
              October 2025
            </button>


            <button
              className = {`${btnStyles.newsletterButton} ${selected === "sept-2025" ? styles.activeButton : ""}`}
              onClick={() => setSelected("sept-2025")}>
              September 2025
            </button>


          </div>
          <div className={styles.placeholder}>
            {selected === "april-2026" && (
              <>
                <Image src="/assets/Newsletter Pages/April 2026 Page 1.jpg" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Apr 2026 Page 2.jpg" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Apr 2026 Page 3.jpg" alt="" width={720} height={720} />
              </>
            )}
            {selected === "mar-2026" && (
              <>
                <Image src="/assets/Newsletter Pages/Mar 2026 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Mar 2026 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Mar 2026 Page 3.png" alt="" width={720} height={720} />
              </>
            )}
            {selected === "feb-2026" && (
              <>
                <Image src="/assets/Newsletter Pages/Feb 2026 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Feb 2026 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Feb 2026 Page 3.png" alt="" width={720} height={720} />
              </>
            )}


            {selected === "jan-2026" && (
              <>
                <Image src="/assets/Newsletter Pages/January 2026 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/January 2026 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/January 2026 Page 3.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/January 2026 Page 4.png" alt="" width={720} height={720} />
              </>
            )}
            {selected === "dec-2025" && (
              <>
                <Image src="/assets/Newsletter Pages/December 2025 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/December 2025 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/December 2025 Page 3.png" alt="" width={720} height={720} />
              </>
            )}


            {selected === "nov-2025" && (
              <>
                <Image src="/assets/Newsletter Pages/November 2025 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/November 2025 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/November 2025 Page 3.png" alt="" width={720} height={720} />
              </>
            )}


            {selected === "oct-2025" && (
              <>
                <Image src="/assets/Newsletter Pages/October 2025 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/October 2025 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/October 2025 Page 3.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/October 2025 Page 4.png" alt="" width={720} height={720} />
              </>
            )}


            {selected === "sept-2025" && (
              <>
                <Image src="/assets/Newsletter Pages/September 2025 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/September 2025 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/September 2025 Page 3.png" alt="" width={720} height={720} />
              </>
            )}            
          </div>
        </div>
      </main>
     
      <Footer />
    </div>
  );
};


export default NewsletterPage;
