import React from 'react';
import Head from 'next/head';
import SubpageLayout from '../components/layouts/SubpageLayout';
import styles from '../styles/Subpage.module.css';
import { NextPageWithLayout } from '../types/page';

const SoftwareProjectsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Software Projects | UCalgary Trivia Club</title>
        <meta
          name="description"
          content="Software projects built by the University of Calgary Trivia Club."
        />
      </Head>

      <div className={styles.pageContent}>
        <h2 className={styles.contentHeading}>Software Projects</h2>
        <p className={styles.contentParagraph}>
          Explore software projects from our club.
        </p>

        <div className={styles.placeholder}>
          <p>Software projects content</p>
        </div>
      </div>
    </>
  );
};

SoftwareProjectsPage.getLayout = (page: React.ReactElement) => (
  <SubpageLayout pageTitle="Software Projects">{page}</SubpageLayout>
);

export default SoftwareProjectsPage;
