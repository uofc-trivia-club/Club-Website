import React from 'react';
import Head from 'next/head';
import SubpageLayout from '../components/layouts/SubpageLayout';
import styles from '../styles/Subpage.module.css';
import { NextPageWithLayout } from '../types/page';
import SoftwareProjectCard from '../components/SoftwareProjectCard';
import { title } from 'process';

const softwareProjects = [
  {
    title: "Yippee!",
    description: "Our student-developed trivia application designed to test and expand your knowledge.",
    extendedDescription:
      `
      Yippee! is an ambitious, campus-scale trivia platform designed to rival and surpass existing commercial solutions such as Kahoot,
      while remaining completely free and student-driven.\n
      The system enables University of Calgary students to create, host, and participate in live trivia games during weekly and monthly club events, lectures, and social gatherings.
      Unlike commercial trivia platforms that restrict features behind paywalls, 
      Yippee! aims to democratize interactive learning and entertainment by offering advanced functionality.\n
      Those include: richer analytics, flexible quiz formats, persistent scoring, and community-driven customization at no cost. 
      The long-term vision is to establish Yippee! as a flagship digital platform for student engagement at the University of Calgary, 
      fostering collaboration, competition, and campus culture through real-time interactive play.
      `.trim(),
    href: "/yippee"
  },
  {
    title:"Discord Dailies Bot",
    description: "The University of Calgary Trivia Club's website, the one you're on right now!",
    extendedDescription:
    `
    The Discord Dailies Bot is designed to track user performance across multiple daily games, including but not limited to: \n
    Wordle, TimeGuessr, Connections, FoodGuessr, Tradle, Strands, Contexto, Pips, Worldle, and Globle. \n
    The bot automatically parses shared game results posted in Discord channels, converts them into point values, and stores both cumulative and per-day scores. \n
    Users can query their own statistics, view game-specific or global leaderboards, and see top scorers for the current day or week. \n
    The system aims to encourage engagement and friendly competition within the Discord community while maintaining accurate and reliable score tracking.
    `.trim(),
    href: "/dailiesbot"
  },
  {
    title:"UCTC Website",
    description: "The University of Calgary Trivia Club's website, the one you're on right now!",
    extendedDescription:
    `
    A public-facing website for people to discover our club, read up about us, and get in contact with the team.
    `.trim(),
    href: "/"
  }
];

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

        {/*TODO css*/}
        <div className={styles.softwareProjectsContainer}>
          {softwareProjects.map((project, index) => (
            <SoftwareProjectCard
              key={index}
              title={project.title}
              description={project.description}
              extendedDescription={project.extendedDescription}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </>
  );
};

SoftwareProjectsPage.getLayout = (page: React.ReactElement) => (
  <SubpageLayout pageTitle="Software Projects">{page}</SubpageLayout>
);

export default SoftwareProjectsPage;
