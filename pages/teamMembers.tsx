import React, { useState } from 'react';

import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import SubpageHeader from '../components/SubpageHeader';
import memberStyles from '../styles/MembershipSection.module.css';
import styles from '../styles/SubpageLayout.module.css';
import teamStyles from '../styles/TeamMembers.module.css';

interface Member {
  name: string;
  position: string;
  imageUrl?: string;
  bio?: string;
  dateJoined?: string;
  dateOfService?: string;
}

interface RoleGroup {
  title: string;
  members: Member[];
}

type TabType = 'executive' | 'software' | 'past' | 'competitive';

const TeamMembersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('executive');

  const executiveMembers: Member[] = [
    {
      name: 'Drew',
      position: 'President',
      imageUrl: '/assets/members/drew.jpeg',
      bio: "Hi there, my names Drew, and I'm a third year biochemistry student as well as a junior executive of the UofC trivia club! I embrace life as a nerd and that includes having random knowledge only useful in the trivia setting. My passions include taking care of animals, reading detective fiction, and drawing. Some of my greatest trivia knowledge is about video games, the 1990's and its pop culture, and science. Can't wait to meet you at one of our trivia events!",
      dateJoined: '2025',
    },
    {
      name: 'Ehsan',
      position: 'VP Events',
      imageUrl: '/assets/members/ehsan.jpg',
      bio: "I'm Ehsan, a 2nd year biological sciences student who loves learning facts for the sake of seeming intelligent",
      dateJoined: '2025',
    },
    {
      name: 'Matthew',
      position: 'Events Team Member',
      imageUrl: '/assets/members/matthew.jpg',
      bio: 'Hello Trivia People, my name is Matthew Prior and I am a first year Poli Sci student with 2 minors, History and Security Studies. I have played trivia competitively throughout Highschool, being on the Bishop Carroll High Reach Team for all 3 years, in my grade 12 year we made nationals and placed 5th in the country. Hope to make new friends and learn more facts with everyone.',
      dateJoined: '2025',
    },
    {
      name: 'Serenity',
      position: 'VP Internal',
      imageUrl: '/assets/members/serenity.jpg',
      bio: 'Hi!!! I am Serenity and I am currently in my second year as a communications student. I am very very bad at trivia…. Yayyy! ( ;´꒳`;)',
      dateJoined: '2025',
    },
    {
      name: 'Guzel',
      position: 'VP External',
      imageUrl: '/assets/UniversityOfCalgaryClubLogo.png',
      bio: 'Coming soon.',
      dateJoined: '2026',
    },
    {
      name: 'Matthias',
      position: 'VP Marketing',
      imageUrl: '/assets/members/matthias.png',
      bio: "Hey! I'm a 2nd year Comp Sci student that takes too many photos. In my free time, I enjoy watching F1, combat sports, and a tad bit of hockey. When night skies are clear, I like looking through my telescope.",
      dateJoined: '2025',
    },
    {
      name: 'Juliana',
      position: 'VP Communications',
      imageUrl: '/assets/UniversityOfCalgaryClubLogo.png',
      bio: 'Coming soon.',
      dateJoined: '2026',
    },
    {
      name: 'Anant',
      position: 'Marketing Team Member',
      imageUrl: '/assets/UniversityOfCalgaryClubLogo.png',
      bio: 'Coming soon.',
      dateJoined: '2025',
    },
    {
      name: 'Dillon',
      position: 'Marketing Team Member',
      imageUrl: '/assets/UniversityOfCalgaryClubLogo.png',
      bio: 'Coming soon.',
      dateJoined: '2025',
    },
    {
      name: 'Saihaan',
      position: 'VP Finance',
      imageUrl: '/assets/members/saihaan.jpg',
      bio: "Hello! My name is Saihaan and I'm a 2nd year CS student! I like playing/watching/arguing soccer, I like coding (sort of have to), and I really enjoy learning about any facts in the world (even though I often forget them quickly. Excited to meet everyone.",
      dateJoined: '2025',
    },
  ];

  const executiveRoleGroups: RoleGroup[] = [
    {
      title: 'President',
      members: executiveMembers.filter(member => member.position === 'President'),
    },
    {
      title: 'Events Team',
      members: executiveMembers.filter(member => member.position.includes('Events')),
    },
    {
      title: 'Communications',
      members: executiveMembers.filter(member => member.position.includes('External') || member.position.includes('Internal')),
    },
    {
      title: 'Finance',
      members: executiveMembers.filter(member => member.position.includes('Finance')),
    },
    {
      title: 'Marketing',
      members: executiveMembers.filter(member => member.position.includes('Marketing') || member.position.includes('Communications')),
    },
  ];

  const softwareTeamMembers: Member[] = [
    {
      name: 'Sharar',
      position: 'Software Lead',
      imageUrl: '/assets/UniversityOfCalgaryClubLogo.png',
      bio: 'Coming Soon',
      dateJoined: '2025',
    },
    {
      name: 'Agastya Parashar',
      position: 'Software Developer',
      imageUrl: '/assets/members/agastya.jpg',
      bio: 'I am Agastya, a first year engineering student and an aspiring software engineer! I enjoy trivia and love learning about random obscure facts. Outside of that I enjoy programming, reading novels, playing all kinds of sports as well as video games.',
      dateJoined: '2025',
    },
    {
      name: 'Saihaan',
      position: 'Software Developer',
      imageUrl: '/assets/members/saihaan.jpg',
      bio: 'Hello! My name is Saihaan and I\'m a 2nd year CS student!',
      dateJoined: '2025',
    },
    {
      name: 'Sofi Tapias',
      position: 'Software Developer',
      imageUrl: '/assets/members/sofi.png',
      bio: 'Hey! I\'m Sofi :) I\'m software engineering student currently on internship. I love Bingo and trivia!!!',
      dateJoined: '2025',
    },
    {
      name: 'Abdel',
      position: 'Software Developer',
      imageUrl: '/assets/members/abdel.jpg',
      bio: 'Hi, I\'m Abdel (Abdelrahman). I\'m a second-year software engineering student, and I like game development',
      dateJoined: '2025',
    },
  ];

  const competitiveMembers: Member[] = [
    {
      name: 'Trebeks',
      position: 'Competitive Team Captain',
      imageUrl: '/assets/RexTriviaMascot.png',
      bio: 'Captain of the competitive trivia team; multiple intercollegiate appearances.',
      dateJoined: '2025',
    },
  ];

  const pastMembers: Member[] = [
    {
      name: 'Chloe',
      position: 'Founding Father & Former President',
      imageUrl: '/assets/members/chloe.png',
      bio: 'I made a trivia club because I love trivia so much! 🤩🤩🤩',
      dateOfService: '2025-2026',
    },
    {
      name: 'Chantae',
      position: 'Former VP Finance & VP External',
      imageUrl: '/assets/members/chantae.png',
      bio: "Amateur trivia enthusiast, whose side job is being a software engineering student 😆. In the 'trivial pursuit' of the perfect trivia team name (suggestions welcome). Looking forward to going to trivia events this year!",
      dateOfService: '2025-2026',
    },
    {
      name: 'Huiying',
      position: 'Former VP Events',
      imageUrl: '/assets/members/huiying.jpeg',
      bio: 'Hey! I\'m in my last semester of software engineering. I like to explore new hobbies in my free time and I joined this club because I enjoy learning random facts everyday!',
      dateOfService: '2025-2026',
    },
    {
      name: 'Typhen',
      position: 'Former VP Marketing',
      imageUrl: '/assets/members/typhen.png',
      bio: 'a chill dude',
      dateOfService: '2025-2026',
    },
    {
      name: 'Sakura',
      position: 'Former Junior VP Marketing',
      imageUrl: '/assets/members/sakura.png',
      bio: 'Full-time IR student by day, full-time stardew valley gamer by night.',
      dateOfService: '2025-2026',
    },
    {
      name: 'Klevis',
      position: 'Former Junior VP Events',
      imageUrl: '/assets/members/klevis.JPG',
      bio: "Hey, I'm Klevis. I'm a 5th year Business Tech student. I was drawn to trivia club because like Guess the song/flag/animal and kahoot. (My specialty is 2010s pop)",
      dateOfService: '2025-2026',
    },
  ];

  const getDisplayMembers = () => {
    switch (activeTab) {
      case 'executive':
        return executiveMembers;
      case 'software':
        return softwareTeamMembers;
      case 'competitive':
        return competitiveMembers;
      case 'past':
        return pastMembers;
      default:
        return executiveMembers;
    }
  };

  const renderMemberCard = (member: Member) => (
    <div key={member.name} className={memberStyles.memberCard}>
      <div className={memberStyles.memberImageContainer}>
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className={activeTab === 'past' ? teamStyles.pastImage : undefined}
            style={{
              objectFit: 'cover',
              objectPosition: member.name === 'Matthew' ? 'top' : 'center',
            }}
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
      {activeTab === 'past' ? (
        <p className={teamStyles.memberMeta}>{member.dateOfService ? `Service: ${member.dateOfService}` : 'Service: —'}</p>
      ) : (
        <p className={teamStyles.memberMeta}>
          Joined: {member.dateJoined ?? '—'}
          {member.dateOfService ? ` • Service: ${member.dateOfService}` : ''}
        </p>
      )}
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Team Members | UCalgary Trivia Club</title>
        <meta name="description" content="Meet the dedicated team leading UC Trivia Club and organizing our events and competitions." />
      </Head>

      <SubpageHeader title="Team Members" />

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Meet the dedicated team leading UC Trivia Club and organizing our events and competitions.
          </p>

          <div className={teamStyles.tabs}>
            <button className={`${teamStyles.tabButton} ${activeTab === 'executive' ? teamStyles.active : ''}`} onClick={() => setActiveTab('executive')}>
              Executive Team
            </button>
            <button className={`${teamStyles.tabButton} ${activeTab === 'software' ? teamStyles.active : ''}`} onClick={() => setActiveTab('software')}>
              Software Team
            </button>
            <button className={`${teamStyles.tabButton} ${activeTab === 'competitive' ? teamStyles.active : ''}`} onClick={() => setActiveTab('competitive')}>
              Competitive Trivia Team
            </button>
            <button className={`${teamStyles.tabButton} ${activeTab === 'past' ? teamStyles.active : ''}`} onClick={() => setActiveTab('past')}>
              Past Members
            </button>
          </div>

          {activeTab === 'executive' ? (
            executiveRoleGroups.map(group => (
              <div key={group.title} className={teamStyles.roleGroup}>
                <h3 className={teamStyles.roleTitle}>{group.title}</h3>
                <div className={memberStyles.membersContainer}>
                  {group.members.map(renderMemberCard)}
                </div>
              </div>
            ))
          ) : (
            <div className={memberStyles.membersContainer}>
              {getDisplayMembers().map(renderMemberCard)}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMembersPage;
