import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import memberStyles from '../styles/MembershipSection.module.css';
import styles from '../styles/SubpageLayout.module.css';

interface Member {
  name: string;
  position: string;
  imageUrl?: string;
  bio?: string;
}

const MembersPage: React.FC = () => {
  const currentMembers: Member[] = [
    {
      name: "Chloe",
      position: "President",
      imageUrl: "/assets/chloe.png",
      bio: "I made a trivia club because I love trivia so much! 🤩🤩🤩"
    },
    {
      name: "Chantae",
      position: "VP Finance",
      imageUrl: "/assets/chantae.png",
      bio: "Amateur trivia enthusiast, whose side job is being a software engineering student 😆. In the 'trivial pursuit' of the perfect trivia team name (suggestions welcome). Looking forward to going to trivia events this year!"
    },
    {
      name: "Sukriti",
      position: "VP External",
      imageUrl: "/assets/sukriti.jpg",
      bio: "I am Sukriti a 4th year software Engg and business student. I love spending time with my friends and be nerdy together"
    },
    {
      name: "Maham",
      position: "Media Commissioner",
      imageUrl: "/assets/maham.jpeg",
      bio: "hey!! my name is maham and i'm a 5th year software engg student doing a minor in biomedical engg. i love painting when im not ripping my hair out while debugging code. my guessing accuracy is 56.5% so don't bother copying my answers on trivia nights"
    },
    {
      name: "Huiying",
      position: "VP Events",
      imageUrl: "/assets/huiying.jpeg",
      bio: "Hey! I'm in my last semester of software engineering. I like to explore new hobbies in my free time and I joined this club because I enjoy learning random facts everyday!"
    },
    {
      name: "Typhen",
      position: "VP Marketing",
      imageUrl: "/assets/typhen.png",
      bio: "a chill dude"
    },
    {
      name: "Serenity",
      position: "Junior Exec",
      imageUrl: "/assets/serenity.jpg",
      bio: "Hi!!!  I am Serenity and I am currently in my second year as a communications student.  I am very very bad at trivia…. Yayyy! ( ;´꒳`;)"    },
    {
      name: "Caitlyn",
      position: "Junior Exec",
      imageUrl: "/assets/caitlyn.jpg",
      bio: "Hey! It's Caitlyn. I'm a second year biomedical engineering major and suck at trivia! So if you're scared to join because you lack experience and knowledge, don't worry, we can learn together! Come talk to me about anything! Games, music, TV, math... we can nerd out together! Looking forward to see you around."
    },
    {
      name: "Matthew",
      position: "Junior Exec",
      imageUrl: "/assets/matthew.jpg",
      bio: "Hello Trivia People, my name is Matthew Prior and I am a first year Poli Sci student with 2 minors, History and Security Studies. I have played trivia competitively throughout Highschool, being on the Bishop Carroll High Reach Team for all 3 years, in my grade 12 year we made nationals and placed 5th in the country. Hope to make new friends and learn more facts with everyone."
    },
    {
      name: "Klevis",
      position: "Junior Exec",
      imageUrl: "/assets/klevis.JPG",
      bio: "Hey, I'm Klevis. I'm a 5th year Business Tech student. I was drawn to trivia club because like Guess the song/flag/animal and kahoot. (My specialty is 2010s pop)"
    },
    {
      name: "Ehsan",
      position: "Junior Exec",
      imageUrl: "/assets/ehsan.jpg",
      bio: "I'm Ehsan, a 2nd year biological sciences student who loves learning facts for the sake of seeming intelligent"
    },
    {
      name: "Drew",
      position: "Junior Exec",
      imageUrl: "/assets/drew.jpeg",
      bio: "Hi there, my names Drew, and I'm a third year biochemistry student as well as a junior executive of the UofC trivia club! I embrace life as a nerd and that includes having random knowledge only useful in the trivia setting. My passions include taking care of animals, reading detective fiction, and drawing. Some of my greatest trivia knowledge is about video games, the 1990's and its pop culture, and science. Can't wait to meet you at one of our trivia events!"
    },
    {
      name: "Matthias",
      position: "Junior Exec",
      imageUrl: "/assets/matthias.png",
      bio: "Hey! I'm a 2nd year Comp Sci student that takes too many photos. In my free time, I enjoy watching F1, combat sports, and a tad bit of hockey. When night skies are clear, I like looking through my telescope."
    },
    {
      name: "Trisha",
      position: "Junior Exec",
      imageUrl: "/assets/trisha.jpg",
      bio: "I'm Trisha and I'm in nursing! I love reading webtoons, hitting the gym, and trivia!"
    },
    {
      name: "Sakura",
      position: "Junior Exec",
      imageUrl: "/assets/sakura.png",
      bio: "Full-time IR student by day, full-time stardew valley gamer by night."
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Executive Team Members | UCalgary Trivia Club</title>
        <meta name="description" content="Meet the dedicated team leading UC Trivia Club and organizing our events and competitions." />
      </Head>

      <SubpageHeader title="Executive Team Members" />
      
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Meet the dedicated team leading UC Trivia Club and organizing our events and competitions.
          </p>
          
          <div className={memberStyles.membersContainer}>
            {currentMembers.map((member, index) => (
              <div key={index} className={memberStyles.memberCard}>
                <div className={memberStyles.memberImageContainer}>
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className={memberStyles.memberPlaceholder}>
                      <span>👤</span>
                    </div>
                  )}
                </div>
                <h3>{member.name}</h3>
                <p className={memberStyles.memberPosition}>{member.position}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MembersPage;
