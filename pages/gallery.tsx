import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import styles from '../styles/SubpageLayout.module.css';
import Slider from '../components/Carusel';
import flex from '../styles/Carousel.module.css';

const Gallery: React.FC = () => {
  
  const BattleOfBuzzersImages = [
    "/assets/EventImages/BattleOfBuzzers/IMG_20260130_170255.jpg",
    "/assets/EventImages/BattleOfBuzzers/IMG_20260130_171210.jpg",
    "/assets/EventImages/BattleOfBuzzers/IMG_20260130_171303.jpg",
    "/assets/EventImages/BattleOfBuzzers/IMG_20260130_180428.jpg",
    "/assets/EventImages/BattleOfBuzzers/IMG_20260130_180605.jpg",
    "/assets/EventImages/BattleOfBuzzers/IMG_20260130_183216.jpg",
    "/assets/EventImages/BattleOfBuzzers/IMG_20260130_183952.jpg",
    "/assets/EventImages/BattleOfBuzzers/IMG_20260130_192044_1.jpg"
  ];

  const JeopardyImages = [
    "/assets/EventImages/Jeopardy/PXL_20251125_000825898.jpg",
    "/assets/EventImages/Jeopardy/PXL_20251125_001158859.jpg",
    "/assets/EventImages/Jeopardy/PXL_20251125_001258880.jpg",
    "/assets/EventImages/Jeopardy/PXL_20251125_002518035.jpg",
    "/assets/EventImages/Jeopardy/PXL_20251125_020248531.jpg", 
    "/assets/EventImages/Jeopardy/PXL_20251125_020319739.jpg",
    "/assets/EventImages/Jeopardy/PXL_20251125_020438008.jpg"
  ];

  const NetflixImages = [
    "/assets/EventImages/NetflixAndChill/IMG_20251203_143212.jpg",
    "/assets/EventImages/NetflixAndChill/IMG_20251203_144429.jpg",
    "/assets/EventImages/NetflixAndChill/IMG_20251203_144534.jpg",
    "/assets/EventImages/NetflixAndChill/IMG_20251203_144804.jpg"
  ];

  const ShenanigansImages = [
    "/assets/EventImages/Shenanigans/PXL_20251106_000305765.jpg",
    "/assets/EventImages/Shenanigans/PXL_20251106_000325206.jpg",
    "/assets/EventImages/Shenanigans/PXL_20251106_000359405.jpg"
  ];

  const WeakestLinkImages = [
    "/assets/EventImages/WeakestLink/IMG_20260227_180220.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_180408.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_180422.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_180427.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_180534_1.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_180601.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_180628_1.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_181736.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_181849_2.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_190823.jpg",
    "/assets/EventImages/WeakestLink/IMG_20260227_190836_1.jpg"

  ];

    return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Gallery| UCalgary Trivia Club</title>
        <meta name="description" content="Description of the page" />
      </Head>

      <SubpageHeader title="Page Title" />
      
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <h2>University of Calgary Trivia Club Gallery</h2>
          <p>From lively Trivia Nights to exciting Jeopardy-style competitions, the University of Calgary Trivia Club never fails to challenge your knowledge and quick thinking. Take a look at some photos from our past events and see why we’re one of the best clubs on campus!</p>
        </div>

        <div className={flex.layout}>
            <div className={flex.flexItem}>
                <h2>Battle of the Buzzers</h2>
                <Slider images = {BattleOfBuzzersImages}/>
            </div>
            
            <div className={flex.flexItem}>
                <h2>Jeopardy</h2>
                 <Slider images = {JeopardyImages}/>
            </div>
            
            <div className={flex.flexItem}>
                <h2>Netflix and Chill</h2>
                    <Slider images = {NetflixImages}/>
            </div>

            <div className={flex.flexItem}>
                <h2>The Weakest Link</h2>
                    <Slider images = {WeakestLinkImages}/>
            </div>
            
            <div className={flex.flexItem}>
                <h2>Shenanigans Collab</h2>
                    <Slider images = {ShenanigansImages}/>
            </div>
            
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
