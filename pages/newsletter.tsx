import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import styles from '../styles/SubpageLayout.module.css';
import Image from 'next/image';
import btnStyles from "../styles/Newsletter.module.css";
import { useState } from "react";


const NewsletterPage: React.FC = () => {
  const [year, setYear] = useState("2026");
  const [month, setMonth] = useState("april");
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
            
            {/* Year */}
            <select
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
                setMonth(""); // reset month when year changes
              }}
              className={btnStyles.dropdown}
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>

            {/* Month */}
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={btnStyles.dropdown}
            >
              {year === "2026" && (
                <>
                  <option value="april">April</option>
                  <option value="march">March</option>
                  <option value="febuary">February</option>
                  <option value="january">January</option>
                </>
              )}

              {year === "2025" && (
                <>
                  <option value ="december">December</option>
                  <option value ="november">November</option>
                  <option value ="october">October</option>
                  <option value ="september">September</option>
                </>
              )}
            </select>

          </div>          

          <div className={btnStyles.newsletter}>
            {year === "2026" && month === "april" && (
              <>
                <Image src="/assets/Newsletter Pages/April 2026 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Apr 2026 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Apr 2026 Page 3.png" alt="" width={720} height={720} />
              </>
            )}
            {year === "2026" && month === "march" && (
              <>
                <Image src="/assets/Newsletter Pages/Mar 2026 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Mar 2026 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Mar 2026 Page 3.png" alt="" width={720} height={720} />
              </>
            )}
            {year === "2026" && month === "febuary" && (
              <>
                <Image src="/assets/Newsletter Pages/Feb 2026 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Feb 2026 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/Feb 2026 Page 3.png" alt="" width={720} height={720} />
              </>
            )}


            {year === "2026" && month === "january" && (
              <>
                <Image src="/assets/Newsletter Pages/January 2026 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/January 2026 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/January 2026 Page 3.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/January 2026 Page 4.png" alt="" width={720} height={720} />
              </>
            )}
            {year === "2025" && month === "december" && (
              <>
                <Image src="/assets/Newsletter Pages/December 2025 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/December 2025 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/December 2025 Page 3.png" alt="" width={720} height={720} />
              </>
            )}


            {year === "2025" && month === "november" && (
              <>
                <Image src="/assets/Newsletter Pages/November 2025 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/November 2025 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/November 2025 Page 3.png" alt="" width={720} height={720} />
              </>
            )}


            {year === "2025" && month === "october" && (
              <>
                <Image src="/assets/Newsletter Pages/October 2025 Page 1.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/October 2025 Page 2.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/October 2025 Page 3.png" alt="" width={720} height={720} />
                <Image src="/assets/Newsletter Pages/October 2025 Page 4.png" alt="" width={720} height={720} />
              </>
            )}


            {year === "2025" && month === "september" && (
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
 